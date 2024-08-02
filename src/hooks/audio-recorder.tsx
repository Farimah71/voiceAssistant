import { useEffect, useRef, useState } from "react";
import { useAudioLoadingType } from "../types/useAudio.type";
import { ResponseModeType } from "../types/response-mode.type";
import { useGetTextResponse } from "../pages/home/core/_request";
import { checkForSpeaker } from "../helpers/check-speaker";

export const useAudio = (responseMode: ResponseModeType) => {
  const audioChunksRef = useRef<Blob[]>([]);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [audioURL, setAudioURL] = useState<string | null>(null);
  const [textResponse, setTextResponse] = useState("");
  const [loading, setLoading] = useState<useAudioLoadingType>({
    isPending: false,
    isListening: false,
    isPlaying: false,
  });

  useEffect(() => {
    if (audioURL) {
      checkForSpeaker();
      setLoading({
        isListening: false,
        isPending: true,
        isPlaying: false,
      });
      if (responseMode == "Audio") {
        const audio = new Audio(audioURL);
        audioRef.current = audio;

        // Plays user's recorded audio after 3 seconds
        const timeout = setTimeout(() => {
          if (audioRef.current) {
            audioRef.current
              .play()
              .catch((error) => console.error("ERROR PLAYING AUDIO:", error));
          }
          setLoading({ isListening: false, isPending: false, isPlaying: true });
        }, 3000);
        audioRef.current.onended = () =>
          setLoading((rest) => ({
            ...rest,
            isPlaying: false,
          }));
        return () => clearTimeout(timeout);
      } else if (responseMode == "Text") {
        fetchTextResponse();
      }
    }
  }, [audioURL]);

  const fetchTextResponse = async () => {
    try {
      const response = await useGetTextResponse();
      setTextResponse(response.message);
    } catch (error) {
      console.error("ERROR FETCHING TEXT RESPONSE", error);
    } finally {
      setLoading({ isListening: false, isPending: false, isPlaying: false });
    }
  };

  const startRecording = async () => {
    try {
      const userStream = await navigator.mediaDevices.getUserMedia({
        audio: true,
      });
      const newMediaRecorder = new MediaRecorder(userStream);
      mediaRecorderRef.current = newMediaRecorder;

      newMediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        } else {
          alert("No Sound Available.");
        }
      };

      newMediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, {
          type: "audio/webm; codecs=opus",
        });
        const audioUrl = URL.createObjectURL(audioBlob);
        setAudioURL(audioUrl);
        audioChunksRef.current = []; // Clear the previous user audio chunks
      };

      newMediaRecorder.start();
      setTextResponse("");
      setLoading({ isPending: false, isPlaying: false, isListening: true });
    } catch (error) {
      alert("No microphone found.");
    }
  };

  const stopRecording = () => {
    if (
      mediaRecorderRef.current &&
      mediaRecorderRef.current.state != "inactive"
    ) {
      mediaRecorderRef.current.stop();
      setLoading({ isPending: true, isListening: false, isPlaying: false });
      setAudioURL(null);
    }
  };

  return { loading, textResponse, startRecording, stopRecording };
};

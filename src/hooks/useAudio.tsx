import { useEffect, useRef, useState } from "react";
import { useAudioLoadingType } from "../types/useAudio.type";
import { ResponseModeType } from "../types/response-mode.type";
import { useGetTextResponse } from "../pages/home/core/_request";
import { checkForSpeaker } from "../helpers/check-speaker";

export const useAudio = (responseMode: ResponseModeType) => {
  // ********** Refs ***********
  const audioChunksRef = useRef<Blob[]>([]);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // ********** States ***********
  const [audioURL, setAudioURL] = useState<string | null>(null);
  const [textResponse, setTextResponse] = useState("");
  const [loading, setLoading] = useState<useAudioLoadingType>({
    isPending: false,
    isListening: false,
    isPlaying: false,
  });

  // ********** Lifecyles ***********
  useEffect(() => {
    if (audioURL) {
      audioResponseHandler();
    }
  }, [audioURL]);

  // ********** Functions ***********
  const startRecording = async () => {
    try {
      const userStream = await navigator.mediaDevices.getUserMedia({
        audio: true, // **Get user's microphone access permission **//
      });
      const newMediaRecorder = new MediaRecorder(userStream);
      mediaRecorderRef.current = newMediaRecorder;

      newMediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data); // **Store user's recorded audio** //
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
        audioChunksRef.current = []; // **Clear the previous user audio chunks** //
      };

      newMediaRecorder.start();
      setTextResponse(""); // **Clear previous assistant response on each record** //
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

  const fetchTextResponse = async () => {
    try {
      const response = await useGetTextResponse();
      response && setTextResponse(response.message);
    } catch (error) {
      console.error("ERROR FETCHING TEXT RESPONSE", error);
    } finally {
      setLoading({ isListening: false, isPending: false, isPlaying: false });
    }
  };

  const audioResponseHandler = () => {
    setLoading({
      isListening: false,
      isPending: true,
      isPlaying: false,
    });
    if (responseMode == "Audio") {
      playAudioResponse();
    } else if (responseMode == "Text") {
      fetchTextResponse(); // **Send a request to assistant API in "Text Response Mode"** //
    }
  };

  const playAudioResponse = () => {
    if (audioURL) {
      checkForSpeaker(); // **Check whether there is a speaker to play audio response** //
      const audio = new Audio(audioURL);
      audioRef.current = audio;

      // **Play user's recorded audio after 3 seconds in "Audio Response Mode" ** //
      const timeout = setTimeout(() => {
        if (audioRef.current) {
          audioRef.current
            .play()
            .catch((error) => console.error("ERROR PLAYING AUDIO:", error));
        }
        setLoading({ isListening: false, isPending: false, isPlaying: true });
      }, 3000);

      audioRef.current.onended = () =>
        setLoading((prev) => ({
          ...prev,
          isPlaying: false,
        }));
      return () => clearTimeout(timeout);
    }
  };

  return { loading, textResponse, startRecording, stopRecording };
};

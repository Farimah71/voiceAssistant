import { useEffect, useRef, useState } from "react";
import { useAudioLoadingType } from "../types/useAudio.type";

export const useAudio = () => {
  const audioChunksRef = useRef<Blob[]>([]);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [audioURL, setAudioURL] = useState<string | null>(null);
  const [loading, setLoading] = useState<useAudioLoadingType>({
    isPending: false,
    isListening: false,
    isPlaying: false,
  });

  useEffect(() => {
    if (audioURL) {
      setLoading({
        isListening: false,
        isPending: true,
        isPlaying: false,
      });
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
    }
  }, [audioURL]);

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
      setLoading({ isPending: false, isPlaying: false, isListening: true });
    } catch (error) {
      alert("No Microphone Was Found!");
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

  return { loading, startRecording, stopRecording };
};

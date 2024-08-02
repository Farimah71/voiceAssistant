export const RecordAudio = async () => {
  const media = await navigator.mediaDevices.getUserMedia({ audio: true });
  const mediaRecorder = new MediaRecorder(media);

  mediaRecorder.start();

  mediaRecorder.ondataavailable = (e) => console.log(e);
};

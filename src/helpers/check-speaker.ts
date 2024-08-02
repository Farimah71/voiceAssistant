export const checkForSpeaker = async () => {
  try {
    const devices = await navigator.mediaDevices.enumerateDevices();
    const audioOutputDevices = devices.filter(
      (device) => device.kind === "audiooutput"
    );

    if (audioOutputDevices.length == 0) {
      console.log("No speakers found.");
      alert("No speaker found. Please check your audio settings.");
    }
  } catch (error) {
    console.error("Error checking for speakers:", error);
    alert("An error occurred while checking for speakers.");
  }
};

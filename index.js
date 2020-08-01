(async function () {
    console.log("hello treasure");
    let localStream;
    try {
        localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        const videoElement = document.getElementById('my-video');
        videoElement.srcObject = localStream;
        videoElement.play()
    } catch (error) {
        alert(error)
    }
})();
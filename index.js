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

    const peer = new Peer({
        key: '3e098f7d-5efa-4b77-b45e-1f817b46755f',
        debug: 3
    })

    peer.on('open', () => {
        document.getElementById('my-id').textContent = peer.id
    })

    document.getElementById('make-call').onclick = () => {
        const theirID = document.getElementById('their-id').value;
        const mediaConnection = peer.call(theirID, localStream);
        setEventListener(mediaConnection)
    }

    const setEventListener = mediaConnection => {
        mediaConnection.on('stream', stream => {
            const videoElement = document.getElementById('their-video');
            videoElement.srcObject = stream;
            videoElement.Play();
        })
    }

    peer.on('open', () => {
        mediaConnection.answer(localStream);
        setEventListener(mediaConnection);
    });
})();
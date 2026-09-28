// landing.js — "See how it works" video modal

(function () {
    const openBtn = document.getElementById("how-it-works-btn");
    const modal = document.getElementById("video-modal");
    const closeBtn = document.getElementById("video-modal-close");
    const frame = document.getElementById("video-modal-frame");

    if (!openBtn || !modal) return;

    function openModal() {
        // Load the video only when opened, so it starts playing now
        frame.src = frame.dataset.src;
        modal.hidden = false;
        document.body.style.overflow = "hidden";
        closeBtn.focus();
    }

    function closeModal() {
        // Removing the src unloads the player, which stops playback
        frame.removeAttribute("src");
        modal.hidden = true;
        document.body.style.overflow = "";
        openBtn.focus();
    }

    openBtn.addEventListener("click", openModal);
    closeBtn.addEventListener("click", closeModal);

    // Clicking the dark overlay (outside the dialog) closes the modal
    modal.addEventListener("click", function (event) {
        if (event.target === modal) closeModal();
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && !modal.hidden) closeModal();
    });
})();

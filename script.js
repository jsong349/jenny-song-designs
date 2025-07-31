document.addEventListener('DOMContentLoaded', function() {
    // Check if the necessary elements exist before running the script
    const modal = document.getElementById('image-modal');
    if (!modal) return; // Exit if there's no modal on the page

    const modalImage = document.getElementById('modal-image');
    const galleryItems = document.querySelectorAll('.gallery-item');
    const closeButton = document.querySelector('.close-button');

    // Function to open the modal
    function openModal(event) {
        modal.style.display = 'block';
        modalImage.src = event.target.src;
    }

    // Function to close the modal
    function closeModal() {
        modal.style.display = 'none';
    }

    // Add click event listeners to all gallery images
    galleryItems.forEach(item => {
        item.addEventListener('click', openModal);
    });

    // Add click event listener to the close button
    if (closeButton) {
        closeButton.addEventListener('click', closeModal);
    }

    // Close the modal if the user clicks outside the image
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Close the modal with the Escape key
    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeModal();
        }
    });
});
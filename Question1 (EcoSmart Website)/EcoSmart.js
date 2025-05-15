// Function to open the modal when the "Buy Now" button is clicked
function openModal() {
    document.getElementById("colorModal").style.display = "flex"; // Show modal
}

// Function to close the modal
function closeModal() {
    document.getElementById("colorModal").style.display = "none"; // Hide modal
}

// Function to update the price based on selected color and options
function updatePrice(basePrice = 750) {
    const engraving = document.getElementById("engraving").checked ? 250 : 0;
    const packaging = document.getElementById("packaging").checked ? 150 : 0;
    const totalPrice = basePrice + engraving + packaging;

    // Update the displayed price
    document.getElementById("price").textContent = totalPrice;
}

// Enable/Disable submit button based on Terms and Conditions checkbox
document.getElementById('terms').addEventListener('change', function() {
    document.getElementById('submitBtn').disabled = !this.checked;
});

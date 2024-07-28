document.addEventListener('DOMContentLoaded', function() {
    // Example of a simple interactive feature
    const purchaseButton = document.querySelector('button');
    if (purchaseButton) {
        purchaseButton.addEventListener('click', function() {
            alert('Merci pour votre achat!');
        });
    }
});

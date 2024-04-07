// Get references to elements
const certificateSelect = document.getElementById('certificateSelect');
const certificateDisplay = document.getElementById('certificateDisplay');

// Event listener for certificate selection
certificateSelect.addEventListener('change', function() {
  // Get selected certificate value
  const selectedCertificate = certificateSelect.value;

  // Set image source based on selected certificate
  let imageUrl;
  switch (selectedCertificate) {
    case  'certificate1':
      imageUrl = 'rohith.jpeg'; // Path to rohith.jpeg
      break;
    case  'certificate2':
      imageUrl = '1211.png'; // Path to certificate 2 image
      break;
    case  'certificate3':
      imageUrl = 'GOT.jpg'; // Path to certificate 3 image
      break;
    // Add cases for more certificates as needed
    default:
      imageUrl = ''; // Default image URL
  }

  // Display certificate image
  if (imageUrl) {
    certificateDisplay.innerHTML = `<img src="${imageUrl}" class="certificate" alt="Certificate">`;
  } else {
    certificateDisplay.innerHTML = ''; // Clear display if no image URL
  }
});

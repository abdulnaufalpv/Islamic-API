let zikrData = [];

// Fetch the Zikr data from your GitHub hosted JSON file
fetch('https://abdulnaufalpv.github.io/Islamic-API/zikr.json')
  .then(response => response.json())
  .then(data => {
    zikrData = data;
    generateZikr(); // Automatically generate the first Zikr after data is loaded
  })
  .catch(error => {
    console.error("Failed to load Zikr data:", error);
    document.getElementById('zikrText').innerText = 
      "Failed to load Zikr data. Please try again later.";
  });

// Function to display a random Zikr from the fetched data
function generateZikr() {
  if (zikrData.length === 0) {
    document.getElementById('zikrText').innerText = "Loading Zikr data...";
    return;
  }

  const randomIndex = Math.floor(Math.random() * zikrData.length);
  const zikr = zikrData[randomIndex];

  document.getElementById('zikrText').innerText = zikr.ZikrInEnglish || 'No Zikr found';
  document.getElementById('zikrArabic').innerText = zikr.ZikrInArabic || 'No Zikr found';
}

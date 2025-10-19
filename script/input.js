const uploadBtn = document.getElementById("uploadBtn");
const fileInput = document.getElementById("fileInput");
const uploadBtn2 = document.getElementById("uploadBtn2");
const fileInput2 = document.getElementById("fileInput2");

uploadBtn.addEventListener("click", () => {
  fileInput.click();
});
uploadBtn2.addEventListener("click", () => {
  fileInput2.click();
});

document.getElementById("mapBtn").addEventListener("click", () => {
  const lat = 23.78055;
  const lng = 90.40960;
  window.open(`https://www.google.com/maps?q=${lat},${lng}`, "_blank");
});

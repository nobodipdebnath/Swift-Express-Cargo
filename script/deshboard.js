
const sections = [
  "overview-section",
  "packages-section",
  "create-section",
  "payment-section",
  "cost-calculator-section",
  "location-section",
  "notification-section",
];

const buttons = ["overview", "packages", "create", "payment", "cost", "location", "notification",];

function showSection(activeBtnId, activeSectionId) {
  sections.forEach((sec) => document.getElementById(sec).classList.add("hidden"));

  document.getElementById(activeSectionId).classList.remove("hidden");

  buttons.forEach((btn) => {
    const el = document.getElementById(btn);
    el.classList.remove("bg", "text-white");
    el.classList.add("text-[#7B7B7B]", "dashboard-btn", "rounded-lg");
  });

  const activeBtn = document.getElementById(activeBtnId);
  activeBtn.classList.remove("dashboard-btn", "text-[#7B7B7B]");
  activeBtn.classList.add("bg", "text-white");
}

buttons.forEach((btn) => {
  document.getElementById(btn).addEventListener("click", (e) => {
    e.preventDefault();
    const sectionId =
      btn === "cost" ? "cost-calculator-section" : `${btn}-section`;
    showSection(btn, sectionId);
  });
});




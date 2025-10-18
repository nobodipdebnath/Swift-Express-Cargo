const sections = [
  "overview-section",
  "packages-section",
  "create-section",
  "payment-section",
  "cost-calculator-section",
  "location-section",
  "notification-section",
  "account-section",
];

const buttons = [
  "overview",
  "packages",
  "create",
  "payment",
  "cost",
  "location",
  "notification",
  "account",
];

function showSection(activeBtnId, activeSectionId) {
  sections.forEach((sec) =>
    document.getElementById(sec).classList.add("hidden")
  );
  document.getElementById(activeSectionId).classList.remove("hidden");

  buttons.forEach((btn) => {
    const el = document.getElementById(btn);
    el.classList.remove("bg", "text-white");
    el.classList.add("text-[#7B7B7B]", "dashboard-btn");
  });

  const activeBtn = document.getElementById(activeBtnId);
  activeBtn.classList.remove("dashboard-btn", "text-[#7B7B7B]");
  activeBtn.classList.add("bg", "text-white");

  document.getElementById("header-text").innerText =
  `${activeBtnId.charAt(0).toUpperCase() + activeBtnId.slice(1)} section`;
}

buttons.forEach((btn) => {
  const buttonEl = document.getElementById(btn);
  if (buttonEl) {
    buttonEl.addEventListener("click", (e) => {
      e.preventDefault();
      const sectionId =
        btn === "cost" ? "cost-calculator-section" : `${btn}-section`;
      showSection(btn, sectionId);
    });
  }
});

document.getElementById("delivery").addEventListener("click", function () {
  document.getElementById("delivery").classList.add("rate1");
  document.getElementById("store").classList.remove("rate1");
  document.getElementById("locker").classList.remove("rate1");
});
document.getElementById("store").addEventListener("click", function () {
  document.getElementById("store").classList.add("rate1");
  document.getElementById("delivery").classList.remove("rate1");
  document.getElementById("locker").classList.remove("rate1");
});
document.getElementById("locker").addEventListener("click", function () {
  document.getElementById("locker").classList.add("rate1");
  document.getElementById("delivery").classList.remove("rate1");
  document.getElementById("store").classList.remove("rate1");
});

const copyButtons = document.querySelectorAll(".copy-btn");

copyButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const targetId = btn.getAttribute("data-target");
    const textEl = document.getElementById(targetId);

    if (textEl) {
      navigator.clipboard
        .writeText(textEl.textContent)
        .then(() => {
          alert(`Copied: "${textEl.textContent}" ✅`);
        })
        .catch((err) => {
          console.error("Failed to copy: ", err);
        });
    }
  });
});

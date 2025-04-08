function updateTime() {
  const timeElement = document.getElementById("time");
  setInterval(() => {
    const now = new Date();
    timeElement.textContent = now.toLocaleTimeString();
  }, 1000);
}
























updateTime();


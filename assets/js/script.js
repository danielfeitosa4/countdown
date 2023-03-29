function updateTimer() {
  const future = Date.parse("dec 31, 2023 23:59:00");
  const now = new Date();
  const diff = future - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const mins = Math.floor(diff / (1000 * 60));
  const secs = Math.floor(diff / 1000);

  const d = days;
  const h = hours - days * 24;
  const m = mins - hours * 60;
  const s = secs - mins * 60;

  document.querySelector(".count")
  .innerHTML = '<div>' + d + '<span> : </span>' + h + '<span> : </span>' + m + '<span> : </span>' + s + '</div>'
}
setInterval('updateTimer()', 1000);
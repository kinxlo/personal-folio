function updateTime() {
    const now = new Date();
}
setInterval(updateTime, 1000);
updateTime();


function updateTime() {
	const now = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDay = days[now.getUTCDay()];
	document.getElementById("utc-time").textContent = now.toUTCString().split(" ")[4];
    document.getElementById("utc-day").textContent = currentDay;
}
setInterval(updateTime, 1000);
updateTime();
// Canvas生成
/** @type {HTMLCanvasElement} canvasタグ */
const canvas = document.getElementById("imgArea");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "#f00";
ctx.fillRect(50, 50, 100, 100);

// Aタグ生成
const a = document.getElementById("download");
canvas.toBlob(blob => {
	a.href = window.URL.createObjectURL(blob)
});

const str = "テキスト";

const blob = new Blob([str], { type: 'text/plain' });

console.log("blob.size：", blob.size);
console.log("blob.type：", blob.type);

/** @type {HTMLElement} Aタグ */
const a = document.getElementById('download');
a.href = window.URL.createObjectURL(blob);
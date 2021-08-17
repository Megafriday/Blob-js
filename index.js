// 3×3のグリッドを作成 --- (*1)
const g = document.querySelector('#g')
const items = []
for (let i = 0; i < 9; i++) {
	const e = document.createElement('button')
	e.innerHTML = '？'
	e.onclick = () => { // クリックした時の処理 --- (*2)
		const msg = prompt('アイデアは?')
		if (!msg) { return }
		e.innerHTML = msg.replace('&', '&amp;')
			.replace('>', '&gt;').replace('<', '&lt;')
	}
	if (i == 4) { e.className = 'center' }
	g.appendChild(e)
	items.push(e)
}

// 保存リンクでデータをダウンロード --- (*3)
const save = document.querySelector('#save')
save.onclick = (e) => {
	const m = items.map(i => i.innerHTML)
	const text = m.join('\n')
	const blob = new Blob([text], { 'type': 'text/plain' })
	save.href = URL.createObjectURL(blob)
};

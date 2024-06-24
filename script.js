//your JS code here. If required.
let table = document.getElementById("output")
for (let i = 0; i < 2; i++) {
	let tr = document.createElement("tr")
	tr.id = "loading"
	let td = document.createElement("td")
	td.textContent = "Loading..."
	td.setAttribute("colspan",2)
	tr.appendChild(td)
	table.appendChild(tr)
}
function myPromises() {
    let startTime = Date.now();

    return new Promise((resolve, reject) => {
        let delay = Math.floor(Math.random() * 3000) + 1000;
        setTimeout(() => {
            let endTime = Date.now();
            let timeTaken = (endTime - startTime) / 1000; // convert to seconds
            resolve(timeTaken);
        }, delay);
    });
}

// create an array of promises
let promises = [myPromises(), myPromises(), myPromises()];

// use Promise.all to wait for all promises to resolve
Promise.all(promises).then((times) => {
	table.textContent = ""
	times.map((element,index)=>{
		let tr = document.createElement("tr")
		let td1 = document.createElement("td")
		let td2 = document.createElement("td")
		td1.textContent = `Promise ${index+1}`
		td2.textContent = Math.floor(element)
		tr.appendChild(td1)
		tr.appendChild(td2)
		table.appendChild(tr)
		
	})
	let tr = document.createElement("tr")
	let td1 = document.createElement("td")
	let td2 = document.createElement("td")
	td1.textContent = "Total"
	td2.textContent = (times[0]+times[1]+times[2]).toFixed(3)
	tr.appendChild(td1)
	tr.appendChild(td2)
	table.appendChild(tr)
});
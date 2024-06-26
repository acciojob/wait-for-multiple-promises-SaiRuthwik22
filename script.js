//your JS code here. If required.
let table = document.getElementById("output")
table.innerHTML=`
<tr id="loading">
	<td colspan="2">Loading...</td>
</tr>`
function myPromises() {
    let startTime = Date.now();

    return new Promise((resolve, reject) => {
        let delay =Math.floor(Math.random() * 3000) + 1000;
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
const startTime = performance.now();
Promise.all(promises).then((times) => {
	  const endTime = performance.now();
	  const timeTaken = (endTime - startTime)/1000;
	table.innerHTML = ""
	table.innerHTML=`
	<tr>
		<td>Promise 1</td>
		<td>${Math.floor(times[0])}</td>
	</tr>
		<tr>
		<td>Promise 2</td>
		<td>${Math.floor(times[1])}</td>
	</tr>
		<tr>
		<td>Promise 3</td>
		<td>${Math.floor(times[2])}</td>
	</tr>
		<tr>
		<td>Total</td>
		<td>${timeTaken}</td>
	</tr>
	`
});
/*function getBle() {
	console.log('bite');
	navigator.bluetooth.requestDevice(acceptAllDevices)
	.then(device => {
		console.log(device)
		console.log('> Nom:              ' + device.name);
		console.log('> Id:               ' + device.id);
		console.log('> Connecté:         ' + device.gatt.connected);
	})
	.catch(error => {
		console.log('--->' + error);
	});
}*/

function insertInJson (varLoc , state){
	dateTemp = new Date().toLocaleString();
	user = { "pos": varLoc, "date": dateTemp, "state": state};

	dataTemp = JSON.stringify(user);

	fs.writefile('dataTemp.json', dataTemp, (err) => {
		if (err) {
			throw err;
		}
		console.log("JSON sauvé");
	})
}

function placeJson (){
}
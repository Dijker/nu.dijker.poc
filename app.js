'use strict';

const Homey = require('homey');
//const HomeyAPI = require('atom-api');

class MyApp extends Homey.App {
	async onInit() {
		this.log('MyApp is running...');
		let allFlows = await this.getFlows();
		console.log(allFlows);
	}
	getApi() {
		if (!this.api) {
			this.api = HomeyAPI.forCurrentHomey();
		}
		return this.api;
	}
	async getFlows (){
			const api = await this.getApi();
			allFlows = await api.flow.getFlows();
			return allFlows;
	}
}

module.exports = MyApp;

Homey.ManagerSettings.on( 'set', ( args, callback ) => {
	console.log('logAllFlows ' + args );
})

/*
```async onInit(){
let allFlows = await this.getFlows()
console.log(allFlows)
}*/

'use strict';

const Homey = require('homey');
const { HomeyAPI } = require('athom-api');
var allFlows;

class MyApp extends Homey.App {
	async onInit() {
		process.on('unhandledRejection', error => {
            console.error(error.stack);
        })
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
*/

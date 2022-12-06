const { defineConfig } = require('cypress');

const fs = require('fs');
const path = require('path');

module.exports = defineConfig({
	fixturesFolder: './src/fixtures',
	modifyObstructiveCode: false,
	video: false,
	videosFolder: '../../dist/applications/redeye-e2e/videos',
	screenshotsFolder: '../../dist/applications/redeye-e2e/screenshots',
	failOnStatusCode: false,
	experimentalWebKitSupport: true,
	viewportWidth: 1920,
	viewportHeight: 1080,
	reporter: '../../node_modules/cypress-multi-reporters',
	reporterOptions: {
		configFile: './reporter-config.json',
	},
	retries: {
		runMode: 1,
	},
	e2e: {
		setupNodeEvents(on, config) {
			on('task', {
				// ===== task to use node 'fs' (filesystem) to read directory=====
				readdir({ dirPath }) {
					return new Promise((resolve, reject) => {
						try {
							const dirData = fs.readdirSync(dirPath);
							resolve(dirData);
						} catch (e) {
							reject(e);
						}
					});
				},
				// ===== task to use node 'fs' (filesystem) to delete downloaded files from cypress/downloads
				deleteDownloads({ dirPath }) {
					fs.readdir(dirPath, (err, files) => {
						for (const file of files) {
							fs.unlink(path.join(dirPath, file), (err) => {
								console.log('Removed ' + file);
							});
						}
					});
					return null;
				},
			});
		},
		specPattern: './src/integration/**/*.cy.js',
		supportFile: './src/support/index.js',
		excludeSpecPattern: '*.skip.js',
		defaultCommandTimeout: 15000,
	},
});

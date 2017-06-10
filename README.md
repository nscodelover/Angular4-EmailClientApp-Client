To run client application:

1. Install Node.js platform, npm command should be available after that
2. [Setup npm package manager for Kendo UI components](http://www.telerik.com/kendo-angular-ui/getting-started/)
3. Install application certificate (`server.crt` file)
4. Run `npm run install-start` to install, build and run prod version, or `npm run install-start-dev` to install, build and run dev version
5. After you will see message `Server is running on port: 4200` you can input in your browser this url: https://localhost:4200
6. If you need to change server port, you can to do it in `./env.json` file (based on `./src/env.example.js`)

If you want to change frontend url you need to configure it in backend config (`env.js`)
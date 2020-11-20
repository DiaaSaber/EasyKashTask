# EasyKashTask


To run this project
Clone it first

run: npm install
run: npm start

Open another terminal

run: cd angular-app

run: npm install
run: npm start

Open browser and enter localhost:4200

To retrieve transactions, press on Get Transactions button
Press on page numbers or next to use the pagination option 

To change query parameters using fronted: go to angular-app/src/app/services/random-user.service.ts and change per_page, seller_id parameters in th url on line 15

To change query parameters through the endpoint directly using backend only: Type in browser url localhost:3000/listall?seller_id=1&page=1&per_page=10 and change parameters as you'd like


Concerning the testing part,
Due to limited timeframe I was only able to write and execute 1 test unit

Test unit for the backend to check response status of endpoint :

run: npm test

Should return a success

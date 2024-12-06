//Vi hade tekniska problem med backend, vi behövde göra ändringar men var tvugna att ändra tillbaka sen. 
//Sedan fungerade allting igen och testet gick igenom! 
import express from 'express';
import path from 'path';
//import { fileURLToPath } from 'url';
const app = express();
const port = 4000;

////Vi fick ändra tillbaka till den gamla koden för att få det att fungera igen då det uppstod problem med Timeout
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);


// log all request to the server
app.use((req, res, next) => {
  next();
  console.log(req.url);
});

// proxy willys
app.get('/api/*', async (req, res) => {
  res.json(await (await fetch(`https://www.willys.se${req.url.slice(4)}`)).json())
});

// Category tree: /api/leftMenu/categorytree
// Category list: /api/c/kott-chark-och-fagel/palagg?size=30&page=0&sort=
// [topRated, name-asc,name-desc,price-asc,price-desc,compareprice-asc,compareprice-desc]
// Product info:  /api/axfood/rest/p/101290312_ST

// serve built application (dist folder)




////Vi fick ändra tillbaka till den gamla koden för att få det att fungera igen då det uppstod problem med Timeout

const distFolder = path.join(import.meta.dirname, '..', 'dist');
//const distFolder = "../dist";





app.use(express.static(distFolder));
app.get('*', (req, res) => {


  //Vi fick ändra tillbaka till den gamla koden för att få det att fungera igen då det uppstod problem med Timeout

  res.sendFile(path.join(distFolder, 'index.html'));
  //res.sendFile(path.resolve(__dirname, "../dist", 'index.html'));




});


// start server
app.listen(port, () => console.log('Backend listening on port 4000'));
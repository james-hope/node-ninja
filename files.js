const fs = require("fs");
fs.readFile("./docs/blog1.txt", (error, data) => {
  if (error) {
    console.log(error);
  }
  console.log(data.toString());
  fs.writeFile('./docs/blog1.txt', 'Hello James, I was expecting you', () => {
    console.log('your file was successfully written')
  })
}); 

// fs.mkdir('./assets', (err) => {
//   if (err){
//     console.log(err)
//   }
//   console.log('folder created');
// });

// fs.rmdir('./assets', (err) => {
//   if (err){
//     console.log(err)
//   }
//   console.log('folder deleted')
// })

if(fs.existsSync('./docs/deleteme.txt')){  //jeśli plik deleteme.txt istnieje, to ...
  fs.unlink('./docs/deleteme.txt', (err) => {
    if(err) {
      console.log(err)
    }
    console.log('file deleted successfully')
  })
}

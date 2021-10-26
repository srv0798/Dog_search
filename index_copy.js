const fs = require("fs");
const superagent = require("superagent");

// like declaring a function
const readFilePro = (file) => {
  /*file is the argument for the arrow function defined. Value returned is stored in const readFileProd*/

  return new Promise((resolve, reject) => {
    /* resolve / reject is the argument for calling function promise  */

    fs.readFile(file, (err, data) => {
      if (err) reject("File not found ");
      resolve(data);
    });
  });
};

//like declaring a function
const writeFilePro = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, (err) => {
      //if (err) reject("File could not be created ");
      resolve("Success");
    });
  });
};
function getAPI(data) {
  console.log(`Breed: ${data}`);

  return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
}

async function tmp() {
  try {
    const data = await readFilePro(`${__dirname}/dog.txt`);
    const res1 = await superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    const res2 = await writeFilePro("dog-image2.txt", res1.body.message);
  } catch (err) {
    console.log(err);
  }
}
tmp();

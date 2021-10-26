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
      if (err) reject("File could not be created ");
      resolve("Success");
    });
  });
};

// using await
const getDogPic = async () => {
  try {
    data = await readFilePro(`${__dirname}/dog.txt`);
    console.log(`Breed: ${data}`);
    res = await superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    await writeFilePro("dog-image.txt", res.body.message);
    console.log(`Output File Created `);
  } catch (err) {
    console.log(err);
  }
};

getDogPic();

//calling the promise declaring function
/* readFilePro(`${__dirname}/dog.txt`)
  .then((data) => {
    console.log(`Breed: ${data}`);

    return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
  })
  .then((res) => {
    //console.log(res.body.message);
    return writeFilePro("dog-image.txt", res.body.message);
  })
  .then(() => {
    console.log(`Output File Created `);
  })
  .catch((err) => {
    console.log(err);
  }); */

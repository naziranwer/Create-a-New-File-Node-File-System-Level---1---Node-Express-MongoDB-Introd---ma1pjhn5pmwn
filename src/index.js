const fs = require("fs/promises");
const fileName = "myfile.txt";
const fileContent = "Newton School";
const writeFile = async (fileName, fileContent) => {
  // write code here
  // dont change function name
  try{
     await fs.writeFile(fileName,fileContent);
  }
  catch(error){
       console.error(error);
  }
};

module.exports = { writeFile };

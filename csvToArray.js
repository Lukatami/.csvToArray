let csvIn =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

let csvString = csvIn.split("\n");

csvArray0 = csvString[0].split(",");
csvArray1 = csvString[1].split(",");
csvArray2 = csvString[2].split(",");
csvArray3 = csvString[3].split(",");
csvArray4 = csvString[4].split(",");

let csvArrays = [csvArray0, csvArray1, csvArray2, csvArray3, csvArray4];

console.log("Given .csv to Array: " + "\n" + csvArrays);

csvArray0 = csvArray0.toString();
csvArray0 = csvArray0.toLowerCase();
csvArray0 = csvArray0.split(",");

let newArray0 = {
  [csvArray0[0]]: csvArray1[0],
  [csvArray0[1]]: csvArray1[1],
  [csvArray0[2]]: csvArray1[2],
  [csvArray0[3]]: csvArray1[3],
};
let newArray1 = {
  [csvArray0[0]]: csvArray2[0],
  [csvArray0[1]]: csvArray2[1],
  [csvArray0[2]]: csvArray2[2],
  [csvArray0[3]]: csvArray2[3],
};
let newArray2 = {
  [csvArray0[0]]: csvArray3[0],
  [csvArray0[1]]: csvArray3[1],
  [csvArray0[2]]: csvArray3[2],
  [csvArray0[3]]: csvArray3[3],
};
let newArray3 = {
  [csvArray0[0]]: csvArray4[0],
  [csvArray0[1]]: csvArray4[1],
  [csvArray0[2]]: csvArray4[2],
  [csvArray0[3]]: csvArray4[3],
};

let newArrays = [newArray0, newArray1, newArray2, newArray3];

console.log("Given .csv to New Array of Objects: ")
console.log(newArrays);

newArrays.pop(1);

console.log("New Array of Objects after removing last Object: ")
console.log(newArrays);

newArrays.splice(1, 0, {id: "48", name: "Barry", occupation: "Runner", age: "25"});

console.log("New Array of Objects after adding (1 index) new Object: ")
console.log(newArrays);

newArrays.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });

console.log("New Array of Objects after adding to the end a new Object: ")
console.log(newArrays);

let ageSum = 0;

for (let i = 0; i < newArrays.length; i++) {
  ageSum += Number(newArrays[i].age);
}

let ageAverage = ageSum / (newArrays.length);

console.log("Average age: " + ageAverage + " years (" + newArrays.length + " persons)" );

let backToCsv = "";

for (let i = 0; i < csvArray0.length; i++) {
  backToCsv += csvArray0[i];
  if (i < csvArray0.length - 1) {
    backToCsv += ",";
  }
}
backToCsv += "\n";

for (let i = 0; i < newArrays.length; i++) {
  let row = "";
  for (let j = 0; j < csvArray0.length; j++) {
    row += newArrays[i][csvArray0[j]];
    if (j < csvArray0.length - 1) {
        row += ",";
    }
  }
  backToCsv += row + "\n";
}

console.log("New Array of Objects back to .csv: " + "\n" + "\n" + backToCsv);

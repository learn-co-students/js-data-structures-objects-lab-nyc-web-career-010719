// Write your solution in this file!

const driver = {}

function updateDriverWithKeyAndValue(driver, key, value){
  return Object.assign({},  driver, { [key]: value })
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  // return driver["key"] = value
    return Object.assign(driver, { [key]: value })
}

function deleteFromDriverByKey(driver, key){
  const newdriver = Object.assign({},  driver);
  console.log(newdriver)

  delete newdriver[key];
  console.log(newdriver)
  return newdriver;
  // newdriver
  // return newdriver;

}

function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver[key]
  return driver
}

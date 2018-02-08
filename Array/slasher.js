function slasher(arr, howMany) {
  // it doesn't always pay to be first
  return arr.slice(arr.splice(0,howMany));
}

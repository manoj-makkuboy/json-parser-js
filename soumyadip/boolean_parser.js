function myBooleanparser(string) {
  var bool = (function() {
    switch (false) {
      case string.toLowerCase() !== 'true':
        console.log(true)
        return true;
      case string.toLowerCase() !== 'false':
        console.log(false)
        return false;
    }
  })();
  if (typeof bool === "boolean") {
    return bool;
  }
  return void 0;
}

console.log(typeof myBooleanparser("true"))

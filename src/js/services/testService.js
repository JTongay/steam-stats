function TestService(){

  console.log("this is the test service");
  this.something = "booyah"
  this.doIt = function(){
    console.log(this.something);
  }

}

module.exports = TestService

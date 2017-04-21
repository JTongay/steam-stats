// import app from '../../app'

// app.component('home', {
//   template: `<h1>Hello There from the home component. {{$ctrl.user.name}}</h1>`,
//   controller: function(){
//     this.user = {name: "World"}
//   }
// })

// export default app

import testService from '../../services/testService'
import testService2 from '../../services/testService2'

export default class HomeComponent {

  constructor($scope, testService, testService2){
    this.name = "Hello there"
    this.testService = testService
  }

  changeName(){
    this.name = "Hello there got changed to this"
  }

  logIt(){
    this.testService.doIt()
  }

}

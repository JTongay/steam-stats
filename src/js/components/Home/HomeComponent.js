// import app from '../../app'

// app.component('home', {
//   template: `<h1>Hello There from the home component. {{$ctrl.user.name}}</h1>`,
//   controller: function(){
//     this.user = {name: "World"}
//   }
// })

// export default app

export default class HomeComponent {

  constructor(){
    this.name = "Hello there"
  }

  changeName(){
    this.name = "Hello there got changed to this"
  }

}

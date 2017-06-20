export default class Nav {

  constructor(){
    this.isOpen = true;
  }

  closeNav() {
    this.isOpen = !this.isOpen
    console.log(this.isOpen);
  }

  openNav() {
    this.isOpen = !this.isOpen
    console.log(this.isOpen);
  }


}

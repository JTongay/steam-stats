export default class Nav {

  constructor(){
    this.isOpen = false;
  }

  closeNav() {
    this.isOpen = !this.isOpen
  }

  openNav() {
    this.isOpen = !this.isOpen
  }


}

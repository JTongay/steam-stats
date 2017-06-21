export default class Nav {

  constructor(){
    this.isOpen = true;
  }

  closeNav() {
    this.isOpen = !this.isOpen
  }

  openNav() {
    this.isOpen = !this.isOpen
  }


}

import HomeComponent from './HomeComponent'


describe('Landing Page Tests', function () {

  let homeComponent;
  const title = element.all(by.tagName('h1')).get(0);

  beforeEach(()=>{
    homeComponent = new HomeComponent()
    browser.get('http://localhost:1234')
  })

  // beforeEach(angular.module('app', []))

  it('should pass the test', function () {
    expect(true).toBe(true);
  })

  it('should greet the user', function () {
    expect(homeComponent.name).toBe(`Hello there`);
  })
  it('should also greet the user', function () {
    expect(title.getText()).toBe(`Hello there`);
  })





})

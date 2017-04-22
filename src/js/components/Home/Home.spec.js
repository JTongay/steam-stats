import HomeComponent from './HomeComponent'


describe('Landing Page Tests', function () {

  let homeComponent;
  const title = element.all(by.tagName('h1')).get(0);
  const changeTextButton = element.all(by.tagName('button')).get(0);

  beforeEach(()=>{
    homeComponent = new HomeComponent()
    browser.get('http://localhost:1234')
  })

  it('should pass the test', function () {
    expect(true).toBe(true);
  })
  it('should greet the user', function () {
    expect(homeComponent.name).toBe(`Hello there`);
  })
  it('should also greet the user', function () {
    expect(title.getText()).toBe(`Hello there`);
  })
  it('should also greet the user when you click the button', function () {
    changeTextButton.click()
    expect(title.getText()).toBe(`Hello there got changed to this`);
  })





})

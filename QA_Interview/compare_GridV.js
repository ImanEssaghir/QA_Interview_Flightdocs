describe('Filter and Add Items to Cart', function() {

  beforeEach(function() {
    browser.waitForAngularEnabled(false); 
  });

  it('Navigate to URL', function() {
    browser.get('http://automationpractice.com/index.php');
    expect(browser.getCurrentUrl()).toBe("http://automationpractice.com/index.php");
    browser.sleep(3000);
  });

  it('Click on dresses tab and ensure Grid view', function(){ 
    //element.all(by.xpath('//*[@id="block_top_menu"]/ul/li[2]/a')).click();
    element(by.partialLinkText('DRESSES')).click();
    expect(element(by.css('.cat-name')).getText()).toBe('DRESSES ');
    element.all(by.id("grid")).click();
    expect(element(by.css('[id="grid"]')).getText()).toBe('Grid');
    browser.sleep(3000);
  });

  // Hover over and Click Add to compare button for at least 2 different items
  it('Click Add to Compare for items ', function(){
    /*browser.actions().mouseMove( element(by.css('a[title="Printed Dress"]')).click()).perform();
    expect(element(by.css('a[title="Printed Dress"]')).isDisplayed()).toBeTruthy();
    browser.sleep(1000);
    expect(element(by.css('.add_to_compare')).getText()).toBe('checked');*/

    element.all(by.xpath('//*[@id="center_column"]/ul/li[1]/div/div[3]/div[2]/a')).click();
    browser.sleep(1000);
    element.all(by.xpath('//*[@id="center_column"]/ul/li[3]/div/div[3]/div[2]/a')).click();
    browser.sleep(1000);
    expect(element(by.css('[class="total-compare-val"]')).getText()).toBe('2');
    browser.sleep(3000);

  });

  it('Click on the Compare button and validate the content of the Product Comparison Page', function(){
    element.all(by.xpath('//*[@id="center_column"]/div[3]/div[2]/form/button/span')).click();
    expect(element(by.css('.page-heading')).getText()).toBe('PRODUCT COMPARISON');
    browser.sleep(3000);    
  });

  it('Click Add to cart for one of the items', function(){
    // Choose the first item - random -
    //element(by.partialLinkText('Add to cart')).click();  
    element(by.css('a[title="Add to cart"]')).click();  
    // Continue Shopping and Proceed to checkout
    expect(element(by.cssContainingText('.button', 'Continue shopping')));
    expect(element(by.cssContainingText('.button', 'Proceed to checkout')));
    browser.sleep(1000);
   // Product successfully added to your shopping cart
    expect(element(by.tagName('h2')).getText()).toEqual('Product successfully added to your shopping cart');
    browser.sleep(3000);
    
  });

  it('Click Proceed to checkout button', function(){
    //element.all(by.xpath('//*[@id="layer_cart"]/div[1]/div[2]/div[4]/span/span')).click();
    element(by.partialLinkText('Proceed to checkout')).click(); 
    browser.sleep(2000);
    expect(element(by.id('total_price')).getText()).toBe('$28.00');
    browser.sleep(3000); 

  });

});
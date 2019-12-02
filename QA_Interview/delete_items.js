describe('Filter and Add Items to Cart', function() {
  
  beforeEach(function() {
    browser.waitForAngularEnabled(false); 
  });
    
  it('Navigate to URL', function() {
    browser.get('http://automationpractice.com/index.php');
    expect(browser.getCurrentUrl()).toBe("http://automationpractice.com/index.php");
    browser.sleep(3000);
    
  });

  it('Add items to cart and validate it from the dropdown', function(){
      element(by.partialLinkText('Blouse')).click();  
      // Change quantity to 2 by entering text
      element.all(by.id('quantity_wanted')).clear();
      element.all(by.id('quantity_wanted')).sendKeys(2);
      // Add item to cart and Continue shopping
      element.all(by.id('add_to_cart')).click();   
      browser.sleep(3000);
      // Continue shopping
      element(by.css('.button-container .icon-chevron-left')).click();
      browser.sleep(3000);
      // Select and add white blouse to cart
      element.all(by.id('color_8')).click();
      element.all(by.id('add_to_cart')).click();   
      browser.sleep(3000);
      element(by.css('.button-container .icon-chevron-left')).click();
      browser.sleep(3000);
      // Check the word 'Cart' display
      expect(element(by.css('#header > div:nth-child(3) > div > div > div:nth-child(3) > div > a > b')).getText()).toEqual('Cart');
      browser.sleep(2000);
      // Check that the number of products in the cart is 2
      expect(element(by.css('.shopping_cart .ajax_cart_quantity')).getText()).toEqual('4');
      browser.sleep(3000);

  });

  it('Hover over the x button and click it to remove an item', function(){
      browser.actions().mouseMove( element(by.css('.shopping_cart'))).perform();
      browser.sleep(3000);
      expect(element(by.css('a[title="View my shopping cart"]')).isDisplayed()).toBeTruthy();
      browser.sleep(3000);
      element(by.css('.remove_link .ajax_cart_block_remove_link')).click();
      //expect(element(by.css('.remove_link .ajax_cart_block_remove_link')).getText()).toEqual('');
      browser.sleep(3000);
      expect(element(by.css('.shopping_cart .ajax_cart_quantity')).getText()).toEqual('2');
      browser.sleep(3000);
    
  });
    
  it('Validate the content of the cart dropdwn', function(){
    // Check that the remaining item is correct
    expect(element(by.css('a[title="Blouse"]')).isDisplayed()).toBeTruthy();
    // Check the total price: 27 * 2 + 2 = 56 
    expect(element(by.css('.cart-prices .cart_block_total')).getText()).toEqual('$56.00');
    browser.sleep(3000);
        
  });

});
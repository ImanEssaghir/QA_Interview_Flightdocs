describe('Filter and Add Items to Cart', function() {

  beforeEach(function() {
    browser.waitForAngularEnabled(false); 
  });

  it('Navigate to URL', function() {
    browser.get('http://automationpractice.com/index.php');
    expect(browser.getCurrentUrl()).toBe("http://automationpractice.com/index.php");
    browser.sleep(3000);
    
  });

  it('Click on dresses tab', function(){
    //element.all(by.xpath('//*[@id="block_top_menu"]/ul/li[2]/a')).click();
    element(by.partialLinkText('DRESSES')).click();
    expect(element(by.css('.cat-name')).getText()).toBe('DRESSES ');
      
  });

  it('Change view to List view', function(){
    element.all(by.id("list")).click();
    expect(element(by.css('[id="list"]')).getText()).toBe('List');
    browser.sleep(3000);
    
  });

  // Click Add to Compare for at least 2 different items
  it('Click Add to Compare for items', function(){
    //element.all(by.xpath('//*[@id="center_column"]/ul/li[1]/div/div/div[3]/div/div[3]/div[2]/a')).click();
    element(by.css('.compare .add_to_compare')).click();
    browser.sleep(1000);
    element.all(by.xpath('//*[@id="center_column"]/ul/li[2]/div/div/div[3]/div/div[3]/div[2]/a')).click(); 
    browser.sleep(2000);
    //expect(element(by.css('input[value="2"]')).getText()).toBe('');
    expect(element(by.css('[class="total-compare-val"]')).getText()).toBe('2');
    browser.sleep(3000);
  
  });

  it('Click on the Compare button', function(){
    //element(by.css('.right')).click();
    //element(by.partialLinkText('Compare')).click();
    element.all(by.xpath('//*[@id="center_column"]/div[3]/div[2]/form/button/span')).click();
    expect(element(by.css('.page-heading')).getText()).toBe('PRODUCT COMPARISON');
    browser.sleep(3000);
    
  });
/*  Keeps changing the value of the expected toBe output in each run
  it('Validate the content of the Product Comparison Page', function(){
    expect(element(by.css('.comparison_feature_odd')).getText()).toBe('Compositions');
    browser.sleep(3000);

    expect(element(by.xpath(' //*[@id="product_comparison"]/tbody/tr[4]/td[1]')).getText()).toBe('Styles');
    // Item 1
    expect(element(by.xpath('//*[@id="product_comparison"]/tbody/tr[2]/td[2]')).getText()).toBe('Cotton');
    expect(element(by.xpath('//*[@id="product_comparison"]/tbody/tr[4]/td[2]')).getText()).toBe('Girly');
    expect(element(by.xpath('//*[@id="product_comparison"]/tbody/tr[3]/td[2]')).getText()).toBe('Colorful Dress');
    // Item 2
    expect(element(by.xpath('//*[@id="product_comparison"]/tbody/tr[2]/td[3]')).getText()).toBe('Viscose');
    expect(element(by.xpath('//*[@id="product_comparison"]/tbody/tr[4]/td[3]')).getText()).toBe('Dressy');
    expect(element(by.xpath('//*[@id="product_comparison"]/tbody/tr[3]/td[3]')).getText()).toBe('Short Dress');

    //expect(element(by.css('.comparison_infos .product-3')).getText()).toBe('Styles');
    //class="comparison_feature_odd comparison_infos product-3"
    //expect(element(by.tagName('td')).getText()).toBe('Colorful Dress');
    
  });*/

 it('Click Add to cart for one of the items', function(){
    /* Choose a specific item 
    element.all(by.xpath('//*[@id="product_comparison"]/tbody/tr[1]/td[2]/div[5]/div/div/a[1]/span')).click();*/
    // Choose the first item - random -
    // element(by.partialLinkText('Add to cart')).click();  

    element(by.css('a[title="Add to cart"]')).click();  
    // Continue Shopping and Proceed to checkout
    expect(element(by.cssContainingText('.button', 'Continue shopping')));
    expect(element(by.cssContainingText('.button', 'Proceed to checkout')));
    browser.sleep(1000);
   // Product successfully added to your shopping cart
    expect(element(by.tagName('h2')).getText()).toEqual('Product successfully added to your shopping cart');
    browser.sleep(3000);
    
  });

  it('Click the Continue Shopping button', function(){
    //element.all(by.xpath('//*[@id="layer_cart"]/div[1]/div[2]/div[4]/span/span')).click();
    element(by.cssContainingText('.button', 'Continue shopping')).click();
    expect(element(by.css('.page-heading')).getText()).toBe('PRODUCT COMPARISON');
    browser.sleep(3000);
    
  });

});
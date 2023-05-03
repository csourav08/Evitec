/// reference typres="Cypres" />

describe('Amazon Dropdown Test', {includeShadowDom: true},() => {
    it('should select the "Books" option from the dropdown menu', () => {
      cy.visit('https://www.amazon.com/')
      cy.get('#twotabsearchtextbox').click().type('Gardening Books') //working
      cy.get('#nav-search-submit-button').click()  //working



        cy.get('.s-result-list .s-result-item').each(($item) => {
        const title = $item.find('.a-text-normal').text()
        if (title.includes('Almanac ') && $item.find('.a-price-whole').length > 0) {
          expect(title).to.include('Almanac')
          return false 
        }
      })
   



    })

})

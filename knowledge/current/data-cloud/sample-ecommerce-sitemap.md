---
title: "Sample Ecommerce Sitemap"
domain: data-cloud
topic: sample-ecommerce-sitemap
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:13.443Z
estimatedTokens: 59
keywords: [Sample, Ecommerce, Sitemap, Review, Profile, Events]
---

# Sample Ecommerce Sitemap

> Review this sample sitemap.

# Sample Ecommerce Sitemap

Review this sample sitemap.

## Example

```

```

## Sample for Profile Events

To implement profile events like Identity, ContactPointEmail, and ContactPointPhone refer this example.

## Example

```

```

## Code Examples

```apex
SalesforceInteractions.init({
  consents: new Promise(resolve => {
    const { OptIn, OptOut } = SalesforceInteractions.ConsentStatus
    const purpose = SalesforceInteractions.ConsentPurpose.Tracking
    const provider = 'Test Provider'
    
    // user clicks button that grants consent
    document.getElementById('opt-in')
      .addEventListener(
        'click', 
        () => resolve([{ purpose, provider, status: OptIn }]), 
        { once: true }
      )

    // user clicks button that revokes consent
    document.getElementById('opt-out')
      .addEventListener(
        'click', 
        () => resolve([{ purpose, provider, status: OptOut }]), 
        { once: true }
      )
  })
}).then(() => {
  // set the log level during sitemap development to see potential problems
  SalesforceInteractions.log.level = 'debug'

  const { 
    cashDom,
    listener, 
    resolvers,
    sendEvent,
    util,
    CartInteractionName,
    CatalogObjectInteractionName,
    OrderInteractionName,
  } = SalesforceInteractions

  const global = {
    listeners: [
      // capture email address when a user signs up
      listener('submit', '.user-signup-form', (actionEvent) => {
        const emailAddress = cashDom("#user_email").val()
        if (emailAddress) {
          sendEvent({ 
            interaction: {
              name: 'Email Sign Up'
            },
            user: {
              attributes: { 
                email: emailAddress,
                eventType: 'contactPointEmail' }
            }
          })
        }
      })
    ],
    
    // attach optional data to every actionEvent that is sent out
    onActionEvent: (actionEvent) => {
      const email = window && window._userInfo && window._userInfo.email
      if (email) {
          actionEvent.user = actionEvent.user || {}
          actionEvent.user.attributes = actionEvent.user.attributes || {}
          actionEvent.user.attributes.emailAddress = email
      }
      return actionEvent
    }
  }

  const productIdResolver = resolvers.fromSelectorAttribute('.product', 'data-id')
  
  const productPage = {
    name: 'product',
    isMatch: () => /products/.test(window.location.pathname),
    // capture the product being viewed when the page is opened
    interaction: {
      name: CatalogObjectInteractionName.ViewCatalogObject,
      catalogObject: {
        type: 'Product',
        id: productIdResolver,
        attributes: {
          name: resolvers.fromSelector('.product-title'),
          url: resolvers.fromHref(),
          imageUrl: resolvers.fromSelectorAttribute('.product img', 'src')
        },
        relatedCatalogObjects: {
          Color: resolvers.fromSelectorAttributeMultiple('.color-value', 'data-attr-value')
        }
      }
    },
    listeners: [
      // capture when the user adds this product to their cart
      listener('click', '.add-to-cart', () => {
        sendEvent({
          interaction: {
            name: CartInteractionName.AddToCart,
            lineItem: {
              catalogObjectType: 'Product',
              catalogObjectId: productIdResolver(),
              quantity: parseInt(cashDom('.product .quantity input').val(), 10),
              price: parseFloat(cashDom('.product .price').text().trim())
            }
          }
        })
      }),
      // capture when the user shares the product to social media
      listener('click', '.share', () => {
        sendEvent({
          interaction: {
            name: CatalogObjectInteractionName.ShareCatalogObject,
            catalogObject: {
              type: 'Product',
              id: productIdResolver()
            }
          }
        })
      })
    ]
  }

  const cartPage = {
    name: 'Cart',
    isMatch: () => /^\/cart/.test(window.location.href),
    listeners: [
      // capture when a user removes an item from their cart
      listener('click', '.remove-from-cart', (event) => {
        const $cartItem = cashDom(event.target).parents('.cart-item').first()
        sendEvent({
          interaction: {
            name: CartInteractionName.RemoveFromCart,
            lineItem: {
              catalogObjectType: 'Product',
              catalogObjectId: $cartItem.attr('data-id'),
              quantity: parseInt($cartItem.find('.quantity').text().trim(), 10),
            }
          }
        })
      })
    ]
  }

  const orderConfirmationPage = {
    name: 'Order Configuration',
    isMatch: /\/confirmation/.test(window.location.href),
    // capture when a user completes an order
    interaction: {
      name: OrderInteractionName.Purchase,
      order: {
        id: resolvers.fromSelectorAttribute('.order', 'data-id'),
        totalValue: parseFloat(resolvers.fromSelector('.order .total').trim()),
        lineItems: () => cashDom('.order .line-items').map((index, el) => {
          const $lineItem = cashDom(el)
          return {
            catalogObjectType: 'Product',
            catalogObjectId: $lineItem.attr('data-id'),
            quantity: parseInt($lineItem.find('.quantity').text().trim(), 10)
          }
        })
      }
    }
  }

  const pageTypeDefault = {
    name: 'default'
  }
  
  SalesforceInteractions.initSitemap({
    global,
    pageTypeDefault,
    pageTypes: [cartPage, orderConfirmationPage, productPage]
  })
})
```

```
SalesforceInteractions.listener('click', '#register', () => {
        SalesforceInteractions.reinit()
        const email = window.email
        const phone = window.phonenumber
        const firstname = window.firstname
        const lastname = window.lastname

        if (email) {
          SalesforceInteractions.sendEvent({
            user: {
              attributes: {
                email: email,
                eventType: 'contactPointEmail'

              }
            }
          })
        }
        if (phone) {
          SalesforceInteractions.sendEvent({
            user: {
              attributes: {
                phoneNumber: phone,
                eventType: 'contactPointPhone'
              }
            }
          })
        }
        SalesforceInteractions.sendEvent({
          user: {
            attributes: {
              firstName: firstname || '',
              lastName: lastname || '',
              eventType: 'identity',
              isAnonymous: 0
            }
          }
        })
      })
```

---
title: "Create a Cart and Cart Item with Custom Fields in a Commerce Store"
domain: apex-guide
topic: create-a-cart-and-cart-item-with-custom-fields-in-a-commerce-store
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:34.293Z
estimatedTokens: 454
keywords: [Cart, Item, Custom, Commerce, Store, buyer, guest, user]
---

# Create a Cart and Cart Item with Custom Fields in a Commerce Store

> Create a cart with a cart item using custom fields for a buyer or guest user in your
  Commerce store.

# Create a Cart and Cart Item with Custom Fields in a Commerce Store

Create a cart with a cart item using custom fields for a buyer or guest user in your Commerce store.

Custom fields are optional and must be previously defined for the WebCart and CartItem sObjects. See [Create Custom Fields](https://help.salesforce.com/s/articleView?id=platform.adding_fields.htm&type=5&language=en_US). Field-level security rules from the [shopper profile](https://help.salesforce.com/s/articleView?id=commerce.comm_create_shopper_profile.htm&type=5&language=en_US) are applied to the WebCart and CartItem custom fields. The rules are applied for registered shoppers and for the guest shopper profile.

To create a cart with custom fields, call [createCart(webstoreId, cartInput)](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_CommerceCart_static_methods.htm#apex_ConnectAPI_Commerce_createCart_1). Specify your custom fields using the customFields property of cartInput. The type for customFields is List<SObject>, where the sObject is a WebCart.

Then, to add an item to the cart, call [addItemToCart(webstoreId, effectiveAccountId, activeCartOrId, cartItemInput, currencyIsoCode)](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_CommerceCart_static_methods.htm#apex_ConnectAPI_CommerceCart_addItemToCart_9). You can specify custom fields using the customFields property of cartItemInput. Again, the type of customFields is List<SObject>, but the sObject must be a CartItem.

In this scenario we assume that further customization sets a custom field within the [Cart Calculate API](https://developer.salesforce.com/docs/commerce/salesforce-commerce/guide/cart-calculate-api.html) flow onto the cart item for further use.

```

```

## Code Examples

```apex
ID webStoreId = '0ZEOL000000063r4AA';
    ID accountId = '001OL000002LC0qYAG';
    ID productId = '01tOL000000ETzuYAG';

    List<SObject> webCartList = new List<SObject>();
    WebCart webCart = new WebCart();
    webCart.webCartCustomTextField__c = 'webCartCustomFieldValue';
    webCartList.add(webCart);
        
    final ConnectApi.CartInput cartInput = new ConnectApi.CartInput();
    cartInput.effectiveAccountId = accountId;
    cartInput.name = 'Cart With Custom Fields';
    cartInput.customFields = webCartList;

    // create a cart
    ConnectApi.CartSummary cartSummary = ConnectApi.CommerceCart.createCart(webStoreId, cartInput);

    ID cartId = cartSummary.cartId;

    // Given
    List<SObject> cartItemList = new List<SObject>();
    CartItem cartItem = new CartItem();
    cartItem.cartItemCustomNumberField__c = 12.34;
    cartItemList.add(cartItem);

    final ConnectApi.CartItemInput input = new ConnectApi.CartItemInput();
    input.productId = productId;
    input.quantity = '2';
    input.type = ConnectApi.CartItemType.Product;
    input.customFields = cartItemList;

    // add an item to the previously created cart
    ConnectApi.CartItem itemResult = ConnectApi.CommerceCart.addItemToCart(webStoreId, accountId, cartId, input, 'USD');

    // response contains all (accessible) custom fields for which data was set
    CartItem cartItemResult = (CartItem)itemResult.customFields[0];
    // the value from request (if not changed during flow)
    Double valueFromRequest = cartItemResult.cartItemCustomNumberField__c;
    // an additional customization value, e.g. set by the cart calculation flow
    String valueForCustomization = cartItemResult.additionalCustomField__c;
```

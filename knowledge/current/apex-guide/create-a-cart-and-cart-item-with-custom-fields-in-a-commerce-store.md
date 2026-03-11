---
title: "Create a Cart and Cart Item with Custom Fields in a Commerce Store"
domain: apex-guide
topic: create-a-cart-and-cart-item-with-custom-fields-in-a-commerce-store
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:47.826Z
keywords: [Create, Cart, Item, Custom, Fields, Commerce, Store]
---

# Create a Cart and Cart Item with Custom Fields in a Commerce Store

# Create a Cart and Cart Item with Custom Fields in a Commerce Store

Create a cart with a cart item using custom fields for a buyer or guest user in your Commerce store.

Custom fields are optional and must be previously defined for the WebCart and CartItem sObjects. See [Create Custom Fields](https://help.salesforce.com/s/articleView?id=platform.adding_fields.htm&type=5&language=en_US). Field-level security rules from the [shopper profile](https://help.salesforce.com/s/articleView?id=commerce.comm_create_shopper_profile.htm&type=5&language=en_US) are applied to the WebCart and CartItem custom fields. The rules are applied for registered shoppers and for the guest shopper profile.

To create a cart with custom fields, call [createCart(webstoreId, cartInput)](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_CommerceCart_static_methods.htm#apex_ConnectAPI_Commerce_createCart_1). Specify your custom fields using the customFields property of cartInput. The type for customFields is List<SObject>, where the sObject is a WebCart.

Then, to add an item to the cart, call [addItemToCart(webstoreId, effectiveAccountId, activeCartOrId, cartItemInput, currencyIsoCode)](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_CommerceCart_static_methods.htm#apex_ConnectAPI_CommerceCart_addItemToCart_9). You can specify custom fields using the customFields property of cartItemInput. Again, the type of customFields is List<SObject>, but the sObject must be a CartItem.

In this scenario we assume that further customization sets a custom field within the [Cart Calculate API](https://developer.salesforce.com/docs/commerce/salesforce-commerce/guide/cart-calculate-api.html) flow onto the cart item for further use.

```

```
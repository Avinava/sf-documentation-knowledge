---
title: "Commerce Webstore Cart, Evaluate Shipping"
domain: chatterapi
topic: commerce-webstore-cart-evaluate-shipping
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.217Z
estimatedTokens: 422
keywords: [Commerce, Webstore, Cart, Evaluate, Shipping, costs]
---

# Commerce Webstore Cart, Evaluate Shipping

> Evaluate the shipping costs for a cart.

# Commerce Webstore Cart, Evaluate Shipping

Evaluate the shipping costs for a cart.

Resource

```

```

Values for activeCartOrId are:

-   cartId—ID of the cart.
-   active—Active cart. This value should only be used for authenticated users.
-   current—Cart that isn’t closed or pending deletion. Available in version 50.0 and later.

Available version

63.0

HTTP methods

POST

Request body for POST

Root XML tag

cartEvaluateShippingInput

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| customFields | sObject Attributes Input[] | Array of sObjects and custom fields for the sObjects. Standard fields are ignored. The custom fields must already be defined for the sObject. Currently, the WebCart, CartItem, and CartDeliveryGroup sObjects are supported. Field-level security rules from the shopper profile are applied to the custom fields. The rules are applied for registered shoppers and for the guest shopper profile. See Create a Cart and Cart Item with Custom Fields in a Commerce Store. | Optional | 63.0 |
| shippingAddress | Cart Shipping Address Input | Shipping address for a cart. | Required | 63.0 |

Request parameters for POST

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| effective​AccountId | String | ID of the account for which the request is made. If unspecified, defaults to the account ID for the context user. | Optional | 63.0 |

Response body for POST

[Cart Summary Result](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_cart_summary_result.htm "Result of calculating a cart.")

## Code Examples

```
/commerce/webstores/${webstoreId}/carts/${activeCartOrId}/actions/evaluate-shipping
```

```
{
  "customFields": [
     {
       "attributes": {
         "type": "WebCart"
       },
       "WebCartCustomField1__c": "Foo"
     },
     {
       "attributes": {
         "type": "CartItem"
       },
       "id": "0a9xx0000000002CI1",
       "CartItemCustomField1__c": "CI1_Field1Value",
       "CartItemCustomField2__c": "CI1_Field2Value"
     },
     {
       "attributes": {
         "type": "CartItem"
       },
       "id": "0a9xx0000000002CI2",
       "CartItemCustomField1__c": "CI2_Field1Value",
       "CartItemCustomField2__c": "CI2_Field2Value"
     },
     {
       "attributes": {
         "type": "CartDeliveryGroup"
       },
       "id": "0a7xx000000000CDG1",
       "CartDeliveryGroupCustomField1__c": "CDG1_Field1Value",
       "CartDeliveryGroupCustomField2__c": "CDG1_Field2Value"
     }
   ],
  "shippingAddress": {
    "name": "Alan Johnson",
    "firstName": "Alan",
    "id": "0a6xx0000000000",
    "lastName": "Johnson",
    "region": "CA",
    "country": "US",
    "city": "San Francisco",
    "street": "415 Mission St",
    "postalCode": "94105"
  }
}
```

## Related Topics

- sObject
                        Attributes Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_sobject_attributes_input.htm)
- Cart Summary Result (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_cart_summary_result.htm)

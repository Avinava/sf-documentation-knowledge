---
title: "Commerce Webstore Checkout"
domain: chatterapi
topic: commerce-webstore-checkout
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.328Z
estimatedTokens: 1969
keywords: [Commerce, Webstore, Checkout, store]
---

# Commerce Webstore Checkout

> Get, delete, or update a Commerce store checkout.

# Commerce Webstore Checkout

Get, delete, or update a Commerce store checkout.

If a store is segmented into markets, this API looks at the language parameter appended to the URL to determine the shopper’s locale and returns the appropriate values.

Resource

```

```

Resource example

```

```

Available version

55.0

If you want to use this resource with a WebStore of type B2CE, open a case with Salesforce Support and provide this information:

-   Salesforce organization ID
-   Tenant ID (You can find this ID on the Manage Cloud-to-Cloud Connections page in Setup)
-   B2C Commerce Business Manager login URL
-   B2C Commerce site IDs

HTTP methods

DELETE, GET, PATCH

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

During the checkout process, you must make a GET request to /commerce/webstores/webstoreId/checkouts/activeOrCheckoutId or /commerce/webstores/webstoreId/checkouts/checkoutId at least once after making a PATCH request to /commerce/webstores/webstoreId/checkouts. We recommend continuously polling the GET request until the API returns a 200 OK status, indicating that the response is ready for consumption.

To resolve a [409](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/connect_error_responses.htm) error returned on a PATCH or DELETE request, retry your request until it returns a 2xx status with updated data. To avoid returning a 409 error on PATCH or DELETE requests, make sure that you don’t have any custom code that modifies the cart or a checkout session while calling PATCH or DELETE.

Path parameter for DELETE, GET, and PATCH

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| webstoreId | String | The ID of the web store. | Required | 55.0 |
| activeOrCheckoutId | String | Values for activeOrCheckoutId are:checkoutId—ID of the checkout.active—Active checkout. | Required | 55.0 |

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| effective​AccountId | String | ID of the account for which the request is made. If unspecified, defaults to the account ID for the context user. | Optional | 51.0 |

Response for DELETE

[204: Successful Delete](atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm "The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred.")

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

A DELETE request clears all payment information for the checkout, including WebCart.BillingAddress.

Request body for PATCH

Keep these considerations in mind when you use the PATCH API:

-   Must include data for only one sub-resource in a single call, such as contact information (contactInfo), shipping information (deliveryAddress, desiredDeliveryDate, and shippingInstructions), or delivery method (deliveryMethodId). The request fails if the request includes any of the following combinations:
    -   deliveryAddress and deliveryMethodId
    -   desiredDeliveryDate and deliveryMethodId
    -   shippingInstructions and deliveryMethodId
    -   desiredDeliveryDate and contactInfo
    -   shippingInstructions and contactInfo
    -   deliveryMethodId and contactInfo
-   The PATCH request triggers Cart Calculate API (CCA) when updates are made using the deliveryAddress, desiredDeliveryDate, deliveryMethod, or custom fields. CCA then performs cart calculations by executing the following default services: promotions, post-shipping, shipping, and taxes. For more details, see CCA. [See Cart Calculate API](https://developer.salesforce.com/docs/commerce/salesforce-commerce/guide/cart-calculate-api.html).

Root XML tag

<checkout>

JSON examples

Here’s an example of a request including contact information and Cart custom fields:

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

The PATCH request fails if it includes contact information with Cart Delivery Group custom fields or with both Cart and Cart Delivery Group custom fields.

```

```

Here’s an example of a request including delivery method and custom fields:

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

A PATCH request that includes deliveryMethodId clears all payment information for the checkout, including WebCart.BillingAddress.

```

```

Here’s an example of a request including shipping information (deliveryAddress, desiredDeliveryDate, and shippingInstructions) and custom fields:

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

The PATCH request fails if it includes only shipping instructions along with custom fields for either Cart or Cart Delivery Group.

```

```

Here’s an example of a request including shipping information (deliveryAddress, desiredDeliveryDate, and shippingInstructions) without custom fields:

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

Any combination of these three sub-resources is valid if custom fields aren’t included in the request.

```

```

Here’s an example of a request for a guest user, including contact information and delivery address:

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| contactInfo | Contact Information Input | Contact information for the checkout. | Optional | 55.0 |
| customFields | sObject Attributes Input[] | Array of sObjects with respective custom fields. Currently, custom fields are supported on WebCart and CartDeliveryGroup entities. You can specify up to 21 sObjects in the array: one WebCart and multiple CartDeliveryGroups.Field-level security rules from the shopper profile are applied to the custom fields. The rules are applied for registered shoppers and for the guest shopper profile.You can specify this property only if you specify at least one other property. For example, you can set custom fields in PATCH checkouts when you specify the guest contact information or a delivery method (in addition to setting the delivery address).The custom fields can be of type Checkbox, Currency, Date, Email, LongTextArea, Number, Percent, Phone, Text, TextArea, Url, Address, or Location. We currently don’t support updating the country and state fields through customFields as part of the address update using request. Instead, specify the countryCode and stateCode.Use the yyyy-MM-dd format to specify date fields.Use the yyyy-MM-ddTHH:mm:ss.SSS+/-HH:mm or yyyy-MM-ddTHH:mm:ss.SSSZ formats to specify dateTime fields. When a timezone is added to a UTC dateTime, the result is the date and time in that timezone.Use the HH:mm.ss.SSS or HH:mm.ss.SSSZ formats to specify time fields. When a timezone is added to a UTC time, the result is the time in that timezone.The customFields property isn't supported in stores built on an Aura template. | Optional | 60.0 |
| delivery​Address | Checkout Address Input | Shipping address for the checkout. | Optional | 55.0 |
| delivery​MethodId | String | Delivery method ID for the checkout.When Shipping is disabled for your web store, updation of delivery method isn’t supported. | Optional | 55.0 |
| desired​Delivery​Date | String | Desired delivery date for the checkout. | Optional | 55.0 |
| shipping​Instructions | String | Special shipping instructions for the checkout. | Optional | 55.0 |

Response body for GET and PATCH

[Checkout](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_checkout.htm "Checkout for a Commerce store.")

## Code Examples

```
https://yourInstance.salesforce.com/services/data/66.0/commerce/webstores/0ZESG000001n96S4AQ/checkouts/2z9R000000008LfIAI
```

```
{
  "contactInfo": {
    "firstName": "Alan",
    "lastName": "Johnson",
    "email": "al**@jo*****.com",
    "phoneNumber": "******3944"
  },
  "customFields": [
    {
      "attributes": {
        "type": "WebCart"
      },
      "Id": "0a6xx0000000000",
      "MyCustomTextField__c": "Foo",
      "MyCustomNumberField__c": 12.34,
      "MyCustomPercentField__c": 0.2345,
      "MyCustomGeolocationField__c": {
        "latitude": 33.345,
        "longitude": 45.567
      }
    }
  ]
}
```

```
{
  "deliveryMethodId": "7cdLT000000EzA5YAK",
  "customFields": [
    {
      "attributes": {
        "type": "WebCart"
      },
      "Id": "0a6xx0000000000",
      "MyCustomTextField__c": "Foo",
      "MyCustomNumberField__c": 12.34,
      "MyCustomPercentField__c": 0.2345,
      "MyCustomGeolocationField__c": {
        "latitude": 33.345,
        "longitude": 45.567
      }
    },
    {
      "attributes": {
        "type": "CartDeliveryGroup"
      },
      "Id": "0a7SB000000oBujYAE",
      "MyCustomTextField__c": "Bar",
      "MyCustomNumberField__c": 4.55,
      "MyCustomPhoneField__c": "******1212",
      "MyCustomAddressField__c": {
        "street": "100 Folsom Street",
        "city": "San Francisco",
        "state": "California", //This field isn't currently supported in custom fields.
        "stateCode": "US_CA",
        "postalCode": "93555",
        "country": "United States", //This field isn't currently supported in custom fields.
        "countryCode": "US",
        "geocodeAccuracy": "City",
        "latitude": 34,
        "longitude": 85.9
      }
    }
  ]
}
```

```
{
  "deliveryAddress": {
    "name": "Alan Johnson",
    "firstName": "Alan",
    "lastName": "Johnson",
    "region": "CA",
    "country": "US",
    "city": "San Francisco",
    "street": "415 Mission St",
    "postalCode": "94105"
  },
  "desiredDeliveryDate": "2021-05-28T16:41:41.090Z",
  "shippingInstructions": "type code 1234 on gate keypad",
  "customFields": [
    {
      "attributes": {
        "type": "WebCart"
      },
      "Id": "0a6xx0000000000",
      "MyCustomTextField__c": "Foo",
      "MyCustomNumberField__c": 12.34,
      "MyCustomPercentField__c": 0.2345,
      "MyCustomGeolocationField__c": {
        "latitude": 33.345,
        "longitude": 45.567
      }
    },
    {
      "attributes": {
        "type": "CartDeliveryGroup"
      },
      "Id": "0a7SB000000oBujYAE",
      "MyCustomTextField__c": "Bar",
      "MyCustomNumberField__c": 4.55,
      "MyCustomPhoneField__c": "******1212",
      "MyCustomAddressField__c": {
        "street": "100 Folsom Street",
        "city": "San Francisco",
        "state": "California", //This field isn't currently supported in custom fields.
        "stateCode": "US_CA",
        "postalCode": "93555",
        "country": "United States", //This field isn't currently supported in custom fields.
        "countryCode": "US",
        "geocodeAccuracy": "City",
        "latitude": 34,
        "longitude": 85.9
      }
    }
  ]
}
```

```
{
  "deliveryAddress": {
    "name": "Alan Johnson",
    "firstName": "Alan",
    "lastName": "Johnson",
    "region": "CA",
    "country": "US",
    "city": "San Francisco",
    "street": "415 Mission St",
    "postalCode": "94105"
  },
  "desiredDeliveryDate": "2021-05-28T16:41:41.090Z",
  "shippingInstructions": "type code 1234 on gate keypad"
}
```

## Related Topics

- 204: Successful Delete (atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm)
- Contact Information Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_checkout_contact_info_input.htm)
- sObject Attributes Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_sobject_attributes_input.htm)
- Checkout Address Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_checkout_address_input.htm)
- Checkout (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_checkout.htm)

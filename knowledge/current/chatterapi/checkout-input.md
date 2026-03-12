---
title: "Checkout Input"
domain: chatterapi
topic: checkout-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:11.263Z
estimatedTokens: 960
keywords: [Checkout, Input, Commerce, store]
---

# Checkout Input

> Input for a Commerce store checkout.

# Checkout Input

Input for a Commerce store checkout.

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

## Code Examples

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

```
{
  "contactInfo": {
    "firstName": "Alan",
    "lastName": "Johnson",
    "email": "al**@jo*****.com",
    "phoneNumber": "******3944"
  },
  "deliveryAddress": {
    "name": "Alan Johnson",
    "firstName": "Alan",
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

- Contact Information Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_checkout_contact_info_input.htm)
- sObject Attributes Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_sobject_attributes_input.htm)
- Checkout Address Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_checkout_address_input.htm)

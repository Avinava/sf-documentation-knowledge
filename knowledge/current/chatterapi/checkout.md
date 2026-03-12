---
title: "Checkout"
domain: chatterapi
topic: checkout
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:17.657Z
estimatedTokens: 385
keywords: [Checkout, Commerce, store]
---

# Checkout

> Checkout for a Commerce store.

# Checkout

Checkout for a Commerce store.

JSON examples

Here’s an example for POST.

```

```

Here’s an example for PUT when delivery methods and delivery groups are present.

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| cart​Summary | Cart Summary Information | Summary details of a cart. | Small, 61.0 | 61.0 |
| checkout​Id | String | ID for the checkout. | Small, 55.0 | 55.0 |
| contact​Info | Contact Info | Information for a guest contact. | Small, 55.0 | 55.0 |
| custom​Fields | SObject[] | Array of sObjects and viewable custom fields for the sObjects. Currently, only the WebCart and CartDeliveryGroup sObjects are supported. The custom fields can be of type Checkbox, Currency, Date, Email, LongTextArea, Number, Percent, Phone, Text, TextArea, or Url.The supported format for dateTime fields is yyyy-MM-​ddTHH:mm:ss.SSSZ.The supported format for time fields is HH:mm.ss.SSSZ.The customFields property isn't supported in stores built on an Aura template. | Small, 62.0 | 62.0 |
| delivery​Groups | Delivery Group Collection | Available delivery group for checkout. | Big, 55.0 | 55.0 |
| errors | Checkout Error[] | List of errors, if any, for the checkout. | Small, 55.0 | 55.0 |
| orderReference​Number | String | Globally unique identifier (GUID) of the payment order generated after successful completion of a payment request. | Small, 61.0 | 61.0 |
| status​Code | String | HTTP response code for the request. | Small, 57.0 | 57.0 |

## Code Examples

```
{
  "checkoutId": "2z9R000000008LfIAI"
}
```

```
{
  "checkoutId": "2z9R000000008LfIAI",
  "deliveryGroups": {
    "count": 1,
    "items": [
      {
        "deliveryAddress": {
          "name": "Alan Johnson",
          "firstName": "Alan",
          "lastName": "Johnson",
          "region": "CA",
          "country": "US",
          "city": "San Francisco",
          "street": "415 Mission St",
          "companyName": "Salesforce",
          "postalCode": "94105"
        },
        "availableDeliveryMethods": [
          {
            "id": "2Dmxx0000004CFVCA2",
            "name": "Delivery Method 1",
            "shippingFee": "3.14",
            "currencyIsoCode": "USD",
            "carrier": "UPS",
            "classOfService": "Same day UPS Ground"
          },
          {
            "id": "2Dmxx0000005DEWDB3",
            "name": "Delivery Method 2",
            "shippingFee": "2.03",
            "currencyIsoCode": "USD",
            "carrier": "UPS",
            "classOfService": "Next day UPS Ground"
          }
        ],
        "id": "0a7xx0000000000CA2",
        "isDefault": true,
        "name": "Default Delivery",
        "desiredDeliveryDate": "2021-05-28T16:41:41.090Z",
        "shippingInstructions": "type code 1234 on gate keypad",
        "customFields": [
          {
            "attributes": {
              "type": "CartDeliveryGroup"
            },
            "MyCustomTextField__c": "Text",
            "MyCustomNumberField__c": 12345,
            "MyCustomPhoneField__c": "4145551212",
            "MyCustomAddressField__c": {
              "street": "415 Mission St",
              "postalCode": "94105",
              "city": "San Francisco",
              "state": "California",
              "stateCode": "US_CA",
              "country": "United States",
              "countryCode": "US",
              "geocodeAccuracy": "City",
              "latitude": 34,
              "longitude": 85.9
            }
          }
        ]
      }
    ]
  },
  "customFields": [
    {
      "attributes": {
        "type": "WebCart"
      },
      "MyCustomTextField__c": "Text",
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

## Related Topics

- Cart
                  Summary Information (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_cart_summary.htm)
- Contact
                  Info (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_contact_info.htm)
- Delivery Group Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_delivery_group_collection.htm)
- Checkout
                  Error (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_checkout_error.htm)

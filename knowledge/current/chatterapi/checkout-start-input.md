---
title: "Checkout Start Input"
domain: chatterapi
topic: checkout-start-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.288Z
estimatedTokens: 445
keywords: [Checkout, Start, Input, Commerce, store, cart]
---

# Checkout Start Input

> Input to start a Commerce store checkout for a cart.

# Checkout Start Input

Input to start a Commerce store checkout for a cart.

Root XML tag

<checkoutStart>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| cartId | String | ID of a cart, or the value active, which indicates that the checkout operation should use the active cart. | Required | 55.0 |
| customFields | sObject Attributes Input | Array of sObjects with their respective custom fields. Currently, custom fields are supported on the WebCart and CartDeliveryGroup entities. You can specify up to 21 sObjects in the array: one WebCart and multiple CartDeliveryGroups.Field-level security rules from the shopper profile are applied to the custom fields. The rules are applied for registered shoppers and for the guest shopper profile.The custom fields can be of type Checkbox, Currency, Date, Email, LongTextArea, Number, Percent, Phone, Text, TextArea, Url, Address, or Location. We currently don’t support updating the country and state fields through customFields as part of the address update using request. Instead, specify the countryCode and stateCode.Use the yyyy-MM-dd format to specify date fields.Use the yyyy-MM-ddTHH:mm:ss.SSS+/-HH:mm or yyyy-MM-ddTHH:mm:ss.SSSZ formats to specify dateTime fields. When a timezone is added to a UTC dateTime, the result is the date and time in that timezone.Use the HH:mm.ss.SSS or HH:mm.ss.SSSZ formats to specify time fields. When a timezone is added to a UTC time, the result is the time in that timezone.The customFields property isn't supported in stores built on an Aura template. | Optional | 62.0 |
| delivery​AddressInput | Checkout Start Address Input | Address data used for the delivery address. | Optional | 61.0 |

## Code Examples

```
{
  "cartId": "0a6456789012345AAA",
  "customFields": [
    {
      "attributes": {
        "type": "WebCart"
      },
      "CartCustomNumberField__c": 1,
      "CartCustomTextField__c": "Text1"
    },
    {
      "attributes": {
        "type": "CartDeliveryGroup"
      },
      "CdgDistrict__c": "District1",
    },
    {
      "attributes": {
        "type": "CartDeliveryGroup"
      },
      "id": "0a7xx000000006TAAQ",
      "CdgWardField__c": 8
    }
  ]
}
```

## Related Topics

- sObject
                        Attributes Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_sobject_attributes_input.htm)
- Checkout
                        Start Address
                      Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_checkout_start_address_input.htm)

---
title: "sObject Attributes Input"
domain: chatterapi
topic: sobject-attributes-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.853Z
estimatedTokens: 276
keywords: [sObject, Attributes, Input, Custom]
---

# sObject Attributes Input

> Custom fields for an sObject.

# sObject Attributes Input

Custom fields for an sObject.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| attributes | String | Type of sObject, specified in the form {”type”: “<sobject_type>”}. | Required | 60.0 |
| <custom_field> | String | One or more custom fields, and the Id property of an sObject whose type is specified in the attributes property. For example, if you specified WebCart as the sObject type, you would specify a WebCart Id as the value of the Id property.If you specify an Id, you must set the Id value to the Id of the WebCart or a CartDeliveryGroup in the current checkout session.If you omit the Id property, custom fields are set on the current WebCart or the default CartDeliveryGroup.The custom fields can be of type Checkbox, Currency, Date, Email, LongTextArea, Number, Percent, Phone, Text, TextArea, Url, Address, or Location. Custom fields don’t support updating the country and state fields of an Address. Instead, specify the countryCode and stateCode. | Required | 60.0 |

## Code Examples

```
{
      "attributes": {
        "type": "WebCart"
      },
      "Id": "0a6xx0000000000",
      "MyCustomTextField__c": "Foo",
      "MyCustomNumberField__c": 12.34,
      "MyCustomPercentField__c" : 0.2345,
      "MyCustomGeolocationField__c": {
        "latitude": 33.345,
        "longitude": 45.567
      }
    }
```

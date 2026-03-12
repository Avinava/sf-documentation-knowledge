---
title: "Commerce Address Field Input"
domain: chatterapi
topic: commerce-address-field-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.308Z
estimatedTokens: 153
keywords: [Commerce, Address, Input, custom]
---

# Commerce Address Field Input

> Commerce address field input. This is used to reference custom fields for the
      address.

# Commerce Address Field Input

Commerce address field input. This is used to reference custom fields for the address.

Root XML tag

<commerceAddressField>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| dataName | String | The name of the custom address field. | Required | 54.0 |
| text | String | The value of the custom address field. | Optional | 54.0 |

#### See Also

-   [Commerce Address Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_commerce_address_input.htm "Commerce address input.")

## Code Examples

```
{
     "dataName" : "options__c", 
     "text" : "alpha"
}
```

## Related Topics

- Commerce Address Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_commerce_address_input.htm)

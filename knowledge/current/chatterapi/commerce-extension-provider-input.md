---
title: "Commerce Extension Provider Input"
domain: chatterapi
topic: commerce-extension-provider-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.328Z
estimatedTokens: 274
keywords: [Commerce, Extension, Provider, Input, point]
---

# Commerce Extension Provider Input

> An extension provider for an Commerce extension point.

# Commerce Extension Provider Input

An extension provider for an Commerce extension point.

Root XML tag

<ProviderInputRepresentation>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| name | String | Unique name of the extension provider. | Required | 59.0 |
| epn | String | Extension point name (unique identifier for an extension). For valid values, see the RegisteredExternalService object's ExtensionPointName field. | Required | 59.0 |
| type | String | Type of extension (for example, apexClass). | Required | 59.0 |
| configUrl | String | Reserved for future use. | Optional | 59.0 |
| iconUri | String | Reserved for future use. | Optional | 59.0 |
| description | String | Description of the provider. | Required | 59.0 |
| isApplication | String | Indicates if the extension provider is contained within a managed package. (true) or not (false). | Required | 59.0 |
| apexClass | Commerce Extension Provider Apex Class Input | Apex class for the extension provider. | Required | 59.0 |

## Code Examples

```
{
  "name": "UltimateInventory",
  "epn": "Commerce_Domain_Inventory_Service",
  "type": "apexClass",
  "description": "Extension provider for ultimate inventory.",
  "isApplication": true,
  "apexClass": {
    "classId": "0ZExx000000003FGAQ",
    "className": "UltimateSoftwareSalesforceInventoryServiceExtension"
  }
}
```

## Related Topics

- Commerce Extension Provider Apex Class
                      Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_commerce_apex_extension_provider_class_input.htm)

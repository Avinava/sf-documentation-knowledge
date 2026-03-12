---
title: "Commerce Extension Providers"
domain: chatterapi
topic: commerce-extension-providers
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.026Z
estimatedTokens: 514
keywords: [Commerce, Extension, Providers, register, provider, Apex, implements]
---

# Commerce Extension Providers

> Get Commerce extension providers or register a Commerce extension provider. An
    extension provider is an Apex Class that implements a Commerce extension.

# Commerce Extension Providers

Get Commerce extension providers or register a Commerce extension provider. An extension provider is an Apex Class that implements a Commerce extension.

Resource

```

```

Available version

58.0

Requires Chatter

No

HTTP methods

GET, POST

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| epn | String | Extension point name (unique identifier for an extension). For valid values, see the RegisteredExternalService object's ExtensionPointName field. | Optional | 58.0 |
| webstoreId | String | ID of a webstore. | Required | 58.0 |

Response body for GET

[Commerce Extension Provider Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_provider_output_collection.htm "Collection of Commerce extension providers.")

Request body for POST

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

Response body for POST

[Commerce Extension Provider](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_provider_output.htm "A Commerce extension provider.")

## Code Examples

```
/commerce/extension/providers
```

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

- Commerce Extension Provider Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_provider_output_collection.htm)
- Commerce Extension Provider Apex Class
                      Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_commerce_apex_extension_provider_class_input.htm)
- Commerce Extension Provider (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_provider_output.htm)

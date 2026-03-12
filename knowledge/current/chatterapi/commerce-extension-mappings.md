---
title: "Commerce Extension Mappings"
domain: chatterapi
topic: commerce-extension-mappings
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.013Z
estimatedTokens: 507
keywords: [Commerce, Extension, Mappings, provider, associate, webstore]
---

# Commerce Extension Mappings

> Get and set extension provider mappings, which associate an extension provider with a
    webstore.

# Commerce Extension Mappings

Get and set extension provider mappings, which associate an extension provider with a webstore.

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
| epn | String | Extension point name. For valid values, see the RegisteredExternalService object's ExtensionPointName field. If you omit the extension point name, the system gets all extension mappings for the webstore. If you specify an extension point name, the system gets mappings only for that extension point. | Optional | 58.0 |
| webstoreId | String | ID of the webstore. |  | 58.0 |

Response body for GET

[Commerce Extensions Mappings Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_mapping_output_collection.htm "Collection of Commerce extension mappings.")

Request body for POST

Root XML tag

<MappingInputRepresentation>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| id | String | Mapping ID. | Optional | 59.0 |
| webstoreId | String | ID of the webstore. | Required | 59.0 |
| providerName | String | Unique name of the extension provider. | Required | 59.0 |
| epn | String | Extension point name (unique identifier for an extension). For valid values, see the RegisteredExternalService object's ExtensionPointName field. | Optional | 59.0 |

Request parameters for POST

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| providerName | String | Unique name of the extension provider. | Required | 58.0 |
| webstoreId | String | ID of the webstore. | Required | 58.0 |

Response body for POST

[Commerce Extension Mapping](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_mapping_output.htm "Mapping of a Commerce extension provider to a webstore.")

## Code Examples

```
/commerce/extension/mappings
```

```
{
  "webstoreId": "0ZExx000000003FGAQ",
  "providerName": "UltimateInventory"
}
```

## Related Topics

- Commerce Extensions Mappings Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_mapping_output_collection.htm)
- Commerce Extension Mapping (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_mapping_output.htm)

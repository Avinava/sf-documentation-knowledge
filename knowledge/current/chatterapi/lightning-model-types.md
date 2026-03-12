---
title: "Lightning Model Types"
domain: chatterapi
topic: lightning-model-types
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.623Z
estimatedTokens: 263
keywords: [Lightning, Model, detailed, Apex]
---

# Lightning Model Types

> Get detailed information about each Lightning type and Apex class type.

# Lightning Model Types

Get detailed information about each Lightning type and Apex class type.

Resource

```

```

Available version

64.0

HTTP methods

POST

Request body for POST

[Lightning Model Types Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_lightning_model_types_input.htm "Input for lightning model types.")

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| language | String | Language or locale code, such as es or en_US, to retrieve the title and description of a type. If unspecified, the logged-in user’s language is used. The fallback language is English in case translations don’t exist. | Optional | 64.0 |
| typeConfigs | Lightning Model Types Config[] | List of lightning model types configurations. | Required | 64.0 |

Response body for POST

[Lightning Model Types Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_lightning_model_types_collection.htm "Collection of lightning model types.")

## Code Examples

```
/connect/lightning-model/types
```

```
{
  "language": "en_US",
  "typeConfigs": [
    {
      "descriptor": "lightningType/lightning__textType",
      "schemaConfig": {
        "subSchemaDefinitions": true
      },
      "editorConfig": {
        "target": "LightningDesktopGenAi"
      },
      "rendererConfig": {
        "target": "LightningDesktopGenAi"
      }
    },
    {
      "descriptor": "apexClassType/c__Hotel",
      "schemaConfig": {
        "subSchemaDefinitions": true
      },
      "editorConfig": {
        "target": "LightningDesktopGenAi"
      },
      "rendererConfig": {
        "target": "LightningDesktopGenAi"
      }
    },
    {
      "descriptor": "apexClassType/c__FlightBookingAgent$Flight",
      "schemaConfig": {
        "subSchemaDefinitions": true
      },
      "editorConfig": {
        "target": "LightningDesktopGenAi"
      },
      "rendererConfig": {
        "target": "LightningDesktopGenAi"
      }
    }
  ]
}
```

## Related Topics

- Lightning Model Types Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_lightning_model_types_input.htm)
- Lightning Model Types Config (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_lightning_model_types_config_input.htm)
- Lightning Model Types Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_lightning_model_types_collection.htm)

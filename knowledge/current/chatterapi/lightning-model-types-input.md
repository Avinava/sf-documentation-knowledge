---
title: "Lightning Model Types Input"
domain: chatterapi
topic: lightning-model-types-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.954Z
estimatedTokens: 196
keywords: [Lightning, Model, Input]
---

# Lightning Model Types Input

> Input for lightning model types.

# Lightning Model Types Input

Input for lightning model types.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| language | String | Language or locale code, such as es or en_US, to retrieve the title and description of a type. If unspecified, the logged-in user’s language is used. The fallback language is English in case translations don’t exist. | Optional | 64.0 |
| typeConfigs | Lightning Model Types Config[] | List of lightning model types configurations. | Required | 64.0 |

#### See Also

-   [Lightning Model Types](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_lightning_model_types.htm "Get detailed information about each Lightning type and Apex class type.")

## Code Examples

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

- Lightning Model Types Config (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_lightning_model_types_config_input.htm)
- Lightning Model Types (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_lightning_model_types.htm)

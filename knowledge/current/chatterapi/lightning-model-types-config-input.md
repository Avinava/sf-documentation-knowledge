---
title: "Lightning Model Types Config Input"
domain: chatterapi
topic: lightning-model-types-config-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.951Z
estimatedTokens: 284
namespace: FlightBookingAgent
keywords: [Lightning, Model, Config, Input, configuration]
---

# Lightning Model Types Config Input

> Input for lightning model types configuration.

**Namespace:** `FlightBookingAgent`

# Lightning Model Types Config Input

Input for lightning model types configuration.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| descriptor | String | Descriptor of type.In the descriptor examples, apexClassType is the data type and c__Hotel is the name of the Apex class where c indicates the default namespace for all custom types: apexClassType/c__Hotel. Similarly, apexClassType/c__Flight​BookingAgent$Flight is the descriptor when FlightBookingAgent is the parent class with a nested Flight Apex class. | Required | 64.0 |
| editorConfig | Lightning Model Editor Config Input | Editor configuration of the type. | Optional | 64.0 |
| rendererConfig | Lightning Model Renderer Config Input | Renderer configuration of the type. | Optional | 64.0 |
| schemaConfig | Lightning Model Schema Config Input | Schema configuration of the type. | Optional | 64.0 |

#### See Also

-   [Lightning Model Types Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_lightning_model_types_input.htm "Input for lightning model types.")

## Code Examples

```
{
  "descriptor": "apexClassType/c__Hotel",
  "schemaConfig": {
    "subSchemaDefinitions": true
  }
},
{
  "descriptor": "apexClassType/c__FlightBookingAgent$Flight",
  "schemaConfig": {
    "subSchemaDefinitions": true
  }
}
```

## Related Topics

- Lightning Model Editor Config Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_lightning_model_editor_config_input.htm)
- Lightning Model Renderer Config Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_lightning_model_renderer_config_input.htm)
- Lightning Model Schema Config Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_lightning_model_schema_config_input.htm)
- Lightning Model Types Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_lightning_model_types_input.htm)

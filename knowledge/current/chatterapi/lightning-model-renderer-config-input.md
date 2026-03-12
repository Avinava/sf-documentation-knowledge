---
title: "Lightning Model Renderer Config Input"
domain: chatterapi
topic: lightning-model-renderer-config-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.942Z
estimatedTokens: 211
keywords: [Lightning, Model, Renderer, Config, Input, configuration]
---

# Lightning Model Renderer Config Input

> Input for lightning model type renderer configuration.

# Lightning Model Renderer Config Input

Input for lightning model type renderer configuration.

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| maxViewDepth | Integer | Maximum depth for sub-view definitions. Valid values are from 0 to 10. You can specify a value only when subView​Definitions is set to true. If unspecified and subView​Definitions is set to true, all view definitions are expanded without limit. | Optional | 64.0 |
| target | String | Renderer configuration target for lightning model types. Valid value is LightningDesktopGenAi. | Optional | 64.0 |

#### See Also

-   [Lightning Model Types Config Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_lightning_model_types_config_input.htm "Input for lightning model types configuration.")

## Related Topics

- Lightning Model Types Config Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_lightning_model_types_config_input.htm)

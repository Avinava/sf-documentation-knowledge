---
title: "Lightning Type"
domain: chatterapi
topic: lightning-type
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.632Z
estimatedTokens: 439
keywords: [Lightning, detailed, JSON, schema, definition, editor, configuration, renderer]
---

# Lightning Type

> Get detailed information, such as JSON schema definition, editor configuration, and
    renderer configuration about each Lightning type.

# Lightning Type

Get detailed information, such as JSON schema definition, editor configuration, and renderer configuration about each Lightning type.

Resource

```

```

Available version

64.0

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| editorConfig​Target | String | Editor configuration targets for the lightning type. In version 64.0 and later, LightningDesktopGenAi is the only valid value. | Optional | 64.0 |
| expandConfigs | Boolean | Specifies whether the API returns the expanded configuration (true) or the originally saved configuration (false). If unspecified, defaults to true.Specifying true returns the full configuration by expanding the referred standard, custom, and Apex types in the schema, editor, and renderer.Specifying false returns only the user-supplied configuration, without any system-generated expansions or properties. | Optional | 65.0 |
| includeSubSchema​Definitions | Boolean | Specifies whether to include sub-schema definitions (true) or not (false). | Optional | 64.0 |
| language | String | Language or locale code, such as es or en_US, to retrieve the title and description of a type. If unspecified, the logged-in user’s language is used. The fallback language is English in case translations don’t exist. | Optional | 64.0 |
| rendererConfig​Target | String | Renderer configuration targets for the lightning type. In version 64.0 and later, LightningDesktopGenAi is the only valid value. | Optional | 64.0 |

Response body for GET

[Lightning Type Detail](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_lightning_type_detail.htm "Detailed information about a lightning type.")

## Code Examples

```
/connect/lightning-types/fullyQualifiedName
```

## Related Topics

- Lightning Type Detail (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_lightning_type_detail.htm)

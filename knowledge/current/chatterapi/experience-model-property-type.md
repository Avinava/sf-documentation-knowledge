---
title: "Experience Model Property Type"
domain: chatterapi
topic: experience-model-property-type
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.995Z
estimatedTokens: 224
keywords: [Experience, Model]
---

# Experience Model Property Type

> Get an experience model property type.

# Experience Model Property Type

Get an experience model property type.

Resource

```

```

Available version

58.0

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| designConfig​Target | String | Design configuration target. Value is Default. | Optional | 58.0 |
| includeSubSchema​Definitions | Boolean | Specifies whether to include sub schema definitions (true) or not (false). | Optional | 58.0 |
| language | String | Language or locale, such as en or en_US. | Optional | 58.0 |
| renditionConfig​Target | String | Rendition configuration target. Value is Default. | Optional | 58.0 |

Response body for GET

[Experience Model Property Type Detail](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_experience_model_property_type_detail.htm "Property type detail.")

## Code Examples

```
/connect/experience-model/property-types/fullyQualifiedName
```

## Related Topics

- Experience Model Property Type Detail (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_experience_model_property_type_detail.htm)

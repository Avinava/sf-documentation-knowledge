---
title: "Experience Model Property Types"
domain: chatterapi
topic: experience-model-property-types
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.999Z
estimatedTokens: 309
keywords: [Experience, Model]
---

# Experience Model Property Types

> Get experience model property types.

# Experience Model Property Types

Get experience model property types.

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
| fullyQualified​Names | String[] | Comma-separated list of fully qualified names of property types. | Optional | 58.0 |
| language | String | Language or locale, such as en or en_US. | Optional | 58.0 |
| page | Integer | Number of the page you want returned. Starts at 0. If you don’t specify a value or if you specify 0, the first page is returned. | Optional | 58.0 |
| pageSize | Integer | Specifies the number of items per page. Valid values are from 1 through 250. If you don’t specify a value, the default size is 25. | Optional | 58.0 |
| renditionConfig​Target | String | Rendition configuration target. Value is Default. | Optional | 58.0 |

Response body for GET

[Experience Model Property Type Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_experience_model_property_type_collection.htm "Collection of property types.")

## Code Examples

```
/connect/experience-model/property-types
```

## Related Topics

- Experience Model Property Type Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_experience_model_property_type_collection.htm)

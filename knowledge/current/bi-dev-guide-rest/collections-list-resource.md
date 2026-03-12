---
title: "Collections List Resource"
domain: bi-dev-guide-rest
topic: collections-list-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:03.139Z
estimatedTokens: 497
keywords: [Collections, Resource, creates, collection, Analytics, items, URL, Formats, Version, HTTP, POST]
---

# Collections List Resource

> Returns a list of collections or creates a collection. Each collection contains Analytics resource items.

# Collections List Resource

Returns a list of collections or creates a collection. Each collection contains Analytics resource items.

## Resource URL

```

```

```

```

## Formats

JSON

## Available Version

52.0

## HTTP Methods

GET POST

## Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| editable​Only | Boolean | Filters the results for only collections the current user has edit access to. | Optional | 52.0 |
| include​Items | Boolean | Indicates whether the collection items are returned in the response (true) or not (false). | Optional | 52.0 |
| label | String | Filters the results for collections list to match the specified label. | Optional | 54.0 |
| limit | Integer | The limit of collections to return. | Optional | 52.0 |
| offset | Integer | Indicates the starting index for list of collections returned. The default value is 0. | Optional | 52.0 |
| page​Token | String | The token to use for next page. | Optional | 52.0 |
| pinned​Only | Boolean | Filters the results for pinned collections only. | Optional | 52.0 |
| type | Collection​Type​Enum | Filters the results by collection type. Valid values are: Static. The default is to return all types of collections. | Optional | 52.0 |
| visible​Only | Boolean | Indicates whether only visible collection items are returned in the response (true) or not (false). | Optional | 57.0 |

## Response body for GET

[Wave Collection List](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_wave_collection_list.htm "A list of Analytics collections.")

## Request body for POST

[Wave Collection Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_wave_collection_input.htm "A collection of Analytics resources.")

## Response body for POST

[Wave Collection](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_wave_collection.htm "A collection of Analytics resources.")

## Code Examples

```
/analytics/collections
```

```
/wave/collections
```

## Related Topics

- Wave Collection List (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_wave_collection_list.htm)
- Wave Collection Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_wave_collection_input.htm)
- Wave Collection (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_wave_collection.htm)

---
title: "Stories Resource"
domain: bi-dev-guide-rest-sdd
topic: stories-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:05.501Z
estimatedTokens: 468
keywords: [Stories, Resource, collection, Einstein, Discovery]
---

# Stories Resource

> Returns a collection of Einstein Discovery stories.

# Stories Resource

Returns a collection of Einstein Discovery stories.

Resource URL

```

```

Formats

JSON

Available Version

48.0

Available Components

-   LWC — [lightning/analyticSmartDataDiscoveryApi getStories()](https://developer.salesforce.com/docs/platform/lwc/guide/reference-wire-adapters-get-stories.html)

HTTP Methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| folder​Id | Id | Filters the collection by a CRM Analytics folder ID. | Optional | 48.0 |
| input​Id | Id | Filters the collection by a story input ID. | Optional | 48.0 |
| page | String | A generated token that indicates the view of items to be returned. | Optional | 48.0 |
| page​Size | Integer | The number of items to be returned in a single page. Minimum is 1, maximum is 200, and default is 25. | Optional | 48.0 |
| q | String | Search terms. Individual terms are separated by spaces. A wildcard is automatically appended to the last token in the query string. If the user’s search query contains quotation marks or wildcards, those symbols are automatically removed from the query string in the URI along with any other special characters. | Optional | 48.0 |
| scope | Analysis​Setup​Scope​Type​Enum | The type of scope. Valid values are:Created​By​MeShared​With​Me | Optional | 48.0 |
| source​Type | Analysis​Setup​Source​Type​Enum | The type of the source. Valid values are:Analytics​DatasetLive​DatasetReport | Optional | 48.0 |
| source​Types | Analysis​Setup​Source​Type​Enum[] | A list of source types. Valid values are:Analytics​DatasetLive​DatasetReport | Optional | 48.0 |

Response body for GET

[Story Collection](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_story_collection.htm "A collection of Einstein Discovery stories.")

## Code Examples

```
/smartdatadiscovery/stories
```

## Related Topics

- Story Collection (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_story_collection.htm)

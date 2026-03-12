---
title: "Collections Items List Resource"
domain: bi-dev-guide-rest
topic: collections-items-list-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:03.154Z
estimatedTokens: 465
keywords: [Collections, Items, Resource, Analytics, collection, creates, updates, item, URL, Formats, Version, HTTP, PATCH, POST]
---

# Collections Items List Resource

> Returns a list of Analytics collection items and creates or updates the
  collection item list.

# Collections Items List Resource

Returns a list of Analytics collection items and creates or updates the collection item list.

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

GET POST PATCH

## Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| item​Type | Collection​Item​Asset​Type​Enum | Filters the results by the collection item asset type. Valid values are:ComponentDashboardDashboard​Saved​ViewLensLightning​DashboardReportTableau​DashboardTableau​Workbook | Optional | 52.0 |
| limit | Integer | The limit of collections to return. | Optional | 52.0 |
| mobile​Only | Boolean | Filters the results to return only mobile asset items. | Optional | 52.0 |
| offset | Integer | Indicates the starting index for list of collections items returned. The default value is 0. | Optional | 52.0 |
| page​Token | String | The token to use for next page. | Optional | 52.0 |

## Response body for GET and PATCH

[Wave Collection Item List](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_wave_collection_item_list.htm "A list of items in a collection of Analytics resources.")

## Request body for POST

[Wave Collection Item Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_wave_collection_item_input.htm "An item in a collection of Analytics resources.")

## Response body for POST

[Wave Collection Item](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_wave_collection_item.htm "An item in a collection of Analytics resources.")

## Request body for PATCH

[Wave Collection Item List Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_wave_collection_item_list_input.htm "A list of items in a collection of Analytics resources.")

## Code Examples

```
/analytics/collections/<collectionId>/items
```

```
/wave/collections/<collectionId>/items
```

## Related Topics

- Wave Collection Item List (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_wave_collection_item_list.htm)
- Wave Collection Item Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_wave_collection_item_input.htm)
- Wave Collection Item (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_wave_collection_item.htm)
- Wave Collection Item List Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_wave_collection_item_list_input.htm)

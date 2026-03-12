---
title: "Lenses List Resource"
domain: bi-dev-guide-rest
topic: lenses-list-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:03.762Z
estimatedTokens: 709
keywords: [Lenses, Resource, Analytics, creates, lens, URL, Formats, Version, Postman, Components, HTTP, POST]
---

# Lenses List Resource

> Returns a list of Analytics
      lenses or creates a lens.

# Lenses List Resource

Returns a list of Analytics lenses or creates a lens.

## Resource URL

```

```

## Formats

JSON

## Available Version

36.0

## Available in Postman

To view and test a working example of this resource, see [getLensCollection](https://www.postman.com/salesforce-developers/workspace/salesforce-developers/request/12721794-e5608103-f2d8-44dd-b3fb-c60195df2ec6?action=share&source=copy-link&creator=26106753 "HTML (New Window)") in Postman. For information about how to authenticate your org with Postman, see the [CRM Analytics Rest API Quick Start](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/crma_rest_api_quick_start.htm "Connect to a Salesforce Trailhead org and authenticate. Then make a request to the CRM Analytics REST API in Postman, and look at the response.").

## Available Components

-   Apex — [Wave.Lenses.getLenses()](https://developer.salesforce.com/docs/atlas.en-us.260.0.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_apex_query.htm)
-   Aura — [<wave:sdk> listLenses()](https://developer.salesforce.com/docs/atlas.en-us.260.0.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_asset.htm)

## HTTP Methods

GET POST

## GET Request Parameters

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| folderId | ID | Filters the results to include only the contents of a specific folder. The id can be the requesting user’s ID for items in the user’s private folder. | Optional | 36.0 |
| page | String | A generated token that indicates the view of the lenses to be returned. | Optional | 36.0 |
| page​Size | Integer | The number of items to be returned in a single page. Minimum is 1, maximum is 200, and default is 25. | Optional | 36.0 |
| q | String | Search terms. Individual terms are separated by spaces. A wildcard is automatically appended to the last token in the query string. If the user’s search query contains quotation marks or wildcards, those symbols are automatically removed from the query string in the URI along with any other special characters. | Optional | 36.0 |
| scope | Connect​Wave​Scope​Type​Enum | The type of scope to be applied to the returned collection. Valid values are:Created​By​MeMru (Most Recently Used)Shared​With​Me | Optional | 38.0 |
| sort | Connect​Wave​Sort​Order​Type​Enum | The type of sort order to be applied to the returned collection. Valid values are:AppCreated​ByCreated​DateLast​ModifiedLast​Modified​ByMru (Most Recently Used, last viewed date)NameType | Optional | 38.0 |

## GET Response Body

[Lens Collection](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_lens_collection.htm "A collection of Analytics lenses.")

## POST Response Body

[Lens](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_lens.htm "Am Analytics lenses.")

## Code Examples

```
/wave/lenses
```

## Related Topics

- CRM Analytics Rest API Quick Start (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/crma_rest_api_quick_start.htm)
- Lens Collection (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_lens_collection.htm)
- Lens (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_lens.htm)

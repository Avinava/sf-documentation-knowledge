---
title: "Lens Resource"
domain: bi-dev-guide-rest
topic: lens-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:03.766Z
estimatedTokens: 425
keywords: [Lens, Resource, deletes, updates, API, URL, Formats, Version, Postman, Components, HTTP, PATCH]
---

# Lens Resource

> Returns, deletes, or updates the lens with the specified ID or API
      name.

# Lens Resource

Returns, deletes, or updates the lens with the specified ID or API name.

## Resource URL

```

```

## Formats

JSON

## Available Version

36.0

## Available in Postman

To view and test a working example of this resource, see [getLens](https://www.postman.com/salesforce-developers/workspace/salesforce-developers/request/12721794-dd502784-37ea-4d53-a297-c5af5d933169?action=share&source=copy-link&creator=26106753 "HTML (New Window)") in Postman. For information about how to authenticate your org with Postman, see the [CRM Analytics Rest API Quick Start](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/crma_rest_api_quick_start.htm "Connect to a Salesforce Trailhead org and authenticate. Then make a request to the CRM Analytics REST API in Postman, and look at the response.").

## Available Components

-   Apex — [Wave.Lenses.getLens()](https://developer.salesforce.com/docs/atlas.en-us.260.0.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_apex_query.htm)
-   Aura — [<wave:sdk> describeLens()](https://developer.salesforce.com/docs/atlas.en-us.260.0.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_asset.htm)

## HTTP Methods

GET DELETE PATCH

## GET and PATCH Request Parameters

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| lens​Id​Or​Api​Name | ID | The lens ID or API name to return or update. | Required | 36.0 |

## GET and PATCH Response Body

[Lens](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_lens.htm "Am Analytics lenses.")

## PATCH Request Body

[Lens Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_lens_input.htm "An Analytics lens.")

## Code Examples

```
/wave/lenses/<lensIdOrApiName>
```

## Related Topics

- CRM Analytics Rest API Quick Start (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/crma_rest_api_quick_start.htm)
- Lens (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_lens.htm)
- Lens Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_lens_input.htm)

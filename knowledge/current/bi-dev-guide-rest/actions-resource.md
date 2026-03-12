---
title: "Actions Resource"
domain: bi-dev-guide-rest
topic: actions-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:03.040Z
estimatedTokens: 311
keywords: [Actions, Resource, Salesforce, user, Analytics, entityId, URL, Formats, Version, Postman, Components, HTTP]
---

# Actions Resource

> Returns the Salesforce actions available for the user in
  Analytics. The entityId is the user id.

# Actions Resource

Returns the Salesforce actions available for the user in Analytics. The entityId is the user id.

## Resource URL

```

```

## Formats

JSON

## Available Version

40.0

## Available in Postman

To view and test a working example of this resource, see [getActionCollection](https://www.postman.com/salesforce-developers/workspace/salesforce-developers/request/12721794-bb4b7379-80d5-46fc-9368-e7f15b040889?action=share&source=copy-link&creator=26106753 "HTML (New Window)") in Postman. For information about how to authenticate your org with Postman, see the [CRM Analytics Rest API Quick Start](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/crma_rest_api_quick_start.htm "Connect to a Salesforce Trailhead org and authenticate. Then make a request to the CRM Analytics REST API in Postman, and look at the response.").

## Available Components

-   LWC — [lightning/analyticsWaveApi getActions()](https://developer.salesforce.com/docs/platform/lwc/guide/reference-wire-adapters-get-actions.html)

## HTTP Methods

GET

## Response body for GET

[Action Collection](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_action_collection.htm "A collection of Salesforce actions available to the user.")

## Code Examples

```
/wave/actions/<entityId>
```

## Related Topics

- CRM
     Analytics Rest API Quick Start (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/crma_rest_api_quick_start.htm)
- Action Collection (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_action_collection.htm)

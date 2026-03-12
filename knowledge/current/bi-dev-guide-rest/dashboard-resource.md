---
title: "Dashboard Resource"
domain: bi-dev-guide-rest
topic: dashboard-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:03.578Z
estimatedTokens: 371
keywords: [Dashboard, Resource, deletes, updates, API, URL, Formats, Version, Postman, Components, HTTP, PATCH]
---

# Dashboard Resource

> Returns, deletes, or updates the dashboard with the specified ID or
      API name.

# Dashboard Resource

Returns, deletes, or updates the dashboard with the specified ID or API name.

## Resource URL

```

```

## Formats

JSON

## Available Version

36.0

## Available in Postman

To view and test a working example of this resource, see [getDashboard](https://www.postman.com/salesforce-developers/workspace/salesforce-developers/request/12721794-f2e18ad6-9c26-44f9-a741-8506c14caaf9?action=share&source=copy-link&creator=26106753 "HTML (New Window)") in Postman. For information about how to authenticate your org with Postman, see the [CRM Analytics Rest API Quick Start](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/crma_rest_api_quick_start.htm "Connect to a Salesforce Trailhead org and authenticate. Then make a request to the CRM Analytics REST API in Postman, and look at the response.").

## Available Components

-   Aura — [<wave:sdk> describeDashboard()](https://developer.salesforce.com/docs/atlas.en-us.260.0.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_asset.htm)

## HTTP Methods

GET DELETE PATCH

## GET Response Body

[Dashboard](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_dashboard.htm "An Analytics dashboard.")

## PATCH Request Body

[Dashboard Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_dashboard_input.htm "An Analytics dashboard.")

## PATCH Response Body

[Dashboard](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_dashboard.htm "An Analytics dashboard.")

## Code Examples

```
/wave/dashboards/<dashboardIdOrApiName>
```

## Related Topics

- CRM Analytics Rest API Quick Start (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/crma_rest_api_quick_start.htm)
- Dashboard (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_dashboard.htm)
- Dashboard Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_dashboard_input.htm)

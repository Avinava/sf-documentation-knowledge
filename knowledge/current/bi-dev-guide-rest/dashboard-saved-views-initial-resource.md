---
title: "Dashboard Saved Views Initial Resource"
domain: bi-dev-guide-rest
topic: dashboard-saved-views-initial-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:03.600Z
estimatedTokens: 232
keywords: [Dashboard, Saved, Views, Initial, Resource, view, URL, Formats, Version, Components, HTTP]
---

# Dashboard Saved Views Initial Resource

> Returns the initial view information for a dashboard saved
    view. In the UI, the initial view is the default view.

# Dashboard Saved Views Initial Resource

Returns the initial view information for a dashboard saved view. In the UI, the initial view is the default view.

## Resource URL

```

```

## Formats

JSON

## Available Version

42.0

## Available Components

-   Aura — [<wave:sdk> getDashboardInitialSavedView()](https://developer.salesforce.com/docs/atlas.en-us.260.0.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_asset.htm)

## HTTP Methods

GET

## GET Request Parameters

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| dashboard​Id​Or​Api​Name | String | The ID or API name of the dashboard to retrieve the initial saved view for. | Required | 42.0 |

## GET Response Body

[Dashboard Saved View Initial](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_dashboard_saved_view_inital.htm "The initial saved view of an Analytics dashboard.")

## Code Examples

```
/wave/dashboards/<dashboardIdOrApiName>/savedviews/initial
```

## Related Topics

- Dashboard Saved View Initial (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_dashboard_saved_view_inital.htm)

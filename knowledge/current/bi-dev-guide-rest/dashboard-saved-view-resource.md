---
title: "Dashboard Saved View Resource"
domain: bi-dev-guide-rest
topic: dashboard-saved-view-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:03.597Z
estimatedTokens: 319
keywords: [Dashboard, Saved, View, Resource, deletes, updates, URL, Formats, Version, Components, HTTP, PATCH]
---

# Dashboard Saved View Resource

> Returns, deletes, and updates a dashboard saved
    view.

# Dashboard Saved View Resource

Returns, deletes, and updates a dashboard saved view.

## Resource URL

```

```

## Formats

JSON

## Available Version

42.0

## Available Components

-   Aura — [<wave:sdk> getDashboardSavedView()](https://developer.salesforce.com/docs/atlas.en-us.260.0.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_asset.htm)

## HTTP Methods

DELETE GET PATCH

## GET Request Parameters

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| dashboard​Id​Or​Api​Name | String | The ID or API name of the dashboard to retrieve the saved views for. | Required | 42.0 |
| view​Id | String | The ID of the saved view. | Required | 42.0 |

## GET Response Body

[Dashboard Saved View](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_dashboard_saved_view.htm "A saved view for an Analytics dashboard.")

## PATCH Request Body

[Dashboard Saved View Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_dashboard_saved_view_input.htm "A saved view for an Analytics dashboard.")

## PATCH Response Body

[Dashboard Saved View](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_dashboard_saved_view.htm "A saved view for an Analytics dashboard.")

## Code Examples

```
/wave/dashboards/<dashboardIdOrApiName>/savedviews/<viewId>
```

## Related Topics

- Dashboard Saved View (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_dashboard_saved_view.htm)
- Dashboard Saved View Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_dashboard_saved_view_input.htm)

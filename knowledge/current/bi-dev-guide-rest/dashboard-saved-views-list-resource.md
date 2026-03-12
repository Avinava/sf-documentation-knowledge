---
title: "Dashboard Saved Views List Resource"
domain: bi-dev-guide-rest
topic: dashboard-saved-views-list-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:03.594Z
estimatedTokens: 361
keywords: [Dashboard, Saved, Views, Resource, creates, view, URL, Formats, Version, Components, HTTP, POST]
---

# Dashboard Saved Views List Resource

> Returns a list of dashboard saved views or creates a single
      view.

# Dashboard Saved Views List Resource

Returns a list of dashboard saved views or creates a single view.

## Resource URL

```

```

## Formats

JSON

## Available Version

42.0

## Available Components

-   Aura — [<wave:sdk> listDashboardSavedViews()](https://developer.salesforce.com/docs/atlas.en-us.260.0.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_asset.htm)

## HTTP Methods

GET POST

## GET Request Parameters

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| dashboard​Id​Or​Api​Name | String | The ID or API name of the dashboard to retrieve the saved views for. | Required | 42.0 |
| type | Connect​Wave​Dashboard​Saved​View​Type | The type of saved view.﻿SharedUser | Optional | 42.0 |

The following REST URL shows how to use the type parameter in the GET request.

```

```

## GET Response Body

[Dashboard Saved View Collection](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_dashboard_saved_view_collection.htm "A collection of Analytics dashboard saved views.")

## POST Request Body

[Dashboard Saved View Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_dashboard_saved_view_input.htm "A saved view for an Analytics dashboard.")

## POST Response Body

[Dashboard Saved View](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_dashboard_saved_view.htm "A saved view for an Analytics dashboard.")

## Code Examples

```
/wave/dashboards/<dashboardIdOrApiName>/savedviews
```

```
/wave/dashboards/<dashboardIdOrApiName>/savedviews?type=User
```

## Related Topics

- Dashboard Saved View Collection (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_dashboard_saved_view_collection.htm)
- Dashboard Saved View Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_dashboard_saved_view_input.htm)
- Dashboard Saved View (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_dashboard_saved_view.htm)

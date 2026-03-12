---
title: "Dashboard Status"
domain: api-analytics
topic: dashboard-status
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:58.437Z
estimatedTokens: 438
keywords: [Dashboard, Status]
---

# Dashboard Status

> Returns the status for the specified dashboard.

# Dashboard Status

Returns the status for the specified dashboard.

## Syntax

URI

/services/data/vXX.X/analytics/dashboards/**dashboardID**/status

Or, with optional parameters:

/services/data/vXX.X/analytics/dashboards/**dashboardID**/status ?runningUser=**runningUserID**&filter1=**filter1ID**&filter2=**filter2ID**&filter3=**filter3ID**

Formats

JSON

HTTP methods

GET

Authentication

Authorization: Bearer token

Parameters

The following optional parameters can be used with the GET method:

| Parameter Name | Description |
| --- | --- |
| runningUser | ID of the running user. Gives an error if the user is not allowed to change the running user, or if the selected running user is invalid. |
| filter1 | ID of the selected filter option for the first filter. Gives an error if the filter option is invalid. |
| filter2 | ID of the selected filter option for the second filter. Gives an error if the filter option is invalid. |
| filter3 | ID of the selected filter option for the third filter. Gives an error if the filter option is invalid. |

## Response body

| Property | Type | Description |
| --- | --- | --- |
| componentStatus | Component status with id[] | Status for each component of the dashboard. The order of the array is the same as in previous calls, unless the dashboard has changed in the meantime. |

Component status with id

| Property | Type | Description |
| --- | --- | --- |
| componentId | String | Unique ID of the dashboard component. |
| refreshDate | Date and time string | Date and time of last refresh in ISO-8601 format. |
| refreshStatus | String | Refresh status of the component. Value can be:IDLE: The component is not currently being refreshed.RUNNING: The component is currently being refreshed. |

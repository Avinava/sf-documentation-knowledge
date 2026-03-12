---
title: "Dashboard and Component Error Codes"
domain: api-analytics
topic: dashboard-and-component-error-codes
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:58.340Z
estimatedTokens: 1203
keywords: [Dashboard, Component, Error, Codes, Errors, occur, level, Dashboard-level, Component-level]
---

# Dashboard and Component Error Codes

> Errors can occur at the dashboard level and at the component level.

# Dashboard and Component Error Codes

Errors can occur at the dashboard level and at the component level.

Dashboard-level error messages are returned in the response header, and component-level error messages are returned as part of the component status object.

To view a complete list of error messages, see Status Codes and Error Responses.

## Dashboard-level errors

When a dashboard-level error occurs, the response header contains an HTTP response code and one of the following error messages:

| HTTP Response Code | Error Message |
| --- | --- |
| 400 | The running user for this dashboard doesn't have permission to run reports. Your system administrator should select a different running user for this dashboard. |
| 400 | The running user for this dashboard is inactive. Your system administrator should select an active user for this dashboard. |
| 400 | You don't have permission to view data as this user. |
| 400 | Your organization has reached the limit for dynamic dashboards, or doesn't have access. Ask your administrator to enable dynamic dashboards or convert them to dashboards with a specific running user. |
| 400 | The selected filter item isn't valid. |
| 400 | You can't refresh this dashboard. A refresh is already in progress. |

## Component-level errors

If an error occurs at the component level, the errorCode, errorMessage, and errorSeverity properties of the component status field are populated. The errorSeverity property distinguishes between errors and warnings. Errors are blocking issues that prevent the query from returning any data. Warnings are non-blocking issues; queries will finish, but they might return incomplete data. The following table shows the possible values for the error fields.

| errorCode | errorMessage | errorSeverity |
| --- | --- | --- |
| 201 | This component must have a type and a data source. | Error |
| 202 | The source report isn't available; it's been deleted or isn't in a folder accessible to the dashboard's running user. | Error |
| 203 | This report can no longer be edited or run. Your administrator has disabled all reports for the custom or external object, or its relationships have changed. | Error |
| 205 | The source report is based on a report type that is inaccessible to the dashboard's running user. | Error |
| 208 | Unable to run source report because its definition is invalid. | Error |
| 209 | This report cannot be used as the source for this component. If it is a summary or matrix report, add one or more groupings in the report. If it is a tabular report with a row limit, specify the Dashboard Settings in the report. | Error |
| 210 | This row-limited tabular report cannot be used as the source for this component. Use the dashboard component editor to specify the data you want to display, or specify the Dashboard Settings in the report. | Error |
| 211 | To use this row-limited tabular report as the source, edit the report and specify the Name and Value under Dashboard Settings. When updating the report, make sure you are the running user of the dashboard. | Error |
| 212 | Groupings and combination charts are not available for a row-limited tabular report. Set “Group By” to None and deselect “Plot Additional Values.” | Error |
| 300 | The results below may be incomplete because the underlying report produced too many summary rows, and the sort order of the component is different from the sort order in the underlying report. Try adding filters to the report to reduce the number of rows returned. | Error |
| 301 | Results may be incomplete because the source report had too many summary rows. Try filtering the report to reduce the number of rows returned. | Warning |
| 302 | The component can't be displayed because the source report exceeded the time limit. | Warning |
| 303 | The component can't be displayed because the source report failed to run. | Error |
| 304 | The component can't be displayed because the dashboard filter raises the number of source report filters above the limit. Reduce the number of report filters and try again. | Error |
| 305 | The component can't be displayed because the field(s) you chose for the filter are unavailable. | Error |
| 308 | You can’t filter this component because data is in the joined report format. To filter the component, change its report format. | Error |
| 309 | The underlying report uses a snapshot date that is out of range. | Error |
| 403 | The request has been refused. Verify that the logged-in user has appropriate permissions. If the error code is REQUEST_LIMIT_EXCEEDED, you’ve exceeded API request limits in your org. | Error |
| 409 | The request couldn’t be completed due to a conflict with the current state of the resource. Check that the API version is compatible with the resource you’re requesting. | Error |

---
title: "Report Error Codes"
domain: api-analytics
topic: report-error-codes
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:58.950Z
estimatedTokens: 1248
keywords: [Report, Error, Codes, Errors, occur, level, Report-level, messages]
---

# Report Error Codes

> Errors can occur at the report level. Report-level error messages are returned in the
        response header

# Report Error Codes

Errors can occur at the report level. Report-level error messages are returned in the response header

When a report-level error occurs, the response header contains an HTTP response code and one of the following error messages:

| HTTP Response Code | Error Message |
| --- | --- |
| 400 | The specified start date of <column name> specified for the standard date filter is invalid. |
| 400 | The specified end date of <column name> specified for the standard date filter is invalid. |
| 400 | The column <column name> specified for the standard date filter is invalid. |
| 400 | The column <column name> cannot be a standard date filter because it is not a date column. |
| 400 | The duration <value> specified for the standard date filter is invalid. |
| 400 | The report folder ID must be a valid folder ID. |
| 400 | The report folder ID can't be null. |
| 400 | The report name can't be null. |
| 400 | Column sorting isn't supported for matrix reports. |
| 400 | The sort column name must be from a selected column. |
| 400 | The sort column name can't be null. |
| 400 | A report can only be sorted by one column. |
| 400 | A snapshot date is not in the correct format. Accepted formats are one of the rolling dates defined or yyyy-MM-dd. |
| 400 | The request is invalid because reports that are not historical trending reports cannot have historical snapshot dates. |
| 400 | The request is invalid because there are no historical snapshot dates in the request body. Specify historical snapshot dates, or set historical snapshot dates as an empty array to omit them. |
| 400 | Only a report with fewer than 100 columns can be run. The columns are fields specified as detail columns, summaries, or custom summary formulas. Remove unneeded columns from the report and try again. |
| 400 | Can’t run the report because it doesn’t have any columns selected. Be sure to add fields as columns to the report through the user interface. |
| 400 | The request is invalid because there are no filters. Specify filters or set filters as an empty array to omit them. |
| 400 | The filter value for ID <value> is incorrect. Specify an ID that is 15 or 18 characters long, such as 006D000000CrRLw or 005U0000000Rg2CIAS. |
| 400 | Specify a valid filterable column because <value> is invalid. |
| 400 | Specify a valid condition because <value> is invalid. |
| 400 | Filter the date in the correct format. Accepted formats are yyyy-MM-dd'T'HH:mm:ss'Z' and yyyy-MM-dd. |
| 400 | The date formula is too large. Specify a reasonable value. |
| 400 | The request is invalid because there is no metadata. Specify metadata in the request body. |
| 400 | The clone request must contain a valid cloneId parameter. |
| 403 | The report can't be deleted because there are one or more dashboards referencing it. |
| 403 | You don't have permission to create reports in the given folder. |
| 403 | You don’t have permission to edit reports in the given folder. |
| 403 | The report definition is obsolete. Your administrator has disabled all reports for the custom object, or its relationships have changed. |
| 403 | You don’t have permission to run reports. Check that you have the Run Reports user permission. |
| 403 | You don’t have sufficient privileges to perform this operation. |
| 403 | Reports and Dashboards REST API can't process the request because it can accept only as many as <number> requests at a time to get results of reports run asynchronous​ly. |
| 403 | Reports and Dashboards REST API can't process the request because it can accept only as many as <number> requests at a time to run reports synchronousl​y. |
| 403 | You can't run more than <number> reports synchronously every 60 minutes. Try again later. |
| 404 | Use a valid URL, for example, /services/data/(apiversion)/analytics/reports/(reportID)/describe, to retrieve report metadata. |
| 404 | The data you’re trying to access is unavailable. |
| 410 | The requested resource has been retired or removed. Delete or update any references to the resource. |
| 415 | The Reports and Dashboards REST API only supports JSON content type in both request and response bodies. Specify requests with content type as application/​json. |
| 500 | We ran into an error when fetching this report’s metadata. Try to re-submit your query. |
| 500 | We ran into an error when running this report. Try to re-submit your query. |
| 500 | The request body is either invalid or incomplete. |
| 500 | Results for this instance are unavailable because the report's metadata has changed from when the report was last run. To get results, run the report again or undo changes to the report's metadata. |
| 500 | The report failed to be deleted. |
| 500 | The report failed to be created. |
| 500 | The report failed to be saved. |
| 501 | You’re requesting data for an unsupported report format. |
| 501 | Historical trend data is unavailable in the report format requested. Change the report format to matrix and try again. |

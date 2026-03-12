---
title: "List Recently Viewed Reports"
domain: api-analytics
topic: list-recently-viewed-reports
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:58.928Z
estimatedTokens: 280
keywords: [Recently, Viewed, Reports, Salesforce, sending, Report, resource]
---

# List Recently Viewed Reports

> Get up to 200 of the reports you most recently viewed in Salesforce by sending a GET request to
        the Report List resource.

# List Recently Viewed Reports

Get up to 200 of the reports you most recently viewed in Salesforce by sending a GET request to the Report List resource.

Each report listing in the response has resource URLs to get metadata and run a report asynchronously or synchronously.

For a more extensive reports list, query the Report object using a SOQL query in a Salesforce API such as SOAP API or REST API. This SOQL query, for example, returns all reports that are in matrix format: SELECT Description,Format,LastRunDate FROM Report WHERE Format = 'MATRIX' ORDER BY Id ASC NULLS FIRST

## Example

This GET request /services/data/v35.0/analytics/reports to the Report List resource returns a list of 5 recently viewed reports.

```

```

#### See Also

-   [Report List](atlas.en-us.api_analytics.meta/api_analytics/sforce_analytics_rest_api_recentreportslist.htm "Displays a list of up to 200 tabular, matrix, or summary reports that you recently viewed. To get a full list of reports by format, name, and other fields, use a SOQL query on the Report object. The resource can also be used to make a copy of a report.")

## Code Examples

```
[ 
  {
    "describeUrl" : "/services/data/v35.0/analytics/reports/00OR0000000K2OmMAK/describe",   
    "id" : "00OR0000000K2OmMAK",   
    "instancesUrl" : "/services/data/v35.0/analytics/reports/00OR0000000K2OmMAK/instances",   
    "name" : "Pipeline By Industry",   
    "url" : "/services/data/v35.0/analytics/reports/00OR0000000K2OmMAK" }, 
  {   
    "describeUrl" : "/services/data/v35.0/analytics/reports/00OR0000000OFXeMAO/describe",   
    "id" : "00OR0000000OFXeMAO",   
    "instancesUrl" : "/services/data/v35.0/analytics/reports/00OR0000000OFXeMAO/instances",   
    "name" : "My Open Pipeline",   
    "url" : "/services/data/v35.0/analytics/reports/00OR0000000OFXeMAO" },
  {   
    "describeUrl" : "/services/data/v35.0/analytics/reports/00OR0000000K2UeMAK/describe",
    "id" : "00OR0000000K2UeMAK",   
    "instancesUrl" : "/services/data/v35.0/analytics/reports/00OR0000000K2UeMAK/instances",   
    "name" : "Deals Closing This Quarter",   
    "url" : "/services/data/v35.0/analytics/reports/00OR0000000K2UeMAK" }, 
  {   
    "describeUrl" : "/services/data/v35.0/analytics/reports/00OR0000000OFHoMAO/describe",   
    "id" : "00OR0000000OFHoMAO",   
    "instancesUrl" : "/services/data/v35.0/analytics/reports/00OR0000000OFHoMAO/instances",   
    "name" : "Sample Report: # of Opportunities",   
    "url" : "/services/data/v35.0/analytics/reports/00OR0000000OFHoMAO" }, 
  {   
    "describeUrl" : "/services/data/v35.0/analytics/reports/00OR0000000JdVOMA0/describe",   
    "id" : "00OR0000000JdVOMA0",   
    "instancesUrl" : "/services/data/v35.0/analytics/reports/00OR0000000JdVOMA0/instances",   
    "name" : "My Leads rpt",   
    "url" : "/services/data/v35.0/analytics/reports/00OR0000000JdVOMA0" }
]
```

## Related Topics

- Report List (atlas.en-us.api_analytics.meta/api_analytics/sforce_analytics_rest_api_recentreportslist.htm)

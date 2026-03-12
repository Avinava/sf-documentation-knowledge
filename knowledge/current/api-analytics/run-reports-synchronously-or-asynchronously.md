---
title: "Run Reports Synchronously or Asynchronously"
domain: api-analytics
topic: run-reports-synchronously-or-asynchronously
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:58.794Z
estimatedTokens: 768
keywords: [Run, Reports, Synchronously, Asynchronously, summary, data, running, report, API, number, records, Salesforce, user, synchronous, asynchronous]
---

# Run Reports Synchronously or Asynchronously

> Get summary data with or without details by running a report synchronously or
        asynchronously through the API. When you run a report, the API returns data for the same
        number of records that are available when the report is run in the Salesforce user
        interface.

# Run Reports Synchronously or Asynchronously

Get summary data with or without details by running a report synchronously or asynchronously through the API. When you run a report, the API returns data for the same number of records that are available when the report is run in the Salesforce user interface.

Run a report synchronously if you expect it to finish running quickly. Otherwise, we recommend that you run reports through the API asynchronously for these reasons:

-   Long running reports have a lower risk of reaching the timeout limit when run asynchronously.

-   The 2-minute overall Salesforce API timeout limit doesn’t apply to asynchronous runs.

-   The Salesforce Reports and Dashboards REST API can handle a higher number of asynchronous run requests at a time.

-   Since the results of an asynchronously run report are stored for a 24-hr rolling period, they’re available for recurring access.


To run a report synchronously:

-   Send a GET or POST request to the Execute Sync resource to get data.
-   Use a POST request to get specific results on the fly by passing dynamic filters, groupings, and aggregates in the report metadata.


To fetch report data asynchronously:

1.  Send a POST request to the Execute Async resource. If you’re passing filters, include them in the POST request metadata. The request returns the instance ID where results of the run are stored.

2.  Send a GET request to the Instance Results resource to fetch data using the instance ID.


## Example of a synchronous report run

This GET request to the Execute Sync resource, /services/data/v35.0/analytics/reports/00OR0000000K2UeMAK?includeDetails=true, for a synchronous run returns summary data with details.

```

```

## Example of an asynchronous report run

1.  This is a POST request (an empty request body), /services/data/v35.0/analytics/reports/00OR0000000K2UeMAK/instances, to the Execute Async resource for an asynchronous run requesting summary results.

    ```

    ```

    The response to the POST request returns the instance handle that stores the summary results of the run.

    ```

    ```

2.  A GET request, /services/data/v35.0/analytics/reports/00OR0000000K2UeMAK/instances/0LGR00000000He3OAE, to the Instance Results resource for the instance handle fetches the report results.

    ```

    ```


#### See Also

-   [Execute Sync](atlas.en-us.api_analytics.meta/api_analytics/sforce_analytics_rest_api_getreportrundata.htm "Runs a report immediately with or without changing filters, groupings, or aggregates and returns the latest summary data with or without details for your level of access.")

-   [Instances List](atlas.en-us.api_analytics.meta/api_analytics/sforce_analytics_rest_api_instances_resource.htm)

-   [Instance Results](atlas.en-us.api_analytics.meta/api_analytics/sforce_analytics_rest_api_instance_resource_results.htm "Retrieves results for an instance of a report run asynchronously with or without filters. Depending on your asynchronous report run request, data can be at the summary level or include details.")

## Code Examples

```
{
  "attributes" : {     
    "describeUrl" :
      "/services/data/v35.0/analytics/reports/00OR0000000K2UeMAK/describe",     
    "instancesUrl" :
      "/services/data/v35.0/analytics/reports/00OR0000000K2UeMAK/instances",     
    "reportId" :
      "00OR0000000K2UeMAK",     
    "reportName" : "Deals Closing This Quarter",     
    "type" : "Report" 
  },   
  "allData" : true,   
  "factMap" : {     
    "2!0_0" : {       
      "aggregates" : [ 
        { "label" : "$16,000.01", "value" : 16000.010000000000218278728425502777099609375 }, 
        { "label" : "$16,000.01", "value" : 16000.010000000000218278728425502777099609375 }, 
        { "label" : "1", "value" : 1 } ],       
      "rows" : [ {         
        "dataCells" : [ 
          { "label" : "Acme - 200 Widgets", "value" : "006R00000023IDYIA2" }, 
          { "label" : "$16,000.01",           
            "value" : { "amount" : 16000.01, "currency" : null } }, 
          { "label" : "Word of mouth", "value" : "Word of mouth" }, 
          { "label" : "Need estimate", "value" : "Need estimate" }, 
          { "label" : "60%", "value" : 60}, 
          { "label" : "Q3-2015", "value" : "Q3-2015" }, 
          { "label" : "12", "value" : 12 }, 
          { "label" : "7/31/2015", "value" : "2015-07-31" }, 
          { "label" : "Fred Wiliamson", "value" : "005R0000000Hv5rIAC" }, 
          { "label" : "-", "value" : null } ]       
      } ]     
    },     
    "T!0" : {
      "aggregates" : [ 
        { "label" : "$32,021.01", "value" : 32021.00999999999839928932487964630126953125 }, 
        { "label" : "$16,010.51", "value" : 16010.504999999999199644662439823150634765625 }, 
        { "label" : "2", "value" : 2 } ],       
      "rows" : [ ]      
    },    
...    
     "T!T" : {
      "aggregates" : [ 
        { "label" : "$153,042.01", "value" : 153042.01000000000931322574615478515625 }, 
        { "label" : "$25,507.00", "value" : 25507.00166666666700621135532855987548828125 }, 
        { "label" : "6", "value" : 6 } ],       
      "rows" : [ ]     
    },
...
  "groupingsAcross" : { 
    "groupings" : [ 
      { 
        "groupings" : [ 
          { "groupings" : [ ], "key" : "0_0", "label" : "Existing Business", "value" : "Existing Business" } ],       
        "key" : "0",       
        "label" : "July 2015",       
        "value" : "2015-07-01"
      }, 
      { 
        "groupings" : [ 
          { "groupings" : [ ], "key" : "1_0", "label" : "Existing Business", "value" : "Existing Business" }, 
          { "groupings" : [ ], "key" : "1_1", "label" : "New Business", "value" : "New Business" } ],       
        "key" : "1",       
        "label" : "August 2015",       
        "value" : "2015-08-01"
      }, 
      {       
        "groupings" : [ 
          { "groupings" : [ ], "key" : "2_0", "label" : "Existing Business", "value" : "Existing Business" } ],       
        "key" : "2",       
        "label" : "September 2015",       
        "value" : "2015-09-01"     
      } 
    ]   
  },   
  "groupingsDown" : {
    "groupings" : [ 
      { "groupings" : [ ], "key" : "0", "label" : "Acme", "value" : "001R0000002GuzsIAC" }, 
      { "groupings" : [ ], "key" : "1", "label" : "Facebook", "value" : "001R0000001nUAmIAM" }, 
      { "groupings" : [ ], "key" : "2", "label" : "Home Depot", "value" : "001R0000002Gv5zIAC" }, 
      { "groupings" : [ ], "key" : "3", "label" : "Mircosoft", "value" : "001R0000002Gv5QIAS" } ]   
  },
  "hasDetailRows" : true,   
  "reportExtendedMetadata" : { 
    "aggregateColumnInfo" : {
      "s!AMOUNT" : {         
        "acrossGroupingContext" : null,         
        "dataType" : "currency",         
        "downGroupingContext" : null, 
        "label" : "Sum of Amount" },       
      "a!AMOUNT" : {         
        "acrossGroupingContext" : null,         
        "dataType" : "currency",         
        "downGroupingContext" : null,         
        "label" : "Average Amount" },       
      "RowCount" : {         
        "acrossGroupingContext" : null,         
        "dataType" : "int",         
        "downGroupingContext" : null,         
        "label" : "Record Count" }
    },     
    "detailColumnInfo" : {       
      "OPPORTUNITY_NAME" : { "dataType" : "string", "label" : "Opportunity Name" },       
      "AMOUNT" : { "dataType" : "currency", "label" : "Amount" },       
      "LEAD_SOURCE" : { "dataType" : "picklist", "label" : "Lead Source" },       
      "NEXT_STEP" : { "dataType" : "string", "label" : "Next Step" },
      "PROBABILITY" : { "dataType" : "percent", "label" : "Probability (%)" },       
      "FISCAL_QUARTER" : { "dataType" : "string", "label" : "Fiscal Period" },       
      "AGE" : { "dataType" : "int", "label" : "Age" },       
      "CREATED_DATE" : { "dataType" : "datetime", "label" : "Created Date" },       
      "FULL_NAME" : { "dataType" : "string", "label" : "Opportunity Owner" },       
      "ROLLUP_DESCRIPTION" : { "dataType" : "string", "label" : "Owner Role" }     
    },
    "groupingColumnInfo" : {       
      "ACCOUNT_NAME" : { "dataType" : "string", "groupingLevel" : 0, "label" : "Account Name" },       
      "CLOSE_DATE" : { "dataType" : "date", "groupingLevel" : 0, "label" : "Close Date" },       
      "TYPE" : { "dataType" : "picklist", "groupingLevel" : 1, "label" : "Type" }     
    }   
  },   
  "reportMetadata" : {     
    "aggregates" : [ "s!AMOUNT", "a!AMOUNT", "RowCount" ],     
    "chart" : { 
      "chartType" : "Donut",
      "groupings" : [ "CLOSE_DATE" ],       
      "hasLegend" : true,       
      "showChartValues" : false,       
      "summaries" : [ "s!AMOUNT" ],       
      "summaryAxisLocations" : [ "Y" ],
      "title" : "Pipeline by Stage and Type"
    },     
    "currency" : null,     
    "description" : null,     
    "detailColumns" : [ "OPPORTUNITY_NAME", "AMOUNT", "LEAD_SOURCE","NEXT_STEP", 
      "PROBABILITY", "FISCAL_QUARTER", "AGE", "CREATED_DATE", "FULL_NAME", "ROLLUP_DESCRIPTION" ],  
    "developerName" : "Deals_Closing_This_Quarter",
    "division" : null,     
    "folderId" : "00lR0000000M8IiIAK",     
    "groupingsAcross" : [ 
      { "dateGranularity" : "Month", "name" : "CLOSE_DATE", "sortAggregate" : null, "sortOrder" : "Asc"}, 
      { "dateGranularity" : "None", "name" : "TYPE", "sortAggregate" : null, "sortOrder" : "Asc" } ],
    "groupingsDown" : [ 
      { "dateGranularity" : "None", "name" : "ACCOUNT_NAME", "sortAggregate" : null, "sortOrder" : "Asc" } ],
    "hasDetailRows" : true,     
    "hasRecordCount" : true,     
    "historicalSnapshotDates" : [ ],     
    "id" : "00OR0000000K2UeMAK",     
    "name" : "Deals Closing This Quarter",
    "reportBooleanFilter" : null,     
    "reportFilters" : [ 
      { "column" : "BucketField_36625466", "isRunPageEditable" : true, "operator" : "equals", "value" : "Early,Late" }, 
      { "column" : "TYPE", "isRunPageEditable" : true, "operator" : "equals", "value" : "Existing Business,New Business" } ],     
    "reportFormat" : "MATRIX",     
    "reportType" : { "label" : "Opportunities", "type" : "Opportunity" },     
    "scope" : "organization",
    "showGrandTotal" : true,
    "showSubtotals" : true,
    "sortBy" : [ ],
    "standardDateFilter" : { 
      "column" : "CLOSE_DATE", 
      "durationValue" : "THIS_FISCAL_QUARTER", 
      "endDate" : "2015-09-30", 
      "startDate" : "2015-07-01" },     
    "standardFilters" : [ 
      { "name" : "open", "value" : "all" }, 
      { "name" : "probability", "value" : ">0" } ]   
  }
}
```

```
{   
  "completionDate" : null,   
  "hasDetailRows" : true,   
  "id" : "0LGR00000000He3OAE",
  "ownerId" : "005R0000000Hv5rIAC",   
  "queryable" : false,   
  "requestDate" : "2015-08-12T16:05:43Z",   
  "status" : "New",   
  "url" : "/services/data/v35.0/analytics/reports/00OR0000000K2UeMAK/instances/0LGR00000000He3OAE"
}
```

```
{   
  "attributes" : {     
    "completionDate" : "2015-08-12T16:05:44Z",     
    "id" : "0LGR00000000He3OAE",     
    "ownerId" : "005R0000000Hv5rIAC",     
    "queryable" : false,
    "reportId" : "00OR0000000K2UeMAK",     
    "reportName" : "Deals Closing This Quarter",
    "requestDate" : "2015-08-12T16:05:43Z",     
    "status" : "Success",     
    "type" : "ReportInstance" },   
  "allData" : true,   
  "factMap" : {     
    "2!0_0" : {
      "aggregates" : [ 
        { "label" : "$16,000.01", "value" : 16000.010000000000218278728425502777099609375 }, 
        { "label" : "$16,000.01", "value" : 16000.010000000000218278728425502777099609375 }, 
        { "label" : "1", "value" : 1 } ],       
      "rows" : [ {         
        "dataCells" : [ 
          { "label" : "Acme - 200 Widgets", "value" : "006R00000023IDYIA2" }, 
          { "label" : "$16,000.01", 
            "value" : { "amount" : 16000.01, 
            "currency" : null } }, 
          { "label" : "Word of mouth", "value" : "Word of mouth" }, 
          { "label" : "Need estimate", "value" : "Need estimate" }, 
          { "label" : "60%", "value" : 60 }, 
          { "label" : "Q3-2015", "value" : "Q3-2015" }, 
          { "label" : "12", "value" : 12 }, 
          { "label" : "7/31/2015", "value" : "2015-07-31" }, 
          { "label" : "Fred Wiliamson", "value" : "005R0000000Hv5rIAC" }, 
          { "label" : "-", "value" : null } ]       
        } ]     
    },     
...
  "groupingsAcross" : {
    "groupings" : [ 
... 
    ]   
  },   
  "groupingsDown" : {
    "groupings" : [ 
...
    ]   
  },
  "hasDetailRows" : true,   
  "reportExtendedMetadata" : {     
    "aggregateColumnInfo" : {
      "s!AMOUNT" : { 
        "acrossGroupingContext" : null, 
        "dataType" : "currency",         
        "downGroupingContext" : null,         
        "label" : "Sum of Amount" },       
      "a!AMOUNT" : {         
        "acrossGroupingContext" : null,         
        "dataType" : "currency",         
        "downGroupingContext" : null,
        "label" : "Average Amount" },       
      "RowCount" : {         
        "acrossGroupingContext" : null,         
        "dataType" : "int",         
        "downGroupingContext" : null,
        "label" : "Record Count" }
    },     
    "detailColumnInfo" : 
      { "OPPORTUNITY_NAME" : { "dataType" : "string", "label" : "Opportunity Name" },       
        "AMOUNT" : { "dataType" : "currency", "label" : "Amount"},       
        "LEAD_SOURCE" : { "dataType" : "picklist", "label" : "Lead Source"  },       
        "NEXT_STEP" : { "dataType" : "string", "label" : "Next Step" },
        "PROBABILITY" : { "dataType" : "percent", "label" : "Probability (%)" },       
        "FISCAL_QUARTER" : { "dataType" : "string", "label" : "Fiscal Period" },       
        "AGE" : { "dataType" : "int", "label" : "Age" },       
        "CREATED_DATE" : { "dataType" : "datetime", "label" : "Created Date" },       
        "FULL_NAME" : { "dataType" : "string", "label" : "Opportunity Owner" },       
        "ROLLUP_DESCRIPTION" : { "dataType" : "string", "label" : "Owner Role" } },
    "groupingColumnInfo" : {       
      "ACCOUNT_NAME" : { "dataType" : "string", "groupingLevel" : 0, "label" : "Account Name" },       
      "CLOSE_DATE" : { "dataType" : "date", "groupingLevel" : 0, "label" : "Close Date" },       
      "TYPE" : { "dataType" : "picklist", "groupingLevel" : 1, "label" : "Type" }}   
  },   
  "reportMetadata" : {     
    "aggregates" : [ "s!AMOUNT", "a!AMOUNT", "RowCount" ],     
    "chart" : { 
      "chartType" : "Donut", 
      "groupings" : [ "CLOSE_DATE" ], 
      "hasLegend" : true, 
      "showChartValues" : false,       
      "summaries" : [ "s!AMOUNT" ],       
      "summaryAxisLocations" : [ "Y" ],
      "title" : "Pipeline by Stage and Type" },     
    "currency" : null,     
    "description" : null,     
    "detailColumns" : [ "OPPORTUNITY_NAME", "AMOUNT", "LEAD_SOURCE", "NEXT_STEP", "PROBABILITY", 
      "FISCAL_QUARTER", "AGE", "CREATED_DATE", "FULL_NAME", "ROLLUP_DESCRIPTION" ],     
    "developerName" : "Deals_Closing_This_Quarter",
    "division" : null,     
    "folderId" : "00lR0000000M8IiIAK",     
    "groupingsAcross" : [ 
      { "dateGranularity" : "Month", "name" : "CLOSE_DATE", "sortAggregate" : null, "sortOrder" : "Asc" }, 
      { "dateGranularity" : "None", "name" : "TYPE", "sortAggregate" : null, "sortOrder" : "Asc" } ],
    "groupingsDown" : [ 
      { "dateGranularity" : "None", "name" : "ACCOUNT_NAME", "sortAggregate" : null, "sortOrder" : "Asc" } ],
    "hasDetailRows" : true,     
    "hasRecordCount" : true,     
    "historicalSnapshotDates" : [ ],     
    "id" : "00OR0000000K2UeMAK",     
    "name" : "Deals Closing This Quarter",
    "reportBooleanFilter" : null,     
    "reportFilters" : [ 
      { "column" : "BucketField_36625466", "isRunPageEditable" : false, "operator" : "equals", "value" : "Early,Late" }, 
      { "column" : "TYPE", "isRunPageEditable" : false, "operator" : "equals", "value" : "Existing Business,New Business" } ],     
    "reportFormat" : "MATRIX",     
    "reportType" : { "label" : "Opportunities", "type" : "Opportunity" },     
    "scope" : "organization",     
    "showGrandTotal" : true,     
    "showSubtotals" : true,     
    "sortBy" : [ ],     
    "standardDateFilter" : { 
      "column" : "CLOSE_DATE", 
      "durationValue" : "THIS_FISCAL_QUARTER", 
      "endDate" : "2015-09-30",
      "startDate" : "2015-07-01" },     
    "standardFilters" : [ 
      { "name" : "open", "value" : "all" }, 
      { "name" : "probability", "value" : ">0" } ]
  } 
}
```

## Related Topics

- Execute Sync (atlas.en-us.api_analytics.meta/api_analytics/sforce_analytics_rest_api_getreportrundata.htm)
- Instances List (atlas.en-us.api_analytics.meta/api_analytics/sforce_analytics_rest_api_instances_resource.htm)
- Instance Results (atlas.en-us.api_analytics.meta/api_analytics/sforce_analytics_rest_api_instance_resource_results.htm)

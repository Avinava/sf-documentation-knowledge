---
title: "Query CRM Analytics Data with the Query API"
domain: bi-dev-guide-rest
topic: query-crm-analytics-data-with-the-query-api
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:04.918Z
estimatedTokens: 1130
keywords: [Query, CRM, Analytics, Data, API, REST, directly, SAQL, SQL, queries, Execute, Programmatically]
---

# Query CRM Analytics Data with the Query API

> Use the CRM Analytics REST API to directly query analytics data using SAQL or SQL
  queries.

# Query CRM Analytics Data with the Query API

Use the CRM Analytics REST API to directly query analytics data using SAQL or SQL queries.

## Execute Analytics Queries Programmatically

You can use a REST API to query analytics datasets using either SAQL or SQL query statements. The query endpoint is wave/query and takes a POST request body using a [SAQL Query Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_saql_query_input.htm "An Analytics query written in SAQL or SQL.") to execute the query.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_rest)

#### Note

You can use the Lightning Web Component lightning/analyticsWaveApi module to bring this functionality into Salesforce, without proxying REST APIs directly. For more information, see the reference section for the [executeQuery](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.reference_analytics_execute_query) function.

Example SAQL Query Request

For SAQL queries executed using REST API, you must have both the dataset ID and the dataset version ID to specify the dataset you want to query. Using the name of the dataset in the query returns an error. The only required attribute for the request is query.

```

```

Example SAQL Query Response

The response results include metadata and records. It also returns the original query and the response time. If there are warnings or errors, warnings is included. For the SAQL query executed in the previous example, here’s the response:

```

```

Example SQL Request Body

The default language for query execution is SAQL. To use SQL, include the attribute "queryLanguage" : "SQL" in your request. For SQL queries, you can use the dataset name. Here’s the same query request in SQL.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_rest)

#### Note

If you forget to specify "queryLanguage" : "SQL", the request returns a syntax error.

Example SQL Query Response

The response records look the same as the SAQL response, but the metadata is different. The columns key includes the name and type of projections in the query.

```

```

Example SQL Metadata: Group By Query With an Aggregation

The query projects the aggregation avg(Sales) as AvgSales, which returns numerical data. In the metadata, the corresponding column type is returned as numeric.

```

```

Example SQL Query and Response Body: Extract Date Parts from a Date Field

This example returns the year, month, and day from the CloseDate field as numerical values. The request features the timezone attribute, which is attribute is optional and can only be used if timezone is enabled for the org.

```

```

```

```

Example SQL Query and Response Body: Project Date Field of Type DateTime

This query returns date information as timestamps.

```

```

```

```

Query Metadata Details

Clients can parse the queries to figure out what dimensions and groups are used, but this can be expensive. So, in most cases, the query response contains a metadata section, which provides grouping and column information. The metadata section, if present, is found in the results key in the query response payload. The metadata section is structured with columns and groups keys:

```

```

The columns key includes the name and type of the projections of the query, and the groups key contains a list of groups used in the query.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_rest)

#### Note

-   The metadata is added when the query is successful. If the query fails to run, if there’s a syntax error, or if the authorization callback fails then the metadata isn’t added to the results.
-   The value set in a column name is the alias given to the projection and not the name of the dimension.
-   A list of the groups used in the query is returned in the groups key, provided the query isn’t considered complex—where the group name returned is nondeterministic (the name of the group is used in multiple streams of the query). This is the case when the query uses cogroup or union. In such cases, the groups key is empty.

#### See Also

-   [Analytics SAQL Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_intro.htm)

-   [SQL for Analytics Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.bi_dev_guide_sql.meta/bi_dev_guide_sql/bi_sql_intro.htm)

## Code Examples

```
{
    "query" : "q = load "<datasetId>/<datasetVersionId>"; q = group q by 'Status'; q = foreach q generate 'Status' as 'Status', count() as 'count'; q = limit q 20;",
    "queryLanguage" : "SAQL"
}
```

```
{
  "action" : "query",
  "responseId" : "4l-kl6BTnH4ay9-qbx2Re-",
  "results" : {
    "metadata" : [ {
      "lineage" : {
        "type" : "foreach",
        "projections" : [ {
          "field" : {
            "id" : "q.Status",
            "type" : "string"
          },
          "inputs" : [ {
            "id" : "q.Status"
          } ]
        }, {
          "field" : {
            "id" : "q.count",
            "type" : "numeric"
          }
        } ],
        "input" : {
          "type" : "group",
          "groups" : [ {
            "id" : "q.Status"
          } ]
        }
      },
      "queryLanguage" : "SAQL"
    } ],
    "records" : [ {
      "Status" : "Closed",
      "count" : 7
    }, {
      "Status" : "Open",
      "count" : 6
    } ]
  },
  "query" : "q = load "<datasetId>/<datasetVersionId>"; q = group q by 'Status'; q = foreach q generate 'Status' as 'Status', count() as 'count'; q = limit q 20;",
  "responseTime" : 3,
  "warnings" : [
    {
      "code" : "001",
      "message" : "Limit exceeded"
    },
    {
      "code" : "002",
      "message" : "Another warning..."
    }
  ]
}
```

```
{
  "query" : "SELECT Status, COUNT(*) as StatusCount FROM "<name>" GROUP BY Status LIMIT 20;", 
  "queryLanguage": "SQL"
}
```

```
{ 
  "action" : "query", 
  "responseId" : "4l-mtW26NZ4OYu-qbx3GN-", 
  "results" : { 
    "metadata" : [ 
      { 
        "columns" : [ 
          { 
            "columnLabel" : "Status", 
            "columnType" : "varchar" 
          }, 
          { 
            "columnLabel" : "StatusCount", 
            "columnType" : "numeric" 
          } 
        ], 
        "queryLanguage" : "SQL" 
      } 
    ], 
    "records" : [ 
      { 
        "Status" : "Closed", 
        "StatusCount" : 7 
      }, 
      { 
        "Status" : "Open", 
        "StatusCount" : 6 
      } 
    ] 
  }, 
  "query" : "SELECT Status, COUNT(*) as StatusCount FROM "Cases1" GROUP BY Status LIMIT 20;", 
  "responseTime" : 9 
}
```

```
"metadata": [
  "columns": [
    {
      "columnLabel": "City",
      "columnType": "varchar"
    },
    {
      "columnLabel": "AvgSales",
      "columnType": "numeric"
    }
  ],
  "queryLanguage": "SQL"
]
```

## Related Topics

- SAQL Query Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_saql_query_input.htm)

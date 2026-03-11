---
title: "Query Performance Feedback (Beta)"
domain: rest-api
topic: query-performance-feedback-beta
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:44:25.548Z
keywords: [Query, Performance, Feedback, Beta, Note, Syntax, Resources, Executing, SOQL, Queries]
---

# Query Performance Feedback (Beta)

# Query Performance Feedback (Beta)

Analyzes the performance of a specified SOQL query, report, or list view without executing it.

Use the explain parameter in a request to get a response that details how Salesforce processes your query, report, or list view and how to optimize it.

The Query Performance Feedback resource is available in API version 30.0 and later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_rest)

#### Note

This feature is a Beta Service. Customer may opt to try such Beta Service in its sole discretion. Any use of the Beta Service is subject to the applicable Beta Services Terms provided at [Agreements and Terms](https://www.salesforce.com/company/legal/agreements/).

## Syntax

URI

/services/data/vXX.X/query?explain=query

Formats

JSON, XML

HTTP Method

GET

Authentication

Authorization: Bearer token

Parameters

| Parameter | Description |
| --- | --- |
| explain | A SOQL query, report, or list view that you want to analyze. To analyze a query, provide the full query in the request. To analyze a report or list view, provide the ID of the report or list view.If the SOQL query string is invalid, a MALFORMED_QUERY response is returned. If the report or list view ID is invalid, an INVALID_ID response is returned. |

Response body

The response body contains one or more plans that can be used to execute the query, report, or list view. The plans are sorted from most optimal to least optimal. Each plan has the following information:

| Name | Type | Description |
| --- | --- | --- |
| cardinality | number | The estimated number of records the query would return, based on index fields, if any. |
| fields | string[] | If the leading operation type is Index, these values are the index fields used for the query. Otherwise, the value is null. |
| leadingOperationType | string | The primary operation type that can use to optimize the query. This type can be one of these values:Index—The query uses an index on the query object.Other—The query uses optimizations internal to Salesforce.Sharing—The query uses an index based on the user’s sharing rules. If there are sharing rules that limit which records are visible to the current user, those rules can optimize the query.TableScan—The query scans all records for the query object, and doesn’t use an index. |
| notes | feedback note[] | An array of one or more feedback notes. Each note contains:description— A detailed description of a part of the optimization. This description can include information on optimizations that can’t be used and why they can’t used.fields— An array of one or more fields used for the optimization.tableEnumOrId— The table name for the fields used for the optimization.This response field is available in API version 33.0 and later. |
| relativeCost | number | The cost of this query compared to the SOQL selective query threshold. A value greater than 1.0 means the query isn’t selective. For more information on selective queries, see Working with Very Large SOQL Queries in the Apex Developer Guide. |
| sobjectCardinality | number | The approximate count of all records in your organization for the query object. |
| sobjectType | string | The name of the query object, such as Merchandise__c. |

## Resources for Executing SOQL Queries

-   For an example of how to use the explain parameter, see [Get Feedback on Query Performance](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/dome_query_explain.htm "HTML (New Window)").
-   For more information on SOQL in general, see the [SOQL and SOSL Reference](https://developer.salesforce.com/docs/atlas.en-us.260.0.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_sosl_intro.htm "HTML (New Window)").
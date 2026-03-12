---
title: "SOQL and SOSL Limits for Search Queries"
domain: salesforce-app-limits-cheatsheet
topic: soql-and-sosl-limits-for-search-queries
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:41.216Z
estimatedTokens: 1327
keywords: [SOQL, SOSL, Limits, Search, Queries, Long, complex, statements, contain, formula, result, QUERY_TOO_COMPLICATED, error, occurs, because]
---

# SOQL and SOSL Limits for Search Queries

> Long, complex SOQL statements, such as
                                statements that contain many formula fields, can result in a QUERY_TOO_COMPLICATED error. The
                                error occurs because the statement is expanded internally when
                                processe

# SOQL and SOSL Limits for Search Queries

| Feature | Limit | Limit Description |
| --- | --- | --- |
| SOQL statements | Maximum length of SOQL statements | By default, 100,000 characters. For details on SOQL statement limits, including information on queries that involve external objects, see Understanding Relationship Query Limitations.Long, complex SOQL statements, such as statements that contain many formula fields, can result in a QUERY_TOO_COMPLICATED error. The error occurs because the statement is expanded internally when processed by Salesforce, even though the original SOQL statement is under the 100,000 character limit. To avoid this error, reduce the complexity of your SOQL statement.Page layouts in Lightning with more than 250 fields can also cause a QUERY_TOO_COMPLICATED error. Lightning uses auto-generated SOQL to retrieve fields for a record page layout, so the error can occur even if there isn’t any customer-written SOQL.The character limit can also be reached by including too many currency fields. Currency fields require SOQL to use a format method, roughly doubling the field API name length for each currency field.The SOQL statement character limit does not apply when using SOQL with dynamic Apex. |
| Maximum number of junction IDs | 500 IDs per query. If a query includes 501 or more junction IDs, the query fails and returns the MALFORMED_QUERY exception. |
| SOQL WHERE clause | Strings in SOQL WHERE clauses | 4,000 characters for each string within a WHERE clause. |
| SOQL query results | Maximum rows returned | 2,000 results per request (API version 28.0 and later), unless you specify custom limits in the query. This limit includes results from child objects. Previous API versions return 200 results. When a query is executed from within an Apex class, additional limits apply. See Apex Governor Limits for more information. |
| Availability | 2 days, including results in nested queries. |
| SOQL query timeout | Maximum runtime for a SOQL query | 32 minutes total for both executing the operation and processing the results, but a query can time out at either the execution or processing stage. A query operation has 2 minutes to execute and 30 minutes to process results before timeout occurs. |
| SOSL statements | Maximum length of SOSL statements | By default, 100,000 characters. This limit is tied to the SOQL statement character limit defined for your org. |
| SOSL search query strings | Maximum length of SearchQuery string | If the SearchQuery string is longer than 10,000 characters, no result rows are returned. If SearchQuery is longer than 4,000 characters, any logical operators are removed. For example, the AND operator in a statement with a SearchQuery that’s 4,001 characters defaults to the OR operator, which could return more results than expected. |
| SOSL query results | Maximum rows returned | 2,000 results total (API version 28.0 and later), unless you specify custom limits in the query. This limit includes results from child objects. Previous API versions return 200 results. |
| Relationship queries | Relationship query limits | No more than 55 child-to-parent relationships can be specified in a query. A custom object allows up to 40 relationships, so you can reference all the child-to-parent relationships for a custom object in one query.A single query of polymorphic fields can count multiple times against the child-to-parent relationship limit. For more information, see Understanding Relationship Query Limitations.No more than 20 parent-to-child relationships can be specified in a query.In each specified relationship, no more than five levels can be specified in a child-to-parent relationship. For example, Contact.Account.Owner.FirstName (three levels).In API version 57.0 and earlier, only two levels of parent-to-child relationship can be specified in a query.In API version 58.0 and later, up to five levels of parent-to-child relationship can be queried via REST, SOAP, and Apex query calls for standard and custom objects. SOQL queries with five-level parent-to-child relationships aren't supported for big objects, external objects, or Bulk API and Bulk API 2.0. |
| FOR VIEW and FOR REFERENCE | Maximum RecentlyViewed records allowed | The RecentlyViewed object is updated every time the logged-in user views or references a record. It is also updated when records are retrieved using the FOR VIEW or FOR REFERENCE clause in a SOQL query. To ensure that the most recent data is available, RecentlyViewed data is periodically truncated down to 200 records per object. RecentlyViewed data is retained for 90 days, after which it is removed on a periodic basis. |
| OFFSET clause | Maximum number of rows skipped by OFFSET | The maximum offset is 2,000 rows. Requesting an offset greater than 2,000 results in a NUMBER_OUTSIDE_VALID_RANGE error. |
| ORDER BY clause in SOQL statement | ORDER BY fields limit | The ORDER BY clause in the SELECT statement of a SOQL query controls the order of the query results, such as alphabetically beginning with z. If records are null, you can use ORDER BY to display the empty records first or last. |

#### See Also

-   [*Salesforce Help*: Search Query Limits](https://help.salesforce.com/s/articleView?id=ai.search_query_limitations.htm&type=5&language=en_US)

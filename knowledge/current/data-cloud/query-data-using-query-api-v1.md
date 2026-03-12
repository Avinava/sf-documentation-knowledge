---
title: "Query Data using Query API V1"
domain: data-cloud
topic: query-data-using-query-api-v1
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:13.414Z
estimatedTokens: 1045
keywords: [Query, Data, API, supports, SQL, ANSI, standard, free, form, objects, include, streams, profile, engagement, model]
---

# Query Data using Query API V1

> The Query API V1 supports SQL query in ANSI standard. The SQL can be a free form SQL
    with objects that include data streams, profile or engagement data model objects, and unified
    data model objects. The Query API V1 supports only synchronous calls. You can use the API to
    support a variety of use cases that include data extraction, external application integration or
    interactive querying on the data lake. If you don't want to fetch the entire data like in case
    of browser-based clients then you can make a call to the API with limit and
      offset.

# Query Data using Query API V1

The Query API V1 supports SQL query in ANSI standard. The SQL can be a free form SQL with objects that include data streams, profile or engagement data model objects, and unified data model objects. The Query API V1 supports only synchronous calls. You can use the API to support a variety of use cases that include data extraction, external application integration or interactive querying on the data lake. If you don't want to fetch the entire data like in case of browser-based clients then you can make a call to the API with limit and offset.

![Note](/docs/resources/img/en-us/252.0?doc_id=images%2Ficon_note.png&folder=c360a_api)

#### Note

A newer version of the Query API is available. We recommend using [Query V2 API](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_query_v2_call_overview.htm "Query API V2 supports SQL query in ANSI standard. The results return as an array of records. The expected input when calling this API is free form SQL. The input objects include data stream, profile and engagement data model objects, and unified data model objects. You can use Query API V2 to support a variety of use cases, which includes large volume data reads, external application integration, or interactive on demand querying on the data lake.") to take advantage of GET calls in addition to POST calls, subsequent requests, and larger response sizes.

## Key Properties

-   The call return limit defaults to the max limit of 49,999 rows returned. Use a done flag to check whether more records exist.
-   There’s no explicit limit to the SQL call length.
-   There’s no explicit limit for the number of nested subqueries.
-   There’s no explicit limit for the number of joins.
-   There’s no explicit limit for the number of filters.
-   There’s no explicit limit for the number of column projections.
-   There’s no explicit limit for any specific data type, such as VARCHAR, DECIMAL, or TIMESTAMP.
-   Pagination supported via limit, offset, and orderby parameters.
    -   When done is flagged as true in the response, then there are no more records to query. When the response is false, call orderby with offset param to retrieve the next set of numbers.

## Connected App Setup

![Important](/docs/resources/img/en-us/252.0?doc_id=images%2Ficon_note_important.png&folder=c360a_api)

#### Important

Your orgs must be provisioned with Data Cloud licenses and the users must be assigned to appropriate roles for having full access to objects in the Data Cloud. Refer to [User Roles and Permission Sets in Data Cloud](https://help.salesforce.com/s/articleView?id=sf.c360_a_userpermissions.htm&type=5&language=en_US) before setting up the Connected App.

[Set Up a Connected App](https://help.salesforce.com/s/articleView?id=sf.c360_a_set_up_tableau_connected_app.htm&type=5&language=en_US) to discover new insights about your customers.

## Acquire and Exchange Your Access Token for Data Cloud

Refer to [Getting Started](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_getting_started_with_cdp.htm "Use this section to understand the prerequisites required to get started with Data Cloud API libraries and SDKs.") page to acquire the token.

## Key Qualifiers

We recommend that you include key qualifier fields in all table joins for queries submitted through the Query API V2. Make sure to use the COALESCE() function to get a null-safe join. When key qualifiers aren’t configured on data lake object fields, the value for the key qualifier field is null. In such cases, use the COALESCE() function to achieve the desired results. This sample query covers the usage of COALESCE() function.

```

```

## Call Reference

-   **[POST /api/v1/query](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_query.htm)**
    Use Query API V1 to query Data Cloud data lake across data model, data lake, unified, and linked objects.

#### See Also

-   [API Limits for Profile, Query, and Calculated Insights](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_limits.htm "There are three distinct classes of APIs used to extract data from Data Cloud (formerly Customer Data Platform): Profile, Query, and Calculated Insights.")

## Code Examples

```
SELECT * FROM ssot__ContactPointEmail__dlm email 
LEFT JOIN ssot__Individual__dlm individual 
ON email.ssot__PartyId__c = individual.ssot__Id__c 
AND 
COALESCE(email.KQ_PartyId__c, '') = COALESCE(individual.KQ_Id__c, '') 
limit 10
```

## Related Topics

- Query V2 API (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_query_v2_call_overview.htm)
- Getting Started (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_getting_started_with_cdp.htm)
- POST /api/v1/query (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_query.htm)
- API Limits for Profile, Query, and Calculated Insights (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_limits.htm)

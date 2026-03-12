---
title: "Custom Search Functionality"
domain: salesforce-large-data-volumes-bp
topic: custom-search-functionality
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:41.976Z
estimatedTokens: 358
keywords: [Custom, Search, Functionality, customer, needed, large, data, volumes, across, multiple, objects, specific, wildcards, created, Visualforce]
---

# Custom Search Functionality

> The customer needed to search
in large data volumes across multiple objects using specific values
and wildcards. The customer created a custom Visualforce page
that would allow the user to enter 1–20 different fields, and
then search using SOQL on
those combinations of fields.

# Custom Search Functionality

## Situation

The customer needed to search in large data volumes across multiple objects using specific values and wildcards. The customer created a custom Visualforce page that would allow the user to enter 1–20 different fields, and then search using SOQL on those combinations of fields.

Search optimization became difficult because:

-   When many values were entered, the WHERE clause was large and difficult to tune. When wildcards were introduced, the queries took longer.
-   Querying across multiple objects was sometimes required to satisfy the overall search query. This practice resulted in multiple queries occurring, which extended the search.
-   SOQL is not always appropriate for all query types.

## Solutions

The solutions were to:

-   Use only essential search fields to reduce the number of fields that could be searched. Restricting the number of simultaneous fields that could be used during a single search to the common use cases allowed Salesforce to tune with indexes.
-   De-normalize the data from the multiple objects into a single custom object to avoid having to make multiple querying calls.
-   Dynamically determine the use of SOQL or SOSL to perform the search based on both the number of fields searched and the types of values entered. For example, very specific values (i.e., no wild cards) used SOQL to query, which allowed indexes to enhance performance.

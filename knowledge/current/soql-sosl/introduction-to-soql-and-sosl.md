---
title: "Introduction to SOQL and SOSL"
domain: soql-sosl
topic: introduction-to-soql-and-sosl
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:36:19.837Z
estimatedTokens: 972
keywords: [Introduction, SOQL, SOSL, you’ve, built, custom, Salesforce, Query, Language, Search, APIs, organization’s, data, Deciding, Performance]
---

# Introduction to SOQL and SOSL

> If you’ve built a custom UI for Salesforce, you can use the Salesforce Object Query
  Language (SOQL) and Salesforce Object Search Language (SOSL) APIs to search your organization’s
  Salesforce data.

# Introduction to SOQL and SOSL

If you’ve built a custom UI for Salesforce, you can use the Salesforce Object Query Language (SOQL) and Salesforce Object Search Language (SOSL) APIs to search your organization’s Salesforce data.

This guide explains when to use SOQL and SOSL and outlines the syntax, clauses, limits, and performance considerations for both languages. It is intended for developers and assumes knowledge and experience working with APIs to interact with data.

## Deciding Which to Use

A SOQL query is the equivalent of a SELECT SQL statement and searches the org database. SOSL is a programmatic way of performing a text-based search against the search index.

Whether you use SOQL or SOSL depends on whether you know which objects or fields you want to search, plus other considerations.

Use SOQL when you know which objects the data resides in, and you want to:

-   Retrieve data from a single object or from multiple objects that are related to one another.
-   Count the number of records that meet specified criteria.
-   Sort results as part of the query.
-   Retrieve data from number, date, or checkbox fields.

Use SOSL when you don’t know which object or field the data resides in, and you want to:

-   Retrieve data for a specific term that you know exists within a field. Because SOSL can tokenize multiple terms within a field and build a search index from this, SOSL searches are faster and can return more relevant results.
-   Retrieve multiple objects and fields efficiently where the objects might or might not be related to one another.
-   Retrieve data for a particular division in an organization using the divisions feature.
-   Retrieve data that’s in Chinese, Japanese, Korean, or Thai. Morphological tokenization for CJKT terms helps ensure accurate results.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=soql_sosl)

#### Note

SOSL doesn’t support big objects.

## Performance Considerations

To increase the efficiency of queries and searches, keep in mind:

-   Both SOQL WHERE filters and SOSL search queries can specify text you should look for. When a given search can use either language, SOSL is generally faster than SOQL if the search expression uses a CONTAINS term.
-   SOSL can tokenize multiple terms within a field (for example, multiple words separated by spaces) and builds a search index off this. If you’re searching for a specific distinct term that you know exists within a field, you might find SOSL is faster than SOQL for these searches. For example, you might use SOSL if you were searching for “John” against fields that contained values like “Paul and John Company”.
-   Keep the number of fields to be searched or queried to a minimum. Using many fields leads to many permutations, which can be difficult to tune.

For more information, see [Best Practices for Deployments with Large Data Volumes](https://developer.salesforce.com/docs/atlas.en-us.260.0.salesforce_large_data_volumes_bp.meta/salesforce_large_data_volumes_bp/ "HTML (New Window)").

## Sending Queries and Searches

Construct and execute queries and searches using one of several environments, including SOAP API, REST API, Apex, and more. For more information on which environments support queries and searches, see [Salesforce Object Query Language (SOQL)](atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql.htm "Use the Salesforce Object Query Language (SOQL) to search your organization’s Salesforce data for specific information. SOQL is similar to the SELECT statement in the widely used Structured Query Language (SQL) but is designed specifically for Salesforce data.") and [Salesforce Object Search Language (SOSL)](atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_sosl.htm "Use the Salesforce Object Search Language (SOSL) to construct text-based search queries against the search index.").

## Related Topics

- Salesforce Object Query Language (SOQL) (atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql.htm)
- Salesforce Object Search Language (SOSL) (atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_sosl.htm)

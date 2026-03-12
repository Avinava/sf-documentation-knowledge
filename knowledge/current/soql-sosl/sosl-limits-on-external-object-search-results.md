---
title: "SOSL Limits on External Object Search Results"
domain: soql-sosl
topic: sosl-limits-on-external-object-search-results
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:19.880Z
estimatedTokens: 449
keywords: [SOSL, Limits, External, Search, Results, specific, objects]
---

# SOSL Limits on External Object Search Results

> SOSL applies specific limits to external objects in search results.

# SOSL Limits on External Object Search Results

SOSL applies specific limits to external objects in search results.

-   To include an external object in SOSL and Salesforce searches, enable search on both the external object and the external data source. However, syncing always overwrites the external object’s search status to match the search status of the external data source.
-   Only text, text area, and long text area fields on external objects can be searched. If an external object has no searchable fields, searches on that object return no records.
-   External objects don’t support the following.
    -   INCLUDES operator
    -   LIKE operator
    -   EXCLUDES operator
    -   toLabel() function
-   External objects also don’t support Salesforce Knowledge-specific clauses, including the following.
    -   UPDATE TRACKING clause
    -   UPDATE VIEWSTAT clause
    -   WITH DATA CATEGORY clause
-   External objects must be specified explicitly in a RETURNING clause to be returned in search results. For example:

    ```

    ```

-   Text strings must be 100 or fewer characters.

The following limits apply only to the OData 2.0 and 4.0 adapters for Salesforce Connect.

-   The OData adapters for Salesforce Connect don’t support logical operators in a FIND clause. We send the entire search query string to the external system as a case-sensitive single phrase after removing all ASCII punctuation characters except hyphens (-). For example, FIND {MyProspect OR “John Smith”} searches for the exact phrase “MyProspect OR John Smith”.

The following limits apply only to custom adapters for Salesforce Connect.

-   The convertCurrency() function isn’t supported in SOSL queries of external objects.
-   WITH clauses aren’t supported in SOSL queries of external objects.

## Code Examples

```
FIND {MyProspect} RETURNING MyExternalObject, MyOtherExternalObject
```

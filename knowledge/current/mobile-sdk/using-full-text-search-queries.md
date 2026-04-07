---
title: "Using Full-Text Search Queries"
domain: mobile-sdk
topic: using-full-text-search-queries
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:26.898Z
estimatedTokens: 874
keywords: [Full-Text, Search, Queries, perform, efficient, flexible, searches, SmartStore, yield, significant, performance, advantages, over, “like”, you’re, dealing, large, Staying, Current]
---

> To perform efficient and flexible searches in SmartStore, you use full-text queries.
    Full-text queries yield significant performance advantages over “like” queries when you’re
    dealing with large data sets.

# Using Full-Text Search Queries

To perform efficient and flexible searches in SmartStore, you use full-text queries. Full-text queries yield significant performance advantages over “like” queries when you’re dealing with large data sets.

Beginning with Mobile SDK 3.3, SmartStore supports full-text search. Full-text search is a technology that internet search engines use to collate documents placed on the web.

## About Full-Text

Here's how full-text search works: A customer inputs a term or series of terms. Optionally, the customer can connect terms with binary operators or group them into phrases. A full-text search engine evaluates the given terms, applying any specified operators and groupings. The search engine uses the resulting search parameters to find matching documents, or, in the case of SmartStore, matching soup elements. To support full text search, SmartStore provides a full-text index spec for defining soup fields, and a query spec for performing queries on those fields.

Full-text queries, or "match" queries, are more efficient than "like" queries. "Like" queries require full index scans of all keys, with run times proportional to the number of rows searched. "Match" queries find the given term or terms in the index and return the associated record IDs. The full-text search optimization is negligible for fewer than 1000 records, but, beyond that threshold, run time stays nearly constant as the number of records increases. If you're searching through tens of thousands of records, “match” queries can be 10–100 times faster than “like” queries.

Keep these points in mind when using full-text fields and queries:

-   Insertions with a full-text index field take longer than ordinary insertions.
-   You can't perform MATCH queries in a Smart SQL statement. For example, the following query is **not supported**:

    ```

    ```

    Instead, use a “match” query spec.

## Staying Current with Full-Text Search

In Mobile SDK 4.2, SmartStore updates its full-text search version from FTS4 to FTS5. This upgrade lets Mobile SDK take advantage of full-text index specs.

If you upgrade an app from Mobile SDK 4.1 to 4.2, existing FTS4 virtual tables remain intact. On the other hand, new soups that you create after upgrading use FTS5 virtual tables. These soups all work seamlessly together, but you can choose to upgrade legacy soups. Simply call alterSoup and pass in your original set of index specs. This call uses FTS5 to recreate the virtual tables that back full-text index specs.

See “Appendix A” at [www.sqlite.org/fts5.html](https://www.sqlite.org/fts5.html "HTML (New Window)") for a comparison of FTS4 to FTS5.

-   **[Full-Text Search Index Specs](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_fts_index_spec.htm)**
    To use full-text search, you register your soup with one or more full-text-indexed paths. SmartStore provides a full\_text index spec for designating index fields.
-   **[Full-Text Query Specs](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_fts_query_spec.htm)**
    To perform a full-text query, you create a SmartStore "match" query spec using your platform’s match query method. For the matchKey argument, you provide a full-text search query.
-   **[Full-Text Query Syntax](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_fts_query_syntax.htm)**
    Mobile SDK full-text queries use SQLite's enhanced query syntax. With this syntax, you can use logical operators to refine your search.

## Code Examples

```
SELECT {soupName:_soup} FROM {soupName} WHERE {soupName:name} MATCH 'cat'
```

## Related Topics

- Full-Text Search Index Specs (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_fts_index_spec.htm)
- Full-Text Query Specs (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_fts_query_spec.htm)
- Full-Text Query Syntax (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_fts_query_syntax.htm)

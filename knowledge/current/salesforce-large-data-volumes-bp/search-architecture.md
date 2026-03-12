---
title: "Search Architecture"
domain: salesforce-large-data-volumes-bp
topic: search-architecture
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:41.995Z
estimatedTokens: 396
keywords: [Search, Architecture, capability, query, records, free-form, text, Salesforce, own, data, store, optimized, searching]
---

# Search Architecture

> Search is the capability to query records based on free-form text. The Salesforce search architecture is
         based on its own data store, which is optimized for searching for that text.

# Search Architecture

*Search* is the capability to query records based on free-form text. The Salesforce search architecture is based on its own data store, which is optimized for searching for that text.

Salesforce provides search capabilities in many areas of the application, including:

-   The sidebar
-   Advanced and global searches
-   Find boxes and lookup fields
-   Suggested Solutions and Knowledge Base
-   Web-to-Lead and Web-to-Case
-   Duplicate lead processing
-   Salesforce Object Search Language (SOSL) for Apex and the API

For data to be searched, it must first be indexed. The indexes are created using the search indexing servers, which also generate and asynchronously process queue entries of newly created or modified data. After a searchable object’s record is created or updated, it could take about 15 minutes or more for the updated text to become searchable.

Salesforce performs indexed searches by first searching the indexes for appropriate records, then narrowing down the results based on access permissions, search limits, and other filters. This process creates a *result set*, which typically contains the most relevant results. After the result set reaches a predetermined size, the remaining records are discarded. The result set is then used to query the records from the database to retrieve the fields that a user sees.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=salesforce_large_data_volumes_bp)

#### Tip

Search can also be accessed with SOSL, which in turn can be invoked using the API or Apex.

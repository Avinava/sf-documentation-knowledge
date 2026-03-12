---
title: "Commerce Management Webstore Search, Indexes"
domain: chatterapi
topic: commerce-management-webstore-search-indexes
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.572Z
estimatedTokens: 208
keywords: [Commerce, Management, Webstore, Search, Indexes, index, product, catalog]
---

# Commerce Management Webstore Search, Indexes

> Get indexes and create an index of a product
    catalog.

# Commerce Management Webstore Search, Indexes

Get indexes and create an index of a product catalog.

Resource

```

```

Available version

49.0

HTTP methods

GET, POST

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

POST doesn’t take request parameters or a request body.

POST creates a live index that replaces the current live index. Any indexes that are in progress are removed when you manually create an index with POST.

Response body for GET

[Commerce Search Index Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_commerce_search_index_collection_output.htm "Collection of indexes.")

Response body for POST

[Commerce Search Index](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_commerce_search_index_output.htm "Index information.")

## Code Examples

```
/commerce/management/webstores/webstoreId/search/indexes
```

## Related Topics

- Commerce Search Index Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_commerce_search_index_collection_output.htm)
- Commerce Search Index (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_commerce_search_index_output.htm)

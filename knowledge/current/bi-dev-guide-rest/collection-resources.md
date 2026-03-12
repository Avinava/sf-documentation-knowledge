---
title: "Collection Resources"
domain: bi-dev-guide-rest
topic: collection-resources
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:03.159Z
estimatedTokens: 560
keywords: [Collection, Resources, Analytics, collections, let, users, manage, their, own, groups, items, personalize, Studio, home]
---

# Collection Resources

> Analytics collections let users manage their own groups of items and personalize their
  Analytics Studio home page.

# Collection Resources

Analytics collections let users manage their own groups of items and personalize their Analytics Studio home page.

## Available resources:

| Resource | Description | Supported HTTP Method | Resource URL |
| --- | --- | --- | --- |
| Collections List Resource | Get and create lists of collections of Analytics resources. | GET POST | /analytics/collections/wave/collections |
| Collections Resource | Get, update, or delete a collection of Analytics resources. | GET PATCH DELETE | /analytics/collections/​<collectionId>/wave/collections/​<collectionId> |
| Collection Items List Resource | Returns a list of Analytics collection items and creates or updates the collection item list. | GET PATCH POST | /analytics/collections/​<collectionId>/​items/wave/collections/​<collectionId>/​items |
| Collection Item Resource | Delete an Analytics resource item from a collection. | DELETE | /analytics/collections/​<collectionId>/​items/​<collectionItemId>/wave/collections/​<collectionId>/​items/​<collectionItemId> |
| Collection Bulk Items Resource | Add items in bulk to the collection. | POST | /analytics/collections/​<collectionId>/bulk-items/wave/collections/​<collectionId>/bulk-items |

-   **[Collections List Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_collections.htm)**
    Returns a list of collections or creates a collection. Each collection contains Analytics resource items.
-   **[Collections Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_collections_collections.htm)**
    Returns, updates, or deletes a collection. Each collection contains Analytics resource items.
-   **[Collections Items List Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_collections_items.htm)**
    Returns a list of Analytics collection items and creates or updates the collection item list.
-   **[Collections Item Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_collections_item.htm)**
    Deletes an item from the collection.
-   **[Collections Bulk Items Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_collections_bulk_items.htm)**
    Add items in bulk to the collection.

## Related Topics

- Collections List Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_collections.htm)
- Collections Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_collections.htm)
- Collection Items List Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_collections_items.htm)
- Collection Item Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_collections_item.htm)
- Collection Bulk Items Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_collections_bulk_items.htm)
- Collections Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_collections_collections.htm)
- Collections Items List Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_collections_items.htm)
- Collections Item Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_collections_item.htm)
- Collections Bulk Items Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_collections_bulk_items.htm)

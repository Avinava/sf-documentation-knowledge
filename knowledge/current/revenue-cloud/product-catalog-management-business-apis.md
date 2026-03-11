---
title: "Product Catalog Management Business APIs"
domain: revenue-cloud
topic: product-catalog-management-business-apis
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T14:37:50.592Z
keywords: [Product, Catalog, Management, Business, APIs, See]
---

# Product Catalog Management Business APIs

# Product Catalog Management Business APIs

Use primitive APIs of Product Catalog Management that serve catalog definitions to users or applications.

This table lists the available Product Catalog Management resources.

| Resource | Description |
| --- | --- |
| /connect/pcm/catalogs (POST) | Retrieve, search, filter, or sort catalog records. |
| /connect/pcm/catalogs/catalogId (GET) | Retrieve details of catalog records based on a catalog ID. |
| /connect/pcm/catalogs/catalogId/categories (GET) | Retrieve the root-level categories of a catalog based on a catalog ID, or subcategories based on a parent category. You can also search, filter, or sort the categories. |
| /connect/pcm/categories/categoryId (GET) | Retrieve details of individual category records based on a category ID. |
| /connect/pcm/products (POST) | Retrieve products. You can also search, filter, or sort the products. |
| /connect/pcm/products/productId (GET) | Retrieve details of individual product records or a bundle based on a product ID. |
| /connect/pcm/products/bulk (POST) | Retrieve details for multiple products. |
| /connect/pcm/index/configurations (GET, PUT) | Retrieve the saved index configurations. Additionally, you can persist the index configuration. |
| /connect/pcm/relatedRecords/entityName (POST) | Retrieve related ProductRampSegment or ProductUsageGrant records for Product2 object. |
| /connect/pcm/index/snapshots (GET) | Retrieve the created snapshots and snapshot indexes. |
| /connect/pcm/index/deploy (POST) | Create indexes for a snapshot. Indexes improve search results and make it easier to find products at run time through search terms. |
| /connect/pcm/index/setting (GET, PATCH) | Fetch and update settings related to indexing and search. |
| /connect/pcm/index/error (GET) | Get the count and details of the errors that occurred during the indexing process. |
| /connect/pcm/deep-clone (POST) | Copy related records of an object along with the main product record. |
| /connect/pcm/unit-of-measure/info (GET) | Get details about the unit of measure for a specific set of records. |
| /connect/pcm/unit-of-measure/rounded-data (POST) | Round off and scale decimal data for a specific set of fields. |

-   **[Resources](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/product_catalog_management_api_resources.htm)**  
    Learn more about the available Product Catalog Management API resources.
-   **[Request Bodies](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/product_catalog_management_api_requests.htm)**  
    Learn more about the available Product Catalog Management API request bodies.
-   **[Response Bodies](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/product_catalog_management_api_responses.htm)**  
    Learn more about the available Product Catalog Management API response bodies.

#### See Also

-   [*Connect REST API Developer Guide*: Introduction](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/intro_what_is_chatter_connect.htm "Connect REST API Developer Guide: Introduction - HTML (New Window)")
---
title: "Product Discovery Business APIs"
domain: revenue-cloud
topic: product-discovery-business-apis
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T14:37:50.631Z
keywords: [Product, Discovery, Business, APIs]
---

# Product Discovery Business APIs

# Product Discovery Business APIs

Use the Product Discovery Business APIs, which are composite APIs, to search products or to discover catalogs, products, and categories during the product browsing experience.

This table lists the available Product Discovery resources.

| Resource | Description |
| --- | --- |
| /connect/cpq/catalogs/catalogId (POST) | Get catalog details for a specified catalog ID. This API is a composite API for Product Discovery. |
| /connect/cpq/catalogs (POST) | Get a paginated list of catalogs. This API is a composite API for Product Discovery. |
| /connect/cpq/categories (POST) | Get a list of categories and subcategories of a specified catalog. This API is a composite API for Product Discovery. |
| /connect/cpq/categories/categoryId (POST) | Get details of a category for a specified category ID. This API is a composite API for Product Discovery. |
| /connect/cpq/qualification (POST) | Run the qualification procedure on a list of product IDs. This API is a composite API for Product Discovery. |
| /connect/cpq/products/search (POST) | Retrieves a list of products based on a search query or search term. This API is a composite API for Product Discovery. |
| /connect/cpq/products/productId (POST) | Get product details, such as attributes, hierarchy, or cardinality, for a specified product ID. This API is a composite API for Product Discovery. |
| /connect/cpq/products (POST) | Get a list of products for a specified catalog, category, or subcategory. This API is a composite API for Product Discovery. |
| /connect/cpq/products/bulk (POST) | Retrieve details for multiple products. This API is a composite API for Product Discovery. |
| /connect/cpq/products/guided-selection (POST) | Retrieve a list of products based on the response identifier or search terms of a guided selection. Guided selection captures user requirements to show suitable products. |

-   **[Resources](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/product_discovery_api_resources.htm)**  
    Learn more about the available Product Discovery API resources.
-   **[Request Bodies](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/product_discovery_api_requests.htm)**  
    Learn more about the available Product Discovery API request bodies.
-   **[Response Bodies](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/product_discovery_api_responses.htm)**  
    Learn more about the available Product Discovery API response bodies.
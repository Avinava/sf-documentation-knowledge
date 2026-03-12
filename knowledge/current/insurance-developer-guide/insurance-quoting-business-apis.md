---
title: "Insurance Quoting Business APIs"
domain: insurance-developer-guide
topic: insurance-quoting-business-apis
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:41.049Z
estimatedTokens: 608
keywords: [Insurance, Quoting, Business, APIs, configure, quotes, quote, line, items, guided, flows, external, end, users]
---

# Insurance Quoting Business APIs

> Create, update, configure, and delete quotes and quote line items. Use the APIs to
    create guided flows for your external end users.

# Insurance Quoting Business APIs

Create, update, configure, and delete quotes and quote line items. Use the APIs to create guided flows for your external end users.

This table lists the available Insurance Quoting resources.

| Resource | Description |
| --- | --- |
| /connect/insurance/quotes (POST) | Generate a quote or quote-ready context in multiple ways. |
| /connect/insurance/product-rating (POST, PATCH) | Rate products or update product ratings for use in Insurance quoting processes. |
| /connect/insurance/product-rating/get-rating-input (POST) | Generate rating input details from a list of Product IDs, and use the generated rating input as the request body for the Insurance Product Rating API to evaluate product pricing. |
| /connect/insurance/product-surcharges/productSurchargeId (PATCH) | Update or fetch a product surcharge for a root product. |
| /connect/insurance/product-surcharges/bulk (POST) | Create one or more product surcharges to associate with a root product. |
| /connect/insurance/quotes/quoteId (GET, PATCH) | Update or get details for a specified quote ID. |
| /connect/insurance/underwriting-rules/invoke (POST) | Invoke underwriting rules for different object records during run time. |
| /connect/insurance/product-clauses/add-eligible-product-clauses (POST) | Add selected eligible product clauses to a quote or context. |
| /connect/insurance/product-clauses/eligible-product-clauses (POST) | Get eligible product clauses based on quoteId and contextId. |
| /connect/insurance/product-clauses/productClauseId (PATCH) | Update an existing product clause for a root product. |
| /connect/insurance/product-clauses/bulk (POST) | Create one or multiple product clauses at once. |
| /connect/insurance/product-clauses/clause-generation (POST) | Generate product clauses based on quote and context information. |

-   **[Resources](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/quote_business_apis_resources.htm)**
    Learn more about the available Insurance Quoting API resources.
-   **[Requests](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/quote_business_apis_requests.htm)**
    Learn more about the available Insurance Quoting requests.
-   **[Responses](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/quote_business_apis_responses.htm)**
    Learn more about the available response bodies of Insurance Quoting APIs.

## Related Topics

- /connect/insurance/quotes (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_resources_insurance_quote.htm)
- /connect/insurance/product-rating (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_resources_product_rating.htm)
- /connect/insurance/product-rating/get-rating-input (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_resources_insurance_product_rating_get_rating_details.htm)
- /connect/insurance/product-surcharges/productSurchargeId (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_resources_product_surcharge.htm)
- /connect/insurance/product-surcharges/bulk (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_resources_product_surcharge_bulk.htm)
- /connect/insurance/quotes/quoteId (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_resources_quote_details.htm)
- /connect/insurance/underwriting-rules/invoke (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_resources_quote_details.htm)
- /connect/insurance/product-clauses/add-eligible-product-clauses (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_resources_insurance_add_eligible_product_clauses.htm)
- /connect/insurance/product-clauses/eligible-product-clauses (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_resources_insurance_eligible_product_clauses.htm)
- /connect/insurance/product-clauses/productClauseId (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_resources_insurance_product_clause_update.htm)

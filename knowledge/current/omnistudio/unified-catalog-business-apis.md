---
title: "Unified Catalog Business APIs"
domain: omnistudio
topic: unified-catalog-business-apis
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:12.676Z
keywords: [Unified, Catalog, Business, APIs, Tax, Calculation]
---

# Unified Catalog Business APIs

# Unified Catalog Business APIs

The Unified Catalog APIs provide a standardized REST interface for accessing catalog data and related business rules used in service automation workflows. These APIs enable client applications to retrieve catalog entities and eligibility rules in a consistent and versioned manner. They are designed to support scalable integrations without requiring catalog-specific logic in consuming systems.

These sections list the available resources.

## Tax Calculation

| Resource | Description |
| --- | --- |
| /connect/service-automation/eligibility-rule (POST) | Create and update rules associated with decision tables. |
| /connect/service-automation/eligibility-rule-metadata (GET) | Get metadata details of a decision table based on the provided expression set ID, type, and qualification type. |

-   **[Resources](atlas.en-us.industries_reference.meta/industries_reference/unified_catalog_business_apis_resources.htm)**  
    Learn more about the available Unified Catalog API resources.
-   **[Request Bodies](atlas.en-us.industries_reference.meta/industries_reference/unified_catalog_business_apis_requests.htm)**  
    Learn more about the available request bodies of Unified Catalog APIs.
-   **[Response Bodies](atlas.en-us.industries_reference.meta/industries_reference/unified_catalog_business_apis_responses.htm)**  
    Learn more about the available response bodies of Unified Catalog APIs.
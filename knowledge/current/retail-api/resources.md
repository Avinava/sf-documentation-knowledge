---
title: "Resources"
domain: retail-api
topic: resources
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:37.184Z
estimatedTokens: 394
keywords: [Resources, Here’s, Consumer, Goods, Business, API]
---

# Resources

> Here’s a list of Consumer Goods Business API resources.

# Resources

Here’s a list of Consumer Goods Business API resources.

-   **[Recommendation Decisions](atlas.en-us.retail_api.meta/retail_api/connect_resources_recommendation_decisions.htm)**
    Save visit or task recommendation decisions.
-   **[Promotion Import Status](atlas.en-us.retail_api.meta/retail_api/connect_resources_get_promotion.htm)**
    An import started with BEGIN\_PROMOTION\_IMPORT can be monitored with this endpoint. It takes the import ID and returns the status of the number of promotions. The import process will be complete, after all the promotions have been moved to either Calculated or Error status.
-   **[Ingest Promotions](atlas.en-us.retail_api.meta/retail_api/connect_resources_ingest_promotions.htm)**
    This endpoint receives the promotions payload that must be processed. The system import promotions, creates and updates them, and triggers the promotion calculation. The status of the import can be monitored with the GET\_PROMOTION\_IMPORT\_STATUS endpoint.
-   **[Begin Promotion Import](atlas.en-us.retail_api.meta/retail_api/begin_promotion_imports.htm)**
    This endpoint initializes a promotion import from an external system. You can group a set of promotions using the import ID, retrieved by thie end point. This endpoint announces that the import contains a specified number of promotions to be processed. The system can import the promotions, create, and update them, and trigger a promotion calculation for the given promotions. The status of the import can be monitored with the GET\_PROMOTION\_IMPORT\_STATUS endpoint.

## Related Topics

- Recommendation Decisions (atlas.en-us.retail_api.meta/retail_api/connect_resources_recommendation_decisions.htm)
- Promotion Import Status (atlas.en-us.retail_api.meta/retail_api/connect_resources_get_promotion.htm)
- Ingest Promotions (atlas.en-us.retail_api.meta/retail_api/connect_resources_ingest_promotions.htm)
- Begin Promotion Import (atlas.en-us.retail_api.meta/retail_api/begin_promotion_imports.htm)

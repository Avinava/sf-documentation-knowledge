---
title: "Data Source: Promotion Measures with BOM Components"
domain: retail-api
topic: data-source-promotion-measures-with-bom-components
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:37.306Z
estimatedTokens: 198
keywords: [Data, Source, Promotion, Measures, BOM, Components, PromotionMeasuresWithBOMComponents, export, Bill, Material, component, product, part, level, RTR]
---

# Data Source: Promotion Measures with BOM Components

> The PromotionMeasuresWithBOMComponents data
   source allows export of information related to promotion measures at the Bill of Material (BOM)
   component or product part level in RTR.

# Data Source: Promotion Measures with BOM Components

The PromotionMeasuresWithBOMComponents data source allows export of information related to promotion measures at the Bill of Material (BOM) component or product part level in RTR.

Here’s a list of dimensions required for the PromotionMeasuresWithBOMComponents data source in the integration metadata report configuration:

-   accountdimension
-   promotiondimension
-   productdimension
-   kpidimension
-   timedimension
-   productpartdimension

-   **[Example](atlas.en-us.retail_api.meta/retail_api/rtr_example_promotion_measures_bom_components.htm)**
    This sample integration metadata configuration specifies product data at the product part level, and defines the fields from the sObjects to be exported along with the KPIs.

## Related Topics

- Example (atlas.en-us.retail_api.meta/retail_api/rtr_example_promotion_measures_bom_components.htm)

---
title: "Configuring Integration Dimension Meta"
domain: retail-api
topic: configuring-integration-dimension-meta
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:37.253Z
estimatedTokens: 726
keywords: [Configuring, Integration, Dimension, Meta, RTR, report, configuration, records, export, CSVs]
---

# Configuring Integration Dimension Meta

> Create RTR report configuration records to export CSVs.

# Configuring Integration Dimension Meta

Create RTR report configuration records to export CSVs.

| Available in: Lightning Experience in Enterprise and Unlimited Editions that have Consumer Goods Cloud Trade Promotion Management enabled. |
| --- |


There’s a object called RTR Report Configuration—CGCloud\_RTR\_Report\_Configuration\_\_c—available in your Salesforce org. You must create RTR report configuration records to export CSVs as they hold the dimension meta information for the integration export.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=retail_api)

#### Note

The user mapped to Calculation Result Export Processing Service should have access to the fields and objects configured in report dimensions. The TPM Calculation Result Export permission set provides access to product, account, promotion, tactic, and product part objects and fields. An administrator can assign the TPM Calculation Result Export permission set for this user and also provide access to the additional objects that are used in report dimensions.

For each dimension and sales org, you must create dimension meta as RTR Report Configuration records:

-   Account Dimension
-   Promotion Dimension
-   Tactic Dimension
-   Product Dimension

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=retail_api)

#### Note

When the dimension meta is created and configured, you must save and synchronize the dimension meta to Consumer Goods Cloud Processing Service.

-   **[Account Dimension](atlas.en-us.retail_api.meta/retail_api/rtr_account_dimension.htm)**
    The account dimension for integration export must be configured for each sales org on which CSV exports is executed.
-   **[Promotion Dimension](atlas.en-us.retail_api.meta/retail_api/rtr_promotion_dimension.htm)**
    You must configure the promotion dimension for integration export for each sales org on which CSV exports is executed.
-   **[Tactic Dimension](atlas.en-us.retail_api.meta/retail_api/rtr_tactic_dimension.htm)**
    You must configure the tactic dimension for integration exports for each sales org on which CSV exports is executed.
-   **[Product Dimension](atlas.en-us.retail_api.meta/retail_api/rtr_product_dimension.htm)**
    You must configure product dimension for integration export for each sales org on which CSV exports is executed.
-   **[Product Part Dimension](atlas.en-us.retail_api.meta/retail_api/rtr_integration_product_part_dimension.htm)**
    To extract data at the Bill of Materials (BOM) component or product part level, configure Product Part Dimension for each sales org on which CSV exports are executed.
-   **[Configuration of Integration Meta Data](atlas.en-us.retail_api.meta/retail_api/rtr_configuration_integration_meta.htm)**
    The integration meta configuration defines dimensions, export columns, filters, or conditions for CSV exports.

## Related Topics

- Account Dimension (atlas.en-us.retail_api.meta/retail_api/rtr_account_dimension.htm)
- Promotion Dimension (atlas.en-us.retail_api.meta/retail_api/rtr_promotion_dimension.htm)
- Tactic Dimension (atlas.en-us.retail_api.meta/retail_api/rtr_tactic_dimension.htm)
- Product Dimension (atlas.en-us.retail_api.meta/retail_api/rtr_product_dimension.htm)
- Product Part Dimension (atlas.en-us.retail_api.meta/retail_api/rtr_integration_product_part_dimension.htm)
- Configuration of Integration Meta Data (atlas.en-us.retail_api.meta/retail_api/rtr_configuration_integration_meta.htm)

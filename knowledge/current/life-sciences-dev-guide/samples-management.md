---
title: "Samples Management"
domain: life-sciences-dev-guide
topic: samples-management
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:43.776Z
estimatedTokens: 2011
keywords: [Samples, Management, Enable, pharmaceutical, companies, efficiently, handle, distribute, drug, healthcare, providers, Enhance, sales, keep, informed]
---

# Samples Management

> Enable pharmaceutical companies to efficiently handle and distribute drug samples to
    healthcare providers. Enhance drug sales and keep healthcare providers informed about the safe
    and effective use of products, leading to quicker treatments. Track and manage sales
    representative inventories of samples, ensuring compliance with regulations, and maintaining
    accurate records of distribution. Effective sample management is crucial for supporting
    healthcare providers and low-income patients, and ensuring ethical practices and regulatory
    compliance.

# Samples Management

Enable pharmaceutical companies to efficiently handle and distribute drug samples to healthcare providers. Enhance drug sales and keep healthcare providers informed about the safe and effective use of products, leading to quicker treatments. Track and manage sales representative inventories of samples, ensuring compliance with regulations, and maintaining accurate records of distribution. Effective sample management is crucial for supporting healthcare providers and low-income patients, and ensuring ethical practices and regulatory compliance.

## Sample Inventory Management

Sample Inventory Management streamlines tracking and managing sample inventory to ensure compliance with regulations, accurate record keeping, and adherence to organizational policies. It supports inventory counting and enable sales representatives to maintain accurate and up-to-date records.

![The data model diagram for Advanced Therapy Management with Health Cloud objects and Salesforce Scheduler objects.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Flife_sciences%2Fimages%2Flsc_life_sciences_samples_invt_mgmt.png&folder=life_sciences_dev_guide)

For more details and a larger image, visit the [Data Model Gallery](https://developer.salesforce.com/docs/platform/data-models/guide/inventory-management.html "HTML (New Window)").

## Product Territory Allocation

Manage the allocation of drug samples to territories and validate against the remaining quantity or maximum disbursement limit to support organizational policies on sample distribution and disbursement.

![The data model diagram for Advanced Therapy Management with Health Cloud objects and Salesforce Scheduler objects.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Flife_sciences%2Fimages%2Flsc_sample_limits_prod_terr_allocation_data_model.png&folder=life_sciences_dev_guide)

For more details and a larger image, visit the [Data Model Gallery](https://developer.salesforce.com/docs/platform/data-models/guide/sample-limits-and-product-territory-allocation.html "HTML (New Window)").

## Sample Limits

Support effective sample management by maintaining control over sample quantities and aligning distribution practices with organizational policies. Set boundaries on how pharmaceutical samples are distributed to ensure compliance with regulatory requirements and optimize resource allocation. By implementing predefined sample limits templates, organizations can enforce limits systematically and consistently across different account segments, streamline administrative tasks, ensure regulatory adherence, and prevent over-distribution.

For more details and a larger image, visit the [Data Model Gallery](https://developer.salesforce.com/docs/platform/data-models/guide/sample-limits-and-product-territory-allocation.html "HTML (New Window)").

-   **[InventoryCntProdtBatchItem](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_inventorycntprodtbatchitem.htm)**
    Represents the inventory count of a product batch at a location. The inventory count product batch item is a child object of inventory count assessment. This object is available in API version 65.0 and later.
-   **[InventoryCountAssessment](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_inventorycountassessment.htm)**
    Represents an inventory count performed at a location. This object is available in API version 65.0 and later.
-   **[InventoryOperation](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_inventoryoperation.htm)**
    Represents operations performed on the inventory, such as transfers, disbursements, or adjustments. This object is available in API version 65.0 and later.
-   **[Location](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/lsc_sforce_api_objects_lsclocation.htm)**
    Standard and custom fields extend the standard Location object to represent information about a user responsible for the location. This object is available in API version 65.0 and later.
-   **[ProductBatchItem](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_productbatchitem.htm)**
    Represents the details about the product items in each batch. This object is available in API version 65.0 and later.
-   **[ProductDisbursement](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_productdisbursement.htm)**
    Represents details about the product being disbursed. This object is available in API version 65.0 and later.
-   **[ProductItemTransaction](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/lsc_sforce_api_objects_productitemtransaction.htm)**
    Standard and custom fields extend the standard Product Item Transaction object to represent information about an action taken on a product item. This object is available in API version 65.0 and later.
-   **[ProductRequest](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/lsc_sforce_api_objects_productrequest.htm)**
    Standard and custom fields extend the standard Product Request object to represent information about sample orders. This object is available in API version 65.0 and later.
-   **[ProductRequestLineItem](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/lsc_sforce_api_objects_productrequestlineitem.htm)**
    Standard and custom fields extend the standard Product Request Line Item object to represent information about sample order details. This object is available in API version 65.0 and later.
-   **[ProductTransfer](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/lsc_sforce_api_objects_producttransfer.htm)**
    Standard and custom fields extend the standard Product Transfer object to represent information about the transfer of inventory between locations. This object is available in API version 65.0 and later.
-   **[ProductionBatch](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_productionbatch.htm)**
    Represents the batch of homogeneous products manufactured in the same production line. This object is available in API version 65.0 and later.
-   **[ProviderSampleLimit](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_providersamplelimit.htm)**
    Represents sample limits and remaining quantity applied to a given account and product. This object is available in API version 65.0 and later.
-   **[ProviderSampleLimitTemplate](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_providersamplelimittemplate.htm)**
    Setup object that represents the definition and rules of sample limits templates. This object is available in API version 65.0 and later.
-   **[ProviderSmplLmtTmplAssignment](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_providersmpllmttmplassignment.htm)**
    Junction that relates sample limit templates to products. This object is available in API version 65.0 and later.
-   **[PrvdVstSmplLmtDiscrepancy](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_prvdvstsmpllmtdiscrepancy.htm)**
    Represents discrepancies that occur when samples or sample shipment requests exceed a sample limit. This object is available in API version 65.0 and later.
-   **[PrvdVstSmplLmtTransaction](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_prvdvstsmpllmttransaction.htm)**
    Represents samples or sample shipment requests captured in a visit. This object is available in API version 65.0 and later.
-   **[TerritoryProdtQtyAllocation](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_territoryprodtqtyallocation.htm)**
    Represents the quantity allocation of a product to a given territory so that the system validates against the remaining quantity or maximum disbursement limit. This object is available in API version 65.0 and later.

## Related Topics

- InventoryCntProdtBatchItem (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_inventorycntprodtbatchitem.htm)
- InventoryCountAssessment (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_inventorycountassessment.htm)
- InventoryOperation (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_inventoryoperation.htm)
- Location (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/lsc_sforce_api_objects_lsclocation.htm)
- ProductBatchItem (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_productbatchitem.htm)
- ProductDisbursement (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_productdisbursement.htm)
- ProductItemTransaction (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/lsc_sforce_api_objects_productitemtransaction.htm)
- ProductRequest (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/lsc_sforce_api_objects_productrequest.htm)
- ProductRequestLineItem (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/lsc_sforce_api_objects_productrequestlineitem.htm)
- ProductTransfer (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/lsc_sforce_api_objects_producttransfer.htm)

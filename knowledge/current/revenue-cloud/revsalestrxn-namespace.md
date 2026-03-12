---
title: "RevSalesTrxn Namespace"
domain: revenue-cloud
topic: revsalestrxn-namespace
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:07.315Z
estimatedTokens: 1159
namespace: RevSalesTrxn
keywords: [RevSalesTrxn, sales, transaction, quote, order, integrated, pricing, configuration, Additionally, insert, line, items, calculate, estimated, tax]
---

# RevSalesTrxn Namespace

> Create a sales transaction, such as a quote or an order, with integrated
      pricing and configuration. Additionally, update an order or a quote, and insert and delete
      order or quote line items to calculate the estimated tax.

**Namespace:** `RevSalesTrxn`

# RevSalesTrxn Namespace

Create a sales transaction, such as a quote or an order, with integrated pricing and configuration. Additionally, update an order or a quote, and insert and delete order or quote line items to calculate the estimated tax.

The RevSalesTrxn namespace includes these classes.

-   **[CatalogRatesPreferenceEnum Enum](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_enum_RevSalesTrxn_CatalogRatesPreferenceEnum.htm)**
    Specifies the rate card entries defined in the catalog that must be fetched for quote line items, with usage-based selling during the place sales transaction process.
-   **[ConfigurationExecutionEnum Enum](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_enum_RevSalesTrxn_ConfigurationExecutionEnum.htm)**
    Specifies the configuration method for the place sales transaction request.
-   **[ConfigurationOptionsInput Class](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RevSalesTrxn_ConfigurationOptionsInput.htm#apex_class_RevSalesTrxn_ConfigurationOptionsInput)**
    Contains methods and properties to set the configuration options for the input to the product configurator.
-   **[GraphRequest Class](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RevSalesTrxn_GraphRequest.htm#apex_class_RevSalesTrxn_GraphRequest)**
    Contains constructors and properties to set the graph ID and a list of records to be ingested. The list of records is specified in a key-value map format that contains field values.
-   **[GroupRampActionEnum Enum](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_enum_RevSalesTrxn_GroupRampActionEnum.htm)**
    Specifies the action ‌that you want to perform on group ramp segments. Additionally, you can also convert a non-ramped group into a ramped group.
-   **[PersistPreferenceEnum Enum](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_enum_RevSalesTrxn_PersistPreferenceEnum.htm)**
    Specifies whether to persist pricing changes for each sales transaction record. Available in API version 65.0 and later.
-   **[PlaceSalesTransactionException Class](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RevSalesTrxn_PlaceSalesTransactionException.htm#apex_class_RevSalesTrxn_PlaceSalesTransactionException)**
    Contains methods to hold the exception details for the place sales transaction request.
-   **[PlaceSalesTransactionExecutor Class](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RevSalesTrxn_PlaceSalesTransactionExecutor.htm#apex_class_RevSalesTrxn_PlaceSalesTransactionExecutor)**
    Contains methods to place a sales transaction with details of the graph request, pricing preferences, and configuration options.
-   **[PlaceSalesTransactionResponse Class](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RevSalesTrxn_PlaceSalesTransactionResponse.htm#apex_class_RevSalesTrxn_PlaceSalesTransactionResponse)**
    Contains properties to hold the response to the place sales transaction request.
-   **[PricingPreferenceEnum Enum](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_enum_RevSalesTrxn_PricingPreferenceEnum.htm)**
    Specifies the pricing preference during the creation of a sales transaction.
-   **[RecordResource Class](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RevSalesTrxn_RecordResource.htm#apex_class_RevSalesTrxn_RecordResource)**
    Contains constructors and properties to create a record object from the field values of a sales transaction.
-   **[RecordWithReferenceRequest Class](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RevSalesTrxn_RecordWithReferenceRequest.htm#apex_class_RevSalesTrxn_RecordWithReferenceRequest)**
    Contains constructors and properties to associate a record object with a reference identifier.
-   **[TaxPreferenceEnum Enum](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_enum_RevSalesTrxn_TaxPreferenceEnum.htm)**
    Specifies whether to execute or skip the tax calculation step for each sales transaction record. Available in API version 65.0 and later.

## Related Topics

- CatalogRatesPreferenceEnum Enum (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_enum_RevSalesTrxn_CatalogRatesPreferenceEnum.htm)
- ConfigurationExecutionEnum Enum (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_enum_RevSalesTrxn_ConfigurationExecutionEnum.htm)
- ConfigurationOptionsInput Class (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RevSalesTrxn_ConfigurationOptionsInput.htm)
- GraphRequest Class (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RevSalesTrxn_GraphRequest.htm)
- GroupRampActionEnum Enum (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_enum_RevSalesTrxn_GroupRampActionEnum.htm)
- PersistPreferenceEnum Enum (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_enum_RevSalesTrxn_PersistPreferenceEnum.htm)
- PlaceSalesTransactionException Class (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RevSalesTrxn_PlaceSalesTransactionException.htm)
- PlaceSalesTransactionExecutor Class (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RevSalesTrxn_PlaceSalesTransactionExecutor.htm)
- PlaceSalesTransactionResponse Class (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RevSalesTrxn_PlaceSalesTransactionResponse.htm)
- PricingPreferenceEnum Enum (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_enum_RevSalesTrxn_PricingPreferenceEnum.htm)

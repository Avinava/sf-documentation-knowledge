---
title: "PricingPreferenceEnum Enum"
domain: revenue-cloud
topic: pricingpreferenceenum-enum
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:07.229Z
estimatedTokens: 229
keywords: [PricingPreferenceEnum, pricing, preference, creation, sales, transaction, Usage, order, process, quote]
---

# PricingPreferenceEnum Enum

> Specifies the pricing preference during the creation of a sales transaction.

# PricingPreferenceEnum Enum

Specifies the pricing preference during the creation of a sales transaction.

## Usage

Used by the [PlaceSalesTransactionExecutor](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RevSalesTrxn_PlaceSalesTransactionExecutor.htm#apex_class_RevSalesTrxn_PlaceSalesTransactionExecutor "Contains methods to place a sales transaction with details of the graph request, pricing preferences, and configuration options.") class.

## Enum Values

The RevSalesTrxn.PricingPreferenceEnum enum includes these values.

| Value | Description |
| --- | --- |
| Force | Specifies to enforce pricing during the creation of sales transactions. |
| Skip | Specifies to skip pricing during the creation of sales transactions. |
| System | Specifies the system to determine whether a pricing calculation is required. The default value is System. |

## Related Topics

- PlaceSalesTransactionExecutor (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RevSalesTrxn_PlaceSalesTransactionExecutor.htm)
- PlaceOrderExecutor (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commerceorders_PlaceOrderExecutor.htm)
- PlaceQuoteRLMApexProcessor (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_placequote_PlaceQuoteRLMApexProcessor.htm)

---
title: "CalculateTaxType Enum"
domain: revenue-cloud
topic: calculatetaxtype-enum
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:05.224Z
estimatedTokens: 309
keywords: [CalculateTaxType, Shows, whether, tax, calculation, request, estimated, actual, tax., Usage, Values]
---

# CalculateTaxType Enum

> Shows whether a tax calculation request is for estimated or actual
      tax.

# CalculateTaxType Enum

Shows whether a tax calculation request is for estimated or actual tax.

## Usage

Used by the [CalculateTaxRequest](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commercetax_CalculateTaxRequest.htm#apex_class_commercetax_CalculateTaxRequest "Represents a request to an external tax engine to calculate tax. Extends the TaxTransactionRequest class and is the top-level request class.") and [CalculateTaxResponse](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commercetax_CalculateTaxResponse.htm#apex_class_commercetax_CalculateTaxResponse "Sets the values of the tax transaction following a response from the external tax engine. Extends the AbstractTransactionResponse class and is the top-level response class.") class methods.

## Enum Values

The commercetax.CalculateTaxType enum includes these values.

| Value | Description |
| --- | --- |
| Actual | Specifies that the tax calculation service should calculate the finalized (actual) tax for the requested line items. |
| Estimated | Specifies that the tax calculation service should estimate the tax for the requested line items. |

## Related Topics

- CalculateTaxRequest (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commercetax_CalculateTaxRequest.htm)
- CalculateTaxResponse (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commercetax_CalculateTaxResponse.htm)

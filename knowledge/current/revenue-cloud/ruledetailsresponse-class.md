---
title: "RuleDetailsResponse Class"
domain: revenue-cloud
topic: ruledetailsresponse-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:04.488Z
estimatedTokens: 923
namespace: CommerceTax
keywords: [RuleDetailsResponse, Contains, details, tax, rules, used, calculation., setNonTaxableRuleId, nonTaxableRuleId, setNonTaxableType, nonTaxableType, setRateRuleId, rateRuleId, setRateSourceId, rateSourceId]
---

# RuleDetailsResponse Class

> Contains details about the tax rules used for tax
    calculation.

**Namespace:** `CommerceTax`

# RuleDetailsResponse Class

Contains details about the tax rules used for tax calculation.

## Namespace

[CommerceTax](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_namespace_commercetax.htm "Manage the communication between Salesforce and an external tax engine.")

-   **[RuleDetailsResponse Methods](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commercetax_RuleDetailsResponse.htm#apex_commercetax_RuleDetailsResponse_methods)**
    Learn more about the available methods with the RuleDetailsResponse class.

## RuleDetailsResponse Methods

Learn more about the available methods with the RuleDetailsResponse class.

The RuleDetailsResponse includes these methods.

-   **[RuleDetailsResponse()](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commercetax_RuleDetailsResponse.htm#apex_commercetax_RuleDetailsResponse_RuleDetailsResponse)**
    Contains information about the tax rules used when calculating tax for line items.
-   **[setNonTaxableRuleId(nonTaxableRuleId)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commercetax_RuleDetailsResponse.htm#apex_commercetax_RuleDetailsResponse_setNonTaxableRuleId)**
    Sets the NonTaxableRuleId field of the RuleDetailsResponse.
-   **[setNonTaxableType(nonTaxableType)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commercetax_RuleDetailsResponse.htm#apex_commercetax_RuleDetailsResponse_setNonTaxableType)**
    Sets the NonTaxableType field of the RuleDetailsResponse.
-   **[setRateRuleId(rateRuleId)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commercetax_RuleDetailsResponse.htm#apex_commercetax_RuleDetailsResponse_setRateRuleId)**
    Sets the RateRuleId field of the RuleDetailsResponse.
-   **[setRateSourceId(rateSourceId)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commercetax_RuleDetailsResponse.htm#apex_commercetax_RuleDetailsResponse_setRateSourceId)**
    Sets the RateSourceId field on the RuleDetailsResponse.

### RuleDetailsResponse()

Contains information about the tax rules used when calculating tax for line items.

#### Signature

global void RuleDetailsResponse()

#### Return Value

Type: void

### setNonTaxableRuleId(nonTaxableRuleId)

Sets the NonTaxableRuleId field of the RuleDetailsResponse.

#### Signature

global void setNonTaxableRuleId(String nonTaxableRuleId)

#### Parameters

nonTaxableRuleId

Type: String

ID of the tax rule applied to non-taxable line items.

#### Return Value

Type: void

### setNonTaxableType(nonTaxableType)

Sets the NonTaxableType field of the RuleDetailsResponse.

#### Signature

global void setNonTaxableType(String nonTaxableType)

#### Parameters

nonTaxableType

Type: String

Reason (from several possible types) that a line item is non-taxable.

#### Return Value

Type: void

### setRateRuleId(rateRuleId)

Sets the RateRuleId field of the RuleDetailsResponse.

#### Signature

global void setRateRuleId(String rateRuleId)

#### Parameters

rateRuleId

Type: String

ID of the tax rule used to determine a tax rate.

#### Return Value

Type: void

### setRateSourceId(rateSourceId)

Sets the RateSourceId field on the RuleDetailsResponse.

#### Signature

global void setRateSourceId(String rateSourceId)

#### Parameters

rateSourceId

Type: String

ID of the source object used for calculating tax rate.

#### Return Value

Type: void

## Related Topics

- CommerceTax (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_namespace_commercetax.htm)
- RuleDetailsResponse Methods (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commercetax_RuleDetailsResponse.htm)
- RuleDetailsResponse() (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commercetax_RuleDetailsResponse.htm)
- setNonTaxableRuleId(nonTaxableRuleId) (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commercetax_RuleDetailsResponse.htm)
- setNonTaxableType(nonTaxableType) (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commercetax_RuleDetailsResponse.htm)
- setRateRuleId(rateRuleId) (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commercetax_RuleDetailsResponse.htm)
- setRateSourceId(rateSourceId) (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commercetax_RuleDetailsResponse.htm)

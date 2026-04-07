---
title: "Billing Objects"
domain: revenue-cloud
topic: billing-objects
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:35:47.061Z
estimatedTokens: 809
keywords: [Billing, deployment, sequence, API, lookup, Revenue, Cloud]
---

> This table provides the deployment sequence, object types, API names, and lookup fields
    for Billing objects in Revenue Cloud.

# Billing Objects

This table provides the deployment sequence, object types, API names, and lookup fields for Billing objects in Revenue Cloud.

| Object Use Type | Object Name | Object API | Deployment Sequence | Lookup Fields (Foreign Keys) |
| --- | --- | --- | --- | --- |
| Configuration | Profile | Profile | 1 | None |
| Configuration | User | User | 2 | None |
| Configuration | User Role | UserRole | 3 | None |
| Configuration | Legal Entity | LegalEntity | 4 | None |
| Configuration | Billing Policy | BillingPolicy | 5 | None |
| Configuration | Billing Treatment | BillingTreatment | 6 | LegalEntity, BillingPolicy |
| Configuration | Billing Treatment Item | BillingTreatmentItem | 7 | BillingTreatment |
| Configuration | Tax Engine Provider | TaxEngineProvider | 8 | ApexAdapter |
| Configuration | Tax Engine | TaxEngine | 9 | NamedCredential, TaxEngineProvider |
| Configuration | Tax Policy | TaxPolicy | 10 | None |
| Configuration | Tax Treatment | TaxTreatment | 11 | TaxEngine, TaxPolicy |
| Configuration | Tax Treatment Item | TaxTreatmentItem | 12 | Product2 |
| Configuration | Payment Term | PaymentTerm | 13 | None |
| Configuration | Payment Term Item | PaymentTermItem | 14 | PaymentTerm |
| Configuration | Accounting Period | AccountingPeriod | 15 | None |
| Configuration | Legal Entity Accounting Period | LegalEntityAccountingPeriod | 16 | LegalEntity, AccountingPeriod |
| Configuration | General Ledger Account | GeneralLedgerAccount | 17 | LegalEntity |
| Configuration | General Ledger Account Assignment Rules | GeneralLedgerAcctAsgntRule | 18 | LegalEntity, GeneralLedgerAccount |
| Configuration | Payment Schedule Policy | PaymentSchedulePolicy | 19 | None |
| Configuration | Payment Schedule Treatment | PaymentScheduleTreatment | 20 | PaymentSchedulePolicy |
| Configuration | Payment Schedule Treatment Detail | PaymentScheduleTreatmentDtl | 21 | PaymentScheduleTreatment, PymtSchdDistributionMethod |
| Configuration | Payment Schedule Distribution Method | PymtSchdDistributionMethod | 22 | None |
| Configuration | Billing Milestone Plan | BillingMilestonePlan | 23 | BillingTreatment |
| Configuration | Billing Milestone Plan Item | BillingMilestonePlanItem | 24 | BillingMilestonePlan |
| Configuration | General Ledger Journal Entry Rule | GeneralLedgerJrnlEntryRule | 25 | GeneralLedgerAccount, GeneralLedgerAcctAsgntRule |
| Configuration | Payment Retry Rule | PaymentRetryRule | 26 | PaymentGateway |
| Configuration | Payment Retry Rule Set | PaymentRetryRuleSet | 27 | None |
| Configuration | Billing Arrangement | BillingArrangement | 28 | None |
| Configuration | Billing Arrangement Line | BillingArrangementLine | 29 | Account, BillingAccount |

#### See Also

-   [*Revenue Cloud Developer Guide*: Billing Standard Objects](https://developer.salesforce.com/docs/atlas.en-us.260.0.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/billing_std_objects_parent.htm "Revenue Cloud Developer Guide: Billing Standard Objects - HTML (New Window)")

-   [Explore the Revenue Cloud Data Model](https://help.salesforce.com/s/articleView?id=ind.data_model_overview.htm&language=en_US "Explore the Revenue Cloud Data Model - HTML (New Window)")

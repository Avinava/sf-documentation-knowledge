---
title: "Billing Additional Information"
domain: revenue-cloud
topic: billing-additional-information
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:02:02.022Z
estimatedTokens: 461
keywords: [Billing, Additional, know, deployment, Revenue, Cloud, including, active, inactive, states, migration, considerations, Object-Specific]
---

# Billing Additional Information

> Get to know additional deployment information for Billing in Revenue Cloud, including
    active or inactive states, object information, and migration considerations.

# Billing Additional Information

Get to know additional deployment information for Billing in Revenue Cloud, including active or inactive states, object information, and migration considerations.

## Object-Specific Information

| Object Name | Object API | Notes |
| --- | --- | --- |
| Legal Entity | LegalEntity | This object contains a polymorphic field for address. |
| Billing Policy | BillingPolicy | Activate after Billing Treatment is activated. |
| Billing Treatment | BillingTreatment | Activate after Billing Treatment Item is activated. |
| Billing Treatment Item | BillingTreatmentItem | Activate first when activating Billing Policy. |
| Tax Policy | TaxPolicy | Activate after Tax Treatment is activated. |
| Tax Treatment | TaxTreament | Activate first when activating Tax Policy. |
| Payment Term | PaymentTerm | Activate after Payment Term Item is activated. |
| Payment Term Item | PaymentTermItem | Activate first when activating Payment Term. |
| Payment Schedule Policy | PaymentSchedulePolicy | Activate after Payment Schedule Treatment is activated |
| Payment Schedule Treatment | PaymentScheduleTreatment | Activate first when activating Payment Schedule Policy. |
| Payment Retry Rule | PaymentRetryRule | If RetryIntervalType field value is specified, you must also specify values for IntervalUnit and IntervalValue fields. |
| Payment Retry Rule Set | PaymentRetryRuleSet | You can’t delete or modify the active org-default rule set after the feature is enabled. The org can’t have multiple active org-default rule sets. |
| Tax Treatment Item | TaxTreatmentItem | You can’t delete a tax treatment item when the parent tax treatment is active. |

## Other Information

-   Data pipeline must be enabled before enabling Billing.
-   Order to Billing Schedule Flow must be copied from the template and activated.

---
title: "PaymentRetryRuleSet"
domain: revenue-cloud
topic: paymentretryruleset
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:10.763Z
estimatedTokens: 758
keywords: [PaymentRetryRuleSet, Represents, payment, retry, rule, definition, defines, how, failed, payments, retried, based, error, codes, across, various, categories., API, version, 66.0]
---

# PaymentRetryRuleSet

> Represents the payment retry rule definition that defines how failed
         payments are retried based on the error codes across various retry categories. This
      object is available in API version 66.0 and later.

# PaymentRetryRuleSet

Represents the payment retry rule definition that defines how failed payments are retried based on the error codes across various retry categories. This object is available in API version 66.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CanUseAltrnPaymentMethod | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether an alternate payment method can be used on the last retry of the failed payment schedule item (true) or not (false). When set to true, the mostly recently added payment method is used to retry payments on the failed payment schedule items.The default value is false. |
| DefaultIntervalUnit | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe unit of time after which a payment batch run must retry the failed payments. The related payment retry rules inherit this value by default.Valid values are:DaysHoursMinutes |
| DefaultIntervalValue | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe single or comma-separated numeric values, after which the payment batch run must retry the failed payments. The related payment retry rules inherit this value by default. |
| DefaultMaximumRetryCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe maximum number of retries on the failed payment records. The related payment retry rules inherit this value by default. |
| DefaultRetryIntervalType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies whether the payment retry rule set must be applied to the failed payment records at fixed or staggered intervals of time. The related payment retry rules inherit this value by default.Valid values are:FixedStaggered |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the business details for the payment retry rule set. |
| IsDefaultRuleSet | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the payment retry rule must be set as default for the org (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed the payment retry rule set record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed the payment retry rule set record. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe user-specified name for the payment retry rule set. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the status of the payment retry rule set.Valid values are:ActiveDraft |

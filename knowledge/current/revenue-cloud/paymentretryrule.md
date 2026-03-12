---
title: "PaymentRetryRule"
domain: revenue-cloud
topic: paymentretryrule
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:10.756Z
estimatedTokens: 852
keywords: [PaymentRetryRule, Represents, specific, payment, retry, rule, failed, schedule, item., defines, actionable, such, maximum, number, retries, records, time, intervals, between, subsequent]
---

# PaymentRetryRule

> Represents the specific payment retry rule for a failed payment
         schedule item. Each rule defines actionable parameters such as the maximum number of
         retries for the failed records and time intervals between subsequent retry attempts.
      This object is available in API version 66.0 and later.

# PaymentRetryRule

Represents the specific payment retry rule for a failed payment schedule item. Each rule defines actionable parameters such as the maximum number of retries for the failed records and time intervals between subsequent retry attempts. This object is available in API version 66.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=revenue_lifecycle_management_dev_guide)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the business details for the payment retry rule. |
| IntervalUnit | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe unit of time after which a payment batch run must retry the failed payments.Valid values are:DaysHoursMinutes |
| IntervalValue | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe single or comma-separated numeric values, after which the payment batch run must retry the failed payments. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed the payment retry rule record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed the payment retry rule record. |
| MaximumRetryCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe maximum number of retries on the failed payment records. |
| PaymentGatewayErrorCategory | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe category of payment gateway errors for which the payment retry rule must be applied.Valid values are:CardLimit—Card Limit DeclineGatewayConnection—Gateway Connection ErrorPaymentInformation—Invalid Payment DetailsPaymentProcessing—Payment Processing ErrorSecurity—Security FailureUnknown—Unknown ErrorValidationFailure—Internal Validation Error |
| PaymentGatewayErrorCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe raw error code of the payment gateway response. |
| PaymentGatewayId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique identifier of the payment gateway for which the payment retry rule must be applied.This field is a relationship field.Relationship NamePaymentGatewayRefers ToPaymentGateway |
| PaymentRetryRuleSetId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe payment retry rule set of the payment retry rule.This field is a relationship field.Relationship NamePaymentRetryRuleSetRelationship TypeMaster-detailRefers ToPaymentRetryRuleSet (the master object) |
| RetryIntervalType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies whether the payment retry rule must be applied to the failed payment records at fixed or staggered intervals of time.Valid values are:FixedStaggered |

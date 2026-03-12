---
title: "PaymentSchedule"
domain: object-reference
topic: paymentschedule
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:14.634Z
estimatedTokens: 2145
keywords: [PaymentSchedule, payment, schedule, collection, payments, customer, wants, collect, different, times, certain, record, items, item, processed]
---

# PaymentSchedule

> The payment schedule represents a collection of payments that a customer
         wants to collect at different times for a certain record. A schedule contains one or more
         payment schedule items, where each item represents one payment to be processed. Each of a
         schedule’s items can have different payment configuration fields, such as payment methods,
         payment dates, and payment accounts. When a payment scheduler launches a payment run, the
         run evaluates active payment schedule items, and picks them up for payment processing if
         they align with the scheduler’s payment criteria. This object is available in API
      version 55.0 and later.

# PaymentSchedule

The payment schedule represents a collection of payments that a customer wants to collect at different times for a certain record. A schedule contains one or more payment schedule items, where each item represents one payment to be processed. Each of a schedule’s items can have different payment configuration fields, such as payment methods, payment dates, and payment accounts. When a payment scheduler launches a payment run, the run evaluates active payment schedule items, and picks them up for payment processing if they align with the scheduler’s payment criteria. This object is available in API version 55.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

This object is available with Subscription Management and Billing (Revenue Cloud).

For information about this object that's available with Billing (Revenue Cloud), including its special access rules, see the [Revenue Cloud Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_paymentschedule.htm "HTML (New Window)").

## Fields

| Field | Details |
| --- | --- |
| AvailableRequestedAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe payment schedule’s remaining amount available for the creation of payment schedule items. Equals TotalRequestedAmount–TotalLineRequestedAmount. |
| Comments | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionOptional user-defined comments. |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThree-letter ISO 4217 currency code associated with the payment group record. |
| DefaultPaymentAccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionWhen a payment run creates payments from a payment schedule item, it sets the payment’s account to the item’s PaymentAccountId. Upon payment schedule item creation, the item’s PaymentAccountId inherits the schedule’s DefaultPaymentAccountId. However, you can override the PaymentAccountId with a different account as needed. If you do, future payments made from the item use the new account.This is a relationship field.Relationship NameDefaultPaymentAccountRelationship TypeLookupRefers ToAccount |
| DefaultPaymentMethodId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionWhen a payment run creates payments from a payment schedule ID, it sets the payment’s account to the item’s PaymentMethodId. Upon payment schedule item creation, the item’s PaymentMethoId inherits the schedule’s DefaultPaymentMethodId. However, you can override the PaymentMethodId with a different account as needed. If you do, future payments made from the item will use the new account.Relationship NameDefaultPaymentMethodRelationship TypeLookupRefers ToCardPaymentMethod, DigitalWallet |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe user who created the payment schedule.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PaymentScheduleNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionSystem-generated reference number for the payment schedule. |
| PaymentScheduleTreatmentDtlId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe payment schedule treatment detail associated with the payment schedule record.This field is a relationship field.Available in API version 65.0 and later with Financial Services and Automotive Cloud.Relationship NamePaymentScheduleTreatmentDtlRefers ToPaymentScheduleTreatmentDtl |
| PaymentSource | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the name of the funding source that is used to fulfill a payment commitment.Available in API version 63.0 and later with Financial Services and Automotive Cloud. |
| ReferenceEntityId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe object that receives payments as a result of payment schedule items processed from the payment schedule.This is a polymorphic relationship field.Relationship NameReferenceEntityRelationship TypeLookupRefers ToAPI version 55.0 and later:ContractOrderInvoiceAPI version 62.0 and later with Financial Services and Automotive Cloud:CollectionPlan |
| RemainingAmountToBeProcessed | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe total pending amount of payment schedule items that haven’t yet been processed for payment. Equals TotalLineRequestedAmount – TotalProcessedAmount. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe status of the payment schedule.Possible values are:Accepted: The payment schedule is approved and is ready for payment run evaluation.Available in API version 65.0 and later with Financial Services and Automotive Cloud.Approval Pending: The payment schedule needs approval.Available in API version 65.0 and later with Financial Services and Automotive Cloud.Canceled: Payment runs can’t evaluate payment schedules or use them to create payments.Completed: All of the payment schedule’s payment schedule items have been processed for payments.Draft: The payment schedule can be edited and configured. Payment runs don’t evaluate draft payment schedules.On Hold: The payment schedule can't be considered for payment runs due to missing information, the need for additional review, or other unresolved external factors.Available in API version 65.0 and later with Financial Services and Automotive Cloud.Open: The payment schedule is available for payment run evaluation.Rejected: The payment schedule isn't approved and can't be considered for payment run evaluation.Available in API version 65.0 and later with Financial Services and Automotive Cloud. |
| TotalAppliedAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe amount of all payment schedule items that have been applied to payments.This is a calculated field. |
| TotalCanceledAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum of all RequestedAmount values on payment schedule items with a status of Canceled. |
| TotalPaymentsReceived | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe cumulative sum of payments received for all payment schedule items linked to a payment schedule.This field is a calculated field.Available in API version 63.0 and later with Financial Services and Automotive Cloud. |
| TotalPaymentScheduleItemAmount | TypecurrencyPropertiesFilter, Nillable, Sort\DescriptionThe total amount allocated from the payment schedule to its payment schedule items. Equals the sum of each payment schedule item’s RequestedAmount – the sum of each payment schedule item’s Canceled Amount. |
| TotalProcessedAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum of ProcessedAmount values on payment schedule items with a status of Processed. |
| TotalRequestedAmount | TypecurrencyPropertiesCreate, Filter, Sort, UpdateDescriptionThe total amount available for a payment schedule to distribute to its payment schedule items. The sum of payment schedule items can’t be greater than the TotalLineRequestedAmount of the parent payment schedule. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe type of payment for which the payment schedule is created.Available in API version 65.0 and later with Financial Services and Automotive Cloud.Possible values are:PaymentPlan—Payment PlanPromiseToPay—Promise to Pay |
| UsageType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the usage type for the record.Possible value is:CollectionPlanAvailable in API version 62.0 and later with Financial Services and Automotive Cloud. |

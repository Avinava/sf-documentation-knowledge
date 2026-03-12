---
title: "PaymentSchedule"
domain: revenue-cloud
topic: paymentschedule
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:11.827Z
estimatedTokens: 1729
keywords: [PaymentSchedule, payments, customer, wants, collect, different, times, certain, record, schedule, payment, items, item, processed, schedule’s]
---

# PaymentSchedule

> Represents information about a set of payments that a customer wants
         to collect at different times for a certain record. A schedule contains one or more payment
         schedule items, where each item represents one payment to be processed. Each of a
         schedule’s items can have different payment configuration fields, such as payment methods,
         payment dates, and payment accounts. When a payment scheduler launches a payment run, the
         run evaluates active payment schedule items, and picks them up for payment processing if
         they match the scheduler’s payment criteria. This object is available in API version
      64.0 and later.

# PaymentSchedule

Represents information about a set of payments that a customer wants to collect at different times for a certain record. A schedule contains one or more payment schedule items, where each item represents one payment to be processed. Each of a schedule’s items can have different payment configuration fields, such as payment methods, payment dates, and payment accounts. When a payment scheduler launches a payment run, the run evaluates active payment schedule items, and picks them up for payment processing if they match the scheduler’s payment criteria. This object is available in API version 64.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

You need the Revenue Cloud Billing license, and the Payment Admin permission set or the Payment Operations User permission set to access this object.

## Fields

| Field | Details |
| --- | --- |
| AvailableRequestedAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe payment schedule’s remaining amount available for the creation of payment schedule items. This value is calculated by deducting the TotalLineRequestedAmount value from the TotalRequestedAmount value.This field is a calculated field. |
| CollectionPlanItemId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe collection plan item for the payment schedule that’s related to an invoice.This field is a relationship field.Relationship NameCollectionPlanItemRefers ToCollectionPlanItem |
| Comments | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionAdditional details about the payment schedule. |
| DefaultPaymentAccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionWhen a payment run creates payments from a payment schedule item, it sets the payment’s account to the item’s PaymentAccountId value. When the payment schedule item is created, the item’s PaymentAccountId inherits the schedule’s DefaultPaymentAccountId. However, you can override the PaymentAccountId with a different account as needed. If you do, future payments made from the item use the new account.This field is a relationship field.Relationship NameDefaultPaymentAccountRefers ToAccount |
| DefaultPaymentMethodId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionWhen a payment run creates payments from a payment schedule item, it sets the payment’s payment method to the item’s PaymentMethodId. When the payment schedule item is created, the item’s PaymentMethodId inherits the schedule’s DefaultPaymentMethodId. However, you can override the PaymentMethodId with a different method as needed. If you do, future payments made from the item will use the new method.This field is a polymorphic relationship field.Relationship NameDefaultPaymentMethodRefers ToCardPaymentMethod, SavedPaymentMethod |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. The ID of the owner of the Payment Schedule record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| PaymentScheduleNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionRequired. The auto-generated reference number for the payment schedule. |
| PaymentSource | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescription |
| ReferenceEntityId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe object record that receives payments as a result of the related payment schedule items that are processed.This field is a polymorphic relationship field.Relationship NameReferenceEntityRefers ToCollectionPlan, Contract, Invoice, Order, Quote |
| RemainingAmountToBeProcessed | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe total pending amount of payment schedule items that haven’t yet been processed for payment. This value is calculated by deducting the TotalProcessedAmount value from the TotalLineRequestedAmount value.This field is a calculated field. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. The status of the payment schedule.Valid values are:Canceled—Payment runs can’t evaluate payment schedules or use them to create payments.Completed—All of the payment schedule’s payment schedule items have been processed for payments.Draft—The payment schedule can be edited and configured. Payment runs don’t evaluate draft payment schedules.Open—The payment schedule is available for payment run evaluation. |
| TotalAppliedAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe amount of all the related payment schedule items that have been applied to payments.This field is a calculated field. |
| TotalCanceledAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum of all RequestedAmount values of all the related payment schedule items with a status of Canceled.This field is a calculated field. |
| TotalPaymentScheduleItemAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe total amount allocated from the payment schedule to its payment schedule items. This value is calculated by deducting the sum of each payment schedule item’s CanceledAmount from the sum of each payment schedule item’s RequestedAmount.This field is a calculated field. |
| TotalPaymentsReceived | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum of all the total payment received for all the related payment schedule items.This field is a calculated field. |
| TotalProcessedAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum of ProcessedAmount values of all the related payment schedule items with a status of Processed.This field is a calculated field. |
| TotalRequestedAmount | TypecurrencyPropertiesCreate, Filter, Sort, UpdateDescriptionRequired. The total amount available for a payment schedule to distribute to its payment schedule items. The sum of payment schedule items can’t be greater than the TotalLineRequestedAmount value of the parent payment schedule. |
| UsageType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe feature using the payment schedule.Valid value is:CollectionPlan |

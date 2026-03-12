---
title: "PaymentScheduleItem"
domain: object-reference
topic: paymentscheduleitem
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:14.649Z
estimatedTokens: 1871
keywords: [PaymentScheduleItem, payment, schedule, items, item, processed, schedule’s, different, configuration, dates, accounts, scheduler, launches, run, evaluates]
---

# PaymentScheduleItem

> A payment schedule contains one or more payment schedule items, where each
         item represents one payment to be processed. Each of a schedule’s items can have different
         payment configuration fields, such as payment methods, payment dates, and payment accounts.
         When a payment scheduler launches a payment run, the run evaluates active payment schedule
         items, and picks them up for payment processing if they align with the scheduler’s payment
         criteria. This object is available in API version 55.0 and later.

# PaymentScheduleItem

A payment schedule contains one or more payment schedule items, where each item represents one payment to be processed. Each of a schedule’s items can have different payment configuration fields, such as payment methods, payment dates, and payment accounts. When a payment scheduler launches a payment run, the run evaluates active payment schedule items, and picks them up for payment processing if they align with the scheduler’s payment criteria. This object is available in API version 55.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

This object is available with Subscription Management and Billing (Revenue Cloud).

For information about this object that's available with Billing (Revenue Cloud), including its special access rules, see the [Revenue Cloud Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_paymentscheduleitem.htm "HTML (New Window)").

## Fields

| Field | Details |
| --- | --- |
| Comments | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionOptional user-defined comments. |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThree-letter ISO 4217 currency code associated with the payment schedule item record. |
| LastPaymentGatewayLogId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe most recent payment gateway log created following a payment gateway request to make a payment based on the payment schedule item.This is a relationship field.Relationship NameLastPaymentGatewayLogRelationship TypeLookupRefers ToPaymentGatewayLog |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| PaymentAccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe account assigned to payments made from the payment schedule item. When a payment schedule item is created, its PaymentAccountId inherits the payment schedule’s DefaultPaymentAccountId. However, you can provide a new PaymentAccountId at any time. If you change the PaymentAccountId, only payments made after the change use the new account.This is a relationship field.Relationship NamePaymentAccountRelationship TypeLookupRefers ToAccount |
| PaymentBatchRunId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe payment batch run that evaluated the payment schedule item for payment processing.This is a relationship field.Relationship NamePaymentBatchRunRelationship TypeLookupRefers ToPaymentBatchRun |
| PaymentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe payment that a payment run created for the payment schedule item after picking up the parent payment schedule. This field is unique within your organizationThis is a relationship field.Relationship NamePaymentRelationship TypeLookupRefers ToPayment |
| PaymentMethodId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe payment method assigned to payments created from the payment schedule item. When a payment schedule item is created, its PaymentMethodId inherits the payment schedule’s DefaultPaymentMethodId. However, you can provide a new PaymentMethodId at any time. If you change the PaymentMethodId, only payments made after the change use the new account.Relationship NamePaymentMethodRelationship TypeLookupRefers ToCardPaymentMethod, DigitalWallet |
| PaymentProcessingMessage | TypestringPropertiesFilter, Nillable, SortDescriptionShows information about whether the payment creation process has completed. |
| PaymentsReceived | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe payment received from the borrower for the payment schedule item. |
| PaymentRunMatchingValue | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe value used to match a payment schedule item to a payment run based on the payment run’s matching criteria. |
| PaymentScheduleId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe parent payment schedule for the payment schedule item.This is a relationship field.Relationship NamePaymentScheduleRelationship TypeLookupRefers ToPaymentSchedule |
| PaymentScheduleItemNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUser-defined reference number for the payment schedule item. |
| PaymentSource | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe feature that caused a payment to be created from the payment schedule item.Possible values are:PaymentRun |
| PaymentsReceived | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe payment received from the borrower for the payment schedule item.Available in API version 63.0 and later with Financial Services and Automotive Cloud. |
| ProcessedAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe amount of the payment schedule item that has been processed for payment and converted to a payment record. |
| RequestedAmount | TypecurrencyPropertiesCreate, Filter, Sort, UpdateDescriptionThe initial amount of the payment schedule item upon creation. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe status of the payment schedule item.Possible values are:Applied: The payment schedule item has been successfully applied.Apply Failed: The payment run encountered an error when attempting to process the payment schedule item for payment. For more information, review the payment run’s revenue transaction error log.Approval PendingThe payment schedule item is waiting for approval before it can be processed by payment runs.Available in API version 65.0 and later with Financial Services and Automotive Cloud.Canceled: The payment schedule item can’t be picked up by payment runs for processing. When a user or process changes the item’s status to Canceled, the item’s CanceledAmount becomes RequestedAmount – ProcessedAmount.Deferred PaymentThe payment schedule item has been postponed and will be processed at a later date.Available in API version 65.0 and later with Financial Services and Automotive Cloud.Payment Waived OffThe payment schedule item has been canceled, and the payment will not be processed.Available in API version 65.0 and later with Financial Services and Automotive Cloud. |
| TargetPaymentProcessingDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe date after picking up a payment schedule item that the payment run makes a payment request to the payment gateway. |
| UsageType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the usage type for the record.Possible value is:CollectionPlanAvailable in API version 62.0 and later with Financial Services and Automotive Cloud. |

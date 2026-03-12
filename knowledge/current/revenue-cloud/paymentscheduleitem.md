---
title: "PaymentScheduleItem"
domain: revenue-cloud
topic: paymentscheduleitem
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:10.796Z
estimatedTokens: 2180
keywords: [PaymentScheduleItem, Represents, information, payment, processed., schedule, item, different, configuration, fields, such, dates, accounts., scheduler, launches, run, evaluates, active, items, picks]
---

# PaymentScheduleItem

> Represents information about a payment to be processed. Each schedule
         item can have different payment configuration fields, such as payment methods, payment
         dates, and payment accounts. When a payment scheduler launches a payment run, the run
         evaluates active payment schedule items, and picks them up for payment processing if they
         match the scheduler’s payment criteria. This object is available in API version 64.0
      and later.

# PaymentScheduleItem

Represents information about a payment to be processed. Each schedule item can have different payment configuration fields, such as payment methods, payment dates, and payment accounts. When a payment scheduler launches a payment run, the run evaluates active payment schedule items, and picks them up for payment processing if they match the scheduler’s payment criteria. This object is available in API version 64.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=revenue_lifecycle_management_dev_guide)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

You need the Revenue Cloud Billing license, and the Payment Admin permission set or the Payment Operations User permission set to access this object.

## Fields

| Field | Details |
| --- | --- |
| AppliedAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe amount of a credit memo or payment that’s applied to the parent reference entity and is excluded for payment collection. |
| Comments | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionAdditional details about the payment schedule item. |
| LastPaymentGatewayLogId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe most recent payment gateway log created after a payment gateway request is sent to process a payment based on the payment schedule item.This field is a relationship field.Relationship NameLastPaymentGatewayLogRefers ToPaymentGatewayLog |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| NextPaymentRetryTime | TypedateTimePropertiesCreate, Filter, Nillable, SortDescriptionThe slated time of the next payment retry for the payment schedule item. Available in API version 66.0 and later. |
| NextPaymentRetryTime | TypedateTimePropertiesCreate, Filter, Nillable, SortDescriptionThe slated time of the next payment retry for the payment schedule item. Available in API version 66.0 and later. |
| PaymentAccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe account assigned to payments made from the payment schedule item. When a payment schedule item is created, its PaymentAccountId inherits the payment schedule’s DefaultPaymentAccountId. However, you can provide a new PaymentAccountId at any time. If you change the PaymentAccountId, only payments made after the change use the new account.This field is a relationship field.Relationship NamePaymentAccountRefers ToAccount |
| PaymentBatchRunId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe payment batch run that evaluated the payment schedule item for payment processing.This field is a relationship field.Relationship NamePaymentBatchRunRefers ToPaymentBatchRun |
| PaymentGatewayErrorCategory | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe category of payment gateway errors for the payment schedule item.Valid values are:CardLimit—Card Limit DeclineGatewayConnection—Gateway Connection ErrorPaymentInformation—Invalid Payment DetailsPaymentProcessing—Payment Processing ErrorSecurity—Security FailureUnknown—Unknown ErrorValidationFailure—Internal Validation ErrorAvailable in API version 66.0 and later. |
| PaymentGatewayErrorCode | TypestringPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe raw error code from the payment gateway for the payment schedule item. Available in API version 66.0 and later. |
| PaymentGatewayRespStatus | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe status of the payment gateway response when the payment schedule item is processed.Valid values are:DeclineIndeterminatePermanentFailRequiresReviewSuccessSystemErrorValidationErrorSee SalesforceResultCode Enum for more information about the values. |
| PaymentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe payment that a payment run created for the payment schedule item after picking up the parent payment schedule. This field is unique within your organization.This field is a relationship field.Relationship NamePaymentRefers ToPayment |
| PaymentMethodId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe payment method assigned to payments created from the payment schedule item. When a payment schedule item is created, its PaymentMethodId inherits the payment schedule’s DefaultPaymentMethodId. However, you can provide a new PaymentMethodId at any time. If you change the PaymentMethodId, only payments made after the change use the new account.This field is a polymorphic relationship field.Relationship NamePaymentMethodRefers ToCardPaymentMethod, SavedPaymentMethod |
| PaymentProcessingMessage | TypestringPropertiesFilter, Nillable, SortDescriptionInformation about whether the payment creation process has completed. |
| PaymentRetryCount | TypeintPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe number of payment retries that were attempted on the payment schedule item. Available in API version 66.0 and later. |
| PaymentRunMatchingValue | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe value used to match a payment schedule item to a payment run based on the payment run’s matching criteria. |
| PaymentScheduleId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. The parent payment schedule for the payment schedule item.This field is a relationship field.Relationship NamePaymentScheduleRelationship TypeMaster-detailRefers ToPaymentSchedule (the master object) |
| PaymentScheduleItemNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionRequired. The auto-generated reference number for the payment schedule item. |
| PaymentSource | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe process that created a payment based on the payment schedule item.Valid values are:External PaymentPayment Run |
| PaymentsReceived | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount that's been received for the payment created for the payment schedule item. |
| ProcessedAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe amount of the payment schedule item that has been processed for payment and converted to a payment record. |
| RequestedAmount | TypecurrencyPropertiesCreate, Filter, Sort, UpdateDescriptionRequired. The initial amount of the payment schedule item upon creation. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. The status of the payment schedule item.Valid values are:Applied—The payment schedule item has been successfully applied.Apply Failed—The payment run encountered an error when attempting to process the payment schedule item for payment. For more information, review the payment run’s revenue transaction error log.Canceled—The payment schedule item can’t be picked up by payment runs for processing. When a user or process changes the item’s status to Canceled, the item’s CanceledAmount becomes RequestedAmount – ProcessedAmount.Draft—Payment schedule items are created with this status.Failed—The payment run has failed to process the payment schedule item for payment.Processed—The payment run has processed the payment schedule item for payment.Processing—The payment run is processing the payment schedule item for payment.Ready for Processing—The payment schedule item is ready to be processed by a payment run. |
| TargetPaymentProcessingDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The date when the payment run makes a payment request to the payment gateway for the payment schedule item. |
| UsageType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe feature using the payment schedule item.Valid value is:CollectionPlan |

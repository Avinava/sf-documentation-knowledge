---
title: "PaymentScheduleTreatmentDtl"
domain: revenue-cloud
topic: paymentscheduletreatmentdtl
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:10.823Z
estimatedTokens: 1028
keywords: [PaymentScheduleTreatmentDtl, Represents, information, processing, payment, schedules, after, corresponding, invoices, posted., API, version, 64.0, later., Important, Supported, Calls, Special, Access, Rules]
---

# PaymentScheduleTreatmentDtl

> Represents information about the processing of payment schedules after the
         corresponding invoices are posted. This object is available in API version 64.0 and
      later.

# PaymentScheduleTreatmentDtl

Represents information about the processing of payment schedules after the corresponding invoices are posted. This object is available in API version 64.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=revenue_lifecycle_management_dev_guide)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

You need the Revenue Cloud Billing license, and the Payment Admin permission set or the Payment Operations User permission set to access this object.

## Fields

| Field | Details |
| --- | --- |
| DateOffset | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The date offset is subtracted from the ProcessingDateReference value to determine the processing date. It must be a number equal to or less than 0. For example, if the invoice due date is 10/17/2025 and the date offset is -7, the payment schedule item is processed by jobs that run on or before 10/10/2025. |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe user-entered description for the payment schedule treatment detail. |
| InstallmentPaymentType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. Indicates how the payment amount is divided into multiple payments.Valid value is:Percentage |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| PaymentMethodSelectionType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. Indicates how the payment method is specified.Valid values are:Manual—The user enters the payment method.MostRecentAutopay—The payment method is the most recently used automatic payment method.DefaultSavedPaymentMethod—The default payment method used for processing payments. Available in API version 65.0 and later. |
| PaymentRunMatchingValue | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe value for the condition specified for the payment run criteria. When a payment batch run starts, all the payment schedule items that meet the specified criteria are processed. |
| PaymentScheduleTreatmentDetailNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionRequired. The system-generated unique identifier for the payment schedule treatment detail. |
| PaymentScheduleTreatmentId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. The ID of the related payment schedule treatment.This field is a relationship field.Relationship NamePaymentScheduleTreatmentRelationship TypeMaster-detailRefers ToPaymentScheduleTreatment (the master object) |
| Percentage | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of the source amount that's used to create the payment schedule. |
| ProcessingDateReference | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. The source of the reference date.Valid value is:InvoiceDueDate |
| PymtSchdDistributionMethodId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The distribution method that contains the information on how to create the payment schedule items.This field is a relationship field.Relationship NamePymtSchdDistributionMethodRefers ToPymtSchdDistributionMethod |

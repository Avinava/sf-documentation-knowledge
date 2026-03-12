---
title: "PaymentScheduleTreatmentDtl"
domain: object-reference
topic: paymentscheduletreatmentdtl
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:14.675Z
estimatedTokens: 978
keywords: [PaymentScheduleTreatmentDtl, configuration, payment, schedule, treatment, detail, API, version, 56.0, later, Calls, Special, Access, Rules]
---

# PaymentScheduleTreatmentDtl

> Contains configuration information for the payment schedule treatment
         detail. This object is available in API version 56.0 and later.

# PaymentScheduleTreatmentDtl

Contains configuration information for the payment schedule treatment detail. This object is available in API version 56.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available with Subscription Management and Billing (Revenue Cloud).

For information about this object that's available with Billing (Revenue Cloud), including its special access rules, see the [Revenue Cloud Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_paymentscheduletreatmentdtl.htm "HTML (New Window)").

## Fields

| Field | Details |
| --- | --- |
| DateOffset | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionA number equal to or less than 0. The date offset is subtracted from the processing date reference to determine the processing date.For example, suppose that the invoice due date is 01/17/2022 and offset is -7. In this case, the payment schedule item is processed by the jobs that run on or before 01/10/2022. |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe user-entered description of the payment schedule treatment detail. |
| InstallmentPaymentType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionIndicates how the payment amount is divided into multiple payments.Possible values are:Percentage |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| PaymentMethodSelectionType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionIndicates how the payment method is specified.Possible values are:Manual—the payment method is entered by a userMostRecentAutopay—the payment method is the most recent automatic payment method used |
| PaymentRunMatchingValue | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPossible values are:AMERAPACEMEA |
| PaymentScheduleTreatmentDetailNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionSystem-generated unique identifier for this payment schedule treatment detail. |
| PaymentScheduleTreatmentId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the related payment schedule treatment.This field is a relationship field.Relationship NamePaymentScheduleTreatmentRelationship TypeLookupRefers ToPaymentScheduleTreatment |
| Percentage | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionIndicates the percentage of the source amount that is used to create the payment schedule. |
| ProcessingDateReference | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionIndicates the source of the reference date.Possible values are:InvoiceDueDate—use the invoice’s due date as the date referenceUserInputDate—User Input DateAvailable in API version 65.0 and later with Financial Services and Automotive Cloud. |
| PymtSchdDistributionMethodId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe distribution method that contains the information on how to create the payment schedule items.This field is a relationship field.Relationship NamePymtSchdDistributionMethodRelationship TypeLookupRefers ToPymtSchdDistributionMethod |

---
title: "PaymentScheduleTreatment"
domain: object-reference
topic: paymentscheduletreatment
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:14.665Z
estimatedTokens: 829
keywords: [PaymentScheduleTreatment, configuration, payment, schedule, API, version, 56.0, later, Calls, Special, Access, Rules]
---

# PaymentScheduleTreatment

> Contains configuration information for the payment schedule.
      This object is available in API version 56.0 and later.

# PaymentScheduleTreatment

Contains configuration information for the payment schedule. This object is available in API version 56.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available with Subscription Management and Billing (Revenue Cloud).

For information about this object that's available with Billing (Revenue Cloud), including its special access rules, see the [Revenue Cloud Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_paymentscheduletreatment.htm "HTML (New Window)").

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe user-entered description of the payment schedule treatment. |
| IsApprovalRequired | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether this payment schedule treatment requires approval or not.Available in API version 65.0 and later with Financial Services and Automotive Cloud.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe user-entered name of the payment schedule treatment. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner of this object.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PaymentPlanTag | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionA list of key annotations or insights about the payment plan, such as requires approval or recommended, to help guide the user in selecting the most suitable payment plan.Available in API version 65.0 and later with Financial Services and Automotive Cloud. |
| PaymentSchedulePolicyId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the related payment schedule policy.This field is a relationship field.Relationship NamePaymentSchedulePolicyRelationship TypeLookupRefers ToPaymentSchedulePolicy |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe payment schedule treatment’s status.Possible values are:ActiveCanceledDraftInactive |
| TriggerSource | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionIndicates the action that caused the payment schedule treatment to be created.Possible values are:InvoicePosted—an invoice is postedUserAction—User ActionAvailable in API version 65.0 and later with Financial Services and Automotive Cloud. |

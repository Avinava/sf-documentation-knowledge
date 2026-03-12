---
title: "PaymentSchedulePolicy"
domain: object-reference
topic: paymentschedulepolicy
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:14.656Z
estimatedTokens: 715
keywords: [PaymentSchedulePolicy, configuration, payment, schedule, policy, API, version, 56.0, later, Calls, Special, Access, Rules]
---

# PaymentSchedulePolicy

> Contains configuration information for the payment schedule policy. This
      object is available in API version 56.0 and later.

# PaymentSchedulePolicy

Contains configuration information for the payment schedule policy. This object is available in API version 56.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available with Subscription Management and the PaymentScheduleAutomation permission, and Billing (Revenue Cloud).

For information about this object that's available with Billing (Revenue Cloud), including its special access rules, see the [Revenue Cloud Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_paymentschedulepolicy.htm "HTML (New Window)").

## Fields

| Field | Details |
| --- | --- |
| DefaultTreatmentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe default payment schedule treatment.This field is a relationship field.Relationship NameDefaultTreatmentRelationship TypeLookupRefers ToPaymentScheduleTreatment |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUser-entered description of the payment schedule policy. |
| IsOrgDefault | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptiontrue if the payment schedule policy is the default policy for the org, otherwise false. An org can have a maximum of one default payment policy.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe user-entered name of the payment policy. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the creator of this object.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe payment schedule policy’s status.Possible values are:ActiveCanceledDraftInactive |
| TreatmentSelection | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionIndicates the payment schedule treatment.Possible values are:Default—use the payment schedule treatment indicated by DefaultTreatmentId. |

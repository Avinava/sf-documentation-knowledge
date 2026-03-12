---
title: "PaymentSchedulePolicy"
domain: revenue-cloud
topic: paymentschedulepolicy
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:11.850Z
estimatedTokens: 642
keywords: [PaymentSchedulePolicy, configuration, payment, schedule, API, version, 64.0, later, Calls, Special, Access, Rules]
---

# PaymentSchedulePolicy

> Represents information about the configuration for the payment schedule.
      This object is available in API version 64.0 and later.

# PaymentSchedulePolicy

Represents information about the configuration for the payment schedule. This object is available in API version 64.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

You need the Revenue Cloud Billing license, and the Payment Admin permission set or the Payment Operations User permission set to access this object.

## Fields

| Field | Details |
| --- | --- |
| DefaultTreatmentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe default payment schedule treatment.This field is a relationship field.Relationship NameDefaultTreatmentRefers ToPaymentScheduleTreatment |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe user-entered description for the payment schedule policy. |
| IsOrgDefault | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIf the payment schedule policy is the default policy for the org, this value is set to true. If not, this value is set to false. An org can have only one default payment policy.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe user-entered name of the payment schedule policy. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. The ID of the owner of the PaymentSchedulePolicy record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe status of the payment schedule policy.Valid values are:ActiveCanceledDraftInactive |
| TreatmentSelection | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the payment schedule treatment.Valid value is:Default—Uses the payment schedule treatment indicated by the DefaultTreatmentId field. |

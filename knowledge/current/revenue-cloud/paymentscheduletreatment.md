---
title: "PaymentScheduleTreatment"
domain: revenue-cloud
topic: paymentscheduletreatment
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:10.813Z
estimatedTokens: 735
keywords: [PaymentScheduleTreatment, Represents, information, processing, payment, schedules, including, amount, schedule., API, version, 64.0, later., Supported, Calls, Special, Access, Rules, Fields, Associated]
---

# PaymentScheduleTreatment

> Represents information about the processing of payment schedules including
         the payment method and the payment amount for the payment schedule. This object is
      available in API version 64.0 and later.

# PaymentScheduleTreatment

Represents information about the processing of payment schedules including the payment method and the payment amount for the payment schedule. This object is available in API version 64.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

You need the Revenue Cloud Billing license, and the Payment Admin permission set or the Payment Operations User permission set to access this object.

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe user-entered description of the payment schedule treatment. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. The user-entered name of the payment schedule treatment. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. The ID of the owner of the PaymentScheduleTreatment record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| PaymentSchedulePolicyId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the related payment schedule policy.This field is a relationship field.Relationship NamePaymentSchedulePolicyRefers ToPaymentSchedulePolicy |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. The status of the payment schedule treatment.Valid values are:ActiveCanceledDraftInactive |
| TriggerSource | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. The action that caused the payment schedule treatment to be created.Valid value is:InvoicePosted |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PaymentScheduleTreatmentShare](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- PaymentScheduleTreatmentShare (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_share.htm)

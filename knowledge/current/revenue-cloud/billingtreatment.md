---
title: "BillingTreatment"
domain: revenue-cloud
topic: billingtreatment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:11.047Z
estimatedTokens: 882
keywords: [BillingTreatment, billing, order, item, API, version, 62.0, later, Calls, Special, Access, Rules, Associated, Objects]
---

# BillingTreatment

> Represents information about the billing of an order item. This
      object is available in API version 62.0 and later.

# BillingTreatment

Represents information about the billing of an order item. This object is available in API version 62.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

You need the Billing Admin permission set to access this object.

## Fields

| Field | Details |
| --- | --- |
| BillingPolicyId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe billing policy that's related to the billing treatment.This field is a relationship field.Relationship NameBillingPolicyRefers ToBillingPolicy |
| CanChangeBillingFrequency | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the billing frequency can be changed for the billing treatment (true) or not (false).The default value is false. |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionAdditional details about the billing treatment. |
| ExcludeFromBilling | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. Specifies whether any order items assigned to the treatment are excluded from billing.Valid values are:NoYes |
| IsMilestoneBilling | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. Indicates whether the billing treatment is for milestone billing (true) or not (false).The default value is false. This field is available in API version 63.0 and later with Revenue Cloud Billing license. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed a billing treatment indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed a billing treatment. If this value is null, it’s possible that the user only accessed the billing treatment or a related list view (LastReferencedDate), but not viewed the billing treatment itself. |
| LegalEntityId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe legal entity that's used to assign the treatment to order items when the parent billing policy's BillingTreatmentSelection field value is LegalEntity.This field is a relationship field.Relationship NameLegalEntityRefers ToLegalEntity |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. The name of the billing treatment. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. The status of the billing treatment.Valid values are:ActiveDraftInactiveDraft or inactive billing treatments can't be assigned to order items. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[BillingTreatmentHistory](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- BillingTreatmentHistory (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_history.htm)

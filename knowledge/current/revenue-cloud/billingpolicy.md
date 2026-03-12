---
title: "BillingPolicy"
domain: revenue-cloud
topic: billingpolicy
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:10.989Z
estimatedTokens: 694
keywords: [BillingPolicy, billing, treatments, define, rules, invoice, customer, order, item, API, version, 62.0, later, Calls, Special]
---

# BillingPolicy

> Represents information about a set of billing treatments that define
         the rules to invoice a customer for an order item. This object is available in API
      version 62.0 and later.

# BillingPolicy

Represents information about a set of billing treatments that define the rules to invoice a customer for an order item. This object is available in API version 62.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

You need the Billing Admin permission set to access this object.

## Fields

| Field | Details |
| --- | --- |
| BillingTreatmentSelection | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. Defines how billing treatments are assigned to order items and assets that are related to the billing policy.Valid values are:DefaultLegalEntityManual |
| DefaultBillingTreatmentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionWhen BillingTreatmentSelection has a value of Default, the selected billing treatment is used for all the order items and assets that are related to the billing policy.This field is a relationship field.Relationship NameDefaultBillingTreatmentRefers ToBillingTreatment |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionAdditional details about the billing policy. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed a billing policy indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed a billing policy. If this value is null, it’s possible that the user only accessed the billing policy or a related list view (LastReferencedDate), but not viewed the accounting period itself. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. The name of the billing policy. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. The status of the billing policy.Valid values are:ActiveDraftInactive |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[BillingPolicyHistory](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- BillingPolicyHistory (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_history.htm)

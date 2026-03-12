---
title: "BillingTreatment"
domain: object-reference
topic: billingtreatment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:05.568Z
estimatedTokens: 890
keywords: [BillingTreatment, how, Subscription, Management, bills, order, item, Exclude, Billing, whether, invoiced, Child, treatment, items, control]
---

# BillingTreatment

> Defines how Subscription Management bills an order item. The Exclude From
         Billing field controls whether the order item is invoiced. Child billing treatment items
         control how much of the order item's balance is invoiced for each invoice across the
         subscription's lifecycle. Billing treatments are assigned to order items based on the
         parent billing policy's Billing Treatment Selection field. This object is available in
      API version 55.0 and later.

# BillingTreatment

Defines how Subscription Management bills an order item. The Exclude From Billing field controls whether the order item is invoiced. Child billing treatment items control how much of the order item's balance is invoiced for each invoice across the subscription's lifecycle. Billing treatments are assigned to order items based on the parent billing policy's Billing Treatment Selection field. This object is available in API version 55.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

This object is available with Subscription Management and Billing (Revenue Cloud).

For information about this object that's available with Billing (Revenue Cloud), including its special access rules, see the [Revenue Cloud Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_billingtreatment.htm).

## Fields

| Field | Details |
| --- | --- |
| BillingPolicyId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the billing policy for the billing treatment.This field is a relationship field.Relationship NameBillingPolicyRelationship TypeLookupRefers ToBillingPolicy |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionOptional user-defined description of the billing treatment. |
| ExcludeFromBilling | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionExcludes any order items assigned to the treatment from creating billing schedules.Possible values are:NoYes |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| LegalEntityId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the legal entity used to assign the treatment to order items when the parent billing policy's BillingTreatmentSelection is LegalEntity.This field is a relationship field.Relationship NameLegalEntityRelationship TypeLookupRefers ToLegalEntity |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionOptional user-defined name for the billing treatment. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionDraft or inactive billing treatments can't be assigned to order items.Possible values are:ActiveDraftInactive |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[BillingTreatmentHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.") (API version 55.0)

History is available for tracked fields of the object.

## Related Topics

- BillingTreatmentHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)

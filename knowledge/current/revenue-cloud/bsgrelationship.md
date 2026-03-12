---
title: "BsgRelationship"
domain: revenue-cloud
topic: bsgrelationship
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:09.895Z
estimatedTokens: 827
keywords: [BsgRelationship, Represents, relationship, between, billing, schedule, groups, support, bundles, where, parent, group, multiple, child, groups., API, version, 62.0, later., Important]
---

# BsgRelationship

> Represents a relationship between billing schedule groups to support
         bundles where one parent billing schedule group has multiple child billing schedule
         groups. This object is available in API version 62.0 and later.

# BsgRelationship

Represents a relationship between billing schedule groups to support bundles where one parent billing schedule group has multiple child billing schedule groups. This object is available in API version 62.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=revenue_lifecycle_management_dev_guide)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

You need the Billing Admin permission set to access this object.

## Fields

| Field | Details |
| --- | --- |
| AssociatedBsgId | TypereferencePropertiesFilter, Group, SortDescriptionRequired. The ID of the related billing schedule group. In a bundle relationship, this billing schedule group is the child.This field is a relationship field.Relationship NameAssociatedBsgRefers ToBillingScheduleGroup |
| AssociatedBsgPricing | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionRequired. This field describes how the related billing schedule group is priced relative to the primary billing schedule group.Valid values are:IncludedInBundlePriceNotIncludedInBundlePrice |
| AssociatedBsgRole | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionRequired. This field describes the role of the related billing schedule group in the relationship.Valid values are:AddOnComponentBundleComponentClassificationComponentSetComponent |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed a billing schedule group record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed a billing schedule group relationship record. If this value is null, it’s possible that the user only accessed the billing schedule group relationship record or a related list view (LastReferencedDate), but not viewed the billing schedule group relationship record itself. |
| MainBsgId | TypereferencePropertiesFilter, Group, SortDescriptionRequired. The ID of the primary billing schedule group. In a bundle relationship, this billing schedule group is the parent.This field is a relationship field.Relationship NameMainBsgRelationship TypeMaster-detailRefers ToBillingScheduleGroup (the master object) |
| MainBsgRole | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionRequired. This field describes the role of the primary billing schedule group in the relationship.Valid values are:AddOnBundleSet |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionRequired. The auto-generated reference number for the billing schedule relationship. |
| ProductRelationshipTypeId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the relationship type between the main and associated billing schedule group.This field is a relationship field.Relationship NameProductRelationshipTypeRefers ToProductRelationshipType |

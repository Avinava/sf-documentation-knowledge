---
title: "WorkPlanSelectionRule"
domain: field-service
topic: workplanselectionrule
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:47:13.163Z
keywords: [WorkPlanSelectionRule, Supported, Calls, Special, Access, Rules, Fields, Associated, Objects]
---

# WorkPlanSelectionRule

# WorkPlanSelectionRule

Represents a rule that selects a work plan for a work order or work order line item. This object is available in API version 52.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

Field Service must be enabled.

## Fields

| Field | Details |
| --- | --- |
| AssetId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the asset. |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the selection rule. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionControls whether this selection rule is active (true) or not (false). Default is false. Label is Active. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last interacted with this record, directly or indirectly. Some sample scenarios are: |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, it’s possible that the user only accessed this record or list view (LastReferencedDate), but not viewed it. |
| LocationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the location. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the owner. |
| Product2Id | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the product. Label is Product. |
| ServiceTerritoryId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the service territory. |
| WorkPlanSelectionRuleNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe auto-generated number of the work plan selection rule, for example, WPSR-0001. |
| WorkPlanTemplateId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The ID of the work plan template. |
| WorkTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the work type. |

## Associated Objects

This object has these associated objects. Unless noted, they’re available in the same API version as this object.

WorkPlanSelectionRuleChangeEvent

Change events are available for the object.

WorkPlanSelectionRuleFeed

Feed tracking is available for the object.

WorkPlanSelectionRuleHistory

History is available for tracked fields of the object.

WorkPlanSelectionRuleOwnerSharingRule

Sharing rules are available for the object.

WorkPlanSelectionRuleShare

Sharing is available for the object.
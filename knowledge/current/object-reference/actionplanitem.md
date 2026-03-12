---
title: "ActionPlanItem"
domain: object-reference
topic: actionplanitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:03.916Z
estimatedTokens: 830
keywords: [ActionPlanItem, instance, action, plan, item.This, API, version, 44.0, later, Calls, Associated, Objects]
---

# ActionPlanItem

> Represents the instance of an action plan item.This object is
		available in API version 44.0 and later.

# ActionPlanItem

Represents the instance of an action plan item.This object is available in API version 44.0 and later.

## Supported Calls

create()delete()describeLayout()describeSObjects()getDeleted()getUpdated()query()retrieve()undelete()update()upsert()

## Fields

| Field Name | Details |
| --- | --- |
| ActionPlanId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the action plan that this item belongs to. |
| ActionPlanTemplateItemId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe ID of the action plan template item this item was created from. |
| IsLocked | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether this action plan item is locked or not. The default value is false. |
| IsRequired | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, SortDescriptionIndicates whether this action plan item is required or not. |
| ItemEntityType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe type of object used with the item. This field is available in API version 61.0 and later.Possible values are:AssessmentTask—Assessment TaskDocumentChecklistItem—Document Checklist ItemEvent-Available only with sales action plans in API version 63.0 and later with the Sales Action Plans add-on license and the Sales Action Plans default permission set.GenericVisitTask—Generic Visit TaskOtherComponentTask—Other Component TaskRecordActionSignatureTask—Signature TaskTask |
| ItemId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe ID of the record created by this action plan item. This field is a polymorphic relationship field.Relationship NameItemRefers ToDocumentChecklistItem, Event, RecordAction, Task |
| ItemState | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe action plan item’s work state.Possible values are:CanceledCompletedDeletedIn ProgressPending |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of this action plan item. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[ActionPlanItemChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)

Change events are available for the object.

[ActionPlanItemFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[ActionPlanItemHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[ActionPlanItemOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)

Sharing rules are available for the object.

[ActionPlanItemShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)

Sharing is available for the object.

---
title: "WorkTypeExtension"
domain: life-sciences-dev-guide
topic: worktypeextension
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:47.639Z
estimatedTokens: 917
keywords: [WorkTypeExtension, additional, work, Special, Access, Rules, Calls, Associated, Objects]
---

# WorkTypeExtension

> Represents additional information about a work type.

# WorkTypeExtension

Represents additional information about a work type.

## Special Access Rules

Available in API version 61.0 and later with Life Sciences Cloud.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| IconUrl | TypeurlPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe URL of the image related to the work type. |
| IsNonStandard | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the work type is nonstandard, that is, the work type can also be performed at child service territories that aren’t part of the parent service territory.The default value is FALSE. |
| IsSchedulingRequired | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether a work type requires scheduling.The default value is FALSE. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced the record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed the record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the work type extension. |
| ParentWorkTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRepresents the parent record of the work type for which information is being added.This field is a relationship field.Relationship NameParentWorkTypeRelationship TypeLookupRefers ToWorkType |
| WorkTypeId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRepresents the work type for which information is being added.This field is a relationship field.Relationship NameWorkTypeRelationship TypeMaster-DetailRefers ToWorkType |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[WorkTypeExtensionChangeEvent](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 60.0)

Change events are available for the object.

[WorkTypeExtensionFeed](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[WorkTypeExtensionHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- WorkTypeExtensionChangeEvent (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm)
- WorkTypeExtensionFeed (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm)
- WorkTypeExtensionHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)

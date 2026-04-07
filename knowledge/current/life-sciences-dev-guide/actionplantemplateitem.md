---
title: "ActionPlanTemplateItem"
domain: life-sciences-dev-guide
topic: actionplantemplateitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:37:57.650Z
estimatedTokens: 1254
keywords: [ActionPlanTemplateItem, instance, item, action, plan, template, API, 64.0, Key, Account, Management, feature, Life, Sciences, Cloud]
---

> Represents the instance of an item on an action plan template version. This
         object is available in API version 64.0 and later in Key Account Management feature in the
         Life Sciences Cloud.

# ActionPlanTemplateItem

Represents the instance of an item on an action plan template version. This object is available in API version 64.0 and later in Key Account Management feature in the Life Sciences Cloud.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=life_sciences_dev_guide)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ActionPlanTemplateVersionId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe version of the action plan template this item is for.This field is a relationship field in Key Account Management feature.Relationship NameActionPlanTemplateVersionRelationship TypeMaster-detailRefers ToActionPlanTemplateVersion (the master object) |
| DisplayOrder | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe order in which this item is displayed within the action plan template version. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the task created from this template item is active.The default value is false. |
| IsLocked | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether this action plan template item is locked or not. The default value is false. This field is available in Intelligent Sales in API version 44.0 and later. |
| IsRequired | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the task created from this template item is required.The default value is false. |
| ItemEntityType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe type of action plan template item entity. Always set to Task.Possible values are:Document Checklist ItemEvent—This value is available in API version 64.0.RecordActionTaskPrvdEngmtComplianceCycle—Provider Engagement Compliance Cycle. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last referenced a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| MayEdit | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether this action plan template item can be edited or not. The default value is false. This field is available in Intelligent Sales in API version 44.0 and later. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe unique identifier for this action plan template item record. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe identifier of the record in the source system. This field is available in Key Account Management in API version 64.0 and later. |
| SourceSystemName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the system from which data is loaded into this object. This field is available in Key Account Management in API version 63.0 and later. |
| UniqueName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique name for this action plan template item.This field is unique within your organization. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[ActionPlanTemplateItemChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)

Change events are available for the object.

[ActionPlanTemplateItemFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[ActionPlanTemplateItemHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[ActionPlanTemplateItemOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)

Sharing rules are available for the object.

[ActionPlanTemplateItemShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)

Sharing is available for the object.

---
title: "ActionPlanTemplateVersion"
domain: object-reference
topic: actionplantemplateversion
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:03.965Z
estimatedTokens: 799
keywords: [ActionPlanTemplateVersion, version, action, plan, template, API, 44.0, later, Calls, Associated, Objects]
---

# ActionPlanTemplateVersion

> Represents the version of an action plan template. This object
		is available in API version 44.0 and later.

# ActionPlanTemplateVersion

Represents the version of an action plan template. This object is available in API version 44.0 and later.

## Supported Calls

create()delete()describeLayout()describeSObjects()getDeleted()getUpdated()query()retrieve()search ( )undelete()update()upsert()

## Fields

| Field Name | Details |
| --- | --- |
| ActionPlanTemplateId | TypereferencePropertiesCreate, Filter, Group, Sort, Filter, Group, SortDescriptionThe ID of the action plan template this version represents. |
| ActivationDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort,DescriptionThe date and time at which this version became active. |
| InactivationDateTime | TypedateTimePropertiesCreate, Filter, Nillable, SortDescriptionThe date and time at which this version became inactive. |
| IsLocked | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether this action plan template version is locked or not. The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, Sort, , SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| MayEdit | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether this action plan template version can be edited. The default value is false. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, Update,DescriptionThe name of this version item. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe action plan template version’s state. Possible values are:DraftFinal – PublishedObsoleteReadOnly |
| Version | TypeintPropertiesCreate, Defaulted on create, Filter, Group, SortDescriptionThe index number of this action plan template version. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[ActionPlanTemplateVersionChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)

Change events are available for the object.

[ActionPlanTemplateVersionFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[ActionPlanTemplateVersionHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[ActionPlanTemplateVersionOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)

Sharing rules are available for the object.

[ActionPlanTemplateVersionShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)

Sharing is available for the object.

---
title: "ActionPlanTemplateVersion"
domain: life-sciences-dev-guide
topic: actionplantemplateversion
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:43.963Z
estimatedTokens: 843
keywords: [ActionPlanTemplateVersion, Life, Sciences, Cloud, extend, standard, represent, version, action, plan, template, Calls, Associated, Objects]
---

# ActionPlanTemplateVersion

> Life Sciences Cloud fields extend the standard ActionPlanTemplateVersion
         object to represent a version of an action plan template.

# ActionPlanTemplateVersion

Life Sciences Cloud fields extend the standard ActionPlanTemplateVersion object to represent a version of an action plan template.

The ActionPlanTemplateVersion object and its fields are used by the Key Account Management and the Provider Engagement Compliance feature areas. This topic only lists the fields used in Key Account Management. To learn about the fields that are used in Provider Engagement Compliance, see the ActionPlanTemplateVersion object documentation in the Provider Engagement Compliance section.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ActionPlanTemplateId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the action plan template this version represents.This field is a relationship field.Relationship NameActionPlanTemplateRelationship TypeMaster-detailRefers ToActionPlanTemplate (the master object) |
| ActivationDateTime | TypedateTimePropertiesCreate, Filter, Nillable, SortDescriptionThe date and time when this version becomes active. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the action plan template version. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe status of the action plan template version.Possible values are:DraftFinal—PublishedObsoleteReadOnly |
| Version | TypeintPropertiesCreate, Defaulted on create, Filter, Group, SortDescriptionThe index number of this action plan template version. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ActionPlanTemplateVersionChangeEvent](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

#### See Also

-   [*Object Reference for the Salesforce Platform*: ActionPlanTemplateVersion](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_actionplantemplateversion.htm)

## Related Topics

- ActionPlanTemplateVersionChangeEvent (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm)

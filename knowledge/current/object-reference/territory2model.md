---
title: "Territory2Model"
domain: object-reference
topic: territory2model
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:18.147Z
estimatedTokens: 1041
keywords: [Territory2Model, territory, model, Sales, Territories, enabled, Calls, Special, Access, Rules, Associated, Objects]
---

# Territory2Model

> Represents a territory model. Available if Sales Territories has
		been enabled.

# Territory2Model

Represents a territory model. Available if Sales Territories has been enabled.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Special Access Rules

Standard and partner users can access this object. If a territory model is in Active state, any standard or partner user can view that model, including its territories and assignment rules. For territories in an active model, any standard or partner user can view assigned records and assigned users subject to your Salesforce sharing settings. Users cannot view territory models in other states (such as Planning or Archived).

## Fields

| Field Name | Details |
| --- | --- |
| ActivatedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the territory model was activated. |
| DeactivatedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the territory model was archived. |
| Description | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the territory model. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The unique name of the object in the API. This name can contain only underscores and alphanumeric characters and must be unique in your organization. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. The field label in the user interface is Territory Model Name.NoteWhen creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance slows down while Salesforce generates one for each record. |
| LastOppTerrAssignEndDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionRead-only. The date when the opportunity territory assignment filter was last run. Used for Filter-Based Opportunity Territory Assignment (Pilot in Spring ’15 / API version 33). |
| LastRunRulesEndDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the last rules run was completed. |
| Name | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe territory model name. The field label in the user interface is Label. |
| State | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe state of the territory model. Values are: Planning, Activating, Activation Failed, Active, Archiving, Archiving Failed, Archived, Deleting, and Deletion Failed. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[Territory2ModelChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 62.0)

Change events are available for the object.

[Territory2ModelFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[Territory2ModelHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- Territory2ModelChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- Territory2ModelFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- Territory2ModelHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)

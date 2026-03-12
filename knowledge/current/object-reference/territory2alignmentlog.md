---
title: "Territory2AlignmentLog"
domain: object-reference
topic: territory2alignmentlog
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:18.141Z
estimatedTokens: 783
keywords: [Territory2AlignmentLog, start, end, status, territory, assignment, rule, run, job, API, version, 54.0, later, Calls, Special]
---

# Territory2AlignmentLog

> Represents the start and end status of a territory assignment rule
         run job. This object is available in API version 54.0 and later.

# Territory2AlignmentLog

Represents the start and end status of a territory assignment rule run job. This object is available in API version 54.0 and later.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

Available if Sales Territories has been enabled.

Standard and partner users can access this object. If a territory model is in Active state, any standard or partner user can view that model, including its territories and assignment rules. For territories in an active model, any standard or partner user can view assigned records and assigned users subject to your Salesforce sharing settings. Users can’t view territory models in other states (such as Planning or Archived).

## Fields

| Field | Details |
| --- | --- |
| EndTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the assignment rule run job finished. |
| Filter | TypetextareaPropertiesNillableDescriptionCriteria to filter the rule jobs. For example, {RULE_LAST_MOD_DATE_FORM=2021-08-31, RULE_LAST_MOD_DATE_TO=2021-09-15}. |
| RunAsId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the Salesforce user who started the assignment rule run job.This is a relationship field.Relationship NameRunAsRelationship TypeLookupRefers ToUser |
| StartTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the user started the assignment rule run job. |
| Status | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe status of the assignment rule run job. |
| Territory2Id | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the territory for which the assignment rule run was performed. If the assignment rule run was for the territory model, this value is null.This is a relationship field.Relationship NameTerritory2Relationship TypeLookupRefers ToTerritory2 |
| Territory2ModelId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the territory model for which the assignment rule run was performed.This is a relationship field.Relationship NameTerritory2ModelRelationship TypeLookupRefers ToTerritory2Model |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[Territory2AlignmentLogChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

## Related Topics

- Territory2AlignmentLogChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)

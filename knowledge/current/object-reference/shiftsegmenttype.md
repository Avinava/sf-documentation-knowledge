---
title: "ShiftSegmentType"
domain: object-reference
topic: shiftsegmenttype
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:17.067Z
estimatedTokens: 804
keywords: [ShiftSegmentType, activity, scheduled, shift, API, version, 55.0, later, Calls, Special, Access, Rules]
---

# ShiftSegmentType

> Represents a type of activity scheduled within a shift. This object is
      available in API version 55.0 and later.

# ShiftSegmentType

Represents a type of activity scheduled within a shift. This object is available in API version 55.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

The org must have the Workforce Engagement license and Workforce Engagement must be enabled. The user requires the Workforce Engagement Planner or Workforce Engagement Admin permission set.

## Fields

| Field | Details |
| --- | --- |
| AdherenceThreshold | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionA threshold, in minutes. If the agent starts the scheduled activity within this threshold, the shift segment activity is in adherence. |
| Category | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionA category for the type of shift segment.Possible values are:Break—Break times, such as a coffee or lunch break.NonWork—Non-working activities, such as training or meetings.Work—Work activities, such as answering calls, responding to chats, or handling cases. |
| Color | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSets a background color when shift activities of this type are displayed in the UI. Use a 3- or 6-digit hexadecimal format, for example #FF00FF. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionA description of the shift segment type. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization.NoteWhen creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance slows down while Salesforce generates one for each record.NoteOnly users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates if the shift segment type is active (true) or not (false).The default value is true. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe language of the shift segment type.Possible values are the languages that Workforce Engagement supports. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe label of the shift segment type. |
| ServicePresenceStatusId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique ID of the associated service presence status for segments of this type.This is a relationship field.Relationship NameServicePresenceStatusRelationship TypeLookupRefers ToServicePresenceStatus |

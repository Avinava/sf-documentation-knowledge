---
title: "ShiftTemplate"
domain: field-service
topic: shifttemplate
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:54.879Z
estimatedTokens: 1001
keywords: [ShiftTemplate, template, creating, shifts, API, version, 51.0, later, Calls, Special, Access, Rules, Associated, Objects]
---

# ShiftTemplate

> Represents a template for creating shifts. This object is available in
      API version 51.0 and later.

# ShiftTemplate

Represents a template for creating shifts. This object is available in API version 51.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), update(), upsert()

## Special Access Rules

Field Service or Workforce Engagement must be enabled. For Field Service, users must have Field Service permission. For Workforce Engagement, the user needs to have a Workforce Engagement Admin or Planner permission set.

## Fields

| Field | Details |
| --- | --- |
| BackgroundColor | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSets a background color when shifts are displayed in the UI. Use a 3- or 6-digit hexadecimal format, for example #FF00FF. Available in API version 54.0 and later. |
| Description | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAdditional information about the shift like number of breaks or activities. |
| Duration | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionHow long the shift lasts. The unit of measurement for this field is determined by ShiftTemplateDurationType. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the shift is active or inactive. |
| IsNonStandard | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the shift is nonstandard, such as overtime or on-call shifts.The default value is false. Available in API version 54.0 and later. |
| JobProfileId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Job Profile record. This field is optional.This is a relationship field.Relationship NameJobProfileRelationship TypeLookupRefers ToJobProfile |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the shift template was last modified. Its label in the user interface is Last Modified Date. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the shift template was last viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe shift template record name. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the shift template.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| RecordsetFilterCriteriaId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the recordset filter criteria selected for the shift template. Available in API version 53.0 and later.This is a relationship field.Relationship NameRecordsetFilterCriteriaRelationship TypeLookupRefers ToRecordsetFilterCriteria |
| ShiftTemplateDurationType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe unit of measurement for the shift template duration.Possible values are:H—HoursM—MinutesThe default value is H. |
| StartTime | TypetimePropertiesCreate, Filter, Sort, UpdateDescriptionThe time of day when the shift starts. |
| TimeSlotType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe type of time slot. Possible values are:NormalExtendedYou can use Extended to represent overtime shifts. Available in API version 55.0 and later. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

ShiftTemplateOwnerSharingRule

Sharing rules are available for the object.

ShiftTemplateShare

Sharing is available for the object.

ShiftTemplateChangeEvent

Change Data Capture events are available for the object. Available in API version 54.0 and later.

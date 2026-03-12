---
title: "ShiftPatternEntry"
domain: object-reference
topic: shiftpatternentry
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:17.054Z
estimatedTokens: 705
keywords: [ShiftPatternEntry, links, shift, template, pattern, API, version, 51.0, later, Calls, Special, Access, Rules, Associated, Objects]
---

# ShiftPatternEntry

> ShiftPatternEntry links a shift template to a shift pattern. This object
      is available in API version 51.0 and later.

# ShiftPatternEntry

ShiftPatternEntry links a shift template to a shift pattern. This object is available in API version 51.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

Field Service must be enabled. Users must have Field Service permission.

## Fields

| Field | Details |
| --- | --- |
| DayOrder | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionDayOrder links the shift template to the specific day within the shift pattern duration that the template. For example, if the DayOrder is 2 then a shift from the associated template is created on the second day of the pattern. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date that the shift pattern entry was last used. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date that the shift pattern entry was last viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionAn auto-generated reference number for the shift pattern entry. |
| ShiftPatternId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the shift pattern that the shift pattern entry is linked to.This is a relationship field.Relationship NameShiftPatternRelationship TypeLookupRefers ToShiftPattern |
| ShiftTemplateId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the shift template that’s used to create shifts for this shift pattern entry.This is a relationship field.Relationship NameShiftTemplateRelationship TypeLookupRefers ToShiftTemplate |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[ShiftPatternEntryChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 54.0)

Change events are available for the object.

#### See Also

-   [ShiftPattern](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_shiftpattern.htm "Represents a pattern of templates for creating shifts. This object is available in API version 51.0 and later.")

## Related Topics

- ShiftPatternEntryChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- ShiftPattern (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_shiftpattern.htm)

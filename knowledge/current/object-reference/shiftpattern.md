---
title: "ShiftPattern"
domain: object-reference
topic: shiftpattern
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:17.049Z
estimatedTokens: 989
keywords: [ShiftPattern, pattern, templates, creating, shifts, API, version, 51.0, later, Calls, Special, Access, Rules, Associated, Objects]
---

# ShiftPattern

> Represents a pattern of templates for creating shifts. This object is
      available in API version 51.0 and later.

# ShiftPattern

Represents a pattern of templates for creating shifts. This object is available in API version 51.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

Field Service must be enabled. Users must have Field Service permission.

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionA short description of the shift pattern to help users identify the pattern. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates that the shift pattern can be used to create shifts.The default value is ‘false’. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date that the shift pattern was last used. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date that the shift pattern was last viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionA short, descriptive name of the shift pattern. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the owner of the shift pattern. Default is the user who creates the shift pattern.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PatternLength | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe duration in days of the shift pattern. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ShiftPatternChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 54.0)

Change events are available for the object.

[ShiftPatternFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ShiftPatternHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[ShiftPatternShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

#### See Also

-   [ShiftPatternEntry](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_shiftpatternentry.htm "ShiftPatternEntry links a shift template to a shift pattern. This object is available in API version 51.0 and later.")

-   [Shift Patterns](https://help.salesforce.com/articleView?id=fs_shift_patterns.htm&language=en_US "Shift Patterns - HTML (New Window)")

## Related Topics

- ShiftPatternChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- ShiftPatternFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- ShiftPatternHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- ShiftPatternShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
- ShiftPatternEntry (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_shiftpatternentry.htm)

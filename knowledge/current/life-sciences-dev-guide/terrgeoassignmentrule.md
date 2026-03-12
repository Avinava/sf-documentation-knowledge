---
title: "TerrGeoAssignmentRule"
domain: life-sciences-dev-guide
topic: terrgeoassignmentrule
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:47.439Z
estimatedTokens: 1201
keywords: [TerrGeoAssignmentRule, alignment, rules, assign, accounts, specific, territories, geocodes, API, version, 65.0, later, Calls, Associated, Objects]
---

# TerrGeoAssignmentRule

> Represents alignment rules that assign accounts to specific territories based
         on geocodes. This object is available in API version 65.0 and later.

# TerrGeoAssignmentRule

Represents alignment rules that assign accounts to specific territories based on geocodes. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| EffectiveEndDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe date from which the assignment rule becomes effective. |
| EffectiveStartDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe date on which the assignment rule is no longer effective. |
| GeoCode | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe value of the geographic code determined by the selected geocode type. |
| GeoCodeType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe type of the geographic code used for the assignment rule.Possible values are:BrickToTerritory—Brick To TerritoryGeoGroup1—Geo Group 1GeoGroup2—Geo Group 2ZipToTerritory—Zip To TerritoryThe default value is BrickToTerritory. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the territory geo assignment rule. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the record in the external system. |
| SourceSystemName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the external system that generated the record. |
| Territory2Id | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the territory for which the assignment rule is defined.This field is a relationship field.Relationship NameTerritory2Refers ToTerritory2 |
| UsageType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe usage context for the defined territory geo assignment rule.Possible values are:Life SciencesThe default value is Life Sciences. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[TerrGeoAssignmentRuleChangeEvent](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[TerrGeoAssignmentRuleFeed](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[TerrGeoAssignmentRuleHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[TerrGeoAssignmentRuleShare](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- TerrGeoAssignmentRuleChangeEvent (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm)
- TerrGeoAssignmentRuleFeed (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm)
- TerrGeoAssignmentRuleHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)
- TerrGeoAssignmentRuleShare (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm)

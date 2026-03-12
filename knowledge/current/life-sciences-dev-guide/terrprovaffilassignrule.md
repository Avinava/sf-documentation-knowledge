---
title: "TerrProvAffilAssignRule"
domain: life-sciences-dev-guide
topic: terrprovaffilassignrule
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:47.522Z
estimatedTokens: 1151
keywords: [TerrProvAffilAssignRule, rule, aligning, affiliated, accounts, aligned, their, role, specialty, account, API, version, 65.0, later, Calls]
---

# TerrProvAffilAssignRule

> Represents a rule for aligning the affiliated accounts to the existing set of
         aligned accounts, based on their role, specialty, and account type. This object is
         available in API version 65.0 and later.

# TerrProvAffilAssignRule

Represents a rule for aligning the affiliated accounts to the existing set of aligned accounts, based on their role, specialty, and account type. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountType | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe account type for which the assignment rule is defined. |
| AffiliationRole | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe affiliation role for which the assignment rule is defined. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the territory provider affiliation assignment rule. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| ParentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe parent mapping through which the current mapping is generated.This field is a relationship field.Relationship NameParentRefers ToTerrProvAffilAssignRule |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the record in the external system. |
| SourceSystemName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the external system that generated the record. |
| SpecialityId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe affiliation specialty which the assignment rule is defined.This field is a relationship field.Relationship NameSpecialtyRefers ToCareSpecialty |
| Territory2Id | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe territory reference for which the rule is defined.This field is a relationship field.Relationship NameTerritory2Refers ToTerritory2 |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[TerrProvAffilAssignRuleChangeEvent](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[TerrProvAffilAssignRuleFeed](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[TerrProvAffilAssignRuleHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[TerrProvAffilAssignRuleShare](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- TerrProvAffilAssignRuleChangeEvent (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm)
- TerrProvAffilAssignRuleFeed (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm)
- TerrProvAffilAssignRuleHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)
- TerrProvAffilAssignRuleShare (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm)

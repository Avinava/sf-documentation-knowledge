---
title: "CareProgramTeamMember"
domain: life-sciences-dev-guide
topic: careprogramteammember
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:45.473Z
estimatedTokens: 976
keywords: [CareProgramTeamMember, person, delivers, services, under, program, manager, care, coordinator, Calls, Associated, Objects]
---

# CareProgramTeamMember

> Represents a person who delivers services under a program, such as a program manager or care coordinator.

# CareProgramTeamMember

Represents a person who delivers services under a program, such as a program manager or care coordinator.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(),  getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field Name | Details |
| --- | --- |
| AccountId | TypeLookup(Account)PropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPerson account representing the team member. |
| CareProgramId | TypeMaster-Detail(CareProgram)PropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLookup for the care program. |
| Category | TypemultipicklistPropertiesCreate, Filter, Nillable, UpdateDescriptionSpecifies the category that the member belongs to. This field is available for the Participant Management feature in API version 61.0 and later. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| MemberId | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe team member associated with the care program team member. This field is available for the Participant Management feature in API version 61.0 and later. |
| Name | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionName of the care program team member. |
| Role | TypePicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionRole of the team member. |
| SourceSystem | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSystem from which the record was sourced. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the system from which the record was sourced. |
| UserId | TypeLookup(User)PropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionUser representing the team member. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CareProgramTeamMemberChangeEvent](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 59.0)

Change events are available for the object.

[CareProgramTeamMemberFeed](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[CareProgramTeamMemberHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- CareProgramTeamMemberChangeEvent (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm)
- CareProgramTeamMemberFeed (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm)
- CareProgramTeamMemberHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)

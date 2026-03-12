---
title: "AccountPlanParticipant"
domain: life-sciences-dev-guide
topic: accountplanparticipant
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:44.863Z
estimatedTokens: 924
keywords: [AccountPlanParticipant, team, members, participating, account, plan, API, version, 65.0, later, Calls, Associated, Objects]
---

# AccountPlanParticipant

> Represents the team members participating in the account plan. This object is
         available in API version 65.0 and later.

# AccountPlanParticipant

Represents the team members participating in the account plan. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountPlanId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe account plan that the participant is working on.This field is a relationship field.Relationship NameAccountPlanRelationship TypeMaster-detailRefers ToAccountPlan (the master object) |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the account plan participant record. |
| ParticipantId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe specific team member participating in the account plan.This field is a polymorphic relationship field.Relationship NameParticipantRefers ToGroup, User |
| ParticipantRoleId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe plan participant's role in executing the account plan, such as sales representative or collaborator.This field is a relationship field.Relationship NameParticipantRoleRefers ToParticipantRole |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe identifier of the record in the source system. |
| SourceSystemName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the system from which data is loaded into this object. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AccountPlanParticipantChangeEvent](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[AccountPlanParticipantFeed](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[AccountPlanParticipantHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- AccountPlanParticipantChangeEvent (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm)
- AccountPlanParticipantFeed (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm)
- AccountPlanParticipantHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)

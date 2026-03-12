---
title: "AcctPlanPtcpStakeholder"
domain: life-sciences-dev-guide
topic: acctplanptcpstakeholder
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:44.932Z
estimatedTokens: 1025
keywords: [AcctPlanPtcpStakeholder, junction, account, plan, participant, stakeholder, Stores, collaborates, performing, tasks, API, version, 65.0, later, Calls]
---

# AcctPlanPtcpStakeholder

> Represents a junction between an account plan participant and an
         account plan stakeholder. Stores information about the account plan participant who
         collaborates with the account plan stakeholder for performing account plan tasks. This
         object is available in API version 65.0 and later.

# AcctPlanPtcpStakeholder

Represents a junction between an account plan participant and an account plan stakeholder. Stores information about the account plan participant who collaborates with the account plan stakeholder for performing account plan tasks. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountPlanParticipantId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe account plan participant who collaborates with the account plan stakeholder for performing account plan tasks.This field is a relationship field.Relationship NameAccountPlanParticipantRelationship TypeMaster-detailRefers ToAccountPlanParticipant (the master object) |
| AccountPlanStakeholderId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe account plan stakeholder who collaborates with the account plan participant and influences the decisions of the account plan.This field is a relationship field.Relationship NameAccountPlanStakeholderRefers ToAccountPlanStakeholder |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the account plan participant stakeholder record. |
| ParticipantName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the referenced account plan participant, defined as a user or a group. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe identifier of the record in the source system. |
| SourceSystemName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the system from which data is loaded into this object. |
| StakeholderName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the referenced stakeholder, defined as an account or a contact. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AcctPlanPtcpStakeholderChangeEvent](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[AcctPlanPtcpStakeholderFeed](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[AcctPlanPtcpStakeholderHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- AcctPlanPtcpStakeholderChangeEvent (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm)
- AcctPlanPtcpStakeholderFeed (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm)
- AcctPlanPtcpStakeholderHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)

---
title: "AccountPlanStakeholder"
domain: life-sciences-dev-guide
topic: accountplanstakeholder
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:44.899Z
estimatedTokens: 1172
keywords: [AccountPlanStakeholder, key, individuals, influence, account's, actions, vested, interest, outcomes, API, version, 65.0, later, Calls, Associated]
---

# AccountPlanStakeholder

> Represents the key individuals who can influence an account's actions or have
         a vested interest in its outcomes. This object is available in API version 65.0 and
         later.

# AccountPlanStakeholder

Represents the key individuals who can influence an account's actions or have a vested interest in its outcomes. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountPlanId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe account plan associated with the stakeholder.This field is a relationship field.Relationship NameAccountPlanRelationship TypeMaster-detailRefers ToAccountPlan (the master object) |
| AccountPlanObjectiveId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe account plan objective associated with the stakeholder.This field is a relationship field.Relationship NameAccountPlanObjectiveRefers ToAccountPlanObjective |
| Comment | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe additional comments or notes relevant to the stakeholder, such as their communication preferences, key interests, or past interactions with the company. |
| InfluenceLevel | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the level of influence that the stakeholder has within their organization or network, which can impact their ability to affect decisions or drive adoption of products or services. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the account plan stakeholder record. |
| RoleType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of professional role or title of the stakeholder, such as pharmacist and manager. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe identifier of the record in the source system. |
| SourceSystemName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the system from which data is loaded into the object. |
| StakeholderRefnRecordId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe stakeholder record associated with the account plan stakeholder.This field is a polymorphic relationship field.Relationship NameStakeholderReferenceRecordRefers ToAccount, Contact |
| Strength | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the perceived level of support or advocacy the stakeholder has for the company, its products, or its initiatives. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AccountPlanStakeholderChangeEvent](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[AccountPlanStakeholderFeed](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[AccountPlanStakeholderHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- AccountPlanStakeholderChangeEvent (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm)
- AccountPlanStakeholderFeed (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm)
- AccountPlanStakeholderHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)

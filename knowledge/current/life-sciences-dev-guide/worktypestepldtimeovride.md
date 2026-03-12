---
title: "WorkTypeStepLdTimeOvride"
domain: life-sciences-dev-guide
topic: worktypestepldtimeovride
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:47.655Z
estimatedTokens: 1324
keywords: [WorkTypeStepLdTimeOvride, lead, time, that's, override, work, procedure, step, performed, service, territory, country, API, version, 59.0]
---

# WorkTypeStepLdTimeOvride

> Represents the lead time that's used to override the default lead time
         required for the work procedure, work type, or work type step that's performed at a service
         territory in a country. This object is available in API version 59.0 and later.

# WorkTypeStepLdTimeOvride

Represents the lead time that's used to override the default lead time required for the work procedure, work type, or work type step that's performed at a service territory in a country. This object is available in API version 59.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CountryId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe country for which priority is being defined.This field is a relationship field.Relationship NameCountryRelationship TypeLookupRefers ToGeoCountry |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced the record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed the record. |
| LeadTime | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe time taken, in hours or days, for the combination of work procedure, work type, work type step, country, and service territory. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the work type step lead time override record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the work type step lead time override record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| Priority | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe priority of the conditions for a lead time. |
| ServiceTerritoryId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe service territory for which priority is being defined.This field is a relationship field.Relationship NameServiceTerritoryRelationship TypeLookupRefers ToServiceTerritory |
| WorkProcedureId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe work procedure for which priority is being defined.This field is a relationship field.Relationship NameWorkProcedureRelationship TypeLookupRefers ToWorkProcedure |
| WorkTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe work type for which priority is being defined.This field is a relationship field.Relationship NameWorkTypeRelationship TypeLookupRefers ToWorkType |
| WorkTypeStepId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe work type step for which priority is being defined.This field is a relationship field.Relationship NameWorkTypeStepRelationship TypeLookupRefers ToWorkTypeStep |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[WorkTypeStepLdTimeOvrideChangeEvent](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 60.0)

Change events are available for the object.

[WorkTypeStepLdTimeOvrideFeed](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[WorkTypeStepLdTimeOvrideHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[WorkTypeStepLdTimeOvrideOwnerSharingRule](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[WorkTypeStepLdTimeOvrideShare](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- WorkTypeStepLdTimeOvrideChangeEvent (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm)
- WorkTypeStepLdTimeOvrideFeed (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm)
- WorkTypeStepLdTimeOvrideHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)
- WorkTypeStepLdTimeOvrideOwnerSharingRule (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_ownersharingrule.htm)
- WorkTypeStepLdTimeOvrideShare (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm)

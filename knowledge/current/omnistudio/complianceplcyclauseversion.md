---
title: "CompliancePlcyClauseVersion"
domain: omnistudio
topic: complianceplcyclauseversion
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:52.287Z
estimatedTokens: 1003
keywords: [CompliancePlcyClauseVersion, version, Compliance, Policy, Clause, tracks, amendments, API, 65.0, later, Calls, Associated, Objects]
---

# CompliancePlcyClauseVersion

> Represents the version of the Compliance Policy Clause that tracks
         amendments. This object is available in API version 65.0 and later.

# CompliancePlcyClauseVersion

Represents the version of the Compliance Policy Clause that tracks amendments. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ChangeSummary | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionA summary of the changes made to the compliance policy version. |
| ClauseText | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe clause details of the compliance policy clause version. |
| CompliancePolicyClauseId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe compliance policy clause associated with the compliance policy clause version.This field is a relationship field.Relationship NameCompliancePolicyClauseRelationship TypeMaster-detailRefers ToCompliancePolicyClause (the master object) |
| ContentDocumentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIndicates whether the policy clause version is AI generated.This field is a relationship field.Relationship NameContentDocumentRefers ToContentDocument |
| EffectiveFrom | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the compliance policy version becomes effective. |
| EffectiveTo | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date until when the compliance policy version remains effective. |
| IsAiGenerated | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe name of the compliance policy clause version. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the status of the compliance policy clause version.Possible values are:ActiveDraftPublishedRetired |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CompliancePlcyClauseVersionChangeEvent](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[CompliancePlcyClauseVersionFeed](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[CompliancePlcyClauseVersionHistory](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- CompliancePlcyClauseVersionChangeEvent (atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_change_event.htm)
- CompliancePlcyClauseVersionFeed (atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm)
- CompliancePlcyClauseVersionHistory (atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

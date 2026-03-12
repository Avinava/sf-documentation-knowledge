---
title: "CompliancePolicyClause"
domain: omnistudio
topic: compliancepolicyclause
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:53.845Z
estimatedTokens: 837
keywords: [CompliancePolicyClause, Represents, information, related, Compliance, Policy, outlining, specific, requirements, sections., API, version, 65.0, later., Supported, Calls, Fields, Associated, Objects]
---

# CompliancePolicyClause

> Represents the information related to a Compliance Policy outlining specific
         requirements or sections. This object is available in API version 65.0 and later.

# CompliancePolicyClause

Represents the information related to a Compliance Policy outlining specific requirements or sections. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Comments | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe additional information about the clause. |
| CompliancePolicyId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe compliance policy associated with the compliance policy clause.This field is a relationship field.Relationship NameCompliancePolicyRelationship TypeMaster-detailRefers ToCompliancePolicy (the master object) |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe description of the compliance policy clause. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the compliance policy clause. |
| ParentCompliancePlcyClId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe parent compliance policy clause associated with the compliance policy clause.This field is a relationship field.Relationship NameParentCompliancePlcyClRefers ToCompliancePolicyClause |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CompliancePolicyClauseChangeEvent](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[CompliancePolicyClauseFeed](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[CompliancePolicyClauseHistory](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- CompliancePolicyClauseChangeEvent (atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_change_event.htm)
- CompliancePolicyClauseFeed (atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm)
- CompliancePolicyClauseHistory (atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

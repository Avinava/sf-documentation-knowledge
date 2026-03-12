---
title: "DocumentDecisionRequirement"
domain: omnistudio
topic: documentdecisionrequirement
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:53.885Z
estimatedTokens: 882
keywords: [DocumentDecisionRequirement, Represents, decision, criteria, used, determine, applicable, documents., API, version, 59.0, later., Supported, Calls, Fields, Associated, Objects]
---

# DocumentDecisionRequirement

> Represents the decision criteria that will be used to determine applicable
         documents. This object is available in API version 59.0 and later.

# DocumentDecisionRequirement

Represents the decision criteria that will be used to determine applicable documents. This object is available in API version 59.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Context | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe context that's used to determine the applicable documents to be uploaded. |
| DocumentReferenceObjectId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe document category or the document type related to the document decision.This field is a polymorphic relationship field.Relationship NameDocumentReferenceObjectRelationship TypeLookupRefers ToDocumentCategory, DocumentType |
| HelpText | TypestringPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe help information to show to memebers when uploading the document. |
| IsUploadRequired | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether a document upload for a document category is required (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who created the relationship record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[DocumentDecisionRequirementChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.252.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_change_event.htm)

Change events are available for the object.

[DocumentDecisionRequirementFeed](https://developer.salesforce.com/docs/atlas.en-us.252.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[DocumentDecisionRequirementHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm "HTML (New Window)")

History is available for tracked fields of the object.

[DocumentDecisionRequirementOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_ownersharingrule.htm "HTML (New Window)")

Sharing rules are available for the object.

[DocumentDecisionRequirementShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm "HTML (New Window)")

Sharing is available for the object.

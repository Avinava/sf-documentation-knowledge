---
title: "ContractDocVerContentDoc"
domain: clm-developer-guide
topic: contractdocvercontentdoc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:22.674Z
estimatedTokens: 1026
keywords: [ContractDocVerContentDoc, Associates, contract, document, version, content, API, 56.0, later, Calls, Associated, Objects]
---

# ContractDocVerContentDoc

> Associates a contract document version with a content document. This object is
      available in API version 56.0 and later.

# ContractDocVerContentDoc

Associates a contract document version with a content document. This object is available in API version 56.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ContentDocumentId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionID of the content document associated with the contract document version content document.This is a relationship field.Relationship NameContentDocumentRelationship TypeLookupRefers ToContentDocument |
| ContentVersion | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIdentifies the content version. |
| ContractDocumentVersionId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the contract document version.This is a relationship field.Relationship NameContractDocumentVersionRelationship TypeLookupRefers ToContractDocumentVersion |
| DocumentSourceType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSource where the generated document originated.Possible values are:ContentExternalThe default value is 'Content'. |
| DocumentType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the document type of the contract.Possible values are:AttachedDocument—Attached DocumentComparisonDocument—Comparison DocumentContractDocument—Contract DocumentExternalReviewDocument—External Review DocumentSignedDocument—Signed Document |
| IsGeneratedDocCheckedIn | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the generated document is checked in.The default value is 'false'. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionLists the contract document name. |
| RelatedCntrDocVerContentDocId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the contract document version content document that links PDF and Word documents.This is a relationship field.Relationship NameRelatedCntrDocVerContentDocRelationship TypeLookupRefers ToContractDocVerContentDoc |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ContractDocVerContentDocChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_change_event.htm)

Change events are available for the object.

[ContractDocVerContentDocFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[ContractDocVerContentDocHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[ContractDocVerContentDocOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_ownersharingrule.htm)

Sharing rules are available for the object.

[ContractDocVerContentDocShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm)

Sharing is available for the object.

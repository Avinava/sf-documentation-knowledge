---
title: "ContractExtractionResult"
domain: clm-developer-guide
topic: contractextractionresult
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:22.695Z
estimatedTokens: 1089
keywords: [ContractExtractionResult, contract-specific, data, extracted, Contracts, uploaded, PDF, that's, ready, review, account, owner, start, date, contract]
---

# ContractExtractionResult

> Represents contract-specific data extracted by the Contracts AI from an
         uploaded PDF that's ready for review. For example, account name, owner, start date,
         contract name, contract record type, contract term, and clauses. Before contract record
         creation, users can access, review, and modify the temporarily stored information.
      This object is available in API version 60.0 and later.

# ContractExtractionResult

Represents contract-specific data extracted by the Contracts AI from an uploaded PDF that's ready for review. For example, account name, owner, start date, contract name, contract record type, contract term, and clauses. Before contract record creation, users can access, review, and modify the temporarily stored information. This object is available in API version 60.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ContentDocumentId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe content document associated with the contract.This field is a relationship field.Relationship NameContentDocumentRefers ToContentDocument |
| ExtractedClauseContent | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe clauses that are reviewed during the extraction review process. |
| ExtractedClauseContentDocId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe document containing clauses that exceeds 131K characters and are reviewed during the extraction review process.This field is a relationship field.Relationship NameExtractedClauseContentDocRefers ToContentDocument |
| ExtractedClauseCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of clauses extracted during the extraction review process. |
| ExtractedContractDetails | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe contract fields that are extracted and reviewed during the extraction review process. |
| ExtractedContractFieldCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of contract fields extracted during the extraction review process. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the contract extraction review. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the user that owns this record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the contract extraction review status.Possible values are:ExtractionFailed—Extraction FailedExtractionInProgress—Extraction In ProgressReviewCompleted—Review CompletedReviewInProgress—Review In ProgressReviewNotStarted—Review Not Started |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ContractExtractionResultChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_change_event.htm)

Change events are available for the object.

[ContractExtractionResultFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[ContractExtractionResultHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[ContractExtractionResultOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_ownersharingrule.htm)

Sharing rules are available for the object.

[ContractExtractionResultShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm)

Sharing is available for the object.

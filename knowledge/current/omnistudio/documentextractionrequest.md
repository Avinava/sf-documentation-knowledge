---
title: "DocumentExtractionRequest"
domain: omnistudio
topic: documentextractionrequest
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:53.893Z
estimatedTokens: 832
keywords: [DocumentExtractionRequest, Represents, request, extract, documents., API, version, 65.0, later., Supported, Calls, Fields, Associated, Objects]
---

# DocumentExtractionRequest

> Represents a request to extract documents. This object is available in
      API version 65.0 and later.

# DocumentExtractionRequest

Represents a request to extract documents. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ContentDocumentId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionID of the document.This field is a relationship field.Relationship NameContentDocumentRefers ToContentDocument |
| ExtractedClauseCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of clauses extracted during the extraction review process. |
| ExtractionReferenceId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the extraction reference associated with the record.This field is a polymorphic relationship field.Relationship NameExtractionReferenceRefers ToAINaturalLangProcessRslt |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this document. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the document. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner of this document.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| ServiceType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the category for the type of service being provided.Possible values are:OpenAIComplianceClauseExtraction |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the document clause extraction review status.Possible values are:ExtractionFailed—Extraction FailedExtractionInProgress—Extraction In ProgressReviewCompleted—Review CompletedReviewExpired—Review ExpiredReviewInProgress—Review In ProgressReviewNotStarted—Review Not Started |
| StatusReason | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe reason for the record's current status. |
| UsageType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the usage type of the document extraction request.Possible values are:ComplianceClauseExtraction—Compliance Clause ExtractionCompliancePolicyClauseExtraction—Compliance Policy Clause ExtractionRegulationClauseExtraction—Regulation Clause Extraction |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[DocumentExtractionRequestShare](atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- DocumentExtractionRequestShare (atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm)

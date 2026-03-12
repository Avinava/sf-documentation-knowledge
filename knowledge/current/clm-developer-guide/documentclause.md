---
title: "DocumentClause"
domain: clm-developer-guide
topic: documentclause
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:22.747Z
estimatedTokens: 1167
keywords: [DocumentClause, clause, associated, multiple, documents, Calls, Special, Access, Rules, Objects]
---

# DocumentClause

> Represents a clause that can be associated with multiple documents.

# DocumentClause

Represents a clause that can be associated with multiple documents.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

DocumentClause is available for users with the ClauseManagement user permission set licenses. Salesforce Org must have a ClauseManagement platform license to access this object.

## Fields

| Field | Details |
| --- | --- |
| Content | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionRepresents the HTML content of the document clause. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionRepresents the summary of the document clause. |
| DocumentClauseSetId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRepresents the ID of Document Clause Group associated with Document Clause.This field is a relationship field.Relationship NameDocumentClauseSetRelationship TypeLookupRefers ToDocumentClauseSet |
| Format | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the format for the clause such as Rich Text.Possible values are:Non_Formatted—Non FormattedRich_Text—Rich TextThe default value is Non_Formatted. |
| IsAlternateClause | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the Document Clause is main or alternate.The default value is false. |
| Language | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the language of the document clause.Possible values are:da—Danishde—Germanen_US—Englishes—Spanishes_MX—Spanish (Mexico)fi—Finnishfr—Frenchit—Italianja—Japaneseko—Koreannl_NL—Dutchno—Norwegianpt_BR—Portuguese (Brazil)ru—Russiansv—Swedishth—Thaizh_CN—Chinese (Simplified)zh_TW—Chinese (Traditional) |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionSpecifies the name of the document template clause. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the user that owns this record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the status of the clause such as Draft, Active, Archived.Possible values are:AI_Drafted—This value is available in API version 60.0 and later.ActiveArchivedDraftIn_ApprovalReview_RequestedThe default value is Draft. |
| Version | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe version number of the document clause. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[DocumentClauseChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_change_event.htm)

Change events are available for the object.

[DocumentClauseFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[DocumentClauseHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[DocumentClauseOwnerSharingRule](https://https://developer.salesforce.com/docs/atlas.en-us.industries_reference.meta/industries_reference/sforce_api_associated_objects_ownersharingrule.htm/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_ownersharingrule.htm)

Sharing rules are available for the object.

[DocumentClauseShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm)

Sharing is available for the object.

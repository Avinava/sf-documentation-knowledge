---
title: "DocumentAuthoredContent"
domain: clm-developer-guide
topic: documentauthoredcontent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:22.737Z
estimatedTokens: 1365
keywords: [DocumentAuthoredContent, metadata, content, boundary, document, template, contract, store, marked, clauses, sections, Salesforce, authored, API, version]
---

# DocumentAuthoredContent

> Represents the metadata of the content within the content boundary of a
         document such as a template or contract document. You can store metadata details of the
         marked clauses and sections in Salesforce with the document authored content.  This
      object is available in API version 58.0 and later.

# DocumentAuthoredContent

Represents the metadata of the content within the content boundary of a document such as a template or contract document. You can store metadata details of the marked clauses and sections in Salesforce with the document authored content. This object is available in API version 58.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

DocumentAuthoredContent is available if your org has the DocGen platform license and related addon and user licenses.

## Fields

| Field | Details |
| --- | --- |
| Checksum | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of bits for the document authored content. Use the checksum to detect content changes. |
| Content | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe text marked as a document authored content, such as clause content, or section content. |
| ContentGenerationSource | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe source of content creation.Possible values are:GenAIDrafted—Gen AI DraftedGenAIExtracted—Gen AI ExtractedMarkedContent—Marked ContentStandardContent—Standard Content |
| ContentType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe document authored content type associated with the Reference Object. For example, Document Clause, Document Section.Possible values are:DocumentAuthoredClause—Document Authored ClauseDocumentAuthoredSection—Document Authored SectionStandardDocumentClause—Standard Document Clause |
| DocAuthoredContentIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique reference ID (128-bit text string) that's created at the document level and used to identify the document authored content. |
| IsLibraryAdditionRequested | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies if the promotion request is raised for the Document Authored ContentThe default value is false. |
| IsReviewed | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies if the Document Authored Content is reviewedThe default value is false. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe name of the document authored content. |
| ParentContentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of parent content associated with the document authored content. For example, the ID of the section that contains clauses.This field is a relationship field.Relationship NameParentContentRelationship TypeLookupRefers ToDocumentAuthoredContent |
| ReferenceObjectId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe object associated with the document authored content.This field is a polymorphic relationship field.Relationship NameReferenceObjectRelationship TypeLookupRefers ToContractDocumentVersion, DocumentTemplate |
| ReferenceObjectRecordType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe record type of the Reference Object. For example Contract Document Version, Document Template.Possible values are:ContractDocumentVersion—Contract Document VersionDocumentTemplate—Document Template |
| StandardContentObjectId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the standard Salesforce content associated with the document authored content.This field is a relationship field.Relationship NameStandardContentObjectRelationship TypeLookupRefers ToDocumentClause |
| StandardContentObjectType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the standard Salesforce content associated with the document authored content, such as Document Clause.Possible values are:DocumentClause—Document Clause |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[DocumentAuthoredContentChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_change_event.htm)

Change events are available for the object.

[DocumentAuthoredContentFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[DocumentAuthoredContentHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[DocumentAuthoredContentOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_ownersharingrule.htm)

Sharing rules are available for the object.

[DocumentAuthoredContentShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm)

Sharing is available for the object.

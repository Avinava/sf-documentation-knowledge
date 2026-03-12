---
title: "GeneratedDocumentSection"
domain: clm-developer-guide
topic: generateddocumentsection
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:22.859Z
estimatedTokens: 843
keywords: [GeneratedDocumentSection, generated, document, API, version, 60.0, later, Calls, Special, Access, Rules]
---

# GeneratedDocumentSection

> Represents a section of a generated document.  This object is available
      in API version 60.0 and later.

# GeneratedDocumentSection

Represents a section of a generated document. This object is available in API version 60.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

## Fields

| Field | Details |
| --- | --- |
| DisplayHeaderFontStyle | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionDefault font style of a section header in the generated web document. |
| DocumentTemplateClauseId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the document template clause association with the section.This field is a relationship field.Relationship NameDocumentTemplateClauseRefers ToDocumentClause |
| DocumentTemplateSectionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the associated document template section.This field is a relationship field.Relationship NameDocumentTemplateSectionRefers ToDocumentTemplateSection |
| GeneratedDocumentId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the generated document associated with the section.This field is a relationship field.Relationship NameGeneratedDocumentRelationship TypeMaster-detailRefers ToGeneratedDocument (the master object) |
| IsBeginSplitSection | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the section must be split in the generated web document.The default value is false. |
| IsEndSplitSection | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the section split must end in the generated web document.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the section in the generated web document. |
| SectionContent | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe section content that's stored as HTML. |
| SectionOrder | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe order of the section in the section’s hierarchy. |
| SectionTypeSignatureContent | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe tokens used for integration with eSignature applications. |
| SplitSectionSequenceNumber | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe sequence of the section that's split in the generated web document. |
| TemplateSectionContent | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe content of the section in the original format. |
| TokenList | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe list of tokens used to define a section condition in the generated web document. |
| XmlContent | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe content of the section in the generated web document in the XML format. |

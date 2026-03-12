---
title: "DocumentTemplateSection"
domain: clm-developer-guide
topic: documenttemplatesection
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:22.829Z
estimatedTokens: 1616
keywords: [DocumentTemplateSection, document, template, clause, image, context, embedded, API, version, 52.0, later, Calls, Special, Access, Rules]
---

# DocumentTemplateSection

> Represents a section in a document template. A document template section can
         be a clause, image, context, embedded template, or signature. This object is available
      in API version 52.0 and later.

# DocumentTemplateSection

Represents a section in a document template. A document template section can be a clause, image, context, embedded template, or signature. This object is available in API version 52.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

DocumentTemplateSection is available if your org has the DocGen platform license and related addon and user licenses.

## Fields

| Field | Details |
| --- | --- |
| AccessType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe type of access for the section in a generated document.Possible values are:EditableReadOnly—Read OnlyThe default value is Editable. |
| DisplayConditionExpression | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe condition that controls the display of a section in the document template. |
| DocumentTemplateClauseId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the document template clause association with the section.This field is a relationship field.Relationship NameDocumentTemplateClauseRelationship TypeLookupRefers ToDocumentClause |
| DocumentTemplateId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the document template associated with the section.This field is a relationship field.Relationship NameDocumentTemplateRelationship TypeLookupRefers ToDocumentTemplate |
| EmbeddedDocumentTemplateId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the embedded document template associated with the section.This field is a relationship field.Relationship NameEmbeddedDocumentTemplateRelationship TypeLookupRefers ToDocumentTemplate |
| EmbeddedKey | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescription |
| HasSectionNumberReset | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the section number must be reset in the generated web document.The default value is false. |
| IsBatchable | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the section must be generated using a batch job.The default value is false. |
| IsDisplayOnNewPage | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates if the section must be displayed on a new page in the generated web document.The default value is false. |
| IsNewLineAfterSectionEnabled | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether a line should get added after the section in a generated web document.The default value is false. |
| IsSectionNumberDisplayEnabled | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the section number must be displayed on the generated web document.The default value is false. |
| IsTableHeaderRepeatable | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the table header must be displayed on every page in the generated web document.The default value is false. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the section in a document template. |
| ReferenceClassName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the custom class associated with the section. |
| SectionContent | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe content of the section in either HTML or JSON format. |
| SectionSequenceNumber | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe sequence of the section in the generated web document. |
| SectionType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe type of section in a document template.Possible values are:ClauseContextCustomEmbeddedTemplate—Embedded TemplateImageItemRepeatingContent—Repeating ContentSignature |
| SectionTypeItemFontStyle | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe field to select font style for the display of item section type in the generated web document. |
| SectionTypeItemFontValue | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe value of the font style selected for the display of the item section type in the generated web document. |
| SectionTypeSignatureContent | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe tokens used for integration with eSignature applications. |
| ShouldDisplayHeaderContentInline | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the section content must be displayed inline with the section header in the generated web document.The default value is false. |
| ShouldDisplayHeaderName | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the section name must be displayed in the generated web document.The default value is false. |
| ShouldGenerateEmbeddedKey | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the embedded key should be generated in the generated web document.The default value is false. |
| TokenList | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe list of tokens used in a section of the generated web document. |
| TotalSectionConditionCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of display conditions for the section in a document template.This field is a calculated field. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

DocumentTemplateSectionChangeEvent

Change events are available for the object.

DocumentTemplateSectionFeed

Feed tracking is available for the object.

DocumentTemplateSectionHistory

History is available for tracked fields of the object.

DocumentTemplateSectionOwnerSharingRule

Sharing rules are available for the object.

DocumentTemplateSectionShare

Sharing is available for the object.

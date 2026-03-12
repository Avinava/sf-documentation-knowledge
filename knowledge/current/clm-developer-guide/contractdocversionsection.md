---
title: "ContractDocVersionSection"
domain: clm-developer-guide
topic: contractdocversionsection
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:22.686Z
estimatedTokens: 1206
keywords: [ContractDocVersionSection, Tracks, contract, document, sections, lifecycle, stages, API, version, 56.0, later, Calls, Associated, Objects]
---

# ContractDocVersionSection

> Tracks contract document sections through contract lifecycle stages. This object is
      available in API version 56.0 and later.

# ContractDocVersionSection

Tracks contract document sections through contract lifecycle stages. This object is available in API version 56.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ContractDocumentVersionId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionContract Document Version to which this section belongs.This is a relationship field.Relationship NameContractDocumentVersionRelationship TypeLookupRefers ToContractDocumentVersion |
| CreationProcessType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIndicates how this section was created.Possible values are:BatchModeCustomizeGenerateImportReconcileWordUpdateContractThe default value is 'Generate'. |
| DisplayHeaderFontStyle | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe default font style of a section header in the generated web document. |
| DocumentTemplateClauseId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionClause from which this contract section is created.This is a relationship field.Relationship NameDocumentTemplateClauseRelationship TypeLookupRefers ToDocumentTemplateClause |
| DocumentTemplateSectionId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe template section from which this contract section is created.This is a relationship field.Relationship NameDocumentTemplateSectionRelationship TypeLookupRefers ToDocumentTemplateSection |
| HasReconciledRedlines | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the contract section contains reconciled red lines.The default value is 'false'. |
| IsBeginSplitSection | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates that a section split in the generated web document begins here.The default value is 'false'. |
| IsEndSplitSection | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates that a section split in the generated web document ends here.The default value is 'false'. |
| IsRedlinedSection | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the contract section contains red lines.The default value is 'false'. |
| IsSectionStandard | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether a section conforms to its template.The default value is 'false'. |
| Level | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLevel of this section in the section hierarchy. |
| ReconciledSectionContent | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionSection content resulting from reconciliation in the Word document. |
| SectionContent | TypetextareaPropertiesCreate, UpdateDescriptionSection content in HTML format. |
| Sequence | TypeintPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionSection's sequence number in the contract document. |
| SignatureContent | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionDocuSign signature tokens. |
| SubSequence | TypeintPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe sub sequence of the section in the generated web document. |
| TemplateSectionContent | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionOriginal section content from the corresponding template section. |
| TokenList | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionTokens in the section that map to Salesforce object fields. |
| Type | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIndicates section type.Possible values are:ClauseContextCustomEmbeddedTemplateImageItemRepeatingContentSignatureThe default value is 'Context'. |
| XmlContent | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionSection content in XML format. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

ContractDocVersionSectionChangeEvent

Change events are available for the object.

ContractDocVersionSectionFeed

Feed tracking is available for the object.

ContractDocVersionSectionHistory

History is available for tracked fields of the object.

ContractDocVersionSectionOwnerSharingRule

Sharing rules are available for the object.

ContractDocVersionSectionShare

Sharing is available for the object.

---
title: "DocumentTemplate"
domain: clm-developer-guide
topic: documenttemplate
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:22.605Z
estimatedTokens: 1812
namespace: Type
keywords: [DocumentTemplate, document, template, definitions, enable, dynamic, generation, templates, Salesforce, organizations, Parent, File, Suffix, Directory, Location, API, version, 56.0, later, Calls]
---

# DocumentTemplate

> Represents information about dynamic document generation. This
      object is available in API version 56.0 and later.

**Namespace:** `Type`

# DocumentTemplate

Represents information about dynamic document generation. This object is available in API version 56.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ContextDefinitionName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the context definition that contains the mapping details used for extraction in the Context Service token mapping type. |
| ContextMappingName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the context mapping used for extraction in the Context Service token mapping type. |
| CustomClassName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the custom class that provides token values required by the template for document generation. |
| DefaultFontStyle | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe default font style for a web document template. |
| DocumentConversionResourceName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the resource containing the Microsoft Word document file used to generate the output web document. |
| DocumentGenerationMechanism | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the method for generating the document.Possible values are:ClientSideServerSideThe default value is ClientSide. |
| ExtractOmniDataTransformName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the OmniDataTransform bundle of the extract type. |
| GlobalKey | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe unique ID used when migrating the document template between Salesforce orgs. This field is specifically used for import and export operations in managed packages. |
| HasBatchableSection | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the template has one or more batchable sections.The default value is false. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the document template is active.The default value is false. |
| IsSectionProcessed | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the contract boundary sections of the document template are processed.The default value is false. |
| LastEmbeddedTmplSectionKey | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe last auto generated key of the embedded template section. |
| MapperOmniDataTransformName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the OmniDataTransform bundle of the mapper type. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the document template. |
| Namespace | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIndicates whether the document template was exported using the industry-specific templates datapack (namespace prefix), or a user manually created or cloned an exported document template (blank). The namespace prefix is associated with the industry license. For example, insurance_fsc_ise. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the document template.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| RecordTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the record type associated with this object.This field is a relationship field.Relationship NameRecordTypeRelationship TypeLookupRefers ToRecordType |
| SectionHeaderFontStyle | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe field to select font style for the section header of the web document template. |
| SectionHeaderFontStyleValue | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe value of the font style selected for the section header of the web document template. |
| ShouldDisplayUnmappedToken | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the tokens without runtime values must be displayed.The default value is false. |
| ShouldExtractEmbeddedTmplToken | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether tokens from all the templates embedded within the document template must be extracted. If this field’s value is yes, the embedded template tokens are extracted into the mapping omnidatatransform associated with the template.The default value is false. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the status of the document template.Possible values are:ActiveArchivedDraft |
| TargetTokenItemObject | TypemultipicklistPropertiesCreate, Filter, Nillable, UpdateDescriptionThe line item object of the target token object associated with the document template, that's used for mapping tokens.Possible values are:OpportunityLineItemOrderLineItemQuoteLineItem |
| TargetTokenObject | TypemultipicklistPropertiesCreate, Filter, Nillable, UpdateDescriptionThe object associated with the document template that's used for mapping tokens.Possible values are:ContractOpportunityOrderQuote |
| TokenList | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe list of tokens used to define a section condition. |
| TokenMappingMethodType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the processing method for the data which can come from same source object.Possible values are:CustomClassOmniDataTransform |
| TokenMappingType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the mapping type for tokens of the document template.Possible values are:JSONSalesforceObject |
| Type | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of document template.Possible values are:WebMicrosoftWordMicrosoft365WordMicrosoftPowerpoint |
| UniqueName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique name for the document template. |
| UsageType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the document template usage. For example, the Contract Lifecycle Management option allows you to use the document template only for contract document generation.The default value is Contract_Lifecycle_Management. |
| VersionNumber | TypeintPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe version number of the document template. |
| XmlRelationshipMetadata | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe WML relationship metadata used to process Microsoft Word documents. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

DocumentTemplateChangeEvent

Change events are available for the object.

DocumentTemplateFeed

Feed tracking is available for the object.

DocumentTemplateHistory

History is available for tracked fields of the object.

DocumentTemplateOwnerSharingRule

Sharing rules are available for the object.

DocumentTemplateShare

Sharing is available for the object.

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<DocumentTemplate xmlns="http://soap.sforce.com/2006/04/metadata">
    <customClassName></customClassName>
    <defaultFontStyle>'Times New Roman', times, serif</defaultFontStyle>
    <documentConversionResourceName></documentConversionResourceName>
    <documentGenerationMechanism>ClientSide</documentGenerationMechanism>
    <type>MicrosoftWord</type>
    <usageType>Contract_Lifecycle_Management</usageType>
    <extractOmniDataTransformName>extractorv1</extractOmniDataTransformName>
    <mapperOmniDataTransformName>mapperv1</mapperOmniDataTransformName>
    <fileExtension>docx</fileExtension>
    <hasBatchableSection>false</hasBatchableSection>
    <isActive>false</isActive>
    <isSectionProcessed>false</isSectionProcessed>
    <lastEmbeddedTmplSectionKey></lastEmbeddedTmplSectionKey>
    <name>Sample</name>
    <namespace></namespace>
    <sectionHeaderFontStyle></sectionHeaderFontStyle>
    <sectionHeaderFontStyleValue></sectionHeaderFontStyleValue>
    <shouldDisplayUnmappedToken>false</shouldDisplayUnmappedToken>
    <shouldExtractEmbeddedTmplToken>false</shouldExtractEmbeddedTmplToken>
    <status>Draft</status>
    <tokenList></tokenList>
    <tokenMappingMethodType>OmniDataTransform</tokenMappingMethodType>
    <tokenMappingType>JSON</tokenMappingType>
    <targetTokenItemObject>OPPORTUNITY_LINE_ITEM</targetTokenItemObject>
    <targetTokenObject>CONTRACT</targetTokenObject>
    <uniqueName>Sample_1</uniqueName>
    <versionNumber>1</versionNumber>
    <xmlRelationshipMetadata></xmlRelationshipMetadata>
    <masterLabel>Sample_1</masterLabel>
</DocumentTemplate>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>*</members>
        <name>DocumentTemplate</name>
    </types>
    <version>66.0</version>
</Package>
```

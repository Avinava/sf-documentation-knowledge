---
title: "AIScoringModelDefVersion"
domain: omnistudio
topic: aiscoringmodeldefversion
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:54.485Z
estimatedTokens: 1106
keywords: [AIScoringModelDefVersion, Represents, information, version, scoring, model, that’s, used, Scoring, Framework, Industries, Cloud, Einstein., API, 57.0, later., Important, Supported, SOAP, Calls]
---

# AIScoringModelDefVersion

> Represents information about a version of an AI scoring model that’s
         used by the Scoring Framework for Industries Cloud Einstein. This object is available
      in API version 57.0 and later.

# AIScoringModelDefVersion

Represents information about a version of an AI scoring model that’s used by the Scoring Framework for Industries Cloud Einstein. This object is available in API version 57.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=industries_reference)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Special Access Rules

To access this object, you must have the AI Accelerator User permission set with Scoring Framework enabled for Industries Cloud Einstein from Salesforce Setup. The Salesforce org must have the CRM Plus license and the product’s CRM license.

## Fields

| Field | Details |
| --- | --- |
| AIScoringModelDefinitionId | TypereferencePropertiesFilter, Group, SortDescriptionID of the parent AIScoringModelDefinition record that’s related to an AIScoringModelDefVersion record.This field is a relationship field.Relationship NameAIScoringModelDefinitionRelationship TypeLookupRefers ToAIScoringModelDefinition |
| AdditionalInformation | TypetextareaPropertiesNillableDescriptionStores the metadata about a scoring model version. |
| AiUsecaseDefinitionId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the parent AIUsecaseDefinition record that’s related to an AIScoringModelDefVersion record.This field is a relationship field.Relationship NameAiUsecaseDefinitionRelationship TypeLookupRefers ToAIUsecaseDefinition |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization. Label is Record Type Name. |
| FullName | TypestringPropertiesCreate, Group, NillableDescriptionThe full name of the associated AIScoringModelDefVersion object in Metadata API. The full name can include a namespace prefix.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| Language | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe language of the AIScoringModelDefinition object.Valid values are:da—Danishde—Germanen_US—Englishes—Spanishes_MX—Spanish (Mexico)fi—Finnishfr—Frenchit—Italianja—Japaneseko—Koreannl_NL—Dutchno—Norwegianpt_BR—Portuguese (Brazil)ru—Russiansv—Swedishth—Thaizh_CN—Chinese (Simplified)zh_TW—Chinese (Traditional) |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionLabel for the AIScoringModelDefVersion object. In the UI, this field is AI scoring model definition version. |
| Metadata | TypeAIScoringModelDefinitionPropertiesCreate, Nillable, UpdateDescriptionThe AIScoringModelDefinition's metadata.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| ModelMode | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionMode of an AI scoring model.Valid values are:DEPLOYTRAINTRAIN_AND_DEPLOYThe default value is TRAIN_AND_DEPLOY. |
| Status | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionStatus of an AIScoringModelDefVersion record. Available in API version 58.0 and later.Valid values are:ACTIVATINGACTIVATIONFAILEDACTIVEDEACTIVATINGDEACTIVATIONFAILEDDRAFTFAILEDINACTIVE |
| Steps | TypecomplexvaluePropertiesNillable, UpdateDescriptionRepresents information about a step associated with an AI scoring model version. Available in API version 58.0 and later. |

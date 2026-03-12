---
title: "AIFeatureExtractor"
domain: omnistudio
topic: aifeatureextractor
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:51.831Z
estimatedTokens: 928
keywords: [AIFeatureExtractor, feature, extractor, that’s, extract, input, data, making, predictions.This, API, version, 55.0, later, Calls, Special, machine, learning, model, predictions]
---

# AIFeatureExtractor

> Represents information about the feature extractor that’s used to
         extract the input data required for making predictions.This object is available in API
      version 55.0 and later.

# AIFeatureExtractor

Represents information about the feature extractor that’s used to extract the input data required for making predictions.This object is available in API version 55.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

The AIFeatureExtractor object is available when the admin settings for AI Accelerator and for the product related to the use case are enabled. The Salesforce org must have the CRM Plus license and the product’s CRM license.

## Fields

| Field | Details |
| --- | --- |
| AiUsecaseModelId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe use case model that’s related to the feature extractor.This field is a relationship field.Relationship NameAiUsecaseModelRelationship TypeLookupRefers ToAIUsecaseModel |
| BatchInputSourceIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe identifier of the input source containing batch job-computed features that a model can use to generate predictions. Available in API version 57.0 and later. |
| BatchInputSourceInformation | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe information about the batch input source, including query parameters, objects, field mappings, and filter criteria. |
| BatchInputSourceType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe input source of the features computed in batch jobs.Possible values are:CRMAData CloudThe default value is CRMA. |
| ClassName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the Apex class created for the feature extractor. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe developer name of the feature extractor. |
| FeatureInputType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. The type of feature input that’s used in generating predictions. Available in API version 57.0 and later.Possible values are:Batch_And_Realtime_InputBatch_InputRealtime_InputSample_InputThe default value is Realtime_Input. |
| InputContext | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe features that serve as the context for the feature extractor in the JSON or CSV file. Available in API version 57.0 and later. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe languages that are supported by the feature extractor.Possible values are:da—Danishde—Germanen_US—Englishes—Spanishes_MX—Spanish (Mexico)fi—Finnishfr—Frenchit—Italianja—Japaneseko—Koreannl_NL—Dutchno—Norwegianpt_BR—Portuguese (Brazil)ru—Russiansv—Swedishth—Thaizh_CN—Chinese (Simplified)zh_TW—Chinese (Traditional) |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe label of the feature extractor. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionNamespace prefix associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. |
| Type | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionRequired. Specifies the type of the feature extractor.Possible values are:APEXHYBRIDJAVAThe default value is APEX. |

## Usage

Use this object to configure feature extractors for your use case model when it requires features that are calculated or aggregated on run-time. A use case model can have multiple feature extractors.

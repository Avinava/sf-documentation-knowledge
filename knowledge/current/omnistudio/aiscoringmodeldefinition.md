---
title: "AIScoringModelDefinition"
domain: omnistudio
topic: aiscoringmodeldefinition
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:50.542Z
estimatedTokens: 1026
keywords: [AIScoringModelDefinition, machine, learning, model, that’s, Scoring, Framework, Industries, Cloud, Einstein, including, configuration, Parent, File, Suffix, API, version, 57.0]
---

# AIScoringModelDefinition

> Represents information about a machine learning model that’s used by
         the Scoring Framework for Industries Cloud Einstein. The machine learning model is used for
         scoring, including its configuration. This object is available in API version 57.0 and
      later.

# AIScoringModelDefinition

Represents information about a machine learning model that’s used by the Scoring Framework for Industries Cloud Einstein. The machine learning model is used for scoring, including its configuration. This object is available in API version 57.0 and later.

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
| AiModelConfig | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionID of an AI model configuration related to the AI scoring model record.Valid values are:Prediction_Scores_for_Accounts— Get predictions based on your account data.Propensity_to_Purchase_Products—Get predictions about the customers’ likelihood of purchasing products.FSCAccountContactScore—Get predictions based on your account or contact data for Financial Services Cloud.FSCPropensity—Get predictions about the customers’ likelihood of purchasing products for Financial Services Cloud.Student_Prospect_Score—Get predictions about prospects that are likely to convert to students for Education Cloud.Opp_Scoring—Get predictions about opportunities that are likely to convert to accounts for Automotive Cloud.Lead_Scoring—Used to get predictions about leads that are likely to convert to opportunities or accounts for Automotive Cloud. |
| Description | TypestringPropertiesFilter, Group, Nillable, SortDescriptionDescription for an AIScoringModelDefinition record. |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization. Label is Record Type Name. |
| FullName | TypestringPropertiesCreate, Group, NillableDescriptionFull name of the associated AIScoringModelDefinition object in Metadata API. The full name can include a namespace prefix. Available in API version 58.0 and later.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| Language | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionLanguage of the AIScoringModelDefinition object.Valid values are:da—Danishde—Germanen_US—Englishes—Spanishes_MX—Spanish (Mexico)fi—Finnishfr—Frenchit—Italianja—Japaneseko—Koreannl_NL—Dutchno—Norwegianpt_BR—Portuguese (Brazil)ru—Russiansv—Swedishth—Thaizh_CN—Chinese (Simplified)zh_TW—Chinese (Traditional) |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionLabel for the AIScoringModelDefinition object. In the UI, this field is AI Scoring Model Definition. |
| Metadata | TypeAIScoringModelDefinitionPropertiesCreate, Nillable, UpdateDescriptionThe AIScoringModelDefinition's metadata.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| Versions | TypecomplexvaluePropertiesCreate, Nillable, UpdateDescriptionRepresents information of various versions of an AI scoring model. |

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<AIScoringModelDefinition xmlns="http://soap.sforce.com/2006/04/metadata">
    <aiModelConfig>Prediction_Scores_for_Accounts</aiModelConfig>
    <aiScoringModelDefVersions>
        <fullName>V1</fullName>
        <aiScoringModelDefinition>Test</aiScoringModelDefinition>
        <aiScoringSteps>
            <aiModelConfigStep>Prediction_Scores_for_Accounts.GrainSelector</aiModelConfigStep>
            <stepDetail>{label:Account,name:Account}</stepDetail>
        </aiScoringSteps>
        <aiScoringSteps>
            <aiModelConfigStep>Prediction_Scores_for_Accounts.AugmentedDataset</aiModelConfigStep>
        </aiScoringSteps>
        <aiScoringSteps>
            <aiModelConfigStep>Prediction_Scores_for_Accounts.TargetConditionBuilder</aiModelConfigStep>
            <stepDetail>{specificOutcomeDefined:Yes,label:Financial accounts are associated with an account,name:FA_Target}</stepDetail>
        </aiScoringSteps>
        <aiScoringSteps>
            <aiModelConfigStep>Prediction_Scores_for_Accounts.InputVariableSelector</aiModelConfigStep>
        </aiScoringSteps>
        <aiScoringSteps>
            <aiModelConfigStep>Prediction_Scores_for_Accounts.CustomFilter</aiModelConfigStep>
        </aiScoringSteps>
        <aiScoringSteps>
            <aiModelConfigStep>Prediction_Scores_for_Accounts.WriteBackConnector</aiModelConfigStep>
        </aiScoringSteps>
        <developerName>V1</developerName>
        <masterLabel>V1</masterLabel>
        <modelMode>TRAIN_AND_DEPLOY</modelMode>
    </aiScoringModelDefVersions>
    <description>Test for metadata</description>
    <masterLabel>Test</masterLabel>
</AIScoringModelDefinition>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>*</members>
        <name>AIScoringModelDefVersion</name>
    </types>
    <types>
        <members>*</members>
        <name>AIScoringModelDefinition</name>
    </types>
    <version>66.0</version>
</Package>
```

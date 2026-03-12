---
title: "AIUsecaseDefinition"
domain: omnistudio
topic: aiusecasedefinition
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:51.940Z
estimatedTokens: 2745
keywords: [AIUsecaseDefinition, Represents, collection, fields, Salesforce, org, used, define, machine, learning, case, get, real-time, predictions., Important, Parent, File, Suffix, Directory, Location]
---

# AIUsecaseDefinition

> Represents a collection of fields in your Salesforce org
			used to define a machine learning use case and get real-time
		predictions.

# AIUsecaseDefinition

Represents a collection of fields in your Salesforce org used to define a machine learning use case and get real-time predictions.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=industries_reference)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Parent Type

This type extends the Metadata metadata type and inherits its fullName field.

## File Suffix and Directory Location

AIUsecaseDefinition components have the suffix .aiUsecaseDefinitions and are stored in the aiUsecaseDefinitions folder.

## Version

AIUsecaseDefinition components are available in API version 56.0 and later.

## Special Access Rules

The AIUsecaseDefinition object is available when the admin settings for AI Accelerator and for the product related to the use case are enabled. The Salesforce org must have the CRM Plus license and the product’s CRM license.

## Fields

| Field Name | Description |
| --- | --- |
| aiUsecaseFieldMappings | Field TypeAIUsecaseFieldMapping[]DescriptionThe field mappings for the use case definition. Each use case definition can have multiple field mappings. |
| aiUsecaseModels | Field TypeAIUsecaseModel[]DescriptionThe models for the use case definition. Each use case definition can have multiple use case models. |
| creatorType | Field TypeCreatorType (enumeration of type string)DescriptionRequired.The type of user who created the use case definition that's used by AI Accelerator. Valid values are:INTERNAL_USERSALESFORCE_ADMINAvailable in API version 57.0 and later. |
| masterLabel | Field TypestringDescriptionRequired.A user-friendly name for the use case definition, which is defined when the use case definition is created. |
| maximumInsightCount | Field TypeintDescriptionThe maximum number of insights returned by the scoring response. |
| maximumRecommendationCount | Field TypeintDescriptionThe maximum number of recommendations returned by the Next Best Action Strategy. |
| maximumSuggestionCount | Field TypeintDescriptionThe maximum number of suggestions returned by the scoring response. |
| primaryResponseObject | Field TypestringDescriptionThe primary object in which the scoring response is stored based on the specified field mapping. |
| recommendationResponseObject | Field TypestringDescriptionThe recommendation response object associated with the use case definition. |
| recommendationSource | Field TypeRcmdSourceType (enumeration of type string)DescriptionThe tool or platform that generates recommendations. Valid values are:Next_Best_Action_FlowNoneAvailable in API version 57.0 and later. |
| secondaryResponseObject | Field TypestringDescriptionThe object in which the scoring response is stored based on the specified field mapping. |
| shouldSaveFeatures | Field TypebooleanDescriptionIndicates whether to save the features extracted for the scoring request (true) or not (false).The default value is false. |
| shouldSaveInsights | Field TypebooleanDescriptionIndicates whether to save the prediction insights that are used to generate the score (true) or not (false).The default value is false. |
| shouldSaveRecommendation | Field TypebooleanDescriptionIndicates whether to save the recommendation (true) or not (false).The default value is false. |
| shouldSaveRequestResponse | Field TypebooleanDescriptionIndicates whether to save the request response (true) or not (false).The default value is false. |
| shouldSaveScore | Field TypebooleanDescriptionIndicates whether to save the prediction score (true) or not (false).The default value is false. |
| shouldSaveSuggestions | Field TypebooleanDescriptionIndicates whether to save the suggestions for improving the prediction score (true) or not (false).The default value is false. |
| suggestionImpactMinimumPct | Field TypeintDescriptionThe minimum eligible percentage for improving the existing prediction score based on the suggestions. Suggestions with an impact greater than the specified percentage on the score are displayed on the prediction scorecard. |
| usecaseName | Field TypestringDescriptionRequired.The name of the use case definition. |

## AIUsecaseFieldMapping

Represents information about the field mapping to store extracted features, prediction scores, prediction insights, and use case suggestions in the response object.

| Field Name | Description |
| --- | --- |
| developerName | Field TypestringDescriptionThe unique name for the field mapping in the use case definition.Required. The unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization. Label is Record Type Name. |
| mappedFieldName | Field TypestringDescriptionRequired.The name of the field where the scoring response is stored. |
| mappedFieldType | Field TypeMappedFieldType (enumeration of type string)DescriptionRequired.The type of the mapped field.Valid values are:FEATUREPREDICTION_SCOREINSIGHTSUGGESTIONSECONDARY_RESPONSE_RECORD_IDRECOMMENDATION_RESPONSE_RECORD_IDRECOMMENDATIONThe default value is FEATURE. |
| masterLabel | Field TypestringDescriptionRequired.A user-friendly name for the use case field mapping, which is defined when the field mapping is created. |
| responseFieldName | Field TypestringDescriptionRequired.The name of the response object’s field that’s mapped to the field storing the score. |
| responseObject | Field TypestringDescriptionRequired.The object whose field is mapped to the field storing the score. It’s either the PrimaryResponseObject or the SecondaryResponseObject specified in the AIUsecaseDefinition object. |
| sequenceNumber | Field TypeintDescriptionThe sequence number for the information stored in the field mapping. |

## AIUsecaseModel

Represents information about the machine learning models that generate predictions for your use case.

| Field Name | Description |
| --- | --- |
| aiFeatureExtractors | Field TypeAIFeatureExtractor[]DescriptionThe AI feature extractors to retrieve the input data. |
| defaultFeatureExtractor | Field TypeAIFeatureExtractorDescriptionThe default AI feature extractor to retrieve the input data. |
| developerName | Field TypestringDescriptionThe unique name for the use case model.Required. The unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization. Label is Record Type Name. |
| masterLabel | Field TypestringDescriptionRequired.A user-friendly name for the use case model, which is defined when the use case model is created. |
| predictionDefinition | Field TypestringDescriptionRequired.The unique identifier of the prediction definition that’s related to the use case model. This identifier can be an external ID. If you use Einstein Discovery to create models, the predictionDefinition field stores the developer name of the record. |
| predictionPlatform | Field TypePredictionPlatform (enumeration of type string)DescriptionRequired.The platform on which the machine learning model is created and deployed. Valid values are:Data_CloudDefault—For internal use only.Einstein_DiscoveryEinstein_on_Data_Cloud—Available in API version 63.0 and later.The default value is Einstein_Discovery. Available in API version 57.0 and later. |

## AIFeatureExtractor

Represents information about the feature extractor that’s used to retrieve the input data for the use case model that’s used to generate predictions.

| Field Name | Description |
| --- | --- |
| batchInputSourceIdentifier | Field TypestringDescriptionThe identifier of the input source of the features computed by batch jobs, which can be used by a model for generating predictions. Available in API version 57.0 and later. |
| batchInputSourceInformation | Field TypestringDescriptionThe information about the batch input source, including query parameters, objects, field mappings, and filter criteria. Available in API version 63.0 and later. |
| batchInputSourceType | Field TypeBatchInputSourceType (enumeration of type string)DescriptionThe input source of the features computed in batch jobs.Possible values are:CRMAData CloudThe default value is CRMA. |
| className | Field TypestringDescriptionRequired.The ID of the Apex class created for the feature extractor. |
| developerName | Field TypestringDescriptionThe unique name for the feature extractor.Required. The unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization. Label is Record Type Name. |
| extractorType | Field TypeExtractorType (enumeration of type string)DescriptionRequired.The type of the feature extractor.Valid values are:APEXJAVAHYBRIDThe default value is APEX. |
| featureInputType | Field TypestringDescriptionRequired.The type of feature input that’s used in generating predictions. Valid values are:Realtime_InputSample_InputBatch_InputBatch_And_Realtime_InputAvailable in API version 57.0 and later. |
| inputContext | Field TypestringDescriptionThe JSON file with features that act as context for the feature extractor. This data can also include the data in the uploaded CSV file. Available in API version 57.0 and later. |
| masterLabel | Field TypestringDescriptionRequired.A user-friendly name for the feature extractor, which is defined when the feature extractor is created. |

## Declarative Metadata Sample Definition

The following is an example of an AIUsecaseDefinition component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see Deploying and Retrieving Metadata with the Zip File.

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<AIUsecaseDefinition xmlns="http://soap.sforce.com/2006/04/metadata">
    <aiUsecaseFieldMappings>
        <developerName>DevNamee1</developerName>
        <mappedFieldName>Name</mappedFieldName>
        <mappedFieldType>INSIGHT</mappedFieldType>
        <masterLabel>DevName</masterLabel>
        <responseFieldName>AnnualRevenue</responseFieldName>
        <responseObject>Lead</responseObject>
        <sequenceNumber>2</sequenceNumber>
    </aiUsecaseFieldMappings>
    <aiUsecaseFieldMappings>
        <developerName>DevNamee2</developerName>
        <mappedFieldName>Value</mappedFieldName>
        <mappedFieldType>INSIGHT</mappedFieldType>
        <masterLabel>DevName</masterLabel>
        <responseFieldName>Id</responseFieldName>
        <responseObject>Account</responseObject>
        <sequenceNumber>2</sequenceNumber>
    </aiUsecaseFieldMappings>
    <aiUsecaseFieldMappings>
        <developerName>DevNamee3</developerName>
        <mappedFieldName>Score</mappedFieldName>
        <mappedFieldType>PREDICTION_SCORE</mappedFieldType>
        <masterLabel>DevName</masterLabel>
        <responseFieldName>Company</responseFieldName>
        <responseObject>Lead</responseObject>
    </aiUsecaseFieldMappings>
    <aiUsecaseFieldMappings>
        <developerName>DevNamee4</developerName>
        <mappedFieldName>RecordId</mappedFieldName>
        <mappedFieldType>SECONDARY_RESPONSE_RECORD_ID</mappedFieldType>
        <masterLabel>DevName</masterLabel>
        <responseFieldName>Address</responseFieldName>
        <responseObject>Lead</responseObject>
        <joinFieldInformation>joinFieldInformation</joinFieldInformation>
    </aiUsecaseFieldMappings>
    <aiUsecaseFieldMappings>
        <developerName>DevName5</developerName>
        <mappedFieldName>DevName4</mappedFieldName>
        <mappedFieldType>PREDICTION_SCORE_INPUT</mappedFieldType>
        <masterLabel>DevName</masterLabel>
        <responseFieldName>Address</responseFieldName>
        <responseObject>Lead_Dmo</responseObject>
        <joinFieldInformation>{"recordIdField":"Value2","recordIdObject":"Value1","recordJoinRelation":"Value3"}</joinFieldInformation>
    </aiUsecaseFieldMappings>
    <aiUsecaseFieldMappings>
        <developerName>DevName6</developerName>
        <mappedFieldName>DevName5</mappedFieldName>
        <mappedFieldType>PREDICTION_SCORE_INPUT</mappedFieldType>
        <masterLabel>DevName</masterLabel>
        <responseFieldName>Address</responseFieldName>
        <responseObject>Lead_Dmo</responseObject>
        <joinFieldInformation>{"recordIdField":"Value2","recordIdObject":"Value1","recordJoinRelation":"Value3"}</joinFieldInformation>
        <additionalFieldInformation>{"customPredictionAttributes":[{"id":1,"fieldLabel":"Label 1","sourceField":"Total_Spend_c__c"},{"id":2,"fieldLabel":"Label 2","sourceField":"Predicted_Churned2_recommendation_impact__c"}]}</additionalFieldInformation>
        <customPredictionLabel>%%SCORE%%</customPredictionLabel>
    </aiUsecaseFieldMappings>
    <aiUsecaseModels>
        <aiFeatureExtractors>
            <className>01pxx0000004X2CAAU</className>
            <extractorType>APEX</extractorType>
            <developerName>DevNamee2</developerName>
            <masterLabel>DevName</masterLabel>
            <featureInputType>Realtime_Input</featureInputType>
            <inputContext>"{columnNames=[column1, column2], rawData=[S, 315090]}"</inputContext>
            <batchInputSourceIdentifier>DatasetName</batchInputSourceIdentifier>
            <batchInputSourceType>CRMA</batchInputSourceType>
            <batchInputSourceInformation>{"streamingTransformName":"SDT_Name","recordIdField":"fieldname","featureFieldsMapping":{"feature1":"field1","feature2":"field2"},"streaminTransformLabel":"SDT_Label","batchInputSourceLabel":"DMO_Label"}</batchInputSourceInformation>
        </aiFeatureExtractors>
        <defaultFeatureExtractor>
            <className>01pxx0000004X0aAAE</className>
            <extractorType>APEX</extractorType>
            <developerName>DevNamee1</developerName>
            <masterLabel>DevName</masterLabel>
            <featureInputType>Realtime_Input</featureInputType>
            <inputContext>"{columnNames=[column1, column2], rawData=[S, 315090]}"</inputContext>
            <batchInputSourceIdentifier>DatasetName</batchInputSourceIdentifier>
            <batchInputSourceType>CRMA</batchInputSourceType>
            <batchInputSourceInformation>{"streamingTransformName":"SDT_Name","recordIdField":"fieldname","featureFieldsMapping":{"feature1":"field1","feature2":"field2"},"streaminTransformLabel":"SDT_Label","batchInputSourceLabel":"DMO_Label"}</batchInputSourceInformation>
        </defaultFeatureExtractor>
        <developerName>DevNamee1</developerName>
        <masterLabel>DevName</masterLabel>
        <predictionDefinition>PredictionDefinitionD</predictionDefinition>
        <predictionPlatform>Einstein_Discovery</predictionPlatform>
        <arePredctGenInRealTime>true</arePredctGenInRealTime>
    </aiUsecaseModels>
    <aiUsecaseModels>
        <developerName>DevNamee2</developerName>
        <masterLabel>DevName</masterLabel>
        <predictionDefinition>PredictionDefinitionBA</predictionDefinition>
        <predictionPlatform>Einstein_Discovery</predictionPlatform>
        <arePredctGenInRealTime>true</arePredctGenInRealTime>
    </aiUsecaseModels>
    <aiUsecaseModels>
        <developerName>DevNamee3</developerName>
        <masterLabel>DevName</masterLabel>
        <predictionDefinition>PredictionDefinitionCA</predictionDefinition>
        <predictionPlatform>Einstein_Discovery</predictionPlatform>
        <arePredctGenInRealTime>true</arePredctGenInRealTime>
    </aiUsecaseModels>
    <aiUsecaseModels>
        <developerName>DevName4</developerName>
        <masterLabel>DevName</masterLabel>
        <predictionDefinition>Model1</predictionDefinition>
        <predictionPlatform>Data_Cloud</predictionPlatform>
        <arePredctGenInRealTime>false</arePredctGenInRealTime>
    </aiUsecaseModels>
    <aiUsecaseModels>
        <developerName>DevName5</developerName>
        <masterLabel>DevName</masterLabel>
        <predictionDefinition>Model1</predictionDefinition>
        <predictionPlatform>Einstein_on_Data_Cloud</predictionPlatform>
        <arePredctGenInRealTime>false</arePredctGenInRealTime>
    </aiUsecaseModels>
    <masterLabel>DevName</masterLabel>
    <maximumInsightCount>3</maximumInsightCount>
    <maximumSuggestionCount>3</maximumSuggestionCount>
    <maximumRecommendationCount>3</maximumRecommendationCount>
    <primaryResponseObject>Lead</primaryResponseObject>
    <secondaryResponseObject>Account</secondaryResponseObject>
    <recommendationResponseObject>Contact</recommendationResponseObject>
    <shouldSaveFeatures>true</shouldSaveFeatures>
    <shouldSaveInsights>true</shouldSaveInsights>
    <shouldSaveRecommendation>false</shouldSaveRecommendation>
    <shouldSaveRequestResponse>false</shouldSaveRequestResponse>
    <shouldSaveScore>true</shouldSaveScore>
    <shouldSaveSuggestions>true</shouldSaveSuggestions>
    <suggestionImpactMinimumPct>50</suggestionImpactMinimumPct>
    <usecaseName>FTestSampleMLUsecase</usecaseName>
    <recommendationSource>Next_Best_Action_Flow</recommendationSource>
    <creatorType>INTERNAL_USER</creatorType>
</AIUsecaseDefinition>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>*</members>
        <name>*AIUsecaseDefinition*</name>
    </types>
    <version>66.0</version>
</Package>
```

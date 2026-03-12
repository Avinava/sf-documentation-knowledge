---
title: "DiscoveryAIModel"
domain: metadata-api
topic: discoveryaimodel
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:38.935Z
estimatedTokens: 1821
keywords: [DiscoveryAIModel, Represents, metadata, associated, model, used, Einstein, Discovery., Note, Declarative, Metadata, File, Suffix, Directory, Location, Version, Fields, DiscoveryAlgorithmType, DiscoveryModelField, DiscoveryModelTransform]
---

# DiscoveryAIModel

> Represents the metadata associated with a model used in Einstein
            Discovery.

# DiscoveryAIModel

Represents the metadata associated with a model used in Einstein Discovery.

A model is a sophisticated, custom algorithm that Einstein Discovery generates based on a comprehensive, statistical understanding of past outcomes. Einstein Discovery uses models to predict future outcomes. A model accepts the values of one or more predictor variables as input and produces a predicted outcome as output, along with (optionally) top factors and improvements. In Package Manager, this type is listed as "Discovery Model".

You can also build models using a third-party modeling tool, and then import them into Salesforce using Model Manager in Analytics Studio.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

Write operations for DiscoveryAIModel objects are generally not supported.

## Declarative Metadata File Suffix and Directory Location

A DiscoveryAIModel is stored in the discovery folder. DiscoveryAIModels have two files:

-   file with .model suffix contains the model's actual data
-   file named *ModelName*.model-meta.xml suffix contains the model's metadata

Here is a sample package.xml file:

```

```

## Version

DiscoveryAIModels are available in API version 51.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| algorithmType | DiscoveryAlgorithmType | Algorithm that Einstein Discovery used to create the model associated with this story. |
| classificationThreshold | double | Threshold value. Applies only to binary classification models. For regression models, this is null. |
| description | string | Model description. |
| label | string | Model label. If you package a model, this label appears in Package Manager. |
| modelFields | DiscoveryModelField[] | One or more model fields (variables). |
| modelRuntimeType | DiscoveryModelRuntimeType | Model run-time type. |
| predictedField | string | Name of the field that is predicted. |
| predictionType | DiscoveryPredictionType | Type of prediction. One of the following strings:RegressionClassificationUnknown |
| sourceType | DiscoveryModelSourceType | Source type. |
| status | DiscoveryAIModelStatus | Model status (enabled or disabled). |
| trainingMetrics | string | JSON object that represents metrics about the model when it was trained. |
| transformations | DiscoveryModelTransform | One or more model transformations. |

## DiscoveryAlgorithmType

Represents the algorithm that Einstein Discovery used to create the model.

| Field Name | Field Type | Description |
| --- | --- | --- |
| Best | string | Tournament Model. Genetic algorithm used to generate high-quality solutions to optimization and search problems, like optimizing decision trees for better performance. |
| Glm | string | Generalized Linear Model. Regression-based algorithm. |
| Gbm | string | Gradient Boost Machine. Decision tree-based ensemble machine learning algorithm. |
| Xgboost | string | XGBoost. Decision tree-based ensemble machine learning algorithm. |
| Drf | string | Random Forest. Supervised learning algorithm that uses multiple decision trees, randomization, and other optimization techniques. |

## DiscoveryModelField

Represents a field (variable) in the model.

| Field Name | Field Type | Description |
| --- | --- | --- |
| isDisparateImpact | boolean | Indicates whether the field is disparate impact (true) or not (false). |
| isSensitive | boolean | Indicates whether the field is sensitive (true) or not (false). |
| label | string | Field label displayed in the UI. |
| name | string | Field name. |
| type | DiscoveryModelFieldType | Field type. Enumerated. |
| values | string[] | A list of field values. |

## DiscoveryModelTransform

Represents a transformation in the model.

| Field Name | Field Type | Description |
| --- | --- | --- |
| config | string | The configuration for the transformation. |
| sourceFieldNames | string[] | A list of the source field names. |
| targetFieldNames | string[] | A list of the target field names. |
| type | DiscoveryAIModelTransformationType | Type of transformation. |

## DiscoveryAIModelTransformationType

Represents the type of transformation to apply before making a prediction.

| Field Name | Field Type | Description |
| --- | --- | --- |
| TypographicClustering | string | Typographic clustering transformation. |
| SentimentAnalysis | string | Sentiment analysis transformation. |
| FreeTextClustering | string | Free text clustering transformation. |
| NumericalImputation | string | Numerical imputation transformation. |
| CatagoricalImputation | string | Catagorical imputation transformation. |
| TimeSeriesForecast | string | Time series forecast transformation. |
| ExtractMonthOfYear | string | Extract month of year transformation. |
| ExtractDayOfWeek | string | Extract day of week transformation. |
| ZipCodeAnalysis | string | Zip code analysis transformation. |

## DiscoveryModelFieldType

Represents the data type of a model field.

| Field Name | Field Type | Description |
| --- | --- | --- |
| Text | string | Text data type. |
| Number | string | Number data type. |
| Date | string | Date data type. |

## DiscoveryModelRuntimeType

Represents the model run-type.

| Field Name | Field Type | Description |
| --- | --- | --- |
| Discovery | string | The model run-type is Einstein Discovery. |
| H2O | string | The model run-type is H20. |
| T | string | The model run-type is Tensorflow v2.4.4. |
| Tf27 | string | The model run-type is Tensorflow v2.7.0. |
| SC102 | string | The model run-type is Scikit Learn v1.0.2. |

## DiscoveryModelSourceType

Represents the source tool used to build the model: Discovery or an external tool (the model was uploaded into Salesforce).

| Field Name | Field Type | Description |
| --- | --- | --- |
| Discovery | string | Einstein Discovery built the model. |
| UserUpload | string | An external tool built the model. The model was then uploaded into Salesforce.NoteThis source type is not supported in the Metadata API. |

## DiscoveryAIModelStatus

Represents the status of the model (Enabled or Disabled).

| Field Name | Field Type | Description |
| --- | --- | --- |
| Disabled | string | The model is disabled (inactive). |
| Uploading | string | The model is uploading. |
| UploadFailed | string | The model failed to upload. |
| UploadCompleted | string | The model upload is complete. |
| Validating | string | The model is validating. |
| ValidationFailed | string | The model validation failed. |
| ValidationCompleted | string | The model validation is complete. |
| Enabled | string | The model is enabled (active). |

## Declarative Metadata Sample Definitions

Here is a sample DiscoveryAIModel:

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>Maximize_Sales</members>
        <name>DiscoveryAIModel</name>
    </types>
    <version>53.0</version>
</Package>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<DiscoveryAIModel xmlns="http://soap.sforce.com/2006/04/metadata" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <content xsi:nil="true"/>
   <algorithmType>Glm</algorithmType>
   <classificationThreshold>0.7383</classificationThreshold>
   <label>Maximize Tenure</label>
   <modelFields>
      <label>Field</label>
      <name>Field</name>
      <type>Text</type>
   </modelFields>
   <modelFields>
      <label>PTO</label>
      <name>PTO</name>
      <type>Number</type>
   </modelFields>
   <modelFields>
      <label>Level</label>
      <name>Level</name>
      <type>Text</type>
   </modelFields>
   <modelFields>
      <label>Salary</label>
      <name>Salary</name>
      <type>Number</type>
   </modelFields>
   <modelFields>
      <label>Tenure</label>
      <name>Tenure</name>
      <type>Number</type>
   </modelFields>
   <modelRuntimeType>Discovery</modelRuntimeType>
   <predictedField>Tenure</predictedField>
   <predictionType>Classification</predictionType>
   <sourceType>Discovery</sourceType>
   <status>Enabled</status>
</DiscoveryAIModel>
```

## Related Topics

- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)

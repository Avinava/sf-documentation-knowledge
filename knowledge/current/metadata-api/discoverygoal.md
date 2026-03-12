---
title: "DiscoveryGoal"
domain: metadata-api
topic: discoverygoal
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:38.670Z
estimatedTokens: 2392
keywords: [DiscoveryGoal, metadata, associated, Einstein, Discovery, prediction, definition, Declarative, File, Suffix, Directory, Location, Version, DiscoveryDeployedModel, DiscoveryFieldMap]
---

# DiscoveryGoal

> Represents the metadata associated with an Einstein Discovery
            prediction definition.

# DiscoveryGoal

Represents the metadata associated with an Einstein Discovery prediction definition.

A prediction definition is a container object in Einstein Discovery that is associated with one or more deployed models. If a prediction definition contains multiple models, then each model produces predictions for a different segment of the data. A prediction definition can contain up to ten active models. In Package Manager, this type is listed as "Discovery Prediction".

## Declarative Metadata File Suffix and Directory Location

A DiscoveryGoal is stored in the discovery folder. DiscoveryGoals have a .goal file suffix. Here is a sample package.xml file:

```

```

## Version

DiscoveryGoals are available in API version 51.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| active | boolean | Indicates whether the prediction definition is active (True) or not (False). |
| deployedModels | DiscoveryDeployedModel[] | One or more deployed models associated with this prediction definition. |
| label | string | Name of the prediction definition. |
| modelCards | DiscoveryModelCard[] | Model card for this prediction definition. |
| outcome | DiscoveryGoalOutcome | Outcome variable of this prediction definition. |
| predictionType | DiscoveryPredictionType | Type of prediction: Regression, Classification, or Unknown. |
| pushbackField | string | Automated writeback field for predictions. A custom field on the Salesforce object specified in subscribedEntity.NoteRemoving a pushback field from the goal metadata causes the field to be deleted from the Salesforce object as well. |
| pushbackType | DiscoveryPushbackType | Type of writeback field for predictions. |
| subscribedEntity | string | Salesforce object associated with this model. |
| terminalStateFilters | DiscoveryFilter[] | If specified, one or more filter expressions that define the conditions under which an observation has attained its terminal state (the actual outcome has been reached). For performance monitoring, Einstein Discovery determines model accuracy by comparing a model’s predicted outcomes with actual (observed) outcomes. |

## DiscoveryDeployedModel

Represents a model deployed in Salesforce.

| Field Name | Field Type | Description |
| --- | --- | --- |
| active | boolean | Indicates whether the deployed model is active (True) or inactive (False). |
| aiModel | string | Full name of the DiscoveryAIModel being deployed. |
| classificationThreshold | double | Threshold value. Applies only to binary classification models. For regression models, this is null. |
| fieldMappings | DiscoveryFieldMap[] | One or more mappings between model variables and either fields (in Salesforce objects) or columns (in CRM Analytics datasets). |
| filters | DiscoveryFilter[] | If specified, one or more segmentation filters for the deployed model. When making a prediction, the first model that has filters matching a specific input row will be used to make the prediction. No filters indicates that the model matches all input rows. |
| label | string | Label for the deployed model. Appears in Model Manager. |
| name | string | Name of the deployed model. |
| prescribableFields | DiscoveryPrescribableField[] | Actionable fields associated with improvements. |

## DiscoveryFieldMap

Represents a mapping between model variables and field values.

| Field Name | Field Type | Description |
| --- | --- | --- |
| mappedField | string | Field in a Salesforce object or column in a CRM Analytics dataset. |
| modelField | string | Model variable. |
| sobjectFieldJoinKey | string | Join key for a Salesforce object. Null if sourceType is AnalyticsDatasetField. |
| source | string | If the mapping is to a CRM Analytics dataset, this is the name of the dataset. Otherwise, null. |
| sourceFieldJoinKey | string | If the mapping is to a CRM Analytics dataset, this is the lookup column on that dataset used to perform the join. Otherwise, null. |
| sourceType | DiscoveryFieldMapSourceType | Data source type for field mapping. |

## DiscoveryFieldMapSourceType

Represents the data source type for field mapping: SalesforceField or AnalyticsDatasetField.

| Field Name | Field Type | Description |
| --- | --- | --- |
| SalesforceField | string | Field in a Salesforce object. |
| AnalyticsDatasetField | string | Column in a CRM Analytics dataset. |

## DiscoveryFilter

Represents a field filter.

| Field Name | Field Type | Description |
| --- | --- | --- |
| field | string | Name of the field to filter. |
| operator | DiscoveryFilterOperator | Operator used to calculate the filter. |
| type | DiscoveryFilterFieldType | Type of filter value. |
| values | DiscoveryFilterValue[] | One or more values selected for the filter. |

## DiscoveryFilterOperator

Represents a filter operator.

| Field Name | Field Type | Description |
| --- | --- | --- |
| Equal | string | Equal to operator (=). |
| NotEqual | string | Not equal to operator (<>). |
| GreaterThan | string | Greater than operator (>). |
| GreaterThanOrEqual | string | Greater than or equal to operator (>=). |
| LessThan | string | Less than operator (<). |
| LessThanOrEqual | string | Less than or equal to operator (<=). |
| Between | string | Between operator. |
| NotBetween | string | Not between operator. |
| InSet | string | In set operator. |
| NotIn | string | Not in operator. |
| Contains | string | Contains operator. |
| StartsWith | string | Starts with operator. |
| EndsWith | string | Ends with operator. |
| IsNull | string | Is null operator. |
| IsNotNull | string | Is not null operator. |

## DiscoveryFilterFieldType

Represents the data type of the filter field.

| Field Name | Field Type | Description |
| --- | --- | --- |
| Text | string | Text field type. |
| Number | string | Number field type. |
| Date | string | Date field type. |
| DateTime | string | Datetime field type. |
| Boolean | string | Boolean field type. |

## DiscoveryFilterValue

Represents a filter value.

| Field Name | Field Type | Description |
| --- | --- | --- |
| type | DiscoveryFilterValueType | Type of filter value. |
| value | DiscoveryFilterValue | Value. |

## DiscoveryFilterValueType

Represents the type of filter value.

| Field Name | Field Type | Description |
| --- | --- | --- |
| Constant | string | Filter value is a constant. |
| PlaceHolder | string | Filter value is a placeholder. |

## DiscoveryPrescribableField

Represents custom improvement text.

| Field Name | Field Type | Description |
| --- | --- | --- |
| customDefinitions | DiscoveryCustomPrescribableFieldDefinition[] | One or more strings for custom improvement text. Uses the default improvement text if none are specified. |
| name | string | Name of the model field that is actionable. |

## DiscoveryCustomPrescribableFieldDefinition

Represents a field definition in custom improvement text.

| Field Name | Field Type | Description |
| --- | --- | --- |
| filters | DiscoveryFilter[] | Represents one or more filters associated with custom improvement text. |
| template | string | If specified, represents the user-provided template from which the custom text is computed. If not specified, then the default text is used. |

## DiscoveryModelCard

Represents a model card associated with an Einstein Discovery prediction definition.

| Field Name | Field Type | Description |
| --- | --- | --- |
| contactEmail | string | Contact email for this model card. |
| contactName | string | Contact name for this model card. |
| label | string | Title for this model card. |
| sections | string | Sections in the model card. |

## DiscoveryGoalOutcome

Represents the outcome variable of the model.

| Field Name | Field Type | Description |
| --- | --- | --- |
| field | string | Name of the outcome variable. |
| fieldLabel | string | Label for the outcome variable. |
| goal | DiscoveryOutcomeGoal | Goal for the outcome variable. |
| mappedField | string | Mapped field. |

## DiscoveryOutcomeGoal

Represents the goal for an outcome.

| Field Name | Field Type | Description |
| --- | --- | --- |
| Minimize | string | Maximize the outcome. |
| Maximize | string | Minimize the outcome. |
| None | string | Reserved for future use. |

## DiscoveryPredictionType

Represents the prediction type for a model.

| Field Name | Field Type | Description |
| --- | --- | --- |
| Unknown | string | Unknown prediction type. |
| Regression | string | Regression prediction (numeric use case). |
| Classification | string | Binary classification prediction. |
| MulticlassClassification | string | Multiclass classification prediction. |

## DiscoveryPushbackType

Represents the type of writeback field. Must be set to AiRecordInsight.

| Field Name | Field Type | Description |
| --- | --- | --- |
| AiRecordInsight | string | Automatic writeback type. Required. |
| Direct | string | Currently not supported. Reserved for future use. |

## Declarative Metadata Sample Definitions

Here is a sample DiscoveryGoal:

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>employees_Tenure</members>
        <name>DiscoveryGoal</name>
    </types>
    <version>53.0</version>
</Package>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<DiscoveryGoal xmlns="http://soap.sforce.com/2006/04/metadata" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <active>true</active>
   <deployedModels>
      <active>true</active>
      <aiModel>Maximize_Tenure</aiModel>
      <fieldMappings>
         <mappedField>Opportunity.Amount</mappedField>
         <modelField>PTO</modelField>
         <sourceType>SalesforceField</sourceType>
      </fieldMappings>
      <fieldMappings>
         <mappedField>Opportunity.ExpectedRevenue</mappedField>
         <modelField>Salary</modelField>
         <sourceType>SalesforceField</sourceType>
      </fieldMappings>
      <fieldMappings>
         <mappedField>Level</mappedField>
         <modelField>Level</modelField>
         <sobjectFieldJoinKey>Opportunity.Name</sobjectFieldJoinKey>
         <source>employees</source>
         <sourceFieldJoinKey>Name</sourceFieldJoinKey>
         <sourceType>AnalyticsDatasetField</sourceType>
      </fieldMappings>
      <fieldMappings>
         <mappedField>Opportunity.StageName</mappedField>
         <modelField>Field</modelField>
         <sourceType>SalesforceField</sourceType>
      </fieldMappings>
      <filters>
         <field>Opportunity.StageName</field>
         <operator>Equal</operator>
         <values>
            <type>Constant</type>
            <value>Qualification</value>
         </values>
      </filters>
      <label>employees</label>
      <name>employees</name>
      <prescribableFields>
         <customDefinitions>
           <filters>
              <field>Salary</field>
              <operator>LessThan</operator>
              <type>Number</type>
              <values>
                 <type>PlaceHolder</type>
                 <value>[value_low]</value>
              </values>
           </filters>
           <template>Increase [field_name] by [diff]</template>
         </customDefinitions>
         <customDefinitions>
            <filters>
               <field>Salary</field>
               <operator>GreaterThan</operator>
               <type>Number</type>
               <values>
                   <type>PlaceHolder</type>
                   <value>[value_low]</value>
                </values>
             </filters>
             <template xsi:nil="true"/>
          </customDefinitions>
          <name>Salary</name>
      </prescribableFields>
      <prescribableFields>
          <customDefinitions>
             <filters>
                <field>Level</field>
                <operator>LessThan</operator>
                <type>Number</type>
                <values>
                   <type>PlaceHolder</type>
                   <value>[value_low]</value>
                </values>
            </filters>
            <template xsi:nil="true"/>
          </customDefinitions>
          <customDefinitions>
             <filters>
                <field>Level</field>
                <operator>GreaterThan</operator>
                <type>Number</type>
                <values>
                   <type>PlaceHolder</type>
                   <value>[value_low]</value>
                 </values>
              </filters>
              <template xsi:nil="true"/>
          </customDefinitions>
          <name>Level</name>
      </prescribableFields>
      <prescribableFields>
         <name>Field</name>
      </prescribableFields>
   </deployedModels>
   <label>employees_Tenure</label>
   <outcome>
      <field>Tenure</field>
      <fieldLabel>Tenure</fieldLabel>
      <goal>Maximize</goal>
      <mappedField>Opportunity.Amount</mappedField>
   </outcome>
   <predictionType>Regression</predictionType>
   <pushbackField>My_Pushback_Field__c</pushbackField>
   <subscribedEntity>Opportunity</subscribedEntity>
   <terminalStateFilters>
      <field>Opportunity.Amount</field>
      <operator>GreaterThan</operator>
      <values>
         <type>Constant</type>
         <value>5</value>
      </values>
   </terminalStateFilters>
   <terminalStateFilters>
      <field>Opportunity.Amount</field>
      <operator>LessThan</operator>
      <values>
         <type>Constant</type>
         <value>10</value>
      </values>
   </terminalStateFilters>
</DiscoveryGoal>
```

## Related Topics

- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)

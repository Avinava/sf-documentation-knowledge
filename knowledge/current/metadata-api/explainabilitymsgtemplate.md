---
title: "ExplainabilityMsgTemplate"
domain: metadata-api
topic: explainabilitymsgtemplate
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:52.388Z
keywords: [ExplainabilityMsgTemplate, Parent, Type, File, Suffix, Directory, Location, Version, Fields, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest]
---

# ExplainabilityMsgTemplate

# ExplainabilityMsgTemplate

Represents information about the template that contains the decision explanation message for a specified expression set step type.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

ExplainabilityMsgTemplate components have the suffix .explainabilityMsgTemplate and are stored in the ExplainabilityMsgTemplates folder.

## Version

ExplainabilityMsgTemplate components are available in API version 56.0 and later.

## Fields

| Field Name | Description |
| --- | --- |
|  |  |
| evaluationResult | Field TypeEvaluationResult (enumeration of type string)DescriptionRequired.The type of result for which the message template can be used. The step type for which the result is evaluated can be a condition, conditional group, or branch.Valid values are:FailedPassedNoResult |
| expressionSetStepType | Field TypeExpressionSetStepType (enumeration of type string)DescriptionRequired.The step type in an expression set that uses the explainability message template.Valid values are:AggregationBranchBusinessElementCalculationConditionDecisionTableLookupListEnabledGroupListFilterMatrixLookupReferenceProcedure |
| expsSetProcessType | Field TypeExpsSetProcessType (enumeration of type string)DescriptionRequired.The type of industry that’s using the expression set.Valid values are:BreGpaCalculationInsuranceClaimProcessing—Available in API version 65.0 and later.ItServiceManagement—Available in API version 65.0 and later.PlanCostCalculationRatingDiscoveryStudentInformationSystem—Available in API version 65.0 and later.StudentSuccessWhen Business Rules Engine is enabled for a Salesforce instance, the default value is 'Bre’. Other process types are available to you depending on your industry solution and permission sets. |
| isDefault | Field TypebooleanDescriptionIndicates whether the decision explainer template for a specified step type is default (true) or not (false). |
| masterLabel | Field TypestringDescriptionRequired.Master label the for ExplainabilityMsgTemplate. |
| message | Field TypestringDescriptionRequired.The message associated with the template for a specific expression set step type. |

## Declarative Metadata Sample Definition

The following is an example of an ExplainabilityMsgTemplate component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/file_based.htm "HTML (New Window)").
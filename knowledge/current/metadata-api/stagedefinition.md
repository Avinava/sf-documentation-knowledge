---
title: "StageDefinition"
domain: metadata-api
topic: stagedefinition
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:54.741Z
keywords: [StageDefinition, Parent, Type, File, Suffix, Directory, Location, Version, Fields, StageTransition, StageCriteria, StageCondition, StgFulfillmentStepDefGrp, StgFulfillmentStepDef, StgFulfillmentStepDpndDef, StageValue, Declarative, Metadata, Sample, Definition]
---

# StageDefinition

# StageDefinition

Represents a collection of fields to set up the states and transitions for Stage Management.

## Parent Type

This type extends the [Metadata](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/metadata.htm) metadata type and inherits its fullName field.

## File Suffix and Directory Location

StageDefinition components have the suffix .stageDefinition and are stored in the stageDefinitions folder.

## Version

StageDefinition components are available in API version 62.0 and later.

## Fields

| Field Name | Description |
| --- | --- |
| active | Field TypebooleanDescriptionRequired. Indicates whether the stage definition is active (true) or not (false). |
| description | Field TypestringDescriptionThe description of the stage definition. |
| masterLabel | Field TypestringDescriptionRequired. A user-friendly name for stage definition, which is defined when the metadata component is created. |
| referenceObject | Field TypestringDescriptionRequired. The reference object associated with the stage definition. |
| referenceObjectField | Field TypestringDescriptionRequired. The name of the field in the reference object used to define stages. |
| referenceObjectRecordType | Field TypestringDescriptionThe record type of a reference object associated with the stage definition. |
| stageTransition | Field TypeStageTransition[]DescriptionA collection of fields to set up transitions between two states. |
| stageValue | Field TypeStageValue[]DescriptionA collection of fields to set up the field values of an object for which stages are defined. |

## StageTransition

Represents a collection of fields to set up transitions between two states.

| Field Name | Description |
| --- | --- |
| criteria | Field TypeStageCriteria[]DescriptionA collection of fields to set up the criteria for the object stage transition and object stage change. |
| customPermission | Field TypestringDescriptionThe custom permission associated with the stage transition. The custom permission required to initiate a stage change. |
| fromStageValue | Field TypestringDescriptionRequired. The From Stage that's associated with the referenced object's stage transition. |
| stepGroup | Field TypeStgFulfillmentStepDefGrp[]DescriptionA collection of fields to set up the stage fulfillment step definition. |
| toStageValue | Field TypestringDescriptionRequired. The To Stagethat's associated with the referenced object's stage transition. |
| userPermission | Field TypeStageUserPermission (enumeration of type string)DescriptionSpecifies the type of user permission needed to initiate a stage change.Values are:CoordinateClinicalTrialsCoordinateClnclTrialExprcUsrManageClinicalTrialsParticipateClinicalTrialsProcessOrder |

## StageCriteria

Represents a collection of fields to set up the criteria for the object stage transition and object stage change.

| Field Name | Description |
| --- | --- |
| condition | Field TypeStageCondition[]DescriptionA collection of fields to set up the rules in transition criteria and stage change, including the object state, logic, and values. |
| criteriaType | Field TypeStageCriteriaType (enumeration of type string)DescriptionSpecifies the criteria type used to execute the transition.Values are:ANDCUSTOMLOGICOR |
| errorMessage | Field TypestringDescriptionA custom error message that's displayed when stage transition criteria evaluation fails.Available in API version 64.0 and later. |
| executionType | Field TypeStageCriteriaExecType (enumeration of type string)DescriptionRequired. Specifies the type of logic used to execute the criteria.Values are:CONDITIONFLOW |
| flowDefinitionName | Field TypestringDescriptionSpecifies the developer name of the Flow that executes when the criteria execution type is set to FLOW.Available in API version 63.0 and later. |
| isChildObject | Field TypebooleanDescriptionIndicates whether the target object in the stage criteria represents a child object in a parent-child relationship (true) or not (false).Available in API version 63.0 and later. |
| logicalExpression | Field TypestringDescriptionFormula to specify custom logic. Compares the Criteria field to the Value field. |
| targetFieldName | Field TypestringDescriptionSpecifies the field name on the target object that's used in the stage transition criteria evaluation.Available in API version 63.0 and later. |
| targetObject | Field TypestringDescriptionObject that's used in a Parent-Child object relationship condition. |

## StageCondition

Represents a collection of fields to set up the rules in transition criteria and stage change, including the object state, logic, and values.

| Field Name | Description |
| --- | --- |
| operator | Field TypeStageConditionOperator (enumeration of type string)DescriptionRequired. Specifies the operator used in the transition criteria.Values are:ContainsDoesNotContainEqualsGreaterOrEqualGreaterThanLessOrEqualLessThanNotEqualToStartsWith |
| sequenceNumber | Field TypeintDescriptionRequired. Specifies the order of the object state transition condition in a sequence. |
| sourceField | Field TypestringDescriptionRequired. The object field to define filter conditions. |
| value | Field TypestringDescriptionRequired. Value of the field used in the transition criteria. |

## StgFulfillmentStepDefGrp

Represents a collection of fields to set up the stage fulfillment step definition.

| Field Name | Description |
| --- | --- |
| name | Field TypestringDescriptionRequired. The name of the stage fulfillment step definition group. |
| step | Field TypeStgFulfillmentStepDef[]DescriptionA collection of fields to set up fullfillment step definitions for stages and transitions. |

## StgFulfillmentStepDef

Represents a collection of fields to set up fullfillment step definitions for stages and transitions.

| Field Name | Description |
| --- | --- |
| apiName | Field TypestringDescriptionRequired. The developer name of the stage fulfillment step definition. |
| assignedToQueue | Field TypestringDescriptionThe queue associated with the stage fulfillment step definition. |
| assignedToUser | Field TypestringDescriptionThe user associated with the stage fulfillment step definition. |
| dependency | Field TypeStgFulfillmentStepDpndDef[]DescriptionA collection of fields to set up the stage fulfillment step dependency between two steps. |
| executeOnRule | Field TypestringDescriptionSpecifies the expression set for the fulfillment step. The step is executed only when the corresponding expression set is set to true.Available in API version 62.0 and later. |
| flowDefinitionName | Field TypestringDescriptionThe name of the flow added to the step definition. |
| integrationDefinitionName | Field TypestringDescriptionThe ID associated with the integration provider definition. |
| name | Field TypestringDescriptionRequired. The name of the stage fulfillment step definition. |
| omniscriptName | Field TypestringDescriptionThe name of the Omniscript defined in step definition. |
| runAsUser | Field TypestringDescriptionThe ID of the user associated with the step definition. The user required to execute the step definition. |
| stepType | Field TypestringDescriptionRequired. Specifies the type of fulfillment step. |

## StgFulfillmentStepDpndDef

Represents a collection of fields to set up the stage fulfillment step dependency between two steps.

| Field Name | Description |
| --- | --- |
| step | Field TypestringDescriptionRequired. The step definition for the fulfillment step. |

## StageValue

Represents a collection of fields to set up the field values of an object for which stages are defined.

| Field Name | Description |
| --- | --- |
| criteria | Field TypeStageCriteria[]DescriptionA collection of fields to set up the criteria for the object stage transition and object stage change. |
| stepGroup | Field TypeStgFulfillmentStepDefGrp[]DescriptionA collection of fields to set up the stage fulfillment step definition. |
| value | Field TypestringDescriptionRequired. The value of the field used in the transition criteria. |

## Declarative Metadata Sample Definition

The following is an example of a StageDefinition component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/file_based_zip_file.htm "HTML (New Window)").
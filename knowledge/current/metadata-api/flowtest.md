---
title: "FlowTest"
domain: metadata-api
topic: flowtest
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:45:52.753Z
keywords: [FlowTest, Parent, Type, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields, FlowTestFlowVersion, FlowTestPoint, FlowTestAssertion, FlowTestCondition, FlowTestReferenceOrValue, FlowTestParameter, Declarative, Metadata]
---

# FlowTest

# FlowTest

Represents the metadata associated with a flow test. Before you activate a record-triggered flow, you can test it to verify its expected results and identify flow run-time failures.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

FlowTest components have the suffix .flowtest, and Salesforce stores them in the flowtests folder.

## Version

FlowTest components are available in API version 55.0 and later.

## Special Access Rules

There are no additional access requirements that are specific to this type.

## Fields

| Field Name | Description |
| --- | --- |
| description | Field TypestringDescriptionThe description of the flow test, such as what it does or how it works. |
| flowApiName | Field TypestringDescriptionRequired.The API name of the flow associated with the flow test. |
| flowTestDataSources | Reserved for future use. |
| flowTestFlowVersions | Field TypeFlowTestFlowVersion[]DescriptionAn array of flow versions that are associated with the flow test. This field is available in API version 66.0 and later. |
| isolatedObjectExternalKeys | Reserved for future use. |
| label | Field TypestringDescriptionRequired.The label of the flow test. |
| testPoints | Field TypeFlowTestPoint[]DescriptionAn array of test points for the test. |
| testType | Field TypeFlowTestType (enumeration of type string)DescriptionRequired.Specifies whether the test contains assertions. This field is available in API version 66.0 and later.Possible values are:WithAssertion—The automated comparison of the actual flow outcome with the user-defined expected outcome that assertions define. |

## FlowTestFlowVersion

Defines the flow version for the flow test. This subtype is available in API version 66.0 and later.

| Field Name | Description |
| --- | --- |
| flowVersionNumber | Field TypestringDescriptionThe version number of the flow version that’s associated with the flow test. |

## FlowTestPoint

Defines a flow test point that Salesforce evaluates when a flow test runs. Salesforce evaluates each test point in the order that it’s listed.

| Field Name | Description |
| --- | --- |
| assertions | Field TypeFlowTestAssertion[]DescriptionAn array of assertions for the test. |
| elementApiName | Field TypestringDescriptionRequired.The element API names for the start of the flow and the end of the flow.Possible values are:StartFinish |
| isUseMockOuput | Reserved for future use. |
| parameters | Field TypeFlowTestParameter[]DescriptionAn array of parameters for the test. |

## FlowTestAssertion

Defines an assertion for a test point that Salesforce evaluates when a flow test runs. If one assertion evaluates to false, the test run fails.

| Field Name | Description |
| --- | --- |
| conditions | Field TypeFlowTestCondition[]DescriptionAn array of conditions for an assertion. |
| errorMessage | Field TypestringDescriptionIf the associated condition evaluates to false, this custom message appears in Flow Builder. |

## FlowTestCondition

Defines a condition for an assertion that Salesforce evaluates when a flow test runs. If one condition evaluates to false, the assertion fails.

| Field Name | Description |
| --- | --- |
| leftValueReference | Field TypestringDescriptionRequired.The reference to the flow resource that the specified operator applies to. |
| operator | Field TypeFlowComparisonOperator (enumeration of type string)DescriptionRequired.The flow test uses this value to evaluate the resource reference in the leftValueReference field.Possible values are:ContainsEndsWithEqualToGreaterThanGreaterThanOrEqualToHasError—This value is available in API version 64.0 and later.In—This value is available in API version 56.0 and later.IsBlank—This value is available in API version 61.0 and later.IsChangedIsEmpty—This value is available in API version 61.0 and later.IsNullLessThanLessThanOrEqualToNotEqualToNotIn—This value is available in API version 56.0 and later.StartsWithWasSelectedWasSetWasVisited |
| rightValue | Field TypeFlowTestReferenceOrValueDescriptionThe value that the operator applies to the resource reference in the leftValueReference field. |

## FlowTestReferenceOrValue

Defines a specific value that the operator applies to the resource reference in flow test assertions and conditions.

| Field Name | Description |
| --- | --- |
| booleanValue | Field TypebooleanDescriptionSpecifies a boolean value. |
| dateTimeValue | Field TypedateTimeDescriptionSpecifies a dateTime value. |
| dateValue | Field TypedateDescriptionSpecifies a dateValue value. |
| elementReference | Reserved for future use. |
| jsonValue | Reserved for future use. |
| numberValue | Field TypedoubleDescriptionSpecifies a number value. |
| sobjectValue | Field TypestringDescriptionSpecifies an sObject value. |
| stringValue | Field TypestringDescriptionSpecifies a string value. |
| timeValue | Field TypetimeDescriptionSpecifies a time value. |

## FlowTestParameter

Defines parameters for the triggering record in the Start test point.

| Field Name | Description |
| --- | --- |
| leftValueReference | Field TypestringDescriptionRequired.The name of the parameter. When type is InputTriggeringRecordInitial or InputTriggeringRecordUpdated, the value for leftValueReference must be $Record. When type is ScheduledPath, the value for leftValueReference must be ScheduledPathApiName. |
| type | Field TypeFlowTestParameterType (enumeration of type string)DescriptionRequired.The type of parameter.Possible values are:InputTriggeringRecordInitialInputTriggeringRecordUpdatedInputVariable—Reserved for future use.ScheduledPath—Available in API version 56.0 and later. |
| value | Field TypeFlowTestReferenceOrValueDescriptionRequired.The value that the operator applies to the resource reference in the leftValueReference field. |

## Declarative Metadata Sample Definition

The following is an example of a FlowTest component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").
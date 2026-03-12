---
title: "StageAssignment"
domain: omnistudio
topic: stageassignment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:52.704Z
estimatedTokens: 1646
keywords: [StageAssignment, Represents, collection, fields, automatically, assign, stage, definitions, records, based, rule, criteria., Parent, File, Suffix, Directory, Location, Version, Fields, StgAssignmentRuleCriteria]
---

# StageAssignment

> Represents a collection of fields to automatically assign stage
			definitions to records based on rule criteria.

# StageAssignment

Represents a collection of fields to automatically assign stage definitions to records based on rule criteria.

## Parent Type

This type extends the [Metadata](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/metadata.htm) metadata type and inherits its fullName field.

## File Suffix and Directory Location

StageAssignment components have the suffix .stageAssignment and are stored in the stageAssignments folder.

## Version

StageAssignment components are available in API version 64.0 and later.

## Fields

| Field Name | Description |
| --- | --- |
| active | Field TypebooleanDescriptionRequired. Indicates whether the stage assignment rule is active (true) or not (false). The default value is true. Active rules are evaluated when determining stage definition assignments. |
| description | Field TypestringDescriptionDescription for the stage assignment rule. |
| masterLabel | Field TypestringDescriptionRequired. A user-friendly name for the stage assignment rule, which is defined when the metadata component is created. |
| referenceObject | Field TypestringDescriptionRequired. Reference object that's associated with the stage assignment rule. This is the API name of the Salesforce object for which the stage assignment rule applies (for example, ApplicationForm or Order). |
| referenceObjectRecordType | Field TypestringDescriptionRecord type of a reference object that's associated with the stage assignment rule. When specified, the assignment rule applies only to records of the specified record type. |
| ruleCriteria | Field TypeStgAssignmentRuleCriteria[]DescriptionCollection of rule criteria to determine stage definition assignment. Rules are evaluated in priority order, and the first matching rule determines which stage definition is assigned to the record. |
| stageDefinition | Field TypestringDescriptionDefault stage definition to assign when no rule criteria match. This provides a fallback assignment when none of the defined rule criteria evaluate to true. |

## StgAssignmentRuleCriteria

Represents a collection of fields to define rule criteria for stage definition assignment. Rule criteria are evaluated in priority order, with lower priority numbers evaluated first.

| Field Name | Description |
| --- | --- |
| condition | Field TypeStgAssignmentRuleCond[]DescriptionCollection of conditions to evaluate for this rule criteria. You can combine multiple conditions by using the criteriaType field to determine the overall evaluation result. |
| criteriaType | Field TypeStageCriteriaType (enumeration of type string)DescriptionRequired. Specifies the criteria type that's used to evaluate the rule conditions. Valid values are:ANDCUSTOMLOGICOR |
| logicalExpression | Field TypestringDescriptionFormula to specify custom logic for evaluating conditions. It's used when criteriaType is set to CUSTOMLOGIC. |
| name | Field TypestringDescriptionRequired. Name of the rule criteria. |
| priority | Field TypeintDescriptionRequired. Priority order for evaluating this rule criteria when multiple criteria are defined.Rules are evaluated in ascending priority order where lower numbers have higher priority. For example, a rule with priority 1 is evaluated before a rule with priority 2. The first rule that evaluates to true determines the stage definition assignment. |
| stageDefinition | Field TypestringDescriptionRequired. Stage definition to assign when this rule criteria matches. This must be the API name of a valid StageDefinition for the same reference object. |

## StgAssignmentRuleCond

Represents a collection of fields to define individual condition rules for stage assignment rule criteria. Each condition compares a field value against a specified value using a comparison operator.

| Field Name | Description |
| --- | --- |
| fieldName | Field TypestringDescriptionRequired. API name of the field to evaluate for this condition. |
| operator | Field TypeStageConditionOperator (enumeration of type string)DescriptionRequired. Operator that's used to evaluate the field value. Valid values are:ContainsDoesNotContainEqualsGreaterOrEqualGreaterThanLessOrEqualLessThanNotEqualToStartsWith |
| sequenceNumber | Field TypeintDescriptionRequired. Specifies the sequence number of this condition for reference in logical expressions.The sequence number is used in the logicalExpression field to create custom boolean logic. For example, a condition with sequenceNumber 1 is referenced as "1" in the expression "1 AND 2". |
| value | Field TypestringDescriptionRequired. Defines the value to compare against the field value.The value is specified as a string regardless of the field type. For example, numeric values are specified as "10000", dates as "2025-10-27", and text values as "Approved". |

## Usage

StageAssignment works in conjunction with StageDefinition to provide automated stage management. While StageDefinition defines the stages, transitions, and workflows, StageAssignment determines which stage definition to apply to a record based on rule criteria.

Evaluation Process:

-   When a record is created or updated, the system evaluates active StageAssignment rules for the object.
-   Rule criteria are evaluated in priority order where lower numbers have higher priority.
-   The first rule criteria that evaluates to true determines the stage definition assignment.
-   If no rule criteria matches, the default stageDefinition from the StageAssignment is used.
-   The assigned stage definition governs the stage behavior for that record.

Use Cases:

-   Value-based Assignment—Assign different stage definitions based on transaction amounts. For example, premium stages for high-value applications.
-   Type-based Assignment—Use different stage workflows for different record types.
-   Status-based Assignment—Apply specific stage definitions based on record status or classification.
-   Complex Criteria—Combine multiple conditions to create sophisticated assignment rules.

## Declarative Metadata Sample Definition

The following is an example of a StageAssignment component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/file_based_zip_file.htm "HTML (New Window)").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<StageAssignment xmlns="http://soap.sforce.com/2006/04/metadata">
    <active>true</active>
    <description>Assigns stage definitions to applications based on amount</description>
    <masterLabel>Application Stage Assignment</masterLabel>
    <referenceObject>ApplicationForm</referenceObject>
    <ruleCriteria>
        <name>High Value Applications</name>
        <priority>1</priority>
        <criteriaType>AND</criteriaType>
        <condition>
            <fieldName>Amount</fieldName>
            <operator>GreaterThan</operator>
            <sequenceNumber>1</sequenceNumber>
            <value>10000</value>
        </condition>
        <condition>
            <fieldName>Status</fieldName>
            <operator>Equals</operator>
            <sequenceNumber>2</sequenceNumber>
            <value>Approved</value>
        </condition>
        <stageDefinition>Premium_Application_Stages</stageDefinition>
    </ruleCriteria>
    <ruleCriteria>
        <name>Standard Applications</name>
        <priority>2</priority>
        <criteriaType>AND</criteriaType>
        <condition>
            <fieldName>Amount</fieldName>
            <operator>LessOrEqual</operator>
            <sequenceNumber>1</sequenceNumber>
            <value>10000</value>
        </condition>
        <stageDefinition>Standard_Application_Stages</stageDefinition>
    </ruleCriteria>
    <stageDefinition>Basic_Application_Stages</stageDefinition>
</StageAssignment>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>*</members>
        <name>StageAssignment</name>
    </types>
    <version>64.0</version>
</Package>
```

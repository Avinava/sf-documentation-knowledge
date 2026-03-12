---
title: "DecisionMatrixDefinition"
domain: metadata-api
topic: decisionmatrixdefinition
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:38.602Z
estimatedTokens: 1504
keywords: [DecisionMatrixDefinition, Represents, definition, decision, matrix., Note, File, Suffix, Directory, Location, Version, Fields, DecisionMatrixDefinitionVersion, DecisionMatrixDefinitionVersionColumn​​, Declarative, Metadata, Sample, Definition, Wildcard, Support]
---

# DecisionMatrixDefinition

> Represents a definition of a decision matrix.

# DecisionMatrixDefinition

Represents a definition of a decision matrix.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

Before deploying a decision matrix or a decision matrix version to a target org, review these [decision matrix migration considerations](https://help.salesforce.com/s/articleView?id=ind.decision_matrix_migration_considerations.htm&type=5&language=en_US "HTML (New Window)").

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

DecisionMatrixDefinition components have the suffix .decisionMatrixDefinition and are stored in the decisionMatrixDefinition folder.

## Version

DecisionMatrixDefinition components are available in API version 55.0 and later.

## Fields

| Field Name | Description |
| --- | --- |
| description | Field TypestringDescriptionDescribes a decision matrix definition. |
| groupKey | Field TypestringDescriptionA key for grouping matrix rows in different versions, such as a geographic region or a product code. |
| label | Field TypestringDescriptionRequired.The UI label of a decision matrix definition. |
| processType | Field TypeExpsSetProcessType (enumeration of type string)DescriptionThe process type that uses the expression set rule.Valid values are:BreGpaCalculationInsuranceClaimProcessing—Available in API version 65.0 and later.ItServiceManagement—Available in API version 65.0 and later.PlanCostCalculationRatingDiscoveryStudentInformationSystem—Available in API version 65.0 and later.StudentSuccessNoteWhen Business Rules Engine is enabled for a Salesforce instance, the default value is 'Bre’. Other usage types may be available to you depending on your industry solution and permission sets.Available in API version 59.0 and later. |
| subGroupKey | Field TypestringDescriptionA subgroup key for grouping matrix rows in different versions, such as a geographic region or a product code. For example, if the groupKey is Country, the subGroupKey can be State or Province. |
| type | Field TypeDecisionMatrixType (enumeration of type string)DescriptionThe type of a decision matrix.Valid values are:GroupedStandard |
| versions | Field TypeDecisionMatrixDefinitionVersion[]DescriptionRepresents an array of decision matrix version definitions in a decision matrix. This array must contain at least one version. |

## DecisionMatrixDefinitionVersion

Represents a definition of a decision matrix version.

| Field Name | Description |
| --- | --- |
| columns | Field TypeDecisionMatrixDefinitionVersionColumn​​[]DescriptionRepresents an array of columns in a decision matrix definition version. |
| decisionMatrixDefinition | Field TypestringDescriptionThe full name of a decision matrix version. |
| endDate | Field TypedateTimeDescriptionThe date until which a decision matrix definition version is available for use. |
| groupKeyValue | Field TypestringDescriptionThe value of the groupKey for a decision matrix definition version. For example, if the groupKey is Country, the groupKeyValue can be United States. |
| label | Field TypestringDescriptionRequired.The UI label of a decision matrix definition version. |
| rank | Field TypeintDescriptionThe rank of the Decision Matrix Definition Version. When more than one enabled version matches a decision matrix call, and the start date time to end date time spans overlap, the version with the highest rank is chosen. Available in API version 64.0 and later. |
| startDate | Field TypedateTimeDescriptionRequired.The date from when a decision matrix definition version is available for use. |
| status | Field TypeDecisionMatrixDefStatus (enumeration of type string)DescriptionRequired.Specifies the status of a decision matrix definition version.Valid values are:ActiveDraftInactiveInvalidDraftObsolete |
| subGroupKeyValue | Field TypestringDescriptionThe value of the subgroup key for a decision matrix definition version. For example, if the subGroupKey is State or Province, the subGroupKeyValue can be California. |
| versionNumber | Field TypeintDescriptionRequired.The version number of a decision matrix definition. |

## DecisionMatrixDefinitionVersionColumn​​

Represents a definition of a column in a decision matrix definition version.

| Field Name | Description |
| --- | --- |
| columnType | Field TypeDecisionMatrixColumnType (enumeration of type string)DescriptionRequired.Specifies whether a column is for an input or output.Valid values are:InputOutput |
| dataType | Field TypeDecisionMatrixDataType (enumeration of type string)DescriptionRequired.The type of data that’s stored in a column.Valid values are:BooleanCurrencyNumberNumberRangePercentTextTextRange |
| displaySequence | Field TypeintDescriptionRequired.Represents the position of a column in the column order. |
| isWildcardColumn | Field TypebooleanDescriptionRequired.Specifies whether a column stores a wildcard value (true) or not (false).The default value is false. |
| name | Field TypestringDescriptionRequired.The full name of a decision matrix definition version column. |
| rangeValue | Field TypestringDescriptionA list of values that define range boundaries. |
| wildcardValue | Field TypestringDescriptionThe wildcard value such as ALL. |

## Declarative Metadata Sample Definition

The following is an example of a DecisionMatrixDefinition component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/file_based.htm "HTML (New Window)").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<DecisionMatrixDefinition
	xmlns="http://soap.sforce.com/2006/04/metadata">
	<label>HealthCloudUM_ValidRegions</label>
	<type>Standard</type>
	<versions>
		<fullName>HealthCloudUM_ValidRegions_V1</fullName>
		<columns>
			<columnType>Input</columnType>
			<dataType>Text</dataType>
			<displaySequence>2</displaySequence>
			<isWildcardColumn>false</isWildcardColumn>
			<name>State</name>
		</columns>
		<columns>
			<columnType>Input</columnType>
			<dataType>Text</dataType>
			<displaySequence>1</displaySequence>
			<isWildcardColumn>false</isWildcardColumn>
			<name>City</name>
		</columns>
		<columns>
			<columnType>Output</columnType>
			<dataType>Boolean</dataType>
			<displaySequence>3</displaySequence>
			<isWildcardColumn>false</isWildcardColumn>
			<name>IsValid</name>
		</columns>
		<decisionMatrixDefinition>HealthCloudUM_ValidRegions</decisionMatrixDefinition>
		<label>HealthCloudUM_ValidRegions V1</label>
		<startDate>2022-05-02T13:04:06.000Z</startDate>
		<status>Draft</status>
		<versionNumber>1</versionNumber>
	</versions>
</DecisionMatrixDefinition>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package
	xmlns="http://soap.sforce.com/2006/04/metadata">
	<types>
		<members>*</members>
		<name>DecisionMatrixDefinition</name>
	</types>
	<version>66.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)

---
title: "ExpressionSetObjectAlias"
domain: metadata-api
topic: expressionsetobjectalias
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:52.436Z
keywords: [ExpressionSetObjectAlias, Parent, Type, File, Suffix, Directory, Location, Version, Fields, ExpressionSetObjectAliasField, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest]
---

# ExpressionSetObjectAlias

# ExpressionSetObjectAlias

Represents information about the alias of the source object that’s used in an expression set.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

ExpressionSetObjectAlias components have the suffix .expressionSetObjectAlias and are stored in the expressionSetObjectAlias folder.

## Version

ExpressionSetObjectAlias components are available in API version 56.0 and later.

## Fields

| Field Name | Description |
| --- | --- |
| dataType | Field TypeExpsSetObjectDataType (enumeration of type string)DescriptionRequired.The data type of the object alias.Values are:JSONsObject |
| mappings | Field TypeExpressionSetObjectAliasField[]DescriptionThe mapping between a source field and its corresponding field alias. |
| objectApiName | Field TypestringDescriptionRequired.The API name of the top-level object, when the data type is sObject. The key of the top-level object, when the data type is JSON. |
| usageType | Field TypeExpsSetProcessType (enumeration of type string)DescriptionRequired.The type of application associated with the industry that's using an expression set. Your Salesforce org admin can define the values.Valid values are:BreGpaCalculationInsuranceClaimProcessing—Available in API version 65.0 and later.ItServiceManagement—Available in API version 65.0 and later.PlanCostCalculationRatingDiscoveryStudentInformationSystem—Available in API version 65.0 and later.StudentSuccessWhen Business Rules Engine is enabled for a Salesforce instance, the default value is 'Bre’. Other usage types are available to you depending on your industry solution and permission sets. |

## ExpressionSetObjectAliasField

The fields associated with the source object for which the object alias is created.

| Field Name | Description |
| --- | --- |
| fieldAlias | Field TypestringDescriptionRequired.The field alias associated with the source field name. |
| sourceFieldName | Field TypestringDescriptionRequired.The name of the source field for which the field alias is created. The source field name under an object alias must be unique. |

## Declarative Metadata Sample Definition

The following is an example of an ExpressionSetObjectAlias component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/file_based.htm "HTML (New Window)").
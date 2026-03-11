---
title: "UiFormatSpecificationSet"
domain: metadata-api
topic: uiformatspecificationset
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:45:54.995Z
keywords: [UiFormatSpecificationSet, Important, Parent, Type, Note, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields, UiFormatSpecification, UiFormulaRule, UiFormulaCriterion, Declarative, Metadata, Sample]
---

# UiFormatSpecificationSet

# UiFormatSpecificationSet

Represents a set of rules that define the style and visibility of conditional field formatting on Dynamic Forms-enabled Lightning page field instances.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

A UiFormatSpecificationSet is referred to as a conditional formatting ruleset in the rest of the Salesforce documentation and UI.

## File Suffix and Directory Location

UiFormatSpecificationSet components have the suffix .uiFormatSpecificationSet and are stored in the uiFormatSpecificationSets folder.

## Version

UiFormatSpecificationSet components are available in API version 62.0 and later.

## Special Access Rules

There are no additional access requirements that are specific to this type.

## Fields

| Field Name | Description |
| --- | --- |
| field | Field TypestringDescriptionRequired. The object field that the conditional formatting is associated with. |
| formatType | Field TypeFormatType (enumeration of type string)DescriptionRequired. The type of conditional formatting associated with the field.Values are:ICON |
| masterLabel | Field TypestringDescriptionRequired. The label for the conditional formatting ruleset, which displays in Setup. |
| sobjectType | Field TypestringDescriptionRequired. The object the ruleset is associated with. |
| uiFormatSpecifications | Field TypeUiFormatSpecification[]DescriptionThe list of rules contained in the ruleset. |

## UiFormatSpecification

A single rule in the ruleset.

| Field Name | Description |
| --- | --- |
| formatProperties | Field TypestringDescriptionRequired. The properties for a given formatType in JSON format. |
| formatType | Field TypeFormatType (enumeration of type string)DescriptionRequired. The type of conditional formatting associated with the field when the rule evaluates to true.Values are:ICON |
| order | Field TypeintDescriptionRequired. A numerical value representing the conditional formatting rule’s position in the evaluation order. |
| visibilityRule | Field TypeUiFormulaRuleDescriptionA set of one or more filters that define the conditions under which the conditional formatting appears on the field.If the visibility rule evaluates to true, the formatting displays on the field. If false, it doesn’t display. If this field is null, the formatting displays by default. |

## UiFormulaRule

A set of one or more filters that define the conditions under which conditional field formatting displays on a Dynamic Forms-enabled Lightning page field instance. For example, you could construct a filter that causes conditional formatting to display only when the Amount field is greater than $1,000,000.

| Field Name | Description |
| --- | --- |
| booleanFilter | Field TypestringDescriptionSpecifies advanced filter conditions such as 1 AND 2. |
| criteria | Field TypeUiFormulaCriterion[]DescriptionList of one or more filters that, when evaluated, determine conditional field formatting visibility. |

## UiFormulaCriterion

A single filter that when evaluated, helps define conditional formatting visibility on a Dynamic Forms-enabled Lightning page field instance.

| Field Name | Description |
| --- | --- |
| leftValue | Field TypestringDescriptionRequired. The field upon which the filter is based. For example, AMOUNT. |
| operator | Field TypestringDescriptionRequired. Defines the operator used to filter the data. Valid values are:CONTAINSEQUALNE—not equalGT—greater thanGE—greater than or equalLE—less than or equalLT—less than |
| rightValue | Field TypestringDescriptionThe value by which you want to evaluate the formatting visibility. For example, 1000000. |

## Declarative Metadata Sample Definition

The following is an example of an UiFormatSpecificationSet component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").
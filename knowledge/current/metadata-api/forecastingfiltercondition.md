---
title: "ForecastingFilterCondition"
domain: metadata-api
topic: forecastingfiltercondition
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:45:52.776Z
keywords: [ForecastingFilterCondition, Important, Parent, Type, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest]
---

# ForecastingFilterCondition

# ForecastingFilterCondition

Represents the custom filter condition logic for including or excluding data from opportunity forecasts.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Parent Type

This type extends the [Metadata](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/metadata.htm) metadata type and inherits its fullName field.

## File Suffix and Directory Location

ForecastingFilterCondition components have the suffix .ForecastingFilterCondition and are stored in the ForecastingFilterConditions folder.

## Version

ForecastingFilterCondition components are available in API version 55.0 and later.

## Special Access Rules

There are no additional access requirements that are specific to this type.

## Fields

| Field Name | Description |
| --- | --- |
| fieldName | Field TypestringDescriptionRequired. The name of the opportunity field to be filtered. |
| forecastingFilter | Field TypestringDescriptionRequired. The ID of the forecast filter. |
| forecastingSourceDefinition | Field TypestringDescriptionThe ID of the forecasting source definition. |
| masterLabel | Field TypestringDescriptionRequired. The label for this object, which displays in Setup. The label is in the default language locale for the organization. If there’s no default language locale, the label is in en_US. |
| operation | Field TypeFilterOperation (enumeration of type string)DescriptionRequired. The operator in the filter condition. Possible values are:equalsgreaterOrEqual—greater than or equal togreaterThanlessOrEqual—less than or equal tolessThannotEqual—not equal to |
| sortOrder | Field TypeintDescriptionRequired. The index value for the condition. This value represents the condition in the FilterLogic field on the ForecastingFilter object. For example, 1. |
| value | Field TypestringDescriptionThe value of the filter condition. If multiple values are specified, they must be separated by a comma delimiter.NoteIf you have multiple currencies enabled, and add a custom filter on a currency field as part of your forecast type definition, the corporate currency at the time the filter was created is used. If you have a single currency enabled, the absolute value is used in your filter condition. |

## Declarative Metadata Sample Definition

The following is an example of a ForecastingFilterCondition component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/file_based_zip_file.htm).

## Usage

A forecast type can contain up to three filter conditions.
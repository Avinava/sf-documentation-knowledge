---
title: "ForecastingFilter"
domain: metadata-api
topic: forecastingfilter
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:45:52.770Z
keywords: [ForecastingFilter, Important, Parent, Type, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest]
---

# ForecastingFilter

# ForecastingFilter

Represents the custom filter for including or excluding data from opportunity forecasts.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Parent Type

This type extends the [Metadata](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/metadata.htm) metadata type and inherits its fullName field.

## File Suffix and Directory Location

ForecastingFilter components have the suffix .forecastingFilter and are stored in the forecastingFilters folder.

## Version

ForecastingFilter components are available in API version 55.0 and later.

## Special Access Rules

There are no additional access requirements that are specific to this type.

## Fields

| Field Name | Description |
| --- | --- |
| filterLogic | Field TypestringDescriptionThe logic that controls the evaluation of conditions. Only AND is supported. For example, 1 AND 2 AND 3. |
| forecastingType | Field TypestringDescriptionRequired. The ID of the forecast type. Can be linked only to forecast types created in Summer ’21 and later. |
| forecastingTypeSource | Field TypestringDescriptionRequired. The ID of the forecast type source. Can be linked only to forecast type sources created in Summer ’21 or later and with a forecast source definition with source object of 'Opportunity.' |
| masterLabel | Field TypestringDescriptionRequired. The label for this object, which displays in Setup. The label is in the default language locale for the organization. If there’s no default language locale, the label is in en_US. |

## Declarative Metadata Sample Definition

The following is an example of a ForecastingFilter component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/file_based_zip_file.htm).
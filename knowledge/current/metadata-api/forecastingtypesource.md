---
title: "ForecastingTypeSource"
domain: metadata-api
topic: forecastingtypesource
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:52.830Z
keywords: [ForecastingTypeSource, Important, Parent, Type, File, Suffix, Directory, Location, Version, Fields, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest, Usage]
---

# ForecastingTypeSource

# ForecastingTypeSource

Represents the mapping of a forecasting source definition to a forecast type.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

ForecastingTypeSource components have the suffix .forecastingTypeSource and are stored in the ForecastingTypeSources folder.

## Version

ForecastingTypeSource components are available in API version 52.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| forecastingSourceDefinition | string | Required. ID of the forecasting source definition. |
| forecastingType | string | Required. ID of the forecast type. Can be linked only to forecast types created in Summer ’21 and later. |
| masterLabel | string | Required. Controlling label for this forecasting type source. |
| parentSourceDefinition | string | For forecast types not based on the Opportunity object and not based on a custom measure, this value represents the parent ForecastingSourceDefinition of the linked ForecastingSourceDefinition.Opportunity Product is the parent of Opportunity.Opportunity Split is the parent of Opportunity.Line Item Schedule is the parent of Opportunity Product. |
| relationField | string | Represents the field that links the source objects of the parent ForecastingSourceDefinition to the child ForecastingSourceDefinition. Possible values are:OpportunityLineItem.OpportunityIdOpportunityLineItem.Product2IdOpportunityLineItemSchedule.OpportunityLineItemIdOpportunitySplit.OpportunityId |
| sourceGroup | int | Required. Represents a grouping of forecasting source definitions. |

## Declarative Metadata Sample Definition

The following are two examples of a ForecastingTypeSource component. The first bases forecasts on the Opportunity Product object. The second bases forecasts on the Line Item Schedule object.

```

```

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Usage

-   Forecast types that were available before API version 52.0 can be activated, deactivated, and deleted but not created. To enable an existing forecast type, update the active flag.
-   Forecast types that are available only in API version 52.0 and later can be created, activated, deactivated, and deleted. If the forecast type doesn’t exist, it is created in the inactive state. If the forecast type exists, the active flag is updated. Deploy the zip file twice to create and activate the forecast type.
-   Deploy Metadata API types in the following sequence: ForecastingSettings, ForecastingType, ForecastingSourceDefinition, and then ForecastingTypeSource. If all are specified in the package file, the sequence is followed automatically.
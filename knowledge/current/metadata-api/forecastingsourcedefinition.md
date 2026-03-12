---
title: "ForecastingSourceDefinition"
domain: metadata-api
topic: forecastingsourcedefinition
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:40.132Z
estimatedTokens: 1109
keywords: [ForecastingSourceDefinition, Represents, measure, date, hierarchy, forecast, uses, project, sales., Important, Parent, File, Suffix, Directory, Location, Version, Fields, Declarative, Metadata, Sample]
---

# ForecastingSourceDefinition

> Represents the object, measure, date type, and hierarchy
      that a forecast uses to project sales.

# ForecastingSourceDefinition

Represents the object, measure, date type, and hierarchy that a forecast uses to project sales.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

ForecastingSourceDefinition components have the suffix .forecastingSourceDefinition and are stored in the forecastingSourceDefinitions folder.

## Version

ForecastingSourceDefinition components are available in API version 52.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| categoryField | string | Name of the forecast category that is associated with the forecast type. Possible values are:Opportunity.ForecastCategoryName |
| dateField | string | Field that is used for the forecast type’s date type. For example, the CloseDate field on Opportunity is used for opportunity close date-based forecast types. Possible values are:Opportunity.CloseDateOpportunityLineItem.ServiceDateOpportunityLineItemSchedule.ScheduleDate |
| familyField | string | Use this field to group forecasts by product family. Possible values are:Product2.Family |
| masterLabel | string | Required. Controlling label for this forecasting source definition. |
| measureField | string | Field that is used for the forecast type’s measure. For example, the Amount field on Opportunity is associated with revenue-based forecast types. Possible values are*:Opportunity.AmountOpportunity.CustomOpportunity.TotalOpportunityQuantityOpportunityLineItem.CustomOpportunityLineItem.QuantityOpportunityLineItem.TotalPriceOpportunityLineItemSchedule.CustomOpportunityLineItemSchedule.QuantityOpportunityLineItemSchedule.RevenueOpportunitySplit.CustomOpportunitySplit.SplitAmount*Where Custom represents the name of the custom field that a forecast type’s measure is based on. Example: Use Megawatts__c to forecast energy consumption. |
| sourceObject | string | Required. Object associated with this forecasting source definition. Possible values are:OpportunityOpportunityLineItemOpportunityLineItemScheduleOpportunitySplitProduct2 |
| territory2Field | string | For a territory-based forecast type, indicates the field that is used for territory information. Possible values are:Opportunity.Territory2IdFor user role-based forecast types, this value is null. |
| userField | string | Specifies who owns the forecast. Possible values are:Opportunity.OwnerIdOpportunitySplit.SplitOwnerId |

## Declarative Metadata Sample Definition

The following is an example of a ForecastingSourceDefinition component.

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

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<ForecastingSourceDefinition xmlns="http://soap.sforce.com/2006/04/metadata">
    <masterLabel>TestFsd</masterLabel>
    <sourceObject>Opportunity</sourceObject>
    <measureField>Opportunity.Amount</measureField>
    <dateField>Opportunity.CloseDate</dateField>
    <userField>Opportunity.OwnerId</userField>
    <categoryField>Opportunity.ForecastCategoryName</categoryField>
</ForecastingSourceDefinition>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>*</members>
        <name>ForecastingSourceDefinition</name>
    </types>
    <version>52.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)

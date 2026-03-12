---
title: "ForecastingType"
domain: metadata-api
topic: forecastingtype
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:40.144Z
estimatedTokens: 1369
keywords: [ForecastingType, Represents, forecast, type., Important, Parent, File, Suffix, Directory, Location, Version, Fields, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest, Usage]
---

# ForecastingType

> Represents a forecast type.

# ForecastingType

Represents a forecast type.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

ForecastingType components have the suffix .forecastingType and are stored in the forecastingTypes folder.

## Version

ForecastingType components are available in API version 52.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| active | boolean | Required. If true, the forecast type is active. If false, the forecast type isn’t active. The default value is false. |
| amount | boolean | Required. If true, the forecast type is based on a revenue measure. If false, the forecast type is based on a quantity measure. The default value is true. |
| dateType | string | Required. The date type that forecast amounts are based on.OpportunityCloseDate: Base forecasts on opportunity close dates.ProductDate: Base forecasts on opportunity product line item dates, if available.ScheduleDate: Base forecasts on opportunity product schedule dates, if available.The following values are available in API version 52.0 and later, in Performance Edition and in Unlimited Edition with Sales Cloud.OLIMeasureCloseDateOnly: Base forecasts on opportunity close dates.ProductDateOnly: Base forecasts on opportunity product line item dates, if available.ScheduleDateOnly: Base forecasts on opportunity product schedule dates, if available. |
| developerName | string | Required. The name of the forecasting type. The DeveloperName is called name in ForecastingSettings and Forecasting Type in custom reports. |
| forecastingGroupDeveloperName | string | Indicates the forecast group assigned to the forecast type. Required if hasCustomGroup is true. |
| hasCustomGroup | boolean | Indicates whether the forecasting type has a forecast group, based on a custom picklist assigned. Use ForecastingGroup and ForecastingGroupItems subtypes in ForecastingSettings to identify the group and the values. |
| hasProductFamily | boolean | Required. If true, the forecast type includes product families. If false, the forecast type doesn’t include product families. The default value is false. |
| masterLabel | string | Required. Controlling label for this ForecastingType value. This display value is the internal label that doesn’t get translated. |
| opportunitySplitType | string | Indicates whether the forecasting type has a split type and, if so, the name of the split type. |
| opptyLineItemSplitType | string | Indicates whether the forecasting type has an opportunity line item (product) split type and, if so, the name of the line item split type. Available in API version 58.0 and later. |
| quantity | boolean | Required. If true, the forecast type is based on a quantity measure. If false, the forecast type is based on a revenue measure. The default value is false. |
| roleType | string | Required. Indicates whether the role type has a ForecastingType, and if so, which ForecastingType. Possible values are R (user role-based forecast type) and Y (Territory2-based forecast type). |
| territory2Model | string | Indicates whether the ForecastingType has a Territory2 model and, if so, the name of the Territory2 model. |

## Declarative Metadata Sample Definition

The following is an example of a ForecastingType component using the role hierarchy.

```

```

The following is an example of a ForecastingType component using the territory hierarchy.

```

```

The following is an example of a ForecastingType component using an opportunity split type.

```

```

The following is an example of a ForecastingType component using an opportunity line item split type.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Usage

-   Legacy forecast types that were available before API version 52.0 can be deactivated but not activated, created, or deleted.
-   Forecast types that are available only in API version 52.0 and later can be created, activated, deactivated, and deleted. If the forecast type doesn’t exist, it’s created in the inactive state. If the forecast type exists, the active flag is updated. Deploy the zip file twice to create and activate the forecast type.
-   Deploy Metadata API types in this sequence: ForecastingSettings, ForecastingType, ForecastingSourceDefinition, and then ForecastingTypeSource. If all are specified in the package file, the sequence is followed automatically.

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<ForecastingType xmlns="http://soap.sforce.com/2006/04/metadata">
    <active>false</active>
    <amount>true</amount>
    <dateType>0</dateType>
    <developerName>qqw</developerName>
    <hasProductFamily>false</hasProductFamily>
    <masterLabel>qqw</masterLabel>
    <quantity>false</quantity>
    <roleType>R</roleType>
</ForecastingType>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<ForecastingType xmlns="http://soap.sforce.com/2006/04/metadata">
    <active>false</active>
    <amount>false</amount>
    <dateType>0</dateType>
    <developerName>New_Model6</developerName>
    <hasProductFamily>false</hasProductFamily>
    <masterLabel>Opportunity Quantity by Territory</masterLabel>
    <quantity>true</quantity>
    <roleType>Y</roleType>
    <territory2Model>New_Model6</territory2Model>
</ForecastingType>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<ForecastingType xmlns="http://soap.sforce.com/2006/04/metadata">
    <active>false</active>
    <amount>true</amount>
    <dateType>0</dateType>
    <developerName>split12</developerName>
    <hasProductFamily>false</hasProductFamily>
    <masterLabel>split12</masterLabel>
    <opportunitySplitType>Custom_Revenue</opportunitySplitType>
    <quantity>false</quantity>
    <roleType>R</roleType>
</ForecastingType>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<ForecastingType xmlns="http://soap.sforce.com/2006/04/metadata">
    <active>true</active>
    <amount>true</amount>
    <dateType>0</dateType>
    <developerName>productrevenuesplit</developerName>
    <hasProductFamily>true</hasProductFamily>
    <masterLabel>productrevenuesplit</masterLabel>
    <opportunitySplitType>Revenue</opportunitySplitType>
    <opptyLineItemSplitType>Revenue</opptyLineItemSplitType>
    <quantity>false</quantity>
    <roleType>R</roleType>
</ForecastingType>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>*</members>
        <name>ForecastingType</name>
    </types>
    <version>52.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- ForecastingSettings (atlas.en-us.api_meta.meta/api_meta/meta_forecastingsettings.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)

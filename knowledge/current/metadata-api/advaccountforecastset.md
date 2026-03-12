---
title: "AdvAccountForecastSet"
domain: metadata-api
topic: advaccountforecastset
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:36.485Z
estimatedTokens: 2676
keywords: [AdvAccountForecastSet, forecast, define, configurations, business, unit, different, groups, accounts, separate, account, level, focus, account-specific, data]
---

# AdvAccountForecastSet

> Represents the forecast sets that define the forecast
			configurations for each business unit or different groups of accounts. With separate
			forecast sets at account or business unit level, you can focus on account-specific data
			and manage configuration updates for one business unit without impacting any other
			business unit’s data.

# AdvAccountForecastSet

Represents the forecast sets that define the forecast configurations for each business unit or different groups of accounts. With separate forecast sets at account or business unit level, you can focus on account-specific data and manage configuration updates for one business unit without impacting any other business unit’s data.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

AdvAccountForecastSet components have the suffix .advAccountForecastSet and are stored in the AdvAccountForecastSet folder.

## Version

AdvAccountForecastSet components are available in API version 53.0 and later.

## Special Access Rules

The advanced account forecasting feature setting for Manufacturing Cloud is required to create an advanced account forecast set.

## Fields

| Field Name | Description |
| --- | --- |
| accountFieldName | Field TypestringDescriptionThe field name for the account in the advanced account forecast fact record. |
| calculationFrequency | Field TypeAdvAcctFcstCalcFrequency (enumeration of type string)DescriptionThe frequency at which the forecast set is recalculated automatically.Possible values are:MonthlyQuarterlyWeeklyYearlyThe default value is Monthly. |
| description | Field TypestringDescriptionThe description of the advanced account forecast set record. |
| dimensions | Field TypeAdvAcctForecastDimension[]DescriptionThe dimensions selected for an advanced account forecast set to categorize the forecast data. |
| displayGroups | Field TypeAdvAcctFrcstDisplayGroup[]DescriptionThe information about the groups for the advanced account forecast set measures or dimensions. |
| forecastAdjPeriods | Field TypeAdvAcctForecastAdjPeriod[]DescriptionThe details about the adjustment period of the advanced account forecast values. |
| forecastFactObjectName | Field TypestringDescriptionRequired.The API name of the object that contains the advanced forecast fact records. |
| forecastFormulas | Field TypeAdvAccountForecastFormula[]DescriptionThe formulas based on which forecast values are calculated. |
| forecastPeriodGroupName | Field TypestringDescriptionRequired.The name of the advanced account forecast period group record. |
| forecastQuantityFieldName | Field TypestringDescriptionThe field name for the forecast quantity in the advanced account forecast fact record. |
| forecastRevenueFieldName | Field TypestringDescriptionThe field name for the forecast revenue in the advanced account forecast record. |
| forecastSetFieldName | Field TypestringDescriptionThe field name for the Forecast Set ID in the advanced account forecast fact record. |
| forecastSetName | Field TypestringDescriptionRequired.The name of the advanced account forecast set record. |
| forecastStatusFieldName | Field TypestringDescriptionThe field name for the status in the advanced account forecast fact record. |
| generationDpeDefName | Field TypestringDescriptionThe name of the data processing engine (DPE) definition that’s used to generate advanced account forecast fact records. |
| measureDefinitions | Field TypeAdvAcctForecastMeasureDef[]DescriptionThe measures to display in the advanced account forecasts grid for the forecast set. |
| periodFieldName | Field TypestringDescriptionThe field name for the period in the advanced account forecast fact record. |
| recalculateDpeDefName | Field TypestringDescriptionThe name of the data processing engine definition that’s used to recalculate the advanced account forecast fact records. |
| regenerationDpeDefName | Field TypestringDescriptionThe name of the data processing engine definition that’s used to regenerate the advanced account forecast fact records. |
| rolloverDpeDefName | Field TypestringDescriptionThe data processing engine definition that’s used to generate the rollover advanced account forecast fact records. |
| rolloverFrequency | Field TypeAdvAcctFcstCalcFrequency (enumeration of type string)DescriptionThe frequency of rollover of the advanced account forecast records.Possible values are:MonthlyQuarterlyWeeklyYearlyThe default value is Monthly. |
| status | Field TypeAdvAccForecastSetStatus (enumeration of type string)DescriptionRequired.The status of the advanced account forecast set.Possible values are:ActiveInactive |

## AdvAccountForecastFormula

Represents the formulas that are used to calculate forecast values in real time after applying the DPE calculations. For example, processing forecast rollover for all accounts at the start of a month.

| Field Name | Description |
| --- | --- |
| endPeriod | Field TypeintDescriptionRequired.The period until when the forecast formula is applicable. |
| formulaExpression | Field TypestringDescriptionRequired.The formula based on which forecast values are calculated. |
| formulaType | Field TypeAdvAcctFcstFormulaType (enumeration of type string)DescriptionRequired.Specifies the calculation type for the formula.Possible values are:QUANTITYREVENUEThe default value is QUANTITY. |
| startPeriod | Field TypeintDescriptionRequired.The period from when the forecast formula is applicable. |

## AdvAcctForecastAdjPeriod

Represents details about the adjustment period of the advanced account forecast values.

| Field Name | Description |
| --- | --- |
| adjustmentDayCount | Field TypeintDescriptionRequired.The number of days during which you can make forecast adjustments. |
| frequency | Field TypePeriodTypes (enumeration of type string)DescriptionRequired.The frequency that’s applicable to make any forecast adjustments.Possible values are:MonthQuarterWeekYearThe default value is Month. |
| profileName | Field TypestringDescriptionThe name of the profile with which you can adjust the forecast set. |
| startDay | Field TypeintDescriptionRequired.The start date for forecast adjustments. |

## AdvAcctForecastDimension

Represents the dimensions selected for an advanced account forecast set to categorize the data. For example, a business unit requires forecast data for each account aggregated by product and ship-from location.

| Field Name | Description |
| --- | --- |
| advAcctForecastDimName | Field TypestringDescriptionRequired.The name of the advanced account forecast dimension. |
| dimensionFieldName | Field TypestringDescriptionRequired.The API name of the field for the dimension in the custom object that contains the generated advanced account forecast records. |
| dimensionSourceName | Field TypestringDescriptionThe name of the dimension source associated with the advanced account forecast set dimension record. |
| hierarchySequenceNumber | Field TypeintDescriptionRequired.The sequence number of the dimension source associated with the forecast set. |

## AdvAcctForecastMeasureDef

Represents information about the measures to display in the advanced account forecasts grid for the forecast set.

| Field Name | Description |
| --- | --- |
| advAcctForecastMeasureDefName | Field TypestringDescriptionRequired.The name of the definition for the advanced account forecast measure. |
| aggregationType | Field TypeAdvAcctFcstAggregationType (enumeration of type string)DescriptionRequired.The type of aggregation that’s used for calculating the advanced account forecast values.Possible values are:AVERAGEMAXIMUMMINIMUMSUMThe default value is SUM. |
| computationMethod | Field TypeAdvAcctFcstComputationMethod (enumeration of type string)DescriptionRequired.The method that’s used for calculating the advanced account forecast values.Values are:CUSTOMDATA_PROCESSING_ENGINE_DEFINITIONFORMULAThe default value is DATA_PROCESSING_ENGINE_DEFINITION. |
| forecastDataMeasureName | Field TypestringDescriptionRequired.The field of the facts object used for the advanced account forecast measure. |
| forecastMeasureName | Field TypestringDescriptionRequired.The name for the advanced account forecast measure to show on UI. |
| forecastMeasureType | Field TypeAdvAcctFcstMeasureType (enumeration of type string)DescriptionRequired.The measure type that’s used for the generated advanced forecast values.Possible values are:QUANTITYREVENUEThe default value is QUANTITY. |
| isAdjustmentTracked | Field TypebooleanDescriptionIndicates whether the adjustments made to the advanced account forecast values for this metric are tracked (true) or not (false). |

## AdvAcctFrcstDisplayGroup

Represents information about the groups for the advanced account forecast set measures or dimensions.

| Field Name | Description |
| --- | --- |
| advAcctFrcstDisplayGroupName | Field TypestringDescriptionRequired.The name of the advanced account forecast display group. |
| displayGroupItems | Field TypeAdvAcctFrcstDplyGroupItem[]DescriptionThe items associated with a display group for an advanced account forecast set. |
| displayGroupType | Field TypeAdvAcctFrcstDisplayGroupType (enumeration of type string)DescriptionThe category of the display group.Possible value is:MEASURE |
| isDefault | Field TypebooleanDescriptionIndicates whether the display group is the default group (true) or not (false). |
| userProfileName | Field TypestringDescriptionThe name of the profile for which the display group is applicable. |

## AdvAcctFrcstDplyGroupItem

Represents information about the items associated with a display group for an advanced account forecast set.

| Field Name | Description |
| --- | --- |
| advAcctFrcstDplyGroupItemName | Field TypestringDescriptionRequired.The name of the advanced account forecast display group that’s associated with the group item. |
| displayOrder | Field TypeintDescriptionRequired.The display order of the display group item. |
| measureReferenceName | Field TypestringDescriptionThe ID of the measure associated with the display group item. |

## Declarative Metadata Sample Definition

The following is an example of an AdvAccountForecastSet component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<AdvAccountForecastSet xmlns="http://soap.sforce.com/2006/04/metadata" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <calculationFrequency>Quarterly</calculationFrequency>
    <forecastAdjPeriods>
        <adjustmentDayCount>5</adjustmentDayCount>
        <frequency>Quarter</frequency>
        <profileName xsi:nil="true"/>
        <startDay>1</startDay>
    </forecastAdjPeriods>
    <forecastFormulas>
        <endPeriod>12</endPeriod>
        <formulaExpression>6</formulaExpression>
        <startPeriod>2</startPeriod>
        <formulaType>QUANTITY</formulaType>
    </forecastFormulas>
    <forecastPeriodGroupName>PeriodGroup1</forecastPeriodGroupName>
    <accountFieldName>Account</accountFieldName>
    <periodFieldName>Period</periodFieldName>
    <forecastQuantityFieldName>ForecastedQuantity</forecastQuantityFieldName>
    <forecastRevenueFieldName>ForecastedRevenue</forecastRevenueFieldName>
    <forecastFactObjectName>AdvAccountForecastFact</forecastFactObjectName>
    <forecastSetFieldName>AdvAcctForecastSetPartner</forecastSetFieldName>
    <rolloverFrequency>Monthly</rolloverFrequency>
    <forecastStatusFieldName>Status</forecastStatusFieldName>
    <description>sample forecast set</description>
    <regenerationDpeDefName xsi:nil="true"/>
    <rolloverDpeDefName xsi:nil="true"/>
    <recalculateDpeDefName xsi:nil="true"/>
    <generationDpeDefName xsi:nil="true"/>
    <status>Inactive</status>
    <forecastSetName>Forecast Set 1</forecastSetName>
    <dimensions>
        <dimensionFieldName>Account</dimensionFieldName>
        <dimensionSourceName>DimSource1</dimensionSourceName>
        <hierarchySequenceNumber>1</hierarchySequenceNumber>
        <advAcctForecastDimName>DimensionName</advAcctForecastDimName>
    </dimensions>
    <measureDefinitions>
        <forecastDataMeasureName>MeasureName</forecastDataMeasureName>
        <advAcctForecastMeasureDefName>Sample Def Name</advAcctForecastMeasureDefName>
        <isAdjustmentTracked>true</isAdjustmentTracked>
        <forecastMeasureName>Samplemeasure name</forecastMeasureName>
        <aggregationType>MINIMUM</aggregationType>
        <computationMethod>DATA_PROCESSING_ENGINE_DEFINITION</computationMethod>
        <forecastMeasureType>QUANTITY</forecastMeasureType>
    </measureDefinitions>
    <displayGroups>
        <advAcctFrcstDisplayGroupName>Sample Measure Group</advAcctFrcstDisplayGroupName>
        <displayGroupType>MEASURE</displayGroupType>
        <isDefault>false</isDefault>
        <userProfileName xsi:nil="true"/>
        <displayGroupItems>
            <advAcctFrcstDplyGroupItemName>Sample Quantity</advAcctFrcstDplyGroupItemName>
            <measureReferenceName>Sample Def Name</measureReferenceName>
            <displayOrder>1</displayOrder>
        </displayGroupItems>
    </displayGroups>
</AdvAccountForecastSet>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
       <members>*</members>
       <name>AdvAccountForecastSet</name>
    </types>
   <version>66.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)

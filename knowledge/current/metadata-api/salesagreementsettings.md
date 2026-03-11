---
title: "SalesAgreementSettings"
domain: metadata-api
topic: salesagreementsettings
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:45:55.433Z
keywords: [SalesAgreementSettings, File, Suffix, Directory, Location, Version, Fields, AdvAcctFrcstDisplayGroup, AdvAcctFrcstDplyGroupItem, AdvAcctForecastMeasureDef, ObjectMapping, ObjectMappingField, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest]
---

# SalesAgreementSettings

# SalesAgreementSettings

Represents settings that control the display of agreement terms metrics in sales agreements and the calculation of the actual quantity of products in sales agreements. These settings also control the approval of sales agreements.

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

In the package manifest, all organization settings metadata types are accessed using the Settings name. See [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.") for more details.

## File Suffix and Directory Location

SalesAgreementSettings values are stored in the SalesAgreementSettings.salesAgreementSetting file in the salesAgreementSettings directory.

## Version

SalesAgreementSettings components are available in API version 47.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| actualsCalculationMode | ActualsCalculationMode(enumeration of type string) | Required. Source from which the actual ordered quantity of a product in a sales agreement is calculated. Valid values are:DataProcessingEngine—Available in API version 63.0 and later.Manual: DefaultOrdersOrdersThroughContracts |
| decimalScale | int | Required. Number of decimal places applied to values in sales agreements. Available in API version 62.0 and later. |
| displayGroups | AdvAcctFrcstDisplayGroup | Represents information about the groups for the advanced account forecast set measures or dimensions. Available in API version 56.0 and later. |
| displayedAgreementTermsMetrics | string | Required. Metrics that are selected for display in the sales agreement terms in the specified sequence. There can be a maximum of 10 comma-separated metric names in this list. |
| futureActCalcSchedules | int | Required. Number of future schedules to include in actuals calculations in the sales agreement. Available in API version 63.0 and later. |
| measureDefinitions | AdvAcctForecastMeasureDef | Represents information about the measures to be displayed in the advanced account forecasts grid for the forecast set. Available in API version 56.0 and later. |
| objectMapping | ObjectMapping | Foreign key to ObjectMapping that maps fields from the input object of SalesAgreementSettings to fields in the output object of SalesAgreementSettings. |
| primaryNotifEmailAddress | string | The email address to which notifications are sent. |
| renewalPeriodDayCount | int | The number of days before the end date of a sales agreement from when the agreement can be renewed. Available in API version 50.0 and later. |
| secondaryNotifEmailAddress | string | The second email address to which notifications are sent. |

## AdvAcctFrcstDisplayGroup

Represents information about the groups for the advanced account forecast set measures or dimensions. Available in API version 56.0 and later.

| Field Name | Field Type | Description |
| --- | --- | --- |
| advAcctFrcstDisplayGroupName | string | Required. Name of the advanced account forecast display group. |
| displayGroupItems | AdvAcctFrcstDplyGroupItem | Represents information about the items associated with a display group for an advanced account forecast set. |
| displayGroupType | AdvAcctFrcstDisplayGroupType(enumeration of type string) | Category for the display group.Possible values are:MEASURE |
| isDefault | boolean | Indicates whether the display group is the default group (true) or not (false). The default value is false. |
| userProfileName | string | Profile for which the display group is applicable. |

## AdvAcctFrcstDplyGroupItem

Represents information about the items associated with a display group for an advanced account forecast set. Available in API version 56.0 and later.

| Field Name | Field Type | Description |
| --- | --- | --- |
| advAcctFrcstDplyGroupItemName | string | Required. Name of the advanced account forecast display group item. |
| displayOrder | string | Required. Display order of the display group item. |
| measureReferenceName | string | Name of the measure associated with the display group item. |

## AdvAcctForecastMeasureDef

Represents information about the measures to be displayed in the advanced account forecasts grid for the forecast set. Available in API version 56.0 and later.

| Field Name | Field Type | Description |
| --- | --- | --- |
| advAcctForecastMeasureDefName | string | Required. Name for the measure. |
| aggregationType | AdvAcctFcstAggregationType(enumeration of type string) | Required. Type of aggregation used for calculating advanced account forecast values.Possible values are:AVERAGEMAXIMUMMINIMUMSUM |
| computationMethod | AdvAcctFcstComputationMethodenumeration of type string) | Required. Method used for calculating advanced account forecast values.Possible values are:CUSTOMDATA_PROCESSING_ENGINE_DEFINITIONFORMULA |
| forecastDataMeasureName | string | Required. Field of the facts object used for this measure. |
| forecastMeasureName | string | Required. Name for the measure to show on UI. |
| forecastMeasureType | AdvAcctFcstMeasureType(enumeration of type string) | Required. Measure type used for the generated advanced forecast values.Possible values are:QUANTITYREVENUE |
| isAdjustmentTracked | boolean | Indicates whether the adjustments made to the advanced account forecast values for this metric are tracked (true) or not (false). The default value is false. |

## ObjectMapping

Represents a map of fields in the input object of SalesAgreementSettings to fields in the output object of SalesAgreementSettings. The input object is SalesAgreementProductSchedule. The output object is SalesAgreementProduct.

| Field Name | Field Type | Description |
| --- | --- | --- |
| inputObject | string | Required. The input object for the SalesAgreementSettings. SalesAgreementProductSchedule is the input object for the SalesAgreementSettings. |
| mappingFields | ObjectMappingField | The mapping of source object fields to target object fields for SalesAgreementSettings. |
| outputObject | string | Required. The output object for the SalesAgreementSettings. SalesAgreementProduct is the output object for the SalesAgreementSettings. |

## ObjectMappingField

A field name in the SalesAgreementProductSchedule object and the corresponding field name in the SalesAgreementProduct object.

For example, you can create a field named Revenue on the SalesAgreementProductSchedule object and a field named Total Revenue on the SalesAgreementProduct object. To view these field values in the agreement terms of a sales agreement, select the input object as SalesAgreementProductSchedule and the output object as SalesAgreementProduct. In this case, the input field is Revenue and the output field is Total Revenue.

| Field Name | Field Type | Description |
| --- | --- | --- |
| inputField | string | Required. Field in the object specified by the inputObject field in ObjectMapping. This field is mapped to the field in outputField, which is a field in the object specified by the outputObject field in ObjectMapping. |
| outputField | string | Required. Field in the object specified by the outputObject field in ObjectMapping. This field is mapped to the field name in inputField, which is a field in the object specified by the inputObject field in ObjectMapping. |

## Declarative Metadata Sample Definition

The following is an example of SalesAgreementSettings component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").
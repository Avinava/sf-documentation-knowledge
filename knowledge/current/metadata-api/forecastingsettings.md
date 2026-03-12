---
title: "ForecastingSettings"
domain: metadata-api
topic: forecastingsettings
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:39.654Z
estimatedTokens: 5895
keywords: [ForecastingSettings, Forecasts, settings, options, extends, Metadata, inherits, fullName, File, Suffix, Directory, Location, Version, ForecastingCategoryMapping, ForecastingDisplayedFamilySettings]
---

# ForecastingSettings

> Represents the Forecasts settings options. This
            type extends the Metadata metadata type and inherits its fullName
            field.

# ForecastingSettings

Represents the Forecasts settings options. This type extends the Metadata metadata type and inherits its fullName field.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

[ForecastingSettings](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_forecastingsettings.htm#meta_forecastingsettings) components are available in API version 28 and later. The structure of the [ForecastingSettings](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_forecastingsettings.htm#meta_forecastingsettings) type changed significantly in API version 30.0 and in API version 53.0.

In the package manifest, all organization settings metadata types are accessed using the Settings name. See [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.") for details.

## File Suffix and Directory Location

[ForecastingSettings](#meta_forecastingsettings "Represents the Forecasts settings options. This type extends the Metadata metadata type and inherits its fullName field.") values are stored in a single file named Forecasting.settings in the settings directory of the corresponding package directory. The .settings files are different from other named components because there’s only one settings file for each settings component.

## Version

[ForecastingSettings](#meta_forecastingsettings "Represents the Forecasts settings options. This type extends the Metadata metadata type and inherits its fullName field.") components are available in API version 28 and later. The structure of the [ForecastingSettings](#meta_forecastingsettings "Represents the Forecasts settings options. This type extends the Metadata metadata type and inherits its fullName field.") type changed significantly in API version 30.0 and in API version 53.0.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| displayCurrency | DisplayCurrency (enumeration of type string) | Removed. The currency for displaying forecasts; either the organization's corporate currency or each forecast owner's personal currency setting. The selected currency is the default used in forecasts and selected in setup. The selection must be one of the currencies enabled for use in the organization, and only one selection is allowed. The default is CORPORATE. The valid values are:CORPORATEPERSONALAvailable in API version 28.0 to 46.0. In API version 47.0 and later, use defaultToPersonalCurrency. |
| defaultToPersonalCurrency | boolean | If multicurrency is enabled, this field indicates whether the user’s personal currency is used in forecasts. If true (default), the user’s personal currency is used. If false, the corporate currency is used.Available in API version 47.0 and later. |
| enableForecasts | boolean | Indicates if Salesforce Forecasting is enabled or not. Set to true to enable and false to disable the functionality.Disabling Forecasts can result in data loss. Refer to Salesforce Help before disabling any functionality. |
| forecastingCategoryMappings | ForecastingCategoryMapping[] | A list of mappings associating forecast types with forecast rollups. As of Spring ’20 and later, only standard users with the View All Forecasts or Allow Forecasting permission or delegated forecast manager status can access this subtype. |
| forecastingDisplayedFamilySettings | ForecastingDisplayedFamilySettings[] | The product families chosen to allow forecasting on in Lightning Experience. This field is available in API version 40.0 and later. |
| forecastingSubmissionSettings | ForecastingSubmissionSettings | The submission options for forecasts. Available in API version 62.0 and later. |
| forecastingTypeSettings | ForecastingTypeSettings[] | A list of forecast types. For field values, see ForecastingTypeSettings. The maximum number of forecast types is four. |
| globalAdjustmentsSettings | AdjustmentsSettings[] | The adjustment options for forecasts. Available in API version 53.0 and later. In API version 52.0 and earlier, use the adjustmentsSettings field on ForecastingTypeSettings. |
| globalForecastRangeSettings | ForecastRangeSettings[] | The default periods and range selections in forecasts. Available in API version 53.0 and later. In API version 52.0 and earlier, use the forecastRangeSettings field on ForecastingTypeSettings. |
| globalQuotasSettings | QuotasSettings[] | Enables or disables quotas in Salesforce Forecasting. Available in API version 53.0 and later. In API version 52.0 and earlier, use the quotasSettings field on ForecastingTypeSettings. |

## ForecastingCategoryMapping

The category mappings for forecasts. This subtype appears eight times within the ForecastingSettings type. Each occurrence includes fields that specify a type of forecast category rollup, which forecast categories each rollup includes, and the weight of each forecast category in the rollup. Organizations using either cumulative forecast rollups or individual forecast category columns must include all eight occurrences of this subtype. As of Spring ’20 and later, only standard users with the View All Forecasts or Allow Forecasting permission or delegated forecast manager status can access this subtype.

| Field | Field Type | Description |
| --- | --- | --- |
| forecastingItemCategoryApiName | string | Required. This field specifies the API name of the rollup type. The valid values are:openpipelinebestcaseforecastcommitforecastpipelineonlybestcaseonlycommitonlyclosedonlyomittedonlycustomcategory |
| weightedSourceCategories | WeightedSourceCategory[] | This field can occur more than one time when specifying more than one forecast category to include in the rollup type. Each occurrence contains two subfields that specify a forecast category to include in the forecast rollup type and its weight. Some rollup types include more than one forecast category. This list shows the forecast categories that are included in each rollup type.Rollup: openpipeline, Forecast categories: pipeline, best case, commitRollup: bestcaseforecast, Forecast categories: best case, commit, closedRollup: commitforecast, Forecast categories: commit, closedRollup: pipelineonly, Forecast categories: pipelineRollup: bestcaseonly, Forecast categories: best caseRollup: commitonly, Forecast categories: commitRollup: closedonly, Forecast categories: closedRollup: omittedonly, Forecast categories: omittedRollup: customcategory, Forecast categories: custom category |

## ForecastingDisplayedFamilySettings

The product families that an admin chooses to allow forecasting on in Lightning Experience. This field is available in API version 40.0 and later.

| Field | Field Type | Description |
| --- | --- | --- |
| productFamily | string | The product family available to forecast on. Each product family is unique. |

## ForecastingSubmissionSettings

The setting allows forecast users to submit their forecast numbers at a point in time.

| Field | Field Type | Description |
| --- | --- | --- |
| allowForecastingSubmissions | boolean | Required. Indicates whether forecast submissions are allowed in forecasts. |

## ForecastingTypeSettings

The settings for each forecast type. An organization can have up to four forecast types active. If you omit a previously enabled forecast type that has a minimum API version less than or equal to the metadata package version, its quota and adjustment data is deleted from the org.

Omitting a forecast type field from the XML can deactivate that forecast type: if the forecast type was available in the release specified by the XML package version, that forecast type is deactivated and its quota and adjustment data are deleted.

| Field Name | Field Type | Description |
| --- | --- | --- |
| active | boolean | Required. Indicates whether the forecast type specified in the name field is active.Setting the active field to false purges all forecasting data, adjustments, and quotas for the forecast type. When active is set to true, some values on the Forecasts tab don’t appear immediately. An in-process con appears to indicate that the values are being calculated. |
| adjustmentsSettings | AdjustmentsSettings | Removed. This field enables or disables the adjustments option in forecasts. In API version 53.0 and later, use globalAdjustmentsSettings. |
| displayedCategoryApiNames | string | This read-only field appears four times to specify the four forecast rollup categories displayed in the Forecasts tab, for either cumulative forecast rollups, or individual forecast category rollups. Always use the same 4 values for both displayedCategoryApiNames and forecastedCategoryApiNames.Valid values for organizations using cumulative forecast rollups:openpipelinebestcaseforecastcommitforecastclosedonlyValid values for organizations using individual forecast category rollups:pipelineonlybestcaseonlycommitonlyclosedonly |
| forecastedCategoryApiNames | string | This field appears four times to specify the four forecast rollup categories used in the organization, for either cumulative forecast rollups, or individual forecast category rollups.Valid values for organizations using cumulative forecast rollups:openpipelinebestcaseforecastcommitforecastclosedonlycustomcategoryValid values for organizations using individual forecast category rollups:pipelineonlybestcaseonlycommitonlyclosedonlycustomcategoryChanging from one set of four values to the other changes the organization setting for Enable Cumulative Forecast Rollups in Setup. If this field is omitted, the setting isn’t changed. |
| forecastingDateType | ForecastingDateType (enumeration of type string) | Required. The date type that forecast amounts are based on.Valid values are:OpportunityCloseDate (default)ProductDateScheduleDateOLIMeasureCloseDateOnlyProductDateOnlyScheduleDateOnlyOpportunityCustomDate (Available in API version 57.0 and later)OLIMeasureOppCustomDateOnly (Available in API version 57.0 and later)Available in API version 42.0 and later. In API version 42.0 only, date types are read only and available only via API. |
| forecastRangeSettings | ForecastRangeSettings | Removed. The default periods and range selections in forecasts. In API version 53.0 and later, use globalForecastRangeSettings. |
| hasProductFamily | boolean | Required. Indicates whether the forecasting type has product family forecasts enabled. Available in API version 41.0 and later. |
| isAmount | boolean | Required. This read-only field indicates whether the forecast type is based on revenue amounts. The value of isAmount is always the opposite of the value of isQuantity. |
| isAvailable | boolean | Required. This read-only field indicates whether the forecast type can currently be used in the organization. For example, the revenue splits forecast type can’t be used in an organization that doesn’t have Opportunity Splits enabled. |
| isQuantity | boolean | Required. This read-only field indicates whether the forecast type is based on product quantities. The value of isQuantity is always the opposite of the value of isAmount. |
| managerAdjustableCategoryApiNames | string | This read-only field appears twice to specify the two forecast rollup categories that forecast managers can adjust in the organization for either cumulative forecast rollups or individual forecast category rollups. This field can only be used when the enableAdjustments field contains a value of true. If both the managerAdjustableCategoryApiNames and ownerAdjustableCategoryApiNames fields are being used, they must contain the same two values. Their values must also be consistent with the values of the enableAdjustments and enableOwnerAdjustments fields.Valid values for organizations using cumulative forecast rollups:bestcaseforecastcommitforecastValid values for organizations using individual forecast category rollups:bestcaseonlycommitonly |
| masterLabel | string | Required. This read-only field indicates the UI label for the forecast type. |
| name | string | Required. The name of the forecast type. Each forecast type requires a specific string.Using ForecastingSettings, you can activate only these forecast types.LineItemQuantityProductDate: Product Families - Quantity by product date. Available in API versions 47.0 and later.LineItemQuantityScheduleDate: Product Families - Quantity by schedule date. Available in API versions 47.0 and later.LineItemRevenueProductDate: Product Families - Revenue by product date. Available in API versions 47.0 and later.LineItemRevenueScheduleDate: Product Families - Revenue by schedule date. Available in API versions 47.0 and later.OpportunityLineItemQuantity: Product Families - Quantity.OpportunityLineItemRevenue: Product Families - Revenue.OpportunityOverlayRevenue: Opportunity Overlay Splits - Revenue.OpportunityQuantity: Opportunities - Quantity.OpportunityQuantityProductDate: Opportunities - Quantity by product date. Available in API versions 43.0 and later.OpportunityQuantityScheduleDate: Opportunities - Quantity by schedule date. Available in API versions 43.0 and later.OpportunityRevenue: Opportunities - Revenue.OpportunityRevenueProductDate: Opportunities - Revenue by product date. Available in API versions 43.0 and later.OpportunityRevenueScheduleDate: Opportunities - Revenue by schedule date. Available in API versions 43.0 and later.OpportunitySplitRevenue: Opportunity Revenue Splits - Revenue.Territory_Model_NameN: Territories, where Territory_Model_Name is the name of your active territory model in the API. Territory_Model_Name can be followed by N, an auto-generated number that distinguishes between territory forecast types. Available in API versions 44.0 and later.Territory_Model_NameN_ProductFamily: Deprecated. Territories - Product Families, where Territory_Model_Name is the name of your active territory model in the API and can be followed by N, an auto-generated number that distinguishes between territory forecast types. Available in API versions 45.0 and 46.0. For territory models created in API version 47.0 and later, Territory_Model_NameN is used.The name of a custom opportunity split type that has been enabled as a forecast type. Custom split types are based on currency fields, which can contain revenue amounts only.To create and manage other forecast types in API version 52.0 and later, use ForecastingSourceDefinition, ForecastingType, and ForecastingTypeSource. |
| opportunityListFieldsLabelMappings | OpportunityListFieldsLabelMapping | A read-only list of the API names and UI labels for all fields on the Opportunity object. |
| opportunityListFields​SelectedSettings | OpportunityListFields​SelectedSettings | Required. The fields selected to appear in the opportunity pane of the forecast page for the forecast type. One of the selected fields must be Opportunity Name. You can select up to 15 fields. |
| opportunityListFields​UnselectedSettings | OpportunityListFields​UnselectedSettings | Required. The fields not selected to appear in the opportunity pane of the forecast page for the forecast type. |
| opportunitySplitName | string | Indicates whether the forecasting type has a split type, and if so, the name of the split type. Available in API version 41.0 and later. |
| ownerAdjustableCategoryApiNames | string | This read-only field appears twice to specify the two forecast rollup categories that forecast owners can adjust in the organization, for either cumulative forecast rollups, or individual forecast category rollups. This field can only be used when the enableOwnerAdjustments field contains a value of true. If both the managerAdjustableCategoryApiNames and ownerAdjustableCategoryApiNames fields are being used, they must contain the same two values. Their values must also be consistent with the values of the enableAdjustments and enableOwnerAdjustments fields.Valid values for organizations using cumulative forecast rollups:bestcaseforecastcommitforecastValid values for organizations using individual forecast category rollups:bestcaseonlycommitonly |
| quotasSettings | QuotasSettings | Removed. This field enables or disables the quota option in forecasts. In API version 53.0 and later, use globalQuotasSettings. |
| territory2ModelName | string | Indicates whether the forecasting type has a Territory2 model, and if so, the name of the Territory2 model. Available in API version 41.0 and later. |

## AdjustmentsSettings

The adjustment options for forecasts.

| Field | Field Type | Description |
| --- | --- | --- |
| allowExpandedColumns | boolean | Required. Set to true to show separate columns on the forecasts page for each adjustable forecast category and false to show adjustments when a user hovers over a forecast category. All forecast types must contain the same allowExpandedColumns value. |
| enableAdjustments | boolean | Required. Set to true to enable manager adjustments and false to disable them. All forecast types must contain the same enableAdjustments value.Disabling adjustments results in adjustment data being purged. |
| enableOwnerAdjustments | boolean | Required. Set to true to enable owner adjustments for forecasts and false to disable them. All forecast types must contain the same enableOwnerAdjustments value.Disabling adjustments results in forecast adjustment data being purged. |

## ForecastingGroup

The group based on a custom picklist that is used to group or roll up forecast totals on the forecasts page. For example, group forecasts using a custom picklist for industry or sales type.

| Field | Field Type | Description |
| --- | --- | --- |
| developerName | string | Required. The API name that identifies the forecast group. |
| forecastingGroupItems | ForecastingGroupItem | Required. The picklist values for the forecast type. Possible values include the picklist values defined in groupField. |
| groupField | string | Required. The field name of the custom picklist used as a group. Possible values include custom, single-selection picklists available in sourceObject. |
| masterLabel | string | Required. This read-only field indicates the UI label for the forecast group. |
| sourceObject | string | Required. The source object for the picklist for the forecast group. Possible values include:OpportunityOpportunityLineItemProduct2 |

## ForecastingGroupItem

The picklist value that is specified as the forecasting group for a forecast type, and the order it displays in on the forecasts page.

| Field | Field Type | Description |
| --- | --- | --- |
| displayPosition | int | Required. Indicates the display order of the values on the forecasts page. |
| sourceAPIValue | string | Required. The API name is that’s derived from the group value. |

## ForecastRangeSettings

The default periods and range selections in forecasts. Users can forecast up to 15 months, 15 fiscal periods, or 8 quarters in the future or past. If your forecast range includes the current month, period, or quarter, the forecasts page shows the current month, period, or quarter by default. If not, the first month, period, or quarter of the range is selected. All forecast types must contain the same forecastRangeSettings field values.

| Field | Field Type | Description |
| --- | --- | --- |
| beginning | int | Required. Indicates the beginning month or quarter to display by default. |
| displaying | int | Required. Indicates the number of months or quarters to display by default. The maximum number of months is 12 and quarters is 8. |
| periodType | PeriodTypes (enumeration of type string) | Required. Indicates what type of period to use. Valid values are:MonthQuarterWeekYear |

## OpportunityListFieldsLabelMapping

A read-only list of the API names and UI labels for all fields on the Opportunity object.

| Field | Field Type | Description |
| --- | --- | --- |
| field | string | Required. The API name of the Opportunity field. |
| label | string | Required. The UI label of the Opportunity field. |

## OpportunityListFields​SelectedSettings

The fields selected to appear in the opportunity pane of the forecast page for the forecast type. One of the selected fields must be **Opportunity Name**. You can select up to 15 fields.

| Field | Field Type | Description |
| --- | --- | --- |
| field | string | Specifies names of fields to display in the opportunity pane. |

## OpportunityListFields​UnselectedSettings

The fields *not* selected to appear in the opportunity pane of the forecast page for the forecast type.

| Field | Field Type | Description |
| --- | --- | --- |
| field | string | Specifies names of fields not displayed in the opportunity pane. |

## QuotasSettings

[QuotasSettings](#QuotasSettings) indicates if quotas are available in forecasts.

| Field | Field Type | Description |
| --- | --- | --- |
| showQuotas | boolean | Required. Set to true to enable quotas. All forecast types must contain the same showQuotas field value. |

## WeightedSourceCategory

This field can occur more than one time when specifying more than one forecast category to include in the rollup type. Each occurrence contains two subfields that specify a forecast category to include in the forecast rollup type and its weight. Some rollup types include more than one forecast category. This table shows the forecast categories that are included in each rollup type.

| Field | Field Type | Description |
| --- | --- | --- |
| sourceCategoryApiName | string | Required. Specifies the API name of a forecast category to include in the rollup type. The valid values are.pipelinebest casecommitclosedomittedcustomcategory |
| weight | double | Required. Specifies the weight given to the forecast category when calculating the forecast for the rollup type. The only supported value is 1.0. |

## Declarative Metadata Sample Definition

The following is an example of a [ForecastingSettings](#meta_forecastingsettings "Represents the Forecasts settings options. This type extends the Metadata metadata type and inherits its fullName field.") component that enables the Opportunity-Revenue forecast type, adjustments, owner adjustments, and quotas, and changes forecast range settings:

```

```

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type."). For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```apex
<?xml version="1.0" encoding="UTF-8"?>
<ForecastingSettings xmlns="http://soap.sforce.com/2006/04/metadata">
    <defaultToPersonalCurrency>false</defaultToPersonalCurrency>
    <enableForecasts>true</enableForecasts>    
    <globalAdjustmentsSettings>
        <enableAdjustments>true</enableAdjustments>
        <enableOwnerAdjustments>true</enableOwnerAdjustments>
    </globalAdjustmentsSettings>
    <globalForecastRangeSettings>
        <beginning>1</beginning>
        <displaying>6</displaying>
        <periodType>Month</periodType>
    </globalForecastRangeSettings>
    <globalQuotasSettings>
        <showQuotas>true</showQuotas>
    </globalQuotasSettings>
    <forecastingCategoryMappings>
        <forecastingItemCategoryApiName>commitonly</forecastingItemCategoryApiName>
        <weightedSourceCategories>
            <sourceCategoryApiName>commit</sourceCategoryApiName>
            <weight>1.0</weight>
        </weightedSourceCategories>
    </forecastingCategoryMappings>
    <forecastingCategoryMappings>
        <forecastingItemCategoryApiName>closedonly</forecastingItemCategoryApiName>
        <weightedSourceCategories>
            <sourceCategoryApiName>closed</sourceCategoryApiName>
            <weight>1.0</weight>
        </weightedSourceCategories>
    </forecastingCategoryMappings>
    <forecastingCategoryMappings>
        <forecastingItemCategoryApiName>openpipeline</forecastingItemCategoryApiName>
        <weightedSourceCategories>
            <sourceCategoryApiName>most likely</sourceCategoryApiName>
            <weight>1.0</weight>
        </weightedSourceCategories>
        <weightedSourceCategories>
            <sourceCategoryApiName>commit</sourceCategoryApiName>
            <weight>1.0</weight>
        </weightedSourceCategories>
        <weightedSourceCategories>
            <sourceCategoryApiName>pipeline</sourceCategoryApiName>
            <weight>1.0</weight>
        </weightedSourceCategories>
        <weightedSourceCategories>
            <sourceCategoryApiName>best case</sourceCategoryApiName>
            <weight>1.0</weight>
        </weightedSourceCategories>
    </forecastingCategoryMappings>
    <forecastingCategoryMappings>
        <forecastingItemCategoryApiName>omittedonly</forecastingItemCategoryApiName>
        <weightedSourceCategories>
            <sourceCategoryApiName>omitted</sourceCategoryApiName>
            <weight>1.0</weight>
        </weightedSourceCategories>
    </forecastingCategoryMappings>
    <forecastingCategoryMappings>
        <forecastingItemCategoryApiName>bestcaseforecast</forecastingItemCategoryApiName>
        <weightedSourceCategories>
            <sourceCategoryApiName>most likely</sourceCategoryApiName>
            <weight>1.0</weight>
        </weightedSourceCategories>
        <weightedSourceCategories>
            <sourceCategoryApiName>commit</sourceCategoryApiName>
            <weight>1.0</weight>
        </weightedSourceCategories>
        <weightedSourceCategories>
            <sourceCategoryApiName>closed</sourceCategoryApiName>
            <weight>1.0</weight>
        </weightedSourceCategories>
        <weightedSourceCategories>
            <sourceCategoryApiName>best case</sourceCategoryApiName>
            <weight>1.0</weight>
        </weightedSourceCategories>
    </forecastingCategoryMappings>
    <forecastingCategoryMappings>
        <forecastingItemCategoryApiName>pipelineonly</forecastingItemCategoryApiName>
        <weightedSourceCategories>
            <sourceCategoryApiName>pipeline</sourceCategoryApiName>
            <weight>1.0</weight>
        </weightedSourceCategories>
    </forecastingCategoryMappings>
    <forecastingCategoryMappings>
        <forecastingItemCategoryApiName>commitforecast</forecastingItemCategoryApiName>
        <weightedSourceCategories>
            <sourceCategoryApiName>closed</sourceCategoryApiName>
            <weight>1.0</weight>
        </weightedSourceCategories>
        <weightedSourceCategories>
            <sourceCategoryApiName>commit</sourceCategoryApiName>
            <weight>1.0</weight>
        </weightedSourceCategories>
    </forecastingCategoryMappings>
    <forecastingCategoryMappings>
        <forecastingItemCategoryApiName>bestcaseonly</forecastingItemCategoryApiName>
        <weightedSourceCategories>
            <sourceCategoryApiName>best case</sourceCategoryApiName>
            <weight>1.0</weight>
        </weightedSourceCategories>
    </forecastingCategoryMappings>
    <forecastingTypeSettings>
	<name>OpportunityRevenue</name>
        <active>true</active>    
        <hasProductFamily>false</hasProductFamily>
        <isAmount>true</isAmount>
        <isAvailable>true</isAvailable>
        <isQuantity>false</isQuantity>
        <managerAdjustableCategoryApiNames>commitonly</managerAdjustableCategoryApiNames>
        <managerAdjustableCategoryApiNames>bestcaseonly</managerAdjustableCategoryApiNames>
        <masterLabel>Opportunities</masterLabel>
	<displayedCategoryApiNames>closedonly</displayedCategoryApiNames>
        <displayedCategoryApiNames>commitonly</displayedCategoryApiNames>
        <displayedCategoryApiNames>bestcaseonly</displayedCategoryApiNames>
        <displayedCategoryApiNames>pipelineonly</displayedCategoryApiNames>
        <forecastedCategoryApiNames>commitonly</forecastedCategoryApiNames>
        <forecastedCategoryApiNames>closedonly</forecastedCategoryApiNames>
        <forecastedCategoryApiNames>pipelineonly</forecastedCategoryApiNames>
        <forecastedCategoryApiNames>bestcaseonly</forecastedCategoryApiNames>
        <forecastingDateType>OpportunityCloseDate</forecastingDateType>
        <opportunityListFieldsSelectedSettings>
            <field>OPPORTUNITY.NAME</field>
        </opportunityListFieldsSelectedSettings>
    </forecastingTypeSettings>
</ForecastingSettings>
```

## Related Topics

- Settings (atlas.en-us.api_meta.meta/api_meta/meta_settings.htm)
- enumeration (atlas.en-us.api_meta.meta/api_meta/meta_objects_intro.htm)
- ForecastingSourceDefinition (atlas.en-us.api_meta.meta/api_meta/meta_forecastingsourcedefinition.htm)
- ForecastingType (atlas.en-us.api_meta.meta/api_meta/meta_forecastingtype.htm)
- ForecastingTypeSource (atlas.en-us.api_meta.meta/api_meta/meta_forecastingtypesource.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)

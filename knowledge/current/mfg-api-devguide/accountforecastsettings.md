---
title: "AccountForecastSettings"
domain: mfg-api-devguide
topic: accountforecastsettings
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:55.134Z
estimatedTokens: 2595
keywords: [AccountForecastSettings, settings, define, generation, account, forecasts, their, display, account’s, record, periods, forecast, edited, formula, definitions]
---

# AccountForecastSettings

> Represents settings that define the
      generation of account forecasts and their display on the account’s record page. These settings
      also define the periods during which the account forecast values can be edited and the formula
      definitions for account forecast calculations.

# AccountForecastSettings

Represents settings that define the generation of account forecasts and their display on the account’s record page. These settings also define the periods during which the account forecast values can be edited and the formula definitions for account forecast calculations.

In the package manifest, all organization settings metadata types are accessed using the Settings name. See Settings for more details.

This type extends the Metadata metadata type and inherits its fullName field.

## File Suffix and Directory Location

AccountForecastSettings values are stored in the AccountForecastSettings.accountForecastSetting file in the accountForecastSettings folder.

## Version

AccountForecastSettings components are available in API version 47.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| accountFilterId | string | Specifies the list view having a filtered list of accounts. Only the accounts in the entered list view are eligible for account forecasting. Available in API version 49.0 and later. |
| accountForecastFormulas | AccountForecastFormula | Holds the formula for quantity and revenue metrics based on sales agreements, orders, opportunities, and account metrics. This formula is not derived. It is defined by the admin user. There can be one or more formulas for every Salesforce org. |
| acctPrdctPrdFrcstVolCnt |  | The number of existing records in the AccountProductPeriodForecast object. Available in API version 49.0 and later. |
| calculationFrequency | CalculationFrequency(enumeration of type string) | Required. Source from which frequency of account forecast recalculation is derived. Valid values are:MonthlyQuarterlyYearlyWeekly—This value is available in API version 55.0 and later. |
| displayDuration | int | Required. Number of periods for which forecast is generated and displayed. |
| displayedForecastMetrics | string | Required. The quantity metrics that are selected for display in the account forecast in the specified sequence. There can be a maximum of 10 comma-separated metric names in this list. |
| displayedRevenueMetrics | string | Required. The revenue metrics that are selected for display in the account forecast in the specified sequence. There can be a maximum of 10 comma-separated metric names in this list. |
| editableAtStartOfPeriod | boolean | Required. Indicates whether the account forecast can be adjusted at the start of the adjustment period (true) or cannot be adjusted at the start of the adjustment period (false). |
| editsAllowedFor | int | Required. Number of days from which the adjustment period is derived. |
| forecastFrequency | ForecastFrequency(enumeration of type string) | Required. Source from which frequency of account forecast generation is derived. You can select a start period from when to consider data for account forecast generation and the number of periods for which forecast is generated. Valid values are:MonthlyQuarterlyYearlyWeekly—This value is available in API version 55.0 and later. |
| objectMapping | ObjectMapping | Foreign key to ObjectMapping that maps fields from the input object of AccountForecastSettings to fields in the output object of AccountForecastSettings. |
| opportunityProbabilityEnabled | boolean | Indicates whether to use the probability of opportunities associated with accounts to calculate forecast values (true) or not use the probability of opportunities associated with accounts to calculate forecast (false). Available in API version 50.0 and later. |
| primaryNotifEmailAddress | string | The email address to which notifications are sent. |
| productFilterId |  | Specifies the list view having a filtered list of products. Only the products in the entered list view are valid for account forecasting. Available in API version 49.0 and later. |
| recalculateAllFrcstCnt | int | The number of times account forecasts are recalculated for all the eligible accounts in an org. Available in API version 49.0 and later. |
| regenerateForecastCnt | int | Number of times account forecasts are regenerated for all the eligible accounts in an org. Available in API version 49.0 and later. |
| salesAgreementFilterId | string | Specifies the list view having a filtered list of sales agreements. Only the sales agreements in the entered list view are eligible for account forecasting. Available in API version 50.0 and later. |
| secondaryNotifEmailAddress | string | The second email address to which notifications are sent. |
| startingPeriod | int | Required. Number of periods to go back from the current date for account forecast generation. |

## AccountForecastFormula

Holds the formula for quantity and revenue metrics based on sales agreements, orders, opportunities, and account metrics. This formula is not derived. It is defined by the admin user. There can be one or more formulas for every Salesforce org.

| Field Name | Field Type | Description |
| --- | --- | --- |
| endingPeriod | int | Required. The period until which the forecast formula is effective. |
| formula | string | Required. The formula based on which the AccountProductPeriodForecast values are calculated. |
| formulaType | FormulaType(enumeration of type string) | Required. Source from which the formula type is derived. Valid values are:QUANTITYREVENUE |
| startingPeriod | int | Required. The period from which the forecast formula is effective. |

## ObjectMapping

Represents a map of fields in the input object of AccountForecastSettings to fields in the output object of AccountForecastSettings. The input object is AccountProductPeriodForecast. The output object is AccountProductForecast.

| Field Name | Field Type | Description |
| --- | --- | --- |
| inputObject | string | Required. The input object for AccountForecastSettings. AccountProductPeriodForecast is the input object for the AccountForecastSettings. |
| mappingFields |  | The mapping of source object fields to target object fields for AccountForecastSettings. |
| outputObject | string | Required. The output object for the AccountForecastSettings. AccountProductForecast is the output object for the AccountForecastSettings. |

## ObjectMappingField

A field name in the AccountProductPeriodForecast object and the corresponding field name in the AccountProductForecast object.

For example, you can create a field named Profit on the AccountProductPeriodForecast object and a field named Total Profit on the AccountProductForecast object. To view these field values in the account forecast, select the input object as AccountProductPeriodForecast and the output object as AccountProductForecast. In this case, the input field is Profit and the output field is Total Profit.

| Field Name | Field Type | Description |
| --- | --- | --- |
| inputField | string | Required. Field in the object specified by theinputObject field in ObjectMapping. This field is mapped to the field in outputField, which is a field in the object specified by the outputObject field in ObjectMapping. |
| outputField | string | Required. Field in the object specified by the outputObject field in ObjectMapping. The field is mapped to the field name in inputField, which is a field in the object specified by the inputObject in ObjectMapping. |

## ListView

ListView allows you to see a filtered list of records, such as contacts, accounts, or custom objects.

| Field | Field Type | Description |
| --- | --- | --- |
| booleanFilter | string | This field represents an Advanced Option for a filter. Advanced Options in filters allow you to build up filtering conditions that use a mixture of AND and OR boolean operators across multiple filter line items. For example, (1 AND 2) OR 3 finds records that match both the first two filter line items or the third. |
| columns | string[] | The list of fields in the list view. The field name relative to the object name, for example MyCustomField__c, is specified for each custom field.NoteField names in the ListView columns don’t always match their API name counterparts. If person accounts are enabled in your organization, standard fields merged from a contact into an account start with the PC_ prefix, while the corresponding API name starts with the Person prefix. For example, the ListView column name is PC_Email for a corresponding API field name of PersonEmail. |
| division | string | If your organization uses divisions to segment data and you’ve got the “Affected by Divisions” permission, records in the list view must match this division. This field is only available if you’re searching all records.This field is available in API version 17.0 and later. |
| filterScope | FilterScope (enumeration of type string) | Required. This field indicates whether you’re filtering by owner or viewing all records. |
| filters | ListViewFilter[] | The list of filter line items. |
| fullName | string | Required. Inherited from Metadata, this field is defined in the WSDL for this metadata type. It must be specified when creating, updating, or deleting. See createMetadata() to see an example of this field specified for a call. |
| label | string | Required. The list view name. |
| language | Language | The language used for filtering if your organization uses the Translation Workbench and you’re using the startsWith or contains operator. The values entered as search terms must be in the same language as the filter language.For a list of valid language values, see Language.This field is available in API version 17.0 and later. |
| queue | string | The name of a queue. Objects are sometimes assigned to a queue so that the users who have access to the queue can monitor and manage them. When you create a queue, a corresponding list view is automatically created. See “Create Queues” in Salesforce Help. |
| sharedTo | SharedTo | Sharing access for the list view.This field is available in API version 17.0 and later. |

## Declarative Metadata Sample Definition

The following is an example of a AccountForecastSettings metadata file.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see Deploying and Retrieving Metadata with the Zip File.

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
 <AccountForecastSettings xmlns="http://soap.sforce.com/2006/04/metadata">
     <accountForecastFormulas>
         <endingPeriod>12</endingPeriod>
         <formula>SalesAgreementPlannedQuantity + OpportunityQuantity </formula>
         <formulaType>QUANTITY</formulaType>
         <startingPeriod>1</startingPeriod>
     </accountForecastFormulas>
     <acctPrdctPrdFrcstVolCnt>0</acctPrdctPrdFrcstVolCnt>
     <calculationFrequency>QUARTERLY</calculationFrequency>
     <displayDuration>12</displayDuration>
     <displayedForecastMetrics>OpportunityQuantity,CurrentOrdersQuantity,SalesAgreementPlannedQuantity</displayedForecastMetrics>
     <displayedRevenueMetrics>OpportunityRevenue,CurrentOrdersRevenue,SalesAgreementPlannedRevenue</displayedRevenueMetrics>
     <editableAtStartOfPeriod>true</editableAtStartOfPeriod>
     <editsAllowedFor>15</editsAllowedFor>
     <forecastFrequency>MONTHLY</forecastFrequency>
     <startingPeriod>3</startingPeriod>
     <primaryNotifEmailAddress>abc@example.com</primaryNotifEmailAddress>
     <regenerateForecastCnt>0</regenerateForecastCnt>
     <recalculateAllFrcstCnt>0</recalculateAllFrcstCnt>
     <secondaryNotifEmailAddress>xyz@example.com</secondaryNotifEmailAddress>
     <objectMapping>
             <inputObject>AccountProductPeriodForecast</inputObject>
             <mappingFields>
                 <inputField>APPF1__c</inputField>
                 <outputField>APF1__c</outputField>
             </mappingFields>
             <outputObject>AccountProductForecast</outputObject>
     </objectMapping>
 </AccountForecastSettings>
```

```
<?xml version="1.0" encoding="UTF-8"?>
 <Package xmlns="http://soap.sforce.com/2006/04/metadata">
     <types>
         <members>AccountProductForecast.APF1__c</members>
         <members>AccountProductPeriodForecast.APPF1__c</members>
         <name>CustomField</name>
     </types>
     <types>
         <members>*</members>
         <name>AccountForecastSettings</name>
     </types>
     <version>47.0</version>
 </Package>
```

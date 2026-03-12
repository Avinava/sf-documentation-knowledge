---
title: "AdvAccountForecastSet"
domain: mfg-api-devguide
topic: advaccountforecastset
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:55.104Z
estimatedTokens: 2559
keywords: [AdvAccountForecastSet, forecast, define, configurations, business, unit, different, groups, accounts, separate, account, level, focus, account-specific, data, collection, advanced, API, version, 53.0]
---

# AdvAccountForecastSet

> Represents a collection of fields to set up an advanced account forecast
         set. This object is available in API version 53.0 and later.

# AdvAccountForecastSet

Represents a collection of fields to set up an advanced account forecast set. This object is available in API version 53.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountFieldName | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe field name for the account in the advanced account forecast fact record.Possible values are:AccountId—Advanced Account Forecast Fact:Account IDAcctHierAAFChildAccount__c—Advanced Account Forecast Fact:Child AccountAcctHierAAFParentAccount__c—Advanced Account Forecast Fact:Parent AccountAdvAcctForecastSetPartnerId—Advanced Account Forecast Fact:Advanced Account Forecast Set Partner IDAdvAcctForecastSetUseId—Advanced Account Forecast Fact:Advanced Account Forecast Set Use IDCH_ParentCategory__c—Advanced Account Forecast Fact:Parent CategoryCH_ProductCategory__c—Advanced Account Forecast Fact:Product CategoryCreatedById—Advanced Account Forecast Fact:Created By IDLastModifiedById—Advanced Account Forecast Fact:Last Modified By IDManufacturingProgramId—Manufacturing Program Variant Forecast Fact:Manufacturing Program IDOwnerId—Advanced Account Forecast Fact:Owner IDPeriodId—Advanced Account Forecast Fact:Period IDProductId—Advanced Account Forecast Fact:Product IDUserRecordAccessId—Advanced Account Forecast Fact:Object Access Level ID |
| CalculationFrequency | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe frequency at which the forecast set is recalculated automatically.Possible values are:MonthlyQuarterlyWeeklyYearlyThe default value is Monthly. |
| Description | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the advanced account forecast set record. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe name of the advanced account forecast set record. |
| ForecastFactObjectName | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe API Name of the object used to store the forecast facts.Possible values are:AdvAccountForecastFact—Advanced Account Forecast FactMfgProgramCpntFrcstFact—Manufacturing Program Component Forecast FactMfgProgramForecastFact—Manufacturing Program Forecast FactMfgProgramVariantFrcstFact—Manufacturing Program Variant Forecast Fact |
| ForecastPeriodGroupId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe forecast period group associated with the advanced account forecast set.This is a relationship field.Relationship NameForecastPeriodGroupRelationship TypeLookupRefers ToAdvAcctForecastPeriodGroup |
| ForecastQuantityFieldName | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe field name for the forecast quantity in the advanced account forecast fact record.Possible values are:AcctHierAAFAdjustedAmount__c—Advanced Account Forecast Fact:Adjusted AmountAcctHierAAFAdjustedQuantity__c—Advanced Account Forecast Fact:Adjusted QuantityAcctHierAAFCountryManagerAmount__c—Advanced Account Forecast Fact:Country Manager AmountAcctHierAAFCountryManagerQuantity__c—Advanced Account Forecast Fact:Country Manager QuantityAcctHierAAFRegionalManagerAmount__c—Advanced Account Forecast Fact:Regional Manager AmountAcctHierAAFRegionalManagerQuantity__c—Advanced Account Forecast Fact:Regional Manager QuantityActualGrossMarginPercent__c—Advanced Account Forecast Fact:Actual Gross Margin PercentActualProfit__c—Advanced Account Forecast Fact:Actual ProfitAdjustedForecastedQuantity—Manufacturing Program Variant Forecast Fact:Adjusted Forecasted QuantityAdjustedForecastedRevenue—Manufacturing Program Forecast Fact:Adjusted Forecasted RevenueCH_AdjustedForecastedQuantity__c—Advanced Account Forecast Fact:Adjusted Forecasted QuantityCH_AdjustedForecastedRevenue__c—Advanced Account Forecast Fact:Adjusted Forecasted RevenueCH_SalesAgreementQuantityFromCategories__c—Advanced Account Forecast Fact:Sales Agreement Quantity from CategoriesCH_SalesAgreementQuantityFromProducts__c—Advanced Account Forecast Fact:Sales Agreement Quantity from ProductsCH_SalesAgreementRevenueFromCategories__c—Advanced Account Forecast Fact:Sales Agreement Revenue from CategoriesCH_SalesAgreementRevenueFromProducts__c—Advanced Account Forecast Fact:Sales Agreement Revenue from ProductsCostPerUnit__c—Advanced Account Forecast Fact:Cost Per UnitExpectedProfitPerUnit—Manufacturing Program Component Forecast Fact:Expected Profit Per UnitExpectedProfitPercent—Manufacturing Program Component Forecast Fact:Expected Profit PercentExpectedRevenuePerUnit—Manufacturing Program Forecast Fact:Expected Revenue Per UnitFixedCost__c—Advanced Account Forecast Fact:Fixed CostForecastedGrossMarginPercent__c—Advanced Account Forecast Fact:Forecasted Gross Margin PercentForecastedProfit__c—Advanced Account Forecast Fact:Forecasted ProfitForecastedQuantity—Manufacturing Program Variant Forecast Fact:Forecasted QuantityForecastedRevenue—Manufacturing Program Forecast Fact:Forecasted RevenueLastYearOrderQuantity—Advanced Account Forecast Fact:Last Year Order QuantityLastYearOrderRevenue—Advanced Account Forecast Fact:Last Year Order RevenueMarketSharePercent—Manufacturing Program Variant Forecast Fact:Market Share PercentOpportunityQuantity—Advanced Account Forecast Fact:Opportunity QuantityOpportunityRevenue—Advanced Account Forecast Fact:Opportunity RevenueOrderQuantity—Advanced Account Forecast Fact:Order QuantityOrderRevenue—Advanced Account Forecast Fact:Order RevenuePreviousPeriodProgramQuantity—Manufacturing Program Forecast Fact:Previous Period Program QuantityProgramQuantity—Manufacturing Program Forecast Fact:Program QuantitySalesAgreementQuantity—Advanced Account Forecast Fact:Sales Agreement QuantitySalesAgreementRevenue—Advanced Account Forecast Fact:Sales Agreement RevenueSellingPricePerUnit—Manufacturing Program Component Forecast Fact:Selling Price Per UnitTotalCostPerUnit—Manufacturing Program Component Forecast Fact:Total CostTotalCost__c—Advanced Account Forecast Fact:Total CostTotalFixedCostPerUnit—Manufacturing Program Component Forecast Fact:Total Fixed Cost Per UnitVariableCostPerUnit—Manufacturing Program Component Forecast Fact:Variable Cost Per Unit |
| ForecastRevenueFieldName | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe field name for the forecast revenue in the advanced account forecast record.Possible values are:AcctHierAAFAdjustedAmount__c—Advanced Account Forecast Fact:Adjusted AmountAcctHierAAFAdjustedQuantity__c—Advanced Account Forecast Fact:Adjusted QuantityAcctHierAAFCountryManagerAmount__c—Advanced Account Forecast Fact:Country Manager AmountAcctHierAAFCountryManagerQuantity__c—Advanced Account Forecast Fact:Country Manager QuantityAcctHierAAFRegionalManagerAmount__c—Advanced Account Forecast Fact:Regional Manager AmountAcctHierAAFRegionalManagerQuantity__c—Advanced Account Forecast Fact:Regional Manager QuantityActualGrossMarginPercent__c—Advanced Account Forecast Fact:Actual Gross Margin PercentActualProfit__c—Advanced Account Forecast Fact:Actual ProfitAdjustedForecastedQuantity—Manufacturing Program Variant Forecast Fact:Adjusted Forecasted QuantityAdjustedForecastedRevenue—Manufacturing Program Forecast Fact:Adjusted Forecasted RevenueCH_AdjustedForecastedQuantity__c—Advanced Account Forecast Fact:Adjusted Forecasted QuantityCH_AdjustedForecastedRevenue__c—Advanced Account Forecast Fact:Adjusted Forecasted RevenueCH_SalesAgreementQuantityFromCategories__c—Advanced Account Forecast Fact:Sales Agreement Quantity from CategoriesCH_SalesAgreementQuantityFromProducts__c—Advanced Account Forecast Fact:Sales Agreement Quantity from ProductsCH_SalesAgreementRevenueFromCategories__c—Advanced Account Forecast Fact:Sales Agreement Revenue from CategoriesCH_SalesAgreementRevenueFromProducts__c—Advanced Account Forecast Fact:Sales Agreement Revenue from ProductsCostPerUnit__c—Advanced Account Forecast Fact:Cost Per UnitExpectedProfitPerUnit—Manufacturing Program Component Forecast Fact:Expected Profit Per UnitExpectedProfitPercent—Manufacturing Program Component Forecast Fact:Expected Profit PercentExpectedRevenuePerUnit—Manufacturing Program Forecast Fact:Expected Revenue Per UnitFixedCost__c—Advanced Account Forecast Fact:Fixed CostForecastedGrossMarginPercent__c—Advanced Account Forecast Fact:Forecasted Gross Margin PercentForecastedProfit__c—Advanced Account Forecast Fact:Forecasted ProfitForecastedQuantity—Manufacturing Program Variant Forecast Fact:Forecasted QuantityForecastedRevenue—Manufacturing Program Forecast Fact:Forecasted RevenueLastYearOrderQuantity—Advanced Account Forecast Fact:Last Year Order QuantityLastYearOrderRevenue—Advanced Account Forecast Fact:Last Year Order RevenueMarketSharePercent—Manufacturing Program Variant Forecast Fact:Market Share PercentOpportunityQuantity—Advanced Account Forecast Fact:Opportunity QuantityOpportunityRevenue—Advanced Account Forecast Fact:Opportunity RevenueOrderQuantity—Advanced Account Forecast Fact:Order QuantityOrderRevenue—Advanced Account Forecast Fact:Order RevenuePreviousPeriodProgramQuantity—Manufacturing Program Forecast Fact:Previous Period Program QuantityProgramQuantity—Manufacturing Program Forecast Fact:Program QuantitySalesAgreementQuantity—Advanced Account Forecast Fact:Sales Agreement QuantitySalesAgreementRevenue—Advanced Account Forecast Fact:Sales Agreement RevenueSellingPricePerUnit—Manufacturing Program Component Forecast Fact:Selling Price Per UnitTotalCostPerUnit—Manufacturing Program Component Forecast Fact:Total CostTotalCost__c—Advanced Account Forecast Fact:Total CostTotalFixedCostPerUnit—Manufacturing Program Component Forecast Fact:Total Fixed Cost Per UnitVariableCostPerUnit—Manufacturing Program Component Forecast Fact:Variable Cost Per Unit |
| ForecastSetFieldName | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe name of the field used to store the forecast set and fact object relation.Possible values are:AdvAcctForecastSetPartnerId—Advanced Account Forecast Fact:Advanced Account Forecast Set Partner IDAdvAcctForecastSetUseId—Advanced Account Forecast Fact:Advanced Account Forecast Set Use IDManufacturingProgramId—Manufacturing Program Variant Forecast Fact:Manufacturing Program ID |
| ForecastSetName | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the forecast set. |
| ForecastStatusFieldName | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe field name for the Status in the advanced account forecast fact record.Possible values are:CurrencyIsoCode—Manufacturing Program Variant Forecast Fact:Currency ISO CodeExternalReferenceNumber—Manufacturing Program Variant Forecast Fact:External Reference NumberName—Manufacturing Program Variant Forecast Fact:Manufacturing Program Variant Forecast Fact NameStatus—Manufacturing Program Variant Forecast Fact:Status |
| GenerationDpeDefNameId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the Data Processing Engine definition used to generate advanced account forecast fact records.This is a relationship field.Relationship NameGenerationDpeDefNameRelationship TypeLookupRefers ToBatchCalcJobDefinition |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe combined language and locale ISO code, which controls the language of the advanced account forecast fact set record. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionLabel for this advanced account forecast set value. This display value is the internal label that doesn't get translated. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix that is associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values.In Developer Edition orgs, NamespacePrefix is set to the namespace prefix of the org for all objects that support it, unless an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition org of the package developer.In orgs that are not Developer Edition orgs, NamespacePrefix is set only for objects that are part of an installed managed package. All other objects have no namespace prefix.Available in API version 58.0 and later. |
| PeriodFieldName | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe field name for the period in the advanced account forecast fact record.Possible values are:PeriodId—Manufacturing Program Variant Forecast Fact:Period ID |
| RecalculateDpeDefNameId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Data Processing Engine definition used to recalculate advanced account forecast fact records.This is a relationship field.Relationship NameRecalculateDpeDefNameRelationship TypeLookupRefers ToBatchCalcJobDefinition |
| RegenerationDpeDefNameId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Data Processing Engine definition used to regenerate advanced account forecast fact records.This is a relationship field.Relationship NameRegenerationDpeDefNameRelationship TypeLookupRefers ToBatchCalcJobDefinition |
| RolloverDpeDefNameId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Data Processing Engine definition used to generate rollover advanced account forecast fact records.This is a relationship field.Relationship NameRolloverDpeDefNameRelationship TypeLookupRefers ToBatchCalcJobDefinition |
| RolloverFrequency | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe frequency of rollover of the advanced account forecast records.Possible values are:MonthlyQuarterlyWeeklyYearlyThe default value is Monthly. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe status of the advanced account forecast set.Possible values are:ActiveInactive |

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

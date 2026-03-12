---
title: "Flow for Manufacturing Cloud"
domain: mfg-api-devguide
topic: flow-for-manufacturing-cloud
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:55.228Z
estimatedTokens: 754
keywords: [Flow, Manufacturing, Cloud, metadata, associated, application, navigates, users, series, screens, query, records, database, execute, logic]
---

# Flow for Manufacturing Cloud

> Represents the metadata associated with a flow. With Flow, you can create an
    application that navigates users through a series of screens to query and update records in the
    database. You can also execute logic and provide branching capability based on user input to
    build dynamic applications.

# Flow for Manufacturing Cloud

Represents the metadata associated with a flow. With Flow, you can create an application that navigates users through a series of screens to query and update records in the database. You can also execute logic and provide branching capability based on user input to build dynamic applications.

## FlowActionCall

Manufacturing Cloud exposes additional actionType values for the FlowActionCall Metadata type. For more information on Flow and FlowActionCall Metadata Type, see [Flow](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_visual_workflow.htm).

| Field Name | Field Type | Description |
| --- | --- | --- |
| actionType | InvocableActionType (enumeration of type string) | Required. The action type. Additional valid values only for Manufacturing Cloud include:calculateAdvancedAccountForecast—Calculate forecasts for an account based on the formulae associated with the forecast set.getSalesAgreementDetails—Retrieves a comprehensive collection of all required data (spread across multiple entities like SalesAgreement, Product2, SalesAgreementProduct, etc.) for a given Sales Agreement. Available in API version 61.0 and later.getSearchConfigurationMetadata—Retrieves all metadata details and search configurations for a given searchable object. Available in API version 64.0 and later.importRecordsFromCsvFile—Imports and converts data from a CSV file into target object records. Available in API version 55.0 and later.massUpdateAccountForecast—Mass updates account forecast fields for different products and periods with this single action. Available in API version 48.0 and later.massUpdateAdvAccountForecast—Update a measure of AdvAccountForecastFact records based on filter condition of the selected list view. Available in API version 56.0 and later.massUpdateSalesAgreement—Mass updates sales agreement fields for different products and periods with this single action. Available in API version 48.0 and later.recalculateForecast—Recalculates forecasts based on orders, opportunity, and sales agreement figures. Available in API version 47.0 and later.refreshActualsCalculation—Refreshes actuals calculations for sales agreements for current and future periods. Available in API version 47.0 and later.replenishInventoryUsingPolicy—Executes inventory policy to identify stock shortages, determine the optimal source location, and automate replenishment. Available in API version 65.0 and later.transformMfgProgramForecasts—Submits a message to a queue service to asynchronously process and transform manufacturing program forecasts. Available in API version 64.0 and later.updateAcctMgrTarget—Updates an account manager target’s assignment values when the target’s value changes. Available in API version 49.0 and later.updateAdvancedAccountForecastSetPartner—Updates the status of the Advanced Account Forecast Set Partner record after the forecast data for a given combination of account and forecast sets has been generated. |

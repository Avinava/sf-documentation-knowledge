---
title: "BatchCalcJobDefinitionView"
domain: omnistudio
topic: batchcalcjobdefinitionview
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:53.533Z
estimatedTokens: 1729
keywords: [BatchCalcJobDefinitionView, Represents, details, Data, Processing, Engine, definition., definition, file-based, Salesforce, org., API, version, 51.0, later., Note, Supported, Calls, Fields]
---

# BatchCalcJobDefinitionView

> Represents the details of a Data Processing Engine definition. The
      definition can also be a file-based definition that is available in your Salesforce org.
    This object is available in API version 51.0 and later.

# BatchCalcJobDefinitionView

Represents the details of a Data Processing Engine definition. The definition can also be a file-based definition that is available in your Salesforce org. This object is available in API version 51.0 and later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=industries_reference)

#### Note

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

describeSObjects(), query()

## Fields

| Field | Details |
| --- | --- |
| DataSpaceApiName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionStores the data space API name from Data Cloud. |
| DefinitionRunMode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe execution mode of the Data Processing Engine definition.Possible values are:BatchOnDemand—On DemandThe default value is Batch. |
| Description | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe description of a Data Processing Engine definition. |
| DurableId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe unique identifier for the field. Always retrieve this value before using it, as the value isn’t guaranteed to stay the same from one release to the next. Simplify queries by using this field instead of making multiple queries. |
| ExecutionPlatformObjectType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionSpecifies the execution platform object type used to read, transform, and write back processes during the execution of a Data Processing Engine definition. This field is available in API version 65.0 and later.Possible values are:CalculatedInsightsObject—Calculated Insights ObjectDataLakeObject—Data Lake ObjectDataModelObject—Data Model ObjectNone |
| ExecutionPlatformType | TypePicklistPropertiesFilter, Group, Restricted picklist, Sort, Not-NillableDescriptionSpecifies the platform that's used to run the Data Processing Engine definition. Possible values:CDP—Data CloudCRMA—CRM Analytics |
| InstalledPackageName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the package used to add the definition to the org. |
| IsActive | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the definition is active. |
| IsTemplate | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the definition is a template. You can make a copy of a template definition and update it based on your requirements. |
| LastModifiedBy | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe unique identifier of the user who modified the definition last. |
| ManageableState | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the definition if it’s contained in a package.Possible values are:beta—Managed-Betadeleted—Managed-Proposed-Deleteddeprecated—Managed-Proposed-DeprecateddeprecatedEditable—SecondGen-Installed-Deprecatedinstalled—Managed-InstalledinstalledEditable—SecondGen-Installed-Editablereleased—Managed-Releasedunmanaged—Unmanaged |
| MasterLabel | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe label of the Data Processing Engine definition. |
| Name | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the Data Processing Engine definition. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix associated with this object. Each Developer Edition organization that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values:In Developer Edition organizations, the namespace prefix is set to the namespace prefix of the organization for all objects that support it. There’s an exception if an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition organization of the package developer.In organizations that aren’t Developer Edition organizations, NamespacePrefix is only set for objects that are part of an installed managed package. There’s no namespace prefix for all other objects. |
| ProcessType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe process type of the definition.Possible values are:AccountingPeriodClosure—Legal Entity Accounting Period Closure—Available in API version 62.0 and later.ActionableListAdvancedAccountForecastBenefitManagement—Available in API version 61.0 and later.BillingSchedulesforInvoiceGeneration—Billing Schedules for Invoice Generation—Available in API version 62.0 and later.CDPEnrichmentChannelInventoryManagement—Available in API version 63.0 and later.CollectionsAndRecoveryCriteriaBsdSearchAndFilter - Criteria-Based Search And FilterDataProcessingEngine - StandardDecisionMatrixDataUpload-This value is available only if you have Business Rules Engine enabled.Decisiontable—Decision table activation—Available in API version 62.0 and later.EducationEmployeeService—Available in API version 63.0 and later.FinancialSummaryRollup—Available in API version 63.0 and later.ForeignExchangeGainLossCalculationsFSCHierarchyRollUpFundraisingFundraisingRollups—Available in API version 63.0 and later.GeneralLedgerAccountBalancesSummaryInventoryBatchSearchInventorySearchInvoiceGeneration—Available in API version 62.0 and later.LegalEntityAccountingPeriodClosureAdvanced—Available in API version 63.0 and later.LifeSciencesCommercialTerritoryAlignment—Available in API version 63.0 and later.LifeSciencesCustomerEngagementLoyaltyLoyaltyPartnerManagementLoyaltyPointsAggregationNetZeroNextGenForecasting—Available in API version 62.0 and later.PatientServicesProgramPnmRosterFileUpload—Available in API version 62.0 and later.PriceProtection—Available in API version 62.0 and later.ProductCatalogManagement—Available in API version 63.0 and later.ProgramBasedBusinessProgramManagementRollupsRebatesRecordAggregationRevenueTransactionManagement—Available in API version 63.0 and later.AccountingSubledger—This value is reserved for internal use.ProviderSearch—This value is reserved for internal use.Recruitment—Available in API version 62.0 and later.SalesAgreement—Available in API version 63.0 and later.StockRotationUsageManagement—Available in API version 62.0 and later.When Data Processing Engine is enabled for a Salesforce org, the default value is 'Standard’. Other process types may be available to you depending on your industry solution and permission sets. |

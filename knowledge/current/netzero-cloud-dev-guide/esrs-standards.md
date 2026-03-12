---
title: "ESRS Standards"
domain: netzero-cloud-dev-guide
topic: esrs-standards
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:58.143Z
estimatedTokens: 44140
keywords: [ESRS, Standards, European, Sustainability, Reporting, provide, investors, understand, impact, companies, they, invest, includes, environmental, social]
---

# ESRS Standards

> The European Sustainability Reporting Standards (ESRS) provide information for
                investors to understand the sustainability impact of the companies in which they
                invest, which includes environmental, social, and governance issues, including
                climate change, biodiversity, and human rights.

# ESRS Standards

The European Sustainability Reporting Standards (ESRS) provide information for investors to understand the sustainability impact of the companies in which they invest, which includes environmental, social, and governance issues, including climate change, biodiversity, and human rights.

If you enable the Manage Carbon Accounting for Extended Organizational Boundaries or Manage Social and Governance for Extended Organizational Boundaries setting, then select the account in the reporting details. If you don’t, for emissions data the Omnistudio Data Mappers and Apex classes extract data for the annual emission inventory record that doesn’t relate to any account for the selected year. If there are multiple such annual emission inventory records, then no data will be returned by the Data Mappers and incorrect data will be returned by the Apex classes. For social and governance data, the Data Mappers and Apex classes extract data based on the records from the disclosure reporting period, whether or not related to an account.

If you select an account in the reporting details, then the Data Mappers and Apex classes extract emissions data from the annual emissions inventory record that relate to the account for the selected year and social and governance data for the disclosure reporting period based on the account type:

-   Affiliate account: The data comes from the account itself.
-   Subsidiary account: The data comes from the account’s child records.

If you select an account that is a parent company, then the Data Mappers and Apex classes extract data for the disclosure reporting period that doesn’t relate to any affiliate account, and from child records that don’t relate to any subsidiary account.

For Apex classes, in edit blocks, if multiple values are returned, Net Zero Cloud shows the values in a table and doesn’t aggregate them.

To perform calculations and aggregations:

-   When authoring ESRS disclosure reports in Microsoft 365 Word and OmniScripts, Net Zero Cloud uses these Data Mappers:

    -   MSESRSMainDataraptor : Use this data mapper to extract data
    -   MSESRSMainTransform : Use this data mapper to transforms the data for document generation
-   When authoring ESRS disclosure reports by using OmniScripts, Net Zero Cloud uses Apex classes.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=netzero_cloud_dev_guide)

#### Note

Our platform provides you with the option to track data that you deem appropriate. We don't mandate or require you to enter any specific data. The decision to enter and track information, as well as the nature and extent of that data, rests solely with you.

Here are the calculations:

## ESRS 2 General Disclosures (V5)

Disclosure Requirement GOV-3 – Integration of sustainability-related performance in incentive schemes

27\. The undertaking shall disclose information about the integration of its sustainability-related performance in incentive schemes.

| CSRD Metric | Percentage (%) |
| --- | --- |
| Percentage of remuneration recognised that is linked to climate related considerations | Input FieldsClimate Change Emissions and Financial Summary(ClimateChgEmssnFincSummary)GOV-3 Percentage of Remuneration Linked to Climate Considerations (Gov3PctRemunLnkClimateCsdn)CalculationFor Non-Aggregated CasesGet ClimateChgEmssnFincSummary.GOV-3 Percentage of Remuneration Linked to Climate Considerations for the reporting yearFor Aggregated CasesGet ClimateChgEmssnFincSummary.GOV-3 Percentage of Remuneration Linked to Climate Considerations for the reporting year from all the ClimateChgEmssnFincSummary records corresponding to the accounts in hierarchy with parent company in this format:% Value - AccountNameExample:15.50% - Affiliate Account 120.30% - Subsidiary Account 215.50% - Parent Company20.30% - Subsidiary Account 1 |

## ESRS E1 Climate Change

In these questions, we assume:

-   N  = Reporting Year
-   COMPARATIVE = Base Year
-   % N / N - 1 = (Reporting Year data / Previous Year data) × 100
-   MWh = Kwh × 0.001

Disclosure Requirement E1-1 – Transition plan for climate change mitigation

14\. The undertaking shall disclose its transition plan for climate change mitigation.

| CSRD Metric | Amount |
| --- | --- |
| Financial resources allocated to action plan (OpEx) | Input FieldsClimate Change Emissions and Financial Summary (ClimateChgEmssnFincSummary)Operating Expenses (OpEx) for Climate Transition Plan (E1OpExpenseClimateTrnstPlan)CalculationFor Non-Aggregated CasesGet ClimateChgEmssnFincSummary.Operating Expenses (OpEx) for Climate Transition Plan for the reporting yearFor Aggregated CasesSum (Get ClimateChgEmssnFincSummary.Operating Expenses (OpEx) for Climate Transition Plan for the reporting year) for selected parent and its child records |
| Financial resources allocated to action plan (CapEx) | Input FieldsClimate Change Emissions and Financial Summary (ClimateChgEmssnFincSummary)E1 Capital Expenditure (CapEx) for Climate Transition Plan (E1CptlExpClimateTrnstPlan)CalculationFor Non-Aggregated CasesGet ClimateChgEmssnFincSummary.E1 Capital Expenditure (CapEx) for Climate Transition Plan for the reporting yearFor Aggregated CasesSum (Get ClimateChgEmssnFincSummary.E1 Capital Expenditure (CapEx) for Climate Transition Plan for the reporting year) for selected parent and its child records |
| Significant CapEx for coal-related economic activities | Input FieldsClimate Change Emissions and Financial Summary (ClimateChgEmssnFincSummary)E1 Capital Expenditure (CapEx) for Coal-Related Activities (E1CptlExpCoalRelatedActivities)CalculationFor Non-Aggregated CasesGet ClimateChgEmssnFincSummary.E1 Capital Expenditure (CapEx) for Coal-Related Activities for the reporting yearFor Aggregated CasesSum (Get ClimateChgEmssnFincSummary.E1 Capital Expenditure (CapEx) for Coal-Related Activities for the reporting year) for selected parent and its child records |
| Significant CapEx for oil-related economic activities | Input FieldsClimate Change Emissions and Financial Summary (ClimateChgEmssnFincSummary)E1 Capital Expenditure (CapEx) for Oil-Related Activities (E1CptlExpOilRelatedActivities)CalculationFor Non-Aggregated CasesGet ClimateChgEmssnFincSummary.E1 Capital Expenditure (CapEx) for Oil-Related Activities for the reporting yearFor Aggregated CasesSum (Get ClimateChgEmssnFincSummary.E1 Capital Expenditure (CapEx) for Oil-Related Activities for the reporting year) for selected parent and its child records |
| Significant CapEx for gas-related economic activities | Input FieldsClimate Change Emissions and Financial Summary (ClimateChgEmssnFincSummary)E1 Capital Expenditure (CapEx) for Gas-Related Activities (E1CptlExpGasRelatedActivities)CalculationFor Non-Aggregated CasesGet ClimateChgEmssnFincSummary.E1 Capital Expenditure (CapEx) for Gas-Related Activities for the reporting yearFor Aggregated CasesSum (Get ClimateChgEmssnFincSummary.E1 Capital Expenditure (CapEx) for Gas-Related Activities for the reporting year) for selected parent and its child records |

| CSRD Metric | Date |
| --- | --- |
| Date of adoption of transition plan for undertakings not having adopted transition plan yet | Input FieldsClimate Change Emissions and Financial Summary (ClimateChgEmssnFincSummary)E1 Transition Plan Adoption Date (E1DateAdoptionTransitionPlan)CalculationFor Non-Aggregated CasesGet ClimateChgEmssnFincSummary.E1 Transition Plan Adoption Date for the reporting yearFor Aggregated CasesGet ClimateChgEmssnFincSummary.E1 Transition Plan Adoption Date from the selected parent for the reporting year |
| Disclosure of when resilience analysis has been conducted | Input FieldsClimate Change Emissions and Financial Summary (ClimateChgEmssnFincSummary)E1 SBM-3 Resilience Analysis Date (E1Sbm3DateResilienceAnlys)CalculationFor Non-Aggregated CasesGet ClimateChgEmssnFincSummary.E1 SBM-3 Resilience Analysis Date for the reporting yearFor Aggregated CasesGet ClimateChgEmssnFincSummary.E1 SBM-3 Resilience Analysis Date from the selected parent for the reporting year |

Disclosure Requirement E1-3 – Actions and resources in relation to climate change policies

26\. The undertaking shall disclose its climate change mitigation and adaptation actions and the resources allocated for their implementation.

| CSRD Metric | Total GHG emissions (tCO2e) |
| --- | --- |
| Achieved GHG emission reductions | Input FieldsAnnual Emissions Inventory (AnnualEmssnInventory)Total Emissions (tCO2e) (TotalEmissions)Final Emissions (tCO2e) (FinalEmssnInTco2e)Year (Year)CalculationFor Non-Aggregated CasesGet AnnualEmssnInventory.TotalEmissions where Year = Reporting year (current year)Get AnnualEmssnInventory.TotalEmissions where Year = Base yearAchieved GHG emission reductions = Base year.TotalEmissions - Reporting Year.TotalEmissionsFor Aggregated CasesGet AnnualEmssnInventory.FinalEmssnInTco2e where Year = Reporting year (current year)Get AnnualEmssnInventory.FinalEmssnInTco2e where Year = Base yearAchieved GHG emission reductions = Base year.FinalEmssnInTco2e - Reporting Year.FinalEmssnInTco2e |
| Expected GHG emission reductions | Input FieldsEmissions Activity (EmissionsActivity)Name (Name)IdEmissions Reduction Target (EmssnReductionTarget)IdTarget Year (TargetYear)Emissions Activity (EmissionsActivityId)Target Type (TargetType)Annual Emissions Reduction Target (AnnualEmssnRdctnTarget)Target Emissions (tC02e) (TargetEmissions)Parent Target (ParentTargetId)Target Year (TargetYear)Last Modified Date (LastModifiedDate)Annual Emissions Inventory (AnnualEmssnInventory)Total Emissions (tCO2e) (TotalEmissions)Final Emissions (tCO2e) (FinalEmssnInTco2e)Year (Year)Disclosure Reporting Period (DisclsReportingPeriod)Identifier (Identifier)Climate Change Emissions and Financial Summary (ClimateChgEmssnFincSummary)E1 Net Revenue to Calculate GHG Intensity (E1NetRevenueCalcGhgIntensity)Subsidiary Account (SubsidiaryAccountId)CalculationGet EmissionsActivity.Id where Name = ‘All Emissions’Get EmssnReductionTarget.Id and EmssnReductionTarget.TargetYear where EmssnReductionTarget.EmissionsActivityId = EmissionsActivity.Id and EmssnReductionTarget.TargetType = 'EMISSIONREDUCTIONTARGET'Get AnnualEmssnRdctnTarget.TargetEmissions where AnnualEmssnRdctnTarget.ParentTargetId = EmssnReductionTarget.Id and AnnualEmssnRdctnTarget.TargetYear = EmssnReductionTarget.TargetYear OrderBy AnnualEmssnRdctnTarget.LastModifiedDate DESC LIMIT 1For Non-Aggregated CasesSelect AnnualEmssnInventory.TotalEmissions where AnnualEmssnInventory.Year = Reporting yearFormula:Expected GHG emission reductions = AnnualEmssnInventory.TotalEmissions - AnnualEmssnRdctnTarget.TargetEmissionsFor Aggregated CasesSelect AnnualEmssnInventory.FinalEmssnInTco2e where AnnualEmssnInventory.Year = Reporting yearFormula:Expected GHG emission reductions = AnnualEmssnInventory.FinalEmssnInTco2e - AnnualEmssnRdctnTarget.TargetEmissions |

Disclosure Requirement E1-4 – Targets related to climate change mitigation and adaptation

30\. The undertaking shall disclose the climate-related targets it has set.

| CSRD Metric | Absolute Target Emissions Reduction from Base year | Target as % of Base Year Emissions | Intensity Value |
| --- | --- | --- | --- |
| Total Greenhouse gas emissions reduction | Input FieldsEmissions Activity (EmissionsActivity)Name (Name)IdEmissions Reduction Target (EmssnReductionTarget)Id,Target Year (TargetYear)Emissions Activity (EmissionsActivityId)Target Type (TargetType)Annual Emissions Reduction Target (AnnualEmssnRdctnTarget)Target Emissions (tC02e) (TargetEmissions)Parent Target (ParentTargetId)Target Year (TargetYear)Last Modified Date (LastModifiedDate)Annual Emissions Inventory (AnnualEmssnInventory)Total Emissions (tCO2e) (TotalEmissions)Final Emissions (tCO2e) (FinalEmssnInTco2e)Year (Year)Disclosure Reporting Period (DisclsReportingPeriod)Identifier (Identifier)Climate Change Emissions and Financial Summary (ClimateChgEmssnFincSummary)E1 Net Revenue to Calculate GHG Intensity (E1NetRevenueCalcGhgIntensity)Subsidiary Account (SubsidiaryAccountId)Disclosure Reporting Period (DisclsReportingPeriodId)CalculationFor Non-Aggregated CasesGet EmissionsActivity.Id where Name = 'All Emissions'Get EmssnReductionTarget.Id, EmssnReductionTarget.TargetYear where EmssnReductionTarget.EmissionsActivityId = EmissionsActivity.Id and EmssnReductionTarget.TargetType = 'EMISSIONREDUCTIONTARGET'Get AnnualEmssnRdctnTarget.TargetEmissions where AnnualEmssnRdctnTarget.ParentTargetId = EmssnReductionTarget.Id and AnnualEmssnRdctnTarget.TargetYear = EmssnReductionTarget.TargetYear OrderBy AnnualEmssnRdctnTarget.LastModifiedDate DESC LIMIT 1Get AnnualEmssnInventory.TotalEmissions where AnnualEmssnInventory.Year = Base YearGet ClimateChgEmssnFincSummary.E1NetRevenueCalcGhgIntensity where ClimateChgEmssnFincSummary.DisclsReportingPeriodId = DisclsReportingPeriod.Identifier and ClimateChgEmssnFincSummary.SubsidiaryAccount = SubsidiaryAccountIdNote: SubsidiaryAccount = AccountId filter is only applicable subsidiary accountFormulaTotal GHG Emission Reduction Absolute Value = AnnualEmssnInventory.TotalEmissions - AnnualEmssnRdctnTarget.TargetEmissionsFor Aggregated CasesGet EmissionsActivity.Id where Name = 'All Emissions'Get EmssnReductionTarget.Id, EmssnReductionTarget.TargetYear where EmssnReductionTarget.EmissionsActivityId = EmissionsActivity.Id and EmssnReductionTarget.TargetType = 'EMISSIONREDUCTIONTARGET'Get AnnualEmssnRdctnTarget.TargetEmissions where AnnualEmssnRdctnTarget.ParentTargetId = EmssnReductionTarget.Id and AnnualEmssnRdctnTarget.TargetYear = EmssnReductionTarget.TargetYear OrderBy AnnualEmssnRdctnTarget.LastModifiedDate DESC LIMIT 1Get AnnualEmssnInventory.FinalEmssnInTco2e where AnnualEmssnInventory.Year = Base YearGet ClimateChgEmssnFincSummary.E1NetRevenueCalcGhgIntensity where ClimateChgEmssnFincSummary.DisclsReportingPeriodId = DisclsReportingPeriod.Identifier and ClimateChgEmssnFincSummary.SubsidiaryAccount = SubsidiaryAccountIdNote: SubsidiaryAccount = AccountId filter is only applicable subsidiary accountFormulaTotal GHG Emission Reduction Absolute Value = AnnualEmssnInventory.FinalEmssnInTco2e - AnnualEmssnRdctnTarget.TargetEmissions | For Non-Aggregated CasesTotal GHG Emission Reduction Perecentage of Base Year = (Total GHG Emission Reduction Absolute Value / AnnualEmssnInventory.TotalEmissions)*100For Aggregated CasesTotal GHG Emission Reduction Perecentage of Base Year = (Total GHG Emission Reduction Absolute Value / AnnualEmssnInventory.FinalEmssnInTco2e)*100 | Total GHG Emission Reduction Intensity Value = Total GHG Emission Reduction Absolute Value/ClimateChgEmssnFincSummary.E1NetRevenueCalcGhgIntensity |
| Scope 1 Greenhouse gas emissions reduction | Input FieldsEmissions Activity (EmissionsActivity)Name (Name)IdEmissions Reduction Target (EmssnReductionTarget)IdTarget Year (TargetYear)Emissions Activity (EmissionsActivityId)Target Type (TargetType)Annual Emissions Reduction Target (AnnualEmssnRdctnTarget)Target Emissions (tC02e) (TargetEmissions)Parent Target (ParentTargetId)Target Year (TargetYear)Last Modified Date (LastModifiedDate)Annual Emissions Inventory (AnnualEmssnInventory)Final Scope 1 Emissions (tCO2e) (FinalScope1EmssnInTco2e)Total Scope 1 Emissions (tCO2e) (TotalScope1Emissions)Year (Year)Disclosure Reporting Period (DisclsReportingPeriod)Identifier (Identifier)Climate Change Emissions and Financial Summary (ClimateChgEmssnFincSummary)E1 Net Revenue to Calculate GHG Intensity (E1NetRevenueCalcGhgIntensity)Subsidiary Account (SubsidiaryAccountId)Disclosure Reporting Period (DisclsReportingPeriodId)CalculationFor Non-Aggregated CasesGet EmissionsActivity.Id where Name = 'Scope 1'Get EmssnReductionTarget.Id, EmssnReductionTarget.TargetYear where EmssnReductionTarget.EmissionsActivityId = EmissionsActivity.Id AND EmssnReductionTarget.TargetType = 'EMISSIONREDUCTIONTARGET'Get AnnualEmssnRdctnTarget.TargetEmissions where AnnualEmssnRdctnTarget.ParentTargetId = EmssnReductionTarget.Id AND AnnualEmssnRdctnTarget.TargetYear = EmssnReductionTarget.TargetYear OrderBy AnnualEmssnRdctnTarget.LastModifiedDate DESC LIMIT 1Get AnnualEmssnInventory.TotalScope1Emissions where AnnualEmssnInventory.Year = Base YearGet ClimateChgEmssnFincSummary.E1NetRevenueCalcGhgIntensity where ClimateChgEmssnFincSummary.DisclsReportingPeriodId = DisclsReportingPeriod.Identifier and ClimateChgEmssnFincSummary.SubsidiaryAccount = SubsidiaryAccountIdNoteSubsidiaryAccount = AccountId filter is only applicable subsidiary accountScope 1 GHG Emission Reduction Absolute Value = AnnualEmssnInventory.TotalScope1Emissions - AnnualEmssnRdctnTarget.TargetEmissionsFor Aggregated CasesGet EmissionsActivity.Id where Name = 'Scope 1'Get EmssnReductionTarget.Id, EmssnReductionTarget.TargetYear where EmssnReductionTarget.EmissionsActivityId = EmissionsActivity.Id AND EmssnReductionTarget.TargetType = 'EMISSIONREDUCTIONTARGET'Get AnnualEmssnRdctnTarget.TargetEmissions where AnnualEmssnRdctnTarget.ParentTargetId = EmssnReductionTarget.Id AND AnnualEmssnRdctnTarget.TargetYear = EmssnReductionTarget.TargetYear OrderBy AnnualEmssnRdctnTarget.LastModifiedDate DESC LIMIT 1Get AnnualEmssnInventory.FinalScope1EmssnInTco2e where AnnualEmssnInventory.Year = Base YearGet ClimateChgEmssnFincSummary.E1NetRevenueCalcGhgIntensity where ClimateChgEmssnFincSummary.DisclsReportingPeriodId = DisclsReportingPeriod.Identifier and ClimateChgEmssnFincSummary.SubsidiaryAccount = SubsidiaryAccountIdNoteSubsidiaryAccount = AccountId filter is only applicable subsidiary accountScope 1 GHG Emission Reduction Absolute Value = AnnualEmssnInventory.FinalScope1EmssnInTco2e - AnnualEmssnRdctnTarget.TargetEmissions | For Non-Aggregated CasesScope 1 GHG Emission Reduction Percentage of Base Year = (Scope 1 GHG Emission Reduction Absolute Value / AnnualEmssnInventory.TotalScope1Emissions)*100For Aggregated CasesScope 1 GHG Emission Reduction Percentage of Base Year = (Scope 1 GHG Emission Reduction Absolute Value / AnnualEmssnInventory.FinalScope1EmssnInTco2e)*100 | Scope 1 GHG Emission Reduction Intensity Value = Scope 1 GHG Emission Reduction Absolute Value/ClimateChgEmssnFincSummary.E1NetRevenueCalcGhgIntensity |
| Scope 2 Location-based Greenhouse gas emissions reduction | Input FieldsEmissions Activity (EmissionsActivity)Name (Name)IdEmissions Reduction Target (EmssnReductionTarget)IdTarget Year (TargetYear)Emissions Activity (EmissionsActivityId)Target Type (TargetType)Annual Emissions Reduction Target (AnnualEmssnRdctnTarget)Target Emissions (tC02e) (TargetEmissions)Parent Target (ParentTargetId)Target Year (TargetYear)Last Modified Date (LastModifiedDate)Annual Emissions Inventory (AnnualEmssnInventory)Total Scope 2 Location Based Emissions (TotScope2LocBasedEmssn)Allocated Scope 2 Location Based Emissions (tCO2e) (AllocScope2LocBasedEmssn)Year (Year)Disclosure Reporting Period (DisclsReportingPeriod)Identifier (Identifier)Climate Change Emissions and Financial Summary (ClimateChgEmssnFincSummary)E1 Net Revenue to Calculate GHG Intensity (E1NetRevenueCalcGhgIntensity)Subsidiary Account (SubsidiaryAccountId)Disclosure Reporting Period (DisclsReportingPeriodId)CalculationFor Non-Aggregated CasesGet EmissionsActivity.Id where Name = 'Scope 2'Get EmssnReductionTarget.Id, EmssnReductionTarget.TargetYear where EmssnReductionTarget.EmissionsActivityId = EmissionsActivity.Id AND EmssnReductionTarget.TargetType = 'EMISSIONREDUCTIONTARGET'Get AnnualEmssnRdctnTarget.TargetEmissions where AnnualEmssnRdctnTarget.ParentTargetId = EmssnReductionTarget.Id AND AnnualEmssnRdctnTarget.TargetYear = EmssnReductionTarget.TargetYear OrderBy LastModifiedDate DESC LIMIT 1Get AnnualEmssnInventory.TotScope2LocBasedEmssn, AnnualEmssnInventory.AllocScope2LocBasedEmssn where AnnualEmssnInventory.Year = Base YearGet ClimateChgEmssnFincSummary.E1NetRevenueCalcGhgIntensity Where ClimateChgEmssnFincSummary.DisclsReportingPeriodId = DisclsReportingPeriod.Identifier and ClimateChgEmssnFincSummary.SubsidiaryAccount = SubsidiaryAccountIdNoteSubsidiaryAccount = AccountId filter is only applicable to subsidiary account.Scope 2 Location-Based GHG Emission Reduction Absolute Value = AnnualEmssnInventory.TotScope2LocBasedEmssn - AnnualEmssnRdctnTarget.TargetEmissionsFor Aggregated CasesScope 2 Location-Based GHG Emission Reduction Perecentage of Base Year = (Scope 2 Location-Based GHG Emission Reduction Absolute Value / (AnnualEmssnInventory.TotScope2LocBasedEmssn + AnnualEmssnInventory.AllocScope2LocBasedEmssn))*100Get EmissionsActivity.Id where Name = 'Final Scope 2 Emissions'Get EmssnReductionTarget.Id, EmssnReductionTarget.TargetYear where EmssnReductionTarget.EmissionsActivityId = EmissionsActivity.Id AND EmssnReductionTarget.TargetType = 'EMISSIONREDUCTIONTARGET'Get AnnualEmssnRdctnTarget.TargetEmissions where AnnualEmssnRdctnTarget.ParentTargetId = EmssnReductionTarget.Id AND AnnualEmssnRdctnTarget.TargetYear = EmssnReductionTarget.TargetYear OrderBy LastModifiedDate DESC LIMIT 1Get AnnualEmssnInventory.TotScope2LocBasedEmssn, AnnualEmssnInventory.AllocScope2LocBasedEmssn where AnnualEmssnInventory.Year = Base YearGet ClimateChgEmssnFincSummary.E1NetRevenueCalcGhgIntensity Where ClimateChgEmssnFincSummary.DisclsReportingPeriodId = DisclsReportingPeriod.Identifier and ClimateChgEmssnFincSummary.SubsidiaryAccount = SubsidiaryAccountIdNoteSubsidiaryAccount = AccountId filter is only applicable to subsidiary account.Scope 2 Location-Based GHG Emission Reduction Absolute Value = AnnualEmssnInventory.TotScope2LocBasedEmssn + AnnualEmssnInventory.AllocScope2LocBasedEmssn - AnnualEmssnRdctnTarget.TargetEmissions | For Non-Aggregated CasesScope 2 Location-Based GHG Emission Reduction Perecentage of Base Year = (Scope 2 Location-Based GHG Emission Reduction Absolute Value / AnnualEmssnInventory.TotScope2LocBasedEmssn )*100For Aggregated CasesScope 2 Location-Based GHG Emission Reduction Perecentage of Base Year = (Scope 2 Location-Based GHG Emission Reduction Absolute Value / (AnnualEmssnInventory.TotScope2LocBasedEmssn + AnnualEmssnInventory.AllocScope2LocBasedEmssn))*100 | Scope 2 Location-Based GHG Emission Reduction Intensity Value = Scope 2 Location-Based GHG Emission Reduction Absolute Value/ClimateChgEmssnFincSummary.E1NetRevenueCalcGhgIntensity |
| Scope 2 Market-based Greenhouse gas emissions reduction | Input FieldsEmissions Activity (EmissionsActivity)Name (Name)IdEmissions Reduction Target (EmssnReductionTarget)IdTarget Year (TargetYear)Emissions Activity (EmissionsActivityId)Target Type (TargetType)Annual Emissions Reduction Target (AnnualEmssnRdctnTarget)Target Emissions (tC02e) (TargetEmissions)Parent Target (ParentTargetId)Target Year (TargetYear)Last Modified Date (LastModifiedDate)Annual Emissions Inventory (AnnualEmssnInventory)Total Scope 2 Market Based Emissions (TotScope2MarketBsdEmssn)Allocated Scope 2 Market Based Emissions (tCO2e) (AllocScope2MktBasedEmssn)Year (Year)Disclosure Reporting Period (DisclsReportingPeriod)Identifier (Identifier)Climate Change Emissions and Financial Summary (ClimateChgEmssnFincSummary)E1 Net Revenue to Calculate GHG Intensity (E1NetRevenueCalcGhgIntensity)Subsidiary Account (SubsidiaryAccountId)Disclosure Reporting Period (DisclsReportingPeriodId)CalculationFor Aggregated CasesGet EmissionsActivity.Id where Name = 'Final Scope 2 Market-based Emissions'For Non-Aggregated CasesGet EmissionsActivity.Id where Name = 'Scope 2 Market-based'Get EmssnReductionTarget.Id, EmssnReductionTarget.TargetYear where EmssnReductionTarget.EmissionsActivityId = EmissionsActivity.Id AND EmssnReductionTarget.TargetType = 'EMISSIONREDUCTIONTARGET'Get AnnualEmssnRdctnTarget.TargetEmissions where AnnualEmssnRdctnTarget.ParentTargetId = EmssnReductionTarget.Id AND AnnualEmssnRdctnTarget.TargetYear = EmssnReductionTarget.TargetYear OrderBy LastModifiedDate DESC LIMIT 1Get AnnualEmssnInventory.TotScope2MarketBsdEmssn, AnnualEmssnInventory.AllocScope2MktBasedEmssn where AnnualEmssnInventory.Year = Base YearGet ClimateChgEmssnFincSummary.E1NetRevenueCalcGhgIntensity Where ClimateChgEmssnFincSummary.DisclsReportingPeriodId = DisclsReportingPeriod.Identifier and ClimateChgEmssnFincSummary.SubsidiaryAccount = SubsidiaryAccountIdNoteSubsidiaryAccount = AccountId filter is only applicable to subsidiary account.For Non-Aggregated CasesScope 2 Market-Based GHG Emission Reduction Absolute Value = AnnualEmssnInventory.TotScope2MarketBsdEmssn - AnnualEmssnRdctnTarget.TargetEmissionsFor Aggregated CasesScope 2 Market-Based GHG Emission Reduction Absolute Value = AnnualEmssnInventory.TotScope2MarketBsdEmssn + AnnualEmssnInventory.AllocScope2MktBasedEmssn - AnnualEmssnRdctnTarget.TargetEmissions | For non-aggregate scenarios:-Scope 2 Market-Based GHG Emission Reduction Percentage of Base Year = (Scope 2 Market-Based GHG Emission Reduction Absolute Value / (AnnualEmssnInventory.TotScope2MarketBsdEmssn)))*100For aggregate scenarios:-Scope 2 Market-Based GHG Emission Reduction Percentage of Base Year = (Scope 2 Market-Based GHG Emission Reduction Absolute Value / (AnnualEmssnInventory.TotScope2MarketBsdEmssn + AnnualEmssnInventory.AllocScope2MktBasedEmssn)))*100 | For non-aggregate scenarios:-Scope 2 Market-Based GHG Emission Reduction Intensity Value = Scope 2 Market-Based GHG Emission Reduction Absolute Value/ClimateChgEmssnFincSummary.E1NetRevenueCalcGhgIntensityFor aggregate scenarios:-Scope 2 Market-Based GHG Emission Reduction Intensity Value = Scope 2 Market-Based GHG Emission Reduction Absolute Value/ClimateChgEmssnFincSummary.E1NetRevenueCalcGhgIntensity where ClimateChgEmssnFincSummary.E1NetRevenueCalcGhgIntensity will be summation of E1NetRevenueCalcGhgIntensity field value from all the ClimateChgEmssnFincSummary records corresponding to the accounts in hierarchy with parent company. |
| Scope 3 Greenhouse gas emissions reduction | Input FieldsEmissions Activity (EmissionsActivity)Name (Name)IdEmissions Reduction Target (EmssnReductionTarget)Id,Target Year (TargetYear)Emissions Activity (EmissionsActivityId)Target Type (TargetType)Annual Emissions Reduction Target (AnnualEmssnRdctnTarget)Target Emissions (tC02e) (TargetEmissions)Parent Target (ParentTargetId)Target Year (TargetYear)Last Modified Date (LastModifiedDate)Annual Emissions Inventory (AnnualEmssnInventory)Final Scope 3 Emissions (tCO2e) (FinalScope3EmssnInTco2e)Total Scope 3 Emissions (tCO2e) (TotalScope3Emissions)Year (Year)Disclosure Reporting Period (DisclsReportingPeriod)Identifier (Identifier)Climate Change Emissions and Financial Summary (ClimateChgEmssnFincSummary)E1 Net Revenue to Calculate GHG IntensityE1NetRevenueCalcGhgIntensitySubsidiary Account (SubsidiaryAccountId)Disclosure Reporting Period (DisclsReportingPeriodId)CalculationFor Non-Aggregated CasesGet EmissionsActivity.Id where Name = 'Scope 3'Get EmssnReductionTarget.Id, EmssnReductionTarget.TargetYear where EmssnReductionTarget.EmissionsActivityId = EmissionsActivity.Id and EmssnReductionTarget.TargetType = 'EMISSIONREDUCTIONTARGET'Get AnnualEmssnRdctnTarget.TargetEmissions where AnnualEmssnRdctnTarget.ParentTargetId = EmssnReductionTarget.Id and AnnualEmssnRdctnTarget.TargetYear = EmssnReductionTarget.TargetYear OrderBy AnnualEmssnRdctnTarget.LastModifiedDate DESC LIMIT 1Get AnnualEmssnInventory.TotalScope3Emissions where AnnualEmssnInventory.Year = Base YearGet ClimateChgEmssnFincSummary.E1NetRevenueCalcGhgIntensity where ClimateChgEmssnFincSummary.DisclsReportingPeriodId = DisclsReportingPeriod.Identifier and ClimateChgEmssnFincSummary.SubsidiaryAccount = SubsidiaryAccountIdNoteSubsidiaryAccount = AccountId filter is only applicable subsidiary accountScope 3 GHG Emission Reduction Absolute Value = AnnualEmssnInventory.TotalScope3Emissions - AnnualEmssnRdctnTarget.TargetEmissionsFor Aggregated CasesGet EmissionsActivity.Id where Name = 'Final Scope 3 Emissions'Get EmssnReductionTarget.Id, EmssnReductionTarget.TargetYear where EmssnReductionTarget.EmissionsActivityId = EmissionsActivity.Id and EmssnReductionTarget.TargetType = 'EMISSIONREDUCTIONTARGET'Get AnnualEmssnRdctnTarget.TargetEmissions where AnnualEmssnRdctnTarget.ParentTargetId = EmssnReductionTarget.Id and AnnualEmssnRdctnTarget.TargetYear = EmssnReductionTarget.TargetYear OrderBy AnnualEmssnRdctnTarget.LastModifiedDate DESC LIMIT 1Get AnnualEmssnInventory.FinalScope3EmssnInTco2e where AnnualEmssnInventory.Year = Base YearGet ClimateChgEmssnFincSummary.E1NetRevenueCalcGhgIntensity where ClimateChgEmssnFincSummary.DisclsReportingPeriodId = DisclsReportingPeriod.Identifier and ClimateChgEmssnFincSummary.SubsidiaryAccount = SubsidiaryAccountIdNoteSubsidiaryAccount = AccountId filter is only applicable subsidiary accountScope 3 GHG Emission Reduction Absolute Value = AnnualEmssnInventory.FinalScope3EmssnInTco2e - AnnualEmssnRdctnTarget.TargetEmissions | For Non-Aggregated CasesScope 3 GHG Emission Reduction Perecentage of Base Year = (Scope 3 GHG Emission Reduction Absolute Value / AnnualEmssnInventory.TotalScope3Emissions)*100For Aggregated CasesScope 3 GHG Emission Reduction Perecentage of Base Year = (Scope 3 GHG Emission Reduction Absolute Value / AnnualEmssnInventory.FinalScope3EmssnInTco2e)*100 | Scope 3 GHG Emission Reduction Intensity Value = Scope 3 GHG Emission Reduction Absolute Value/ClimateChgEmssnFincSummary.E1NetRevenueCalcGhgIntensity |

Disclosure Requirement E1-5 – Energy consumption and mix

35\. The undertaking shall provide information on its energy consumption and mix.

| Energy consumption and mix | Comparative (N-1) (MWh) | Year N (MWh) |
| --- | --- | --- |
| (2) Fuel consumption from crude oil and petroleum products (MWh) | Input FieldsStationary Asset Carbon Footprint Item (StnryAssetCrbnFtprntItm)Fuel Type (FuelType)Total Energy Consumption (kWh) (TotalEnergyConsumptionInKwh)Vehicle Asset Energy Use (VehicleAssetEnrgyUse)Total Fuel Consumption (US Gallons) (TotalFuelConsumptionInGal)Fuel Type (FuelType)CalculationFor Non-Aggregated CasesGet SUM of StnryAssetCrbnFtprntItm.Total Energy Consumption (kWh) for the selected account where the FuelType = Diesel \|\| FuelType = Kerosene \|\| FuelType = FuelOil \|\| FuelType = Propane \|\| FuelType = AutogasLPG \|\| FuelType = HeavyOil \|\| FuelType = LightOil \|\| FuelType = Gasoline \|\| FuelType = JetFuel for the previous year's carbon footprint's associated StnryAssetCrbnFtprntItmGet SUM of VehicleAssetEnrgyUse.Total Fuel Consumption (US Gallons) for the selected account where the FuelType = Diesel \|\| FuelType = AutogasLPG \|\| FuelType = Gasoline \|\| FuelType = JetFuel for the previous year's carbon footprint's associated StnryAssetCrbnFtprntItmFor Aggregated CasesGet SUM of StnryAssetCrbnFtprntItm.Total Energy Consumption (kWh) for the parent and child accounts where the FuelType = Diesel \|\| FuelType = Kerosene \|\| FuelType = FuelOil \|\| FuelType = Propane \|\| FuelType = AutogasLPG \|\| FuelType = HeavyOil \|\| FuelType = LightOil \|\| FuelType = Gasoline \|\| FuelType = JetFuel for the previous year's carbon footprint's associated StnryAssetCrbnFtprntItmGet SUM of VehicleAssetEnrgyUse.Total Fuel Consumption (US Gallons) for the parent and child accounts where the FuelType = Diesel \|\| FuelType = AutogasLPG \|\| FuelType = Gasoline \|\| FuelType = JetFuel for the previous year's carbon footprint's associated StnryAssetCrbnFtprntItmConvert StnryAssetCrbnFtprntItm.Total Energy Consumption (kWh) to MwhExampleStationary Assets - 1430231.27 MWhVehicle Assets - 3344255.69 US Gallons | Input FieldsStationary Asset Carbon Footprint Item (StnryAssetCrbnFtprntItm)Fuel Type (FuelType)Total Energy Consumption (kWh) (TotalEnergyConsumptionInKwh)Vehicle Asset Energy Use (VehicleAssetEnrgyUse)Total Fuel Consumption (US Gallons) (TotalFuelConsumptionInGal)Fuel Type (FuelType)CalculationFor Non-Aggregated CasesGet SUM of StnryAssetCrbnFtprntItm.Total Energy Consumption (kWh) for the selected account where the FuelType = Diesel \|\| FuelType = Kerosene \|\| FuelType = FuelOil \|\| FuelType = Propane \|\| FuelType = AutogasLPG \|\| FuelType = HeavyOil \|\| FuelType = LightOil \|\| FuelType = Gasoline \|\| FuelType = JetFuel for the current year's carbon footprint's associated StnryAssetCrbnFtprntItmGet SUM of VehicleAssetEnrgyUse.Total Fuel Consumption (US Gallons) for the selected account where the FuelType = Diesel \|\| FuelType = AutogasLPG \|\| FuelType = Gasoline \|\| FuelType = JetFuel for the current year's carbon footprint's associated StnryAssetCrbnFtprntItmFor Aggregated CasesGet SUM of StnryAssetCrbnFtprntItm.Total Energy Consumption (kWh) for the parent and child accounts where the FuelType = Diesel \|\| FuelType = Kerosene \|\| FuelType = FuelOil \|\| FuelType = Propane \|\| FuelType = AutogasLPG \|\| FuelType = HeavyOil \|\| FuelType = LightOil \|\| FuelType = Gasoline \|\| FuelType = JetFuel for the current year's carbon footprint's associated StnryAssetCrbnFtprntItmGet SUM of VehicleAssetEnrgyUse.Total Fuel Consumption (US Gallons) for the parent and child accounts where the FuelType = Diesel \|\| FuelType = AutogasLPG \|\| FuelType = Gasoline \|\| FuelType = JetFuel for the current year's carbon footprint's associated StnryAssetCrbnFtprntItmConvert StnryAssetCrbnFtprntItm.Total Energy Consumption (kWh) to MwhExampleStationary Assets - 661224.57 MWhVehicle Assets - 9.0 US Gallons |
| (3) Fuel consumption from natural gas (MWh) | Input FieldsStationary Asset Carbon Footprint Item (StnryAssetCrbnFtprntItm)Fuel Type (FuelType)Total Energy Consumption (kWh) (TotalEnergyConsumptionInKwh)Vehicle Asset Energy Use (VehicleAssetEnrgyUse)Total Fuel Consumption (US Gallons) (TotalFuelConsumptionInGal)Fuel Type (FuelType)CalculationFor Non-Aggregated CasesGet SUM of StnryAssetCrbnFtprntItm.Total Energy Consumption (kWh) for the selected account where the FuelType = NaturalGas \|\| FuelType = CityGas for the previous year's carbon footprint's associated StnryAssetCrbnFtprntItmGet SUM of VehicleAssetEnrgyUse.Total Fuel Consumption (US Gallons) for the selected account where the FuelType = CompressedNaturalGasCNG for the previous year's carbon footprint's associated StnryAssetCrbnFtprntItmFor Aggregated CasesGet SUM of StnryAssetCrbnFtprntItm.Total Energy Consumption (kWh) for the parent and child accounts where the FuelType = NaturalGas \|\| FuelType = CityGas for the previous year's carbon footprint's associated StnryAssetCrbnFtprntItmGet SUM of VehicleAssetEnrgyUse.Total Fuel Consumption (US Gallons) for the parent and child accounts where the FuelType = CompressedNaturalGasCNG for the previous year's carbon footprint's associated StnryAssetCrbnFtprntItmConvert StnryAssetCrbnFtprntItm.Total Energy Consumption (kWh) to MwhExampleStationary Assets - 1430231.27 MWhVehicle Assets - 3344255.69 US Gallons | Input FieldsStationary Asset Carbon Footprint Item (StnryAssetCrbnFtprntItm)Fuel Type (FuelType)Total Energy Consumption (kWh) (TotalEnergyConsumptionInKwh)Vehicle Asset Energy Use (VehicleAssetEnrgyUse)Total Fuel Consumption (US Gallons) (TotalFuelConsumptionInGal)Fuel Type (FuelType)CalculationFor Non-Aggregated CasesGet SUM of StnryAssetCrbnFtprntItm.Total Energy Consumption (kWh) for the selected account where the FuelType = NaturalGas \|\| FuelType = CityGas for the current year's carbon footprint's associated StnryAssetCrbnFtprntItmGet SUM of VehicleAssetEnrgyUse.Total Fuel Consumption (US Gallons) for the selected account where the FuelType = CompressedNaturalGasCNG for the current year's carbon footprint's associated StnryAssetCrbnFtprntItmFor Aggregated CasesGet SUM of StnryAssetCrbnFtprntItm.Total Energy Consumption (kWh) for the parent and child accounts where the FuelType = NaturalGas \|\| FuelType = CityGas for the current year's carbon footprint's associated StnryAssetCrbnFtprntItmGet SUM of VehicleAssetEnrgyUse.Total Fuel Consumption (US Gallons) for the parent and child accounts where the FuelType = CompressedNaturalGasCNG for the current year's carbon footprint's associated StnryAssetCrbnFtprntItmConvert StnryAssetCrbnFtprntItm.Total Energy Consumption (kWh) to MwhExampleStationary Assets - 1430231.27 MWhVehicle Assets - 3344255.69 US Gallons |
| (4) Fuel consumption from other fossil sources (MWh) | Input FieldsStationary Asset Carbon Footprint Item (StnryAssetCrbnFtprntItm)Fuel Type (FuelType)Total Energy Consumption (kWh) (TotalEnergyConsumptionInKwh)Vehicle Asset Energy Use (VehicleAssetEnrgyUse)Total Fuel Consumption (US Gallons) (TotalFuelConsumptionInGal)Fuel Type (FuelType)CalculationFor Non-Aggregated CasesGet SUM of StnryAssetCrbnFtprntItm.Total Energy Consumption (kWh) for the selected account where the FuelType = Propane for the previous year's carbon footprint's associated StnryAssetCrbnFtprntItmFor Aggregated CasesGet SUM of StnryAssetCrbnFtprntItm.Total Energy Consumption (kWh) for the parent and child accounts where the FuelType = Propane for the previous year's carbon footprint's associated StnryAssetCrbnFtprntItmConvert the value to Mwh | Input FieldsStationary Asset Carbon Footprint Item (StnryAssetCrbnFtprntItm)Fuel Type (FuelType)Total Energy Consumption (kWh) (TotalEnergyConsumptionInKwh)Vehicle Asset Energy Use (VehicleAssetEnrgyUse)Total Fuel Consumption (US Gallons) (TotalFuelConsumptionInGal)Fuel Type (FuelType)CalculationFor Non-Aggregated CasesGet SUM of StnryAssetCrbnFtprntItm.Total Energy Consumption (kWh) for the selected account where the FuelType = Propane for the current year's carbon footprint's associated StnryAssetCrbnFtprntItmFor Aggregated CasesGet SUM of StnryAssetCrbnFtprntItm.Total Energy Consumption (kWh) for the parent and child accounts where the FuelType = Propane for the current year's carbon footprint's associated StnryAssetCrbnFtprntItmConvert the value to Mwh |
| (5) Consumption of purchased or acquired electricity, heat, steam, and cooling from fossil sources (MWh) | Input FieldsStationary Asset Carbon Footprint Item (StnryAssetCrbnFtprntItm)Fuel Type (FuelType)Total Energy Consumption (kWh) (TotalEnergyConsumptionInKwh)Stationary Asset Carbon Footprint (StnryAssetCrbnFtprnt)Total Renewable Energy (kWh) (TotalRenewableEnergyInKwh)Vehicle Asset Energy Use (VehicleAssetEnrgyUse)Fuel Consumption (FuelConsumption)Fuel Type (FuelType)CalculationFor Non-Aggregated CasesGet SUM of StnryAssetCrbnFtprntItm.Total Energy Consumption (kWh) for the selected account where the FuelType = Steam \|\| FuelType = Cooling \|\| FuelType = Electricity \|\| FuelType = Heat for the previous year's carbon footprint's associated StnryAssetCrbnFtprntItm - (SUM of StnryAssetCrbnFtprnt.Total Renewable Energy (kWh) of previous year)Get SUM of VehicleAssetEnrgyUse.Fuel Consumption for the selected account where the FuelType = Electricity for the previous yearFor Aggregated CasesGet SUM of StnryAssetCrbnFtprntItm.Total Energy Consumption (kWh) for the parent and child accounts where the FuelType = Steam \|\| FuelType = Cooling \|\| FuelType = Electricity \|\| FuelType = Heat for the previous year's carbon footprint's associated StnryAssetCrbnFtprntItm - (SUM of StnryAssetCrbnFtprnt.Total Renewable Energy (kWh) of previous year)Get SUM of VehicleAssetEnrgyUse.Fuel Consumption for the parent and child accounts where the FuelType = Electricity for the previous yearConvert the values to MwhExampleStationary Assets - 1430231.27 MWhVehicle Assets(Electricity) - 12.1 MWh | Input FieldsStationary Asset Carbon Footprint Item (StnryAssetCrbnFtprntItm)Fuel Type (FuelType)Total Energy Consumption (kWh) (TotalEnergyConsumptionInKwh)Stationary Asset Carbon Footprint (StnryAssetCrbnFtprnt)Total Renewable Energy (kWh) (TotalRenewableEnergyInKwh)Vehicle Asset Energy Use (VehicleAssetEnrgyUse)Total Fuel Consumption (US Gallons) (TotalFuelConsumptionInGal)Fuel Type (FuelType)CalculationFor Non-Aggregated CasesGet SUM of StnryAssetCrbnFtprntItm.Total Energy Consumption (kWh) for the selected account where the FuelType = Steam \|\| FuelType = Cooling \|\| FuelType = Electricity \|\| FuelType = Heat for the current year's carbon footprint's associated StnryAssetCrbnFtprntItm - (SUM of StnryAssetCrbnFtprnt.Total Renewable Energy (kWh) of previous year)Get SUM of VehicleAssetEnrgyUse.Fuel Consumption for the selected account where the FuelType = Electricity for the current yearFor Aggregated CasesGet SUM of StnryAssetCrbnFtprntItm.Total Energy Consumption (kWh) for the parent and child accounts where the FuelType = Steam \|\| FuelType = Cooling \|\| FuelType = Electricity \|\| FuelType = Heat for the current year's carbon footprint's associated StnryAssetCrbnFtprntItm - (SUM of StnryAssetCrbnFtprnt.Total Renewable Energy (kWh) of previous year)Get SUM of VehicleAssetEnrgyUse.Fuel Consumption for the parent and child accounts where the FuelType = Electricityfor the current yearConvert the values to MwhExampleStationary Assets - 1430231.27 MWhVehicle Assets(Electricity) - 12.1 MWh |
| (6) Total fossil energy consumption (MWh) (calculated as the sum of lines 1 to 5) | Sum of ((2) Fuel consumption from crude oil and petroleum products (MWh) + (3) Fuel consumption from natural gas (MWh) + (5) Consumption of purchased or acquired electricity, heat, steam, and cooling from fossil sources (MWh)) for previous year, converted to MwhExampleStationary Assets - 1430231.27 MWhVehicle Assets - 3344255.69 US GallonsVehicle Assets(Electricity) - 1.23 MWh | Sum of ((2) Fuel consumption from crude oil and petroleum products (MWh) + (3) Fuel consumption from natural gas (MWh) + (5) Consumption of purchased or acquired electricity, heat, steam, and cooling from fossil sources (MWh)) for current year, converted to MwhExampleStationary Assets - 1430231.27 MWhVehicle Assets - 3344255.69 US GallonsVehicle Assets(Electricity) - 1.23 MWh |
| Share of fossil sources in total energy consumption (%) | Input FieldsStationary Asset Carbon Footprint (StnryAssetCrbnFtprnt)Total Energy Consumption (MWh) (TotEnergyConsumptionInMwh)CalculationGet StnryAssetCrbnFtprnt.Total Energy Consumption (MWh) for the previous year((6) Total fossil energy consumption (MWh)/StnryAssetCrbnFtprnt.Total Energy Consumption (MWh) | Input FieldsStationary Asset Carbon Footprint (StnryAssetCrbnFtprnt)Total Energy Consumption (MWh) (TotEnergyConsumptionInMwh)CalculationGet StnryAssetCrbnFtprnt.Total Energy Consumption (MWh) for the current year((6) Total fossil energy consumption (MWh)/StnryAssetCrbnFtprnt.Total Energy Consumption (MWh) |
| (7) Consumption from nuclear sources (MWh) | Input FieldsStationary Asset Carbon Footprint (StnryAssetCrbnFtprnt)Location-Based Electricity from Nuclear (kWh) (LocBasedElectrFromNuclearInKwh)CalculationGet SUM of StnryAssetCrbnFtprnt.Location-Based Electricity from Nuclear (kWh) for the previous yearConvert the value to Mwh | Input FieldsStationary Asset Carbon Footprint (StnryAssetCrbnFtprnt)Location-Based Electricity from Nuclear (kWh) (LocBasedElectrFromNuclearInKwh)CalculationGet SUM of StnryAssetCrbnFtprnt.Location-Based Electricity from Nuclear (kWh) for the current yearConvert the value to Mwh |
| Share of consumption from nuclear sources in total energy consumption (%) | Input FieldsStationary Asset Carbon Footprint (StnryAssetCrbnFtprnt)Location-Based Electricity from Nuclear (kWh) (LocBasedElectrFromNuclearInKwh)Total Energy Consumption (MWh) (TotEnergyConsumptionInMwh)CalculationGet SUM of StnryAssetCrbnFtprnt.Location-Based Electricity from Nuclear (kWh) for the previous yearConvert the value to MWhGet StnryAssetCrbnFtprnt.Total Energy Consumption (MWh) for the previous year(StnryAssetCrbnFtprnt.Location-Based Electricity from Nuclear (kWh) converted to MWh / StnryAssetCrbnFtprnt.Total Energy Consumption (MWh)) * 100 | Input FieldsStationary Asset Carbon Footprint (StnryAssetCrbnFtprnt)Location-Based Electricity from Nuclear (kWh) (LocBasedElectrFromNuclearInKwh)Total Energy Consumption (MWh) (TotEnergyConsumptionInMwh)CalculationGet SUM of StnryAssetCrbnFtprnt.Location-Based Electricity from Nuclear (kWh) for the current yearConvert the value to MWhGet StnryAssetCrbnFtprnt.Total Energy Consumption (MWh) for the current year(StnryAssetCrbnFtprnt.Location-Based Electricity from Nuclear (kWh) converted to MWh / StnryAssetCrbnFtprnt.Total Energy Consumption (MWh)) * 100 |
| (8) Fuel consumption for renewable sources, including biomass (also comprising industrial and municipal waste of biologic origin, biogas, renewable hydrogen, etc.) (MWh) | Input FieldsClimate Change Emissions and Financial Summary (ClimateChgEmssnFincSummary)E1 Fuel Consumption for Renewable Sources (MWh)(E1FuelCnsmpRenewableSrcBiomass)CalculationFor Non-Aggregated CasesGet ClimateChgEmssnFincSummary.E1 Fuel Consumption for Renewable Sources (MWh) for the selected accountFor Aggregated CasesGet ClimateChgEmssnFincSummary.E1 Fuel Consumption for Renewable Sources (MWh) corresponding to the accounts in hierarchy with parent company | Input FieldsClimate Change Emissions and Financial Summary (ClimateChgEmssnFincSummary)E1 Fuel Consumption for Renewable Sources (MWh)(E1FuelCnsmpRenewableSrcBiomass)CalculationFor Non-Aggregated CasesGet ClimateChgEmssnFincSummary.E1 Fuel Consumption for Renewable Sources (MWh) for the selected accountFor Aggregated CasesGet ClimateChgEmssnFincSummary.E1 Fuel Consumption for Renewable Sources (MWh) corresponding to the accounts in hierarchy with parent company |
| (9) Consumption of purchased or acquired electricity, heat, steam, and cooling from renewable sources (MWh) | Input FieldsStationary Asset Carbon Footprint (StnryAssetCrbnFtprnt)Total Renewable Energy (kWh) (TotalRenewableEnergyInKwh)CalculationFor Non-Aggregated CasesGet SUM of StnryAssetCrbnFtprnt.Total Renewable Energy (kWh) for the previous year for the selected accountFor Aggregated CasesGet SUM of StnryAssetCrbnFtprnt.Total Renewable Energy (kWh) for the previous year corresponding to the accounts in hierarchy with parent companyConvert the value to MWh | Input FieldsStationary Asset Carbon Footprint (StnryAssetCrbnFtprnt)Total Renewable Energy (kWh) (TotalRenewableEnergyInKwh)CalculationFor Non-Aggregated CasesGet SUM of StnryAssetCrbnFtprnt.Total Renewable Energy (kWh) for the current year for the selected accountFor Aggregated CasesGet SUM of StnryAssetCrbnFtprnt.Total Renewable Energy (kWh) for the current year corresponding to the accounts in hierarchy with parent companyConvert the value to MWh |
| (10) The consumption of self-generated non-fuel renewable energy (MWh) | Input FieldsClimate Change Emissions and Financial Summary (ClimateChgEmssnFincSummary)E1 Self-Generated Non-Fuel Renewable Energy Consumption (MWh) (E1CnsmpSelfGenNonFuelEnrgy)CalculationFor Non-Aggregated CasesGet ClimateChgEmssnFincSummary.E1 Self-Generated Non-Fuel Renewable Energy Consumption (MWh) for selected accountFor Aggregated CasesGet SUM(ClimateChgEmssnFincSummary.E1 Self-Generated Non-Fuel Renewable Energy Consumption (MWh) for parent and child accounts) | Input FieldsClimate Change Emissions and Financial Summary (ClimateChgEmssnFincSummary)E1 Self-Generated Non-Fuel Renewable Energy Consumption (MWh) (E1CnsmpSelfGenNonFuelEnrgy)CalculationFor Non-Aggregated CasesGet ClimateChgEmssnFincSummary.E1 Self-Generated Non-Fuel Renewable Energy Consumption (MWh) for selected accountFor Aggregated CasesGet SUM(ClimateChgEmssnFincSummary.E1 Self-Generated Non-Fuel Renewable Energy Consumption (MWh) for parent and child accounts) |
| (11) Total renewable energy consumption (MWh)(calculated as the sum of lines 8 to 10) | CalculationSum of ((8) Fuel consumption for renewable sources, including biomass (also comprising industrial and municipal waste of biologic origin, biogas, renewable hydrogen, etc.) (MWh) + (9) Consumption of purchased or acquired electricity, heat, steam, and cooling from renewable sources (MWh) + (10) The consumption of self-generated non-fuel renewable energy (MWh))Convert the value to MWh | CalculationSum of ((8) Fuel consumption for renewable sources, including biomass (also comprising industrial and municipal waste of biologic origin, biogas, renewable hydrogen, etc.) (MWh) + (9) Consumption of purchased or acquired electricity, heat, steam, and cooling from renewable sources (MWh) + (10) The consumption of self-generated non-fuel renewable energy (MWh))Convert the value to MWh |
| Share of renewable sources in total energy consumption (%) | Input FieldsStationary Asset Carbon Footprint (StnryAssetCrbnFtprnt)Total Renewable Energy (kWh) (TotalRenewableEnergyInKwh)Total Energy Consumption (MWh) (TotEnergyConsumptionInMwh)CalculationGet StnryAssetCrbnFtprnt.Total Energy Consumption (MWh) for the previous year((9) Consumption of purchased or acquired electricity, heat, steam, and cooling from renewable sources (MWh) + Vehicle Assets(Electricity) from (5) Consumption of purchased or acquired electricity, heat, steam, and cooling from fossil sources (MWh)) /StnryAssetCrbnFtprnt.Total Energy Consumption (MWh) | Input FieldsStationary Asset Carbon Footprint (StnryAssetCrbnFtprnt)Total Renewable Energy (kWh) (TotalRenewableEnergyInKwh)Total Energy Consumption (MWh) (TotEnergyConsumptionInMwh)CalculationGet SUM of StnryAssetCrbnFtprnt.Total Renewable Energy (kWh) for the current yearConvert the value to MWh((9) Consumption of purchased or acquired electricity, heat, steam, and cooling from renewable sources (MWh) + Vehicle Assets(Electricity) from (5) Consumption of purchased or acquired electricity, heat, steam, and cooling from fossil sources (MWh)) /StnryAssetCrbnFtprnt.Total Energy Consumption (MWh) |
| Total energy consumption (MWh) (calculated as the sum of lines 6, 7 and 11) | Input FieldsStationary Asset Carbon Footprint Item (StnryAssetCrbnFtprntItm)Fuel Type (FuelType)Total Energy Consumption (kWh) (TotalEnergyConsumptionInKwh)Stationary Asset Carbon Footprint (StnryAssetCrbnFtprnt)Total Energy Consumption (MWh) (TotEnergyConsumptionInMwh)Location-Based Electricity from Nuclear (kWh) (LocBasedElectrFromNuclearInKwh)CalculationSum of ((6) Total fossil energy consumption (MWh) + (7) Consumption from nuclear sources (MWh) + (11) Total renewable energy consumption (MWh)) for the previous yearExample:Stationary Assets - 2101047.19 MWhVehicle Assets - 3344255.69 US GallonsVehicle Assets(Electricity) - 0.00 MWh | Input FieldsStationary Asset Carbon Footprint Item (StnryAssetCrbnFtprntItm)Fuel Type (FuelType)Total Energy Consumption (kWh) (TotalEnergyConsumptionInKwh)Stationary Asset Carbon Footprint (StnryAssetCrbnFtprnt)Total Energy Consumption (MWh) (TotEnergyConsumptionInMwh)Location-Based Electricity from Nuclear (kWh) (LocBasedElectrFromNuclearInKwh)CalculationSum of ((6) Total fossil energy consumption (MWh) + (7) Consumption from nuclear sources (MWh) + (11) Total renewable energy consumption (MWh)) for the current yearExample:Stationary Assets - 2101047.19 MWhVehicle Assets - 3344255.69 US GallonsVehicle Assets(Electricity) - 0.00 MWh |

Disclosure Requirement E1-5 – Energy intensity based on net revenue ( 44 )

40\. The undertaking shall provide information on the energy intensity (total energy consumption per net revenue) associated with activities in high climate impact sectors.

| Energy intensity per net revenue | Comparative(N-1) | Reporting Year(N) | % N / N-1 |
| --- | --- | --- | --- |
| Net revenue from activities in high climate impact sectors | Input FieldsClimate Change Emissions and Financial Summary (ClimateChgEmssnFincSummary)E1 Net Revenue from High Climate Impact Sectors (E1NetRevHighClimateImpcSctr)CalculationFor Non-Aggregated CasesGet ClimateChgEmssnFincSummary.E1 Net Revenue from High Climate Impact Sectors for selected account for the previous yearFor Aggregated CasesGet SUM of ClimateChgEmssnFincSummary.E1 Net Revenue from High Climate Impact Sectors of accounts in hierarchy with parent company for the previous year | Input FieldsClimate Change Emissions and Financial Summary (ClimateChgEmssnFincSummary)E1 Net Revenue from High Climate Impact Sectors (E1NetRevHighClimateImpcSctr)CalculationGet ClimateChgEmssnFincSummary.E1 Net Revenue from High Climate Impact Sectors for the reporting year | CalculationClimateChgEmssnFincSummary.E1 Net Revenue from High Climate Impact Sectors for the reporting year/ClimateChgEmssnFincSummary.E1 Net Revenue from High Climate Impact Sectors for the previous year |
| Net revenue from activities other than in high climate impact sectors | Input FieldsClimate Change Emissions and Financial Summary (ClimateChgEmssnFincSummary)E1 Net Revenue Non-High Climate Impact Sectors (E1NetRevNonHighClimateimpcSctr)CalculationFor Non-Aggregated CasesGet ClimateChgEmssnFincSummary.E1 Net Revenue Non-High Climate Impact Sectors for the previous yearFor Aggregated CasesGet SUM of ClimateChgEmssnFincSummary.E1 Net Revenue Non-High Climate Impact Sectors of the accounts in hierarchy with parent company for the previous year | Input FieldsClimate Change Emissions and Financial Summary (ClimateChgEmssnFincSummary)E1 Net Revenue Non-High Climate Impact Sectors (E1NetRevNonHighClimateimpcSctr)CalculationGet ClimateChgEmssnFincSummary.E1 Net Revenue Non-High Climate Impact Sectors for the reporting year | CalculationClimateChgEmssnFincSummary.E1 Net Revenue Non-High Climate Impact Sectors for the reporting year/ClimateChgEmssnFincSummary.E1 Net Revenue Non-High Climate Impact Sectors for the previous year |
| Energy intensity from activities in high climate impact sectors (total energy consumption per net revenue from activities in high climate impact sectors) | Input FieldsClimate Change Emissions and Financial Summary (ClimateChgEmssnFincSummary)E1 Net Revenue from High Climate Impact Sectors(E1NetRevHighClimateImpcSctr)E1 Total Energy Consumption from High Climate Impact Sectors (MWh) (E1TotEnrgyCnsmpHighImpcSctr)Calculation (For previous year)For Non-Aggregated CasesIf ClimateChgEmssnFincSummary.E1 Net Revenue from High Climate Impact Sectors > 0, then ClimateChgEmssnFincSummary.E1 Net Revenue from High Climate Impact Sectors / ClimateChgEmssnFincSummary.E1 Total Energy Consumption from High Climate Impact Sectors (MWh)Else 0For Aggregated CasesIf ClimateChgEmssnFincSummary.E1 Net Revenue from High Climate Impact Sectors > 0, then SUM of ClimateChgEmssnFincSummary.E1 Net Revenue from High Climate Impact Sectors of the accounts in hierarchy with parent company/ SUM of ClimateChgEmssnFincSummary.E1 Total Energy Consumption from High Climate Impact Sectors (MWh) of the accounts in hierarchy with parent companyElse 0 | Input FieldsClimate Change Emissions and Financial Summary (ClimateChgEmssnFincSummary)E1 Net Revenue from High Climate Impact Sectors(E1NetRevHighClimateImpcSctr)E1 Total Energy Consumption from High Climate Impact Sectors (MWh) (E1TotEnrgyCnsmpHighImpcSctr)Calculation (For reporting year)If ClimateChgEmssnFincSummary.E1 Net Revenue from High Climate Impact Sectors > 0, then ClimateChgEmssnFincSummary.E1 Net Revenue from High Climate Impact Sectors / ClimateChgEmssnFincSummary.E1 Total Energy Consumption from High Climate Impact Sectors (MWh)Else 0 | (ClimateChgEmssnFincSummary.E1 Net Revenue from High Climate Impact Sectors > 0, then ClimateChgEmssnFincSummary.E1 Net Revenue from High Climate Impact Sectors / ClimateChgEmssnFincSummary.E1 Total Energy Consumption from High Climate Impact Sectors (MWh)) for previous year/(ClimateChgEmssnFincSummary.E1 Net Revenue from High Climate Impact Sectors > 0, then ClimateChgEmssnFincSummary.E1 Net Revenue from High Climate Impact Sectors / ClimateChgEmssnFincSummary.E1 Total Energy Consumption from High Climate Impact Sectors (MWh)) for reporting year |

Disclosure Requirement E1-6 – Gross Scopes 1, 2, 3 and Total GHG emissions

44\. The undertaking shall disclose in metric tonnes of CO2eq its ( 45 ):

(a) gross Scope 1 GHG emissions

(b) gross Scope 2 GHG emissions

(c) gross Scope 3 GHG emissions

(d) total GHG emissions.

| Scope 1 GHG emissions | Base year (tCO2e) | Comparative (N-1)(tCO2e) | Reporting Year Emissions (N)(tCO2e) | % N / N-1 |
| --- | --- | --- | --- | --- |
| Percentage of Scope1 GHG emissions from regulated emission trading schemes (%) | Base year value | Input FieldsClimate Change Emissions and Financial Summary (ClimateChgEmssnFincSummary)E1 Percentage of Scope 1 GHG Emissions from Regulated Emissions Trading Schemes (E1PctScp1GhgEmssnRegltTrdSchm)CalculationGet ClimateChgEmssnFincSummary.E1 Percentage of Scope 1 GHG Emissions from Regulated Emissions Trading Schemes for previous year | Input FieldsClimate Change Emissions and Financial Summary (ClimateChgEmssnFincSummary)E1 Percentage of Scope 1 GHG Emissions from Regulated Emissions Trading Schemes (E1PctScp1GhgEmssnRegltTrdSchm)CalculationGet ClimateChgEmssnFincSummary.E1 Percentage of Scope 1 GHG Emissions from Regulated Emissions Trading Schemes for reporting year | Input FieldsClimate Change Emissions and Financial Summary (ClimateChgEmssnFincSummary)E1 Percentage of Scope 1 GHG Emissions from Regulated Emissions Trading Schemes (E1PctScp1GhgEmssnRegltTrdSchm)CalculationIf(ClimateChgEmssnFincSummary .E1 Percentage of Scope 1 GHG Emissions from Regulated Emissions Trading Schemes from previous year > 0, (ClimateChgEmssnFincSummary.E1 Percentage of Scope 1 GHG Emissions from Regulated Emissions Trading Schemes from reporting year / ClimateChgEmssnFincSummary.E1 Percentage of Scope 1 GHG Emissions from Regulated Emissions Trading Schemes from previous year)*100Else0 |

| Biogenic emissions | Emissions (tCO2e) |
| --- | --- |
| Biogenic emissions of CO2 from the combustion or bio-degradation of biomass not included in Scope 1 GHG emissions | Input FieldsClimate Change Emissions and Financial Summary (ClimateChgEmssnFincSummary)E1 Biogenic CO2 Emissions from Combustion or Biodegradation of Biomass Excluded from Scope 1 GHG Emissions (E1BiogenicCo2EmssnScp1GhgEmssn)CalculationGet ClimateChgEmssnFincSummary.E1 Biogenic CO2 Emissions from Combustion or Biodegradation of Biomass Excluded from Scope 1 GHG Emissions |
| Biogenic emissions of CO2 from combustion or bio-degradation of biomass not included in Scope 2 GHG emissions | Input FieldsClimate Change Emissions and Financial Summary (ClimateChgEmssnFincSummary)E1 Biogenic CO2 Emissions from Combustion or Biodegradation of Biomass Excluded from Scope 2 GHG Emissions (E1BgnCo2EmssnBiomassNotScp2Ghg)CalculationGet ClimateChgEmssnFincSummary.E1 Biogenic CO2 Emissions from Combustion or Biodegradation of Biomass Excluded from Scope 2 GHG Emissions |
| Biogenic emissions of CO2 from combustion or bio-degradation of biomass that occur in value chain not included in Scope 3 GHG emissions | Input FieldsClimate Change Emissions and Financial Summary (ClimateChgEmssnFincSummary)E1 Biogenic CO2 Emissions from Combustion or Biodegradation of Biomass that Occur in Value Chain Excluded from Scope 3 GHG Emissions (E1BgnEmssnCo2BiomassNotScp3Ghg)CalculationGet ClimateChgEmssnFincSummary.E1 Biogenic CO2 Emissions from Combustion or Biodegradation of Biomass that Occur in Value Chain Excluded from Scope 3 GHG Emissions |

Disclosure of types of contractual instruments, Scope 2 GHG emissions:

| Contractual Instruments | Percentage (%) |
| --- | --- |
| Percentage of contractual instruments, Scope 2 GHG emissions | Input FieldsClimate Change Emissions and Financial Summary (ClimateChgEmssnFincSummary)E1 Percentage of Contractual Instruments to Calculate Scope 2 GHG Emissions (E1PctCntrInstrScope2GhgEmssn)CalculationGet ClimateChgEmssnFincSummary.E1 Percentage of Contractual Instruments to Calculate Scope 2 GHG Emissions |
| Percentage of market-based Scope 2 GHG emissions linked to purchased electricity bundled with instruments | Input FieldsClimate Change Emissions and Financial Summary (ClimateChgEmssnFincSummary)E1 Percentage of Contractual Instruments to Calculate Scope 2 GHG Emissions (E1PctCntrInstrScope2GhgEmssn)CalculationGet ClimateChgEmssnFincSummary.E1 Percentage of Contractual Instruments to Calculate Scope 2 GHG Emissions |
| Percentage of contractual instruments used for sale and purchase of energy bundled with attributes about energy generation in relation to Scope 2 GHG emissions | Input FieldsClimate Change Emissions and Financial Summary (ClimateChgEmssnFincSummary)E1 Percentage of Contractual Instruments Used for Sale and Purchase of Energy Bundled with Attributes About Energy Generation in Relation to Scope 2 GHG Emissions (E1PctCntrEnrgyGnrnScp2Emssn)CalculationGet ClimateChgEmssnFincSummary.E1 Percentage of Contractual Instruments Used for Sale and Purchase of Energy Bundled with Attributes About Energy Generation in Relation to Scope 2 GHG Emissions |
| Percentage of Contractual Instruments Used for Sale and Purchase of Unbundled Energy Attribute Claims in Relation to Scope 2 GHG Emissions | Input FieldsClimate Change Emissions and Financial Summary (ClimateChgEmssnFincSummary)E1 Percentage of Contractual Instruments Used for Sale and Purchase of Unbundled Energy Attribute Claims in Relation to Scope 2 GHG Emissions (E1PctCntrPurchEnrgyScp2Emssn)CalculationGet ClimateChgEmssnFincSummary.E1 Percentage of Contractual Instruments Used for Sale and Purchase of Unbundled Energy Attribute Claims in Relation to Scope 2 GHG Emissions |
| Percentage of GHG Scope 3 calculated using primary data | Input FieldsClimate Change Emissions and Financial Summary (ClimateChgEmssnFincSummary)E1 Percentage of Scope 3 GHG Emissions Calculated Using Primary Data (E1PctGhgScp3CalcPrimaryData)CalculationGet ClimateChgEmssnFincSummary.E1 Percentage of Scope 3 GHG Emissions Calculated Using Primary Data |
|  |  |

Disclosure Requirement E1-6 – GHG Intensity based on net revenue ( 46 )

53\. The undertaking shall disclose its GHG emissions intensity (total GHG emissions per net revenue).

| GHG intensity per net revenue | Comparative (N-1) | Reporting Year (N) | % N / N-1 |
| --- | --- | --- | --- |
| Total GHG emissions (location-based) (tCO2e) / Net Revenue) | Input FieldsClimate Change Emissions and Financial Summary (ClimateChgEmssnFincSummary)E1 Net Revenue (E1NetRevenue)Annual Emissions Inventory (AnnualEmssnInventory)Total Scope 1 Emissions (tCO2e) (TotalScope1Emissions)Total Scope 2 Location Based Emissions (TotScope2LocBasedEmssn)Total Scope 3 Emissions (tCO2e) (TotalScope3Emissions)CalculationIf (ClimateChgEmssnFincSummary.E1 Net Revenue > 0 ) then (SUM of AnnualEmssnInventory.Total Scope 1 Emissions (tCO2e) + AnnualEmssnInventory.Total Scope 2 Location Based Emissions + AnnualEmssnInventory.Total Scope 3 Emissions (tCO2e)) for previous year / ClimateChgEmssnFincSummary.E1 Net Revenue)Else 0 | Input FieldsClimate Change Emissions and Financial Summary (ClimateChgEmssnFincSummary)E1 Net Revenue (E1NetRevenue)Annual Emissions Inventory (AnnualEmssnInventory)Total Scope 1 Emissions (tCO2e) (TotalScope1Emissions)Total Scope 2 Location Based Emissions (TotScope2LocBasedEmssn)Total Scope 3 Emissions (tCO2e) (TotalScope3Emissions)CalculationIf (ClimateChgEmssnFincSummary.E1 Net Revenue > 0 ) then (SUM of AnnualEmssnInventory.Total Scope 1 Emissions (tCO2e) + AnnualEmssnInventory.Total Scope 2 Location Based Emissions + AnnualEmssnInventory.Total Scope 3 Emissions (tCO2e)) for reporting year / ClimateChgEmssnFincSummary.E1 Net Revenue)Else 0 | If (Total GHG emissions location based in tCO2e per net revenue of previous year > 0 ) then (Total GHG emissions location based in tCO2e per net revenue of reporting year / Total GHG emissions location based in tCO2e per net revenue of previous year)*100Else 0 |
| Total GHG emissions (market-based) (tCO2e) / Net Revenue) | Input FieldsClimate Change Emissions and Financial Summary (ClimateChgEmssnFincSummary)E1 Net Revenue (E1NetRevenue)Annual Emissions Inventory (AnnualEmssnInventory)Total Scope 1 Emissions (tCO2e) (TotalScope1Emissions)Total Scope 2 Market Based Emissions (TotScope2MarketBsdEmssn)Total Scope 3 Emissions (tCO2e) (TotalScope3Emissions)CalculationIf (ClimateChgEmssnFincSummary.E1 Net Revenue > 0 ) then (SUM of AnnualEmssnInventory.Total Scope 1 Emissions (tCO2e) + AnnualEmssnInventory.Total Scope 2 Market Based Emissions + AnnualEmssnInventory.Total Scope 3 Emissions (tCO2e)) for previous year / ClimateChgEmssnFincSummary.E1 Net Revenue)Else 0 | Input FieldsClimate Change Emissions and Financial Summary (ClimateChgEmssnFincSummary)E1 Net Revenue (E1NetRevenue)Annual Emissions Inventory (AnnualEmssnInventory)Total Scope 1 Emissions (tCO2e) (TotalScope1Emissions)Total Scope 2 Market Based Emissions (TotScope2MarketBsdEmssn)Total Scope 3 Emissions (tCO2e) (TotalScope3Emissions)CalculationIf (ClimateChgEmssnFincSummary.E1 Net Revenue > 0 ) then (SUM of AnnualEmssnInventory.Total Scope 1 Emissions (tCO2e) + AnnualEmssnInventory.Total Scope 2 Market Based Emissions + AnnualEmssnInventory.Total Scope 3 Emissions (tCO2e)) for reporting year / ClimateChgEmssnFincSummary.E1 Net Revenue)Else 0 | If (Total GHG emissions market based in tCO2e per net revenue of previous year > 0 ) then (Total GHG emissions market based in tCO2e per net revenue of reporting year / Total GHG emissions market based in tCO2e per net revenue of previous year)*100Else 0 |

| CSRD Metric | Monetary Amount |
| --- | --- |
| Net Revenue used to calculate GHG Intensity | Input FieldsClimate Change Emissions and Financial Summary (ClimateChgEmssnFincSummary)E1 Net Revenue to Calculate GHG Intensity (E1NetRevenueCalcGhgIntensity)CalculationGet ClimateChgEmssnFincSummary.E1 Net Revenue to Calculate GHG Intensity from reporting year |
| Net Revenue (Other) | Input FieldsClimate Change Emissions and Financial Summary (ClimateChgEmssnFincSummary)E1 Net Revenue Other Than to Calculate GHG Intensity (E1NetRevOthrCalcGhgIntensity)CalculationGet ClimateChgEmssnFincSummary.E1 Net Revenue Other Than to Calculate GHG Intensity from reporting year |
| Total net revenue (in financial statement) | Input FieldsClimate Change Emissions and Financial Summary (ClimateChgEmssnFincSummary)E1 Net Revenue (E1NetRevenue)CalculationGet ClimateChgEmssnFincSummary.E1 Net Revenue from reporting year |

Disclosure Requirement E1-7 – GHG removals and GHG mitigation projects financed through carbon credits

56\. The undertaking shall disclose:

(a) GHG removals and storage in metric tonnes of CO2eq resulting from projects it may have developed in its own operations, or contributed to in its upstream and downstream value chain; and

(b) the amount of GHG emission reductions or removals from climate change mitigation projects outside its value chain it has financed or intends to finance through any purchase of carbon credits.

| Carbon credits cancelled in the reporting year | Comparative (N-1) | Reporting year (N) |
| --- | --- | --- |
| Total (tCO2eq) | Input FieldsCarbon Credit Allocation (CrbnCreditAlloc)Total Carbon Credits Allocated (tCO2e) (TotalCrbnCrAllocInTco2e)Annual Emissions Inventory(AnnualEmssnInventoryId)CalculationFor Aggregated CasesGet CrbnCreditAlloc.Total Carbon Credits Allocated (tCO2e) for OmniForm selected CrbnCreditAlloc.Annual Emissions InventoryFor Non-Aggregated CasesGet CrbnCreditAlloc.Total Carbon Credits Allocated (tCO2e) for CrbnCreditAlloc records with the matching CrbnCreditAlloc.Annual Emissions Inventory |  |
| Share from removal projects (%) | Input FieldsCarbon Credit Project (CrbnCreditProject)Mitigation Type (MitigationType)Sustainability Credit (SustainabilityCredit)Carbon Credit Project (CrbnCreditProjectId)Carbon Credit Allocation (CrbnCreditAlloc)Total Carbon Credits Allocated (tCO2e) (TotalCrbnCrAllocInTco2e)Annual Emissions Inventory(AnnualEmssnInventoryId)Total Carbon Credits Allocated (tCO2e) (TotalCrbnCrAllocInTco2e)Carbon Credit Distribution (CrbnCreditDistribution)Carbon Credit Allocation (CrbnCreditAllocId)Sustainability Credit (SustainabilityCreditId)Total Carbon Credits Allocated (tCO2e) (TotalCrbnCrAllocInTco2e)Logic:Get CrbnCreditProject where MitigationType = ‘Removal’{Get SustainabilityCredit records where Carbon Credit Project = CrbnCreditProject.ID}Get CrbnCreditAlloc where CrbnCreditAlloc.Annual Emissions Inventory.ID=OmniForm selected Annual Emissions Inventory.ID for the same reporting yearGet CrbnCreditDistribution where CrbnCreditDistribution.SustainabilityCreditId = SustainabilityCredit.ID and CrbnCreditDistribution.CrbnCreditAllocId = CrbnCreditAlloc.IDFor Non-Aggregated Cases(SUM(CrbnCreditDistribution.Total Carbon Credits Allocated (tCO2e))/CrbnCreditAlloc.Total Carbon Credits Allocated (tCO2e))*100For Aggregated Cases(SUM(CrbnCreditDistribution.Total Carbon Credits Allocated (tCO2e))/CrbnCreditAlloc.Total Carbon Credits Allocated (tCO2e))*100 corresponding to the accounts in hierarchy with parent company in this format:% Value - AccountNameExample:15.50% - Affiliate Account 120.30% - Subsidiary Account 215.50% - Parent Company20.30% - Subsidiary Account 1 |  |
| Share from reduction projects (%) | Input FieldsCarbon Credit Project (CrbnCreditProject)Mitigation Type (MitigationType)Sustainability Credit (SustainabilityCredit)Carbon Credit Project (CrbnCreditProjectId)Carbon Credit Allocation (CrbnCreditAlloc)Total Carbon Credits Allocated (tCO2e) (TotalCrbnCrAllocInTco2e)Annual Emissions Inventory(AnnualEmssnInventoryId)Total Carbon Credits Allocated (tCO2e) (TotalCrbnCrAllocInTco2e)Carbon Credit Distribution (CrbnCreditDistribution)Carbon Credit Allocation (CrbnCreditAllocId)Sustainability Credit (SustainabilityCreditId)Total Carbon Credits Allocated (tCO2e) (TotalCrbnCrAllocInTco2e)Logic:Get CrbnCreditProject where MitigationType = ‘Reduction’{Get SustainabilityCredit records where Carbon Credit Project = CrbnCreditProject.ID}Get CrbnCreditAlloc where CrbnCreditAlloc.Annual Emissions Inventory.ID=OmniForm selected Annual Emissions Inventory.ID for the same reporting yearGet CrbnCreditDistribution where CrbnCreditDistribution.SustainabilityCreditId = SustainabilityCredit.ID and CrbnCreditDistribution.CrbnCreditAllocId = CrbnCreditAlloc.IDFor Non-Aggregated Cases(SUM(CrbnCreditDistribution.Total Carbon Credits Allocated (tCO2e))/CrbnCreditAlloc.Total Carbon Credits Allocated (tCO2e))*100For Aggregated CasesGet CrbnCreditDistribution where CrbnCreditDistribution.SustainabilityCreditId = SustainabilityCredit.ID and CrbnCreditDistribution.CrbnCreditAllocId = CrbnCreditAlloc.ID corresponding to the accounts in hierarchy with parent company in this format:% Value - AccountNameExample:15.50% - Affiliate Account 120.30% - Subsidiary Account 215.50% - Parent Company20.30% - Subsidiary Account 1 |  |
| Share from projects within the EU (%) | Input FieldsClimate Change Emissions and Financial Summary (ClimateChgEmssnFincSummary)E1 Percentage of Carbon Credits Issued from Projects in European Union (E1PctCrbnCrProjEuropeanUnion)CalculationFor Non-Aggregated CasesGet ClimateChgEmssnFincSummary.E1 Percentage of Carbon Credits Issued from Projects in European Union from previous yearFor Aggregated CasesGet ClimateChgEmssnFincSummary.E1 Percentage of Carbon Credits Issued from Projects in European Union from previous year corresponding to the accounts in hierarchy with parent company in this format:% Value - AccountNameExample:15.50% - Affiliate Account 120.30% - Subsidiary Account 215.50% - Parent Company20.30% - Subsidiary Account 1 | Input FieldsClimate Change Emissions and Financial Summary (ClimateChgEmssnFincSummary)E1 Percentage of Carbon Credits Issued from Projects in European Union (E1PctCrbnCrProjEuropeanUnion)CalculationGet ClimateChgEmssnFincSummary.E1 Percentage of Carbon Credits Issued from Projects in European Union from reporting year |
| Share of carbon credits that qualify as corresponding adjustments (%) | Input FieldsClimate Change Emissions and Financial Summary (ClimateChgEmssnFincSummary)E1 Percentage of Carbon Credits That Qualifies as Corresponding Adjustment (E1PctCrbnCrQualCoresAdjustment)CalculationFor Non-Aggregated CasesGet ClimateChgEmssnFincSummary.E1 Percentage of Carbon Credits That Qualifies as Corresponding Adjustment from previous yearFor Aggregated CasesGet ClimateChgEmssnFincSummary.E1 Percentage of Carbon Credits That Qualifies as Corresponding Adjustment from previous year corresponding to the accounts in hierarchy with parent company in this format:% Value - AccountNameExample:15.50% - Affiliate Account 120.30% - Subsidiary Account 215.50% - Parent Company20.30% - Subsidiary Account 1 | Input FieldsClimate Change Emissions and Financial Summary (ClimateChgEmssnFincSummary)E1 Percentage of Carbon Credits That Qualifies as Corresponding Adjustment (E1PctCrbnCrQualCoresAdjustment)CalculationGet ClimateChgEmssnFincSummary.E1 Percentage of Carbon Credits That Qualifies as Corresponding Adjustment from reporting year |

| Carbon credits planned to be cancelled in the future | Amount |
| --- | --- |
| Total (tCO2eq) | Input FieldsCarbon Credit Project (CrbnCreditProject)Total Carbon Credits Available (tCO2e) (TotalCrbnCrAvlInTco2e)CalculationSum of CrbnCreditProject.Total Carbon Credits Available (tCO2e) |

Disclosure Requirement E1-8 – Internal carbon pricing

62\. The undertaking shall disclose whether it applies internal carbon pricing schemes , and if so, how they support its decision making and incentivise the implementation of climate-related policies and targets .

| Types of internal carbon prices | Volume at stake (tCO2e) | Carbon Price applied per tCO2e | Percentage (%) | Perimeter description |
| --- | --- | --- | --- | --- |
| Carbon price applied for each metric tonne of greenhouse gas emission |  | Input FieldsClimate Change Emissions and Financial Summary (ClimateChgEmssnFincSummary)E1 Carbon Price Applied for Each Metric Tonne of GHG Emissions (E1CrbnPriceMetricTonneGhgEmssn)CalculationFor Non-Aggregated CasesGet ClimateChgEmssnFincSummary.E1 Carbon Price Applied for Each Metric Tonne of GHG Emissions from reporting yearFor Aggregated CasesGet SUM of ClimateChgEmssnFincSummary.E1 Carbon Price Applied for Each Metric Tonne of GHG Emissions from reporting year corresponding to the accounts in hierarchy with parent company |  |  |
| Percentage of gross Scope 1 greenhouse gas emissions covered by internal carbon pricing scheme |  |  | Input FieldsClimate Change Emissions and Financial Summary (ClimateChgEmssnFincSummary)E1 Percentage of Gross Scope 1 GHG Emissions Covered by Internal Carbon Pricing Scheme (E1PctScp1GhgEmssnIntrCrbnPrc)CalculationFor Non-Aggregated CasesGet ClimateChgEmssnFincSummary.E1 Percentage of Gross Scope 1 GHG Emissions Covered by Internal Carbon Pricing Scheme from reporting yearFor Aggregated CasesGet ClimateChgEmssnFincSummary.E1 Percentage of Gross Scope 1 GHG Emissions Covered by Internal Carbon Pricing Scheme from reporting year corresponding to the accounts in hierarchy with parent company in this format:% Value - AccountNameExample:15.50% - Affiliate Account 120.30% - Subsidiary Account 215.50% - Parent Company20.30% - Subsidiary Account 1 |  |
| Percentage of gross Scope 2 greenhouse gas emissions covered by internal carbon pricing scheme |  |  | Input FieldsClimate Change Emissions and Financial Summary (ClimateChgEmssnFincSummary)E1 Percentage of Gross Scope 2 GHG Emissions Covered by Internal Carbon Pricing Scheme (E1PctScp2GhgEmssnIntrCrbnPrc)CalculationFor Non-Aggregated CasesGet ClimateChgEmssnFincSummary.E1 Percentage of Gross Scope 2 GHG Emissions Covered by Internal Carbon Pricing Scheme from reporting yearFor Aggregated CasesGet ClimateChgEmssnFincSummary.E1 Percentage of Gross Scope 2 GHG Emissions Covered by Internal Carbon Pricing Scheme from reporting year corresponding to the accounts in hierarchy with parent company in this format:% Value - AccountNameExample:15.50% - Affiliate Account 120.30% - Subsidiary Account 215.50% - Parent Company20.30% - Subsidiary Account 1 |  |
| Percentage of gross Scope 3 greenhouse gas emissions covered by internal carbon pricing scheme |  |  | Input FieldsClimate Change Emissions and Financial Summary (ClimateChgEmssnFincSummary)E1 Percentage of Gross Scope 3 GHG Emissions Covered by Internal Carbon Pricing Scheme (E1PctScp3GhgEmssnIntrCrbnPrc)CalculationFor Non-Aggregated CasesGet ClimateChgEmssnFincSummary.E1 Percentage of Gross Scope 3 GHG Emissions Covered by Internal Carbon Pricing Scheme from reporting yearFor Aggregated CasesGet ClimateChgEmssnFincSummary.E1 Percentage of Gross Scope 3 GHG Emissions Covered by Internal Carbon Pricing Scheme from reporting year corresponding to the accounts in hierarchy with parent company in this format:% Value - AccountNameExample:15.50% - Affiliate Account 120.30% - Subsidiary Account 215.50% - Parent Company20.30% - Subsidiary Account 1 |  |

Disclosure Requirement E1-9 – Anticipated financial effects from material physical and transition risks and potential climate-related opportunities

64\. The undertaking shall disclose its:

(a) anticipated financial effects from material physical risks ;

(b) anticipated financial effects from material transition risks ; and

(c) potential to benefit from material climate-related opportunities.

|  | Amount | Percentage (%) |
| --- | --- | --- |
| Assets at material physical risk |
| Assets at material physical risk before considering climate change adaptation actions | Input FieldsClimate Change Risk Opportunity Summary (ClimateChgRiskOppSummary)E1 Number of Assets at Material Physical Risk Before Climate Change Adaptation Actions (E1AstMtrlPhyRiskClimateChg)CalculationFor Non-Aggregated CasesGet ClimateChgRiskOppSummary.E1 Number of Assets at Material Physical Risk Before Climate Change Adaptation ActionsFor Aggregated CasesGet SUM of ClimateChgRiskOppSummary.E1 Number of Assets at Material Physical Risk Before Climate Change Adaptation Actions corresponding to the accounts in hierarchy with parent company |  |
| Assets at material physical risk before considering climate change adaptation actions | Input FieldsClimate Change Risk Opportunity Summary (ClimateChgRiskOppSummary)E1 Number of Assets at Acute Material Physical Risk Before Climate Change Adaptation Actions (E1AstAcutMtrlPhyRiskClimateChg)CalculationFor Non-Aggregated CasesGet ClimateChgRiskOppSummary.E1 Number of Assets at Acute Material Physical Risk Before Climate Change Adaptation ActionsFor Aggregated CasesGet SUM of ClimateChgRiskOppSummary.E1 Number of Assets at Acute Material Physical Risk Before Climate Change Adaptation Actions corresponding to the accounts in hierarchy with parent company |  |
| Assets at chronic material physical risk before considering climate change adaptation actions | Input FieldsClimate Change Risk Opportunity Summary (ClimateChgRiskOppSummary)E1 Number of Assets at Chronic Material Physical Risk Before Climate Change Adaptation Actions (E1AstChrncMtrlPhyRiskClimate)CalculationFor Non-Aggregated CasesGet ClimateChgRiskOppSummary.E1 Number of Assets at Chronic Material Physical Risk Before Climate Change Adaptation ActionsFor Aggregated CasesGet SUM of ClimateChgRiskOppSummary.E1 Number of Assets at Chronic Material Physical Risk Before Climate Change Adaptation Actions corresponding to the accounts in hierarchy with parent company |  |
| Percentage of assets at material physical risk before considering climate change adaptation actions |  | Input FieldsClimate Change Risk Opportunity Summary (ClimateChgRiskOppSummary)E1 Percentage of Assets at Material Physical Risk Before Climate Change Adaptation Actions (E1PctAstMtrlRiskBefClimateChg)CalculationFor Non-Aggregated CasesGet ClimateChgRiskOppSummary.E1 Percentage of Assets at Material Physical Risk Before Climate Change Adaptation ActionsFor Aggregated CasesGet ClimateChgRiskOppSummary.E1 Percentage of Assets at Material Physical Risk Before Climate Change Adaptation Actions corresponding to the accounts in hierarchy with parent company in this format:% Value - AccountNameExample:15.50% - Affiliate Account 120.30% - Subsidiary Account 215.50% - Parent Company20.30% - Subsidiary Account 1 |
| Percentage of assets at material physical risk addressed by climate change adaptation actions |  | Input FieldsClimate Change Risk Opportunity Summary (ClimateChgRiskOppSummary)E1 Percentage of Assets at Material Physical Risk Addressed by Climate Change Adaptation Actions (E1PctAstMtrlPhyRiskClimateChg)CalculationFor Non-Aggregated CasesGet ClimateChgRiskOppSummary.E1 Percentage of Assets at Material Physical Risk Addressed by Climate Change Adaptation ActionsFor Aggregated CasesGet ClimateChgRiskOppSummary.E1 Percentage of Assets at Material Physical Risk Addressed by Climate Change Adaptation Actions corresponding to the accounts in hierarchy with parent company in this format:% Value - AccountNameExample:15.50% - Affiliate Account 120.30% - Subsidiary Account 215.50% - Parent Company20.30% - Subsidiary Account 1 |
| Net revenue from business activities at material physical risk | Input FieldsClimate Change Risk Opportunity Summary (ClimateChgRiskOppSummary)E1 Net Revenue from Business Activities at Material Physical Risk (E1NetRevBusActvMtrlPhyRisk)CalculationFor Non-Aggregated CasesGet ClimateChgRiskOppSummary.E1 Net Revenue from Business Activities at Material Physical RiskFor Aggregated CasesGet SUM of ClimateChgRiskOppSummary.E1 Net Revenue from Business Activities at Material Physical Risk corresponding to the accounts in hierarchy with parent company |  |
| Percentage of net revenue from business activities at material physical risk |  | Input FieldsClimate Change Risk Opportunity Summary (ClimateChgRiskOppSummary)E1 Percentage of Net Revenue from Business Activities at Material Physical Risk (E1PctNetRevBusActvMtrlPhyRisk)CalculationFor Non-Aggregated CasesGet ClimateChgRiskOppSummary.E1 Percentage of Net Revenue from Business Activities at Material Physical RiskFor Aggregated CasesGet ClimateChgRiskOppSummary.E1 Percentage of Net Revenue from Business Activities at Material Physical Risk corresponding to the accounts in hierarchy with parent company in this format:% Value - AccountNameExample:15.50% - Affiliate Account 120.30% - Subsidiary Account 215.50% - Parent Company20.30% - Subsidiary Account 1 |
| Assets at material transition risk |
| Assets at material transition risk before considering climate mitigation actions | Input FieldsClimate Change Risk Opportunity Summary (ClimateChgRiskOppSummary)E1 Number of Assets at Material Transition Risk Before Climate Mitigation Actions (E1AstMtrlTrnstRiskBefMitgAct)CalculationFor Non-Aggregated CasesGet ClimateChgRiskOppSummary.E1 Number of Assets at Material Transition Risk Before Climate Mitigation ActionsFor Aggregated CasesGet SUM of ClimateChgRiskOppSummary.E1 Number of Assets at Material Transition Risk Before Climate Mitigation Actions corresponding to the accounts in hierarchy with parent company |  |
| Percentage of assets at material transition risk before considering climate mitigation actions |  | Input FieldsClimate Change Risk Opportunity Summary (ClimateChgRiskOppSummary)E1 Percentage of Assets at Material Transition Risk Before Climate Mitigation Actions (E1PctAstMtrlTrnstRiskBefMitg)CalculationFor Non-Aggregated CasesGet ClimateChgRiskOppSummary.E1 Percentage of Assets at Material Transition Risk Before Climate Mitigation ActionsFor Aggregated CasesGet ClimateChgRiskOppSummary.E1 Percentage of Assets at Material Transition Risk Before Climate Mitigation Actions corresponding to the accounts in hierarchy with parent company in this format:% Value - AccountNameExample:15.50% - Affiliate Account 120.30% - Subsidiary Account 215.50% - Parent Company20.30% - Subsidiary Account 1 |
| Percentage of assets at material transition risk addressed by climate change mitigation actions |  | Input FieldsClimate Change Risk Opportunity Summary (ClimateChgRiskOppSummary)E1 Percentage of Assets at Material Transition Risk Addressed by Climate Change Mitigation Actions (E1PctAstMtrlTrnstRiskAddrMitg)CalculationFor Non-Aggregated CasesGet ClimateChgRiskOppSummary.E1 Percentage of Assets at Material Transition Risk Addressed by Climate Change Mitigation ActionsFor Aggregated CasesGet ClimateChgRiskOppSummary.E1 Percentage of Assets at Material Transition Risk Addressed by Climate Change Mitigation Actions corresponding to the accounts in hierarchy with parent company in this format:% Value - AccountNameExample:15.50% - Affiliate Account 120.30% - Subsidiary Account 215.50% - Parent Company20.30% - Subsidiary Account 1 |
| Total carrying amount of real estate assets by energy efficiency classes | Input FieldsClimate Change Risk Opportunity Summary (ClimateChgRiskOppSummary)E1 Total Amount of Real Estate Assets by Energy Efficiency Classes (E1CarrValRealEstAstEnrgyEfcy)CalculationFor Non-Aggregated CasesGet ClimateChgRiskOppSummary.E1 Total Amount of Real Estate Assets by Energy Efficiency ClassesFor Aggregated CasesGet SUM of ClimateChgRiskOppSummary.E1 Total Amount of Real Estate Assets by Energy Efficiency Classes corresponding to the accounts in hierarchy with parent company |  |
| Estimated amount of potentially stranded assets | Input FieldsClimate Change Risk Opportunity Summary (ClimateChgRiskOppSummary)E1 Estimated Amount of Potentially Stranded Assets (E1EstmtAmtPotStrandedAssets)CalculationFor Non-Aggregated CasesGet ClimateChgRiskOppSummary.E1 Estimated Amount of Potentially Stranded AssetsFor Aggregated CasesGet SUM of ClimateChgRiskOppSummary.E1 Estimated Amount of Potentially Stranded Assets corresponding to the accounts in hierarchy with parent company |  |
| Percentage of estimated share of potentially stranded assets of total assets at material transition risk |  | Input FieldsClimate Change Risk Opportunity Summary (ClimateChgRiskOppSummary)E1 Percentage of Potentially Stranded Assets at Material Transition Risk (E1PctStrandedAstMtrlTranstRisk)CalculationFor Non-Aggregated CasesGet ClimateChgRiskOppSummary.E1 Percentage of Potentially Stranded Assets at Material Transition RiskFor Aggregated CasesGet ClimateChgRiskOppSummary.E1 Percentage of Potentially Stranded Assets at Material Transition Risk corresponding to the accounts in hierarchy with parent company in this format:% Value - AccountNameExample:15.50% - Affiliate Account 120.30% - Subsidiary Account 215.50% - Parent Company20.30% - Subsidiary Account 1 |
| Total carrying amount of real estate assets for which energy consumption is based on internal estimates | Input FieldsClimate Change Risk Opportunity Summary (ClimateChgRiskOppSummary)E1 Total Carrying Amount of Real Estate Assets with Internal Energy Consumption Estimates (E1TotalAmountRealEstateAssets)CalculationFor Non-Aggregated CasesGet ClimateChgRiskOppSummary.E1 Total Carrying Amount of Real Estate Assets with Internal Energy Consumption EstimatesFor Aggregated CasesGet SUM of ClimateChgRiskOppSummary.E1 Total Carrying Amount of Real Estate Assets with Internal Energy Consumption Estimates corresponding to the accounts in hierarchy with parent company |  |
| Liabilities from material transition risks that may have to be recognized in financial statements | Input FieldsClimate Change Risk Opportunity Summary (ClimateChgRiskOppSummary)E1 Material Transition Risk Liabilities Recognized in Financial Statements (E1LiabMtrlTrnstRisksFinclStmt)CalculationFor Non-Aggregated CasesGet ClimateChgRiskOppSummary.E1 Material Transition Risk Liabilities Recognized in Financial StatementsFor Aggregated CasesGet SUM of ClimateChgRiskOppSummary.E1 Material Transition Risk Liabilities Recognized in Financial Statements corresponding to the accounts in hierarchy with parent company |  |
| Number of Scope 1 GHG emission allowances within regulated emission trading schemes | Input FieldsClimate Change Risk Opportunity Summary (ClimateChgRiskOppSummary)E1 Number of Scope 1 GHG Emissions Allowances Within Regulated Emission Trading Schemes (E1NbrScp1GhgEmssnTrdSchemes)CalculationFor Non-Aggregated CasesGet ClimateChgRiskOppSummary.E1 Number of Scope 1 GHG Emissions Allowances Within Regulated Emission Trading SchemesFor Aggregated CasesGet SUM of ClimateChgRiskOppSummary.E1 Number of Scope 1 GHG Emissions Allowances Within Regulated Emission Trading Schemes corresponding to the accounts in hierarchy with parent company |  |

## ESRS E2 Pollution

Disclosure Requirement related to ESRS 2 IRO-1 – Description of the processes to identify and assess material pollution-related impacts, risks and opportunities.

Disclosure Requirement E2-4 – Pollution of air, water and soil 26.

26\. The undertaking shall disclose the pollutants that it emits through its own operations, as well as the microplastics it generates or uses.

| Emissions To Air by Pollutant | Input FieldsPollution Impact Risk Opportunity Summary (PltnImpactRiskOppSummary)E2 Emissions To Air by Pollutant (tCO2e) (E2EmissionsAirPollutant)CalculationSUM of PltnImpactRiskOppSummary.E2 Emissions To Air by Pollutant (tCO2e) |  |
| --- | --- | --- |
| Emissions To Water by Pollutant | Input FieldsPollution Impact Risk Opportunity Summary (PltnImpactRiskOppSummary)E2 Emissions To Water by Pollutant (tCO2e) (E2EmissionsWaterPollutant)CalculationSUM of PltnImpactRiskOppSummary.E2 Emissions To Water by Pollutant (tCO2e) |  |
| Emissions To Soil by Pollutant | Input FieldsPollution Impact Risk Opportunity Summary (PltnImpactRiskOppSummary)E2 Emissions To Soil by Pollutant (tCO2e) (E2EmissionsSoilPollutant)CalculationSUM of PltnImpactRiskOppSummary.E2 Emissions To Soil by Pollutant (tCO2e) |  |
| Percentage of Total Emissions of Pollutants To Water in Areas at Water Risk | Input FieldsPollution Impact Risk Opportunity Summary (PltnImpactRiskOppSummary)E2 Percentage of Total Emissions of Pollutants To Water in Areas at Water Risk (E2PctEmssnPolutWtrAreaWtrRisk)CalculationSUM of PltnImpactRiskOppSummary.E2 Percentage of Total Emissions of Pollutants To Water in Areas at Water Risk |  |
| Percentage of Total Emissions of Pollutants To Water in Areas of High-Water Stress | Input FieldsPollution Impact Risk Opportunity Summary (PltnImpactRiskOppSummary)E2 Percentage of Total Emissions of Pollutants To Water in Areas of High-Water Stress (E2PctEmssnPolutWtrAreaWtrStrss)CalculationSUM of PltnImpactRiskOppSummary.E2 Percentage of Total Emissions of Pollutants To Water in Areas of High-Water Stress |  |
| Percentage of Total Emissions of Pollutants To Soil in Areas at Water Risk | Input FieldsPollution Impact Risk Opportunity Summary (PltnImpactRiskOppSummary)E2 Percentage of Total Emissions of Pollutants To Soil in Areas at Water Risk (E2PctEmssnPolutSoilWtrRisk)CalculationSUM of PltnImpactRiskOppSummary.E2 Percentage of Total Emissions of Pollutants To Soil in Areas at Water Risk |  |
| Percentage of Total Emissions of Pollutants To Soil in Areas of High-Water Stress | Input FieldsPollution Impact Risk Opportunity Summary (PltnImpactRiskOppSummary)E2 Percentage of Total Emissions of Pollutants To Soil in Areas of High-Water Stress (E2PctEmssnPolutSoilWtrStrss)CalculationSUM of PltnImpactRiskOppSummary.E2 Percentage of Total Emissions of Pollutants To Soil in Areas of High-Water Stress |  |

Disclosure Requirement E2-5 – Substances of concern and substances of very high concern

32\. The undertaking shall disclose information on the production, use, distribution, commercialisation and import/export of substances of concern and substances of very high concern, on their own, in mixtures or in articles.

| Total Amount of Substances of Concern Generated, Used During Production, or Procured Broken Down by Main Hazard Classes of Substances of Concern | Input FieldsPollution Impact Risk Opportunity Summary (PltnImpactRiskOppSummary)E2 Total Amount of Substances of Concern Generated, Used During Production, or Procured Broken Down by Main Hazard Classes of Substances of Concern (E2AmountSbstncCncrnHazardCls)CalculationSUM of PltnImpactRiskOppSummary.E2 Total Amount of Substances of Concern Generated, Used During Production, or Procured Broken Down by Main Hazard Classes of Substances of Concern |
| --- | --- |
| Total Amount of Substances of Concern Generated, Used During Production, or Procured | Input FieldsPollution Impact Risk Opportunity Summary (PltnImpactRiskOppSummary)E2 Total Amount of Substances of Concern Generated, Used During Production, or Procured (E2AmountSbstncCncrnProcured)CalculationSUM of PltnImpactRiskOppSummary.E2 Total Amount of Substances of Concern Generated, Used During Production, or Procured |
| Total Amount of Substances of Concern That Leave Facilities as Emissions, Products, or Part of Products or Services | Input FieldsPollution Impact Risk Opportunity Summary (PltnImpactRiskOppSummary)E2 Total Amount of Substances of Concern That Leave Facilities as Emissions, Products, or Part of Products or Services (E2AmtSbstncCncrnEmssnPrdct)CalculationSUM of PltnImpactRiskOppSummary.E2 Total Amount of Substances of Concern That Leave Facilities as Emissions, Products, or Part of Products or Services |
| Amount of Substances of Concern that Leave Facilities as Emissions by Main Hazard Classes of Substances of Concern | Input FieldsPollution Impact Risk Opportunity Summary (PltnImpactRiskOppSummary)E2 Amount of Substances of Concern that Leave Facilities as Emissions by Main Hazard Classes of Substances of Concern (E2AmtSbstncCncrnEmssnHazardCls)CalculationSUM of PltnImpactRiskOppSummary.E2 Amount of Substances of Concern that Leave Facilities as Emissions by Main Hazard Classes of Substances of Concern |
| Amount of Substances of Concern That Leave Facilities as Products by Main Hazard Classes of Substances of Concern | Input FieldsPollution Impact Risk Opportunity Summary (PltnImpactRiskOppSummary)E2 Amount of Substances of Concern That Leave Facilities as Products by Main Hazard Classes of Substances of Concern (E2AmtSbstncCncrnPrdctHazardCls)CalculationSUM of PltnImpactRiskOppSummary.E2 Amount of Substances of Concern That Leave Facilities as Products by Main Hazard Classes of Substances of Concern |
| Amount of Substances of Concern That Leave Facilities as Part of Products by Main Hazard Classes of Substances of Concern | Input FieldsPollution Impact Risk Opportunity Summary (PltnImpactRiskOppSummary)E2 Amount of Substances of Concern That Leave Facilities as Part of Products by Main Hazard Classes of Substances of Concern (E2AmtSbstncCncrnPartPrdctHzrd)CalculationSUM of PltnImpactRiskOppSummary.E2 Amount of Substances of Concern That Leave Facilities as Part of Products by Main Hazard Classes of Substances of Concern |
| Amount of Substances of Concern That Leave Facilities as Services by Main Hazard Classes of Substances of Concern | Input FieldsPollution Impact Risk Opportunity Summary (PltnImpactRiskOppSummary)E2 Amount of Substances of Concern That Leave Facilities as Services by Main Hazard Classes of Substances of Concern (E2AmtSbstncCncrnSrvcsHazardCls)CalculationSUM of PltnImpactRiskOppSummary.E2 Amount of Substances of Concern That Leave Facilities as Services by Main Hazard Classes of Substances of Concern |
| Total Amount of Substances of Very High Concern That Are Generated or Used During Production or Procured by Main Hazard Classes of Substances of Concern | Input FieldsPollution Impact Risk Opportunity Summary (PltnImpactRiskOppSummary)E2 Total Amount of Substances of Very High Concern That Are Generated or Used During Production or Procured by Main Hazard Classes of Substances of Concern (E2TotSbstncHighCncrnGenHzrdCls)CalculationSUM of PltnImpactRiskOppSummary.E2 Total Amount of Substances of Very High Concern That Are Generated or Used During Production or Procured by Main Hazard Classes of Substances of Concern |
| Total Amount of Substances of Very High Concern That Leave Facilities as Emissions, Products, or Part of Products or Services by Main Hazard Classes of Substances of Concern | Input FieldsPollution Impact Risk Opportunity Summary (PltnImpactRiskOppSummary)E2 Total Amount of Substances of Very High Concern That Leave Facilities as Emissions, Products, or Part of Products or Services by Main Hazard Classes of Substances of Concern (E2TotSbstncHighCncrnPrdctHzrd)CalculationSUM of PltnImpactRiskOppSummary.E2 Total Amount of Substances of Very High Concern That Leave Facilities as Emissions, Products, or Part of Products or Services by Main Hazard Classes of Substances of Concern |
| Amount of Substances of Very High Concern That Leave Facilities as Emissions by Main Hazard Classes of Substances of Concern | Input FieldsPollution Impact Risk Opportunity Summary (PltnImpactRiskOppSummary)E2 Amount of Substances of Very High Concern That Leave Facilities as Emissions by Main Hazard Classes of Substances of Concern (E2AmtSbstncHighCncrnEmssnHzrd)CalculationSUM of PltnImpactRiskOppSummary.E2 Amount of Substances of Very High Concern That Leave Facilities as Emissions by Main Hazard Classes of Substances of Concern |
| Amount of Substances of Very High Concern That Leave Facilities as Products by Main Hazard Classes of Substances of Concern | Input FieldsPollution Impact Risk Opportunity Summary (PltnImpactRiskOppSummary)E2 Amount of Substances of Very High Concern That Leave Facilities as Products by Main Hazard Classes of Substances of Concern (E2AmtSbstncHighCncrnPrdctHzrd)CalculationSUM of PltnImpactRiskOppSummary.E2 Amount of Substances of Very High Concern That Leave Facilities as Products by Main Hazard Classes of Substances of Concern |
| Amount of Substances of Very High Concern That Leave Facilities as Part of Products by Main Hazard Classes of Substances of Concern | Input FieldsPollution Impact Risk Opportunity Summary (PltnImpactRiskOppSummary)E2 Amount of Substances of Very High Concern That Leave Facilities as Part of Products by Main Hazard Classes of Substances of Concern (E2AmtSbstncHighCncrnPartHzrd)CalculationSUM of PltnImpactRiskOppSummary.E2 Amount of Substances of Very High Concern That Leave Facilities as Part of Products by Main Hazard Classes of Substances of Concern |
| Amount of Substances of Very High Concern That Leave Facilities as Services by Main Hazard Classes of Substances of Concern | Input FieldsPollution Impact Risk Opportunity Summary (PltnImpactRiskOppSummary)E2 Amount of Substances of Very High Concern That Leave Facilities as Services by Main Hazard Classes of Substances of Concern (E2AmtSbstncHighCncrnSrvcsHzrd)CalculationSUM of PltnImpactRiskOppSummary.E2 Amount of Substances of Very High Concern That Leave Facilities as Services by Main Hazard Classes of Substances of Concern |

Disclosure Requirement E2-6 – Anticipated financial effects from material pollution-related risks and opportunities.

36.The undertaking shall disclose the anticipated financial effects of material pollution-related risks and opportunities.

| Disclosure of quantitative information about anticipated financial effects of material risks and opportunities arising from pollution-related impacts | Input FieldsPollution Impact Risk Opportunity Summary (PltnImpactRiskOppSummary)E2 Anticipated Financial Effect of Material Risks and Opportunities Arising from Pollution-Related Impacts (E2AntcpFinclEffMaterialRisks)CalculationSUM of PltnImpactRiskOppSummary.E2 Anticipated Financial Effect of Material Risks and Opportunities Arising from Pollution-Related Impacts |
| --- | --- |
| Operating Expenditure (OpEx) Incurred in Conjunction with Major Incidents and Deposits (Pollution) | Input FieldsPollution Impact Risk Opportunity Summary (PltnImpactRiskOppSummary)E2 Operating Expenditure (OpEx) Incurred in Conjunction with Major Incidents and Deposits (Pollution) (E2OpExpIncidentsDeposits)CalculationSUM of PltnImpactRiskOppSummary.E2 Operating Expenditure (OpEx) Incurred in Conjunction with Major Incidents and Deposits (Pollution) |
| Capital Expenditure (CapEx) Incurred in Conjunction with Major Incidents and Deposits (Pollution) | Input FieldsPollution Impact Risk Opportunity Summary (PltnImpactRiskOppSummary)E2 Capital Expenditure (CapEx) Incurred in Conjunction with Major Incidents and Deposits (Pollution) (E2CptlExpIncidentsDeposits)CalculationSUM of PltnImpactRiskOppSummary.E2 Capital Expenditure (CapEx) Incurred in Conjunction with Major Incidents and Deposits (Pollution) |
| Provisions for Environmental Protection and Remediation Costs (Pollution) | Input FieldsPollution Impact Risk Opportunity Summary (PltnImpactRiskOppSummary)E2 Provisions for Environmental Protection and Remediation Costs (Pollution) (E2PrvsnEnvrPrtcRemediationCost)CalculationSUM of PltnImpactRiskOppSummary.E2 Provisions for Environmental Protection and Remediation Costs (Pollution) |
| Percentage of Net Revenue from Products and Services Containing Substances of Concern | Input FieldsPollution Impact Risk Opportunity Summary (PltnImpactRiskOppSummary)E2 Percentage of Net Revenue from Products and Services Containing Substances of Concern (E2PctNetRevSrvcsSbstncCncrn)CalculationSUM of PltnImpactRiskOppSummary.E2 Percentage of Net Revenue from Products and Services Containing Substances of Concern |
| Percentage of Net Revenue from Products and Services Containing Substances of Very High Concern | Input FieldsPollution Impact Risk Opportunity Summary (PltnImpactRiskOppSummary)E2 Percentage of Net Revenue from Products and Services Containing Substances of Very High Concern (E2PctNetRevSvcSbstncHighCncrn)CalculationSUM of PltnImpactRiskOppSummary.E2 Percentage of Net Revenue from Products and Services Containing Substances of Very High Concern |

## ESRS E3 Water and marine resources

Disclosure Requirement related to ESRS 2 IRO-1 – Description of the processes to identify and assess material water and marine resources-related impacts, risks and opportunities 8. The undertaking shall describe the process to identify material impacts, risks and opportunities and shall provide information on:

(a) whether and how the undertaking it has screened its assets and activities in order to identify its actual and potential water and marine resources -related impacts, risks and opportunities in its own operations and its upstream and downstream value chain , and if so the methodologies, assumptions and tools used in the screening;

(b) whether and how it has conducted consultations, in particular, with affected communities ( 71 ).

Disclosure Requirement E3-4 – Water consumption

28\. The disclosure required by paragraph 26 relates to own operations and shall include:

(a) total water consumption in m3;

(b) total water consumption in m3 in areas at water risk, including areas of high-water stress ;

(c) total water recycled and reused in m3; ( 75 )

(d) total water stored and changes in storage in m3; and

(e) any contextual information necessary regarding points (a) to (d), including the water basins’ water quality and quantity, how the data have been compiled, such as any standards, methodologies, and assumptions used, including whether the information is calculated, estimated, modelled, or sourced from direct measurements, and the approach taken for this, such as the use of any sector-specific factors.

| Total water consumption | Input FieldsStationary Asset Water Footprint (StnryAssetWaterFtprnt)Total Consumption (Ml) (TotalConsumptionInMl)Calculation(SUM of StnryAssetWaterFtprnt.Total Consumption (Ml) * 1000.0 |
| --- | --- |
| Total water consumption in areas at water risk, including areas of high-water stress | Input FieldsStationary Asset Water Activity (StnryAssetWaterActvty)Quantity (m3) (QuantityInM3)Reporting Year (ReportingYear)Start Date (StartDate)End Date (EndDate)Environmental Risk (EnvironmentalRisk)Baseline Stress (BaselineStress)Stationary Asset Environmental Source (StnryAssetEnvrSrc)CalculationSUM of StnryAssetWaterActvty.Quantity (m3) Where EnvironmentalRisk.Baseline Stress = 'High' AND (...footprint filter)For StnryAssetWaterActvty, the filtering of the records that match the reporting year: StnryAssetWaterActvty.Reporting Year = report year OR StnryAssetWaterActvty.Start Date within report year range, OR StnryAssetWaterActvty.End Date within report year range.For StnryAssetWaterActvty, the filtering of the records that match the accounts included in the report: StnryAssetEnvrSrc.Account |
| Total water recycled and reused | Input FieldsStationary Asset Water Activity (StnryAssetWaterActvty)Quantity (m3) (QuantityInM3)Activity Source Type (ActivitySourceType)Reporting Year (ReportingYear)Start Date (StartDate)End Date (EndDate)CalculationSUM of StnryAssetWaterActvty.Quantity (m3) WHERE StnryAssetWaterActvty.Activity Source Type IN ('Recycled Water', 'Reused Water') AND StnryAssetWaterActvty.Activity Type = 'Consumption' AND (...footprint filter)For StnryAssetWaterActvty, the filtering of the records that match the reporting year: StnryAssetWaterActvty.Reporting Year = report year OR StnryAssetWaterActvty.Start Date within report year range, OR StnryAssetWaterActvty.End Date within report year range.For StnryAssetWaterActvty, the filtering of the records that match the accounts included in the report: StnryAssetEnvrSrc.Account |
| Total water stored | Input FieldsStationary Asset Water Footprint (StnryAssetWaterFtprnt)Total Storage (Ml) (TotalStorageInMl)CalculationSUM of StnryAssetWaterFtprnt.Total Storage (Ml) * 1000.0 |
| Changes in water storage | Input FieldsStationary Asset Water Footprint (StnryAssetWaterFtprnt)Total Storage (Ml) (TotalStorageInMl)Total Storage During Previous Year (m3) (TotalStorageDuringPreviousYear)Calculation(1000.0 * (SUM of StnryAssetWaterFtprnt.Total Storage (Ml)) - (SUM of StnryAssetWaterFtprnt.Total Storage During Previous Year (m3)) |
| Share of the measure obtained from direct measurement, from sampling and extrapolation, or from best estimates | Input FieldsStationary Asset Water Activity (StnryAssetWaterActvty)Quantity (m3) (QuantityInM3)Activity Type (ActivityType)Water Data Measurement (WaterDataMeasurement)CalculationDirect Quantity = (SUM of StnryAssetWaterActvty.Quantity (m3) WHERE StnryAssetWaterActvty.Activity Type = 'Consumption' AND StnryAssetWaterActvty.Water Data Measurement IN ('DirectMeasurement', 'BestEstimate', 'SamplingAndExtrapolation') AND (...footprint filter))Total Quantity = (SUM of StnryAssetWaterActvty.Quantity (m3) WHERE StnryAssetWaterActvty.Activity Type = 'Consumption' AND (...footprint filter))Result = Direct Quantity / Total Quantity (or 0 if either are missing)For StnryAssetWaterActvty, the filtering of the records that match the reporting year: StnryAssetWaterActvty.Reporting Year = report year OR StnryAssetWaterActvty.Start Date within report year range, OR StnryAssetWaterActvty.End Date within report year range.For StnryAssetWaterActvty, the filtering of the records that match the accounts included in the report: StnryAssetEnvrSrc.Account |
| Water intensity ratio | Input FieldsStationary Asset Water Footprint (StnryAssetWaterFtprnt)Total Consumption (Ml) (TotalConsumptionInMl)Climate Change Emissions and Financial Summary (ClimateChgEmssnFincSummary)E1 Net Revenue to Calculate GHG Intensity (E1NetRevenueCalcGhgIntensity)Calculation(1000.0 * (SUM of StnryAssetWaterFtprnt.Total Consumption (Ml)) / (SUM of ClimateChgEmssnFincSummary.E1 Net Revenue to Calculate GHG Intensity) |
| Total water discharges | Input FieldsStationary Asset Water Footprint (StnryAssetWaterFtprnt)Total Discharge (Ml) (TotalDischargeInMl)Calculation1000.0 * (SUM of StnryAssetWaterFtprnt.Total Discharge (Ml)) |

## ESRS E4 Biodiversity and ecosystems

Disclosure Requirement E4-1 – Transition plan and consideration of biodiversity and ecosystems in strategy and business model

43\. The information required by paragraph 42 is in addition to the information on current financial effects on the entity’s financial position, financial performance and cash flows for the reporting period required under ESRS 2 SBM-3 para 48 (d).

| Financing effects (direct and indirect costs) of biodiversity offsets | Input FieldsBiodiversity Summary (BiodiversitySummary)E4 Direct and Indirect Costs of Biodiversity Offsets (E4DirIdirCostsBiodiversityOfst)CalculationBiodiversitySummary.E4 Direct and Indirect Costs of Biodiversity Offsets |
| --- | --- |
| Number of Sites Owned, Leased, or Managed In or Near Protected Areas That the Company is Negatively Affecting | Input FieldsBiodiversity Summary (BiodiversitySummary)E4 Number of Sites Owned, Leased, or Managed In or Near Protected Areas That the Company is Negatively Affecting (E4NbrSiteOwnLsdMngPrtcAreas)CalculationBiodiversitySummary.E4 Number of Sites Owned, Leased, or Managed In or Near Protected Areas That the Company is Negatively Affecting |
| Area of Sites Owned, Leased, or Managed In or Near Protected Areas or Key Biodiversity Areas That the Company is Negatively Affecting | Input FieldsBiodiversity Summary (BiodiversitySummary)E4 Area of Sites Owned, Leased, or Managed In or Near Protected Areas or Key Biodiversity Areas That the Company is Negatively Affecting (E4NbrSiteOwnLsdMngBiodiversity)CalculationBiodiversitySummary.E4 Area of Sites Owned, Leased, or Managed In or Near Protected Areas or Key Biodiversity Areas That the Company is Negatively Affecting |
| Total Use of Land | Input FieldsBiodiversity Summary (BiodiversitySummary)E4 Total Use of Land (E4TotalUseLand)CalculationBiodiversitySummary.E4 Total Use of Land |
| Total Sealed Area | Input FieldsBiodiversity Summary (BiodiversitySummary)E4 Total Sealed Area (E4TotalSealedArea)CalculationBiodiversitySummary.E4 Total Sealed Area |
| Nature-Oriented Area on Site | Input FieldsBiodiversity Summary (BiodiversitySummary)E4 Nature-Oriented Area on Site (E4NatureOrientedAreaOnSite)CalculationBiodiversitySummary.E4 Nature-Oriented Area on Site |
| Nature-Oriented Area Off Site | Input FieldsBiodiversity Summary (BiodiversitySummary)E4 Nature-Oriented Area Off Site (E4NatureOrientedAreaOffSite)CalculationBiodiversitySummary.E4 Nature-Oriented Area Off Site |
| Number of Invasive Alien Species | Input FieldsBiodiversity Summary (BiodiversitySummary)E4 Number of Invasive Alien Species (E4NumberInvasiveAlienSpecies)CalculationBiodiversitySummary.E4 Number of Invasive Alien Species |
| Area Covered by Invasive Alien Species | Input FieldsBiodiversity Summary (BiodiversitySummary)E4 Area Covered by Invasive Alien Species (E4AreaCvInvasiveAlienSpecies)CalculationBiodiversitySummary.E4 Area Covered by Invasive Alien Species |
| Disclosure of quantitative information about anticipated financial effects of material risks and opportunities arising from biodiversity- and ecosystem-related impacts and dependencies | Input FieldsBiodiversity Summary (BiodiversitySummary)E4 Anticipated Financial Effects Due to Material Risks and Opportunities Arising from Biodiversity and Ecosystem-Related Impacts and Dependencies (E4AntcpFinclEffMaterialRisks)CalculationBiodiversitySummary.E4 Anticipated Financial Effects Due to Material Risks and Opportunities Arising from Biodiversity and Ecosystem-Related Impacts and Dependencies |

## ESRS E5 Resource use and circular economy

Disclosure Requirement related to ESRS 2 IRO-1 – Description of the processes to identify and assess material resource use and circular economy-related impacts, risks and opportunities

Disclosure Requirement E5-4 – Resource inflows

31\. When an undertaking assesses that resource inflows is a material sustainability matter, it shall disclose the following information about the materials used to manufacture the undertaking’s products and services during the reporting period, in tonnes or kilogrammes:

(a) the overall total weight of products and technical and biological materials used during the reporting period;

(b) the percentage of biological materials (and biofuels used for non-energy purposes) used to manufacture the undertaking’s products and services (including packaging ) that is sustainably sourced, with the information on the certification scheme used and on the application of the cascading principle; and

(c) the weight in both absolute value and percentage, of secondary reused or recycled components, secondary intermediary products and secondary materials used to manufacture the undertaking’s products and services (including packaging)

| Overall total weight of products and technical and biological materials used during the reporting period | Input FieldsSustainability Material Use Summary (SustnMaterialUseSummary)E5 Total Weight of Products and Technical and Biological Materials Used (in Kg) (E5WtPrdctTechBiolMaterials)CalculationSUM of SustnMaterialUseSummary.E5 Total Weight of Products and Technical and Biological Materials Used (in Kg) |
| --- | --- |
| Percentage of biological materials (and biofuels used for non-energy purposes) | Input FieldsSustainability Material Use Summary (​​SustnMaterialUseSummary)E5 Percentage of Biological Materials and Biofuels Used for Non-Energy Purposes (E5PctBiologicalMaterials)CalculationSUM of SustnMaterialUseSummary.E5 Percentage of Biological Materials and Biofuels Used for Non-Energy Purposes |
| The absolute weight of secondary reused or recycled components, secondary intermediary products and secondary materials used to manufacture the undertaking’s products and services (including packaging) | Input FieldsSustainability Material Use Summary (​​SustnMaterialUseSummary)E5 Absolute Weight of Secondary Reused or Recycled Components, Secondary Intermediary Products, and Secondary Materials Used to Manufacture the Company's Products and Services Including Packaging (Kg) (E5WtScndReusedRecycComponents)CalculationSUM of ​​SustnMaterialUseSummary.E5 Absolute Weight of Secondary Reused or Recycled Components, Secondary Intermediary Products, and Secondary Materials Used to Manufacture the Company's Products and Services Including Packaging (Kg) |
| Percentage of secondary reused or recycled components, secondary intermediary products and secondary materials | Input FieldsSustainability Material Use Summary (SustnMaterialUseSummary)E5 Percentage of Secondary Reused or Recycled Components, Secondary Intermediary Products, and Secondary Materials (E5PctWtScndReusedRecycCmpnt)CalculationSUM of SustnMaterialUseSummary.E5 Percentage of Secondary Reused or Recycled Components, Secondary Intermediary Products, and Secondary Materials |

Disclosure Requirement E5-5 – Resource outflows

36\. Undertakings for which outflows are material shall disclose:

(a) The expected durability of the products placed on the market by the undertaking, in relation to the industry average for each product group;

(b) The reparability of products, using an established rating system, where possible;

(c) The rates of recyclable content in products and their packaging

| The rates of recyclable content in products | Input FieldsSustainability Material Use Summary (SustnMaterialUseSummary)E5 Rate of Recyclable Content in Products (E5RateRecyclableCntntProducts)CalculationSUM of SustnMaterialUseSummary.E5 Rate of Recyclable Content in Products |
| --- | --- |
| The rates of recyclable content in products packaging | Input FieldsSustainability Material Use Summary (SustnMaterialUseSummary)E5 Rate of Recyclable Content in Product Packaging (E5RtRecyclableCntntPrdctPkg)CalculationSUM of SustnMaterialUseSummary.E5 Rate of Recyclable Content in Product Packaging |

Disclosure Requirement E5-5 – Resource outflows

37\. The undertaking shall disclose the following information on its total amount of waste from its own operations, in tonnes or kilogrammes:

(a) the total amount of waste generated

| Total Waste generated | Input FieldsWaste Footprint (WasteFootprint)Total Waste Quantity in Tonnes (TotalWasteQuantityinTonnes)Reporting Year (ReportingYear)Start Date (StartDate)End Date (EndDate)CalculationSUM of WasteFootprint.Total Waste Quantity in TonnesFor WasteFootprint, the filtering of the records that match the reporting year: WasteFootprint.Reporting Year = report year OR WasteFootprint.Start Date within report year range, OR WasteFootprint.End Date within report year range.For WasteFootprint, the filtering of the records that match the accounts included in the report: StnryAssetEnvrSrc.Account |
| --- | --- |

Disclosure Requirement E5-5 – Resource outflows

(b) the total amount by weight diverted from disposal, with a breakdown between hazardous waste and non-hazardous waste and a breakdown by the following recovery operation types:

i. preparation for reuse;

ii. recycling ; and

iii. other recovery operations.

(c) the amount by weight directed to disposal by waste treatment type and the total amount summing all three types, with a breakdown between hazardous waste and non-hazardous waste. The waste treatment types to be disclosed are:

i. incineration ;

ii. landfill; and

iii. other disposal operations;

(d) the total amount and percentage of non-recycled waste

Calculation filtering: For ALL queries on GeneratedWaste, this applies.

For GeneratedWaste, the filtering of the records that match the reporting year: Reporting Year = report year OR Start Date within report year range, OR End Date within report year range.

For GeneratedWaste, the filtering of the records that match the accounts included in the report: StnryAssetEnvrSrc.Account OR Scope3EmssnSrc.Account

| ​ | ​ Hazardous Waste | ​Non-Hazardous Waste |
| --- | --- | --- |
| ​Total amount of waste diverted from disposal (in Tonnes) | Generated Waste (GeneratedWaste)Disposed Waste Quantity in Tonnes (DisposedWasteQuantityinTonnes)Hazardous (IsHazardous)Disposal Type (DisposalType)CalculationSUM of GeneratedWaste.Disposed Waste Quantity in Tonnes WHERE GeneratedWaste.Hazardous = TRUE AND GeneratedWaste.Disposal Type IN (‘Recycled’, ‘Preparation for Reuse’, ‘Other Recovery Operations’) | ​Generated Waste (GeneratedWaste)Disposed Waste Quantity in Tonnes (DisposedWasteQuantityinTonnes)Hazardous (IsHazardous)Disposal Type (DisposalType)CalculationSUM of GeneratedWaste.Disposed Waste Quantity in Tonnes WHERE GeneratedWaste.Hazardous = FALSE AND GeneratedWaste.Disposal Type IN (‘Recycled’, ‘Preparation for Reuse’, ‘Other Recovery Operations’) |
| ​ Amount - Recycled | ​{Generated Waste (GeneratedWaste)Disposed Waste Quantity in Tonnes (DisposedWasteQuantityinTonnes)Hazardous (IsHazardous)Disposal Type (DisposalType)​Calculation:SUM of GeneratedWaste.Disposed Waste Quantity in Tonnes WHERE GeneratedWaste.Hazardous = TRUE AND GeneratedWaste.Disposal Type = ‘Recycled’ | ​{Generated Waste (GeneratedWaste)Disposed Waste Quantity in Tonnes (DisposedWasteQuantityinTonnes)Hazardous (IsHazardous)Disposal Type (DisposalType)​Calculation:SUM of GeneratedWaste.Disposed Waste Quantity in Tonnes WHERE GeneratedWaste.Hazardous = FALSE AND GeneratedWaste.Disposal Type = ‘Recycled’ |
| ​ Amount - Prepared for Reuse | ​Generated Waste (GeneratedWaste)Disposed Waste Quantity in Tonnes (DisposedWasteQuantityinTonnes)Hazardous (IsHazardous)Disposal Type (DisposalType)​Calculation:SUM of GeneratedWaste.Disposed Waste Quantity in Tonnes WHERE GeneratedWaste.Hazardous = TRUE AND GeneratedWaste.Disposal Type = ‘Preparation for Reuse’ | ​{Generated Waste (GeneratedWaste)Disposed Waste Quantity in Tonnes (DisposedWasteQuantityinTonnes)Hazardous (IsHazardous)Disposal Type (DisposalType)​Calculation:SUM of GeneratedWaste.Disposed Waste Quantity in Tonnes WHERE GeneratedWaste.Hazardous = FALSE AND GeneratedWaste.Disposal Type = ‘Preparation for Reuse’ |
| ​Amount - Other Recovery Operations | ​Generated Waste (GeneratedWaste)Disposed Waste Quantity in Tonnes (DisposedWasteQuantityinTonnes)Hazardous (IsHazardous)Disposal Type (DisposalType)CalculationSUM of GeneratedWaste.Disposed Waste Quantity in Tonnes WHERE GeneratedWaste.Hazardous = TRUE AND GeneratedWaste.Disposal Type = ‘Other Recovery Operations’ | ​{Generated Waste (GeneratedWaste)Disposed Waste Quantity in Tonnes (DisposedWasteQuantityinTonnes)Hazardous (IsHazardous)Disposal Type (DisposalType)​Calculation:SUM of GeneratedWaste.Disposed Waste Quantity in Tonnes WHERE GeneratedWaste.Hazardous = FALSE AND GeneratedWaste.Disposal Type = ‘Other Recovery Operations’ |
| ​Total amount of waste directed to disposal (in Tonnes) | ​{Generated Waste (GeneratedWaste)Disposed Waste Quantity in Tonnes (DisposedWasteQuantityinTonnes)Hazardous (IsHazardous)Disposal Type (DisposalType)​Calculation:SUM of GeneratedWaste.Disposed Waste Quantity in Tonnes WHERE GeneratedWaste.Hazardous = TRUE AND GeneratedWaste.Disposal Type IN (‘Combustion’, ‘Landfilled’, ‘Other Disposal Operations’) | ​Generated Waste (GeneratedWaste)Disposed Waste Quantity in Tonnes (DisposedWasteQuantityinTonnes)Hazardous (IsHazardous)Disposal Type (DisposalType)CalculationSUM of GeneratedWaste.Disposed Waste Quantity in Tonnes WHERE GeneratedWaste.Hazardous = FALSE AND GeneratedWaste.Disposal Type IN (‘Combustion’, ‘Landfilled’, ‘Other Disposal Operations’) |
| ​ Amount - Combusted | ​{Generated Waste (GeneratedWaste)Disposed Waste Quantity in Tonnes (DisposedWasteQuantityinTonnes)Hazardous (IsHazardous)Disposal Type (DisposalType)​Calculation:SUM of GeneratedWaste.Disposed Waste Quantity in Tonnes WHERE GeneratedWaste.Hazardous = TRUE AND GeneratedWaste.Disposal Type = ‘‘Combustion’ | ​{Generated Waste (GeneratedWaste)Disposed Waste Quantity in Tonnes (DisposedWasteQuantityinTonnes)Hazardous (IsHazardous)Disposal Type (DisposalType)​Calculation:SUM of GeneratedWaste.Disposed Waste Quantity in Tonnes WHERE GeneratedWaste.Hazardous = FALSE AND GeneratedWaste.Disposal Type = ‘‘Combustion’ |
| ​ Amount - LandFilled | ​{Generated Waste (GeneratedWaste)Disposed Waste Quantity in Tonnes (DisposedWasteQuantityinTonnes)Hazardous (IsHazardous)Disposal Type (DisposalType)​Calculation:SUM of GeneratedWaste.Disposed Waste Quantity in Tonnes WHERE GeneratedWaste.Hazardous = TRUE AND GeneratedWaste.Disposal Type = ‘Landfilled’ | ​{Generated Waste (GeneratedWaste)Disposed Waste Quantity in Tonnes (DisposedWasteQuantityinTonnes)Hazardous (IsHazardous)Disposal Type (DisposalType)​Calculation:SUM of GeneratedWaste.Disposed Waste Quantity in Tonnes WHERE GeneratedWaste.Hazardous = FALSE AND GeneratedWaste.Disposal Type = ‘Landfilled’ |
| ​Amount - Other Disposal Operations | ​{Generated Waste (GeneratedWaste)Disposed Waste Quantity in Tonnes (DisposedWasteQuantityinTonnes)Hazardous (IsHazardous)Disposal Type (DisposalType)​Calculation:SUM of GeneratedWaste.Disposed Waste Quantity in Tonnes WHERE GeneratedWaste.Hazardous = TRUE AND GeneratedWaste.Disposal Type = ‘Other Disposal Operations’ | ​{Generated Waste (GeneratedWaste)Disposed Waste Quantity in Tonnes (DisposedWasteQuantityinTonnes)Hazardous (IsHazardous)Disposal Type (DisposalType)CalculationSUM of GeneratedWaste.Disposed Waste Quantity in Tonnes WHERE GeneratedWaste.Hazardous = FALSE AND GeneratedWaste.Disposal Type = ‘Other Disposal Operations’ |

Non-recycled waste (in Tonnes):

​Generated Waste (GeneratedWaste)

-   Disposed Waste Quantity in Tonnes (DisposedWasteQuantityinTonnes)

-   Disposal Type (DisposalType)


**Calculation**

SUM of GeneratedWaste.Disposed Waste Quantity in Tonnes WHERE GeneratedWaste.Disposal Type IN ('Preparation for Reuse', 'Other Recovery Operations', 'Combustion', 'Landfilled', 'Other Disposal Operations')

​Percentage of non-recycled waste:

​​Generated Waste (GeneratedWaste)

-   Disposed Waste Quantity in Tonnes (DisposedWasteQuantityinTonnes)

-   Disposal Type (DisposalType)


**Calculation**

​​​“Non-recycled waste (in Tonnes)” value above / Total waste (in Tonnes)

The “Total waste (in Tonnes)” is: SUM of GeneratedWaste.Disposed Waste Quantity in Tonnes WHERE GeneratedWaste.Disposal Type IN ('Recycled', 'Preparation for Reuse', 'Other Recovery Operations', 'Combustion', 'Landfilled', 'Other Disposal Operations')

Disclosure Requirement E5-5 – Resource outflows

39\. The undertaking shall also disclose the total amount of hazardous waste and radioactive waste generated by the undertaking, where radioactive waste is defined in Article 3(7) of Council Directive 2011/70/Euratom

| Total amount of hazardous waste | Input FieldsGenerated Waste (GeneratedWaste)Disposed Waste Quantity in Tonnes (DisposedWasteQuantityinTonnes)Hazardous (IsHazardous)CalculationSUM of Disposed Waste Quantity in Tonnes WHERE GeneratedWaste.Hazardous = TRUE |
| --- | --- |
| Total amount of radioactive waste | Input FieldsGenerated Waste (GeneratedWaste)Disposed Waste Quantity in Tonnes (DisposedWasteQuantityinTonnes)Radioactive (IsRadioactive)CalculationSUM of GeneratedWaste.Disposed Waste Quantity in Tonnes WHERE GeneratedWaste.Radioactive = TRUE |

Disclosure Requirement E5-6 – Anticipated financial effects from material resource use and circular economy-related risks and opportunities

43\. The disclosure shall include:

(a) a quantification of the anticipated financial effects in monetary terms before considering resource use and circular economy-related actions, or where not possible without undue cost or effort, qualitative information. For financial effects arising from material opportunities, a quantification is not required if it would result in disclosure that does not meet the qualitative characteristics of information (see ESRS 1 Appendix B Qualitative characteristics of information );

| Disclosure of quantitative information about anticipated financial effects of material risks and opportunities arising from resource use and circular economy-related impacts | Input FieldsSustainability Material Use Summary (SustnMaterialUseSummary)E5 Anticipated Financial Effects of Material Risks and Opportunities from Resource Use and Circular Economy-Related Impacts (E5AntcpFinclEffMaterialRisks)CalculationSUM of SustnMaterialUseSummary.E5 Anticipated Financial Effects of Material Risks and Opportunities from Resource Use and Circular Economy-Related Impacts |
| --- | --- |

## ESRS S1 Own workforce

Disclosure Requirement S1-6 – Characteristics of the undertaking’s employees

50\. In addition to the information required by paragraph 40(a)iii of ESRS 2 General Disclosures , the undertaking shall disclose:

(a) the total number of employees by head count, and breakdowns by gender and by country for countries in which the undertaking has 50 or more employees representing at least 10% of its total number of employees;

| Gender | Number of employees (head count) |
| --- | --- |
| Input FieldsEmployee Demographic Summary (EmployeeDemographicSum)Gender (Gender)Employee Count (EmployeeCount)Report Type (ReportType)Employment Type (EmploymentType)CalculationGet EmployeeDemographicSum.Gender and SUM(EmployeeDemographicSum.EmployeeCount) where EmployeeDemographicSum.ReportType='Headcount' and EmployeeDemographicSum.EmploymentType not in ('Non-Employee or Self-Employed', 'Provided By Undertakings') group by EmployeeDemographicSum.Gender |  |
| Total Employees | Input FieldsEmployee Demographic Summary (EmployeeDemographicSum)Employee Count (EmployeeCount)Report Type (ReportType)Employment Type (EmploymentType)CalculationGet SUM(EmployeeDemographicSum.EmployeeCount) where EmployeeDemographicSum.ReportType='Headcount' and EmployeeDemographicSum.EmploymentType not in ('Non-Employee or Self-Employed', 'Provided By Undertakings') |

Number of employees (head count) by country:

| Country | Number of employees (head count) |
| --- | --- |
| Input FieldsEmployee Demographic Summary (EmployeeDemographicSum)Gender (Gender)Employee Count (EmployeeCount)Report Type (ReportType)Employment Type (EmploymentType)CalculationGet EmployeeDemographicSum.Gender and SUM(EmployeeDemographicSum.EmployeeCount) where EmployeeDemographicSum.ReportType='Headcount' and EmployeeDemographicSum.EmploymentType not in ('Non-Employee or Self-Employed', 'Provided By Undertakings') group by EmployeeDemographicSum.Gender |  |

Disclosure Requirement S1-6 – Characteristics of the undertaking’s employees

48\. The undertaking shall describe key characteristics of employees in its own workforce (b) the total number by head count or full time equivalent (FTE) of:

i. permanent employees, and breakdown by gender;

ii. temporary employees, and breakdown by gender; and

iii. non-guaranteed hours employees, and breakdown by gender.

| Employment Type | Gender | Employee Count |
| --- | --- | --- |
| Input FieldsEmployee Demographic Summary (EmployeeDemographicSum)Gender (Gender)Employee Count (EmployeeCount)Report Type (ReportType)Employment Type (EmploymentType)CalculationGet EmployeeDemographicSum.Gender, EmployeeDemographicSum.EmploymentType, and SUM(EmployeeDemographicSum.EmployeeCount) where EmployeeDemographicSum.ReportType='Headcount' and EmployeeDemographicSum.EmploymentType not in ('Non-Employee or Self-Employed', 'Provided By Undertakings') group by EmployeeDemographicSum.Gender and EmployeeDemographicSum.EmploymentType |  |  |

| Employment Type | Region | Employee Count |
| --- | --- | --- |
| Input FieldsEmployee Demographic Summary (EmployeeDemographicSum)Employee Count (EmployeeCount)Report Type (ReportType)Employment Type (EmploymentType)Region (Region)CalculationGet EmployeeDemographicSum.EmploymentType, EmployeeDemographicSum. Region, and SUM(EmployeeDemographicSum.EmployeeCount) where EmployeeDemographicSum.ReportType='Headcount' and EmployeeDemographicSum.EmploymentType not in ('Non-Employee or Self-Employed', 'Provided By Undertakings') group by EmployeeDemographicSum.EmploymentType and EmployeeDemographicSum.Region |  |  |

Disclosure Requirement S1-6 – Characteristics of the undertaking’s employees

48\. The undertaking shall describe key characteristics of employees in its own workforce

(c) the total number of employees who have left the undertaking during the reporting period and the rate of employee turnover in the reporting period.

Number of employees who left the undertaking:

**Input Fields**

Employee Demographic Summary (EmployeeDemographicSum)

-   Employee Count (EmployeeCount)
-   Report Type (ReportType)

**Calculation**

Get SUM(EmployeeDemographicSum.EmployeeCount) where EmployeeDemographicSum.ReportType='Turnover'

Employee turnover rate:

**Input Fields**

Employee Demographic Summary (EmployeeDemographicSum)

-   Employee Count (EmployeeCount)
-   Employment Type (EmploymentType)
-   Report Type (ReportType)

**Calculation**

(Get SUM(EmployeeDemographicSum.EmployeeCount) where EmployeeDemographicSum.ReportType='Turnover')/(Get SUM(EmployeeDemographicSum.EmployeeCount) where EmployeeDemographicSum.ReportType='Headcount' and EmployeeDemographicSum.EmploymentType not in ('Non-Employee or Self-Employed', 'Provided By Undertakings')) \* 100

Disclosure Requirement S1-6 – Characteristics of the undertaking’s employees

48\. The undertaking shall describe key characteristics of employees in its own workforce (d) a description of the methodologies and assumptions used to compile the data, including whether the numbers are reported:

i. in head count or full-time equivalent (FTE) (including an explanation of how FTE is defined); and

ii. at the end of the reporting period, as an average across the reporting period, or using another methodology.

| Employment Type | Gender | Region | Employee Count |
| --- | --- | --- | --- |
| Input FieldsEmployee Demographic Summary (EmployeeDemographicSum)Employee Count (EmployeeCount)Report Type (ReportType)Employment Type (EmploymentType)Gender(Gender)Region (Region)CalculationGet EmployeeDemographicSum.EmploymentType, EmployeeDemographicSum.Region, EmployeeDemographicSum.Gender, and SUM(EmployeeDemographicSum.EmployeeCount) where EmployeeDemographicSum.ReportType='Headcount' and EmployeeDemographicSum.EmploymentType not in ('Non-Employee or Self-Employed', 'Provided By Undertakings') group by EmployeeDemographicSum.EmploymentType, EmployeeDemographicSum.Gender, and EmployeeDemographicSum.Region |  |  |  |

Disclosure Requirement S1-7 – Characteristics of non-employees in the undertaking’s own workforce

55\. The disclosure required by paragraph 53 shall include:

(a) a disclosure of the total number of non-employees in the undertaking’s own workforce , i.e., either people with contracts with the undertaking to supply labour (“self-employed people”) or people provided by undertakings primarily engaged in “employment activities” (NACE Code N78).

| Employment Type | Employee Count |
| --- | --- |
| Input FieldsEmployee Demographic Summary (EmployeeDemographicSum)Employee Count (EmployeeCount)Report Type (ReportType)Employment Type (EmploymentType)CalculationGet EmployeeDemographicSum.EmploymentType and SUM(EmployeeDemographicSum.EmployeeCount) where EmployeeDemographicSum.ReportType='Headcount' and EmployeeDemographicSum.EmploymentType not in ('Non-Employee or Self-Employed', 'Provided By Undertakings') group by EmployeeDemographicSum.EmploymentType |  |
| Total Number of Non-Employees | Input FieldsEmployee Demographic Summary (EmployeeDemographicSum)Employee Count (EmployeeCount)Report Type (ReportType)Employment Type (EmploymentType)CalculationGet SUM(EmployeeDemographicSum.EmployeeCount) where EmployeeDemographicSum.ReportType='Headcount' and EmployeeDemographicSum.EmploymentType not in ('Non-Employee or Self-Employed', 'Provided By Undertakings') |

Disclosure Requirement S1-8 – Collective bargaining coverage and social dialogue

58\. The undertaking shall disclose information on the extent to which the working conditions and terms of employment of its employees are determined or influenced by collective bargaining agreements and on the extent to which its employees are represented in social dialogue in the European Economic Area (EEA).Percentage of total employees covered by collective bargaining agreements:

**Input Fields**

Employment Benefit Summary (EmpBenefitSummary)

-   Employee Count (EmployeeCount)
-   Employment Type (EmploymentType)
-   Benefit Type (EmployeeBenefitType)

**Calculation**

(Get SUM(EmpBenefitSummary.EmployeeCount) where EmpBenefitSummary.EmploymentType=’All’ AND EmpBenefitSummary.EmployeeBenefitType=’Bargaining Agreement’ ) / (Get SUM(EmpBenefitSummary.EmployeeCount) where EmpBenefitSummary.ReportType=’Headcount’ AND EmpBenefitSummary.EmploymentType not in ('Non-Employee or Self-Employed', 'Provided By Undertakings') ) \* 100

**Input Fields**

Employment Benefit Summary (EmpBenefitSummary)

-   Employee Count (EmployeeCount)
-   Employee Percentage (EmployeePercentage)
-   Employment Type (EmploymentType)
-   Benefit Type (EmployeeBenefitType)
-   Country (Country)

**Calculation**

Get EmpBenefitSummary.Country, EmpBenefitSummary.EmployeeCount, EmpBenefitSummary.EmployeePercentage, and EmpBenefitSummary.EmployeeBenefitType where EmpBenefitSummary.EmploymentType=’All’ and EmpBenefitSummary.EmployeeBenefitType=(’Bargaining Agreement’ , 'Workers Representative')

Depending on the EmployeePercentage and Country is an EEA/non-EEA country, the Country and EmployeeCount is displayed in the appropriate table cell.

EmployeeBenefitType=”Bargaining Agreement” records are used for the “Collective Bargaining Coverage” columns.

EmployeeBenefitType=”Workers Representative” records are used for the “Social Dialog / Workplace Representation” column.

EEA countries are:

'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR', 'HU', 'IS', 'IE', 'IT', 'LV', 'LI', 'LT', 'LU', 'MT', 'NL', 'NO', 'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE'

|  | Collective Bargaining Coverage | Social Dialogue |
| --- | --- | --- |
| Coverage Rate | Employees - EEA | Employees - Non-EEA | Workplace Representation (EEA only) |
| 0-19% |  |  |  |
| 20-39% |  |  |  |
| 40-59% |  |  |  |
| 60-79% | Iceland - 8Italy - 11 | India - 10United Kingdom - 30 |  |
| 80-100% |  |  |  |

**Input Fields**

Employment Benefit Summary (EmpBenefitSummary)

-   Employee Count (EmployeeCount)
-   Employment Type (EmploymentType)
-   Benefit Type (EmployeeBenefitType)

**Calculation**

(Get SUM(EmpBenefitSummary.EmployeeCount) where EmpBenefitSummary.EmploymentType=’All’ AND EmpBenefitSummary.EmployeeBenefitType=’Workers Representative’ ) / (Get SUM(EmpBenefitSummary.EmployeeCount) where EmpBenefitSummary.ReportType=’Headcount’ AND EmpBenefitSummary.EmploymentType not in ('Non-Employee or Self-Employed', 'Provided By Undertakings') ) \* 100

Disclosure Requirement S1-9 – Diversity metrics

66\. The undertaking shall disclose:

(a) the gender distribution in number and percentage at top management level; and

(b) the distribution of employees by age group: under 30 years old; 30-50 years old; over 50 years old.

**Input Fields**

Diversity Equity Inclusion Summary (DivrsEquityInclSum)

-   Gender (Gender)
-   Management Level (ManagementLevel)
-   Age Group (AgeGroup)
-   Employee Count (EmployeeCount)
-   Employee Percentage (EmployeePercentage)
-   Diversity Type (DiversityType)

**Calculation**

Get DivrsEquityInclSum.Gender, DivrsEquityInclSum.ManagementLevel, DivrsEquityInclSum.AgeGroup, DivrsEquityInclSum.EmployeeCount, and DivrsEquityInclSum.EmployeePercentage where DivrsEquityInclSum.DiversityType=’Gender’

Disclosure Requirement S1-10 – Adequate wages

67\. The undertaking shall disclose whether or not its employees are paid an adequate wage, and if they are not all paid an adequate wage, the countries and percentage of employees concerned.

**Input Fields**

Employment Compensation Summary (EmploymentCompensationSummary)

-   Average Hourly Wage (AverageHourlyWage)
-   Country (Country)

**Calculation**

Get EmploymentCompensationSummary.Country and EmploymentCompensationSummary.Average Hourly Wage

Disclosure Requirement S1-11 – Social protection

72\. The undertaking shall disclose whether its employees are covered by social protection against loss of income due to major life events, and, if not, the countries where this is not the case.

**Input Fields**

Employment Benefit Summary (EmpBenefitSummary)

-   Benefit Type (EmployeeBenefitType)
-   Benefit Usage (BenefitUsage)
-   Country (Country)
-   Employee Count (EmployeeCount)
-   Employee Percentage (EmployeePercentage)
-   Employment Type (EmploymentType)

**Calculation**

Get EmpBenefitSummary.BenefitType, EmpBenefitSummary.Country, EmpBenefitSummary.BenefitUsage, EmpBenefitSummary.EmploymentType, EmpBenefitSummary.EmployeeCount, and EmpBenefitSummary.EmployeePercentage

Disclosure Requirement S1-12– Persons with disabilities

77\. The undertaking shall disclose the percentage of its own employees with disabilities.

**Input Fields**

Diversity Equity Inclusion Summary (DivrsEquityInclSum)

-   Diversity Type (DiversityType)
-   Employee Count (EmployeeCount)
-   Employee Percentage (EmployeePercentage)
-   Gender (Gender)

**Calculation**

Get DivrsEquityInclSum.DiversityType, DivrsEquityInclSum.Gender, DivrsEquityInclSum.EmployeeCount, and DivrsEquityInclSum.EmployeePercentage where DivrsEquityInclSum.DiversityType=’Ability’

| Diversity type | Employee Count | Percentage (%) |
| --- | --- | --- |
| Total number of its own employees with disabilities | Input FieldsDiversity Equity Inclusion Summary (DivrsEquityInclSum)Diversity Type (DiversityType)Employee Count (EmployeeCount)CalculationGet Sum(DivrsEquityInclSum.EmployeeCount) where DivrsEquityInclSum.DiversityType=’Ability’ |  |
| Total Percentage of its own employees with disabilities | Input FieldsDiversity Equity Inclusion Summary (DivrsEquityInclSum)Diversity Type (DiversityType)Employee Percentage (EmployeePercentage)CalculationGet Sum(DivrsEquityInclSum.EmployeePercentage) where DivrsEquityInclSum.DiversityType=’Ability’ |

Disclosure Requirement S1-13 – Training and skills development metrics

81\. The undertaking shall disclose the extent to which training and skills development is provided to its employees.

| Program Category | Gender | Employee Count | Percentage (%) |
| --- | --- | --- | --- |
| Gender of employees that participated in Training | Input FieldsEmployee Development Summary (EmployeeDevelopmentSum)Employee Count (EmployeeCount)Employee Percentage (EmployeePercentage)Employee Type (EmployeeType)Gender (Gender)Program Category (ProgramCategory)CalculationGet EmployeeDevelopmentSum.ProgramCategory, EmployeeDevelopmentSum.Gender, SUM(EmployeeDevelopmentSum.EmployeeCount), SUM(EmployeeDevelopmentSum.EmployeePercentage)where EmployeeDevelopmentSum.ProgramCategory = 'Training'And EmployeeDevelopmentSum.EmployeeType NOT IN ('Non-Employee or Self-Employed', 'Provided By Undertakings')And EmployeeDevelopmentSum.Gender != nullGROUP BY EmployeeDevelopmentSum.ProgramCategory, EmployeeDevelopmentSum.Gender |  |  |
| Total number of employees that participated in Training | Input FieldsEmployee Development Summary (EmployeeDevelopmentSum)Employee Count (EmployeeCount)Employee Type (EmployeeType)Gender (Gender)Program Category (ProgramCategory)CalculationGet SUM(EmployeeDevelopmentSum.EmployeeCount) where EmployeeDevelopmentSum.ProgramCategory = 'Training'And EmployeeDevelopmentSum.EmployeeType NOT IN ('Non-Employee or Self-Employed', 'Provided By Undertakings')And EmployeeDevelopmentSum.Gender != null |  |
| Total percentage of employees that participated in Training | Input FieldsEmployee Development Summary (EmployeeDevelopmentSum)Employee Percentage (EmployeePercentage)Employee Type (EmployeeType)Gender (Gender)Program Category (ProgramCategory)CalculationGet SUM(EmployeeDevelopmentSum.EmployeePercentage) where EmployeeDevelopmentSum.ProgramCategory = 'Training'And EmployeeDevelopmentSum.EmployeeType NOT IN ('Non-Employee or Self-Employed', 'Provided By Undertakings')And EmployeeDevelopmentSum.Gender != null |

| Program Category | Gender | Employee Count | Percentage (%) |
| --- | --- | --- | --- |
| Input FieldsEmployee Development Summary (EmployeeDevelopmentSum)Employee Count (EmployeeCount)Employee Percentage (EmployeePercentage)Employee Type (EmployeeType)Gender (Gender)Program Category (ProgramCategory)CalculationGet EmployeeDevelopmentSum.ProgramCategory, EmployeeDevelopmentSum.Gender, SUM(EmployeeDevelopmentSum.EmployeeCount), SUM(EmployeeDevelopmentSum.EmployeePercentage)where EmployeeDevelopmentSum.ProgramCategory = 'Skill Development-Related Activities'And EmployeeDevelopmentSum.EmployeeType NOT IN ('Non-Employee or Self-Employed', 'Provided By Undertakings')And EmployeeDevelopmentSum.Gender != nullGROUP BY EmployeeDevelopmentSum.ProgramCategory, EmployeeDevelopmentSum.Gender |  |  |  |
| Total number of employees that participated in Skill development-related activities | Input FieldsEmployee Development Summary (EmployeeDevelopmentSum)Employee Count (EmployeeCount)Employee Type (EmployeeType)Gender (Gender)Program Category (ProgramCategory)CalculationGet SUM(EmployeeDevelopmentSum.EmployeeCount) where EmployeeDevelopmentSum.ProgramCategory = 'Skill Development-Related Activities'And EmployeeDevelopmentSum.EmployeeType NOT IN ('Non-Employee or Self-Employed', 'Provided By Undertakings')And EmployeeDevelopmentSum.Gender != null |  |
| Total percentage of employees that participated in Skill development-related activities | Input FieldsEmployee Development Summary (EmployeeDevelopmentSum)Employee Percentage (EmployeePercentage)Employee Type (EmployeeType)Gender (Gender)Program Category (ProgramCategory)CalculationGet SUM(EmployeeDevelopmentSum.EmployeePercentage) where EmployeeDevelopmentSum.ProgramCategory = 'Skill Development-Related Activities'And EmployeeDevelopmentSum.EmployeeType NOT IN ('Non-Employee or Self-Employed', 'Provided By Undertakings')And EmployeeDevelopmentSum.Gender != null |

| Gender | Employee Count | Average Training Time |
| --- | --- | --- |
| Input FieldsEmployee Development Summary (EmployeeDevelopmentSum)Average Training Time (AverageTrainingTime)Employee Count (EmployeeCount)Employee Type (EmployeeType)Gender (Gender)Program Category (ProgramCategory)CalculationGet EmployeeDevelopmentSum.Gender, EmployeeDevelopmentSum.EmployeeCount, and EmployeeDevelopmentSum.AverageTrainingTime where EmployeeDevelopmentSum.ProgramCategory in ('Skill Development-Related Activities', 'Training') and EmployeeDevelopmentSum.Gender != null and EmployeeDevelopmentSum.EmployeeType NOT IN ('Non-Employee or Self-Employed', 'Provided By Undertakings')Employee Count in row is SUM(EmployeeCount) grouped by Gender.Average Training Time in row is a weighted average training time based on the total employee count grouped by Gender. |  |  |
| Total number of training hours offered to and completed by employees | Total Number Training Hours calculated from the rows queries for this table:SUM(Total Employee Count * Average Training Time) |
| Average number of training hours by employees | Average Training Time calculated from the rows queried for this table:SUM(AverageTrainingTime * EmployeeCount) / SUM(EmployeeCount)) |

| Management Level | Employee Count | Average Training Time |
| --- | --- | --- |
| Input FieldsEmployee Development Summary (EmployeeDevelopmentSum)Average Training Time (AverageTrainingTime)Employee Count (EmployeeCount)Management Level (ManagementLevel)Employee Type (EmployeeType)Program Category (ProgramCategory)CalculationGet EmployeeDevelopmentSum.ManagementLevel, EmployeeDevelopmentSum.EmployeeCount, and EmployeeDevelopmentSum.AverageTrainingTime where EmployeeDevelopmentSum.ProgramCategory in ('Skill Development-Related Activities', 'Training') and EmployeeDevelopmentSum.ManagementLevel != null and EmployeeDevelopmentSum.EmployeeType NOT IN ('Non-Employee or Self-Employed', 'Provided By Undertakings')Employee Count in row is SUM(EmployeeCount) grouped by ManagementLevel.Average Training Time in row is a weighted average training time based on the total employees grouped by ManagementLevel. |  |  |
| Total number of training hours offered to and completed by employees | Total Number Training Hours calculated from the rows queries for this table:SUM(Total Employee Count * Average Training Time) |
| Average number of training hours by employees | Average Training Time calculated from the rows queried for this table:SUM(AverageTrainingTime * EmployeeCount) / SUM(EmployeeCount)) |

| Business Function | Employee Count | Average Training Time |
| --- | --- | --- |
| Input FieldsEmployee Development Summary (EmployeeDevelopmentSum)Average Training Time (AverageTrainingTime)Employee Count (EmployeeCount)Business Function (BusinessFunction)Employee Type (EmployeeType)Program Category (ProgramCategory)CalculationGet EmployeeDevelopmentSum.BusinessFunction, EmployeeDevelopmentSum.EmployeeCount, and EmployeeDevelopmentSum.AverageTrainingTime where EmployeeDevelopmentSum.ProgramCategory in ('Skill Development-Related Activities', 'Training') and EmployeeDevelopmentSum.BusinessFunction != null and EmployeeDevelopmentSum.EmployeeType NOT IN ('Non-Employee or Self-Employed', 'Provided By Undertakings')Employee Count in row is SUM(EmployeeCount) grouped by BusinessFunction.Average Training Time in row is a weighted average training time based on the total employees grouped by BusinessFunction |  |  |
| Total number of training hours offered to and completed by employees | Total Number Training Hours calculated from the rows queries for this table:SUM(Total Employee Count * Average Training Time) |
| Average number of training hours by employees | Average Training Time calculated from the rows queried for this table:SUM(AverageTrainingTime * EmployeeCount) / SUM(EmployeeCount)) |

| Non Employees | Employee Count | Average Training Time |
| --- | --- | --- |
| Input FieldsEmployee Development Summary (EmployeeDevelopmentSum)Average Training Time (AverageTrainingTime)Employee Count (EmployeeCount)Employee Type (EmployeeType)Program Category (ProgramCategory)CalculationGet EmployeeDevelopmentSum.EmployeeType, EmployeeDevelopmentSum.EmployeeCount, and EmployeeDevelopmentSum.AverageTrainingTime where EmployeeDevelopmentSum.ProgramCategory in ('Skill Development-Related Activities', 'Training') and EmployeeDevelopmentSum.EmployeeType != null and EmployeeDevelopmentSum.EmployeeType NOT IN ('Non-Employee or Self-Employed', 'Provided By Undertakings')Employee Count in row is SUM(EmployeeCount) grouped by BusinessFunction.Average Training Time in row is a weighted average training time based on the total employees grouped by BusinessFunction |  |  |
| Total number of training hours offered to and completed by employees | Total Number Training Hours calculated from the rows queries for this table:SUM(Total Employee Count * Average Training Time) |
| Average number of training hours by employees | Average Training Time calculated from the rows queried for this table:SUM(AverageTrainingTime * EmployeeCount) / SUM(EmployeeCount)) |

Disclosure Requirement S1-14 – Health and safety metrics

86\. The undertaking shall disclose information on the extent to which its own workforce is covered by its health and safety management system and the number of incidents associated with work-related injuries, ill health and fatalities of its own workforce. In addition, it shall disclose the number of fatalities as a result of work-related injuries and work-related ill health of other workers working on the undertaking’s sites.

Percentage of people covered by the undertaking’s health and safety management system:

**Input Fields**

Employee Demographic Summary (EmployeeDemographicSum)

-   Employee Count (EmployeeCount)
-   Employment Type (EmploymentType)
-   Report Type (ReportType)

Employment Benefit Summary (EmpBenefitSummary)

-   Employee Count (EmployeeCount)
-   Employment Type (EmploymentType)
-   Benefit Type (EmployeeBenefitType)

**Calculation**

(Get SUM(EmpBenefitSummary.EmployeeCount) where EmpBenefitSummary.EmploymentType=’All’ and EmpBenefitSummary.EmployeeBenefitType=’Health and Safety Management System’ ) / (Get SUM(EmpDemographicSum.EmployeeCount) where EmpDemographicSum.ReportType=’Headcount’ and EmpDemographicSum.EmploymentType NOT IN ('Non-Employee or Self-Employed', 'Provided By Undertakings') ) \* 100

| Own Workforce Fatalities from Illness | Other Workers Fatalities from Illness | Own Workforce Fatalities from Injuries | Other Workers Fatalities from Injuries | Total Fatalities |
| --- | --- | --- | --- | --- |
| Input FieldsOrganization Incident Summary (OrgIncidentSummary)Category (Category)Incident Count (IncidentCount)Incident Subtype (IncidentSubtype)Incident Type (IncidentType)CalculationGet SUM(OrgIncidentSummary.IncidentCount) where OrgIncidentSummary.Category = ‘Work-related Illness’ and OrgIncidentSummary.IncidentType = ‘Fatality’ and OrgIncidentSummary.IncidentSubtype = ‘Own Workforce’SELECT SUM(IncidentCount) FROM OrgIncidentSummary WHERE Category = ‘Work-related Illness’ AND IncidentType = ‘Fatality’ AND IncidentSubtype = ‘Own Workforce’ | Input FieldsOrganization Incident Summary (OrgIncidentSummary)Category (Category)Incident Count (IncidentCount)Incident Subtype (IncidentSubtype)Incident Type (IncidentType)CalculationGet SUM(OrgIncidentSummary.IncidentCount) where OrgIncidentSummary.Category = ‘Work-related Illness’ and OrgIncidentSummary.IncidentType = ‘Fatality’ and OrgIncidentSummary.IncidentSubtype = ‘Other Workers’SELECT SUM(IncidentCount) FROM OrgIncidentSummary WHERE Category = ‘Work-related Illness’ AND IncidentType = ‘Fatality’ AND IncidentSubtype = ‘Other Workers’ | Input FieldsOrganization Incident Summary (OrgIncidentSummary)Category (Category)Incident Count (IncidentCount)Incident Subtype (IncidentSubtype)Incident Type (IncidentType)CalculationGet SUM(OrgIncidentSummary.IncidentCount) where OrgIncidentSummary.Category = ‘Work-related Injuries’ and OrgIncidentSummary.IncidentType = ‘Fatality’ and OrgIncidentSummary.IncidentSubtype = ‘Own Workforce’SELECT SUM(IncidentCount) FROM OrgIncidentSummary WHERE Category = ‘Work-related Injuries’ AND IncidentType = ‘Fatality’ AND IncidentSubtype = ‘Own Workforce’ | Input FieldsOrganization Incident Summary (OrgIncidentSummary)Category (Category)Incident Count (IncidentCount)Incident Subtype (IncidentSubtype)Incident Type (IncidentType)CalculationGet SUM(OrgIncidentSummary.IncidentCount) where OrgIncidentSummary.Category = ‘Work-related Injuries’ and OrgIncidentSummary.IncidentType = ‘Fatality’ and OrgIncidentSummary.IncidentSubtype = ‘Other Workers’SELECT SUM(IncidentCount) FROM OrgIncidentSummary WHERE Category = ‘Work-related Injuries’ AND IncidentType = ‘Fatality’ AND IncidentSubtype = ‘Other Workers’ | Input FieldsOrganization Incident Summary (OrgIncidentSummary)Category (Category)Incident Count (IncidentCount)Incident Subtype (IncidentSubtype)Incident Type (IncidentType)CalculationGet SUM(OrgIncidentSummary.IncidentCount) where OrgIncidentSummary.Category IN (‘Work-related Illness’, ‘Work-related Injuries’) and OrgIncidentSummary.IncidentType = ‘Fatality’ and OrgIncidentSummary.IncidentSubtype IN (‘Own Workforce’, ‘Other Workers’)SELECT SUM(IncidentCount) FROM OrgIncidentSummary WHERE Category IN (‘Work-related Illness’, ‘Work-related Injuries’) AND IncidentType = ‘Fatality’ AND IncidentSubtype IN (‘Own Workforce’, ‘Other Workers’) |

Number of recordable work-related accidents for own workforce:

**Input Fields**

Organization Incident Summary (OrgIncidentSummary)

-   Category (Category)
-   Incident Count (IncidentCount)
-   Incident Subtype (IncidentSubtype)
-   Incident Type (IncidentType)

**Calculation**

Get SUM(OrgIncidentSummary.IncidentCount) where OrgIncidentSummary.Category IN (‘Work-related Illness’, ‘Work-related Injuries’) and OrgIncidentSummary.IncidentType = ‘Accident’

Rate of recordable work-related accidents for own workforce :

First, gather all OrgIncidentSummary records (within DisclosureReportingPeriod and account). Take the maximum WorkingHoursDay value and the maximum WorkingDaysReportingPeriod value, and multiply them to get the working hours in the reporting period (if either is missing, then stop calculating this and give the rate as 0):

**Input Fields**

Organization Incident Summary (OrgIncidentSummary)

-   Working Days in a Reporting Period (WorkingDaysReportingPeriod)
-   Working Hours in a Day (WorkingHoursDay)

**Calculation**

Get MAX(OrgIncidentSummary.WorkingHoursDay), MAX(OrgIncidentSummary.WorkingDaysReportingPeriod)

Then determine the total number of employees (as in S1-6):

**Input Fields**

Employee Demographic Summary (EmployeeDemographicSum)

-   Employee Count (EmployeeCount)
-   Employment Type (EmploymentType)
-   Report Type (ReportType)

**Calculation**

Get SUM(EmpDemographicSum.EmployeeCount) where EmpDemographicSum.ReportType=’Headcount’ and EmpDemographicSum.EmploymentType NOT IN ('Non-Employee or Self-Employed', 'Provided By Undertakings')

Multiply the working hours in the reporting period by the number of employees. Divide the “Number of recordable work-related accidents for own workforce” (SELECT SUM(IncidentCount) FROM OrgIncidentSummary WHERE Category IN (‘Work-related Illness’, ‘Work-related Injuries’) AND IncidentType = ‘Accident’) by that number (of hours\*employees). Multiply the result of that by 1000000.

See ESRS S1 AR89 ([https://xbrl.efrag.org/e-esrs/esrs-set1-2023.html#d1e29340-3-1](https://xbrl.efrag.org/e-esrs/esrs-set1-2023.html#d1e29340-3-1)) for details about the calculation.

Number of cases of recordable work-related ill health of employees:

**Input Fields**

Organization Incident Summary (OrgIncidentSummary)

-   Category (Category)
-   Incident Count (IncidentCount)
-   incident Subtype (IncidentSubtype)
-   Incident Type (IncidentType)

**Calculation**

Get SUM(OrgIncidentSummary.IncidentCount) where OrgIncidentSummary.Category = ‘Work-related Illness’ and OrgIncidentSummary.IncidentType = ‘Incident’

Number of days lost to work-related injuries and fatalities from work-related accidents, work-related ill health and fatalities from ill health:

**Input Fields**

Organization Incident Summary (OrgIncidentSummary)

-   Category (Category)
-   Incident Type (IncidentType)
-   Lost Hours (LostHours)
-   Working Hours in a Day (WorkingHoursDay)

**Calculation**

Multiply (Get MAX(OrgIncidentSummary.WorkingHoursDay)) by (Get SUM(OrgIncidentSummary.LostHours) where OrgIncidentSummary.Category = ‘Work-related Illness’ and OrgIncidentSummary.IncidentType = ‘Incident’)

If WorkingHoursDay=Null then 0

Disclosure Requirement S1-14 – Health and safety metrics

90\. The undertaking may include the following additional information on the health and safety coverage: the percentage of its own workers covered by a health and safety management system which is based on legal requirements and/or recognised standards or guidelines and which has been internally audited and/or audited or certified by an external party.

| Benefit Type | Employee Percentage |
| --- | --- |
| Input FieldsEmployment Benefit Summary (EmpBenefitSummary)Benefit Type (EmployeeBenefitType)Employee Percentage (EmployeePercentage)CalculationGet EmpBenefitSummary.EmployeeBenefitType and EmpBenefitSummary.EmployeePercentage |  |

Disclosure Requirement S1-15 – Work-life balance metrics

91\. The undertaking shall disclose the extent to which employees are entitled to and make use of family-related leave.

Percentage of employees entitled to take family-related leave:

**Input Fields**

Employment Benefit Summary (EmpBenefitSummary)

-   Benefit Type (EmployeeBenefitType)
-   Employee Percentage (EmployeePercentage)
-   Benefit Usage (BenefitUsage)
-   Employee Count (EmployeeCount)
-   Employment Type (EmploymentType)

Employee Demographic Summary (EmployeeDemographicSum)

-   Employee Count (EmployeeCount)
-   Employment Type (EmploymentType)
-   Report Type (ReportType)

**Calculation**

(Get SUM(EmpBenefitSummary.EmployeeCount) where EmpBenefitSummary.EmployeeBenefitType = ‘Family Related Leave (Parental, Maternity, Paternity, Care)’ and EmpBenefitSummary.BenefitUsage = ‘Entitled’) and EmpBenefitSummary.EmploymentType NOT IN ('Non-Employee or Self-Employed', 'Provided By Undertakings'))/(Get SUM(EmployeeDemographicSum.EmployeeCount) where EmployeeDemographicSum.ReportType='Headcount' and EmployeeDemographicSum.EmploymentType NOT IN ('Non-Employee or Self-Employed', 'Provided By Undertakings'))

Percentage of entitled employees that took family-related leave:

**Input Fields**

Employment Benefit Summary (EmpBenefitSummary)

-   Benefit Type (EmployeeBenefitType)
-   Benefit Usage (BenefitUsage)
-   Employee Count (EmployeeCount)

**Calculation**

(Get SUM(EmpBenefitSummary.EmployeeCount) where EmpBenefitSummary.EmployeeBenefitType = ‘Family Related Leave (Parental, Maternity, Paternity, Care)’ and EmpBenefitSummary.BenefitUsage = ‘Used’) / (Get SUM(EmpBenefitSummary.EmployeeCount) where EmpBenefitSummary.EmployeeBenefitType = ‘Family Related Leave (Parental, Maternity, Paternity, Care)’ and EmpBenefitSummary.BenefitUsage = ‘Entitled’)

| Benefit Type | Benefit Usage | Gender | Employee count | Percentage (%) |
| --- | --- | --- | --- | --- |
| Input FieldsEmployment Benefit Summary (EmpBenefitSummary)Benefit Type (EmployeeBenefitType)Benefit Usage (BenefitUsage)Employee Count (EmployeeCount)Gender (Gender)CalculationGet EmpBenefitSummary.Gender, EmpBenefitSummary.BenefitUsage, SUM(EmpBenefitSummary.EmployeeCount) where EmpBenefitSummary.EmployeeBenefitType = 'Family Related Leave (Parental, Maternity, Paternity, Care)' and EmpBenefitSummary.EmploymentType NOT IN ('Non-Employee or Self-Employed', 'Provided By Undertakings') Group by EmpBenefitSummary.Gender, EmpBenefitSummary.BenefitUsage ORDER BY EmpBenefitSummary.Gender ASC, EmpBenefitSummary.BenefitUsage ASC |  |  | Input FieldsEmployment Benefit Summary (EmpBenefitSummary)Benefit Type (EmployeeBenefitType)Benefit Usage (BenefitUsage)Employee Count (EmployeeCount)Gender (Gender)CalculationGet EmpBenefitSummary.Gender, EmpBenefitSummary.BenefitUsage, SUM(EmpBenefitSummary.EmployeeCount) where EmpBenefitSummary.EmployeeBenefitType = 'Family Related Leave (Parental, Maternity, Paternity, Care)' and EmpBenefitSummary.EmploymentType NOT IN ('Non-Employee or Self-Employed', 'Provided By Undertakings') Group by EmpBenefitSummary.Gender, EmpBenefitSummary.BenefitUsage ORDER BY EmpBenefitSummary.Gender ASC, EmpBenefitSummary.BenefitUsage ASC | Input FieldsEmployment Benefit Summary (EmpBenefitSummary)Benefit Type (EmployeeBenefitType)Benefit Usage (BenefitUsage)Employee Count (EmployeeCount)Gender (Gender)Employee Demographic Summary (EmployeeDemographicSum)Employee Count (EmployeeCount)Employment Type (EmploymentType)Report Type (ReportType)Gender (Gender)CalculationGet SUM(EmpBenefitSummary.EmployeeCount) where EmpBenefitSummary.EmployeeBenefitType = 'Family Related Leave (Parental, Maternity, Paternity, Care)' and EmpBenefitSummary.EmploymentType NOT IN ('Non-Employee or Self-Employed', 'Provided By Undertakings') / Get SUM(EmployeeDemographicSum.EmployeeCount) where EmployeeDemographicSum.EmploymentType NOT IN ('Non-Employee or Self-Employed', 'Provided By Undertakings') And EmployeeDemographicSum.Gender = :<gender of this row> |

The percentage in the table is the number of employees with that row’s gender and benefit usage (“Used”, “Entitled”) divided by the total number of employees of that gender in the company.

Disclosure Requirement S1-16 – Remuneration metrics (pay gap and total remuneration)

95\. The undertaking shall disclose the percentage gap in pay between its female and male employees and the ratio between the remuneration of its highest paid individual and the median remuneration for its employees.

Gender Pay Gap:

| Region | Gender Pay Gap |
| --- | --- |
| Input FieldsEmployment Compensation Summary (EmploymentCompensationSummary)Region (Region)CalculationGet EmploymentCompensationSummary.Region | (Average Male Gross Hourly Pay - Average Female Gross Hourly Pay) / Average Male Gross Hourly Pay * 100 |

Annual total remuneration ratio:

| Region | Annual Total Remuneration Ratio |
| --- | --- |
| Input FieldsEmployment Compensation Summary (EmploymentCompensationSummary)Region (Region)CalculationGet EmploymentCompensationSummary.Region | Annual Total Remuneration of Highest Paid Individual / Median Annual Remuneration (excluding highest paid individual). |

Disclosure Requirement S1-17 – Incidents, complaints and severe human rights impacts

100\. The undertaking shall disclose the number of work-related incidents and/or complaints and severe human rights impacts within its own workforce, and any related fines, sanctions or compensation for the reporting period.

Total number of incidents of discrimination:

**Input Fields**

Organization Incident Summary (OrgIncidentSummary)

-   Category (Category)
-   Incident Count (IncidentCount)

**Calculation**

Get SUM(OrgIncidentSummary.IncidentCount) where OrgIncidentSummary.Category = 'Discrimination Incidents and Corrective Actions'

Number of complaints filed through channels for undertaking’s own workforce:

**Input Fields**

Organization Incident Summary (OrgIncidentSummary)

-   incident Subtype (IncidentSubtype)
-   Incident Type (IncidentType)
-   Incident Count (IncidentCount)

**Calculation**

Get SUM(OrgIncidentSummary.IncidentCount) where OrgIncidentSummary.IncidentType = ‘Complaint’ and OrgIncidentSummary.IncidentSubtype = ‘Own Workforce’

Number of complaints filed to National Contact Points for OECD Multinational Enterprises:

**Input Fields**

Organization Incident Summary (OrgIncidentSummary)

-   incident Subtype (IncidentSubtype)
-   Incident Type (IncidentType)
-   Incident Count (IncidentCount)

**Calculation**

Get SUM(OrgIncidentSummary.IncidentCount) where OrgIncidentSummary.IncidentType = ‘Complaint’ and OrgIncidentSummary.IncidentSubtype = ‘Filed to National Contact Points’

Number of complaints filed in Total:

**Input Fields**

Organization Incident Summary (OrgIncidentSummary)

-   Incident Subtype (IncidentSubtype)
-   Incident Type (IncidentType)
-   Incident Count (IncidentCount)

**Calculation**

Get SUM(OrgIncidentSummary.IncidentCount) where OrgIncidentSummary.IncidentType = ‘Complaint’ and OrgIncidentSummary.IncidentSubtype IN (‘Own Workforce’, ‘Filed to National Contact Points’)

Total amount of fines, penalties, and compensation for damages as a result of the incidents and complaints disclosed above:

**Input Fields**

Organization Incident Summary (OrgIncidentSummary)

-   Category (Category)
-   Incident Type (IncidentType)
-   Incident Count (IncidentCount)

**Calculation**

Get SUM(OrgIncidentSummary.IncidentCount) where OrgIncidentSummary.IncidentType = ‘Complaint’ OR OrgIncidentSummary.Category = 'Discrimination Incidents and Corrective Actions'

Number of severe human rights incidents connected to the undertaking’s workforce:

**Input Fields**

Organization Incident Summary (OrgIncidentSummary)

-   Category (Category)
-   Incident Subtype (IncidentSubtype)
-   Incident Type (IncidentType)
-   Incident Count (IncidentCount)

**Calculation**

Get SUM(OrgIncidentSummary.IncidentCount) where OrgIncidentSummary.Category = 'Violation of Human Rights' and OrgIncidentSummary.IncidentType = ‘Human Rights Violation’ and OrgIncidentSummary.IncidentSubtype = ‘Own Workforce’

Number of cases of non-respect of the UN Guiding Principles on Business and Human Rights and OECD Guidelines for Multinational Enterprises:

**Input Fields**

Organization Incident Summary (OrgIncidentSummary)

-   Category (Category)
-   Incident Subtype (IncidentSubtype)
-   Incident Type (IncidentType)
-   Incident Count (IncidentCount)

**Calculation**

Get SUM(OrgIncidentSummary.IncidentCount) where OrgIncidentSummary.Category = 'Violation of Human Rights' and OrgIncidentSummary.IncidentType = ‘Human Rights Violation’ and OrgIncidentSummary.IncidentSubtype = 'Non-respect of UN Guiding Principles and OECD Guidelines for Multinational Enterprises'

Number of human rights violation incidents in total:

**Input Fields**

Organization Incident Summary (OrgIncidentSummary)

-   Category (Category)
-   Incident Subtype (IncidentSubtype)
-   Incident Type (IncidentType)
-   Incident Count (IncidentCount)

**Calculation**

Get SUM(OrgIncidentSummary.IncidentCount) where OrgIncidentSummary.Category = 'Violation of Human Rights' and OrgIncidentSummary.IncidentType = ‘Human Rights Violation’ and OrgIncidentSummary.IncidentSubtype IN (‘Own Workforce’, 'Non-respect of UN Guiding Principles and OECD Guidelines for Multinational Enterprises')

| Category | Incident Type | Incident Subtype | Incident Count | Fine Amount |
| --- | --- | --- | --- | --- |
| Input FieldsOrganization Incident Summary (OrgIncidentSummary)Category (Category)Incident Subtype (IncidentSubtype)Incident Type (IncidentType)Incident Count (IncidentCount)Fine Amount (FineAmount)CalculationGet OrgIncidentSummary.Category, OrgIncidentSummary.IncidentType, OrgIncidentSummary.IncidentSubtype, OrgIncidentSummary.IncidentCount, OrgIncidentSummary.FineAmount where OrgIncidentSummary.Category = 'Violation of Human Rights' |  |  |  |  |
| Total amount of fines, penalties and compensation for damages for the human rights violation incidents disclosed: | Input FieldsOrganization Incident Summary (OrgIncidentSummary)Category (Category)Fine Amount (FineAmount)CalculationGet SUM(OrgIncidentSummary.FineAmount) where OrgIncidentSummary.Category = 'Violation of Human Rights' |

## ESRS G1 Business conduct (V5)

Disclosure Requirement G1-3 – Prevention and detection of corruption and bribery

16\. The undertaking shall provide information about its system to prevent and detect, investigate, and respond to allegations or incidents relating to corruption and bribery including the related training.

Percentage of functions-at-risk covered by training programmes:

**Input Fields**

Employee Development Summary (EmployeeDevelopmentSum)

-   Percent of Business Functions at Risk (PercentBusinessFunctionAtRisk)
-   Business Function at Risk (IsBusinessFunctionAtRisk)
-   Program Category (ProgramCategory)

**Calculation**

SELECT SUM(EmployeeDevelopmentSum.PercentBusinessFunctionAtRisk) where EmployeeDevelopmentSum.IsBusinessFunctionAtRisk = ‘true’ and EmployeeDevelopmentSum.ProgramCategory = ‘Training’

Disclosure Requirement G1-4 – Incidents of corruption or bribery

22\. The undertaking shall provide information on incidents of corruption or bribery during the reporting period.

| Category | Incident Type | Incident Subtype | Corrective Action Type | Incident Count | Fine Amount |
| --- | --- | --- | --- | --- | --- |
| Input FieldsOrganization Incident Summary (OrgIncidentSummary)Category (Category)Corrective Action Type (CorrectiveActionType)Incident Type (IncidentType)Incident Subtype (IncidentSubtype)Incident Type (IncidentType)Incident Count (IncidentCount)Fine Amount (FineAmount)CalculationGet OrgIncidentSummary.Category, OrgIncidentSummary.IncidentType, OrgIncidentSummary.IncidentSubtype, OrgIncidentSummary.CorrectiveActionType, OrgIncidentSummary.IncidentCount, and OrgIncidentSummary.FineAmount where OrgIncidentSummary.Category IN (<the list of categories the user checked in the omni script>) and OrgIncidentSummary.IncidentType IN (<the list of incident types the user checked>) and OrgIncidentSummary.IncidentSubtype IN (<the list of incident subtypes the user checked>) and OrgIncidentSummary.CorrectiveActionType IN (<the list of corrective action types the user checked>) |  |  |  |  |  |

| Category | Corrective Action Type | Incident Count | Fine Amount |
| --- | --- | --- | --- |
| Input FieldsOrganization Incident Summary (OrgIncidentSummary)Category (Category)Corrective Action Type (CorrectiveActionType)Incident Count (IncidentCount)Fine Amount (FineAmount)CalculationGet OrgIncidentSummary.Category, OrgIncidentSummary.CorrectiveActionType, OrgIncidentSummary.IncidentCount, and OrgIncidentSummary.FineAmount where OrgIncidentSummary.Category Category = ‘Violation of Anti-Corruption and Anti-Bribery Laws’ AND OrgIncidentSummary.CorrectiveActionType = ‘Conviction’ |  |  |  |
| Total number of convictions | Input FieldsOrganization Incident Summary (OrgIncidentSummary)Category (Category)Corrective Action Type (CorrectiveActionType)Incident Count (IncidentCount)CalculationGet SUM(OrgIncidentSummary.IncidentCount) where OrgIncidentSummary.Category = ‘Violation of Anti-Corruption and Anti-Bribery Laws’ and OrgIncidentSummary.CorrectiveActionType = ‘Conviction’ |  |
| Total amount of fines for violation of anti-corruption and anti- bribery laws | Input FieldsOrganization Incident Summary (OrgIncidentSummary)Category (Category)Corrective Action Type (CorrectiveActionType)Fine Amount (FineAmount)CalculationGet SUM(OrgIncidentSummary.FineAmount) where OrgIncidentSummary.Category = ‘Violation of Anti-Corruption and Anti-Bribery Laws’ and OrgIncidentSummary.CorrectiveActionType = ‘Conviction’ |

| Incident Type | Category | Incident Count |
| --- | --- | --- |
| Input FieldsOrganization Incident Summary (OrgIncidentSummary)Category (Category)Incident Type (IncidentType)Incident Count (IncidentCount)CalculationGet OrgIncidentSummary.IncidentType, OrgIncidentSummary.Category, and SUM(OrgIncidentSummary.IncidentCount) where OrgIncidentSummary.IncidentType = ‘Corruption’ and OrgIncidentSummary.Category IN ("Corruption Confirmed", "Corruption - Employees Dismissed or Disciplined", "Corruption - Business Partners Contracts Terminated") GROUP BY OrgIncidentSummary.IncidentType, OrgIncidentSummary.Category |  |  |
| Total Number of confirmed incidents in which own workers were dismissed or disciplined | Input FieldsOrganization Incident Summary (OrgIncidentSummary)Category (Category)Incident Type (IncidentType)incident Subtype (IncidentSubtype)Incident Count (IncidentCount)CalculationGet SUM(OrgIncidentSummary.IncidentCount) where OrgIncidentSummary.IncidentType = ‘Corruption’ and OrgIncidentSummary.Category IN ("Corruption Confirmed", "Corruption - Employees Dismissed or Disciplined", "Corruption - Business Partners Contracts Terminated") AND OrgIncidentSummary.IncidentSubtype = “Own Workforce” |
| Total Number of confirmed incidents relating other workers | Input FieldsOrganization Incident Summary (OrgIncidentSummary)Category (Category)Incident Type (IncidentType)incident Subtype (IncidentSubtype)Incident Count (IncidentCount)CalculationGet SUM(OrgIncidentSummary.IncidentCount) where OrgIncidentSummary.IncidentType = ‘Corruption’ and OrgIncidentSummary.Category IN ("Corruption Confirmed", "Corruption - Employees Dismissed or Disciplined", "Corruption - Business Partners Contracts Terminated") and OrgIncidentSummary.IncidentSubtype = “Other Workers” |

Disclosure Requirement G1-5 – Political influence and lobbying activities

27\. The undertaking shall provide information on the activities and commitments related to exerting its political influence, including its lobbying activities related to its material impacts, risks and opportunities.

| Category | Type | SubType | Country | Total Amount |
| --- | --- | --- | --- | --- |
| Input FieldsSocial Contribution Summary (SocialContributionSum)Category (Category)Country (Country)Subtype (Subtype)Total Amount (TotalAmount)Type (Type)CalculationGet SocialContributionSum.Category, SocialContributionSum.Type, SocialContributionSum.Subtype, SocialContributionSum.Country, SUM(SocialContributionSum.TotalAmount) where SocialContributionSum.Country IN (<the list of countries checked by the user in the omniscript>) and SocialContributionSum.Category = ‘Monetary’ and SocialContributionSum.Type = ‘Political’ GROUP BY SocialContributionSum.Subtype, SocialContributionSum.Country |  |  |  |  |

| Category | Type | Country | Total Amount |
| --- | --- | --- | --- |
| Input FieldsSocial Contribution Summary (SocialContributionSum)Category (Category)Country (Country)Total Amount (TotalAmount)Type (Type)CalculationGet SocialContributionSum.Category, SocialContributionSum.Type, SocialContributionSum.Country, SUM(SocialContributionSum.TotalAmount) where SocialContributionSum.Country IN (<the list of countries checked by the user in the omniscript>) and SocialContributionSum.Category = ‘Monetary’ and SocialContributionSum.Type = ‘Political’ GROUP BY SocialContributionSum.Country |  |  |  |
|  |  |  |  |

| Category | Type | SubType | Recipient Name | Total Amount |
| --- | --- | --- | --- | --- |
| Input FieldsSocial Contribution Summary (SocialContributionSum)Category (Category)Country (Country)Total Amount (TotalAmount)Type (Type)Recipient Name (RecipientName)Subtype (Subtype)CalculationGet SocialContributionSum.Category, SocialContributionSum.Type, SocialContributionSum.Subtype, SocialContributionSum.RecipientName, and SUM(SocialContributionSum.TotalAmount) where SocialContributionSum.Country IN (<the list of countries checked by the user in the omniscript>) and SocialContributionSum.Category = ‘Monetary’ and SocialContributionSum.Type = ‘Political’ GROUP BY SocialContributionSum.Subtype, SocialContributionSum.RecipientName |  |  |  |  |

| Category | Type | Recipient Name | Total Amount |
| --- | --- | --- | --- |
| Input FieldsSocial Contribution Summary (SocialContributionSum)Category (Category)Total Amount (TotalAmount)Type (Type)Recipient Name (RecipientName)CalculationGet SocialContributionSum.Category, SocialContributionSum.Type, SocialContributionSum.RecipientName, and SUM(SocialContributionSum.TotalAmount) where SocialContributionSum.Country IN (<the list of countries checked by the user in the omniscript>) and SocialContributionSum.Category = ‘Monetary’ and SocialContributionSum.Type = ‘Political’ GROUP BY SocialContributionSum.RecipientName |  |  |  |

Disclosure Requirement G1-6 – Payment practices

31\. The undertaking shall provide information on its payment practices, especially with respect to late payments to small and medium enterprises (SMEs).

The table is generated from data retrieved with

**Input Fields**

Organization Payment Practice Summary (OrgPaymentPracSummary)

-   Country (Country)
-   G1 Average Number of Days to Pay Invoice (G1AvgNumberDaysPayInvoice)
-   G1 Payment Timeline (G1PaymentTimeline)
-   G1 Percentage of Invoices (G1PercentageInvoices)

**Calculation**

Get OrgPaymentPracSummary.G1PaymentTimeline, OrgPaymentPracSummary.Country, OrgPaymentPracSummary.G1AvgNumberDaysPayInvoice, and OrgPaymentPracSummary.G1PercentageInvoices

For each pair of <G1PaymentTimeline,Country> values, compute “Average number of days to pay invoice from date when contractual or statutory term of payment starts to be calculated” as the weighted average of G1AvgNumberDaysPayInvoice values, where the weight is G1PercentageInvoices.

The “% of Invoices” is the sum of G1PercentageInvoices for the <G1PaymentTimeline,Country> value pair.

If the sum of G1PercentageInvoices for a <G1PaymentTimeline,Country> pair is zero or missing, then the “Average number of days to pay invoice from date when contractual or statutory term of payment starts to be calculated” is zero.

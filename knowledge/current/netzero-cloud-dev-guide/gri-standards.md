---
title: "GRI Standards"
domain: netzero-cloud-dev-guide
topic: gri-standards
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:58.171Z
estimatedTokens: 7350
keywords: [GRI, Standards, help, organizations, achieve, sustainable, development​, reporting, range, economic, environmental, social, impacts, Energy, Water]
---

# GRI Standards

> The GRI standards help organizations to achieve sustainable development​ by
        reporting on a range of economic, environmental and social impacts.

# GRI Standards

The GRI standards help organizations to achieve sustainable development​ by reporting on a range of economic, environmental and social impacts.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=netzero_cloud_dev_guide)

#### Note

Our platform provides you with the option to track data that you deem appropriate. We don't mandate or require you to enter any specific data. The decision to enter and track information, as well as the nature and extent of that data, rests solely with you.

Here are the calculations:

## GRI 302: Energy

-   **Question Number: 302-1a**
    -   Logic: GRI302U1aDR
    -   Description: Total fuel consumption within the organization from non-renewable sources, in joules or multiples, and including fuel types used.
    -   **Input Fields**

        Annual Emissions Inventory (AnnualEmssnInventory)

        -   Energy Usage in Commercial Buildings (Kwh) (EnergyUsageCommercialBld)
        -   Renewable Energy Usage Percentage in Commercial Buildings (RenewableEnergyUsagePctCmclBld)
        -   Energy Usage in Data Centers (Kwh) (EnergyUsageDataCenters)
        -   Renewable Energy Usage Percentage in Data Centers (RenewableEnergyUsagePctDataCtr)
    -   **Calculation**

        AnnualEmssnInventory.Energy Usage in Commercial Buildings (Kwh) × (1-(AnnualEmssnInventory.Renewable Energy Usage Percentage in Commercial Buildings/100)) + AnnualEmssnInventory.Energy Usage in Data Centers (Kwh) × (1-(AnnualEmssnInventory.Renewable Energy Usage Percentage in Data Centers/100))

-   **Question Number: 302-1b**
    -   Logic: GRI302U1DbDR
    -   Description: Total fuel consumption within the organization from renewable sources, in joules or multiples, and including fuel types used.
    -   **Input Fields**

        Annual Emissions Inventory (AnnualEmssnInventory)

        -   Energy Usage in Commercial Buildings (Kwh) (EnergyUsageCommercialBld)
        -   Renewable Energy Usage Percentage in Commercial Buildings (RenewableEnergyUsagePctCmclBld)
        -   Energy Usage in Data Centers (Kwh) (EnergyUsageDataCenters)
        -   Renewable Energy Usage Percentage in Data Centers (RenewableEnergyUsagePctDataCtr)
    -   **Calculation**

        AnnualEmssnInventory.Energy Usage in Commercial Buildings (Kwh) ×(AnnualEmssnInventory.Renewable Energy Usage Percentage in Commercial Buildings/100))+AnnualEmssnInventory.Energy Usage in Data Centers (Kwh)×(AnnualEmssnInventory.Renewable Energy Usage Percentage in Data Centers/100))

-   **Question Number: 302-1c**
    -   Logic: Apex class
    -   **Input Fields**

        Stationary Asset Carbon Footprint Item (StnryAssetCrbnFtprntItm)

    -   **Calculation**

        Sum of all Stationary Asset Carbon Footprint Item’s electricity, heating, cooling, and steam consumption.

-   **Question Number: 302-1e**
    -   Logic: GRI302U1DeDR
    -   Description: Total energy consumption within the organization, in joules or multiples.
    -   **Input Fields**

        Annual Emissions Inventory (AnnualEmssnInventory)

        -   Energy Usage in Commercial Buildings (Kwh) (EnergyUsageCommercialBld)
        -   Energy Usage in Data Centers (Kwh) (EnergyUsageDataCenters)
    -   **Calculation**

        AnnualEmssnInventory.Energy Usage in Commercial Buildings (Kwh) + AnnualEmssnInventory.Energy Usage in Data Centers (Kwh)

-   **Question Number: 302-3a**
    -   Logic: GRI302U3aDR
    -   Description: Energy intensity ratio for the organization from annual emissions inventory
    -   **Input Fields**

        Annual Emissions Inventory (AnnualEmssnInventory)

        -   Energy Usage in Commercial Buildings (Kwh) (EnergyUsageCommercialBld)
        -   Energy Usage in Data Centers (Kwh) (EnergyUsageDataCenters)

        Stationary Asset Environmental (SourceStnryAssetEnvrSrc)

        -   Occupied Floor Area (OccupiedFloorArea)
    -   **Calculation**

        AnnualEmssnInventory.Energy Usage in Commercial Buildings (Kwh) + AnnualEmssnInventory.Energy Usage in Data Centers (Kwh)/Sum(SourceStnryAssetEnvrSrc.Occupied Floor Area)


## GRI 303: Water and Effluents

-   **Question Number: 303-3a**
    -   Logic: Apex class
    -   **Input Fields**

        Stationary Asset Water Footprint Item (StnryAssetWtrFtprntItm)

    -   **Calculation**

        Sum all stationary asset water footprint items for the activity type “Withdrawal” and reporting period for all the source types.

-   **Question Number: 303-3b**
    -   Logic: Apex class
    -   **Input Fields**

        Stationary Asset Water Footprint Item (StnryAssetWtrFtprntItm)

    -   **Calculation**

        Sum all stationary asset water footprint items for the activity type “Withdrawal” and reporting period for all the source types and for different stress levels.

-   **Question Number: 303-4a**
    -   Logic: Apex class
    -   **Input Fields**

        Stationary Asset Water Footprint Item (StnryAssetWtrFtprntItm)

    -   **Calculation**

        Sum all stationary asset water footprint items for the activity type “Discharge” and reporting period for all the source types.

-   **Question Number: 303-5a**
    -   Logic: Apex class
    -   **Input Fields**

        Stationary Asset Water Footprint (StnryAssetWaterFtprnt)

        -   Total Consumption (Ml) (TotalConsumptionInMl)
    -   **Calculation**

        Sum of StnryAssetWaterFtprnt.Total Consumption (Ml) for the reporting period.

-   **Question Number: 303-5b**
    -   Logic: Apex class
    -   **Input Fields**

        Stationary Asset Water Footprint Item (StnryAssetWtrFtprntItm)

        -   Quantity (Ml) (QuantityInMl)
    -   **Calculation**

        Sum of StnryAssetWtrFtprntItm.Quantity (Ml) for the activity type “Consumption” for all stress levels.


## GRI 305 Emissions

-   **Question Number: 305-1a**
    -   Logic: GRI305U1DaDataRaptor
    -   **Input Fields**

        Annual Emissions Inventory (AnnualEmssnInventory)

        -   Total Scope 1 Emissions (tCO2e) (TotalScope1Emissions)
-   **Question Number: 305-2a**
    -   Logic: GRI305U2DaDataRaptor
    -   **Input Fields**

        Annual Emissions Inventory (AnnualEmssnInventory)

        -   Total Scope 2 Emissions (tCO2e) (TotalScope2Emissions)
-   **Question Number: 305-3a**
    -   Logic: GRI305U3DaDataRaptor
    -   **Input Fields**

        Annual Emissions Inventory (AnnualEmssnInventory)

        -   Total Scope 3 Emissions (tCO2e) (TotalScope3Emissions)
-   **Question Number: 305-3d**
    -   Logic: GRI305U3DdDataRaptor
    -   **Input Fields**

        Annual Emissions Inventory (AnnualEmssnInventory)

        -   Total Scope 3 Emissions (tCO2e) (TotalScope3Emissions)
-   **Question Number: 305-4a**
    -   Logic: GRI305U4DaDataRaptor
    -   **Input Fields**

        Annual Emissions Inventory (AnnualEmssnInventory)

        -   Total Scope 1 Emissions (tCO2e) (TotalScope1Emissions)
        -   Total Scope 2 Emissions (tCO2e) (TotalScope2Emissions)
    -   **Calculation**

        (AnnualEmssnInventory.Total Scope 1 Emissions (tCO2e) + AnnualEmssnInventory.Total Scope 2 Emissions (tCO2e))/Consolidated floor area across all carbon footprints

-   **Question Number: 305-4b**
    -   Logic: GRI305U4DbDataRaptor
    -   **Input Fields**
        -   Annual Emissions Inventory (AnnualEmssnInventory)
        -   Stationary Asset Carbon Footprint (StnryAssetCrbnFtprnt)

            Total Floor Area (TotalFloorArea)

    -   **Calculation**

        Consolidate StnryAssetCrbnFtprnt.Total Floor Area across all carbon footprints associated with the annual emissions inventory

-   **Question Number: 305-4c**
    -   Logic: GRI305U4DcDataRaptor
    -   **Input Fields**

        Annual Emissions Inventory (AnnualEmssnInventory)

        -   Total Scope 1 Emissions (tCO2e) (TotalScope1Emissions)
        -   Total Scope 2 Emissions (tCO2e) (TotalScope2Emissions)
    -   **Calculation**

        Sum(AnnualEmssnInventory.Total Scope 1 Emissions (tCO2e) + AnnualEmssnInventory.Total Scope 2 Emissions (tCO2e))


## GRI 306  Waste

-   **Question Number: 306-3a**
    -   Logic: Apex class
    -   **Input Fields**

        Waste Footprint (WasteFootprint)

        -   Total Waste Quantity in Tonnes (TotalWasteQuantityinTonnes)
    -   **Calculation**

        Sum(WasteFootprint.Total Waste Quantity in Tonnes) for reporting years

-   **Question Number: 306-4a**
    -   Logic: Apex class
    -   **Input Fields**

        Waste Footprint Item (WasteFootprintItem)

        -   Disposal Type (DisposalType)
        -   Waste Type (WasteType)
    -   **Calculation**

        Sum(WasteFootprintItem) for various waste types for a reporting period where WasteFootprintItem.Disposal Type !="landfilled"

-   **Question Number: 306-5a**
    -   Logic: Apex class
    -   **Input Fields**

        Waste Footprint Item (WasteFootprintItem)

        -   Waste Type (WasteType)
        -   Disposed Waste Quantity in Tonnes (DisposedWasteQuantityinTonnes)
    -   **Calculation**

        Sum(WasteFootprintItem.Disposed Waste Quantity in Tonnes) grouped by WasteFootprintItem.Waste Type

-   **Question Number: 306-5b**
    -   Logic: Apex class
    -   **Input Fields**

        Waste Footprint Item (WasteFootprintItem)

        -   Disposal Type (DisposalType)
        -   Disposed Waste Quantity in Tonnes (DisposedWasteQuantityinTonnes)
    -   **Calculation**

        Sum(WasteFootprintItem.Disposed Waste Quantity in Tonnes) grouped by WasteFootprintItem.Disposal Type

-   **Question Number: 306-5c**
    -   Logic: Apex class
    -   **Input Fields**

        Generated Waste (GeneratedWaste)

        -   Disposal Type (DisposalType)
        -   Disposed Waste Quantity in Tonnes (DisposedWasteQuantityinTonnes)
    -   **Calculation**

        Sum(GeneratedWaste.Disposed Waste Quantity in Tonnes) grouped by GeneratedWaste.Disposal Type

-   **Question Number: 306-5d**
    -   Logic: Apex class
    -   **Input Fields**

        Generated Waste (GeneratedWaste)

        -   Disposal Type (DisposalType)
        -   Disposed Waste Quantity in Tonnes (DisposedWasteQuantityinTonnes)
        -   Disposal Site Type (DisposalSiteType)
        -   Hazardous (IsHazardous)
    -   **Calculation**

        Sum(GeneratedWaste.Disposed Waste Quantity in Tonnes) grouped by GeneratedWaste.Disposal Type, GeneratedWaste.Disposal Site Type, GeneratedWaste.Hazardous


## GRI 401 Employment

-   **Question Number: 401-1a**
    -   Logic: Apex class
    -   **Input Fields**

        Employee Demographic Summary (EmployeeDemographicSum)

        -   Employee Count (EmployeeCount)
        -   Report Type (ReportType)
        -   Gender (Gender)
        -   Age Group (AgeGroup)
        -   Region (Region)
    -   **Calculation**

        Sum(EmployeeDemographicSum.Employee Count) where EmployeeDemographicSum.Report Type = “New Hire” for the reporting period grouped by EmployeeDemographicSum.Gender, EmployeeDemographicSum.Age Group, and EmployeeDemographicSum.Region

-   **Question Number: 401-1b**
    -   Logic: Apex class
    -   **Input Fields**

        Employee Demographic Summary (EmployeeDemographicSum)

        -   Employee Count (EmployeeCount)
        -   Report Type (ReportType)
        -   Gender (Gender)
        -   Age Group (AgeGroup)
        -   Region (Region)
    -   **Calculation**

        Sum(EmployeeDemographicSum.Employee Count) where EmployeeDemographicSum.Report Type = “'Turnover” for the reporting period grouped by EmployeeDemographicSum.Gender, EmployeeDemographicSum.Age Group, and EmployeeDemographicSum.Region


## GRI 404 Training and Education

-   **Question Number: 404-1a**
    -   Logic: Apex class
    -   **Input Fields**

        Employee Development Summary (EmployeeDevelopmentSum)

        -   Average Training Time (AverageTrainingTime)
        -   Gender (Gender)
        -   Employee Type (EmployeeType)
    -   **Calculation**

        Sum(EmployeeDevelopmentSum.Average Training Time) for the reporting period grouped by EmployeeDevelopmentSum.Gender, and EmployeeDevelopmentSum.Employee Type

-   **Question Number: 404-3a**
    -   Logic: Apex class
    -   **Input Fields**

        Employee Development Summary (EmployeeDevelopmentSum)

        -   Employee Percentage (EmployeePercentage)
        -   Gender (Gender)
        -   Employee Type (EmployeeType)
    -   **Calculation**

        Sum(EmployeeDevelopmentSum.Employee Percentage) for the reporting period grouped by EmployeeDevelopmentSum.Gender, and EmployeeDevelopmentSum.Employee Type


## GRI 405 Diversity and Equal Opportunity

-   **Question Number: 405-1a**
    -   Logic: Apex class
    -   **Input Fields**

        Diversity Equity Inclusion Summary (DivrsEquityInclSum)

        -   Employee Percentage (EmployeePercentage)
        -   Diversity Category (DiversityCategory)
        -   Employee Type (EmployeeType)
        -   Gender (Gender)
        -   Age Group (AgeGroup)
    -   **Calculation**

        Sum(DivrsEquityInclSum.Employee Percentage) where DivrsEquityInclSum.Diversity Category = “Representation” and DivrsEquityInclSum.Employee Type = “Governance Body Members” for the reporting period grouped by DivrsEquityInclSum.Gender, and DivrsEquityInclSum.Age Group

-   **Question Number: 405-1b**
    -   Logic: Apex class
    -   **Input Fields**

        Diversity Equity Inclusion Summary (DivrsEquityInclSum)

        -   Employee Percentage (EmployeePercentage)
        -   Diversity Category (DiversityCategory)
        -   Employee Type (EmployeeType)
        -   Gender (Gender)
        -   Age Group (AgeGroup)
    -   **Calculation**

        Sum(DivrsEquityInclSum.Employee Percentage) where DivrsEquityInclSum.Diversity Category = “Representation” and DivrsEquityInclSum.Employee Type = “'Employees” for the reporting period grouped by DivrsEquityInclSum.Gender, and DivrsEquityInclSum.Age Group

-   **Question Number: 405-2a**
    -   Logic: Apex class
    -   **Input Fields**

        Diversity Equity Inclusion Summary (DivrsEquityInclSum)

        -   Employee Percentage (EmployeePercentage)
        -   Diversity Category (DiversityCategory)
    -   **Calculation**

        Sum(DivrsEquityInclSum.Employee Percentage) where DivrsEquityInclSum.Diversity Category = “Remuneration” for the reporting period


## GRI 406 Non-discrimination

-   **Question Number: 406-1a**
    -   Logic: Apex class
    -   **Input Fields**

        Organization Incident Summary (OrgIncidentSummary)

        -   Incident Count (IncidentCount)
        -   Category (Category)
    -   **Calculation**

        Sum(OrgIncidentSummary.Incident Count) where OrgIncidentSummary.Category = “Violation of Indigenous People Rights” for the reporting period


## GRI 415  Public Policy

-   **Question Number: 415-1a**
    -   Logic: Apex class
    -   **Input Fields**

        Social Contribution Summary (SocialContributionSum)

        -   Total Amount (TotalAmount)
        -   Type (Type)
        -   Country (Country)
    -   **Calculation**

        Sum(SocialContributionSum.Total Amount) where SocialContributionSum.Type = “'Political” for the reporting period grouped by SocialContributionSum.Country


## GRI 416  Customer Health and Safety

-   **Question Number: 416-2a**
    -   Logic: Apex class
    -   **Input Fields**

        Organization Incident Summary (OrgIncidentSummary)

        -   Incident Count (IncidentCount)
        -   Category (Category)
        -   Penalty Type (PenaltyType)
    -   **Calculation**

        Sum(OrgIncidentSummary.Incident Count) where OrgIncidentSummary.Category = “Non-compliance - Customer Health and Safety” for the reporting period grouped by OrgIncidentSummary.Penalty Type


## GRI 417  Marketing and Labeling

-   **Question Number: 417-2a**
    -   Logic: Apex class
    -   **Input Fields**

        Organization Incident Summary (OrgIncidentSummary)

        -   Incident Count (IncidentCount)
        -   Category (Category)
        -   Penalty Type (PenaltyType)
    -   **Calculation**

        Sum(OrgIncidentSummary.Incident Count) where OrgIncidentSummary.Category = “Non-compliance - Marketing and Labeling” for the reporting period grouped by OrgIncidentSummary.Penalty Type

-   **Question Number: 417-3a**
    -   Logic: Apex class
    -   **Input Fields**

        Organization Incident Summary (OrgIncidentSummary)

        -   Incident Count (IncidentCount)
        -   Category (Category)
        -   Penalty Type (PenaltyType)
    -   **Calculation**

        Sum(OrgIncidentSummary.Incident Count) where OrgIncidentSummary.Category = “Non-compliance - Marketing Communications” for the reporting period grouped by OrgIncidentSummary.Penalty Type


## GRI 418  Customer Privacy

-   **Question Number: 418-1b**
    -   Logic: Apex class
    -   **Input Fields**

        Organization Incident Summary (OrgIncidentSummary)

        -   Incident Count (IncidentCount)
        -   Category (Category)
        -   Penalty Type (PenaltyType)
    -   **Calculation**

        Sum(OrgIncidentSummary.Incident Count) where OrgIncidentSummary.Category = “Customer Privacy” for the reporting period


## GRI 2 General Disclosures

-   **Question Number: 2-7a**
    -   Logic: Apex class
    -   **Input Fields**

        Employee Demographic Summary (EmployeeDemographicSum)

        -   Disclosure Reporting Period (DisclsReportingPeriodId)
        -   Employee Count (EmployeeCount)
        -   Employment Type (EmploymentType)
        -   Gender (Gender)
        -   Region (Region)
    -   **Calculation**

        Sum(EmployeeDemographicSum.Employee Count) where EmployeeDemographicSum.Employment Type != “Non-Employee” for the EmployeeDemographicSum.Disclosure Reporting Period grouped by EmployeeDemographicSum.Gender and EmployeeDemographicSum.Region

-   **Question Number: 2-7b(i,ii,iii,iv,v)**
    -   Logic: Apex class
    -   **Input Fields**

        Employee Demographic Summary (EmployeeDemographicSum)

        -   Disclosure Reporting Period (DisclsReportingPeriodId)
        -   Employee Count (EmployeeCount)
        -   Employment Type (EmploymentType)
        -   Gender (Gender)
        -   Region (Region)
    -   **Calculation**

        Sum(EmployeeDemographicSum.Employee Count) where EmployeeDemographicSum.Employment Type != “Non-Employee” for the EmployeeDemographicSum.Disclosure Reporting Period grouped by EmployeeDemographicSum.Employment Type, EmployeeDemographicSum.Gender, and EmployeeDemographicSum.Region

-   **Question Number: 2-8a**
    -   Logic: Apex class
    -   **Input Fields**

        Employee Demographic Summary (EmployeeDemographicSum)

        -   Disclosure Reporting Period (DisclsReportingPeriodId)
        -   Employee Count (EmployeeCount)
        -   Employment Type (EmploymentType)
        -   Work Type (WorkType)
    -   **Calculation**

        Sum(EmployeeDemographicSum.Employee Count) where EmployeeDemographicSum.Employment Type = “Non-Employee” for the EmployeeDemographicSum.Disclosure Reporting Period grouped by EmployeeDemographicSum.Work Type

-   **Question Number: 2-27a(i,ii)**
    -   Logic: Apex class
    -   **Input Fields**

        Organization Incident Summary (OrgIncidentSummary)

        -   Incident Count (IncidentCount)
        -   Disclosure Reporting Period (DisclsReportingPeriodId)
        -   Category (Category)
        -   Penalty Type (PenaltyType)
    -   **Calculation**

        Sum(OrgIncidentSummary.Incident Count) where OrgIncidentSummary.Category = “Non-compliance - Laws and Regulations” for the EmployeeDemographicSum.Disclosure Reporting Period grouped by OrgIncidentSummary.Penalty Type

-   **Question Number: 2-27b(i,ii)**
    -   Logic: Apex class
    -   **Input Fields**

        Organization Incident Summary (OrgIncidentSummary)

        -   Fine Amount (FineAmount)
        -   Incident Count (IncidentCount)
        -   Disclosure Reporting Period (DisclsReportingPeriodId)
        -   Category (Category)
        -   Penalty Type (PenaltyType)
    -   **Calculation**

        Sum(OrgIncidentSummary.Fine Amount and OrgIncidentSummary.Incident Count) where OrgIncidentSummary.Category = “Non-compliance - Laws and Regulations” for the EmployeeDemographicSum.Disclosure Reporting Period

-   **Question Number: 2-27b2**
    -   Logic: Apex class
    -   **Input Fields**

        Organization Incident Summary (OrgIncidentSummary)

        -   Fine Amount (FineAmount)
        -   Incident Count (IncidentCount)
        -   Disclosure Reporting Period (DisclsReportingPeriodId)
        -   Category (Category)
        -   Penalty Type (PenaltyType)
    -   **Calculation**

        Sum(OrgIncidentSummary.Fine Amount and OrgIncidentSummary.Incident Count) for the EmployeeDemographicSum.Disclosure Reporting Period where OrgIncidentSummary.Category = “Non-compliance - Laws and Regulations” for the previous reporting period


## GRI 201  Economic Performance

-   **Question Number: 201-1 a (i,ii,iii)**
    -   Logic: Apex class
    -   **Input Fields**

        Economic Performance Summary (EconomicPerformanceSum)

        -   Total Amount (TotalAmount)
        -   Disclosure Reporting Period (DisclsReportingPeriodId)
        -   Performance Category (PerformanceCategory)
    -   **Calculation**

        Sum(EconomicPerformanceSum.Total Amount) for the EconomicPerformanceSum.Disclosure Reporting Period where EconomicPerformanceSum.Performance Category = “Generated Value”

        Sum(EconomicPerformanceSum.Total Amount) for the EconomicPerformanceSum.Disclosure Reporting Period where EconomicPerformanceSum.Performance Category = “Distributed Value”

        Sum(EconomicPerformanceSum.Total Amount) for the EconomicPerformanceSum.Disclosure Reporting Period where EconomicPerformanceSum.Performance Category = “Retained Value”

-   **Question Number: 201-1b**
    -   Logic: Apex class
    -   **Input Fields**

        Economic Performance Summary (EconomicPerformanceSum)

        -   Total Amount (TotalAmount)
        -   Disclosure Reporting Period (DisclsReportingPeriodId)
        -   Performance Category (PerformanceCategory)
        -   Country (Country)
        -   Market (Market)
        -   Region (Region)
    -   **Calculation**

        Sum(EconomicPerformanceSum.Total Amount) for the EconomicPerformanceSum.Disclosure Reporting Period where EconomicPerformanceSum.Performance Category = “Generated Value” grouped by EconomicPerformanceSum.Country, EconomicPerformanceSum.Market, and EconomicPerformanceSum.Region

        Sum(EconomicPerformanceSum.Total Amount) for the EconomicPerformanceSum.Disclosure Reporting Period where EconomicPerformanceSum.Performance Category = “Distributed Value” grouped by EconomicPerformanceSum.Country, EconomicPerformanceSum.Market, and EconomicPerformanceSum.Region

        Sum(EconomicPerformanceSum.Total Amount) for the EconomicPerformanceSum.Disclosure Reporting Period where EconomicPerformanceSum.Performance Category = “Retained Value” grouped by EconomicPerformanceSum.Country, EconomicPerformanceSum.Market, and EconomicPerformanceSum.Region

-   **Question Number: 201-4a (i,ii,iii,iv,v,vi,vii)**
    -   Logic: Apex class
    -   **Input Fields**

        Economic Performance Summary (EconomicPerformanceSum)

        -   Total Amount (TotalAmount)
        -   Disclosure Reporting Period (DisclsReportingPeriodId)
    -   **Calculation**

        Sum(EconomicPerformanceSum.Total Amount) for the EconomicPerformanceSum.Disclosure Reporting Period

-   **Question Number: 201-4b**
    -   Logic: Apex class
    -   **Input Fields**

        Economic Performance Summary (EconomicPerformanceSum)

        -   Total Amount (TotalAmount)
        -   Disclosure Reporting Period (DisclsReportingPeriodId)
        -   Country (Country)
    -   **Calculation**

        Sum(EconomicPerformanceSum.Total Amount) for the EconomicPerformanceSum.Disclosure Reporting Period grouped by EconomicPerformanceSum.Country


## GRI 205: Anti-corruption

-   **Question Number: 205-2a**
    -   Logic: Apex class
    -   **Input Fields**

        Anti-Corruption Initiative Summary (AntiCorruptionInitSum)

        -   Recipient Count (RecipientCount)
        -   Recipient Percentage (RecipientPercentage)
        -   Disclosure Reporting Period (DisclsReportingPeriodId)
        -   Recipient Category (RecipientCategory)
        -   Region (Region)
    -   **Calculation**

        Sum(AntiCorruptionInitSum.Recipient Count and AntiCorruptionInitSum.Recipient Percentage) for the AntiCorruptionInitSum.Disclosure Reporting Period where AntiCorruptionInitSum.Recipient Category = “Governance Body Members” grouped by AntiCorruptionInitSum.Region

-   **Question Number: 205-2b**
    -   Logic: Apex class
    -   **Input Fields**

        Anti-Corruption Initiative Summary (AntiCorruptionInitSum)

        -   Recipient Count (RecipientCount)
        -   Recipient Percentage (RecipientPercentage)
        -   Disclosure Reporting Period (DisclsReportingPeriodId)
        -   Recipient Category (RecipientCategory)
        -   Region (Region)
    -   **Calculation**

        Sum(AntiCorruptionInitSum.Recipient Count and AntiCorruptionInitSum.Recipient Percentage) for the AntiCorruptionInitSum.Disclosure Reporting Period where AntiCorruptionInitSum.Recipient Category = “Employees” grouped by AntiCorruptionInitSum.Region

-   **Question Number: 205-2c**
    -   Logic: Apex class
    -   **Input Fields**

        Anti-Corruption Initiative Summary (AntiCorruptionInitSum)

        -   Recipient Count (RecipientCount)
        -   Recipient Percentage (RecipientPercentage)
        -   Disclosure Reporting Period (DisclsReportingPeriodId)
        -   Recipient Category (RecipientCategory)
        -   Region (Region)
    -   **Calculation**

        Sum(AntiCorruptionInitSum.Recipient Count and AntiCorruptionInitSum.Recipient Percentage) for the AntiCorruptionInitSum.Disclosure Reporting Period where AntiCorruptionInitSum.Recipient Category = “Business Partners” grouped by AntiCorruptionInitSum.Region

-   **Question Number: 205-3a**
    -   Logic: Apex class
    -   **Input Fields**

        Organization Incident Summary (OrgIncidentSummary)

        -   Incident Count (IncidentCount)
        -   Disclosure Reporting Period (DisclsReportingPeriodId)
        -   Incident Type (IncidentType)
    -   **Calculation**

        Sum(OrgIncidentSummary.Incident Count) for the EmployeeDemographicSum.Disclosure Reporting Period where OrgIncidentSummary.Incident Type = “Corruption”

-   **Question Number: 205-3b**
    -   Logic: Apex class
    -   **Input Fields**

        Organization Incident Summary (OrgIncidentSummary)

        -   Incident Count (IncidentCount)
        -   Disclosure Reporting Period (DisclsReportingPeriodId)
        -   Category (Category)
        -   Corrective Action Type (CorrectiveActionType)
        -   Incident Type (IncidentType)
    -   **Calculation**

        Sum(OrgIncidentSummary.Incident Count) for the EmployeeDemographicSum.Disclosure Reporting Period where OrgIncidentSummary.Incident Type = “Corruption” and OrgIncidentSummary.Corrective Action Type = “Employee Discipline” or OrgIncidentSummary.Corrective Action Type = “Employee Dismissal” or OrgIncidentSummary.Category = “Corruption - Employees Dismissed or Disciplined”

-   **Question Number: 205-3c**
    -   Logic: Apex class
    -   **Input Fields**

        Organization Incident Summary (OrgIncidentSummary)

        -   Incident Count (IncidentCount)
        -   Disclosure Reporting Period (DisclsReportingPeriodId)
        -   Category (Category)
        -   Corrective Action Type (CorrectiveActionType)
        -   Incident Type (IncidentType)
    -   **Calculation**

        Sum(OrgIncidentSummary.Incident Count) for the EmployeeDemographicSum.Disclosure Reporting Period where OrgIncidentSummary.Incident Type = “Corruption” and OrgIncidentSummary.Corrective Action Type = “Employee Discipline” or OrgIncidentSummary.Corrective Action Type = “Contract Termination or Non-renewal” or OrgIncidentSummary.Category = “Corruption - Business Partners Contracts Terminated”


## GRI 207  Tax

-   **Question Number: 207-4b (i, ii, iii, iv, v, vi, vii, viii, ix, x)**
    -   Logic: GRI207U4DbDR
    -   **Input Fields**

        Tax Disclosure Summary (TaxDisclosureSummary)

        -   Tax Jurisdiction (TaxJurisdiction)
        -   Disclosed By (DisclosedBy)
        -   Primary Activity (PrimaryActivity)
        -   Employee Count (EmployeeCount)
        -   Third Party Sales Revenue (ThirdPartySalesRevenue)
        -   Intra-Group Transaction Revenue (IntraGroupTrxnRev)
        -   Profit Loss Before Tax (ProfitLossBeforeTax)
        -   Tangible Asset Value (TangibleAssetValue)
        -   Income Tax Paid (IncomeTaxPaid)
        -   Income Tax Accrued (IncomeTaxAccrued)
    -   **Calculation**

        For each TaxDisclosureSummary.Tax Jurisdiction reported in Disclosure 207-4-a, get

        -   Disclosed By
        -   Primary Activity
        -   Employee Count
        -   Third Party Sales Revenue
        -   Intra-Group Transaction Revenue
        -   Profit Loss Before Tax
        -   Tangible Asset Value
        -   Income Tax Paid
        -   Income Tax Accrued
        -   Reasons for the difference between corporate income tax accrued on profit or loss and the tax due if the statutory tax rate is applied to profit or loss before tax

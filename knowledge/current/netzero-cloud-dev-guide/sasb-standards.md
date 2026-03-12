---
title: "SASB Standards"
domain: netzero-cloud-dev-guide
topic: sasb-standards
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:58.219Z
estimatedTokens: 13227
keywords: [SASB, Standards, Sustainability, Accounting, Board, enable, organizations, provide, industry-based, disclosures, sustainability-related, risks, opportunities, General, Technology]
---

# SASB Standards

> The Sustainability Accounting Standards Board (SASB) standards enable organizations
        to provide industry-based disclosures about sustainability-related risks and
        opportunities.

# SASB Standards

The Sustainability Accounting Standards Board (SASB) standards enable organizations to provide industry-based disclosures about sustainability-related risks and opportunities.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=netzero_cloud_dev_guide)

#### Note

Our platform provides you with the option to track data that you deem appropriate. We don't mandate or require you to enter any specific data. The decision to enter and track information, as well as the nature and extent of that data, rests solely with you.

Here are the calculations:

## General

-   **ReportingStartDate**
    -   Logic: GetStartDateEndDate
    -   **Input Fields**

        Disclosure Reporting Period (DisclsReportingPeriod)

        -   Start Date (StartDate)
    -   **Calculation**

        DisclsReportingPeriod.Start Date

-   **ReportingEndDate**
    -   Logic: GetStartDateEndDate
    -   **Input Fields**

        Disclosure Reporting Period (DisclsReportingPeriod)

        -   End Date (EndDate)
    -   **Calculation**

        DisclsReportingPeriod.End Date


## Technology & Communications

-   **TC-SI-130a.1a**
    -   Logic: TCUSIU130aD1aDataRaptor
    -   Description: Total energy consumed.
    -   **Input Fields**

        Annual Emissions Inventory (AnnualEmssnInventory)

        -   Energy Usage in Commercial Buildings (Kwh) (EnergyUsageCommercialBld)
        -   Energy Usage in Data Centers (Kwh) (EnergyUsageDataCenters)
    -   **Calculation**

        (AnnualEmssnInventory.Energy Usage in Commercial Buildings (Kwh) + AnnualEmssnInventory.Energy Usage in Data Centers (Kwh)) × 0.0036

-   **TC-SI-130a.1b**
    -   Logic: TCUSIU130aD1bDataRaptor
    -   Description: Percentage of total energy consumed that is grid electricity.
    -   **Input Fields**

        Stationary Asset Carbon Footprint (StnryAssetCrbnFtprnt)

        Stationary Asset Carbon Footprint Item (StnryAssetCrbnFtprntItm)

        -   Fuel Type (FuelType)
        -   Total Energy Consumption (kWh) (TotalEnergyConsumptionInKwh)

        Annual Emissions Inventory (AnnualEmssnInventory)

        -   Energy Usage in Commercial Buildings (Kwh) (EnergyUsageCommercialBld)
        -   Energy Usage in Data Centers (Kwh) (EnergyUsageDataCenters)
    -   **Calculation**

        SUM(StnryAssetCrbnFtprntItm.Total Energy Consumption (kWh) where StnryAssetCrbnFtprntItm.Fuel Type =”Electricity”)/(AnnualEmssnInventory.Energy Usage in Commercial Buildings (Kwh) + AnnualEmssnInventory.Energy Usage in Data Centers (Kwh)) × 100

-   **TC-SI-130a.1c**
    -   Logic: TCUSIU130aD1cDataRaptor
    -   Description: Percentage of total energy consumed that is renewable energy.
    -   **Input Fields**

        Annual Emissions Inventory (AnnualEmssnInventory)

        -   Energy Usage in Commercial Buildings (Kwh) (EnergyUsageCommercialBld)
        -   Energy Usage in Data Centers (Kwh) (EnergyUsageDataCenters)
        -   Renewable Energy Usage Percentage in Commercial Buildings (RenewableEnergyUsagePctCmclBld)
        -   Renewable Energy Usage Percentage in Data Centers (RenewableEnergyUsagePctDataCtr)
    -   **Calculation**

        (AnnualEmssnInventory.Energy Usage in Commercial Buildings (Kwh) × AnnualEmssnInventory.Renewable Energy Usage Percentage in Commercial Buildings) + (AnnualEmssnInventory.Energy Usage in Data Centers (Kwh) × AnnualEmssnInventory.Renewable Energy Usage Percentage in Data Centers)

-   **TC-SI-130a.2a**
    -   Logic: TCUSIU130aD2aDataRaptor
    -   Description: Total water withdrawn.
    -   **Input Fields**

        Stationary Asset Water Footprint (StnryAssetWaterFtprnt)

        -   Reporting Year (ReportingYear)

        Stationary Asset Water Footprint Item (StnryAssetWtrFtprntItm)

        -   Activity Type (ActivityType)
        -   Quantity (Ml) (QuantityInMl)
    -   **Calculation**

        StnryAssetWtrFtprntItm.Quantity (Ml) × 1000 for the StnryAssetWaterFtprnt.Reporting Year where StnryAssetWtrFtprntItm.Activity Type = Withdrawn

-   **TC-SI-130a.2b**
    -   Logic: TCUSIU130aD2bDataRaptor
    -   Description: Total water consumed.
    -   **Input Fields**

        Stationary Asset Water Footprint (StnryAssetWaterFtprnt)

        -   Reporting Year (ReportingYear)

        Stationary Asset Water Footprint Item (StnryAssetWtrFtprntItm)

        -   Activity Type (ActivityType)
        -   Quantity (Ml) (QuantityInMl)
    -   **Calculation**

        StnryAssetWtrFtprntItm.Quantity (Ml) × 1000 for the StnryAssetWaterFtprnt.Reporting Year where StnryAssetWtrFtprntItm.Activity Type = Consumed

-   **TC-SI-130a.2c**
    -   Logic: TCUSIU130aD2cDataRaptor
    -   Description: Percentage of total water withdrawn in regions with high or extremely high baseline water stress.
    -   **Input Fields**

        Stationary Asset Water Footprint (StnryAssetWaterFtprnt)

        -   Reporting Year (ReportingYear)

        Stationary Asset Water Footprint Item (StnryAssetWtrFtprntItm)

        -   Activity Type (ActivityType)
        -   Quantity (Ml) (QuantityInMl)
        -   Baseline Water Stress (BaselineWaterStress)
    -   **Calculation**

        StnryAssetWtrFtprntItm.Quantity (Ml) × 1000 for the StnryAssetWaterFtprnt.Reporting Year where StnryAssetWtrFtprntItm.Activity Type = Withdrawn and StnryAssetWtrFtprntItm.Baseline Water Stress = "High 40- 80%" or "Extremely high > 80%"

-   **TC-SI-130a.2d**
    -   Logic: TCUSIU130aD2dDataRaptor
    -   Description: Percentage of total water consumed in regions with high or extremely high baseline water stress.
    -   **Input Fields**

        Stationary Asset Water Footprint (StnryAssetWaterFtprnt)

        -   Reporting Year (ReportingYear)

        Stationary Asset Water Footprint Item (StnryAssetWtrFtprntItm)

        -   Activity Type (ActivityType)
        -   Quantity (Ml) (QuantityInMl)
        -   Baseline Water Stress (BaselineWaterStress)
    -   **Calculation**

        StnryAssetWtrFtprntItm.Quantity (Ml) × 1000 for the StnryAssetWaterFtprnt.Reporting Year where StnryAssetWtrFtprntItm.Activity Type = Consumed and StnryAssetWtrFtprntItm.Baseline Water Stress = "High 40- 80%" or "Extremely high > 80%"

-   **TC-SI-220a.3a, TC-SI-520a.1a**
    -   Logic: Apex class
    -   **Input Fields**

        Organization Incident Summary (OrgIncidentSummary)

        -   Category (Category)
        -   Incident Subtype (IncidentSubtype)
        -   Incident Type (IncidentType)
        -   Penalty Type (PenaltyType)
        -   Disclosure Reporting Period (DisclsReportingPeriodId)
        -   Fine Amount (FineAmount)
    -   **Calculation**

        For OrgIncidentSummary.Disclosure Reporting Period and selected OrgIncidentSummary.Category, OrgIncidentSummary.Incident Type, and OrgIncidentSummary.Incident Subtype, get OrgIncidentSummary.Fine Amount where OrgIncidentSummary.Penalty Type = “Monetary Fine”

        If there are multiple values based on the selected year and parameters, the values are displayed in a table but will not be aggregated.

-   **TC-SI-230a.1a**
    -   Logic: TCUSIU230aD1aDataRaptor
    -   **Input Fields**

        Organization Incident Summary (OrgIncidentSummary)

        -   Incident Count (IncidentCount)
        -   Incident Subtype (IncidentSubtype)
        -   Disclosure Reporting Period (DisclsReportingPeriodId)
    -   **Calculation**

        For OrgIncidentSummary.Disclosure Reporting Period, sum of OrgIncidentSummary.Incident Count where OrgIncidentSummary.Incident Sub Type = “Data Breach”

-   **TC-SI-230a.1b**
    -   Logic: Apex class
    -   **Input Fields**

        Organization Incident Summary (OrgIncidentSummary)

        -   Incident Count (IncidentCount)
        -   Incident Subtype (IncidentSubtype)
        -   Category (Category)
        -   Incident Type (IncidentType)
        -   Disclosure Reporting Period (DisclsReportingPeriodId)
    -   **Calculation**

        For OrgIncidentSummary.Disclosure Reporting Period and selected OrgIncidentSummary.Category, OrgIncidentSummary.Incident Type, and OrgIncidentSummary.Incident Subtype, get (OrgIncidentSummary.Incident Count / Sum of all OrgIncidentSummary.Incident Count) × 100

        If there are multiple values based on the selected year and parameters, the values are displayed in a table but will not be aggregated.

-   **TC-SI-330a.3a, TC-SI-330a.3b, TC-SI-330a.3c, TC-SI-330a.3d, TC-SI-330a.3e, TC-SI-330a.3f, TC-SI-330a.3g, TC-SI-330a.3h, TC-SI-330a.3i**
    -   Logic: Apex class
    -   **Input Fields**

        Employee Demographic Summary (EmployeeDemographicSum)

        -   Disclosure Reporting Period (DisclsReportingPeriodId)
        -   Employment Type (EmploymentType)
        -   Gender (Gender)
        -   Work Type (WorkType)
        -   Percentage (Percentage)
    -   **Calculation**

        For EmployeeDemographicSum.Disclosure Reporting Period and selected EmployeeDemographicSum.Gender, and EmployeeDemographicSum.Work Type, get EmployeeDemographicSum.Employment Type, EmployeeDemographicSum.Work Type, EmployeeDemographicSum.Gender, and EmployeeDemographicSum.Percentage

        If there are multiple values based on the selected year and parameters, the values are displayed in a table but will not be aggregated.

-   **TC-SI-330a.3aa, TC-SI-330a.3j, TC-SI-330a.3k, TC-SI-330a.3l, TC-SI-330a.3m, TC-SI-330a.3n, TC-SI-330a.3o, TC-SI-330a.3p, TC-SI-330a.3q, TC-SI-330a.3r, TC-SI-330a.3s, TC-SI-330a.3t, TC-SI-330a.3u, TC-SI-330a.3v, TC-SI-330a.3w, TC-SI-330a.3x, TC-SI-330a.3y, TC-SI-330a.3z**
    -   Logic: Apex class
    -   **Input Fields**

        Diversity Equity Inclusion Summary (DivrsEquityInclSum)

        -   Disclosure Reporting Period (DisclsReportingPeriodId)
        -   Employee Type (EmployeeType)
        -   Employment Type (EmploymentType)
        -   Gender (Gender)
        -   Race (Race)
        -   Employee Percentage (EmployeePercentage)
    -   **Calculation**

        For DivrsEquityInclSum.Disclosure Reporting Period and selected DivrsEquityInclSum.Employment Type, DivrsEquityInclSum.Employee Type, and DivrsEquityInclSum.Race, get DivrsEquityInclSum.Employment Type, DivrsEquityInclSum.Employee Type, DivrsEquityInclSum.Race, DivrsEquityInclSum.Gender, and DivrsEquityInclSum.Employee Percentage

        If there are multiple values based on the selected year and parameters, the values are displayed in a table but will not be aggregated.


## Telecommunication Services

-   **TC-TL-130a.1a**
    -   Logic: TCUTLU130aD1aDataRaptor
    -   Description: Total energy consumed.
    -   **Input Fields**

        Annual Emissions Inventory (AnnualEmssnInventory)

        -   Energy Usage in Commercial Buildings (Kwh) (EnergyUsageCommercialBld)
        -   Energy Usage in Data Centers (Kwh) (EnergyUsageDataCenters)
    -   **Calculation**

        (AnnualEmssnInventory.Energy Usage in Commercial Buildings (Kwh) + AnnualEmssnInventory.Energy Usage in Data Centers (Kwh)) × 0.0036

-   **TC-TL-130a.1b**
    -   Logic: TCUTLU130aD1bDataRaptor
    -   Description: Percentage of total energy consumed that is grid electricity.
    -   **Input Fields**

        Stationary Asset Carbon Footprint (StnryAssetCrbnFtprnt)

        Stationary Asset Carbon Footprint Item (StnryAssetCrbnFtprntItm)

        -   Fuel Type (FuelType)
        -   Total Energy Consumption (kWh) (TotalEnergyConsumptionInKwh)

        Annual Emissions Inventory (AnnualEmssnInventory)

        -   Energy Usage in Commercial Buildings (Kwh) (EnergyUsageCommercialBld)
        -   Energy Usage in Data Centers (Kwh) (EnergyUsageDataCenters)
    -   **Calculation**

        SUM(StnryAssetCrbnFtprntItm.Total Energy Consumption (kWh) where StnryAssetCrbnFtprntItm.Fuel Type =”Electricity”)/(AnnualEmssnInventory.Energy Usage in Commercial Buildings (Kwh) + AnnualEmssnInventory.Energy Usage in Data Centers (Kwh)) × 100

-   **TC-TL-130a.1c**
    -   Logic: TCUTLU130aD1cDataRaptor
    -   Description: Percentage of total energy consumed that is renewable energy.
    -   **Input Fields**

        Annual Emissions Inventory (AnnualEmssnInventory)

        -   Energy Usage in Commercial Buildings (Kwh) (EnergyUsageCommercialBld)
        -   Energy Usage in Data Centers (Kwh) (EnergyUsageDataCenters)
        -   Renewable Energy Usage Percentage in Commercial Buildings (RenewableEnergyUsagePctCmclBld)
        -   Renewable Energy Usage Percentage in Data Centers (RenewableEnergyUsagePctDataCtr)
    -   **Calculation**

        (AnnualEmssnInventory.Energy Usage in Commercial Buildings (Kwh) × AnnualEmssnInventory.Renewable Energy Usage Percentage in Commercial Buildings) + (AnnualEmssnInventory.Energy Usage in Data Centers (Kwh) × AnnualEmssnInventory.Renewable Energy Usage Percentage in Data Centers)

-   **TC-TL-230a.1a**
    -   Logic: TCUTLU230aD1aDataRaptor
    -   **Input Fields**

        Organization Incident Summary (OrgIncidentSummary)

        -   Incident Count (IncidentCount)
        -   Incident Subtype (IncidentSubtype)
        -   Disclosure Reporting Period (DisclsReportingPeriodId)
    -   **Calculation**

        For OrgIncidentSummary.Disclosure Reporting Period, sum of OrgIncidentSummary.Incident Count where OrgIncidentSummary.Incident Sub Type = “Data Breach”

-   **TC-TL-230a.1b**
    -   Logic: Apex class
    -   **Input Fields**

        Organization Incident Summary (OrgIncidentSummary)

        -   Incident Count (IncidentCount)
        -   Incident Subtype (IncidentSubtype)
        -   Category (Category)
        -   Incident Type (IncidentType)
        -   Disclosure Reporting Period (DisclsReportingPeriodId)
    -   **Calculation**

        For OrgIncidentSummary.Disclosure Reporting Period and selected OrgIncidentSummary.Category, OrgIncidentSummary.Incident Type, and OrgIncidentSummary.Incident Subtype, get (OrgIncidentSummary.Incident Count / Sum of all OrgIncidentSummary.Incident Count) × 100

        If there are multiple values based on the selected year and parameters, the values are displayed in a table but will not be aggregated.

-   **TC-TL-520a.1a**
    -   Logic: Apex class
    -   **Input Fields**

        Organization Incident Summary (OrgIncidentSummary)

        -   Category (Category)
        -   Incident Subtype (IncidentSubtype)
        -   Incident Type (IncidentType)
        -   Penalty Type (PenaltyType)
        -   Disclosure Reporting Period (DisclsReportingPeriodId)
        -   Fine Amount (FineAmount)
    -   **Calculation**

        For OrgIncidentSummary.Disclosure Reporting Period and selected OrgIncidentSummary.Category, OrgIncidentSummary.Incident Type, and OrgIncidentSummary.Incident Subtype, get OrgIncidentSummary.Fine Amount where OrgIncidentSummary.Penalty Type = “Monetary Fine”

        If there are multiple values based on the selected year and parameters, the values are displayed in a table but will not be aggregated.


## Internet Media & Services

-   **TC-IM-130a.1a**
    -   Logic: TCUIMU130aD1aDataRaptor
    -   Description: Total energy consumed.
    -   **Input Fields**

        Annual Emissions Inventory (AnnualEmssnInventory)

        -   Energy Usage in Commercial Buildings (Kwh) (EnergyUsageCommercialBld)
        -   Energy Usage in Data Centers (Kwh) (EnergyUsageDataCenters)
    -   **Calculation**

        (AnnualEmssnInventory.Energy Usage in Commercial Buildings (Kwh) + AnnualEmssnInventory.Energy Usage in Data Centers (Kwh)) × 0.0036

-   **TC-IM-130a.1b**
    -   Logic: TCUIMU130aD1bDataRaptor
    -   Description: Percentage of total energy consumed that is grid electricity.
    -   **Input Fields**

        Stationary Asset Carbon Footprint (StnryAssetCrbnFtprnt)

        Stationary Asset Carbon Footprint Item (StnryAssetCrbnFtprntItm)

        -   Fuel Type (FuelType)
        -   Total Energy Consumption (kWh) (TotalEnergyConsumptionInKwh)

        Annual Emissions Inventory (AnnualEmssnInventory)

        -   Energy Usage in Commercial Buildings (Kwh) (EnergyUsageCommercialBld)
        -   Energy Usage in Data Centers (Kwh) (EnergyUsageDataCenters)
    -   **Calculation**

        SUM(StnryAssetCrbnFtprntItm.Total Energy Consumption (kWh) where StnryAssetCrbnFtprntItm.Fuel Type =”Electricity”)/(AnnualEmssnInventory.Energy Usage in Commercial Buildings (Kwh) + AnnualEmssnInventory.Energy Usage in Data Centers (Kwh)) × 100

-   **TC-IM-130a.1c**
    -   Logic: TCUIMU130aD1cDataRaptor
    -   Description: Percentage of total energy consumed that is renewable energy.
    -   **Input Fields**

        Annual Emissions Inventory (AnnualEmssnInventory)

        -   Energy Usage in Commercial Buildings (Kwh) (EnergyUsageCommercialBld)
        -   Energy Usage in Data Centers (Kwh) (EnergyUsageDataCenters)
        -   Renewable Energy Usage Percentage in Commercial Buildings (RenewableEnergyUsagePctCmclBld)
        -   Renewable Energy Usage Percentage in Data Centers (RenewableEnergyUsagePctDataCtr)
    -   **Calculation**

        (AnnualEmssnInventory.Energy Usage in Commercial Buildings (Kwh) × AnnualEmssnInventory.Renewable Energy Usage Percentage in Commercial Buildings) + (AnnualEmssnInventory.Energy Usage in Data Centers (Kwh) × AnnualEmssnInventory.Renewable Energy Usage Percentage in Data Centers)

-   **TC-IM-130a.2a**
    -   Logic: TCUIMU130aD2aDataRaptor
    -   Description: Total water withdrawn.
    -   **Input Fields**

        Stationary Asset Water Footprint (StnryAssetWaterFtprnt)

        -   Reporting Year (ReportingYear)

        Stationary Asset Water Footprint Item (StnryAssetWtrFtprntItm)

        -   Activity Type (ActivityType)
        -   Quantity (Ml) (QuantityInMl)
    -   **Calculation**

        StnryAssetWtrFtprntItm.Quantity (Ml) × 1000 for the StnryAssetWaterFtprnt.Reporting Year where StnryAssetWtrFtprntItm.Activity Type = Withdrawn

-   **TC-IM-130a.2b**
    -   Logic: TCUIMU130aD2bDataRaptor
    -   Description: Total water consumed.
    -   **Input Fields**

        Stationary Asset Water Footprint (StnryAssetWaterFtprnt)

        -   Reporting Year (ReportingYear)

        Stationary Asset Water Footprint Item (StnryAssetWtrFtprntItm)

        -   Activity Type (ActivityType)
        -   Quantity (Ml) (QuantityInMl)
    -   **Calculation**

        StnryAssetWtrFtprntItm.Quantity (Ml) × 1000 for the StnryAssetWaterFtprnt.Reporting Year where StnryAssetWtrFtprntItm.Activity Type = Consumed

-   **TC-IM-130a.2c**
    -   Logic: TCUIMU130aD2cDataRaptor
    -   Description: Percentage of total water withdrawn in regions with high or extremely high baseline water stress.
    -   **Input Fields**

        Stationary Asset Water Footprint (StnryAssetWaterFtprnt)

        -   Reporting Year (ReportingYear)

        Stationary Asset Water Footprint Item (StnryAssetWtrFtprntItm)

        -   Activity Type (ActivityType)
        -   Quantity (Ml) (QuantityInMl)
        -   Baseline Water Stress (BaselineWaterStress)
    -   **Calculation**

        StnryAssetWtrFtprntItm.Quantity (Ml) × 1000 for the StnryAssetWaterFtprnt.Reporting Year where StnryAssetWtrFtprntItm.Activity Type = Withdrawn and StnryAssetWtrFtprntItm.Baseline Water Stress = "High 40- 80%" or "Extremely high > 80%"

-   **TC-IM-230a.1a**
    -   Logic: TCUIMU230aD1aDataRaptor
    -   **Input Fields**

        Organization Incident Summary (OrgIncidentSummary)

        -   Incident Count (IncidentCount)
        -   Incident Subtype (IncidentSubtype)
        -   Disclosure Reporting Period (DisclsReportingPeriodId)
    -   **Calculation**

        For OrgIncidentSummary.Disclosure Reporting Period, sum of OrgIncidentSummary.Incident Count where OrgIncidentSummary.Incident Sub Type = “Data Breach”

-   **TC-IM-220a.3a, TC-IM-520a.1a**
    -   Logic: Apex class
    -   **Input Fields**

        Organization Incident Summary (OrgIncidentSummary)

        -   Category (Category)
        -   Incident Subtype (IncidentSubtype)
        -   Incident Type (IncidentType)
        -   Penalty Type (PenaltyType)
        -   Disclosure Reporting Period (DisclsReportingPeriodId)
        -   Fine Amount (FineAmount)
    -   **Calculation**

        For OrgIncidentSummary.Disclosure Reporting Period and selected OrgIncidentSummary.Category, OrgIncidentSummary.Incident Type, and OrgIncidentSummary.Incident Subtype, get OrgIncidentSummary.Fine Amount where OrgIncidentSummary.Penalty Type = “Monetary Fine”

        If there are multiple values based on the selected year and parameters, the values are displayed in a table but will not be aggregated.

-   **TC-IM-230a.1b**
    -   Logic: Apex class
    -   **Input Fields**

        Organization Incident Summary (OrgIncidentSummary)

        -   Incident Count (IncidentCount)
        -   Incident Subtype (IncidentSubtype)
        -   Category (Category)
        -   Incident Type (IncidentType)
        -   Disclosure Reporting Period (DisclsReportingPeriodId)
    -   **Calculation**

        For OrgIncidentSummary.Disclosure Reporting Period and selected OrgIncidentSummary.Category, OrgIncidentSummary.Incident Type, and OrgIncidentSummary.Incident Subtype, get (OrgIncidentSummary.Incident Count / Sum of all OrgIncidentSummary.Incident Count) × 100

        If there are multiple values based on the selected year and parameters, the values are displayed in a table but will not be aggregated.

-   **TC-IM-330a.1a**
    -   Logic: Apex class
    -   **Input Fields**

        Diversity Equity Inclusion Summary (DivrsEquityInclSum)

        -   Disclosure Reporting Period (DisclsReportingPeriodId)
        -   Employee Location (Location)
        -   Employee Percentage (EmployeePercentage)
        -   Employee Type (EmployeeType)
        -   Employment Type (EmploymentType)
        -   Gender (Gender)
        -   Race (Race)
    -   **Calculation**

        For DivrsEquityInclSum.Disclosure Reporting Period and selected DivrsEquityInclSum.Employee type, DivrsEquityInclSum.Employment Type, and DivrsEquityInclSum.Location, get DivrsEquityInclSum.Employee type, DivrsEquityInclSum.Employment Type, DivrsEquityInclSum.Race, DivrsEquityInclSum.Gender, DivrsEquityInclSum.Location, and DivrsEquityInclSum.Employee Percentage

        If there are multiple values based on the selected year and parameters, the values are displayed in a table but will not be aggregated.

-   **TC-IM-330a.3a, TC-IM-330a.3b, TC-IM-330a.3c, TC-IM-330a.3d, TC-IM-330a.3e, TC-IM-330a.3f, TC-IM-330a.3g, TC-IM-330a.3h, TC-IM-330a.3i**
    -   Logic: Apex class
    -   **Input Fields**

        Employee Demographic Summary (EmployeeDemographicSum)

        -   Disclosure Reporting Period (DisclsReportingPeriodId)
        -   Employment Type (EmploymentType)
        -   Gender (Gender)
        -   Work Type (WorkType)
        -   Percentage (Percentage)
    -   **Calculation**

        For EmployeeDemographicSum.Disclosure Reporting Period and selected EmployeeDemographicSum.Gender, and EmployeeDemographicSum.Work Type, get EmployeeDemographicSum.Employment Type, EmployeeDemographicSum.Work Type, EmployeeDemographicSum.Gender, and EmployeeDemographicSum.Percentage

        If there are multiple values based on the selected year and parameters, the values are displayed in a table but will not be aggregated.

-   **TC-IM-330a.3aa, TC-IM-330a.3j, TC-IM-330a.3k, TC-IM-330a.3l, TC-IM-330a.3m, TC-IM-330a.3n, TC-IM-330a.3o, TC-IM-330a.3p, TC-IM-330a.3q, TC-IM-330a.3r, TC-IM-330a.3s, TC-IM-330a.3t, TC-IM-330a.3u, TC-IM-330a.3v, TC-IM-330a.3w, TC-IM-330a.3x, TC-IM-330a.3y, TC-IM-330a.3z**
    -   Logic: Apex class
    -   **Input Fields**

        Diversity Equity Inclusion Summary (DivrsEquityInclSum)

        -   Disclosure Reporting Period (DisclsReportingPeriodId)
        -   Employee Type (EmployeeType)
        -   Employment Type (EmploymentType)
        -   Gender (Gender)
        -   Race (Race)
        -   Employee Percentage (EmployeePercentage)
    -   **Calculation**

        For DivrsEquityInclSum.Disclosure Reporting Period and selected DivrsEquityInclSum.Employment Type, DivrsEquityInclSum.Employee Type, and DivrsEquityInclSum.Race, get DivrsEquityInclSum.Employment Type, DivrsEquityInclSum.Employee Type, DivrsEquityInclSum.Race, DivrsEquityInclSum.Gender, and DivrsEquityInclSum.Employee Percentage

        If there are multiple values based on the selected year and parameters, the values are displayed in a table but will not be aggregated.


## Hardware

-   **TC-HW-330a.1a, TC-HW-330a.1b, TC-HW-330a.1c, TC-HW-330a.1d, TC-HW-330a.1e, TC-HW-330a.1f, TC-HW-330a.1g, TC-HW-330a.1h, TC-HW-330a.1i**
    -   Logic: Apex class
    -   **Input Fields**

        Employee Demographic Summary (EmployeeDemographicSum)

        -   Disclosure Reporting Period (DisclsReportingPeriodId)
        -   Employment Type (EmploymentType)
        -   Gender (Gender)
        -   Work Type (WorkType)
        -   Percentage (Percentage)
    -   **Calculation**

        For EmployeeDemographicSum.Disclosure Reporting Period and selected EmployeeDemographicSum.Gender, and EmployeeDemographicSum.Work Type, get EmployeeDemographicSum.Employment Type, EmployeeDemographicSum.Work Type, EmployeeDemographicSum.Gender, and EmployeeDemographicSum.Percentage

        If there are multiple values based on the selected year and parameters, the values are displayed in a table but will not be aggregated.

-   **TC-HW-330a.1aa, TC-HW-330a.1j, TC-HW-330a.1k, TC-HW-330a.1l, TC-HW-330a.1m, TC-HW-330a.1n, TC-HW-330a.1o, TC-HW-330a.1p, TC-HW-330a.1q, TC-HW-330a.1r, TC-HW-330a.1s, TC-HW-330a.1t, TC-HW-330a.1u, TC-HW-330a.1v, TC-HW-330a.1w, TC-HW-330a.1x, TC-HW-330a.1y, TC-HW-330a.1z**
    -   Logic: Apex class
    -   **Input Fields**

        Diversity Equity Inclusion Summary (DivrsEquityInclSum)

        -   Disclosure Reporting Period (DisclsReportingPeriodId)
        -   Employee Type (EmployeeType)
        -   Employment Type (EmploymentType)
        -   Gender (Gender)
        -   Race (Race)
        -   Employee Percentage (EmployeePercentage)
    -   **Calculation**

        For DivrsEquityInclSum.Disclosure Reporting Period and selected DivrsEquityInclSum.Employment Type, DivrsEquityInclSum.Employee Type, and DivrsEquityInclSum.Race, get DivrsEquityInclSum.Employment Type, DivrsEquityInclSum.Employee Type, DivrsEquityInclSum.Race, DivrsEquityInclSum.Gender, and DivrsEquityInclSum.Employee Percentage

        If there are multiple values based on the selected year and parameters, the values are displayed in a table but will not be aggregated.


## Services Sector

-   **SV-HL-130a.1a**
    -   Logic: SVUHLU130aD1aDataRaptor
    -   Description: Total energy consumed.
    -   **Input Fields**

        Annual Emissions Inventory (AnnualEmssnInventory)

        -   Energy Usage in Commercial Buildings (Kwh) (EnergyUsageCommercialBld)
        -   Energy Usage in Data Centers (Kwh) (EnergyUsageDataCenters)
    -   **Calculation**

        (AnnualEmssnInventory.Energy Usage in Commercial Buildings (Kwh) + AnnualEmssnInventory.Energy Usage in Data Centers (Kwh)) × 0.0036

-   **SV-HL-130a.1b**
    -   Logic: SVUHLU130aD1bDataRaptor
    -   Description: Percentage of total energy consumed that is grid electricity.
    -   **Input Fields**

        Stationary Asset Carbon Footprint (StnryAssetCrbnFtprnt)

        Stationary Asset Carbon Footprint Item (StnryAssetCrbnFtprntItm)

        -   Fuel Type (FuelType)
        -   Total Energy Consumption (kWh) (TotalEnergyConsumptionInKwh)

        Annual Emissions Inventory (AnnualEmssnInventory)

        -   Energy Usage in Commercial Buildings (Kwh) (EnergyUsageCommercialBld)
        -   Energy Usage in Data Centers (Kwh) (EnergyUsageDataCenters)
    -   **Calculation**

        SUM(StnryAssetCrbnFtprntItm.Total Energy Consumption (kWh) where StnryAssetCrbnFtprntItm.Fuel Type =”Electricity”)/(AnnualEmssnInventory.Energy Usage in Commercial Buildings (Kwh) + AnnualEmssnInventory.Energy Usage in Data Centers (Kwh)) × 100

-   **SV-HL-130a.1c**
    -   Logic: SVUHLU130aD1cDataRaptor
    -   Description: Percentage of total energy consumed that is renewable energy.
    -   **Input Fields**

        Annual Emissions Inventory (AnnualEmssnInventory)

        -   Energy Usage in Commercial Buildings (Kwh) (EnergyUsageCommercialBld)
        -   Energy Usage in Data Centers (Kwh) (EnergyUsageDataCenters)
        -   Renewable Energy Usage Percentage in Commercial Buildings (RenewableEnergyUsagePctCmclBld)
        -   Renewable Energy Usage Percentage in Data Centers (RenewableEnergyUsagePctDataCtr)
    -   **Calculation**

        (AnnualEmssnInventory.Energy Usage in Commercial Buildings (Kwh) × AnnualEmssnInventory.Renewable Energy Usage Percentage in Commercial Buildings) + (AnnualEmssnInventory.Energy Usage in Data Centers (Kwh) × AnnualEmssnInventory.Renewable Energy Usage Percentage in Data Centers)

-   **SV-HL-140a.1a**
    -   Logic: SVUHLU140aD1aDataRaptor
    -   Description: Total water withdrawn.
    -   **Input Fields**

        Stationary Asset Water Footprint (StnryAssetWaterFtprnt)

        -   Reporting Year (ReportingYear)

        Stationary Asset Water Footprint Item (StnryAssetWtrFtprntItm)

        -   Activity Type (ActivityType)
        -   Quantity (Ml) (QuantityInMl)
    -   **Calculation**

        StnryAssetWtrFtprntItm.Quantity (Ml) × 1000 for the StnryAssetWaterFtprnt.Reporting Year where StnryAssetWtrFtprntItm.Activity Type = Withdrawn

-   **SV-HL-140a.1b**
    -   Logic: SVUHLU140aD1bDataRaptor
    -   Description: Total water consumed.
    -   **Input Fields**

        Stationary Asset Water Footprint (StnryAssetWaterFtprnt)

        -   Reporting Year (ReportingYear)

        Stationary Asset Water Footprint Item (StnryAssetWtrFtprntItm)

        -   Activity Type (ActivityType)
        -   Quantity (Ml) (QuantityInMl)
    -   **Calculation**

        StnryAssetWtrFtprntItm.Quantity (Ml) × 1000 for the StnryAssetWaterFtprnt.Reporting Year where StnryAssetWtrFtprntItm.Activity Type = Consumed

-   **SV-HL-140a.1c**
    -   Logic: SVUHLU140aD1cDataRaptor
    -   Description: Percentage of total water withdrawn in regions with high or extremely high baseline water stress.
    -   **Input Fields**

        Stationary Asset Water Footprint (StnryAssetWaterFtprnt)

        -   Reporting Year (ReportingYear)

        Stationary Asset Water Footprint Item (StnryAssetWtrFtprntItm)

        -   Activity Type (ActivityType)
        -   Quantity (Ml) (QuantityInMl)
        -   Baseline Water Stress (BaselineWaterStress)
    -   **Calculation**

        StnryAssetWtrFtprntItm.Quantity (Ml) × 1000 for the StnryAssetWaterFtprnt.Reporting Year where StnryAssetWtrFtprntItm.Activity Type = Withdrawn and StnryAssetWtrFtprntItm.Baseline Water Stress = "High 40- 80%" or "Extremely high > 80%"

-   **SV-HL-140a.1d**
    -   Logic: SVUHLU140aD1dDataRaptor
    -   Description: Percentage of total water consumed in regions with high or extremely high baseline water stress.
    -   **Input Fields**

        Stationary Asset Water Footprint (StnryAssetWaterFtprnt)

        -   Reporting Year (ReportingYear)

        Stationary Asset Water Footprint Item (StnryAssetWtrFtprntItm)

        -   Activity Type (ActivityType)
        -   Quantity (Ml) (QuantityInMl)
        -   Baseline Water Stress (BaselineWaterStress)
    -   **Calculation**

        StnryAssetWtrFtprntItm.Quantity (Ml) × 1000 for the StnryAssetWaterFtprnt.Reporting Year where StnryAssetWtrFtprntItm.Activity Type = Consumed and StnryAssetWtrFtprntItm.Baseline Water Stress = "High 40- 80%" or "Extremely high > 80%"


## Leisure Facilities

-   **SV-LF-130a.1a**
    -   Logic: SVULFU130aD1aDataRaptor
    -   Description: Total energy consumed.
    -   **Input Fields**

        Annual Emissions Inventory (AnnualEmssnInventory)

        -   Energy Usage in Commercial Buildings (Kwh) (EnergyUsageCommercialBld)
        -   Energy Usage in Data Centers (Kwh) (EnergyUsageDataCenters)
    -   **Calculation**

        (AnnualEmssnInventory.Energy Usage in Commercial Buildings (Kwh) + AnnualEmssnInventory.Energy Usage in Data Centers (Kwh)) × 0.0036

-   **SV-LF-130a.1b**
    -   Logic: SVULFU130aD1bDataRaptor
    -   Description: Percentage of total energy consumed that is grid electricity.
    -   **Input Fields**

        Stationary Asset Carbon Footprint (StnryAssetCrbnFtprnt)

        Stationary Asset Carbon Footprint Item (StnryAssetCrbnFtprntItm)

        -   Fuel Type (FuelType)
        -   Total Energy Consumption (kWh) (TotalEnergyConsumptionInKwh)

        Annual Emissions Inventory (AnnualEmssnInventory)

        -   Energy Usage in Commercial Buildings (Kwh) (EnergyUsageCommercialBld)
        -   Energy Usage in Data Centers (Kwh) (EnergyUsageDataCenters)
    -   **Calculation**

        SUM(StnryAssetCrbnFtprntItm.Total Energy Consumption (kWh) where StnryAssetCrbnFtprntItm.Fuel Type =”Electricity”)/(AnnualEmssnInventory.Energy Usage in Commercial Buildings (Kwh) + AnnualEmssnInventory.Energy Usage in Data Centers (Kwh)) × 100

-   **SV-LF-130a.1c**
    -   Logic: SVULFU130aD1cDataRaptor
    -   Description: Percentage of total energy consumed that is renewable energy.
    -   **Input Fields**

        Annual Emissions Inventory (AnnualEmssnInventory)

        -   Energy Usage in Commercial Buildings (Kwh) (EnergyUsageCommercialBld)
        -   Energy Usage in Data Centers (Kwh) (EnergyUsageDataCenters)
        -   Renewable Energy Usage Percentage in Commercial Buildings (RenewableEnergyUsagePctCmclBld)
        -   Renewable Energy Usage Percentage in Data Centers (RenewableEnergyUsagePctDataCtr)
    -   **Calculation**

        (AnnualEmssnInventory.Energy Usage in Commercial Buildings (Kwh) × AnnualEmssnInventory.Renewable Energy Usage Percentage in Commercial Buildings) + (AnnualEmssnInventory.Energy Usage in Data Centers (Kwh) × AnnualEmssnInventory.Renewable Energy Usage Percentage in Data Centers)


## Media & Entertainment

-   **SV-ME-260a.1a, SV-ME-260a.1b, SV-ME-260a.1c, SV-ME-260a.1d, SV-ME-260a.1e, SV-ME-260a.1f, SV-ME-260a.1g, SV-ME-260a.1h, SV-ME-260a.1i**
    -   Logic: Apex class
    -   **Input Fields**

        Employee Demographic Summary (EmployeeDemographicSum)

        -   Disclosure Reporting Period (DisclsReportingPeriodId)
        -   Employment Type (EmploymentType)
        -   Gender (Gender)
        -   Work Type (WorkType)
        -   Percentage (Percentage)
    -   **Calculation**

        For EmployeeDemographicSum.Disclosure Reporting Period and selected EmployeeDemographicSum.Gender, and EmployeeDemographicSum.Work Type, get EmployeeDemographicSum.Employment Type, EmployeeDemographicSum.Work Type, EmployeeDemographicSum.Gender, and EmployeeDemographicSum.Percentage

        If there are multiple values based on the selected year and parameters, the values are displayed in a table but will not be aggregated.

-   **SV-ME-260a.1aa, SV-ME-260a.1j, SV-ME-260a.1k, SV-ME-260a.1l, SV-ME-260a.1m, SV-ME-260a.1n, SV-ME-260a.1o, SV-ME-260a.1p, SV-ME-260a.1q, SV-ME-260a.1r, SV-ME-260a.1t, SV-ME-260a.1u, SV-ME-260a.1v, SV-ME-260a.1w, SV-ME-260a.1x, SV-ME-260a.1y, SV-ME-260a.1z**
    -   Logic: Apex class
    -   **Input Fields**

        Diversity Equity Inclusion Summary (DivrsEquityInclSum)

        -   Disclosure Reporting Period (DisclsReportingPeriodId)
        -   Employee Type (EmployeeType)
        -   Employment Type (EmploymentType)
        -   Gender (Gender)
        -   Race (Race)
        -   Employee Percentage (EmployeePercentage)
    -   **Calculation**

        For DivrsEquityInclSum.Disclosure Reporting Period and selected DivrsEquityInclSum.Employment Type, DivrsEquityInclSum.Employee Type, and DivrsEquityInclSum.Race, get DivrsEquityInclSum.Employment Type, DivrsEquityInclSum.Employee Type, DivrsEquityInclSum.Race, DivrsEquityInclSum.Gender, and DivrsEquityInclSum.Employee Percentage

        If there are multiple values based on the selected year and parameters, the values are displayed in a table but will not be aggregated.


## Professional & Commercial Services

-   **SV-PS-230a.3a**
    -   Logic: SVUPSU230aD3aDataRaptor
    -   **Input Fields**

        Organization Incident Summary (OrgIncidentSummary)

        -   Incident Count (IncidentCount)
        -   Incident Subtype (IncidentSubtype)
        -   Disclosure Reporting Period (DisclsReportingPeriodId)
    -   **Calculation**

        For OrgIncidentSummary.Disclosure Reporting Period, sum of OrgIncidentSummary.Incident Count where OrgIncidentSummary.Incident Sub Type = “Data Breach”

-   **SV-PS-330a.1a, SV-PS-330a.1b, SV-PS-330a.1c, SV-PS-330a.1d, SV-PS-330a.1e, SV-PS-330a.1f, SV-PS-330a.1g, SV-PS-330a.1h, SV-PS-330a.1i**
    -   Logic: Apex class
    -   **Input Fields**

        Employee Demographic Summary (EmployeeDemographicSum)

        -   Disclosure Reporting Period (DisclsReportingPeriodId)
        -   Employment Type (EmploymentType)
        -   Gender (Gender)
        -   Work Type (WorkType)
        -   Percentage (Percentage)
    -   **Calculation**

        For EmployeeDemographicSum.Disclosure Reporting Period and selected EmployeeDemographicSum.Gender, and EmployeeDemographicSum.Work Type, get EmployeeDemographicSum.Employment Type, EmployeeDemographicSum.Work Type, EmployeeDemographicSum.Gender, and EmployeeDemographicSum.Percentage

        If there are multiple values based on the selected year and parameters, the values are displayed in a table but will not be aggregated.

-   **SV-PS-330a.1aa, SV-PS-330a.1j, SV-PS-330a.1k, SV-PS-330a.1l, SV-PS-330a.1m, SV-PS-330a.1n, SV-PS-330a.1o, SV-PS-330a.1p, SV-PS-330a.1q, SV-PS-330a.1r, SV-PS-330a.1s, SV-PS-330a.1t, SV-PS-330a.1u, SV-PS-330a.1v, SV-PS-330a.1w, SV-PS-330a.1x, SV-PS-330a.1y, SV-PS-330a.1z**
    -   Logic: Apex class
    -   **Input Fields**

        Diversity Equity Inclusion Summary (DivrsEquityInclSum)

        -   Disclosure Reporting Period (DisclsReportingPeriodId)
        -   Employee Type (EmployeeType)
        -   Employment Type (EmploymentType)
        -   Gender (Gender)
        -   Race (Race)
        -   Employee Percentage (EmployeePercentage)
    -   **Calculation**

        For DivrsEquityInclSum.Disclosure Reporting Period and selected DivrsEquityInclSum.Employment Type, DivrsEquityInclSum.Employee Type, and DivrsEquityInclSum.Race, get DivrsEquityInclSum.Employment Type, DivrsEquityInclSum.Employee Type, DivrsEquityInclSum.Race, DivrsEquityInclSum.Gender, and DivrsEquityInclSum.Employee Percentage

        If there are multiple values based on the selected year and parameters, the values are displayed in a table but will not be aggregated.


## Consumer Goods

-   **CG-EC-130a.1a**
    -   Logic: CGUECU130aD1aDataRaptor
    -   Description: Total energy consumed.
    -   **Input Fields**

        Annual Emissions Inventory (AnnualEmssnInventory)

        -   Energy Usage in Commercial Buildings (Kwh) (EnergyUsageCommercialBld)
        -   Energy Usage in Data Centers (Kwh) (EnergyUsageDataCenters)
    -   **Calculation**

        (AnnualEmssnInventory.Energy Usage in Commercial Buildings (Kwh) + AnnualEmssnInventory.Energy Usage in Data Centers (Kwh)) × 0.0036

-   **CG-EC-130a.1b**
    -   Logic: CGUECU130aD1bDataRaptor
    -   Description: Percentage of total energy consumed that is grid electricity.
    -   **Input Fields**

        Stationary Asset Carbon Footprint (StnryAssetCrbnFtprnt)

        Stationary Asset Carbon Footprint Item (StnryAssetCrbnFtprntItm)

        -   Fuel Type (FuelType)
        -   Total Energy Consumption (kWh) (TotalEnergyConsumptionInKwh)

        Annual Emissions Inventory (AnnualEmssnInventory)

        -   Energy Usage in Commercial Buildings (Kwh) (EnergyUsageCommercialBld)
        -   Energy Usage in Data Centers (Kwh) (EnergyUsageDataCenters)
    -   **Calculation**

        SUM(StnryAssetCrbnFtprntItm.Total Energy Consumption (kWh) where StnryAssetCrbnFtprntItm.Fuel Type =”Electricity”)/(AnnualEmssnInventory.Energy Usage in Commercial Buildings (Kwh) + AnnualEmssnInventory.Energy Usage in Data Centers (Kwh)) × 100

-   **CG-EC-130a.1c**
    -   Logic: CGUECU130aD1cDataRaptor
    -   Description: Percentage of total energy consumed that is renewable energy.
    -   **Input Fields**

        Annual Emissions Inventory (AnnualEmssnInventory)

        -   Energy Usage in Commercial Buildings (Kwh) (EnergyUsageCommercialBld)
        -   Energy Usage in Data Centers (Kwh) (EnergyUsageDataCenters)
        -   Renewable Energy Usage Percentage in Commercial Buildings (RenewableEnergyUsagePctCmclBld)
        -   Renewable Energy Usage Percentage in Data Centers (RenewableEnergyUsagePctDataCtr)
    -   **Calculation**

        (AnnualEmssnInventory.Energy Usage in Commercial Buildings (Kwh) × AnnualEmssnInventory.Renewable Energy Usage Percentage in Commercial Buildings) + (AnnualEmssnInventory.Energy Usage in Data Centers (Kwh) × AnnualEmssnInventory.Renewable Energy Usage Percentage in Data Centers)

-   **CG-EC-130a.2a**
    -   Logic: CGUECU130aD2aDataRaptor
    -   Description: Total water withdrawn.
    -   **Input Fields**

        Stationary Asset Water Footprint (StnryAssetWaterFtprnt)

        -   Reporting Year (ReportingYear)

        Stationary Asset Water Footprint Item (StnryAssetWtrFtprntItm)

        -   Activity Type (ActivityType)
        -   Quantity (Ml) (QuantityInMl)
    -   **Calculation**

        StnryAssetWtrFtprntItm.Quantity (Ml) × 1000 for the StnryAssetWaterFtprnt.Reporting Year where StnryAssetWtrFtprntItm.Activity Type = Withdrawn

-   **CG-EC-130a.2b**
    -   Logic: CGUECU130aD2bDataRaptor
    -   Description: Total water consumed.
    -   **Input Fields**

        Stationary Asset Water Footprint (StnryAssetWaterFtprnt)

        -   Reporting Year (ReportingYear)

        Stationary Asset Water Footprint Item (StnryAssetWtrFtprntItm)

        -   Activity Type (ActivityType)
        -   Quantity (Ml) (QuantityInMl)
    -   **Calculation**

        StnryAssetWtrFtprntItm.Quantity (Ml) × 1000 for the StnryAssetWaterFtprnt.Reporting Year where StnryAssetWtrFtprntItm.Activity Type = Consumed

-   **CG-EC-130a.2c**
    -   Logic: CGUECU130aD2cDataRaptor
    -   Description: Percentage of total water withdrawn in regions with high or extremely high baseline water stress.
    -   **Input Fields**

        Stationary Asset Water Footprint (StnryAssetWaterFtprnt)

        -   Reporting Year (ReportingYear)

        Stationary Asset Water Footprint Item (StnryAssetWtrFtprntItm)

        -   Activity Type (ActivityType)
        -   Quantity (Ml) (QuantityInMl)
        -   Baseline Water Stress (BaselineWaterStress)
    -   **Calculation**

        StnryAssetWtrFtprntItm.Quantity (Ml) × 1000 for the StnryAssetWaterFtprnt.Reporting Year where StnryAssetWtrFtprntItm.Activity Type = Withdrawn and StnryAssetWtrFtprntItm.Baseline Water Stress = "High 40- 80%" or "Extremely high > 80%"

-   **CG-EC-130a.2d**
    -   Logic: CGUECU130aD2dDataRaptor
    -   Description: Percentage of total water consumed in regions with high or extremely high baseline water stress.
    -   **Input Fields**

        Stationary Asset Water Footprint (StnryAssetWaterFtprnt)

        -   Reporting Year (ReportingYear)

        Stationary Asset Water Footprint Item (StnryAssetWtrFtprntItm)

        -   Activity Type (ActivityType)
        -   Quantity (Ml) (QuantityInMl)
        -   Baseline Water Stress (BaselineWaterStress)
    -   **Calculation**

        StnryAssetWtrFtprntItm.Quantity (Ml) × 1000 for the StnryAssetWaterFtprnt.Reporting Year where StnryAssetWtrFtprntItm.Activity Type = Consumed and StnryAssetWtrFtprntItm.Baseline Water Stress = "High 40- 80%" or "Extremely high > 80%"

-   **CG-EC-230a.2a**
    -   Logic: CGUECU230aD2aDataRaptor
    -   **Input Fields**

        Organization Incident Summary (OrgIncidentSummary)

        -   Incident Count (IncidentCount)
        -   Incident Subtype (IncidentSubtype)
        -   Disclosure Reporting Period (DisclsReportingPeriodId)
    -   **Calculation**

        For OrgIncidentSummary.Disclosure Reporting Period, sum of OrgIncidentSummary.Incident Count where OrgIncidentSummary.Incident Sub Type = “Data Breach”

-   **CG-EC-230a.2b**
    -   Logic: Apex class
    -   **Input Fields**

        Organization Incident Summary (OrgIncidentSummary)

        -   Incident Count (IncidentCount)
        -   Incident Subtype (IncidentSubtype)
        -   Category (Category)
        -   Incident Type (IncidentType)
        -   Disclosure Reporting Period (DisclsReportingPeriodId)
    -   **Calculation**

        For OrgIncidentSummary.Disclosure Reporting Period and selected OrgIncidentSummary.Category, OrgIncidentSummary.Incident Type, and OrgIncidentSummary.Incident Subtype, get (OrgIncidentSummary.Incident Count / Sum of all OrgIncidentSummary.Incident Count) × 100

        If there are multiple values based on the selected year and parameters, the values are displayed in a table but will not be aggregated.

-   **CG-EC-330a.3a, CG-EC-330a.3b, CG-EC-330a.3c, CG-EC-330a.3d, CG-EC-330a.3e, CG-EC-330a.3f, CG-EC-330a.3g, CG-EC-330a.3h, CG-EC-330a.3i**
    -   Logic: Apex class
    -   **Input Fields**

        Employee Demographic Summary (EmployeeDemographicSum)

        -   Disclosure Reporting Period (DisclsReportingPeriodId)
        -   Employment Type (EmploymentType)
        -   Gender (Gender)
        -   Work Type (WorkType)
        -   Percentage (Percentage)
    -   **Calculation**

        For EmployeeDemographicSum.Disclosure Reporting Period and selected EmployeeDemographicSum.Gender, and EmployeeDemographicSum.Work Type, get EmployeeDemographicSum.Employment Type, EmployeeDemographicSum.Work Type, EmployeeDemographicSum.Gender, and EmployeeDemographicSum.Percentage

        If there are multiple values based on the selected year and parameters, the values are displayed in a table but will not be aggregated.

-   **CG-EC-330a.3aa, CG-EC-330a.3j, CG-EC-330a.3k, CG-EC-330a.3l, CG-EC-330a.3m, CG-EC-330a.3n, CG-EC-330a.3o, CG-EC-330a.3p, CG-EC-330a.3q, CG-EC-330a.3r, CG-EC-330a.3s, CG-EC-330a.3t, CG-EC-330a.3u, CG-EC-330a.3v, CG-EC-330a.3w, CG-EC-330a.3x, CG-EC-330a.3y, CG-EC-330a.3z**
    -   Logic: Apex class
    -   **Input Fields**

        Diversity Equity Inclusion Summary (DivrsEquityInclSum)

        -   Disclosure Reporting Period (DisclsReportingPeriodId)
        -   Employee Type (EmployeeType)
        -   Employment Type (EmploymentType)
        -   Gender (Gender)
        -   Race (Race)
        -   Employee Percentage (EmployeePercentage)
    -   **Calculation**

        For DivrsEquityInclSum.Disclosure Reporting Period and selected DivrsEquityInclSum.Employment Type, DivrsEquityInclSum.Employee Type, and DivrsEquityInclSum.Race, get DivrsEquityInclSum.Employment Type, DivrsEquityInclSum.Employee Type, DivrsEquityInclSum.Race, DivrsEquityInclSum.Gender, and DivrsEquityInclSum.Employee Percentage

        If there are multiple values based on the selected year and parameters, the values are displayed in a table but will not be aggregated.


## Financials Sector: Asset Management & Custody Activities

-   **FN-AC-330a.1a, FN-AC-330a.1b, FN-AC-330a.1c, FN-AC-330a.1d, FN-AC-330a.1e, FN-AC-330a.1f, FN-AC-330a.1g, FN-AC-330a.1h, FN-AC-330a.1i, FN-AC-330a.1j, FN-AC-330a.1k, FN-AC-330a.1l**
    -   Logic: Apex class
    -   **Input Fields**

        Employee Demographic Summary (EmployeeDemographicSum)

        -   Disclosure Reporting Period (DisclsReportingPeriodId)
        -   Employment Type (EmploymentType)
        -   Gender (Gender)
        -   Work Type (WorkType)
        -   Percentage (Percentage)
    -   **Calculation**

        For EmployeeDemographicSum.Disclosure Reporting Period and selected EmployeeDemographicSum.Gender, and EmployeeDemographicSum.Work Type, get EmployeeDemographicSum.Employment Type, EmployeeDemographicSum.Work Type, EmployeeDemographicSum.Gender, and EmployeeDemographicSum.Percentage

        If there are multiple values based on the selected year and parameters, the values are displayed in a table but will not be aggregated.

-   **FN-AC-330a.1aa, FN-AC-330a.1bb, FN-AC-330a.1cc, FN-AC-330a.1dd, FN-AC-330a.1ee, FN-AC-330a.1ff, FN-AC-330a.1gg, FN-AC-330a.1hh, FN-AC-330a.1ii, FN-AC-330a.1jj, FN-AC-330a.1m, FN-AC-330a.1n, FN-AC-330a.1o, FN-AC-330a.1p, FN-AC-330a.1q, FN-AC-330a.1r, FN-AC-330a.1s, FN-AC-330a.1t, FN-AC-330a.1u, FN-AC-330a.1v, FN-AC-330a.1w, FN-AC-330a.1x, FN-AC-330a.1y, FN-AC-330a.1z**
    -   Logic: Apex class
    -   **Input Fields**

        Diversity Equity Inclusion Summary (DivrsEquityInclSum)

        -   Disclosure Reporting Period (DisclsReportingPeriodId)
        -   Employee Location (Location)
        -   Employee Percentage (EmployeePercentage)
        -   Employee Type (EmployeeType)
        -   Employment Type (EmploymentType)
        -   Gender (Gender)
        -   Race (Race)
    -   **Calculation**

        For DivrsEquityInclSum.Disclosure Reporting Period and selected DivrsEquityInclSum.Employee type, DivrsEquityInclSum.Employment Type, and DivrsEquityInclSum.Location, get DivrsEquityInclSum.Employee type, DivrsEquityInclSum.Employment Type, DivrsEquityInclSum.Race, DivrsEquityInclSum.Gender, DivrsEquityInclSum.Location, and DivrsEquityInclSum.Employee Percentage

        If there are multiple values based on the selected year and parameters, the values are displayed in a table but will not be aggregated.


## Commercial Banks

-   **FN-CB-230a.1a**
    -   Logic: FNUCBU230aD1aDataRaptor
    -   **Input Fields**

        Organization Incident Summary (OrgIncidentSummary)

        -   Incident Count (IncidentCount)
        -   Incident Subtype (IncidentSubtype)
        -   Disclosure Reporting Period (DisclsReportingPeriodId)
    -   **Calculation**

        For OrgIncidentSummary.Disclosure Reporting Period, sum of OrgIncidentSummary.Incident Count where OrgIncidentSummary.Incident Sub Type = “Data Breach”

-   **FN-CB-230a.1b**
    -   Logic: Apex class
    -   **Input Fields**

        Organization Incident Summary (OrgIncidentSummary)

        -   Incident Count (IncidentCount)
        -   Incident Subtype (IncidentSubtype)
        -   Category (Category)
        -   Incident Type (IncidentType)
        -   Disclosure Reporting Period (DisclsReportingPeriodId)
    -   **Calculation**

        For OrgIncidentSummary.Disclosure Reporting Period and selected OrgIncidentSummary.Category, OrgIncidentSummary.Incident Type, and OrgIncidentSummary.Incident Subtype, get (OrgIncidentSummary.Incident Count / Sum of all OrgIncidentSummary.Incident Count) × 100

        If there are multiple values based on the selected year and parameters, the values are displayed in a table but will not be aggregated.


## Consumer Finance

-   **FN-CF-220a.2a**
    -   Logic: Apex class
    -   **Input Fields**

        Organization Incident Summary (OrgIncidentSummary)

        -   Category (Category)
        -   Incident Subtype (IncidentSubtype)
        -   Incident Type (IncidentType)
        -   Penalty Type (PenaltyType)
        -   Disclosure Reporting Period (DisclsReportingPeriodId)
        -   Fine Amount (FineAmount)
    -   **Calculation**

        For OrgIncidentSummary.Disclosure Reporting Period and selected OrgIncidentSummary.Category, OrgIncidentSummary.Incident Type, and OrgIncidentSummary.Incident Subtype, get OrgIncidentSummary.Fine Amount where OrgIncidentSummary.Penalty Type = “Monetary Fine”

        If there are multiple values based on the selected year and parameters, the values are displayed in a table but will not be aggregated.

-   **FN-CF-230a.1a**
    -   Logic: FNUCFU230aD1aDataRaptor
    -   **Input Fields**

        Organization Incident Summary (OrgIncidentSummary)

        -   Incident Count (IncidentCount)
        -   Incident Subtype (IncidentSubtype)
        -   Disclosure Reporting Period (DisclsReportingPeriodId)
    -   **Calculation**

        For OrgIncidentSummary.Disclosure Reporting Period, sum of OrgIncidentSummary.Incident Count where OrgIncidentSummary.Incident Sub Type = “Data Breach”

-   **FN-CF-230a.1b**
    -   Logic: Apex class
    -   **Input Fields**

        Organization Incident Summary (OrgIncidentSummary)

        -   Incident Count (IncidentCount)
        -   Incident Subtype (IncidentSubtype)
        -   Category (Category)
        -   Incident Type (IncidentType)
        -   Disclosure Reporting Period (DisclsReportingPeriodId)
    -   **Calculation**

        For OrgIncidentSummary.Disclosure Reporting Period and selected OrgIncidentSummary.Category, OrgIncidentSummary.Incident Type, and OrgIncidentSummary.Incident Subtype, get (OrgIncidentSummary.Incident Count / Sum of all OrgIncidentSummary.Incident Count) × 100

        If there are multiple values based on the selected year and parameters, the values are displayed in a table but will not be aggregated.

---
title: "CDP Standards"
domain: netzero-cloud-dev-guide
topic: cdp-standards
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:57.865Z
estimatedTokens: 12511
keywords: [CDP, Standards, help, investors, companies, cities, states, regions, manage, their, environmental, impacts]
---

# CDP Standards

> The CDP standards help investors, companies, cities, states, and regions to manage
        their environmental impacts.

# CDP Standards

The CDP standards help investors, companies, cities, states, and regions to manage their environmental impacts.

Here are the calculations for the values derived from Net Zero Cloud object records:

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=netzero_cloud_dev_guide)

#### Note

When using Apex code, you can query for only 50K records. If there are more than 50K records, only the first 50K records are used for the calculations.

-   **7.6**
    -   **Logic**

        Data Mapper: CDP7D6DM

        Apex Class: CDP7D6Class

    -   **Description**

        What were your organization’s gross global Scope 1 emissions in metric tons CO2e for the reporting year and the number of past years selected in question 1.4: Number of past reporting years you will be providing Scope 1 emissions data for.

    -   **Input Fields**

        Annual Emissions Inventory (AnnualEmssnInventory)

        -   Total Scope 1 Emissions (tCO2e) (TotalScope1Emissions)
    -   **Calculation**

        For the reporting year and the previous years in 1.4, get the AnnualEmssnInventory.Total Scope 1 Emissions(tCo2e).

-   **7.7**

    Data Mapper: CDP7D7DM

    -   **Logic**

        Apex Class: CDP7D7Class

    -   **Description**

        Get the total location-based and market-based scope 2 emissions for the reporting year and the number of past years selected in question 1.4 Number of past reporting years you will be providing Scope 2 emissions data for.

    -   **Input Fields**

        Annual Emissions Inventory (AnnualEmssnInventory)

        -   Scope 2 Location-Based Emissions from Commercial Buildings (tCO2e) (Scope2LocBasedEmssnCmclBld)
        -   Scope 2 Location-Based Emissions from Data Centers (tCO2e) (Scope2LocBasedEmssnDataCtr)
        -   Scope 2 Market-Based Emissions from Commercial Buildings (tCO2e) (Scope2MarketBasedEmssnCmclBld)
        -   Scope 2 Market-Based Emissions from Data Centers (tCO2e) (Scope2MarketBasedEmssnDataCtr)
    -   **Calculation**

        SUM(AnnualEmssnInventory.Scope 2 Location-Based Emissions from Commercial Buildings (tCO2e), AnnualEmssnInventory.Scope 2 Location-Based Emissions from Data Centers (tCO2e)) SUM(AnnualEmssnInventory.Scope 2 Market-Based Emissions from Commercial Buildings (tCO2e), AnnualEmssnInventory.Scope 2 Market-Based Emissions from Data Centers (tCO2e))

-   **7.8**
    -   **Logic**

        Apex class : CDP7D8Class

    -   **Description**

        Account for your organization’s gross global scope 3 emissions, disclosing and explaining any exclusions.

    -   **Input Fields**

        Annual Emissions Inventory (AnnualEmssnInventory)

        -   Scope 3 Emissions from Business Travel (tCO2e) (Scope3EmissionsBusinessTravel)
        -   Scope 3 Emissions from Capital Goods (tCO2e) (Scope3EmissionsCapitalGoods)
        -   Scope 3 Emissions from Downstream Leased Assets (tCO2e) (Scp3EmssnDnstrmLeasedAssets)
        -   Scope 3 Emissions from Downstream Transportation and Distribution (tCO2e) (Scp3EmssnDownstreamTrnspDstr)
        -   Scope 3 Emissions from Employee Commuting (tCO2e) (Scope3EmssnEmployeeCommuting)
        -   Scope 3 Emissions from End-of-Life Treatment of Sold Products (tCO2e) (Scp3EmssnEolTreatOfSoldPrdct)
        -   Scope 3 Emissions from Franchises (tCO2e) (Scope3EmissionsFranchises)
        -   Scope 3 Emissions from Fuel and Energy-Related Activity (tCO2e) (Scp3EmssnFuelEnergyActivity)
        -   Scope 3 Emissions from Investments (tCO2e) (Scope3EmissionsInvestments)
        -   Scope 3 Emissions from Processing of Sold Products (tCO2e) (Scp3EmssnProcSoldProducts)
        -   Scope 3 Emissions from Purchased Goods and Services (tCO2e) (Scp3EmssnPurchGoodsAndServices)
        -   Scope 3 Emissions from Upstream Leased Assets (tCO2e) (Scp3EmssnUpstreamLeasedAssets)
        -   Scope 3 Emissions from Upstream Transportation and Distribution (tCO2e) (Scp3EmssnUpstreamTrnspDstr)
        -   Scope 3 Emissions from Use of Sold Products (tCO2e) (Scope3EmssnUseOfSoldProducts)
        -   Scope 3 Emissions from Waste Generated in Operations (tCO2e) (Scope3EmissionsWasteGenInOper)
        -   Year (Year)
    -   **Calculation**

        For the selected year, get the AnnualEmssnInventory.Scope 3 Emissions from Business Travel (tCO2e), AnnualEmssnInventory.Scope 3 Emissions from Capital Goods (tCO2e), AnnualEmssnInventory.Scope 3 Emissions from Downstream Leased Assets (tCO2e), AnnualEmssnInventory.Scope 3 Emissions from Downstream Transportation and Distribution (tCO2e), AnnualEmssnInventory.Scope 3 Emissions from Employee Commuting (tCO2e), AnnualEmssnInventory.Scope 3 Emissions from End-of-Life Treatment of Sold Products (tCO2e), AnnualEmssnInventory.Scope 3 Emissions from Franchises (tCO2e), AnnualEmssnInventory.Scope 3 Emissions from Fuel and Energy-Related Activity (tCO2e), AnnualEmssnInventory.Scope 3 Emissions from Investments (tCO2e), AnnualEmssnInventory.Scope 3 Emissions from Processing of Sold Products (tCO2e), AnnualEmssnInventory.Scope 3 Emissions from Purchased Goods and Services (tCO2e), AnnualEmssnInventory.Scope 3 Emissions from Upstream Leased Assets (tCO2e), AnnualEmssnInventory.Scope 3 Emissions from Upstream Transportation and Distribution (tCO2e), AnnualEmssnInventory.Scope 3 Emissions from Use of Sold Products (tCO2e), AnnualEmssnInventory.Scope 3 Emissions from Waste Generated in Operations (tCO2e)

-   **7.8.1**
    -   **Logic**

        Data Mapper: CDP7D8D1DM

        Apex class: CDP7D8D1Class

    -   **Description**

        Disclose or restate your scope 3 emissions data for previous years selected in question 1.4 Number of past reporting years you will be providing Scope 3 emissions data for.

    -   **Input Fields**

        Annual Emissions Inventory (AnnualEmssnInventory)

        -   Scope 3 Emissions from Business Travel (tCO2e) (Scope3EmissionsBusinessTravel)
        -   Scope 3 Emissions from Capital Goods (tCO2e) (Scope3EmissionsCapitalGoods)
        -   Scope 3 Emissions from Downstream Leased Assets (tCO2e) (Scp3EmssnDnstrmLeasedAssets)
        -   Scope 3 Emissions from Downstream Transportation and Distribution (tCO2e) (Scp3EmssnDownstreamTrnspDstr)
        -   Scope 3 Emissions from Employee Commuting (tCO2e) (Scope3EmssnEmployeeCommuting)
        -   Scope 3 Emissions from End-of-Life Treatment of Sold Products (tCO2e) (Scp3EmssnEolTreatOfSoldPrdct)
        -   Scope 3 Emissions from Franchises (tCO2e) (Scope3EmissionsFranchises)
        -   Scope 3 Emissions from Fuel and Energy-Related Activity (tCO2e) (Scp3EmssnFuelEnergyActivity)
        -   Scope 3 Emissions from Investments (tCO2e) (Scope3EmissionsInvestments)
        -   Scope 3 Emissions from Processing of Sold Products (tCO2e) (Scp3EmssnProcSoldProducts)
        -   Scope 3 Emissions from Purchased Goods and Services (tCO2e) (Scp3EmssnPurchGoodsAndServices)
        -   Scope 3 Emissions from Upstream Leased Assets (tCO2e) (Scp3EmssnUpstreamLeasedAssets)
        -   Scope 3 Emissions from Upstream Transportation and Distribution (tCO2e) (Scp3EmssnUpstreamTrnspDstr)
        -   Scope 3 Emissions from Use of Sold Products (tCO2e) (Scope3EmssnUseOfSoldProducts)
        -   Scope 3 Emissions from Waste Generated in Operations (tCO2e) (Scope3EmissionsWasteGenInOper)
        -   Year (Year)
    -   **Calculation**

        For the number of past years selected in question 1.4 Number of past reporting years you will be providing Scope 3 emissions data for, get the AnnualEmssnInventory.Scope 3 Emissions from Business Travel (tCO2e), AnnualEmssnInventory.Scope 3 Emissions from Capital Goods (tCO2e), AnnualEmssnInventory.Scope 3 Emissions from Downstream Leased Assets (tCO2e), AnnualEmssnInventory.Scope 3 Emissions from Downstream Transportation and Distribution (tCO2e), AnnualEmssnInventory.Scope 3 Emissions from Employee Commuting (tCO2e), AnnualEmssnInventory.Scope 3 Emissions from End-of-Life Treatment of Sold Products (tCO2e), AnnualEmssnInventory.Scope 3 Emissions from Franchises (tCO2e), AnnualEmssnInventory.Scope 3 Emissions from Fuel and Energy-Related Activity (tCO2e), AnnualEmssnInventory.Scope 3 Emissions from Investments (tCO2e), AnnualEmssnInventory.Scope 3 Emissions from Processing of Sold Products (tCO2e), AnnualEmssnInventory.Scope 3 Emissions from Purchased Goods and Services (tCO2e), AnnualEmssnInventory.Scope 3 Emissions from Upstream Leased Assets (tCO2e), AnnualEmssnInventory.Scope 3 Emissions from Upstream Transportation and Distribution (tCO2e), AnnualEmssnInventory.Scope 3 Emissions from Use of Sold Products (tCO2e), AnnualEmssnInventory.Scope 3 Emissions from Waste Generated in Operations (tCO2e)

-   **7.10**
    -   **Logic**

        Apex class: CDPC7D10Class

    -   **Description**

        How do your gross global emissions (Scope 1 and 2 combined) for the reporting year compare to those of the previous reporting year?

    -   **Input Fields**

        Annual Emissions Inventory (AnnualEmssnInventory)

        -   Total Scope 1 Emissions (tCO2e) (TotalScope1Emissions)
        -   Total Scope 2 Emissions (tCO2e) (TotalScope2Emissions)
        -   Year (Year)
    -   **Calculation**

        Current year SUM(AnnualEmssnInventory.Total Scope 1 Emissions (tCO2e) and AnnualEmssnInventory.Total Scope 2 Emissions (tCO2e)) - Previous year SUM(AnnualEmssnInventory.Total Scope 1 Emissions (tCO2e) and AnnualEmssnInventory.Total Scope 2 Emissions (tCO2e))

        -   If > 0 = Increased
        -   If <0 = Decreased
        -   If =0 = No change
-   **7.15.1**
    -   **Logic**

        Apex class: CDP7D15D1Class

    -   **Description**

        Break down your total gross global Scope 1 emissions by greenhouse gas type and provide the source of each used global warming potential (GWP).

    -   **Input Fields**

        Stationary Asset Carbon Footprint (StnryAssetCrbnFtprnt)

        -   CH4 Emissions (kg) (Ch4EmissionsInKg)
        -   CO2 Emissions (kg) (Co2EmissionsInKg)
        -   N2O Emissions (kg) (N2oEmissionsInKg)

        Vehicle Asset Carbon Footprint (VehicleAssetCrbnFtprnt)

        -   CH4 Emissions (kg) (Ch4EmissionsInKg)
        -   CO2 Emissions (kg) (Co2EmissionsInKg)
        -   N2O Emissions (kg) (N2oEmissionsInKg)
    -   **Calculation**

        For CO2, SUM(StnryAssetCrbnFtprnt.CO2 Emissions (kg) and VehicleAssetCrbnFtprnt.CO2 Emissions (kg))

        For CH4, SUM(StnryAssetCrbnFtprnt.CH4 Emissions (kg) and VehicleAssetCrbnFtprnt.CH4 Emissions (kg))

        For N2O, SUM(StnryAssetCrbnFtprnt.N2O Emissions (kg) and VehicleAssetCrbnFtprnt.N2O Emissions (kg))

-   **7.17.3**
    -   **Logic**

        Apex class: CDP7D17D3Class

    -   **Description**

        Breakdown your total gross global Scope 1 emissions by business activity.

    -   **Input Fields**

        Annual Emissions Inventory (AnnualEmssnInventory)

        -   Scope 1 Emissions from Commercial Buildings (tCO2e) (Scope1EmssnCommercialBuildings)
        -   Scope 1 Emissions from Data Centers (tCO2e) (Scope1EmissionsDataCenters)
        -   Scope 1 Emissions from Fleet Vehicles (tCO2e) (Scope1EmissionsFleetVehicles)
        -   Scope 1 Emissions from Private Jets (tCO2e) (Scope1EmissionsPrivateJets)
        -   Year (Year)
    -   **Calculation**

        For the current year.

        -   For Commercial Buildings, AnnualEmssnInventory.Scope 1 Emissions from Commercial Buildings (tCO2e)
        -   For Data Centers, AnnualEmssnInventory.Scope 1 Emissions from Data Centers (tCO2e)
        -   For Fleet Vehicles, AnnualEmssnInventory.Scope 1 Emissions from Fleet Vehicles (tCO2e)
        -   For Private Jets, AnnualEmssnInventory.Scope 1 Emissions from Private Jets (tCO2e)
-   **7.20.3**
    -   **Logic**

        Apex class: CDP7D20D3Class

    -   **Description**

        Breakdown your total gross global Scope 2 emissions by business activity.

    -   **Input Fields**

        Annual Emissions Inventory (AnnualEmssnInventory)

        -   Scope 2 Location-Based Emissions from Commercial Buildings (tCO2e) (Scope2LocBasedEmssnCmclBld)
        -   Scope 2 Location-Based Emissions from Data Centers (tCO2e) (Scope2LocBasedEmssnDataCtr)
        -   Scope 2 Market-Based Emissions from Commercial Buildings (tCO2e) (Scope2MarketBasedEmssnCmclBld)
        -   Scope 2 Market-Based Emissions from Data Centers (tCO2e) (Scope2MarketBasedEmssnDataCtr)
        -   Scope 2 Emissions from Fleet Vehicles (tCO2e) (Scope2EmissionsFleetVehicles)
        -   Scope 2 Emissions from Private Jets (tCO2e) (Scope2EmissionsPrivateJets)
        -   Year (Year)
    -   **Calculation**

        Get the AnnualEmssnInventory.Scope 2 Location-Based Emissions from Commercial Buildings (tCO2e), AnnualEmssnInventory.Scope 2 Location-Based Emissions from Data Centers (tCO2e), AnnualEmssnInventory.Scope 2 Market-Based Emissions from Commercial Buildings (tCO2e), AnnualEmssnInventory.Scope 2 Market-Based Emissions from Data Centers (tCO2e), AnnualEmssnInventory.Scope 2 Emissions from Fleet Vehicles (tCO2e), AnnualEmssnInventory.Scope 2 Emissions from Private Jets (tCO2e) for the reporting year.

-   **7.30**
    -   **Logic**

        Apex class: CDP7D30Class

    -   **Description**

        Select which energy-related activities your organization has undertaken.

    -   **Input Fields**

        Stationary Asset Carbon Footprint (StnryAssetCrbnFtprnt)

        Stationary Asset Carbon Footprint Item (StnryAssetCrbnFtprntItm)

    -   **Calculation**

        For StnryAssetCrbnFtprnt, in Indicate whether your organization undertook this energy-related activity in the reporting year, indicate:

        -   Yes: If the user has StnryAssetCrbnFtprntItm records for the given reporting year and the particular fuel type.
        -   No: If the user doesn't have StnryAssetCrbnFtprntItm records for the given reporting year and the particular fuel type.
-   **7.30.1**
    -   **Logic**

        Apex class: CDP7D30Class

    -   **Description**

        Report your organization’s energy consumption totals (excluding feedstocks) in MWh.

    -   **Input Fields**

        Stationary Asset Carbon Footprint (StnryAssetCrbnFtprnt)

        Stationary Asset Carbon Footprint Item (StnryAssetCrbnFtprntItm)

    -   **Calculation**
        -   Activity: Use same values as provided by CDP
        -   Heating Value: Select Unable to confirm heating value
        -   Total (renewable + non-renewable) MWh: Consolidate Total Energy Consumption (kWh) from all the StnryAssetCrbnFtprntItm records in the given reporting period and specified fuel in the Annual Emission Inventory and convert kWh to mWh

Here are the calculations for the values from CDP expressions:

-   **2.2.4: Portfolio**
    -   **Input Fields**

        1.10 Which activities does your organization undertake, and which industry sectors does your organization lend to, invest in, and/or insure?

        -   Portfolio
        -   Activity undertaken
    -   **Calculation**

        2.2.4 Portfolio = 1.10 Portfolio

-   **2.2.5: Portfolio**
    -   **Input Fields**

        1.10 Which activities does your organization undertake, and which industry sectors does your organization lend to, invest in, and/or insure?

        -   Portfolio
        -   Activity undertaken
    -   **Calculation**

        2.2.5 Portfolio = 1.10 Portfolio

-   **2.2.6: Portfolio**
    -   **Input Fields**

        2.2.4 Does your organization have a process for identifying, assessing, and managing environmental dependencies and/or impacts related to your portfolio activities?

        -   Portfolio
        -   Process in place covering this portfolio

        2.2.5 Does your organization have a process for identifying, assessing, and managing environmental risks and/or opportunities related to your portfolio activities?

        -   Portfolio
        -   Process in place covering this portfolio
    -   **Calculation**

        2.2.6 Portfolio = 2.2.4 Portfolio or 2.2.5 Portfolio

-   **2.2.8: Portfolio**
    -   **Input Fields**

        1.10 Which activities does your organization undertake, and which industry sectors does your organization lend to, invest in, and/or insure?

        -   Portfolio
        -   Activity undertaken
    -   **Calculation**

        2.2.8 Portfolio = 1.10 Portfolio

-   **2.2.9: Portfolio**
    -   **Input Fields**

        2.2.8 Does your organization consider environmental information about your clients/investees as part of your due diligence and/or environmental dependencies, impacts, risks and/or opportunities assessment process?

        -   Portfolio
        -   We consider environmental information
    -   **Calculation**

        2.2.9 Portfolio = 2.2.8 Portfolio

-   **2.2.9: Total portfolio value covered by the process**
    -   **Input Fields**

        2.2.9 Indicate the environmental information your organization considers about clients/investees as part of your due diligence and/or environmental dependencies, impacts, risks and/or opportunities assessment process, and how this influences decision-making.

        -   % of portfolio covered by the process in relation to total portfolio value

        1.10 Which activities does your organization undertake, and which industry sectors does your organization lend to, invest in, and/or insure?

        -   Portfolio value based on total assets
    -   **Calculation**

        2.2.9 Total portfolio value covered by the process = (2.2.9 % of portfolio covered by the process in relation to total portfolio value / 100) \* 1.10 Portfolio value based on total assets

-   **7.30.2: Activity**
    -   **Input Fields**

        7.30 Select which energy-related activities your organization has undertaken.

        -   Activity
        -   Indicate whether your organization undertook this energy-related activity in the reporting year
    -   **Calculation**

        7.30.2 Activity = 7.30 Activity

-   **7.30.3: Activity**
    -   **Input Fields**

        7.30 Select which energy-related activities your organization has undertaken.

        -   Activity
        -   Indicate whether your organization undertook this energy-related activity in the reporting year
    -   **Calculation**

        7.30.3 Activity = 7.30 Activity

-   **7.30.4: Activity**
    -   **Input Fields**

        7.30 Select which energy-related activities your organization has undertaken.

        -   Activity
        -   Indicate whether your organization undertook this energy-related activity in the reporting year
    -   **Calculation**

        7.30.4 Activity = 7.30 Activity

-   **7.30.5: Activity**
    -   **Input Fields**

        7.30 Select which energy-related activities your organization has undertaken.

        -   Activity
        -   Indicate whether your organization undertook this energy-related activity in the reporting year
    -   **Calculation**

        7.30.5 Activity = 7.30 Activity

-   **7.30.16: Country/area**
    -   **Input Fields**

        1.7 Select the countries/areas in which you operate.

    -   **Calculation**

        Country/area = 1.7 Select the countries/areas in which you operate

-   **7.30.16: Total heat/steam/cooling energy consumption (MWh)**
    -   **Input Fields**

        7.30.16 Provide a breakdown by country/area of your electricity/heat/steam/cooling consumption in the reporting year.

        -   Consumption of purchased electricity (MWh)
        -   Consumption of self-generated electricity (MWh)
        -   Consumption of purchased heat, steam, and cooling (MWh)
        -   Consumption of self-generated heat, steam, and cooling (MWh)
    -   **Calculation**

        Total heat/steam/cooling energy consumption (MWh) = Consumption of purchased electricity (MWh) + Consumption of self-generated electricity (MWh) + Consumption of purchased heat, steam, and cooling (MWh) + Consumption of self-generated heat, steam, and cooling (MWh)

-   **7.46: Scope 1 emissions intensity (Gross generation)**
    -   **Input Fields**

        1.16.1 For your electricity generation activities, provide details of your nameplate capacity and electricity generation specifics for each technology employed.

        -   Gross electricity generation (GWh)

        7.46 For your electric utility activities, provide a breakdown of your Scope 1 emissions and emissions intensity relating to your total power plant capacity and generation during the reporting year by source.

        -   Absolute scope 1 emissions (metric tons CO2e)
    -   **Calculation**

        Scope 1 emissions intensity (Gross generation) = Absolute scope 1 emissions (metric tons CO2e)/Gross electricity generation (GWh)

-   **7.46: Scope 1 emissions intensity (Net generation)**
    -   **Input Fields**

        1.16.1 For your electricity generation activities, provide details of your nameplate capacity and electricity generation specifics for each technology employed.

        -   Net electricity generation (GWh)

        7.46 For your electric utility activities, provide a breakdown of your Scope 1 emissions and emissions intensity relating to your total power plant capacity and generation during the reporting year by source.

        -   Absolute scope 1 emissions (metric tons CO2e)
    -   **Calculation**

        Scope 1 emissions intensity (Net generation) = Absolute scope 1 emissions (metric tons CO2e)/Net electricity generation (GWh)

-   **7.53.1: Base year total Scope 3 emissions covered by target (metric tons CO2e)**
    -   **Input Fields**

        7.53.1 Provide details of your absolute emissions target(s) and progress made against those targets.

        -   Base year Scope 3, Category 1: Purchased goods and services emissions covered by target (metric tons CO2e)
        -   Base year Scope 3, Category 2: Capital goods emissions covered by target (metric tons CO2e)
        -   Base year Scope 3, Category 3: Fuel-and-energy-related activities (not included in Scopes 1 or 2) emissions covered by target (metric tons CO2e)
        -   Base year Scope 3, Category 4: Upstream transportation and distribution emissions covered by target (metric tons CO2e)
        -   Base year Scope 3, Category 5: Waste generated in operations emissions covered by target (metric tons CO2e)
        -   Base year Scope 3, Category 6: Business travel emissions covered by target (metric tons CO2e)
        -   Base year Scope 3, Category 7: Employee commuting emissions covered by target (metric tons CO2e)
        -   Base year Scope 3, Category 8: Upstream leased assets emissions covered by target (metric tons CO2e)
        -   Base year Scope 3, Category 9: Downstream transportation and distribution emissions covered by target (metric tons CO2e)
        -   Base year Scope 3, Category 10: Processing of sold products emissions covered by target (metric tons CO2e)
        -   Base year Scope 3, Category 11: Use of sold products emissions covered by target (metric tons CO2e)
        -   Base year Scope 3, Category 12: End-of-life treatment of sold products emissions covered by target (metric tons CO2e)
        -   Base year Scope 3, Category 13: Downstream leased assets emissions covered by target (metric tons CO2e)
        -   Base year Scope 3, Category 14: Franchises emissions covered by target (metric tons CO2e)
        -   Base year Scope 3, Category 15: Investments emissions covered by target (metric tons CO2e)
        -   Base year Scope 3, Other (upstream) emissions covered by target (metric tons CO2e)
        -   Base year Scope 3, Other (downstream) emissions covered by target (metric tons CO2e)
    -   **Calculation**

        Base year total Scope 3 emissions covered by target (metric tons CO2e) = Base year Scope 3, Category 1: Purchased goods and services emissions covered by target (metric tons CO2e) + Base year Scope 3, Category 2: Capital goods emissions covered by target (metric tons CO2e) + Base year Scope 3, Category 3: Fuel-and-energy-related activities (not included in Scopes 1 or 2) emissions covered by target (metric tons CO2e) + Base year Scope 3, Category 4: Upstream transportation and distribution emissions covered by target (metric tons CO2e) + Base year Scope 3, Category 5: Waste generated in operations emissions covered by target (metric tons CO2e) + Base year Scope 3, Category 6: Business travel emissions covered by target (metric tons CO2e) + Base year Scope 3, Category 7: Employee commuting emissions covered by target (metric tons CO2e) + Base year Scope 3, Category 8: Upstream leased assets emissions covered by target (metric tons CO2e) + Base year Scope 3, Category 9: Downstream transportation and distribution emissions covered by target (metric tons CO2e) + Base year Scope 3, Category 10: Processing of sold products emissions covered by target (metric tons CO2e) + Base year Scope 3, Category 11: Use of sold products emissions covered by target (metric tons CO2e) + Base year Scope 3, Category 12: End-of-life treatment of sold products emissions covered by target (metric tons CO2e) + Base year Scope 3, Category 13: Downstream leased assets emissions covered by target (metric tons CO2e) + Base year Scope 3, Category 14: Franchises emissions covered by target (metric tons CO2e) + Base year Scope 3, Category 15: Investments emissions covered by target (metric tons CO2e) + Base year Scope 3, Other (upstream) emissions covered by target (metric tons CO2e) +Base year Scope 3, Other (downstream) emissions covered by target (metric tons CO2e)

-   **7.53.1: Total base year emissions covered by target in all selected Scopes (metric tons CO2e)**
    -   **Input Fields**

        7.53.1 Provide details of your absolute emissions target(s) and progress made against those targets.

        -   Base year Scope 1 emissions covered by target (metric tons CO2e)
        -   Base year Scope 2 emissions covered by target (metric tons CO2e)
        -   Base year total Scope 3 emissions covered by target (metric tons CO2e)
    -   **Calculation**

        Total base year emissions covered by target in all selected Scopes (metric tons CO2e) = Base year Scope 1 emissions covered by target (metric tons CO2e) + Base year Scope 2 emissions covered by target (metric tons CO2e) + Base year total Scope 3 emissions covered by target (metric tons CO2e)

-   **7.53.1: Total emissions at end date of target covered by target in all selected Scopes (metric tons CO2e)**
    -   **Input Fields**

        7.53.1 Provide details of your absolute emissions target(s) and progress made against those targets.

        -   Total base year emissions covered by target in all selected Scopes (metric tons CO2e)
        -   Targeted reduction from base year (%)
    -   **Calculation**

        Total emissions at end date of target covered by target in all selected Scopes (metric tons CO2e) = (100 - Targeted reduction from base year (%)/100 \* Total base year emissions covered by target in all selected Scopes (metric tons CO2e)

-   **7.53.1: Total Scope 3 emissions in reporting year covered by target (metric tons CO2e)**
    -   **Input Fields**

        7.53.1 Provide details of your absolute emissions target(s) and progress made against those targets.

        -   Scope 3, Category 1: Purchased goods and services emissions in reporting year covered by target (metric tons CO2e)
        -   Scope 3, Category 2: Capital goods emissions in reporting year covered by target (metric tons CO2e)
        -   Scope 3, Category 3: Fuel-and-energy-related activities (not included in Scopes 1 or 2) emissions in reporting year covered by target (metric tons CO2e)
        -   Scope 3, Category 4: Upstream transportation and distribution emissions in reporting year covered by target (metric tons CO2e)
        -   Scope 3, Category 5: Waste generated in operations emissions in reporting year covered by target (metric tons CO2e)
        -   Scope 3, Category 6: Business travel emissions in reporting year covered by target (metric tons CO2e)
        -   Scope 3, Category 7: Employee commuting emissions in reporting year covered by target (metric tons CO2e)
        -   Scope 3, Category 8: Upstream leased assets emissions in reporting year covered by target (metric tons CO2e)
        -   Scope 3, Category 9: Downstream transportation and distribution emissions in reporting year covered by target (metric tons CO2e)
        -   Scope 3, Category 10: Processing of sold products emissions in reporting year covered by target (metric tons CO2e)
        -   Scope 3, Category 11: Use of sold products emissions in reporting year covered by target (metric tons CO2e)
        -   Scope 3, Category 12: End-of-life treatment of sold products emissions in reporting year covered by target (metric tons CO2e)
        -   Scope 3, Category 13: Downstream leased assets emissions in reporting year covered by target (metric tons CO2e)
        -   Scope 3, Category 14: Franchises emissions in reporting year covered by target (metric tons CO2e)
        -   Scope 3, Category 15: Investments emissions in reporting year covered by target (metric tons CO2e)
        -   Scope 3, Other (upstream) emissions in reporting year covered by target (metric tons CO2e)
        -   Scope 3, Other (downstream) emissions in reporting year covered by target (metric tons CO2e)
    -   **Calculation**

        Total Scope 3 emissions in reporting year covered by target (metric tons CO2e) = Scope 3, Category 1: Purchased goods and services emissions in reporting year covered by target (metric tons CO2e) + Scope 3, Category 2: Capital goods emissions in reporting year covered by target (metric tons CO2e) + Scope 3, Category 3: Fuel-and-energy-related activities (not included in Scopes 1 or 2) emissions in reporting year covered by target (metric tons CO2e) + Scope 3, Category 4: Upstream transportation and distribution emissions in reporting year covered by target (metric tons CO2e) + Scope 3, Category 5: Waste generated in operations emissions in reporting year covered by target (metric tons CO2e) + Scope 3, Category 6: Business travel emissions in reporting year covered by target (metric tons CO2e) + Scope 3, Category 7: Employee commuting emissions in reporting year covered by target (metric tons CO2e) + Scope 3, Category 8: Upstream leased assets emissions in reporting year covered by target (metric tons CO2e) + Scope 3, Category 9: Downstream transportation and distribution emissions in reporting year covered by target (metric tons CO2e) + Scope 3, Category 10: Processing of sold products emissions in reporting year covered by target (metric tons CO2e) + Scope 3, Category 11: Use of sold products emissions in reporting year covered by target (metric tons CO2e) + Scope 3, Category 12: End-of-life treatment of sold products emissions in reporting year covered by target (metric tons CO2e) + Scope 3, Category 13: Downstream leased assets emissions in reporting year covered by target (metric tons CO2e) + Scope 3, Category 14: Franchises emissions in reporting year covered by target (metric tons CO2e) + Scope 3, Category 15: Investments emissions in reporting year covered by target (metric tons CO2e) + Scope 3, Other (upstream) emissions in reporting year covered by target (metric tons CO2e) + Scope 3, Other (downstream) emissions in reporting year covered by target (metric tons CO2e)

-   **7.53.1: Total emissions in reporting year covered by target in all selected scopes (metric tons CO2e)**
    -   **Input Fields**

        7.53.1 Provide details of your absolute emissions target(s) and progress made against those targets.

        -   Scope 1 emissions in reporting year covered by target (metric tons CO2e)
        -   Scope 2 emissions in reporting year covered by target (metric tons CO2e)
        -   Total Scope 3 emissions in reporting year covered by target (metric tons CO2e)
    -   **Calculation**

        Total emissions in reporting year covered by target in all selected scopes (metric tons CO2e) = Scope 1 emissions in reporting year covered by target (metric tons CO2e) + Scope 2 emissions in reporting year covered by target (metric tons CO2e) + Total Scope 3 emissions in reporting year covered by target (metric tons CO2e)

-   **7.53.1: % of target achieved relative to base year**
    -   **Input Fields**

        7.53.1 Provide details of your total emissions target(s) and progress made against those targets.

        -   Total base year emissions covered by target in all selected Scopes (metric tons CO2e)
        -   Targeted reduction from base year (%)
        -   Total emissions in reporting year covered by target in all selected scopes (metric tons CO2e)
    -   **Calculation**

        % of target achieved relative to base year = ( (Total base year emissions covered by target in all selected Scopes (metric tons CO2e) - Total emissions in reporting year covered by target in all selected scopes (metric tons CO2e)) / (Total base year emissions covered by target in all

-   **7.53.2: Intensity figure in base year for total Scope 3 (metric tons CO2e per unit of activity)**
    -   **Input Fields**

        7.53.2 Provide details of your emissions intensity target(s) and progress made against those target(s)**.**

        -   Intensity figure in base year for Scope 3, Category 1: Purchased goods and services (metric tons CO2e per unit of activity)
        -   Intensity figure in base year for Scope 3, Category 2: Capital goods (metric tons CO2e per unit of activity)
        -   Intensity figure in base year for Scope 3, Category 3: Fuel-and-energy-related activities (not included in Scopes 1 or 2) (metric tons CO2e per unit of activity)
        -   Intensity figure in base year for Scope 3, Category 4: Upstream transportation and distribution (metric tons CO2e per unit of activity)
        -   Intensity figure in base year for Scope 3, Category 5: Waste generated in operations (metric tons CO2e per unit of activity)
        -   Intensity figure in base year for Scope 3, Category 6: Business travel (metric tons CO2e per unit of activity)
        -   Intensity figure in base year for Scope 3, Category 7: Employee commuting (metric tons CO2e per unit of activity)
        -   Intensity figure in base year for Scope 3, Category 8: Upstream leased assets (metric tons CO2e per unit of activity)
        -   Intensity figure in base year for Scope 3, Category 9: Downstream transportation and distribution (metric tons CO2e per unit of activity)
        -   Intensity figure in base year for Scope 3, Category 10: Processing of sold products (metric tons CO2e per unit of activity)
        -   Intensity figure in base year for Scope 3, Category 11: Use of sold products (metric tons CO2e per unit of activity)
        -   Intensity figure in base year for Scope 3, Category 12: End-of-life treatment of sold products (metric tons CO2e per unit of activity)
        -   Intensity figure in base year for Scope 3, Category 13: Downstream leased assets (metric tons CO2e per unit of activity)
        -   Intensity figure in base year for Scope 3, Category 14: Franchises (metric tons CO2e per unit of activity)
        -   Intensity figure in base year for Scope 3, Category 15: Investments (metric tons CO2e per unit of activity)
        -   Intensity figure in base year for Scope 3, Other (upstream) (metric tons CO2e per unit of activity)
        -   Intensity figure in base year for Scope 3, Other (downstream) (metric tons CO2e per unit of activity)
    -   **Calculation**

        Intensity figure in base year for total Scope 3 (metric tons CO2e per unit of activity) = Intensity figure in base year for Scope 3, Category 1: Purchased goods and services (metric tons CO2e per unit of activity) + Intensity figure in base year for Scope 3, Category 2: Capital goods (metric tons CO2e per unit of activity) + Intensity figure in base year for Scope 3, Category 3: Fuel-and-energy-related activities (not included in Scopes 1 or 2) (metric tons CO2e per unit of activity) + Intensity figure in base year for Scope 3, Category 4: Upstream transportation and distribution (metric tons CO2e per unit of activity) + Intensity figure in base year for Scope 3, Category 5: Waste generated in operations (metric tons CO2e per unit of activity) + Intensity figure in base year for Scope 3, Category 6: Business travel (metric tons CO2e per unit of activity) + Intensity figure in base year for Scope 3, Category 7: Employee commuting (metric tons CO2e per unit of activity) + Intensity figure in base year for Scope 3, Category 8: Upstream leased assets (metric tons CO2e per unit of activity) + Intensity figure in base year for Scope 3, Category 9: Downstream transportation and distribution (metric tons CO2e per unit of activity) + Intensity figure in base year for Scope 3, Category 10: Processing of sold products (metric tons CO2e per unit of activity) + Intensity figure in base year for Scope 3, Category 11: Use of sold products (metric tons CO2e per unit of activity) + Intensity figure in base year for Scope 3, Category 12: End-of-life treatment of sold products (metric tons CO2e per unit of activity) + Intensity figure in base year for Scope 3, Category 13: Downstream leased assets (metric tons CO2e per unit of activity) + Intensity figure in base year for Scope 3, Category 14: Franchises (metric tons CO2e per unit of activity) + Intensity figure in base year for Scope 3, Category 15: Investments (metric tons CO2e per unit of activity) + Intensity figure in base year for Scope 3, Other (upstream) (metric tons CO2e per unit of activity) + Intensity figure in base year for Scope 3, Other (downstream) (metric tons CO2e per unit of activity)

-   **7.53.2: Intensity figure in base year for all selected Scopes (metric tons CO2e per unit of activity)**
    -   **Input Fields**

        7.53.2 Provide details of your emissions intensity target(s) and progress made against those target(s)**.**

        -   Intensity figure in base year for Scope 1 (metric tons CO2e per unit of activity)
        -   Intensity figure in base year for Scope 2 (metric tons CO2e per unit of activity)
        -   Intensity figure in base year for total Scope 3 (metric tons CO2e per unit of activity)
    -   **Calculation**

        Intensity figure in base year for all selected Scopes (metric tons CO2e per unit of activity) = Intensity figure in base year for Scope 1 (metric tons CO2e per unit of activity) + Intensity figure in base year for Scope 2 (metric tons CO2e per unit of activity) + Intensity figure in base year for total Scope 3 (metric tons CO2e per unit of activity)

-   **7.53.2: Intensity figure at end date of target for all selected Scopes (metric tons CO2e per unit of activity)**
    -   **Input Fields**

        7.53.2 Provide details of your emissions intensity target(s) and progress made against those target(s)**.**

        -   Targeted reduction from base year (%)
        -   Intensity figure in base year for all selected Scopes (metric tons CO2e per unit of activity)
    -   **Calculation**

        Intensity figure at end date of target for all selected Scopes (metric tons CO2e per unit of activity) = ((100 - Targeted reduction from base year (%))/100) \* Intensity figure in base year for all selected Scopes (metric tons CO2e per unit of activity)

-   **7.53.2: Intensity figure in reporting year for total Scope 3 (metric tons CO2e per unit of activity)**
    -   **Input Fields**

        7.53.2 Provide details of your emissions intensity target(s) and progress made against those target(s)**.**

        -   Intensity figure in reporting year for Scope 3, Category 1: Purchased goods and services (metric tons CO2e per unit of activity)
        -   Intensity figure in reporting year for Scope 3, Category 2: Capital goods (metric tons CO2e per unit of activity)
        -   Intensity figure in reporting year for Scope 3, Category 3: Fuel- and energy-related activities (metric tons CO2e per unit of activity)
        -   Intensity figure in reporting year for Scope 3, Category 4: Upstream transportation and distribution (metric tons CO2e per unit of activity)
        -   Intensity figure in reporting year for Scope 3, Category 5: Waste generated in operations (metric tons CO2e per unit of activity)
        -   Intensity figure in reporting year for Scope 3, Category 6: Business travel (metric tons CO2e per unit of activity)
        -   Intensity figure in reporting year for Scope 3, Category 7: Employee commuting (metric tons CO2e per unit of activity)
        -   Intensity figure in reporting year for Scope 3, Category 8: Upstream leased assets (metric tons CO2e per unit of activity)
        -   Intensity figure in reporting year for Scope 3, Category 9: Downstream transportation and distribution (metric tons CO2e per unit of activity)
        -   Intensity figure in reporting year for Scope 3, Category 10: Processing of sold products (metric tons CO2e per unit of activity)
        -   Intensity figure in reporting year for Scope 3, Category 11: Use of sold products (metric tons CO2e per unit of activity)
        -   Intensity figure in reporting year for Scope 3, Category 12: End-of-life treatment of sold products (metric tons CO2e per unit of activity)
        -   Intensity figure in reporting year for Scope 3, Category 13: Downstream leased assets (metric tons CO2e per unit of activity)
        -   Intensity figure in reporting year for Scope 3, Category 14: Franchises (metric tons CO2e per unit of activity)
        -   Intensity figure in reporting year for Scope 3, Category 15: Investments (metric tons CO2e per unit of activity)
        -   Intensity figure in reporting year for Scope 3, Other (upstream) (metric tons CO2e per unit of activity)
        -   Intensity figure in reporting year for Scope 3, Other (downstream) (metric tons CO2e per unit of activity)
    -   **Calculation**

        Intensity figure in reporting year for total Scope 3 (metric tons CO2e per unit of activity) = Intensity figure in reporting year for Scope 3, Category 1: Purchased goods and services (metric tons CO2e per unit of activity) + Intensity figure in reporting year for Scope 3, Category 2: Capital goods (metric tons CO2e per unit of activity) + Intensity figure in reporting year for Scope 3, Category 3: Fuel- and energy-related activities (metric tons CO2e per unit of activity) + Intensity figure in reporting year for Scope 3, Category 4: Upstream transportation and distribution (metric tons CO2e per unit of activity) + Intensity figure in reporting year for Scope 3, Category 5: Waste generated in operations (metric tons CO2e per unit of activity) + Intensity figure in reporting year for Scope 3, Category 6: Business travel (metric tons CO2e per unit of activity) + Intensity figure in reporting year for Scope 3, Category 7: Employee commuting (metric tons CO2e per unit of activity) + Intensity figure in reporting year for Scope 3, Category 8: Upstream leased assets (metric tons CO2e per unit of activity) + Intensity figure in reporting year for Scope 3, Category 9: Downstream transportation and distribution (metric tons CO2e per unit of activity) + Intensity figure in reporting year for Scope 3, Category 10: Processing of sold products (metric tons CO2e per unit of activity) + Intensity figure in reporting year for Scope 3, Category 11: Use of sold products (metric tons CO2e per unit of activity) + Intensity figure in reporting year for Scope 3, Category 12: End-of-life treatment of sold products (metric tons CO2e per unit of activity) + Intensity figure in reporting year for Scope 3, Category 13: Downstream leased assets (metric tons CO2e per unit of activity) + Intensity figure in reporting year for Scope 3, Category 14: Franchises (metric tons CO2e per unit of activity) + Intensity figure in reporting year for Scope 3, Category 15: Investments (metric tons CO2e per unit of activity) + Intensity figure in reporting year for Scope 3, Other (upstream) (metric tons CO2e per unit of activity) + Intensity figure in reporting year for Scope 3, Other (downstream) (metric tons CO2e per unit of activity)

-   **7.53.2: Intensity figure in reporting year for all selected Scopes (metric tons CO2e per unit of activity)**
    -   **Input Fields**

        7.53.2 Provide details of your emissions intensity target(s) and progress made against those target(s).

        -   Intensity figure in reporting year for Scope 1 (metric tons CO2e per unit of activity)
        -   Intensity figure in reporting year for Scope 2 (metric tons CO2e per unit of activity)
        -   Intensity figure in reporting year for total Scope 3 (metric tons CO2e per unit of activity)
    -   **Calculation**

        Intensity figure in reporting year for all selected Scopes (metric tons CO2e per unit of activity) = Intensity figure in reporting year for Scope 1 (metric tons CO2e per unit of activity) + Intensity figure in reporting year for Scope 2 (metric tons CO2e per unit of activity) + Intensity figure in reporting year for total Scope 3 (metric tons CO2e per unit of activity)

-   **7.53.2: % of target achieved relative to base year**
    -   **Input Fields**

        7.53.2 Provide details of your emissions intensity target(s) and progress made against those target(s)**.**

        -   Intensity figure in base year for all selected Scopes (metric tons CO2e per unit of activity)
        -   Intensity figure in reporting year for all selected Scopes (metric tons CO2e per unit of activity)
        -   Targeted reduction from base year (%)
    -   **Calculation**

        % of target achieved relative to base year = ((Intensity figure in base year for all selected Scopes (metric tons CO2e per unit of activity) - Intensity figure in reporting year for all selected Scopes (metric tons CO2e per unit of activity)) / (Intensity figure in base year for all selected Scopes (metric tons CO2e per unit of activity) \* Targeted reduction from base year (%) / 100)) \* 100 selected Scopes (metric tons CO2e) - Targeted reduction from base year (%))/100) \* 100

-   **7.53.4: % of target achieved relative to base year**
    -   **Input Fields**

        7.53.4 Provide details of the climate-related targets for your portfolio.

        -   Figure in base year
        -   Figure in target year
        -   Figure in reporting year
    -   **Calculation**

        % of target achieved relative to base year = ((Figure in base year - Figure in reporting year)/(Figure in base year - Figure in target year)) \* 100

-   **7.54.1: % of target achieved relative to base year**
    -   **Input Fields**

        7.54.1 Provide details of your targets to increase or maintain low-carbon energy consumption or production.

        -   % share of low-carbon or renewable energy in base year
        -   % share of low-carbon or renewable energy at end date of target
        -   % share of low-carbon or renewable energy in reporting year
    -   **Calculation**

        % of target achieved relative to base year = (% share of low-carbon or renewable energy in reporting year - % share of low-carbon or renewable energy in base year)/(% share of low-carbon or renewable energy at end date of target -% share of low-carbon or renewable energy in base year)) \* 100

-   **7.54.2: % of target achieved relative to base year**
    -   **Input Fields**

        7.54.2 Provide details of any other climate-related targets, including methane reduction targets.

        -   Figure or percentage in base year
        -   Figure or percentage at end of date of target
        -   Figure or percentage in reporting year
    -   **Calculation**

        % of target achieved relative to base year = ((Figure or percentage in reporting year - Figure or percentage in base year)/(Figure or percentage at end of date of target - Figure or percentage in base year)) \* 100

-   **12.1.1: Portfolio**
    -   **Input Fields**

        1.10 Which activities does your organization undertake, and which industry sectors does your organization lend to, invest in, and/or insure?

        -   Portfolio
        -   Activity undertaken
    -   **Calculation**

        12.1.1 Portfolio = 1.10 Portfolio

-   **12.1.1: Total value of assets included in the financed emissions calculation**
    -   **Input Fields**

        1.10 Which activities does your organization undertake, and which industry sectors does your organization lend to, invest in, and/or insure?

        -   Portfolio
        -   Portfolio value based on total assets

        12.1.1 Provide details of your organization's financed emissions in the reporting year and in the base year.

        -   Portfolio
        -   % of portfolio covered in relation to total portfolio value
    -   **Calculation**

        12.1.1 Total value of assets included in the financed emissions calculation = (1.10 % of portfolio covered in relation to total portfolio value)/100 \* 12.1.1 Portfolio value based on total assets

-   **12.3: Portfolio**
    -   **Input Fields**

        1.10 Which activities does your organization undertake, and which industry sectors does your organization lend to, invest in, and/or insure?

        -   Portfolio
        -   Activity undertaken
    -   **Calculation**

        12.3 Portfolio = 1.10 Portfolio

-   **12.5: Portfolio**
    -   **Input Fields**

        1.10 Which activities does your organization undertake, and which industry sectors does your organization lend to, invest in, and/or insure?

        -   Portfolio
        -   Activity undertaken
    -   **Calculation**

        12.5 Portfolio = 1.10 Portfolio

-   **12.5: Portfolio**
    -   **Input Fields**

        1.10 Which activities does your organization undertake, and which industry sectors does your organization lend to, invest in, and/or insure?

        -   Portfolio
        -   Activity undertaken
        -   Portfolio value based on total assets
    -   **Calculation**

        Total assets in your portfolio (unit currency as selected in 1.2) = Portfolio value based on total assets

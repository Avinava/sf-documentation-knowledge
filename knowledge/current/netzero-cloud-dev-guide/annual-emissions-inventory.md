---
title: "Annual Emissions Inventory"
domain: netzero-cloud-dev-guide
topic: annual-emissions-inventory
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:57.507Z
estimatedTokens: 10142
keywords: [Annual, Emissions, Inventory, company's, total, carbon, particular, year, metric, tonnes, CO2e, tCO2e, sum, scope, greenhouse]
---

# Annual Emissions Inventory

> The Annual Emissions Inventory object represents information about a company's total
    carbon emissions for a particular year in metric tonnes of CO2e (tCO2e). These emissions are the
    sum of all the emissions in scope 1, scope 2, and scope 3 greenhouse gas categories.

# Annual Emissions Inventory

The Annual Emissions Inventory object represents information about a company's total carbon emissions for a particular year in metric tonnes of CO2e (tCO2e). These emissions are the sum of all the emissions in scope 1, scope 2, and scope 3 greenhouse gas categories.

Here are the calculated fields:

-   **Total Scope 1 Emissions (tCO2e) (TotalScope1Emissions)**

    Input Fields

    -   Scope 1 Emissions from Data Centers (tCO2e) (Scope1EmissionsDataCenters)
    -   Scope 1 Emissions from Commercial Buildings (tCO2e) (Scope1EmssnCommercialBuildings)
    -   Scope 1 Emissions from Fleet Vehicles (tCO2e) (Scope1EmissionsFleetVehicles)
    -   Scope 1 Emissions from Private Jets (tCO2e) (Scope1EmissionsPrivateJets)
    -   Scope 1 Emissions from Waste Generated (tCO2e) (Scp1EmssnWstGenInTco2e)
    -   Total Scope 1 Emissions Override (tCO2e) (TotalScope1EmissionsOverride)

    Calculations

    if(Total Scope 1 Emissions Override != null)

    Total Scope 1 Emissions (tCO2e)  = Total Scope 1 Emissions Override (tCO2e)

    else

    Total Scope 1 Emissions (tCO2e) = Scope 1 Emissions from Commercial Buildings + Scope 1 Emissions from Data Centers + Scope 1 Emissions from Fleet Vehicles + Scope 1 Emissions from Private Jets + Scope 1 Emissions from Waste generated (tCO2e)

-   **Scope 1 Emissions from Commercial Buildings (tCO2e) (Scope1EmssnCommercialBuildings)**

    Input Fields

    Scope 1 Emissions from Commercial Buildings Override (tCO2e) (Scope1EmssnCmclBldOverride)

    Calculations

    if(Scope 1 Emissions from Commercial Buildings (tCO2e) != null)

    Scope 1 Emissions from Commercial Buildings (tCO2e) = Scope 1 Emissions from Commercial Buildings Override (tCO2e)

    else

    Scope 1 Emissions from Commercial Buildings = Scope 1 Emissions from Commercial Buildings (tCO2e) aggregated from the related carbon footprint for that year

-   **Scope 1 Emissions from Data Centers (tCO2e) (Scope1EmissionsDataCenters)**

    Input Fields

    Scope 1 Emissions from Data Centers Override (tCO2e) (Scope1EmssnDataCentersOverride)

    Calculation

    if(Scope 1 Emissions from Data Centers Override != null)

    Scope 1 Emissions from Data Centers (tCO2e) = Scope 1 Emissions from Data Centers Override (tCO2e)

    else

    Scope 1 Emissions from Data Centers (tCO2e) = Scope 1 Emissions from Data Centers (tCO2e) aggregated from the related carbon footprint for that year

-   **Scope 1 Emissions from Fleet Vehicles (tCO2e) (Scope1EmissionsFleetVehicles)**

    Input Fields

    Scope 1 Emissions from Fleet Vehicles Override (tCO2e) (Scp1EmssnFleetVehiclesOverride)

    Calculations

    if(Scope 1 Emissions from Fleet Vehicles Override (tCO2e) != null)Scope 1 Emissions from Fleet Vehicles (tCO2e) = Scope 1 Emissions from Fleet Vehicles Override (tCO2e)

    else

    Scope 1 Emissions from Fleet Vehicles (tCO2e) = Scope 1 Emissions from Fleet Vehicles (tCO2e) aggregated from the related carbon footprint for that year

-   **Scope 1 Emissions from Private Jets (tCO2e) (Scope1EmissionsPrivateJets)**

    Input Fields

    Scope 1 Emissions from Private Jets Override (tCO2e) (Scope1EmssnPrivateJetsOverride)

    Calculations

    if(Scope 1 Emissions from Private Jets Override (tCO2e) != null)Scope 1 Emissions from Private Jets (tCO2e) = Scope 1 Emissions from Private Jets Override (tCO2e)

    else

    Scope 1 Emissions from Private Jets (tCO2e) = Scope 1 Emissions from Private Jets (tCO2e) aggregated from the related carbon footprint for that year

-   **Scope 1 Emissions from Waste Generated (tCO2e) (Scp1EmssnWstGenInTco2e)**

    Input

    Scope 1 Emissions from Waste Generated Override (tCO2e) (Scp1EmssnWstGenOvrideInTco2e)

    Calculations

    if(Scope 1 Emissions from Waste Generated Override (tCO2e) != null)Scope 1 Emissions from Waste Generated (tCO2e) = Scope 1 Emissions from Waste Generated Override (tCO2e)

    else

    Scope 1 Emissions from Waste Generated (tCO2e) = Scope 1 Emissions from Waste Generated (tCO2e) aggregated from related Waste Footprint records for that year

-   **Total Scope 2 Emissions (tCO2e) (TotalScope2Emissions)**

    Input

    -   Total Scope 2 Emissions Override (tCO2e) (TotalScope2EmissionsOverride)
    -   Scope 2 Location-Based Emissions from Commercial Buildings (tCO2e) (Scope2LocBasedEmssnCmclBld)

    -   Scope 2 Location-Based Emissions from Data Centers (tCO2e) (Scope2LocBasedEmssnDataCtr)

    -   Scope 2 Market-Based Emissions from Commercial Buildings (tCO2e) (Scope2MarketBasedEmssnCmclBld)

    -   Scope 2 Market-Based Emissions from Data Centers (tCO2e) (Scope2MarketBasedEmssnDataCtr)

    -   Scope 2 Emissions from Fleet Vehicles (tCO2e) (Scope2EmissionsFleetVehicles)

    -   Scope 2 Emissions from Private Jets (tCO2e) (Scope2EmissionsPrivateJets)


    Calculations

    if(Total Scope 2 Emissions Override (tCO2e) != null)

     Total Scope 2 Emissions (tCO2e) = Total Scope 2 Emissions Override (tCO2e)

    else

    Total Scope 2 Emissions (tCO2e) = Scope 2 Location-Based Emissions from Commercial Buildings (tCO2e) +Scope 2 Location-Based Emissions from Data Centers (tCO2e) +Scope 2 Market-Based Emissions from Commercial Buildings (tCO2e) +Scope 2 Market-Based Emissions from Data Centers (tCO2e) + Scope 2 Emissions from Fleet Vehicles (tCO2e) + Scope 2 Emissions from Private Jets (tCO2e)

-   **Scope 2 Market-Based Emissions from Commercial Buildings (tCO2e) (Scope2MarketBasedEmssnCmclBld)**

    Input Fields

    Scope 2 Market-Based Emissions from Commercial Buildings Override (tCO2e)(Scp2MktBsdEmssnCmclBldOverride)

    Calculations

    if(Scope 2 Market-Based Emissions from Commercial Buildings Override (tCO2e) != null)

    Scope 2 Market-Based Emissions from Commercial Buildings (tCO2e) = Scope 2 Market-Based Emissions from Commercial Buildings Override (tCO2e)

    else

    Scope 2 Market-Based Emissions from Commercial Buildings (tCO2e) = Scope 2 Market-Based Emissions from Commercial Buildings (tCO2e) aggregated from related carbon footprint records for that year.

-   **Scope 2 Market-Based Emissions from Data Centers (tCO2e) (Scope2MarketBasedEmssnDataCtr)**

    Input Fields

    Scope 2 Market-Based Emissions from Data Centers Override (tCO2e) (Scp2MktBsdEmssnDataCtrOverride)

    Calculations

    if(Scope 2 Market-Based Emissions from Data Centers Override (tCO2e) != null)

    Scope 2 Market-Based Emissions from Data Centers (tCO2e) = Scope 2 Market-Based Emissions from Data Centers Override (tCO2e)

    else

    Scope 2 Market-Based Emissions from Data Centers (tCO2e) = Scope 2 Market-Based Emissions from Data Centers (tCO2e) aggregated from related carbon footprint records for that year.

-   **Scope 2 Location-Based Emissions from Commercial Buildings (tCO2e) (Scope2LocBasedEmssnCmclBld)**

    Input Fields

    Scope 2 Location-Based Emissions from Commercial Buildings Override (tCO2e)(Scp2LocBsdEmssnCmclBldOverride)

    Calculations

    if(Scope 2 Location-Based Emissions from Commercial Buildings Override (tCO2e) != null)

    Scope 2 Location-Based Emissions from Commercial Buildings (tCO2e) = Scope 2 Location-Based Emissions from Commercial Buildings Override (tCO2e)

    else

    Scope 2 Location-Based Emissions from Commercial Buildings (tCO2e) = Scope 2 Location-Based Emissions from Commercial Buildings (tCO2e) aggregated from related carbon footprint records for that year.

-   **Scope 2 Location-Based Emissions from Data Centers (tCO2e) (Scope2LocBasedEmssnDataCtr)**

    Input Fields

    Scope 2 Location-Based Emissions from Data Centers Override (tCO2e) (Scp2LocBsdEmssnDataCtrOvride)

    Calculations

    if(Scope 2 Location-Based Emissions from Data Centers Override (tCO2e) != null)

    Scope 2 Location-Based Emissions from Data Centers (tCO2e) = Scope 2 Location-Based Emissions from Data Centers Override (tCO2e)

    else

    Scope 2 Location-Based Emissions from Data Centers (tCO2e) = Scope 2 Location-Based Emissions from Data Centers (tCO2e) aggregated from related carbon footprint records for that year

-   **Scope 2 Emissions from Fleet Vehicles (tCO2e) (Scope2EmissionsFleetVehicles)**

    Input Fields

    Scope 2 Emissions from Fleet Vehicles Override (tCO2e) (Scp2EmssnFleetVehiclesOverride)

    Calculations

    if(Scope 2 Emissions from Fleet Vehicles Override (tCO2e) != null)

    Scope 2 Emissions from Fleet Vehicles (tCO2e) = Scope 2 Emissions from Fleet Vehicles Override (tCO2e)

    else

    Scope 2 Emissions from Fleet Vehicles (tCO2e) = Scope 2 Location-Based Emissions from Fleet Vehicles (tCO2e) aggregated from related carbon footprint records for that year

-   **Scope 2 Emissions from Private Jets (tCO2e) (Scope2EmissionsPrivateJets)**

    Input Fields

    Scope 2 Emissions from Private Jets Override (tCO2e) (Scp2EmssnPrivateJetsOverride)

    Calculations

    if(Scope 2 Emissions from Private Jets Override (tCO2e) != null)

    Scope 2 Emissions from Private Jets (tCO2e) = Scope 2 Emissions from Private Jets Override (tCO2e)

    else

    Scope 2 Emissions from Private Jets (tCO2e) = Scope 2 Location-Based Emissions from Private Jets (tCO2e) aggregated from related carbon footprint records for that year

-   **Renewable Energy Usage Percentage in Commercial Buildings (RenewableEnergyUsagePctCmclBld)**

    Input Fields

    Renewable Energy Usage Percentage in Commercial Buildings Override (RenewableEnrgyPctCmclBldOvride)

    Calculations

    if(Renewable Energy Usage Percentage Override Commercial Buildings != null)

    Renewable Energy Usage Percentage in Commercial Buildings = Renewable Energy Usage Percentage Override in Commercial Buildings

    else

    Renewable Energy Usage Percentage in Commercial Buildings = weighted average of Renewable Energy Usage Percentage in Commercial Buildings from related stationary asset carbon footprint records for that year calculated as

    Sum(Total Renewable Energy (kWh)) across all relevant SACF / Sum(Total Energy Consumption (kWh))\] × 100 across all relevant SACFs

-   **Renewable Energy Usage Percentage in Data Centers (RenewableEnergyUsagePctDataCtr)**

    Input Fields

    Renewable Energy Usage Percentage in Data Centers Override (RenewableEnrgyPctDataCtrOvride)

    Calculations

    if(Renewable Energy Usage Percentage Override Data Centers != null)

    Renewable Energy Usage Percentage in Data Centers = Renewable Energy Usage Percentage Override in Data Centers

    else

    Renewable Energy Usage Percentage in Data Centers = weighted average of Renewable Energy Usage Percentage in Data Centers from related stationary asset carbon footprint records for that year calculated as

    Sum(Total Renewable Energy (kWh)) across all relevant SACF / Sum(Total Energy Consumption (kWh))\] × 100 across all relevant SACFs

-   **Total Scope 1 and 2 Emissions (tCO2e) (TotalScope1And2Emissions)**

    Input Fields

    -   Total Scope 1 Emissions (tCO2e) (TotalScope1Emissions)
    -   Total Scope 2 Emissions (tCO2e) (TotalScope2Emissions)

    Calculations

    Total Scope 1 and Scope 2 Emissions (tCO2e) = Total Scope 1 Emissions (tCO2e) + Total Scope 2 Emissions (tCO2e)

-   **Total Scope 3 Emissions (tCO2e) (TotalScope3Emissions)**

    Input Fields

    -   Total Scope 3 Emissions Override (tCO2e) (TotalScope3EmissionsOverride)
    -   Total Supplemental Scope 3 Emissions (tCO2e) (TotalSuplScp3Emissions)
    -   Scope 3 Emissions from Business Travel (tCO2e) (Scope3EmissionsBusinessTravel)
    -   Scope 3 Emissions from Capital Goods (tCO2e) (Scope3EmissionsCapitalGoods)
    -   Scope 3 Emissions from Commercial Buildings (tCO2e) (Scope3EmssnCommercialBuildings)
    -   Scope 3 Emissions from Data Centers (tCO2e) (Scope3EmissionsDataCenters)
    -   Scope 3 Emissions from Downstream Leased Assets (tCO2e) (Scp3EmssnDnstrmLeasedAssets)
    -   Scope 3 Emissions from Downstream Transportation and Distribution (tCO2e) (Scp3EmssnDownstreamTrnspDstr)
    -   Scope 3 Emissions from Employee Commuting (tCO2e) (Scope3EmssnEmployeeCommuting)
    -   Scope 3 Emissions from End-of-Life Treatment of Sold Products (tCO2e) (Scp3EmssnEolTreatOfSoldPrdct)
    -   Scope 3 Emissions from Fleet Vehicles (tCO2e) (Scope3EmissionsFleetVehicles)
    -   Scope 3 Emissions from Franchises (tCO2e) (Scope3EmissionsFranchises)
    -   Scope 3 Emissions from Fuel and Energy-Related Activity (tCO2e) (Scp3EmssnFuelEnergyActivity)
    -   Scope 3 Emissions from Investments (tCO2e) (Scope3EmissionsInvestments)
    -   Scope 3 Emissions from Private Jets (tCO2e) (Scope3EmissionsPrivateJets)
    -   Scope 3 Emissions from Processing of Sold Products (tCO2e) (Scp3EmssnProcSoldProducts)
    -   Scope 3 Emissions from Purchased Goods and Services (tCO2e) (Scp3EmssnPurchGoodsAndServices)
    -   Scope 3 Emissions from Upstream Leased Assets (tCO2e) (Scp3EmssnUpstreamLeasedAssets)
    -   Scope 3 Emissions from Upstream Transportation and Distribution (tCO2e) (Scp3EmssnUpstreamTrnspDstr)
    -   Scope 3 Emissions from Use of Sold Products (tCO2e) (Scope3EmssnUseOfSoldProducts)
    -   Scope 3 Emissions from Waste Generated in Operations (tCO2e) (Scope3EmissionsWasteGenInOper)
    -   Scope 3 Uncategorized Emissions (tCO2e) (Scope3UncategorizedEmissions)

    Calculations

    if(Total Scope 3 Emissions Override (tCO2e) != null)

    Total Scope 3 Emissions (tCO2e) = Total Scope 3 Emissions Override (tCO2e)

    else

    Total Scope 3 Emissions (tCO2e) = Scope 3 Emissions from Business Travel (tCO2e) + Scope 3 Emissions from Capital Goods (tCO2e) + Scope 3 Emissions from Downstream Leased Assets (tCO2e) + Scope 3 Emissions from Downstream Transportation and Distribution (tCO2e) + Scope 3 Emissions from Employee Commuting (tCO2e) + Scope 3 Emissions from End-of-Life Treatment of Sold Products (tCO2e) + Scope 3 Emissions from Fleet Vehicles (tCO2e) + Scope 3 Emissions from Franchises (tCO2e) + Scope 3 Emissions from Fuel and Energy-Related Activity (tCO2e) + Scope 3 Emissions from Investments (tCO2e) + Scope 3 Emissions from Private Jets (tCO2e) + Scope 3 Emissions from Processing of Sold Products (tCO2e) + Scope 3 Emissions from Purchased Goods and Services (tCO2e) + Scope 3 Emissions from Upstream Leased Assets (tCO2e) + Scope 3 Emissions from Upstream Transportation and Distribution (tCO2e) + Scope 3 Emissions from Use of Sold Products (tCO2e) + Scope 3 Emissions from Waste Generated in Operations (tCO2e) + Scope 3 Uncategorized Emissions (tCO2e) + TotalSuplScp3Emissions

-   **Scope 3 Emissions from Commercial Buildings (tCO2e) (Scope3EmssnCommercialBuildings)**

    Input Fields

    Scope 3 Emissions from Commercial Buildings Override (tCO2e) (Scope3EmssnCmclBldOverride)

    Calculations

    if(Scope 3 Emissions from Commercial Buildings Override (tCO2e) != null)

    Scope 3 Emissions from Commercial Buildings (tCO2e) = Scope 3 Emissions from Commercial Buildings Override (tCO2e)

    else

    Scope 3 Emissions from Commercial Buildings (tCO2e) = Sum of total scope 3 downstream emissions and total scope 3 upstream emissions from all relevant stationary asset carbon footprints (with record type Commercial Building)

-   **Scope 3 Emissions from Data Centers (tCO2e) (Scope3EmissionsDataCenters)**

    Input Fields

    Scope 3 Emissions from Data Centers Override (tCO2e) (Scope3EmssnDataCentersOverride)

    Calculations

    if(Scope 3 Emissions from Data Centers Override != null)

    Scope 3 Emissions from Data Centers = Scope 3 Emissions from Data Centers Override

    else

    Scope 3 Emissions from Data Centers = Sum of total scope 3 downstream emissions and total scope 3 upstream emissions from all relevant stationary asset carbon footprints (with record type Data Center)

-   **Scope 3 Emissions from Fleet Vehicles (tCO2e) (Scope3EmissionsFleetVehicles)**

    Input Fields

    Scope 3 Emissions from Fleet Vehicles Override (tCO2e) (Scp3EmssnFleetVehiclesOverride)

    Calculations

    if(Scope 3 Emissions from Fleet Vehicles Override != null)

    Scope 3 Emissions from Fleet Vehicles = Scope 3 Emissions from Fleet Vehicles Override

    else

    Scope 3 Emissions from Fleet Vehicles = Sum of total scope 3 downstream emissions and total scope 3 upstream emissions from all relevant vehicle asset carbon footprints (with record type Fleet Vehicle)

-   **Scope 3 Emissions from Private Jets (tCO2e) (Scope3EmissionsPrivateJets)**

    Input Fields

    Scope 3 Emissions from Private Jets Override (tCO2e) (Scp3EmssnPrivateJetsOverride)

    Calculations

    if(Scope 3 Emissions from Private Jets Override != null)

    Scope 3 Emissions from Private Jets = Scope 3 Emissions from Private Jets Override

    else

    Scope 3 Emissions from Private Jets = Sum of total scope 3 downstream emissions and total scope 3 upstream emissions from all relevant vehicle asset carbon footprints (with record type Private Jet)

-   **Scope 3 Emissions from Purchased Goods and Services (tCO2e) (Scp3EmssnPurchGoodsAndServices)**

    Input Fields

    Scope 3 Emissions from Purchased Goods and Services Override (tCO2e) (Scp3EmssnPurchGoodsSrvcsOvride)

    Calculations

    if(Scope 3 Emissions from Purchased Goods and Services Override (tCO2e)!= null)

    Scope 3 Emissions from Purchased Goods and Services (tCO2e) = Scope 3 Emissions from Purchased Goods and Services Override (tCO2e)

    else

    Scope 3 Emissions from Purchased Goods and Services (tCO2e) = Scope 3 Emissions from Purchased Goods and Services (tCO2e) aggregated from related carbon footprint records for that year

-   **Scope 3 Emissions from Business Travel (tCO2e) (Scope3EmissionsBusinessTravel)**

    Input Fields

    Scope 3 Emissions from Business Travel Override (tCO2e)Scp3EmssnBusinessTravelOvride

    Calculations

    if(Scope 3 Emissions from Business Travel Override (tCO2e) != null)

    Scope 3 Emissions from Business Travel (tCO2e) = Scope 3 Emissions from Business Travel Override (tCO2e)

    else

    Scope 3 Emissions from Business Travel (tCO2e) = Scope 3 Emissions from Business Travel (tCO2e) aggregated from related carbon footprint records for that year

-   **Scope 3 Emissions from Fuel and Energy-Related Activity (tCO2e) (Scp3EmssnFuelEnergyActivity)**

    Input Fields

    Scope 3 Emissions from Fuel and Energy-Related Activity Override (tCO2e) (Scp3EmssnFuelEnrgyActvtyOvride)

    Calculations

    if(Scope 3 Emissions from Fuel and Energy-Related Activity Override (tCO2e) != null)

    Scope 3 Emissions from Fuel and Energy-Related Activity (tCO2e) = Scope 3 Emissions from Fuel and Energy-Related Activity Override (tCO2e)

    else

    Scope 3 Emissions from Fuel and Energy-Related Activity (tCO2e) = Scope 3 Emissions from Fuel and Energy-Related Activity (tCO2e) aggregated from related carbon footprint records for that year

-   **Scope 3 Emissions from Upstream Transportation and Distribution (tCO2e) (Scp3EmssnUpstreamTrnspDstr)**

    Input Fields

    Scope 3 Emissions from Upstream Transportation and Distribution Override (tCO2e) (Scp3EmssnUpstrmTrnspDstrOvride)

    Calculations

    if(Scope 3 Emissions from Upstream Transportation and Distribution Override (tCO2e) != null)

    Scope 3 Emissions from Upstream Transportation and Distribution (tCO2e) = Scope 3 Emissions from Upstream Transportation and Distribution Override (tCO2e)

    else

    Scope 3 Emissions from Upstream Transportation and Distribution (tCO2e) = Scope 3 Emissions from Upstream Transportation and Distribution (tCO2e) aggregated from related carbon footprint records for that year

-   **Scope 3 Emissions from Waste Generated in Operations (tCO2e) (Scope3EmissionsWasteGenInOper)**

    Input Fields

    Scope 3 Emissions from Waste Generated in Operations Override (tCO2e) (Scp3EmssnWasteGenInOperOvride)

    Calculations

    if(Scope 3 Emissions from Waste Generated in Operations Override (tCO2e) != null)

    Scope 3 Emissions from Waste Generated in Operations (tCO2e) = Scope 3 Emissions from Waste Generated in Operations Override (tCO2e)

    else

    Scope 3 Emissions from Waste Generated in Operations (tCO2e) = Scope 3 Emissions from Waste Generated in Operations (tCO2e) aggregated from related carbon footprint records for that year

-   **Scope 3 Emissions from Capital Goods (tCO2e) (Scope3EmissionsCapitalGoods)**

    Input Fields

    Scope 3 Emissions from Capital Goods Override (tCO2e) (Scope3EmssnCapitalGoodsOvride)

    Calculations

    if(Scope 3 Emissions from Capital Goods Override (tCO2e) != null)

    Scope 3 Emissions from Capital Goods (tCO2e) = Scope 3 Emissions from Capital Goods Override (tCO2e)

    else

    Scope 3 Emissions from Capital Goods (tCO2e) = Scope 3 Emissions from Capital Goods (tCO2e) aggregated from related carbon footprint records for that year

-   **Scope 3 Emissions from Employee Commuting (tCO2e) (Scope3EmssnEmployeeCommuting)**

    Input Fields

    Scope 3 Emissions from Employee Commuting Override (tCO2e) (Scope3EmssnEmpCommutingOvride)

    Calculations

    if(Scope 3 Emissions from Employee Computing Override (tCO2e) != null)

    Scope 3 Emissions from Employee Computing (tCO2e) = Scope 3 Emissions from Employee Computing Override (tCO2e)

    else

    Scope 3 Emissions from Employee Computing (tCO2e) = Scope 3 Emissions from Employee Computing (tCO2e) aggregated from related carbon footprint records for that year

-   **Scope 3 Emissions from Upstream Leased Assets (tCO2e) (Scp3EmssnUpstreamLeasedAssets)**

    Input Fields

    Scope 3 Emissions from Upstream Leased Assets Override (tCO2e) (Scp3EmssnUpstrmLeasedAstOvride)

    Calculations

    if(Scope 3 Emissions from Upstream Leased Assets Override (tCO2e) != null)

    Scope 3 Emissions from Upstream Leased Assets (tCO2e) = Scope 3 Emissions from Upstream Leased Assets Override (tCO2e)

    else

    Scope 3 Emissions from Upstream Leased Assets (tCO2e) = Scope 3 Emissions from Upstream Leased Assets (tCO2e) aggregated from related carbon footprint records for that year

-   **Scope 3 Emissions from Downstream Transportation and Distribution (tCO2e) (Scp3EmssnDownstreamTrnspDstr)**

    Input Fields

    Scope 3 Emissions from Downstream Transportation and Distribution Override (tCO2e) (Scp3EmssnDnstrmTrnspDstrOvride)

    Calculations

    if(Scope 3 Emissions from Downstream Transportation and Distribution Override (tCO2e) != null)

    Scope 3 Emissions from Downstream Transportation and Distribution (tCO2e) = Scope 3 Emissions from Downstream Transportation and Distribution Override (tCO2e)

    else

    Scope 3 Emissions from Downstream Transportation and Distribution (tCO2e) = Scope 3 Emissions from Downstream Transportation and Distribution (tCO2e) aggregated from related carbon footprint records for that year

-   **Scope 3 Emissions from End-of-Life Treatment of Sold Products (tCO2e) (Scp3EmssnEolTreatOfSoldPrdct)**

    Input Fields

    Scope 3 Emissions from End-of-Life Treatment of Sold Products Override (tCO2e) (Scp3EmssnEolSoldPrdctOvride)

    Calculations

    if(Scope 3 Emissions from End-of-Life Treatment of Sold Products Override (tCO2e) != null)

    Scope 3 Emissions from End-of-Life Treatment of Sold Products (tCO2e) = Scope 3 Emissions from End-of-Life Treatment of Sold Products Override (tCO2e)

    else

    Scope 3 Emissions from End-of-Life Treatment of Sold Products (tCO2e) = Scope 3 Emissions from End-of-Life Treatment of Sold Products (tCO2e) aggregated from related carbon footprint records for that year

-   **Scope 3 Emissions from Downstream Leased Assets (tCO2e) (Scp3EmssnDnstrmLeasedAssets)**

    Input Fields

    Scope 3 Emissions from Downstream Leased Assets Override (tCO2e) (Scp3EmssnDnstrmLeasedAstOvride)

    Calculations

    if(Scope 3 Emissions from Downstream Leased Assets Override (tCO2e) != null)

    Scope 3 Emissions from Downstream Leased Assets (tCO2e) = Scope 3 Emissions from Downstream Leased Assets Override (tCO2e)

    else

    Scope 3 Emissions from Downstream Leased Assets (tCO2e) = Scope 3 Emissions from Downstream Leased Assets (tCO2e) aggregated from related carbon footprint records for that year

-   **Scope 3 Emissions from Processing of Sold Products (tCO2e) (Scp3EmssnProcSoldProducts)**

    Input Fields

    Scope 3 Emissions from Processing of Sold Products Override (tCO2e) (Scp3EmssnProcSoldPrdctOverride)

    Calculations

    if(Scope 3 Emissions from Processing of Sold Products Override (tCO2e) != null)

    Scope 3 Emissions from Processing of Sold Products (tCO2e) = Scope 3 Emissions from Processing of Sold Products Override (tCO2e)

    else

    Scope 3 Emissions from Processing of Sold Products (tCO2e) = Scope 3 Emissions from Processing of Sold Products (tCO2e) aggregated from related carbon footprint records for that year

-   **Scope 3 Emissions from Franchises (tCO2e) (Scope3EmissionsFranchises)**

    Input Fields

    Scope 3 Emissions from Franchises Override (tCO2e) (Scope3EmssnFranchisesOverride)

    Calculations

    if(Scope 3 Emissions from Franchises Override (tCO2e) != null)

    Scope 3 Emissions from Franchises (tCO2e) = Scope 3 Emissions from Franchises Override (tCO2e)

    else

    Scope 3 Emissions from Franchises (tCO2e) = Scope 3 Emissions from Franchises (tCO2e) aggregated from related carbon footprint records for that year

-   **Scope 3 Emissions from Investments (tCO2e) (Scope3EmissionsInvestments)**

    Input Fields

    Scope 3 Emissions from Investments Override (tCO2e) (Scope3EmssnInvestmentsOverride)

    Calculations

    if(Scope 3 Emissions from Investments Override (tCO2e) != null)

    Scope 3 Emissions from Investments (tCO2e) = Scope 3 Emissions from Investments Override (tCO2e)

    else

    Scope 3 Emissions from Investments (tCO2e) = Scope 3 Emissions from Investments (tCO2e) aggregated from related carbon footprint records for that year

-   **Scope 3 Emissions from Use of Sold Products (tCO2e) (Scope3EmssnUseOfSoldProducts)**

    Input Fields

    Scope 3 Emissions from Use of Sold Products Override (tCO2e) (Scp3EmssnUseOfSoldPrdctOvride)

    Calculations

    if(Scope 3 Emissions from Use of Sold Products Override (tCO2e) != null)

    Scope 3 Emissions from Use of Sold Products (tCO2e) = Scope 3 Emissions from Use of Sold Products Override (tCO2e)

    else

    Scope 3 Emissions from Use of Sold Products (tCO2e) = Scope 3 Emissions from Use of Sold Products (tCO2e) aggregated from related carbon footprint records for that year

-   **Scope 3 Uncategorized Emissions (tCO2e) (Scope3UncategorizedEmissions)**

    Input Fields

    Scope 3 Uncategorized Emissions Override (tCO2e) (Scp3UncategorizedEmssnOverride)

    Calculations

    if(Scope 3 Uncategorized Emissions Override (tCO2e) != null)

    Scope 3 Uncategorized Emissions (tCO2e) = Scope 3 Uncategorized Emissions Override (tCO2e)

    else

    Scope 3 Uncategorized Emissions (tCO2e) = Scope 3 Uncategorized Emissions (tCO2e) aggregated from related carbon footprint records for that year

-   **Total Supplemental Scope 3 Emissions (tCO2e) (TotalSuplScp3Emissions)**

    Input Fields

    Total Supplemental Scope 3 Emissions Override (tCO2e) (TotalSuplScope3EmssnOverride)

    Calculations

    if(Total Supplemental Scope 3 Emissions Override != null)

    Total Supplemental Scope 3 Emissions = Total Supplemental Scope 3 Emissions Override

    else

    Total Supplemental Scope 3 Emissions = Supplemental scope 3 emissions aggregated from related scope 3 carbon footprint records for that year

-   **Scope 3 Emissions Percentage from Purchased Goods and Services (Scp3EmssnPctPurchGoodsAndSrvcs)**

    Input Fields

    -   Scope 3 Emissions from Purchased Goods and Services (tCO2e) (Scp3EmssnPurchGoodsAndServices)
    -   Total Scope 3 Emissions (tCO2e) (TotalScope3Emissions)

    Calculations

    Scope 3 Emissions Percentage from Purchased Goods and Services = Scope 3 Emissions from Purchased Goods and Services (tCO2e) / Total Scope 3 Emissions (tCO2e)

-   **Scope 3 Emissions Percentage from Business Travel (Scope3EmssnPctBusinessTravel)**

    Input Fields

    -   Scope 3 Emissions from Business Travel (tCO2e) (Scope3EmissionsBusinessTravel)
    -   Total Scope 3 Emissions (tCO2e) (TotalScope3Emissions)

    Calculations

    Scope 3 Emissions Percentage from Business Travel = Scope 3 Emissions from Business Travel (tCO2e) / Total Scope 3 Emissions (tCO2e)

-   **Scope 3 Emissions Percentage from Fuel and Energy-Related Activity (Scp3EmssnPctFuelEnrgyActivity)**

    Input Fields

    -   Scope 3 Emissions from Fuel and Energy-Related Activity (tCO2e) (Scp3EmssnFuelEnergyActivity)
    -   Total Scope 3 Emissions (tCO2e) (TotalScope3Emissions)

    Calculations

    Scope 3 Emissions Percentage from Fuel and Energy-Related Activity = Scope 3 Emissions from Fuel and Energy-Related Activity / Total Scope 3 Emissions (tCO2e)

-   **Scope 3 Emissions Percentage from Upstream Transportation and Distribution (Scp3EmssnPctUpstrmTrnspDstr)**

    Input Fields

    -   Scope 3 Emissions from Upstream Transportation and Distribution (tCO2e) (Scp3EmssnUpstreamTrnspDstr)
    -   Total Scope 3 Emissions (tCO2e) (TotalScope3Emissions)

    Calculations

    Scope 3 Emissions Percentage from Upstream Transportation and Distribution = Scope 3 Emissions from Upstream Transportation and Distribution(tCO2e / Total Scope 3 Emissions (tCO2e)

-   **Scope 3 Emissions Percentage from Waste Generated in Operations (Scp3EmssnPctWasteGenInOper)**

    Input Fields

    -   Scope 3 Emissions from Waste Generated in Operations (tCO2e) (Scope3EmissionsWasteGenInOper)
    -   Total Scope 3 Emissions (tCO2e) (TotalScope3Emissions)

    Calculations

    Scope 3 Emissions Percentage from Waste Generated in Operations = Scope 3 Emissions from Waste Generated in Operations (tCO2e) / Total Scope 3 Emissions (tCO2e)

-   **Scope 3 Emissions Percentage from Capital Goods (Scope3EmissionsPctCapitalGoods)**

    Input Fields

    -   Scope 3 Emissions from Capital Goods (tCO2e) (Scope3EmissionsCapitalGoods)
    -   Total Scope 3 Emissions (tCO2e) (TotalScope3Emissions)

    Calculations

    Scope 3 Emissions Percentage from Capital Goods = Scope 3 Emissions from Capital Goods (tCO2e) / Total Scope 3 Emissions (tCO2e)

-   **Scope 3 Emissions Percentage from Employee Commuting (Scope3EmssnPctEmpCommuting)**

    Input Fields

    -   Scope 3 Emissions from Employee Commuting (tCO2e) (Scope3EmssnEmployeeCommuting)
    -   Total Scope 3 Emissions (tCO2e) (TotalScope3Emissions)

    Calculations

    Scope 3 Emissions Percentage from Employee Commuting = Scope 3 Emissions from Employee Computing (tCO2e) / Total Scope 3 Emissions (tCO2e)

-   **Scope 3 Emissions Percentage from Upstream Leased Assets (Scope3EmssnPctUpstrmLeasedAsst)**

    Input Fields

    -   Scope 3 Emissions from Upstream Leased Assets (tCO2e) (Scp3EmssnUpstreamLeasedAssets)
    -   Total Scope 3 Emissions (tCO2e) (TotalScope3Emissions)

    Calculations

    Scope 3 Emissions Percentage from Upstream Leased Assets = Scope 3 Emissions from Upstream Leased Assets (tCO2e) / Total Scope 3 Emissions (tCO2e)

-   **Scope 3 Emissions Percentage from Downstream Transportation and Distribution (Scope3EmssnPctDnstrmTrnspDstr)**

    Input Fields

    -   Scope 3 Emissions from Downstream Transportation and Distribution (tCO2e) (Scp3EmssnDownstreamTrnspDstr)
    -   Total Scope 3 Emissions (tCO2e) (TotalScope3Emissions)

    Scope 3 Emissions Percentage from Downstream Transportation and Distribution = Scope 3 Emissions from Downstream Transportation and Distribution (tCO2e) / Total Scope 3 Emissions (tCO2e)

-   **Supplemental Scope 3 Emissions Percentage (SupplementalScope3EmissionsPct)**

    Input Fields

    -   Total Supplemental Scope 3 Emissions (tCO2e) (TotalSuplScp3Emissions)
    -   Total Scope 3 Emissions (tCO2e) (TotalScope3Emissions)

    Calculations

    Supplemental Scope 3 Emissions Percentage = Total Supplemental Scope 3 Emissions (tCO2e) / Total Scope 3 Emissions (tCO2e)

-   **Scope 3 Emissions Percentage from End-of-Life Treatment of Sold Products (Scp3EmssnPctEolTreatSoldPrdct)**

    Input Fields

    -   Scope 3 Emissions from End-of-Life Treatment of Sold Products (tCO2e) (Scp3EmssnEolTreatOfSoldPrdct)
    -   Total Scope 3 Emissions (tCO2e) (TotalScope3Emissions)

    Scope 3 Emissions Percentage from End-of-Life Treatment of Sold Products = Scope 3 Emissions from End-of-Life Treatment of Sold Products (tCO2e) / Total Scope 3 Emissions (tCO2e)

-   **Scope 3 Emissions Percentage from Downstream Leased Assets (Scp3EmssnPctDnstrmLeasedAssets)**

    Input Fields

    -   Scope 3 Emissions from Downstream Leased Assets (tCO2e) (Scp3EmssnDnstrmLeasedAssets)
    -   Total Scope 3 Emissions (tCO2e) (TotalScope3Emissions)

    Calculations

    Scope 3 Emissions Percentage from Downstream Leased Assets = Scope 3 Emissions from Downstream Leased Assets (tCO2e) / Total Scope 3 Emissions (tCO2e)

-   **Scope 3 Emissions Percentage from Processing of Sold Products (Scp3EmssnPctProcSoldProducts)**

    Input Fields

    -   Scope 3 Emissions from Processing of Sold Products (tCO2e) (Scp3EmssnProcSoldProducts)
    -   Total Scope 3 Emissions (tCO2e) (TotalScope3Emissions)

    Calculations

    Scope 3 Emissions Percentage from Processing of Sold Products = Scope 3 Emissions from Processing of Sold Products (tCO2e) / Total Scope 3 Emissions (tCO2e)

-   **Scope 3 Emissions Percentage from Franchises (Scope3EmissionsPctFranchises)**

    Input Fields

    -   Scope 3 Emissions from Franchises (tCO2e) (Scope3EmissionsFranchises)
    -   Total Scope 3 Emissions (tCO2e) (TotalScope3Emissions)

    Calculations

    Scope 3 Emissions Percentage from Franchises = Scope 3 Emissions from Franchises (tCO2e) / Total Scope 3 Emissions (tCO2e)

-   **Scope 3 Emissions Percentage from Investments (Scope3EmissionsPctInvestments)**

    Input Fields

    -   Scope 3 Emissions from Investments (tCO2e) (Scope3EmissionsInvestments)
    -   Total Scope 3 Emissions (tCO2e) (TotalScope3Emissions)

    Calculations

    Scope 3 Emissions Percentage from Investments = Scope 3 Emissions from Investments (tCO2e) / Total Scope 3 Emissions (tCO2e)

-   **Scope 3 Emissions Percentage from Use of Sold Products (Scope3EmssnPctUseOfSoldPrdct)**

    Input Fields

    -   Scope 3 Emissions from Use of Sold Products (tCO2e) (Scope3EmssnUseOfSoldProducts)
    -   Total Scope 3 Emissions (tCO2e) (TotalScope3Emissions)

    Calculations

    Scope 3 Emissions Percentage from Use of Sold Products = Scope 3 Emissions from Use of Sold Products (tCO2e) / Total Scope 3 Emissions (tCO2e)

-   **Scope 3 Uncategorized Emissions Percentage (Scp3UncatgEmssnPct)**

    Input Fields

    -   Scope 3 Uncategorized Emissions (tCO2e) (Scope3UncategorizedEmissions)
    -   Total Scope 3 Emissions (tCO2e) (TotalScope3Emissions)

    Calculations

    Scope 3 Uncategorized Emissions Percentage = Scope 3 Uncategorized Emissions (tCO2e) / Total Scope 3 Emissions (tCO2e)

-   **Total Emissions (tCO2e) (TotalEmissions)**

    Input Fields

    -   Total Scope 1 Emissions (tCO2e) (TotalScope1Emissions)
    -   Total Scope 2 Emissions (tCO2e) (TotalScope2Emissions)
    -   Total Scope 3 Emissions (tCO2e) (TotalScope3Emissions)

    Calculations

    Total Emissions = Total Scope 1 Emissions (tCO2e) + Total Scope 2 Emissions (tCO2e) + Total Scope 3 Emissions (tCO2e)

-   **Scope 3 Emissions Percentage (Scope3EmissionsPercentage)**

    Input Fields

    -   Total Emissions (tCO2e) (TotalEmissions)
    -   Total Scope 3 Emissions (tCO2e) (TotalScope3Emissions)

    Calculations

    Scope 3 Emissions Percentage = Total Scope 3 Emissions (tCO2e) / Total Emissions

-   **Scope 3 Market-Based Emissions from Fuel and Energy-Related Activity (tCO2e) (Scp3MktEmssnFuelEnrgy)**

    Input Fields

    -   Scope 3 Market-Based Emissions from Fuel and Energy-Related Activity Override (tCO2e) (Scp3MktFuelEnrgyOverride)
    -   Vehicle Asset Carbon Footprint (VehicleAssetCarbonFootprint)
        -   Scope 3 Emissions from Fuel and Energy-Related Activity (tCO2e) (Scp3EmssnFuelEnrgy)
    -   Stationary Asset Carbon Footprint (StnryAssetCrbnFtprnt)
        -   Scope 3 Market-Based Emissions from Fuel and Energy-Related Activity (tCO2e) (Scp3MktEmssnFuelEnrgy)
    -   Scope 3 Carbon Footprint (Scope3CrbnFtprnt)
        -   Scope 3 Emissions from Fuel and Energy-Related Activity (tCO2e) (Scp3EmssnFuelEnergyActivity)

    Calculations

    If Scope 3 Market-Based Emissions from Fuel and Energy-Related Activity Override (tCO2e) != null, then

    Scope 3 Market-Based Emissions from Fuel and Energy-Related Activity (tCO2e) = Scope 3 Market-Based Emissions from Fuel and Energy-Related Activity Override (tCO2e),

    Else

    Scope 3 Market-Based Emissions from Fuel and Energy-Related Activity (tCO2e) = Sum(VehicleAssetCarbonFootprint.Scope 3 Emissions from Fuel and Energy-Related Activity (tCO2e)) + Sum (StnryAssetCrbnFtprnt.Scope 3 Market-Based Emissions from Fuel and Energy-Related Activity (tCO2e)) + Sum(Scope3CrbnFtprnt.Scope 3 Emissions from Fuel and Energy-Related Activity (tCO2e))

-   **Scope 3 Emissions from Fuel and Energy-Related Activity (tCO2e) (Scp3EmssnFuelEnergyActivity)**

    Input Fields

    -   Scope 3 Emissions from Fuel and Energy-Related Activity Override (tCO2e) (Scp3EmssnFuelEnrgyActvtyOvride)
    -   Vehicle Asset Carbon Footprint (VehicleAssetCarbonFootprint)
        -   Scope 3 Emissions from Fuel and Energy-Related Activity (tCO2e) (Scp3EmssnFuelEnrgy)
    -   Stationary Asset Carbon Footprint (StnryAssetCrbnFtprnt)
        -   Scope 3 Emissions from Fuel and Energy-Related Activities (tCO2e) (Scp3FuelEnrgyRelaActv)
    -   Scope 3 Carbon Footprint (Scope3CrbnFtprnt)
        -   Scope 3 Emissions from Fuel and Energy-Related Activity (tCO2e) (Scp3EmssnFuelEnergyActivity)

    Calculations

    If Scope 3 Emissions from Fuel and Energy-Related Activity Override (tCO2e) != null, then

    Scope 3 Emissions from Fuel and Energy-Related Activity (tCO2e) = Scope 3 Emissions from Fuel and Energy-Related Activity Override (tCO2e),

    Else

    Scope 3 Emissions from Fuel and Energy-Related Activity (tCO2e) = Sum(VehicleAssetCarbonFootprint.Scope 3 Emissions from Fuel and Energy-Related Activity (tCO2e)) + Sum (StnryAssetCrbnFtprnt.Scope 3 Emissions from Fuel and Energy-Related Activities (tCO2e)) + Sum(Scope3CrbnFtprnt.Scope 3 Emissions from Fuel and Energy-Related Activity (tCO2e))

-   **Allocated Scope 3 Emissions (tCO2e) (AllocScope3EmssnInTco2e)**

    Input Fields

    -   Scope 3 Emissions Type (Scope3EmissionsType)
    -   Allocated Scope 3 Emissions Override (tCO2e) (AllocScope3EmssnOverride)
    -   Vehicle Asset Carbon Footprint (VehicleAssetCarbonFootprint)
        -   Scope 3 Emissions from Fuel and Energy-Related Activity (tCO2e) (Scp3EmssnFuelEnrgy)
    -   Stationary Asset Carbon Footprint (StnryAssetCrbnFtprnt)
        -   Scope 3 Market-Based Emissions from Fuel and Energy-Related Activity (tCO2e) (Scp3MktEmssnFuelEnrgy)
        -   Scope 3 Emissions from Fuel and Energy-Related Activities (tCO2e) (Scp3FuelEnrgyRelaActv)
    -   Scope 3 Carbon Footprint (Scope3CrbnFtprnt)
        -   Scope 3 Emissions from Fuel and Energy-Related Activity (tCO2e) (Scp3EmssnFuelEnergyActivity)

    Calculations

    If Allocated Scope 3 Emissions Override (tCO2e) != null, then

    Allocated Scope 3 Emissions (tCO2e) = Allocated Scope 3 Emissions Override (tCO2e),

    Else

    Allocated Scope 3 Emissions (tCO2e) = Sum of all scope 3 emission categories from Vehicle Asset Carbon Footprint, Stationary Asset Carbon Footprint, Scope 3 Carbon Footprint .

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=netzero_cloud_dev_guide)

    #### Note

    In Stationary Asset Carbon Footprint, there are 2 fields Scope 3 Market-Based Emissions from Fuel and Energy-Related Activity (tCO2e) and Scope 3 Emissions from Fuel and Energy-Related Activities (tCO2e), out of these 2 only 1 will be rolled up to this field in Annual Emissions Inventory, depending on respective Scope 3 Emissions Type if present (default is location-based)


-   **[Annual Emissions Inventory Extension](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_calc_annual_emissions_inventory_extension.htm)**
    The Annual Emissions Inventory object represents additional information about a company's total carbon emissions for a particular year in metric tonnes of CO2e (tCO2e).

## Related Topics

- Annual Emissions Inventory Extension (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_calc_annual_emissions_inventory_extension.htm)

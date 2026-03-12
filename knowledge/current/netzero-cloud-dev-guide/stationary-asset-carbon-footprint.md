---
title: "Stationary Asset Carbon Footprint"
domain: netzero-cloud-dev-guide
topic: stationary-asset-carbon-footprint
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:57.548Z
estimatedTokens: 7208
keywords: [Stationary, Asset, Carbon, Footprint, total, emissions, environmental, attributes, assets, quantifies, effect, atmospheric, warming, represented, metric]
---

# Stationary Asset Carbon Footprint

> The Stationary Asset Carbon Footprint object represents the
    total carbon emissions and other environmental attributes from stationary assets. The carbon
    footprint quantifies the effect of atmospheric warming, which is represented in metric tonnes of
    carbon dioxide equivalent (tCO₂e).

# Stationary Asset Carbon Footprint

The Stationary Asset Carbon Footprint object represents the total carbon emissions and other environmental attributes from stationary assets. The carbon footprint quantifies the effect of atmospheric warming, which is represented in metric tonnes of carbon dioxide equivalent (tCO₂e).


| Permission Set Needed |
| --- |
| To enter and modify data: | Net Zero Cloud ManagerORNet Zero Cloud Admin |

Here are the calculated fields:

-   **Allocated Renewable Energy (kWh) (AllocatedRenewableEnergyInKwh)**

    **Input Fields**

    The Stationary Asset Energy Use (StnryAssetEnrgyUse) record where FuelType = Electricity.

    **Calculations**

    Allocated Renewable Energy (kWh) = SUM (StnryAssetEnrgyUse.Allocated Renewable Energy (kWh))


-   **Annual Electricity Intensity Variance Percentage (AnnlElectrIntensityVarPct)**

    **Input Fields**

    The Stationary Asset Carbon Footprint Item (StnryAssetCrbnFtprntItm) record where Fuel Type = Electricity.

    The Stationary Asset Environmental Source (StnryAssetEnvrSrc) record.

    The Building Energy Intensity Value (BldgEnrgyIntensity) record.

    **Calculations**

    Annual Electricity Intensity Variance Percentage = (StnryAssetCrbnFtprntItm.Energy Consumption Intensity (kWh/sqft) - RegionalBldgEnergyIntensity.BldgEnrgyIntensity “Electricity”.Annual Intensity Value (kWh/sqft))/RegionalBldgEnergyIntensity.BldgEnrgyIntensity “Electricity”.Annual Intensity Value (kWh/sqft) × 100


-   **Average Data Center Power Usage Effectiveness (AvgDataCenterPue)**

    **Input Fields**

    The Stationary Asset Carbon Footprint Item (StnryAssetCrbnFtprntItm) record where Fuel Type = IT Electricity.

    The Stationary Asset Energy Use (StnryAssetEnrgyUse) record.

    **Calculations**

    Average Data Center Power Usage Effectiveness = sum(StnryAssetEnrgyUse.Final Energy Consumption)/StnryAssetCrbnFtprntItm.Total Energy Consumption (kWh)


-   **Average Monthly Electricity Consumption (kWh) (AvgMonthlyElectrCnsmpInKwh)**

    **Input Fields**

    The Stationary Asset Energy Use (StnryAssetEnrgyUse) record where Fuel Type = Electricity.

    **Calculations**

    Average Monthly Electricity Consumption (kWh) = SUM (StnryAssetEnrgyUse.Normalized Monthly Electricity Consumption (kWh))/COUNT (StnryAssetEnrgyUse.Normalized Monthly Electricity Consumption (kWh))


-   **Carbon Inventory Record Count (CarbonInventoryRecordCount)**

    **Input Fields**

    The Stationary Asset Energy Use (StnryAssetEnrgyUse) record.

    **Calculations**

    Carbon Inventory Record Count = COUNT (all Stationary Asset Energy Use records that are associated with the carbon footprint).


-   **Data Center IT Diesel Consumption Intensity (kWh/IT kWh) (DataCtrItDieselCnsmpIntensity)**

    **Input Fields**

    -   Related Stationary Asset Emission Source Record Type = Data Center

    -   The Stationary Asset Carbon Footprint Item (StnryAssetCrbnFtprntItm) record where Fuel Type = IT Electricity.

    -   The Stationary Asset Carbon Footprint Item (StnryAssetCrbnFtprntItm) record where Fuel Type = Diesel.


    **Calculations**

    If StnryAssetCrbnFtprntItm has a record for IT Electricity, then Data Center IT Diesel Consumption Intensity (kWh/IT kWh) = (StnryAssetCrbnFtprntItm.Total Energy Consumption (kWh) for Fuel Type = Diesel)/(StnryAssetCrbnFtprntItm.Total Energy Consumption (kWh) for Fuel Type = IT Electricity).


-   **Energy Consumption Intensity (kBtu/m2) (EnrgyCnsmpIntensityInKbtuM2)**

    **Input Fields**

    Energy Consumption Intensity (kWh/m2) (EnrgyCnsmpIntensityInKwhM2)

    **Calculations**

    Energy Consumption Intensity (kBtu/m2) = Energy Consumption Intensity (kWh/m2) × 3.412


-   **Energy Consumption Intensity (kBtu/sqft) (EnrgyCnsmpIntensityInKbtuSqft)**

    **Input Fields**

    Energy Consumption Intensity (kWh/sqft) (EnrgyCnsmpIntensityInKwhSqft)

    **Calculations**

    Energy Consumption Intensity (kBtu/sqft) = Energy Consumption Intensity (kWh/sqft) × 3.412


-   **Energy Consumption Intensity (kWh/m2) (EnrgyCnsmpIntensityInKwhM2)**

    **Input Fields**

    Energy Consumption Intensity (kWh/sqft) (EnrgyCnsmpIntensityInKwhSqft)

    **Calculations**

    Energy Consumption Intensity (kWh/m2) = Energy Consumption Intensity (kWh/sqft) × 10.7639


-   **Energy Consumption Intensity (kWh/sqft) (EnrgyCnsmpIntensityInKwhSqft)**

    **Input Fields**

    -   Total Energy Consumption (kWh) (TotEnergyConsumptionInKwh)

    -   Occupied Floor Area (OccupiedFloorArea)

    -   Occupied Floor Area Unit (OccupiedFloorAreaUnit)


    **Calculations**

    Energy Consumption Intensity (kWh/sqft) = Total Energy Consumption (kWh)/Occupied Floor Area (in sqft)


-   **Energy Intensity Variance Percentage (EnrgyIntensityVariancePct)**

    **Input Fields**

    -   Energy Consumption Intensity (kWh/sqft) (EnrgyCnsmpIntensityInKwhSqft)

    -   Regional Energy Consumption Intensity (kBtu/sqft) (RgnlEnrgyCnsmpIntensity)


    **Calculations**

    Energy Intensity Variance Percentage = (Energy Consumption Intensity (kWh/sqft) (converted to kBtu/sqft ) - Regional Energy Consumption Intensity (kBtu/sqft))/Regional Energy Consumption Intensity (kBtu/sqft) × 100


-   **Location-Based Electricity from Biomass (kWh) (LocBasedElectrFromBiomassInKwh)**

    **Input Fields**

    The Stationary Asset Energy Use (StnryAssetEnrgyUse) record where FuelType = Electricity.

    **Calculations**

    Location-Based Electricity from Biomass (kWh) = SUM (StnryAssetEnrgyUse.Location-Based Electricity from Biomass (kWh))


-   **Location-Based Electricity from Coal (kWh) (LocBasedElectrFromCoalInKwh)**

    **Input Fields**

    The Stationary Asset Energy Use (StnryAssetEnrgyUse) record where FuelType = Electricity.

    **Calculations**

    Location-Based Electricity from Coal (kWh) = SUM (StnryAssetEnrgyUse.Location-Based Electricity from Coal (kWh))


-   **Location-Based Electricity from Gas (kWh) (LocBasedElectrFromGasInKwh)**

    **Input Fields**

    The Stationary Asset Energy Use (StnryAssetEnrgyUse) record where FuelType = Electricity.

    **Calculations**

    Location-Based Electricity from Gas (kWh) = SUM (StnryAssetEnrgyUse.Location-Based Electricity from Gas (kWh))


-   **Location-Based Electricity from Hydro (kWh) (LocBasedElectrFromHydroInKwh)**

    **Input Fields**

    The Stationary Asset Energy Use (StnryAssetEnrgyUse) record where FuelType = Electricity.

    **Calculations**

    Location-Based Electricity from Hydro (kWh) = SUM (StnryAssetEnrgyUse.Location-Based Electricity from Hydro (kWh))


-   **Location-Based Electricity from Nuclear (kWh) (LocBasedElectrFromNuclearInKwh)**

    **Input Fields**

    The Stationary Asset Energy Use (StnryAssetEnrgyUse) record where FuelType = Electricity.

    **Calculations**

    Location-Based Electricity from Nuclear (kWh) = SUM (StnryAssetEnrgyUse.Location-Based Electricity from Nuclear (kWh))


-   **Location-Based Electricity from Oil (kWh) (LocBasedElectrFromOilInKwh)**

    **Input Fields**

    The Stationary Asset Energy Use (StnryAssetEnrgyUse) record where FuelType = Electricity.

    **Calculations**

    Location-Based Electricity from Oil (kWh) = SUM (StnryAssetEnrgyUse.Location-Based Electricity from Oil (kWh))


-   **Location-Based Electricity from Solar (kWh) (LocBasedElectrFromSolarInKwh)**

    **Input Fields**

    The Stationary Asset Energy Use (StnryAssetEnrgyUse) record where FuelType = Electricity.

    **Calculations**

    Location-Based Electricity from Solar (kWh) = SUM (StnryAssetEnrgyUse.Location-Based Electricity from Solar (kWh))


-   **Location-Based Electricity from Wind (kWh) (LocBasedElectrFromWindInKwh)**

    **Input Fields**

    The Stationary Asset Energy Use (StnryAssetEnrgyUse) record where FuelType = Electricity.

    **Calculations**

    Location-Based Electricity from Wind (kWh) = SUM (StnryAssetEnrgyUse.Location-Based Electricity from Wind (kWh))


-   **Location-Based Electricity from Other Fuel (kWh) (LocBasedElectrFrOthrFuelInKwh)**

    **Input Fields**

    The Stationary Asset Energy Use (StnryAssetEnrgyUse) record where FuelType = Electricity.

    **Calculations**

    Location-Based Electricity from Other Fuel (kWh) = SUM (StnryAssetEnrgyUse.Location-Based Electricity from Other Fuel (kWh))


-   **Location-Based Electricity from Geothermal (kWh) (LocBsdElectrFrGeothermalInKwh)**

    **Input Fields**

    The Stationary Asset Energy Use (Stationary Asset Energy Use (StnryAssetEnrgyUse) ) record where FuelType = Electricity.

    **Calculations**

    LocBsdElectrFrGeothermalInKwh = SUM (Stationary Asset Energy Use (StnryAssetEnrgyUse) .LocBsdElectrFrGeothermalInKwh)


-   **Location-Based Electricity from Other Fossil Fuel (kWh) (LocBsdElectrOthrFossilFuelKwh)**

    **Input Fields**

    The Stationary Asset Energy Use (StnryAssetEnrgyUse) record where FuelType = Electricity.

    **Calculations**

    Location-Based Electricity from Other Fossil Fuel (kWh) = SUM (StnryAssetEnrgyUse.Location-Based Electricity from Other Fossil Fuel (kWh))


-   **Maximum Variance Above Average Electricity Consumption (MaxVarianceAboveAvgElectrCnsmp)**

    **Input Fields**

    -   Average Monthly Electricity Consumption (kWh) (AvgMonthlyElectrCnsmpInKwh).

    -   The Stationary Asset Energy Use (StnryAssetEnrgyUse) records where FuelType = Electricity


    **Calculations**

    Maximum Variance Above Average Electricity Consumption = ABS \[MAX (StnryAssetEnrgyUse.Normalized Monthly Electricity Consumption (kWh)) - Average Monthly Electricity Consumption (kWh)\]/Average Monthly Electricity Consumption (kWh) × 100


-   **Maximum Variance Below Average Electricity Consumption (MaxVarianceBelowAvgElectrCnsmp)**

    **Input Fields**

    -   Average Monthly Electricity Consumption (kWh) (AvgMonthlyElectrCnsmpInKwh).

    -   The Stationary Asset Energy Use (StnryAssetEnrgyUse) record where FuelType = Electricity.


    **Calculations**

    Maximum Variance Below Average Electricity Consumption = ABS \[MIN (StnryAssetEnrgyUse.Normalized Monthly Electricity Consumption (kWh)) - Average Monthly Electricity Consumption (kWh)\]/Average Monthly Electricity Consumption (kWh) × 100


-   **Market-Based Electricity from Biomass (kWh) (MktBsdElectrFrBiomassInKwh)**

    **Input Fields**

    The Stationary Asset Energy Use (StnryAssetEnrgyUse) record where FuelType = Electricity.

    **Calculations**

    Market-Based Electricity from Biomass (kWh) = SUM (StnryAssetEnrgyUse.Market-Based Electricity from Biomass (kWh))


-   **Market-Based Electricity from Coal (kWh) (MktBsdElectrFrFromCoalInKwh)**

    **Input Fields**

    The Stationary Asset Energy Use (StnryAssetEnrgyUse) where FuelType = Electricity.

    **Calculations**

    Market-Based Electricity from Coal (kWh) = SUM (StnryAssetEnrgyUse.Market-Based Electricity from Coal (kWh))


-   **Market-Based Electricity from Gas (kWh) (MktBsdElectrFrGasInKwh)**

    **Input Fields**

    The Stationary Asset Energy Use (StnryAssetEnrgyUse) record where FuelType = Electricity.

    **Calculations**

    Market-Based Electricity from Gas (kWh) = SUM (StnryAssetEnrgyUse.Market-Based Electricity from Gas (kWh))


-   **Market-Based Electricity from Geothermal (kWh) (MktBsdElectrFrGeothermalInKwh)**

    **Input Fields**

    The Stationary Asset Energy Use (StnryAssetEnrgyUse) record where FuelType = Electricity.

    **Calculations**

    Market-Based Electricity from Geothermal (kWh) = SUM (StnryAssetEnrgyUse.Market-Based Electricity from Geothermal (kWh))


-   **Market-Based Electricity from Hydro (kWh) (MktBsdElectrFrHydroInKwh)**

    **Input Fields**

    The Stationary Asset Energy Use (StnryAssetEnrgyUse) record where FuelType = Electricity.

    **Calculations**

    Market-Based Electricity from Hydro (kWh) = SUM (StnryAssetEnrgyUse.Market-Based Electricity from Hydro (kWh))


-   **Market-Based Electricity from Nuclear (kWh) (MktBsdElectrFrNuclearInKwh)**

    **Input Fields**

    The Stationary Asset Energy Use (StnryAssetEnrgyUse) record where FuelType = Electricity.

    **Calculations**

    Market-Based Electricity from Nuclear (kWh) = SUM (StnryAssetEnrgyUse.Market-Based Electricity from Nuclear (kWh))


-   **Market-Based Electricity from Oil (kWh) (MktBsdElectrFrOilInKwh)**

    **Input Fields**

    The Stationary Asset Energy Use (StnryAssetEnrgyUse) record where FuelType = Electricity.

    **Calculations**

    Market-Based Electricity from Oil (kWh) = SUM (StnryAssetEnrgyUse.Market-Based Electricity from Oil (kWh))


-   **Market-Based Electricity from Other Fuel (kWh) (MktBsdElectrFrOthrFuelInKwh)**

    **Input Fields**

    The Stationary Asset Energy Use (StnryAssetEnrgyUse) record where FuelType = Electricity.

    **Calculations**

    Market-Based Electricity from Other Fuel (kWh) = SUM (StnryAssetEnrgyUse.Market-Based Electricity from Other Fuel (kWh))


-   **Market-Based Electricity from Solar (kWh) (MktBsdElectrFrSolarInKwh)**

    **Input Fields**

    The Stationary Asset Energy Use (StnryAssetEnrgyUse) record where FuelType = Electricity.

    **Calculations**

    Market-Based Electricity from Solar (kWh) = SUM (StnryAssetEnrgyUse.Market-Based Electricity from Solar (kWh))


-   **Market-Based Electricity from Wind (kWh) (MktBsdElectrFrWindInKwh)**

    **Input Fields**

    The Stationary Asset Energy Use (StnryAssetEnrgyUse) record where FuelType = Electricity.

    **Calculations**

    Market-Based Electricity from Wind (kWh) = SUM (StnryAssetEnrgyUse.Market-Based Electricity from Wind (kWh))


-   **Scope 3 Emissions from Capital Goods (tCO2e) (Scp3EmssnCptlGoods)**

    Input Fields

    The Stationary Asset Energy Use (StnryAssetEnrgyUse) records associated with this carbon footprint.

    Calculations

    Scope 3 Emissions from Capital Goods (tCO2e) = SUM (StnryAssetEnrgyUse.Scope 3 Upstream Emissions (tCO2e)) when StnryAssetEnrgyUse.Scope 3 GHG Category = “Scope 3 Capital Goods”

-   **Scope 3 Emissions from Downstream Leased Assets (tCO2e) (Scope3EmssnDnstrmLsdAst)**

    Input Fields

    The Stationary Asset Energy Use (StnryAssetEnrgyUse) records associated with this carbon footprint.

    Calculations

    Scope 3 Emissions from Downstream Leased Assets (tCO2e) = SUM (StnryAssetEnrgyUse.Scope 3 Downstream Emissions (tCO2e)) when StnryAssetEnrgyUse.Scope 3 GHG Category = “Scope 3 Downstream Leased Assets”

-   **Scope 3 Emissions from Employee Commute (tCO2e) (Scp3EmssnEmpCommute)**

    Input Fields

    The Stationary Asset Energy Use (StnryAssetEnrgyUse) records associated with this carbon footprint.

    Calculations

    Scope 3 Emissions from Employee Commute (tCO2e) = SUM (StnryAssetEnrgyUse.Scope 3 Upstream Emissions (tCO2e)) when StnryAssetEnrgyUse.Scope 3 GHG Category = “Scope 3 Employee Commuting”

-   **Scope 3 Emissions from End-Life Treatment of Sold Products (tCO2e) (Scp3EndLifeTreatSoldPrdct)**

    Input Fields

    The Stationary Asset Energy Use (StnryAssetEnrgyUse) records associated with this carbon footprint.

    Calculations

    Scope 3 Emissions from End-Life Treatment of Sold Products (tCO2e) = SUM (StnryAssetEnrgyUse.Scope 3 Downstream Emissions (tCO2e)) when StnryAssetEnrgyUse.Scope 3 GHG Category = “Scope 3 End-of-Life Treatment of Sold Products”

-   **Scope 3 Emissions from Franchises (tCO2e) (Scp3EmssnFranchises)**

    Input Fields

    The Stationary Asset Energy Use (StnryAssetEnrgyUse) records associated with this carbon footprint.

    Calculations

    Scope 3 Emissions from Franchises (tCO2e) = SUM (StnryAssetEnrgyUse.Scope 3 Downstream Emissions (tCO2e)) when StnryAssetEnrgyUse.Scope 3 GHG Category = “Scope 3 Franchises”

-   **Scope 3 Emissions from Fuel and Energy-Related Activities (tCO2e) (Scp3FuelEnrgyRelaActv)**

    Input Fields

    -   The Stationary Asset Energy Use (StnryAssetEnrgyUse) records associated with this carbon footprint

    -   Scope 3 Emissions from Fuel and Energy-Related Activity (tCO2e) (Scp3EmssnFuelEnrgy)

    Calculations

    Scope 3 Emissions from Fuel and Energy-Related Activities (tCO2e) = (SUM (StnryAssetEnrgyUse.Scope 3 Upstream Emissions (tCO2e)) when StnryAssetEnrgyUse.Scope 3 GHG Category = “Scope 3 Fuel and Energy-Related Activities”) + SUM (StnryAssetEnrgyUse.Scope 3 Emissions from Fuel and Energy-Related Activity (tCO2e))

-   **Scope 3 Emissions from Investments (tCO2e) (Scp3EmssnInvestments)**

    Input Fields

    The Stationary Asset Energy Use (StnryAssetEnrgyUse) records associated with this carbon footprint.

    Calculations

    Scope 3 Emissions from Investments (tCO2e) = SUM (StnryAssetEnrgyUse.Scope 3 Downstream Emissions (tCO2e)) when StnryAssetEnrgyUse.Scope 3 GHG Category = “Scope 3 Investments”

-   **Scope 3 Emissions from Processing Sold Products (tCO2e) (Scp3EmssnProcSoldPrdct)**

    Input Fields

    The Stationary Asset Energy Use (StnryAssetEnrgyUse) records associated with this carbon footprint.

    Calculations

    Scope 3 Emissions from Processing Sold Products (tCO2e) = SUM (StnryAssetEnrgyUse.Scope 3 Downstream Emissions (tCO2e)) when StnryAssetEnrgyUse.Scope 3 GHG Category = “Scope 3 Processing Sold Products”

-   **Scope 3 Emissions from Purchased Goods Services (tCO2e) (Scp3EmssnPurchGoodsSrvcs)**

    Input Fields

    The Stationary Asset Energy Use (StnryAssetEnrgyUse) records associated with this carbon footprint.

    Calculations

    Scope 3 Emissions from Purchased Goods Services (tCO2e) = SUM (StnryAssetEnrgyUse.Scope 3 Upstream Emissions (tCO2e)) when StnryAssetEnrgyUse.Scope 3 GHG Category = “Scope 3 Purchased Goods and Services”

-   **Scope 3 Emissions from Upstream Leased Assets (tCO2e) (Scp3EmssnUpstrmLsdAst)**

    Input Fields

    The Stationary Asset Energy Use (StnryAssetEnrgyUse) records associated with this carbon footprint.

    Calculations

    Scope 3 Emissions from Upstream Leased Assets (tCO2e) = SUM (StnryAssetEnrgyUse.Scope 3 Upstream Emissions (tCO2e)) when StnryAssetEnrgyUse.Scope 3 GHG Category = “Scope 3 Upstream Leased Assets”

-   **Scope 3 Emissions from Use of Sold Products (tCO2e) (Scp3EmssnUseOfSoldPrdct)**

    Input Fields

    The Stationary Asset Energy Use (StnryAssetEnrgyUse) records associated with this carbon footprint.

    Calculations

    Scope 3 Emissions from Use of Sold Products (tCO2e) = SUM (StnryAssetEnrgyUse.Scope 3 Downstream Emissions (tCO2e)) when StnryAssetEnrgyUse.Scope 3 GHG Category = “Scope 3 Use of Sold Products”

-   **Scope 3 Emissions from Waste Generated in Operations (tCO2e) (Scp3EmssnWstGenInOper)**

    Input Fields

    The Stationary Asset Energy Use (StnryAssetEnrgyUse) records associated with this carbon footprint.

    Calculations

    Scope 3 Emissions from Waste Generated in Operations (tCO2e)  = SUM (StnryAssetEnrgyUse.Scope 3 Upstream Emissions (tCO2e)) when StnryAssetEnrgyUse.Scope 3 GHG Category = “Scope 3 Waste Generated in Operations”

-   **Scope 3 Uncategorized Emissions (tCO2e) (Scp3UncategorizedEmssn)**

    Input Fields

    The Stationary Asset Energy Use (StnryAssetEnrgyUse) records associated with this carbon footprint.

    Calculations

    Scope 3 Uncategorized Emissions (tCO2e) = SUM (StnryAssetEnrgyUse.Scope 3 Downstream Emissions (tCO2e)) + SUM (StnryAssetEnrgyUse.Scope 3 Upstream Emissions (tCO2e)) when

    -   StnryAssetEnrgyUse.Scope 3 GHG Category = “Scope 3 Upstream Emissions”
    -   StnryAssetEnrgyUse.Scope 3 GHG Category = “Scope 3 Downstream Emissions”
    -   StnryAssetEnrgyUse.Scope 3 Downstream Emissions (tCO2e) != null but StnryAssetEnrgyUse.Scope 3 GHG Category != “Scope 3 Downstream Emissions” (Using supplemental value on StnryAssetEnrgyUse)
    -   StnryAssetEnrgyUse.Scope 3 Upstream Emissions (tCO2e) != null but StnryAssetEnrgyUse.Scope 3 GHG Category != “Scope 3 Upstream Emissions” (Using supplemental value on StnryAssetEnrgyUse)


-   **Market-Based Electricity from Other Fossil Fuel (kWh) (MktBsdElectrOthrFossilFuelKwh)**

    **Input Fields**

    The Stationary Asset Energy Use (StnryAssetEnrgyUse) record where FuelType = Electricity.

    **Calculations**

    Market-Based Electricity from Other Fossil Fuel (kWh) = SUM (StnryAssetEnrgyUse.Market-Based Electricity from Other Fossil Fuel (kWh))


-   **Total Renewable Energy (kWh) (TotalRenewableEnergyInKwh)**

    **Input Fields**

    The Stationary Asset Energy Use (StnryAssetEnrgyUse) record where FuelType = Electricity.

    **Calculations**

    Total Renewable Energy (kWh) = SUM (StnryAssetEnrgyUse.Total Renewable Energy (kWh))


-   **Total Renewable Energy Percentage (TotalRenewableEnergyPct)**

    **Input Fields**

    -   Total Renewable Energy (kWh) (TotalRenewableEnergyInKwh).

    -   The Stationary Asset Carbon Footprint Item (StnryAssetCrbnFtprntItm) record where FuelType = Electricity.


    **Calculations**

    Total Renewable Energy Percentage = Total Renewable Energy (kWh)/StnryAssetCrbnFtprntItm.Total Energy Consumption (kWh) × 100


-   **Total Scope 3 Downstream Emissions (tCO2e) (TotalScp3DnstrmEmissions)**

    **Input Fields**

    -   The Stationary Asset Energy Use (StnryAssetEnrgyUse) record where FuelType = Electricity.

    -   Supplemental Scope 3 Downstream Emissions (SuplScope3DnstrmEmissions).


    **Calculations**

    Total Scope 3 Downstream Emissions (tCO2e) = SUM (StnryAssetEnrgyUse.Scope 3 Downstream Emissions (tCO2e)) + Supplemental Scope 3 Downstream Emissions


-   **Total Scope 3 Upstream Emissions (tCO2e) (TotalScp3UpstrmEmissions)**

    **Input Fields**

    -   The Stationary Asset Energy Use (StnryAssetEnrgyUse) record where FuelType = Electricity.
    -   Supplemental Scope 3 Upstream Emissions (SuplScope3UpstrmEmissions)
    -   Stationary Asset Energy Use (StnryAssetEnrgyUse)
        -   Scope 3 Emissions from Fuel and Energy-Related Activity (tCO2e) (Scp3EmssnFuelEnrgy)
        -   Scope 3 Market-Based Emissions from Fuel and Energy-Related Activity (tCO2e) (Scp3MktEmssnFuelEnrgy)
    -   Annual Emissions Inventory (AnnualEmssnInventory)
        -   Scope 3 Emissions Type (Scope3EmissionsType)

    **Calculations**

    Total Scope 3 Upstream Emissions (tCO2e) = SUM (StnryAssetEnrgyUse.Scope 3 Upstream Emissions (tCO2e)) + SUM ((StnryAssetEnrgyUse.Scope 3 Emissions from Fuel and Energy-Related Activity (tCO2e) OR StnryAssetEnrgyUse.Scope 3 Market-Based Emissions from Fuel and Energy-Related Activity (tCO2e)) depending on respective AnnualEmssnInventory.Scope 3 Emissions Type if present (default is location-based)) + Supplemental Scope 3 Upstream Emissions


-   **Scope 3 Market-Based Emissions from Fuel and Energy-Related Activity (tCO2e) (Scp3MktEmssnFuelEnrgy)**

    **Input Fields**

    -   The Stationary Asset Carbon Footprint Item (StnryAssetCrbnFtprntItm) records (all fuel types)
        -   Scope 3 Market-Based Emissions from Fuel and Energy-Related Activity (tCO2e) (Scp3MktEmssnFuelEnrgy)
        -   Scope 3 Upstream Emissions (tCO2e) (Scope3UpstrmEmissionsInTco2e)
        -   Scope 3 GHG Category (Scope3GhgCategory)

    **Calculations**

    Scp3MktEmssnFuelEnrgy = SUM (StnryAssetEnrgyUse.Scope 3 Market-Based Emissions from Fuel and Energy-Related Activity) + SUM (StnryAssetEnrgyUse.Scope 3 Upstream Emissions (tCO2e) when StnryAssetEnrgyUse.Scope 3 GHG Category = “Scope 3 Fuel and Energy-Related Activities”)


-   **Total Energy Consumption (GJ) (TotEnergyConsumptionInGj)**

    **Input Fields**

    The Stationary Asset Carbon Footprint Item (StnryAssetCrbnFtprntItm) records (all fuel types).

    **Calculations**

    Total Energy Consumption (GJ) = SUM (StnryAssetCrbnFtprntItm.Total Energy Consumption (GJ)) where FuelType = All Fuel Types


-   **Total Energy Consumption (kWh) (TotEnergyConsumptionInKwh)**

    **Input Fields**

    The Stationary Asset Carbon Footprint Item (StnryAssetCrbnFtprntItm) records (all fuel types).

    **Calculations**

    Total Energy Consumption (kWh) = SUM (StnryAssetCrbnFtprntItm.Total Energy Consumption (kWh)) where FuelType = All Fuel Types


-   **Total Energy Consumption (MWh) (TotEnergyConsumptionInMwh)**

    **Input Fields**

    Total Energy Consumption (kWh) (TotEnergyConsumptionInKwh)

    **Calculations**

    Total Energy Consumption (MWh) = Total Energy Consumption (kWh)/1000


-   **Total Renewable Energy Excluding Hydro (kWh) (TotRnwlEnrgyExclHydroInKwh)**

    **Input Fields**

    The Stationary Asset Energy Use (StnryAssetEnrgyUse) record where FuelType = Electricity.

    **Calculations**

    Total Renewable Energy Excluding Hydro (kWh) = SUM (StnryAssetEnrgyUse.Market-Based Electricity from Biomass (kWh) + StnryAssetEnrgyUse.Market-Based Electricity from Solar (kWh) + StnryAssetEnrgyUse.Market-Based Electricity from Wind (kWh) + StnryAssetEnrgyUse.Market-Based Electricity from Geothermal (kWh))


-   **Total Renewable Energy Percentage Excluding Hydro (TotRnwlEnrgyExclHydroPct)**

    **Input Fields**

    -   Total Renewable Energy Excluding Hydro (kWh) (TotRnwlEnrgyExclHydroInKwh)

    -   The StnryAssetCrbnFtprntItm record where FuelType = Electricity.


    **Calculations**

    Total Renewable Energy Percentage Excluding Hydro = Total Renewable Energy Excluding Hydro (kWh)/StnryAssetCrbnFtprntItm.Total Energy Consumption (kWh) × 100


-   **Total Scope 1 Emissions (tCO2e) (TotScope1EmissionsInTco2e)**

    **Input Fields**

    -   The Stationary Asset Energy Use (StnryAssetEnrgyUse) record where FuelType = Electricity.

    -   Supplemental Scope 1 Emissions (SuplScope1Emissions).


    **Calculations**

    Total Scope 1 Emissions (tCO2e) = SUM (StnryAssetEnrgyUse.Scope 1 Emissions (tCO2e)) + Supplemental Scope 1 Emissions


-   **Total Scope 2 Location-Based Emissions (TotScope2LocBasedEmissions)**

    **Input Fields**

    -   The Stationary Asset Energy Use (StnryAssetEnrgyUse) record where FuelType = Electricity.

    -   Supplemental Scope 2 Location-Based Emissions (SuplScope2LocationBasedEmssn).


    **Calculations**

    Total Scope 2 Location-Based Emissions = SUM (StnryAssetEnrgyUse.Scope 2 Location-Based Emissions (tCO2e)) + Supplemental Scope 2 Location-Based Emissions


-   **Total Scope 2 Market-Based Emissions (TotScope2MktBasedEmissions)**

    **Input Fields**

    -   The Stationary Asset Energy Use (StnryAssetEnrgyUse) record where FuelType = Electricity.

    -   Supplemental Scope 2 Market-Based Emissions (SuplScope2MarketBasedEmssn).


    **Calculations**

    Total Scope 2 Market-Based Emissions = SUM (StnryAssetEnrgyUse.Scope 2 Market-Based Emissions (tCO2e)) + Total Scope 2 Market-Based Emissions


-   **Year over Year Power Usage Effectiveness Variance Percentage (YearOverYearPueVariancePct)**

    **Input Fields**

    Average Data Center Power Usage Effectiveness (AvgDataCenterPue)

    **Calculations**

    Year over Year Power Usage Effectiveness Variance Percentage = (( Average Data Center Power Usage Effectiveness - previous year(Average Data Center Power Usage Effectiveness)/previous year.Average Data Center Power Usage Effectiveness) × 100


-   **Total Building Indirect Energy Consumption (MWh) (TotBldgIndirectEnrgyCnsmpInMwh)**

    **Input Fields**

    The Stationary Asset Carbon Footprint Item (StnryAssetCrbnFtprntItm) record where FuelType = Electricity, Steam, Heat, or Cooling.

    **Calculations**

    Total Building Indirect Energy Consumption (MWh) = SUM (StnryAssetCrbnFtprntItm.Total Energy Consumption (kWh)) where StnryAssetCrbnFtprntItm.Fuel Type = “Electricity”, “Steam”, “Heat”, or “Cooling”/1000


-   **Regional Energy Consumption Intensity (kBtu/sqft) (RgnlEnrgyCnsmpIntensity)**

    **Input Fields**

    Regional Electricity Consumption Intensity (kWh/sqft) (RegionalBldgEnergyIntensity)

    The Building Energy Intensity (BldgEnrgyIntensity) record.

    **Calculations**

    Regional Energy Consumption Intensity (kBtu/sqft) = BldgEnrgyIntensity.Annual Energy Intensity (kWh/sqft) converted to kBtu/sqft


-   **Regional Electricity Consumption Intensity (kWh/sqft) (RgnlElectrCnsmpIntensity)**

    **Input Fields**

    Regional Building Energy Intensity (RegionalBldgEnergyIntensity

    The Building Energy Intensity Value (BldgEnrgyIntensityVal) record.

    **Calculations**

    Regional Electricity Consumption Intensity (kWh/sqft) = BldgEnrgyIntensityVal.Annual Intensity Value (kWh/sqft)


-   **[Stationary Asset Carbon Footprint Item](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_calc_data_center_facility.htm)**
    The Stationary Asset Carbon Footprint Item object represents the total tCO₂e emissions of individual fuel types, which are the child records of the stationary asset carbon footprint record. These are automatically generated after a stationary asset carbon footprint is associated with energy use records.

## Related Topics

- Stationary Asset Carbon Footprint Item (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_calc_data_center_facility.htm)

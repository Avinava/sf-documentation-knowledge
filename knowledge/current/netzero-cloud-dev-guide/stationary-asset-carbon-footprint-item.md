---
title: "Stationary Asset Carbon Footprint Item"
domain: netzero-cloud-dev-guide
topic: stationary-asset-carbon-footprint-item
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:57.576Z
estimatedTokens: 1246
keywords: [Stationary, Asset, Carbon, Footprint, Item, total, tCO₂e, emissions, individual, fuel, child, records, record, automatically, generated]
---

# Stationary Asset Carbon Footprint Item

> The Stationary Asset Carbon Footprint Item object represents the total tCO₂e emissions
    of individual fuel types, which are the child records of the stationary asset carbon footprint
    record. These are automatically generated after a stationary asset carbon footprint is
    associated with energy use records.

# Stationary Asset Carbon Footprint Item

The Stationary Asset Carbon Footprint Item object represents the total tCO₂e emissions of individual fuel types, which are the child records of the stationary asset carbon footprint record. These are automatically generated after a stationary asset carbon footprint is associated with energy use records.

If the record type of the stationary asset environmental source is Data Center and the fuel type is Electricity, then two stationary asset carbon footprint item records are created.

-   One is for fuel type IT Electricity, which doesn't include the power usage effectiveness factor, so it only represents the electricity consumption from IT equipment.
-   The other is for fuel type Electricity, which includes the power usage effectiveness factor, thus accounting for the total electricity consumption, including non-IT equipment.

Here are the calculated fields:

-   **Annual Electricity Intensity Variance Percentage (AnnlElectrIntensityVarPct)**

    **Input Fields**

    -   Previous Year Annual Energy Consumption Intensity (kWh/m2) (PrevYrEnrgyIntensityKwhM2)

    -   Energy Consumption Intensity (kWh/m2) (EnrgyCnsmpIntensityInKwhM2)


    **Calculations**

    If Previous Year Annual Energy Consumption Intensity (kWh/m2) isn’t NULL, then Annual Electricity Intensity Variance Percentage = (Energy Consumption Intensity (kWh/m2) - Previous Year Annual Energy Consumption Intensity (kWh/m2))/Previous Year Annual Energy Consumption Intensity (kWh/m2)


-   **Energy Consumption Intensity (kWh/m2) (EnrgyCnsmpIntensityInKwhM2)**

    **Input Fields**

    -   All Stationary Asset Energy Use (StnryAssetEnrgyUse) records.

        -   Occupied Floor Area (sqft) (OccupiedFloorAreaInSqft)
    -   Total Energy Consumption (kWh) (TotalEnergyConsumptionInKwh).


    **Calculations**

    Energy Consumption Intensity (kWh/m2) = Total Energy Consumption (kWh)/(StnryAssetEnrgyUse.Occupied Floor Area (sqft)/10.7639)


-   **Energy Consumption Intensity (kWh/sqft) (EnrgyCnsmpIntensityInKwhSqft)**

    **Input Fields**

    -   All StnryAssetEnrgyUse records for the related fuel type.

    -   Total Energy Consumption (kWh) (TotalEnergyConsumptionInKwh).


    **Calculations**

    Energy Consumption Intensity (kWh/sqft) = Total Energy Consumption (kWh)/StnryAssetEnrgyUse.Occupied Floor Area (sqft)


-   **Total Energy Consumption (GJ) (TotalEnergyConsumptionInGj)**

    **Input Fields**

    Total Energy Consumption (kWh) (TotalEnergyConsumptionInKwh)

    **Calculations**

    For a fuel type, Total Energy Consumption (GJ) = Total Energy Consumption (kWh) × 0.0036.


-   **Total Energy Consumption (kWh) (TotalEnergyConsumptionInKwh)**

    **Input Fields**

    All StnryAssetEnrgyUse records for the related fuel type.

    **Calculations**

    For a fuel type, Total Energy Consumption (kWh) = SUM (StnryAssetEnrgyUse.Total Fuel Consumption (kWh)).

    For fuel type = ITElectricity, Total Energy Consumption (kWh) = SUM (StnryAssetEnrgyUse.Fuel Consumption (kWh)).


-   **Total Emissions (tCO2e) (TotalEmissionsInTco2e)**

    **Input Fields**

    -   All StnryAssetEnrgyUse records for the related fuel type.
        -   Scope 1 Emissions (tCO2e) (Scope1EmissionsInTco2e)
        -   Scope 2 Location-Based Emissions (tCO2e) (Scope2LocBasedEmssnInTco2e)
        -   Scope 3 Downstream Emissions (tCO2e) (Scope3DnstrmEmissionsInTco2e)
        -   Scope 3 Upstream Emissions (tCO2e) (Scope3UpstrmEmissionsInTco2e)
        -   Scope 3 Emissions from Fuel and Energy-Related Activity (tCO2e) (Scp3EmssnFuelEnrgy)

    **Calculations**

    Total Emissions (tCO2e) = SUM (StnryAssetEnrgyUse.Scope 1 Emissions (tCO2e) + StnryAssetEnrgyUse.Scope 2 Location-Based Emissions (tCO2e) + StnryAssetEnrgyUse.Scope 3 Downstream Emissions (tCO2e) + StnryAssetEnrgyUse.Scope 3 Upstream Emissions (tCO2e)) + SUM (StnryAssetEnrgyUse.Scope 3 Emissions from Fuel and Energy-Related Activity (tCO2e))


-   **Total Emissions Using Market-Based Method (tCO2e) (TotEmssnUseMktBsdMthd)**

    **Input Fields**

    -   All Stationary Asset Energy Use (StnryAssetEnrgyUse) records for the related fuel type
        -   Scope 1 Emissions (tCO2e) (Scope1EmissionsInTco2e)
        -   Scope 2 Market-Based Emissions (tCO2e) (Scope2MktBasedEmssnInTco2e)
        -   Scope 3 Downstream Emissions (tCO2e) (Scope3DnstrmEmissionsInTco2e)
        -   Scope 3 Upstream Emissions (tCO2e) (Scope3UpstrmEmissionsInTco2e)
        -   Scope 3 Market-Based Emissions from Fuel and Energy-Related Activity (tCO2e) (Scp3MktEmssnFuelEnrgy)

    **Calculations**

    Total Emissions Using Market-Based Method (tCO2e) = SUM (StnryAssetEnrgyUse.Scope 1 Emissions (tCO2e) + StnryAssetEnrgyUse.Scope 2 Market-Based Emissions (tCO2e) + StnryAssetEnrgyUse.Scope 3 Downstream Emissions (tCO2e) + StnryAssetEnrgyUse.Scope 3 Upstream Emissions (tCO2e)) + SUM (StnryAssetEnrgyUse.Scope 3 Market-Based Emissions from Fuel and Energy-Related Activity (tCO2e))

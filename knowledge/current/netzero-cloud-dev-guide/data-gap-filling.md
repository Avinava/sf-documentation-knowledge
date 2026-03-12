---
title: "Data Gap Filling"
domain: netzero-cloud-dev-guide
topic: data-gap-filling
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:57.580Z
estimatedTokens: 464
keywords: [Data, Gap, Filling, locate, sources, gaps, carbon, footprint, record, resolve]
---

# Data Gap Filling

> You can locate the sources of gaps in carbon footprint record data and resolve
  them.

# Data Gap Filling

You can locate the sources of gaps in carbon footprint record data and resolve them.

Here are the calculated fields:

Input fields

-   Building Energy Intensity Value (BldgEnrgyIntensityVal)

    -   Annual Intensity Value (kWh/m2) (AnnualIntensityValueInKwhM2)

-   Stationary Asset Carbon Footprint (StnryAssetCrbnFtprnt)

    -   Regional Building Energy Intensity (RegionalBldgEnergyIntensity)

    -   Building Energy Intensity (BuildingEnergyIntensity)

    -   Occupied Floor Area (OccupiedFloorArea)

-   Stationary Asset Energy Use (StnryAssetEnrgyUse)

    -   Total Fuel Consumption (kWh) (TotalFuelConsumptionInKwh)

    -   Start Date (StartDate)

    -   End Date (EndDate)


Calculations

-   If Fill Method = Regional Building Energy Intensity, then

    Fill Data = StnryAssetCrbnFtprnt.RegionalBldgEnergyIntensity.BldgEnrgyIntensityVal (for the fuel type).Annual Intensity Value (kWh/m2) \* Occupied Floor Area/365 \* data gap duration

-   If Fill Method = Building Energy Intensity, then

    Fill Data = StnryAssetCrbnFtprnt.BuildingEnergyIntensity.BldgEnrgyIntensityVal (for the fuel type).Annual Intensity Value (kWh/m2) \* Occupied Floor Area/365 \* data gap duration

-   If Fill Method = Previous Year Daily Average, then

    Fill Data = SUM(StnryAssetCrbnFtprnt.PrevYrAnnlCarbonFootprint.StnryAssetEnrgyUse.Total Fuel Consumption (kWh)) / SUM(StnryAssetCrbnFtprnt.PrevYrAnnlCarbonFootprint.StnryAssetEnrgyUse.End Date - StnryAssetCrbnFtprnt.PrevYrAnnlCarbonFootprint.StnryAssetEnrgyUse.Start Date) for the selected fuel type

-   If Fill Method = Current Year Daily Average, then

    Fill Data = SUM(StnryAssetCrbnFtprnt.StnryAssetEnrgyUse.Total Fuel Consumption (kWh)) / SUM(StnryAssetCrbnFtprnt.StnryAssetEnrgyUse.End Date - StnryAssetCrbnFtprnt.StnryAssetEnrgyUse.Start Date) for the selected fuel type

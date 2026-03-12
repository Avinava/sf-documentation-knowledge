---
title: "Building Energy Intensity"
domain: netzero-cloud-dev-guide
topic: building-energy-intensity
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:57.519Z
estimatedTokens: 765
keywords: [Building, Energy, Intensity, BEI, average, fuel, across, buildings, derive, data, published, sources, records, source, setting]
---

# Building Energy Intensity

> The
    Building Energy Intensity (BEI) object represents the average energy intensity by fuel type
    across a set of buildings. You can derive this data from published sources or by using energy
    use records as the data source and then setting up a window of time with some characteristics of
    the building size and type.

# Building Energy Intensity

The Building Energy Intensity (BEI) object represents the average energy intensity by fuel type across a set of buildings. You can derive this data from published sources or by using energy use records as the data source and then setting up a window of time with some characteristics of the building size and type.

Here are the calculated fields:

Input fields:

-   Stationary Asset Energy Use (StnryAssetEnrgyUse)

    -   Start Date (StartDate)

    -   End Date (EndDate)

    -   Total Fuel Consumption (kWh) (TotalFuelConsumptionInKwh)

    -   Occupied Floor Area (sqft) (OccupiedFloorAreaInSqft)

    -   Fuel Type (FuelType)

-   Building Energy Intensity (BldgEnrgyIntensity)

    -   Averaging Window Start Date (AveragingWindowStartDate)

    -   Averaging Window End Date (AveragingWindowEndDate)


Output fields:

-   Building Energy Intensity (BldgEnrgyIntensity)

    -   Annual Energy Intensity (kWh/sqft) (AnnualEnergyIntensityInKwhSqft)

    -   Annual Energy Intensity (kWh/m2) (AnnualEnergyIntensityInKwhM2)

-   Building Energy Intensity Value (BldgEnrgyIntensityVal)

    -   Annual Intensity Value (kWh/sqft) (AnnualIntensityValueInKwhSqft)

    -   Annual Intensity Value (kWh/m2) (AnnualIntensityValueInKwhM2)


Calculations

-   For each Stationary Asset Energy Use

    -   Number of days inside window = Input End Date - Input Start Date

        Where:

        -   Input Start Date = If(StnryAssetEnrgyUse.Start Date > BldgEnrgyIntensity.Averaging Window Start Date, StnryAssetEnrgyUse.Start Date, BldgEnrgyIntensity.Averaging Window Start Date)

        -   Input End Date = If(StnryAssetEnrgyUse.End Date < BldgEnrgyIntensity.Averaging Window End Date, StnryAssetEnrgyUse.End Date, BldgEnrgyIntensity.Averaging Window End Date)

    -   Reported days = StnryAssetEnrgyUse.End Date - StnryAssetEnrgyUse.Start Date

    -   Intensity per sqft (kWh/sqft) = StnryAssetEnrgyUse.Total Fuel Consumption In Kwh / StnryAssetEnrgyUse.Occupied Floor Area In Sqft

    -   Intensity per sqft per day (kWh/sqft/day) = Intensity per sqft / Reported days

    -   Intensity per sqft inside window (kWh/sqft) = Intensity per sqft per day \* Number of days inside window

-   For each Fuel Type
    -   Total Energy Intensity (kWh/sqft) = SUM(Intensity per sqft inside window (kWh/sqft))

    -   Total Days = SUM(Number of days inside window)

-   For each Fuel Type
    -   Total Energy Intensity per Day (kWh/sqft/day) = Total Energy Intensity (kWh/sqft) / Total Days

    -   BldgEnrgyIntensityVal.Annual Intensity Value (kWh/sqft) = Total Energy Intensity per Day (kWh/sqft/day) \* 365

    -   BldgEnrgyIntensityVal.Annual Intensity Value (kWh/m2) = BldgEnrgyIntensityVal.Annual Intensity Value (kWh/sqft) \* 0.092903

-   For Building Energy Intensity
    -   BldgEnrgyIntensity.Annual Intensity Value (kWh/sqft) = SUM(BldgEnrgyIntensityVal.Annual Intensity Value (kWh/sqft))

    -   BldgEnrgyIntensity.Annual Intensity Value (kWh/m2) = BldgEnrgyIntensityVal.Annual Intensity Value (kWh/sqft) \* 0.092903

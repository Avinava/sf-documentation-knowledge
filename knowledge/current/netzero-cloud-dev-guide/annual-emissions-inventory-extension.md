---
title: "Annual Emissions Inventory Extension"
domain: netzero-cloud-dev-guide
topic: annual-emissions-inventory-extension
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:57.512Z
estimatedTokens: 599
keywords: [Annual, Emissions, Inventory, Extension, additional, company's, total, carbon, particular, year, metric, tonnes, CO2e, tCO2e]
---

# Annual Emissions Inventory Extension

> The Annual Emissions Inventory object represents additional information about a
        company's total carbon emissions for a particular year in metric tonnes of CO2e
        (tCO2e).

# Annual Emissions Inventory Extension

The Annual Emissions Inventory object represents additional information about a company's total carbon emissions for a particular year in metric tonnes of CO2e (tCO2e).

Here are the calculated fields:

-   **Allocated Scope 3 Emissions from Fuel and Energy-Related Activity (tCO2e) (AllocScp3EmssnFuelEnrgyActvty)**

    Input Fields

    -   Vehicle Asset Carbon Footprint (VehicleAssetCarbonFootprint)
        -   Scope 3 Emissions from Fuel and Energy-Related Activity (tCO2e) (Scp3EmssnFuelEnrgy)
    -   Stationary Asset Carbon Footprint (StnryAssetCrbnFtprnt)
        -   Scope 3 Emissions from Fuel and Energy-Related Activities (tCO2e) (Scp3FuelEnrgyRelaActv)
    -   Scope 3 Carbon Footprint (Scope3CrbnFtprnt)
        -   Scope 3 Emissions from Fuel and Energy-Related Activity (tCO2e) (Scp3EmssnFuelEnergyActivity)

    Calculations

    Allocated Scope 3 Emissions from Fuel and Energy-Related Activity (tCO2e) = SUM(Scope3CrbnFtprnt.Scope 3 Emissions from Fuel and Energy-Related Activity (tCO2e)) + SUM(VehicleAssetCrbnFtprnt.Scope 3 Emissions from Fuel and Energy-Related Activity (tCO2e)) + SUM(StnryAssetCrbnFtprnt.Scope 3 Emissions from Fuel and Energy-Related Activities (tCO2e))

-   **Allocated Scope 3 Market-Based Emissions from Fuel and Energy-Related Activity (tCO2e) (AllocScp3MktEmssnFuelEnrgy)**

    Input Fields

    -   Scope 3 Emissions from Fuel and Energy-Related Activity Override (tCO2e) (Scp3EmssnFuelEnrgyActvtyOvride)
    -   Vehicle Asset Carbon Footprint (VehicleAssetCarbonFootprint)
        -   Scope 3 Emissions from Fuel and Energy-Related Activity (tCO2e) (Scp3EmssnFuelEnrgy)
    -   Stationary Asset Carbon Footprint (StnryAssetCrbnFtprnt)
        -   Scope 3 Market-Based Emissions from Fuel and Energy-Related Activity (tCO2e) (Scp3MktEmssnFuelEnrgy)
    -   Scope 3 Carbon Footprint (Scope3CrbnFtprnt)
        -   Scope 3 Emissions from Fuel and Energy-Related Activity (tCO2e) (Scp3EmssnFuelEnergyActivity)

    Calculations

    Allocated Scope 3 Market-Based Emissions from Fuel and Energy-Related Activity (tCO2e) = SUM(Scope3CrbnFtprnt.Scope 3 Emissions from Fuel and Energy-Related Activity (tCO2e)) + SUM(VehicleAssetCrbnFtprnt.Scope 3 Emissions from Fuel and Energy-Related Activity (tCO2e)) + SUM(StnryAssetCrbnFtprnt.Scope 3 Market-Based Emissions from Fuel and Energy-Related Activity (tCO2e))

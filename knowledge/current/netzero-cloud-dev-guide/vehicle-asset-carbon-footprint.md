---
title: "Vehicle Asset Carbon Footprint"
domain: netzero-cloud-dev-guide
topic: vehicle-asset-carbon-footprint
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:57.810Z
estimatedTokens: 1973
keywords: [Vehicle, Asset, Carbon, Footprint, total, emissions, vehicles, quantifies, effect, atmospheric, warming, represented, metric, tonnes, dioxide]
---

# Vehicle Asset Carbon Footprint

> The Vehicle Asset Carbon Footprint object represents the total carbon emissions from
    vehicles. Carbon footprint quantifies the effect of atmospheric warming, which is represented in
    metric tonnes of carbon dioxide equivalent (tCO₂e).

# Vehicle Asset Carbon Footprint

The Vehicle Asset Carbon Footprint object represents the total carbon emissions from vehicles. Carbon footprint quantifies the effect of atmospheric warming, which is represented in metric tonnes of carbon dioxide equivalent (tCO₂e).

Here are the calculated fields:

-   **Carbon Inventory Record Count (CarbonInventoryRecordCount )**

    **Input Fields**

    The Vehicle Asset Energy Use (VehicleAssetEnrgyUse) records associated with this carbon footprint.

    **Calculations**

    Carbon Inventory Record Count = COUNT (all VehicleAssetEnrgyUse records associated with this carbon footprint).


-   **Scope 3 Emissions from Business Travel (tCO2e) (Scp3EmssnBusTravl)**

    Input Fields

    The Vehicle Asset Energy Use (VehicleAssetEnrgyUse) records associated with this carbon footprint.

    Calculations

    Scope 3 Emissions from Business Travel (tCO2e) = SUM ( VehicleAssetEnrgyUse.Scope 3 Upstream Emissions (tCO2e)) when VehicleAssetEnrgyUse.Scope 3 GHG Category = “Business Travel“

-   **Scope 3 Emissions from Downstream Leased Assets (tCO2e) (Scp3EmssnDnstrmLsdAst)**

    Input Fields

    The Vehicle Asset Energy Use (VehicleAssetEnrgyUse) records associated with this carbon footprint.

    Calculations

    Scope 3 Emissions from Downstream Leased Assets (tCO2e) = SUM ( VehicleAssetEnrgyUse.Scope 3 Downstream Emissions (tCO2e)) when VehicleAssetEnrgyUse.Scope 3 GHG Category = “Downstream Leased Asset“

-   **Scope 3 Emissions from Employee Commute (tCO2e) (Scp3EmssnEmpComut)**

    Input Fields

    The Vehicle Asset Energy Use (VehicleAssetEnrgyUse) records associated with this carbon footprint.

    Calculations

    Scope 3 Emissions from Employee Commute (tCO2e) = SUM ( VehicleAssetEnrgyUse.Scope 3 Upstream Emissions (tCO2e)) when VehicleAssetEnrgyUse.Scope 3 GHG Category = “Employee Commuting“

-   **Scope 3 Emissions from Upstream Transportation and Distribution (tCO2e) (Scp3EmssnUpstrmTrnspDstr)**

    Input Fields

    The Vehicle Asset Energy Use (VehicleAssetEnrgyUse) records associated with this carbon footprint.

    Calculations

    Scope 3 Emissions from Upstream Transportation and Distribution (tCO2e) = SUM ( VehicleAssetEnrgyUse.Scope 3 Upstream Emissions (tCO2e)) when VehicleAssetEnrgyUse.Scope 3 GHG Category = “Upstream Transportation and Distribution“

-   **Scope 3 Emissions from Downstream Transportation and Distribution (tCO2e) (Scp3EmssnDnstrmTrnspDstr)**

    Input Fields

    The Vehicle Asset Energy Use (VehicleAssetEnrgyUse) records associated with this carbon footprint.

    Calculations

    Scope 3 Emissions from Downstream Transportation and Distribution (tCO2e) = SUM ( VehicleAssetEnrgyUse.Scope 3 Downstream Emissions (tCO2e)) when VehicleAssetEnrgyUse.Scope 3 GHG Category = “Downstream Transportation and Distribution“

-   **Scope 3 Uncategorized Emissions (tCO2e) (Scp3UncategorizedEmssn)**

    Input Fields

    The Vehicle Asset Energy Use (VehicleAssetEnrgyUse) records associated with this carbon footprint.

    Calculations

    Scope 3 Emissions from Downstream Transportation and Distribution (tCO2e) = SUM ( VehicleAssetEnrgyUse.Scope 3 Downstream Emissions (tCO2e)) + SUM(VehicleAssetEnrgyUse.Scope 3 Upstream Emissions (tCO2e)) when

    -   VehicleAssetEnrgyUse.Scope 3 GHG Category = “Scope 3 Upstream Emissions”
    -   VehicleAssetEnrgyUse.Scope 3 GHG Category = “Scope 3 Downstream Emissions”
    -   VehicleAssetEnrgyUse.Scope 3 Downstream Emissions (tCO2e) != null but VehicleAssetEnrgyUse.Scope 3 GHG Category != “Scope 3 Downstream Emissions” (Using supplemental value on VehicleAssetEnrgyUse)
    -   VehicleAssetEnrgyUse.Scope 3 Upstream Emissions (tCO2e) != null but VehicleAssetEnrgyUse.Scope 3 GHG Category != “Scope 3 Upstream Emissions” (Using supplemental value on VehicleAssetEnrgyUse)

-   **Total Scope 3 Downstream Emissions (tCO2e) (TotalScp3DnstrmEmissions)**

    **Input Fields**

    -   The Vehicle Asset Energy Use (VehicleAssetEnrgyUse) records associated with this carbon footprint.

    -   Supplemental Scope 3 Downstream Emissions (SuplScope3DnstrmEmissions).


    **Calculations**

    Total Scope 3 Downstream Emissions (tCO2e) = SUM (VehicleAssetEnrgyUse.Scope 3 Downstream Emissions (tCO2e)) + Supplemental Scope 3 Downstream Emissions


-   **Total Scope 3 Upstream Emissions (tCO2e) (TotalScp3UpstrmEmissions)**

    **Input Fields**

    -   The Vehicle Asset Energy Use (VehicleAssetEnrgyUse) records associated with this carbon footprint.
        -   Scope 3 Upstream Emissions (tCO2e) (Scope3UpstrmEmissionsInTco2e)
        -   Scope 3 Emissions from Fuel and Energy-Related Activity (tCO2e) (Scp3EmssnFuelEnrgy)
    -   Supplemental Scope 3 Upstream Emissions (SuplScope3UpstrmEmissions).

    **Calculations**

    Total Scope 3 Upstream Emissions (tCO2e) = SUM (VehicleAssetEnrgyUse.Scope 3 Upstream Emissions (tCO2e)) + SUM (VehicleAssetEnrgyUse.Scope 3 Emissions from Fuel and Energy-Related Activity (tCO2e)) + Supplemental Scope 3 Upstream Emissions


-   **Total Fuel Consumption (Gallons) (TotFuelCnsmpInGallons)**

    **Input Fields**

    The Vehicle Asset Energy Use (VehicleAssetEnrgyUse) records associated with this carbon footprint.

    **Calculations**

    Total Fuel Consumption (Gallons) = SUM (VehicleAssetEnrgyUse.Total Fuel Consumption (US Gallons))


-   **Total Fuel Consumption (Liters) (TotFuelCnsmpInLiters)**

    **Input Fields**

    The Vehicle Asset Energy Use (VehicleAssetEnrgyUse) records associated with this carbon footprint.

    **Calculations**

    Total Fuel Consumption (Liters) = SUM (VehicleAssetEnrgyUse.Total Fuel Consumption (Liters))


-   **Total Scope 1 Emissions (tCO2e) (TotScope1EmissionsInTco2e)**

    **Input Fields**

    -   The Vehicle Asset Energy Use (VehicleAssetEnrgyUse) records associated with this carbon footprint.
    -   Supplemental Scope 1 Emissions (tCO2e) (SuplScope1Emissions).

    **Calculations**

    Total Scope 1 Emissions (tCO2e) = SUM (VehicleAssetEnrgyUse.Scope 1 Emissions (tCO2e)) + Supplemental Scope 1 Emissions (tCO2e)

    **Default Value**

    Total Scope 1 Emissions (tCO2e) = Supplemental Scope 1 Emissions (tCO2e)


-   **Total Scope 2 Location-Based Emissions (TotScope2LocBasedEmissions)**

    **Input Fields**

    -   The Vehicle Asset Energy Use (VehicleAssetEnrgyUse) records associated with this carbon footprint.
    -   Supplemental Scope 2 Location-Based Emissions (SuplScope2LocationBasedEmssn).

    **Calculations**

    Total Scope 2 Location-Based Emissions = SUM (VehicleAssetEnrgyUse.Scope 2 Location-Based Emissions (tCO2e)) + Supplemental Scope 2 Location-Based Emissions

    **Default Value**

    Total Scope 2 Location-Based Emissions = Supplemental Scope 2 Location-Based Emissions


-   **Supplemental Scope 2 Market-Based Emissions (TotScope2MktBasedEmissions)**

    **Input Fields**

    -   The Vehicle Asset Energy Use (VehicleAssetEnrgyUse) records associated with this carbon footprint.
    -   Supplemental Scope 2 Market-Based Emission (SuplScope2MarketBasedEmssn).

    **Calculations**

    Supplemental Scope 2 Market-Based Emissions = SUM (VehicleAssetEnrgyUse.Scope 2 Market-Based Emissions (tCO2e)) + Supplemental Scope 2 Market-Based Emissions

    **Default Value**

    Supplemental Scope 2 Market-Based Emissions = Supplemental Scope 2 Market-Based Emissions


-   **Scope 3 Emissions from Fuel and Energy-Related Activity (tCO2e) (Scp3EmssnFuelEnrgy)**

    **Input Fields**

    -   The Vehicle Asset Energy Use (VehicleAssetEnrgyUse) records associated with this carbon footprint
        -   Scope 3 Emissions from Fuel and Energy-Related Activity (tCO2e) (Scp3EmssnFuelEnrgy)

    **Calculations**

    Scope 3 Emissions from Fuel and Energy-Related Activity (tCO2e) = SUM (VehicleAssetEnrgyUse.Scope 3 Emissions from Fuel and Energy-Related Activity (tCO2e))

---
title: "Waste Footprint"
domain: netzero-cloud-dev-guide
topic: waste-footprint
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:57.816Z
estimatedTokens: 775
keywords: [Waste, Footprint, volume, aggregated, carbon, emissions, generated, either, part, operations, end, life, product]
---

# Waste Footprint

> The Waste Footprint object represents the volume of aggregated waste and carbon
    emissions from waste generated either as part of operations or at the end of life of a
    product.

# Waste Footprint

The Waste Footprint object represents the volume of aggregated waste and carbon emissions from waste generated either as part of operations or at the end of life of a product.

Here are the calculated fields:

-   **Generated Waste Detail Record Count (GeneratedWasteDetailRecordCnt)**

    **Input Fields**

    Generated Waste records

    **Calculations**

    Generated Waste Detail Record Count = Count (Associated Generated Waste records)


-   **Total Waste Quantity in Tonnes (WasteFootprint.TotalWasteQuantityinTonnes)**

    **Input Fields**

    Disposed Waste Quantity in Tonnes (WasteFootprintItem.DisposedWasteQuantityinTonnes)

    **Calculations**

    WasteFootprint.Total Waste Quantity in Tonnes = Sum of all associated (WasteFootprintItem.Disposed Waste Quantity in Tonnes).


-   **Scope 3 Upstream Emissions from Waste Generated in Operations (tCO2e) (WasteFootprint.Scp3UpstrmWstGenInOper)**

    **Input Fields**

    -   Scope 3 Upstream Emissions from Waste Generated in Operations (tCO2e) (GeneratedWaste.Scp3UpstrmWstGenInOper)

    -   Supplemental Scope 3 Upstream Emissions from Waste Generated in Operations (tCO2e) (SuplScp3UpstrmWstGenInOper)


    **Calculations**

    WasteFootprint.Scope 3 Upstream Emissions from Waste Generated in Operations (tCO2e) = Sum of all associated (GeneratedWaste.Scope 3 Upstream Emissions from Waste Generated in Operations (tCO2e)) + WasteFootprint.Supplemental Scope 3 Upstream Emissions from Waste Generated in Operations (tCO2e).


-   **Scope 3 Downstream Emissions from End-of-Life Treatment of Sold Products (tCO2e) (WasteFootprint.Scp3DnstrmEndLifeSoldPrdct)**

    **Input Fields**

    -   Scope 3 Downstream Emissions from End-of-Life Treatment of Sold Products (tCO2e) (GeneratedWaste.Scp3DnstrmEndLifeSoldPrdct)

    -   Supplemental Scope 3 Downstream Emissions from End-of-Life Treatment of Sold Products (tCO2e) (WasteFootprint.SuplScp3DnstrmEndLifeSoldPrdct)


    **Calculations**

    WasteFootprint.Scope 3 Downstream Emissions from End-of-Life Treatment of Sold Products (tCO2e) = Sum of all associated (GeneratedWaste.Scope 3 Downstream Emissions from End-of-Life Treatment of Sold Products (tCO2e)) + WasteFootprint.Supplemental Scope 3 Downstream Emissions from End-of-Life Treatment of Sold Products (tCO2e).


-   **Scope 1 Emissions (tCO2e) (WasteFootprint.Scope1EmissionsInTco2e)**

    **Input Fields**

    -   Scope 1 Emissions (tCO2e) (GeneratedWaste.Scope1EmissionsInTco2e)

    -   Supplemental Scope 1 Emissions (tCO2e) (WasteFootprint.SuplScope1EmissionsInTco2e)


    **Calculations**

    WasteFootprint.Scope 1 Emissions (tCO2e) = Sum of all associated (GeneratedWaste.Scope 1 Emissions (tCO2e)) + WasteFootprint.Supplemental Scope 1 Emissions (tCO2e).


-   **[Waste Footprint Item](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_calc_waste_footprint_item.htm)**
    The Waste Footprint Item object represents the volume by waste type and disposal type of aggregated waste generated either as part of operations or at the end of life of a product.

## Related Topics

- Waste Footprint Item (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_calc_waste_footprint_item.htm)

---
title: "Scope 3 Carbon Footprint"
domain: netzero-cloud-dev-guide
topic: scope-3-carbon-footprint
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:57.740Z
estimatedTokens: 2151
keywords: [Scope, Carbon, Footprint, total, emissions, activities, quantifies, effect, atmospheric, warming, represented, metric, tonnes, dioxide, equivalent]
---

# Scope 3 Carbon Footprint

> The Scope 3 Carbon Footprint object represents the total carbon emissions from scope 3
    activities. Carbon footprint quantifies the effect of atmospheric warming, which is represented
    in metric tonnes of carbon dioxide equivalent (tCO₂e).

# Scope 3 Carbon Footprint

The Scope 3 Carbon Footprint object represents the total carbon emissions from scope 3 activities. Carbon footprint quantifies the effect of atmospheric warming, which is represented in metric tonnes of carbon dioxide equivalent (tCO₂e).


| Permission Set Needed |
| --- |
| To enter and modify data: | Net Zero Cloud ManagerORNet Zero Cloud Admin |

Here are the calculated fields:

-   **Scope 3 Emissions from Capital Goods (tCO2e) (Scp3EmssnCapitalGood)**

    **Input Fields**

    The related Scope 3 Procurement Summary (Scope3PcmtSummary) records.

    **Calculations**

    Sum of the scope 3 emissions for capital goods (category 2), in units of tCO2e.

    This value is calculated from the related Scope 3 Procurement Summary (Scope3PcmtSummary) records + Supplemental Scope 3 Emissions from Downstream Leased Asset (tCO2e)


-   **Scope 3 Emissions from Downstream Leased Asset (tCO2e) (Scp3EmssnDnstrmLeasedAsset)**

    **Calculations**

    Sum of scope 3 emissions for downstream leased assets (category 13), in units of tCO2e.

    This value is calculated from the related Scope 3 Procurement Summary (Scope3PcmtSummary) records + Supplemental Scope 3 Emissions from Downstream Leased Asset (tCO2e)


-   **Scope 3 Emissions from Downstream Transportation Distribution (tCO2e) (Scp3EmssnDnstrmTrnspDistr)**

    **Calculations**

    Sum of the scope 3 emissions for downstream transportation and distribution (category 9), in units of tCO2e.

    This value is calculated from the related Scope 3 Procurement Summary (Scope3PcmtSummary) records and Freight Hauling Energy Use (FrgtHaulingEnrgyUse) records where scope 3 category is downstream + Supplemental Scope 3 Emissions from Downstream Transportation Distribution (tCO2e)


-   **Scope 3 Emissions from End-Life Treatment of Sold Product (tCO2e) (Scp3EmssnEndLifeSoldProdt)**

    **Calculations**

    Sum of the scope 3 emissions for end-of-life treatment of sold products (category 12), in units of tCO2e.

    This value is calculated from the related Scope 3 Procurement Summary (Scope3PcmtSummary) records. This value includes aggregation of emissions from waste when the Generated Waste object has a lookup to Scope 3 Carbon Footprint + Supplemental Scope 3 Emissions from End-Life Treatment of Sold Product (tCO2e)


-   **Scope 3 Emissions from Franchise (tCO2e) (Scp3EmssnFranchise)**

    **Calculations**

    Sum of the scope 3 emissions for franchises (category 14), in units of tCO2e.

    This value is calculated from the related Scope 3 Procurement Summary (Scope3PcmtSummary) records + Supplemental Scope 3 Emissions from Franchise (tCO2e)


-   **Scope 3 Emissions from Fuel and Energy-Related Activity (tCO2e) (Scp3EmssnFuelEnergyActivity)**

    **Calculations**

    Sum of the scope 3 emissions for fuel and energy-related activities not included in scope 1 or scope 2 (category 3), in units of tCO2e.

    This value isn’t included in scope 1 or scope 2 and is calculated from the related Scope 3 Procurement Summary (Scope3PcmtSummary) records + Supplemental Scope 3 Emissions from Fuel and Energy-Related Activity (tCO2e)


-   **Scope 3 Emissions from Investments (tCO2e) (Scp3EmssnInvestment)**

    **Calculations**

    Sum of the scope 3 emissions for investments (category 15), in units of tCO2e.

    This value is calculated from the related Scope 3 Procurement Summary (Scope3PcmtSummary) records + Supplemental Scope 3 Emissions from Investments (tCO2e)


-   **Scope 3 Emissions from Processing Sold Products (tCO2e) (Scp3EmssnProcSoldProduct)**

    **Calculations**

    Sum of the scope 3 emissions for processing of sold products (category 10), in units of tCO2e.

    This value is calculated from the related Scope 3 Procurement Summary (Scope3PcmtSummary) records + Supplemental Scope 3 Emissions from Processing Sold Products (tCO2e)


-   **Scope 3 Emissions from Purchased Goods Services (tCO2e) (Scp3EmssnPurchGoodsService)**

    **Calculations**

    Sum of the scope 3 emissions for purchased goods and services (category 1), in units of tCO2e.

    This value is calculated from the related Scope 3 Procurement Summary (Scope3PcmtSummary) records + Supplemental Scope 3 Emissions from Purchased Goods Services (tCO2e)


-   **Scope 3 Emissions from Upstream Leased Assets (tCO2e) (Scp3EmssnUpstrmLeasedAsset)**

    **Calculations**

    Sum of the scope 3 emissions for upstream leased assets (category 8), in units of tCO2e.

    This value is calculated from the related Scope 3 Procurement Summary (Scope3PcmtSummary) records + Supplemental Scope 3 Emissions from Upstream Leased Assets (tCO2e)


-   **Scope 3 Emissions from Scope 3 Upstream Transportation Distribution (tCO2e) (Scp3EmssnUpstrmTrnspDistr)**

    **Calculations**

    Sum of the scope 3 emissions for upstream transportation and distribution (category 4), in units of tCO2e.

    This value is calculated from the related Scope 3 Procurement Summary (Scope3PcmtSummary) and Freight Hauling Energy Use (FrgtHaulingEnrgyUse) records where scope 3 category is upstream + Supplemental Scope 3 Emissions from Scope 3 Upstream Transportation Distribution (tCO2e)


-   **Scope 3 Emissions from Use of Sold Products (tCO2e) (Scp3EmssnUseOfSoldProduct)**

    **Calculations**

    Sum of the scope 3 emissions for use of sold products (category 11), in units of tCO2e.

    This value is calculated from the related Scope 3 Procurement Summary (Scope3PcmtSummary) records + Supplemental Scope 3 Emissions from Use of Sold Products (tCO2e)


-   **Scope 3 Uncategorized Emissions (tCO2e) (Scp3UncatgEmissions)**

    **Calculations**

    Sum of the scope 3 uncategorized emissions, in units of tCO2e. Calculated from related procurement summaries.

    This value is calculated from the related Scope 3 Procurement Summary (Scope3PcmtSummary) records + Supplemental Scope 3 Uncategorized Emissions (tCO2e)


-   **Scope 3 Emissions from Waste Generated in Operations (tCO2e) (Scp3WasteGenInOper)**

    **Calculations**

    Sum of the scope 3 emissions for waste generated in operations (category 5), in units of tCO2e.

    This value is calculated from the related Scope 3 Procurement Summary (Scope3PcmtSummary) records. This value includes aggregation of emissions from waste when the Generated Waste object has a lookup to Scope 3 Carbon Footprint + Supplemental Scope 3 Emissions from Waste Generated in Operations (tCO2e)


-   **Scope 3 Emissions from Employee Commuting (tCO2e) (Scp3EmssnEmployeeCommuting)**

    **Calculations**

    Sum of the scope 3 emissions for employee commuting (category 7), in units of tCO2e.

    This value is calculated from the related Scope 3 Procurement Summary (Scope3PcmtSummary) records + scope 3 emissions from the related ground and rental car energy use records based on the selected GHG category + Supplemental Scope 3 Emissions from Employee Commuting (tCO2e)


-   **Total Scope 3 Downstream Emissions (tCO2e) (TotalScp3DnstrmEmissions)**

    **Calculations**

    Sum of the scope 3 downstream emissions: Downstream Transportation Distribution, Processing Sold Products, Use of Sold Products, End-of-Life Sold Products, Downstream Leased Assets, Franchises, and Investments.


-   **Total Scope 3 Emissions from Business Travel (tCO2e) (TotalScp3EmssnBusTrvl)**

    **Calculations**

    Sum of Scope 3 Emissions from Business Travel Energy Consumption (tCO2e), Scope 3 Emissions from Business Travel Procurement (tCO2e), and Total scope 3 emissions for business travel (category 6) in units of tCO2e.

    The value is calculated from the related ground, hotel, rental, and air travel energy use records based on the selected GHG category + Supplemental Scope 3 Emissions from Business Travel (tCO2e)


-   **Total Scope 3 Upstream Emissions (tCO2e) (TotalScp3UpstrmEmissions)**

    **Calculations**

    Sum of the scope 3 upstream emissions: Purchased Goods, Capital Goods, Fuel, Energy-Related Activities, Upstream Transportation Distribution, Waste Generated in Operations, Business Travel, Employee Commuting, and Upstream Leased Assets.


-   **Total Scope 3 Emissions (tCO2e) (TotScope3EmissionsInTco2e)**

    **Input Fields**

    The related Scope 3 Procurement Summary (Scope3PcmtSummary), energy use, and waste records.

    **Calculations**

    Sum of the scope 3 emissions, in units of tCO2e: Total Upstream + Total Downstream + Total Uncategorized + Supplemental Scope 3 emissions

    This value is calculated from the related Scope 3 Procurement Summary (Scope3PcmtSummary), energy use, and waste objects.

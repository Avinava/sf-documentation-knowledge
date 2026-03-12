---
title: "Scope 3 Procurement Summary"
domain: netzero-cloud-dev-guide
topic: scope-3-procurement-summary
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:57.784Z
estimatedTokens: 3404
keywords: [Scope, Procurement, Summary, amount, organization, spends, category, quantifies, effect, atmospheric, warming, represented, tonnes, carbon, dioxide]
---

# Scope 3 Procurement Summary

> The Scope 3 Procurement Summary object represents the amount that the organization
    spends for one procurement category. Scope 3 procurement summary quantifies the effect on
    atmospheric warming, represented in tonnes of carbon dioxide equivalent (tCO₂e) by using a
    matched emissions factor from an associated Procurement Emissions Factor Item
    record.

# Scope 3 Procurement Summary

The Scope 3 Procurement Summary object represents the amount that the organization spends for one procurement category. Scope 3 procurement summary quantifies the effect on atmospheric warming, represented in tonnes of carbon dioxide equivalent (tCO₂e) by using a matched emissions factor from an associated Procurement Emissions Factor Item record.


| Permission Set Needed |
| --- |
| To enter and modify data: | Net Zero Cloud ManagerORNet Zero Cloud Admin |

Here are some general rules for scope 3 procurement summary:

-   The currency in the inflation rate record must match the currency in the scope 3 procurement summary.
-   Inflation rates are required for the years between the scope 3 procurement summary calendar year and the emissions factor scope 3 year.
-   If the required inflation rates aren’t available, the app permits the scope 3 procurement summary to be related to the emissions factor scope 3 dataset.
-   When the scope 3 procurement summary and the emissions factor scope 3 dataset have the same year, the current inflation rate is 0%.
-   When the scope 3 procurement summary year is later than the emissions factor scope 3 dataset, the current Inflation rate is calculated by using the years of the emissions factor scope 3 dataset through the year before the scope 3 procurement summary:

    ```

    ```

    Here's an example of the current inflation rate by using the years of the emissions factor scope 3 dataset.
    | Year | Inflation Rate % | 1 + Inflation Rate per year |
    | --- | --- | --- |
    | 2013 | 0.0146480000 |  |
    | 2014 | 0.0162220000 | 1.0162220000 |
    | 2015 | 0.0011860000 | 1.0174272393 |
    | 2016 | 0.012616000 | 1.0302631013 |
    | 2017 | 0.021301000 | 1.0522087357 |
    | 2018 | 0.0244260000 | 1.0779099862 |
    | 2019 | 0.018122000 | 1.0974438710 |
    | 2020 | 0.012336000 | 1.1109819 |
    If Emissions Factor year is 2013 and Dataset is 2020

    Current Inflation Rate = (Inflation for 2020 - 1) \*100 = 11.0982

-   When the scope 3 procurement summary year is earlier than the emissions factor scope 3 dataset, the current inflation rate is calculated by using the years of the scope 3 procurement summary through the year before the emissions factor scope 3 dataset:

    ```

    ```


Here are the calculated fields:

-   Scope 3 Emissions from Business Travel (tCO2e) (Scp3EmssnBusinessTravel)

    Input Fields

    -   Scope 3 Procurement Item (Scope3PcmtItem)
        -   Final Scope 3 Emissions (tCO2e)(Scope3EmissionsInTco2)
        -   Scope 3 GHG Category (Scope3GhgCategory)

    Calculation

    Scope 3 Emissions from Business Travel (tCO2e) = SUM(Scope3PcmtItem.Final Scope 3 Emissions (tCO2e)) where Scope3PcmtItem.Scope 3 GHG Category = “Business Travel”

-   Scope 3 Emissions from Capital Goods (tCO2e) (Scp3EmssnCapitalGood)

    Input Fields

    -   Scope 3 Procurement Item (Scope3PcmtItem)
        -   Final Scope 3 Emissions (tCO2e)(Scope3EmissionsInTco2)
        -   Scope 3 GHG Category (Scope3GhgCategory)

    Calculation

    Scope 3 Emissions from Capital Goods (tCO2e) = SUM(Scope3PcmtItem.Final Scope 3 Emissions (tCO2e)) where Scope3PcmtItem.Scope 3 GHG Category = “Capital Goods”

-   Scope 3 Emissions from Downstream Leased Asset (tCO2e) (Scp3EmssnDnstrmLeasedAsset)

    Input Fields

    -   Scope 3 Procurement Item (Scope3PcmtItem)
        -   Final Scope 3 Emissions (tCO2e)(Scope3EmissionsInTco2)
        -   Scope 3 GHG Category (Scope3GhgCategory)

    Calculation

    Scope 3 Emissions from Downstream Leased Asset (tCO2e) = SUM(Scope3PcmtItem.Final Scope 3 Emissions (tCO2e)) where Scope3PcmtItem.Scope 3 GHG Category = “Downstream Leased Assets”

-   Scope 3 Emissions from Downstream Transportation Distribution (tCO2e) (Scp3EmssnDnstrmTrnspDistr)

    Input Fields

    -   Scope 3 Procurement Item (Scope3PcmtItem)
        -   Final Scope 3 Emissions (tCO2e)(Scope3EmissionsInTco2)
        -   Scope 3 GHG Category (Scope3GhgCategory)

    Calculation

    Scope 3 Emissions from Downstream Transportation Distribution (tCO2e) = SUM(Scope3PcmtItem.Final Scope 3 Emissions (tCO2e)) where Scope3PcmtItem.Scope 3 GHG Category = “Downstream Transportation and Distribution”

-   Scope 3 Emissions from End-Life Treatment of Sold Product (tCO2e) (Scp3EmssnEndLifeSoldProdt)

    Input Fields

    -   Scope 3 Procurement Item (Scope3PcmtItem)
        -   Final Scope 3 Emissions (tCO2e)(Scope3EmissionsInTco2)
        -   Scope 3 GHG Category (Scope3GhgCategory)

    Calculation

    Scope 3 Emissions from End-Life Treatment of Sold Product (tCO2e) = SUM(Scope3PcmtItem.Final Scope 3 Emissions (tCO2e)) where Scope3PcmtItem.Scope 3 GHG Category = “End-of-Life Treatment of Sold Products”

-   Scope 3 Emissions from Franchise (tCO2e) (Scp3EmssnFranchise)

    Input Fields

    -   Scope 3 Procurement Item (Scope3PcmtItem)
        -   Final Scope 3 Emissions (tCO2e)(Scope3EmissionsInTco2)
        -   Scope 3 GHG Category (Scope3GhgCategory)

    Calculation

    Scope 3 Emissions from Franchise (tCO2e) = SUM(Scope3PcmtItem.Final Scope 3 Emissions (tCO2e)) where Scope3PcmtItem.Scope 3 GHG Category = “Franchises”

-   Scope 3 Emissions from Fuel and Energy-Related Activity (tCO2e) (Scp3EmssnFuelEnergyActivity)

    Input Fields

    -   Scope 3 Procurement Item (Scope3PcmtItem)
        -   Final Scope 3 Emissions (tCO2e)(Scope3EmissionsInTco2)
        -   Scope 3 GHG Category (Scope3GhgCategory)

    Calculation

    Scope 3 Emissions from Fuel and Energy-Related Activity (tCO2e) = SUM(Scope3PcmtItem.Final Scope 3 Emissions (tCO2e)) where Scope3PcmtItem.Scope 3 GHG Category = “Fuel and Energy-Related Activities”

-   Scope 3 Emissions from Investment (tCO2e) (Scp3EmssnInvestment)

    Input Fields

    -   Scope 3 Procurement Item (Scope3PcmtItem)
        -   Final Scope 3 Emissions (tCO2e)(Scope3EmissionsInTco2)
        -   Scope 3 GHG Category (Scope3GhgCategory)

    Calculation

    Scope 3 Emissions from Investment (tCO2e) = SUM(Scope3PcmtItem.Final Scope 3 Emissions (tCO2e)) where Scope3PcmtItem.Scope 3 GHG Category = “Investments”

-   Scope 3 Emissions from Processing Sold Product (tCO2e) (Scp3EmssnProcSoldProduct)

    Input Fields

    -   Scope 3 Procurement Item (Scope3PcmtItem)
        -   Final Scope 3 Emissions (tCO2e)(Scope3EmissionsInTco2)
        -   Scope 3 GHG Category (Scope3GhgCategory)

    Calculation

    Scope 3 Emissions from Processing Sold Product (tCO2e) = SUM(Scope3PcmtItem.Final Scope 3 Emissions (tCO2e)) where Scope3PcmtItem.Scope 3 GHG Category = “Processing of Sold Products”

-   Scope 3 Emissions from Purchased Goods Services (tCO2e) (Scp3EmssnPurchGoodsService)

    Input Fields

    -   Scope 3 Procurement Item (Scope3PcmtItem)
        -   Final Scope 3 Emissions (tCO2e)(Scope3EmissionsInTco2)
        -   Scope 3 GHG Category (Scope3GhgCategory)

    Calculation

    Scope 3 Emissions from Purchased Goods Services (tCO2e) = SUM(Scope3PcmtItem.Final Scope 3 Emissions (tCO2e)) where Scope3PcmtItem.Scope 3 GHG Category = “Purchased Goods and Services”

-   Scope 3 Emissions from Upstream Leased Asset (tCO2e) (Scp3EmssnUpstrmLeasedAsset)

    Input Fields

    -   Scope 3 Procurement Item (Scope3PcmtItem)
        -   Final Scope 3 Emissions (tCO2e)(Scope3EmissionsInTco2)
        -   Scope 3 GHG Category (Scope3GhgCategory)

    Calculation

    Scope 3 Emissions from Upstream Leased Asset (tCO2e) = SUM(Scope3PcmtItem.Final Scope 3 Emissions (tCO2e)) where Scope3PcmtItem.Scope 3 GHG Category = “Upstream Leased Assets”

-   Scope 3 Emissions from Upstream Transportation Distribution (tCO2e) (Scp3EmssnUpstrmTrnspDistr)

    Input Fields

    -   Scope 3 Procurement Item (Scope3PcmtItem)
        -   Final Scope 3 Emissions (tCO2e)(Scope3EmissionsInTco2)
        -   Scope 3 GHG Category (Scope3GhgCategory)

    Calculation

    Scope 3 Emissions from Upstream Transportation Distribution (tCO2e) = SUM(Scope3PcmtItem.Final Scope 3 Emissions (tCO2e)) where Scope3PcmtItem.Scope 3 GHG Category = “Upstream Transportation and Distribution”

-   Scope 3 Emissions from Use of Sold Product (tCO2e) (Scp3EmssnUseOfSoldProduct)

    Input Fields

    -   Scope 3 Procurement Item (Scope3PcmtItem)
        -   Final Scope 3 Emissions (tCO2e)(Scope3EmissionsInTco2)
        -   Scope 3 GHG Category (Scope3GhgCategory)

    Calculation

    Scope 3 Emissions from Use of Sold Product (tCO2e) = SUM(Scope3PcmtItem.Final Scope 3 Emissions (tCO2e)) where Scope3PcmtItem.Scope 3 GHG Category = “Use of Sold Products”

-   Scope 3 Uncategorized Emissions (tCO2e) (Scp3UncatgEmissions)

    Input Fields

    -   Scope 3 Procurement Item (Scope3PcmtItem)
        -   Final Scope 3 Emissions (tCO2e)(Scope3EmissionsInTco2)
        -   Scope 3 GHG Category (Scope3GhgCategory)

    Calculation

    Scope 3 Uncategorized Emissions (tCO2e) = SUM(Scope3PcmtItem.Final Scope 3 Emissions (tCO2e)) where Scope3PcmtItem.Scope 3 GHG Category = “Uncategorized”

-   Scope 3 Emissions from Waste Generated in Operations (tCO2e) (Scp3WasteGenInOper)

    Input Fields

    -   Scope 3 Procurement Item (Scope3PcmtItem)
        -   Final Scope 3 Emissions (tCO2e)(Scope3EmissionsInTco2)
        -   Scope 3 GHG Category (Scope3GhgCategory)

    Calculation

    Scope 3 Emissions from Waste Generated in Operations (tCO2e) = SUM(Scope3PcmtItem.Final Scope 3 Emissions (tCO2e)) where Scope3PcmtItem.Scope 3 GHG Category = “Waste Generated In Operations”

-   Scope 3 Emissions from Employee Commuting (tCO2e) (ScpEmssnEmployeeCommuting)

    Input Fields

    -   Scope 3 Procurement Item (Scope3PcmtItem)
        -   Final Scope 3 Emissions (tCO2e)(Scope3EmissionsInTco2)
        -   Scope 3 GHG Category (Scope3GhgCategory)

    Calculation

    Scope 3 Emissions from Employee Commuting (tCO2e) = SUM(Scope3PcmtItem.Final Scope 3 Emissions (tCO2e)) where Scope3PcmtItem.Scope 3 GHG Category = “Employee Commuting”

-   Total Scope 3 Downstream Emissions (tCO2e) (TotalScp3DnstrmEmissions)

    Input Fields

    -   Scope 3 Emissions from Downstream Transportation Distribution (tCO2e) (Scp3EmssnDnstrmTrnspDistr)
    -   Scope 3 Emissions from Processing Sold Product (tCO2e) (Scp3EmssnProcSoldProduct)
    -   Scope 3 Emissions from Use of Sold Product (tCO2e) (Scp3EmssnUseOfSoldProduct)
    -   Scope 3 Emissions from End-Life Treatment of Sold Product (tCO2e) (Scp3EmssnEndLifeSoldProdt)
    -   Scope 3 Emissions from Downstream Leased Asset (tCO2e) (Scp3EmssnDnstrmLeasedAsset)
    -   Scope 3 Emissions from Franchise (tCO2e) (Scp3EmssnFranchise)
    -   Scope 3 Emissions from Investment (tCO2e) (Scp3EmssnInvestment)

    Calculation

    Total Scope 3 Downstream Emissions (tCO2e) = SUM(Scope 3 Emissions from Downstream Transportation Distribution (tCO2e), Scope 3 Emissions from Processing Sold Product (tCO2e), Scope 3 Emissions from Use of Sold Product (tCO2e), Scope 3 Emissions from End-Life Treatment of Sold Product (tCO2e), Scope 3 Emissions from Downstream Leased Asset (tCO2e), Scope 3 Emissions from Franchise (tCO2e), Scope 3 Emissions from Investment (tCO2e))

-   Total Scope 3 Emissions (tCO2e) (TotalScp3Emissions)

    Input Fields

    -   Scope 3 Procurement Item (Scope3PcmtItem)
        -   Final Scope 3 Emissions (tCO2e)(Scope3EmissionsInTco2)

    Calculation

    Total Scope 3 Emissions (tCO2e) = SUM(Scope3PcmtItem.Final Scope 3 Emissions (tCO2e))

-   Total Scope 3 Upstream Emissions (tCO2e) (TotalScp3UpstrmEmissions)

    Input Fields

    -   Scope 3 Emissions from Purchased Goods Services (tCO2e) (Scp3EmssnPurchGoodsService)
    -   Scope 3 Emissions from Capital Goods (tCO2e) (Scp3EmssnCapitalGood)
    -   Scope 3 Emissions from Fuel and Energy-Related Activity (tCO2e) (Scp3EmssnFuelEnergyActivity)
    -   Scope 3 Emissions from Upstream Transportation Distribution (tCO2e) (Scp3EmssnUpstrmTrnspDistr)
    -   Scope 3 Emissions from Waste Generated in Operations (tCO2e) (Scp3WasteGenInOper)
    -   Scope 3 Emissions from Business Travel (tCO2e) (Scp3EmssnBusinessTravel)
    -   Scope 3 Emissions from Employee Commuting (tCO2e) (ScpEmssnEmployeeCommuting)
    -   Scope 3 Emissions from Upstream Leased Asset (tCO2e) (Scp3EmssnUpstrmLeasedAsset)

    Calculation

    Total Scope 3 Upstream Emissions (tCO2e) = SUM(Scope 3 Emissions from Purchased Goods Services (tCO2e), Scope 3 Emissions from Capital Goods (tCO2e), Scope 3 Emissions from Fuel and Energy-Related Activity (tCO2e), Scope 3 Emissions from Upstream Transportation Distribution (tCO2e), Scope 3 Emissions from Waste Generated in Operations (tCO2e), Scope 3 Emissions from Business Travel (tCO2e), Scope 3 Emissions from Employee Commuting (tCO2e), Scope 3 Emissions from Upstream Leased Asset (tCO2e))

-   Total Spent Amount (TotalSpentAmount)

    Input Fields

    -   Scope 3 Procurement Item (Scope3PcmtItem)
        -   Spent Amount (SpentAmount)

    Calculation

    Total Spent Amount = SUM(Scope3PcmtItem.Spent Amount)

-   Inflation Rate (InflationRate)

    Input Fields

    -   Inflation Rate Override (InflationRateOverride)
    -   Current Inflation Rate (InflationRateCalculated)

-   Calculation

    If (InflationRateOverride !=null) then

    InflationRate = Inflation Rate Override

    else

    InflationRate = Current Inflation Rate


-   **[Scope 3 Procurement Item](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_calc_procurement_entry.htm)**
    The Scope 3 Procurement Item object represents the procurement (corporate spending) entry records. Procurement is the amount that an organization spends on goods and services.

## Code Examples

```
Current Inflation Rate = 
    
( 1 + Inflation Rate Year 1 Inflation Rate )  
× ( 1 + Inflation Rate Year 2 Inflation Rate )  
× ( 1 + Inflation Rate Year 3 Inflation Rate ) - 1
```

```
Current Inflation Rate = 

-1 × ( ( 1 + Inflation Rate Year 1 Inflation Rate )  
       × ( 1 + Inflation Rate Year 2 Inflation Rate )  
       × ( 1 + Inflation Rate Year 3 Inflation Rate ) - 1 )
```

## Related Topics

- Scope 3 Procurement Item (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_calc_procurement_entry.htm)

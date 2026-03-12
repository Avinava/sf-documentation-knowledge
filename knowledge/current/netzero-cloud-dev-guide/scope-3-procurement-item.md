---
title: "Scope 3 Procurement Item"
domain: netzero-cloud-dev-guide
topic: scope-3-procurement-item
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:57.790Z
estimatedTokens: 1305
keywords: [Scope, Procurement, Item, corporate, spending, entry, records, amount, organization, spends, goods, services]
---

# Scope 3 Procurement Item

> The Scope 3 Procurement Item object represents the procurement (corporate spending)
    entry records. Procurement is the amount that an organization spends on goods and
    services.

# Scope 3 Procurement Item

The Scope 3 Procurement Item object represents the procurement (corporate spending) entry records. Procurement is the amount that an organization spends on goods and services.

The Scope 3 Emissions Calculation Type decides whether the emissions data comes from vendor-provided figures, scorecards, or calculated estimates, thereby impacting the values displayed.

For information about converting the values from one unit of measure to another compatible unit of measure, see [Conversion Factors](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_calc_conversion_factors.htm "You can convert the values from one unit of measure to another compatible unit of measure based on the conversion factors.").

For more information about the Allocated Scorecard Emission calculation type, see [Allocate Supplier Data to Procurement Items](https://help.salesforce.com/s/articleView?id=ind.netzero_manager_allocate_supplier_data_to_procurement_items.htm&language=en_US).

Here are the calculated fields:

-   **Final Scope 3 Emissions (tCO2e) (Scope3EmissionsInTco2)**

    **Input Fields**

    -   Scope 3 Spend-Based Emissions (tCO2e) (CalculatedScope3EmssnInTco2e)
    -   Scope 3 Emissions Override (tCO2e) (VendorPrvdScope3EmssnInTco2e)
    -   Scope 3 Emissions Calculation Type (Scope3EmissionsCalculationType)
    -   Scope 3 Quantity-Based Emissions (tCO2e) (Scp3QtyBsdEmssnInTco2e)

    **Calculations**

    If Scope 3 Emissions Calculation Type = Spend-Based Emissions or Allocated Scorecard Emissions and Scope 3 Emissions Override (tCO2e)! = 0, then Final Scope 3 Emissions (tCO2e) = Vendor-Provided Scope 3 Emissions (tCO2e)

    else, Final Scope 3 Emissions (tCO2e) = Scope 3 Spend-Based Emissions (tCO2e)

    ﻿If Scope 3 Emissions Calculation Type = Quantity-Based Emissions then Final Scope 3 Emissions (tCO2e) (Scope3EmissionsInTco2) = Scope 3 Quantity-Based Emissions (tCO2e)


-   **Scope 3 Spend-Based Emissions (tCO2e) (CalculatedScope3EmssnInTco2e)**

    **Input Fields**

    -   Total Spent Amount (SpentAmount)

    -   Scope 3 Procurement Summary (Scope3PcmtSummary).Inflation Rate (InflationRate)

    -   Total Scope 3 Emissions per Million Spent (tCO2e) (TotScpe3EmssnPerMillionSpent)


    **Calculations**

    If Scope3PcmtSummary.Inflation Rate < 0, then Scope 3 Spend-Based Emissions (tCO2e) = Spent Amount /1000000 × Total Scope 3 Emissions per Million Spent (tCO2e) × (1-Scope3PcmtSummary.Inflation Rate).

    If Scope3PcmtSummary.Inflation Rate >= 0, then Scope 3 Spend-Based Emissions (tCO2e) = Spent Amount/1000000 × Total Scope 3 Emissions per Million Spent (tCO2e)/(1+Scope3PcmtSummary.Inflation Rate)


-   **Scope 3 Quantity-Based Emissions (tCO2e) (Scp3QtyBsdEmssnInTco2e)**

    **Input Fields**

    -   Scope 3 Emissions Calculation Type (Scope3EmissionsCalculationType)
    -   Purchase Quantity (PurchaseQuantity)
    -   Product Emissions Factor (ProductEmissionsFactor)
        -   Total Emissions Value (tCO2e/UoM) (TotalEmissionsValue)

    **Calculations**

    If Scope 3 Emissions Calculation Type = 'Quantity-Based Emissions' then Scope 3 Quantity-Based Emissions (tCO2e) = Purchase Quantity x ProductEmissionsFactorId.Total Emissions Value (tCO2e/UoM)


-   **Total Scope 3 Emissions per Million Spent (tCO2e) (TotScpe3EmssnPerMillionSpent)**

    **Input Fields**

    Procurement Emissions Factor Set Item (PcmtEmssnFctrSetItem)

    **Calculations**

    Total Scope 3 Emissions per Million Spent (tCO2e) = PcmtEmssnFctrSetItem.Total Scope 3 Emissions per Million Spent (tCO2e)


-   **Scope 3 Uncategorized Emissions (tCO2e) (Scp3UncatgEmissions)**

    **Input Fields**

    -   Scope 3 GHG Category (Scope3GhgCategory)

    -   Final Scope 3 Emissions (tCO2e)


    **Calculations**

    If Scope 3 GHG Category = “Uncategorized”, then Scope 3 Uncategorized Emissions (tCO2e) = Scope 3 Emissions (tCO2e)

    else Scope 3 Uncategorized Emissions (tCO2e) = 0

    **Default Value**

    0

-   **Allocated Scorecard Emissions (tCO2e) (FinalScorecardEmissions)**

    **Input Fields**

    -   Sustainability Scorecard (SustainabilityScorecard)

        -   Scope 3 Emissions Calculation Measure (Scope3EmssnCalculationMeasure)
        -   Company Annual Expenditure Emissions (CompanyAnnualExpenditureEmssn)
        -   Supplier Provided Emissions (SupplierProvidedEmissions)
        -   Percentage Based Emissions (PercentageBasedEmissions)
        -   Supplier Annual Revenue Emissions (SupplierAnnualRevenueEmissions)

    **Calculations**

    If SustainabilityScorecard.Scope 3 Emissions Calculation Measure = "Spend Based"

    Allocated Scorecard Emissions (tCO2e) = Company Annual Expenditure Emissions

    If SustainabilityScorecard.Scope 3 Emissions Calculation Measure = "Supplier Provided"

    Allocated Scorecard Emissions (tCO2e) = Supplier Provided Emissions

    If SustainabilityScorecard.Scope 3 Emissions Calculation Measure = "Percentage Based"

    Allocated Scorecard Emissions (tCO2e) = Percentage Based Emissions

    If SustainabilityScorecard.Scope 3 Emissions Calculation Measure = "Revenue Based"

    Allocated Scorecard Emissions (tCO2e) = Supplier Annual Revenue Emissions

## Related Topics

- Conversion Factors (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_calc_conversion_factors.htm)

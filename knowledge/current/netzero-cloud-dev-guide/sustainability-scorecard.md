---
title: "Sustainability Scorecard"
domain: netzero-cloud-dev-guide
topic: sustainability-scorecard
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:57.804Z
estimatedTokens: 1185
keywords: [Sustainability, Scorecard, calculate, annual, third-party, organizations, whose, data, scope, emissions]
---

# Sustainability Scorecard

> You can calculate the annual sustainability scorecard of third-party organizations whose
  data is used to calculate scope 3 emissions.

# Sustainability Scorecard

You can calculate the annual sustainability scorecard of third-party organizations whose data is used to calculate scope 3 emissions.

Here are the calculated fields:

-   **Total Spent Amount (CompanyAnnualExpenditure)**

    **Input Fields**

    -   Scope 3 Procurement Item (Scope3PcmtItem)

    -   Scope3PcmtItem.SpentAmount

    -   Scope3PcmtItem.Calculated Scope 3 Emissions (tCO2e) (CalculatedScope3EmssnInTco2e)

    -   Scope3PcmtItem.Sustainability Scorecard (SustainabilityScorecard)


    **Calculations**

    Total Spent Amount = Sum of all Scope3PcmtItem.Spent Amount associated with this scorecard.

    This value is calculated when you click Associate Items based on the Scope 3 Procurement Item.SpentAmount, Scope3PcmtItem.Calculated Scope 3 Emissions (tCO2e) and Scope3PcmtItem.Sustainability Scorecard lookup

-   **Annual Spend Based Scope 3 Emissions (CompanyAnnualExpenditureEmssn)**

    **Input Fields**

    -   Scope 3 Procurement Item (Scope3PcmtItem)
    -   Scope3PcmtItem.SpentAmount
    -   Scope3PcmtItem.Calculated Scope 3 Emissions (tCO2e) (CalculatedScope3EmssnInTco2e)
    -   Scope3PcmtItem.Sustainability Scorecard (SustainabilityScorecard)

    **Calculations**

    Total Spent Amount = Sum of all Scope3PcmtItem.Calculated Scope 3 Emissions (tCO2e) associated with this scorecard.

    This value is calculated when you click Associate Items based on the Scope 3 Procurement Item.SpentAmount, Scope3PcmtItem.Calculated Scope 3 Emissions (tCO2e) and Scope3PcmtItem.Sustainability Scorecard lookup

-   **Allocation Status (AllocationStatus)**

    **Calculations**

    If customer has allocated emissions using the allocate quick action

    Allocation Status = "Allocated"

    If customer has NOT allocated emissions using the allocate quick action / any changes(certain field) to scorecard

    Allocation Status = "Not Allocated"

    Also, anytime Annual Spend Based Scope 3 Emissions (CompanyAnnualExpenditureEmssn), Final Scorecard Emissions (FinalScorecardEmissions) change Allocation Status = Not Allocated

-   **Supplier Annual Revenue Emissions (SupplierAnnualRevenueEmissions)**

    **Input Fields**

    -   Supplier Annual Revenue (SupplierAnnualRevenue)
    -   Final Scorecard Emissions (FinalScorecardEmissions)
    -   Supplier-Provided Emissions Type (EmissionsAllocationType)
    -   Scopes to Include in Calculation (ScopestoIncludeinCalc)

    **Calculations**

    If Supplier-Provided Emissions Type = "Total Supplier Emissions"

    Supplier Annual Revenue Emissions = (Total Spent Amount / Supplier Annual Revenue ) \* (sum of relevant scopes based on the values selected in Scopes to Include in Calculation)

    else

    Supplier Annual Revenue Emissions = 0

-   **Percentage Based Emissions (PercentageBasedEmissions)**

    **Input Fields**

    -   Company Emissions Allocation Percentage (CompanyEmissionsAllocationPct)
    -   Supplier-Provided Emissions Type (EmissionsAllocationType)

    **Calculations**

    If Supplier-Provided Emissions Type = "Total Supplier Emissions"

    Percentage Based Emissions = CompanyEmissionsAllocationPct \* (sum of relevant scopes based on the values selected in Scopes to Include in Calculation)

    else

    Percentage Based Emissions = 0

-   **Supplier Provided Emissions (SupplierProvidedEmissions)**

    **Input Fields**

    -   Supplier-Provided Emissions Type (EmissionsAllocationType)
    -   Scopes to Include in Calculation (ScopestoIncludeinCalc)

    **Calculations**

    If Supplier-Provided Emissions Type = "Supplier-Allocated Emissions"

    Supplier Provided Emissions = sum of scopes based on values selected in Scopes to Include in Calculation

    Else

    Supplier Provided Emissions = 0

-   **Final Scorecard Emissions (FinalScorecardEmissions)**

    **Input Fields**

    -   Scope 3 Emissions Calculation Measure (Scope3EmssnCalculationMeasure)
    -   Annual Spend Based Scope 3 Emissions (CompanyAnnualExpenditureEmssn)
    -   Supplier Annual Revenue Emissions (SupplierAnnualRevenueEmissions)
    -   Percentage Based Emissions (PercentageBasedEmissions)
    -   Supplier Provided Emissions (SupplierProvidedEmissions)

    **Calculations**

    If Scope 3 Emissions Calculation Measure = "Spend Based"

    Final Scorecard Emissions=Annual Spend Based Scope 3 Emissions

    If Scope 3 Emissions Calculation Measure = "Revenue Based"

    Final Scorecard Emissions=Supplier Annual Revenue Emissions

    If Scope 3 Emissions Calculation Measure = "Percentage Based"

    Final Scorecard Emissions=Percentage Based Emissions

    If Scope 3 Emissions Calculation Measure = "Supplier Provided"

    Final Scorecard Emissions=Supplier Provided Emissions

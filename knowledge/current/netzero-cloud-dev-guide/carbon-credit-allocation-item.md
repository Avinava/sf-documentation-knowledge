---
title: "Carbon Credit Allocation Item"
domain: netzero-cloud-dev-guide
topic: carbon-credit-allocation-item
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:57.829Z
estimatedTokens: 291
keywords: [Carbon, Credit, Allocation, Item, emissions, activity]
---

# Carbon Credit Allocation Item

> The Carbon Credit Allocation Item object represents information about carbon credit
    allocation and emissions related to each emissions activity.

# Carbon Credit Allocation Item

The Carbon Credit Allocation Item object represents information about carbon credit allocation and emissions related to each emissions activity.

Here are the calculated fields:

-   **Total Emissions (tCO2e) (TotalEmssnInTco2e)**

    **Input Fields**

    -   AnnualEmssnInventory.Total Emissions (tCO2e) (TotalEmissions)

    **Calculations**

    Total Emissions (tCO2e) = AnnualEmssnInventory.Total Emissions (tCO2e) mapped to the emissions activity

-   **Total Carbon Credits Allocated (tCO2e) (TotalCrbnCrAllocInTco2e)**

    **Input Fields**

    -   CrbnCreditDistribution.Total Carbon Credits Allocated (tCO2e) (TotalCrbnCrAllocInTco2e)

    **Calculations**

    Total Carbon Credits Allocated (tCO2e) = Sum of CrbnCreditDistribution.Total Carbon Credits Allocated (tCO2e) for associated emissions activity

-   **Net Emissions (tCO2e) (NetEmssnInTco2e)**

    **Input Fields**

    -   Total Emissions (tCO2e) (TotalEmssnInTco2e)
    -   Total Carbon Credits Allocated (tCO2e) (TotalCrbnCrAllocInTco2e)

    **Calculations**

    Net Emissions (tCO2e) = Total Emissions (tCO2e) - Total Carbon Credits Allocated (tCO2e)

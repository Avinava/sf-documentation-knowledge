---
title: "Carbon Credit Allocation"
domain: netzero-cloud-dev-guide
topic: carbon-credit-allocation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:57.825Z
estimatedTokens: 957
keywords: [Carbon, Credit, Allocation, how, credits, allocated, organization, offset, their, emissions]
---

# Carbon Credit Allocation

> The Carbon Credit Allocation object represents information about how the carbon credits
    are allocated by an organization to offset their emissions.

# Carbon Credit Allocation

The Carbon Credit Allocation object represents information about how the carbon credits are allocated by an organization to offset their emissions.

Here are the calculated fields:

-   **Scope 1 Carbon Credit Allocation (tCO2e) (Scp1CrbnCrAllocInTco2e)**

    **Input Fields**

    -   CrbnCreditAllocItem.Total Carbon Credits Allocated (tCO2e) (TotalCrbnCrAllocInTco2e)

    **Calculations**

    Scope 1 Carbon Credit Allocation (tCO2e) = Sum of CrbnCreditAllocItem.Total Carbon Credits Allocated (tCO2e) for all scope 1 emissions activities

-   **Scope 2 Carbon Credit Allocation (tCO2e) (Scp2CrbnCrAllocInTco2e)**

    **Input Fields**

    -   CrbnCreditAllocItem.Total Carbon Credits Allocated (tCO2e) (TotalCrbnCrAllocInTco2e)

    **Calculations**

    Scope 2 Carbon Credit Allocation (tCO2e) = Sum of CrbnCreditAllocItem.Total Carbon Credits Allocated (tCO2e) for all scope 2 emissions activities

-   **Scope 3 Carbon Credit Allocation (tCO2e) (Scp3CrbnCrAllocInTco2e)**

    **Input Fields**

    -   CrbnCreditAllocItem.Total Carbon Credits Allocated (tCO2e) (TotalCrbnCrAllocInTco2e)

    **Calculations**

    Scope 3 Carbon Credit Allocation (tCO2e) = Sum of CrbnCreditAllocItem.Total Carbon Credits Allocated (tCO2e) for all scope 3 emissions activities

-   **Net Scope 1 Emissions (tCO2e) (NetScope1EmssnInTco2e)**

    **Input Fields**

    -   Scope 1 Carbon Credit Allocation (tCO2e) (Scp1CrbnCrAllocInTco2e)
    -   Total Scope 1 Emissions (tCO2e) (TotalScope1EmssnInTco2e)

    **Calculations**

    Net Scope 1 Emissions (tCO2e) = Total Scope 1 Emissions (tCO2e) - Scope 1 Carbon Credit Allocation (tCO2e)

-   **Net Scope 2 Emissions (tCO2e) (NetScope2EmssnInTco2e)**

    **Input Fields**

    -   Scope 2 Carbon Credit Allocation (tCO2e) (Scp2CrbnCrAllocInTco2e)
    -   Total Scope 2 Emissions (tCO2e) (TotalScope2EmssnInTco2e)

    **Calculations**

    Net Scope 2 Emissions (tCO2e)= Total Scope 2 Emissions (tCO2e) - Scope 2 Carbon Credit Allocation (tCO2e)

-   **Net Scope 3 Emissions (tCO2e) (NetScope3EmssnInTco2e)**

    **Input Fields**

    -   Scope 3 Carbon Credit Allocation (tCO2e) (Scp3CrbnCrAllocInTco2e)
    -   Total Scope 3 Emissions (tCO2e) (TotalScope3EmssnInTco2e)

    **Calculations**

    Net Scope 3 Emissions (tCO2e) = Total Scope 3 Emissions (tCO2e) - Scope 3 Carbon Credit Allocation (tCO2e)

-   **Total Carbon Credits Allocated (tCO2e) (TotalCrbnCrAllocInTco2e)**

    **Input Fields**

    -   Scope 1 Carbon Credit Allocation (tCO2e) (Scp1CrbnCrAllocInTco2e)
    -   Scope 2 Carbon Credit Allocation (tCO2e) (Scp2CrbnCrAllocInTco2e)
    -   Scope 3 Carbon Credit Allocation (tCO2e) (Scp3CrbnCrAllocInTco2e)

    **Calculations**

    Total Allocated Carbon Credits (tCO2e): calculated field → Scope 1 Carbon Credit Allocation (tCO2e) + Scope 2 Carbon Credit Allocation (tCO2e) + Scope 3 Carbon Credit Allocation (tCO2e)

-   **Net Emissions (tCO2e) (NetEmissionsInTco2e)**

    **Input Fields**

    -   Total Emissions (tCO2e) (TotalEmssnInTco2e)
    -   Total Carbon Credits Allocated (tCO2e) (TotalCrbnCrAllocInTco2e)

    **Calculations**

    Net Emissions (tCO2e) = Total Emissions (tCO2e) - Total Carbon Credits Allocated (tCO2e)

-   **Allocated Carbon Credits Cost (AllocatedCarbonCrCost)**

    **Input Fields**

    -   CrbnCreditDistribution.Total Carbon Credits Allocation Cost (TotalCrbnCrAllocCost)

    **Calculations**

    Allocated Carbon Credits Cost=Sum of CrbnCreditDistribution.Total Carbon Credits Allocation Cost


-   **[Carbon Credit Allocation Item](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_carbon_credit_allocation_item.htm)**
    The Carbon Credit Allocation Item object represents information about carbon credit allocation and emissions related to each emissions activity.

## Related Topics

- Carbon Credit Allocation Item (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_carbon_credit_allocation_item.htm)

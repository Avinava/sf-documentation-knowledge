---
title: "Carbon Credit Project"
domain: netzero-cloud-dev-guide
topic: carbon-credit-project
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:57.833Z
estimatedTokens: 384
keywords: [Carbon, Credit, Project, environmental, generates, credits, removing, greenhouse, gases, preventing, certain, quantity, released]
---

# Carbon Credit Project

> The Carbon Credit Project object represents information about the environmental project
    that generates carbon credits by removing greenhouse gases or preventing a certain quantity of
    greenhouse gases from being released.

# Carbon Credit Project

The Carbon Credit Project object represents information about the environmental project that generates carbon credits by removing greenhouse gases or preventing a certain quantity of greenhouse gases from being released.

Here are the calculated fields:

-   **Total Carbon Credit Allocated (tCO2e) ​​(TotalCrbnCrAllocInTco2e)**

    **Input Fields**

    -   SustainabilityCredit.Credits Allocated (CreditsAllocated)

    **Calculations**

    Total Carbon Credit Allocated (tCO2e) = Sum of SustainabilityCredit.Credits Allocated for the associated Carbon Credit Project.

-   **Total Carbon Credit Purchased (tCO2e) (TotalCrbnCrPurchInTco2e)**

    **Input Fields**

    -   SustainabilityCredit.Credits Purchased (CreditsPurchased)

    **Calculations**

    Total Carbon Credit Purchased (tCO2e) = Sum of SustainabilityCredit.Credits Purchased for the associated Carbon Credit Project.

-   **Total Spend (TotalSpend)**

    **Input Fields**

    -   SustainabilityCredit.Total Spend (TotalCost)

    **Calculations**

    Total Spend = Sum of SustainabilityCredit.Total Spend for the associated Carbon Credit Project.

-   **Total Carbon Credit Available (tCO2e) (TotalCrbnCrAvlInTco2e)**

    **Input Fields**

    -   Total Carbon Credit Purchased (tCO2e) (TotalCrbnCrPurchInTco2e)
    -   Total Carbon Credit Allocated (tCO2e) ​​(TotalCrbnCrAllocInTco2e)

    **Calculations**

    Total Carbon Credit Available (tCO2e) = Total Carbon Credits Purchased (tCO2e) - Total Carbon Credits Allocated (tCO2e)

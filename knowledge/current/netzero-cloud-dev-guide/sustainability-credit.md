---
title: "Sustainability Credit"
domain: netzero-cloud-dev-guide
topic: sustainability-credit
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:58.289Z
estimatedTokens: 277
keywords: [Sustainability, Credit, credits, part, purchase, variety, instruments, proving, positive, environmental, benefits, carbon, renewable, energy, certificates]
---

# Sustainability Credit

> The Sustainability Credit object represents information about the sustainability
    credits that are a part of a sustainability purchase. Sustainability credits can be one of a
    variety of instruments used in proving positive environmental benefits, such as carbon credits,
    renewable energy certificates, and so on.

# Sustainability Credit

The Sustainability Credit object represents information about the sustainability credits that are a part of a sustainability purchase. Sustainability credits can be one of a variety of instruments used in proving positive environmental benefits, such as carbon credits, renewable energy certificates, and so on.

Here are the calculated fields:

-   **Credits Allocated (CreditsAllocated)**

    **Input Fields**

    -   CrbnCreditDistribution.Total Carbon Credits Allocated (tCO2e) (TotalCrbnCrAllocInTco2e)

    **Calculations**

    Credits Allocated = Sum of CrbnCreditDistribution.Total Carbon Credits Allocated (tCO2e)

-   **Credits Available (CreditsAvailable)**

    **Input Fields**

    -   Credits Purchased (CreditsPurchased)
    -   Credits Allocated (CreditsAllocated)

    **Calculations**

    Credits Available = Credits Purchased - Credits Allocated

-   **Total Spend (TotalCost)**

    **Input Fields**

    -   Credits Purchased (CreditsPurchased)
    -   Cost Per Unit (CostPerUnit)

    **Calculations**

    Total Spend = Credits Purchased × Cost Per Unit

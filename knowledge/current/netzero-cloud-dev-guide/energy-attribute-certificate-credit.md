---
title: "Energy Attribute Certificate Credit"
domain: netzero-cloud-dev-guide
topic: energy-attribute-certificate-credit
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:57.948Z
estimatedTokens: 191
keywords: [Energy, Attribute, Certificate, Credit, credits, purchase]
---

# Energy Attribute Certificate Credit

> The Energy Attribute Certificate Credit object represents information about the energy
    attribute certificate credits related to energy attribute certificate purchase.

# Energy Attribute Certificate Credit

The Energy Attribute Certificate Credit object represents information about the energy attribute certificate credits related to energy attribute certificate purchase.

Here are the calculated fields:

-   **Credits Available (MWh) (CreditsAvailableInMwh)**

    **Input Fields**

    -   Credits Purchased (MWh) (CreditsPurchasedInMwh)
    -   Credits Allocated (MWh) (CreditsAllocatedInMwh)

    **Calculations**

    Credits Available (MWh) = Credits Purchased (MWh) - Credits Allocated (MWh)

-   **Total Spend (TotalCost)**

    **Input Fields**

    -   Credits Purchased (MWh) (CreditsPurchasedInMwh)
    -   Cost Per Unit (CostPerUnit)

    **Calculations**

    Total Spend = Credits Purchased (MWh) × Cost Per Unit

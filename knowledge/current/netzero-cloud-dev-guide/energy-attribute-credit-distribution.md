---
title: "Energy Attribute Credit Distribution"
domain: netzero-cloud-dev-guide
topic: energy-attribute-credit-distribution
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:57.951Z
estimatedTokens: 173
keywords: [Energy, Attribute, Credit, Distribution, junction, credits, stationary, asset, indicating, quantity, distributed, specific]
---

# Energy Attribute Credit Distribution

> The Energy Attribute Credit Distribution object represents a junction between energy
    attribute credits and stationary asset energy use indicating the quantity of credits distributed
    for a specific energy use.

# Energy Attribute Credit Distribution

The Energy Attribute Credit Distribution object represents a junction between energy attribute credits and stationary asset energy use indicating the quantity of credits distributed for a specific energy use.

Here are the calculated fields:

-   **Energy Attribute Credits Allocation Cost (EnrgyAttrCrAllocCost)**

    **Input Fields**

    -   Energy Attribute Credits Allocated (EnrgyAttrCreditsAlloc)
    -   Energy Attribute Certificate Credit (EnergyAttrCertCredit)

        Cost Per Unit (CostPerUnit)


    **Calculations**

    Energy Attribute Credits Allocation Cost = Energy Attribute Credits Allocated × EnergyAttrCertCredit.Cost Per Unit

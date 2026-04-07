---
title: "Carbon Credit Distribution"
domain: netzero-cloud-dev-guide
topic: carbon-credit-distribution
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:38:17.003Z
estimatedTokens: 168
keywords: [Carbon, Credit, Distribution, junction, sustainability, allocation, offset, emissions, items, specify, activity]
---

> The Carbon Credit Distribution object represents a junction between the sustainability
    credit and carbon credit allocation objects. To offset emissions for carbon credit allocation
    items, specify the emissions activity on this junction object.

# Carbon Credit Distribution

The Carbon Credit Distribution object represents a junction between the sustainability credit and carbon credit allocation objects. To offset emissions for carbon credit allocation items, specify the emissions activity on this junction object.

Here are the calculated fields:

-   **Total Carbon Credits Allocation Cost (TotalCrbnCrAllocCost)**

    **Input Fields**

    -   Total Carbon Credits Allocated (tCO2e) (TotalCrbnCrAllocInTco2e)
    -   SustainabilityCredit.Cost Per Unit (CostPerUnit)

    **Calculations**

    Total Carbon Credits Allocation Cost = Total Carbon Credits Allocated (tCO2e) × SustainabilityCredit.Cost Per Unit

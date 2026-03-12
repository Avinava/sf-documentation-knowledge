---
title: "Stationary Asset Water Activity"
domain: netzero-cloud-dev-guide
topic: stationary-asset-water-activity
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:58.274Z
estimatedTokens: 160
keywords: [Stationary, Asset, Water, Activity, total, volume, activities, withdrawal, consumption, discharge, assets]
---

# Stationary Asset Water Activity

> The Stationary Asset Water Activity object represents information about the total
    volume of water from the water activities, such as withdrawal, consumption, or discharge that
    are related to the stationary assets.

# Stationary Asset Water Activity

The Stationary Asset Water Activity object represents information about the total volume of water from the water activities, such as withdrawal, consumption, or discharge that are related to the stationary assets.

Here are the calculated fields:

-   **Quantity (m3) (QuantityInM3)**

    **Input Fields**

    -   Quantity (Quantity)

    **Calculations**

    Quantity (m3) = Quantity converted to m3

-   **Cost Per Unit (Cost/m3)**

    **Input Fields**

    -   Total Cost (TotalCost)
    -   Quantity (m3) (QuantityInM3)

    **Calculations**

    Cost Per Unit (Cost/m3) = Total Cost/Quantity (m3)

---
title: "Stationary Asset Water Footprint Item"
domain: netzero-cloud-dev-guide
topic: stationary-asset-water-footprint-item
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:58.286Z
estimatedTokens: 260
keywords: [Stationary, Asset, Water, Footprint, Item, total, volume, activity, withdrawal, consumption, discharge, assets, child, record]
---

# Stationary Asset Water Footprint Item

> The Stationary Asset Water Footprint Item object represents information about the total
    volume of water from each water activity, such as withdrawal, consumption, or discharge related
    to the stationary assets. Each water activity is a child record of the stationary asset water
    footprint object.

# Stationary Asset Water Footprint Item

The Stationary Asset Water Footprint Item object represents information about the total volume of water from each water activity, such as withdrawal, consumption, or discharge related to the stationary assets. Each water activity is a child record of the stationary asset water footprint object.

Here are the calculated fields:

-   **Water Activity Percentage (WaterActivityPct)**

    **Input Fields**

    -   Activity Type (ActivityType)
    -   Quantity (Ml) (QuantityInMl)
    -   Total Withdrawal (Ml) (TotalWithdrawalInMl)
    -   Total Discharge (Ml) (TotalDischargeInMl)
    -   Total Consumption (Ml) (TotalConsumptionInMl)

    **Calculations**

    If Activity Type = "Consumption" then Water Activity Percentage = (Quantity (Ml)/Total Consumption (Ml)) × 100

    If Activity Type = "Discharge" then Water Activity Percentage = (Quantity (Ml)/Total Discharge (Ml)) × 100

    If Activity Type = "Withdrawal" then Water Activity Percentage = (Quantity (Ml)/Total Withdrawal (Ml)) × 100

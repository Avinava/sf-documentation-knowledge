---
title: "Waste Footprint Item"
domain: netzero-cloud-dev-guide
topic: waste-footprint-item
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:57.819Z
estimatedTokens: 357
keywords: [Waste, Footprint, Item, volume, disposal, aggregated, generated, either, part, operations, end, life, product]
---

# Waste Footprint Item

> The Waste Footprint Item object represents the volume by waste type and disposal type of
  aggregated waste generated either as part of operations or at the end of life of a
  product.

# Waste Footprint Item

The Waste Footprint Item object represents the volume by waste type and disposal type of aggregated waste generated either as part of operations or at the end of life of a product.

Here are the calculated fields:

-   **Disposed Waste Quantity in Tonnes (WasteFootprintItem.DisposedWasteQuantityinTonnes)**

    **Input Fields**

    -   Disposed Waste Quantity in Tonnes (GeneratedWaste.DisposedWasteQuantityinTonnes)

    -   Waste Type (GeneratedWaste.WasteType)

    -   Disposal Type (GeneratedWaste.DisposalType)


    **Calculations**

    WasteFootprintItem.Disposed Waste Quantity in Tonnes = Sum of all associated GeneratedWaste.Disposed Waste Quantity in Tonnes grouped by GeneratedWaste.Waste Type and GeneratedWaste.Disposal Type.


-   **Disposed Waste Quantity Percentage (WasteFootprintItem.DisposedWasteQuantityPct)**

    **Input Fields**

    -   Disposed Waste Quantity in Tonnes (GeneratedWaste.DisposedWasteQuantityinTonnes)

    -   Waste Type (GeneratedWaste.WasteType)

    -   Disposal Type (GeneratedWaste.DisposalType)


    **Calculations**

    Var A = Sum of all (GeneratedWaste.Disposed Waste Quantity in Tonnes) associated with Waste Footprint.

    For each unique GeneratedWaste.Waste Type and GeneratedWaste.Disposal Type, create WasteFootprintItem.Disposed Waste Quantity Percentage = \[(Var A - WasteFootprintItem.Disposed Waste Quantity in Tonnes)/Var A\] × 100.

---
title: "Generated Waste"
domain: netzero-cloud-dev-guide
topic: generated-waste
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:57.746Z
estimatedTokens: 1717
keywords: [Generated, Waste, operations, treating, end-of-life, products, were, sold]
---

# Generated Waste

> The Generated Waste object represents the information on the waste generated in
  operations, the waste generated while treating end-of-life products that were sold, and so
  on.

# Generated Waste

The Generated Waste object represents the information on the waste generated in operations, the waste generated while treating end-of-life products that were sold, and so on.

Here are the calculated fields:

-   **Disposed Waste Quantity in Tonnes (DisposedWasteQuantityinTonnes)**

    **Input Fields**

    -   Disposed Waste Quantity (DisposedWasteQuantity)

    -   Disposed Waste Quantity Unit (DisposedWasteQuantityUnit)


    **Calculations**

    If Disposed Waste Quantity Unit = lb, then Disposed Waste Quantity in Tonnes = Disposed Waste Quantity × 0.000454.

    If Disposed Waste Quantity Unit = kg, then Disposed Waste Quantity in Tonnes = Disposed Waste Quantity × 0.001.

    If Disposed Waste Quantity Unit = Short Ton, then Disposed Waste Quantity in Tonnes = Disposed Waste Quantity × 0.9072.

    If Disposed Waste Quantity Unit = Long Ton, then Disposed Waste Quantity in Tonnes = Disposed Waste Quantity × 1.016.

    If Disposed Waste Quantity Unit = Tonne, then Disposed Waste Quantity in Tonnes = Disposed Waste Quantity.


-   **Scope 3 Upstream Emissions from Waste Generated in Operations (tCO2e) (Scp3UpstrmWstGenInOper)**

    **Input Fields**

    -   Emissions Factor Value (tCO2e/Tonne Waste Material) (WstDispoEmssnFctr.WstDispoEmssnFctrSetItm.EmssnFctrTco2eTonneWstMtrl)

    -   Waste Type (WstDispoEmssnFctr.WstDispoEmssnFctrSetItm.WasteType)

    -   Disposal Type(WstDispoEmssnFctr.WstDispoEmssnFctrSetItm.DisposalType)

    -   Waste Type (GeneratedWaste.WasteType)

    -   Disposal Type (GeneratedWaste.DisposalType)

    -   Disposal Site Type (GeneratedWaste.DisposalSiteType)

    -   Stationary Asset Environmental Source (GeneratedWaste.StnryAssetEnvrSrc)

    -   Supplemental Scope 3 Upstream Emissions from Waste Generated in Operations (tCO2e) (SuplScp3UpstrmWstGenInOper)

    -   Disposed Waste Quantity in Tonnes (DisposedWasteQuantityinTonnes)
    -   Scope 3 Downstream Emissions from End-of-Life Treatment of Sold Products (tCO2e) (Scp3DnstrmEndLifeSoldPrdct)
    -   Scope 1 Emissions (tCO2e) (Scope1EmissionsInTco2e)

    **Calculations**

    Var A = WstDispoEmssnFctr.WstDispoEmssnFctrSetItm.Emissions Factor Value (tCO2e/Tonne Waste Material) where (WstDispoEmssnFctr.WstDispoEmssnFctrSetItm.Waste Type = GeneratedWaste.Waste Type and WstDispoEmssnFctr.WstDispoEmssnFctrSetItm.Disposal Type = GeneratedWaste.Disposal Type)

    If StnryAssetEnvrSrc isn’t Null and Disposal Site Type = Offsite, then

    Scope 3 Upstream Emissions from Waste Generated in Operations (tCO2e) = A × GeneratedWaste.Disposed Waste Quantity in Tonnes + Supplemental Scope 3 Upstream Emissions from Waste Generated in Operations (tCO2e) and Scope 3 Downstream Emissions from End-of-Life Treatment of Sold Products (tCO2e) = Null or Zero and Scope 1 Emissions (tCO2e) = Null or Zero.

    Else, Scope 3 Upstream Emissions from Waste Generated in Operations (tCO2e) = Supplemental Scope 3 Upstream Emissions from Waste Generated in Operations (tCO2e).


-   **Scope 3 Downstream Emissions from End-of-Life Treatment of Sold Products (tCO2e) (Scp3DnstrmEndLifeSoldPrdct)**

    **Input Fields**

    -   Emissions Factor Value (tCO2e/Tonne Waste Material) (WstDispoEmssnFctr.WstDispoEmssnFctrSetItm.EmssnFctrTco2eTonneWstMtrl)

    -   Waste Type (WstDispoEmssnFctr.WstDispoEmssnFctrSetItm.WasteType)

    -   Disposal Type(WstDispoEmssnFctr.WstDispoEmssnFctrSetItm.DisposalType)

    -   Waste Type (GeneratedWaste.WasteType)

    -   Disposal Type (GeneratedWaste.DisposalType)

    -   Scope 3 Emissions Source (GeneratedWaste.Scope3EmssnSrc)

    -   Disposed Waste Quantity in Tonnes (GeneratedWaste.DisposedWasteQuantityinTonnes)
    -   Supplemental Scope 3 Downstream Emissions from End-of-Life Treatment of Sold Products (tCO2e) (GeneratedWaste.SuplScp3DnstrmEndLifeSoldPrdct)

    -   Supplemental Scope 3 Upstream Emissions from Waste Generated in Operations (tCO2e) (GeneratedWaste.SuplScp3UpstrmWstGenInOper)
    -   Scope 1 Emissions (tCO2e) (GeneratedWaste.Scope1EmissionsInTco2e)
    -   Scope 3 Upstream Emissions from Waste Generated in Operations (tCO2e) (GeneratedWaste.Scp3UpstrmWstGenInOper)

    **Calculations**

    Var A = WstDispoEmssnFctr.WstDispoEmssnFctrSetItm.Emissions Factor Value (tCO2e/Tonne Waste Material) where (WstDispoEmssnFctr.WstDispoEmssnFctrSetItm.Waste Type = GeneratedWaste.Waste Type and WstDispoEmssnFctr.WstDispoEmssnFctrSetItm.Disposal Type = GeneratedWaste.Disposal Type)

    If Scope 3 Emissions Source isn’t Null, then

    Scope 3 Downstream Emissions from End-of-Life Treatment of Sold Products (tCO2e) = A × GeneratedWaste.Disposed Waste Quantity in Tonnes + Supplemental Scope 3 Downstream Emissions from End-of-Life Treatment of Sold Products (tCO2e) and Scope 3 Upstream Emissions from Waste Generated in Operations (tCO2e) = Null and Scope 1 Emissions (tCO2e) = Null

    Else, Scope 3 Downstream Emissions from End-of-Life Treatment of Sold Products (tCO2e) = Supplemental Scope 3 Downstream Emissions from End-of-Life Treatment of Sold Products (tCO2e).


-   **Scope 1 Emissions (tCO2e) (Scope1EmissionsInTco2e)**

    **Input Fields**

    -   Emissions Factor Value (tCO2e/Tonne Waste Material) (WstDispoEmssnFctr.WstDispoEmssnFctrSetItm.EmssnFctrTco2eTonneWstMtrl)

    -   Waste Type (WstDispoEmssnFctr.WstDispoEmssnFctrSetItm.WasteType)

    -   Disposal Type(WstDispoEmssnFctr.WstDispoEmssnFctrSetItm.DisposalType)

    -   Waste Type (GeneratedWaste.WasteType)

    -   Disposal Type (GeneratedWaste.DisposalType)

    -   Disposal Site Type (GeneratedWaste.DisposalSiteType)

    -   Stationary Asset Environmental Source (GeneratedWaste.StnryAssetEnvrSrc)

    -   Supplemental Scope 1 Emissions (tCO2e) (GeneratedWaste.SuplScope1EmissionsInTco2e)

    -   Disposed Waste Quantity in Tonnes (GeneratedWaste.DisposedWasteQuantityinTonnes)
    -   Scope 3 Upstream Emissions from Waste Generated in Operations (tCO2e) (GeneratedWaste.Scp3UpstrmWstGenInOper)
    -   Scope 3 Downstream Emissions from End-of-Life Treatment of Sold Products (tCO2e) (Scp3DnstrmEndLifeSoldPrdct)

    **Calculations**

    Var A = WstDispoEmssnFctr.WstDispoEmssnFctrSetItm.Emissions Factor Value (tCO2e/Tonne Waste Material) where (WstDispoEmssnFctr.WstDispoEmssnFctrSetItm.Waste Type = GeneratedWaste.Waste Type and WstDispoEmssnFctr.WstDispoEmssnFctrSetItm.Disposal Type = GeneratedWaste.Disposal Type)

    If StnryAssetEnvrSrc isn’t Null and Disposal Site Type = Onsite, then

    Scope 1 Emissions (tCO2e) = A × GeneratedWaste.Disposed Waste Quantity in Tonnes + Supplemental Scope 1 Emissions (tCO2e) and Scope 3 Upstream Emissions from Waste Generated in Operations (tCO2e) = Null and Scope 3 Downstream Emissions from End-of-Life Treatment of Sold Products (tCO2e) = Null.

    Else, Scope 1 Emissions (tCO2e) = Supplemental Scope 1 Emissions (tCO2e).

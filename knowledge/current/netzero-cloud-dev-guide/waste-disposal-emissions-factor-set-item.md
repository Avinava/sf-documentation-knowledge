---
title: "Waste Disposal Emissions Factor Set Item"
domain: netzero-cloud-dev-guide
topic: waste-disposal-emissions-factor-set-item
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:57.813Z
estimatedTokens: 234
keywords: [Waste, Disposal, Emissions, Factor, Item, individual, factors, scope, handling]
---

# Waste Disposal Emissions Factor Set Item

> The Waste Disposal Emissions Factor Set Item object represents the individual emissions
  factors for scope 3 waste handling based on the waste type and disposal type.

# Waste Disposal Emissions Factor Set Item

The Waste Disposal Emissions Factor Set Item object represents the individual emissions factors for scope 3 waste handling based on the waste type and disposal type.

For information about converting the values from one unit of measure to another compatible unit of measure, see [Conversion Factors](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_calc_conversion_factors.htm "You can convert the values from one unit of measure to another compatible unit of measure based on the conversion factors.").

Here are the calculated fields:

-   **Emissions Factor Value (tCO2e/Tonne Waste Material) (EmssnFctrTco2eTonneWstMtrl)**

    **Input Fields**

    -   Emissions Factor Value (EmissionsFactorValue)

    -   Emissions Factor Value Unit (EmissionsFactorValueUnit)


    **Calculations**

    EmssnFctrTco2eTonneWstMtrl = EmissionsFactorValue × Conversion constant

## Related Topics

- Conversion Factors (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_calc_conversion_factors.htm)

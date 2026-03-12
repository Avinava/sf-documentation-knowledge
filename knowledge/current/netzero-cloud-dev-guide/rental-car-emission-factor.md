---
title: "Rental Car Emission Factor"
domain: netzero-cloud-dev-guide
topic: rental-car-emission-factor
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:57.792Z
estimatedTokens: 198
keywords: [Rental, Car, Emission, Factor, emissions, factors, scope, usage]
---

# Rental Car Emission Factor

> The Rental Car Emission Factor object represents the emissions factors for scope 3
  rental car usage.

# Rental Car Emission Factor

The Rental Car Emission Factor object represents the emissions factors for scope 3 rental car usage.

For information about converting the values from one unit of measure to another compatible unit of measure, see [Conversion Factors](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_calc_conversion_factors.htm "You can convert the values from one unit of measure to another compatible unit of measure based on the conversion factors.").

Here are the calculated fields:

-   **Fuel Efficiency (mpg) (FuelEfficiencyInMpg)**

    **Input Fields**

    -   Fuel Efficiency Unit (FuelEfficiencyUnit)

    -   Fuel Efficiency (FuelEfficiency)


    **Calculations**

    Fuel Efficiency (mpg) = Fuel Efficiency × Conversion factor for mpg

## Related Topics

- Conversion Factors (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_calc_conversion_factors.htm)

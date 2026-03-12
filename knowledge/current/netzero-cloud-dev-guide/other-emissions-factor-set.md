---
title: "Other Emissions Factor Set"
domain: netzero-cloud-dev-guide
topic: other-emissions-factor-set
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:57.749Z
estimatedTokens: 426
keywords: [Emissions, Factor, collection, conversion, factors, various, data, sources, neither, electricity, grid, nor, scope]
---

# Other Emissions Factor Set

> The Other Emissions Factor Set object represents a collection of emissions and
    conversion factors for various data types and sources that are neither the electricity grid nor
    scope 3 data types.

# Other Emissions Factor Set

The Other Emissions Factor Set object represents a collection of emissions and conversion factors for various data types and sources that are neither the electricity grid nor scope 3 data types.


| Permission Set Needed |
| --- |
| To enter and modify data: | Net Zero Cloud ManagerORNet Zero Cloud Admin |

For information about converting the values from one unit of measure to another compatible unit of measure, see [Conversion Factors](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_calc_conversion_factors.htm "You can convert the values from one unit of measure to another compatible unit of measure based on the conversion factors.").

Here are the calculated fields:

-   **Refrigerant Leakage Rate (kg/m2) (RefrigerantLeakageRtInKgM2)**

    **Input fields**

    -   Refrigerant Leakage Rate (kg/sqft) (RefrigerantLeakageRtInKgSqft)


    **Calculations**

    -   Refrigerant Leakage Rate (kg/m2) = Refrigerant Leakage Rate (kg/sqft) × Conversion constant for m2

-   **Refrigerant Leakage Rate (kg/sqft) (RefrigerantLeakageRtInKgSqft)**

    **Input Fields**

    -   Refrigerant Leakage Rate (kg/m2) (RefrigerantLeakageRtInKgM2)


    **Calculations**

    Refrigerant Leakage Rate (kg/sqft) = Refrigerant Leakage Rate (kg/m2) × Conversion constant for sqft


-   **[Other Emissions Factor Set Item](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_calc_other_emission_factors_set_item.htm)**
    The Other Emissions Factor Set item object represents the individual entries for emissions and conversion factors for various data types and sources that are neither the electricity grid nor scope 3 data types.

## Related Topics

- Conversion Factors (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_calc_conversion_factors.htm)
- Other Emissions Factor Set Item (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_calc_other_emission_factors_set_item.htm)

---
title: "Freight Hauling Energy Use"
domain: netzero-cloud-dev-guide
topic: freight-hauling-energy-use
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:57.715Z
estimatedTokens: 788
keywords: [Freight, Hauling, Energy, consumption]
---

# Freight Hauling Energy Use

> The Freight Hauling Energy Use object represents the energy consumption related to
    freight hauling.

# Freight Hauling Energy Use

The Freight Hauling Energy Use object represents the energy consumption related to freight hauling.


| Permission Set Needed |
| --- |
| To enter and modify data: | Net Zero Cloud ManagerORNet Zero Cloud Admin |

For information about converting the values from one unit of measure to another compatible unit of measure, see [Conversion Factors](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_calc_conversion_factors.htm "You can convert the values from one unit of measure to another compatible unit of measure based on the conversion factors.").

Here are the calculated fields:

-   **CH4 Emissions (kg) (Ch4EmissionsInKg)**

    **Input Fields**

    -   Distance (Distance)

    -   Distance Unit (DistanceUnit)

    -   Freight Hauling Emissions Factors (FrgtHaulingEmssnFctr)

    -   Weight (Weight)

    -   Weight Unit (WeightUnit)


    **Calculations**

    CH4 Emissions (kg) = Distance (where Distance Unit = “Kilometers”, convert if necessary) × Weight (where Weight Unit = “kg”, convert if necessary) × FrgtHaulingEmssnFctr.CH4 Emissions Factor (convert to kg/tonne-km ) (where FrgtHaulingEmssnFctr.Freight Hauling Mode = Freight Hauling Mode)/1000


-   **CO2 Emissions (kg) (Co2EmissionsInKg)**

    **Input Fields**

    -   Distance (Distance)

    -   Distance Unit (DistanceUnit)

    -   Freight Hauling Emissions Factors (FrgtHaulingEmssnFctr)

    -   Weight (Weight)

    -   Weight Unit (WeightUnit)


    **Calculations**

    CO2 Emissions (kg) = Distance (where Distance Unit= “Kilometers”, convert if necessary) × Weight (where Weight Unit = “kg”, convert if necessary) × FrgtHaulingEmssnFctr.CO2 Emissions Factor (convert to kg/tonne-km ) (where FrgtHaulingEmssnFctr.Freight Hauling Mode = Freight Hauling Mode)/1000


-   **N2O Emissions (kg) (N2oEmissionsInKg)**

    **Input Fields**

    -   Distance (Distance)

    -   Distance Unit (DistanceUnit)

    -   Freight Hauling Emissions Factors (FrgtHaulingEmssnFctr)

    -   Weight (Weight)

    -   Weight Unit (WeightUnit)


    **Calculations**

    N2O Emissions (kg) = Distance (where Distance Unit= “Kilometers”, convert if necessary) × Weight (where Weight Unit = “kg”, convert if necessary) × FrgtHaulingEmssnFctr.N2O Emissions Factor (convert to kg/tonne-km ) (where FrgtHaulingEmssnFctr.Freight Hauling Mode = Freight Hauling Mode)/1000


-   **Scope 3 Emissions (tCO2e) (Scope3EmissionsIntCo2e)**

    **Input Fields**

    -   N2O Emissions (kg) (N2oEmissionsInKg)

    -   CO2 Emissions (kg) (Co2EmissionsInKg)

    -   CH4 Emissions (kg) (Ch4EmissionsInKg)

    -   Scope 3 Category (Scope3Category)

    -   Supplemental Scope 3 Emissions (SuplScope3Emissions)

    -   Freight Hauling Emissions Factors (FrgtHaulingEmssnFctr)


    **Calculations**

    Scope 3 Emissions (tCO2e) = (CO2 Emissions (kg) + CH4 Emissions (kg) × FrgtHaulingEmssnFctr.Other Emissions Factors.CH4 Global Warming Potential +N2O Emissions (kg) × FrgtHaulingEmssnFctr.Other Emissions Factors.N2O Global Warming Potential)/1000 + Supplemental Scope 3 Emissions

    **Default Value**

    Supplemental Scope 3 Emissions

## Related Topics

- Conversion Factors (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_calc_conversion_factors.htm)

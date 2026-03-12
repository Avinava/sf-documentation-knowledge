---
title: "Other Emissions Factor Set Item"
domain: netzero-cloud-dev-guide
topic: other-emissions-factor-set-item
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:57.763Z
estimatedTokens: 1270
keywords: [Emissions, Factor, Item, individual, entries, conversion, factors, various, data, sources, neither, electricity, grid, nor, scope]
---

# Other Emissions Factor Set Item

> The Other Emissions Factor Set item object represents the individual entries for
    emissions and conversion factors for various data types and sources that are neither the
    electricity grid nor scope 3 data types.

# Other Emissions Factor Set Item

The Other Emissions Factor Set item object represents the individual entries for emissions and conversion factors for various data types and sources that are neither the electricity grid nor scope 3 data types.


| Permission Set Needed |
| --- |
| To enter and modify data: | Net Zero Cloud ManagerORNet Zero Cloud Admin |

## Stationary Fuels

Stationary fuels in Net Zero Cloud represent electricity, city gas, cooling, diesel, fuel oil, heat, heavy oil, kerosene, light oil, liquid natural gas (LNG), natural gas, propane,and steam. Alternatively, you can add your own custom stationary fuels using the custom fuel framework. See [Configure Custom Values for Net Zero Cloud](https://help.salesforce.com/s/articleView?id=netzero_admin_configure_additional_values.htm&language=en_US "HTML (New Window)").

| Unit/Fuel Type | CO2 Emissions Factor Unit | CH4 Emissions Factor Unit | N2O Emissions Factor Unit | Supplied CO2e Emissions Factor Unit |
| --- | --- | --- | --- | --- |
| g/km |  |  |  |  |
| g/kWh | √ | √ | √ | √ |
| g/MMBtu | √ | √ | √ | √ |
| kg/kWh | √ | √ | √ | √ |
| kg/MJ | √ | √ | √ | √ |
| kg/MMBtu | √ | √ | √ | √ |
| kg/GJ | √ | √ | √ | √ |
| tonnes/kWh |  |  |  | √ |
| tonnes/L |  |  |  |  |
| tonnes/GJ |  |  |  | √ |
| tonnes/MWh |  |  |  | √ (default) |
| tonnes/MMBtu |  |  |  | √ |

## Mobile Fuels

Standard mobile fuels supported in Net Zero Cloud are autogas/LPG, biodiesel, compressed natural gas (CNG), diesel, ethanol, and gasoline. Alternatively, you can add your own custom mobile fuels using the custom fuel framework. See [Configure Custom Values for Net Zero Cloud](https://help.salesforce.com/s/articleView?id=netzero_admin_configure_additional_values.htm&language=en_US "HTML (New Window)").

| Unit/Fuel Type | CO2 Emissions Factor Unit | CH4 Emissions Factor Unit | N2O Emissions Factor Unit | Supplied CO2e Emissions Factor Unit |
| --- | --- | --- | --- | --- |
| g/km |  | √ | √ |  |
| g/US gal | √ | √ | √ | √ |
| kg/L | √ | √ | √ | √ |
| kg/US gal | √ | √ | √ | √ (default) |
| g/L | √ (default) | √ (default) | √ (default) | √ |
| kg/kl | √ | √ | √ |  |
| g/kl | √ | √ | √ |  |
| kg/km |  | √ | √ |  |
| g/miles |  | √ | √ |  |
| kg/miles |  | √ | √ |  |
| tonnes/kl |  |  |  | √ |
| tonnes/L |  |  |  | √ |

## Mobile Fuels - Electricity

| Unit/Fuel Type | CO2 Emissions Factor Unit | CH4 Emissions Factor Unit | N2O Emissions Factor Unit | Supplied CO2e Emissions Factor Unit |
| --- | --- | --- | --- | --- |
| g/km | √ | √ | √ |  |
| g/kWh | √ | √ | √ | √ |
| g/MMBtu |  |  |  |  |
| kg/kWh | √ | √ | √ | √ (default) |
| kg/km | √ | √ | √ |  |
| g/miles | √ | √ | √ |  |
| kg/miles | √ | √ | √ |  |

## Mobile Fuels - Jet Fuel

| Unit/Fuel Type | CO2 Emissions Factor Unit | CH4 Emissions Factor Unit | N2O Emissions Factor Unit | Supplied CO2e Emissions Factor Unit |
| --- | --- | --- | --- | --- |
| g/US gal | √ | √ | √ | √ |
| kg/L | √ | √ | √ | √ |
| kg/US gal | √ | √ | √ | √ (default) |
| g/L | √ | √ | √ | √ |
| kg/kl | √ | √ | √ |  |
| g/kl | √ | √ | √ |  |
| tonnes/kl |  |  |  | √ |
| tonnes/L |  |  |  | √ |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=netzero_cloud_dev_guide)

#### Note

When you select the diesel fuel type, which can be a stationary or a mobile fuel type, ensure that the Other Emissions Factor Set Item record selected is associated with the appropriate emissions factor units for diesel. For more information, see Other Emissions Factor Set Item Supplied Emission Factors in [Conversion Factors](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_calc_conversion_factors.htm "You can convert the values from one unit of measure to another compatible unit of measure based on the conversion factors.").

Here are the calculated fields:

-   **CO2e Emissions Factor (tCO2e/MWh) (Co2eEmissionFactorInTco2eMwh)**

    **Input Fields**

    -   Electricity Emissions Factor Set (ElectricityEmssnFctrSet)

        -   CH4 Emissions Rate (Ch4EmissionRate)

        -   CH4 Emissions Rate Unit (Ch4EmissionRateUnit)

        -   CO2 Emissions Rate (Co2EmissionRate)

        -   N2O Emissions Rate (N2oEmissionRate)

        -   N2O Emissions Rate Unit (N2oEmissionRateUnit)

        -   CH4 Emissions Factor (Ch4EmissionFactor)
        -   N2O Emissions Factor (N2oEmissionFactor)
    -   Parent Emissions Factor (ParentEmissionFactor)


    **Calculations**

    If FuelType is stationary fuels, then convert CO2 Emissions Factor, CH4 Emissions Factor, and N2O Emissions Factor to tonnes/MWh.

    CO2e Emissions Factor (tCO2e/MWh) =CO2 Emissions Factor + CH4 Emissions Factor × ParentEmissionFactor.CH4 Global Warming Potential + N2O Emissions Factor × ParentEmissionFactor.N2O Global Warming Potential

-   **CO2e Emissions Factor (tCO2e/GJ) (Co2eEmissionFactorInTco2eGj)**

    **Input Fields**

    -   CO2e Emissions Factor (tCO2e/MWh) (Co2eEmissionFactorInTco2eMwh)

    **Calculations**

    CO2e Emissions Factor (tCO2e/GJ) = CO2e Emissions Factor (tCO2e/MWh) × Conversion factor for tonnes/GWhGJ

## Related Topics

- Conversion Factors (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_calc_conversion_factors.htm)

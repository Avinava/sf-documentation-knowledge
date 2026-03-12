---
title: "Conversion Factors"
domain: netzero-cloud-dev-guide
topic: conversion-factors
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:57.566Z
estimatedTokens: 1479
keywords: [Conversion, Factors, convert, unit, measure, another, compatible, Energy, Weight, Conversions, Volume, Constants, Area, Waste, Generation]
---

# Conversion Factors

> You can convert the values from one unit of measure to another compatible unit of
  measure based on the conversion factors.

# Conversion Factors

You can convert the values from one unit of measure to another compatible unit of measure based on the conversion factors.

## Energy Unit Conversion

Energy unit conversions are standard across all fuel types.

Information Source: [U.S. National Institute of Standards and Technology](https://www.govinfo.gov/content/pkg/GOVPUB-C13-f10c2ff9e7af2091314396a2d53213e4/pdf/GOVPUB-C13-f10c2ff9e7af2091314396a2d53213e4.pdf)

| Energy Units | Multiplication Factor to Get kWh |
| --- | --- |
| kWh | 1 |
| GWh | 1000000 |
| MWh | 1000 |
| GJ | 277.7777777 |
| MJ | 0.2777777777 |
| kcal | 0.00116222 |
| MMBtu/MBtu | 293.0710701 |
| Therm | 29.30710701 |
| kBtu | 0.29307107 |

## Weight Conversions

Information Source: [U.S. National Institute of Standards and Technology](https://www.govinfo.gov/content/pkg/GOVPUB-C13-f10c2ff9e7af2091314396a2d53213e4/pdf/GOVPUB-C13-f10c2ff9e7af2091314396a2d53213e4.pdf)

| Weight Units | Multiplication Factor in Kg |
| --- | --- |
| Kg | 1 |
| lbs | 0.45359 |
| Tonnes | 1000 |
| Short Tons | 907.18474 |
| Long Tons | 1016.04700 |
| g | 0.00100 |

## Volume Conversions

Information Source: [U.S. National Institute of Standards and Technology](https://www.govinfo.gov/content/pkg/GOVPUB-C13-f10c2ff9e7af2091314396a2d53213e4/pdf/GOVPUB-C13-f10c2ff9e7af2091314396a2d53213e4.pdf)

| Volume Units | Multiplication Factor to get m3 |
| --- | --- |
| m3 | 1.0000000000 |
| 1000 m3 | 1000 |
| ccf | 2.83168 |
| scf | 0.0283168 |

| Volume Units | Multiplication Factor to get Liter | Multiplication Factor to get m3 | Multiplication Factor to get Megaliters |
| --- | --- | --- | --- |
| Liters | 1.000000000 | 0.001000000 |  |
| US Gallon | 3.785411818 | 0.003785412 |  |
| UK Gallon | 4.545918367 | 0.004545918 |  |
| Kiloliters | 1000.000000000 | 1.000000000 |  |
| m3 | 1000.000000000 | 1.000000000 | 0.001000000 |

## Other Conversion Constants

Information Source: [U.S. National Institute of Standards and Technology](https://www.govinfo.gov/content/pkg/GOVPUB-C13-f10c2ff9e7af2091314396a2d53213e4/pdf/GOVPUB-C13-f10c2ff9e7af2091314396a2d53213e4.pdf)

| From Unit | To Unit | Multiplication Factor |
| --- | --- | --- |
| L per hr | G per hr | 0.264172050 |
| Miles | km | 1.60934 |
| g | Kg | 0.001 |
| Nautical miles | Miles | 1.15 |

To convert:

-   L per 100km to mpg

    mpg = 235.215 / (L per 100km)

-   mpg to L per 100km

    L per 100km = 235.215 / (mpg)


## Area Conversions

Information Source: [U.S. National Institute of Standards and Technology](https://www.govinfo.gov/content/pkg/GOVPUB-C13-f10c2ff9e7af2091314396a2d53213e4/pdf/GOVPUB-C13-f10c2ff9e7af2091314396a2d53213e4.pdf)

| From Unit | To Unit | Multiplication Factor |
| --- | --- | --- |
| m2 | sqft | 10.76391042 |

## Conversion Factors for Waste Generation

Here are the conversion factors for waste generation.

| Unit/Waste Material | Multiplication Factor |
| --- | --- |
| lb CO2e/lb Waste Material | 1 |
| kg CO2e/kg Waste Material | 1 |
| tCO2e/Long Ton Waste Material | 0.98421 |
| tCO2e/Metric Tonne Waste Material | 1 |
| tCO2e/Short Ton Waste Material | 1.10231 |

## Energy Conversions

Here are the conversion factors for Other Emissions Factor Set Item and Electricity Emissions Factor Set

| Co2, N2o, CH4 Emissions | tCO2e/MWh | tonnes/GWh | kg/KWh (Stationary Asset Energy Use) |
| --- | --- | --- | --- |
| g/kWh | 0.00100 | 1.00000000 | 0.00100000 |
| g/MMBtu | 0.0000034 | 0.00341214 | 0.0000034 |
| kg/MMBtu | 0.0034121 | 3.41214163 | 0.0034121 |
| kg/GJ | 0.0036000 | 3.60000000 | 0.0036000 |
| kg/kWh | 1 | 1000.00000000 | 1 |
| kg/MJ | 3.6000000010 | 3600.00000101 | 3.6000000010 |
| tonnes/MWh | 1 | 1000.00000000 |  |
| tonnes/kWh | 1000 | 1000000.00000000 |  |
| Kg/MWh | 0.001 | 1.00000000 |  |
| lbs/MWh | 0.00045 | 0.45359200 |  |
| lbs / GWh | 0.0000004536 | 0.00045359 |  |

## Volume Conversions

Here are the conversion factors for Other Emissions Factor Set Item (Stationary Asset Energy Use, Vehicle Asset Energy Use, and Rental Car Energy Use)

| Unit/Fuel Type | CO2 (Kg/km) | CH4, N2O (kg/km) | Jet Fuel (Kg/Gallon) |
| --- | --- | --- | --- |
| g/US gal | 0.00026 | 0.00100 | 0.001 |
| kg/L | 1 | 3.785411818 | 3.78541 |
| kg/US gal | 0.264172050 | 1 | 1 |
| g/L | 0.00100 | 0.003785412 | 0.003785412 |
| kg/kl | 0.001000000 | 0.003785412 | 0.003785412 |
| g/kl | 0.0000010 | 0.000003785 | 0.000003785 |
| g/km | 0.001 | 0.001 |  |
| g/miles | 0.00062 | 0.00062 |  |
| kg/miles | 0.62137 | 0.62137 |  |

## Calorific Value Conversions

| Units | Multiplication Factor to get kWh/m3 |
| --- | --- |
| kWh/L | 1000.000000000 |
| kWh/m3 | 1 |
| kWh/scf | 35.3147248 |
| MMBtu/gal | 77421.1853797 |
| MMBtu/scf | 10349.7241955 |

## Freight Hauling Conversions

Here are the conversion factors for Freight Hauling Energy Use.

| Units | Multiplication Factor to get kg/tonne-km |
| --- | --- |
| kg/tonne-km | 1 |
| g/ton-mi | 0.00062 |

## Other Emissions Factor Set Item Supplied Emission Factors

Here are the conversion factors for Stationary Asset Energy Use and Vehicle Asset Energy Use.

| Supplied Emissions Factor Unit | Multiplication Factor for Stationary Fuel (tonnes/MWh) | Multiplication Factor for Mobile Fuel/Jet Fuel (kg/Gal) |
| --- | --- | --- |
| g/kWh | 0.00100 |  |
| g/MMBtu | 0.0000034121 |  |
| kg/kWh | 1 |  |
| kg/MJ | 3.6000000010 |  |
| kg/MMBtu | 0.0034121 |  |
| kg/GJ | 0.0036000 |  |
| g/US gal |  | 0.00100 |
| kg/L |  | 3.785411818 |
| kg/US gal |  | 1 |
| g/L |  | 0.003785412 |
| tonnes/kl |  | 0.264172050 |
| tonnes/kWh | 1000 |  |
| tonnes/L |  | 3785.411818000 |
| tonnes/GJ | 3.6000000 |  |
| tonnes/MWh | 1 |  |
| tonnes/MMBtu | 3.4121416 |  |

-   **[Conversion Calculations](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_calc_conversions.htm)**
    You can convert the values from one unit of measure to another compatible unit of measure based on the conversion factors.

## Related Topics

- Conversion Calculations (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_calc_conversions.htm)

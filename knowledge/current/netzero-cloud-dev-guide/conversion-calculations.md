---
title: "Conversion Calculations"
domain: netzero-cloud-dev-guide
topic: conversion-calculations
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:57.572Z
estimatedTokens: 1503
keywords: [Conversion, Calculations, convert, unit, measure, another, compatible, factors, MMBtu, gal, kWh, Tonnes, MWh, tCO2e]
---

# Conversion Calculations

> You can convert the values from one unit of measure to another compatible unit of
  measure based on the conversion factors.

# Conversion Calculations

You can convert the values from one unit of measure to another compatible unit of measure based on the conversion factors.

## Convert MMBtu/gal to kWh/m3

The conversion factor is derived by converting the energy and volume units separately using standard values from U.S. National Institute of Standards and Technology (NIST).

Information Sources

-   [NIST Special Publication 811 (Guide for the Use of the SI)](https://www.nist.gov/pml/special-publication-811): Primary source for official unit conversions. The factors are listed in Appendix B.
-   [U.S. Energy Information Administration (EIA)](https://www.eia.gov/energyexplained/units-and-calculators/energy-conversion-calculators.php): Uses these standard factors for its energy data reporting.

Calculations

-   Energy Conversion (MMBtu to kWh)

    Determine the number of kilowatt-hours (kWh) contained within one Million British Thermal Units (MMBtu).

    -   1 MMBtu = 1,000,000 Btu
    -   1 Btu = 0.000293071 kWh
    -   So, 1 MMBtu = 1,000,000 × 0.000293071 kWh = 293.071 kWh
-   Volume Conversion (Gallon to m³)

    Determine the number of cubic meters (m³) contained iwithin one US gallon.

    -   1 US gallon = 0.003785412 m³
-   Final Calculation

    Combine these values to get the final conversion factor.

    -   Factor = kWh per MMBtu / m³ per gallon = 293.071 kWh / 293.071 kWh = ≈77,421.5

## Convert Kg/MMBtu to Tonnes/MWh

The conversion factor is derived by determining how many kilograms/Million British Thermal Units (kg/MMBtu) are equivalent to one tonne/Megawatt-hour (tonne/MWh). This process involves converting both the mass and the energy units using standard factors.

Information Sources

-   [NIST Special Publication 811 (Guide for the Use of the SI)](https://www.nist.gov/pml/special-publication-811): Provides the foundational conversion from Btu to the joule, which underpins the MMBtu to MWh calculation.
-   [U.S. Energy Information Administration (EIA)](https://www.eia.gov/energyexplained/units-and-calculators/): Uses these standard factors for its energy data reporting.

Calculations

-   Energy Conversion (MWh to MMBtu)

    Relate the two energy units. A MWh is a larger unit of energy than a MMBtu

    -   1 MWh ≈ 3.412 MMBtu
-   Mass Conversion (Tonnes to kg)

    Relate the mass units

    -   1 metric ton (tonne) = 1,000 kg
-   Final Calculation

    Combine these values to find the equivalence

    -   1 tonne / 1 MWh = 1,000 kg / 3.41214 MMBtu = ≈293.071 kg/MMBtu

        This conversion shows that 1 tonne/MWh is equivalent to 293.071 kg/MMBtu. Therefore, to convert your value from the smaller kg/MMBtu unit to the larger tonne/MWh unit, you must divide your values.

        1 kg/MMBtu = 1 / 293.071 = 0.0034121 tonnes/MWh


## Convert Kg/MMBtu to tCO2e/MWh

The conversion involves these steps:

1\. Convert mass (g to tonne).

2\. Convert energy (MMBtu to MWh).

3\. Account for the global warming potential of the gas.

Information Sources

-   [NIST Special Publication 811 (Guide for the Use of the SI)](https://www.nist.gov/pml/special-publication-811): Provides the foundational energy conversion factors (Btu to joules) that underpin the MWh to MMBtu calculation.
-   [U.S. Energy Information Administration (EIA)](https://www.eia.gov/energyexplained/units-and-calculators/energy-conversion-calculators.php): Publishes and uses these standard energy conversion factors in its data and reports.
-   [Intergovernmental Panel on Climate Change (IPCC)](https://www.ipcc.ch/reports/): The leading international body to assess climate change and the primary source for official global warming potential (GWP) values. GWP values are updated in its assessment reports (e.g., AR5, AR6).

Calculations

-   Step 1 and 2: Convert g/MMBtu to tonnes/MWh

    Combines the mass and energy conversions into a single factor. The relationship is based on how many grams/Million British Thermal Units (g/MMBtu) are equivalent to one tonne/Megawatt-hour (tonne/MWh).

    -   Energy Equivalence: 1 MWh is equivalent to approximately 3.412 MMBtu.
    -   Mass Equivalence: 1 metric tonne equals 1,000,000 grams.

    Combining these values gives the factor:

    1 tonne / 1 MWh = 1,000,000 g / 3.41214 MMBtu = ≈293,071 g/MMBtu

    Divide by 293,071 to convert from g/MMBtu to tonnes/MWh.

    1 g/MMBtu = 1 / 293,071 = 0.0000034121 tonnes/MWh

    1 kg/MMBtu = 0.0000034121 tonnes/MWh \* 1000 = 0.0034121 tonnes/MWh

-   Step 3: Account for CO₂e

    Tonnes of carbon dioxide equivalent (tCO2e) standardizes the impact of different greenhouse gases.

    -   For CO₂: The Global Warming Potential (GWP) of carbon dioxide is 1. Therefore, 1 tonne of CO₂ = 1 tCO2e. For this specific gas, the conversion is complete after step 2.

## Convert Kg/MMBtu to Kg/KWh

Since the mass unit (kg) is the same in both the starting and ending units, you only need to convert the energy unit in the denominator.

Information Sources

-   [NIST Special Publication 811 (Guide for the Use of the SI)](https://www.nist.gov/pml/special-publication-811): Provides the foundational conversion factors (like Btu to joule) that are used to calculate the kWh to MMBtu relationship.
-   [U.S. Energy Information Administration (EIA)](https://www.eia.gov/energyexplained/units-and-calculators/energy-conversion-calculators.php): Primary source for energy data and uses these standard conversion factors in all its reporting and analysis.

Calculations

-   The entire conversion is based on the standard energy relationship between Million British Thermal Units (MMBtu) and kilowatt-hour (kWh).

    -   Energy Conversion: One MMBtu is a significantly larger unit of energy than one kWh. The precise relationship is: 1 MMBtu = 293.071 kWh

    Because you convert from a unit with a large denominator (MMBtu) to one with a much smaller denominator (kWh), the final numerical value is also smaller. You achieve this by dividing by the conversion factor. Therefore, 1 kg/MMBtu = 0.0034121 kg/KWh

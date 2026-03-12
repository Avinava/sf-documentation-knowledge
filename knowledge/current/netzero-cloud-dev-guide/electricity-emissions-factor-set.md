---
title: "Electricity Emissions Factor Set"
domain: netzero-cloud-dev-guide
topic: electricity-emissions-factor-set
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:57.589Z
estimatedTokens: 2372
keywords: [Electricity, Emissions, Factor, factors, convert, usage, CO₂e, CO₂, CH₄, N₂O, record, holds, data, breakdown, sources]
---

# Electricity Emissions Factor Set

> The Electricity Emissions Factor Set object represents the factors that are used to
    convert electricity usage into CO₂e, CO₂, CH₄, and N₂O values. This record holds data on the
    breakdown of sources of electricity by fuel type (grid mixes).

# Electricity Emissions Factor Set

The Electricity Emissions Factor Set object represents the factors that are used to convert electricity usage into CO₂e, CO₂, CH₄, and N₂O values. This record holds data on the breakdown of sources of electricity by fuel type (grid mixes).


| Permission Set Needed |
| --- |
| To enter and modify data: | Net Zero Cloud ManagerORNet Zero Cloud Admin |

For information about converting the values from one unit of measure to another compatible unit of measure, see [Conversion Factors](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_calc_conversion_factors.htm "You can convert the values from one unit of measure to another compatible unit of measure based on the conversion factors.").

The renewable energy fields are the sum of biomass, geothermal, solar, wind, and hydroelectricity values.

Total Renewable Energy is also delineated into a total that includes hydroelectricity sources \[Total Renewable Energy (kWh)\] and a total that doesn’t include Hydroelectricity sources \[Total Renewable Energy Excluding Hydro (kWh)\].

Here are the calculated fields:

-   **CO2e Emissions Rate (tonnes/MWh) (Co2eEmissionRateInTmwh)**

    **Input Fields**

    -   CH4 Emissions Rate (Ch4EmissionRate)

    -   CH4 Emissions Rate Unit (Ch4EmissionRateUnit)

    -   CO2 Emissions Rate (Co2EmissionRate)

    -   N2O Emissions Rate (N2oEmissionRate)

    -   N2O Emissions Rate Unit (N2oEmissionRateUnit)

    -   CO2e Emissions Rate (Co2eEmissionRate)

    -   CO2e Emissions Rate (tonnes/MWh) (Co2eEmissionRateInTmwh)

    -   CO2e Emissions Rate Unit (Co2eEmissionRateUnit)

    -   CH4 Emissions Rate (tonnes/GWh) (Ch4EmissionRateInTgwh)

    -   CO2 Emissions Rate (tonnes/MWh) (Co2EmissionRateInTmwh)

    -   N2O Emissions Rate (tonnes/GWh) (N2oEmissionRateInTgwh)

    -   Parent Emissions Factor (ParentEmissionFactor)

    -   Other Emission Factor Set (OtherEmssnFctrSet)

    -   CH4 Global Warming Potential (Ch4GlblWarmingPot)

    -   N2O Global Warming Potential (N2oGlblWarmingPot)


    **Calculations**

    Convert CH4 Emissions Rate, CO2 Emissions Rate, N2O Emissions Rate to tonnes/MWh.

    If (Co2eEmissionRate == null/0) then

    CO2e Emissions Rate (tonnes/MWh) = CO2 Emissions Rate (tonnes/MWh) + CH4 Emissions Rate (tonnes/GWh) × OtherEmssnFctrSet.CH4 Global Warming Potential/1000 + N2O Emissions Rate (tonnes/GWh) × OtherEmssnFctrSet.N2O Global Warming Potential/1000

    else

    CO2e Emissions Rate (tonnes/MWh) = CO2e Emissions Rate × Conversion constant for tCO2e/MWh

-   **CH4 Emissions Rate (tonnes/GWh) (Ch4EmissionRateInTgwh)**

    **Input Fields**

    -   CH4 Emissions Rate (Ch4EmissionRate)

    -   CH4 Emissions Rate Unit (Ch4EmissionRateUnit)


    **Calculations**

    CH4 Emissions Rate (tonnes/GWh) = CH4 Emissions Rate × Conversion constant for tCO2e/GWh

-   **CO2 Emissions Rate (tonnes/MWh) (Co2EmissionRateInTmwh)**

    **Input Fields**

    -   CO2 Emissions Rate (Co2EmissionRate)

    -   CO2 Emissions Rate Unit (Co2EmissionRateUnit)


    **Calculations**

    CO2 Emissions Rate (tonnes/MWh) = CO2 Emissions Rate × Conversion constant for tCO2e/MWh

-   **Market-Based CO2e Emissions Rate (tonnes/MWh) (MktBsdCo2eEmissionRateInTmwh)**

    **Input Fields**

    -   Market-Based CO2e Emissions Rate (MktBsdCo2eEmissionRate)

    -   Market-Based CO2e Emissions Rate Unit (MktBsdCo2eEmissionRateUnit)


    **Calculations**

    Market-Based CO2e Emissions Rate (tonnes/MWh) = Market-Based CO2e Emissions Rate × Conversion constant for tCO2e/MWh

-   **N2O Emissions Rate (tonnes/GWh) (N2oEmissionRateInTgwh)**

    **Input Fields**

    -   N2O Emissions Rate (N2oEmissionRate)

    -   N2O Emissions Rate Unit (N2oEmissionRateUnit)


    **Calculations**

    N2O Emissions Rate (tonnes/GWh) = N2O Emissions Rate × Conversion constant for tCO2e/GWh

-   **Location-Based Mix Percentage (LocationBasedMixPct)**

    **Input Fields**

    -   Location-Based Biomass Mix Percentage (LocationBasedBiomassMixPct)

    -   Location-Based Coal Mix Percentage (LocationBasedCoalMixPct)

    -   Location-Based Gas Mix Percentage (LocationBasedGasMixPct)

    -   Location-Based Hydroelectricity Mix Percentage (LocationBasedHydroMixPct)

    -   Location-Based Nuclear Mix Percentage (LocationBasedNuclearMixPct)

    -   Location-Based Oil Mix Percentage (LocationBasedOilMixPct)

    -   Location-Based Other Fuel Mix Percentage (LocationBasedOtherFuelMixPct)

    -   Location-Based Solar Mix Percentage (LocationBasedSolarMixPct)

    -   Location-Based Geothermal Mix Percentage (LocBasedGeothermalMixPct)

    -   Location-Based Other Fossil Fuel Mix Percentage (LocBasedOtherFossilFuelMixPct)

    -   Location-Based Wind Mix Percentage (LocationBasedWindMixPct)


    **Calculations**

    Location-Based Mix Percentage = Sum (Location-Based Biomass Mix Percentage + Location-Based Coal Mix Percentage + Location-Based Gas Mix Percentage + Location-Based Hydroelectricity Mix Percentage + Location-Based Nuclear Mix Percentage + Location-Based Oil Mix Percentage + Location-Based Other Fuel Mix Percentage + Location-Based Solar Mix Percentage + Location-Based Geothermal Mix Percentage + Location-Based Other Fossil Fuel Mix Percentage + Location-Based Wind Mix Percentage)

-   **Market-Based Mix Percentage (MarketBasedMixPct)**

    **Input Fields**

    -   Market-Based Biomass Mix Percentage (MarketBasedBiomassMixPct)

    -   Market-Based Coal Mix Percentage (MarketBasedCoalMixPct)

    -   Market-Based Gas Mix Percentage (MarketBasedGasMixPct)

    -   Market-Based Hydroelectric Mix Percentage (MarketBasedHydroMixPct)

    -   Market-Based Nuclear Mix Percentage (MarketBasedNuclearMixPct)

    -   Market-Based Oil Mix Percentage (MarketBasedOilMixPct)

    -   Market-Based Other Fuel Mix Percentage (MarketBasedOtherFuelMixPct)

    -   Market-Based Solar Mix Percentage (MarketBasedSolarMixPct)

    -   Market-Based Geothermal Mix Percentage (MktBasedGeothermalMixPct)

    -   Market-Based Other Fossil Fuel Mix Percentage (MktBasedOtherFossilFuelMixPct)

    -   Market-Based Wind Mix Percentage (MarketBasedWindMixPct)


    **Calculations**

    Market-Based Mix Percentage = Sum(Market-Based Biomass Mix Percentage + Market-Based Coal Mix Percentage + Market-Based Gas Mix Percentage + Market-Based Hydroelectric Mix Percentage + Market-Based Nuclear Mix Percentage + Market-Based Oil Mix Percentage + Market-Based Other Fuel Mix Percentage + Market-Based Solar Mix Percentage + Market-Based Geothermal Mix Percentage + Market-Based Other Fossil Fuel Mix Percentage + Market-Based Wind Mix Percentage)

-   **Location-Based Renewable Energy Excluding Hydroelectricity Percentage (LocBsdRenewableEnrgyNonHydro)**

    **Input Fields**

    -   Location-Based Biomass Mix Percentage (LocationBasedBiomassMixPct)

    -   Location-Based Solar Mix Percentage (LocationBasedSolarMixPct)

    -   Location-Based Geothermal Mix Percentage (LocBasedGeothermalMixPct)

    -   Location-Based Wind Mix Percentage (LocationBasedWindMixPct)


    **Calculations**

    Location-Based Renewable Energy Excluding Hydroelectricity Percentage = Sum(Location-Based Biomass Mix Percentage + Location-Based Solar Mix Percentage + Location-Based Geothermal Mix Percentage +Location-Based Wind Mix Percentage)

-   **Location-Based Renewable Energy Percentage (LocBasedRenewableEnergyPct)**

    **Input Fields**

    -   Location-Based Biomass Mix Percentage (LocationBasedBiomassMixPct)

    -   Location-Based Hydroelectricity Mix Percentage (LocationBasedHydroMixPct)

    -   Location-Based Solar Mix Percentage (LocationBasedSolarMixPct)

    -   Location-Based Geothermal Mix Percentage (LocBasedGeothermalMixPct)

    -   Location-Based Wind Mix Percentage (LocationBasedWindMixPct)


    **Calculations**

    Location-Based Renewable Energy Percentage = Sum(Location-Based Biomass Mix Percentage + Location-Based Solar Mix Percentage + Location-Based Geothermal Mix Percentage +Location-Based Wind Mix Percentage + Location-Based Hydroelectricity Mix Percentage)

-   **Market-Based Renewable Energy Excluding Hydroelectricity Percentage (MktBsdRenewableEnrgyNonHydro)**

    **Input Fields**

    -   Market-Based Biomass Mix Percentage (MarketBasedBiomassMixPct)

    -   Market-Based Solar Mix Percentage (MarketBasedSolarMixPct)

    -   Market-Based Geothermal Mix Percentage (MktBasedGeothermalMixPct)

    -   Market-Based Wind Mix Percentage (MarketBasedWindMixPct)


    **Calculations**

    Market-Based Renewable Energy Excluding Hydroelectricity Percentage = Sum(Market-Based Biomass Mix Percentage + Market-Based Solar Mix Percentage + Market-Based Geothermal Mix Percentage + Market-Based Wind Mix Percentage)

-   **Market-Based Renewable Energy Percentage (MktBasedRenewableEnergyPct)**

    **Input Fields**

    -   Market-Based Biomass Mix Percentage (MarketBasedBiomassMixPct)

    -   Market-Based Hydroelectric Mix Percentage (MarketBasedHydroMixPct)

    -   Market-Based Solar Mix Percentage (MarketBasedSolarMixPct)

    -   Market-Based Geothermal Mix Percentage (MktBasedGeothermalMixPct)

    -   Market-Based Wind Mix Percentage (MarketBasedWindMixPct)


    **Calculations**

    Market-Based Renewable Energy Percentage = Sum(Market-Based Biomass Mix Percentage + Market-Based Solar Mix Percentage + Market-Based Geothermal Mix Percentage + Market-Based Wind Mix Percentage + Market-Based Hydroelectric Mix Percentage

## Related Topics

- Conversion Factors (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_calc_conversion_factors.htm)

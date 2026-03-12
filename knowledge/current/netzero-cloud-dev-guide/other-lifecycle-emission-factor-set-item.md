---
title: "Other Lifecycle Emission Factor Set Item"
domain: netzero-cloud-dev-guide
topic: other-lifecycle-emission-factor-set-item
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:57.771Z
estimatedTokens: 3455
keywords: [Lifecycle, Emission, Factor, Item, individual, emissions, fuel, calculate, occur, throughout, extraction, end-of-life]
---

# Other Lifecycle Emission Factor Set Item

> The Other Lifecycle Emission Factor Set Item object represents the individual emissions
  factor for a fuel used to calculate emissions that occur throughout its lifecycle, from extraction
  to end-of-life.

# Other Lifecycle Emission Factor Set Item

The Other Lifecycle Emission Factor Set Item object represents the individual emissions factor for a fuel used to calculate emissions that occur throughout its lifecycle, from extraction to end-of-life.

For information about converting the values from one unit of measure to another compatible unit of measure, see [Conversion Factors](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_calc_conversion_factors.htm "You can convert the values from one unit of measure to another compatible unit of measure based on the conversion factors.").

Here are the calculated fields:

-   **Well-To-Tank CO2e Emissions Factor (tCO2e/MWh) (Well2TkCo2eEmssnFctrMwh)**

    **Input Fields**

    -   Well-To-Tank CO2 Emissions Factor (Well2TkCo2EmssnFctr)
    -   Well-To-Tank CO2 Emissions Factor Unit (Well2TkCo2EmssnFctrUnit)
    -   Well-To-Tank CH4 Emissions Factor (Well2TkCh4EmssnFctr)
    -   Well-To-Tank CH4 Emissions Factor Unit (Well2TkCh4EmssnFctrUnit)
    -   Well-To-Tank N2O Emissions Factor (Well2TkN2oEmssnFctr)
    -   Well-To-Tank N2O Emissions Factor Unit (Well2TkN2oEmssnFctrUnit)
    -   Parent Emissions Factor (ParentEmissionFactorId)
        -   CH4 Global Warming Potential (Ch4GlblWarmingPot)
        -   N2O Global Warming Potential (N2oGlblWarmingPot)

    **Calculations**

    Well-To-Tank CO2e Emissions Factor (tCO2e/MWh) = 0 + Well-To-Tank CO2 Emissions Factor × (conversion factor for tonnes/MWh based on Well-To-Tank CO2 Emissions Factor Unit)

    \+ Well-To-Tank CH4 Emissions Factor × (conversion factor for tonnes/MWh based on Well-To-Tank CH4 Emissions Factor Unit) × ParentEmissionFactor.CH4 Global Warming Potential

    \+ Well-To-Tank N2O Emissions Factor × (conversion factor for tonnes/MWh based on Well-To-Tank N2O Emissions Factor Unit) × ParentEmissionFactor.N2O Global Warming Potential

-   **Well-To-Tank CO2e Emissions Factor (tCO2e/Km) (Well2TkCo2eEmssnFctrKm)**

    **Input Fields**

    -   Well-To-Tank CO2 Emissions Factor (Well2TkCo2EmssnFctr)
    -   Well-To-Tank CO2 Emissions Factor Unit (Well2TkCo2EmssnFctrUnit)
    -   Well-To-Tank CH4 Emissions Factor (Well2TkCh4EmssnFctr)
    -   Well-To-Tank CH4 Emissions Factor Unit (Well2TkCh4EmssnFctrUnit)
    -   Well-To-Tank N2O Emissions Factor (Well2TkN2oEmssnFctr)
    -   Well-To-Tank N2O Emissions Factor Unit (Well2TkN2oEmssnFctrUnit)
    -   Parent Emissions Factor (ParentEmissionFactorId)
        -   CH4 Global Warming Potential (Ch4GlblWarmingPot)
        -   N2O Global Warming Potential (N2oGlblWarmingPot)

    **Calculations**

    Well-To-Tank CO2e Emissions Factor (tCO2e/Km) = ((0 + Well-To-Tank CO2 Emissions Factor × (conversion factor for kg/km based on Well-To-Tank CO2 Emissions Factor Unit)

    \+ Well-To-Tank CH4 Emissions Factor × (conversion factor for kg/km based on Well-To-Tank CH4 Emissions Factor Unit) × ParentEmissionFactor.CH4 Global Warming Potential

    \+ Well-To-Tank N2O Emissions Factor × (conversion factor for kg/km based on Well-To-Tank N2O Emissions Factor Unit) × ParentEmissionFactor.N2O Global Warming Potential) / 1000)

-   **Well-To-Tank CO2e Emissions Factor (tCO2e/Kl) (Well2TkCo2eEmssnFctrKl)**

    **Input Fields**

    -   Well-To-Tank CO2 Emissions Factor (Well2TkCo2EmssnFctr)
    -   Well-To-Tank CO2 Emissions Factor Unit (Well2TkCo2EmssnFctrUnit)
    -   Well-To-Tank CH4 Emissions Factor (Well2TkCh4EmssnFctr)
    -   Well-To-Tank CH4 Emissions Factor Unit (Well2TkCh4EmssnFctrUnit)
    -   Well-To-Tank N2O Emissions Factor (Well2TkN2oEmssnFctr)
    -   Well-To-Tank N2O Emissions Factor Unit (Well2TkN2oEmssnFctrUnit)
    -   Parent Emissions Factor (ParentEmissionFactorId)
        -   CH4 Global Warming Potential (Ch4GlblWarmingPot)
        -   N2O Global Warming Potential (N2oGlblWarmingPot)

    **Calculations**

    Well-To-Tank CO2e Emissions Factor (tCO2e/Kl) = 0 + Well-To-Tank CO2 Emissions Factor × (conversion factor for kg/L based on Well-To-Tank CO2 Emissions Factor Unit)

    \+ Well-To-Tank CH4 Emissions Factor × (conversion factor for kg/L based on Well-To-Tank CH4 Emissions Factor Unit) × ParentEmissionFactor.CH4 Global Warming Potential

    \+ Well-To-Tank N2O Emissions Factor × (conversion factor for kg/L based on Well-To-Tank N2O Emissions Factor Unit) × ParentEmissionFactor.N2O Global Warming Potential

-   **Transmission and Distribution CO2e Emissions Factor (tCO2e/MWh) (TrnsmDstrCo2eEmssnMwh)**

    **Input Fields**

    -   Transmission and Distribution CH4 Emissions Factor (TrnsmDstrCh4EmssnFctr)
    -   Transmission and Distribution CH4 Emissions Factor Unit (TrnsmDstrCh4EmssnFctrUnit)
    -   Transmission and Distribution CO2 Emissions Factor (TrnsmDstrCo2EmssnFctr)
    -   Transmission and Distribution CO2 Emissions Factor Unit (TrnsmDstrCo2EmssnFctrUnit)
    -   Transmission and Distribution N2O Emissions Factor (TrnsmDstrN2oEmssnFctr)
    -   Transmission and Distribution N2O Emissions Factor Unit (TrnsmDstrN2oEmssnFctrUnit)
    -   Parent Emissions Factor (ParentEmissionFactorId)
        -   CH4 Global Warming Potential (Ch4GlblWarmingPot)
        -   N2O Global Warming Potential (N2oGlblWarmingPot)

    **Calculations**

    Transmission and Distribution CO2e Emissions Factor (tCO2e/MWh) = 0 + Transmission and Distribution CO2 Emissions Factor × (conversion factor for tonnes/MWh based on Transmission and Distribution CO2 Emissions Factor Unit )

    \+ Transmission and Distribution CH4 Emissions Factor × (conversion factor for tonnes/MWh based on Transmission and Distribution CH4 Emissions Factor Unit) × ParentEmissionFactor.CH4 Global Warming Potential

    \+ Transmission and Distribution N2O Emissions Factor × (conversion factor for tonnes/MWh based on Transmission and Distribution N2O Emissions Factor Unit ) × ParentEmissionFactor.N2O Global Warming Potential

-   **Transmission and Distribution CO2e Emissions Factor (tCO2e/Km) (TrnsmDstrCo2eEmssnKm)**

    **Input Fields**

    -   Transmission and Distribution CH4 Emissions Factor (TrnsmDstrCh4EmssnFctr)
    -   Transmission and Distribution CH4 Emissions Factor Unit (TrnsmDstrCh4EmssnFctrUnit)
    -   Transmission and Distribution CO2 Emissions Factor (TrnsmDstrCo2EmssnFctr)
    -   Transmission and Distribution CO2 Emissions Factor Unit (TrnsmDstrCo2EmssnFctrUnit)
    -   Transmission and Distribution N2O Emissions Factor (TrnsmDstrN2oEmssnFctr)
    -   Transmission and Distribution N2O Emissions Factor Unit (TrnsmDstrN2oEmssnFctrUnit)
    -   Parent Emissions Factor (ParentEmissionFactorId)
        -   CH4 Global Warming Potential (Ch4GlblWarmingPot)
        -   N2O Global Warming Potential (N2oGlblWarmingPot)

    **Calculations**

    Transmission and Distribution CO2e Emissions Factor (tCO2e/Km) = ((0 + Transmission and Distribution CO2 Emissions Factor × (conversion factor for kg/km based on Transmission and Distribution CO2 Emissions Factor Unit )

    \+ Transmission and Distribution CH4 Emissions Factor × (conversion factor for kg/km based on Transmission and Distribution CH4 Emissions Factor Unit) × ParentEmissionFactor.CH4 Global Warming Potential

    \+ Transmission and Distribution N2O Emissions Factor × (conversion factor for kg/km based on Transmission and Distribution N2O Emissions Factor Unit) × ParentEmissionFactor.N2O Global Warming Potential) / 1000)

-   **Transmission and Distribution CO2e Emissions Factor (tCO2e/Kl) (TrnsmDstrCo2eEmssnKl)**

    **Input Fields**

    -   Transmission and Distribution CH4 Emissions Factor (TrnsmDstrCh4EmssnFctr)
    -   Transmission and Distribution CH4 Emissions Factor Unit (TrnsmDstrCh4EmssnFctrUnit)
    -   Transmission and Distribution CO2 Emissions Factor (TrnsmDstrCo2EmssnFctr)
    -   Transmission and Distribution CO2 Emissions Factor Unit (TrnsmDstrCo2EmssnFctrUnit)
    -   Transmission and Distribution N2O Emissions Factor (TrnsmDstrN2oEmssnFctr)
    -   Transmission and Distribution N2O Emissions Factor Unit (TrnsmDstrN2oEmssnFctrUnit)
    -   Parent Emissions Factor (ParentEmissionFactorId)
        -   CH4 Global Warming Potential (Ch4GlblWarmingPot)
        -   N2O Global Warming Potential (N2oGlblWarmingPot)

    **Calculations**

    Transmission and Distribution CO2e Emissions Factor (tCO2e/Kl) = 0 + Transmission and Distribution CO2 Emissions Factor × (conversion factor for kg/L based on Transmission and Distribution CO2 Emissions Factor Unit)

    \+ Transmission and Distribution CH4 Emissions Factor × (conversion factor for kg/L based on Transmission and Distribution CH4 Emissions Factor Unit × ParentEmissionFactor.CH4 Global Warming Potential

    \+ Transmission and Distribution N2O Emissions Factor × (conversion factor for kg/L based on Transmission and Distribution N2O Emissions Factor Unit) × ParentEmissionFactor.N2O Global Warming Potential

-   **Well-To-Tank Transmission and Distribution CO2e Emissions Factor (tCO2e/MWh) (Well2TkTrnsmCo2eEmssnMwh)**

    **Input Fields**

    -   Well-To-Tank Transmission and Distribution CH4 Emissions Factor (Well2TkTrnsmCh4Emssn)
    -   Well-To-Tank Transmission and Distribution CH4 Emissions Factor Unit (Well2TkTrnsmCh4EmssnUnit)
    -   Well-To-Tank Transmission and Distribution CO2 Emissions Factor (Well2TkTrnsmCo2Emssn)
    -   Well-To-Tank Transmission and Distribution CO2 Emissions Factor Unit (Well2TkTrnsmCo2EmssnUnit)
    -   Well-To-Tank Transmission and Distribution N2O Emissions Factor (Well2TkTrnsmN2oEmssn)
    -   Well-To-Tank Transmission and Distribution N2O Emissions Factor Unit (Well2TkTrnsmN2oEmssnUnit)
    -   Parent Emissions Factor (ParentEmissionFactorId)
        -   CH4 Global Warming Potential (Ch4GlblWarmingPot)
        -   N2O Global Warming Potential (N2oGlblWarmingPot)

    **Calculations**

    Well-To-Tank Transmission and Distribution CO2e Emissions Factor = 0 + Well-To-Tank Transmission and Distribution CO2 Emissions Factor × (conversion factor for tonnes/MWh based on Well-To-Tank Transmission and Distribution CO2 Emissions Factor Unit)

    \+ Well-To-Tank Transmission and Distribution CH4 Emissions Factor × (conversion factor for tonnes/MWh based on Well-To-Tank Transmission and Distribution CH4 Emissions Factor Unit) × ParentEmissionFactor.CH4 Global Warming Potential

    \+ Well-To-Tank Transmission and Distribution N2O Emissions Factor × (conversion factor for tonnes/MWh based on Well-To-Tank Transmission and Distribution N2O Emissions Factor Unit) × ParentEmissionFactor.N2O Global Warming Potential

-   **Well-To-Tank Transmission and Distribution CO2e Emissions Factor (tCO2e/Km) (Well2TkTrnsmCo2eEmssnKm)**

    **Input Fields**

    -   Well-To-Tank Transmission and Distribution CH4 Emissions Factor (Well2TkTrnsmCh4Emssn)
    -   Well-To-Tank Transmission and Distribution CH4 Emissions Factor Unit (Well2TkTrnsmCh4EmssnUnit)
    -   Well-To-Tank Transmission and Distribution CO2 Emissions Factor (Well2TkTrnsmCo2Emssn)
    -   Well-To-Tank Transmission and Distribution CO2 Emissions Factor Unit (Well2TkTrnsmCo2EmssnUnit)
    -   Well-To-Tank Transmission and Distribution N2O Emissions Factor (Well2TkTrnsmN2oEmssn)
    -   Well-To-Tank Transmission and Distribution N2O Emissions Factor Unit (Well2TkTrnsmN2oEmssnUnit)
    -   Parent Emissions Factor (ParentEmissionFactorId)
        -   CH4 Global Warming Potential (Ch4GlblWarmingPot)
        -   N2O Global Warming Potential (N2oGlblWarmingPot)

    **Calculations**

    Well-To-Tank Transmission and Distribution CO2e Emissions Factor = ((0 + Well-To-Tank Transmission and Distribution CO2 Emissions Factor × (conversion factor for kg/km based on Well-To-Tank Transmission and Distribution CO2 Emissions Factor Unit)

    \+ Well-To-Tank Transmission and Distribution CH4 Emissions Factor × (conversion factor for kg/km based on Well-To-Tank Transmission and Distribution CH4 Emissions Factor Unit) × ParentEmissionFactor.CH4 Global Warming Potential

    \+ Well-To-Tank Transmission and Distribution N2O Emissions Factor × (conversion factor for kg/km based on Well-To-Tank Transmission and Distribution N2O Emissions Factor Unit) × ParentEmissionFactor.N2O Global Warming Potential) / 1000)

-   **Well-To-Tank Transmission and Distribution CO2e Emissions Factor (tCO2e/Kl) (Well2TkTrnsmCo2eEmssnKl)**

    **Input Fields**

    -   Well-To-Tank Transmission and Distribution CH4 Emissions Factor (Well2TkTrnsmCh4Emssn)
    -   Well-To-Tank Transmission and Distribution CH4 Emissions Factor Unit (Well2TkTrnsmCh4EmssnUnit)
    -   Well-To-Tank Transmission and Distribution CO2 Emissions Factor (Well2TkTrnsmCo2Emssn)
    -   Well-To-Tank Transmission and Distribution CO2 Emissions Factor Unit (Well2TkTrnsmCo2EmssnUnit)
    -   Well-To-Tank Transmission and Distribution N2O Emissions Factor (Well2TkTrnsmN2oEmssn)
    -   Well-To-Tank Transmission and Distribution N2O Emissions Factor Unit (Well2TkTrnsmN2oEmssnUnit)
    -   Parent Emissions Factor (ParentEmissionFactorId)
        -   CH4 Global Warming Potential (Ch4GlblWarmingPot)
        -   N2O Global Warming Potential (N2oGlblWarmingPot)

    **Calculations**

    Well-To-Tank Transmission and Distribution CO2e Emissions Factor = 0 + Well-To-Tank Transmission and Distribution CO2 Emissions Factor × (conversion factor for kg/L based on Well-To-Tank Transmission and Distribution CO2 Emissions Factor Unit)

    \+ Well-To-Tank Transmission and Distribution CH4 Emissions Factor × (conversion factor for kg/L based on Well-To-Tank Transmission and Distribution CH4 Emissions Factor Unit) × ParentEmissionFactor.CH4 Global Warming Potential

    \+ Well-To-Tank Transmission and Distribution N2O Emissions Factor × (conversion factor for kg/L based on Well-To-Tank Transmission and Distribution N2O Emissions Factor Unit) × ParentEmissionFactor.N2O Global Warming Potential

## Related Topics

- Conversion Factors (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_calc_conversion_factors.htm)

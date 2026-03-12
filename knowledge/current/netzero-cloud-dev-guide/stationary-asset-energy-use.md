---
title: "Stationary Asset Energy Use"
domain: netzero-cloud-dev-guide
topic: stationary-asset-energy-use
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:57.680Z
estimatedTokens: 20336
keywords: [Stationary, Asset, Energy, consumption, assets, across, multiple, fuel]
---

# Stationary Asset Energy Use

> The Stationary Asset Energy Use object represents the energy consumption related to
    stationary assets across multiple fuel types.

# Stationary Asset Energy Use

The Stationary Asset Energy Use object represents the energy consumption related to stationary assets across multiple fuel types.


| Permission Set Needed |
| --- |
| To enter and modify data: | Net Zero Cloud ManagerORNet Zero Cloud Admin |

| Fuel Units | Electricity | Cooling | Diesel | Fuel Oil/Heavy Oil | Heat | Natural Gas | Liquid Natural Gas (LNG) | Propane | Steam | Light Oil | Kerosene | City Gas | Refrigerant |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| kWh | √ | √ | √ | √ | √ | √ | √ | √ | √ | √ | √ | √ |  |
| GWh | √ | √ | √ | √ | √ | √ | √ | √ | √ | √ | √ | √ |  |
| MWh | √ | √ | √ | √ | √ | √ | √ | √ | √ | √ | √ | √ |  |
| GJ | √ | √ | √ | √ | √ | √ | √ | √ | √ | √ | √ | √ |  |
| MJ | √ | √ | √ | √ | √ | √ | √ | √ | √ | √ | √ | √ |  |
| kcal | √ | √ | √ | √ | √ | √ | √ | √ | √ | √ | √ | √ |  |
| MMBtu | √ | √ | √ | √ | √ | √ | √ | √ | √ | √ | √ | √ |  |
| Therm | √ | √ | √ | √ | √ | √ | √ | √ | √ | √ | √ | √ |  |
| Kg |  |  |  |  |  |  |  |  |  |  |  |  | √ |
| lbs |  |  |  |  |  |  |  |  |  |  |  |  | √ |
| Tonnes |  |  |  |  |  |  |  |  |  |  |  |  | √ |
| Short Tons |  |  |  |  |  |  |  |  |  |  |  |  | √ |
| Long Tons |  |  |  |  |  |  |  |  |  |  |  |  | √ |
| US Gallon |  |  | √ | √ |  | √ | √ | √ |  | √ | √ | √ |  |
| UK Gallon |  |  | √ | √ |  | √ | √ | √ |  | √ | √ | √ |  |
| Liter |  |  | √ | √ |  | √ | √ | √ |  | √ | √ | √ |  |
| Kiloliters |  |  | √ | √ |  | √ | √ | √ |  | √ | √ | √ |  |
| m3 |  |  | √ | √ |  | √ | √ | √ |  | √ | √ | √ |  |
| 1000 m3 |  |  | √ | √ |  | √ | √ | √ |  | √ | √ | √ |  |
| ccf |  |  | √ | √ |  | √ | √ | √ |  | √ | √ | √ |  |

Allocate the default scope for the fuel. Depending on the scope, the relevant fields are populated and the other fields default to 0:

-   Scope 1 Emissions (tCO2e).
-   Scope 2 Location-Based Emissions (tCO2e) and Scope 2 Market-Based Emissions (tCO2e). Scope 2 means both these fields are populated.
-   Scope 3 Downstream Emissions (tCO2e).
-   Scope 3 Upstream Emissions (tCO2e).

If you have not associated a scope allocation, then use the default scope allocations.

| Fuel | Company-Owned Asset = Yes | Company-Owned Asset = No |
| --- | --- | --- |
| Electricity | Scope 2 | Scope 3 Upstream Leased Assets |
| City Gas | Scope 1 | Scope 3 Upstream Leased Assets |
| Cooling | Scope 2 | Scope 3 Upstream Leased Assets |
| Diesel | Scope 1 | Scope 3 Upstream Leased Assets |
| Fuel Oil | Scope 1 | Scope 3 Upstream Leased Assets |
| Heat | Scope 2 | Scope 3 Upstream Leased Assets |
| Heavy Oil | Scope 1 | Scope 3 Upstream Leased Assets |
| Kerosene | Scope 1 | Scope 3 Upstream Leased Assets |
| Light Oil | Scope 1 | Scope 3 Upstream Leased Assets |
| Liquid Natural Gas | Scope 1 | Scope 3 Upstream Leased Assets |
| Natural Gas | Scope 1 | Scope 3 Upstream Leased Assets |
| Propane | Scope 1 | Scope 3 Upstream Leased Assets |
| Refrigerant | Scope 1 | Scope 3 Upstream Leased Assets |
| Steam | Scope 2 | Scope 3 Upstream Leased Assets |

For information about converting the values from one unit of measure to another compatible unit of measure, see [Conversion Factors](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_calc_conversion_factors.htm "You can convert the values from one unit of measure to another compatible unit of measure based on the conversion factors.").

Here are the calculated fields:

-   **Fuel Consumption (kWh) (FuelConsumptionInKwh)**

    **Input Fields**

    -   Total Fuel Consumption (kWh) (TotalFuelConsumptionInKwh)
    -   Fuel Type (FuelType)
    -   Fuel Consumption (FuelConsumption)
    -   Other Emissions Factor Set (OtherEmssnFctrSet)
    -   Other Emissions Factor Set Item (OtherEmssnFctrSetItem)

        Fuel Type (FuelType)

        Calorific Value (CalorificValue)

        Calorific Value Unit (CalorificValueUnit)

    -   Conversion constant

    **Calculations**

    If these fuels are measured in volume units:

    -   City Gas
    -   Diesel
    -   Fuel Oil
    -   Heavy Oil
    -   Kerosene
    -   Light Oil
    -   Liquid Natural Gas (LNG)
    -   Natural Gas
    -   Propane
    -   Biomass

    Then to convert the volume to energy units:

    Fuel Consumption (kWh) = Fuel Consumption (converted to m3) × OtherEmssnFctrSet.OtherEmssnFctrSetItem.Calorific Value (converted to kWh/m3) and Fuel Type = OtherEmssnFctrSet.OtherEmssnFctrSetItem.Fuel Type


-   **Fuel Consumption (GJ) (FuelConsumptionInGigajoule)**

    **Input Fields**

    -   Total Fuel Consumption (kWh) (TotalFuelConsumptionInKwh)
    -   Conversion constant

    **Calculations**

    Fuel Consumption (GJ) = Total Fuel Consumption (kWh)/277.7777777


-   **Total Fuel Consumption (kWh) (TotalFuelConsumptionInKwh)**

    **Input Fields**

    -   Fuel Consumption (kWh) (FuelConsumptionInKwh)
    -   Power Usage Effectiveness (PowerUsageEffectiveness)

    **Calculations**

    If Record Type = "Data Center", then Total Fuel Consumption (kWh) = Fuel Consumption (kWh) × Power Usage Effectiveness.

    else, for all other fuel types and record types, Total Fuel Consumption (kWh) = Fuel Consumption (kWh).


-   **Occupied Floor Area (sqft) (OccupiedFloorAreaInSqft)**

    **Input Fields**

    -   Occupied Floor Area (OccupiedFloorArea)
    -   Occupied Floor Area Unit (OccupiedFloorAreaUnit)
    -   Conversion constant

    **External Object Calculations**

    If Occupied Floor Area Unit = "sqft", then Occupied Floor Area (sqft) = Occupied Floor Area.

    If Occupied Floor Area Unit = "m2", then Occupied Floor Area (sqft) = Occupied Floor Area × 10.76391042.


-   **Scope 1 Emissions (tCO2e) (Scope1EmissionsInTco2e)**

    **Input Fields**

    -   Other Emissions Factors (OtherEmssnFctrId)
    -   Supplemental Scope 1 Emissions (SuplScope1Emissions)
    -   Total Fuel Consumption (kWh) (TotalFuelConsumptionInKwh)
    -   Carbon Emissions Scope Allocation (CrbnEmssnScopeAlloc)
    -   Stationary Asset Environmental Source (StnryAssetEnvrSrcId)
        -   Carbon Emissions Scope Allocation (CrbnEmssnScopeAllocId)

    **Calculations**

    -   If Carbon Emission Scope Allocation = "Scope 1"

        or if Carbon Emission Scope Allocation = NULL then StnryAssetEnvrSrc.Carbon Emission Scope Allocation.Fuel Type Allocation = "Scope 1" ( where StnryAssetEnvrSrc.Carbon Emission Scope Allocation.Fuel Type = Fuel Type )

        ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=netzero_cloud_dev_guide)

        #### Note

        If the scope isn't specified in either the energy use or the asset records, Net Zero Cloud allocates a default scope based on the fuel type and asset ownership. See [How to Override the Default Scope Allocation](https://help.salesforce.com/s/articleView?id=ind.netzero_manager_how_to_override_default_scope_allocation.htm&language=en_US).

    -   If Fuel Type = "Electricity", then Scope 1 Emissions (tCO2e) = (Total Fuel Consumption (kWh)) × ElectricityEmssnFctrSet.CO2e Emissions Rate (tonnes/MWh)/1000 + Supplemental Scope 1 Emissions.
    -   For any fuel other than refrigerants and electricity,

        If (Other Emissions Factor Set.Other Emissions Factor Set Item.Supplied CO2e Emissions Factor = 0) then Scope 1 Emissions (tCO2e) = Total Fuel Consumption (kWh) × Other Emissions Factor Set.Other Emissions Factor Set Item.CO2e Emissions Factor (tCO2e/MWh) (Fuel Type = Other Emissions Factor Set.Other Emissions Factor Set Item.Fuel Type) / 1000 + Supplemental Scope 1 Emissions

        else if (Other Emissions Factor Set.Other Emissions Factor Set Item.Supplied CO2e Emissions Factor != 0) then Scope 1 Emissions (tCO2e) = Total Fuel Consumption (kWh) × Other Emissions Factor Set.Other Emissions Factor Set Item.Supplied CO2e Emissions Factor (convert to Kg/Kwh) (Fuel Type = Other Emissions Factor Set.Other Emissions Factor Set Item.Fuel Type) / 1000 + Supplemental Scope 1 Emissions.

    -   If FuelType = "Refrigerant", then Scope 1 Emissions (tCO2e) = FuelConsumption (converted to Kgs) × RefrigerantEmssnFctr.Global Warming Potential/1000 + Supplemental Scope 1 Emission

    **Default Value**

    Scope 1 Emissions (tCO2e) = Supplemental Scope 1 Emissions


-   **Scope 2 Location-Based Emission (tCO2e) (Scope2LocBasedEmssnInTco2e)**

    **Input Fields**

    -   Other Emissions Factors (OtherEmssnFctrId)
    -   Total Fuel Consumption (kWh) (TotalFuelConsumptionInKwh)
    -   Electricity Emissions Factors (ElectricityEmissionFactorsId)
    -   Company-Owned Asset (IsCompanyOwnedAsset)
    -   Supplemental Scope 2 Location-Based Emissions (SuplScope2LocationBasedEmssn)
    -   Carbon Emissions Scope Allocation (CrbnEmssnScopeAlloc)
    -   Stationary Asset Environmental Source (StnryAssetEnvrSrcId)
        -   Carbon Emissions Scope Allocation (CrbnEmssnScopeAllocId)

    **Calculations**

    -   If Carbon Emission Scope Allocation = "Scope 2"

        or if Carbon Emission Scope Allocation = NULL then StnryAssetEnvrSrc.Carbon Emission Scope Allocation.Fuel Type Allocation = "Scope 2" (where StnryAssetEnvrSrc.Carbon Emission Scope Allocation.Fuel Type = Fuel Type)

        ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=netzero_cloud_dev_guide)

        #### Note

        If the scope isn't specified in either the energy use or the asset records, Net Zero Cloud allocates a default scope based on the fuel type and asset ownership. See [How to Override the Default Scope Allocation](https://help.salesforce.com/s/articleView?id=ind.netzero_manager_how_to_override_default_scope_allocation.htm&language=en_US).

    -   If Fuel Type = "Electricity" then Scope 2 Location-Based Emission (tCO2e) =(Total Fuel Consumption (kWh) ) × Electricity Emissions Factor Set.Co2eEmissionRateInTmwh / 1000 + SuplScope2LocationBasedEmssn
    -   For any fuel other than refrigerants and Electricity

        If (Other Emissions Factor Set.Other Emissions Factor Set Item.Supplied CO2e Emissions Factor = 0) then Scope 2 Location-Based Emission (tCO2e) = Total Fuel Consumption (kWh) × Other Emissions Factor Set.Other Emissions Factor Set Item.CO2e Emissions Factor (tCO2e/MWh) (Fuel Type = Other Emissions Factor Set.Other Emissions Factor Set Item.Fuel Type) / 1000 + Supplemental Scope 2 Location-Based Emissions

        else if (Other Emissions Factor Set.Other Emissions Factor Set Item.Supplied CO2e Emissions Factor != 0) then Scope 2 Location-Based Emission (tCO2e) = Total Fuel Consumption (kWh) × Other Emissions Factor Set.Other Emissions Factor Set Item.Supplied CO2e Emissions Factor (convert to Kg/Kwh) (Fuel Type = Other Emissions Factor Set.Other Emissions Factor Set Item.Fuel Type) / 1000 + Supplemental Scope 2 Location-Based Emissions

    -   If Fuel Type="Refrigerant" then Scope 2 Location-Based Emission (tCO2e) = Fuel Consumption (converted to Kgs) × RefrigerantEmssnFctr.Global Warming Potential/1000 + Supplemental Scope 2 Location-Based Emissions

    **Default Value**

    Scope 2 Location-Based Emission (tCO2e) = Supplemental Scope 2 Location-Based Emissions


-   **Scope 2 Market-Based Emission (tCO2e) (Scope2MktBasedEmssnInTco2e)**

    **Input Fields**

    -   Allocated Renewable Energy (kWh) (AllocatedRenewableEnergyInKwh)
    -   Company-Owned Asset (IsCompanyOwnedAsset)
    -   Electricity Emissions Factors (ElectricityEmissionFactorsId)
    -   Emissions Factor Type (EmissionsFactorType)
    -   Market-Based CO2 Emissions Rate (tonnes/MWh) (MktBsdCo2EmssnRtInTmwh)
    -   Market-Based Electricity Emissions Factors (MktBsdElectriEmssnFctrId)
    -   Emissions Factor Type (EmissionsFactorType)
    -   Market-Based CO2 Emissions Rate (tonnes/MWh) (MktBsdCo2EmssnRtInTmwh)
    -   Supplemental Scope 2 Market-Based Emissions (SuplScope2MarketBasedEmssn)
    -   Total Fuel Consumption (kWh) (TotalFuelConsumptionInKwh)
    -   Renewable Energy Type Override (RenewableEnergyType)
    -   Energy Attribute Credit Distribution (EnergyAttrCreditDstr)
    -   Energy Attribute Certificate Credit (EnergyAttrCertCredit)
    -   Energy Attribute Certificate Purchase (EnergyAttrCertPurchase)
    -   Clean Energy Project (CleanEnergyProject)
    -   Carbon Emissions Scope Allocation (CrbnEmssnScopeAlloc)
    -   Stationary Asset Environmental Source (StnryAssetEnvrSrcId)
        -   Carbon Emissions Scope Allocation (CrbnEmssnScopeAllocId)

    **Calculations**

    If Carbon Emission Scope Allocation = "Scope 2"

    or if Carbon Emission Scope Allocation = NULL then StnryAssetEnvrSrc.Carbon Emission Scope Allocation.Fuel Type Allocation = "Scope 2" ( where StnryAssetEnvrSrc.Carbon Emission Scope Allocation.Fuel Type = Fuel Type)

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=netzero_cloud_dev_guide)

    #### Note

    If the scope isn't specified in either the energy use or the asset records, Net Zero Cloud allocates a default scope based on the fuel type and asset ownership. See [How to Override the Default Scope Allocation](https://help.salesforce.com/s/articleView?id=ind.netzero_manager_how_to_override_default_scope_allocation.htm&language=en_US).

    -   If Renewable Energy Type Override ! = Empty, then Scope 2 Market-Based Emissions (tCO2e) = ((Total Fuel Consumption (kWh) - Allocated Renewable Energy Override (kWh) ) × (if Market-Based Electricity Emissions Factors != Empty (MktBsdElectriEmssnFctrId.Market-Based CO2e Emissions Rate (tonnes/MWh) / 1000))

        else if (ElectricityEmissionFactorsId.Emissions Factor Type == LocationAndMarketBased or None) (MktBsdElectriEmssnFctrId.Market-Based CO2e Emissions Rate (tonnes/MWh) / 1000))

        else 0))

        When the renewable energy allocation is happening from the Energy Attribute Credit Distribution object,

        if Renewable Energy Type Override == Empty (None),

        then Scope 2 Market-Based Emissions (tCO2e) =(Total Fuel Consumption (kWh) - Allocated Energy Attribute Credits (kWh)\] ) × (if Market-Based Electricity Emissions Factors != Empty (MktBsdElectriEmssnFctrId.Market-Based CO2e Emissions Rate (tonnes/MWh) / 1000)))

        else if (MktBsdElectriEmssnFctrId.Emissions Factor Type == LocationAndMarketBased or None) (MktBsdElectriEmssnFctrId.Market-Based CO2e Emissions Rate (tonnes/MWh) / 1000))

        else 0+ Supplemental Scope 2 Market-Based Emissions) + for each Energy Attribute Credit Distribution associated with this record if (EnergyAttrCreditDstr.EnergyAttrCertPurchase.CleanEnergyProject.Electricity Emissions Factors !=NULL (EnergyAttrCreditDstr.Allocated Energy Attribute Credits (kWh) × EnergyAttrCreditDstr.EnergyAttrCertPurchase.CleanEnergyProject.ElectrEmissionsFactorsId.Market-Based CO2e Emissions Rate (tonnes/MWh) / 1000))

    -   For any fuel other than refrigerants and Electricity

        If (Other Emissions Factor Set.Other Emissions Factor Set Item.Supplied CO2e Emissions Factor = 0) then Scope 2 Market-Based Emissions (tCO2e) = Total Fuel Consumption (kWh) × Other Emissions Factor Set.Other Emissions Factor Set Item.CO2e Emissions Factor (tCO2e/MWh) (Fuel Type = Other Emissions Factor Set.Other Emissions Factor Set Item.Fuel Type) / 1000 + Supplemental Scope 2 Market-Based Emissions

        else if (Other Emissions Factor Set.Other Emissions Factor Set Item.Supplied CO2e Emissions Factor != 0) then Scope 2 Market-Based Emissions (tCO2e) = Total Fuel Consumption (kWh) × Other Emissions Factor Set.Other Emissions Factor Set Item.Supplied CO2e Emissions Factor (convert to Kg/Kwh) (Fuel Type = Other Emissions Factor Set.Other Emissions Factor Set Item.Fuel Type) / 1000 + Supplemental Scope 2 Market-Based Emissions

    -   If FuelType="Refrigerant", Scope 2 Market-Based Emissions (tCO2e) = Fuel Consumption (converted to Kgs) × RefrigerantEmssnFctr.Global Warming Potential/1000 + Supplemental Scope 2 Market-Based Emissions

    **Default Value**

    Scope 2 Market-Based Emission (tCO2e) = Supplemental Scope 2 Market-Based Emissions


-   **Market-Based CO2 Emissions (kg) (MktBsdCo2EmssnInKg)**

    Input Fields

    -   Total Fuel Consumption (kWh) (TotalFuelConsumptionInKwh)
    -   Fuel Type (FuelType)
    -   Other Emissions Factor Set (OtherEmssnFctrSet)
    -   Other Emissions Factor Set Item (OtherEmssnFctrSetItem)
        -   Fuel Type (FuelType)
        -   CO2 Emissions Factor (Co2EmissionFactor)
        -   CO2 Emissions Factor Unit (Co2EmissionFactorUnit)
    -   Electricity Emissions Factors (ElectricityEmissionFactorsId)
        -   Emissions Factor Type (EmissionsFactorType)
        -   Market-Based CO2 Emissions Rate (tonnes/MWh) (MktBsdCo2EmssnRtInTmwh)
    -   Market-Based Electricity Emissions Factors (MktBsdElectriEmssnFctrId)
        -   Emissions Factor Type (EmissionsFactorType)
        -   Market-Based CO2 Emissions Rate (tonnes/MWh) (MktBsdCo2EmssnRtInTmwh)
    -   Renewable Energy Type Override (RenewableEnergyType)
    -   Allocated Renewable Energy Override (kWh) (AllocatedRenewableEnergyInKwh)
    -   Energy Attribute Credit Distribution (EnergyAttrCreditDstr)
    -   Energy Attribute Certificate Credit (EnergyAttrCertCredit)
    -   Energy Attribute Certificate Purchase (EnergyAttrCertPurchase)
    -   Clean Energy Project (CleanEnergyProject)
        -   Market-Based CO2 Emissions Rate (tonnes/MWh) (MktBsdCo2EmssnRtInTmwh)

    **Calculations**

    if (Fuel Type == ELECTRICITY)

    {

    If (Renewable Energy Type Override!= Empty) { Market-Based CO2 Emissions (kg) = (Total Fuel Consumption (kWh) TotalFuelConsumptionInKwh - Allocated Renewable Energy Override (kWh)) \* ElectricityEmssnFctrSet.Market-Based CO2 Emissions Rate (tonnes/MWh) }

    else { Market-Based CO2 Emissions (kg) = (Total Fuel Consumption (kWh) \* ElectricityEmssnFctrSet.Market-Based CO2 Emissions Rate (tonnes/MWh)) }

    }

    Else { // Default calculation for all other fuel types

    Market-Based CO2 Emissions (kg) = 0

    }


-   **Market-Based CH4 Emissions (kg) (MktBsdCh4EmssnInKg)**

    Input Fields

    -   Total Fuel Consumption (kWh) (TotalFuelConsumptionInKwh)
    -   Fuel Type (FuelType)
    -   Other Emissions Factor Set (OtherEmssnFctrSet)
    -   Other Emissions Factor Set Item (OtherEmssnFctrSetItem)
        -   Fuel Type (FuelType)
        -   CH4 Emissions Factor (Ch4EmissionFactor)
        -   CH4 Emissions Factor Unit (Ch4EmissionFactorUnit)
    -   Electricity Emission Factor Set (ElectricityEmissionFactorsId)
        -   Emissions Factor Type (EmissionsFactorType)
        -   Market-Based CH4 Emissions Rate (tonnes/GWh) (MktBsdCh4EmssnRtInTgwh)
    -   Market-Based Electricity Emissions Factors (MktBsdElectriEmssnFctrId)
        -   Emissions Factor Type (EmissionsFactorType)
        -   Market-Based CH4 Emissions Rate (tonnes/GWh) (MktBsdCh4EmssnRtInTgwh)
    -   Renewable Energy Type Override (RenewableEnergyType)
    -   Allocated Renewable Energy Override (kWh) (AllocatedRenewableEnergyInKwh)
    -   Energy Attribute Credit Distribution (EnergyAttrCreditDstr)
        -   Stationary Asset Energy Use (StnryAssetEnergyUseId)
    -   Energy Attribute Certificate Credit (EnergyAttrCertCredit)
    -   Energy Attribute Certificate Purchase (EnergyAttrCertPurchase)
    -   Clean Energy Project (CleanEnergyProject)
        -   Electricity Emissions Factors (ElectrEmissionsFactorsId)

            Market-Based CH4 Emissions Rate (tonnes/GWh) (MktBsdCh4EmssnRtInTgwh)


    Calculations

    if (Fuel Type == ELECTRICITY)

    {

    If (Renewable Energy Type Override!= Empty) { Market-Based CH4 Emissions (kg) = (Total Fuel Consumption (kWh) TotalFuelConsumptionInKwh - Allocated Renewable Energy Override (kWh)) \* ElectricityEmssnFctrSet.Market-Based CH4 Emissions Rate (tonnes/GWh)/1000.0 } else { Market-Based CH4 Emissions (kg) = Total Fuel Consumption (kWh) \* ElectricityEmssnFctrSet.Market-Based CH4 Emissions Rate (tonnes/GWh)/1000.0 }

    }

    Else { // Default calculation for all other fuel types

    Market-Based CH4 Emissions (kg) = 0

    }


-   **Market-Based N2O Emissions (kg) (MktBsdN2oEmssnInKg)**

    Input Fields

    -   Total Fuel Consumption (kWh) (TotalFuelConsumptionInKwh)
    -   Fuel Type (FuelType)
    -   Other Emissions Factor Set (OtherEmssnFctrSet)
    -   Other Emissions Factor Set Item (OtherEmssnFctrSetItem)
        -   Fuel Type (FuelType)
        -   N2O Emissions Factor (N2oEmissionFactor)
        -   N2O Emissions Factor Unit (N2oEmissionFactorUnit)
    -   Electricity Emission Factor Set (ElectricityEmissionFactorsId)
        -   Emissions Factor Type (EmissionsFactorType)
        -   Market-Based N2O Emissions Rate (tonnes/GWh) (MktBsdN2oEmssnRtInTgwh)
    -   Market-Based Electricity Emissions Factors (MktBsdElectriEmssnFctrId)
        -   Emissions Factor Type (EmissionsFactorType)
        -   Market-Based N2O Emissions Rate (tonnes/GWh) (MktBsdN2oEmssnRtInTgwh)
    -   Renewable Energy Type Override (RenewableEnergyType)
    -   Allocated Renewable Energy Override (kWh) (AllocatedRenewableEnergyInKwh)
    -   Energy Attribute Credit Distribution (EnergyAttrCreditDstr)
        -   Stationary Asset Energy Use (StnryAssetEnergyUseId)
    -   Energy Attribute Certificate Credit (EnergyAttrCertCredit)

        Energy Attribute Certificate Purchase (EnergyAttrCertPurchase)

    -   Clean Energy Project (CleanEnergyProject)
        -   Electricity Emissions Factors (ElectrEmissionsFactorsId)
        -   Market-Based N2O Emissions Rate (tonnes/GWh) (MktBsdN2oEmssnRtInTgwh)

    Calculations

    if (Fuel Type == ELECTRICITY)

    {

    If (Renewable Energy Type Override!= Empty) { Market-Based N2O Emissions (kg) = (Total Fuel Consumption (kWh) TotalFuelConsumptionInKwh - Allocated Renewable Energy Override (kWh)) \* ElectricityEmssnFctrSet.Market-Based N2O Emissions Rate (tonnes/GWh)/1000.0 } else { Market-Based N2O Emissions (kg) = (Total Fuel Consumption (kWh) \* ElectricityEmssnFctrSet.Market-Based N2O Emissions Rate (tonnes/GWh)/1000.0) }

    }

    Else { // Default calculation for all other fuel types

    Market-Based N2O Emissions (kg) = 0

    }


-   **Total Floor Area (sqft) (TotalFloorAreaInSqft)**

    **Input Fields**

    -   Total Floor Area (TotalFloorArea)
    -   Total Floor Area Unit (TotalFloorAreaUnit)
    -   Conversion constant

    **External Object Calculations**

    If Total Floor Area Unit = "sqft", then Total Floor Area (sqft) = Total Floor Area.

    If Total Floor Area Unit = "m2", then Total Floor Area (sqft) = Total Floor Area × 10.76391042.


-   **Total Renewable Energy (kWh) (TotalRenewableEnergyInKwh)**

    **Input Fields**

    -   Market-Based Electricity from Biomass (kWh) (MktBasedElectrFrBiomassInKwh)
    -   Market-Based Electricity from Geothermal (kWh) (MktBsdElectrFrGeothermalInKwh)
    -   Market-Based Electricity from Hydro (kWh) (MktBasedElectrFromHydroInKwh)
    -   Market-Based Electricity from Solar (kWh) (MktBasedElectrFromSolarInKwh)
    -   Market-Based Electricity from Wind (kWh) (MktBasedElectrFromWindInKwh)

    **Calculations**

    Total Renewable Energy (kWh) = Market-Based Electricity from Biomass (kWh) + Market-Based Electricity from Geothermal (kWh) + Market-Based Electricity from Hydro (kWh) + Market-Based Electricity from Solar (kWh) + Market-Based Electricity from Wind (kWh)

    **Default Value**

    0


-   **Total Renewable Energy Excluding Hydro (kWh) (TotRnwlEnrgyExclHydroInKwh)**

    **Input Fields**

    -   Market-Based Electricity from Biomass (kWh) (MktBasedElectrFrBiomassInKwh)
    -   Market-Based Electricity from Geothermal (kWh) (MktBsdElectrFrGeothermalInKwh)
    -   Market-Based Electricity from Solar (kWh) (MktBasedElectrFromSolarInKwh)
    -   Market-Based Electricity from Wind (kWh) (MktBasedElectrFromWindInKwh)

    **Calculations**

    Total Renewable Energy Excluding Hydro (kWh) = Market-Based Electricity from Biomass (kWh) + Market-Based Electricity from Geothermal (kWh) + Market-Based Electricity from Solar (kWh) + Market-Based Electricity from Wind (kWh)

    **Default Value**

    0


-   **Power Usage Effectiveness Monthly Range (IsPueMonthlyRange)**

    **Input Fields**

    -   Power Usage Effectiveness (PowerUsageEffectiveness)
    -   Record Type

    **Calculations**

    If Record Type = "Data Center":

    If Power Usage Effectiveness >= 1 and Power Usage Effectiveness <= 2, then Power Usage Effectiveness Monthly Range = TRUE.

    If Power Usage Effectiveness <1 or Power Usage Effectiveness > 2, then Power Usage Effectiveness Monthly Range = FALSE.


-   **Normalized Monthly Electricity Consumption (kWh) (NormalizedMoElectrCnsmpInKwh)**

    **Input Fields**

    -   Total Fuel Consumption (kWh) (TotalFuelConsumptionInKwh)
    -   Fuel Type (FuelType)
    -   End Date (EndDate)
    -   Start Date (StartDate)

    **Calculations**

    Normalized Monthly Electricity Consumption (kWh) = Total Fuel Consumption (kWh) (where Fuel Type = "Electricity") × \[30/(End Date – Start Date + 1)\]


-   **Location-Based Electricity from Biomass (kWh) (LocBasedElectrFrBiomassInKwh)**

    **Input Fields**

    -   Total Fuel Consumption (kWh) (TotalFuelConsumptionInKwh)
    -   Electricity Emissions Factor Set.Location-Based Biomass Mix Percentage (ElectricityEmssnFctrSet.LocationBasedBiomassMixPct)

    **Calculations**

    Location-Based Electricity from Biomass (kWh) = Total Fuel Consumption (kWh) (where Fuel Type = "Electricity") × ElectricityEmssnFctrSet.Location-Based Biomass Mix Percentage/100


-   **Location-Based Electricity from Coal (kWh) (LocBasedElectrFrCoalInKwh)**

    **Input Fields**

    -   Total Fuel Consumption (kWh) (TotalFuelConsumptionInKwh)
    -   Electricity Emissions Factor Set.Location-Based Coal Mix Percentage (ElectricityEmssnFctrSet.LocationBasedCoalMixPct)

    **Calculations**

    Location-Based Electricity from Coal (kWh) = Total Fuel Consumption (kWh) (where Fuel Type = "Electricity") × ElectricityEmssnFctrSet.Location-Based Coal Mix Percentage/100


-   **Location-Based Electricity from Gas (kWh) (LocBasedElectrFrGasInKwh)**

    **Input Fields**

    -   Total Fuel Consumption (kWh) (TotalFuelConsumptionInKwh)
    -   Electricity Emissions Factor Set.Location-Based Gas Mix Percentage (ElectricityEmssnFctrSet.LocationBasedGasMixPct)

    **Calculations**

    Location-Based Electricity from Gas (kWh) = Total Fuel Consumption (kWh) (where Fuel Type = "Electricity") × ElectricityEmssnFctrSet.Location-Based Gas Mix Percentage/100


-   **Location-Based Electricity from Hydro (kWh) (LocBasedElectrFrHydroInKwh)**

    **Input Fields**

    -   Total Fuel Consumption (kWh) (TotalFuelConsumptionInKwh)
    -   Electricity Emissions Factor Set.Location-Based Hydro Mix Percentage (ElectricityEmssnFctrSet.LocationBasedHydroMixPct)

    **Calculations**

    Location-Based Electricity from Hydro (kWh) = Total Fuel Consumption (kWh) (where Fuel Type = "Electricity") × ElectricityEmssnFctrSet.Location-Based Hydro Mix Percentage/100


-   **Location-Based Electricity from Nuclear (kWh) (LocBasedElectrFrNuclearInKwh)**

    **Input Fields**

    -   Total Fuel Consumption (kWh) (TotalFuelConsumptionInKwh)
    -   Electricity Emissions Factor Set.Location-Based Nuclear Mix Percentage (ElectricityEmssnFctrSet.LocationBasedNuclearMixPct)

    **Calculations**

    Location-Based Electricity from Nuclear (kWh) = Total Fuel Consumption (kWh) (where FuelType = "Electricity") × Electricity Emissions Factor Set.Location-Based Nuclear Mix Percentage/100


-   **Location-Based Electricity from Oil (kWh) (LocBasedElectrFrOilInKwh)**

    **Input Fields**

    -   Total Fuel Consumption (kWh) (TotalFuelConsumptionInKwh)
    -   Electricity Emissions Factor Set.Location-Based Oil Mix Percentage (ElectricityEmssnFctrSet.LocationBasedOilMixPct)

    **Calculations**

    Location-Based Electricity from Oil (kWh) = Total Fuel Consumption (kWh) (where FuelType = "Electricity") × ElectricityEmssnFctrSet.Location-Based Oil Mix Percentage/100


-   **Location-Based Electricity from Other Fuel (kWh) (LocBasedElectrFrOthrFuelInKwh)**

    **Input Fields**

    -   Total Fuel Consumption (kWh) (TotalFuelConsumptionInKwh)
    -   Electricity Emissions Factor Set.Location-Based Other Fuel Mix Percentage (ElectricityEmssnFctrSet.LocationBasedOtherFuelMixPct)

    **Calculations**

    Location-Based Electricity from Other Fuel (kWh) = Total Fuel Consumption (kWh) (where Fuel Type = "Electricity") × ElectricityEmssnFctrSet.Location-Based Other Fuel Mix Percentage/100


-   **Location-Based Electricity from Solar (kWh) (LocBasedElectrFrSolarInKwh)**

    **Input Fields**

    -   Total Fuel Consumption (kWh) (TotalFuelConsumptionInKwh)
    -   Electricity Emissions Factor Set.Location-Based Solar Mix Percentage (ElectricityEmssnFctrSet.LocationBasedSolarMixPct)

    **Calculations**

    Location-Based Electricity from Solar (kWh) = Total Fuel Consumption (kWh) (where Fuel Type = "Electricity") × ElectricityEmssnFctrSet.Location-Based Solar Mix Percentage/100


-   **Location-Based Electricity from Wind (kWh) (LocBasedElectrFrWindInKwh)**

    **Input Fields**

    -   Total Fuel Consumption (kWh) (TotalFuelConsumptionInKwh)
    -   Electricity Emissions Factor Set.Location-Based Wind Mix Percentage (ElectricityEmssnFctrSet.LocationBasedWindMixPct)

    **Calculations**

    Location-Based Electricity from Wind (kWh) = Total Fuel Consumption (kWh) (where Fuel Type = "Electricity") × ElectricityEmssnFctrSet.Location-Based Wind Mix Percentage/100


-   **Location-Based Electricity from Non-Renewables (kWh) (LocBsdElectrFrNonRenewablesKwh)**

    **Input Fields**

    -   Total Fuel Consumption (kWh) (TotalFuelConsumptionInKwh)
    -   Location-Based Electricity from Biomass (kWh) (LocBasedElectrFrBiomassInKwh)
    -   Location-Based Electricity from Hydro (kWh) (LocBasedElectrFromHydroInKwh)
    -   Location-Based Electricity from Solar (kWh) (LocBasedElectrFromSolarInKwh)
    -   Location-Based Electricity from Wind (kWh) (LocBasedElectrFromWindInKwh)
    -   Location-Based Electricity from Geothermal (kWh) (LocBsdElectrFrGeothermalInKwh)

    **Calculations**

    Location-Based Electricity from Non-Renewable (kWh) = Total Fuel Consumption (kWh) – Location-Based Electricity from Biomass (kWh) – Location-Based Electricity from Hydro (kWh) – Location-Based Electricity from Solar (kWh) – Location-Based Electricity from Wind (kWh) – Location-Based Electricity from Geothermal (kWh)


-   **Location-Based Electricity from Geothermal (kWh) (LocBsdElectrFrGeothermalInKwh)**

    **Input Fields**

    -   Total Fuel Consumption (kWh) (TotalFuelConsumptionInKwh)
    -   Electricity Emissions Factor Set.Location-Based Geothermal Mix Percentage (ElectricityEmssnFctrSet.LocBasedGeothermalMixPct)

    **Calculations**

    Location-Based Electricity from Geothermal (kWh) = Total Fuel Consumption (kWh) (where FuelType = "Electricity") × ElectricityEmssnFctrSet.Location-Based Geothermal Mix Percentage/100


-   **Location-Based Electricity from Other Fossil Fuel (kWh) (LocBsdElectrOthrFossilFuelKwh)**

    Input Fields

    -   Total Fuel Consumption (kWh) (TotalFuelConsumptionInKwh)
    -   Electricity Emissions Factor Set.Location-Based Other Fossil Fuel Mix Percentage (ElectricityEmssnFctrSet.LocBasedOtherFossilFuelMixPct)

    Calculations

    Location-Based Electricity from Other Fossil Fuel (kWh) = Total Fuel Consumption (kWh) (where FuelType = "Electricity") × ElectricityEmssnFctrSet.Location-Based Other Fossil Fuel Mix Percentage/100


-   **Market-Based Electricity from Biomass (kWh) (MktBasedElectrFrBiomassInKwh)**

    **Input Fields**

    -   Stationary Asset Energy Use (StnryAssetEnrgyUse)
        -   Total Fuel Consumption (kWh) (TotalFuelConsumptionInKwh)
        -   Allocated Renewable Energy Override (kWh) (AllocatedRenewableEnergyInKwh)
        -   Renewable Energy Type Override (RenewableEnergyType)
        -   Allocated Energy Attribute Credits (kWh) (AllocEnrgyAttrCrInKwh)
        -   Allocated Energy Attribute Credits from Biomass (kWh) (AllocEnrgyAttrCrBiomass)
        -   Fuel Type (FuelType)
    -   Electricity Emissions Factor Set (ElectricityEmissionFactorsId)
        -   Emissions Factor Type (EmissionsFactorType)
        -   Market-Based Biomass Mix Percentage (MarketBasedBiomassMixPct)
    -   Market-Based Electricity Emissions Factors (MktBsdElectriEmssnFctrId)
        -   Emissions Factor Type (EmissionsFactorType)
        -   Market-Based Biomass Mix Percentage (MarketBasedBiomassMixPct)
    -   Energy Attribute Credit Distribution (EnergyAttrCreditDstr)
        -   Stationary Asset Energy Use (StnryAssetEnergyUseId)
    -   Energy Attribute Certificate Credit (EnergyAttrCertCredit)
    -   Energy Attribute Certificate Purchase (EnergyAttrCertPurchase)

    **Calculations**

    -   If Renewable Energy Type Override ! = Empty, then Market-Based Electricity from Biomass (kWh) = \[Total Fuel Consumption (kWh) (where Fuel Type = "Electricity") – Allocated Renewable Energy (kWh)\] × (if Market-Based Electricity Emissions Factors != Empty (MktBsdElectriEmssnFctr.Market-Based Biomass Mix Percentage)

        else if (Electricity Emissions Factors == LocationAndMarketBased or –None– (Electricity Emissions Factor Set.Market-Based Biomass Mix Percentage))

        else 0

    -   When the renewable energy allocation is happening from the Energy Attribute Credit Distribution object, if Renewable Energy Type Override == Empty (None), then Market-Based Electricity from Biomass (kWh) = \[Total Fuel Consumption (kWh) (where FuelType = "Electricity") – Allocated Energy Attribute Credits (kWh)\]× (if Market-Based Electricity Emissions Factors != Empty (MktBsdElectriEmssnFctr.Market-Based Biomass Mix Percentage)

        else if (ElectricityEmissionFactorsId.Emissions Factor Type == LocationAndMarketBased or None (ElectricityEmissionFactorsId.Market-Based Biomass Mix Percentage))

        else 0


-   **Market-Based Electricity from Coal (kWh) (MktBasedElectrFromCoalInKwh)**

    **Input Fields**

    -   Stationary Asset Energy Use (StnryAssetEnrgyUse)
        -   Total Fuel Consumption (kWh) (TotalFuelConsumptionInKwh)
        -   Allocated Renewable Energy Override (kWh) (AllocatedRenewableEnergyInKwh)
        -   Renewable Energy Type Override (RenewableEnergyType)
        -   Allocated Energy Attribute Credits (kWh) (AllocEnrgyAttrCrInKwh)
        -   Fuel Type (FuelType)
    -   Electricity Emissions Factor Set (ElectricityEmissionFactorsId)
        -   Emissions Factor Type (EmissionsFactorType)
        -   Market-Based Coal Mix Percentage (MarketBasedCoalMixPct)
    -   Market-Based Electricity Emissions Factors (MktBsdElectriEmssnFctrId)
        -   Emissions Factor Type (EmissionsFactorType)
        -   Market-Based Coal Mix Percentage (MarketBasedCoalMixPct)
    -   Energy Attribute Credit Distribution (EnergyAttrCreditDstr)

    **Calculations**

    -   If Renewable Energy Type Override ! = Empty, then Market-Based Electricity from Coal (kWh) = \[Total Fuel Consumption (kWh) (where Fuel Type = "Electricity") – Allocated Renewable Energy (kWh)\] × (if Market-Based Electricity Emissions Factors != Empty (MktBsdElectriEmssnFctrId.Market-Based Coal Mix Percentage)

        else if (Electricity Emissions Factors == LocationAndMarketBased or –None– (Electricity Emissions Factor Set.Market-Based Coal Mix Percentage))

        else 0

    -   When the renewable energy allocation is happening from the Energy Attribute Credit Distribution object, if Renewable Energy Type Override == Empty (None), then Market-Based Electricity from Coal (kWh) = \[Total Fuel Consumption (kWh) (where FuelType = "Electricity") – Allocated Energy Attribute Credits (kWh)\]× (if Market-Based Electricity Emissions Factors != Empty (MktBsdElectriEmssnFctrId.Market-Based Coal Mix Percentage)

        else if (ElectricityEmissionFactorsId.Emissions Factor Type == LocationAndMarketBased or None (ElectricityEmissionFactorsId.Market-Based Coal Mix Percentage))

        else 0


-   **Market-Based Electricity from Gas (kWh) (MktBasedElectrFromGasInKwh)**

    **Input Fields**

    -   Stationary Asset Energy Use (StnryAssetEnrgyUse)
        -   Total Fuel Consumption (kWh) (TotalFuelConsumptionInKwh)
        -   Allocated Renewable Energy Override (kWh) (AllocatedRenewableEnergyInKwh)
        -   Renewable Energy Type Override (RenewableEnergyType)
        -   Allocated Energy Attribute Credits (kWh) (AllocEnrgyAttrCrInKwh)
        -   Fuel Type (FuelType)
    -   Electricity Emissions Factor Set (ElectricityEmissionFactorsId)
        -   Emissions Factor Type (EmissionsFactorType)
        -   Market-Based Gas Mix Percentage (MarketBasedGasMixPct)
    -   Market-Based Electricity Emissions Factors (MktBsdElectriEmssnFctrId)
        -   Emissions Factor Type (EmissionsFactorType)
        -   Market-Based Gas Mix Percentage (MarketBasedGasMixPct)
    -   Energy Attribute Credit Distribution (EnergyAttrCreditDstr)
        -   Stationary Asset Energy Use (StnryAssetEnergyUseId)
    -   Energy Attribute Certificate Credit (EnergyAttrCertCredit)
    -   Energy Attribute Certificate Purchase (EnergyAttrCertPurchase)

    **Calculations**

    -   If Renewable Energy Type Override ! = Empty, then Market-Based Electricity from Gas (kWh) = \[Total Fuel Consumption (kWh) (where Fuel Type = "Electricity") – Allocated Renewable Energy (kWh)\] × (if Market-Based Electricity Emissions Factors != Empty (MktBsdElectriEmssnFctrId.Market-Based Gas Mix Percentage)

        else if (Electricity Emissions Factors == LocationAndMarketBased or –None– (Electricity Emissions Factor Set.Market-Based Gas Mix Percentage))

        else 0

    -   When the renewable energy allocation is happening from the Energy Attribute Credit Distribution object,

        if Renewable Energy Type Override == Empty (None), then Market-Based Electricity from Gas (kWh) = \[Total Fuel Consumption (kWh) (where FuelType = "Electricity") – Allocated Energy Attribute Credits (kWh)\]× (if Market-Based Electricity Emissions Factors != Empty (MktBsdElectriEmssnFctrId.Market-Based Gas Mix Percentage)

        else if (ElectricityEmissionFactorsId.Emissions Factor Type == LocationAndMarketBased or None (ElectricityEmissionFactorsId.Market-Based Gas Mix Percentage))

        else 0


-   **Market-Based Electricity from Hydro (kWh) (MktBasedElectrFromHydroInKwh)**

    **Input Fields**

    -   Stationary Asset Energy Use (StnryAssetEnrgyUse)
        -   Total Fuel Consumption (kWh) (TotalFuelConsumptionInKwh)
        -   Allocated Renewable Energy Override (kWh) (AllocatedRenewableEnergyInKwh)
        -   Renewable Energy Type Override (RenewableEnergyType)
        -   Allocated Energy Attribute Credits (kWh) (AllocEnrgyAttrCrInKwh)
        -   Fuel Type (FuelType)
    -   Electricity Emissions Factor Set (ElectricityEmissionFactorsId)
        -   Emissions Factor Type (EmissionsFactorType)
        -   Market-Based Hydroelectric Mix Percentage (MarketBasedHydroMixPct)
    -   Market-Based Electricity Emissions Factors (MktBsdElectriEmssnFctrId)
        -   Emissions Factor Type (EmissionsFactorType)
        -   Market-Based Hydroelectric Mix Percentage (MarketBasedHydroelectricMixPct)
    -   Energy Attribute Credit Distribution (EnergyAttrCreditDstr)

    **Calculations**

    -   If Renewable Energy Type Override ! = Empty, then Market-Based Electricity from Hydro (kWh) = \[Total Fuel Consumption (kWh) (where Fuel Type = "Electricity") – Allocated Renewable Energy (kWh)\] × (if Market-Based Electricity Emissions Factors != Empty (MktBsdElectriEmssnFctrId.Market-Based Hydro Mix Percentage)

        else if (Electricity Emissions Factors == LocationAndMarketBased or –None– (Electricity Emissions Factor Set.Market-Based Hydro Mix Percentage))

        else 0

    -   When the renewable energy allocation is happening from the Energy Attribute Credit Distribution object, if Renewable Energy Type Override == Empty (None), then Market-Based Electricity from Hydro (kWh) = \[Total Fuel Consumption (kWh) (where FuelType = "Electricity") – Allocated Energy Attribute Credits (kWh)\]× (if Market-Based Electricity Emissions Factors != Empty (MktBsdElectriEmssnFctrId.Market-Based Hydro Mix Percentage)

        else if (ElectricityEmissionFactorsId.Emissions Factor Type == LocationAndMarketBased or None (ElectricityEmissionFactorsId.Market-Based Hydro Mix Percentage))

        else 0


-   **Market-Based Electricity from Nuclear (kWh) (MktBasedElectrFrNuclearInKwh)**

    **Input Fields**

    -   Stationary Asset Energy Use (StnryAssetEnrgyUse)
        -   Total Fuel Consumption (kWh) (TotalFuelConsumptionInKwh)
        -   Allocated Renewable Energy Override (kWh) (AllocatedRenewableEnergyInKwh)
        -   Renewable Energy Type Override (RenewableEnergyType)
        -   Allocated Energy Attribute Credits (kWh) (AllocEnrgyAttrCrInKwh)
        -   Fuel Type (FuelType)
    -   Electricity Emissions Factor Set (ElectricityEmissionFactorsId)
        -   Emissions Factor Type (EmissionsFactorType)
        -   Market-Based Nuclear Mix Percentage (MarketBasedNuclearMixPct)
    -   Market-Based Electricity Emissions Factors (MktBsdElectriEmssnFctrId)
        -   Emissions Factor Type (EmissionsFactorType)
        -   Market-Based Nuclear Mix Percentage (MarketBasedNuclearMixPct)
    -   Energy Attribute Credit Distribution (EnergyAttrCreditDstr)

    **Calculations**

    -   If Renewable Energy Type Override ! = Empty, then Market-Based Electricity from Nuclear (kWh) = \[Total Fuel Consumption (kWh) (where Fuel Type = "Electricity") – Allocated Renewable Energy (kWh)\] × (if Market-Based Electricity Emissions Factors != Empty (MktBsdElectriEmssnFctrId.Market-Based Nuclear Mix Percentage)

        else if (Electricity Emissions Factors == LocationAndMarketBased or –None– (Electricity Emissions Factor Set.Market-Based Nuclear Mix Percentage))

        else 0

    -   When the renewable energy allocation is happening from the Energy Attribute Credit Distribution object, if Renewable Energy Type Override == Empty (None), then Market-Based Electricity from Nuclear (kWh) = \[Total Fuel Consumption (kWh) (where FuelType = "Electricity") – Allocated Energy Attribute Credits (kWh)\]× (if Market-Based Electricity Emissions Factors != Empty (MktBsdElectriEmssnFctrId.Market-Based Nuclear Mix Percentage)

        else if (ElectricityEmissionFactorsId.Emissions Factor Type == LocationAndMarketBased or None (ElectricityEmissionFactorsId.Market-Based Nuclear Mix Percentage))

        else 0


-   **Market-Based Electricity from Oil (kWh) (MktBasedElectrFromOilInKwh)**

    **Input Fields**

    -   Stationary Asset Energy Use (StnryAssetEnrgyUse)
        -   Total Fuel Consumption (kWh) (TotalFuelConsumptionInKwh)
        -   Allocated Renewable Energy Override (kWh) (AllocatedRenewableEnergyInKwh)
        -   Renewable Energy Type Override (RenewableEnergyType)
        -   Allocated Energy Attribute Credits (kWh) (AllocEnrgyAttrCrInKwh)
        -   Fuel Type (FuelType)
    -   Electricity Emissions Factor Set (ElectricityEmissionFactorsId)
        -   Emissions Factor Type (EmissionsFactorType)
        -   Market-Based Oil Mix Percentage (MarketBasedOilMixPct)
    -   Market-Based Electricity Emissions Factors (MktBsdElectriEmssnFctrId)
        -   Emissions Factor Type (EmissionsFactorType)
        -   Market-Based Oil Mix Percentage (MarketBasedOilMixPct)
    -   Energy Attribute Credit Distribution (EnergyAttrCreditDstr)

    **Calculations**

    -   If Renewable Energy Type Override ! = Empty, then Market-Based Electricity from Oil (kWh) = \[Total Fuel Consumption (kWh) (where Fuel Type = "Electricity") – Allocated Renewable Energy (kWh)\] × (if Market-Based Electricity Emissions Factors != Empty (MktBsdElectriEmssnFctrId.Market-Based Oil Mix Percentage)

        else if (Electricity Emissions Factors == LocationAndMarketBased or –None– (Electricity Emissions Factor Set.Market-Based Oil Mix Percentage))

        else 0

    -   When the renewable energy allocation is happening from the Energy Attribute Credit Distribution object, if Renewable Energy Type Override == Empty (None), then Market-Based Electricity from Oil (kWh) = \[Total Fuel Consumption (kWh) (where FuelType = "Electricity") – Allocated Energy Attribute Credits (kWh)\]× (if Market-Based Electricity Emissions Factors != Empty (MktBsdElectriEmssnFctrId.Market-Based Oil Mix Percentage)

        else if (ElectricityEmissionFactorsId.Emissions Factor Type == LocationAndMarketBased or None (ElectricityEmissionFactorsId.Market-Based Oil Mix Percentage))

        else 0


-   **Market-Based Electricity from Other Fuel (kWh) (MktBasedEnrgyFromOthrFuelInKwh)**

    **Input Fields**

    -   Stationary Asset Energy Use (StnryAssetEnrgyUse)
        -   Total Fuel Consumption (kWh) (TotalFuelConsumptionInKwh)
        -   Allocated Renewable Energy Override (kWh) (AllocatedRenewableEnergyInKwh)
        -   Renewable Energy Type Override (RenewableEnergyType)
        -   Allocated Energy Attribute Credits (kWh) (AllocEnrgyAttrCrInKwh)
        -   Fuel Type (FuelType)
    -   Electricity Emissions Factor Set (ElectricityEmissionFactorsId)
        -   Emissions Factor Type (EmissionsFactorType)
        -   Market-Based Other Fuel Mix Percentage (MarketBasedOtherFuelMixPct)
    -   Market-Based Electricity Emissions Factors (MktBsdElectriEmssnFctrId)
        -   Emissions Factor Type (EmissionsFactorType)
        -   Market-Based Other Fuel Mix Percentage (MarketBasedOtherFuelMixPct)
    -   Energy Attribute Credit Distribution (EnergyAttrCreditDstr)

    **Calculations**

    -   If Renewable Energy Type Override ! = Empty, then Market-Based Electricity from Other Fuel (kWh) = \[Total Fuel Consumption (kWh) (where Fuel Type = "Electricity") – Allocated Renewable Energy (kWh)\] × (if Market-Based Electricity Emissions Factors != Empty (MktBsdElectriEmssnFctrId.Market-Based Other Fuel Mix Percentage)

        else if (Electricity Emissions Factors == LocationAndMarketBased or –None– (Electricity Emissions Factor Set.Market-Based Other Fuel Mix Percentage))

        else 0

    -   When the renewable energy allocation is happening from the Energy Attribute Credit Distribution object, if Renewable Energy Type Override == Empty (None), then Market-Based Electricity from Other Fuel (kWh) = \[Total Fuel Consumption (kWh) (where FuelType = "Electricity") – Allocated Energy Attribute Credits (kWh)\]× (if Market-Based Electricity Emissions Factors != Empty (MktBsdElectriEmssnFctrId.Market-Based Other Fuel Mix Percentage)

        else if (ElectricityEmissionFactorsId.Emissions Factor Type == LocationAndMarketBased or None (ElectricityEmissionFactorsId.Market-Based Other Fuel Mix Percentage))

        else 0


-   **Market-Based Electricity from Solar (kWh) (MktBasedEnrgyFromSolarInKwh)**

    **Input Fields**

    -   Stationary Asset Energy Use (StnryAssetEnrgyUse)
        -   Total Fuel Consumption (kWh) (TotalFuelConsumptionInKwh)
        -   Allocated Renewable Energy Override (kWh) (AllocatedRenewableEnergyInKwh)
        -   Renewable Energy Type Override (RenewableEnergyType)
        -   Allocated Energy Attribute Credits (kWh) (AllocEnrgyAttrCrInKwh)
        -   Allocated Energy Attribute Credits from Solar (kWh) (AllocEnrgyAttrCrSolar)
        -   Fuel Type (FuelType)
    -   Electricity Emissions Factor Set (ElectricityEmissionFactorsId)
        -   Emissions Factor Type (EmissionsFactorType)
        -   Market-Based Solar Mix Percentage (MarketBasedSolarMixPct)
    -   Market-Based Electricity Emissions Factors (MktBsdElectriEmssnFctrId)
        -   Emissions Factor Type (EmissionsFactorType)
        -   Market-Based Solar Mix Percentage (MarketBasedSolarMixPct)
    -   Energy Attribute Credit Distribution (EnergyAttrCreditDstr)

    **Calculations**

    -   If Renewable Energy Type Override ! = Empty, then Market-Based Electricity from Solar (kWh) = \[Total Fuel Consumption (kWh) (where Fuel Type = "Electricity") – Allocated Renewable Energy (kWh)\] × (if Market-Based Electricity Emissions Factors != Empty (MktBsdElectriEmssnFctrId.Market-Based Solar Mix Percentage)

        else if (Electricity Emissions Factors == LocationAndMarketBased or –None– (Electricity Emissions Factor Set.Market-Based Solar Mix Percentage))

        else 0

    -   When the renewable energy allocation is happening from the Energy Attribute Credit Distribution object, if Renewable Energy Type Override == Empty (None), then Market-Based Electricity from Solar (kWh) = \[Total Fuel Consumption (kWh) (where FuelType = "Electricity") – Allocated Energy Attribute Credits (kWh)\]× (if Market-Based Electricity Emissions Factors != Empty (MktBsdElectriEmssnFctrId.Market-Based Solar Mix Percentage)

        else if (ElectricityEmissionFactorsId.Emissions Factor Type == LocationAndMarketBased or None (ElectricityEmissionFactorsId.Market-Based Solar Mix Percentage))

        else 0


-   **Market-Based Electricity from Wind (kWh) (MktBasedEnrgyFromWindInKwh)**

    **Input Fields**

    -   Stationary Asset Energy Use (StnryAssetEnrgyUse)
        -   Total Fuel Consumption (kWh) (TotalFuelConsumptionInKwh)
        -   Allocated Renewable Energy Override (kWh) (AllocatedRenewableEnergyInKwh)
        -   Renewable Energy Type Override (RenewableEnergyType)
        -   Allocated Energy Attribute Credits (kWh) (AllocEnrgyAttrCrInKwh)
        -   Allocated Energy Attribute Credits from Wind (kWh) (AllocEnrgyAttrCrWind)
        -   Fuel Type (FuelType)
    -   Electricity Emissions Factor Set (ElectricityEmissionFactorsId)
        -   Emissions Factor Type (EmissionsFactorType)
        -   Market-Based Wind Mix Percentage (MarketBasedWindMixPct)
    -   Market-Based Electricity Emissions Factors (MktBsdElectriEmssnFctrId)
        -   Emissions Factor Type (EmissionsFactorType)
        -   Market-Based Wind Mix Percentage (MarketBasedWindMixPct)
    -   Energy Attribute Credit Distribution (EnergyAttrCreditDstr)

    **Calculations**

    -   If Renewable Energy Type Override ! = Empty, then Market-Based Electricity from Wind (kWh) = \[Total Fuel Consumption (kWh) (where Fuel Type = "Electricity") – Allocated Renewable Energy (kWh)\] × (if Market-Based Electricity Emissions Factors != Empty (MktBsdElectriEmssnFctrId.Market-Based Wind Mix Percentage)

        else if (Electricity Emissions Factors == LocationAndMarketBased or –None– (Electricity Emissions Factor Set.Market-Based Wind Mix Percentage))

        else 0

    -   When the renewable energy allocation is happening from the Energy Attribute Credit Distribution object, if Renewable Energy Type Override == Empty (None), then Market-Based Electricity from Wind (kWh) = \[Total Fuel Consumption (kWh) (where FuelType = "Electricity") – Allocated Energy Attribute Credits (kWh)\]× (if Market-Based Electricity Emissions Factors != Empty (MktBsdElectriEmssnFctrId.Market-Based Wind Mix Percentage)

        else if (ElectricityEmissionFactorsId.Emissions Factor Type == LocationAndMarketBased or None (ElectricityEmissionFactorsId.Market-Based Wind Mix Percentage))

        else 0


-   **Market-Based Electricity from Non-Renewables (kWh) (MktBsdEnrgyFrNonRenewablesKwh)**

    **Input Fields**

    -   Total Fuel Consumption (kWh) (TotalFuelConsumptionInKwh)
    -   Market-Based Electricity from Biomass (kWh) (MktBasedElectrFrBiomassInKwh)
    -   Market-Based Electricity from Hydro (kWh) (MktBasedElectrFromHydroInKwh)
    -   Market-Based Electricity from Solar (kWh) (MktBasedElectrFromSolarInKwh)
    -   Market-Based Electricity from Wind (kWh) (MktBasedElectrFromWindInKwh)
    -   Market-Based Electricity from Geothermal (kWh) (MktBsdElectrFrGeothermalInKwh)

    **Calculations**

    Market-Based Electricity from Non-Renewables (kWh) = Total Fuel Consumption (kWh) – Market-Based Electricity from Biomass (kWh) – Market-Based Electricity from Hydro (kWh) – Market-Based Electricity from Solar (kWh) – Market-Based Electricity from Wind (kWh) – Market-Based Electricity from Geothermal (kWh)


-   **Market-Based Electricity from Geothermal (kWh) (MktBsdEnrgyFromGeothermalInKwh)**

    **Input Fields**

    -   Stationary Asset Energy Use (StnryAssetEnrgyUse)
        -   Total Fuel Consumption (kWh) (TotalFuelConsumptionInKwh)
        -   Allocated Renewable Energy (kWh) (AllocatedRenewableEnergyInKwh)
        -   Renewable Energy Type (RenewableEnergyType)
        -   Allocated Energy Attribute Credits (kWh) (AllocEnrgyAttrCrInKwh)
        -   Allocated Energy Attribute Credits from Geothermal (kWh) (AllocEnrgyAttrCrGeothermal)
        -   Fuel Type (FuelType)
    -   Electricity Emissions Factor Set (ElectricityEmssnFctrSet)
        -   Market-Based Geothermal Mix Percentage (MktBasedGeothermalMixPct)
    -   Energy Attribute Credit Distribution (EnergyAttrCreditDstr)

    **Calculations**

    -   If Renewable Energy Type = "Geothermal", then Market-Based Electricity from Geothermal (kWh) = \[Total Fuel Consumption (kWh) (where FuelType = "Electricity") – Allocated Renewable Energy (kWh)\] × ElectricityEmssnFctrSet.Market-Based Geothermal Mix Percentage/100 + Allocated Renewable Energy (kWh)
    -   If Renewable Energy Type ! = "Geothermal" && !Empty, then Market-Based Electricity from Geothermal (kWh) = \[Total Fuel Consumption (kWh) (where FuelType = "Electricity") – Allocated Renewable Energy (kWh)\] × ElectricityEmssnFctrSet.Market-Based Geothermal Mix Percentage/100
    -   When the renewable energy allocation is happening from the Energy Attribute Credit Distribution object, if Renewable Energy Type == Empty (None), then Market-Based Electricity from Geothermal (kWh) = \[Total Fuel Consumption (kWh) (where Fuel Type = "Electricity") – Allocated Energy Attribute Credits (kWh)\] × ElectricityEmssnFctrSet.Market-Based Geothermal Mix Percentage/100 + Allocated Energy Attribute Credits from Geothermal (kWh)

    -   If Renewable Energy Type Override ! = Empty, then Market-Based Electricity from Geothermal (kWh) = \[Total Fuel Consumption (kWh) (where Fuel Type = "Electricity") – Allocated Renewable Energy (kWh)\] × (if Market-Based Electricity Emissions Factors != Empty (MktBsdElectriEmssnFctrId.Market-Based Geothermal Mix Percentage)

        else if (Electricity Emissions Factors == LocationAndMarketBased or –None– (Electricity Emissions Factor Set.Market-Based Geothermal Mix Percentage))

        else 0

    -   When the renewable energy allocation is happening from the Energy Attribute Credit Distribution object, if Renewable Energy Type Override == Empty (None), then Market-Based Electricity from Geothermal (kWh) = \[Total Fuel Consumption (kWh) (where FuelType = "Electricity") – Allocated Energy Attribute Credits (kWh)\]× (if Market-Based Electricity Emissions Factors != Empty (MktBsdElectriEmssnFctrId.Market-Based Geothermal Mix Percentage)

        else if (ElectricityEmissionFactorsId.Emissions Factor Type == LocationAndMarketBased or None (ElectricityEmissionFactorsId.Market-Based Geothermal Mix Percentage))

        else 0


-   **Market-Based Electricity from Other Fossil Fuel (kWh) (MktBsdElectrOthrFossilFuelKwh)**

    **Input Fields**

    -   Stationary Asset Energy Use (StnryAssetEnrgyUse)
        -   Total Fuel Consumption (kWh) (TotalFuelConsumptionInKwh)
        -   Allocated Renewable Energy Override (kWh) (AllocatedRenewableEnergyInKwh)
        -   Renewable Energy Type Override (RenewableEnergyType)
        -   Allocated Energy Attribute Credits (kWh) (AllocEnrgyAttrCrInKwh)
        -   Allocated Energy Attribute Credits from Geothermal (kWh) (AllocEnrgyAttrCrGeothermal)
        -   Fuel Type (FuelType)
    -   Electricity Emissions Factor Set (ElectricityEmissionFactorsId)
        -   Emissions Factor Type (EmissionsFactorType)
        -   Market-Based Other Fossil Fuel Mix Percentage (MktBasedOtherFossilFuelMixPct)
    -   Market-Based Electricity Emissions Factors (MktBsdElectriEmssnFctrId)
        -   Emissions Factor Type (EmissionsFactorType)
        -   Market-Based Other Fossil Fuel Mix Percentage (MktBasedOtherFossilFuelMixPct)
    -   Energy Attribute Credit Distribution (EnergyAttrCreditDstr)

    **Calculations**

    -   If Renewable Energy Type Override ! = Empty, then Market-Based Electricity from Other Fossil Fuel (kWh) = \[Total Fuel Consumption (kWh) (where Fuel Type = "Electricity") – Allocated Renewable Energy (kWh)\] × (if Market-Based Electricity Emissions Factors != Empty (MktBsdElectriEmssnFctrId.Market-Based Other Fossil Fuel Mix Percentage)

        else if (Electricity Emissions Factors == LocationAndMarketBased or –None– (Electricity Emissions Factor Set.Market-Based Other Fossil Fuel Mix Percentage))

        else 0

    -   When the renewable energy allocation is happening from the Energy Attribute Credit Distribution object, if Renewable Energy Type Override == Empty (None), then Market-Based Electricity from Other Fossil Fuel (kWh) = \[Total Fuel Consumption (kWh) (where FuelType = "Electricity") – Allocated Energy Attribute Credits (kWh)\]× (if Market-Based Electricity Emissions Factors != Empty (MktBsdElectriEmssnFctrId.Market-Based Other Fossil Fuel Mix Percentage)

        else if (ElectricityEmissionFactorsId.Emissions Factor Type == LocationAndMarketBased or None (ElectricityEmissionFactorsId.Market-Based Other Fossil Fuel Mix Percentage))

        else 0


-   **Allocated Energy Attribute Credits (kWh) (AllocEnrgyAttrCrInKwh)**

    **Input Fields**

    -   Allocated Energy Attribute Credits from Biomass (kWh) (AllocEnrgyAttrCrBiomassNumber)
    -   Allocated Energy Attribute Credits from Geothermal (kWh) (AllocEnrgyAttrCrGeothermalNumber)
    -   Allocated Energy Attribute Credits from Solar (kWh) (AllocEnrgyAttrCrSolarNumber)
    -   Allocated Energy Attribute Credits from Wind (kWh) (AllocEnrgyAttrCrWind)

    **Calculations**

    Allocated Energy Attribute Credits (kWh) = Allocated Energy Attribute Credits from Biomass (kWh) + Allocated Energy Attribute Credits from Geothermal (kWh) + Allocated Energy Attribute Credits from Wind (kWh) + Allocated Energy Attribute Credits from Solar (kWh)


-   **Scope 3 Downstream Emissions (tCO2e) (Scope3DnstrmEmissionsIntCO2e)**

    **Input Fields**

    -   Other Emissions Factors (OtherEmissionFactors)
    -   Supplemental Scope 3 Downstream Emissions (SuplScope3DnstrmEmissions)
    -   Total Fuel Consumption (kWh) (TotalFuelConsumptionInKwh)
    -   Carbon Emissions Scope Allocation (CrbnEmssnScopeAlloc)
    -   Stationary Asset Environmental Source (StnryAssetEnvrSrcId)
        -   Carbon Emissions Scope Allocation (CrbnEmssnScopeAllocId)

    **Calculations**

    If Carbon Emission Scope Allocation value is one of these values

    -   Scope 3 Downstream
    -   Scope 3 Downstream Leased Assets
    -   Scope 3 End-of-Life Treatment of Sold Products
    -   Scope 3 Franchises
    -   Scope 3 Investments
    -   Scope 3 Processing of Sold Products
    -   Scope 3 Use of Sold Products

    or if Carbon Emission Scope Allocation = NULL then StnryAssetEnvrSrc.Carbon Emission Scope Allocation.Fuel Type Allocation value is one of these values

    -   Scope 3 Downstream
    -   Scope 3 Downstream Leased Assets
    -   Scope 3 End-of-Life Treatment of Sold Products
    -   Scope 3 Franchises
    -   Scope 3 Investments
    -   Scope 3 Processing of Sold Products
    -   Scope 3 Use of Sold Products

    (where StnryAssetEnvrSrc.Carbon Emission Scope Allocation.Fuel Type = Fuel Type)

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=netzero_cloud_dev_guide)

    #### Note

    If the scope isn't specified in either the energy use or the asset records, Net Zero Cloud allocates a default scope based on the fuel type and asset ownership. See [How to Override the Default Scope Allocation](https://help.salesforce.com/s/articleView?id=ind.netzero_manager_how_to_override_default_scope_allocation.htm&language=en_US).

    Then see the calculations for Scope 1 Emissions (tCO2e)

    **Default Value**

    Scope3DnstrmEmissionsIntCO2e = SuplScope3DnstrmEmissions


-   **Scope 3 Upstream Emissions (tCO2e) (Scope3UpstrmEmissionsInTco2e)**

    **Input Fields**

    -   Other Emissions Factors (OtherEmissionFactors)
    -   Supplemental Scope 3 Upstream Emissions (SuplScope3UpstrmEmissions)
    -   Total Fuel Consumption (kWh) (TotalFuelConsumptionInKwh)
    -   Carbon Emissions Scope Allocation (CrbnEmssnScopeAlloc)
    -   Stationary Asset Environmental Source (StnryAssetEnvrSrcId)
        -   Carbon Emissions Scope Allocation (CrbnEmssnScopeAllocId)

    **Calculations**

    If Carbon Emission Scope Allocation value is one of these values

    -   Scope 3 Upstream
    -   Scope 3 Capital Goods
    -   Scope 3 Employee Commuting
    -   Scope 3 Fuel and Energy-Related Activities
    -   Scope 3 Purchased Goods and Services
    -   Scope 3 Upstream Leased Assets
    -   Scope 3 Waste Generated In Operations

    or if Carbon Emission Scope Allocation = NULL then StnryAssetEnvrSrc.Carbon Emission Scope Allocation.Fuel Type Allocation value is one of these values

    -   Scope 3 Upstream
    -   Scope 3 Capital Goods
    -   Scope 3 Employee Commuting
    -   Scope 3 Fuel and Energy-Related Activities
    -   Scope 3 Purchased Goods and Services
    -   Scope 3 Upstream Leased Assets
    -   Scope 3 Waste Generated In Operations

    (where StnryAssetEnvrSrc.Carbon Emission Scope Allocation.Fuel Type = Fuel Type)

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=netzero_cloud_dev_guide)

    #### Note

    If the scope isn't specified in either the energy use or the asset records, Net Zero Cloud allocates a default scope based on the fuel type and asset ownership. See [How to Override the Default Scope Allocation](https://help.salesforce.com/s/articleView?id=ind.netzero_manager_how_to_override_default_scope_allocation.htm&language=en_US).

    Then see the calculations for Scope 1 Emissions (tCO2e)

    **Default Value**

    Scope 3 Upstream Emissions (tCO2e) = Supplemental Scope 3 Upstream Emissions


-   **Scope 3 GHG Category (Scope3GhgCategory)**

    Input Fields

    -   Carbon Emissions Scope Allocation (CrbnEmssnScopeAlloc)
    -   Stationary Asset Environmental Source (StnryAssetEnvrSrcId)
        -   Carbon Emissions Scope Allocation (CrbnEmssnScopeAllocId)

    Calculations

    If Carbon Emission Scope Allocation value is one of these values

    -   Scope 3 Purchased Goods and Services
    -   Scope 3 Capital Goods
    -   Scope 3 Processing of Sold Products
    -   Scope 3 Upstream Leased Assets
    -   Scope 3 Fuel and Energy-Related Activities
    -   Scope 3 Employee Commuting
    -   Scope 3 End-of-Life Treatment of Sold Products
    -   Scope 3 Waste Generated In Operations
    -   Scope 3 Use of Sold Products
    -   Scope 3 Downstream Leased Assets
    -   Scope 3 Investments
    -   Scope 3 Franchises

    then

    Scope 3 GHG Category = CrbnEmssnScopeAllocVal.FuelTypeAllocation

    or if Carbon Emission Scope Allocation = NULL then StnryAssetEnvrSrc.Carbon Emission Scope Allocation.Fuel Type Allocation value is one of these values

    -   Scope 3 Purchased Goods and Services
    -   Scope 3 Capital Goods
    -   Scope 3 Processing of Sold Products
    -   Scope 3 Upstream Leased Assets
    -   Scope 3 Fuel and Energy-Related Activities
    -   Scope 3 Employee Commuting
    -   Scope 3 End-of-Life Treatment of Sold Products
    -   Scope 3 Waste Generated In Operations
    -   Scope 3 Use of Sold Products
    -   Scope 3 Downstream Leased Assets
    -   Scope 3 Investments
    -   Scope 3 Franchises

    (where StnryAssetEnvrSrc.Carbon Emission Scope Allocation.Fuel Type = Fuel Type)

    then

    Scope 3 GHG Category = StnryAssetEnvrSrc.CrbnEmssnScopeAllocId.FuelTypeAllocation

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=netzero_cloud_dev_guide)

    #### Note

    If the scope isn't specified in either the energy use or the asset records, Net Zero Cloud allocates a default scope based on the fuel type and asset ownership. See [How to Override the Default Scope Allocation](https://help.salesforce.com/s/articleView?id=ind.netzero_manager_how_to_override_default_scope_allocation.htm&language=en_US).

    else

    Scope 3 GHG Category = null


-   **CH4 Emissions (kg) (Ch4EmissionsInKg)**

    **Input Fields**

    -   Total Fuel Consumption (kWh) (TotalFuelConsumptionInKwh)
    -   Fuel Type (FuelType)
    -   Other Emissions Factor Set (OtherEmssnFctrSet)
    -   Other Emissions Factor Set Item (OtherEmssnFctrSetItem)

        Fuel Type (FuelType)

        CH4 Emissions Factor (Ch4EmissionFactor)

    -   Electricity Emission Factor Set (ElectricityEmssnFctrSet)

        CH4 Emissions Rate (tonnes/GWh) (Ch4EmissionRateInTgwh)


    **Calculations**

    If Fuel Type = "Electricity"

    -   CH4 Emissions (kg) = Total Fuel Consumption (kWh) × ElectricityEmssnFctrSet.CH4 Emissions Rate (tonnes/GWh) × 1000/1000000.0

    Default = 0

    For any fuel other than refrigerants and electricity

    -   If CH4 Emissions Factor is in energy units

        CH4 Emissions (kg) = Total Fuel Consumption (kWh) × OtherEmissionFactor.OtherEmssnFctrSetItem.CH4 Emissions Factor where Fuel Type = OtherEmissionFactor.OtherEmssnFctrSetItem.Fuel Type and OtherEmissionFactor.OtherEmssnFctrSetItem.CH4 Emissions Factor is converted to Kg/Kwh

    -   else CH4 Emissions (kg) = 0
-   **CO2 Emissions (kg) (Co2EmissionsInKg)**

    **Input Fields**

    -   Total Fuel Consumption (kWh) (TotalFuelConsumptionInKwh)
    -   Fuel Type (FuelType)
    -   Other Emissions Factor Set (OtherEmssnFctrSet)
    -   Other Emissions Factor Set Item (OtherEmssnFctrSetItem)

        Fuel Type (FuelType)

        CO2 Emissions Factor (Co2EmissionFactor)

    -   Electricity Emission Factor Set (ElectricityEmssnFctrSet)

        CO2 Emissions Rate (tonnes/MWh) (Co2EmissionRateInTmwh)


    **Calculations**

    If Fuel Type = "Electricity"

    -   CO2 Emissions (kg) = Total Fuel Consumption (kWh) × ElectricityEmssnFctrSet.CO2 Emissions Rate (tonnes/MWh) × 1000/1000.0

    Default = 0

    For any fuel other than refrigerants and electricity

    -   If CO2 Emissions Factor is in energy units

        CO2 Emissions (kg) = Total Fuel Consumption (kWh) × OtherEmissionFactor.OtherEmssnFctrSetItem.CO2 Emissions Factor where Fuel Type = OtherEmissionFactor.OtherEmssnFctrSetItem.Fuel Type and OtherEmissionFactor.OtherEmssnFctrSetItem.CO2 Emissions Factor is converted to Kg/Kwh

    -   else CO2 Emissions (kg) = 0
-   **N2O Emissions (kg) (N2oEmissionsInKg)**

    **Input Fields**

    -   Total Fuel Consumption (kWh) (TotalFuelConsumptionInKwh)
    -   Fuel Type (FuelType)
    -   Other Emissions Factor Set (OtherEmssnFctrSet)
    -   Other Emissions Factor Set Item (OtherEmssnFctrSetItem)

        Fuel Type (FelType)

        N2O Emissions Factor (N2oEmissionFactor)

    -   Electricity Emission Factor Set (ElectricityEmssnFctrSet)

        N2O Emissions Rate (tonnes/GWh) (N2oEmissionRateInTgwh)


    **Calculations**

    If Fuel Type = "Electricity"

    -   N2O Emissions (kg) = Total Fuel Consumption (kWh) × ElectricityEmssnFctrSet.N2O Emissions Rate (tonnes/GWh) × 1000/1000000.0

    Default = 0

    For any fuel other than refrigerants and electricity

    -   If N2O Emissions Factor is in energy units

        N2O Emissions (kg) = Total Fuel Consumption (kWh) × OtherEmissionFactor.OtherEmssnFctrSetItem.N2O Emissions Factor where Fuel Type = OtherEmissionFactor.OtherEmssnFctrSetItem.Fuel Type and OtherEmissionFactor.OtherEmssnFctrSetItem.N2O Emissions Factor is converted to Kg/Kwh

    -   else N2O Emissions (kg) = 0
-   **Fuel Consumption**

    Inputs

    -   Occupied Floor Area (OccupiedFloorArea)
    -   Occupied Floor Area Unit (OccupiedFloorAreaUnit)
    -   Other Emission Factors (OtherEmissionFactors)
    -   Refrigerant Leakage Rate (kg/sqft) (RefrigerantLeakageRtInKgSqft)

    Calculations

    If (Fuel Type = "Refrigerant") and Fuel Consumption is NULL

    then

    Fuel Consumption = Occupied Floor Area (converted to sqft) × OtherEmissionFactors.Refrigerant Leakage Rate (kg/sqft)

-   ****Scope 3 CH4 Emissions from Fuel and Energy-Related Activity (Kg) (Scp3Ch4EmssnFuelEnrgy)****

    Inputs

    -   Fuel Type (FuelType)
    -   Total Fuel Consumption (kWh) (TotalFuelConsumptionInKwh)
    -   Other Lifecycle Emission Factor Set (OthrLifecyclEmssnFctrSetId)
        -   Other Lifecycle Emission Factor Set Item (OthrLifecyclEmssnFctrSetItem)
            -   Well-To-Tank CH4 Emissions Factor (Well2TkCh4EmssnFctr)
            -   Well-To-Tank CH4 Emissions Factor Unit (Well2TkCh4EmssnFctrUnit)
            -   Transmission and Distribution CH4 Emissions Factor (TrnsmDstrCh4EmssnFctr)
            -   Transmission and Distribution CH4 Emissions Factor Unit (TrnsmDstrCh4EmssnFctrUnit)
            -   Well-To-Tank Transmission and Distribution CH4 Emissions Factor (Well2TkTrnsmCh4Emssn)
            -   Well-To-Tank Transmission and Distribution CH4 Emissions Factor Unit (Well2TkTrnsmCh4EmssnUnit)

    Calculations

    If Fuel Type = "Refrigerant" or Fuel Type = "Electricity", then Scope 3 CH4 Emissions from Fuel and Energy-Related Activity (Kg) = 0.

    For any fuel other than refrigerants and electricity, Scope 3 CH4 Emissions from Fuel and Energy-Related Activity (Kg) = Total Fuel Consumption (kWh) × OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Well-To-Tank CH4 Emissions Factor × (conversion factor for kg/kWh based on OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Well-To-Tank CH4 Emissions Factor Unit) + Total Fuel Consumption (kWh) × OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Transmission and Distribution CH4 Emissions Factor × (conversion factor for kg/kWh based on OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Transmission and Distribution CH4 Emissions Factor Unit ) + Total Fuel Consumption (kWh) × OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Well-To-Tank Transmission and Distribution CH4 Emissions Factor × (conversion factor for kg/kWh based on OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Well-To-Tank Transmission and Distribution CH4 Emissions Factor Unit)

-   **Scope 3 CO2 Emissions from Fuel and Energy-Related Activity (Kg) (Scp3Co2EmssnFuelEnrgy)**

    Inputs

    -   Fuel Type (FuelType)
    -   Total Fuel Consumption (kWh) (TotalFuelConsumptionInKwh)
    -   Other Lifecycle Emission Factor Set (OthrLifecyclEmssnFctrSetId)
        -   Other Lifecycle Emission Factor Set Item (OthrLifecyclEmssnFctrSetItem)
            -   Well-To-Tank CO2 Emissions Factor (Well2TkCo2EmssnFctr)
            -   Well-To-Tank CO2 Emissions Factor Unit (Well2TkCo2EmssnFctrUnit)
            -   Transmission and Distribution CO2 Emissions Factor (TrnsmDstrCo2EmssnFctr)
            -   Transmission and Distribution CO2 Emissions Factor Unit (TrnsmDstrCo2EmssnFctrUnit)
            -   Well-To-Tank Transmission and Distribution CO2 Emissions Factor (Well2TkTrnsmCo2Emssn)
            -   Well-To-Tank Transmission and Distribution CO2 Emissions Factor Unit (Well2TkTrnsmCo2EmssnUnit)

    Calculations

    If FuelType = "Refrigerant" or FuelType = "Electricity", then Scope 3 CO2 Emissions from Fuel and Energy-Related Activity (Kg) = 0

    For any fuel other than refrigerants and electricity, Scope 3 CO2 Emissions from Fuel and Energy-Related Activity (Kg) = Total Fuel Consumption (kWh) × OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Well-To-Tank CO2 Emissions Factor × (conversion factor for kg/kWh based on OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Well-To-Tank CO2 Emissions Factor Unit ) + Total Fuel Consumption (kWh) × OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Transmission and Distribution CO2 Emissions Factor × (conversion factor for kg/kWh based on OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Transmission and Distribution CO2 Emissions Factor Unit) + Total Fuel Consumption (kWh) × OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Well-To-Tank Transmission and Distribution CO2 Emissions × (conversion factor for kg/kWh based on OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Well-To-Tank Transmission and Distribution CO2 Emissions Factor Unit)

-   **Scope 3 N2O Emissions from Fuel and Energy-Related Activity (Kg) (Scp3N2oEmssnFuelEnrgy)**

    Inputs

    -   Fuel Type (FuelType)
    -   Total Fuel Consumption (kWh) (TotalFuelConsumptionInKwh)
    -   Other Lifecycle Emission Factor Set (OthrLifecyclEmssnFctrSetId)
        -   Other Lifecycle Emission Factor Set Item (OthrLifecyclEmssnFctrSetItem)
            -   Well-To-Tank N2O Emissions Factor (Well2TkN2oEmssnFctr)
            -   Well-To-Tank N2O Emissions Factor Unit (Well2TkN2oEmssnFctrUnit)
            -   Transmission and Distribution N2O Emissions Factor (TrnsmDstrN2oEmssnFctr)
            -   Transmission and Distribution N2O Emissions Factor Unit (TrnsmDstrN2oEmssnFctrUnit)
            -   Well-To-Tank Transmission and Distribution N2O Emissions Factor (Well2TkTrnsmN2oEmssn)
            -   Well-To-Tank Transmission and Distribution N2O Emissions Factor Unit (Well2TkTrnsmN2oEmssnUnit)

    Calculations

    If FuelType = "Refrigerant" or FuelType = "Electricity", then Scope 3 N2O Emissions from Fuel and Energy-Related Activity (Kg) = 0

    For any fuel other than refrigerants and electricity, Scope 3 N2O Emissions from Fuel and Energy-Related Activity (Kg) = Total Fuel Consumption (kWh) × OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Well-To-Tank N2O Emissions Factor × (conversion factor for kg/kWh based on OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Well-To-Tank N2O Emissions Factor Unit) + Total Fuel Consumption (kWh) × OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Transmission and Distribution N2O Emissions Factor × (conversion factor for kg/kWh based on OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Transmission and Distribution N2O Emissions Factor Unit) + Total Fuel Consumption (kWh) × OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Well-To-Tank Transmission and Distribution N2O Emissions Factor × (conversion factor for kg/kWh based on OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Well-To-Tank Transmission and Distribution N2O Emissions Factor Unit)

-   **Scope 3 Emissions from Fuel and Energy-Related Activity (tCO2e) (Scp3EmssnFuelEnrgy)**

    Inputs

    -   Fuel Type (FuelType)
    -   Total Fuel Consumption (kWh) (TotalFuelConsumptionInKwh)
    -   Electricity Lifecycle Emission Factor Set (ElectrLifecyclEmssnFctrSet)
        -   Fuel-Cycle Factor (FuelCycleFactor)
        -   Fuel-Cycle Factor Unit (FuelCycleFactorUnit)
        -   Lifecycle Transmission and Distribution Factor (LifecyclTrnsmDstrFctr)
        -   Lifecycle Transmission and Distribution Factor Unit (LifecyclTrnsmDstrFctrUnit)
    -   Other Lifecycle Emission Factor Set (OthrLifecyclEmssnFctrSetId)
        -   Other Lifecycle Emission Factor Set Item (OthrLifecyclEmssnFctrSetItem)
            -   Well-To-Tank Supplied CO2e Emissions Factor (Well2TkSuplCo2eEmssn)
            -   Well-To-Tank Supplied CO2e Emissions Factor Unit (Well2TkSuplCo2eEmssnUnit)
            -   Well-To-Tank CO2e Emissions Factor (tCO2e/MWh) (Well2TkCo2eEmssnFctrMwh)
            -   Transmission and Distribution Supplied CO2e Emissions Factor (TrnsmDstrSuplCo2eEmssn)
            -   Transmission and Distribution Supplied CO2e Emissions Factor Unit (TrnsmDstrSuplCo2eEmssnUnit)
            -   Transmission and Distribution CO2e Emissions Factor (tCO2e/MWh) (TrnsmDstrCo2eEmssnMwh)
            -   Well-To-Tank Transmission and Distribution CO2e Emissions Factor (tCO2e/MWh) (Well2TkTrnsmCo2eEmssnMwh)
            -   Well-To-Tank Transmission and Distribution Supplied CO2e Emissions Factor (Well2TkTrnsmSuplCo2e)
            -   Well-To-Tank Transmission and Distribution Supplied CO2e Emissions Factor Unit (Well2TkTrnsmSuplCo2eUnit)
            -   Well-To-Tank Transmission and Distribution CO2e Emissions Factor (tCO2e/MWh) (Well2TkTrnsmCo2eEmssnMwh)

    Calculations

    If Fuel Type = "Refrigerant", then Scope 3 Emissions from Fuel and Energy-Related Activity (tCO2e) = 0

    If Fuel Type = "Electricity", then Scope 3 Emissions from Fuel and Energy-Related Activity (tCO2e) = (Total Fuel Consumption (kWh) × ElectrLifecyclEmssnFctrSet.Fuel-Cycle Factor × (conversion factor for tonnes/MWh based on ElectrLifecyclEmssnFctrSet.Fuel-Cycle Factor Unit)) / 1000 + (Total Fuel Consumption (kWh) × ElectrLifecyclEmssnFctrSet.Lifecycle Transmission and Distribution Factor × (conversion factor for tonnes/MWh based on ElectrLifecyclEmssnFctrSet.Lifecycle Transmission and Distribution Factor Unit)) / 1000

    For any fuel other than refrigerants and electricity, Scope 3 Emissions from Fuel and Energy-Related Activity (tCO2e) = Well2Tk Component + TrnsmDstr Component + Well2TkTrnsm Component, where:

    Well2Tk Component: If OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Well-To-Tank Supplied CO2e Emissions Factor = 0 or NULL, then (Total Fuel Consumption (kWh) × OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Well-To-Tank CO2e Emissions Factor (tCO2e/MWh)) / 1000, else (Total Fuel Consumption (kWh) × OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Well-To-Tank Supplied CO2e Emissions Factor × (conversion factor for tonnes/MWh based on OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Well-To-Tank Supplied CO2e Emissions Factor Unit )) / 1000

    TrnsmDstr Component: If OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Transmission and Distribution Supplied CO2e Emissions Factor = 0 or NULL, then (Total Fuel Consumption (kWh) × OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Transmission and Distribution CO2e Emissions Factor (tCO2e/MWh)) / 1000, else (Total Fuel Consumption (kWh) × OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Transmission and Distribution Supplied CO2e Emissions Factor × (conversion factor for tonnes/MWh based on OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Transmission and Distribution Supplied CO2e Emissions Factor Unit)) / 1000

    Well2TkTrnsm Component: If OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Well-To-Tank Transmission and Distribution Supplied CO2e Emissions Factor = 0 or NULL, then (Total Fuel Consumption (kWh) × OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Well-To-Tank Transmission and Distribution CO2e Emissions Factor (tCO2e/MWh)) / 1000, else (Total Fuel Consumption (kWh) × OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Well-To-Tank Transmission and Distribution Supplied CO2e Emissions Factor × (conversion factor for tonnes/MWh based on OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Well-To-Tank Transmission and Distribution Supplied CO2e Emissions Factor Unit)) / 1000

-   **Scope 3 Market-Based Emissions from Fuel and Energy-Related Activity (tCO2e) (Scp3MktEmssnFuelEnrgy)**

    Inputs

    -   Fuel Type (FuelType)
    -   Scope 3 Emissions from Fuel and Energy-Related Activity (tCO2e) (Scp3EmssnFuelEnrgy)
    -   Renewable Energy Type Override (RenewableEnergyType)
    -   Total Fuel Consumption (kWh) (TotalFuelConsumptionInKwh)
    -   Allocated Energy Attribute Credits (kWh) (AllocEnrgyAttrCrInKwh)
    -   Allocated Renewable Energy Override (kWh) (AllocatedRenewableEnergyInKwh)
    -   Electricity Lifecycle Emission Factor Set (ElectrLifecyclEmssnFctrSet)
        -   Fuel-Cycle Factor (FuelCycleFactor)
        -   Fuel-Cycle Factor Unit (FuelCycleFactorUnit)
        -   Lifecycle Transmission and Distribution Factor (LifecyclTrnsmDstrFctr)
        -   Lifecycle Transmission and Distribution Factor Unit (LifecyclTrnsmDstrFctrUnit)

    Calculations

    For Fuel Type != "Electricity", Scope 3 Market-Based Emissions from Fuel and Energy-Related Activity (tCO2e) value would be same as Scope 3 Emissions from Fuel and Energy-Related Activity (tCO2e)

    For Fuel Type = "Electricity" - If Renewable Energy Type Override is not empty, then Scope 3 Market-Based Emissions from Fuel and Energy-Related Activity (tCO2e) = ((Total Fuel Consumption (kWh) - Allocated Renewable Energy Override (kWh)) × ElectrLifecyclEmssnFctrSet.Fuel-Cycle Factor × (conversion factor for tonnes/MWh based on ElectrLifecyclEmssnFctrSet.Fuel-Cycle Factor Unit)) / 1000 + (Total Fuel Consumption (kWh) × ElectrLifecyclEmssnFctrSet.Lifecycle Transmission and Distribution Factor × (conversion factor for tonnes/MWh based on ElectrLifecyclEmssnFctrSet.Lifecycle Transmission and Distribution Factor Unit )) / 1000, else Scope 3 Market-Based Emissions from Fuel and Energy-Related Activity (tCO2e) = ((Total Fuel Consumption (kWh) - Allocated Energy Attribute Credits (kWh)) × ElectrLifecyclEmssnFctrSet.Fuel-Cycle Factor × (conversion factor for tonnes/MWh based on ElectrLifecyclEmssnFctrSet.Fuel-Cycle Factor Unit)) / 1000 + (Total Fuel Consumption (kWh) × ElectrLifecyclEmssnFctrSet.Lifecycle Transmission and Distribution Factor × (conversion factor for tonnes/MWh based on ElectrLifecyclEmssnFctrSet.Lifecycle Transmission and Distribution Factor Unit )) / 1000

## Related Topics

- Conversion Factors (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_calc_conversion_factors.htm)

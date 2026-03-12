---
title: "Vehicle Asset Energy Use"
domain: netzero-cloud-dev-guide
topic: vehicle-asset-energy-use
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:57.709Z
estimatedTokens: 12661
keywords: [Vehicle, Asset, Energy, fuel, consumption, vehicles, selected, emissions, factors, record, control, calculation, scope, depending, whether]
---

# Vehicle Asset Energy Use

> The Vehicle Asset Energy Use object represents the fuel consumption related to
    vehicles. The selected emissions factors on the energy use record control the calculation for
    scope 1 or scope 3 emissions for vehicles depending on whether the asset is company
    owned.

# Vehicle Asset Energy Use

The Vehicle Asset Energy Use object represents the fuel consumption related to vehicles. The selected emissions factors on the energy use record control the calculation for scope 1 or scope 3 emissions for vehicles depending on whether the asset is company owned.


| Permission Set Needed |
| --- |
| To enter and modify data: | Net Zero Cloud ManagerORNet Zero Cloud Admin |

Allocate the default scope for the fuel. Depending on the scope, the relevant fields are populated and the other fields default to 0.

If you have not associated a scope allocation for a vehicle asset, then use the default scope allocations.

-   If the asset is owned, then it is scope 1 emissions.
-   If asset is not owned, then it is scope 3 downstream emissions.

For information about converting the values from one unit of measure to another compatible unit of measure, see [Conversion Factors](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_calc_conversion_factors.htm "You can convert the values from one unit of measure to another compatible unit of measure based on the conversion factors.").

Here are the calculated fields:

-   **Fuel Efficiency (mpg) (FuelEfficiencyInMpg)**

    **Input Fields**

    -   Fuel Efficiency Unit (FuelEfficiencyUnit)
    -   Fuel Efficiency (FuelEfficiency)
    -   Conversion Constant - L per 100 km To mpg

    **Calculations**

    If Fuel Efficiency Unit = “Miles per Gallon”, then Fuel Efficiency (mpg) = Fuel Efficiency

    If Fuel Efficiency Unit = “L per 100 km, then Fuel Efficiency (mpg) = 235.215/Fuel Efficiency


-   **Aircraft Fuel Economy (gal/h) (AircraftFuelEconomyInGph)**

    **Input Fields**

    -   Aircraft Fuel Economy (AircraftFuelEconomy)
    -   Aircraft Fuel Economy Unit (AircraftFuelEconomyUnit)
    -   Constant - Liters to UsGallons

    **Calculations**

    If Aircraft Fuel Economy Unit = “Gallons per Hour”, then Aircraft Fuel Economy (gal/h) = Aircraft Fuel Economy

    If Aircraft Fuel Economy Unit = “Liters per Hour”, then Aircraft Fuel Economy (gal/h) = Aircraft Fuel Economy × 0.26417205


-   **Total Fuel Consumption (Liters) (TotalFuelConsumptionInLiter)**

    **Input Fields**

    -   If Record Type = “Private Jet”:
        -   Fuel Consumption (FuelConsumption)
        -   Fuel Consumption Unit (FuelConsumptionUnit)
        -   Aircraft Fuel Economy (Gallons per Hour) (AircraftFuelEconomyInGph)
        -   Flight Duration (Hours) (FlightDurationInHours)
        -   Conversion constant - Liters to UsGallons

    -   If Record Type = “Fleet Vehicle”:
        -   Fuel Consumption (FuelConsumption)
        -   Fuel Consumption Unit (FuelConsumptionUnit)

    **Calculations**

    -   If Record Type = “Private Jet”:
        -   If Fuel Consumption! = 0, then Total Fuel Consumption (Liters) = Fuel Consumption converted to liters.
        -   If Fuel Consumption = 0, then Total Fuel Consumption (Liters) = (Aircraft Fuel Economy (Gallons per Hour) × Flight Duration (Hours))/0.26417205.
    -   If Record Type = “Fleet Vehicle”:
        -   If Fuel Consumption Unit = “UsGallons”, then Total Fuel Consumption (Liters) = Fuel Consumption/0.26417205.
        -   If Fuel Consumption Unit = “Liters”, then Total Fuel Consumption (Liters) = Fuel Consumption.

-   **Total Fuel Consumption (US Gallons) (TotalFuelConsumptionInGal)**

    **Input Fields**

    -   Total Fuel Consumption (Liters) (TotalFuelConsumptionInLiter)
    -   Conversion constant - Liters to UsGallons

    **Calculations**

    Total Fuel Consumption (US Gallons) = Total Fuel Consumption (Liters) × 0.26417205


-   **CH4 Emissions (kg) (Ch4EmissionsInKg)**

    **Input Fields**

    -   If Record Type = “Private Jet”:
        -   Total Fuel Consumption (US Gallons) (TotalFuelConsumptionInGal)
        -   Other Emissions Factors (OtherEmissionFactor)

    -   If Record Type = “Fleet Vehicle”:
        -   Total Fuel Consumption (US Gallons) (TotalFuelConsumptionInGal)
        -   Fuel Efficiency (mpg) (FuelEfficiencyInMpg)
        -   Other Emissions Factors (OtherEmissionFactor)
        -   Fuel Type (FuelType)
        -   Fuel Consumption (FuelConsumption)

    **Calculations**

    If Record Type = “Private Jet”, then

    -   CH4 Emissions (kg) = Total Fuel Consumption (US Gallons) × OtherEmissionFactor.OtherEmssnFctrSetItem.CH4 Emissions Factor (where Fuel Type = Jet Fuel and CH4 Emissions Factor converted to Kg/Gallon)

    If Record Type = “Fleet Vehicle” and Fuel Type = “Diesel”, “Autogas/LPG”, “Biodiesel”, “Compressed Natural Gas (CNG)”, “Ethanol”, or “Gasoline”,  and CH4 Emissions Factor unit is “g/Km” then

    -   CH4 Emissions (kg) = Total Fuel Consumption (US Gallons) × Fuel Efficiency (mpg) × 1.60934 × OtherEmissionFactor.OtherEmssnFctrSetItem.CH4 Emissions Factor (where Fuel Type = OtherEmissionFactor.OtherEmssnFctrSetItem.Fuel Type and CH4 Emissions Factor converted to Kg/Km)

    If Record Type = “Fleet Vehicle” and Fuel Type = “Diesel”, “Autogas/LPG”, “Biodiesel”, “Compressed Natural Gas (CNG)”, “Ethanol”, “Gasoline” and CH4 Emissions Factor unit is NOT “g/Km” then

    -   CH4 Emissions (kg)=Total Fuel Consumption (US Gallons) \* OtherEmissionFactor.CH4 Emissions Factor (convert to Kg/Gallon)

    If Record Type = “Fleet Vehicle” and Fuel Type=”Electricity” then

    -   CH4 Emissions (kg)=Fuel Consumption \* OtherEmissionFactor.CH4 Emissions Factor (where, OtherEmissionFactor.Fuel Type = Electricity and CH4 Emissions Factor converted to kg/Kwh)

    If Record Type = “Fleet Vehicle” and Fuel Consumption  = null and Fuel Efficiency (mpg) = null and Distance != null then

    -   CH4 Emissions (kg)= Distance Converted to Km \* OtherEmissionFactor.CH4 Emissions Factor (where, Fuel Type = OtherEmissionFactor.Fuel Type  and CH4 Emissions Factor converted to Kg/Km)

    **Default Value**

    0


-   **CO2 Emissions (kg) (Co2EmissionsInKg)**

    **Input Fields**

    -   If Record Type = “Private Jet”:
        -   Total Fuel Consumption (US Gallons) (TotalFuelConsumptionInGal)
        -   Other Emissions Factors (OtherEmissionFactor)

    -   If Record Type = “Fleet Vehicle”:
        -   Total Fuel Consumption (Liters) (TotalFuelConsumptionInLiter)
        -   Other Emissions Factors (OtherEmissionFactor)
        -   Fuel Type (FuelType)
        -   Fuel Consumption (FuelConsumption)
        -   CO2 Emissions (kg) (Co2EmissionsInKg)
        -   Fuel Efficiency (FuelEfficiency)

    **Calculations**

    If Record Type = “Private Jet”, then

    -   CO2 Emissions (kg) = Total Fuel Consumption (US Gallons) × OtherEmissionFactor.OtherEmssnFctrSetItem.CO2 Emissions Factor (where Fuel Type = Jet Fuel and CO2 Emissions Factor converted to Kg/Gallon)

    If Record Type = “Fleet Vehicle” and Fuel Type = “Diesel”, “Autogas/LPG”, “Biodiesel”, “Compressed Natural Gas (CNG)”, “Ethanol”, or “Gasoline”, then

    -   CO2 Emissions (kg) = Total Fuel Consumption (Liters) × OtherEmissionFactor.OtherEmssnFctrSetItem.CO2 Emissions Factor (where FuelT ype = OtherEmissionFactor.OtherEmssnFctrSetItem.Fuel Type and CO2 Emissions Factor converted to Kg/L)

    If Record Type = “Fleet Vehicle” and Fuel Type = “Electricity” then

    -   CO2 Emissions (kg) = Fuel Consumption \* OtherEmissionFactor.OtherEmssnFctrSetItem.CO2 Emissions Factor (where, OtherEmissionFactor.OtherEmssnFctrSetItem.Fuel Type = “Electricity” and CO2 Emissions Factor converted to Kg/kwh)
-   If Record Type = “Fleet Vehicle” and Fuel Type = “Electricity” and Fuel Consumption  = null and Fuel Efficiency = null and Distance != null then

    -   CO2 Emissions (kg) = Distance Converted to Km \* OtherEmissionFactor.OtherEmssnFctrSetItem.CO2 Emissions Factor (where, Fuel Type = OtherEmissionFactor.OtherEmssnFctrSetItem.Fuel Type and CO2 Emissions Factor converted to Kg/km)

    **Default Value**

    0


-   **N2O Emissions (kg) (N2oEmissionInKg)**

    **Input Fields**

    -   If Record Type = “Private Jet”:
        -   Total Fuel Consumption (US Gallons) (TotalFuelConsumptionInGal)
        -   Other Emissions Factors (OtherEmissionFactor)

    -   If Record Type = “Fleet Vehicle”:
        -   Total Fuel Consumption (US Gallons) (TotalFuelConsumptionInGal)
        -   Fuel Efficiency (mpg) (FuelEfficiencyInMpg)
        -   Other Emissions Factors (OtherEmissionFactor)
        -   Fuel Type (FuelType)

    **Calculations**

    If Record Type = “Private Jet”, then

    -   N2O Emissions (kg) = Total Fuel Consumption (US Gallons) × OtherEmissionFactor.OtherEmssnFctrSetItem.N2O Emissions Factor (where Fuel Type = Jet Fuel and N2O Emissions Factor converted to Kg/Gallon)

    If Record Type = “Fleet Vehicle” and Fuel Type = “Diesel”, “Autogas/LPG”, “Biodiesel”, “Compressed Natural Gas (CNG)”, “Ethanol”, or “Gasoline” and N2O Emissions Factor unit is “g/Km”, then

    -   N2O Emissions (kg) = Total Fuel Consumption (US Gallons) × Fuel Efficiency (mpg) × 1.60934 × OtherEmissionFactor.OtherEmssnFctrSetItem.N2O Emissions Factor (where Fuel Type = OtherEmissionFactor.OtherEmssnFctrSetItem.Fuel Type and N2O Emissions Factor converted to Kg/Km)

    If Record Type = “Fleet Vehicle” and Fuel Type = “Diesel”, “Autogas/LPG”, “Biodiesel”, “Compressed Natural Gas (CNG)”, “Ethanol”, or “Gasoline” and N2O Emissions Factor unit is NOT “g/Km”, then

    -   N2O Emissions (kg) = Total Fuel Consumption (US Gallons) × OtherEmissionFactor.OtherEmssnFctrSetItem.N2O Emissions Factor (where N2O Emissions Factor converted to Kg/Gallon)

    if(Total Fuel Consumption (US Gallons)  = null && Fuel Efficiency (mpg) = null && Distance != null) then

    -   N2O Emissions (kg) = Distance \* OtherEmissionFactor.OtherEmssnFctrSetItem.N2O Emissions Factor (where, FuelType = OtherEmissionFactor.Fuel Type and N2O Emissions Factor converted to Kg/km)

    If Record Type = “Fleet Vehicle” and FuelType = “Electricity” then

    -   N2O Emissions (kg)= Fuel Consumption \* OtherEmissionFactor.OtherEmssnFctrSetItem.N2O Emissions Factor (convert to Kg/Kwh)

    If Record Type = “Fleet Vehicle” and Fuel Consumption  = null and Fuel Efficiency (mpg) = null and Distance != null then

    -   N2O Emissions (kg) = Distance Converted to Km \* OtherEmissionFactor.OtherEmssnFctrSetItem.N2O Emissions Factor (where, Fuel Type = OtherEmissionFactor.OtherEmssnFctrSetItem.Fuel Type  and N2O Emissions Factor converted to Kg/Km)

    **Default Value**

    0


-   **Scope 1 Emissions (tCO2e) (Scope1EmissionsInTco2e)**

    **Input Fields**

    -   If Record Type = “Private Jet”:
        -   Total Fuel Consumption (US Gallons) (TotalFuelConsumptionInGal)
        -   Other Emissions Factors (OtherEmssnFctr)
        -   Supplemental Scope 1 Emissions (SuplScope1Emissions)

    -   If Record Type = “Fleet Vehicle”:
        -   N2O Emissions (kg) (N2oEmissionsInKg)
        -   CO2 Emissions (kg) (Co2EmissionsInKg)
        -   CH4 Emissions (kg) (Ch4EmissionsInKg)
        -   Other Emissions Factors (OtherEmssnFctr)
        -   Supplemental Scope 1 Emissions (SuplScope1Emissions)
        -   Total Fuel Consumption (US Gallons) (TotalFuelConsumptionInGal)
        -   Fuel Consumption (FuelConsumption)
        -   Carbon Emissions Scope Allocation (CrbnEmssnScopeAlloc)
        -   Vehicle Asset Emissions Source (VehicleAssetEmssnSrc)
            -   Carbon Emissions Scope Allocation (CrbnEmssnScopeAlloc)

    **Calculations**

    Perform this calculation if Carbon Emission Scope Allocation = "Scope 1"

    or VehicleAssetEmssnSrc.Carbon Emission Scope Allocation = "Scope 1"

    If the scope allocation field is empty, then check, if Company-Owned Asset = true then Scope 1 else if not owned then Scope 3.

    -   If Record Type = “Private Jet”, then Scope 1 Emissions (tCO2e) = Total Fuel Consumption (US Gallons) × \[OtherEmssnFctr.OtherEmssnFctrSetItem.CO2 Emissions Factor (convert to Kg/Gal) + OtherEmssnFctr.OtherEmssnFctrSetItem.CH4 Emissions Factor (convert to Kg/Gal) × OtherEmssnFctr.CH4 Global Warming Potential + OtherEmssnFctr.OtherEmssnFctrSetItem.N2O Emissions Factor (convert to Kg/Gal) × OtherEmssnFctr.N2O Global Warming Potential\]/1000 + Supplemental Scope 1 Emissions
    -   If Record Type = “Fleet Vehicle”, then Scope 1 Emissions (tCO2e) = CO2 Emissions (kg)/1000 + CH4 Emissions (kg)/1000 × OtherEmssnFctr.CH4 Global Warming Potential +N2O Emissions (kg)/1000 × OtherEmssnFctr.N2O Global Warming Potential + Supplemental Scope 1 Emissions

    If Supplied CO2e Emissions Factor is null, then

    -   If Record Type = “Private Jet”, then

        Scope 1 Emissions (tCO2e) = Total Fuel Consumption (US Gallons) × \[OtherEmssnFctr.OtherEmssnFctrSetItem.CO2 Emissions Factor (convert to Kg/Gal) + OtherEmssnFctr.OtherEmssnFctrSetItem.CH4 Emissions Factor (convert to Kg/Gal) × OtherEmssnFctr.CH4 Global Warming Potential + OtherEmssnFctr.OtherEmssnFctrSetItem.N2O Emissions Factor (convert to Kg/Gal) × OtherEmssnFctr.N2O Global Warming Potential\]/1000 + Supplemental Scope 1 Emissions

    -   If Record Type = “Fleet Vehicle”, then

        Scope 1 Emissions (tCO2e) = CO2 Emissions (kg)/1000 + CH4 Emissions (kg)/1000 × OtherEmssnFctr.CH4 Global Warming Potential +N2O Emissions (kg)/1000 × OtherEmssnFctr.N2O Global Warming Potential + Supplemental Scope 1 Emissions.


    If Supplied CO2e Emissions Factor isn’t null, then

    -   If Record Type = “Private Jet”, then

        Scope 1 Emissions (tCO2e) = Total Fuel Consumption (US Gallons) × OtherEmssnFctr.OtherEmssnFctrSetItem.Supplied CO2e Emissions Factor (convert to Kg/Gal)/1000 + Supplemental Scope 1 Emissions.

    -   If Record Type = “Fleet Vehicle”, then
        -   if(Fuel Consumption != null) then
            -   if (FuelType != Electricity) then Scope 1 Emissions (tCO2e) = Total Fuel Consumption (US Gallons) × OtherEmssnFctr.OtherEmssnFctrSetItem.Supplied CO2e Emissions Factor (convert to Kg/Gal)/1000 + Supplemental Scope 1 Emissions

                else Scope 1 Emissions (tCO2e) = Fuel Consumption × OtherEmssnFctr.OtherEmssnFctrSetItem.Supplied CO2e Emissions Factor (convert to Kg/Kwh)/1000 + Supplemental Scope 1 Emissions

            -   else if (Distance != null) then Scope 1 Emissions (tCO2e) = Distance (in km) × OtherEmssnFctr.OtherEmssnFctrSetItem.Supplied CO2e Emissions Factor (convert to Kg/Km)/1000 + Supplemental Scope 1 Emissions

    **Default Value**

    Scope 1 Emissions (tCO2e) = Supplemental Scope 1 Emissions


-   **Scope 2 Location-Based Emissions (tCO2e) (Scope2LocBasedEmssnInTco2e)**

    Input values

    -   Supplemental Scope 2 Location-Based Emissions (tCO2e) (SuplScope2LocationBasedEmssn)
    -   Carbon Emissions Scope Allocation (CrbnEmssnScopeAlloc)
    -   Vehicle Asset Emissions Source (VehicleAssetEmssnSrc)
        -   Carbon Emissions Scope Allocation (CrbnEmssnScopeAlloc)

    Calculations are same as Scope 1 Emissions (tCO2e) (include correct supplemental emissions), but will hold a value only if Carbon Emissions Scope Allocation = “Scope 2”or VehicleAssetEmssnSrc.Carbon Emissions Scope Allocation = "Scope 2"

    Default Value

    Scope 2 Location-Based Emissions (tCO2e) = Supplemental Scope 2 Location-Based Emissions

-   **Scope 2 Market-Based Emissions (tCO2e) (Scope2MktBasedEmssnInTco2e)**

    Input values

    -   Supplemental Scope 2 Market-Based Emissions (tCO2e) (SuplScope2MarketBasedEmssn)
    -   Carbon Emissions Scope Allocation (CrbnEmssnScopeAlloc)
    -   Vehicle Asset Emissions Source (VehicleAssetEmssnSrc)
        -   Carbon Emissions Scope Allocation (CrbnEmssnScopeAlloc)

    Calculations are same as Scope 1 Emissions (tCO2e) (include correct supplemental emissions), but will hold a value only if Carbon Emissions Scope Allocation = “Scope 2” or VehicleAssetEmssnSrc.Carbon Emission Scope Allocation = "Scope 2"

    Default Value

    Scope 2 Market-Based Emissions (tCO2e) = Supplemental Scope 2 Market-Based Emissions

-   **Scope 3 Downstream Emissions (tCO2e) (Scope3DnstrmEmissionsInTco2e)**

    Input values

    -   Supplemental Scope 3 Downstream Emissions (SuplScope3DnstrmEmissions)
    -   Carbon Emissions Scope Allocation (CrbnEmssnScopeAlloc)
    -   Vehicle Asset Emissions Source (VehicleAssetEmssnSrc)
        -   Carbon Emissions Scope Allocation (CrbnEmssnScopeAlloc)

    Calculations are same as Scope 1 Emissions (tCO2e) (include correct supplemental emissions), but will hold a value only if Carbon Emission Scope Allocation = “Scope 3 Downstream” or “Scope 3 Downstream Transportation and Distribution” or “Scope 3 Downstream Leased Assets”

    or VehicleAssetEmssnSrc.Carbon Emission Scope Allocation = “Scope 3 Downstream” or “Scope 3 Downstream Transportation and Distribution” or “Scope 3 Downstream Leased Assets”

    Default Value

    Scope 3 Downstream Emissions (tCO2e) = Supplemental Scope 3 Downstream Emissions

-   **Scope 3 Upstream Emissions (tCO2e) (Scope3UpstrmEmissionsInTco2e)**

    Input values

    -   Supplemental Scope 3 Upstream Emissions (SuplScope3UpstrmEmissions)
    -   Carbon Emissions Scope Allocation (CrbnEmssnScopeAlloc)
    -   Vehicle Asset Emissions Source (VehicleAssetEmssnSrc)
        -   Carbon Emissions Scope Allocation (CrbnEmssnScopeAlloc)

    Calculations are same as Scope 1 Emissions (tCO2e) (include correct supplemental emissions), but will hold a value only if Carbon Emission Scope Allocation = “Scope 3 Upstream” or “Scope 3 Employee Commuting” or “Scope 3 Business Travel” or “Scope 3 Upstream Transportation and Distribution”

    or VehicleAssetEmssnSrc.Carbon Emission Scope Allocation = “Scope 3 Upstream” or “Scope 3 Employee Commuting” or “Scope 3 Business Travel” or “Scope 3 Upstream Transportation and Distribution”

    Default Value

    Scope 3 Upstream Emissions (tCO2e) = Supplemental Scope 3 Upstream Emissions

-   **Scope 3 GHG Category (Scope3GhgCategory)**

    Input values

    -   Carbon Emissions Scope Allocation (CrbnEmssnScopeAlloc)
    -   Vehicle Asset Emissions Source (VehicleAssetEmssnSrc)
        -   Carbon Emissions Scope Allocation (CrbnEmssnScopeAlloc)

    Calculations

    if Carbon Emission Scope Allocation is one of these categories then Scope 3 GHG Category = Carbon Emissions Scope Allocation

    or if it's matching with below VehicleAssetEmssnSrc.Carbon Emission Scope Allocation = “Employee Commuting” or “Business Travel” or Upstream Transportation and Distribution“ or ”Downstream Transportation and Distribution” or “Downstream Leased Asset”

    then it's Scope 3 GHG Category = VehicleAssetEmssnSrc.Carbon Emissions Scope Allocation

    else

    Scope 3 GHG Category = null


-   **Fuel Efficiency (FuelEfficiency) and Fuel Efficiency Unit (FuelEfficiencyUnit)**

    **Input Fields**

    -   Fuel Efficiency (FuelEfficiency)
    -   Fuel Efficiency Unit (FuelEfficiencyUnit)
    -   Fuel Consumption (FuelConsumption)
    -   Fuel Consumption Unit (FuelConsumptionUnit)
    -   Total Fuel Consumption (US Gallons) (TotalFuelConsumptionInGal)
    -   Total Fuel Consumption (Liters) (TotalFuelConsumptionInLiter)
    -   Distance (Distance)
    -   Distance Unit (DistanceUnit)

    **Calculations**

    If (Record Type = “Fleet Vehicle”)

    -   If Fuel Efficiency = null then calculate the fuel efficiency
    -   If fuel efficiency and distance traveled exist, update the Fuel Efficiency user input with the calculated value based on distance traveled and fuel consumption
    -   If Distance Unit = “Miles”:
        -   Fuel Efficiency = Distance/Total Fuel Consumption (US Gallons)
        -   Fuel Efficiency Unit = “Miles per Gallon”
    -   If Distance Unit = “Kilometers”:
        -   Fuel Efficiency = Total Fuel Consumption (Liters) × 100/Distance
        -   Fuel Efficiency Unit = “L per 100 km”

    If Fuel Efficiency is provided and the distance isn’t provided, don’t override user input.


-   **Distance (Distance) and Distance Unit (DistanceUnit)**

    **Input Fields**

    -   Fuel Efficiency (FuelEfficiency)
    -   Fuel Efficiency Unit (FuelEfficiencyUnit)
    -   Fuel Consumption (FuelConsumption)
    -   Fuel Consumption Unit (FuelConsumptionUnit)
    -   Total Fuel Consumption (US Gallons) (TotalFuelConsumptionInGal)
    -   Total Fuel Consumption (Liters) (TotalFuelConsumptionInLiter)
    -   Distance (Distance)
    -   Distance Unit (DistanceUnit)

    **Calculations**

    -   If the user has provided a value, don’t override it.
    -   If the value is null, then update the field with the calculated value.

    -   If Fuel Efficiency Unit = “Miles per Gallon”:
        -   Distance = Fuel Efficiency × Total Fuel Consumption (US Gallons)
        -   Distance Unit = “Miles”

    -   If Fuel Efficiency Unit = “L per 100 km”:
        -   Distance = (1/Fuel Efficiency) ×100 × Total Fuel Consumption (Liters)
        -   Distance Unit = “Kilometers”
    -   If Fuel Type = Electricity, Fuel Efficiency is not relevant and can’t be used to calculate Fuel Consumption
    -   The user must input Fuel Type, Fuel Consumption, and Fuel Consumption Unit to calculate emissions. If the user also enters Distance and Distance Unit, the Fuel Efficiency and Fuel Efficiency Unit are calculated using the following formulas:
        -   If Distance Unit = "Miles":

            -   Fuel Efficiency = Distance / Total Fuel Consumption in Gallons
            -   Fuel Efficiency Unit = "Miles per Gallon"
        -   If Distance Unit = "Kilometers":

            -   Fuel Efficiency = Total Fuel Consumption in Liters \* 100 / Distance
            -   Fuel Efficiency Unit = "L per 100 km"
-   **Fuel Consumption**

    **Input Fields**

    -   Fuel Efficiency (FuelEfficiency)
    -   Fuel Efficiency Unit (FuelEfficiencyUnit)
    -   Distance (Distance)
    -   Distance Unit (DistanceUnit)

    **Outputs**

    -   Fuel Consumption (FuelConsumption)
    -   Fuel Consumption Unit (FuelConsumptionUnit)

    **Calculations**

    -   if Record Type = “Fleet Vehicle”
        -   If Fuel Efficiency Unit = “Miles per Gallon” and Distance Unit = “Miles”

            Fuel Consumption = Distance / Fuel Efficiency(in mpg) Fuel Consumption Unit = "UsGallons"

        -   If Fuel Efficiency Unit = “L per 100 km” and Distance Unit = “Kilometers”

            Fuel Consumption = (Distance \* Fuel Efficiency)/100 Fuel Consumption Unit = "Liters"

        -   If Record Type = “Fleet Vehicle” and Distance != null and Fuel Efficiency = null

            Fuel Consumption can’t be calculated in this case with only Distance field

        -   If Fuel Type = Electricity, Fuel Efficiency is not relevant and cannot be used to calculate Fuel Consumption
-   **Scope 3 CH4 Emissions from Fuel and Energy-Related Activity (Kg) (Scp3Ch4EmssnFuelEnrgy)**

    **Input Fields**

    -   Fuel Type (FuelType)

    -   Fuel Consumption (FuelConsumption)

    -   Total Fuel Consumption (US Gallons) (TotalFuelConsumptionInGal)

    -   Distance (Distance)

    -   Other Lifecycle Emission Factor Set (OthrLifecyclEmssnFctrSetId)

        -   Other Lifecycle Emission Factor Set Item (OthrLifecyclEmssnFctrSetItem)

            -   Well-To-Tank CH4 Emissions Factor (Well2TkCh4EmssnFctr)

            -   Well-To-Tank CH4 Emissions Factor Unit (Well2TkCh4EmssnFctrUnit)

            -   Transmission and Distribution CH4 Emissions Factor (TrnsmDstrCh4EmssnFctr)

            -   Transmission and Distribution CH4 Emissions Factor Unit (TrnsmDstrCh4EmssnFctrUnit)

            -   Well-To-Tank Transmission and Distribution CH4 Emissions Factor (Well2TkTrnsmCh4Emssn)

            -   Well-To-Tank Transmission and Distribution CH4 Emissions Factor Unit (Well2TkTrnsmCh4EmssnUnit)


    **Calculations**

    If Record Type == “FleetVehicle” and Fuel Type == “Electricity” and Fuel Consumption != null or 0 and OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Well-To-Tank CH4 Emissions Factor Unit can be converted to kg/kWh, then

    Well To Tank Emissions = FuelConsumption \* OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Well-To-Tank CH4 Emissions Factor (converted to kg/kWh based on OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Well-To-Tank CH4 Emissions Factor Unit)

    Else if TotalFuelConsumptionInGal != null or 0 and OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Well-To-Tank CH4 Emissions Factor Unit can be converted to kg/gallon, then

    Well To Tank Emissions = TotalFuelConsumptionInGal \* OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Well-To-Tank CH4 Emissions Factor (converted to kg/gallon based on OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Well-To-Tank CH4 Emissions Factor Unit)

    Else if Record Type == “FleetVehicle” and Distance != null or 0 and OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Well-To-Tank CH4 Emissions Factor Unit can be converted to kg/km and (Fuel Type != ‘Electricity’ or Fuel Consumption = null or 0), then

    Well To Tank Emissions = Distance (converted in miles) \* OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Well-To-Tank CH4 Emissions Factor (converted to kg/km based on OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Well-To-Tank CH4 Emissions Factor Unit)

    Else

    Well To Tank Emissions = 0

    If Record Type == “FleetVehicle” and Fuel Type == “Electricity” and Fuel Consumption != null or 0 and OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.TrnsmDstrCh4EmssnFctrUnit can be converted to kg/kWh, then

    Transmission and Distribution Emissions = FuelConsumption \* OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Transmission and Distribution CH4 Emissions Factor (converted to kg/kWh based on OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.TrnsmDstrCh4EmssnFctrUnit)

    Else if TotalFuelConsumptionInGal != null or 0 and OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Transmission and Distribution CH4 Emissions Factor Unit can be converted to kg/gallon, then

    Transmission and Distribution Emissions = TotalFuelConsumptionInGal \* OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Transmission and Distribution CH4 Emissions Factor (converted to kg/gallon based on OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Transmission and Distribution CH4 Emissions Factor Unit)

    Else if Record Type == “FleetVehicle” and Distance != null or 0 and OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Transmission and Distribution CH4 Emissions Factor Unit can be converted to kg/km and (Fuel Type != ‘Electricity’ or Fuel Consumption = null or 0), then

    Transmission and Distribution Emissions = Distance (converted in miles) \* OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Transmission and Distribution CH4 Emissions Factor (converted to kg/km based on OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Transmission and Distribution CH4 Emissions Factor Unit)

    Else

    Transmission and Distribution Emissions = 0

    If Record Type == “FleetVehicle” and Fuel Type == “Electricity” and FuelConsumption != null or 0 and OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Well-To-Tank Transmission and Distribution CH4 Emissions Factor Unit can be converted to kg/kWh, then

    Well to tank transmission Emissions = Fuel Consumption \* OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Well-To-Tank Transmission and Distribution CH4 Emissions Factor (converted to kg/kWh based on OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Well-To-Tank Transmission and Distribution CH4 Emissions Factor Unit)

    Else if TotalFuelConsumptionInGal != null or 0 and OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Well-To-Tank Transmission and Distribution CH4 Emissions Factor Unit can be converted to kg/gallon, then

    Well to tank transmission Emissions = TotalFuelConsumptionInGal \* OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Well-To-Tank Transmission and Distribution CH4 Emissions Factor (converted to kg/gallon based on OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Well-To-Tank Transmission and Distribution CH4 Emissions Factor Unit)

    Else if Record Type == “FleetVehicle” and Distance != null or 0 and OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Well-To-Tank Transmission and Distribution CH4 Emissions Factor Unit can be converted to kg/km and (Fuel Type != ‘Electricity’ or Fuel Consumption = null or 0), then

    Well to tank transmission Emissions = Distance (converted in miles) \* OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Well-To-Tank Transmission and Distribution CH4 Emissions Factor (converted to kg/km based on OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Well-To-Tank Transmission and Distribution CH4 Emissions Factor Unit)

    Else

    Well to tank transmission Emissions = 0

    Scope 3 CH4 Emissions from Fuel and Energy-Related Activity (Kg)=Well To Tank Emissions + Transmission and Distribution Emissions + Well to tank transmission Emissions

-   **Scope 3 CO2 Emissions from Fuel and Energy-Related Activity (Kg) (Scp3Co2EmssnFuelEnrgy)**

    **Input Fields**

    -   Fuel Type (FuelType)
    -   Fuel Consumption (FuelConsumption)
    -   Total Fuel Consumption (US Gallons) (TotalFuelConsumptionInGal)
    -   Distance (Distance)
    -   Other Lifecycle Emission Factor Set (OthrLifecyclEmssnFctrSetId)
        -   Other Lifecycle Emission Factor Set Item (OthrLifecyclEmssnFctrSetItem)
            -   Well-To-Tank CO2 Emissions Factor (Well2TkCo2EmssnFctr)
            -   Well-To-Tank CO2 Emissions Factor Unit (Well2TkCo2EmssnFctrUnit)
            -   Transmission and Distribution CO2 Emissions Factor (TrnsmDstrCo2EmssnFctr)
            -   Transmission and Distribution CO2 Emissions Factor Unit (TrnsmDstrCo2EmssnFctrUnit)
            -   Well-To-Tank Transmission and Distribution CO2 Emissions Factor (Well2TkTrnsmCo2Emssn)
            -   Well-To-Tank Transmission and Distribution CO2 Emissions Factor Unit (Well2TkTrnsmCo2EmssnUnit)

    **Calculations**

    If Record Type == “FleetVehicle” and Fuel Type == “Electricity” and Fuel Consumption != null or 0 and OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Well-To-Tank CO2 Emissions Factor Unit can be converted to kg/kWh, then

    Well To Tank Emissions = Fuel Consumption \* OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Well-To-Tank CO2 Emissions Factor (converted to kg/kWh based on OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Well-To-Tank CO2 Emissions Factor Unit)

    Else if TotalFuelConsumptionInGal != null or 0 and OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Well-To-Tank CO2 Emissions Factor Unit can be converted to kg/gallon, then

    Well To Tank Emissions = Total Fuel Consumption (US Gallons) \* OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Well-To-Tank CO2 Emissions Factor (converted to kg/gallon based on OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Well-To-Tank CO2 Emissions Factor Unit)

    Else if Record Type == “FleetVehicle” and Distance != null or 0 and OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Well-To-Tank CO2 Emissions Factor Unit can be converted to kg/km and (Fuel Type != ‘Electricity’ or Fuel Consumption = null or 0), then

    Well To Tank Emissions = Distance (converted in miles) \* OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Well-To-Tank CO2 Emissions Factor (converted to kg/km based on OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Well-To-Tank CO2 Emissions Factor Unit)

    Else

    Well To Tank Emissions = 0

    If Record Type == “FleetVehicle” and Fuel Type == “Electricity” and Fuel Consumption != null or 0 and OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Transmission and Distribution CO2 Emissions Factor Unit can be converted to kg/kWh, then

    Transmission and Distribution Emissions = Fuel Consumption \* OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Transmission and Distribution CO2 Emissions Factor (converted to kg/kWh based on OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Transmission and Distribution CO2 Emissions Factor Unit)

    Else if TotalFuelConsumptionInGal != null or 0 and OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Transmission and Distribution CO2 Emissions Factor Unit can be converted to kg/gallon, then

    Transmission and Distribution Emissions = TotalFuelConsumptionInGal \* OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Transmission and Distribution CO2 Emissions Factor (converted to kg/gallon based on OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Transmission and Distribution CO2 Emissions Factor Unit)

    Else if Record Type == “FleetVehicle” and Distance != null or 0 and OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Transmission and Distribution CO2 Emissions Factor Unit can be converted to kg/km and (Fuel Type != ‘Electricity’ or Fuel Consumption = null or 0), then

    Transmission and Distribution Emissions = Distance (converted in miles) \* OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Transmission and Distribution CO2 Emissions Factor (converted to kg/km based on OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Transmission and Distribution CO2 Emissions Factor Unit)

    Else

    Transmission and Distribution Emissions = 0

    If Record Type == “FleetVehicle” and Fuel Type == “Electricity” and FuelConsumption != null or 0 and OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Well-To-Tank Transmission and Distribution CO2 Emissions Factor Unit can be converted to kg/kWh, then

    Well to tank transmission Emissions = Fuel Consumption \* OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.

    Well-To-Tank Transmission and Distribution CO2 Emissions Factor (converted to kg/kWh based on OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Well-To-Tank Transmission and Distribution CO2 Emissions Factor Unit)

    Else if TotalFuelConsumptionInGal != null or 0 and OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Well-To-Tank Transmission and Distribution CO2 Emissions Factor Unit can be converted to kg/gallon, then

    Well to tank transmission Emissions = Total Fuel Consumption (US Gallons) \* OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Well-To-Tank Transmission and Distribution CO2 Emissions Factor (converted to kg/gallon based on OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Well-To-Tank Transmission and Distribution CO2 Emissions Factor Unit)

    Else if Record Type == “FleetVehicle” and Distance != null or 0 and OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Well-To-Tank Transmission and Distribution CO2 Emissions Factor Unit can be converted to kg/km and (Fuel Type != ‘Electricity’ or Fuel Consumption = null or 0), then

    Well to tank transmission Emissions = Distance (converted in miles) \* OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Well-To-Tank Transmission and Distribution CO2 Emissions Factor (converted to kg/km based on OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Well-To-Tank Transmission and Distribution CO2 Emissions Factor Unit)

    Else

    Well to tank transmission Emissions = 0

    Scope 3 CO2 Emissions from Fuel and Energy-Related Activity (Kg)=Well To Tank Emissions + Transmission and Distribution Emissions + Well to tank transmission Emissions

-   **Scope 3 N2O Emissions from Fuel and Energy-Related Activity (Kg) (Scp3N2oEmssnFuelEnrgy)**

    **Input Fields**

    -   Fuel Type (FuelType)
    -   Fuel Consumption (FuelConsumption)
    -   Total Fuel Consumption (US Gallons) (TotalFuelConsumptionInGal)
    -   Distance (Distance)
    -   Other Lifecycle Emission Factor Set (OthrLifecyclEmssnFctrSetId)
        -   Other Lifecycle Emission Factor Set Item (OthrLifecyclEmssnFctrSetItem)
            -   Well-To-Tank N2O Emissions Factor (Well2TkN2oEmssnFctr)
            -   Well-To-Tank N2O Emissions Factor Unit (Well2TkN2oEmssnFctrUnit)
            -   Transmission and Distribution N2O Emissions Factor (TrnsmDstrN2oEmssnFctr)
            -   Transmission and Distribution N2O Emissions Factor Unit (TrnsmDstrN2oEmssnFctrUnit)
            -   Well-To-Tank Transmission and Distribution N2O Emissions Factor (Well2TkTrnsmN2oEmssn)
            -   Well-To-Tank Transmission and Distribution N2O Emissions Factor Unit (Well2TkTrnsmN2oEmssnUnit)

    **Calculations**

    If Record Type == “FleetVehicle” and Fuel Type == “Electricity” and Fuel Consumption != null or 0 and OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Well-To-Tank N2O Emissions Factor Unit can be converted to kg/kWh, then

    Well To Tank Emissions = Fuel Consumption \* OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Well-To-Tank N2O Emissions Factor (converted to kg/kWh based on OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Well-To-Tank N2O Emissions Factor Unit)

    Else if TotalFuelConsumptionInGal != null or 0 and OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Well-To-Tank N2O Emissions Factor Unit can be converted to kg/gallon, then

    Well To Tank Emissions = Total Fuel Consumption (US Gallons) \* OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Well-To-Tank N2O Emissions Factor (converted to kg/gallon based on OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Well-To-Tank N2O Emissions Factor Unit)

    Else if Record Type == “FleetVehicle” and Distance != null or 0 and OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Well-To-Tank N2O Emissions Factor Unit can be converted to kg/km and (Fuel Type != ‘Electricity’ or Fuel Consumption = null or 0), then

    Well To Tank Emissions = Distance (converted in miles) \* OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Well-To-Tank N2O Emissions Factor (converted to kg/km based on OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Well-To-Tank N2O Emissions Factor Unit)

    Else

    Well To Tank Emissions = 0

    If Record Type == “FleetVehicle” and Fuel Type == “Electricity” and Fuel Consumption != null or 0 and OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Transmission and Distribution N2O Emissions Factor Unit can be converted to kg/kWh, then

    Transmission and Distribution Emissions = Fuel Consumption \* OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Transmission and Distribution N2O Emissions Factor (converted to kg/kWh based on OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Transmission and Distribution N2O Emissions Factor Unit)

    Else if TotalFuelConsumptionInGal != null or 0 and OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Transmission and Distribution N2O Emissions Factor Unit can be converted to kg/gallon, then

    Transmission and Distribution Emissions = Total Fuel Consumption (US Gallons) \* OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Transmission and Distribution N2O Emissions Factor (converted to kg/gallon based on OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Transmission and Distribution N2O Emissions Factor Unit)

    Else if Record Type == “FleetVehicle” and Distance != null or 0 and OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Transmission and Distribution N2O Emissions Factor Unit can be converted to kg/km and (Fuel Type != ‘Electricity’ or Fuel Consumption = null or 0), then

    Transmission and Distribution Emissions = Distance (converted in miles) \* OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Transmission and Distribution N2O Emissions Factor (converted to kg/km based on OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Transmission and Distribution N2O Emissions Factor Unit)

    Else

    Transmission and Distribution Emissions = 0

    If Record Type == “FleetVehicle” and Fuel Type == “Electricity” and Fuel Consumption != null or 0 and OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Well-To-Tank Transmission and Distribution N2O Emissions Factor Unit can be converted to kg/kWh, then

    Well to tank transmission Emissions = Fuel Consumption \* OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.

    Well-To-Tank Transmission and Distribution N2O Emissions Factor (converted to kg/kWh based on OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Well-To-Tank Transmission and Distribution N2O Emissions Factor Unit)

    Else if TotalFuelConsumptionInGal != null or 0 and OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Well-To-Tank Transmission and Distribution N2O Emissions Factor Unit can be converted to kg/gallon, then

    Well to tank transmission Emissions = Total Fuel Consumption (US Gallons) \* OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Well-To-Tank Transmission and Distribution N2O Emissions Factor (converted to kg/gallon based on OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Well-To-Tank Transmission and Distribution N2O Emissions Factor Unit)

    Else if Record Type == “FleetVehicle” and Distance != null or 0 and OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Well-To-Tank Transmission and Distribution N2O Emissions Factor Unit can be converted to kg/km and (Fuel Type != ‘Electricity’ or Fuel Consumption = null or 0), then

    Well to tank transmission Emissions = Distance (converted in miles) \* OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Well-To-Tank Transmission and Distribution N2O Emissions Factor (converted to kg/km based on OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Well-To-Tank Transmission and Distribution N2O Emissions Factor Unit)

    Else

    Well to tank transmission Emissions = 0

    Scope 3 N2O Emissions from Fuel and Energy-Related Activity (Kg) =Well To Tank Emissions + Transmission and Distribution Emissions + Well to tank transmission Emissions

-   **Scope 3 Emissions from Fuel and Energy-Related Activity (tCO2e) (Scp3EmssnFuelEnrgy)**

    **Input Fields**

    -   Fuel Type (FuelType)
    -   Fuel Consumption (FuelConsumption)
    -   Total Fuel Consumption (US Gallons) (TotalFuelConsumptionInGal)
    -   Total Fuel Consumption (Liters) (TotalFuelConsumptionInLiter)
    -   Distance (Distance)
    -   Other Lifecycle Emission Factor Set (OthrLifecyclEmssnFctrSetId)
        -   Other Lifecycle Emission Factor Set Item (OthrLifecyclEmssnFctrSetItem)
            -   Well-To-Tank Supplied CO2e Emissions Factor (Well2TkSuplCo2eEmssn)
            -   Well-To-Tank Supplied CO2e Emissions Factor Unit (Well2TkSuplCo2eEmssnUnit)
            -   Well-To-Tank CO2e Emissions Factor (tCO2e/MWh) (Well2TkCo2eEmssnFctrMwh)
            -   Well-To-Tank CO2e Emissions Factor (tCO2e/Kl) (Well2TkCo2eEmssnFctrKl)
            -   Well-To-Tank CO2e Emissions Factor (tCO2e/Km) (Well2TkCo2eEmssnFctrKm)
            -   Transmission and Distribution Supplied CO2e Emissions Factor (TrnsmDstrSuplCo2eEmssn)
            -   Transmission and Distribution Supplied CO2e Emissions Factor Unit (TrnsmDstrSuplCo2eEmssnUnit)
            -   Transmission and Distribution CO2e Emissions Factor (tCO2e/MWh) (TrnsmDstrCo2eEmssnMwh)
            -   Transmission and Distribution CO2e Emissions Factor (tCO2e/Kl) (TrnsmDstrCo2eEmssnKl)
            -   Transmission and Distribution CO2e Emissions Factor (tCO2e/Km) (TrnsmDstrCo2eEmssnKm)
            -   Well-To-Tank Transmission and Distribution Supplied CO2e Emissions Factor (Well2TkTrnsmSuplCo2e)
            -   Well-To-Tank Transmission and Distribution Supplied CO2e Emissions Factor Unit (Well2TkTrnsmSuplCo2eUnit)
            -   Well-To-Tank Transmission and Distribution CO2e Emissions Factor (tCO2e/MWh) (Well2TkTrnsmCo2eEmssnMwh)
            -   Well-To-Tank Transmission and Distribution CO2e Emissions Factor (tCO2e/Kl) (Well2TkTrnsmCo2eEmssnKl)
            -   Well-To-Tank Transmission and Distribution CO2e Emissions Factor (tCO2e/Km) (Well2TkTrnsmCo2eEmssnKm)

    **Calculations**

    If Record Type == “FleetVehicle” and Fuel Type == “Electricity” and Fuel Consumption != null or 0 and (OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Well-To-Tank Supplied CO2e Emissions Factor Unit can be converted to kg/kWh or Well-To-Tank CO2e Emissions Factor (tCO2e/MWh) != null or 0), then

    If Well-To-Tank Supplied CO2e Emissions Factor != null or 0, then

    Well To Tank Emissions = (Fuel Consumption \* Well-To-Tank Supplied CO2e Emissions Factor (converted to kg/kWh) ) / 1000

    Else,

    Well To Tank Emissions = (Fuel Consumption \* Well-To-Tank CO2e Emissions Factor (tCO2e/MWh)) / 1000

    Else if Total Fuel Consumption (US Gallons) != null or 0 and (OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Well-To-Tank Supplied CO2e Emissions Factor can be converted to kg/gallon or Well-To-Tank CO2e Emissions Factor (tCO2e/Kl) != null or 0), then

    If Well-To-Tank Supplied CO2e Emissions Factor != null or 0, then

    Well To Tank Emissions = (Total Fuel Consumption (US Gallons) \* Well-To-Tank Supplied CO2e Emissions Factor (converted to kg/gallon) ) / 1000

    Else,

    Well To Tank Emissions = (Total Fuel Consumption (Liters) \* Well-To-Tank CO2e Emissions Factor (tCO2e/Kl)) / 1000

    Else if Record Type == “FleetVehicle” and Distance != null or 0 and (OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Well-To-Tank Supplied CO2e Emissions Factor Unit can be converted to kg/km or

    Well-To-Tank CO2e Emissions Factor (tCO2e/Km) != null or 0) and (Fuel Type != ‘Electricity’ or Fuel Consumption = null or 0), then

    If Well-To-Tank Supplied CO2e Emissions Factor != null or 0, then

    Well To Tank Emissions = (Distance (converted to miles) \* Well-To-Tank Supplied CO2e Emissions Factor (converted to kg/km) ) / 1000

    Else,

    Well To Tank Emissions = Distance (converted to miles) \* Well-To-Tank CO2e Emissions Factor (tCO2e/Km)

    Else

    Well To Tank Emissions = 0

    If Record Type == “FleetVehicle” and Fuel Type == “Electricity” and Fuel Consumption != null or 0 and (OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Transmission and Distribution Supplied CO2e Emissions Factor Unit can be converted to kg/kWh or Transmission and Distribution CO2e Emissions Factor (tCO2e/MWh) != null or 0), then

    If Transmission and Distribution Supplied CO2e Emissions Factor != null or 0, then

    Transmission and Distribution Emissions = (Fuel Consumption \* Transmission and Distribution Supplied CO2e Emissions Factor (converted to kg/kWh) ) / 1000

    Else,

    Transmission and Distribution Emissions = (Fuel Consumption \* Transmission and Distribution CO2e Emissions Factor (tCO2e/MWh)) / 1000

    Else if Total Fuel Consumption (US Gallons) != null or 0 and (OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Transmission and Distribution Supplied CO2e Emissions Factor Unit can be converted to kg/gallon or Transmission and Distribution CO2e Emissions Factor (tCO2e/Kl) != null or 0), then

    If Transmission and Distribution Supplied CO2e Emissions Factor != null or 0, then

    Transmission and Distribution Emissions = (Total Fuel Consumption (US Gallons) \* Transmission and Distribution Supplied CO2e Emissions Factor (converted to kg/gallon) ) / 1000

    Else,

    Transmission and Distribution Emissions = (Total Fuel Consumption (Liters) \* Transmission and Distribution CO2e Emissions Factor (tCO2e/Kl)) / 1000

    Else if Record Type == “FleetVehicle” and Distance != null or 0 and (OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Transmission and Distribution Supplied CO2e Emissions Factor Unit can be converted to kg/km or Transmission and Distribution CO2e Emissions Factor (tCO2e/Km) != null or 0) and (Fuel Type != ‘Electricity’ or Fuel Consumption = null or 0), then

    If Transmission and Distribution Supplied CO2e Emissions Factor != null or 0, then

    Transmission and Distribution Emissions = (Distance (converted to miles) \* Transmission and Distribution Supplied CO2e Emissions Factor (converted to kg/km) ) / 1000

    Else,

    Transmission and Distribution Emissions = Distance (converted to miles) \* Transmission and Distribution CO2e Emissions Factor (tCO2e/Km)

    Else

    Transmission and Distribution Emissions = 0

    If Record Type == “FleetVehicle” and Fuel Type == “Electricity” and Fuel Consumption != null or 0 and (OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Well-To-Tank Transmission and Distribution Supplied CO2e Emissions Factor *Unit* can be converted to kg/kWh or Well-To-Tank Transmission and Distribution CO2e Emissions Factor (tCO2e/MWh) != null or 0), then

    If Well-To-Tank Transmission and Distribution Supplied CO2e Emissions Factor != null or 0, then

    Well to tank transmission Emissions = (Fuel Consumption \* Well-To-Tank Transmission and Distribution Supplied CO2e Emissions Factor (converted to kg/kWh) ) / 1000

    Else,

    Well to tank transmission Emissions = (Fuel Consumption \* Well-To-Tank Transmission and Distribution CO2e Emissions Factor (tCO2e/MWh)) / 1000

    Else if Total Fuel Consumption (US Gallons) != null or 0 and (OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Well-To-Tank Transmission and Distribution Supplied CO2e Emissions Factor *Unit* can be converted to kg/gallon or Well-To-Tank Transmission and Distribution CO2e Emissions Factor (tCO2e/Kl) != null or 0), then

    If Well-To-Tank Transmission and Distribution Supplied CO2e Emissions Factor != null or 0, then

    Well to tank transmission Emissions = (Total Fuel Consumption (US Gallons) \* Well-To-Tank Transmission and Distribution Supplied CO2e Emissions Factor (converted to kg/gallon) ) / 1000

    Else,

    Well to tank transmission Emissions = (Total Fuel Consumption (Liters) \* Well-To-Tank Transmission and Distribution CO2e Emissions Factor (tCO2e/Kl)) / 1000

    Else if Record Type == “FleetVehicle” and Distance != null or 0 and (OthrLifecyclEmssnFctrSet.OthrLifecyclEmssnFctrSetItem.Well-To-Tank Transmission and Distribution Supplied CO2e Emissions Factor *Unit* can be converted to kg/km or Well-To-Tank Transmission and Distribution CO2e Emissions Factor (tCO2e/Km) != null or 0) and (Fuel Type != ‘Electricity’ or Fuel Consumption = null or 0), then

    If Well-To-Tank Transmission and Distribution Supplied CO2e Emissions Factor != null or 0, then

    Well to tank transmission Emissions = (Distance (converted to miles) \* Well-To-Tank Transmission and Distribution Supplied CO2e Emissions Factor (converted to kg/km) ) / 1000

    Else,

    Well to tank transmission Emissions = Distance (converted to miles) \* Well-To-Tank Transmission and Distribution CO2e Emissions Factor (tCO2e/Km)

    Else

    Well to tank transmission Emissions = 0

    Scope 3 Emissions from Fuel and Energy-Related Activity (tCO2e) = Well To Tank Emissions + Transmission and Distribution Emissions + Well to tank transmission Emissions

## Related Topics

- Conversion Factors (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_calc_conversion_factors.htm)

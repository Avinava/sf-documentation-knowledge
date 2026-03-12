---
title: "Rental Car Energy Use"
domain: netzero-cloud-dev-guide
topic: rental-car-energy-use
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:57.733Z
estimatedTokens: 1521
keywords: [Rental, Car, Energy, consumption, cars]
---

# Rental Car Energy Use

> The Rental Car Energy Use object represents the energy consumption related to rental
    cars.

# Rental Car Energy Use

The Rental Car Energy Use object represents the energy consumption related to rental cars.


| Permission Set Needed |
| --- |
| To enter and modify data: | Net Zero Cloud ManagerORNet Zero Cloud Admin |

For information about converting the values from one unit of measure to another compatible unit of measure, see [Conversion Factors](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_calc_conversion_factors.htm "You can convert the values from one unit of measure to another compatible unit of measure based on the conversion factors.").

Here are the calculated fields:

-   **Fuel Efficiency (L/100 km) (FuelEfficiencyInLkm)**

    **Input Fields**

    Rental Car Emissions Factor (RentalCarEmssnFctr)

    **Calculations**

    If RentalCarEmssnFctr.Fuel Efficiency Unit = “L per 100 km”, then Fuel Efficiency (L/100 km) = RentalCarEmssnFctr.Fuel Efficiency.

    If RentalCarEmssnFctr.Fuel Efficiency Unit = “Miles per Gallon”, then Fuel Efficiency (L/100 km) = RentalCarEmssnFctr.Fuel Efficiency/235.215.


-   **Fuel Efficiency (mpg) (FuelEfficiencyInMpg)**

    **Input Fields**

    Rental Car Emissions Factor (RentalCarEmssnFctr)

    **Calculations**

    If RentalCarEmssnFctr.Fuel Efficiency Unit = “Miles per Gallon”, then Fuel Efficiency (mpg) = RentalCarEmssnFctr.Fuel Efficiency.

    If RentalCarEmssnFctr.Fuel Efficiency Unit = “L per 100 km”, then Fuel Efficiency (mpg) = 235.215/RentalCarEmssnFctr.Fuel Efficiency.


-   **CH4 Emissions (kg) (Ch4EmissionsInKg)**

    **Input Fields**

    -   Total Fuel Consumption (US Gallons) (TotalFuelConsumptionInGal)

    -   Fuel Efficiency (mpg) (FuelEfficiencyInMpg)

    -   Fuel Type (FuelType)

    -   Rental Car Emissions Factor (RentalCarEmssnFctr)

    -   CH4 Emissions Factor Unit (Ch4EmissionFactorUnit)


    **Calculations**

    If CH4 Emissions Factor Unit = "g/km", or "kg/km", or "g/mile", or "kg/mile" then CH4 Emissions (kg) = Total Fuel Consumption (US Gallons) × Fuel Efficiency (mpg) × 1.60934 × RentalCarEmssnFctr.Other Emissions Factor Set Item.CH4 Emissions Factor where Fuel Type = OtherEmissionFactor.Fuel Type and CH4 Emissions Factor converted to Kg/Km.

    If CH4 Emissions Factor Unit is not = "g/km", or "kg/km", or "g/mile", or "kg/mile" then CH4 Emissions (kg) = Total Fuel Consumption (US Gallons) × RentalCarEmssnFctr.Other Emissions Factor Set Item.CH4 Emissions Factor converted to Kg/Gallon.


-   **CO2 Emissions (kg) (Co2EmissionsInKg)**

    **Input Fields**

    -   Total Fuel Consumption (US Gallons) (TotalFuelConsumptionInGal)

    -   Rental Car Emissions Factor (RentalCarEmssnFctr)


    **Calculations**

    CO2 Emissions (kg) = Total Fuel Consumption (US Gallons) × RentalCarEmssnFctr.Other Emissions Factor Set Item.CO2 Emissions Factor where Fuel Type = Other Emissions Factor Set Item.Fuel Type and Other Emissions Factor Set Item.CO2 Emissions Factor converted to Kg/Gallon.


-   **N2O Emissions (kg) (N2oEmissionsInKg)**

    **Input Fields**

    -   Total Fuel Consumption (US Gallons) (TotalFuelConsumptionInGal)

    -   Fuel Efficiency (mpg) (FuelEfficiencyInMpg)

    -   Fuel Type (FuelType)

    -   Rental Car Emissions Factor (RentalCarEmssnFctr)


    **Calculations**

    If N2O Emissions Factor Unit = "g/km", or "kg/km", or "g/mile", or "kg/mile" then N2O Emissions (kg) = Total Fuel Consumption (US Gallons) × Fuel Efficiency (mpg) × 1.60934 × RentalCarEmssnFctr.Other Emissions Factor Set Item.N2O Emissions Factor where Fuel Type = OtherEmissionFactor.Fuel Type and N2O Emissions Factor converted to Kg/Km.

    If N2O Emissions Factor Unit is not = "g/km", or "kg/km", or "g/mile", or "kg/mile" then N2O Emissions (kg) = Total Fuel Consumption (US Gallons) × RentalCarEmssnFctr.Other Emissions Factor Set Item.N2O Emissions Factor converted to Kg/Gallon.


-   **Scope 3 Emissions (tCO2e) (Scope3EmissionsInTco2e)**

    **Input Fields**

    -   Vendor-Provided Emissions (tCO2e) (VendorProvidedEmissionsInTco2e)

    -   Rental Car Emissions Factor (RentalCarEmssnFctr)

    -   Supplemental Scope 3 Emissions (SuplScope3Emissions)

    -   Total Fuel Consumption (US Gallons) (TotalFuelConsumptionInGal)
    -   N2O Emissions (kg) (N2oEmissionInKg)

    -   CO2 Emissions (kg) (Co2EmissionsInKg)

    -   CH4 Emissions (kg) (Ch4EmissionsInKg)


    **Calculations**

    If vendor-provided emissions exist, then set Scope 3 Emissions (tCO2e) = Vendor-Provided Emissions (tCO2e) + Supplemental Scope 3 Emissions.

    If Vendor-Provided Emissions (tCO2e) = null for the fuel type,

    -   If RentalCarEmssnFctr.OtherEmissionFactor.Supplied CO2e Emissions Factor (kg/Gal) = null then

        Scope 3 Emissions (tCO2e) = CO2 Emissions (kg)/1000 + CH4 Emissions (kg)/1000 × ParentEmissionFactor.CH4 Global Warming Potential + N2O Emissions (kg)/1000 × ParentEmissionFactor.N2O Global Warming Potential + Supplemental Scope 3 Emissions

    -   If RentalCarEmssnFctr.OtherEmissionFactor.Supplied CO2e Emissions Factor != null then

        Scope 3 Emissions (tCO2e) = Total Fuel Consumption (US Gallons) \* RentalCarEmssnFctr.OtherEmissionFactor.Supplied CO2e Emissions Factor (kg/Gal) +Supplemental Scope 3 Emissions


    Default value

    Supplemental Scope 3 Emissions


-   **Total Fuel Consumption (US Gallons) (TotalFuelConsumptionInGal)**

    **Input Fields**

    -   Distance \[Distance\]

    -   Distance Unit (DistanceUnit)

    -   Fuel Efficiency (mpg) (FuelEfficiencyInMpg)


    **Calculations**

    If Distance Unit = “Miles” and Fuel Efficiency (mpg) <> 0, then Total Fuel Consumption (US Gallons) = Distance/Fuel Efficiency (mpg).

    If Distance Unit = “Kilometers” and Fuel Efficiency (mpg) <> 0, then Total Fuel Consumption (US Gallons) = Distance/1.60934/Fuel Efficiency (mpg).


-   **Total Fuel Consumption (Liters) (TotalFuelConsumptionInLiter)**

    **Input Fields**

    Total Fuel Consumption (US Gallons) (Total Fuel Consumption (US Gallons))

    **Calculations**

    Total Fuel Consumption (Liters) = Total Fuel Consumption (US Gallons)/0.26417205

## Related Topics

- Conversion Factors (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_calc_conversion_factors.htm)

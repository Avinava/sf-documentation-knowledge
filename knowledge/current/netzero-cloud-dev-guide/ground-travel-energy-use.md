---
title: "Ground Travel Energy Use"
domain: netzero-cloud-dev-guide
topic: ground-travel-energy-use
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:57.723Z
estimatedTokens: 2540
keywords: [Ground, Travel, Energy, consumption]
---

# Ground Travel Energy Use

> The Ground Travel Energy Use object represents the energy consumption related to ground
    travel.

# Ground Travel Energy Use

The Ground Travel Energy Use object represents the energy consumption related to ground travel.


| Permission Set Needed |
| --- |
| To enter and modify data: | Net Zero Cloud ManagerORNet Zero Cloud Admin |

For information about converting the values from one unit of measure to another compatible unit of measure, see [Conversion Factors](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_calc_conversion_factors.htm "You can convert the values from one unit of measure to another compatible unit of measure based on the conversion factors.").

Here are the calculated fields:

-   **Scope 3 Emissions (tCO2e) (Scope3EmissionsInTco2e)**

    **Input Fields**

    -   Distance \[Distance\]

    -   Expense Type (ExpenseType)

    -   Trip Cost (TripCost)

    -   Ground Travel Emissions Factors (GroundTravelEmssnFctr)

    -   Supplemental Scope 3 Emissions (SuplScope3Emissions)

    -   Procurement Emission Factor Set Item (PcmtEmssnFctrSetItem)
        -   Total Scope 3 Emissions per Million Spent (tCO2e) (TotScpe3EmssnPerMillionSpent)
    -   Ground Travel Emissions Factor (GroundTravelEmssnFctr)
        -   Personal Car Emissions (kg CO2e/Distance Unit) (PersCarEmssnInKgCo2eDstnUnit)
        -   Taxi Emissions (kg CO2e/Distance Unit) (TaxiEmssnInKgCo2eDstnUnit)
        -   Taxi Rate (Cost/Distance Unit) (TaxiRateForDstnUnit)
        -   Train Emissions (kg CO2e/Distance Unit) (TrainEmssnInKgCo2eDstnUnit)
        -   Train Rate (Cost/Distance Unit) (TrainRateForDstnUnit)

    **Calculations**

    If PcmtEmssnFctrSetItem exists then Scope 3 Emissions (tCO2e) = PcmtEmssnFctrSetItem.Total Scope 3 Emissions per Million Spent (tCO2e) \* Trip Cost/1000000 + Supplemental Scope 3 Emissions

    If GroundTravelEmssnFctr exists then

    -   If Distance AND DistanceUnit are valid
        -   If Expense Type = "Personal Car Distance", then Scope3EmissionsInTco2e = Distance (converted to miles) × GroundTravelEmssnFctr.Personal Car Emissions (kg CO2e/Distance Unit) (converted to miles if needed) / 1000 + Supplemental Scope 3 Emissions
        -   If Expense Type = "Limousine" or "Taxi", then Scope3EmissionsInTco2e = Distance (converted to miles) × GroundTravelEmssnFctr.Taxi Emissions (kg CO2e/Distance Unit) (converted to miles if needed) / 1000 + Supplemental Scope 3 Emissions
        -   If Expense Type = "Subway/Train/Trolley - Cross State/Country" or "Subway/Train/Trolley - Local Public Transit", then Scope3EmissionsInTco2e = Distance (converted to miles) × GroundTravelEmssnFctr.Train Emissions (kg CO2e/Distance Unit) (converted to miles if needed) / 1000 + Supplemental Scope 3 Emissions
    -   Else If Cost-Based Calculations (when Distance or DistanceUnit is NOT valid)
        -   If Expense Type = "Limousine" or "Taxi", then Scope3EmissionsInTco2e = \[(Trip Cost /GroundTravelEmssnFctr.Taxi Rate (Cost/Distance Unit)) × GroundTravelEmssnFctr.Taxi Emissions (kg CO2e/Distance Unit) /1000 \] + Supplemental Scope 3 Emissions
        -   Else if Expense Type = “Subway/Train/Trolley - Cross State/Country” or “Subway/Train/Trolley - Local Public Transit”, then Scope3EmissionsInTco2e = \[(Trip Cost /GroundTravelEmssnFctr.Train Rate (Cost/Distance Unit)) × GroundTravelEmssnFctr.Train Emissions (kg CO2e/Distance Unit) /1000 \] + Supplemental Scope 3 Emissions

    **Default Value**

    Scope 3 Emissions (tCO2e) = Supplemental Scope 3 Emissions


-   **CO2 Emissions (kg) (Co2EmissionsInKg)**

    **Input Fields**

    -   Distance (Distance)
    -   Expense Type (ExpenseType)
    -   Trip Cost (TripCost)
    -   Supplemental Scope 3 Emissions (SuplScope3Emissions)
    -   Ground Travel Emissions Factor (GroundTravelEmssnFctr)
        -   CO2 Emissions Rate for Taxi (Kg/Distance Unit) (TaxiEmssnInKgCo2DstnUnit)
        -   CO2 Emissions Rate for Personal Car (Kg /Distance Unit) (PersCarEmssnInKgCo2DstnUnit)
        -   CO2 Emissions Rate for Train (Kg/Distance Unit) (TrainEmssnInKgCo2DstnUnit)

    **Calculations**

    If GroundTravelEmssnFctr exists then

    -   If Distance AND DistanceUnit are valid
        -   If ExpenseType = "Personal Car Distance":

            CO2 Emissions (kg) = Distance (convert to miles) × GroundTravelEmssnFctr.CO2 Emissions Rate for Personal Car (Kg /Distance Unit). If GroundTravelEmssnFctr.Distance Unit! = “miles”, then convert the CO2 Emissions Rate for Personal Car (Kg /Distance Unit) to miles

        -   If ExpenseType = "Limousine" Or "Taxi":

            CO2 Emissions (kg) = Distance (convert to miles) x GroundTravelEmssnFctr.CO2 Emissions Rate for Taxi (Kg/Distance Unit). If GroundTravelEmssnFctr.Distance Unit! = “miles”, then convert the CO2 Emissions Rate for Taxi (Kg /Distance Unit) to miles

        -   For ExpenseType = "Subway/Train/Trolley - Cross State/Country" Or "Subway/Train/Trolley - Local Public Transit":

            CO2 Emissions (kg) = Distance (convert to miles) x GroundTravelEmssnFctr.CO2 Emissions Rate for Train (Kg/Distance Unit). If GroundTravelEmssnFctr.Distance Unit! = “miles”, then convert the CO2 Emissions Rate for Train (Kg /Distance Unit) to miles

    -   Else

        -   If Expense Type = “Limousine” or “Taxi”, then CO2 Emissions (kg) = \[(Trip Cost /GroundTravelEmssnFctr.Taxi Rate (Cost/Distance Unit)) × GroundTravelEmssnFctr.CO2 Emissions Rate for Taxi (Kg/Distance Unit)\]

        -   If Expense Type = “Subway/Train/Trolley - Cross State/Country” or “Subway/Train/Trolley - Local Public Transit”, then CO2 Emissions (kg) = = \[(Trip Cost /GroundTravelEmssnFctr.Train Rate (Cost/Distance Unit)) × GroundTravelEmssnFctr.CO2 Emissions Rate for Train (Kg/Distance Unit)\]


    **Default Value**

    CO2 Emissions (kg) = 0


-   **CH4 Emissions (kg) (Ch4EmissionsInKg)**

    **Input Fields**

    -   Distance (Distance)
    -   Expense Type (ExpenseType)
    -   Trip Cost (TripCost)
    -   Ground Travel Emissions Factor (GroundTravelEmssnFctr)
        -   CH4 Emissions Rate for Personal Car (Kg /Distance Unit) (PersCarEmssnInKgCh4DstnUnit)
        -   CH4 Emissions Rate for Taxi (Kg/Distance Unit) (TaxiEmssnInKgCh4DstnUnit)
        -   CH4 Emissions Rate for Train (Kg/Distance Unit) (TrainEmssnInKgCh4DstnUnit)

    **Calculations**

    If GroundTravelEmssnFctr exists then

    -   If Distance AND DistanceUnit are valid
        -   If ExpenseType = "Personal Car Distance":

            CH4 Emissions (kg) = Distance (convert to miles) × GroundTravelEmssnFctr.CH4 Emissions Rate for Personal Car (Kg /Distance Unit). If GroundTravelEmssnFctr.Distance Unit! = “miles”, then convert the CH4 Emissions Rate for Personal Car (Kg /Distance Unit) to miles

        -   If ExpenseType = "Limousine" Or "Taxi":

            CH4 Emissions (kg) = Distance (convert to miles) x GroundTravelEmssnFctr.CH4 Emissions Rate for Taxi (Kg/Distance Unit). If GroundTravelEmssnFctr.Distance Unit! = “miles”, then convert the CH4 Emissions Rate for Taxi (Kg /Distance Unit) to miles

        -   For ExpenseType = "Subway/Train/Trolley - Cross State/Country" Or "Subway/Train/Trolley - Local Public Transit":

            CH4 Emissions (kg) = Distance (convert to miles) x GroundTravelEmssnFctr.CH4 Emissions Rate for Train (Kg/Distance Unit). If GroundTravelEmssnFctr.Distance Unit! = “miles”, then convert the CH4 Emissions Rate for Train (Kg /Distance Unit) to miles

    -   Else
        -   If Expense Type = “Limousine” or “Taxi”, then CH4 Emissions (kg) = \[(Trip Cost /GroundTravelEmssnFctr.Taxi Rate (Cost/Distance Unit)) × GroundTravelEmssnFctr.CH4 Emissions Rate for Taxi (Kg/Distance Unit)\]
        -   If Expense Type = “Subway/Train/Trolley - Cross State/Country” or “Subway/Train/Trolley - Local Public Transit”, then CH4 Emissions (kg) = \[(Trip Cost /GroundTravelEmssnFctr.Train Rate (Cost/Distance Unit)) × GroundTravelEmssnFctr.CH4 Emissions Rate for Train (Kg/Distance Unit)\]

    **Default Value**

    CH4 Emissions (kg) = 0


-   **N2O Emissions (kg) (N2oEmissionsInKg)**

    **Input Fields**

    -   Distance (Distance)
    -   Expense Type (ExpenseType)
    -   Trip Cost (TripCost)
    -   Ground Travel Emissions Factor (GroundTravelEmssnFctr)
        -   N2O Emissions Rate for Personal Car (Kg /Distance Unit) (PersCarEmssnInKgN2oDstnUnit)
        -   N2O Emissions Rate for Taxi (Kg/Distance Unit) (TaxiEmssnInKgN2oDstnUnit)
        -   N2O Emissions Rate for Train (Kg/Distance Unit) (TrainEmssnInKgN2oDstnUnit)

    **Calculations**

    If GroundTravelEmssnFctr exists then

    -   If Distance AND DistanceUnit are valid
        -   If ExpenseType = "Personal Car Distance":

            N2O Emissions (kg) = Distance (convert to miles) × GroundTravelEmssnFctr.N2O Emissions Rate for Personal Car (Kg /Distance Unit). If GroundTravelEmssnFctr.Distance Unit! = “miles”, then convert the N2O Emissions Rate for Personal Car (Kg /Distance Unit) to miles

        -   If ExpenseType = "Limousine" Or "Taxi":

            N2O Emissions (kg) = Distance (convert to miles) x GroundTravelEmssnFctr.N2O Emissions Rate for Taxi (Kg/Distance Unit). If GroundTravelEmssnFctr.Distance Unit! = “miles”, then convert the N2O Emissions Rate for Taxi (Kg /Distance Unit) to miles

        -   For ExpenseType = "Subway/Train/Trolley - Cross State/Country" Or "Subway/Train/Trolley - Local Public Transit":

            N2O Emissions (kg) = Distance (convert to miles) x GroundTravelEmssnFctr.N2O Emissions Rate for Train (Kg/Distance Unit). If GroundTravelEmssnFctr.Distance Unit! = “miles”, then convert the N2O Emissions Rate for Train (Kg /Distance Unit) to miles

    -   Else
        -   If Expense Type = “Limousine” or “Taxi”, then N2O Emissions (kg) = \[(Trip Cost /GroundTravelEmssnFctr.Taxi Rate (Cost/Distance Unit)) × GroundTravelEmssnFctr.N2O Emissions Rate for Taxi (Kg/Distance Unit)\]
        -   If Expense Type = “Subway/Train/Trolley - Cross State/Country” or “Subway/Train/Trolley - Local Public Transit”, then N2O Emissions (kg) = \[(Trip Cost /GroundTravelEmssnFctr.Train Rate (Cost/Distance Unit)) × GroundTravelEmssnFctr.N2O Emissions Rate for Train (Kg/Distance Unit)\]

    **Default Value**

    N2O Emissions (kg) = 0

## Related Topics

- Conversion Factors (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_calc_conversion_factors.htm)

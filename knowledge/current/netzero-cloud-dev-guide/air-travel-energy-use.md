---
title: "Air Travel Energy Use"
domain: netzero-cloud-dev-guide
topic: air-travel-energy-use
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:57.622Z
estimatedTokens: 1473
keywords: [Air, Travel, Energy, consumption]
---

# Air Travel Energy Use

> The Air Travel Energy Use object represents the energy consumption related to air
    travel.

# Air Travel Energy Use

The Air Travel Energy Use object represents the energy consumption related to air travel.


| Permission Set Needed |
| --- |
| To enter and modify data: | Net Zero Cloud ManagerORNet Zero Cloud Admin |

For information about converting the values from one unit of measure to another compatible unit of measure, see [Conversion Factors](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_calc_conversion_factors.htm "You can convert the values from one unit of measure to another compatible unit of measure based on the conversion factors.").

Here are the calculated fields:

-   **Haul Length (HaulLength)**

    **Input Fields**

    -   Air Travel Emissions Factor (AirTravelEmssnFctr)

    -   Segment Distance (SegmentDistance)

    -   Segment Distance Unit (SegmentDistanceUnit)


    **Calculations**

    If Segment Distance Unit = AirTravelEmssnFctr.Distance Unit then

    if abs(Segment Distance) < AirTravelEmssnFctr.Short-Haul Maximum Distance, then Haul Length = "Short".

    else, if abs(Segment Distance) < AirTravelEmssnFctr.Medium-Haul Maximum Distance, then Haul Length = “Medium”.

    else, if abs(Segment Distance) > AirTravelEmssnFctr.Long-Haul Minimum Distance, then Haul Length = “Long”.


-   **Segment Distance (Miles) (SegmentDistanceInMiles)**

    **Input Fields**

    -   Segment Distance (SegmentDistance)

    -   Segment Distance Unit (SegmentDistanceUnit)


    **Calculations**

    If Segment Distance Unit = “Miles”, then Segment Distance (Miles) = Segment Distance.

    If Segment Distance Unit = “Kilometers”, then Segment Distance (Miles) = Segment Distance/1.60934.


-   **CH4/Passenger-km (kg CO2e) (Ch4PassengerKmInKgCo2e)**

    **Input Fields**

    -   Haul Length (HaulLength)

    -   Air Travel Emissions Factor (AirTravelEmssnFctr)


    **Calculations**

    If Haul Length = “Long”, then CH4/Passenger-km (kg CO2e) = AirTravelEmssnFctr.CH4/Passenger-km for Long-Haul (kg CO2e).

    If Haul Length = “Medium”, then CH4/Passenger-km (kg CO2e) = AirTravelEmssnFctr.CH4/Passenger-km for Medium-Haul (kg CO2e).

    If Haul Length = “Short”, then CH4/Passenger-km (kg CO2e) = AirTravelEmssnFctr.CH4/Passenger-km for Short-Haul (kg CO2e).


-   **CH4/Passenger-mile (kg CO2e) (Ch4PassengerMileInKgCo2e)**

    **Input Fields**

    -   Haul Length (HaulLength)

    -   Air Travel Emissions Factor (AirTravelEmssnFctr)


    **Calculations**

    If Haul Length = “Long”, then CH4/Passenger-mile (kg CO2e) = AirTravelEmssnFctr.CH4/Passenger-mile for Long-Haul (kg CO2e).

    If Haul Length = “Medium”, then CH4/Passenger-mile (kg CO2e) = AirTravelEmssnFctr.CH4/Passenger-mile for Medium-Haul (kg CO2e).

    If Haul Length = “Short”, then CH4/Passenger-mile (kg CO2e) = AirTravelEmssnFctr.CH4/Passenger-mile for Short-Haul (kg CO2e).


-   **CO2/Passenger-km (kg) (Co2PassengerKmInKg)**

    **Input Fields**

    -   Haul Length (HaulLength)

    -   Air Travel Emissions Factor (AirTravelEmssnFctr)


    **Calculations**

    If Haul Length = “Long”, then CO2/Passenger-km (kg) = AirTravelEmssnFctr.CO2/Passenger-km for Long-Haul (kg).

    If Haul Length = “Medium”, then CO2/Passenger-km (kg) = AirTravelEmssnFctr.CO2/Passenger-km for Medium-Haul (kg).

    If Haul Length = “Short”, then CO2/Passenger-km (kg) = AirTravelEmssnFctr.CO2/Passenger-km for Short-Haul (kg).


-   **CO2/Passenger-mile (kg) (Co2PassengerMileInKg)**

    **Input Fields**

    -   Haul Length (HaulLength)

    -   Air Travel Emissions Factor (AirTravelEmssnFctr)


    **Calculations**

    If Haul Length = “Long”, then CO2/Passenger-mile (kg) = AirTravelEmssnFctr.CO2/Passenger-mile for Long-Haul (kg).

    If Haul Length = “Medium”, then CO2/Passenger-mile (kg) = AirTravelEmssnFctr.CO2/Passenger-mile for Medium-Haul (kg).

    If Haul Length = “Short”, then CO2/Passenger-mile (kg) = AirTravelEmssnFctr.CO2/Passenger-mile for Short-Haul (kg).


-   **N2O/Passenger-km (kg CO2e) (N2oPassengerKmInKgCo2e)**

    **Input Fields**

    -   Haul Length (HaulLength)

    -   Air Travel Emissions Factor (AirTravelEmssnFctr)


    **Calculations**

    If Haul Length = “Long”, then N2O/Passenger-km (kg CO2e) = AirTravelEmssnFctr.N2O/Passenger-km for Long-Haul (kg CO2e).

    If Haul Length = “Medium”, then N2O/Passenger-km (kg CO2e) = AirTravelEmssnFctr.N2O/Passenger-km for Medium-Haul (kg CO2e).

    If Haul Length = “Short”, then N2O/Passenger-km (kg CO2e) = AirTravelEmssnFctr.N2O/Passenger-km for Short-Haul (kg CO2e).


-   **N2O/Passenger-mile (kg CO2e) (N2oPassengerMileInKgCo2e)**

    **Input Fields**

    -   Haul Length (HaulLength)

    -   Air Travel Emissions Factor (AirTravelEmssnFctr)


    **Calculations**

    If Haul Length = “Long”, then N2O/Passenger-mile (kg CO2e) = AirTravelEmssnFctr.N2O/Passenger-mile for Long-Haul (kg CO2e).

    If Haul Length = “Medium”, then N2O/Passenger-mile (kg CO2e) = AirTravelEmssnFctr.N2O/Passenger-mile for Medium-Haul (kg CO2e).

    If Haul Length = “Short”, then N2O/Passenger-mile (kg CO2e) = AirTravelEmssnFctr.N2O/Passenger-mile for Short-Haul (kg CO2e).


-   **Scope 3 Emissions (tCO2e) (Scope3EmissionsInTco2e)**

    **Input Fields**

    -   CH4/Passenger-mile (kg CO2e) (Ch4PassengerMileInKgCo2e)

    -   CO2/Passenger-mile (kg) (Co2PassengerMileInKg)

    -   N2O/Passenger-mile (kg CO2e) (N2oPassengerMileInKgCo2e)

    -   Segment Distance (Miles) (SegmentDistanceInMiles)

    -   Supplemental Scope 3 Emissions (SuplScope3Emissions)


    **Calculations**

    If Vendor-Provided Emissions (tCO2e)! = 0, then Scope 3 Emissions (tCO2e) = Vendor-Provided Emissions (tCO2e) + SuplScope3Emissions

    If Vendor-Provided Emissions (tCO2e) = 0, then Scope 3 Emissions (tCO2e) = \[(CO2/Passenger-mile (kg) + N2oPassengerMileInKgCo2e + CH4/Passenger-mile (kg CO2e)) × Segment Distance (Miles)/1000\] + Supplemental Scope 3 Emissions

## Related Topics

- Conversion Factors (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_calc_conversion_factors.htm)

---
title: "Air Travel Emission Factor"
domain: netzero-cloud-dev-guide
topic: air-travel-emission-factor
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:57.484Z
estimatedTokens: 1834
keywords: [Air, Travel, Emission, Factor, emissions, factors, scope, commercial]
---

# Air Travel Emission Factor

> The Air Travel Emission Factor object represents the emissions factors for scope 3
  commercial air travel.

# Air Travel Emission Factor

The Air Travel Emission Factor object represents the emissions factors for scope 3 commercial air travel.

For information about converting the values from one unit of measure to another compatible unit of measure, see [Conversion Factors](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_calc_conversion_factors.htm "You can convert the values from one unit of measure to another compatible unit of measure based on the conversion factors.").

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=netzero_cloud_dev_guide)

#### Note

If both miles and kms values are entered, the values in miles are given preference for calculations.

Here are the calculated fields:

-   **CH4/Passenger-km for Long-Haul (kg CO2e) (Ch4PsgrKmLongHaulInKgCo2e)**

    **Input Fields**

    -   CH4/Passenger-mile for Long-Haul (kg CO2e) (Ch4PsgrMileLongHaulInKgCo2e)


    **Calculations**

    If (CH4/Passenger-km Long-Haul (kg CO2e) is null) then

    CH4/Passenger-km Long-Haul (kg CO2e) = CH4/Passenger-mile Long-Haul (kg CO2e) / Conversion factor

-   **CH4/Passenger-km for Medium-Haul (kg CO2e) (Ch4PsgrKmMediumHaulInKgCo2e)**

    **Input Fields**

    -   CH4/Passenger-mile for Medium-Haul (kg CO2e) (Ch4PsgrMileMediumHaulInKgCo2e)


    **Calculations**

    If (CH4/Passenger-km medium-Haul (kg CO2e) is null) then

    CH4/Passenger-km medium-Haul (kg CO2e) = CH4/Passenger-mile medium-Haul (kg CO2e) / Conversion factor

-   **CH4/Passenger-km for Short-Haul (kg CO2e) (Ch4PsgrKmShortHaulInKgCo2e)**

    **Input Fields**

    -   CH4/Passenger-mile for Short-Haul (kg CO2e) (Ch4PsgrMileShortHaulInKgCo2e)


    **Calculations**

    If (CH4/Passenger-km Short-Haul (kg CO2e) is null) then

    CH4/Passenger-km Short-Haul (kg CO2e) = CH4/Passenger-mile Short-Haul (kg CO2e) / Conversion factor

-   **CH4/Passenger-mile for Long-Haul (kg CO2e) (Ch4PsgrMileLongHaulInKgCo2e)**

    **Input Fields**

    -   CH4/Passenger-km for Long-Haul (kg CO2e) (Ch4PsgrKmLongHaulInKgCo2e)


    **Calculations**

    If (CH4/Passenger-mile for Long-Haul (kg CO2e) is null) then

    CH4/Passenger-mile for Long-Haul (kg CO2e) = CH4/Passenger-km for Long-Haul (kg CO2e) × Conversion factor

-   **CH4/Passenger-mile for Medium-Haul (kg CO2e) (Ch4PsgrMileMediumHaulInKgCo2e)**

    **Input Fields**

    -   CH4/Passenger-km for Medium-Haul (kg CO2e) (Ch4PsgrKmMediumHaulInKgCo2e)


    **Calculations**

    If (CH4/Passenger-mile for Medium-Haul (kg CO2e) is null) then

    CH4/Passenger-mile for Medium-Haul (kg CO2e) = CH4/Passenger-km for Medium-Haul (kg CO2e) × Conversion factor

-   **CH4/Passenger-mile for Short-Haul (kg CO2e) (Ch4PsgrMileShortHaulInKgCo2e)**

    **Input Fields**

    -   CH4/Passenger-km for Short-Haul (kg CO2e) (Ch4PsgrKmShortHaulInKgCo2e)


    **Calculations**

    If (CH4/Passenger-mile for Short-Haul (kg CO2e) is null) then

    CH4/Passenger-mile for Short-Haul (kg CO2e) = CH4/Passenger-km for Short-Haul (kg CO2e) × Conversion factor

-   **N2O/Passenger-km for Long-Haul (kg CO2e) (N2oPsgrKmLongHaulInKgCo2e)**

    **Input Fields**

    -   N2O/Passenger-mile for Long-Haul (kg CO2e) (N2oPsgrMileLongHaulInKgCo2e)


    **Calculations**

    If (N2O/Passenger-km Long-Haul (kg CO2e) is null) then

    N2O/Passenger-km Long-Haul (kg CO2e) = N2O/Passenger-mile Long-Haul (kg CO2e) / Conversion factor

-   **N2O/Passenger-km for Medium-Haul (kg CO2e) (N2oPsgrKmMediumHaulInKgCo2e)**

    **Input Fields**

    -   N2O/Passenger-mile for Medium-Haul (kg CO2e) (N2oPsgrMileMediumHaulInKgCo2e)


    **Calculations**

    If (N2O/Passenger-km Medium-Haul (kg CO2e) is null) then

    N2O/Passenger-km Medium-Haul (kg CO2e) = N2O/Passenger-mile Medium-Haul (kg CO2e)/ Conversion factor

-   **N2O/Passenger-km for Short-Haul (kg CO2e) (N2oPsgrKmShortHaulInKgCo2e)**

    **Input Fields**

    -   N2O/Passenger-mile for Short-Haul (kg CO2e) (N2oPsgrMileShortHaulInKgCo2e)


    **Calculations**

    If (N2O/Passenger-km Short-Haul (kg CO2e) is null) then

    N2O/Passenger-km Short-Haul (kg CO2e) = N2O/Passenger-mile Short-Haul (kg CO2e)/ Conversion factor

-   **N2O/Passenger-mile for Long-Haul (kg CO2e) (N2oPsgrMileLongHaulInKgCo2e)**

    **Input Fields**

    -   N2O/Passenger-km for Long-Haul (kg CO2e) (N2oPsgrKmLongHaulInKgCo2e)


    **Calculations**

    If (N2O/Passenger-mile Long-Haul (kg CO2e) is null) then

    N2O/Passenger-mile Long-Haul (kg CO2e) = N2O/Passenger-km Long-Haul (kg CO2e) × Conversion factor

-   **N2O/Passenger-mile for Medium-Haul (kg CO2e) (N2oPsgrMileMediumHaulInKgCo2e)**

    **Input Fields**

    -   N2O/Passenger-km for Medium-Haul (kg CO2e) (N2oPsgrKmMediumHaulInKgCo2e)


    **Calculations**

    If (N2O/Passenger-mile Medium-Haul (kg CO2e) is null) then

    N2O/Passenger-mile Medium-Haul (kg CO2e) = N2O/Passenger-km Medium-Haul (kg CO2e) × Conversion factor

-   **N2O/Passenger-mile for Short-Haul (kg CO2e) (N2oPsgrMileShortHaulInKgCo2e)**

    **Input Fields**

    -   N2O/Passenger-km for Short-Haul (kg CO2e) (N2oPsgrKmShortHaulInKgCo2e)


    **Calculations**

    If (N2O/Passenger-mile Short-Haul (kg CO2e) is null) then

    N2O/Passenger-mile Short-Haul (kg CO2e) = N2O/Passenger-km Short-Haul (kg CO2e) × Conversion factor

-   **CO2/Passenger-km for Long-Haul (kg) (Co2PsgrKmLongHaulInKg)**

    **Input Fields**

    -   CO2/Passenger-mile for Long-Haul (kg) (Co2PsgrMileLongHaulInKg)


    **Calculations**

    If (CO2/Passenger-km Long-Haul (kg) is null) then

    CO2/Passenger-km Long-Haul (kg) = CO2/Passenger-mile Long-Haul (kg) /1.60934

-   **CO2/Passenger-km for Medium-Haul (kg) (Co2PsgrKmMediumHaulInKg)**

    **Input Fields**

    -   CO2/Passenger-mile for Medium-Haul (kg) (Co2PsgrMileMediumHaulInKg)


    **Calculations**

    If (CO2/Passenger-km Medium-Haul (kg) is null) then

    CO2/Passenger-km Medium-Haul (kg) = CO2/Passenger-mile Medium-Haul (kg) / Conversion factor

-   **CO2/Passenger-km for Short-Haul (kg) (Co2PsgrKmShortHaulInKg)**

    **Input Fields**

    -   CO2/Passenger-mile for Short-Haul (kg) (Co2PsgrMileShortHaulInKg)


    **Calculations**

    If (CO2/Passenger-km Short-Haul (kg) is null) then

    CO2/Passenger-km Short-Haul (kg) = CO2/Passenger-mile Short-Haul (kg) / Conversion factor

-   **CO2/Passenger-mile for Long-Haul (kg) (Co2PsgrMileLongHaulInKg)**

    **Input Fields**

    -   CO2/Passenger-km for Long-Haul (kg) (Co2PsgrKmLongHaulInKg)


    **Calculations**

    If (CO2/Passenger-mile Long-Haul (kg) is null) then

    CO2/Passenger-mile Long-Haul (kg) = CO2/Passenger-km Long-Haul (kg) × Conversion factor

-   **CO2/Passenger-mile for Medium-Haul (kg) (Co2PsgrMileMediumHaulInKg)**

    **Input Fields**

    -   CO2/Passenger-km for Medium-Haul (kg) (Co2PsgrKmMediumHaulInKg)


    **Calculations**

    If (CO2/Passenger-km Medium-Haul (kg) is null) then

    CO2/Passenger-km Medium-Haul (kg) = CO2/Passenger-mile Medium-Haul (kg) × Conversion factor

-   **CO2/Passenger-mile for Short-Haul (kg) (Co2PsgrMileShortHaulInKg)**

    **Input Fields**

    -   CO2/Passenger-km for Short-Haul (kg) (Co2PsgrKmShortHaulInKg)


    **Calculations**

    If (CO2/Passenger-km Short-Haul (kg) is null) then

    CO2/Passenger-km Short-Haul (kg) = CO2/Passenger-mile Short-Haul (kg) × Conversion factor

## Related Topics

- Conversion Factors (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_calc_conversion_factors.htm)

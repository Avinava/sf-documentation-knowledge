---
title: "Energy Use Records"
domain: netzero-cloud-dev-guide
topic: energy-use-records
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:57.614Z
estimatedTokens: 1073
keywords: [Energy, Records, calculate, emissions, factors, reporting, period, unit, commercial, building’s, monthly, consumption, flight]
---

# Energy Use Records

> You can calculate emissions based on the emissions factors from the energy use records
    for each reporting period or reporting unit, such as a commercial building’s monthly consumption
    or a single flight.

# Energy Use Records

You can calculate emissions based on the emissions factors from the energy use records for each reporting period or reporting unit, such as a commercial building’s monthly consumption or a single flight.


| Permission Set Needed |
| --- |
| To enter and modify data: | Net Zero Cloud ManagerORNet Zero Cloud Admin |

Energy use records are used to:

-   Enter energy consumption values.
-   Calculate scope 1, scope 2, and scope 3 emissions and other energy use metrics based on user-entered energy consumption. Assign custom scopes for the calculated emissions in Stationary Asset Energy Use using the scope allocation entity or the picklist in Vehicle Asset Energy Use entity.
-   Determine the calculations performed within the energy use record based on the record type. For example, fleet vehicles and private jets use the same energy use object but based on the record type mapping the calculations are different.
-   Roll up to carbon footprint records.
-   Reference emissions factors objects, including:
    -   Electricity Emissions Factor Set
    -   Other Emissions Factor Set and Other Emissions Factor Set Item
    -   Procurement Emissions Factor Set, Procurement Emissions Factor Set Item, Scope 3 Emissions Factor Set, Air Travel Emissions Factor, Ground Travel Emissions Factor, Hotel Stay Emissions Factor, Freight Hauling Emissions Factor, and Rental Car Emissions Factor
-   Reference stationary asset environmental source records for asset information, such as the recorded business region or whether the asset is company-owned. For all record types, Owned Asset is a formula field (read-only) that is set by the status of the Company-Owned Asset field on the associated organization asset record.
-   Manually enter Supplemental Scope 1 Emissions, Supplemental Scope 2 Market-Based Emissions, Supplemental Scope 2 Location-Based Emissions, and Supplemental Scope 3 Emissions (tCO2e) on all energy use record types.

-   **[Air Travel Energy Use](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_calc_eur_air_travel.htm)**
    The Air Travel Energy Use object represents the energy consumption related to air travel.
-   **[Freight Hauling Energy Use](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_calc_eur_freight_hauling.htm)**
    The Freight Hauling Energy Use object represents the energy consumption related to freight hauling.
-   **[Ground Travel Energy Use](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_calc_eur_ground_travel.htm)**
    The Ground Travel Energy Use object represents the energy consumption related to ground travel.
-   **[Hotel Stay Energy Use](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_calc_eur_hotel_stay.htm)**
    The Hotel Stay Energy Use object represents the energy consumption related to hotel stay.
-   **[Rental Car Energy Use](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_calc_eur_rental_car.htm)**
    The Rental Car Energy Use object represents the energy consumption related to rental cars.
-   **[Stationary Asset Energy Use](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_calc_eur_commercial_building.htm)**
    The Stationary Asset Energy Use object represents the energy consumption related to stationary assets across multiple fuel types.
-   **[Vehicle Asset Energy Use](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_calc_eur_fleet_vehicle.htm)**
    The Vehicle Asset Energy Use object represents the fuel consumption related to vehicles. The selected emissions factors on the energy use record control the calculation for scope 1 or scope 3 emissions for vehicles depending on whether the asset is company owned.
-   **[Scope 3 Procurement Summary](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_calc_procurement_dataset.htm)**
    The Scope 3 Procurement Summary object represents the amount that the organization spends for one procurement category. Scope 3 procurement summary quantifies the effect on atmospheric warming, represented in tonnes of carbon dioxide equivalent (tCO₂e) by using a matched emissions factor from an associated Procurement Emissions Factor Item record.

## Related Topics

- Air Travel Energy Use (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_calc_eur_air_travel.htm)
- Freight Hauling Energy Use (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_calc_eur_freight_hauling.htm)
- Ground Travel Energy Use (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_calc_eur_ground_travel.htm)
- Hotel Stay Energy Use (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_calc_eur_hotel_stay.htm)
- Rental Car Energy Use (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_calc_eur_rental_car.htm)
- Stationary Asset Energy Use (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_calc_eur_commercial_building.htm)
- Vehicle Asset Energy Use (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_calc_eur_fleet_vehicle.htm)
- Scope 3 Procurement Summary (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_calc_procurement_dataset.htm)

---
title: "Hotel Stay Energy Use"
domain: netzero-cloud-dev-guide
topic: hotel-stay-energy-use
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:57.726Z
estimatedTokens: 371
keywords: [Hotel, Stay, Energy, consumption]
---

# Hotel Stay Energy Use

> The Hotel Stay Energy Use object represents the energy consumption related to hotel
    stay.

# Hotel Stay Energy Use

The Hotel Stay Energy Use object represents the energy consumption related to hotel stay.


| Permission Set Needed |
| --- |
| To enter and modify data: | Net Zero Cloud ManagerORNet Zero Cloud Admin |

For information about converting the values from one unit of measure to another compatible unit of measure, see [Conversion Factors](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_calc_conversion_factors.htm "You can convert the values from one unit of measure to another compatible unit of measure based on the conversion factors.").

Here are the calculated fields:

-   **Emissions Factor/Room per Night (kg CO2e) (EmissionFctrKgCo2eRoomPerNight)**

    **Input Fields**

    Hotel Stay Emissions Factor (HotelStayEmssnFctr)

    **Calculations**

    Emissions Factor/Room per Night (kg CO2e) = HotelStayEmssnFctr.Hotel Stay Emissions (kg CO2e/Night)


-   **Scope 3 Emissions (tCO2e) (Scope3EmissionsInTco2e)**

    **Input Fields**

    -   Emissions Factor/Room per Night (kg CO2e) (EmissionFctrKgCo2eRoomPerNight)

    -   Number of Nights (StayNightsCount)

    -   Number of Rooms (RoomCount)

    -   Supplemental Scope 3 Emissions (SuplScope3Emissions)


    **Calculations**

    Scope 3 Emissions (tCO2e) = (Emissions Factor/Room per Night (kg CO2e) × Number of Nights × Number of Rooms )/1000 + Supplemental Scope 3 Emissions

    **Default Value**

    Scope 3 Emissions (tCO2e) = Supplemental Scope 3 Emissions

## Related Topics

- Conversion Factors (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_calc_conversion_factors.htm)

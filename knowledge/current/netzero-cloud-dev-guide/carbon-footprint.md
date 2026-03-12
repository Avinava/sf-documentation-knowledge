---
title: "Carbon Footprint"
domain: netzero-cloud-dev-guide
topic: carbon-footprint
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:57.526Z
estimatedTokens: 550
keywords: [Carbon, Footprint, calculate, organization, Net, Zero, Cloud, employs, energy, usage, records, asset, business, activity, usually]
---

# Carbon Footprint

> To calculate the carbon footprint of an organization, Net Zero Cloud employs energy
    usage records for an asset or a business activity, usually for the calendar or fiscal year. If
    you’re missing data for a reporting period, you can fill the gaps manually or use estimates
    provided by the app.

# Carbon Footprint

To calculate the carbon footprint of an organization, Net Zero Cloud employs energy usage records for an asset or a business activity, usually for the calendar or fiscal year. If you’re missing data for a reporting period, you can fill the gaps manually or use estimates provided by the app.

Here are some points to consider:

-   Carbon footprint summarizes values from multiple energy use records.
-   Carbon footprint and energy use records are associated through a record on the carbon footprint object.
-   Apex triggers force recalculation of a carbon footprint record whenever an energy use record changes. This recalculation is done only if the change in the energy use record impacts any of the rolled up fields on the associated carbon footprint record.
-   Supplemental emission fields correspond to their matching total scope fields. For example, the value in Total Scope 1 Emissions (tCO2e) includes the Supplemental Scope 1 Emissions value entered on the carbon footprint record.

-   **[Stationary Asset Carbon Footprint](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_calc_commercial_building.htm)**
    The Stationary Asset Carbon Footprint object represents the total carbon emissions and other environmental attributes from stationary assets. The carbon footprint quantifies the effect of atmospheric warming, which is represented in metric tonnes of carbon dioxide equivalent (tCO₂e).
-   **[Vehicle Asset Carbon Footprint](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_calc_vehicles.htm)**
    The Vehicle Asset Carbon Footprint object represents the total carbon emissions from vehicles. Carbon footprint quantifies the effect of atmospheric warming, which is represented in metric tonnes of carbon dioxide equivalent (tCO₂e).
-   **[Scope 3 Carbon Footprint](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_calc_general_scope_3.htm)**
    The Scope 3 Carbon Footprint object represents the total carbon emissions from scope 3 activities. Carbon footprint quantifies the effect of atmospheric warming, which is represented in metric tonnes of carbon dioxide equivalent (tCO₂e).

## Related Topics

- Stationary Asset Carbon Footprint (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_calc_commercial_building.htm)
- Vehicle Asset Carbon Footprint (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_calc_vehicles.htm)
- Scope 3 Carbon Footprint (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_calc_general_scope_3.htm)

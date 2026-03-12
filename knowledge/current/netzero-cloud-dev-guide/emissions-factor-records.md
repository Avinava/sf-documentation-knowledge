---
title: "Emissions Factor Records"
domain: netzero-cloud-dev-guide
topic: emissions-factor-records
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:57.593Z
estimatedTokens: 598
keywords: [Emissions, Factor, Records, calculations, energy, applying, relevant, factors, supplied, refrigerant, leakage, rate, industry, standard, averages]
---

# Emissions Factor Records

> You can complete the emissions calculations by using the energy use records and
    applying the relevant emissions factors. The supplied values, such as refrigerant leakage rate,
    are industry standard averages that Salesforce uses in its own calculations, but you can also
    use your own.

# Emissions Factor Records

You can complete the emissions calculations by using the energy use records and applying the relevant emissions factors. The supplied values, such as refrigerant leakage rate, are industry standard averages that Salesforce uses in its own calculations, but you can also use your own.


| Permission Set Needed |
| --- |
| To enter and modify data: | Net Zero Cloud ManagerORNet Zero Cloud Admin |

-   **[Air Travel Emission Factor](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_calc_air_travel_emission_factor.htm)**
    The Air Travel Emission Factor object represents the emissions factors for scope 3 commercial air travel.
-   **[Electricity Emissions Factor Set](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_calc_electricity_emission_factors.htm)**
    The Electricity Emissions Factor Set object represents the factors that are used to convert electricity usage into CO₂e, CO₂, CH₄, and N₂O values. This record holds data on the breakdown of sources of electricity by fuel type (grid mixes).
-   **[Other Emissions Factor Set](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_calc_other_emission_factors.htm)**
    The Other Emissions Factor Set object represents a collection of emissions and conversion factors for various data types and sources that are neither the electricity grid nor scope 3 data types.
-   **[Rental Car Emission Factor](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_calc_rental_car_emission_factor.htm)**
    The Rental Car Emission Factor object represents the emissions factors for scope 3 rental car usage.
-   **[Waste Disposal Emissions Factor Set Item](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_calc_waste_disp_emssn_fact_set_item.htm)**
    The Waste Disposal Emissions Factor Set Item object represents the individual emissions factors for scope 3 waste handling based on the waste type and disposal type.
-   **[Other Lifecycle Emission Factor Set Item](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_calc_other_lifecycle_emission_factor_set_item.htm)**
    The Other Lifecycle Emission Factor Set Item object represents the individual emissions factor for a fuel used to calculate emissions that occur throughout its lifecycle, from extraction to end-of-life.

## Related Topics

- Air Travel Emission Factor (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_calc_air_travel_emission_factor.htm)
- Electricity Emissions Factor Set (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_calc_electricity_emission_factors.htm)
- Other Emissions Factor Set (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_calc_other_emission_factors.htm)
- Rental Car Emission Factor (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_calc_rental_car_emission_factor.htm)
- Waste Disposal Emissions Factor Set Item (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_calc_waste_disp_emssn_fact_set_item.htm)
- Other Lifecycle Emission Factor Set Item (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_calc_other_lifecycle_emission_factor_set_item.htm)

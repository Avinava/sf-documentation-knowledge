---
title: "Net Zero Cloud Calculations"
domain: netzero-cloud-dev-guide
topic: net-zero-cloud-calculations
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:57.872Z
estimatedTokens: 1714
keywords: [Net, Zero, Cloud, Calculations, performs, background, summarize, carbon, footprint, calculated, know, double-check, determine, whether, any]
---

# Net Zero Cloud Calculations

> Net Zero Cloud performs background calculations to summarize your carbon footprint and
    other calculated values. If you know these calculations, you can double-check the values used in
    the calculations to determine whether any values require modifications based on your
    organization’s methods or situation. The calculations in Net Zero Cloud are designed to be
    99.99% accurate. If you notice deviations exceeding 0.01%, contact Salesforce Customer
    Support.

# Net Zero Cloud Calculations

Net Zero Cloud performs background calculations to summarize your carbon footprint and other calculated values. If you know these calculations, you can double-check the values used in the calculations to determine whether any values require modifications based on your organization’s methods or situation. The calculations in Net Zero Cloud are designed to be 99.99% accurate. If you notice deviations exceeding 0.01%, contact Salesforce Customer Support.

Your carbon footprint is calculated based on the latest greenhouse gas protocol (GHG) guidance.

-   **[Energy Use Records](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_calc_energy_use_records.htm)**
    You can calculate emissions based on the emissions factors from the energy use records for each reporting period or reporting unit, such as a commercial building’s monthly consumption or a single flight.
-   **[Emissions Factor Records](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_calc_emissions_factor_records.htm)**
    You can complete the emissions calculations by using the energy use records and applying the relevant emissions factors. The supplied values, such as refrigerant leakage rate, are industry standard averages that Salesforce uses in its own calculations, but you can also use your own.
-   **[Carbon Footprint](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_calc_carbon_footprint.htm)**
    To calculate the carbon footprint of an organization, Net Zero Cloud employs energy usage records for an asset or a business activity, usually for the calendar or fiscal year. If you’re missing data for a reporting period, you can fill the gaps manually or use estimates provided by the app.
-   **[Waste Management](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_calc_waste_records.htm)**
    You can calculate upstream emissions from waste generated in operations for a reporting company, either by company-owned/controlled operations or by third-party treatment and disposal of waste. You can also calculate downstream emissions from waste generated during the end-of-life treatment of company's sold products.
-   **[Water Management](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_water_management.htm)**
    You can record the water-related activities, such as withdrawal, consumption, or discharge of water and calculate the water footprints.
-   **[Science Based Targets](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_calc_science_based_targets.htm)**
    You can set quantitative targets that align with science-based criteria to reduce your company's emissions and get closer to a net zero future.
-   **[Emissions Forecasts](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_calc_emissions_forecasts.htm)**
    You can forecast emissions based on your past and present emissions and predict how your business will grow in the future. Generate forecasts for your emissions based on your carbon footprint information and emissions commitment and targets for a defined period. Create formulas to calculate your forecasts per the requirements of your company.
-   **[Sustainability Scorecard](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_calc_sustainability_scorecard.htm)**
    You can calculate the annual sustainability scorecard of third-party organizations whose data is used to calculate scope 3 emissions.
-   **[Building Size Category](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_calc_building_size_category.htm)**
    The Building Size Category object represents the building size filter criteria for the building energy intensity records. The building size filter criteria are stored as a range of floor area sizes from a minimum size to a maximum size, in units of sqft or m². The records can have overlapping minimum-maximum ranges.
-   **[Building Energy Intensity](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_calc_building_energy_intensity.htm)**
    The Building Energy Intensity (BEI) object represents the average energy intensity by fuel type across a set of buildings. You can derive this data from published sources or by using energy use records as the data source and then setting up a window of time with some characteristics of the building size and type.
-   **[Data Gap Filling](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_calc_data_gap_filling.htm)**
    You can locate the sources of gaps in carbon footprint record data and resolve them.
-   **[Allocate Carbon Credits](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_allocate_carbon_credits.htm)**
    Allocate carbon credits to offset the unavoidable emissions.
-   **[Allocate Energy Attribute Certificates](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_allocate_energy_attribute_certificates.htm)**
    Reduce your scope 2 emissions using renewable energy sources by managing energy attribute certificates in Net Zero Cloud. An energy attribute certificate, or popularly known as renewable energy credit, is a tradeable certificate that represents the generation of 1megawatt-hour (MWh) of electricity from a renewable energy source.
-   **[Materiality Assessment](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_materiality_assessment.htm)**
    When you conduct a materiality assessment for your organization, you identify the relative capacity of various environmental, social, and corporate (ESG) topics as areas of risk to your business, and as  opportunities for making an impact on the environment and society at large.
-   **[Annual Emissions Inventory](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_calc_annual_emissions_inventory.htm)**
    The Annual Emissions Inventory object represents information about a company's total carbon emissions for a particular year in metric tonnes of CO2e (tCO2e). These emissions are the sum of all the emissions in scope 1, scope 2, and scope 3 greenhouse gas categories.
-   **[Disclosures Using Managed Packages](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_packaged_reports.htm)**
    Create disclosure reports that your company shares with external shareholders by using the disclosures template for standards implemented on Disclosure and Compliance Hub. You can include the disclosures report in your standard reports.
-   **[Conversion Factors](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_calc_conversion_factors.htm)**
    You can convert the values from one unit of measure to another compatible unit of measure based on the conversion factors.

## Related Topics

- Energy Use Records (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_calc_energy_use_records.htm)
- Emissions Factor Records (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_calc_emissions_factor_records.htm)
- Carbon Footprint (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_calc_carbon_footprint.htm)
- Waste Management (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_calc_waste_records.htm)
- Water Management (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_water_management.htm)
- Science Based Targets (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_calc_science_based_targets.htm)
- Emissions Forecasts (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_calc_emissions_forecasts.htm)
- Sustainability Scorecard (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_calc_sustainability_scorecard.htm)
- Building Size Category (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_calc_building_size_category.htm)
- Building Energy Intensity (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_calc_building_energy_intensity.htm)

---
title: "Emissions Forecasts"
domain: netzero-cloud-dev-guide
topic: emissions-forecasts
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:57.610Z
estimatedTokens: 4754
keywords: [Emissions, Forecasts, forecast, past, present, predict, how, business, grow, future, Generate, carbon, footprint, commitment, targets]
---

# Emissions Forecasts

> You can forecast emissions based on your past and present emissions and predict how your
  business will grow in the future. Generate forecasts for your emissions based on your carbon
  footprint information and emissions commitment and targets for a defined period. Create formulas
  to calculate your forecasts per the requirements of your company.

# Emissions Forecasts

You can forecast emissions based on your past and present emissions and predict how your business will grow in the future. Generate forecasts for your emissions based on your carbon footprint information and emissions commitment and targets for a defined period. Create formulas to calculate your forecasts per the requirements of your company.

## Emissions Activities

Emissions activities are the emissions generating activities mapped to the greenhouse gas categories that are used to aggregate emissions.

There will be multiple emissions activities seeded in the forecast set.

| Emissions Activity | Emissions Scope Category |
| --- | --- |
| All Emissions |  |
| Scope 1 | All Emissions |
| Scope 2 | All Emissions |
| Scope 3 | All Emissions |
| Scope 1 and Scope 2 | All Emissions |
| Scope 1 Stationary Assets - Commercial Building | Scope1 |
| Scope 1 Stationary Assets - Data Center | Scope1 |
| Scope 1 Vehicle Assets - Fleet Vehicles | Scope1 |
| Scope 1 Vehicle Assets - Private Jet | Scope1 |
| Scope 2 Stationary Assets - Commercial Building | Scope2 |
| Scope 2 Stationary Assets - Data Center | Scope2 |
| Scope 2 Vehicle Assets - Fleet Vehicles | Scope2 |
| Scope 2 Vehicle Assets - Private Jet | Scope2 |
| Scope 3 Stationary Assets - Commercial Building | Scope3 |
| Scope 3 Stationary Assets - Data Center | Scope3 |
| Scope 3 Vehicle Assets - Fleet Vehicles | Scope3 |
| Scope 3 Vehicle Assets - Private Jet | Scope3 |
| Scope 3 Business Travel | Scope3 |
| Scope 3 Business Travel Procurement | Scope3 |
| Scope 3 Capital Goods | Scope3 |
| Scope 3 Downstream Leased Assets | Scope3 |
| Scope 3 Downstream Transportation Distribution | Scope3 |
| Scope 3 End-Life Treatment of Sold Product | Scope3 |
| Scope 3 Franchising | Scope3 |
| Scope 3 Fuel and Energy-Related Activity | Scope3 |
| Scope 3 Investments | Scope3 |
| Scope 3 Processing Sold Products | Scope3 |
| Scope 3 Purchased Goods Services | Scope3 |
| Scope 3 Upstream Leased Assets | Scope3 |
| Scope 3 Upstream Transportation Distribution | Scope3 |
| Scope 3 Use of Sold Products | Scope3 |
| Scope 3 Uncategorized Emissions | Scope3 |
| Scope 3 Waste Generated in Operations | Scope3 |
| Scope 3 Employee Commuting | Scope3 |

## Measures

Measures are the values used to calculate the emissions forecasts.

See Measures, Types, and Their Calculation Methods in [Measure Types](https://help.salesforce.com/s/articleView?id=ind.netzero_manager_measure_types.htm&type=5&language=en_US).

## Emissions Activity and Related Business Metric

Business metrics are the measures that form the basis of forecasting.

See Emissions Activity and Business Metrics in [Measure Types](https://help.salesforce.com/s/articleView?id=ind.netzero_manager_measure_types.htm&type=5&language=en_US).

## Calculations at Different Emissions Activity Levels

Emissions forecasting calculations are performed for all emissions activities. At the lowest level of emissions activity, calculations are performed considering forecasting formulae. At higher levels (Scope 1, 2 or 3 and All Emissions), forecasting is performed by aggregating forecasts of the constituent emissions activity. For more information about emissions activities, see [Emissions Activities and Their Emissions Scope Categories](https://help.salesforce.com/apex/HTViewHelpDoc?id=netzero_manager_emissions_activities_and_their_emissions_scope_categories.htm&language=en_US).

-   **Emission calculations for lowest level emissions activities**

    Emissions forecasting for lowest level emissions activities is based on the business metric value you provide. You must upload the business metric measures before performing emissions forecasting. For each emissions activity, we calculate:

    -   Target data: If an emissions activity has a target defined for a year, you must retrieve that information based on the related Annual Emissions Reduction Target records.
        -   Target Emissions (tCo2e) (TargetEmissions)

            **Input Fields**

            -   Emissions Forecast Fact (EmissionsForecastFact)

            -   Emissions Reduction Target (EmssnReductionTarget)

                -   Target Type (TargetType)
            -   Annual Emissions Reduction Target (AnnualEmssnRdctnTarget)


            **Calculations**

            If EmssnReductionTarget.Target Type = "Emission Reduction"

            then EmissionsForecastFact.Target Emissions (tCo2e) = AnnualEmssnRdctnTarget.Target Emissions (tCo2e)

        -   Target Compensated Emissions (tCo2e) (TargetCompensatedEmissions)

            **Input Fields**

            -   Emissions Forecast Fact (EmissionsForecastFact)

            -   Emissions Reduction Target (EmssnReductionTarget)

                -   Target Type (TargetType)
            -   Annual Emissions Reduction Target (AnnualEmssnRdctnTarget)


            **Calculations**

            If EmssnReductionTarget.Target Type = "Net Zero Emissions"

            then EmissionsForecastFact.Target Compensated Emissions (tCo2e) = AnnualEmssnRdctnTarget.Target Emissions (tCo2e)

        -   Target Renewable Energy Percentage (TargetRenewableEnergyPct)

            **Input Fields**

            -   Emissions Forecast Fact (EmissionsForecastFact)

            -   Emissions Reduction Target (EmssnReductionTarget)

                -   Other Target KPI (OtherTargetKpi)
                -   Target Type (TargetType)
            -   Annual Emissions Reduction Target (AnnualEmssnRdctnTarget)


            **Calculations**

            If EmssnReductionTarget.Target Type = "Custom" and EmssnReductionTarget.Other Target KPI = "Renewable Energy Electricity Percentage"

            then EmissionsForecastFact.Target Renewable Energy Percentage = AnnualEmssnRdctnTarget.Target Emissions (tCo2e)

            ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=netzero_cloud_dev_guide)

            #### Note

            This value is used only for Scope 2 Stationary Assets - Commercial Building and Scope2 Scope 2 Stationary Assets - Data Center emissions activities.

    -   Actual data: To calculate emissions forecasts, you must have the actual emissions data from past years retrieved from the Annual Emissions Inventory records.

        Here's a list of emissions activities and their related values from the Emissions Forecast Fact and Annual Emissions Inventory records:

        **Input Fields**

        -   Emissions Forecast Fact (EmissionsForecastFact)
        -   Annual Emissions Inventory (AnnualEmssnInventory)

        | Emissions Activity | Annual Emissions Inventory | Actual Emissions Intensity |
        | --- | --- | --- |
        | All Emissions | EmissionsForecastFact.Actual Emissions (tCO2e) = AnnualEmssnInventory.Total Emissions (tCO2e) |  |
        | Scope 1 | EmissionsForecastFact.Actual Emissions (tCO2e) = AnnualEmssnInventory.Total Scope 1 Emissions (tCO2e) |  |
        | Scope 2 | EmissionsForecastFact.Actual Emissions (tCO2e) = AnnualEmssnInventory.Total Scope 2 Emissions (tCO2e) |  |
        | Scope 3 | EmissionsForecastFact.Actual Emissions (tCO2e) = AnnualEmssnInventory.Total Scope 3 Emissions (tCO2e) |  |
        | Scope 1 Stationary Assets - Commercial Building | EmissionsForecastFact.Actual Emissions (tCO2e) = AnnualEmssnInventory.Scope 1 Emissions from Commercial Buildings (tCO2e) | EmissionsForecastFact.Actual Emissions (tCo2e)/Total Floor Area (sqft) |
        | Scope 1 Stationary Assets - Data Center | EmissionsForecastFact.Actual Emissions (tCO2e) = AnnualEmssnInventory.Scope 1 Emissions from Data Centers (tCO2e) | EmissionsForecastFact.Actual Emissions (tCo2e)/Revenue |
        | Scope 1 Vehicle Assets - Fleet Vehicles | EmissionsForecastFact.Actual Emissions (tCO2e) = AnnualEmssnInventory.Scope 1 Emissions from Fleet Vehicles (tCO2e) | EmissionsForecastFact.Actual Emissions (tCo2e)/Revenue |
        | Scope 1 Vehicle Assets - Private Jet | EmissionsForecastFact.Actual Emissions (tCO2e) = AnnualEmssnInventory.Scope 1 Emissions from Private Jets (tCO2e) | EmissionsForecastFact.Actual Emissions (tCo2e)/Revenue |
        | Scope 2 Stationary Assets - Commercial Building | EmissionsForecastFact.Actual Emissions (tCO2e) = AnnualEmssnInventory.Scope 2 Location-Based Emissions from Commercial Buildings (tCO2e) | EmissionsForecastFact.Actual Emissions/Total Floor Area (sqft) |
        | Scope 2 Stationary Assets - Data Center | EmissionsForecastFact.Actual Emissions (tCO2e) = AnnualEmssnInventory.Scope 2 Location-Based Emissions from Data Centers (tCO2e) | EmissionsForecastFact.Actual Emissions/Revenue |
        | Scope 2 Vehicle Assets - Fleet Vehicles | EmissionsForecastFact.Actual Emissions (tCO2e) = AnnualEmssnInventory.Scope 2 Emissions from Fleet Vehicles (tCO2e) | EmissionsForecastFact.Actual Emissions (tCo2e)/Revenue |
        | Scope 2 Vehicle Assets - Private Jet | EmissionsForecastFact.Actual Emissions (tCO2e) = AnnualEmssnInventory.Scope 2 Emissions from Private Jets (tCO2e) | EmissionsForecastFact.Actual Emissions (tCo2e)/Revenue |
        | Scope 3 Stationary Assets - Commercial Building | EmissionsForecastFact.Actual Emissions (tCO2e) = AnnualEmssnInventory.Scope 3 Emissions from Commercial Buildings (tCO2e) | EmissionsForecastFact.Actual Emissions (tCo2e)/Total Floor Area (sqft) |
        | Scope 3 Stationary Assets - Data Center | EmissionsForecastFact.Actual Emissions (tCO2e) = AnnualEmssnInventory.Scope 3 Emissions from Data Centers (tCO2e) | EmissionsForecastFact.Actual Emissions (tCo2e)/Revenue |
        | Scope 3 Vehicle Assets - Fleet Vehicles | EmissionsForecastFact.Actual Emissions (tCO2e) = AnnualEmssnInventory.Scope 3 Emissions from Fleet Vehicles (tCO2e) | EmissionsForecastFact.Actual Emissions (tCo2e)/Revenue |
        | Scope 3 Vehicle Assets - Private Jet | EmissionsForecastFact.Actual Emissions (tCO2e) = AnnualEmssnInventory.Scope 3 Emissions from Private Jets (tCO2e) | EmissionsForecastFact.Actual Emissions (tCo2e)/Revenue |
        | Scope 3 Business Travel | EmissionsForecastFact.Actual Emissions (tCO2e) = AnnualEmssnInventory.Scope 3 Emissions from Business Travel (tCO2e) | EmissionsForecastFact.Actual Emissions (tCo2e)/Revenue |
        | Scope 3 Capital Goods | EmissionsForecastFact.Actual Emissions (tCO2e) = AnnualEmssnInventory.Scope 3 Emissions from Capital Goods (tCO2e) | EmissionsForecastFact.Actual Emissions (tCo2e)/Revenue |
        | Scope 3 Downstream Leased Assets | EmissionsForecastFact.Actual Emissions (tCO2e) = AnnualEmssnInventory.Scope 3 Emissions from Downstream Leased Assets (tCO2e) | EmissionsForecastFact.Actual Emissions (tCo2e)/Revenue |
        | Scope 3 Downstream Transportation Distribution | EmissionsForecastFact.Actual Emissions (tCO2e) = AnnualEmssnInventory.Scope 3 Emissions from Downstream Transportation and Distribution (tCO2e) | EmissionsForecastFact.Actual Emissions (tCo2e)/Revenue |
        | Scope 3 End-Life Treatment of Sold Product | EmissionsForecastFact.Actual Emissions (tCO2e) = AnnualEmssnInventory.Scope 3 Emissions from Use of Sold Products (tCO2e) | EmissionsForecastFact.Actual Emissions (tCo2e)/Revenue |
        | Scope 3 Franchising | EmissionsForecastFact.Actual Emissions (tCO2e) = AnnualEmssnInventory.Scope 3 Emissions from Franchises (tCO2e) | EmissionsForecastFact.Actual Emissions (tCo2e)/Revenue |
        | Scope 3 Fuel and Energy-Related Activity | EmissionsForecastFact.Actual Emissions (tCO2e) = AnnualEmssnInventory.Scope 3 Emissions from Fuel and Energy-Related Activity | EmissionsForecastFact.Actual Emissions (tCo2e)/Revenue |
        | Scope 3 Investments | EmissionsForecastFact.Actual Emissions (tCO2e) = AnnualEmssnInventory.Scope 3 Emissions from Investments (tCO2e) | EmissionsForecastFact.Actual Emissions (tCo2e)/Revenue |
        | Scope 3 Processing Sold Products | EmissionsForecastFact.Actual Emissions (tCO2e) = AnnualEmssnInventory.Scope 3 Emissions from Processing of Sold Products (tCO2e) | EmissionsForecastFact.Actual Emissions (tCo2e)/Revenue |
        | Scope 3 Purchased Goods Services | EmissionsForecastFact.Actual Emissions (tCO2e) = AnnualEmssnInventory.Scope 3 Emissions from Purchased Goods and Services (tCO2e) | EmissionsForecastFact.Actual Emissions (tCo2e)/Spend |
        | Scope 3 Upstream Leased Assets | EmissionsForecastFact.Actual Emissions (tCO2e) = AnnualEmssnInventory.Scope 3 Emissions from Upstream Leased Assets (tCO2e) | EmissionsForecastFact.Actual Emissions (tCo2e)/Revenue |
        | Scope 3 Upstream Transportation Distribution | EmissionsForecastFact.Actual Emissions (tCO2e) = AnnualEmssnInventory.Scope 3 Emissions from Upstream Transportation and Distribution(tCO2e) | EmissionsForecastFact.Actual Emissions (tCo2e)/Revenue |
        | Scope 3 Use of Sold Products | EmissionsForecastFact.Actual Emissions (tCO2e) = AnnualEmssnInventory.Scope 3 Emissions from End-of-Life Treatment of Sold Products (tCO2e) | EmissionsForecastFact.Actual Emissions (tCo2e)/Revenue |
        | Scope 3 Uncategorized Emissions | EmissionsForecastFact.Actual Emissions (tCO2e) = AnnualEmssnInventory.Scope 3 Uncategorized Emissions (tCO2e) | EmissionsForecastFact.Actual Emissions (tCo2e)/Revenue |
        | Scope 3 Waste Generated in Operations | EmissionsForecastFact.Actual Emissions (tCO2e) = AnnualEmssnInventory.Scope 3 Emissions from Waste Generated in Operations (tCO2e) | EmissionsForecastFact.Actual Emissions (tCo2e)/Revenue |
        | Scope 3 Employee Commuting | EmissionsForecastFact.Actual Emissions (tCO2e) = AnnualEmssnInventory.Scope 3 Emissions from Employee Computing (tCO2e) | EmissionsForecastFact.Actual Emissions (tCo2e)/Employee Count |

    -   Emissions forecast: Based on the measures corresponding to the business metrics and the actual data, forecasts are calculated for future years based on intensity.

        **Calculation**

        Intensity = Actual emissions/Business metric

        Forecasted Emissions (tCO2e) = Business metric for the future year \* Intensity

        For example, for Scope 3 Business Travel emissions activity:

        -   If actual emissions for 2021 = 100 tCO2e and the revenue business metric = 1000

            Intensity in terms of revenue = 100/1000 = 0.1.

            ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=netzero_cloud_dev_guide)

            #### Note

            Intensity is always determined based on the previous year's actual measures.

        -   If the revenue in 2026 = 2000

            Forecasted Emissions (tCO2e) = 2000\*0.1 = 200 tCO2e

-   **Emissions forecasts for higher-level emissions activities**

    Emissions forecasting for higher-level emissions activities, such as Scope 1, Scope 2, Scope 3 and All Emissions, the Forecasted Emissions (tCO2e) is the sum of the Forecasted Emissions (tCO2e) of the lower-level emissions activities.

    For example, the Forecasted Emissions (tCO2e) for Scope 1 emissions activity is the sum of Forecasted Emissions (tCO2e) of all the emissions activities where Emissions Scope Category = Scope 1.


## Adjust forecasts based on the emissions intensity reduction percentage

You can adjust the final forecasted emissions value for an emissions activity by entering a value for Forecasted Emissions Intensity Reduction Percentage as:

**Calculation**

Final Forecasted Emissions (tCO2e) = (100 - Forecasted Emissions Intensity Reduction Percentage)% \* Forecasted Emissions (tCO2e)

For example, if Forecasted Emissions Intensity Reduction Percentage for the year 2026 = 40%

then Final Forecasted Emissions (tCO2e) in 2026 = (100-40)% \* 200 = 120 tCO2e

If Emissions Activity = All Emissions

then Final Forecasted Emissions (tCO2e)= Forecasted Emissions (tCO2e)

## Adjust forecasts based on planned emissions reduction programs

You can adjust the final forecasted emissions for an emissions activity by entering values for Planned Operational Emissions Reduction (tCO2e) and Planned Supplier Emissions Reduction (tCO2e) to include values from emissions reduction programs either within your company or in your company’s supply chain as:

**Calculation**

Final Forecasted Emissions (tCO2e) = Final Forecasted Emissions (tCO2e) - Planned Operational Emissions Reduction (tCO2e) - Planned Supplier Emissions Reduction (tCO2e)

For example, if Planned Operational Emissions Reduction (tCO2e) for the year 2026 = 20 and Planned Supplier Emissions Reduction (tCO2e) for the year 2026 = 30

then Final Forecasted Emissions (tCO2e) = 120- 20 -30 = 70 tCO2e

If Emissions Activity = All Emissions

then Final Forecasted Emissions (tCO2e)= Forecasted Emissions (tCO2e)

## Manually specified forecasts

You can manually override the final forecasted emissions value for an emissions activity by entering a value for Forecasted Emissions Override (tCO2e)

**Calculation**

Final Forecasted Emissions (tCO2e) = Forecasted Emissions Override (tCO2e)

For example, if Forecasted Emissions Override (tCO2e) for 2026 = 95 tCO2e

then Final Forecasted Emissions (tCO2e) = 95 tCO2e

All other calculations, such as forecasts based on intensity reduction percentage and planned emissions reduction programs are ignored.

## Forecasting Calculation Logic for Stationary Assets

-   Forecasted Renewable Energy Percentage (For All Scopes)

    For all relevant assets across Scope 1, 2, and 3, this value automatically defaults to the Target Renewable Energy Percentage if it is specified. You have the option to manually override this default setting.

-   Forecasted Energy Consumption (For Scope 2 Assets)

    This calculation projects the total energy consumption for a future year by applying the intensity rate from the previous year to a future business metric.

    -   For commercial buildings, the energy intensity from the previous year, for example, energy usage per square foot, is determined and then multiplied by the total planned floor area for the future year.
    -   For data centers, the calculation follows a similar logic to commercial buildings but is based on office space. The calculation determines the energy intensity for each unit of office space and multiplies that rate by the projected office space for the future year.
-   Forecasted Emissions (For Scope 2 Assets)

    The calculation for forecasting total emissions for a future year is applicable to both market-based and location-based emissions. The calculation follows this process:

    1.  Determine the previous emissions rate by calculating the emissions factor from the previous year by dividing the total actual emissions with the total energy consumed.
    2.  Adjust the rate for future plans by developing an adjustment factor to account for anticipated changes in the renewable energy usage for the upcoming year, which improves the accuracy of the emissions rate.
    3.  Calculate the final forecast by multiplying the adjusted emissions rate (from the previous step) by the total forecasted energy consumption for the future year to obtain the final forecasted emissions value.

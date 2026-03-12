---
title: "Stationary Asset Water Footprint"
domain: netzero-cloud-dev-guide
topic: stationary-asset-water-footprint
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:58.284Z
estimatedTokens: 2462
keywords: [Stationary, Asset, Water, Footprint, Activity, water-related, activities, withdrawal, consumption, discharge, assets]
---

# Stationary Asset Water Footprint

> The Stationary Asset Water Activity object represents information about the
    water-related activities, such as withdrawal, consumption, or discharge of water, that are
    related to the stationary assets.

# Stationary Asset Water Footprint

The Stationary Asset Water Activity object represents information about the water-related activities, such as withdrawal, consumption, or discharge of water, that are related to the stationary assets.

Here are the calculated fields:

-   **Total Withdrawal (Ml) (TotalWithdrawalInMl)**

    **Input Fields**

    -   StnryAssetWaterActvty.Quantity (m3) (QuantityInM3)
    -   StnryAssetWaterActvty.Activity Type (ActivityType)

    **Calculations**

    If StnryAssetWaterActvty.Activity Type = "Withdrawal" then Total Withdrawal (Ml) = StnryAssetWaterActvty.Quantity (m3) converted to Megaliters

-   **Total Discharge (Ml) (TotalDischargeInMl)**

    **Input Fields**

    -   StnryAssetWaterActvty.Quantity (m3) (QuantityInM3)
    -   StnryAssetWaterActvty.Activity Type (ActivityType)

    **Calculations**

    If StnryAssetWaterActvty.Activity Type = "Discharge" then Total Discharge (Ml) = StnryAssetWaterActvty.Quantity (m3) converted to Megaliters

-   **Total Consumption (Ml) (TotalConsumptionInMl)**

    **Input Fields**

    -   StnryAssetWaterActvty.Quantity (m3) (QuantityInM3)
    -   StnryAssetWaterActvty.Activity Type (ActivityType)

    **Calculations**

    If StnryAssetWaterActvty.Activity Type = "Consumption" then Total Consumption (Ml) = StnryAssetWaterActvty.Quantity (m3) converted to Megaliters

-   **Total Cost (TotalCost)**

    **Input Fields**

    -   StnryAssetWaterActvty.Total Cost (TotalCost)

    **Calculations**

    Total Cost = Sum(StnryAssetWaterActvty.Total Cost)

-   **Floor Area Consumption Intensity (m3/m2) (FlAreaCnsmpIntsInM3M2)**

    **Input Fields**

    -   Total Consumption (Ml) (TotalConsumptionInMl)
    -   Occupied Floor Area (OccupiedFloorArea)

    **Calculations**

    If Occupied Floor Area !=0

    then Floor Area Consumption Intensity (m3/m2) = Total Consumption (Ml)/Occupied Floor Area

    else

    Floor Area Consumption Intensity (m3/m2) = 0

-   **Employee Consumption Intensity (m3/employee) (EmployeeCnsmpIntsInM3)**

    **Input Fields**

    -   Total Consumption (Ml) (TotalConsumptionInMl)
    -   Employee Count (EmployeeCount)

    **Calculations**

    If Employee Count != 0

    then Employee Consumption Intensity (m3/employee) = Total Consumption (Ml)/Employee Count

    else

    Employee Consumption Intensity (m3/employee) = 0

-   **Production Volume Consumption Intensity (m3/product)**

    **Input Fields**

    -   Total Consumption (Ml) (TotalConsumptionInMl)
    -   Total Units Manufactured (TotalUnitsManufactured)

    **Calculations**

    If TotalUnitsManufactured !=0

    then Production Volume Consumption Intensity (m3/product) = Total Consumption (Ml)/ Total Units Manufactured

    else

    Production Volume Consumption Intensity (m3/product) = 0

-   **Floor Area Withdrawal Intensity (m3/m2) (FlAreaWdrwIntsInM3M2)**

    **Input Fields**

    -   Total Withdrawal (Ml) (TotalWithdrawalInMl)
    -   Occupied Floor Area (OccupiedFloorArea)

    **Calculations**

    If Occupied Floor Area ! =0

    then Floor Area Withdrawal Intensity (m3/m2) = Total Withdrawal (Ml)/Occupied Floor Area

    else

    Floor Area Withdrawal Intensity (m3/m2) = 0

-   **Employee Withdrawal Intensity (m3/employee) (EmployeeWdrwIntsInM3)**

    **Input Fields**

    -   Total Withdrawal (Ml) (TotalWithdrawalInMl)
    -   Employee Count (EmployeeCount)

    **Calculations**

    If Employee Count != 0

    then Employee Withdrawal Intensity (m3/employee) = Total Withdrawal (Ml) (TotalWithdrawalInMl) / Employee Count

    else

    Employee Withdrawal Intensity (m3/employee) = 0

-   **Production Volume Withdrawal Intensity (m3/product)**

    **Input Fields**

    -   Total Withdrawal (Ml) (TotalWithdrawalInMl)
    -   Total Units Manufactured (TotalUnitsManufactured)

    **Calculations**

    If Total Units Manufactured != 0

    then Production Volume Withdrawal Intensity (m3/product) = Total Withdrawal (Ml)/ Total Units Manufactured

    else

    Production Volume Withdrawal Intensity (m3/product) = 0

-   **Floor Area Discharge Intensity (m3/m2) (FlAreaDchgIntsInM3M2)**

    **Input Fields**

    -   Total Discharge (Ml) (TotalDischargeInMl)
    -   Occupied Floor Area (OccupiedFloorArea)

    **Calculations**

    If Occupied Floor Area != 0

    then Floor Area Discharge Intensity (m3/m2) = Total Discharge (Ml)/Occupied Floor Area

    else

    Floor Area Discharge Intensity (m3/m2) = 0

-   **Employee Discharge Intensity (m3/employee) (EmployeeDchgIntsInM3)**

    **Input Fields**

    -   Total Discharge (Ml) (TotalDischargeInMl)
    -   Employee Count (EmployeeCount)

    **Calculations**

    If Employee Count != 0

    then Employee Discharge Intensity (m3/employee) = Total Discharge (Ml) / Employee Count

    else

    Employee Discharge Intensity (m3/employee) =0

-   **Production Volume Discharge Intensity (m3/product) (ProdtVolumeDchgIntsInM3)**

    **Input Fields**

    -   Total Discharge (Ml) (TotalDischargeInMl)
    -   Total Units Manufactured (TotalUnitsManufactured)

    **Calculations**

    If Total Units Manufactured !=0

    then Production Volume Discharge Intensity (m3/product)= Total Discharge (Ml)/Total Units Manufactured

    else

    Production Volume Discharge Intensity (m3/product) = 0

-   **High Stress Consumption Percentage (HighStressCnsmpPct)**

    **Input Fields**

    -   StnryAssetWaterActvty.Activity Type (ActivityType)
    -   StnryAssetWaterActvty.Quantity (Quantity)
    -   StnryAssetWaterActvty.Quantity (m3) (QuantityInM3)
    -   StnryAssetWaterActvty.Environmental Risk (EnvironmentalRisk)

    **Calculations**

    High Stress Consumption Percentage = (\[Sum(StnryAssetWaterActvty.Quantity) where StnryAssetWaterActvty.Activity Type = "Consumption" && StnryAssetWaterActvty.Environmental Risk = "High Stress" \] / \[Sum (StnryAssetWaterActvty.Quantity (m3) where StnryAssetWaterActvty.Activity Type = "Consumption" \]) × 100

-   **Extreme Stress Consumption Percentage (ExtremeStressCnsmpPct)**

    **Input Fields**

    -   StnryAssetWaterActvty.Activity Type (ActivityType)
    -   StnryAssetWaterActvty.Quantity (Quantity)
    -   StnryAssetWaterActvty.Quantity (m3) (QuantityInM3)
    -   StnryAssetWaterActvty.Environmental Risk (EnvironmentalRisk)

    **Calculations**

    Extreme Stress Consumption Percentage = (\[Sum(StnryAssetWaterActvty.Quantity) where StnryAssetWaterActvty.Activity Type = "Consumption" && StnryAssetWaterActvty.Environmental Risk = "Extremely High Stress" \] / \[Sum (StnryAssetWaterActvty.Quantity (m3) where StnryAssetWaterActvty.Activity Type = "Consumption" \]) × 100

-   **High Stress Withdrawal Percentage (HighStressWdrwPct)**

    **Input Fields**

    -   StnryAssetWaterActvty.Activity Type (ActivityType)
    -   StnryAssetWaterActvty.Quantity (Quantity)
    -   StnryAssetWaterActvty.Quantity (m3) (QuantityInM3)
    -   StnryAssetWaterActvty.Environmental Risk (EnvironmentalRisk)

    **Calculations**

    High Stress Withdrawal Percentage = (\[Sum(StnryAssetWaterActvty.Quantity) where StnryAssetWaterActvty.Activity Type = "Withdrawal" && StnryAssetWaterActvty.Environmental Risk = "High Stress" \] / \[Sum (StnryAssetWaterActvty.Quantity (m3) where StnryAssetWaterActvty.Activity Type = "Withdrawal" \]) × 100

-   **Extreme Stress Withdrawal Percentage (ExtremeStressWdrwPct)**

    **Input Fields**

    -   StnryAssetWaterActvty.Activity Type (ActivityType)
    -   StnryAssetWaterActvty.Quantity (Quantity)
    -   StnryAssetWaterActvty.Quantity (m3) (QuantityInM3)
    -   StnryAssetWaterActvty.Environmental Risk (EnvironmentalRisk)

    **Calculations**

    Extreme Stress Withdrawal Percentage = (\[Sum(StnryAssetWaterActvty.Quantity) where StnryAssetWaterActvty.Activity Type = "Withdrawal" && StnryAssetWaterActvty.Environmental Risk = "Extremely High Stress" \] / \[Sum (StnryAssetWaterActvty.Quantity (m3) where StnryAssetWaterActvty.Activity Type = "Withdrawal" \]) × 100

-   **Withdrawal Intensity Variance Percentage (WdrwIntsVariancePct)**

    **Input Fields**

    -   Total Withdrawal (Ml) (TotalWithdrawalInMl)
    -   Previous Year Water Footprint (PreviousYearWaterFtprnt)

    **Calculations**

    Withdrawal Intensity Variance Percentage = Total Withdrawal (Ml) = (PreviousYearWaterFtprnt.Total Withdrawal (Ml)/PreviousYearWaterFtprnt.Total Withdrawal (Ml)) × 100

    else

    Withdrawal Intensity Variance Percentage = null

-   **Consumption Intensity Variance Percentage (CnsmpIntsVariancePct)**

    **Input Fields**

    -   Total Consumption (Ml) (TotalConsumptionInMl)
    -   Previous Year Water Footprint (PreviousYearWaterFtprnt)

    **Calculations**

    Consumption Intensity Variance Percentage = Total Consumption (Ml) = (PreviousYearWaterFtprnt.Total Consumption (Ml)/PreviousYearWaterFtprnt.Total Consumption (Ml)) × 100

    else

    Consumption Intensity Variance Percentage = null

-   **Discharge Intensity Variance Percentage (DchgIntsVariancePct)**

    **Input Fields**

    -   Total Discharge (Ml) (TotalDischargeInMl)
    -   Previous Year Water Footprint (PreviousYearWaterFtprnt)

    **Calculations**

    Discharge Intensity Variance Percentage = Total Discharge (Ml)= (PreviousYearWaterFtprnt.Total Discharge (Ml)/PreviousYearWaterFtprnt.Total Discharge (Ml)) × 100

    else

    Discharge Intensity Variance Percentage = null


-   **[Stationary Asset Water Footprint Item](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_stationary_asset_water_footprint_item.htm)**
    The Stationary Asset Water Footprint Item object represents information about the total volume of water from each water activity, such as withdrawal, consumption, or discharge related to the stationary assets. Each water activity is a child record of the stationary asset water footprint object.

## Related Topics

- Stationary Asset Water Footprint Item (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_stationary_asset_water_footprint_item.htm)

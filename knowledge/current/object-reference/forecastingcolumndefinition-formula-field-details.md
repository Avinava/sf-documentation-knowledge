---
title: "ForecastingColumnDefinition Formula Field Details"
domain: object-reference
topic: forecastingcolumndefinition-formula-field-details
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:10.592Z
estimatedTokens: 1465
keywords: [ForecastingColumnDefinition, Formula, API, operators, functions, construct, formulas, apply, singular, cumulative, category, rollups, simplification, included, rollup]
---

# ForecastingColumnDefinition Formula Field Details

> Use these API names, operators, and functions to construct formulas for the Formula
  field in the ForecastingColumnDefinition object. The API names apply to both singular and
  cumulative category rollups. For simplification, we included only the single category rollup
  column header name next to each API name.

# ForecastingColumnDefinition Formula Field Details

Use these API names, operators, and functions to construct formulas for the Formula field in the ForecastingColumnDefinition object. The API names apply to both singular and cumulative category rollups. For simplification, we included only the single category rollup column header name next to each API name.

**API Column Names – General**

-   ForecastingQuotaAmount – Quota (currency)
-   ForecastingQuotaQuantity – Quota quantity (double)
-   DeveloperName of any custom calculated column or custom reference data column shown in the forecasts page

**API Column Names for Forecast Category Columns**

If the Most Likely category isn’t enabled:

-   ForecastAmount0 or ForecastQuantity0 – Closed
-   ForecastAmount1 or ForecastQuantity1 – Commit
-   ForecastAmount2 or ForecastQuantity2 – Best Case
-   ForecastAmount3 or ForecastQuantity3 – Pipeline

If the Most Likely category is enabled:

-   ForecastAmount0 or ForecastQuantity0 – Closed
-   ForecastAmount1 or ForecastQuantity1 – Commit
-   ForecastAmount2 or ForecastQuantity2 – Most Likely
-   ForecastAmount3 or ForecastQuantity3 – Best Case
-   ForecastAmount4 or ForecastQuantity4 – Pipeline

**API Column Names for Adjustment Columns – Original Forecast Value Without Adjustments**

If your org shows adjustments in columns, use these API column names for the original forecast value without adjustments. Adjustment columns are available in API version 60.0 and later.

If the Most Likely category isn’t enabled:

-   AmountWithoutAdjustments1 or QuantityWithoutAdjustments1 – Commit
-   AmountWithoutAdjustments2 or QuantityWithoutAdjustments2 – Best Case

If the Most Likely category is enabled:

-   AmountWithoutAdjustments1 or QuantityWithoutAdjustments1 – Commit
-   AmountWithoutAdjustments2 or QuantityWithoutAdjustments2 – Most Likely
-   AmountWithoutAdjustments3 or QuantityWithoutAdjustments3 – Best Case

**API Column Names for Adjustment Columns – Team Adjustment Value**

If your org shows adjustments in columns, use these API column names for the team’s adjusted value that includes a subordinate’s owner and manager adjustments, but not a forecast manager’s owner and manager adjustments. These adjustment columns are available in API version 61.0 and later.

If the Most Likely category isn’t enabled:

-   SubordinateOverrideAmount1 or SubordinateOverrideQuantity1 - Commit
-   SubordinateOverrideAmount2 or SubordinateOverrideQuantity2 - Best Case

If the Most Likely category is enabled:

-   SubordinateOverrideAmount1 or SubordinateOverrideQuantity1 - Commit
-   SubordinateOverrideAmount2 or SubordinateOverrideQuantity2 - Most Likely
-   SubordinateOverrideAmount3 or SubordinateOverrideQuantity3 - Best Case

Use these API column names for the team’s adjusted value that includes owner adjustments without manager adjustments. The adjustment value includes a subordinate’s manager adjustments that they made. These adjustment columns are available in API version 60.0 and later.

If the Most Likely category isn’t enabled:

-   AmountWithoutManagerAdjustment1 or QuantityWithoutManagerAdjustment1 – Commit
-   AmountWithoutManagerAdjustment2 or QuantityWithoutManagerAdjustment2 – Best Case

If the Most Likely category is enabled:

-   AmountWithoutManagerAdjustment1 or QuantityWithoutManagerAdjustment1 – Commit
-   AmountWithoutManagerAdjustment2 or QuantityWithoutManagerAdjustment2 – Most Likely
-   AmountWithoutManagerAdjustment3 or QuantityWithoutManagerAdjustment3 – Best Case

**API Column Names for Adjustment Columns – My Adjusted Value**

The column that represents the adjusted value from the forecast user viewing the page is the same as the API column name for the standard forecast category. Adjustment columns are available in API version 60.0 and later.

If the Most Likely category isn’t enabled:

-   ForecastAmount1 or ForecastQuantity1 – My Commit
-   ForecastAmount2 or ForecastQuantity2 – My Best Case

If the Most Likely category is enabled:

-   ForecastAmount1 or ForecastQuantity1 – My Commit
-   ForecastAmount2 or ForecastQuantity2 – My Most Likely
-   ForecastAmount3 or ForecastQuantity3 – My Best Case

**API Column Names for Custom Reference Data**

Use the appropriate field based on whether the custom reference data is of Currency or Number type.

-   ExtensionCurrency0
-   ExtensionCurrency1
-   ExtensionCurrency2
-   ExtensionCurrency3
-   ExtensionCurrency4
-   ExtensionNumber0
-   ExtensionNumber1
-   ExtensionNumber2
-   ExtensionNumber3
-   ExtensionNumber4

**Supported Math Operators**

-   \+ (Add) – Calculates the sum of two values.
-   \- (Subtract) – Calculates the difference of two values.
-   \* (Multiply) – Multiplies its values.
-   / (Divide) – Divides its values.
-   () (Open Parenthesis and Closed Parenthesis) – Specifies that the expressions within the open parenthesis and close parenthesis are evaluated first. All other expressions are evaluated using standard operator precedence.

**Supported Logical Operators**

-   \= and == (Equal) – Evaluates if two values are equivalent. The = and == operators are interchangeable.
-   <> and != (Not Equal) – Evaluates if two values aren’t equivalent.
-   < (Less Than) – Evaluates if a value is less than the value that follows this symbol.
-   \> (Greater Than) – Evaluates if a value is greater than the value that follows this symbol.
-   <= (Less Than or Equal) – Evaluates if a value is less than or equal to the value that follows this symbol.
-   \>= (Greater Than or Equal) – Evaluates if a value is greater than or equal to the value that follows this symbol.

**Supported Functions**

-   IF – Determines if expressions are true or false. Returns a given value if true and another value if false.
-   NULL can be used as a constant. For example, IF((expression) < 0, NULL, (expression)).

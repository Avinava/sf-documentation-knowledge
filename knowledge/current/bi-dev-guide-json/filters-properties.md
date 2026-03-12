---
title: "filters Properties"
domain: bi-dev-guide-json
topic: filters-properties
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:02.216Z
estimatedTokens: 348
keywords: [filters, key, included, dashboard, separate, node, configurable, filter, apply, layouts, specify, whether, widget, add, step, query, Although, steps, user, manually]
---

# filters Properties

> Use the filters property to add a filter to a
        step query. Although you can create filters for query steps in the user interface, you have
        to manually define filters for static steps in the dashboard JSON.

# filters Properties

Use the filters property to add a filter to a step query. Although you can create filters for query steps in the user interface, you have to manually define filters for static steps in the dashboard JSON.

The syntax for a filter in the step definition varies based on whether the step is in compact or SAQL form. This section describes the filter syntax for compact-form steps, including a description and example of every operator. For information about the filters for SAQL-form steps, see the [Analytics SAQL Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_intro.htm).

## Filter Syntax for Compact Form 2.0

Filters defined in compact-form steps have the following syntax.

```

```

## Example

For example, the following filter shows only records where Sales is between 1 and 100,000 and Customer\_Segment is either Consumer or Corporate.

```

```

## Example

Examples of dimension filters

```

```

## Example

Examples of measure filters

```

```

## Example

Examples of absolute date filters

```

```

## Example

Example of a relative date filter

```

```

## Example

Example of a compound filter and a compound date filter in a time-zone enabled org

```

```

## Filter Syntax for Compact Form 1.0

Filters defined in compact-form steps have the following syntax.

```

```

For example, the following filter shows only records with a “Customer” account type.

```

```

To compare against multiple values, include the values in an array, like this.

```

```

To specify an absolute date value for a date filter, specify the value in epoch format, where the value is the number of milliseconds since January 1, 1970 midnight UTC (1970-01-01 00:00:00). The following example shows dataset rows with a close date on or before January 1, 2016.

```

```

## Operators

You can use different operators in a filter. The supported operators depend on the field type. If you don’t specify the operator, Analytics applies the \== operator.

| Operator | Description | Compact-Form 2.0 Example | Compact-Form 1.0 Example |
| --- | --- | --- | --- |
| in | Value of dataset field equals one of the specified values. Applies to dimensions only. | ["Dimension",["Value1","Value2"],"in"] | ["Dimension",["Value1","Value2"],"in"] |
| not in | Value of dataset field is not in the specified list of values. Applies to dimensions only. | ["Dimension",["Value1","Value2"],"not in"] | ["Dimension",["Value1","Value2"],"not in"] |
| matches | Value of dataset field contains the specified value. This operator is not case-sensitive. Applies to dimensions only. | ["Dimension",["Val"],"matches"] | ["Dimension",["Val"],"matches"] |
| is null | Value of dataset field is null. Applies to measures, dimensions and absolute dates in Compact form 2.0 and to measures only in Compact form 1.0. | ["Measure",[],"isnull"] | ["Measure",[[]],"isnull"] |
| is not null | Value of dataset field is not null. Applies to measures, dimensions and absolute dates in Compact form 2.0 and to measures only in Compact form 1.0. | ["Measure",[],"isnotnull"] | ["Measure",[[]],"isnotnull"] |
| == | Value of dataset field equals the specified value. Applies to measures only. | ["Measure",[1],"=="] | ["Measure",[[1]],"=="] |
| != | Value of dataset field does not equal the specified value. Applies to measures only. | ["Measure",[1],"!="] | ["Measure",[[1]],"!="] |
| < | Value of dataset field is less than the specified value. Applies to measures only. | ["Measure",[10],"<"] | ["Measure",[[10]],"<"] |
| > | Value of dataset field is greater than the specified value. Applies to measures only. | ["Measure",[1],">"] | ["Measure",[[1]],">"] |
| <= | Value of dataset field is less than or equal to the specified value. Applies to measures only in Compact form 2.0 and to measures and absolute dates only in Compact form 1.0. | ["Measure",[10],"<="] | ["Measure",[[10]],"<="]["Date",[[1229040000000]],"<="] |
| >= | Value of dataset field is greater than or equal to the specified value. Applies to measures only in Compact form 2.0 and to measures and absolute dates only in Compact form 1.0. | ["Measure",[1],">="] | ["Measure",[[1]],">="]["Date",[[-374457600000]],">="] |
| >=<= or between with measures and dates in Compact form 1.0 | Value of dataset field is between the specified values, inclusive. For relative dates, you can specify the following time periods: "year", "quarter", "month", "week", and "day". Applies to measures only in Compact form 2.0 and measures and dates only in Compact form 1.0.NoteYou can also use these operators with measures in Compact form 2.0 and measures and dates in Compact form 1.0:>=<Greater than or equal to one value, but less than another.><=Greater than one value, but less than or equal to another.><Between two values, exclusive. | ["Measure",[1,10],">=<="] | ["Measure",[[1,10]],">=<="]["Date",[[-374457600000,1229040000000]],">=<="]["Date",[[["month",-1],["month",1]]],">=<="]["Close Date", [[null,1451606400000]],"<="]] |
| between with dates in Compact form 2.0 | Value of dataset field is between the specified values, inclusive. For relative dates, you can specify the following time periods: "year", "quarter", "month", "week", and "day". | ["Date",[null, 1388448000000], "between"]["Date",[1388448000000, null], "between"]["Date",[["year", -1], ["year", 1]], "between"] |  |

To view a complete example with a binding syntax, see the [Bind the Initial Filter Selection](https://developer.salesforce.com/docs/analytics/bi-dev-guide-bindings/guide/bi-dashboard-bindings-wave-designer-initial-selections.html "HTML (New Window)") documentation.

## Code Examples

```
"dataset": {
    "name": "opportunity"
},
```

```
"filters": [[
    "field",
    [value],
    "operator"
]]
```

```
"filters": [
    [
        "Sales",
        [
          1,
          100000
        ],
        ">=<="
    ],
    [
        "Customer_Segment",
        [
          "Consumer"
          "Corporate"
        ],
        "in"
    ]
]]
```

```
"filters": [Region", ["East", "West"], "in"]
   "filters": [Region", ["st"], "matches"]
   "filters": [Region", [], "isnull"]
   "filters": [["year", "OrderDate"], [2020, 2022], "in"]
```

```
"filters": ["Profit", [], "isnull"]
   "filters": ["Profit", [1], ">="]
   "filters": ["Profit", [1, 100], ">=<="]
```

## Related Topics

- filters JSON (atlas.en-us.bi_dev_guide_json.meta/bi_dev_guide_json/bi_dbjson_filters.htm)

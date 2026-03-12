---
title: "DateGranularity Enum"
domain: apex-reference
topic: dategranularity-enum
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:29.730Z
estimatedTokens: 274
namespace: Reports
keywords: [DateGranularity, Reports.DateGranularity, date, interval, grouping, Usage]
---

# DateGranularity Enum

> The Reports.DateGranularity enum describes the date interval that is used for grouping.

**Namespace:** `Reports`

# DateGranularity Enum

The Reports.DateGranularity enum describes the date interval that is used for grouping.

## Namespace

[Reports](atlas.en-us.apexref.meta/apexref/apex_namespace_Reports.htm "The Reports namespace provides classes for accessing the same data as is available in the Salesforce Reports and Dashboards REST API.")

## Usage

The GroupingInfo.getDateGranularity method returns a Reports.DateGranularity enum value. The GroupingInfo.setDateGranularity method takes the enum value as an argument.

## Enum Values

The following are the values of the Reports.DateGranularity enum.

| Value | Description |
| --- | --- |
| DAY | The day of the week (Monday–Sunday) |
| DAY_IN_MONTH | The day of the month (1–31) |
| FISCAL_PERIOD | The fiscal period |
| FISCAL_QUARTER | The fiscal quarter |
| FISCAL_WEEK | The fiscal week |
| FISCAL_YEAR | The fiscal year |
| MONTH | The month (January–December) |
| MONTH_IN_YEAR | The month number (1–12) |
| NONE | No date grouping |
| QUARTER | The quarter number (1–4) |
| WEEK | The week number (1–52) |
| YEAR | The year number (####) |

## Related Topics

- Reports (atlas.en-us.apexref.meta/apexref/apex_namespace_Reports.htm)

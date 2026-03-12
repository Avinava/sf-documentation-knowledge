---
title: "ColumnSortOrder Enum"
domain: apex-reference
topic: columnsortorder-enum
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:29.691Z
estimatedTokens: 188
namespace: Reports
keywords: [ColumnSortOrder, Reports.ColumnSortOrder, describes, order, grouping, column, uses, sort, data., Usage, Values]
---

# ColumnSortOrder Enum

> The Reports.ColumnSortOrder enum describes the order that the grouping column uses to sort data.

**Namespace:** `Reports`

# ColumnSortOrder Enum

The Reports.ColumnSortOrder enum describes the order that the grouping column uses to sort data.

## Namespace

[Reports](atlas.en-us.apexref.meta/apexref/apex_namespace_Reports.htm "The Reports namespace provides classes for accessing the same data as is available in the Salesforce Reports and Dashboards REST API.")

## Usage

The GroupingInfo.getColumnSortOrder() method returns a Reports.ColumnSortOrder enum value. The GroupingInfo.setColumnSortOrder() method takes the enum value as an argument.

## Enum Values

The following are the values of the Reports.ColumnSortOrder enum.

| Value | Description |
| --- | --- |
| ASCENDING | Sort data in ascending order (A–Z) |
| DESCENDING | Sort data in descending order (Z–A) |

## Related Topics

- Reports (atlas.en-us.apexref.meta/apexref/apex_namespace_Reports.htm)

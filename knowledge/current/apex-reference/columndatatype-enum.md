---
title: "ColumnDataType Enum"
domain: apex-reference
topic: columndatatype-enum
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:40.519Z
keywords: [ColumnDataType, Enum, Namespace, Values]
---

# ColumnDataType Enum

# ColumnDataType Enum

The Reports.ColumnDataType enum describes the type of data in a column. It is returned by the getDataType method.

## Namespace

[Reports](atlas.en-us.apexref.meta/apexref/apex_namespace_Reports.htm "The Reports namespace provides classes for accessing the same data as is available in the Salesforce Reports and Dashboards REST API.")

## Enum Values

The following are the values of the Reports.ColumnDataType enum.

| Value | Description |
| --- | --- |
| BOOLEAN_DATA | Boolean (true or false) values |
| COMBOBOX_DATA | Comboboxes, which provide a set of enumerated values and enable the user to specify a value that is not in the list |
| CURRENCY_DATA | Currency values |
| DATETIME_DATA | DateTime values |
| DATE_DATA | Date values |
| DOUBLE_DATA | Double values |
| EMAIL_DATA | Email addresses |
| ID_DATA | An object’s Salesforce ID |
| INT_DATA | Integer values |
| MULTIPICKLIST_DATA | Multi-select picklists, which provide a set of enumerated values from which multiple values can be selected |
| PERCENT_DATA | Percent values |
| PHONE_DATA | Phone numbers. Values can include alphabetic characters. Client applications are responsible for phone number formatting. |
| PICKLIST_DATA | Single-select picklists, which provide a set of enumerated values from which only one value can be selected |
| REFERENCE_DATA | Cross-references to another object, analogous to a foreign key field |
| STRING_DATA | String values |
| TEXTAREA_DATA | String values that are displayed as multiline text fields |
| TIME_DATA | Time values |
| URL_DATA | URL values that are displayed as hyperlinks |
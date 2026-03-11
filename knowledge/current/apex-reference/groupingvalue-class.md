---
title: "GroupingValue Class"
domain: apex-reference
topic: groupingvalue-class
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:35.856Z
keywords: [GroupingValue, Class, Returns, value, field, used, row, column, grouping., getValue, Syntax, Return, Value, Usage]
---

# GroupingValue Class

> Returns the value of the field that is used as a row or
column grouping.

### getValue()

Returns the value of the field that is used as a row or column grouping.

#### Syntax

public Object getValue()

#### Return Value

Type: Object

#### Usage

The value depends on the field’s data type.

-   Currency fields:
    -   amount: Of type currency. A data cell’s value.
    -   currency: Of type picklist. The ISO 4217 currency code, if available; for example, USD for US dollars or CNY for Chinese yuan. (If the grouping is on the converted currency, this value is the currency code for the report and not for the record.)
-   Picklist fields: API name. For example, a custom picklist field—Type of Business with values 1, 2, and 3 for Consulting, Services, and Add-On Business respectively—has 1, 2, or 3 as the grouping value.
-   ID fields: API name.
-   Record type fields: API name.
-   Date and time fields: Date or time in ISO-8601 format.
-   Lookup fields: Unique API name. For example, for the Opportunity Owner lookup field, the ID of each opportunity owner’s Chatter profile page can be a grouping value.
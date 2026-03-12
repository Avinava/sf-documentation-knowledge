---
title: "ReportCurrency Class"
domain: apex-reference
topic: reportcurrency-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:23.455Z
estimatedTokens: 418
namespace: Reports
keywords: [ReportCurrency, currency, including, amount, code, getAmount, getCurrencyCode]
---

# ReportCurrency Class

> Contains information about a currency value, including
the amount and currency code.

**Namespace:** `Reports`

# ReportCurrency Class

Contains information about a currency value, including the amount and currency code.

## Namespace

[Reports](atlas.en-us.apexref.meta/apexref/apex_namespace_Reports.htm "The Reports namespace provides classes for accessing the same data as is available in the Salesforce Reports and Dashboards REST API.")

## ReportCurrency Methods

The following are methods for ReportCurrency. All are instance methods.

-   **[getAmount()](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportcurrency.htm#apex_Reports_ReportCurrency_getAmount)**
    Returns the amount of the currency value.
-   **[getCurrencyCode()](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportcurrency.htm#apex_Reports_ReportCurrency_getCurrencyCode)**
    Returns the report currency code, such as USD, EUR, or GBP, for an organization that has multicurrency enabled. The value is null if the organization does not have multicurrency enabled.

### getAmount()

Returns the amount of the currency value.

#### Syntax

public Decimal getAmount()

#### Return Value

Type: [Decimal](atlas.en-us.apexref.meta/apexref/apex_methods_system_decimal.htm#apex_methods_system_decimal "Contains methods for the Decimal primitive data type.")

### getCurrencyCode()

Returns the report currency code, such as USD, EUR, or GBP, for an organization that has multicurrency enabled. The value is null if the organization does not have multicurrency enabled.

#### Syntax

public String getCurrencyCode()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

## Related Topics

- Reports (atlas.en-us.apexref.meta/apexref/apex_namespace_Reports.htm)
- getAmount() (atlas.en-us.apexref.meta/apexref/apex_class_reports_reportcurrency.htm)
- getCurrencyCode() (atlas.en-us.apexref.meta/apexref/apex_class_reports_reportcurrency.htm)
- Decimal (atlas.en-us.apexref.meta/apexref/apex_methods_system_decimal.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)

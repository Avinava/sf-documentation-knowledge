---
title: "ReportCurrency Methods"
domain: apex-reference
topic: reportcurrency-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.858Z
keywords: [ReportCurrency, Methods, Returns, amount, currency, value., getAmount, Syntax, Return, Value, getCurrencyCode]
---

# ReportCurrency Methods

> Returns the amount of the currency value.

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
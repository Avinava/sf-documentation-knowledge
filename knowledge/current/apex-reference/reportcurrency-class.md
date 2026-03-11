---
title: "ReportCurrency Class"
domain: apex-reference
topic: reportcurrency-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.858Z
keywords: [ReportCurrency, Class, Returns, report, currency, code, such, USD, EUR, GBP, organization, multicurrency, enabled., value, null, does, getCurrencyCode, Syntax, Return, Value]
---

# ReportCurrency Class

> Returns the report currency code, such as USD, EUR, or
GBP, for an organization that has multicurrency enabled. The value
is null if the organization
does not have multicurrency enabled.

### getCurrencyCode()

Returns the report currency code, such as USD, EUR, or GBP, for an organization that has multicurrency enabled. The value is null if the organization does not have multicurrency enabled.

#### Syntax

public String getCurrencyCode()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
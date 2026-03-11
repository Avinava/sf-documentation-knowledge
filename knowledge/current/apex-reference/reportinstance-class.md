---
title: "ReportInstance Class"
domain: apex-reference
topic: reportinstance-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.928Z
keywords: [ReportInstance, Class, Returns, status, report., getStatus, Syntax, Return, Value, Usage]
---

# ReportInstance Class

> Returns the status of a report.

### getStatus()

Returns the status of a report.

#### Syntax

public String getStatus()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

-   New if the report run was recently triggered through a request.
-   Success if the report ran.
-   Running if the report is being run.
-   Error if the report run failed. The instance of a report run can return an error if, for example, your permission to access the report was removed after you requested the run.
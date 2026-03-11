---
title: "ReportManager Class"
domain: apex-reference
topic: reportmanager-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.942Z
keywords: [ReportManager, Class, Runs, report, immediately, ID., runReport, reportId, Syntax, Parameters, Return, Value]
---

# ReportManager Class

> Runs a report immediately with the report ID.

### runReport(reportId)

Runs a report immediately with the report ID.

#### Syntax

public static Reports.ReportResults runReport(Id reportId)

#### Parameters

reportId

Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

#### Return Value

Type: [Reports.ReportResults](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportresults.htm#apex_class_reports_reportresults "Contains the results of running a report.")
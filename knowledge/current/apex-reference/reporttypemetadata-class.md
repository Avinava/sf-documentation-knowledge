---
title: "ReportTypeMetadata Class"
domain: apex-reference
topic: reporttypemetadata-class
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:35.791Z
keywords: [ReportTypeMetadata, Class, Returns, information, standard, date, filters, applied, type, report., getStandardFilterInfos, Signature, Return, Value]
---

# ReportTypeMetadata Class

> Returns information about standard date filters that can be applied to
      this type of report.

### getStandardFilterInfos()

Returns information about standard date filters that can be applied to this type of report.

#### Signature

public Map<String,Reports.StandardFilterInfo> getStandardFilterInfos()

#### Return Value

Type: Map<String,[Reports.StandardFilterInfo](atlas.en-us.apexref.meta/apexref/apex_class_reports_StandardFilterInfo.htm#apex_class_reports_StandardFilterInfo "Is an abstract base class for an object that provides standard filter information.")\>
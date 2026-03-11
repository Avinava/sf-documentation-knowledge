---
title: "NotificationActionContext Methods"
domain: apex-reference
topic: notificationactioncontext-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.758Z
keywords: [NotificationActionContext, Methods, Returns, report, instance, associated, notification., getReportInstance, Signature, Return, Value, getThresholdInformation]
---

# NotificationActionContext Methods

> Returns the report instance associated with the
    notification.

## NotificationActionContext Methods

The following are methods for NotificationActionContext.

-   **[getReportInstance()](atlas.en-us.apexref.meta/apexref/apex_class_reports_NotificationActionContext.htm#apex_reports_NotificationActionContext_getReportInstance)**  
    Returns the report instance associated with the notification.
-   **[getThresholdInformation()](atlas.en-us.apexref.meta/apexref/apex_class_reports_NotificationActionContext.htm#apex_reports_NotificationActionContext_getThresholdInformation)**  
    Returns the threshold information associated with the notification.

### getReportInstance()

Returns the report instance associated with the notification.

#### Signature

public Reports.ReportInstance getReportInstance()

#### Return Value

Type: [Reports.ReportInstance](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportinstance.htm#apex_class_reports_reportinstance "Returns an instance of a report that was run asynchronously. Retrieves the results for that instance.")

### getThresholdInformation()

Returns the threshold information associated with the notification.

#### Signature

public Reports.ThresholdInformation getThresholdInformation()

#### Return Value

Type: [Reports.ThresholdInformation](atlas.en-us.apexref.meta/apexref/apex_class_reports_ThresholdInformation.htm#apex_class_reports_ThresholdInformation "Contains a list of evaluated conditions for a report notification.")
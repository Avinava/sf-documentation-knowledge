---
title: "NotificationActionContext Class"
domain: apex-reference
topic: notificationactioncontext-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:23.325Z
estimatedTokens: 866
namespace: Reports
keywords: [NotificationActionContext, report, instance, condition, threshold, notification, reportInstance, thresholdInformation, getReportInstance, getThresholdInformation]
---

# NotificationActionContext Class

> Contains information about the report instance and condition threshold
      for a report notification.

**Namespace:** `Reports`

# NotificationActionContext Class

Contains information about the report instance and condition threshold for a report notification.

## Namespace

[Reports](atlas.en-us.apexref.meta/apexref/apex_namespace_Reports.htm "The Reports namespace provides classes for accessing the same data as is available in the Salesforce Reports and Dashboards REST API.")

-   **[NotificationActionContext Constructors](atlas.en-us.apexref.meta/apexref/apex_class_reports_NotificationActionContext.htm#apex_reports_NotificationActionContext_constructors)**

-   **[NotificationActionContext Methods](atlas.en-us.apexref.meta/apexref/apex_class_reports_NotificationActionContext.htm#apex_reports_NotificationActionContext_methods)**


## NotificationActionContext Constructors

The following are constructors for NotificationActionContext.

-   **[NotificationActionContext(reportInstance, thresholdInformation)](atlas.en-us.apexref.meta/apexref/apex_class_reports_NotificationActionContext.htm#apex_reports_NotificationActionContext_ctor)**
    Creates a new instance of the Reports.NotificationActionContext class using the specified parameters.

### NotificationActionContext(reportInstance, thresholdInformation)

Creates a new instance of the Reports.NotificationActionContext class using the specified parameters.

#### Signature

public NotificationActionContext(Reports.ReportInstance reportInstance, Reports.ThresholdInformation thresholdInformation)

#### Parameters

reportInstance

Type: [Reports.ReportInstance](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportinstance.htm#apex_class_reports_reportinstance "Returns an instance of a report that was run asynchronously. Retrieves the results for that instance.")

An instance of a report.

thresholdInformation

Type: [Reports.ThresholdInformation](atlas.en-us.apexref.meta/apexref/apex_class_reports_ThresholdInformation.htm#apex_class_reports_ThresholdInformation "Contains a list of evaluated conditions for a report notification.")

The evaluated conditions for the notification.

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

## Related Topics

- Reports (atlas.en-us.apexref.meta/apexref/apex_namespace_Reports.htm)
- NotificationActionContext Constructors (atlas.en-us.apexref.meta/apexref/apex_class_reports_NotificationActionContext.htm)
- NotificationActionContext Methods (atlas.en-us.apexref.meta/apexref/apex_class_reports_NotificationActionContext.htm)
- NotificationActionContext(reportInstance, thresholdInformation) (atlas.en-us.apexref.meta/apexref/apex_class_reports_NotificationActionContext.htm)
- Reports.ReportInstance (atlas.en-us.apexref.meta/apexref/apex_class_reports_reportinstance.htm)
- Reports.ThresholdInformation (atlas.en-us.apexref.meta/apexref/apex_class_reports_ThresholdInformation.htm)
- getReportInstance() (atlas.en-us.apexref.meta/apexref/apex_class_reports_NotificationActionContext.htm)
- getThresholdInformation() (atlas.en-us.apexref.meta/apexref/apex_class_reports_NotificationActionContext.htm)

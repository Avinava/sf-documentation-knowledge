---
title: "NotificationActionContext Constructors"
domain: apex-reference
topic: notificationactioncontext-constructors
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.758Z
keywords: [NotificationActionContext, Constructors, Creates, new, instance, Reports.NotificationActionContext, class, specified, parameters., reportInstance, thresholdInformation, Signature, Parameters]
---

# NotificationActionContext Constructors

> Creates a new instance of the Reports.NotificationActionContext class using the specified
    parameters.

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
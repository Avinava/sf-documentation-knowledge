---
title: "NotificationAction Interface"
domain: apex-reference
topic: notificationaction-interface
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:40.824Z
keywords: [NotificationAction, Interface, Executes, custom, Apex, action, specified, context, parameter, object, NotificationActionContext., contains, information, report, instance, conditions, must, met, notification, triggered.]
---

# NotificationAction Interface

> Executes the custom Apex action specified in the
        context parameter of the context object, NotificationActionContext. The object contains information about the report
      instance and the conditions that must be met for a notification to be triggered. The method
      executes whenever the specified conditions are met.

### execute(context)

Executes the custom Apex action specified in the context parameter of the context object, NotificationActionContext. The object contains information about the report instance and the conditions that must be met for a notification to be triggered. The method executes whenever the specified conditions are met.

#### Signature

public void execute(Reports.NotificationActionContext context)

#### Parameters

context

Type: [Reports.NotificationActionContext](atlas.en-us.apexref.meta/apexref/apex_class_reports_NotificationActionContext.htm#apex_class_reports_NotificationActionContext "Contains information about the report instance and condition threshold for a report notification.")

#### Return Value

Type: Void
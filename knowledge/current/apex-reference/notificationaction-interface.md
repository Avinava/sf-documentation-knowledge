---
title: "NotificationAction Interface"
domain: apex-reference
topic: notificationaction-interface
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:30.179Z
estimatedTokens: 630
namespace: Reports
keywords: [NotificationAction, Implement, trigger, custom, Apex, conditions, report, notification, met, Usage, execute, context, Implementation]
---

# NotificationAction Interface

> Implement this interface to trigger a custom Apex class when the
      conditions for a report notification are met.

**Namespace:** `Reports`

# NotificationAction Interface

Implement this interface to trigger a custom Apex class when the conditions for a report notification are met.

## Namespace

[Reports](atlas.en-us.apexref.meta/apexref/apex_namespace_Reports.htm "The Reports namespace provides classes for accessing the same data as is available in the Salesforce Reports and Dashboards REST API.")

## Usage

Report notifications for reports that users have subscribed to can trigger a custom Apex class, which must implement the Reports.NotificationAction interface. The execute method in this interface receives a NotificationActionContext object as a parameter, which contains information about the report instance and the conditions that must be met for a notification to be triggered.

-   **[NotificationAction Methods](atlas.en-us.apexref.meta/apexref/apex_interface_reports_NotificationAction.htm#apex_reports_NotificationAction_methods)**

-   **[NotificationAction Example Implementation](atlas.en-us.apexref.meta/apexref/apex_interface_reports_NotificationAction.htm#apex_interface_reports_NotificationAction_Example)**


## NotificationAction Methods

The following are methods for NotificationAction.

-   **[execute(context)](atlas.en-us.apexref.meta/apexref/apex_interface_reports_NotificationAction.htm#apex_reports_NotificationAction_execute)**
    Executes the custom Apex action specified in the context parameter of the context object, NotificationActionContext. The object contains information about the report instance and the conditions that must be met for a notification to be triggered. The method executes whenever the specified conditions are met.

### execute(context)

Executes the custom Apex action specified in the context parameter of the context object, NotificationActionContext. The object contains information about the report instance and the conditions that must be met for a notification to be triggered. The method executes whenever the specified conditions are met.

#### Signature

public void execute(Reports.NotificationActionContext context)

#### Parameters

context

Type: [Reports.NotificationActionContext](atlas.en-us.apexref.meta/apexref/apex_class_reports_NotificationActionContext.htm#apex_class_reports_NotificationActionContext "Contains information about the report instance and condition threshold for a report notification.")

#### Return Value

Type: Void

## NotificationAction Example Implementation

This is an example implementation of the Reports.NotificationAction interface.

```

```

## Code Examples

```apex
public class AlertOwners implements Reports.NotificationAction {

    public void execute(Reports.NotificationActionContext context) {
        Reports.ReportResults results = context.getReportInstance().getReportResults();
        for(Reports.GroupingValue g: results.getGroupingsDown().getGroupings()) {
            FeedItem t = new FeedItem();
            t.ParentId = (Id)g.getValue();
            t.Body = 'This record needs attention. Please view the report.';
            t.Title = 'Needs Attention: '+ results.getReportMetadata().getName();
            t.LinkUrl = '/' + results.getReportMetadata().getId();
            insert t;
        }
    }
}
```

## Related Topics

- Reports (atlas.en-us.apexref.meta/apexref/apex_namespace_Reports.htm)
- NotificationAction Methods (atlas.en-us.apexref.meta/apexref/apex_interface_reports_NotificationAction.htm)
- NotificationAction Example Implementation (atlas.en-us.apexref.meta/apexref/apex_interface_reports_NotificationAction.htm)
- execute(context) (atlas.en-us.apexref.meta/apexref/apex_interface_reports_NotificationAction.htm)
- Reports.NotificationActionContext (atlas.en-us.apexref.meta/apexref/apex_class_reports_NotificationActionContext.htm)

---
title: "ReportEvent Policies"
domain: securityImplGuide
topic: reportevent-policies
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:44.755Z
estimatedTokens: 571
keywords: [ReportEvent, Policies, Report, event, monitor, data, viewed, downloaded, reports, Policy, Glance]
---

# ReportEvent Policies

> Report event policies monitor when data is viewed or downloaded from your
  reports.

# ReportEvent Policies

Report event policies monitor when data is viewed or downloaded from your reports.

| Available in both Salesforce Classic (not available in all orgs) and Lightning Experience. |
| --- |
| Available in: Enterprise, Unlimited, and Developer EditionsRequires Salesforce Shield or Salesforce Event Monitoring add-on subscriptions. |


## Policy at a Glance

| Object | Conditions Available in Condition Builder | Actions | Considerations |
| --- | --- | --- | --- |
| ReportEvent | Dashboard ID, Dashboard Name, Description, Event Source, Format, Is Scheduled, Name, Name of Columns, Number of Columns, Operation, Owner ID, Queried Entities, Report ID, Rows Processed, Scope, Session Level, Source IP, User ID, Username | Block, Notifications, Multi-Factor Authentication (for UI logins) | Multi-factor authentication (MFA) policies apply to the following UI-based report actions:Printable ViewReport ExportReport Run (in Salesforce Classic only)Multi-factor authentication isn’t supported for reports in Lightning pages, so the action is upgraded to Block. |

## What You Can Do with It

Create a policy that can:

-   Require multi-factor authentication for all users accessing or downloading reports over a specific size. For maximum coverage, write a policy that notifies you and blocks access to reports that process more than a certain number of rows.
-   Block downloads for specific user IDs, report IDs, and dashboard IDs.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=securityImplGuide)

#### Note

The values captured by transaction security policies are unique API names, which can be retrieved by performing REST API Describe calls on the object. When creating a ReportEvent policy, make sure that the values you want the conditions to check for are unique API names, not display labels. For example, a “Name of Column” condition checks for values that match the metadata information retrieved from a Describe call on the report, not the column headers displayed on the report. Refer to the [Salesforce Report and Dashboard REST API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_analytics.meta/api_analytics/sforce_analytics_rest_api_getbasic_reportmetadata.htm) for more information.

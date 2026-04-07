---
title: "ReportAnomalyEventStore Policies"
domain: securityImplGuide
topic: reportanomalyeventstore-policies
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:39:22.340Z
estimatedTokens: 213
keywords: [ReportAnomalyEventStore, Policies, Report, anomaly, event, monitor, anomalies, how, users, run, export, reports, Policy, Glance]
---

> Report anomaly event policies monitor anomalies in how users run or export
  reports.

# ReportAnomalyEventStore Policies

Report anomaly event policies monitor anomalies in how users run or export reports.

| Available in both Salesforce Classic (not available in all orgs) and Lightning Experience. |
| --- |
| Available in: Enterprise, Unlimited, and Developer EditionsRequires Salesforce Shield or Salesforce Event Monitoring add-on subscriptions. |


## Policy at a Glance

| Object | Conditions Available in Condition Builder | Actions |
| --- | --- | --- |
| ReportAnomalyEventStore | Report, Score, SourceIp, UserId, Username | Notifications |

## What You Can Do with It

Create a policy that can:

-   Send you an email when Salesforce detects that a user has exported more records than usual from a report on Leads.
-   Generate an in-app notification when Salesforce detects a report anomaly event with a score greater than 90.

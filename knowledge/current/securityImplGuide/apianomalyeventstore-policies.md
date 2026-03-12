---
title: "ApiAnomalyEventStore Policies"
domain: securityImplGuide
topic: apianomalyeventstore-policies
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:44.728Z
estimatedTokens: 214
keywords: [ApiAnomalyEventStore, Policies, API, anomaly, event, monitor, anomalies, how, users, calls, Policy, Glance]
---

# ApiAnomalyEventStore Policies

> API anomaly event policies monitor anomalies in how users make API calls.

# ApiAnomalyEventStore Policies

API anomaly event policies monitor anomalies in how users make API calls.

| Available in both Salesforce Classic (not available in all orgs) and Lightning Experience. |
| --- |
| Available in: Enterprise, Unlimited, and Developer EditionsRequires Salesforce Shield or Salesforce Event Monitoring add-on subscriptions. |


## Policy at a Glance

| Object | Conditions Available in Condition Builder | Actions |
| --- | --- | --- |
| ApiAnomalyEventStore | User, Username, SourceIp, Score, QueriedEntities, Operation, RowsProcessed, UserAgent | Notifications |

## What You Can Do With It

Create a policy that can:

-   Send you an email when Salesforce detects that a user has made more API calls than usual.
-   Generate an in-app notification when Salesforce detects an API anomaly event with a score greater than 0.5.

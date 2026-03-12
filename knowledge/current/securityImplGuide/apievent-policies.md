---
title: "ApiEvent Policies"
domain: securityImplGuide
topic: apievent-policies
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:44.722Z
estimatedTokens: 374
keywords: [ApiEvent, Policies, API, events, monitor, transactions, SOQL, queries, data, exports, Policy, Glance, Considerations]
---

# ApiEvent Policies

> API events monitor API transactions, such as SOQL queries and data exports.

# ApiEvent Policies

API events monitor API transactions, such as SOQL queries and data exports.

| Available in both Salesforce Classic (not available in all orgs) and Lightning Experience. |
| --- |
| Available in: Enterprise, Unlimited, and Developer EditionsRequires Salesforce Shield or Salesforce Event Monitoring add-on subscriptions. |


## Policy at a Glance

| Object | Conditions Available in Condition Builder | Actions | Considerations |
| --- | --- | --- | --- |
| ApiEvent | API Type, API Version, Application, Client, Elapsed Time, Operation, Platform, Queried Entities, Query, Rows Processed, Session Level, Source IP, User Agent, User ID, Username | Block, Notifications | Multi-factor authentication isn’t supported. |

## What You Can Do With It

You can monitor user behaviors taken through the API on a granular level. Create a policy that can:

-   Block access to particular versions of the API from specific platforms
-   Notify you when users run queries that return many rows

## Considerations for ApiEvent Policies

-   The supported SOAP, REST, Bulk API, and Bulk API 2.0 calls are query(), query\_more(), and query\_all(). Transaction Security supports only query(). API calls made from Visualforce (via an Apex controller) or XMLRPC aren’t supported in ApiEvent and ApiEventStream.
-   For Bulk API and Bulk API 2.0 queries, expect blank values for LoginHistoryId, Client, and UserAgent in ApiEvent. These queries are asynchronous and executed by a background job.

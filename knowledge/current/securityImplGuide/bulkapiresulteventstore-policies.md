---
title: "BulkApiResultEventStore Policies"
domain: securityImplGuide
topic: bulkapiresulteventstore-policies
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:44.731Z
estimatedTokens: 129
keywords: [BulkApiResultEventStore, Policies, Bulk, API, Result, Event, detect, user, downloads, results, Policy, Glance]
---

# BulkApiResultEventStore Policies

> Bulk API Result Event policies detect when a user downloads the results of a Bulk API
  request.

# BulkApiResultEventStore Policies

Bulk API Result Event policies detect when a user downloads the results of a Bulk API request.

## Policy at a Glance

| Object | Conditions Available in Condition Builder | Actions |
| --- | --- | --- |
| BulkApiResultEventStore | Query, SessionLevel, SourceIp, UserId, Username | Block, Notifications |

## What You Can Do With It

Create a policy that can:

-   Send you an email when Salesforce detects that a user has attempted to download the results of a Bulk API request

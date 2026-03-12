---
title: "SessionHijackingEventStore Policies"
domain: securityImplGuide
topic: sessionhijackingeventstore-policies
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:44.762Z
estimatedTokens: 267
keywords: [SessionHijackingEventStore, Policies, Session, hijacking, event, monitor, unauthorized, users, gain, ownership, Salesforce, user’s, stolen, identifier, Policy]
---

# SessionHijackingEventStore Policies

> Session hijacking event policies monitor when unauthorized users gain ownership of a Salesforce user’s session with a stolen session identifier.

# SessionHijackingEventStore Policies

Session hijacking event policies monitor when unauthorized users gain ownership of a Salesforce user’s session with a stolen session identifier.

| Available in both Salesforce Classic (not available in all orgs) and Lightning Experience. |
| --- |
| Available in: Enterprise, Unlimited, and Developer EditionsRequires Salesforce Shield or Salesforce Event Monitoring add-on subscriptions. |


## Policy at a Glance

| Object | Conditions Available in Condition Builder | Actions |
| --- | --- | --- |
| SessionHijackingEventStore | CurrentUserAgent, CurrentIp, CurrentPlatform, CurrentScreen, CurrentWindow, PreviousUserAgent, PreviousIp, PreviousPlatform, PreviousScreen, PreviousWindow, Score, SourceIp, UserId, Username | Notifications |

## What You Can Do with It

Create a policy that can:

-   Generate an in-app notification when Salesforce detects a session hijacking attack on your org with a score greater than 10.
-   Send you an email when Salesforce detects a session hijacking attack from a specific IP address.

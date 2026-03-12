---
title: "FileEvent Policies"
domain: securityImplGuide
topic: fileevent-policies
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:44.740Z
estimatedTokens: 258
keywords: [FileEvent, Policies, File, event, detect, file-related, events, user, downloads, containing, sensitive, Policy, Glance]
---

# FileEvent Policies

> File event policies detect file-related events, such as when a user downloads a file
  containing sensitive information.

# FileEvent Policies

File event policies detect file-related events, such as when a user downloads a file containing sensitive information.

| Available in both Salesforce Classic (not available in all orgs) and Lightning Experience. |
| --- |
| Available in: Enterprise, Unlimited, and Developer EditionsRequires Salesforce Shield or Salesforce Event Monitoring add-on subscriptions. |


## Policy at a Glance

| Object | Conditions Available in Condition Builder | Actions |
| --- | --- | --- |
| FileEventStore | Can Download PDF, Content Size, Content Download ID, Content Version ID, Evaluation Time, File Action, File Name, File Source, File Type, Is Latest Version, Policy Outcome, Process Duration, Session Level, Source IP, Transaction Security Policy ID, User ID, Username, Version Number | Block, Notifications |

## What You Can Do with It

Create a policy that can:

-   Notify administrators when a user attempts to preview a specific file.
-   Block downloads for specific user IDs, version IDs, and document IDs.

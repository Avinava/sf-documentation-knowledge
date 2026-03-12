---
title: "CredentialStuffingEventStore Policies"
domain: securityImplGuide
topic: credentialstuffingeventstore-policies
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:44.737Z
estimatedTokens: 290
keywords: [CredentialStuffingEventStore, Policies, Credential, stuffing, event, monitor, user, successfully, logs, Salesforce, identified, attack, refers, large-scale, automated]
---

# CredentialStuffingEventStore Policies

> Credential stuffing event policies monitor when a user successfully logs into Salesforce during an identified credential stuffing attack. Credential stuffing refers to large-scale automated login requests using stolen user credentials.

# CredentialStuffingEventStore Policies

Credential stuffing event policies monitor when a user successfully logs into Salesforce during an identified credential stuffing attack. Credential stuffing refers to large-scale automated login requests using stolen user credentials.

| Available in both Salesforce Classic (not available in all orgs) and Lightning Experience. |
| --- |
| Available in: Enterprise, Unlimited, and Developer EditionsRequires Salesforce Shield or Salesforce Event Monitoring add-on subscriptions. |


## Policy at a Glance

| Object | Conditions Available in Condition Builder | Actions |
| --- | --- | --- |
| CredentialStuffingEventStore | AcceptLanguage, LoginUrl, Score, SourceIp, UserAgent, UserId, Username | Notifications |

## What You Can Do with It

Create a policy that can:

-   Send you an email when Salesforce detects that a user from a specific IP address successfully logged into your org during a credential stuffing attack.
-   Generate an in-app notification when Salesforce detects a login from a specific page, such as login.salesforce.com or MyDomainName.my.salesforce.com, during a credential stuffing attack.

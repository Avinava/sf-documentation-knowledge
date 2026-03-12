---
title: "LoginEvent Policies"
domain: securityImplGuide
topic: loginevent-policies
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:44.748Z
estimatedTokens: 551
keywords: [LoginEvent, Policies, Login, event, track, activity, enforce, requirements, Policy, Glance, How, Compare, Log, Lines, History]
---

# LoginEvent Policies

> Login event policies track login activity and enforce your login
  requirements.

# LoginEvent Policies

Login event policies track login activity and enforce your login requirements.

| Available in both Salesforce Classic (not available in all orgs) and Lightning Experience. |
| --- |
| Available in: Enterprise, Unlimited, and Developer EditionsRequires Salesforce Shield or Salesforce Event Monitoring add-on subscriptions. |


## Policy at a Glance

| Object | Conditions Available in Condition Builder | Actions | Considerations |
| --- | --- | --- | --- |
| LoginEvent | API Type, API Version, Application, Authentication Method Reference, Browser, Country, Login Subtype, Login Type, Login URL, Platform, Session Level, Source IP, TLS Protocol, User ID, User Type, Username | Block, Notifications, Multi-Factor Authentication (for UI logins) | UI logins with username and password, SAML single sign-on logins, and API-based logins (OAuth, REST, SOAP) are captured.Multi-factor authentication isn’t supported for Lightning Login (passwordless login) users or for API-based logins. For API-based logins, the action is upgraded to Block.LoginEvent policies aren’t triggered by invalid login attempts such as incorrect passwords. |

## What You Can Do With It

You can target specific login behaviors that reduce performance or pose a security risk. Create a policy that can:

-   Block users who log in from certain locations
-   Require multi-factor authentication for users logging in from unsupported browsers
-   Monitor logins from specific applications

## How Does LoginEvent Compare to Login Log Lines and Login History?

| Feature | LoginEvent (Login Forensics) | Login Log Lines | Login History |
| --- | --- | --- | --- |
| Standard Object or File | LoginEvent | EventLogFile (Login event type) | LoginHistory |
| Data Duration Until Deleted | 6 months | 30 days | 6 months |
| Access | API | API download, Event Monitoring Analytics app | Setup UI, API |
| Permissions | View Real-Time Event Monitoring Data | View Event Log Files | Manage Users |
| Extensibility | Yes, using the AdditionalInfo field | No | No |
| Availability | Included with Event Monitoring add-on or Real-Time Event Monitoring | Included with Event Monitoring add-on | Included with all orgs |

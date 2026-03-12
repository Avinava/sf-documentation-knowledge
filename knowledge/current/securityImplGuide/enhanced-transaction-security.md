---
title: "Enhanced Transaction Security"
domain: securityImplGuide
topic: enhanced-transaction-security
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:44.719Z
estimatedTokens: 1977
keywords: [Enhanced, Transaction, Security, framework, intercepts, real-time, events, appropriate, actions, monitor, control, user, activity, policy, conditions]
---

# Enhanced Transaction Security

> Enhanced Transaction Security is a framework that intercepts real-time events and
  applies appropriate actions to monitor and control user activity. Each transaction security policy
  has conditions that evaluate events and the real-time actions that are triggered after those
  conditions are met. The actions are Block, Multi-Factor Authentication, and Notifications. Before
  you build your policies, understand the available event types, policy conditions, and common use
  cases. Enhanced Transaction Security is included in Real-Time Event Monitoring.

# Enhanced Transaction Security

Enhanced Transaction Security is a framework that intercepts real-time events and applies appropriate actions to monitor and control user activity. Each transaction security policy has conditions that evaluate events and the real-time actions that are triggered after those conditions are met. The actions are Block, Multi-Factor Authentication, and Notifications. Before you build your policies, understand the available event types, policy conditions, and common use cases. Enhanced Transaction Security is included in Real-Time Event Monitoring.

| Available in both Salesforce Classic (not available in all orgs) and Lightning Experience. |
| --- |
| Available in: Enterprise, Unlimited, and Developer EditionsRequires Salesforce Shield or Salesforce Event Monitoring add-on subscriptions. |


## Condition Builder vs. Apex

Condition Builder is a Setup feature that allows you to build policies with clicks, not code. Policies monitor events, which are categories of user activity built on objects in the SOAP, REST, and Bulk APIs. When you build your policy using Condition Builder, you choose which fields on these objects you want to monitor for customer activity. Because your policy’s actions are conditional to the fields that users interact with, these fields are called conditions. When you create a policy, you choose the conditions you want your policy to monitor and the action the policy takes when the conditions are met. The conditions available in Condition Builder are a subset of all the event objects fields and vary based on the objects.

If you create an Apex-based policy, you can use any of the event object’s fields. For example, Records isn’t available as a Condition Builder condition for the ReportEvent event object. But you can use the ReportEvent.Records field in an Apex class that implements the TxnSecurity.EventCondition interface. Visit the API Object Reference to view event object fields.

## Conditions at a Glance

| Event Object | Conditions Available in Condition Builder | Actions |
| --- | --- | --- |
| ApiEvent | API Type, API Version, Application, Client, Elapsed Time, Operation, Platform, Queried Entities, Query, Rows Processed, Session Level, Source IP, User Agent, User ID, Username | Block, Notifications |
| ApiAnomalyEventStore | User, Username, SourceIp, Score, QueriedEntities, Operation, RowsProcessed, UserAgent | Notifications |
| BulkApiResultEventStore | Query, SessionLevel, SourceIp, UserId, Username | Block, Notifications |
| CredentialStuffingEventStore | AcceptLanguage, LoginUrl, Score, SourceIp, UserAgent, UserId, Username | Notifications |
| FileEventStore | Can Download PDF, Content Size, Content Download ID, Content Version ID, Evaluation Time, File Action, File Name, File Source, File Type, Is Latest Version, Policy Outcome, Process Duration, Session Level, Source IP, Transaction Security Policy ID, User ID, Username, Version Number | Block, Notifications |
| ListViewEvent | Application Name, Developer Name, Event Source, List View ID, Name, Name of Columns, Number of Columns, Order By, Owner ID, Queried Entities, Rows Processed, Scope, Session Level, Source IP, User ID, Username | Block, Notifications, Multi-Factor Authentication (for UI logins)Multi-factor authentication isn’t supported for list views in Lightning pages, so the action is upgraded to Block. |
| LoginEvent | API Type, API Version, Application, Authentication Method Reference, Browser, Country, Login Subtype, Login Type, Login URL, Platform, Session Level, Source IP, TLS Protocol, User ID, User Type, Username | Block, Notifications, Multi-Factor Authentication (for UI logins) |
| PermissionSetEventStore | Event Source, Operation, Permission Type, User Count, User ID, Username | Block, Notifications |
| PermissionSetEventStore | Event Source, Operation, Permission Type, User Count, User ID, Username | Block, Notifications |
| ReportAnomalyEventStore | Report, Score, SourceIp, UserId, Username | Notifications |
| ReportEvent | Dashboard ID, Dashboard Name, Description, Event Source, Format, Is Scheduled, Name, Name of Columns, Number of Columns, Operation, Owner ID, Queried Entities, Report ID, Rows Processed, Scope, Session Level, Source IP, User ID, Username | Block, Notifications, Multi-Factor Authentication (for UI logins) |
| SessionHijackingEventStore | CurrentUserAgent, CurrentIp, CurrentPlatform, CurrentScreen, CurrentWindow, PreviousUserAgent, PreviousIp, PreviousPlatform, PreviousScreen, PreviousWindow, Score, SourceIp, UserId, Username | Notifications |

-   **[Types of Enhanced Transaction Security Policies](atlas.en-us.securityImplGuide.meta/securityImplGuide/enhanced_transaction_security_policy_list.htm)**
    You can create transaction security policies on these Real-Time Event Monitoring events.
-   **[Enhanced Transaction Security Actions and Notifications](atlas.en-us.securityImplGuide.meta/securityImplGuide/enhanced_transaction_security_actions_notifs.htm)**
    When a real-time event triggers a transaction security policy, you can block a user or enforce multi-factor authentication (MFA). You can also optionally receive in-app or email notifications of the event.
-   **[Build a Transaction Security Policy with Condition Builder](atlas.en-us.securityImplGuide.meta/securityImplGuide/enhanced_transaction_security_condition_builder.htm)**
    Create a transaction security policy without writing a line of code. Condition Builder, available in Real-Time Event Monitoring, gives you a declarative way to create customized security policies to protect your data.
-   **[Create an Enhanced Transaction Security Policy That Uses Apex](atlas.en-us.securityImplGuide.meta/securityImplGuide/enhanced_transaction_security_apex.htm)**
    Use Setup to create an enhanced transaction security policy that uses Apex. You can specify an existing Apex class or create an empty class that you then code. The Apex class must implement the TxnSecurity.EventCondition interface.
-   **[Best Practices for Writing and Maintaining Enhanced Transaction Security Policies](atlas.en-us.securityImplGuide.meta/securityImplGuide/enhanced_transaction_security_best_practices.htm)**
    Transaction security policy management isn’t always easy, especially when you have many policies. To make sure that your policies remain functional, write and maintain them using these best practices. Well-structured and tested policies keep your employees and customers connected, productive, and secure.
-   **[Enhanced Transaction Security Metering](atlas.en-us.securityImplGuide.meta/securityImplGuide/enhanced_transaction_security_metering.htm)**
    Transaction Security uses resource metering to help prevent malicious or unintentional monopolization of shared, multi-tenant platform resources. Metering prevents transaction security policy evaluations from using too many resources and adversely affecting your Salesforce org.
-   **[Exempt Users from Transaction Security Policies](atlas.en-us.securityImplGuide.meta/securityImplGuide/enhanced_transaction_security_exempt.htm)**
    If you have transaction security policies that work well for most users, but not all, you can assign specific users the Exempt from Transaction Security user permission. Assign this permission only when transaction security policy metering regularly blocks business-critical actions. For example, assign it to users who make bulk or automated bulk API calls. You can assign this user permission to integration users or admins responsible for transaction security policies who you don't want to get blocked.
-   **[Test and Troubleshoot Your New Enhanced Policy](atlas.en-us.securityImplGuide.meta/securityImplGuide/enh_txn_sec_migration_troubleshoot.htm)**
    If your enhanced transaction security policy isn’t behaving as you expect, check out these testing and troubleshooting tips to diagnose the problem.

## Related Topics

- Types of Enhanced Transaction Security Policies (atlas.en-us.securityImplGuide.meta/securityImplGuide/enhanced_transaction_security_policy_list.htm)
- Enhanced Transaction Security Actions and Notifications (atlas.en-us.securityImplGuide.meta/securityImplGuide/enhanced_transaction_security_actions_notifs.htm)
- Build a Transaction Security Policy with Condition Builder (atlas.en-us.securityImplGuide.meta/securityImplGuide/enhanced_transaction_security_condition_builder.htm)
- Create an Enhanced Transaction Security Policy That Uses Apex (atlas.en-us.securityImplGuide.meta/securityImplGuide/enhanced_transaction_security_apex.htm)
- Best Practices for Writing and Maintaining Enhanced Transaction Security Policies (atlas.en-us.securityImplGuide.meta/securityImplGuide/enhanced_transaction_security_best_practices.htm)
- Enhanced Transaction Security Metering (atlas.en-us.securityImplGuide.meta/securityImplGuide/enhanced_transaction_security_metering.htm)
- Exempt Users from Transaction Security Policies (atlas.en-us.securityImplGuide.meta/securityImplGuide/enhanced_transaction_security_exempt.htm)
- Test and Troubleshoot Your New Enhanced Policy (atlas.en-us.securityImplGuide.meta/securityImplGuide/enh_txn_sec_migration_troubleshoot.htm)

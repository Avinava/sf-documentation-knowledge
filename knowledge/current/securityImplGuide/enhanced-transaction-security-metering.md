---
title: "Enhanced
  Transaction Security Metering"
domain: securityImplGuide
topic: enhanced-transaction-security-metering
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:44.695Z
estimatedTokens: 534
keywords: [Enhanced, Transaction, Security, Metering, uses, resource, help, prevent, malicious, unintentional, monopolization, shared, multi-tenant, platform, resources]
---

# Enhanced
  Transaction Security Metering

> Transaction Security uses resource metering to help
   prevent malicious or unintentional monopolization of shared, multi-tenant platform resources.
   Metering prevents transaction security policy evaluations from using too many resources and
   adversely affecting your Salesforce org.

# Enhanced Transaction Security Metering

Transaction Security uses resource metering to help prevent malicious or unintentional monopolization of shared, multi-tenant platform resources. Metering prevents transaction security policy evaluations from using too many resources and adversely affecting your Salesforce org.

| Available in both Salesforce Classic (not available in all orgs) and Lightning Experience. |
| --- |
| Available in: Enterprise, Unlimited, and Developer EditionsRequires Salesforce Shield or Salesforce Event Monitoring add-on subscriptions. |


Salesforce meters transaction security policies for uniform resource use. If a policy request can’t be handled within three seconds, a fail-close behavior occurs, and access is blocked. Transaction Security implements metering by limiting policy execution. If the elapsed execution time exceeds three seconds, the user’s request is denied.

Here’s an example of how metering works. Let’s say your org has four LoginEvent policies set up with a notification action. A user triggers every policy. The first three execute within three seconds, but the final policy exceeds the three-second limit. Transaction Security stops processing the policies and fails closed, blocking the user’s login request. Because the policy evaluations didn’t finish, a notification isn’t sent.

## Bypass Metering-Related Blocking

Legitimate long-running processes, such as bulk API calls, can cause transaction security policy requests to take more than the allotted time. In these cases, metering initiates and blocks the user’s action.

If you encounter this situation regularly, you can prevent metering from blocking user actions with the bypassMeteringBlock field on the EventSetting metadata type. If all your transaction security policies specify no action, metering doesn’t block user operations. If metering occurs, policy notifications aren’t sent. Policies with block actions still block when triggered.

#### See Also

-   [*Metadata API Developer Guide*: EventSettings](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_eventsettings.htm)

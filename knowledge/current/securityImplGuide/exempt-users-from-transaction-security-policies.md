---
title: "Exempt Users from Transaction Security Policies"
domain: securityImplGuide
topic: exempt-users-from-transaction-security-policies
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:44.691Z
estimatedTokens: 456
keywords: [Exempt, Users, Transaction, Security, Policies, work, well, assign, specific, user, permission, policy, metering, regularly, blocks]
---

# Exempt Users from Transaction Security Policies

> If you have transaction security policies that work well for most users, but not all,
    you can assign specific users the Exempt from Transaction Security user permission. Assign this
    permission only when transaction security policy metering regularly blocks business-critical
    actions. For example, assign it to users who make bulk or automated bulk API calls. You can
    assign this user permission to integration users or admins responsible for transaction security
    policies who you don't want to get blocked.

# Exempt Users from Transaction Security Policies

If you have transaction security policies that work well for most users, but not all, you can assign specific users the Exempt from Transaction Security user permission. Assign this permission only when transaction security policy metering regularly blocks business-critical actions. For example, assign it to users who make bulk or automated bulk API calls. You can assign this user permission to integration users or admins responsible for transaction security policies who you don't want to get blocked.

| Available in both Salesforce Classic (not available in all orgs) and Lightning Experience. |
| --- |
| Available in: Enterprise, Unlimited, and Developer EditionsRequires Salesforce Shield or Salesforce Event Monitoring add-on subscriptions. |


![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=securityImplGuide)

#### Note

The Exempt from Transaction Security user permission doesn’t apply to the LoginEvent type. Transaction Security policies can’t check a user permission until after the user logs in.

1.  Do one of the following:
    1.  From Setup, in the Quick Find box, enter Permission Sets, and then select **Permission Sets**.
    2.  From Setup, in the Quick Find box, enter Profiles, and then select **Profiles**.
2.  Select a permission set or profile.
3.  Depending on whether you’re using permission sets or profiles, do one of the following:
    1.  In permission sets or the enhanced profile user interface, select a permission. In the Find Settings dialog box, enter Exempt from Transaction Security. Click **Edit**, select the option, and click **Save**.
    2.  In the original profile user interface, select a profile name, and then click **Edit**. Select **Exempt from Transaction Security**. Click **Save**.

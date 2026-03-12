---
title: "Log In to Subscriber Orgs"
domain: pkg2-dev
topic: log-in-to-subscriber-orgs
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:26.202Z
estimatedTokens: 868
keywords: [Log, Subscriber, Orgs, granted, login, access, org, troubleshoot, issue, Multi-Factor, Authentication, Best, Practices, Logging]
---

# Log In to Subscriber Orgs

> After your subscriber has granted you login access, you can log in to the subscriber
    org to troubleshoot the issue.

# Log In to Subscriber Orgs

After your subscriber has granted you login access, you can log in to the subscriber org to troubleshoot the issue.

| Available in: Enterprise, Performance, and Unlimited Editions |
| --- |


| User Permissions Needed |
| --- |
| To log in to subscriber orgs: | Log in to Subscriber Org |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg2_dev)

#### Note

You can only log in to orgs with a Salesforce Platform or full Salesforce license. You can’t log in to subscriber orgs on Government Cloud instances. It's also not possible to log into a scratch org using the log in to subscriber org feature.

## Multi-Factor Authentication Required to Log In to a Subscriber Org

Starting in Spring ’22, multi-factor authentication (MFA) is required when logging into the License Management Org (LMO). MFA is required only for LMO users who require access to the Subscriber Support Console. This requirement provides subscribers an extra layer of security by verifying the identity of the user accessing their org. You also have more control over which users log in to a subscriber org.

Determine which users require access to the Subscriber Support Console, and then [set up multi-factor authentication (MFA)](https://help.salesforce.com/s/articleView?id=xcloud.mfa_direct_login_user_perm.htm&type=5&language=en_US "HTML (New Window)") for those users.

## Log In to a Subscriber Org

After you’ve logged in to the LMO using multi-factor authentication (MFA), and your subscriber has granted you login access, you’re ready to log in.

1.  In the License Management App (LMA), click the **Subscribers** tab.
2.  To find a subscriber org, enter a subscriber name or org ID in the search box, and click **Search**.
3.  Click the name of the subscriber org.
4.  On the Org Details page, click **Login** next to a user’s name. You have the same permissions as the user you logged in as.
5.  When you’re finished troubleshooting, log out of the subscriber org.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg2_dev)

#### Note

Some subscribers require MFA in addition to the MFA required for the LMO. Ask your subscriber if their org requires MFA to log in. If so, your login attempt sends an MFA notification to your subscriber, and your login is blocked until your subscriber responds to the notification. To ensure that your subscriber is available to respond to the MFA notification, consider coordinating a specific login time.

## Best Practices for Logging In

-   Create an audit trial that indicates when and why a subscriber org login has occurred. You can create an audit trail by logging a case in your LMO before each subscriber org login.
-   When you access a subscriber org, you’re logged out of your LMO. To prevent your session from being automatically logged out of your LMO when you log in to a subscriber org, use the org’s My Domain login URL.
-   Allow only trusted support and engineering personnel to log in to a subscriber’s org. Because this feature can include full read/write access to customer data and configurations, it’s vital to your reputation to preserve their security.
-   Control who has login access by giving the Log in to Subscriber Org user permission to specific support personnel via a profile or permission set. See [Assign Permissions to the Subscriber Org Console](atlas.en-us.pkg2_dev.meta/pkg2_dev/lma_subscriber_org_permissions.htm#).

## Related Topics

- Assign Permissions to the Subscriber Org
            Console (atlas.en-us.pkg2_dev.meta/pkg2_dev/lma_subscriber_org_permissions.htm)

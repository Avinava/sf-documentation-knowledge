---
title: "Investigate Credential Stuffing"
domain: securityImplGuide
topic: investigate-credential-stuffing
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:44.912Z
estimatedTokens: 889
keywords: [Investigate, Credential, Stuffing, tips, investigating, attack]
---

# Investigate Credential Stuffing

> Here are some tips for investigating a credential stuffing attack.

# Investigate Credential Stuffing

Here are some tips for investigating a credential stuffing attack.

| Available in both Salesforce Classic (not available in all orgs) and Lightning Experience. |
| --- |
| Available in: Enterprise, Unlimited, and Developer EditionsRequires Salesforce Shield or Salesforce Event Monitoring add-on subscriptions. |


Start by querying these Real-Time Event Monitoring events that provide detailed information about the attack. In particular:

-   CredentialStuffingEvent and its storage equivalent CredentialStuffingEventStore track when a user successfully logs into Salesforce during an identified credential stuffing attack.

    ![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=securityImplGuide)

    #### Important

    If the CredentialStuffingEvent object contains a record, an attack occurred in the past and *Salesforce security has already taken care of the security issue*. You don’t do anything other than investigate the attack for your own purposes.

-   LoginEventStream and its storage equivalent LoginEvent track all login activity in your Salesforce org.

For example, say that your org receives a CredentialStuffingEvent. The first thing you do is look at relevant fields of the event to get basic information about the attack, such as:

-   UserId: The user’s unique ID. Use this ID to query LoginEvent for more login information.
-   EventDate: When this attack occurred.
-   Summary: A text summary of the event.

See the [API documentation](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/sforce_api_objects_credentialstuffingevent.htm) for the full list of fields.

This sample SOQL query returns these field values.

```

```

You can use this type of query to identify the users in your org that were affected by the credential stuffing attack. These users reused their org password in other websites or their password follows a common pattern and isn’t strong enough. Educate your users on how they can create and manage strong passwords to protect your org.

Also consider improving your security with password protection. You can set password history, length, and complexity requirements. You can also specify what to do when a user forgets the password. Salesforce requires the use of multi-factor authentication (MFA) for all logins to the user interface — make sure MFA is enabled for all your users. Finally, investigate enabling Lightning Login for password-free logins.

#### See Also

-   [*Salesforce Help*: Enable Lightning Login for Password-Free Logins](https://help.salesforce.com/articleView?id=security_ll_enable.htm&language=en_US "Salesforce Help: Enable Lightning Login for Password-Free Logins - HTML (New Window)")

-   [*Trailhead*: Educate Your Users to Help Protect Your Org](https://trailhead.salesforce.com/en/content/learn/modules/security_basics/security_basics_users "Trailhead: Educate Your Users to Help Protect Your Org - HTML (New Window)")

-   [*Salesforce Security Guide*: Set Password Policies](https://developer.salesforce.com/docs/atlas.en-us.260.0.securityImplGuide.meta/securityImplGuide/admin_password.htm "Salesforce Security Guide: Set Password Policies - HTML (New Window)")

-   [*Platform Events Developer Guide*: CredentialStuffingEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/sforce_api_objects_credentialstuffingevent.htm "Platform Events Developer Guide: CredentialStuffingEvent - HTML (New Window)")

## Code Examples

```
SELECT UserId, EventDate, Summary FROM CredentialStuffingEventStore
```

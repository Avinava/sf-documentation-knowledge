---
title: "Credential Stuffing"
domain: securityImplGuide
topic: credential-stuffing
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:44.908Z
estimatedTokens: 507
keywords: [Credential, Stuffing, cyber, attack, uses, stolen, account, credentials, It’s, known, “password, spraying”, “credential, spills”, Attackers]
---

# Credential Stuffing

> Credential stuffing is a type of cyber attack that uses stolen account credentials. It’s
    also known as “password spraying” or “credential spills”. Attackers obtain large numbers of
    usernames and passwords through data breaches or other types of cyber attacks. They then use
    these credentials to gain unauthorized access to user accounts through large-scale automated
    login requests against a web application such as Salesforce.

# Credential Stuffing

Credential stuffing is a type of cyber attack that uses stolen account credentials. It’s also known as “password spraying” or “credential spills”. Attackers obtain large numbers of usernames and passwords through data breaches or other types of cyber attacks. They then use these credentials to gain unauthorized access to user accounts through large-scale automated login requests against a web application such as Salesforce.

| Available in both Salesforce Classic (not available in all orgs) and Lightning Experience. |
| --- |
| Available in: Enterprise, Unlimited, and Developer EditionsRequires Salesforce Shield or Salesforce Event Monitoring add-on subscriptions. |


Salesforce identifies a credential stuffing attack using a two-step process. First, it detects if a credential stuffing attack is taking place by analyzing the login traffic. In particular, we look for attackers who stuff multiple credentials in the same end-point or stuff the same user accounts by enumerating multiple passwords. Next we check the ratio of successful versus failed login traffic volume. If the volume exceeds a certain threshold, we use more fingerprint details to identify the affected user’s profile.

When we detect a successful login from an endpoint that exhibits credential stuffing behavior, we pose an identity challenge to the affected user. If the user successfully completes that challenge, they are required to change their password before accessing Salesforce again.

All Salesforce customers get this threat mitigation. However, Event Monitoring customers can get granular visibility into these attacks using the CredentialStuffingEvent object. These customers can then collect useful information related to these events in real time and send notifications to other users in Salesforce.

-   **[Investigate Credential Stuffing](atlas.en-us.securityImplGuide.meta/securityImplGuide/real_time_em_threat_credstuff_review.htm)**
    Here are some tips for investigating a credential stuffing attack.

## Related Topics

- Investigate Credential Stuffing (atlas.en-us.securityImplGuide.meta/securityImplGuide/real_time_em_threat_credstuff_review.htm)

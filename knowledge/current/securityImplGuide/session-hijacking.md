---
title: "Session Hijacking"
domain: securityImplGuide
topic: session-hijacking
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:44.995Z
estimatedTokens: 941
keywords: [Session, Hijacking, customer-focused, attack, attackers, try, steal, client’s, access, web, application, case, Salesforce, client, successfully]
---

# Session Hijacking

> Session Hijacking is a customer-focused attack where attackers try to steal information
    from using a client’s access to a web application. In our case, this application is Salesforce.
    When a client successfully authenticates with Salesforce, they receive a session token. The
    attacker tries to hijack the client’s session by obtaining their session token.

# Session Hijacking

Session Hijacking is a customer-focused attack where attackers try to steal information from using a client’s access to a web application. In our case, this application is Salesforce. When a client successfully authenticates with Salesforce, they receive a session token. The attacker tries to hijack the client’s session by obtaining their session token.

| Available in both Salesforce Classic (not available in all orgs) and Lightning Experience. |
| --- |
| Available in: Enterprise, Unlimited, and Developer EditionsRequires Salesforce Shield or Salesforce Event Monitoring add-on subscriptions. |


The Real-Time Event Monitoring object SessionHijackingEvent addresses the “Man In The Browser” attack (MiTB), a type of session hijacking attack. In a MiTB attack, the attacker compromises the client’s web application by first planting a virus like a Trojan proxy. The virus then embeds itself in the client’s browser. And when the client accesses a web application such as Salesforce, the virus manipulates pages, collects sensitive information shared between the client and Salesforce, and steals information. These types of attacks are difficult for the client to detect.

Fortunately, Salesforce is ahead in this race with the bad guys and has mechanisms in place to detect MiTB attacks. When detected, Salesforce kills the session and any child sessions, logs out the user, and asks for multi-factor authentication. With this action, Salesforce helps prevent the attacker from performing any subsequent malicious activity with that user’s session. This autonomous enforcement makes session hijacking costly for attackers and results in safer sessions for Salesforce customers.

All Salesforce customers get this threat mitigation. Event monitoring customers get granular visibility into these attacks. These customers can collect useful information about the attacks in real time and send notifications to other users in Salesforce.

## How Salesforce Detects Session Hijacking

To detect session hijacking attempts, Salesforce first uses browser fingerprinting to identify the device that a user has logged in from. If within a session, Salesforce sees a significant deviation in the browser fingerprint, there’s probably unauthorized activity from a different device using the stolen legitimate session ID. Salesforce computes the session hijacking risk score for every pair of intra-session browser fingerprints. It then compares the score to an empirically determined threshold to detect anomalous user sessions in real time. If Salesforce detects an anomaly, it generates a SessionHijackingEvent.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=securityImplGuide)

#### Note

While Salesforce uses browser fingerprinting to identify a device, it doesn’t use it to track a user. Salesforce uses the data only to detect suspicious behavior.

-   **[Features of the Browser Fingerprint](atlas.en-us.securityImplGuide.meta/securityImplGuide/real_time_em_threat_session_features.htm)**
    A browser fingerprint is a collection of features that together identify a device. Salesforce uses these features to build a model of the user’s original browser fingerprint when they logged in. Salesforce uses this model to detect whether a user’s session was hijacked.
-   **[Investigate Session Hijacking](atlas.en-us.securityImplGuide.meta/securityImplGuide/real_time_em_threat_session_review.htm)**
    Here are some tips for investigating a session hijacking attack.

#### See Also

-   [*Open Web Application Security Project*: Session Hijacking Attack](https://owasp.org/www-community/attacks/Session_hijacking_attack "Open Web Application Security Project: Session Hijacking Attack - HTML (New Window)")

## Related Topics

- Features of the Browser Fingerprint (atlas.en-us.securityImplGuide.meta/securityImplGuide/real_time_em_threat_session_features.htm)
- Investigate Session Hijacking (atlas.en-us.securityImplGuide.meta/securityImplGuide/real_time_em_threat_session_review.htm)

---
title: "Monitor Login History"
domain: securityImplGuide
topic: monitor-login-history
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:45.263Z
estimatedTokens: 1034
keywords: [Monitor, Login, History, admin, attempts, log, Salesforce, Experience, Cloud, sites, records, user, logins, past, months]
---

# Monitor Login History

> As an admin, you can monitor all attempts to log in to Salesforce and to your
    Experience Cloud sites. The Login History page shows up to 20,000 records of user logins for the
    past 6 months. To see more records, download the information to a CSV or GZIP file.

# Monitor Login History

As an admin, you can monitor all attempts to log in to Salesforce and to your Experience Cloud sites. The Login History page shows up to 20,000 records of user logins for the past 6 months. To see more records, download the information to a CSV or GZIP file.

| Available in: Salesforce Classic (not available in all orgs) and Lightning Experience |
| --- |
| Available in: Contact Manager, Group, Professional, Enterprise, Performance, Unlimited, and Developer Editions |


| User Permissions Needed |
| --- |
| To monitor logins: | Monitor Login HistoryORManage Users |

Know who logged in, at what time, and from where. To view this information, go to the Login History in Setup.

-   Authentication Method References. Monitor how your OpenID providers authenticate users that log in to your org through OpenID Connect. For example, see which users log in with multi-factor authentication (MFA).

    To show you how your OpenID provider is authenticating users, Salesforce pulls the authentication method from JSON strings in the OpenID Connect token returned by your provider. Work with your provider to define the values used in the JSON strings. To get started, you can see the values defined by the [Internet Engineering Task Force](https://tools.ietf.org/html/rfc8176#page-5 "HTML (New Window)"). These values aren't necessarily supported by your OpenID provider. For more information on the Authentication Method References claim, see the OpenID Connect Core 1.0 standards from the [OpenID Foundation](https://openid.net/specs/openid-connect-core-1_0.html "HTML (New Window)").

-   HTTP Login Method–View the HTTP method used for the session login: POST, GET, or Unknown.
-   SAML Single Sign-On (SSO)–If your org uses SAML SSO identity provider certificates, view SAML SSO history.
-   My Domain–You can see when users are logging in with a My Domain URL, which is displayed in the **Login URL** column.
-   License Manager Users–Names in the format 033\*\*\*\*\*\*\*\*\*2@00d2\*\*\*\*\*\*\*\*db indicate internal users who are associated with the License Management App (LMA). This app manages the number of licenses used by a subscriber org. These internal users can appear in the License Management org (LMO) and in subscriber orgs that have an AppExchange package managed by the LMA.
-   IP Tracking—The Login History provides two ways to track IP addresses.
    -   The Source IP column stores the client IP address of the request that first reaches Salesforce during a login. For example, if the client redirects to a client proxy, then to a Salesforce proxy, and finally to the Salesforce app, the Source IP column stores the IP address of the client proxy.
    -   The Forwarded for IP column stores the value that the client passed in the X-Forwarded-For header. This header is sometimes used to store IP addresses when the client redirects through one or more proxies. In that case, you can use this column to see the client’s origin IP address. For example, if the client redirects to a client proxy, then to a Salesforce proxy, and then to the Salesforce app, the Forwarded for IP column can store all four IP addresses—the client (origin) IP, both proxy IPs, and the Salesforce app IP.

        The maximum length is 256 characters. Longer values are truncated. This column doesn’t get populated for OAuth and single sign-on logins.

-   Logins via connected apps–View the login subtype to see logins for connected apps that use these OAuth 2.0 flows.

    -   Client credentials flows
    -   User-agent flows, including hybrid user-agent and user-agent with ID token flows
    -   Username-password flows
    -   Web-server flows, including the hybrid web-server flow

    ![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=securityImplGuide)

    #### Important

    For security, we recommend [blocking user-agent and username-password flows](https://help.salesforce.com/s/articleView?id=sf.remoteaccess_disable_username_password_flow.htm&language=en_US).

-   Password resets—View the login subtype to see when a user resets their password.

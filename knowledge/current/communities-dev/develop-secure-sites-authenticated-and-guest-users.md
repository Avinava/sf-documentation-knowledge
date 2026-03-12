---
title: "Develop Secure Sites: Authenticated and Guest Users"
domain: communities-dev
topic: develop-secure-sites-authenticated-and-guest-users
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:23.469Z
estimatedTokens: 582
keywords: [Develop, Secure, Sites, Authenticated, Guest, Users, implementing, Experience, Cloud, site, accessible, external, unauthenticated, keep, security]
---

# Develop Secure Sites: Authenticated and Guest Users

> When implementing an Experience Cloud site accessible by external and unauthenticated
    guest users, keep these security considerations in mind. External users have login privileges to
    your Experience Cloud site, but they can’t access your internal Salesforce org. A guest user is
    anyone on the internet who can visit the publicly accessible pages and components of your
    Experience Cloud site.

# Develop Secure Sites: Authenticated and Guest Users

When implementing an Experience Cloud site accessible by external and unauthenticated guest users, keep these security considerations in mind. External users have login privileges to your Experience Cloud site, but they can’t access your internal Salesforce org. A guest user is anyone on the internet who can visit the publicly accessible pages and components of your Experience Cloud site.

-   **[Limit Declarative Access](atlas.en-us.communities_dev.meta/communities_dev/communities_dev_security_guest_users_declarative_access.htm)**
    Granting permission to view an object allows external users to view that object using standard controllers. Standard controllers are available in Experience Builder sites and Salesforce Tabs + Visualforce sites that have Lightning features enabled. These controllers grant access based solely on the platform declarative permissions.
-   **[Determine a Security Model](atlas.en-us.communities_dev.meta/communities_dev/communities_dev_security_guest_users_choosing_model.htm)**
    For every use case, determine whether to implement a custom access control model or to rely on the declarative platform access control model. We recommend using the platform declarative access control model when possible. However, sometimes your requirements call for a custom access control model.
-   **[Limit Access to Apex Classes](atlas.en-us.communities_dev.meta/communities_dev/communities_dev_security_guest_users_apex_access.htm)**
    Allow guest and external users access to only those classes that they must call.
-   **[Flow Security](atlas.en-us.communities_dev.meta/communities_dev/communities_dev_security_guest_users_flows.htm)**
    If guest or external users must run flows, override the flow permission to grant access only to specific external user profiles, permission sets, or site guest user profiles, rather than allowing users to run all flows. Avoid running flows in system context when possible, and restrict access to subflows. Otherwise, ensure that you implement procedural access controls for those flows and subflows.
-   **[SOQL Injection](atlas.en-us.communities_dev.meta/communities_dev/communities_dev_security_guest_users_SOQL_injection.htm)**
    Sanitize user-controlled data passed into dynamic SOQL queries.

## Related Topics

- Limit Declarative Access (atlas.en-us.communities_dev.meta/communities_dev/communities_dev_security_guest_users_declarative_access.htm)
- Determine a Security Model (atlas.en-us.communities_dev.meta/communities_dev/communities_dev_security_guest_users_choosing_model.htm)
- Limit Access to Apex Classes (atlas.en-us.communities_dev.meta/communities_dev/communities_dev_security_guest_users_apex_access.htm)
- Flow Security (atlas.en-us.communities_dev.meta/communities_dev/communities_dev_security_guest_users_flows.htm)
- SOQL Injection (atlas.en-us.communities_dev.meta/communities_dev/communities_dev_security_guest_users_SOQL_injection.htm)

---
title: "External Organization-Wide Defaults Overview"
domain: securityImplGuide
topic: external-organization-wide-defaults-overview
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:45.112Z
estimatedTokens: 702
keywords: [External, Organization-Wide, Defaults, provide, separate, internal, users, help, better, secure, data]
---

# External Organization-Wide Defaults Overview

> External organization-wide defaults provide separate organization-wide defaults for
        internal and external users to help you better secure your data.

# External Organization-Wide Defaults Overview

External organization-wide defaults provide separate organization-wide defaults for internal and external users to help you better secure your data.

| Available in: both Salesforce Classic (not available in all orgs) and Lightning Experience |
| --- |
| Available in: Professional, Enterprise, Performance, Unlimited, and Developer Editions |


By setting configuring separate levels of default record access for your internal and external users, you have more control over data access. External-organization-wide defaults simplify your sharing rules configuration and improve recalculation performance. These settings also speed up performance for reports, list views, searches, and API queries.

For example, you want all your internal users to have read access to all account records, but you want to limit access for external users to certain groups and records. To configure more restrictive access for external users, set the default internal access to Public Read Only and the default external access to Private. You can later open up record access for external users using other features.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=securityImplGuide)

#### Note

The external access level for an object can’t be more permissive than the internal access level.

You can set external organization-wide defaults for these objects. Your org might have other objects whose external organization-wide defaults can be modified.

-   Account
-   Asset
-   Case
-   Campaign
-   Contact
-   Individual
-   Lead
-   Opportunity
-   Order
-   User
-   Custom Objects

External organization-wide defaults aren’t available for some objects, but you can achieve the same behavior with sharing rules. Set the default access to Private and create a sharing rule to share records with all internal users.

External users include:

-   Authenticated website users
-   Chatter external users
-   Experience Cloud site users
-   Customer Portal users
-   Customer Community users
-   High-volume Experience Cloud site users
-   Partner users
-   Service Cloud Portal users

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=securityImplGuide)

#### Note

Chatter external users have access to only the User object.

Guest users aren't considered external users. Guest users’ org-wide defaults are set to Private for all objects, and this access level can’t be changed.

Learn more about external org-wide default settings in this video.

<!-- -->

-   **[Set Your External Organization-Wide Sharing Defaults](atlas.en-us.securityImplGuide.meta/securityImplGuide/security_owd_external_setting.htm)**
    External organization-wide defaults enable you to set a different default access level for external users.

## Related Topics

- Set Your External Organization-Wide Sharing Defaults (atlas.en-us.securityImplGuide.meta/securityImplGuide/security_owd_external_setting.htm)

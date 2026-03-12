---
title: "Organization-Wide Sharing Defaults"
domain: securityImplGuide
topic: organization-wide-sharing-defaults
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:45.165Z
estimatedTokens: 730
keywords: [Organization-Wide, Sharing, Defaults, Define, access, users, records, they, don't, own, settings, separately, custom, objects, standard]
---

# Organization-Wide Sharing Defaults

> Define the default access that users have to records they
                        don't own with organization-wide sharing settings. Organization-wide sharing
                        settings can be set separately for custom objects and many standard objects.
                        You can set different levels of access for internal and external
                users.

# Organization-Wide Sharing Defaults

Define the default access that users have to records they don't own with organization-wide sharing settings. Organization-wide sharing settings can be set separately for custom objects and many standard objects. You can set different levels of access for internal and external users.

| Available in: both Salesforce Classic (not available in all orgs) and Lightning Experience |
| --- |
| Available in: Professional, Enterprise, Performance, Unlimited, Developer, and Database.com Editions. |


Watch how you can restrict access to records owned by other users.

<!-- -->

For most objects, organization-wide sharing settings can be set to Private, Public Read Only, or Public Read/Write. When the organization-wide sharing setting for an object is Private or Public Read Only, an admin can grant users additional access to records by configuring other record access features, like the role hierarchy or sharing rules. However, other record access features can only be used to grant additional access—they can’t be used to restrict access to records beyond what was originally specified with the organization-wide sharing defaults.

For information on designing your sharing setup to improve performance and speed up sharing changes, see the [Designing Record Access for Enterprise Scale](https://developer.salesforce.com/docs/atlas.en-us.260.0.draes.meta/draes/draes_preface.htm) guide.

## Example

For example, to allow for easier collaboration, you want all your internal users to be able to see (but not edit) all accounts and opportunities regardless of their owner. You set the default internal access level to Public Read Only for both accounts and opportunities. For leads, you want a more restricted access setting so that there's no potential for internal competition. You set the access level for leads to Private. That way, only the record owner, users above the owner in the role hierarchy, Salesforce admins, and users who have access via sharing can access it.

For your default external access, you only want some external users, such as Partner users, to have access to accounts and orders they don't own, and only to certain records. You set the default access level to Private for both accounts and orders. You then open up access as needed using sharing rules.

-   **[Set Your Internal Organization-Wide Sharing Defaults](atlas.en-us.securityImplGuide.meta/securityImplGuide/admin_sharing.htm)**
    Internal organization-wide sharing defaults set the baseline access for your internal users for your records. You can set the defaults separately for different objects.
-   **[External Organization-Wide Defaults Overview](atlas.en-us.securityImplGuide.meta/securityImplGuide/security_owd_external.htm)**
    External organization-wide defaults provide separate organization-wide defaults for internal and external users to help you better secure your data.

## Related Topics

- Set Your Internal Organization-Wide Sharing Defaults (atlas.en-us.securityImplGuide.meta/securityImplGuide/admin_sharing.htm)
- External Organization-Wide Defaults Overview (atlas.en-us.securityImplGuide.meta/securityImplGuide/security_owd_external.htm)

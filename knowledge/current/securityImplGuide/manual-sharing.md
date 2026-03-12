---
title: "Manual Sharing"
domain: securityImplGuide
topic: manual-sharing
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:44.782Z
estimatedTokens: 984
keywords: [Manual, Sharing, users, share, individual, records, groups, roles, Creation, Shares, Deletion]
---

# Manual Sharing

> Manual sharing allows users to share individual records with other users, public
    groups, and roles.

# Manual Sharing

Manual sharing allows users to share individual records with other users, public groups, and roles.

| Available in: both Salesforce Classic (not available in all orgs) and Lightning Experience |
| --- |
| Available in: Professional, Enterprise, Performance, Unlimited, and Developer Editions |


Manual shares are used for one-off access exceptions, when sharing rules or other features can't be used to grant the intended access. For example, it's necessary to share a single opportunity with a coworker for collaboration, but you don't want to share any other opportunities that the record owner or their role own. Manual sharing is also useful for sharing records for special projects or coverage while coworkers are away.

Sometimes, granting access to one record includes access to all its associated records. For example, if you grant another user access to an account, the user automatically has access to all the opportunities and cases associated with that account.

## Creation of Manual Shares

To grant access to a record using manual sharing, you must be one of the following users.

-   The record owner
-   A user in a role above the owner in the hierarchy (if your organization’s sharing settings control access through hierarchies)
-   A user with the Modify All permission for the object
-   A Salesforce admin

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=securityImplGuide)

#### Note

-   If you’re manually sharing an opportunity, contact, or case, the users you share it with must have at least Read access to the associated parent account via sharing features or you must have the ability to also share the account. You have the ability to share the account if you are the account owner, are a Salesforce admin, are above the account owner in the role hierarchy, and or have the Modify All permission on accounts. If you have the ability to share the account itself, the users you share the opportunity, contact, or case with are automatically given Read access to the parent account.
-   If you’re sharing an account, the access level for its child opportunities, cases, and contacts can’t be greater than the account owner’s default access from organization-wide defaults and the owner’s role. You can only grant a greater level of access if you’re a Salesforce admin, have the Modify All permission on Account, or have the Modify All Data user permission.

## Deletion of Manual Shares

If a user transfers ownership of a record, Salesforce deletes any manual shares created by the original record owner, which can cause users to lose access. Review these additional considerations about the deletion of manual shares:

-   When account ownership is transferred, manual shares created by the original account owner on child opportunity, case, and contact records are also deleted.
-   When the parent account for an opportunity or case changes, manual shares for the opportunity or case are deleted if the user making the change isn’t allowed to share the new parent account. But when the new parent account owner, someone above them in the role hierarchy, or a Salesforce admin changes the parent account, the manual shares aren’t deleted. Manual shares also aren't deleted if the recipient already has access to the parent account.
-   When the parent account for a contact associated with a portal or community user changes, manual shares for custom object records that were shared with the portal or community user are deleted.
-   When an opportunity is closed and the owner of the opportunity’s parent account changes, manual shares for the opportunity are deleted even when opportunity splits are enabled.

-   **[Grant Access to Records with Manual Sharing in Lightning Experience](atlas.en-us.securityImplGuide.meta/securityImplGuide/granting_access_to_records_lex.htm)**
    Give specific users access to an individual record with manual sharing.

## Related Topics

- Grant Access to Records with Manual Sharing in Lightning Experience (atlas.en-us.securityImplGuide.meta/securityImplGuide/granting_access_to_records_lex.htm)

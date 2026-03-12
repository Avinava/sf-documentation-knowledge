---
title: "How Is Record Type Access Specified?"
domain: securityImplGuide
topic: how-is-record-type-access-specified
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:44.871Z
estimatedTokens: 729
keywords: [How, Record, Access, Assign, users, their, profiles, permission, groups, combination, assignment, behaves, differently]
---

# How Is Record Type Access Specified?

> Assign record types to users in their profiles or permission sets (or permission set
    groups), or a combination of these. Record type assignment behaves differently in profiles and
    permission sets.

# How Is Record Type Access Specified?

Assign record types to users in their profiles or permission sets (or permission set groups), or a combination of these. Record type assignment behaves differently in profiles and permission sets.

| Available in: both Salesforce Classic (not available in all orgs) and Lightning Experience |
| --- |
| Available in: Professional, Enterprise, Performance, Unlimited, and Developer editions |


Before assigning a record type, understand the different types available in your Salesforce org. The behavior for record creation depends on which record types are assigned and if you assign them via profiles or permission sets (or permission set groups).

-   Default Record Types: A user’s default record type is specified in the user’s profile. Users can view their default record type and edit record type selection in personal settings. You can’t specify a default record type in permission sets.
-   Master Record Types:
    -   In Profiles: You can assign the master record type in profiles, but you can’t include custom record types in the profile.
    -   In Permission Sets: You can assign only custom record types in permission sets, not master record types.

This chart includes examples of what happens when users create records with different combinations of record type assignments.

| Record Type Assigned on Profile | Custom Record Types in Permission Set (or Permission Set Group) Assigned | What Happens When a User Creates a Record |
| --- | --- | --- |
| --Master-- | None | The new record is associated with the Master record type. |
| --Master-- | One | The new record is associated with the custom record type. Users can’t select the Master record type. |
| --Master-- | Multiple | Users are prompted to select a record type. |
| Custom | One or more | Users are prompted to select a record type. In their personal settings, users can set an option to use their default record type and not be prompted to choose a record type. |

When working with record type assignments, keep the following considerations in mind:

-   Page layout assignments are specified in profiles only, not in permission sets. When a permission set specifies a custom record type, users with that permission set get the page layout assignment that’s specified for that record type in their profile. In profiles, page layout assignments are specified for every record type, even when record types aren’t assigned.
-   Lead conversion default record types are specified in a user’s profile for the converted records. During lead conversion, the display of the user's available record types is unsorted.
-   Record type assignment on a user’s profile or permission set (or permission set group) doesn’t determine whether a user can view a record with that record type. The record type assignment simply specifies that the user can use that record type when creating or editing a record.

---
title: "Comparing Security Models"
domain: securityImplGuide
topic: comparing-security-models
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:45.314Z
estimatedTokens: 751
keywords: [Comparing, Security, Models, manage, users’, access, data, configure, sharing, settings, permissions, features]
---

# Comparing Security Models

> To manage your users’ access to data, you can configure sharing settings, permissions,
      and other features.

# Comparing Security Models

To manage your users’ access to data, you can configure sharing settings, permissions, and other features.

| Available in: Salesforce Classic (not available in all orgs) |
| --- |
| Available in: Enterprise, Performance, Unlimited, Developer, and Database.com Editions |


Salesforce user security is an intersection of sharing, and user and object permissions. In some cases, such as in end-user record level access, it is advantageous to use sharing to provide access to records. In other cases, such as when delegating record administration tasks like transferring records, cleansing data, deduplicating records, mass deleting records, and delegating workflow approval processes, it is advantageous to override sharing and use permissions to provide access to records.

The “Read,” “Create,” “Edit,” and “Delete” permissions respect sharing settings, which control access to data at the record level. The “View All” and “Modify All” permissions override sharing settings for specific objects. Additionally, the “View All Data” and “Modify All Data” permissions override sharing settings for *all* objects.

The following table describes the differences between the security models.

|  | Permissions that Respect Sharing | Permissions that Override Sharing |
| --- | --- | --- |
| Target audience | End-users | Delegated data administrators |
| Where managed | “Read,” “Create,” “Edit,” and “Delete” object permissions;Sharing settings | “View All” and “Modify All” |
| Record access levels | Private, Read-Only, Read/Write, Read/Write/Transfer/Full Access | “View All” and “Modify All” |
| Ability to transfer | Respects sharing settings, which vary by object | Available on all objects with “Modify All” |
| Ability to approve records, or edit and unlock records in an approval process | None | Available on all objects with “Modify All” |
| Ability to report on all records | Available with a sharing rule that states: the records owned by the public group “Entire Organization” are shared with a specified group, with Read-Only access | Available on all objects with “View All” |
| Object support | Available on all objects except products, documents, solutions, ideas, notes, and attachments | Available on most objects via object permissions.View All and Modify All are not available for ideas, price books, article types, and products. |
| Group access levels determined by | Roles, Roles and Subordinates, Roles and Internal Subordinates, Roles, Internal and Portal Subordinates, Queues, Teams, and Public Groups | Profile or permission sets |
| Private record access | Not available | Available on private contacts, opportunities, and notes and attachments with “View All” and “Modify All” |
| Ability to manually share records | Available to the record owner and any user above the record owner in the role hierarchy | Available on all objects with “Modify All” |
| Ability to manage all case comments | Not available | Available with “Modify All” on cases |

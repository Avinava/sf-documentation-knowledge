---
title: "Access Grants"
domain: salesforce-record-access-under-the-hood
topic: access-grants
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:43.094Z
estimatedTokens: 686
keywords: [Access, Grants, organization-wide, Salesforce, uses, define, how, much, user, group, object’s, records, grant, gives, specific]
---

# Access Grants

> When an object has its organization-wide default set to Private or Public Read Only, Salesforce uses access grants to define how
   much access a user or group has to that object’s records. Each access grant gives a specific user
   or group access to a specific record. It also records the type of s

# Access Grants

When an object has its organization-wide default set to Private or Public Read Only, Salesforce uses access grants to define how much access a user or group has to that object’s records. Each access grant gives a specific user or group access to a specific record. It also records the type of sharing tool — sharing rule, team, etc. — used to provide that access. Salesforce uses four types of access grants: explicit grants, group membership grants, inherited grants, and implicit grants.

Explicit Grants

Salesforce uses explicit grants when records are shared directly to users or groups. Specifically, Salesforce uses explicit grants when:

-   A user or a queue becomes the owner of a record.
-   A sharing rule shares the record to a personal or public group, a queue, a role, or a territory.
-   An assignment rule shares the record to a user or a queue.
-   A territory assignment rule shares the record to a territory.
-   A user manually shares the record to a user, a personal or public group, a queue, a role, or a territory.
-   A user becomes part of a team for an account, opportunity, or case.
-   A programmatic customization shares the record to a user, a personal or public group, a queue, a role, or a territory.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=salesforce_record_access_under_the_hood)

#### Note

If your organization doesn’t have an efficient sharing architecture, it might encounter performance problems when you use automated processes that generate a very large number of explicit grants, such as major sales realignments.

Group Membership Grants

Grants that occur when a user, personal or public group, queue, role, or territory is a member of a group that has explicit access to the record. For example, if a sharing rule explicitly grants the Strategy group access to the Acme record, and Bob is a member of the Strategy group, Bob’s membership in the Strategy group grants him access to the Acme record.

Inherited Grants

Grants that occur when a user, personal or public group, queue, role, or territory inherits access through a role or territory hierarchy, or is a member of a group that inherits access through a group hierarchy.

Implicit Grants

Grants that occur when non-configurable record-sharing behaviors built into Salesforce Sales, Service, and Portal applications grant access to certain parent and child records. For example, with this default logic, sometimes referred to as built-in sharing, users can view a parent account record if they have access to its child opportunity, case, or contact record. If those users have access to a parent account record, they can also access its child opportunity, case, and contact records.

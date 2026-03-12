---
title: "Group Maintenance Tables"
domain: salesforce-record-access-under-the-hood
topic: group-maintenance-tables
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:43.099Z
estimatedTokens: 1242
keywords: [Group, Maintenance, Tables, Sharing, rows, grant, access, users, groups, data, belongs, resides, store, membership, every]
---

# Group Maintenance Tables

> Sharing rows grant access to users and groups, but the data that specifies who belongs to
      each group resides in the Group Maintenance tables. These tables store membership data for
      every Salesforce group, including
        system-defined groups. System-defined groups are groups of users 

# Group Maintenance Tables

Sharing rows grant access to users and groups, but the data that specifies who belongs to each group resides in the Group Maintenance tables. These tables store membership data for every Salesforce group, including system-defined groups. System-defined groups are groups of users that Salesforce creates and manages internally to support various features and behaviors, such as queues. This type of management lets the data that supports queues and personal or public groups coexist in the same database tables, and unifies how Salesforce manages the data. For example, Salesforce can grant record access to a queue the same way it grants record access to a public group.

Salesforce also uses system-defined groups to implement hierarchies. During recalculation, Salesforce creates up to three system-defined groups (Role, RoleAndSubordinates, and RoleAndSubordinatesInternal) depending on if digital experiences is enabled.

| Group | Consists of | Purpose |
| --- | --- | --- |
| Role | Users assigned to any of the following.A specific roleOne of its manager roles | Used to give managers access to their subordinates’ records |
| RoleAndSubordinates | Users assigned to any of the following.A specific roleOne of its manager rolesOne of its subordinate roles | Used when an organization defines a rule that shares a set of records with:A particular roleIts subordinatesOnly available when digital experiences is enabled for your org and Experience Cloud site users are created with external account roles other than a shared person account role. |
| RoleAndSubordinatesInternal | Users assigned to any of the following.A specific roleOne of its manager rolesOne of its subordinate roles, excluding Portal roles | Used when an organization defines a rule that shares a set of records with:A particular roleIts subordinates, excluding Portal roles |

All three group types have:

-   Indirect members, who inherit record access from the group’s direct members and are assigned to manager roles
-   Direct members, who are defined according to their group type
    -   In Role groups, direct members are those members assigned to the role the group represents.
    -   In RoleAndSubordinates groups, direct members are those members assigned to the role the group represents or one of its subordinate roles
    -   In RoleAndSubordinatesInternal groups, direct members are those members assigned to the role the group represents, or one of its non-portal subordinate roles.

For example, consider the following simple role hierarchy.

![Hierarchy](/docs/resources/img/en-us/260.0?doc_id=images%2Fhierarchy_simple.png&folder=salesforce_record_access_under_the_hood)

To support the record access inheritance this hierarchy establishes, Salesforce defines the following Role and RoleAndSubordinates groups, resulting in eight total groups.

![Groups](/docs/resources/img/en-us/260.0?doc_id=images%2Fgroups.png&folder=salesforce_record_access_under_the_hood)

By scanning the Role groups, Salesforce can quickly identify the indirect members who inherit record access from users at that role. For example, to see which users inherit record access from Bob in the role hierarchy, Salesforce simply searches for Role groups that have Bob as a direct member (the East Sales Rep Role group), and finds all the indirect members in those groups (Marc and Maria).

Likewise, by scanning the RoleAndSubordinates groups, Salesforce can quickly see which users receive access through role and subordinate sharing rules. For example, if a rule shares a set of records with users in the Sales Executive role and their subordinates, Salesforce can identify those users by scanning the Sales Executive RoleAndSubordinates group.

System-defined groups support Territory Management in a similar way.

For each territory, Salesforce creates a:

-   Territory group, in which users who are assigned to the territory are direct members, while users assigned to territories higher in the hierarchy are indirect members
-   TerritoryAndSubordinates group, in which users who are assigned to that territory or territories lower in the hierarchy are direct members, while users assigned to territories higher in that branch are indirect members

Without system-defined groups, every record access attempt would have to send Salesforce traversing every branch in its hierarchies, jumping back and forth between tables of user data and tables of hierarchical data. Salesforce would also have to use disparate processes to handle what are all essentially collections of users.

Users can’t modify system-defined groups through the user interface or API in the ways that they can personal and public groups; however, modifying a queue or hierarchy causes Salesforce to recalculate its associated system-defined groups accordingly. Thus, the size and complexity of an organization’s queues and hierarchies directly affect the duration of record access calculations.

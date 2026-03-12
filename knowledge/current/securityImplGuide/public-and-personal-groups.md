---
title: "Public and Personal Groups"
domain: securityImplGuide
topic: public-and-personal-groups
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:45.243Z
estimatedTokens: 938
keywords: [Personal, Groups, group, consists, users, contain, individual, particular, role, territory, plus, below, hierarchy]
---

# Public and Personal Groups

> A group consists of a set of users. A group can contain individual users, other groups,
    or the users in a particular role or territory. It can also contain the users in a particular
    role or territory plus all the users below that role or territory in the hierarchy.

# Public and Personal Groups

A group consists of a set of users. A group can contain individual users, other groups, or the users in a particular role or territory. It can also contain the users in a particular role or territory plus all the users below that role or territory in the hierarchy.

| Available in: both Salesforce Classic (not available in all orgs) and Lightning Experience |
| --- |
| Available in: Professional, Enterprise, Performance, Unlimited, Developer, and Database.com Editions |


There are two types of groups.

-   Public groups—Administrators and delegated administrators can create public groups. Use public groups to streamline sharing records with users in different parts of your company that aren't aligned with a single role. For example, you want to share the same opportunity records with Sales Reps in different regions, each of which is represented by a separate role. There are a few individual users who must also have access. Instead of creating separate sharing rules, you can create one public group with all of these roles and the individual user added that serves as the sharing rule target. You can use public groups in the following ways:
    -   To set up default sharing access via a [sharing rule](https://help.salesforce.com/s/articleView?id=sf.security_sharing_rules_create.htm&language=en_US)
    -   To [manually share](https://help.salesforce.com/s/articleView?id=sf.granting_access_to_records.htm&language=en_US) your records with other users
    -   To give access to [report and dashboard folders](https://help.salesforce.com/s/articleView?id=sf.rd_folders_share_enhanced.htm&language=en_US)
    -   To share list views
    -   To add multiple users to a [Salesforce CRM Content library](https://help.salesforce.com/s/articleView?id=sf.admin_files_libraries_add_members.htm&language=en_US)
    -   To assign users to [specific actions in Salesforce Knowledge](https://help.salesforce.com/s/articleView?id=sf.knowledge_article_actions.htm&language=en_US)
-   Personal groups—Each user can create groups for their personal use in manual shares, unlike public groups, which require setup from users with the appropriate permissions. For example, a user can create a personal group to share records with a subgroup of their team that's tasked with a specific project. Personal groups are available only in Salesforce Classic.

You can also include external Experience Cloud site users in your public groups. For example, you must share certain records with partner users that are all associated with different accounts. Create a public group and add all the needed partner users, then create a single sharing rule that targets this public group. You don't need to create multiple sharing rules targeting the role of the partner users in each account.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=securityImplGuide)

#### Tip

Permission set groups consist of permission sets rather than users. Permission set groups bundle permission sets based on job functions or tasks. To learn more about permission set groups and why you use them, see [Permission Set Groups](https://help.salesforce.com/articleView?id=perm_set_groups.htm&language=en_US "HTML (New Window)").

-   **[Create and Edit Public Groups](atlas.en-us.securityImplGuide.meta/securityImplGuide/creating_and_editing_groups.htm)**
    Create public groups to help configure your users’ access to records and other features. Only administrators and delegated administrators can create and edit public groups.
-   **[Group Member Types](atlas.en-us.securityImplGuide.meta/securityImplGuide/users_group_member_types.htm)**
    Many types of groups are available for various internal and external users.

## Related Topics

- Create and Edit Public Groups (atlas.en-us.securityImplGuide.meta/securityImplGuide/creating_and_editing_groups.htm)
- Group Member Types (atlas.en-us.securityImplGuide.meta/securityImplGuide/users_group_member_types.htm)

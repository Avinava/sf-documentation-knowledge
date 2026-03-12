---
title: "Group Membership Operations and Sharing Recalculation"
domain: draes
topic: group-membership-operations-and-sharing-recalculation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:24.616Z
estimatedTokens: 1040
keywords: [Group, Membership, Operations, Sharing, Recalculation, Salesforce, role, hierarchy, groups, territories, closely, connected, rules, security, features]
---

# Group Membership Operations and Sharing Recalculation

> The Salesforce role hierarchy, public groups, and territories are closely connected to
      sharing rules and other security features. Because of these relationships, seemingly simple
      changes to groups and group membership can sometimes involve substantial recalculations of
      users' access rights.

# Group Membership Operations and Sharing Recalculation

The Salesforce role hierarchy, public groups, and territories are closely connected to sharing rules and other security features. Because of these relationships, seemingly simple changes to groups and group membership can sometimes involve substantial recalculations of users' access rights.

For example, when an administrator moves a user from one branch of the hierarchy to another, Salesforce performs these actions to ensure that other users have correct access to data owned by that relocated user.

-   If the user:
    -   Is the first member in his or her new role to own any data, Salesforce adds or removes access to the user’s data for people who are above the user’s new or old role in the hierarchy.
    -   Owns any customer or partner accounts, Salesforce removes any child customer or partner account roles from the user’s original role and adds them as children to the user’s new role.

        ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=draes)

        #### Note

        -   Salesforce also adjusts implicit shares that provide access in the hierarchy to records owned by or shared to customer or partner users. See [Implicit Sharing](atlas.en-us.draes.meta/draes/draes_object_relationships_implicit_sharing.htm "The sharing capabilities of the Salesforce Platform include a wide variety of features that you can use to explicitly grant access to data for individuals and groups. In addition to these more familiar features, there are a number of sharing behaviors that are built into Salesforce. This kind of sharing is called implicit because it’s defined and maintained by the system to support collaboration among members of sales teams, customer service representatives, and clients or customers.").
        -   Salesforce must perform these tasks for every customer or partner account that the user owns.

-   Salesforce also recalculates all sharing rules that include the user’s old or new role in the source group. It removes all of the user’s records from the scope of sharing rules where the old role is the source group and adds those records to the scope of rules where the new role is the source.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=draes)

    #### Note

    If the user owns customer or partner accounts, and there are sharing rules that use customer or partner account roles as the source group, Salesforce sometimes must recalculate those rules. Some sharing rules might no longer be valid given the user’s new location in the hierarchy, in which case an administrator might need to modify or delete them.


During the user’s move, the managers in the branch above the user’s old role lose access to all the data that the user owns, as well as to child records shared through the managers’ role settings. Managers in the branch above the user’s new role gain access to the user’s accounts and to child records according to their own role settings.

From this example, you can see that a lot can happen under the hood when an administrator takes what looks like a simple action, such as changing the role of a user. We chose this operation to illustrate all the possible types of sharing maintenance, but other common group and data updates can have a similar impact.

Moving a role to another branch in the hierarchy

One benefit to moving a whole role is that any customer or partner accounts simply move along with their parent role, and Salesforce doesn't have to change the related sharing. On the other hand, Salesforce must do all of the work involved in moving a single user for all users in the role being moved and for all of those users' data.

Changing the owner of a customer or partner account

The effort required for what looks like a simple data update—changing the name of the user in the Account Owner field—can be surprising. When the old and new owners are in different roles, Salesforce isn’t only moving the customer and partner account roles to a new parent role but also adjusting the sharing for all the data associated with the customer or partner account.

## Related Topics

- Implicit Sharing (atlas.en-us.draes.meta/draes/draes_object_relationships_implicit_sharing.htm)

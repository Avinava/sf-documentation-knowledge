---
title: "User Sharing Considerations"
domain: securityImplGuide
topic: user-sharing-considerations
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:45.222Z
estimatedTokens: 1231
keywords: [User, Sharing, Considerations, Review, implement, ”View, Users”, permission, Organization-wide, defaults, records, rules, Manual, external, users]
---

# User Sharing Considerations

> Review these considerations before you implement user sharing.

# User Sharing Considerations

Review these considerations before you implement user sharing.

| Available in: both Salesforce Classic (not available in all orgs) and Lightning Experience |
| --- |
| Available in: Professional, Enterprise, Performance, Unlimited, and Developer Editions |


Granting access to a user record makes the user’s detail page visible to others. It also makes the user visible in lookups, list views, search, and so on.

## ”View All Users” permission

This permission can be assigned to users who need Read access to all users, regardless of the sharing settings. If you already have the “Manage Users” permission, you’re automatically granted the “View All Users” permission.

## Organization-wide defaults for user records

This setting defaults to Private for external users and Public Read Only for internal users. When the default access is set to Private, users can only read and edit their own user record. Users with subordinates in the role hierarchy maintain read access to the user records of those subordinates.

## User sharing rules

General sharing rule considerations apply to user sharing rules. User sharing rules are based on membership to a public group, role, or territory. Each sharing rule shares members of a source group with those of the target group. You must create the appropriate public groups, roles, or territories before creating your sharing rules. Users inherit the same access as users below them in the role hierarchy.

## Manual sharing for user records

Manual sharing can grant read or edit access on an individual user, but only if the access is greater than the default access for the target user. Users inherit the same access as users below them in the role hierarchy. Apex managed sharing isn’t supported.

## User sharing for external users

Users with the “Manage External Users” permission have access to all external user records for Partner Relationship Management, Customer Service, and Customer Self-Service portal users, regardless of sharing rules or organization-wide default settings for User records. The “Manage External Users” permission doesn’t grant access to guest or Chatter External users. To only allow users to manage accounts that they have read and write access to, use the "Manage External Users (Limited)" perission instead.

## High-volume Experience Cloud site users and Chatter users

Only users with roles can be included in sharing rules. For this reason, the user records of high-volume users, Chatter External, and Chatter Free users can't be included in sharing rules, and these users can't be granted access to user records via a sharing rule.

## Automated Process and License Manager users

Some special users created for org or app maintenance, such as Automated Process and License Manager users, can't be included in any sharing rules, including user sharing rules.

## User sharing compatibility

When the organization-wide default for the user object is set to Private, user sharing doesn’t fully support these features.

-   Chatter Messenger isn’t available for external users. It’s available for internal users only when the organization-wide default for the user object is set to Public Read Only.
-   Salesforce CRM Content—A user who can create libraries can see users they don't have access to when adding library members.
-   Standard Report Types—If the organization-wide default for the user object is Private and the Standard Report Visibility checkbox is selected, a person viewing the report can see the names of users that are listed in the report. To see details such as username and email address, the viewer must have access to the users.

## User sharing in Chatter

In Chatter, there are exceptions where users who aren’t shared can still see and interact with each other. For example, regardless of user sharing, in a public Chatter group, everyone with access to the group can see all posts. They can also see the names of the users who post and mention users who commented on a post.

For example, you set up user sharing so Mary and Bob can’t see or interact with each other. Mary posts on a public Chatter group. She can’t mention Bob, because user sharing prevents Bob’s name from showing up in the mention dropdown list. However, Bob can see Mary’s post and he comments on her post. Now Mary can actually mention Bob in her next comment on her post.

There are also exceptions where users who aren't shared can still see each other in the mention dropdown list. For example, Sue has interacted with Edgar in Chatter (by liking or commenting on his post or mentioning him). Then you set up user sharing so Sue can’t see Edgar. Sue posts on a public Chatter group. She can mention Edgar because, due to their previous interaction, his name shows up on the mention dropdown list. However, if Sue clicks the Edgar mention, she gets an error because, due to user sharing, she can’t see him.

---
title: "Control Who Sees What"
domain: securityImplGuide
topic: control-who-sees-what
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:45.088Z
estimatedTokens: 2383
keywords: [Control, Sees, Salesforce, data, sharing, lets, expose, specific, individuals, groups, users, Permission, profiles, provide, object-level]
---

# Control Who Sees What

> Salesforce data sharing lets you expose specific data
            sets to individuals and groups of users. Permission sets, permission set groups, and
            profiles provide object-level and field-level security by controlling access.
            Record-level sharing settings, user roles, and sharing rules control the individual
            records that users can view and edit.

# Control Who Sees What

Salesforce data sharing lets you expose specific data sets to individuals and groups of users. Permission sets, permission set groups, and profiles provide object-level and field-level security by controlling access. Record-level sharing settings, user roles, and sharing rules control the individual records that users can view and edit.

| Available in: both Salesforce Classic (not available in all orgs) and Lightning Experience |
| --- |
| The available data management options vary according to which Salesforce Edition you have. |


Watch how you can control who sees what data in your organization.

<!-- -->

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=securityImplGuide)

#### Tip

When implementing security and sharing rules for your organization, make a table of types of users. Specify the level of access to data required for each type. Indicate the access level for each object and for fields and records within the object. Then refer to this table as you set up your security model.

![A diagram of how object, record, and field access work together at Salesforce.](/docs/resources/img/en-us/260.0?doc_id=help%2Fbundle_access%2Fimages%2Fdata_access_all.png&folder=securityImplGuide)

## Object-Level Security (Permission Sets and Profiles)

Object-level security—or object permissions—provide the bluntest way to control data access. You can prevent a user from seeing, creating, editing, or deleting any instance of a particular object type, such as a lead or opportunity, by using object permissions. You can hide tabs and objects from selected users, so that they don’t even know that type of data exists.

You can specify object permissions in permission sets and profiles. Permission sets and profiles are collections of settings and permissions that determine what a user can do in the application. The settings are similar to a group in a Windows network, where the members of the group have the same folder permissions and access to the same software.

Typically, profiles are defined by a user’s job function, such as Salesforce admin or sales representative. You can assign one profile to many users, but you can assign only one profile per user. You can use permission sets to grant more permissions and access settings to users. Now it’s easier to manage users’ permissions and access because you can assign multiple permission sets to a single user.

## Field-Level Security (Permission Sets and Profiles)

Sometimes you want users to have access to an object while limiting their access to individual fields in that object. Field-level security—or field permissions—control whether a user can see, edit, and delete the value for a particular field on an object. You can protect sensitive fields without hiding the entire object. You can also control field permissions in permission sets and profiles.

Field permissions control the visibility of fields in any part of the app, including related lists, list views, reports, and search results. To ensure that a user can’t access a particular field, use field permissions. No other settings provide as much protection for a field. Page layouts only control the visibility of fields on detail and edit pages.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=securityImplGuide)

#### Note

With some exceptions, search results aren’t returned for records with fields that an admin or end user can't access because of field level security. For example, a user searches for Las Vegas in Accounts, but doesn't have access to the Account fields Billing Address and Shipping Address. Salesforce does a keyword search, matching the terms Las Vegas, Las, and Vegas in the searchable fields. No results are returned for records that match only the Billing and Shipping Address fields because the user doesn't have access to these fields. There are some fields that don’t enforce field level security and return search results.

## Record-Level Security (Sharing)

After setting object- and field-level access permissions, you can configure access settings for records. Record-level security lets you give users access to some object records, but not others. Every record is owned by a user or a queue. The owner has full access to the record. In a hierarchy, users higher in the hierarchy always have the same access to users below them in the hierarchy. This access applies to records owned by users and records shared with them.

To specify record-level security, set your organization-wide sharing settings, define a hierarchy, and create sharing rules.

-   Organization-wide sharing settings

    The first step in record-level security is to determine the organization-wide sharing settings for each object. Organization-wide sharing settings specify the default level of access that users have to each others’ records.

    You use organization-wide sharing settings to lock your data to the most restrictive level. Use the other record-level security and sharing tools to selectively give access to other users. For example, users have object-level permissions to read and edit opportunities, and the organization-wide sharing setting is Read-Only. By default, those users can read all opportunity records, but can’t edit any unless they own the record or are granted other permissions.

-   Role hierarchy

    After you specify organization-wide sharing settings, the first way to give wider access to records is with a role hierarchy. Similar to an organization chart, a role hierarchy is the level of data access that a user or group of users needs. The role hierarchy ensures that users higher in the hierarchy can always access the same data as users who are lower, regardless of the organization-wide default settings. Each role in the hierarchy can represent a level of data access that a user or group of users needs rather than matching your organization chart.

    Similarly, you can use a territory hierarchy to share access to records. See [Define Default User Access for Territory Records](https://help.salesforce.com/s/articleView?id=sf.tm2_define_default_record_access.htm&language=en_US).

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=securityImplGuide)

    #### Note

    Although it’s easy to confuse permission sets and profiles with roles, they control two different things. Permission sets and profiles control a user’s object and field access permissions. Roles primarily control a user’s record-level access through role hierarchy and sharing rules.

-   Sharing rules

    With sharing rules you can make automatic exceptions to organization-wide sharing settings for sets of users. Use sharing rules to give these users access to records they don’t own or can’t normally see. Sharing rules, like role hierarchies, are only used to give more users access to records—they can’t be stricter than your organization-wide default settings.

-   Manual sharing

    Sometimes it’s impossible to define a consistent group of users who need access to a particular set of records. Record owners can use manual sharing to give read and edit permissions to users who don’t have access any other way. Manual sharing isn’t automated like organization-wide sharing settings, role hierarchies, or sharing rules. But it gives record owners the flexibility to share records with users that must see them.

-   User sharing

    With user sharing, you can show or hide an internal or external user from another user in your organization. User sharing rules are based on membership to a public group, role, or territory, so you must create the appropriate public groups, roles, or territories before creating user sharing rules. Each sharing rule shares members of a source group with members of the target group. Users inherit the same access as users below them in the role hierarchy.

-   Apex managed sharing

    If sharing rules and manual sharing don’t provide the required control, you can use Apex managed sharing. Apex managed sharing allows developers to programmatically share custom objects. When you use Apex managed sharing on a custom object, only users with the Modify All Data permission can add or change the sharing on the custom object's record. The sharing access is maintained across record owner changes.

-   Restriction rules

    When a restriction rule is applied to a user, the data that they had read access to via your sharing settings is further scoped to only records matching the record criteria that you set. This behavior is similar to how you can filter results in a list view or report, except that it’s permanent.

-   Scoping rules

    With scoping rules you can set criteria to help your users see only records that are relevant to them. Scoping rules don’t restrict the record access that your users already have. They scope the records that your users see. Your users can still open and report on all records that they have access to per your sharing settings.


#### See Also

-   [*Salesforce Help*: Manage Data Access](https://help.salesforce.com/apex/HTViewHelpDoc?id=security_data_access_mgmt.htm&language=en_US "Salesforce provides a flexible, layered data sharing design so admins can control user access to data. Use profiles to configure default settings and layouts, then use permission sets and permission set groups to grant object, user, and field permissions. Salesforce also provides tools to automate, migrate, or report on your users’ permission assignments.")

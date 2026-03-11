---
title: "SharedTo"
domain: metadata-api
topic: sharedto
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:45:54.640Z
keywords: [SharedTo, Note, Declarative, Metadata, File, Suffix, Directory, Location, Version, Fields]
---

# SharedTo

# SharedTo

SharedTo defines the sharing access for a list view or a folder. It can be used to specify the target and source for owner-based sharing rules.

See [Sharing Considerations](https://help.salesforce.com/s/articleView?id=platform.security_sharing_considerations.htm&type=5&language=en_US) and [Public and Personal Groups](https://help.salesforce.com/s/articleView?id=platform.user_groups.htm&type=5&language=en_US) in Salesforce Help.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

[SharedTo](#meta_sharedto "SharedTo defines the sharing access for a list view or a folder. It can be used to specify the target and source for owner-based sharing rules.") is included in the metadata for shared and private list views. [SharedTo](#meta_sharedto "SharedTo defines the sharing access for a list view or a folder. It can be used to specify the target and source for owner-based sharing rules.") isn’t in the metadata for public list views.

## Declarative Metadata File Suffix and Directory Location

[SharedTo](#meta_sharedto "SharedTo defines the sharing access for a list view or a folder. It can be used to specify the target and source for owner-based sharing rules.") is used with [ListView](atlas.en-us.api_meta.meta/api_meta/meta_listview.htm "ListView allows you to see a filtered list of records, such as contacts, accounts, or custom objects."), [Folder](atlas.en-us.api_meta.meta/api_meta/meta_folder.htm "Represents a folder. This type extends the Metadata metadata type and inherits its fullName field."), and [SharingRules](atlas.en-us.api_meta.meta/api_meta/meta_sharingrules.htm "Represents the base container for sharing rules, which can be criteria-based, ownership-based, territory-based, or for guest user access. SharingRules enables you to share records with a set of users, using rules that specify the access level for the target user group.").

## Version

[SharedTo](#meta_sharedto "SharedTo defines the sharing access for a list view or a folder. It can be used to specify the target and source for owner-based sharing rules.") is available in API version 17.0 and later.

## Fields

| Field | Field Type | Description |
| --- | --- | --- |
| allCustomerPortalUsers | string | A group containing all customer portal users.This field is available in API version 24.0 and later. |
| allInternalUsers | string | A group containing all internal and nonportal users.This field is available in API version 24.0 and later. |
| allPartnerUsers | string | A group containing all partner users.This field is available in API version 24.0 and later. |
| channelProgramGroup | string | A system-managed group with sharing access containing all partner members of the corresponding channel program or level.This field is available in API version 41.0 and later. |
| channelProgramGroups | string[] | A list of system-managed groups with sharing access containing all partner members of the corresponding channel programs or levels.This field is available in API version 41.0 and later. |
| group | string[] | A list of groups with sharing access. Use this field instead of the groups field.This field is available in API version 22.0 and later. |
| guestUser | string[] | A list of guest user nicknames with sharing access. This field can be used only with SharingGuestRule.This field is available in API version 47.0 and later. |
| groups | string[] | A list of groups with sharing access.Use the group field instead for API version 22.0 and later. |
| managerSubordinates | string[] | A list of users whose direct and indirect subordinates receive sharing access. This field is available in API version 24.0 and later. |
| managers | string[] | A list of users whose direct and indirect managers receive sharing access. This field is available in API version 24.0 and later. |
| portalRole | string[] | A list of groups with sharing access containing all users in a portal role.This field is available in API version 24.0 and later. |
| portalRoleandSubordinates | string[] | A list of groups with sharing access containing all users in a portal role or any users under that role.This field is available in API version 24.0 and later. |
| role | string[] | A list of roles with sharing access. Use this field instead of the roles field.This field is available in API version 22.0 and later. |
| roleAndSubordinates | string[] | A list of roles with sharing access. All roles below each of these roles in the role hierarchy also have sharing access. If portal accounts are enabled, then all roles and portal accounts below each of these roles in the role hierarchy also have sharing access. Use this field instead of the rolesAndSubordinates field.This field is available in API version 22.0 and later and is only available when digital experiences is enabled for your org and Experience Cloud site users are created with external account roles other than a shared person account role. |
| roleAndSubordinatesInternal | string[] | A list of roles with sharing access. All roles below each of these roles in the role hierarchy also have sharing access.This field is available in API version 22.0 and later. |
| roles | string[] | A list of roles with sharing access.Use the role field instead for API version 22.0 and later. |
| rolesAndSubordinates | string[] | A list of roles with sharing access. All roles below each of these roles in the role hierarchy also have sharing access. If portal accounts are enabled, then all roles and portal accounts below each of these roles in the role hierarchy also have sharing access.Use the roleAndSubordinates field instead for API version 22.0 and later. |
| territories | string[] | A list of territories with sharing access.Use the territory field instead for API version 22.0 and later. |
| territoriesAndSubordinates | string[] | A list of territories with sharing access. All territories below each of these territories in the territory hierarchy also have sharing access.Use the territoryAndSubordinates field instead for API version 22.0 and later. |
| territory | string[] | A list of territories with sharing access. Use this field instead of the territories field.If you’re using Sales Territories, use modelName.territoryName for the shared-to and shared-from territory values, where:modelName equals the name of the active territory model in the API.territoryName equals the territory’s name in the API.This field is available in API version 22.0 and later. |
| territoryAndSubordinates | string[] | A list of territories with sharing access. All territories below each of these territories in the territory hierarchy also have sharing access. Use this field instead of the territoriesAndSubordinates field.If you’re using Sales Territories, use modelName.territoryName for the shared-to and shared-from territoryAndSubordinates values, where:modelName equals the name of the active territory model in the API.territoryName equals the territory’s name in the API.This field is available in API version 22.0 and later. |
| queue | string[] | A list of queues with sharing access. Applies only to lead, case, and CustomObject sharing rules.This field is available in API version 24.0 and later. |
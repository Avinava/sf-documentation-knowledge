---
title: "ConnectApi.ActionLinkGroupDefinition"
domain: apex-reference
topic: connectapiactionlinkgroupdefinition
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:26.133Z
estimatedTokens: 631
keywords: [ConnectApi.ActionLinkGroupDefinition, definition, action, link, group, sensitive, third, party, OAuth, bearer, token, reason, calls, made, Apex]
---

# ConnectApi.ActionLinkGroupDefinition

> The definition of an action link group. Information in the action link
      group definition can be sensitive to a third party (for example, OAuth bearer token headers).
      For this reason, only calls made from the Apex namespace that created the action link group
      definition can read, modify, or delete the definition. In addition, the user making the call
      must have created the definition or have View All Data permission.

# ConnectApi.ActionLinkGroupDefinition

The definition of an action link group. Information in the action link group definition can be sensitive to a third party (for example, OAuth bearer token headers). For this reason, only calls made from the Apex namespace that created the action link group definition can read, modify, or delete the definition. In addition, the user making the call must have created the definition or have View All Data permission.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| actionLinks | List<ConnectApi.​ActionLinkDefinition> | A collection of action link definitions that make up the action link group. Within an action link group, action links are displayed in the order listed in the actionLinks property of the ConnectApi.ActionLinkGroupDefinitionInput class. Within a feed item, action link groups are displayed in the order specified in the actionLinkGroupIds property of the ConnectApi.AssociatedActionsCapabilityInput class. | 33.0 |
| category | ConnectApi.​PlatformAction​GroupCategory | Indicates the priority and location of the action links. Values are:Primary—The action link group is displayed in the body of the feed element.Overflow—The action link group is displayed in the overflow menu of the feed element. | 33.0 |
| createdDate | Datetime | ISO 8601 date string, for example, 2011-02-25T18:24:31.000Z. | 33.0 |
| executions​Allowed | ConnectApi.​ActionLink​ExecutionsAllowed | Defines the number of times an action link can be executed. Values are:Once—An action link can be executed only one time across all users.OncePerUser—An action link can be executed only one time for each user.Unlimited—An action link can be executed an unlimited number of times by each user. If the action link’s actionType is Api or ApiAsync, you can’t use this value. | 33.0 |
| expirationDate | Datetime | ISO 8601 date string, for example, 2011-02-25T18:24:31.000Z, that represents the date and time this action group expires and can no longer be executed. If the value is null, there isn’t an expiration date. | 33.0 |
| id | String | 18-character ID of the action link group definition. | 33.0 |
| modifiedDate | Datetime | ISO 8601 date string, for example, 2011-02-25T18:24:31.000Z. | 33.0 |
| templateId | String | The ID of the action link group template from which to instantiate this action link group, or null if this group isn’t associated with a template. | 33.0 |
| url | String | The URL for this action link group definition. | 33.0 |

## Related Topics

- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​ActionLinkDefinition (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_action_link_definition.htm)
- ConnectApi.​PlatformAction​GroupCategory (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- Datetime (atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm)
- ConnectApi.​ActionLink​ExecutionsAllowed (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)

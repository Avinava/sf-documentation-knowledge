---
title: "ConnectApi.PlatformActionGroup"
domain: apex-reference
topic: connectapiplatformactiongroup
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:28.455Z
estimatedTokens: 488
keywords: [ConnectApi.PlatformActionGroup, platform, action, group, instance, state, appropriate, context, user]
---

# ConnectApi.PlatformActionGroup

> A platform action group instance with state appropriate for the
      context user.

# ConnectApi.PlatformActionGroup

A platform action group instance with state appropriate for the context user.

Action link groups are one type of platform action group and are therefore represented as ConnectApi.PlatformActionGroup output classes.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| category | ConnectApi.​PlatformAction​GroupCategory | Indicates the priority and relative locations of platform actions. Values are:Primary—The action link group is displayed in the body of the feed element.Overflow—The action link group is displayed in the overflow menu of the feed element. | 33.0 |
| id | String | The 18-character ID or an opaque string ID of the platform action group.If the ConnectApi.PlatformAction type is QuickAction and the subtype is Create, this value is null. | 33.0 |
| modifiedDate | Datetime | ISO 8601 date string, for example, 2014-02-25T18:24:31.000Z. | 33.0 |
| platform​Actions | List<ConnectApi.​PlatformAction> | The platform action instances for this group.Within an action link group, action links are displayed in the order listed in the actionLinks property of the ConnectApi.ActionLinkGroup​DefinitionInput class. Within a feed item, action link groups are displayed in the order specified in the actionLinkGroupIds property of the ConnectApi.AssociatedActions​CapabilityInput class. | 33.0 |
| url | String | The URL for this platform action group.If the ConnectApi.PlatformAction type is QuickAction and the subtype is Create, this value is null. | 33.0 |

#### See Also

-   [ConnectApi.AbstractRecommendation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_abstract_recommendation.htm "A Chatter, custom, or static recommendation.")

-   [ConnectApi.AssociatedActionsCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_associated_actions_capability.htm "If a feed element has this capability, it has platform actions associated with it.")

## Related Topics

- ConnectApi.​PlatformAction​GroupCategory (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Datetime (atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​PlatformAction (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_platform_action.htm)
- ConnectApi.AbstractRecommendation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_abstract_recommendation.htm)
- ConnectApi.AssociatedActionsCapability (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_associated_actions_capability.htm)

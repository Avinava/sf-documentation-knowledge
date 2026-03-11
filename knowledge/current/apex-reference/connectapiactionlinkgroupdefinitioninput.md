---
title: "ConnectApi.ActionLinkGroupDefinitionInput"
domain: apex-reference
topic: connectapiactionlinkgroupdefinitioninput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:36.720Z
keywords: [ConnectApi.ActionLinkGroupDefinitionInput, See]
---

# ConnectApi.ActionLinkGroupDefinitionInput

# ConnectApi.ActionLinkGroupDefinitionInput

The definition of an action link group. All action links must belong to a group. Action links in a group are mutually exclusive and share some properties. Define standalone actions in their own action group.

Action link definition can be sensitive to a third party (for example, OAuth bearer token headers). For this reason, only calls made from the Apex namespace that created the action link definition can read, modify, or delete the definition. In addition, the user making the call must have created the definition or have View All Data permission.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| actionLinks | List<ConnectApi.​ActionLink​DefinitionInput> | The action links that make up this group.Within an action link group, action links are displayed in the order listed in the actionLinks property of the ConnectApi.ActionLinkGroup​DefinitionInput class. Within a feed item, action link groups are displayed in the order specified in the actionLinkGroupIds property of the ConnectApi.AssociatedActions​CapabilityInput class.You can create up to three action links in a Primary group and up to four in an Overflow group. | Required to instantiate this action link group without a template.To instantiate from a template, don’t specify a value. | 33.0 |
| category | ConnectApi.​PlatformAction​GroupCategory | Indicates the priority and relative locations of action links in an associated feed item. Values are:Primary—The action link group is displayed in the body of the feed element.Overflow—The action link group is displayed in the overflow menu of the feed element. | Required to instantiate this action link group without a template.To instantiate from a template, don’t specify a value. | 33.0 |
| executions​Allowed | ConnectApi.​ActionLink​ExecutionsAllowed | Defines the number of times an action link can be executed. Values are:Once—An action link can be executed only one time across all users.OncePerUser—An action link can be executed only one time for each user.Unlimited—An action link can be executed an unlimited number of times by each user. If the action link’s actionType is Api or ApiAsync, you can’t use this value. | Required to instantiate this action link group without a template.To instantiate from a template, don’t specify a value. | 33.0 |
| expirationDate | Datetime | ISO 8601 date string, for example, 2011-02-25T18:24:31.000Z, that represents the date and time this action link group is removed from associated feed items and can no longer be executed. The expirationDate must be within one year of the creation date.If the action link group definition includes an OAuth token, it is a good idea to set the expiration date of the action link group to the same value as the expiration date of the OAuth token so that users can’t execute the action link and get an OAuth error.To set a date when instantiating from a template, see Set the Action Link Group Expiration Time in Design Action Link Templates. | Required to instantiate this action link group without a template.Optional to instantiate from a template. | 33.0 |
| templateBindings | List<ConnectApi.ActionLinkTemplateBindingInput> | A collection of key-value pairs to fill in binding variable values or a custom user alias from an action link template. To instantiate this action link group from an action link template that uses binding variables, you must provide values for all the variables. See Define Binding Variables in Design Action Link Templates. | To instantiate without a template, don’t specify a value.Required to instantiate this action link group from a template that uses binding variables. | 33.0 |
| templateId | String | The ID of the action link group template from which to instantiate this action link group. | To instantiate without a template, don’t specify a value.Required to instantiate this action link group from a template. | 33.0 |

#### See Also

-   [Define an Action Link and Post with a Feed Element](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectapi_examples_define_post_action_link.htm "Define an Action Link and Post with a Feed Element - HTML (New Window)")
    
-   [Define an Action Link in a Template and Post with a Feed Element](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectapi_examples_define_post_action_link_template.htm "Define an Action Link in a Template and Post with a Feed Element - HTML (New Window)")
    
-   [createActionLinkGroupDefinition​(communityId, actionLinkGroup)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ActionLinks_static_methods.htm#apex_ConnectAPI_ActionLinks_createActionLinkGroupDefinition_1 "Create an action link group definition. To associate an action link group with a feed element, first create an action link group definition. Then post a feed element with an associated actions capability.")
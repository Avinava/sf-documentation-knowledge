---
title: "Action Link Group Definition Input"
domain: chatterapi
topic: action-link-group-definition-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:10.926Z
estimatedTokens: 1137
keywords: [Action, Link, Group, Definition, Input, links, belong, mutually, exclusive, share, Define, standalone, actions, their, own]
---

# Action Link Group Definition Input

> The definition of an action link group. All action links must belong
      to a group. Action links in a group are mutually exclusive and share some properties. Define
      standalone actions in their own action group.

# Action Link Group Definition Input

The definition of an action link group. All action links must belong to a group. Action links in a group are mutually exclusive and share some properties. Define standalone actions in their own action group.

Information in the action link definition can be sensitive to a third party (for example, OAuth bearer token headers). For this reason, only requests made via the client app that created the action link definition can read, modify, or delete the definition. In addition, the user making the request must have created the definition or have View All Data permission.

Root XML tag

<actionLinkGroup>

JSON example

This example instantiates an action link group definition without a template:

```

```

This example instantiates an action link group definition from a template:

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| actionLinks | Action Link Definition Input[] | The action links in the group.Within an action link group, action links are displayed in the order listed in the actionLinks property of the Action Link Group Definition Input request body. Within a feed item, action link groups are displayed in the order specified in the actionLinkGroupIds property of the Associated Actions Capability Input request body. | Required to instantiate this action link group without a template.To instantiate from a template, don’t specify a value. | 33.0 |
| category | String | Indicates the priority and relative locations of action links in an associated feed item. Values are:Primary—The action link group is displayed in the body of the feed element.Overflow—The action link group is displayed in the overflow menu of the feed element.You can create up to three action links in a Primary group and up to four in an Overflow group. | Required to instantiate this action link group without a template.To instantiate from a template, don’t specify a value. | 33.0 |
| executionsAllowed | String | Defines the number of times an action link can be executed. Values are:Once—An action link can be executed only one time across all users.OncePerUser—An action link can be executed only one time for each user.Unlimited—An action link can be executed an unlimited number of times by each user. If the action link’s actionType is Api or ApiAsync, you can’t use this value. | Required to instantiate this action link group without a template.To instantiate from a template, don’t specify a value. | 33.0 |
| expirationDate | String | ISO 8601 date string, for example, 2011-02-25T18:24:31.000Z, that represents the date and time this action link group is removed from associated feed items and can no longer be executed. The expirationDate must be within one year of the creation date.If the action link group definition includes an OAuth token, it is a good idea to set the expiration date of the action link group to the same value as the expiration date of the OAuth token so that users can’t execute the action link and get an OAuth error.To set a date when instantiating from a template, see Set the Action Link Group Expiration Time in Design Action Link Templates. | Required to instantiate this action link group without a template.Optional to instantiate from a template. | 33.0 |
| templateBindings | Action Link Template Binding Input[] | A collection of key-value pairs to fill in binding variable values or a custom user alias from an action link template. To instantiate this action link group from an action link template that uses binding variables, you must provide values for all the variables. See Define Binding Variables in Design Action Link Templates. | To instantiate without a template, don’t specify a value.Required to instantiate this action link group from a template that uses binding variables. | 33.0 |
| templateId | String | The ID of the action link group template from which to instantiate this action link group. | To instantiate without a template, don’t specify a value.Required to instantiate this action link group from a template. | 33.0 |

#### See Also

-   [Define Action Links and Post with a Feed Element](atlas.en-us.chatterapi.meta/chatterapi/quickreference_define_post_action_link.htm "Define actions links and post with a feed element.")

-   [Define Action Links in a Template and Post with a Feed Element](atlas.en-us.chatterapi.meta/chatterapi/quickreference_define_post_action_link_template.htm "Define action links in a template and post with a feed element.")

## Code Examples

```
{
  "actionLinks": [
  {
    "actionType": "Api",
    "labelKey": "Like",
    "groupDefault": "true",
    "actionUrl": "https://test.com/this",
    "method": "HttpPost",
    "requiresConfirmation": "false"
  },
  {
    "actionType": "Api",
    "labelKey": "Unlike",
    "groupDefault": "false",
    "actionUrl": "https://test.com/that",
    "method": "HttpPost",
    "requiresConfirmation": "false"
  }
  ],
  "executionsAllowed": "OncePerUser",
  "expirationDate": "2014-07-07T23:59:11.168Z",
  "category": "Primary"
}
```

```
{
   "templateId":"07gD00000004C9r",
   "templateBindings":[
      {
         "key":"Bindings.version",
         "value":"v33.0"
      }
   ]
}
```

## Related Topics

- Action Link Definition Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_action_link_definition_input.htm)
- Action Link Template Binding Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_action_link_template_binding_input.htm)
- Define Action Links and Post with a Feed Element (atlas.en-us.chatterapi.meta/chatterapi/quickreference_define_post_action_link.htm)
- Define Action Links in a Template and Post with a Feed Element (atlas.en-us.chatterapi.meta/chatterapi/quickreference_define_post_action_link_template.htm)

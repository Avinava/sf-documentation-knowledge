---
title: "Action Link Template Binding Input"
domain: chatterapi
topic: action-link-template-binding-input
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:10.934Z
estimatedTokens: 258
keywords: [Action, Link, Template, Binding, Input, key-value, pair, fill, variable]
---

# Action Link Template Binding Input

> A key-value pair to fill in a binding variable value from an action link
    template.

# Action Link Template Binding Input

A key-value pair to fill in a binding variable value from an action link template.

Root XML tag

<actionLinkTemplateBinding>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| key | String | The name of the binding variable key specified in the action link template in Setup. For example, if the binding variable in the template is {!Binding.firstName}, the key is firstName | Required | 33.0 |
| value | String | The value of the binding variable key. For example, if the key is firstName, this value could be Joan. | Required | 33.0 |

#### See Also

-   [Action Link Group Definition Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_action_link_group_definition_input.htm "The definition of an action link group. All action links must belong to a group. Action links in a group are mutually exclusive and share some properties. Define standalone actions in their own action group.")

## Code Examples

```
{
   "key":"version",
   "value":"33.0"
}
```

## Related Topics

- Action Link Group Definition Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_action_link_group_definition_input.htm)

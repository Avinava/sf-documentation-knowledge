---
title: "ConnectApi.ActionLinkTemplateBindingInput"
domain: apex-reference
topic: connectapiactionlinktemplatebindinginput
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:24.517Z
estimatedTokens: 241
keywords: [key-value, pair, fill, binding, variable, action, link, template]
---

# ConnectApi.ActionLinkTemplateBindingInput

> A key-value pair to fill in a binding variable value from an action
      link template.

# ConnectApi.ActionLinkTemplateBindingInput

A key-value pair to fill in a binding variable value from an action link template.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| key | String | The name of the binding variable key specified in the action link template in Setup. For example, if the binding variable in the template is {!Binding.firstName}, the key is firstName | Required | 33.0 |
| value | String | The value of the binding variable key. For example, if the key is firstName, this value could be Joan. | Required | 33.0 |

#### See Also

-   [ConnectApi.ActionLinkGroupDefinitionInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_action_link_group_definition.htm "The definition of an action link group. All action links must belong to a group. Action links in a group are mutually exclusive and share some properties. Define standalone actions in their own action group.")

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.ActionLinkGroupDefinitionInput (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_action_link_group_definition.htm)

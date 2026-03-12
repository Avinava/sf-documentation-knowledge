---
title: "ConnectApi.MentionValidations"
domain: apex-reference
topic: connectapimentionvalidations
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:27.959Z
estimatedTokens: 176
keywords: [ConnectApi.MentionValidations, Information, whether, set, mentions, valid, context, user.]
---

# ConnectApi.MentionValidations

> Information about whether a set of mentions is valid for the context user.

# ConnectApi.MentionValidations

Information about whether a set of mentions is valid for the context user.

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| hasErrors | Boolean | Indicates whether at least one of the proposed mentions has an error (true), or not (false). For example, context users can’t mention private groups they don’t belong to. If such a group is included in the list of mention validations, hasErrors is true and the group has a validationStatus of Disallowed in its mention validation. | 29.0 |
| mentionValidations | List<ConnectApi.​MentionValidation> | List of mention validation information in the same order as the provided record IDs. | 29.0 |

## Related Topics

- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​MentionValidation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_mentionValidation.htm)

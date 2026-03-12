---
title: "Mention Validations"
domain: chatterapi
topic: mention-validations
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:19.691Z
estimatedTokens: 184
keywords: [Mention, Validations, whether, mentions, context, user]
---

# Mention Validations

> Information about whether a set of mentions is valid for the context user.

# Mention Validations

Information about whether a set of mentions is valid for the context user.

| Property | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| hasErrors | Boolean | Indicates whether at least one of the proposed mentions has an error (true), or not (false). For example, context users can’t mention private groups they don’t belong to. If such a group is included in the list of mention validations, hasErrors is true and the group has a validationStatus of Disallowed in its mention validation. | Small, 29.0 | 29.0 |
| mention​Validations | Mention Validation[] | Information about whether a set of mentions is valid for the context user. | Medium, 29.0 | 29.0 |

## Related Topics

- Mention Validation (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_mentionValidation.htm)

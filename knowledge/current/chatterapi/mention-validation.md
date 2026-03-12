---
title: "Mention Validation"
domain: chatterapi
topic: mention-validation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:19.688Z
estimatedTokens: 270
keywords: [Mention, Validation, whether, proposed, context, user]
---

# Mention Validation

> Information about whether a proposed mention is valid for the context user.

# Mention Validation

Information about whether a proposed mention is valid for the context user.

| Property | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| recordId | String | The ID of the mentioned record. | Small, 29.0 | 29.0 |
| validationStatus | String | Type of validation error for a proposed mention, if any. One of these values:Disallowed—The proposed mention is invalid and is rejected because the context user is trying to mention something that is not allowed. For example, a user who is not a member of a private group is trying to mention the private group.Inaccessible—The proposed mention is allowed, but the user or record being mentioned isn’t notified. They don't have access to the parent record that’s being discussed.Ok—There is no validation error for this proposed mention. | Small, 29.0 | 29.0 |

#### See Also

-   [Mention Validations](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_mentionValidations.htm "Information about whether a set of mentions is valid for the context user.")

## Related Topics

- Mention Validations (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_mentionValidations.htm)

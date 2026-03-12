---
title: "ConnectApi.MentionCompletion"
domain: apex-reference
topic: connectapimentioncompletion
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:27.985Z
estimatedTokens: 416
keywords: [ConnectApi.MentionCompletion, record, @mention, user, group]
---

# ConnectApi.MentionCompletion

> Information about a record that could be used to @mention a user or
        group.

# ConnectApi.MentionCompletion

Information about a record that could be used to @mention a user or group.

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| additionalLabel | String | If one exists, an additional label for the record represented by this completion, for example, “(Customer)” or “(Acme Corporation)”. | 29.0 |
| description | String | A description of the record represented by this completion. | 29.0 |
| name | String | The name of the record represented by this completion. The name is localized, if possible. | 29.0 |
| outOfOffice | ConnectApi.OutOfOffice | If the record represented by this completion is a user, an additional out-of-office message, if one exists, for the user. | 40.0 |
| photoUrl | String | A URL to the photo or icon of the record represented by this completion. | 29.0 |
| recordId | String | The ID of the record represented by this completion. | 29.0 |
| userType | ConnectApi.​UserType Enum | If the record represented by this completion is a user, this value is the user type associated with that user; otherwise the value is null.One of these values:ChatterGuest—User is an external user in a private group.ChatterOnly—User is a Chatter Free customer.Guest—User is unauthenticated.Internal—User is a standard org member.Portal—User is an external user in an Experience Cloud site.System—User is Chatter Expert or a system user.Undefined—User is a user type that is a custom object. | 30.0 |

#### See Also

-   [ConnectApi.MentionCompletionPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_mention_completion_page.htm "Paginated list of Mention Completion response bodies.")

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.OutOfOffice (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_out_of_office.htm)
- ConnectApi.MentionCompletionPage (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_mention_completion_page.htm)

---
title: "Mention Completion"
domain: chatterapi
topic: mention-completion
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:19.697Z
estimatedTokens: 469
keywords: [Mention, Completion, record, @mention, user, group]
---

# Mention Completion

> Information about a record that could be used to @mention a user or group.

# Mention Completion

Information about a record that could be used to @mention a user or group.

| Property | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| additionalLabel | String | If one exists, an additional label for the record represented by this completion, for example, “(Customer)” or “(Acme Corporation)”. | Big, 29.0 | 29.0 |
| description | String | Description for the record represented by this completion.If the record represented by this completion is an internal user, the description shows the user’s title. For users who aren’t internal, the description is null. | Medium, 29.0 | 29.0 |
| name | String | Name for the record represented by this completion. | Small, 29.0 | 29.0 |
| outOfOffice | Out of Office | If the record represented by this completion is a user, an additional out-of-office message, if one exists, for the user. | Small, 40.0 | 40.0 |
| photoUrl | String | URL to the photo or icon for the record represented by this completion. | Medium, 29.0 | 29.0 |
| recordId | String | 18-character ID for the record represented by this completion. | Small, 29.0 | 29.0 |
| userType | String | If the record represented by this completion is a user, this value is the user type associated with that user; otherwise the value is null.Values are:ChatterGuest—User is an external user in a private group.ChatterOnly—User is a Chatter Free customer.Guest—User is unauthenticated.Internal—User is a standard org member.Portal—User is an external user in an Experience Cloud site.System—User is Chatter Expert or a system user.Undefined—User is a user type that is a custom object. | Medium, 30.0 | 30.0 |

#### See Also

-   [Mention Completion Page](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_mention_completion_page.htm "Paginated list of Mention Completion response bodies.")

## Related Topics

- Out of Office (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_out_of_office.htm)
- Mention Completion Page (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_mention_completion_page.htm)

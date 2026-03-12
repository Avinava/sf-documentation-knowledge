---
title: "ConnectApi.UserCapabilities"
domain: apex-reference
topic: connectapiusercapabilities
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:29.214Z
estimatedTokens: 308
keywords: [ConnectApi.UserCapabilities, Capabilities, associated, user, profile.]
---

# ConnectApi.UserCapabilities

> Capabilities associated with a user profile.

# ConnectApi.UserCapabilities

Capabilities associated with a user profile.

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| canChat | Boolean | Specifies if the context user can use Chatter Messenger with the subject user (true) or not (false) | 29.0 |
| canDirectMessage | Boolean | Specifies if the context user can direct message the subject user (true) or not (false) | 29.0 |
| canEdit | Boolean | Specifies if the context user can edit the subject user’s account (true) or not (false) | 29.0 |
| canFollow | Boolean | Specifies if the context user can follow the subject user’s feed (true) or not (false) | 29.0 |
| canViewFeed | Boolean | Specifies if the context user can view the feed of the subject user (true) or not (false) | 29.0 |
| canViewFullProfile | Boolean | Specifies if the context user can view the full profile of the subject user (true) or only the limited profile (false) | 29.0 |
| isModerator | Boolean | Specifies if the subject user is a Chatter moderator or admin (true) or not (false) | 29.0 |

#### See Also

-   [ConnectApi.UserProfile](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_user_profile.htm "Details necessary to render a view of a user profile.")

## Related Topics

- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
- ConnectApi.UserProfile (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_user_profile.htm)

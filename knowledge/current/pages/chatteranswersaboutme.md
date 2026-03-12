---
title: "chatteranswers:aboutme"
domain: pages
topic: chatteranswersaboutme
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:22.239Z
estimatedTokens: 248
keywords: [chatteranswers, aboutme, Chatter, Answers, profile, box, user, photo, username, Edit, settings, link, Sign, accessible, authenticated]
---

# chatteranswers:aboutme

> Chatter Answers profile box which contains the user photo, username, the Edit my settings link, and the Sign out link. The profile box is accessible only to authenticated users. Use with other Chatter Answers components to create a customized experience for your Chatter Answers users.

# chatteranswers:aboutme

Chatter Answers profile box which contains the user photo, username, the Edit my settings link, and the Sign out link. The profile box is accessible only to authenticated users. Use with other Chatter Answers components to create a customized experience for your Chatter Answers users.

## This example displays the Chatter Answers aboutme component.

```

```

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| communityId | String | Zone in which to display the feed. | Yes | 29.0 |  |
| id | String | An identifier that allows the component to be referenced by other components in the page. |  | 14.0 | global |
| noSignIn | Boolean | A flag that disables the sign-on option for the feed. |  | 29.0 |  |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 14.0 | global |

## Code Examples

```
<apex:page showHeader="true">
                <chatteranswers:aboutme communityId="09axx00000000HK"/>               
            </apex:page>
```

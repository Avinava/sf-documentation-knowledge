---
title: "Quick Text Resource"
domain: chatterapi
topic: quick-text-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.306Z
estimatedTokens: 337
keywords: [Quick, Text, Resource]
---

# Quick Text Resource

> Get the body of a quick text.

# Quick Text Resource

Get the body of a quick text.

Resource

```

```

Available version

50.0

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| channel | String | Where the message body was created. Values are:EmailEventGenericInternalKnowledgeLive AgentMessagingPhonePortalSocialTask | Optional | 50.0 |
| launchSource | String | How the user started the quick text. Values are:FloaterKeyboard shortcutMacroToolbar | Optional | 50.0 |
| quickTextContext | String | Context of the quick text. Values are:PreviewRuntime | Optional | 50.0 |
| quickTextId | String | ID of the quick text. | Required | 50.0 |
| quickTextMessage | String | Content of the original text template before quick text is merged into it. | Optional | 50.0 |
| whatId | String | ID of a nonhuman object, such as an account or case. | Required | 50.0 |
| whoId | String | ID of a human object, such as a lead or contact. | Required | 50.0 |

Response body for GET

[Quick Text Preview Body](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_quick_text_preview_body.htm "Body of a preview quick text.") or [Quick Text Runtime Body](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_quick_text_runtime_body.htm "Body of a runtime quick text.")

## Code Examples

```
/connect/quicktextbody
```

## Related Topics

- Quick Text Preview Body (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_quick_text_preview_body.htm)
- Quick Text Runtime Body (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_quick_text_runtime_body.htm)

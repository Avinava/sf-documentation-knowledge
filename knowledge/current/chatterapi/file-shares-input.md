---
title: "File Shares Input"
domain: chatterapi
topic: file-shares-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.723Z
estimatedTokens: 106
keywords: [File, Shares, Input]
---

# File Shares Input

> File shares input.

# File Shares Input

File shares input.

Root XML tag

<fileShares>

JSON example

```

```

Properties

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| message | String | Private message body that’s sent to the recipients. If digital experiences is enabled, an email is sent instead of a private message. | 30.0 |
| shares | Share Input[] | Collection of Share Input request bodies. | 30.0 |

## Code Examples

```
{
  "message": "I shared a document with you.",
  "shares": [
     { "id": "005D0000001Az4l", "sharingType": "V" },
     { "id": "005D0000001B2ny", "sharingType": "C" }
   ]
}
```

## Related Topics

- Share
                      Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_shares_input.htm)

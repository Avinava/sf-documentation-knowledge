---
title: "Credential Custom Header Input"
domain: chatterapi
topic: credential-custom-header-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.447Z
estimatedTokens: 199
keywords: [Credential, Custom, Input]
---

# Credential Custom Header Input

> Credential custom header input.

# Credential Custom Header Input

Credential custom header input.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| headerName | String | Header name. | Required | 58.0 |
| headerValue | String | Header value. | Required | 58.0 |
| id | String | Header ID. | Optional | 58.0 |
| sequenceNumber | Integer | Sequence number. | Required | 58.0 |

#### See Also

-   [External Credential Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_external_credential_input.htm "Input used to create or update an external credential.")

-   [Named Credential Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_named_credential_input.htm "Input used to create or update a named credential.")

## Code Examples

```
{
   "headerName": "SampleHeader",
   "headerValue": "SampleHeaderValue",
   "sequenceNumber": 1
}
```

## Related Topics

- External Credential Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_external_credential_input.htm)
- Named Credential Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_named_credential_input.htm)

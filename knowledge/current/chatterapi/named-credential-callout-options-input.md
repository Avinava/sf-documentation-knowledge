---
title: "Named Credential Callout Options Input"
domain: chatterapi
topic: named-credential-callout-options-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.167Z
estimatedTokens: 207
keywords: [Named, Credential, Callout, Options, Input]
---

# Named Credential Callout Options Input

> Named credential callout options input.

# Named Credential Callout Options Input

Named credential callout options input.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| allowMerge​FieldsInBody | Boolean | Specifies whether to allow merge fields in the HTTP body (true) or not (false). | Required | 58.0 |
| allowMerge​FieldsInHeader | Boolean | Specifies whether to allow merge fields in the HTTP header (true) or not (false). | Required | 58.0 |
| generate​Authorization​Header | Boolean | Specifies whether to generate an authorization header (true) or not (false). | Required | 58.0 |

#### See Also

-   [Named Credential Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_named_credential_input.htm "Input used to create or update a named credential.")

## Code Examples

```
{
   "allowMergeFieldsInBody": false,
   "allowMergeFieldsInHeader": true,
   "generateAuthorizationHeader": true
}
```

## Related Topics

- Named Credential Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_named_credential_input.htm)

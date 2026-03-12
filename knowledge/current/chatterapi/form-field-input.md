---
title: "Form Field Input"
domain: chatterapi
topic: form-field-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.758Z
estimatedTokens: 143
keywords: [Form, Input, Marketing, integration]
---

# Form Field Input

> Marketing integration form field.

# Form Field Input

Marketing integration form field.

Root XML tag

<formFieldInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| name | String | Name of the marketing integration form field. | Required | 53.0 |
| type | String | Type of marketing integration form field. Values are:BooleanDateEmailAddressNumberText | Required | 53.0 |

#### See Also

-   [Form Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_form_input.htm "Marketing integration form.")

## Code Examples

```
{
"name" : "Email Address",
"type" : "EmailAddress"
}
```

## Related Topics

- Form Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_form_input.htm)

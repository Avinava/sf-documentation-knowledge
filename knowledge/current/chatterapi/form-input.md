---
title: "Form Input"
domain: chatterapi
topic: form-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.761Z
estimatedTokens: 140
keywords: [Form, Input, Marketing, integration]
---

# Form Input

> Marketing integration form.

# Form Input

Marketing integration form.

Root XML tag

<formInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| formFieldsList | Form Field Input[] | Fields for the marketing integration form. | Required | 53.0 |
| formName | String | Name of the marketing integration form. | Required | 53.0 |
| member​Identification​Code | String | The member identification code (MID) of the Marketing Cloud Engagement account associated with the form. | Required | 53.0 |

## Code Examples

```
{
"formFieldsList" : {
   "formFields" : [{
      "name" : "First Name",
      "type" : "Text"
      },
      {
      "name" : "Last Name",
      "type" : "Text"
      },
      {
      "name" : "Email",
      "type" : "EmailAddress"
      }]
   },
"formName" : "Contact Us Data",
"memberIdentificationCode" : "marketing-account-id"
}
```

## Related Topics

- Form Field Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_form_field_input.htm)

---
title: "Form Submission Input"
domain: chatterapi
topic: form-submission-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.767Z
estimatedTokens: 89
keywords: [Form, Submission, Input, Marketing, integration]
---

# Form Submission Input

> Marketing integration form submission.

# Form Submission Input

Marketing integration form submission.

Root XML tag

<formSubmissionInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| formFieldsList | Form Submission Field Input[] | Fields for the marketing integration form. | Required | 53.0 |

## Code Examples

```
{
"formFieldsList" : {
   "formFields" : [{
      "name" : "First Name",
      "value" : "Test"
      },
      {
      "name" : "Last Name",
      "value" : "Moore"
      },
      {
      "name" : "Email",
      "value" : "testMoore@test.com"
      }]
   }
}
```

## Related Topics

- Form Submission Field Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_form_submission_field_input.htm)

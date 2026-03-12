---
title: "Microsites Marketing Integration Form Data"
domain: chatterapi
topic: microsites-marketing-integration-form-data
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.754Z
estimatedTokens: 164
keywords: [Microsites, Marketing, Integration, Form, Data, Submit, Experience, Cloud, site]
---

# Microsites Marketing Integration Form Data

> Submit a marketing integration form for an Experience Cloud
      site.

# Microsites Marketing Integration Form Data

Submit a marketing integration form for an Experience Cloud site.

Resource

```

```

Available version

53.0

HTTP methods

POST

Request body for POST

Root XML tag

<formSubmissionInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| formFieldsList | Form Submission Field Input[] | Fields for the marketing integration form. | Required | 53.0 |

Response body for POST

[Form Submission](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_form_submission.htm "Marketing integration form submission.")

## Code Examples

```
/sites/siteId/marketing-integration/forms/formId/data
```

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
- Form Submission (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_form_submission.htm)

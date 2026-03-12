---
title: "Application Form"
domain: omnistudio
topic: application-form
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:48.854Z
estimatedTokens: 267
keywords: [Application, Form, Create, application, form, details.]
---

# Application Form

> Create application form with details.

# Application Form

Create application form with details.

Resource

```

```

Resource example

```

```

Available version

61.0

HTTP methods

POST

Request body for POST

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| account | Application Form Account Input | Application form account associated to the application form details. | Optional | 61.0 |
| applicants | Applicant Wrapper Input[] | Applicants associated to the application form details. | Optional | 61.0 |
| applicationForm | Application Form Input | Application form associated to the application form details. | Required | 61.0 |
| application​FormProducts | Application Form Product Input[] | Application form products associated to the application form details. | Optional | 61.0 |

Response body for POST

[Create Application Form](atlas.en-us.industries_reference.meta/industries_reference/connect_responses_create_application_form_output.htm "Output representation of the result with the created application form record.")

## Code Examples

```
/connect/industries/application-forms
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/industries/application-forms/
```

## Related Topics

- Application Form Account Input (atlas.en-us.industries_reference.meta/industries_reference/connect_requests_application_form_account_input.htm)
- Applicant Wrapper Input (atlas.en-us.industries_reference.meta/industries_reference/connect_requests_applicant_wrapper_input.htm)
- Application Form Input (atlas.en-us.industries_reference.meta/industries_reference/connect_requests_application_form_input.htm)
- Application Form Product Input (atlas.en-us.industries_reference.meta/industries_reference/connect_requests_application_form_product_input.htm)
- Create Application
              Form (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_create_application_form_output.htm)

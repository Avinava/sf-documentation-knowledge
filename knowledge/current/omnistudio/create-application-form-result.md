---
title: "Create Application Form Result"
domain: omnistudio
topic: create-application-form-result
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:49.917Z
estimatedTokens: 167
keywords: [Create, Application, Form, Result, Output, representation, created, application, form, record.]
---

# Create Application Form Result

> Output representation of the created application form record.

# Create Application Form Result

Output representation of the created application form record.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| accountId | String | ID of the application form account. | Small, 61.0 | 61.0 |
| applicants | Create Application Form Applicant[] | Details of the applicants related to the application form. | Small, 61.0 | 61.0 |
| application​FormId | String | ID of the application form. | Small, 61.0 | 61.0 |
| application​FormProducts | Create Application Form Product[] | Application form product related to the application form result. | Small, 61.0 | 61.0 |

## Related Topics

- Create Application Form Applicant (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_create_application_form_applicant_output.htm)
- Create Application Form Product (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_create_application_form_product_output.htm)

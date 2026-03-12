---
title: "Create Application Form Details Input"
domain: omnistudio
topic: create-application-form-details-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:48.194Z
estimatedTokens: 193
keywords: [Create, Application, Form, Details, Input, representation, request, create, application, form, details.]
---

# Create Application Form Details Input

> Input representation of the request to create an application form with
    details.

# Create Application Form Details Input

Input representation of the request to create an application form with details.

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| account | Application Form Account Input | Application form account associated to the application form details. | Optional | 61.0 |
| applicants | Applicant Wrapper Input[] | Applicants associated to the application form details. | Optional | 61.0 |
| applicationForm | Application Form Input | Application form associated to the application form details. | Required | 61.0 |
| application​FormProducts | Application Form Product Input[] | Application form products associated to the application form details. | Optional | 61.0 |

## Related Topics

- Application Form Account Input (atlas.en-us.industries_reference.meta/industries_reference/connect_requests_application_form_account_input.htm)
- Applicant Wrapper Input (atlas.en-us.industries_reference.meta/industries_reference/connect_requests_applicant_wrapper_input.htm)
- Application Form Input (atlas.en-us.industries_reference.meta/industries_reference/connect_requests_application_form_input.htm)
- Application Form Product Input (atlas.en-us.industries_reference.meta/industries_reference/connect_requests_application_form_product_input.htm)

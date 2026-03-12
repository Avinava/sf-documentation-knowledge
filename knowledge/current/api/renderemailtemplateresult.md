---
title: "RenderEmailTemplateResult"
domain: api
topic: renderemailtemplateresult
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:57.491Z
estimatedTokens: 659
keywords: [RenderEmailTemplateResult, status, error, processed, renderEmailTemplate, call, including, individual, results, rendered, email, templates, RenderEmailTemplateBodyResult, RenderEmailTemplateError]
---

# RenderEmailTemplateResult

> Contains status and error information for a request processed by the renderEmailTemplate() call, including individual results of
    rendered email templates.

# RenderEmailTemplateResult

Contains status and error information for a request processed by the renderEmailTemplate() call, including individual results of rendered email templates.

| Name | Type | Description |
| --- | --- | --- |
| bodyResults | RenderEmailTemplateBodyResult[] | Contains status and error information for each template body that renderEmailTemplate() processed in a request, including merged body text of templates. |
| errors | Error[] | Contains one or more errors that occurred when renderEmailTemplate() rendered a request. |
| success | boolean | Indicates whether a request was successfully processed (true) or not (false). |

## RenderEmailTemplateBodyResult

Contains status and error information for each template body that renderEmailTemplate() processed in a request, including merged body text of templates.

| Name | Type | Description |
| --- | --- | --- |
| errors | RenderEmailTemplateError[] | Contains one or more errors that are associated with a template body that renderEmailTemplate() processed. |
| mergedBody | string | The text of the template body with the merge fields replaced with their corresponding values from Salesforce objects. The whatId and whoId fields on the request reference the Salesforce objects to use.The mergedBody field is populated only when the rendering of the template was successful (success is equal to true). If success is equal to false, mergedBody is null. |
| success | boolean | Indicates whether a template body was successfully rendered (true) or not (false). |

## RenderEmailTemplateError

An error that occurred when [renderEmailTemplate()](atlas.en-us.api.meta/api/sforce_api_calls_renderemailtemplate.htm#sforce_api_calls_renderemailtemplate "Replaces merge fields in text bodies of email templates with values from Salesforce records, even for polymorphic fields. The email template bodies and their corresponding whoId and whatId values are specified in the argument.") processed a template body.

| Name | Type | Description |
| --- | --- | --- |
| fieldName | string[] | The merge field that affected the error condition. |
| message | string | Error message text. |
| offset | int | The offset in the template body text of the merge field that caused the error. The offset is calculated as the number of characters from the start of the body text. The offset is -1 if it can’t be determined because of insufficient contextual information. |
| statusCode | StatusCode | A code that characterizes the error. The full list of status codes is available in the WSDL file for your organization (see Generating the WSDL File for Your Organization). |

## Related Topics

- renderEmailTemplate() (atlas.en-us.api.meta/api/sforce_api_calls_renderemailtemplate.htm)
- StatusCode (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
- Generating the WSDL File for Your
                  Organization (atlas.en-us.api.meta/api/sforce_api_quickstart_steps_generate_wsdl.htm)

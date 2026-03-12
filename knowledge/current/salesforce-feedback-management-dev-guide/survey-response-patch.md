---
title: "survey-response (PATCH)"
domain: salesforce-feedback-management-dev-guide
topic: survey-response-patch
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:41.838Z
estimatedTokens: 340
keywords: [survey-response, PATCH, Listed, error, codes, code, messages, associated, Salesforce, Feedback, Management, SFM, unAuth, APIs, resource]
---

# survey-response (PATCH)

> Listed are the error codes and error code messages associated with the Salesforce
  Feedback Management (SFM) unAuth Response APIs for the survey-response PATCH resource.

# survey-response (PATCH)

Listed are the error codes and error code messages associated with the Salesforce Feedback Management (SFM) unAuth Response APIs for the survey-response PATCH resource.

## Error Codes and Responses for the survey-response PATCH Resource

This table lists the HTTP response code descriptions that are unique to this resource.

| HTTP Response Code | Error Code | Description |
| --- | --- | --- |
| 400 | API_CURRENTLY_DISABLED | The UnauthenticatedSurveyParticipation API setting isn’t enabled in your Salesforce org. Ask your Salesforce admin for help. |
| 400 | API_CURRENTLY_DISABLED | Your Salesforce org doesn’t have a default Experience Cloud site. Select the default Experience Cloud site from the Survey Settings page in Salesforce, or contact your Salesforce admin. |
| 400 | MISSING_RECORD | Specify an existing survey, or ensure that the survey is shared with a guest user, and try again. |
| 400 | INVALID_API_INPUT | Specify a valid invitation configuration, and try again. |
| 400 | INVALID_API_INPUT | We couldn’t process the request. Specify valid inputs, and try again. |
| 401 | UNAUTHORIZED | The access token has expired or isn’t authorized to access the SFM unAuth Response APIs. |
| 500 | UNKOWN_EXCEPTION | We couldn’t process the request because of an internal server error. Contact your Salesforce admin. |

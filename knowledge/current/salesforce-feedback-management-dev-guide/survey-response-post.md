---
title: "survey-response (POST)"
domain: salesforce-feedback-management-dev-guide
topic: survey-response-post
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:41.842Z
estimatedTokens: 507
keywords: [survey-response, POST, Listed, error, codes, code, messages, associated, Salesforce, Feedback, Management, SFM, unAuth, APIs, resource]
---

# survey-response (POST)

> Listed are the error codes and error code messages associated with the Salesforce
    Feedback Management (SFM) unAuth Response APIs for the survey-response (POST) resource.

# survey-response (POST)

Listed are the error codes and error code messages associated with the Salesforce Feedback Management (SFM) unAuth Response APIs for the survey-response (POST) resource.

## Error Codes and Responses for the survey-response POST Resource

This table lists the HTTP response code descriptions that are unique to this resource.

| HTTP Response Code | Error Code | Description |
| --- | --- | --- |
| 400 | INVALID_API_INPUT | {recipientID} is invalid. Specify a recipientId of the type lead or contact, and try again. |
| 400 | API_CURRENTLY_DISABLED | The UnauthenticatedSurveyParticipation API isn’t enabled in your Salesforce org. Ask your Salesforce admin for help. |
| 400 | API_CURRENTLY_DISABLED | Your Salesforce org doesn’t have a default Experience Cloud site. Select the default Experience Cloud site from the Survey Settings page in Salesforce, or contact your Salesforce admin. |
| 400 | MISSING_RECORD | Specify an existing survey, or ensure that the survey is shared with a guest user, and try again. |
| 400 | INVALID_INPUT_COMBINATION | Specify a basic survey, and try again. |
| 400 | INVALID_API_INPUT | Either activate the specified survey, or specify an active survey, and try again. |
| 400 | INVALID_API_INPUT | The specified merge field access level isn’t supported. Specify a different merge field access level, and try again. |
| 400 | INVALID_API_INPUT | We couldn’t process the request. Specify valid inputs, and try again. |
| 400 | MISSING_ARGUMENT | The collectAnonymousResponse property is a required property. Specify the collectAnonymousResponse property, and try again. |
| 400 | MISSING_RECORD | The recipient ID provided in the survey doesn't exist in your org. {recipientId} or the related record isn’t shared with you. |
| 401 | UNAUTHORIZED | The access token has expired or isn’t authorized to access the SFM unAuth Response APIs. |
| 500 | UNKOWN_EXCEPTION | We couldn’t process the request because of an internal server error. Contact your Salesforce admin. |

---
title: "Surveys Resources"
domain: chatterapi
topic: surveys-resources
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:16.713Z
estimatedTokens: 463
keywords: [Surveys, Resources, Understand, customer, feedback, evolves, over, time, engaging, customers, users, relevant, personalized, Incorporate, survey]
---

# Surveys Resources

> Understand customer feedback as it evolves over time by
      engaging customers and users with relevant, personalized surveys. Incorporate survey data into
      your feedback management process and gain actionable insights at every stage of the customer
      lifecycle.

# Surveys Resources

Understand customer feedback as it evolves over time by engaging customers and users with relevant, personalized surveys. Incorporate survey data into your feedback management process and gain actionable insights at every stage of the customer lifecycle.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

Salesforce Feedback Management (SFM) Business API performance can be impacted if a POST request exceeds 5,400 calls per minute and if a PATCH request exceeds 2,700 calls per minute at the org level. For more rate limit information, see [Connect REST API Limits](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/intro_rate_limits.htm "HTML (New Window)").

Available resources are:

| Resource | Description |
| --- | --- |
| /connect/surveys/surveyId/survey-invitation-emails | Email survey invitations to up to 300 participants. You can email leads, contacts, or users in your org. Either a link to launch the survey or a question can be embedded in the email invitations. |
| /connect/surveys/surveyId/survey-response | Create responses using the invitation configuration details and initiate the process of submitting the survey responses by making a POST request. Submit the survey responses using the PATCH request. |
| /connect/surveys/surveyId/invitation​/surveyInvitationId/survey-response | Initialize the process of submitting survey responses and return the details of the first page of the survey by making a POST request. Submit the survey responses using the PATCH request. |

#### See Also

-   [*Salesforce Help*: Salesforce Feedback Management](https://help.salesforce.com/s/articleView?id=xcloud.concept_salesforce_surveys.htm&type=5&language=en_US "Salesforce Help: Salesforce Feedback Management  - HTML (New Window)")

## Related Topics

- /connect/surveys/surveyId/survey-invitation-emails (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_survey_invitation_emails.htm)
- /connect/surveys/surveyId/survey-response (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_create_submit_surveys.htm)
- /connect/surveys/surveyId/invitation​/surveyInvitationId/survey-response (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_create_submit_surveys_using_invitation_Id.htm)

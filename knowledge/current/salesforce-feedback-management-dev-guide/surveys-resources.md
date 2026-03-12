---
title: "Surveys Resources"
domain: salesforce-feedback-management-dev-guide
topic: surveys-resources
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:41.485Z
estimatedTokens: 903
keywords: [Surveys, Resources, Understand, customer, feedback, evolves, over, time, engaging, customers, users, relevant, personalized, Incorporate, survey]
---

# Surveys Resources

> Understand customer feedback as it evolves over time by
      engaging customers and users with relevant, personalized surveys. Incorporate survey data into
      your feedback management process and gain actionable insights at every stage of the customer
      lifecycle.

# Surveys Resources

Understand customer feedback as it evolves over time by engaging customers and users with relevant, personalized surveys. Incorporate survey data into your feedback management process and gain actionable insights at every stage of the customer lifecycle.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=salesforce_feedback_management_dev_guide)

#### Note

Salesforce Feedback Management (SFM) Business API performance can be impacted if a POST request exceeds 5,400 calls per minute and if a PATCH request exceeds 2,700 calls per minute at the org level. For more rate limit information, see [Connect REST API Limits](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/intro_rate_limits.htm "HTML (New Window)").

Available resources are:

| Resource | Description |
| --- | --- |
| /connect/surveys/surveyId/survey-invitation-emails | Email survey invitations to up to 300 participants. You can email leads, contacts, or users in your org. Either a link to launch the survey or a question can be embedded in the email invitations. |
| /connect/surveys/surveyId/survey-response | Create responses using the invitation configuration details and initiate the process of submitting the survey responses by making a POST request. Submit the survey responses using the PATCH request. |
| /connect/surveys/surveyId/invitation​/surveyInvitationId/survey-response | Initialize the process of submitting survey responses and return the details of the first page of the survey by making a POST request. Submit the survey responses using the PATCH request. |

-   **[Salesforce Surveys Invitation Emails Resource](atlas.en-us.salesforce_feedback_management_dev_guide.meta/salesforce_feedback_management_dev_guide/connect_resources_survey_invitation_emails.htm)**
    Email survey invitations to up to 300 participants. You can email leads, contacts, or users in your org. Either a link to launch the survey or a question can be embedded in the email invitations.
-   **[Survey Responses Using Invitation Configurations (POST, PATCH)](atlas.en-us.salesforce_feedback_management_dev_guide.meta/salesforce_feedback_management_dev_guide/connect_resources_create_submit_surveys.htm)**
    Create responses using the invitation configuration details and initiate the process of submitting the survey responses by making a POST request. Submit the survey responses using the PATCH request. You can create a survey to collect data from customers, employees, or other people whose feedback you need. The survey responses are stored in the SurveyResponse object and the responses to individual questions in the SurveyQuestionResponse object.
-   **[Surveys Responses Using Invitation ID (POST, PATCH)](atlas.en-us.salesforce_feedback_management_dev_guide.meta/salesforce_feedback_management_dev_guide/connect_resources_create_submit_surveys_using_invitation_Id.htm)**
    Initialize the process of submitting survey responses and return the details of the first page of the survey by making a POST request. Submit the survey responses using the PATCH request. You can create a survey to collect data from customers, employees, or other people whose feedback you need. The survey responses are stored in the SurveyResponse object and the responses to individual questions in the SurveyQuestionResponse object.

#### See Also

-   [Salesforce Platform Connect API rate limits](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/intro_rate_limits.htm "Salesforce Platform Connect API rate limits - HTML (New Window)")

## Related Topics

- /connect/surveys/surveyId/survey-invitation-emails (atlas.en-us.salesforce_feedback_management_dev_guide.meta/salesforce_feedback_management_dev_guide/connect_resources_survey_invitation_emails.htm)
- /connect/surveys/surveyId/survey-response (atlas.en-us.salesforce_feedback_management_dev_guide.meta/salesforce_feedback_management_dev_guide/connect_resources_create_submit_surveys.htm)
- /connect/surveys/surveyId/invitation​/surveyInvitationId/survey-response (atlas.en-us.salesforce_feedback_management_dev_guide.meta/salesforce_feedback_management_dev_guide/connect_resources_create_submit_surveys_using_invitation_Id.htm)
- Salesforce Surveys Invitation Emails Resource (atlas.en-us.salesforce_feedback_management_dev_guide.meta/salesforce_feedback_management_dev_guide/connect_resources_survey_invitation_emails.htm)
- Survey Responses Using Invitation Configurations (POST, PATCH) (atlas.en-us.salesforce_feedback_management_dev_guide.meta/salesforce_feedback_management_dev_guide/connect_resources_create_submit_surveys.htm)
- Surveys Responses Using Invitation ID (POST, PATCH) (atlas.en-us.salesforce_feedback_management_dev_guide.meta/salesforce_feedback_management_dev_guide/connect_resources_create_submit_surveys_using_invitation_Id.htm)

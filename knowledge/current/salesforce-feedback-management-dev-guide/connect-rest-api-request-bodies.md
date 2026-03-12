---
title: "Connect REST API Request Bodies"
domain: salesforce-feedback-management-dev-guide
topic: connect-rest-api-request-bodies
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:41.402Z
estimatedTokens: 1035
keywords: [Connect, REST, API, Bodies, perform, POST, PATCH, PUT, pass, query, formatted, either, XML, JSON, chapter]
---

# Connect REST API Request Bodies

> To perform a POST, PATCH, or PUT request, pass query parameters
or create a request body formatted in either XML or JSON. This chapter
lists the request bodies. The query parameters are listed with each
resource.

# Connect REST API Request Bodies

To perform a POST, PATCH, or PUT request, pass query parameters or create a request body formatted in either XML or JSON. This chapter lists the request bodies. The query parameters are listed with each resource.

To create a JSON request body, specify the properties of the request body in JSON format.

This is an example of a Comment request body.

```

```

If a request body is top-level, it has a root XML tag listed. To create an XML request body, nest the properties as XML tags inside the root XML tag.

This is the same Connect request body in XML format:

```

```

-   **[Survey Description Input](atlas.en-us.salesforce_feedback_management_dev_guide.meta/salesforce_feedback_management_dev_guide/connect_requests_survey_description_input.htm)**
    Input representation of the details of the survey recipient and their engagement context, and the language, related records, and invitation settings of the survey.
-   **[Survey Email Input](atlas.en-us.salesforce_feedback_management_dev_guide.meta/salesforce_feedback_management_dev_guide/connect_requests_survey_email_input.htm)**
    Survey email.
-   **[Survey Integer Question Response Input](atlas.en-us.salesforce_feedback_management_dev_guide.meta/salesforce_feedback_management_dev_guide/connect_requests_survey_integer_question_response_input.htm)**
    Input representation of the details of the response to an NPS question on the survey page.
-   **[Survey Invitation Settings Input](atlas.en-us.salesforce_feedback_management_dev_guide.meta/salesforce_feedback_management_dev_guide/connect_requests_survey_invitation_settings_input.htm)**
    Input representation of the settings of the survey invitation that define the participants who can respond to the survey, its expiration, and other related configurations.
-   **[Survey Page Response Input](atlas.en-us.salesforce_feedback_management_dev_guide.meta/salesforce_feedback_management_dev_guide/connect_requests_survey_page_response_input.htm)**
    Input representation of the details of the response to a survey page.
-   **[Survey Question Response Input](atlas.en-us.salesforce_feedback_management_dev_guide.meta/salesforce_feedback_management_dev_guide/connect_requests_survey_question_response_input.htm)**
    Input representation of the details of the response to a question on the survey page.
-   **[Survey Recipient Engagement Context Input](atlas.en-us.salesforce_feedback_management_dev_guide.meta/salesforce_feedback_management_dev_guide/connect_requests_survey_recipient_engagement_context_input.htm)**
    Context based on which the survey invitation is sent to a participant.
-   **[Survey Recipient Survey Subjects Input](atlas.en-us.salesforce_feedback_management_dev_guide.meta/salesforce_feedback_management_dev_guide/connect_requests_survey_recipient_survey_subjects_input.htm)**
    Records associated with the survey invitation.
-   **[Survey Response Input](atlas.en-us.salesforce_feedback_management_dev_guide.meta/salesforce_feedback_management_dev_guide/connect_requests_survey_response_input.htm)**
    Input representation of the details of a survey response.
-   **[Survey Selection Question Choice Input](atlas.en-us.salesforce_feedback_management_dev_guide.meta/salesforce_feedback_management_dev_guide/connect_requests_survey_selection_question_choice_input.htm)**
    The details of a boolean, rating, single selection, or a multiple selection question’s choice on the survey page.
-   **[Survey Selection Question Response Input](atlas.en-us.salesforce_feedback_management_dev_guide.meta/salesforce_feedback_management_dev_guide/connect_requests_survey_selection_question_response_input.htm)**
    Input representation of the details of the response to a boolean, rating, single selection, or a multiple selection question on the survey page.
-   **[Survey Text Question Response Input](atlas.en-us.salesforce_feedback_management_dev_guide.meta/salesforce_feedback_management_dev_guide/connect_requests_survey_text_question_response_input.htm)**
    The details of the response to a short-text or a long-text question on the survey page.

## Code Examples

```
{
	"body" : "Let's look for a new solution."
}
```

```
<comment>
	<body>Let's look for a new solution.</body>
</comment>
```

## Related Topics

- Survey Description Input (atlas.en-us.salesforce_feedback_management_dev_guide.meta/salesforce_feedback_management_dev_guide/connect_requests_survey_description_input.htm)
- Survey Email Input (atlas.en-us.salesforce_feedback_management_dev_guide.meta/salesforce_feedback_management_dev_guide/connect_requests_survey_email_input.htm)
- Survey Integer Question Response Input (atlas.en-us.salesforce_feedback_management_dev_guide.meta/salesforce_feedback_management_dev_guide/connect_requests_survey_integer_question_response_input.htm)
- Survey Invitation Settings Input (atlas.en-us.salesforce_feedback_management_dev_guide.meta/salesforce_feedback_management_dev_guide/connect_requests_survey_invitation_settings_input.htm)
- Survey Page Response Input (atlas.en-us.salesforce_feedback_management_dev_guide.meta/salesforce_feedback_management_dev_guide/connect_requests_survey_page_response_input.htm)
- Survey Question Response Input (atlas.en-us.salesforce_feedback_management_dev_guide.meta/salesforce_feedback_management_dev_guide/connect_requests_survey_question_response_input.htm)
- Survey Recipient Engagement Context Input (atlas.en-us.salesforce_feedback_management_dev_guide.meta/salesforce_feedback_management_dev_guide/connect_requests_survey_recipient_engagement_context_input.htm)
- Survey Recipient Survey Subjects Input (atlas.en-us.salesforce_feedback_management_dev_guide.meta/salesforce_feedback_management_dev_guide/connect_requests_survey_recipient_survey_subjects_input.htm)
- Survey Response Input (atlas.en-us.salesforce_feedback_management_dev_guide.meta/salesforce_feedback_management_dev_guide/connect_requests_survey_response_input.htm)
- Survey Selection Question Choice Input (atlas.en-us.salesforce_feedback_management_dev_guide.meta/salesforce_feedback_management_dev_guide/connect_requests_survey_selection_question_choice_input.htm)

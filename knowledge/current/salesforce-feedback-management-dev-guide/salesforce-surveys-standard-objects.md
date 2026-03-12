---
title: "Salesforce Surveys Standard Objects"
domain: salesforce-feedback-management-dev-guide
topic: salesforce-surveys-standard-objects
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:41.592Z
estimatedTokens: 1055
keywords: [Salesforce, Surveys, Standard, Objects, Feedback, Management, SFM, access, suite, Setup, tabs, work, core, features]
---

# Salesforce Surveys Standard Objects

> Salesforce Feedback Management (SFM) provides you access to a
      suite of standard objects that you can find in Setup and as tabs in Salesforce. Use the
      standard objects to work with the core Surveys features.

# Salesforce Surveys Standard Objects

Salesforce Feedback Management (SFM) provides you access to a suite of standard objects that you can find in Setup and as tabs in Salesforce. Use the standard objects to work with the core Surveys features.

SFM is available in both Salesforce Classic ([not available in all orgs](https://help.salesforce.com/s/articleView?id=xcloud.overview_edition_lex_only.htm&type=5&language=en_US "HTML (New Window)")) and Lightning Experience.

SFM is available in Enterprise, Unlimited, and Developer editions.

Here’s a list of standard objects available with SFM.

-   **[Survey](atlas.en-us.salesforce_feedback_management_dev_guide.meta/salesforce_feedback_management_dev_guide/sforce_api_objects_survey.htm)**
    Represents a survey.
-   **[SurveyEmailBranding](atlas.en-us.salesforce_feedback_management_dev_guide.meta/salesforce_feedback_management_dev_guide/sforce_api_objects_surveyemailbranding.htm)**
    Represents the configuration settings for invitation emails sent to survey participants for a particular survey.
-   **[SurveyEngagementContext](atlas.en-us.salesforce_feedback_management_dev_guide.meta/salesforce_feedback_management_dev_guide/sforce_api_objects_surveyengagementcontext.htm)**
    Represents the context based on which a survey invitation was sent or a survey response was received. This object is available in API version 49.0 and later.
-   **[SurveyInvitation](atlas.en-us.salesforce_feedback_management_dev_guide.meta/salesforce_feedback_management_dev_guide/sforce_api_objects_surveyinvitation.htm)**
    Represents the invitation sent to a participant to complete the survey.
-   **[SurveyPage](atlas.en-us.salesforce_feedback_management_dev_guide.meta/salesforce_feedback_management_dev_guide/sforce_api_objects_surveypage.htm)**
    Represents a page, such as the title page or a question page, in a survey.
-   **[SurveyQuestion](atlas.en-us.salesforce_feedback_management_dev_guide.meta/salesforce_feedback_management_dev_guide/sforce_api_objects_surveyquestion.htm)**
    Represents a question in a survey.
-   **[SurveyQuestionChoice](atlas.en-us.salesforce_feedback_management_dev_guide.meta/salesforce_feedback_management_dev_guide/sforce_api_objects_surveyquestionchoice.htm)**
    Represents an answer choice that a participant can select for a survey question.
-   **[SurveyQuestionResponse](atlas.en-us.salesforce_feedback_management_dev_guide.meta/salesforce_feedback_management_dev_guide/sforce_api_objects_surveyquestionresponse.htm)**
    Represents a participant’s answer to a specific question.
-   **[SurveyQuestionScore](atlas.en-us.salesforce_feedback_management_dev_guide.meta/salesforce_feedback_management_dev_guide/sforce_api_objects_surveyquestionscore.htm)**
    Represents the aggregate of responses for the following question types: date, multiple choice, picklist, radio, ranking, rating, scoring, slider, and [Net Promoter Score® (NPS®)](https://www.salesforce.com/content/dam/web/en_us/www/documents/legal/Agreements/product-specific-terms/net-promoter-and-nps.pdf).
-   **[SurveyResponse](atlas.en-us.salesforce_feedback_management_dev_guide.meta/salesforce_feedback_management_dev_guide/sforce_api_objects_surveyresponse.htm)**
    Represents information about a participant’s response to a survey, such as the status of the response, the participant’s location, and when the survey was completed.
-   **[SurveySubject](atlas.en-us.salesforce_feedback_management_dev_guide.meta/salesforce_feedback_management_dev_guide/sforce_api_objects_surveysubject.htm)**
    Represents a relationship between a survey and another object, such as an account or a case.
-   **[SurveyVersion](atlas.en-us.salesforce_feedback_management_dev_guide.meta/salesforce_feedback_management_dev_guide/sforce_api_objects_surveyversion.htm)**
    Represents a version of a survey.
-   **[SurveyVersionAddlInfo](atlas.en-us.salesforce_feedback_management_dev_guide.meta/salesforce_feedback_management_dev_guide/sforce_api_objects_surveyversionaddlinfo.htm)**
    Represents additional information about a survey version. This information defines the default settings of a survey version. This object is available in API version 49.0 and later.

## Related Topics

- Survey (atlas.en-us.salesforce_feedback_management_dev_guide.meta/salesforce_feedback_management_dev_guide/sforce_api_objects_survey.htm)
- SurveyEmailBranding (atlas.en-us.salesforce_feedback_management_dev_guide.meta/salesforce_feedback_management_dev_guide/sforce_api_objects_surveyemailbranding.htm)
- SurveyEngagementContext (atlas.en-us.salesforce_feedback_management_dev_guide.meta/salesforce_feedback_management_dev_guide/sforce_api_objects_surveyengagementcontext.htm)
- SurveyInvitation (atlas.en-us.salesforce_feedback_management_dev_guide.meta/salesforce_feedback_management_dev_guide/sforce_api_objects_surveyinvitation.htm)
- SurveyPage (atlas.en-us.salesforce_feedback_management_dev_guide.meta/salesforce_feedback_management_dev_guide/sforce_api_objects_surveypage.htm)
- SurveyQuestion (atlas.en-us.salesforce_feedback_management_dev_guide.meta/salesforce_feedback_management_dev_guide/sforce_api_objects_surveyquestion.htm)
- SurveyQuestionChoice (atlas.en-us.salesforce_feedback_management_dev_guide.meta/salesforce_feedback_management_dev_guide/sforce_api_objects_surveyquestionchoice.htm)
- SurveyQuestionResponse (atlas.en-us.salesforce_feedback_management_dev_guide.meta/salesforce_feedback_management_dev_guide/sforce_api_objects_surveyquestionresponse.htm)
- SurveyQuestionScore (atlas.en-us.salesforce_feedback_management_dev_guide.meta/salesforce_feedback_management_dev_guide/sforce_api_objects_surveyquestionscore.htm)
- SurveyResponse (atlas.en-us.salesforce_feedback_management_dev_guide.meta/salesforce_feedback_management_dev_guide/sforce_api_objects_surveyresponse.htm)

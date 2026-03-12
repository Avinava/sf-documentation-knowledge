---
title: "ConnectApi Input Classes"
domain: salesforce-feedback-management-dev-guide
topic: connectapi-input-classes
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:41.352Z
estimatedTokens: 319
keywords: [ConnectApi, Input, Classes, take, arguments, instances]
---

# ConnectApi Input Classes

> Some ConnectApi methods take arguments that are instances of ConnectApi input classes.

# ConnectApi Input Classes

Some ConnectApi methods take arguments that are instances of ConnectApi input classes.

Input classes are concrete unless marked abstract in this documentation. Concrete input classes have public constructors that have no parameters.

Some methods have parameters that are typed with an abstract class. You must pass in an instance of a concrete child class for these parameters.

Most input class properties can be set. Read-only properties are noted in this documentation.

-   **[ConnectApi.SurveyInvitationEmailInput](atlas.en-us.salesforce_feedback_management_dev_guide.meta/salesforce_feedback_management_dev_guide/apex_connectapi_input_survey_email.htm)**
    Survey invitation email.
-   **[ConnectApi.RecipientEngagementContextInput](atlas.en-us.salesforce_feedback_management_dev_guide.meta/salesforce_feedback_management_dev_guide/apex_connectapi_input_survey_recipient_engagement_context.htm)**
    Context based on which the survey invitation is sent to a participant.
-   **[ConnectApi.AssociateRecordsWithRecipientInput](atlas.en-us.salesforce_feedback_management_dev_guide.meta/salesforce_feedback_management_dev_guide/apex_connectapi_input_survey_recipient_survey_subjects.htm)**
    Records associated with the survey invitation.

## Related Topics

- ConnectApi.SurveyInvitationEmailInput (atlas.en-us.salesforce_feedback_management_dev_guide.meta/salesforce_feedback_management_dev_guide/apex_connectapi_input_survey_email.htm)
- ConnectApi.RecipientEngagementContextInput (atlas.en-us.salesforce_feedback_management_dev_guide.meta/salesforce_feedback_management_dev_guide/apex_connectapi_input_survey_recipient_engagement_context.htm)
- ConnectApi.AssociateRecordsWithRecipientInput (atlas.en-us.salesforce_feedback_management_dev_guide.meta/salesforce_feedback_management_dev_guide/apex_connectapi_input_survey_recipient_survey_subjects.htm)

---
title: "Set Up Your Environment"
domain: salesforce-feedback-management-dev-guide
topic: set-up-your-environment
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:41.825Z
estimatedTokens: 670
keywords: [Environment, Salesforce, ready, in-app, survey, invitation, Feedback, Management, SFM, unAuth, APIs]
---

# Set Up Your Environment

> Get your Salesforce environment ready before you create your first in-app
      survey.

# Set Up Your Environment

Get your Salesforce environment ready before you create your first in-app survey.

To create an in-app survey, set up your environment with these prerequisites.

| Available in: Salesforce Classic (not available in all orgs) and Lightning Experience |
| --- |
| Available in: Developer, Enterprise, and Unlimited Editions |
| Available with the Feedback Management - Growth or Feedback Management - Starter license |


| User Permissions Needed |
| --- |
| To create a basic survey: | Permissions to create surveys |

-   Enable users to create surveys and send them to the participants by enabling the Surveys feature in Salesforce Setup. See [Enable Surveys and Configure Survey Settings](https://help.salesforce.com/s/articleView?id=xcloud.task_enable_surveys.htm&type=5&language=en_US "HTML (New Window)").
-   Create a named credential with a callout endpoint by using your credentials and then use it in an Apex class that makes Connect REST API calls by using SFM APIs. See [Named Credentials as Callout Endpoints](https://help.salesforce.com/s/articleView?id=xcloud.named_credentials_about.htm&type=5&language=en_US "HTML (New Window)").
-   Configure the sample LWCs that are available with the [package](https://resources.docs.salesforce.com/rel1/doc/en-us/static/misc/Survey_Sample_App.zip "HTML (New Window)") along with an Apex class to integrate the LWCs. Embed the LWCs in Salesforce Lightning pages, such as the home page or record pages to help the participants respond to the survey in Salesforce. See [LWCs for Surveys](atlas.en-us.salesforce_feedback_management_dev_guide.meta/salesforce_feedback_management_dev_guide/salesforce_surveys_lightning_web_components_overview.htm "Lightning Web Components (LWCs) for Surveys provide a variety of question types that you can use in a survey.").
    1.  Specify a valid SurveyId value and the details of named credentials in the SurveyApi Apex class (SurveyApi.cls file) from the package.
    2.  Deploy your LWCs in Salesforce. See [Deploy LWCs in Salesforce](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.get_started_sfdx_deploy "HTML (New Window)").
    3.  Configure the LWCs provided with the package for Lightning App Builder. See [Configure a Component for Lightning App Builder](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.use_config_for_app_builder "HTML (New Window)").

#### See Also

-   [Salesforce Help: Feedback Management Licenses](https://help.salesforce.com/s/articleView?id=xcloud.concept_survey_licenses.htm&type=5&language=en_US "Salesforce Help: Feedback Management Licenses - HTML (New Window)")

## Related Topics

- LWCs for Surveys (atlas.en-us.salesforce_feedback_management_dev_guide.meta/salesforce_feedback_management_dev_guide/salesforce_surveys_lightning_web_components_overview.htm)

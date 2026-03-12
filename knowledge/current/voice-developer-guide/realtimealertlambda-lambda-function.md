---
title: "RealtimeAlertLambda Lambda Function"
domain: voice-developer-guide
topic: realtimealertlambda-lambda-function
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:21.690Z
estimatedTokens: 707
keywords: [RealtimeAlertLambda, Lambda, Function, publishes, RealtimeAlertEvent, platform, event, Salesforce, REST, API, CloudWatch, alarms, Amazon, Connect, instance]
---

# RealtimeAlertLambda Lambda Function

> This Lambda publishes the RealtimeAlertEvent platform event using the
      Salesforce REST API. This function is called by CloudWatch alarms in your Amazon Connect
      instance. You don’t need to call this function manually.

# RealtimeAlertLambda Lambda Function

This Lambda publishes the RealtimeAlertEvent platform event using the Salesforce REST API. This function is called by CloudWatch alarms in your Amazon Connect instance. You don’t need to call this function manually.

**Configuration:** This function is available to Service Cloud Voice customers who are using an Amazon Connect instance that’s provided by Salesforce. This Lambda is installed with Service Cloud Voice contact center version 8.0 or later. See [Update Your Contact Center](https://help.salesforce.com/s/articleView?id=service.voice_update_cc.htm&type=5&language=en_US) for more details. No additional configuration is necessary. See a [sample version of the invokeTelephonyIntegrationApi Lambda function](https://github.com/service-cloud-voice/ServiceCloudVoiceLambdas/tree/master/invokeTelephonyIntegrationApi) in GitHub.

**Usage:** You don’t need to call this function manually.

This Lambda function is called by [the provided Cloudwatch alarms](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_customer_alerts_alarms.htm "Salesforce provides a set of alarms that you should fine-tune so that you can monitor the status of your contact center and get notified when important events are triggered. Some of these alarms are enabled by default, others must be enabled if you want them to operate in your environment.") through a Simple Notification Service (SNS) topic when an event occurs. This function performs the following steps:

1.  Checks if the event is triggered by an SNS event.
2.  Populates the [RealtimeAlertEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/sforce_api_objects_realtimealertevent.htm) platform event fields using the SNS event data.
3.  Publishes the event to Salesforce using the [InvokeSalesforceRestApiFunction Lambda Function](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_invokesalesforcerestapi.htm "This Lambda function calls the Salesforce REST API. You can place this Lambda function within a contact flow to create, update, or query Salesforce records.").

#### See Also

-   [Customer Alerts Alarms](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_customer_alerts_alarms.htm "Salesforce provides a set of alarms that you should fine-tune so that you can monitor the status of your contact center and get notified when important events are triggered. Some of these alarms are enabled by default, others must be enabled if you want them to operate in your environment.")

-   [Customer Alerts Platform Event](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_customer_alerts_event.htm "The RealtimeAlertEvent platform event notifies subscribers about triggered alarms in your Amazon Connect instance.")

## Related Topics

- the
          provided Cloudwatch alarms (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_customer_alerts_alarms.htm)
- InvokeSalesforceRestApiFunction Lambda Function (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_invokesalesforcerestapi.htm)
- Customer Alerts Alarms (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_customer_alerts_alarms.htm)
- Customer Alerts Platform Event (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_customer_alerts_event.htm)

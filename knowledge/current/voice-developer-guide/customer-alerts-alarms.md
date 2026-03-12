---
title: "Customer Alerts Alarms"
domain: voice-developer-guide
topic: customer-alerts-alarms
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:21.491Z
estimatedTokens: 2328
keywords: [Customer, Alerts, Alarms, Salesforce, fine-tune, monitor, status, contact, center, notified, events, triggered, enabled, others, want]
---

# Customer Alerts Alarms

> Salesforce provides a set of alarms that you should fine-tune so that you can monitor
    the status of your contact center and get notified when important events are triggered. Some of
    these alarms are enabled by default, others must be enabled if you want them to operate in your
    environment.

# Customer Alerts Alarms

Salesforce provides a set of alarms that you should fine-tune so that you can monitor the status of your contact center and get notified when important events are triggered. Some of these alarms are enabled by default, others must be enabled if you want them to operate in your environment.

These alarms fall into several different categories:

Concurrent Calls

One alarm triggers when there are a high number of concurrent calls. This alert can indicate if you’re reaching Amazon’s concurrent call limit. Upon reaching the limit, you can either file an AWS support ticket to increase your quota, or you can adjust some other aspect of your implementation.

Errors

Several alarms trigger when there are errors with the Lambda functions that are used by Service Cloud Voice.

Throttle

Several alarms trigger when Lambda functions get throttled because of the large number of concurrent invocations.

You can fine-tune any of these alarms to suit your use case.

![CloudWatch alarms](/docs/resources/img/en-us/260.0?doc_id=images%2Fvoice_cloudwatch_alarms.png&folder=voice_developer_guide)

You can monitor these alarms directly from within CloudWatch, using the provided [dashboards](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_customer_alerts_dashboards.htm "Salesforce provides two CloudWatch custom dashboards to monitor potential issues with your contact center."), or by listening for the [RealtimeAlertEvent platform event](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_customer_alerts_event.htm "The RealtimeAlertEvent platform event notifies subscribers about triggered alarms in your Amazon Connect instance.") in your Salesforce org. The alarms automatically trigger this platform event using a Lambda function ([RealtimeAlertLambda Lambda Function](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_realtimeAlert.htm "This Lambda publishes the RealtimeAlertEvent platform event using the Salesforce REST API. This function is called by CloudWatch alarms in your Amazon Connect instance. You don’t need to call this function manually.")).

The following alarms are automatically installed with the Customer Alerts template. Review the **Initial State** column to see which alarms are automatically turned on by default. To learn how to enable alarms, or how to fine-tune alarms, see [Using Amazon CloudWatch alarms](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html) in the Amazon CloudWatch User Guide.

| Alarm Type | Alarm Name | Description | Initial State | Suggested Actions |
| --- | --- | --- | --- | --- |
| General Alarms |
| Concurrent Calls | SCV Connect Concurrent Calls Percentage | Triggers when the number of concurrent active voice calls in the connect instance during the evaluation period is greater than the threshold.Criteria: ConcurrentCallsPercentage >= 0.8 for 10 data points within 10 minutes. | Enabled | Contact Amazon to increase number of concurrent voice calls allowable for your implementation. Contact your Salesforce admin for help. |
| InvokeTelephonyIntegrationApiFunction Lambda Alarms |
| Errors | SCV Lambda InvokeTelephonyIntegrationApiFunction Errors | The number of invocations of this Lambda function that resulted in a function error. Function errors include exceptions thrown by your code and exceptions thrown by the Lambda runtime.Criteria: Errors >= 3 for 1 data point within 1 minute. | Enabled | Check Salesforce Trust for maintenance or Service Cloud Voice service disruption. Contact the Salesforce support team. |
| Throttle | SCV Lambda InvokeTelephonyIntegrationApiFunction Throttles | The number of invocation requests of this Lambda function that are throttled. Review concurrent executions quota for the region, or the reserved concurrency limit that you configured on the function.Criteria: Errors >= 5 for 1 data point within 1 minute. | Disabled | Increase the concurrency limit for the Lambda function. Check for guidance with Amazon customer support. |
| InvokeSalesforceRestApiFunction Lambda Alarms |
| Errors | SCV Lambda InvokeSalesforceRestApiFunction Errors | The number of invocations of this Lambda function that resulted in a function error. Function errors include exceptions thrown by your code and exceptions thrown by the Lambda runtime.Criteria: Errors >= 3 for 1 data point within 1 minute. | Disabled | Check Salesforce Trust for maintenance or Service Cloud Voice service disruption. Contact the Salesforce support team. |
| Throttle | SCV Lambda InvokeSalesforceRestApiFunction Throttles | The number of invocation requests of this Lambda function that are throttled. Review concurrent executions quota for the region, or the reserved concurrency limit that you configured on the function.Criteria: Errors >= 5 for 1 data point within 1 minute. | Disabled | Increase the concurrency limit for the Lambda function. Check for guidance with Amazon customer support. |
| HandleContactEvents Lambda Alarms |
| Errors | SCV Lambda HandleContactEvents Errors | The number of invocations of this Lambda function that resulted in a function error. Function errors include exceptions thrown by your code and exceptions thrown by the Lambda runtime.Criteria: Errors >= 3 for 1 data point within 1 minute. | Enabled | Check Salesforce Trust for maintenance or Service Cloud Voice service disruption. Contact the Salesforce support team. |
| Throttle | SCV Lambda HandleContactEvents Throttles | The number of invocation requests of this Lambda function that are throttled. Review concurrent executions quota for the region, or the reserved concurrency limit that you configured on the function.Criteria: Errors >= 5 for 1 data point within 1 minute. | Disabled | Increase the concurrency limit for the Lambda function. Check for guidance with Amazon customer support. |
| CTRDataSyncFunction Lambda Alarms |
| Errors | SCV Lambda CTRDataSyncFunction Errors | The number of invocations of this Lambda function that resulted in a function error. Function errors include exceptions thrown by your code and exceptions thrown by the Lambda runtime.Criteria: Errors >= 3 for 1 data point within 1 minute. | Enabled | Check Salesforce Trust for maintenance or Service Cloud Voice service disruption. Contact the Salesforce support team. |
| Throttle | SCV Lambda CTRDataSyncFunction Throttles | The number of invocation requests of this Lambda function that are throttled. Review concurrent executions quota for the region, or the reserved concurrency limit that you configured on the function.Criteria: Errors >= 5 for 1 data point within 1 minute. | Disabled | Customer should increase the concurrency limit for the Lambda function. Check for guidance with Amazon customer support. |
| kvsConsumerTrigger Lambda Alarms |
| Errors | SCV Lambda kvsConsumerTrigger Errors | The number of invocations of this Lambda function that resulted in a function error. Function errors include exceptions thrown by your code and exceptions thrown by the Lambda runtime.Criteria: Errors >= 3 for 1 data point within 1 minute. | Disabled | Check Salesforce Trust for maintenance or Service Cloud Voice service disruption. Contact the Salesforce support team. |
| Throttle | SCV Lambda kvsConsumerTrigger Throttles | The number of invocation requests of this Lambda function that are throttled. Review concurrent executions quota for the region, or the reserved concurrency limit that you configured on the function.Criteria: Errors >= 5 for 1 data point within 1 minute. | Disabled | Increase the concurrency limit for the Lambda function. Check for guidance with Amazon customer support. |
| kvsTranscriber Lambda Alarms |
| Errors | SCV Lambda kvsTranscriber Errors | The number of invocations of this Lambda function that resulted in a function error. Function errors include exceptions thrown by your code and exceptions thrown by the Lambda runtime.Criteria: Errors >= 3 for 1 data point within 1 minute. | Disabled | Check Salesforce Trust for maintenance or Service Cloud Voice service disruption. Contact the Salesforce support team. |
| Throttle | SCV Lambda kvsTranscriber Throttles | The number of invocation requests of this Lambda function that are throttled. Review concurrent executions quota for the region, or the reserved concurrency limit that you configured on the function.Criteria: Errors >= 5 for 1 data point within 1 minute. | Disabled | Increase the concurrency limit for the Lambda function. Check for guidance with Amazon customer support. |

#### See Also

-   [*Amazon CloudWatch User Guide:* Using Amazon CloudWatch alarms](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html "Amazon CloudWatch User Guide: Using Amazon CloudWatch alarms - HTML (New Window)")

-   [Customer Alerts Dashboards](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_customer_alerts_dashboards.htm "Salesforce provides two CloudWatch custom dashboards to monitor potential issues with your contact center.")

-   [Customer Alerts Platform Event](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_customer_alerts_event.htm "The RealtimeAlertEvent platform event notifies subscribers about triggered alarms in your Amazon Connect instance.")

## Related Topics

- dashboards (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_customer_alerts_dashboards.htm)
- RealtimeAlertEvent platform event (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_customer_alerts_event.htm)
- RealtimeAlertLambda Lambda Function (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_realtimeAlert.htm)
- InvokeTelephonyIntegrationApiFunction (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_invoketelephonyintegration.htm)
- InvokeSalesforceRestApiFunction (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_invokesalesforcerestapi.htm)
- HandleContactEvents (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_handlecontactevents.htm)
- CTRDataSyncFunction (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_ctrdatasyncfunction.htm)
- kvsConsumerTrigger (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_kvsconsumertrigger.htm)
- kvsTranscriber (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_kvstranscriber.htm)
- Customer Alerts Dashboards (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_customer_alerts_dashboards.htm)

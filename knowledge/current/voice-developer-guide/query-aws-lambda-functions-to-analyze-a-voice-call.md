---
title: "Query AWS Lambda Functions to Analyze a Voice Call"
domain: voice-developer-guide
topic: query-aws-lambda-functions-to-analyze-a-voice-call
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:21.688Z
estimatedTokens: 755
keywords: [Query, AWS, Lambda, Functions, Analyze, Voice, Call, function, logs, Amazon, Connect, flows, results, troubleshoot, events]
---

# Query AWS Lambda Functions to Analyze a Voice Call

> Query AWS Lambda function logs and Amazon Connect flows, and use the
      query results to analyze and troubleshoot the events that happen throughout the stages of a
      single voice call.

# Query AWS Lambda Functions to Analyze a Voice Call

Query AWS Lambda function logs and Amazon Connect flows, and use the query results to analyze and troubleshoot the events that happen throughout the stages of a single voice call.

A single voice call journey invokes several different AWS Lambda functions and Amazon Connect flows. Perform a query through Amazon CloudWatch Log Insights to find all voice call events across all Lambda functions for a specific voice call.

This feature is installed with Service Cloud Voice contact center version 13.0 or later. See the Update Your Contact Center Knowledge Article for more details. No additional configuration is necessary.

To analyze a voice call through an AWS Lambda function query:

1.  Log in to Salesforce and find the name of the vendor call key (for example, 12faf34a-f1d5-6b07-89fc-6e3bce61d65f) and the date range of the voice call record you want to analyze.
2.  Log in to Amazon AWS.
3.  Open the CloudWatch console.
4.  In the navigation pane, select **Logs > Logs Insights**.
5.  In the **Select log group(s)** picklist, select the log groups that include the name of the contact center you want to query. The following example is a list of log groups for a contact center named ContactCenter1. The list includes AWS Lambda and Amazon Connect Flow log groups.

    ```

    ```

6.  In the query editor, type the following query, where VENDOR\_CALL\_KEY is the unique ID of the voice call (VoiceCall) record within the telephony system. The query is case sensitive.

    ```

    ```

    For example,

    ```

    ```

    To learn more about the query syntax, see the Amazon CloudWatch Logs Insights Query Syntax documentation.

7.  Specify the date range of the voice call record you want to query, click **Custom**, select the **Absolute** tab, and then select and apply the date range of the voice call.
8.  Click **Run query**. Amazon CloudWatch finds all logs across all Amazon Lambda functions and Amazon Connect flows that are related to the specified voice call record and displays the results in the Logs tab.

    The first event is created when the voice call record begins. Expand each event to view its details, including the name of the Amazon Connect flow or AWS Lambda output, and any error messages.


#### See Also

-   [*Knowledge Article:* Update Your Contact Center](https://help.salesforce.com/s/articleView?id=service.voice_update_cc.htm&type=5&language=en_US "Knowledge Article: Update Your Contact Center - HTML (New Window)")

-   [*Object Reference for the Salesforce Platform:* VoiceCall](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_voicecall.htm "Object Reference for the Salesforce Platform: VoiceCall - HTML (New Window)")

-   [*Amazon CloudWatch:* CloudWatch Logs Insights Query Syntax](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_QuerySyntax.html "Amazon CloudWatch: CloudWatch Logs Insights Query Syntax - HTML (New Window)")

## Code Examples

```
/aws/connect/contactcenter100db0000006.nep
/aws/lambda/ContactCenter1-AuthKeysSSMultiFunction
/aws/lambda/ContactCenter1-CTRDataSyncFunction
/aws/lambda/ContactCenter1-HandleContactEventsFunction
/aws/lambda/ContactCenter1-InvokeSalesforceRestApiFunction
/aws/lambda/ContactCenter1-InvokeTelephonyIntegrationApiFunction
/aws/lambda/ContactCenter1-kvsConsumerTrigger
/aws/lambda/ContactCenter1-kvsTransriber
/aws/lambda/ContactCenter1-RealtimeAlert
/aws/lambda/ContactCenter1-RententionPeriodFunction
/aws/lambda/ContactCenter1-VoiceMailAudioProcessingFunction
```

```
fields @timestamp, @message, @logStream, @log
| filter ContactId = 'VENDOR_CALL_KEY' OR context.contactId = 'VENDOR_CALL_KEY' | sort @timestamp asc
```

```
fields @timestamp, @message, @logStream, @log
| filter ContactId = '12faf34a-f1d5-6b07-89fc-6e3bce61d65f' OR context.contactId = '12faf34a-f1d5-6b07-89fc-6e3bce61d65f'
| sort @timestamp asc
```

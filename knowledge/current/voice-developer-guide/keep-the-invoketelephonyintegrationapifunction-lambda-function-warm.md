---
title: "Keep the InvokeTelephonyIntegrationApiFunction Lambda Function
            Warm"
domain: voice-developer-guide
topic: keep-the-invoketelephonyintegrationapifunction-lambda-function-warm
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:21.669Z
estimatedTokens: 702
keywords: [Keep, InvokeTelephonyIntegrationApiFunction, Lambda, Function, Warm, hasn’t, invoked, period, time, AWS, framework, unloads, memory, “cold”, longer]
---

# Keep the InvokeTelephonyIntegrationApiFunction Lambda Function
            Warm

> When a Lambda function hasn’t been invoked after a period of
            time, the AWS framework unloads the function from memory. The next time the function is
            invoked, it is “cold” and takes longer to load into memory. This delay can cause a
            timeout in the contact flow. These instructions describe how to keep your Lambda
        function “warm” using a Lambda function trigger.

# Keep the InvokeTelephonyIntegrationApiFunction Lambda Function Warm

When a Lambda function hasn’t been invoked after a period of time, the AWS framework unloads the function from memory. The next time the function is invoked, it is “cold” and takes longer to load into memory. This delay can cause a timeout in the contact flow. These instructions describe how to keep your Lambda function “warm” using a Lambda function trigger.

1.  In Amazon Connect, search for the Lambda function page.

    ![Search for Lambda](/docs/resources/img/en-us/260.0?doc_id=images%2Fvoice_lambda_search.png&folder=voice_developer_guide)

2.  From the AWS Lambda function page, select the **InvokeTelephonyIntegrationApiFunction** Lambda function.

    ![List of lambda functions](/docs/resources/img/en-us/260.0?doc_id=images%2Fvoice_lambda_warm_functions.png&folder=voice_developer_guide)

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=voice_developer_guide)

    #### Note

    The Lambda function has your contact center name as the prefix.

3.  Copy the name of the function to your clipboard so that you can create a unique name for your rule later.
4.  From the function overview page, select the **Configuration** tab (1). Click the **Triggers** subtab in the sidebar (2). To create a trigger, click the **Add trigger** button (3).

    ![Add trigger button](/docs/resources/img/en-us/260.0?doc_id=images%2Fvoice_lambda_warm_trigger.png&folder=voice_developer_guide)

5.  From the Trigger configuration page, search for the EventBridge trigger and select it.

    ![EventBridge trigger](/docs/resources/img/en-us/260.0?doc_id=images%2Fvoice_lambda_warm_eventbridge.png&folder=voice_developer_guide)

6.  Set up your trigger so that it runs every five minutes using the following values.

    ![Trigger configuration](/docs/resources/img/en-us/260.0?doc_id=images%2Fvoice_lambda_warm_trigger_config.png&folder=voice_developer_guide)

    1.  For the **Rule**, select **Create a new rule**.
    2.  For the **Rule name**, specify something globally unique. We suggest the prefix “WarmEvent-” plus the unique name of your InvokeTelephonyIntegrationApiFunction Lambda function that you previously copied to the clipboard.
    3.  For the **Rule type**, specify **Schedule expression**.
    4.  For the schedule expression, specify rate(5 minutes). This expression ensures that the Lambda is called every five minutes.
    5.  To add this new trigger, click the **Add** button.

The **InvokeTelephonyIntegrationApiFunction** Lambda function automatically detects when it’s being executed by a scheduled event trigger and only performs enough processing to stay warm.

#### See Also

-   [Amazon EventBridge](https://aws.amazon.com/eventbridge/ "Amazon EventBridge - HTML (New Window)")

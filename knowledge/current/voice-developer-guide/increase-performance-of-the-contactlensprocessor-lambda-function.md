---
title: "Increase Performance of the ContactLensProcessor Lambda
        Function"
domain: voice-developer-guide
topic: increase-performance-of-the-contactlensprocessor-lambda-function
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:21.638Z
estimatedTokens: 541
keywords: [Increase, Performance, ContactLensProcessor, Lambda, Function, contact, center, 11.1, above, enable, Lens, AWS, SSM, extension, fetch]
---

# Increase Performance of the ContactLensProcessor Lambda
        Function

> For contact center 11.1 and above, you can enable Contact Lens to use
            the AWS SSM Lambda extension to fetch keys from the parameter store. This extension
            increases the Lambda function’s performance. To use this enhancement, configure the
            ContactLensProcessor Lambda function by adding the
            AWS-Parameters-and-Secrets-Lambda-Extension
            layer and the USE_SSM_LAMBDA_EXTENSION environment variable for the Lambda
            function.

# Increase Performance of the ContactLensProcessor Lambda Function

For contact center 11.1 and above, you can enable Contact Lens to use the AWS SSM Lambda extension to fetch keys from the parameter store. This extension increases the Lambda function’s performance. To use this enhancement, configure the ContactLensProcessor Lambda function by adding the AWS-Parameters-and-Secrets-Lambda-Extension layer and the USE\_SSM\_LAMBDA\_EXTENSION environment variable for the Lambda function.

1.  In AWS, log in to the Identity and Access Management console.
2.  Select the region where the Lambda functions are deployed.
3.  Go to Lambda, and then select **<contact center name>-ContactLensProcessorFunction**.
4.  In the Layers section, click **Add a layer**.
5.  Select **AWS layers**.
6.  From the AWS Layers dropdown, select **AWS-Parameters-and-Secrets-Lambda-Extension**.
7.  In the Version field, select the **latest provided version**.
8.  Click **Add**.
9.  Open the Configuration tab for this Lambda function.
10.  Select **Environment variables**.
11.  Click **Edit**.
12.  Select **Add environment variable**.
13.  Enter USE\_SSM\_LAMBDA\_EXTENSION as the environment variable key.
14.  Enter true as the value environment variable.
15.  Save your work.
16.  Open the Versions tab for this Lambda function.
17.  Click **Publish new version**.
18.  Enter a description of the change for this new version, and then click **Publish**.
19.  To view the Lambda function details and exit the Versions page, click **<contact center name>-ContactLensProcessorFunction**.
20.  Open the Aliases tab.
21.  Click the alias.
22.  Click **Edit**.
23.  Select the latest version.
24.  Save your work.

#### See Also

-   [ContactLensProcessorFunction Lambda Function](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_contactlensprocessorfunction.htm "This Lambda function processes real-time transcripts and intelligence signals generated from Contact Lens for Amazon Connect and sends them to Salesforce. This Lambda function is invoked by the ContactLensConsumerFunction Lambda function with the generated real-time transcripts and events.")

## Related Topics

- ContactLensProcessorFunction Lambda Function (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_contactlensprocessorfunction.htm)

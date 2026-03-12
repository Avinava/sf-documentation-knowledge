---
title: "Service Cloud Voice Authentication When Using
   InvokeSalesforceRestApiFunction"
domain: voice-developer-guide
topic: service-cloud-voice-authentication-when-using-invokesalesforcerestapifunction
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:21.613Z
estimatedTokens: 436
keywords: [Service, Cloud, Voice, Authentication, InvokeSalesforceRestApiFunction, OAuth, want, Lambda, function, modify, refer, instructions]
---

# Service Cloud Voice Authentication When Using
   InvokeSalesforceRestApiFunction

> OAuth is required if you want to use the InvokeSalesforceRestApiFunction Lambda function. If you need to set up or modify the
    OAuth, refer to these instructions.

# Service Cloud Voice Authentication When Using InvokeSalesforceRestApiFunction

OAuth is required if you want to use the InvokeSalesforceRestApiFunction Lambda function. If you need to set up or modify the OAuth, refer to these instructions.

OAuth is required if you want to perform Salesforce REST API calls to create, update, or query records in any of your contact flows.

-   **[Set Up OAuth in Your Service Cloud Voice Connected App](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_connected_app_oauth.htm)**
    These instructions describe how to set up OAuth in a Salesforce connected app.
-   **[Set Up OAuth in the AWS Lambda Function](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_aws_oauth.htm)**
    These instructions describe how to set up OAuth on your Amazon Connect instance.
-   **[Test OAuth with Service Cloud Voice Lambda Function](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_oauth_test.htm)**
    To test that you have OAuth set up for the InvokeSalesforceRestApiFunction Lambda function, create a test event.

#### See Also

-   [*Salesforce Help:* Create a Private Key and Self-Signed Digital Certificate](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_key_and_cert.htm "Salesforce Help: Create a Private Key and Self-Signed Digital
    Certificate - HTML (New Window)")

-   [InvokeSalesforceRestApiFunction Lambda Function](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_invokesalesforcerestapi.htm "This Lambda function calls the Salesforce REST API. You can place this Lambda function within a contact flow to create, update, or query Salesforce records.")

## Related Topics

- Set Up OAuth in Your Service Cloud Voice Connected App (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_connected_app_oauth.htm)
- Set Up OAuth in the AWS Lambda Function (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_aws_oauth.htm)
- Test OAuth with Service Cloud Voice Lambda Function (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_oauth_test.htm)
- InvokeSalesforceRestApiFunction Lambda Function (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_invokesalesforcerestapi.htm)

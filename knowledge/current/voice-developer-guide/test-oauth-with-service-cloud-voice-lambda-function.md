---
title: "Test OAuth with Service Cloud Voice Lambda Function"
domain: voice-developer-guide
topic: test-oauth-with-service-cloud-voice-lambda-function
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:21.676Z
estimatedTokens: 167
keywords: [Test, OAuth, Service, Cloud, Voice, Lambda, Function, InvokeSalesforceRestApiFunction, event]
---

# Test OAuth with Service Cloud Voice Lambda Function

> To test that you have OAuth set up for the InvokeSalesforceRestApiFunction Lambda function, create a test event.

# Test OAuth with Service Cloud Voice Lambda Function

To test that you have OAuth set up for the InvokeSalesforceRestApiFunction Lambda function, create a test event.

1.  Log in to AWS Console > Lambda > Functions.
2.  Select the {Your Contact Center Name}-InvokeSalesforceRestApiFunction Lambda function.
3.  Click the **Test** dropdown menu and select **Configure test event**.
4.  Copy the JSON information to use as your test event. Put the entire query on one line. Contact Salesforce Support if you don’t already have some test data to use.

    For example:

    ```

    ```

5.  Select the test event and click **Test**.
6.  Verify that the test succeeded.

## Code Examples

```
{
  "Details": { 
    "Parameters": { 
      "methodName": "queryRecord", 
      "soql": "SELECT Id FROM Case WHERE ContactPhone = '+14155551234' AND IsClosed = false"
    }
  }
}
```

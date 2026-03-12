---
title: "How to Use Salesforce Lambda Functions"
domain: voice-developer-guide
topic: how-to-use-salesforce-lambda-functions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:21.647Z
estimatedTokens: 601
keywords: [How, Salesforce, Lambda, Functions, several, Service, Cloud, Voice, contact, flows, sample, own]
---

# How to Use Salesforce Lambda Functions

> Salesforce provides several Lambda functions for use in your Service Cloud Voice contact
  flows. These functions are used by the sample contact flows, and you can also use them in your own
  contact flows.

# How to Use Salesforce Lambda Functions

Salesforce provides several Lambda functions for use in your Service Cloud Voice contact flows. These functions are used by the sample contact flows, and you can also use them in your own contact flows.

To learn more about Lambda functions, see [Amazon’s AWS Lambda Developer Guide](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html). When fine-tuning your contact flows, you often access contact attributes using Amazon’s JSONPath syntax. Be sure to review [Amazon documentation on how to reference these attributes](https://docs.aws.amazon.com/connect/latest/adminguide/connect-attrib-list.html).

Salesforce occasionally updates the Lambda functions. To learn how to update these functions, see [Update Your Contact Center](https://help.salesforce.com/articleView?id=service.voice_update_cc.htm&type=5&language=en_US) in Salesforce Help.

For functions with multiple actions (InvokeTelephonyIntegrationAPI and InvokeSalesforceRestApiFunction), you must specify the action name in an input parameter named **methodName**. Create an attribute for the **methodName** key, as documented with each function. Additional parameters may be necessary for each method.

![methodName attribute](/docs/resources/img/en-us/260.0?doc_id=images%2Fvoice_invoke_lambda_function.png&folder=voice_developer_guide)

After calling a Lambda function, be sure to store the output value using a **Set contact attributes** block. If you don’t store the output, subsequent calls can overwrite this value.

![Set contact attributes](/docs/resources/img/en-us/260.0?doc_id=images%2Fvoice_set_contact_attributes.png&folder=voice_developer_guide)

In the **Set contact attributes** block, the **Attribute** must match the output variable and the type must be **External**.

![External type](/docs/resources/img/en-us/260.0?doc_id=images%2Fvoice_attributes_type_external.png&folder=voice_developer_guide)

The **Destination key** can be whatever value you want to use as a variable later in your contact flow.

#### See Also

-   [AWS Lambda Developer Guide](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html "AWS Lambda Developer Guide - HTML (New Window)")

-   [*Salesforce Help:* Update Your Contact Center](https://help.salesforce.com/articleView?id=service.voice_update_cc.htm&type=5&language=en_US "Salesforce Help: Update Your Contact Center - HTML (New Window)")

---
title: "InvokeSalesforceRestApiFunction Lambda Function"
domain: voice-developer-guide
topic: invokesalesforcerestapifunction-lambda-function
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:21.656Z
estimatedTokens: 1332
keywords: [InvokeSalesforceRestApiFunction, Lambda, Function, calls, Salesforce, REST, API, place, contact, flow, query, records]
---

# InvokeSalesforceRestApiFunction Lambda Function

> This Lambda function calls the Salesforce REST API. You can place this
      Lambda function within a contact flow to create, update, or query Salesforce
    records.

# InvokeSalesforceRestApiFunction Lambda Function

This Lambda function calls the Salesforce REST API. You can place this Lambda function within a contact flow to create, update, or query Salesforce records.

**Configuration:** This function is available to Service Cloud Voice customers who are using an Amazon Connect instance that’s provided by Salesforce. This function uses OAuth, which requires an associated connected app in your org. This app is automatically set up for you when you enable Voice.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=voice_developer_guide)

#### Important

Before using this function, you must have OAuth authentication set up. To set up or modify authentication, see [Service Cloud Voice Authentication When Using InvokeSalesforceRestApiFunction](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_auth.htm "OAuth is required if you want to use the InvokeSalesforceRestApiFunction Lambda function. If you need to set up or modify the OAuth, refer to these instructions.").

This Lambda function uses the environment variable SALESFORCE\_REST\_API\_ENDPOINT\_BASE to point to the Salesforce org API endpoint. (For example, https://MY\_DOMAIN.my.salesforce.com/services/data/v50.0.) This variable is automatically created when you set up Service Cloud Voice. However, if you get a response of { success: false }, verify that this Lambda environment variable is correct.

**Sample Contact Flows That Use This Function:** Sample\_SCV\_REST\_Check\_For\_Open\_Cases, Sample\_SCV\_REST\_Link\_Call\_To\_Case. To download these flows, visit our [Sample Contact Flows](https://github.com/service-cloud-voice/examples-from-doc/tree/main/ContactFlows) folder in GitHub.

**Limitations:** This Lambda function is subject to [Salesforce API request limits and allocations](https://developer.salesforce.com/docs/atlas.en-us.260.0.salesforce_app_limits_cheatsheet.meta/salesforce_app_limits_cheatsheet/salesforce_app_limits_platform_api.htm).

**Usage:** Use this function to create a record, update an existing record, or query for a record. To learn more about programmatically managing Salesforce records, refer to the [Object Reference for Salesforce and Lightning Platform](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_list.htm) and the [Salesforce REST API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/intro_what_is_rest_api.htm).

This Lambda takes a “methodName” attribute as an argument. This attribute indicates the specific action that the Lambda must perform.

| Action | methodName Value | Other Required Attributes |
| --- | --- | --- |
| Create a Salesforce record | createRecord | objectApiName containing the name of the Salesforce object.A list of fields as required to create the record. Each key name is the field name. |
| Update an existing Salesforce record | updateRecord | objectApiName containing the name of the Salesforce object.recordId containing the ID of the record.The list of fields that you want to update. Each key name is the field name. |
| Query for a Salesforce record | queryRecord | soql containing the desired SOQL query. For example:SELECT Id FROM Contact  WHERE Phone = '$.Attributes.MY_CONTACT_ATTRIBUTE'You must store the correct information into a contact attribute first. For details about the $ variable, see the Amazon documentation on contact attributes. |

| methodName | Output Attribute Name | Description |
| --- | --- | --- |
| createRecord | recordId | ID of the newly created record. |
| updateRecord | None | N/A |
| queryRecord | Names match the names of the fields you queried. | A list of the selected fields. Each attribute contains a different field. Regardless of your query, only the first resulting record is returned. |

**TIP:** To check that the function returned information successfully, add a condition to a **Check contact attributes** block to check an output attribute based on some detail you expect to see in the result. For instance, let’s say you’re creating a contact record. A contact ID always contains “003” in the ID value, so you can use that information to check the success or failure of the call. The first step is to store the return attribute in a user-defined attribute by using a **Set contact attributes** block:

![Set external attribute](/docs/resources/img/en-us/260.0?doc_id=images%2Fvoice_set_external_attribute.png&folder=voice_developer_guide)

And then you can use a **Check contact attributes** block to access this user-defined attribute:

![Conditions to check](/docs/resources/img/en-us/260.0?doc_id=images%2Fvoice_check_return_condition.png&folder=voice_developer_guide)

Build your contact flow logic based on this result.

![Check contact attributes](/docs/resources/img/en-us/260.0?doc_id=images%2Fvoice_check_return_output.png&folder=voice_developer_guide)

#### See Also

-   [Service Cloud Voice Authentication When Using InvokeSalesforceRestApiFunction](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_auth.htm "OAuth is required if you want to use the InvokeSalesforceRestApiFunction Lambda function. If you need to set up or modify the OAuth, refer to these instructions.")

## Code Examples

```
SELECT Id FROM Contact 
WHERE Phone = '$.Attributes.MY_CONTACT_ATTRIBUTE'
```

## Related Topics

- Service Cloud Voice Authentication When Using InvokeSalesforceRestApiFunction (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_auth.htm)

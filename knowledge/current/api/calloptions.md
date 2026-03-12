---
title: "CallOptions"
domain: api
topic: calloptions
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:57.695Z
estimatedTokens: 1591
namespace: CallOptions
keywords: [CallOptions, options, needed, work, specific, client, Partner, WSDL, API, Calls, Sample, Code—C#]
---

# CallOptions

> Specifies the options needed to work with a specific client. This
            header is only available for use with the Partner WSDL.

**Namespace:** `CallOptions`

# CallOptions

Specifies the options needed to work with a specific client. This header is only available for use with the [Partner WSDL](atlas.en-us.api.meta/api/sforce_api_partner.htm).

## API Calls

The defaultNamespace element supports the following calls: [create()](atlas.en-us.api.meta/api/sforce_api_calls_create.htm "Adds one or more new records to your organization’s data."), [merge()](atlas.en-us.api.meta/api/sforce_api_calls_merge.htm "Combines up to three records of the same type into one record. The input is an array of MergeRequest elements, each of which specifies the records to combine. The output is a MergeResult object that contains information about the result of the merge."), [queryAll()](atlas.en-us.api.meta/api/sforce_api_calls_queryall.htm "Retrieves data from specified objects, including records that have been deleted or archived."), [query()](atlas.en-us.api.meta/api/sforce_api_calls_query.htm "Executes a query against the specified object and returns data that matches the stated conditions."), [queryMore()](atlas.en-us.api.meta/api/sforce_api_calls_querymore.htm "Retrieves the next batch of query results."), [retrieve()](atlas.en-us.api.meta/api/sforce_api_calls_retrieve.htm "Retrieves one or more records based on the specified IDs."), [search()](atlas.en-us.api.meta/api/sforce_api_calls_search.htm "Executes a text search in your organization's data."), [update()](atlas.en-us.api.meta/api/sforce_api_calls_update.htm "Updates one or more existing records in your organization's data."), and [upsert()](atlas.en-us.api.meta/api/sforce_api_calls_upsert.htm "Creates records and updates existing records; uses a custom field to determine the presence of existing records. In most cases, we recommend that you use upsert() instead of create() to avoid creating unwanted duplicate records (idempotent). This call is available in API version 7.0 and later.").

The client element supports all of the above calls, plus the following: convertLead(), [login()](atlas.en-us.api.meta/api/sforce_api_calls_login.htm "Logs in to the login server and starts a client session."), [delete()](atlas.en-us.api.meta/api/sforce_api_calls_delete.htm "Deletes one or more records from your organization's data."), [describeGlobal()](atlas.en-us.api.meta/api/sforce_api_calls_describeglobal.htm "Retrieves a list of available objects for your organization's data."), [describeLayout()](atlas.en-us.api.meta/api/sforce_api_calls_describelayout.htm "Retrieves metadata about page layouts for the specified object type."), [describeTabs()](atlas.en-us.api.meta/api/sforce_api_calls_describetabs.htm "Returns information about the Salesforce Classic standard and custom apps available to the logged-in user."), [describeSObject()](atlas.en-us.api.meta/api/sforce_api_calls_describesobject.htm "Describes metadata (field list and object properties) for the specified object."), [describeSObjects()](atlas.en-us.api.meta/api/sforce_api_calls_describesobjects.htm "An array-based version of describeSObject(); describes metadata (field list and object properties) for the specified object or array of objects. Use this call instead of describeSObject()."), [getDeleted()](atlas.en-us.api.meta/api/sforce_api_calls_getdeleted.htm "Retrieves the list of individual records that have been deleted within the given timespan for the specified object."), [getUpdated()](atlas.en-us.api.meta/api/sforce_api_calls_getupdated.htm "Retrieves the list of individual records that have been updated (added or changed) within the given timespan for the specified object."), [process()](atlas.en-us.api.meta/api/sforce_api_calls_process.htm "Submits an array of approval process instances for approval, or processes an array of approval process instances to be approved, rejected, or removed. For more information, see Set Up an Approval Process in Salesforce Help."), [undelete()](atlas.en-us.api.meta/api/sforce_api_calls_undelete.htm "Undeletes records from the Recycle Bin."), [getServerTimestamp()](atlas.en-us.api.meta/api/sforce_api_calls_getservertimestamp.htm "Retrieves the current system timestamp (Coordinated Universal Time (UTC) time zone) from the API."), [getUserInfo()](atlas.en-us.api.meta/api/sforce_api_calls_getuserinfo.htm "Retrieves personal information for the user associated with the current session."), [setPassword()](atlas.en-us.api.meta/api/sforce_api_calls_setpassword.htm "Sets the specified user's password to the specified value."), and [resetPassword()](atlas.en-us.api.meta/api/sforce_api_calls_resetpassword.htm "Changes a user's password to a temporary, system-generated value.").

## Fields

| Element Name | Type | Description |
| --- | --- | --- |
| client | string | A string that identifies a client.If a valid name is not provided, the value 000000000009998 is used. Subsequent calls can override the existing client name. |
| defaultNamespace | string | A string that identifies a developer namespace prefix. Use this field to resolve field names in managed packages without having to fully specify the fieldName everywhere.For example, if the developer namespace prefix is battle, and you have a custom field in your package called botId, you can set this header, and then queries such as the following will succeed:query("SELECT id, botId__c from Account");In this case the actual field queried is the battle__botId__c field.Using this field allows you to write client code without having to specify the namespace prefix. Without this field specified, the full name of the field would have to be used for the query to succeed. In the example above, you would have to specify battle__botId__c.Note that if this field is set, and the query specifies the namespace as well, the response will not include the prefix. For example, if you set this header to battle, and issue a query like query("SELECT id, battle__botId__c from Account");, the response would use a botId__c element, not a battle_botId__c element.Describe calls ignore this header, so there will be no ambiguity between fields with namespace prefixes and customer fields of the same name without the prefix. |

## Sample Code—C#

This sample shows how to use the CallOptions header. It sets a client ID and a developer namespace prefix, which is used to resolve field names in managed packages. Next, the sample logs the specified user in.

```

```

## Code Examples

```apex
public void CallOptionsSample()
{
    // Web Reference to the imported Partner WSDL.
    APISamples.partner.SforceService partnerBinding;
    
    string username = "USERNAME";
    string password = "PASSWORD";
    
    // The real Client ID will be an API Token provided by Salesforce
    // to partner applications following a security review.
    // For more details, see the Security Review FAQ in the online help.
    string clientId = "SampleCaseSensitiveToken/100";
    
    partnerBinding = new SforceService();
    partnerBinding.CallOptionsValue = new CallOptions();
    partnerBinding.CallOptionsValue.client = clientId;
    
    // Optionally, if a developer namespace prefix has been registered for
    // your Developer Edition organization, it may also be specified.
    string prefix = "battle";
    partnerBinding.CallOptionsValue.defaultNamespace = prefix;
    
    try
    {
        APISamples.partner.LoginResult lr =
            partnerBinding.login(username, password);
    }
    catch (SoapException e)
    {
        Console.WriteLine(e.Code);
        Console.WriteLine(e.Message);
    }
}
```

## Related Topics

- Partner WSDL (atlas.en-us.api.meta/api/sforce_api_partner.htm)
- create() (atlas.en-us.api.meta/api/sforce_api_calls_create.htm)
- merge() (atlas.en-us.api.meta/api/sforce_api_calls_merge.htm)
- queryAll() (atlas.en-us.api.meta/api/sforce_api_calls_queryall.htm)
- query() (atlas.en-us.api.meta/api/sforce_api_calls_query.htm)
- queryMore() (atlas.en-us.api.meta/api/sforce_api_calls_querymore.htm)
- retrieve() (atlas.en-us.api.meta/api/sforce_api_calls_retrieve.htm)
- search() (atlas.en-us.api.meta/api/sforce_api_calls_search.htm)
- update() (atlas.en-us.api.meta/api/sforce_api_calls_update.htm)
- upsert() (atlas.en-us.api.meta/api/sforce_api_calls_upsert.htm)

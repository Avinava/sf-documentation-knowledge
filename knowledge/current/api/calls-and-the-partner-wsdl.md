---
title: "Calls and the Partner WSDL"
domain: api
topic: calls-and-the-partner-wsdl
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:56.699Z
estimatedTokens: 649
keywords: [Calls, Partner, WSDL, file, API, found, enterprise, client, application, likely, determine, organization’s, metadata, sObject, Reuse]
---

# Calls and the Partner WSDL

> The partner WSDL file defines exactly the same API calls found in the enterprise WSDL file. A
   client application using the partner WSDL will likely use the following API calls to determine an
   organization’s metadata:

# Calls and the Partner WSDL

The partner WSDL file defines exactly the same API calls found in the enterprise WSDL file. A client application using the partner WSDL will likely use the following API calls to determine an organization’s metadata:

| Task / Call | Description |
| --- | --- |
| describeGlobal() | Retrieves a list of available objects for your organization’s data. |
| describeLayout() | Retrieves metadata about page layouts for the specified object type. |
| describeSObject() | describeSObject() has been superseded by describeSObjects(). |
| describeSObjects() | Use to obtain metadata for a given object. You can first call to retrieve a list of all objects for your organization, then iterate through the list and use to obtain metadata about individual objects. |
| describeTabs() | In the user interface, users have access to standard apps (and may also have access to custom apps) as listed in the Lightning Platform app menu at the top of the page. Selecting a standard app or custom app in the user interface allows the user to switch between the listed apps at any time. |

To explore an organization’s metadata, a client application can:

1.  Call describeGlobal() to obtain a list of available objects.
2.  In the returned [DescribeGlobalResult](atlas.en-us.api.meta/api/sforce_api_calls_describeglobal_describeglobalresult.htm "The describeGlobal() call returns a DescribeGlobalResult object.") object, retrieve an array of [DescribeGlobalSObjectResult](atlas.en-us.api.meta/api/sforce_api_calls_describeglobal_describeglobalresult.htm#DescribeGlobalSObjectResult-FB36C0FD) objects by calling [sobjects](atlas.en-us.api.meta/api/sforce_api_calls_describeglobal_describeglobalresult.htm#field_sobjects).
3.  Get the sObject type name for each returned sObject by calling name on the DescribeGlobalSObjectResult objects.
4.  The DescribeGlobalSObjectResult object provides some metadata about the sObject, such as whether the sObject is createable or updateable. If you want to get more information about particular sObjects, like their fields and child relationships, call describeSObjects() by passing it an array of the sObject type names that you’re interested in obtaining more information about.

## sObject Reference Reuse

An sObject reference can't be reused within a single operation.

Use a different reference. For example, the following code snippet creates an account and contact with a custom field and an event using two different references:

```

```

Any call that takes a parameter of the form sObject\[\] sObjects is subject to this limitation.

## Code Examples

```
SObject account = new com.sforce.soap.partner.sobject.wsc.SObject();
    account.setType("Account");
    account.setField("Name","myAccount");
    account.setField("XID1__c", "1");
    SObject refAcc1 = new com.sforce.soap.partner.sobject.wsc.SObject();
    refAcc1.setType("Account");
    refAcc1.setField("XID1__c", "1");
    SObject refAcc2 = new com.sforce.soap.partner.sobject.wsc.SObject();
    refAcc2.setType("Account");
    refAcc2.setField("XID1__c", "1");
    
    SObject contact = new com.sforce.soap.partner.sobject.wsc.SObject();
    contact.setType("Contact");
    contact.setField("LastName", "LName");
    contact.setField( "XID2__c", "2");
    contact.setField( "Account", refAcc1);
    SObject refCon = new com.sforce.soap.partner.sobject.wsc.SObject();
    contact.setType("Contact");
    contact.setField( "XID2__c", "2");
    
    
    SObject event = new com.sforce.soap.partner.sobject.wsc.SObject();
    contact.setType("Event");
    contact.setField("Subject", "myEvent");
    contact.setField( "ActivityDateTime", Calendar.getInstance());
    contact.setField("DurationInMinutes", 60);
    contact.setField("Who", refCon);
    contact.setField("What", refAcc2);
    
    client.create(new SObject[] { account, contact, event}); // exception thrown here
```

## Related Topics

- describeGlobal() (atlas.en-us.api.meta/api/sforce_api_calls_describeglobal.htm)
- describeLayout() (atlas.en-us.api.meta/api/sforce_api_calls_describelayout.htm)
- describeSObject() (atlas.en-us.api.meta/api/sforce_api_calls_describesobject.htm)
- describeSObjects() (atlas.en-us.api.meta/api/sforce_api_calls_describesobjects.htm)
- describeTabs() (atlas.en-us.api.meta/api/sforce_api_calls_describetabs.htm)
- DescribeGlobalResult (atlas.en-us.api.meta/api/sforce_api_calls_describeglobal_describeglobalresult.htm)
- DescribeGlobalSObjectResult (atlas.en-us.api.meta/api/sforce_api_calls_describeglobal_describeglobalresult.htm)
- sobjects (atlas.en-us.api.meta/api/sforce_api_calls_describeglobal_describeglobalresult.htm)

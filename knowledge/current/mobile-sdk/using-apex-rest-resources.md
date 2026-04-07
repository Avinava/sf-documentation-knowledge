---
title: "Using Apex REST Resources"
domain: mobile-sdk
topic: using-apex-rest-resources
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:30.070Z
estimatedTokens: 545
keywords: [Apex, REST, Resources, support, Mobile, SDK, two, classes, Force.ApexRestObject, Force.ApexRestObjectCollection, subclass, Force.RemoteObject, Force.RemoteObjectCollection, respectively, talk]
---

# Using Apex REST Resources

> To support Apex REST resources, Mobile SDK provides two classes: Force.ApexRestObject and Force.ApexRestObjectCollection. These classes subclass Force.RemoteObject and Force.RemoteObjectCollection, respectively, and can talk to a REST API
            that you have created using Apex REST.

# Using Apex REST Resources

To support Apex REST resources, Mobile SDK provides two classes: Force.ApexRestObject and Force.ApexRestObjectCollection. These classes subclass Force.RemoteObject and Force.RemoteObjectCollection, respectively, and can talk to a REST API that you have created using Apex REST.

## Force.ApexRestObject

Force.ApexRestObject is similar to Force.SObject. Instead of an sobjectType, Force.ApexRestObject requires the Apex REST resource path relative to services/apexrest. For example, if your full resource path is services/apexrest/simpleAccount/\*, you specify only /simpleAccount/\*. Force.ApexRestObject also expects you to specify the name of your ID field if it's different from "Id".

## Example

Let's assume you’ve created an Apex REST resource called "simple account," which is just an account with two fields: accountId and accountName.

```

```

With Mobile Sync, you do the following to create a "simple account".

```

```

You can update that "simple account".

```

```

You can fetch another "simple account".

```

```

You can delete a "simple account".

```

```

![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=mobile_sdk)

#### Note

In Mobile Sync calls such as fetch(), save(), and destroy(), you typically pass an options parameter that defines success and error callback functions. For example:

```

```

## Force.ApexRestObjectCollection

Force.ApexRestObjectCollection is similar to Force.SObjectCollection. The config you specify for fetching doesn't support SOQL, SOSL, or MRU. Instead, it expects the Apex REST resource path, relative to services/apexrest. For example, if your full resource path is services/apexrest/simpleAccount/\*, you specify only /simpleAccount/\*.

You can also pass parameters for the query string if your endpoint supports them. The Apex REST endpoint is expected to return a response in this format:

```

```

## Example

Let's assume you’ve created an Apex REST resource called "simple accounts". It returns "simple accounts" that match a given name.

```

```

With Mobile Sync, you do the following to fetch a list of "simple account" records.

```

```

## Code Examples

```apex
@RestResource(urlMapping='/simpleAccount/*')
  global with sharing class SimpleAccountResource {
      static String getIdFromURI() {
          RestRequest req = RestContext.request;
          return req.requestURI.substring(req.requestURI.lastIndexOf('/')+1);
      }
      
      @HttpGet global static Map&lt;String, String&gt; doGet() {
          String id = getIdFromURI();
          Account acc = [select Id, Name from Account 
                         where Id = :id];
          return new Map&lt;String, String&gt;{
              'accountId'=>acc.Id, 'accountName'=>acc.Name};
      }
  
      @HttpPost global static Map&lt;String, String&gt; 
          doPost(String accountName) {
              Account acc = new Account(Name=accountName);
              insert acc;
              return new Map&lt;String, String&gt;{
                  'accountId'=>acc.Id, 'accountName'=>acc.Name};
      }
  
      @HttpPatch global static Map&lt;String, String&gt; 
          doPatch(String accountName) {
              String id = getIdFromURI();
              Account acc = [select Id from Account 
                                 where Id = :id];
              acc.Name = accountName;
              update acc;
              return new Map&lt;String, String&gt;{
                  'accountId'=>acc.Id, 'accountName'=>acc.Name};
      }
  
      @HttpDelete global static void doDelete() {
          String id = getIdFromURI();
          Account acc = [select Id from Account where Id = :id];
          delete acc;
          RestContext.response.statusCode = 204;
      }
  }
```

```
var SimpleAccount = Force.ApexRestObject.extend(
    {apexRestPath:"/simpleAccount", 
      idAttribute:"accountId", 
        fieldlist:["accountId", "accountName"]});
var acc = new SimpleAccount({accountName:"MyFirstAccount"});
acc.save();
```

```
acc.set("accountName", "MyFirstAccountUpdated");
acc.save(null, {fieldlist:["accountName"]); 
// our apex patch endpoint only expects accountName
```

```
var acc2 = new SimpleAccount({accountId:"&lt;valid id&gt;"})
acc.fetch();
```

```
acc.destroy();
```

---
title: "performQuickActions()"
domain: api
topic: performquickactions
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:57.434Z
estimatedTokens: 489
keywords: [performQuickActions, Executes, quick, actions, Usage, Sample—Java, Arguments, PerformQuickActionRequest]
---

# performQuickActions()

> Executes quick actions of type create or
                    update.

# performQuickActions()

Executes quick actions of type create or update.

## Syntax

```

```

## Usage

Use the performQuickActions() call to perform a specific quick action. Returns an array of PerformQuickActionResult objects.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api)

#### Note

In API version 46.0 and later, the apiName for a global quick action can include the prefix Global. in a performQuickActions() request body. The request body also accepts global quick action API names without the prefix.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api)

#### Note

If you’re accessing the API using a custom community URL and you use the performQuickActions() call to create a group, the group is only available within that community.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api)

#### Note

The OutgoingEmail entity can be created only via calls from the performQuickAction API.

## Sample—Java

This sample uses a quick action to create a new contact.

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| quickActions | PerformQuickActionRequest | The action request to perform. |

## PerformQuickActionRequest

| Name | Type | Description |
| --- | --- | --- |
| parentOrContextId | ID | In API version 28.0, parentId is the ID of the sObject on which to create a record for the request.In API version 29.0 and greater, contextId is the ID of the context on which to create a record for the request. |
| quickActionName | string | The parent or context sObject and action name—for example, Opportunity.QuickCreateOpp. |
| records | SObject[] | The record to be created. Only one record can be saved at a time. |

## Response

[PerformQuickActionResult](atlas.en-us.api.meta/api/sforce_api_calls_performquickactionresult.htm "The performQuickActions() call returns an array of PerformQuickActionResult objects.")

## Code Examples

```
PerformQuickActionResult[] = connection.performQuickActions(PerformQuickActionRequest PerformQuickActionRequest[]);
```

```apex
public void example() throws Exception {
        
    PerformQuickActionRequest req = new PerformQuickActionRequest();
        
    Contact con = new Contact();
    con.setLastName("Smith");
        
    req.setQuickActionName("Account.QuickCreateContact");
    req.setParentId("001D000000JSaHa");
/* For version 29.0 and greater, use setContextId */
    req.setRecords(new SObject[] { con });  //you can only save one record here
    PerformQuickActionResult[] pResult = 
        conn.performQuickActions(new PerformQuickActionRequest[] { req } );
    for(PerformQuickActionResult pr : pResult) { 
        assert pr.getSuccess();
        assert pr.getCreated();
        assert pr.getErrors().length == 0;
        System.out.println("Id of the record created: " + pr.getIds()[0]);
        System.out.println("Id of the feeditem for action performed: " + 
            pr.getFeedItemIds()[0]);
    }
}
```

## Related Topics

- PerformQuickActionResult (atlas.en-us.api.meta/api/sforce_api_calls_performquickactionresult.htm)

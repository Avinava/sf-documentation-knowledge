---
title: "Running Apex within Governor Execution Limits"
domain: apex-guide
topic: running-apex-within-governor-execution-limits
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:33.619Z
estimatedTokens: 1143
keywords: [Running, Apex, Governor, Execution, Limits, develop, software, multitenant, cloud, environment, Lightning, platform, don’t, scale, code]
---

# Running Apex within Governor Execution Limits

> When you develop software in a multitenant cloud environment such as the Lightning
        platform, you don’t have to scale your code, because the Lightning platform does it for you.
        Because resources are shared in a multitenant platform, the Apex runtime engine enforces
        some limits to ensure that no one transaction monopolizes shared resources.

# Running Apex within Governor Execution Limits

When you develop software in a multitenant cloud environment such as the Lightning platform, you don’t have to scale your code, because the Lightning platform does it for you. Because resources are shared in a multitenant platform, the Apex runtime engine enforces some limits to ensure that no one transaction monopolizes shared resources.

Your Apex code must execute within these predefined execution limits. If a governor limit is exceeded, a run-time exception that can’t be handled is thrown. By following best practices in your code, you can avoid hitting these limits. Imagine you had to wash 100 T-shirts. Would you wash them one by one—one per load of laundry, or would you group them in batches for just a few loads? The benefit of coding in the cloud is that you learn how to write more efficient code and waste fewer resources.

The governor execution limits are per transaction. For example, one transaction can issue up to 100 SOQL queries and up to 150 DML statements. There are some other limits that aren’t transaction bound, such as the number of batch jobs that can be queued or active at one time.

The following are some best practices for writing code that doesn’t exceed certain governor limits.

## Bulkifying DML Calls

Making DML calls on lists of sObjects instead of each individual sObject makes it less likely to reach the DML statements limit. The following is an example that doesn’t bulkify DML operations, and the next example shows the recommended way of calling DML statements.

**Example:** DML calls on single sObjects

The for loop iterates over line items contained in the liList List variable. For each line item, it sets a new value for the Description\_\_c field and then updates the line item. If the list contains more than 150 items, the 151st update call returns a run-time exception for exceeding the DML statement limit of 150. How do we fix this? Check the second example for a simple solution.

```

```

**Recommended Alternative:** DML calls on sObject lists

This enhanced version of the DML call performs the update on an entire list that contains the updated line items. It starts by creating a new list and then, inside the loop, adds every update line item to the new list. It then performs a bulk update on the new list.

```

```

## More Efficient SOQL Queries

Placing SOQL queries inside for loop blocks isn’t a good practice because the SOQL query executes once for each iteration and may surpass the 100 SOQL queries limit per transaction. The following is an example that runs a SOQL query for every item in Trigger.new, which isn’t efficient. An alternative example is given with a modified query that retrieves child items using only one SOQL query.

**Example:** Inefficient querying of child items

The for loop in this example iterates over all invoice statements that are in Trigger.new. The SOQL query performed inside the loop retrieves the child line items of each invoice statement. If more than 100 invoice statements were inserted or updated, and thus contained in Trigger.new, this results in a run-time exception because of reaching the SOQL limit. The second example solves this problem by creating another SOQL query that can be called only once.

```

```

**Recommended Alternative:** Querying of child items with one SOQL query

This example bypasses the problem of having the SOQL query called for each item. It has a modified SOQL query that retrieves all invoice statements that are part of Trigger.new and also gets their line items through the nested query. In this way, only one SOQL query is performed and we’re still within our limits.

```

```

## SOQL For Loops

Use SOQL for loops to operate on records in batches of 200. This helps avoid the heap size limit of 6 MB. Note that this limit is for code running synchronously and it is higher for asynchronous code execution.

**Example:** Query without a for loop

The following is an example of a SOQL query that retrieves all merchandise items and stores them in a List variable. If the returned merchandise items are large in size and a large number of them was returned, the heap size limit might be hit.

```

```

**Recommended Alternative:** Query within a for loop

To prevent this from happening, this second version uses a SOQL for loop, which iterates over the returned results in batches of 200 records. This reduces the size of the ml list variable which now holds 200 items instead of all items in the query results, and gets recreated for every batch.

```

```

## Code Examples

```
for(Line_Item__c li : liList) {
    if (li.Units_Sold__c > 10) {
        li.Description__c = 'New description';
    }
    // Not a good practice since governor limits might be hit.
    update li;
}
```

```apex
List<Line_Item__c> updatedList = new List<Line_Item__c>();

for(Line_Item__c li : liList) {
    if (li.Units_Sold__c > 10) {
        li.Description__c = 'New description';
        updatedList.add(li);
    }
}

// Once DML call for the entire list of line items
update updatedList;
```

```apex
trigger LimitExample on Invoice_Statement__c (before insert, before update) {
    for(Invoice_Statement__c inv : Trigger.new) {
        // This SOQL query executes once for each item in Trigger.new.
        // It gets the line items for each invoice statement.
        List<Line_Item__c> liList = [SELECT Id,Units_Sold__c,Merchandise__c 
                                     FROM Line_Item__c 
                                     WHERE Invoice_Statement__c = :inv.Id];
        for(Line_Item__c li : liList) {
            // Do something
        }
    }
}
```

```apex
trigger EnhancedLimitExample on Invoice_Statement__c (before insert, before update) {
    // Perform SOQL query outside of the for loop.
    // This SOQL query runs once for all items in Trigger.new.
    List<Invoice_Statement__c> invoicesWithLineItems = 
        [SELECT Id,Description__c,(SELECT Id,Units_Sold__c,Merchandise__c from Line_Items__r)
         FROM Invoice_Statement__c WHERE Id IN :Trigger.newMap.KeySet()];
    
    for(Invoice_Statement__c inv : invoicesWithLineItems) {
        for(Line_Item__c li : inv.Line_Items__r) {
            // Do something
        }
    }
}
```

```apex
List<Merchandise__c> ml = [SELECT Id,Name FROM Merchandise__c];
```

---
title: "Upserting Records"
domain: apex-guide
topic: upserting-records
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:34.629Z
estimatedTokens: 801
keywords: [Upserting, Records, Custom, matching, case-insensitive, Unique, Treat, ABC, duplicate, case, insensitive, attributes, selected, part, definition]
---

# Upserting Records

> Custom field matching is case-insensitive only if the custom field has the
               Unique and Treat "ABC" and "abc" as duplicate
               values (case insensitive) attributes selected as part of the field
            definition. If this is the case, “ABC123” is matched with
            

# Upserting Records

Using the upsert operation, you can either insert or update an existing record in one call. To determine whether a record already exists, the upsert statement or Database method uses the record’s ID as the key to match records, a custom external ID field, or a standard field with the idLookup attribute set to true.

-   If the key isn’t matched, then a new object record is created.
-   If the key is matched once, then the existing object record is updated.
-   If the key is matched multiple times, then an error is generated and the object record is not inserted or updated.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

Custom field matching is case-insensitive only if the custom field has the **Unique** and **Treat "ABC" and "abc" as duplicate values (case insensitive)** attributes selected as part of the field definition. If this is the case, “ABC123” is matched with “abc123.” For more information, see [Create Custom Fields](https://help.salesforce.com/apex/HTViewHelpDoc?id=adding_fields.htm&language=en_US).

## Examples

The following example updates the city name for all existing accounts in the city formerly known as Bombay, and also inserts a new account in San Francisco:

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

For more information on processing DmlExceptions, see [Bulk DML Exception Handling](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_dml_bulk_exceptions.htm).

This next example uses the Database.upsert method to upsert a collection of leads that are passed in. This example allows for partial processing of records, that is, in case some records fail processing, the remaining records are still inserted or updated. It iterates through the results and adds a task to each record that was processed successfully. The task sObjects are saved in a list, which is then bulk inserted. This example is followed by a test class that contains a test method for testing the example.

```

```

```

```

Use of upsert with an external ID can reduce the number of DML statements in your code, and help you to avoid hitting governor limits (see [Execution Governors and Limits](atlas.en-us.apexcode.meta/apexcode/apex_gov_limits.htm "Because Apex runs in a multitenant environment, the Apex runtime engine strictly enforces limits so that runaway Apex code or processes don’t monopolize shared resources. If some Apex code exceeds a limit, the associated governor issues a runtime exception that can’t be handled.")).

This example uses upsert and an external ID field Line\_Item\_Id\_\_c on the Asset object to maintain a one-to-one relationship between an asset and an opportunity line item. Before running the sample, create a custom text field on the Asset object named Line\_Item\_Id\_\_c and mark it as an external ID. For information on custom fields, see Salesforce Help.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

External ID fields used in upsert calls must be unique or the user must have the View All Data permission.

```

```

## Code Examples

```
Account[] acctsList = [SELECT Id, Name, BillingCity
                        FROM Account WHERE BillingCity = 'Bombay'];
for (Account a : acctsList) {
    a.BillingCity = 'Mumbai';
}
Account newAcct = new Account(Name = 'Acme', BillingCity = 'San Francisco');
acctsList.add(newAcct);
try {
    upsert acctsList;
} catch (DmlException e) {
    // Process exception here
}
```

```apex
/* This class demonstrates and tests the use of the
 * partial processing DML operations */ 

public class DmlSamples {

   /* This method accepts a collection of lead records and 
      creates a task for the owner(s) of any leads that were 
      created as new, that is, not updated as a result of the upsert
      operation */
   public static List<Database.upsertResult> upsertLeads(List<Lead> leads)  {

      /* Perform the upsert. In this case the unique identifier for the
         insert or update decision is the Salesforce record ID. If the 
         record ID is null the row will be inserted, otherwise an update
         will be attempted. */
      List<Database.upsertResult> uResults = Database.upsert(leads,false);

      /* This is the list for new tasks that will be inserted when new 
         leads are created. */
      List<Task> tasks = new List<Task>();
      for(Database.upsertResult result:uResults) {
         if (result.isSuccess() && result.isCreated()) 
              tasks.add(new Task(Subject = 'Follow-up', WhoId = result.getId()));
      }

      /* If there are tasks to be inserted, insert them */
      Database.insert(tasks);

      return uResults;
   }
}
```

```apex
@isTest
private class DmlSamplesTest {
   public static testMethod void testUpsertLeads() {
        /* We only need to test the insert side of upsert */
      List<Lead> leads = new List<Lead>();

      /* Create a set of leads for testing */
      for(Integer i = 0;i < 100; i++) {
         leads.add(new Lead(LastName = 'testLead', Company = 'testCompany'));
      }

      /* Switch to the runtime limit context */
      Test.startTest();

      /* Exercise the method */
      List<Database.upsertResult> results = DmlSamples.upsertLeads(leads);

      /* Switch back to the test context for limits */
      Test.stopTest();

      /* ID set for asserting the tasks were created as expected */
      Set<Id> ids = new Set<Id>();

      /* Iterate over the results, asserting success and adding the new ID
         to the set for use in the comprehensive assertion phase below. */
      for(Database.upsertResult result:results) {
         System.assert(result.isSuccess());
         ids.add(result.getId());
      }

      /* Assert that exactly one task exists for each lead that was inserted. */
      for(Lead l:[SELECT Id, (SELECT Subject FROM Tasks) FROM Lead WHERE Id IN :ids]) {
         System.assertEquals(1,l.tasks.size());
      }
   }
}
```

```apex
public void upsertExample() {
    Opportunity opp = [SELECT Id, Name, AccountId, 
                              (SELECT Id, PricebookEntry.Product2Id, PricebookEntry.Name 
                               FROM OpportunityLineItems)
                       FROM Opportunity 
                       WHERE HasOpportunityLineItem = true 
                       LIMIT 1]; 

    Asset[] assets = new Asset[]{}; 

    // Create an asset for each line item on the opportunity
    for (OpportunityLineItem lineItem:opp.OpportunityLineItems) {

        //This code populates the line item Id, AccountId, and Product2Id for each asset
        Asset asset = new Asset(Name = lineItem.PricebookEntry.Name,
                                Line_Item_ID__c = lineItem.Id,
                                AccountId = opp.AccountId,
                                Product2Id = lineItem.PricebookEntry.Product2Id);

        assets.add(asset);
    }
 
    try {
        upsert assets Line_Item_ID__c;  // This line upserts the assets list with
                                        // the Line_Item_Id__c field specified as the 
                                        // Asset field that should be used for matching
                                        // the record that should be upserted. 
    } catch (DmlException e) {
        System.debug(e.getMessage());
    }
}
```

## Related Topics

- Execution
               Governors and Limits (atlas.en-us.apexcode.meta/apexcode/apex_gov_limits.htm)

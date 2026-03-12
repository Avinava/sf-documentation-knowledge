---
title: "Big Objects Queueable Example"
domain: bigobjects
topic: big-objects-queueable-example
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:07.850Z
estimatedTokens: 399
keywords: [Big, Objects, Queueable, write, trigger, process, flow, sObject, asynchronous, Apex, uses, isolate, DML, operations, different]
---

# Big Objects Queueable Example

> To read or write to a big object using a trigger, process, or flow from a sObject,
        use asynchronous Apex. This example uses the asynchronous Apex Queueable interface to isolate DML operations on
        different sObject types to prevent the mixed DML error.

# Big Objects Queueable Example

To read or write to a big object using a trigger, process, or flow from a sObject, use asynchronous Apex. This example uses the asynchronous Apex Queueable interface to isolate DML operations on different sObject types to prevent the mixed DML error.

| Available in: both Salesforce Classic and Lightning Experience |
| --- |
| Available in: Enterprise, Performance, Unlimited, and Developer Editions for up to 1 million records |


## Example

This trigger occurs when a case record is inserted. It calls a method to insert a batch of big object records and demonstrates a partial failure case in which some records succeed and some fail. To create metadata files for the Customer\_Interaction\_\_b object in this example, use the XML excerpts in the [Create Metadata Files for Deployment](atlas.en-us.bigobjects.meta/bigobjects/big_object_define.htm#bo_example) example.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=bigobjects)

#### Tip

To add logging to a custom object and surface errors to users, use the addError() method. See [An Introduction to Exception Handling](https://developer.salesforce.com/page/An_Introduction_to_Exception_Handling "HTML (New Window)").

```

```

The trigger uses the Queueable Apex interface to asynchronously call a method to insert into a big object.

```

```

#### See Also

-   [*Apex Developer Guide*: Queueable Apex](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_queueing_jobs.htm "Apex Developer Guide: Queueable Apex - HTML (New Window)")

## Code Examples

```apex
// CaseTrigger.apxt

trigger CaseTrigger on Case (before insert) {
    if (Trigger.operationType == TriggerOperation.BEFORE_INSERT){
        // Customer_Interaction__b has three required fields in its row key, in this order:
        // 1) Account__c - lookup to Account
        // 2) Game_Platform__c - Text(18)
        // 3) Play_Date__c - Date/Time
        List<Customer_Interaction__b> interactions = new List<Customer_Interaction__b>();
        
        // Assemble the list of big object records to be inserted
        for (Case c : Trigger.new) {
            Customer_Interaction__b ci = new Customer_Interaction__b(
                Account__c = c.AccountId,
                // In this example, the Case object has a custom field, also named Game_Platform__c
                Game_Platform__c = c.Game_Platform__c,
                Play_Date__c = Date.today()
            );
            interactions.add(ci);
        }
        
        // CustomerInteractionHandler is an asynchronous queuable Apex class
        CustomerInteractionHandler handler = new CustomerInteractionHandler(interactions);
        System.enqueueJob(handler);
    }
}
```

```apex
// CustomerInteractionHandler.apxc

public class CustomerInteractionHandler implements Queueable {
    
    private List<Customer_Interaction__b> interactions;
    
    public CustomerInteractionHandler(List<Customer_Interaction__b> interactions) {
        this.interactions = interactions;
    }
 
    /*
     * Here we insert the Customer Interaction big object records,
     * or log an error if insertion fails.
     */
    public void execute(QueueableContext context){
        
        List<ExceptionStorage__c> errors = new List<ExceptionStorage__c>();
        
        try {
            // We have to use insertImmediate() to insert big object records.
            List<Database.SaveResult> srList = Database.insertImmediate(interactions);
            
            // Check the save results from the bulk insert
            for (Database.SaveResult sr: srList) {
                if (sr.isSuccess()) {
                       System.debug('Successfully inserted Customer Interaction.');
                } else {
                       for (Database.Error err : sr.getErrors()) {
                        // Display an error message if the insert failed
                        System.debug(err.getStatusCode() + ': ' + err.getMessage() + '; ' +
                                    'Error fields: ' + err.getFields());
                        
                        // Write to a custom object, such as ExceptionStorage__c
                        // for a more durable record of the failure
                        ExceptionStorage__c es = new ExceptionStorage__c(
                               name = 'Error',
                               ExceptionMessage__c = (err.getMessage()).abbreviate(255),
                               ExceptionType__c = String.valueOf(err.getStatusCode()),
                            ExceptionFields__c = (String.valueOf(err.getFields())).abbreviate(255)
                        );
                        errors.add(es);
                    }
                }
            }
        }
        catch (Exception e) {
            // Exception occurred, output the exception message
            System.debug('Exception: ' + e.getTypeName() + ', ' + e.getMessage());
            
            // Write any errors to a custom object as well
            ExceptionStorage__c es = new ExceptionStorage__c(
                   name = 'Exception',
                   ExceptionMessage__c = e.getMessage(),
                   ExceptionType__c = e.getTypeName()
            );
            errors.add(es);
        }
        
        // If any errors occurred, save the ExceptionStorage records
        if (errors.size() > 0) {
               insert errors;
        }
    }
}
```

## Related Topics

- Create Metadata Files for Deployment (atlas.en-us.bigobjects.meta/bigobjects/big_object_define.htm)

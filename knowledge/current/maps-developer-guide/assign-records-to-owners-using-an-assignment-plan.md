---
title: "Assign Records to Owners Using an Assignment Plan"
domain: maps-developer-guide
topic: assign-records-to-owners-using-an-assignment-plan
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:53.747Z
estimatedTokens: 681
keywords: [Assign, Records, Owners, Assignment, Plan, AssignRecords, Apex, assigns, users, automatically, rules, suppose, web-to-lead, generation, form]
---

# Assign Records to Owners Using an Assignment Plan

> The AssignRecords() Apex method
            assigns records to users automatically using rules specified in an assignment plan. For
            example, suppose that you use a web-to-lead generation form to generate inbound leads in
            Salesforce. You use the AssignRecords() method to
            assign those leads to sales reps as soon as the lead records are created, reducing the
            time for sales reps to contact leads.

# Assign Records to Owners Using an Assignment Plan

The AssignRecords() Apex method assigns records to users automatically using rules specified in an assignment plan. For example, suppose that you use a web-to-lead generation form to generate inbound leads in Salesforce. You use the AssignRecords() method to assign those leads to sales reps as soon as the lead records are created, reducing the time for sales reps to contact leads.

## Signature

```

```

Where,

-   maps is the namespace that's available after you install Salesforce Maps.
-   API is the class that contains the global methods exposed to developers.
-   AssignRecords() is the method.

## Sample Code

This code assigns accounts to reps based on an existing assignment plan. The AssignRecords() method returns a List<sObject> containing the records that were assigned to an assignment plan, the plan ID, and the records that weren't assigned to an assignment plan.

The AssignRecords() global method uses the last record cache to assign records. As a best practice, schedule assignment of records frequently in a batch to keep the cache up to date. For more information, see [*Salesforce Help*: Schedule and Run Record Assignments](https://help.salesforce.com/s/articleView?id=sales.salesforce_maps_setup_autoassignment_run.htm&type=5&language=en_US "HTML (New Window)").

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=maps_developer_guide)

#### Warning

If you invoke methods within a flow, process builder, or trigger, avoid uncommitted work errors when you perform one of the following.

-   Call the methods through a future method
-   Call the methods as queueable

Uncommitted work errors can also arise if calling out to Salesforce Maps methods more than one time in a single transaction and the Salesforce Maps token hasn’t refreshed in the last 24 hours. If these errors occur, separate each callout into individual transactions.

Different processes refresh the token, such as plotting a route or schedule. The refresh process is almost immediate after each qualifying action occurs.

**Example**

```

```

**Invocable Example**

```

```

**Trigger Example**

```

```

```

```

## Sample Response

This method returns an Apex Map<String, Object> object that contains the records assigned, the plan ID, and records not assigned. This JSON response illustrates the essential data returned.

```

```

#### See Also

-   [*Salesforce Help:* Automate Assignments for Salesforce Records](https://help.salesforce.com/s/articleView?id=sales.salesforce_maps_setup_autoassignment_configure.htm&type=5&language=en_US "Salesforce Help: Automate Assignments for Salesforce Records - HTML (New Window)")

## Code Examples

```apex
String, List<sObject> maps.API.AssignRecords(String, List<sObject>)
```

```apex
// Get the record ID of the assignment plan.
maps__AssignmentPlan__c plan = [SELECT Id FROM maps__AssignmentPlan__c];

// Get a list of records you want to assign.
// This query includes all fields mapped in the plan.
List<Account> accs = [SELECT Id, BillingLatitude, BillingLongitude FROM Account];

// Call the AssignRecords method with the plan ID and list of account records.
maps.API.AssignRecords(plan.Id, accs);

// Log the record assignment output in JSON format.
Map<String, Object> response = maps.API.AssignRecords(plan.Id, accs);
system.debug(JSON.serialize(response));
```

```apex
public class InvocableTest {
    
    @future(callout=true)
    public static void testInvocableFuture(List<Id> accIds) {
    // This query includes all fields mapped in the plan.
        List<Account> accs = [SELECT Id, BillingLatitude, BillingLongitude, Description, maps__AssignmentRule__c FROM Account WHERE Id IN :accIds];

        // Call the AssignRecords method with the plan ID and list of account records.
        maps.API.AssignRecords('a0L54000007oHXqEAM', accs);

        // Log the record assignment output in JSON format.
        Map<String, Object> response = maps.API.AssignRecords(plan.Id, accs);
        system.debug(JSON.serialize(response));
    }

    public with sharing class testInvocableQueueable implements Queueable, Database.AllowsCallouts {
        List<Id> accIds;

        public testInvocableQueueable(List<Id> accIds) {
            this.accIds = accIds;
        }

        public void execute(QueueableContext qc) {
            // This query includes all fields mapped in the plan.
            List<Account> accs = [SELECT Id, BillingLatitude, BillingLongitude, Description, maps__AssignmentRule__c FROM Account WHERE Id IN :accIds];

            // Call the AssignRecords method with the plan ID and list of account records.
            maps.API.AssignRecords('a0L54000007oHXqEAM', accs);

            // Log the record assignment output in JSON format.
            Map<String, Object> response = maps.API.AssignRecords(plan.Id, accs);
            system.debug(JSON.serialize(response));
        }
    }

    @InvocableMethod(label='test invocable' description='test auto assign' callout=true)
    public static void testInvocable(List<Id> accIds) {
        
        // CALLING A FUTURE METHOD WORKS.
        //testInvocableFuture(accIds);
        
        // CALLING A QUEUEABLE METHOD WORKS.
        //System.enqueueJob(new testInvocableQueueable(accIds));
        
        // THIS WON’T WORK AS AN INVOCABLE METHOD. A CALLOUT INSIDE OF A RECORD UPDATE OR INSERT RESULTS IN AN UNCOMMITTED WORK ERROR.
        // INSTEAD, SEPARATE THE TRANSACTION INTO A FUTURE OR QUEUEABLE METHOD.
        //List<Account> accs = [SELECT Id, BillingLatitude, BillingLongitude, Description, maps__AssignmentRule__c FROM Account WHERE Id IN :accIds];
        //maps.API.AssignRecords('a0L54000007oHXqEAM', accs);
    }
}
```

```apex
// FOR INSERTS, AFTER WORKS BETTER THAN BEFORE BECAUSE THE ID DOESN’T EXIST IN THE BEFORE CHECK.
trigger AccountTrigger on Account (after insert, after update) {
    
    List<Id> accIds = new List<Id>();

    for (Account acc : Trigger.new) {
        if (acc.maps__AssignmentRule__c == null) {
            accIds.add(acc.Id);
        }
    }
    
    // CALLING A QUEUEABLE METHOD WORKS.
    //if (!accIds.isEmpty()) {
        //System.enqueueJob(new AccountTriggerHelper.testTriggerQueueable(accIds));
    //}
    
    // THIS WON’T WORK AS A TRIGGER.
    //List<Account> accs = [SELECT Id, BillingLatitude, BillingLongitude, Description, maps__AssignmentRule__c FROM Account WHERE Id IN :accIds];
    //maps.API.AssignRecords('a0L54000007oHXqEAM', accs);
    
    // CALLING A FUTURE METHOD WON’T WORK.
    //AccountTriggerHelper.testTriggerFuture(accIds);
    
}
```

```apex
public class AccountTriggerHelper {
    
    @future(callout=true)
    public static void testTriggerFuture(List<Id> accIds) {
    //  This query includes all fields mapped in the plan.
        List<Account> accs = [SELECT Id, BillingLatitude, BillingLongitude, Description, maps__AssignmentRule__c FROM Account WHERE Id IN :accIds];
        // Call the AssignRecords method with the plan ID and list of account records.
        maps.API.AssignRecords('a0L54000007oHXqEAM', accs);
    }

    public with sharing class testTriggerQueueable implements Queueable, Database.AllowsCallouts {
        List<Id> accIds;

        public testTriggerQueueable(List<Id> accIds) {
            this.accIds = accIds;
        }

        public void execute(QueueableContext qc) {
        // This query includes all fields mapped in the plan.
            List<Account> accs = [SELECT Id, BillingLatitude, BillingLongitude, Description, maps__AssignmentRule__c FROM Account WHERE Id IN :accIds];
            // Call the AssignRecords method with the plan ID and list of account records.
            maps.API.AssignRecords('a0L54000007oHXqEAM', accs);

        // Log the record assignment output in JSON format.
        Map<String, Object> response = maps.API.AssignRecords(plan.Id, accs);
        system.debug(JSON.serialize(response));
        }
    }

}
```

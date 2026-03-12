---
title: "Associate Actions to Records with Apex"
domain: salesforce-guided-engagement
topic: associate-actions-to-records-with-apex
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:41.924Z
estimatedTokens: 395
keywords: [Associate, Actions, Records, Apex, want, control, how, trigger, creation, RecordAction, exposed, standard, DML, operation, undelete]
---

# Associate Actions to Records with Apex

> If you want to control how you trigger the creation of a RecordAction, you can use
        Apex to associate actions to records. The RecordAction object is exposed as a standard
        object in Apex. You can trigger it before a DML operation or on delete or undelete. You can
        also provide custom error handling.

# Associate Actions to Records with Apex

If you want to control how you trigger the creation of a RecordAction, you can use Apex to associate actions to records. The RecordAction object is exposed as a standard object in Apex. You can trigger it before a DML operation or on delete or undelete. You can also provide custom error handling.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=salesforce_guided_engagement)

#### Note

RecordAction is available in API version 42.0 and later.

Here are some scenarios that Apex better accommodates.

-   Triggering before a DML operation rather than after
-   Triggering on delete and undelete DML operations
-   Validating data before the action is run
-   Custom error handling
-   Partial completion rather than complete failure

## Example

This example uses an Apex class and trigger pair to associate a flow to a newly created account that satisfies specific criteria. In the class, a method is defined that takes in a list of accounts and creates a RecordAction for each of them. It sets the new account as the RecordId and the ActionDefinition as an active flow. The trigger is called after the insert of an account record. When the criterion (type is Customer) is satisfied, the class method is executed, and it adds the defined flow to the new account.

**Apex Class**

```

```

**Apex Trigger**

```

```

#### See Also

-   [*Apex Developer Guide*](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_dev_guide.htm "
    Apex Developer Guide
    - HTML (New Window)")

## Code Examples

```apex
public class RecordActionHandler {
    public static void addNewCustomerFlow(Account[] accts) {
        RecordAction[] recordActions = new List<RecordAction>();
        for (Account a : accts) {
            RecordAction ra = new RecordAction(RecordId=a.Id, ActionDefinition='New_Customer_Flow', Order=1, ActionType='Flow');
            recordActions.add(ra);
        }
        
        try {
            insert recordActions;
        } catch (DMLException e) {
            System.debug('An unexpected error has occurred: ' + e.getMessage());
        }
    }
}
```

```apex
trigger RecordActionTrigger on Account (after insert) {
    Account[] customerAccounts = new List<Account>();
    for (Account a : Trigger.new) {
        if (a.Type == 'Customer') {
            customerAccounts.add(a);
        }
    }
    RecordActionHandler.addNewCustomerFlow(customerAccounts);
}
```

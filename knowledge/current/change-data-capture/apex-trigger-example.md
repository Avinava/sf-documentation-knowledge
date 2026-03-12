---
title: "Apex Trigger Example"
domain: change-data-capture
topic: apex-trigger-example
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:09.765Z
estimatedTokens: 427
keywords: [Apex, Trigger, sample, demonstrates, common, change, event, triggers, complex, quick, start, Predict, Account, Status]
---

# Apex Trigger Example

> This sample trigger demonstrates a common use for change event triggers and provides
        a more complex trigger example than the quick start.

# Apex Trigger Example

This sample trigger demonstrates a common use for change event triggers and provides a more complex trigger example than the quick start.

## Using an Apex Change Event Trigger to Predict Account Status

Because Apex change event triggers run asynchronously, they typically contain time-intensive processes that run after the database transaction is completed. This trigger example covers a more common real-world scenario than the trigger given in the quick start. It captures case changes and predicts the account trust status using an Apex class. The prediction is based on counting the account cases and checking case fields. In other scenarios, you might have complex prediction algorithms that are more resource intensive.

The trigger calls a method in an Apex class to perform the trust prediction on the accounts related to all cases in this trigger. An account status of Red means that the account trust level is low because too many cases are associated with this account among other criteria. An account status of Green means that the trust level is good. The associated class is listed after this trigger. This example assumes that you have the following prerequisites.

-   A platform event named Red\_Account\_\_e with two fields: Account\_Id\_\_c of type Text and Rating\_\_c of type Text
-   The SLAViolation\_\_c custom field on the Case object of type Picklist with values Yes and No

```

```

The RedAccountPredictor class performs the prediction of the account trust level. The first method that the trigger calls is predictForCases, which calls other methods in this class. The method returns a map of account ID to a Boolean value for account status.

```

```

## Code Examples

```apex
trigger CaseChangeEventTrigger on CaseChangeEvent (after insert) {

    List<CaseChangeEvent> changes = Trigger.new;
    
    Set<String> caseIds = new Set<String>();
    
    for (CaseChangeEvent change : changes) {
        // Get all Record Ids for this change and add to the set
        List<String> recordIds = change.ChangeEventHeader.getRecordIds();
        caseIds.addAll(recordIds);
    }
    
    // Perform heavy (slow) computation determining Red Account 
    // status based on these Case changes
    RedAccountPredictor predictor = new RedAccountPredictor();
    Map<String, boolean> accountsToRedAccountStatus = 
        predictor.predictForCases(new List<String>(caseIds));
    
    // Publish platform events for predicted red accounts
    List<Red_Account__e> redAccountEvents = new List<Red_Account__e>();
    for (String acctId : accountsToRedAccountStatus.keySet()) {
        String rating = accountsToRedAccountStatus.get(acctId) ? 'Red' : 'Green';
        if (rating=='Red') {
        	redAccountEvents.add(new Red_Account__e(Account_Id__c=acctId, 
           		Rating__c=rating));
       }
    }
    System.debug('RED_ACCT: ' + redAccountEvents);
    if (redAccountEvents.size() > 0) {
        EventBus.publish(redAccountEvents);
    }
}
```

```apex
public class RedAccountPredictor {

    private static final Integer MAX_CASES_EXPECTED = 2;
    
    public RedAccountPredictor() { }
    
    // First method to be called for performing account status prediction.
    // Get the account IDs related to the passed-in case IDs 
    // and call a predictor method.
    // Return a map of account ID to account status Boolean.
    public Map<String, boolean> predictForCases(List<String> caseId) {
        List<Case> casesMatchingIds = 
            [SELECT Id, Account.Id FROM Case WHERE Id IN :caseId];
        if (null != casesMatchingIds && casesMatchingIds.size() > 0) {
            List<String> accountIds = new List<String>();
            for (Case c : casesMatchingIds) {
                accountIds.add(c.Account.Id);
            }
            return predictForAccounts(accountIds);
        } else {
            return new Map<String, boolean>();
        }
    }
    
    // Perform slow, resource intensive calcuation to determine.
    // If Account is in RED status (think Einsein predictions, etc.)
    public Map<String, boolean> predictForAccounts(List<String> acctIds) {
        List<Case> casesForAccounts = 
            [SELECT Id, Account.Id, Status, CaseNumber, Priority, 
                 IsEscalated, SLAViolation__c 
             FROM Case 
             WHERE AccountId IN :acctIds AND Status !='Closed'];
        Map<String, List<Case>> accountsToCases = new Map<String, List<Case>>();
        for (Case c : casesForAccounts) {
            if (null == c.Account.Id) continue;
            if (!accountsToCases.containsKey(c.Account.Id)) {
                accountsToCases.put(c.Account.Id, new List<Case>());
            }
            accountsToCases.get(c.Account.Id).add(c);
        }
        Map<String, boolean> results = new Map<String, boolean>();
        for (String acctId : accountsToCases.keySet()) {
            results.put(acctId, predict(accountsToCases.get(acctId)));
        }
        return results;
    }
    
    // Perform the account status prediction.
    // Return true if account is red; otherwise, return false.
    private boolean predict(List<Case> casesForAccount) {
        boolean isEscalated = false;
        boolean hasSlaViolation = false;
        boolean hasHighPiority = false;
        boolean allStatusesResolved = true;
        
        for (Case openCase : casesForAccount) {
            isEscalated |= openCase.IsEscalated;
            hasSlaViolation |= (openCase.SLAViolation__c == 'Yes');
            hasHighPiority |= openCase.Priority == 'High';
            allStatusesResolved &= (openCase.Status == 'Closed' 
                                    || openCase.Status == 'Part Received');
        }
        if (allStatusesResolved) {
            return false;
        }
        if (casesForAccount.size() > MAX_CASES_EXPECTED) {
            return true;
        } else if (isEscalated || hasSlaViolation) {
            return true;
        } else if (hasHighPiority) {
            return true;
        }
        return false;
    }    
}
```

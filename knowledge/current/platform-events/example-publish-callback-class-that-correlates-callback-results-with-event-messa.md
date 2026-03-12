---
title: "Example: Publish Callback Class That Correlates Callback Results with Event Messages"
domain: platform-events
topic: example-publish-callback-class-that-correlates-callback-results-with-event-messa
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:28.034Z
estimatedTokens: 336
keywords: [Publish, Callback, Correlates, Results, Event, Messages, implementation, how, retry, publishing, failed, events, It’s, trigger, Order]
---

# Example: Publish Callback Class That Correlates Callback Results with Event Messages

> This example callback class implementation shows how to retry publishing failed events.
  It’s based on a trigger on the Order object.

# Example: Publish Callback Class That Correlates Callback Results with Event Messages

This example callback class implementation shows how to retry publishing failed events. It’s based on a trigger on the Order object.

## Callback Class

If event publishing fails, the onFailure method in the FailureCallbackWithCorrelation class is invoked. This method retries publishing failed events up to two times. A map holds the UUID values of each published event and maps it to the order record ID. This mapping is used to populate the event Order\_Id\_\_c field. Alternatively, you can use the record ID to obtain field data from the record and populate event fields. The example omits this detail for simplicity.

The examples in this section require a platform event, Order Event, to be defined with a Text(18) field of Order Id.

```

```

## Apex Trigger

For each inserted or updated order record, the trigger publishes the Order\_Event\_\_e platform event with a populated EventUuid field.

```

```

To run the trigger, insert an order record. Because an order depends on an account and contract, create these records first. You can create the records in the user interface or via Apex or an API. An Apex snippet is provided for your convenience. You can run this snippet in the Developer Console, in the Execute Anonymous Window.

```

```

## Code Examples

```apex
public class FailureCallbackWithCorrelation implements EventBus.EventPublishFailureCallback
{
    public static final Integer MAX_RETRIES = 2;
    private Integer retryCounter = 0;
    private Map<String,String> uuidMap;
    
    // Callback constructor
    public FailureCallbackWithCorrelation(Map<String,String> uuidMap) {
        this.uuidMap = uuidMap;
    }
    
    public void onFailure(EventBus.FailureResult result) {
        List<String> eventUuids = result.getEventUuids();
        Map<String,String> newUuidMap = new Map<String,String>();
        
        if (retryCounter < MAX_RETRIES) {
            // Try to re-publish the failed events
            List<Order_Event__e> events = new List<Order_Event__e>();
            for (String uuid : eventUuids) {
                // Create a new event with the contents of the failed event
                Order_Event__e event = (Order_Event__e) 
                    Order_Event__e.sObjectType.newSObject(null, true);
                // Fill event with the right order record Id
                event.Order_Id__c = uuidMap.get(uuid);  
                events.add(event);
                
                // Use a new map since the new event will have a different uuid
                newUuidMap.put(event.EventUuid, event.Order_Id__c);
            }
            // Replace old uuid map because we no longer need its contents
            uuidMap = newUuidMap;
            
            // Republish with the same callback passed in again as 'this'
            System.debug('Republish ' + eventUuids.size() + ' failed events.');
            EventBus.publish(events, this); 
            System.debug('Republish event for Order with Ids: ' + 
                         String.join(uuidMap.values(), ', '));
            
            // Increase counter
            retryCounter++;
        } else {
            // Retry exhausted, log an error instead
            System.debug(eventUuids.size() + ' event(s) failed to publish after ' + 
                         MAX_RETRIES + ' retries ' +
                         'for Order with Ids: ' + String.join(uuidMap.values(), ', '));
        }
    }
    
    // Getter methods so we can validate this in the unit test
    public Integer getRetryCounter() {
        return retryCounter;
    }

    public Map<String,String> getUuidMap() {
        return uuidMap;
    }
}
```

```apex
trigger OrderTrigger on Order (after insert, after update) {
    Map<String,String> uuidMap = new Map<String,String>();
    List<Order_Event__e> events = new List<Order_Event__e>();
    
    for (Order o : Trigger.new) {
        Order_Event__e e = (Order_Event__e) 
        Order_Event__e.sObjectType.newSObject(null, true);
        // Fill event field with Order Id
        e.Order_Id__c = o.Id; 
        // Map event UUID -> Order Id so we can look up later
        uuidMap.put(e.EventUuid, o.Id); 
        events.add(e);
    }

    FailureCallbackWithCorrelation cb = new FailureCallbackWithCorrelation(uuidMap);
    List<Database.SaveResult> srs = EventBus.publish(events, cb);

    // Inspect immediate publish result
    for (Database.SaveResult sr : srs) {
        if (sr.isSuccess()) {
            System.debug('Successfully enqueued event.');
        } else {
            for(Database.Error err : sr.getErrors()) {
                System.debug('Error returned: ' + err.getStatusCode() + ' - ' + 
                    err.getMessage());
            }
        }
    }
}
```

```
// Create account
Account a = new Account();
a.Name = 'Account Callback';
insert a;

// Create contract
Contract c = new Contract();
c.StartDate = Date.today();
c.ContractTerm = 12;
c.Status = 'Draft';
c.AccountId = a.Id;
insert c;

// Create order
Order o = new Order();
o.AccountId = a.Id;
o.ContractId = c.Id;
o.Status = 'Draft';
o.EffectiveDate = Date.today();
insert o;
```

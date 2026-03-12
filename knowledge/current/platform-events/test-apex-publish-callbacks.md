---
title: "Test Apex Publish Callbacks"
domain: platform-events
topic: test-apex-publish-callbacks
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:28.061Z
estimatedTokens: 615
keywords: [Test, Apex, Publish, Callbacks, callback, add, provide, tests, package, deploy, production, meet, code, coverage, requirements]
---

# Test Apex Publish Callbacks

> To test your Apex publish callback class, add an Apex test class. You must provide Apex
  tests before you can package or deploy an Apex class to production and meet code coverage
  requirements.

# Test Apex Publish Callbacks

To test your Apex publish callback class, add an Apex test class. You must provide Apex tests before you can package or deploy an Apex class to production and meet code coverage requirements.

In an Apex test, event messages are published synchronously in the test event bus. To simulate the execution of the callback methods in a test, you can deliver or fail the publishing of the event messages.

To simulate a failed publishing of an event or a batch of events, call this method.

```

```

The Test.getEventBus().fail() method causes the publishing of events to fail immediately after the call, and event messages are removed from the test event bus. This method causes the onFailure() method in the callback class to be invoked. When the event messages fail to publish, none of the triggers defined on the platform event receive any failed events.

To simulate successful event delivery, call the Test.getEventBus().deliver(); method or have your events delivered after Test.stopTest(). Event messages are delivered immediately after each of those statements. Successful event delivery triggers the execution of the onSuccess() method in the callback class.

## Example: MyCallbackTest Test Class

This example class is a test class for the FailureAndSuccessCallback class given previously. This test class shows how to test the successful and failed publishing of test event messages in the test event bus. Before you run this test class, define a platform event in Setup with the label Order Event and a Text(18) field of Order Id.

```

```

## Example: MyCallbackTestWithCorrelation Test Class

This example class is a test class for the FailureCallbackWithCorrelation class given previously. This test class shows how to test the failed publishing of test event messages in the test event bus. The callback retries publishing events for a maximum of two attempts so the test fails the publishing of a test event twice in a loop. It verifies that, each time, the callback retries publishing the event by checking that the retryCounter variable has been increased. Before you run this test class, define a platform event in Setup with the label Order Event and a Text(18) field of Order Id.

```

```

#### See Also

-   [*Platform Events Developer Guide*: Testing Your Platform Event in Apex](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/platform_event_apex_tests.htm)

## Code Examples

```
Test.getEventBus().fail();
```

```apex
@isTest
public class MyCallbackTest {
    @isTest static void testFailedEventsWithFail() {
        
        // Publish with callback
        FailureAndSuccessCallback cb = new FailureAndSuccessCallback();

        // Create test event with EventUuid field value
        Order_Event__e event = (Order_Event__e)Order_Event__e.sObjectType.newSObject(
            null, true);
        event.Order_Id__c='100';
        System.debug('EventUuid of created event: ' + event.EventUuid);
        // Publish an event with callback
        EventBus.publish(event, cb);

        // Fail event 
        // (invoke onFailure and DO NOT deliver event to subscribers)
        Test.getEventBus().fail(); 
        
        // Verify that tasks were created by the onFailure() method
        List<Task> tasksFailed = 
            [SELECT Id,Subject,Description FROM Task 
             WHERE Subject='Follow up on event publishing failures.'];
        System.Assert.areEqual(1,tasksFailed.size(),
                            'Unexpected number of tasks received for failed publishing');
        System.debug('tasksFailed[0].Description=' + tasksFailed[0].Description);
        System.debug('event.EventUuid=' + event.EventUuid);
        System.Assert.isTrue(tasksFailed[0].Description.contains(event.EventUuid),
                            'EventUuid was not found in the Description field.');

    }

    @isTest static void testSuccessfulEventsWithDeliver() {
        
        // Publish with callback
        FailureAndSuccessCallback cb = new FailureAndSuccessCallback();

        // Create test event with EventUuid field value
        Order_Event__e event = (Order_Event__e)Order_Event__e.sObjectType.newSObject(
            null, true);
        event.Order_Id__c='99';
        // Publish an event with callback
        EventBus.publish(event, cb);
        
        // Deliver events published so far
        // (invokes onSuccess and delivers events to subscribers)
        Test.getEventBus().deliver();
        
        // Verify that tasks were created by the onSuccess() method
        List<Task> tasksSuccessful = 
            [SELECT Id,Subject,Description FROM Task 
             WHERE Subject='Follow up on successful event publishing.'];
        System.Assert.areEqual(1,tasksSuccessful.size(),
                            'Unexpected number of tasks received for successful publishing');
        System.Assert.isTrue(tasksSuccessful[0].Description.contains(event.EventUuid),
                            'EventUuid was not found in the Description field.');
    
    }

    @isTest static void testSuccessfulEventsWithStopTest() {
        
        // Start test
        Test.startTest();
        
        // Publish with callback
        FailureAndSuccessCallback cb = new FailureAndSuccessCallback();

        // Create test event with EventUuid field value
        Order_Event__e event = (Order_Event__e)Order_Event__e.sObjectType.newSObject(
            null, true);
        event.Order_Id__c='99';
        // Publish an event with callback
        EventBus.publish(event, cb);
        
        // After the test ends, it delivers the events published 
        // (invokes onSuccess and delivers to subscribers)
        Test.stopTest();
        
        // Verify that we have two tasks created by the onSuccess() method:
        // one task from the earlier deliver() call and one event after Test.stopTest()
        List<Task> tasksSuccessful = 
            [SELECT Id,Subject,Description FROM Task 
             WHERE Subject='Follow up on successful event publishing.'];
        System.Assert.areEqual(1,tasksSuccessful.size(),
                            'Unexpected number of tasks received for successful publishing');
        System.Assert.isTrue(tasksSuccessful[0].Description.contains(event.EventUuid),
                             'EventUuid was not found in the Description field.');
    }
}
```

```apex
@isTest
public class MyCallbackTestWithCorrelation {
   
    @isTest
    static void testFailedEventsWithFail() {
        // Create test event
        Order_Event__e event = (Order_Event__e)Order_Event__e.sObjectType.newSObject(
            null, true);
        event.Order_Id__c='dummyOrderId';
        
        // Populate map
        Map<String,String> uuidMap = new Map<String,String>();
        uuidMap.put(event.EventUuid, 'dummyOrderId');
        
        // Create callback
        FailureCallbackWithCorrelation cb = new FailureCallbackWithCorrelation(uuidMap);
        
        // Make sure retry counter is 0
        Assert.areEqual(0, cb.getRetryCounter(), 
            'Newly created callback should have retry counter at 0');
        
        // Publish an event with callback
        EventBus.publish(event, cb);
		
        // If we fail all publish attempts, callback should run MAX_RETRIES times. 
        // For each attempt, the callback should republish the event, 
        //    increase the counter, and update the map
        String prevUuid = event.EventUuid;
        for (Integer i = 1; i <= FailureCallbackWithCorrelation.MAX_RETRIES; i++) {
            Test.getEventBus().fail();
            Assert.areEqual(i, cb.getRetryCounter(), 'Retry counter should be ' + i);
            Assert.areEqual(1, cb.getUuidMap().size(), 'Map size should be 1');
            String currUuid = (new List<String>(cb.getUuidMap().keySet())).get(0);
            Assert.areNotEqual(prevUuid, currUuid, 
                'Map should be updated with newly created event Uuid');
            Assert.areEqual('dummyOrderId', cb.getUuidMap().get(currUuid), 
                'Map value should be the original Order Id');
            prevUuid = currUuid;
        }
        
        // If we publish another failed event, callback should not retry.
        Order_Event__e event2 = (Order_Event__e)Order_Event__e.sObjectType.newSObject(
            null, true);
        event2.Order_Id__c='dummyOrderId';
        EventBus.publish(event, cb);
        Test.getEventBus().fail();
        Assert.areEqual(FailureCallbackWithCorrelation.MAX_RETRIES, cb.getRetryCounter(), 
                        'Retry counter should still be ' +
                         FailureCallbackWithCorrelation.MAX_RETRIES);
    }
}
```

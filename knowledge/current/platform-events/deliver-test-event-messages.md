---
title: "Deliver Test Event Messages"
domain: platform-events
topic: deliver-test-event-messages
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:28.156Z
estimatedTokens: 1910
keywords: [Deliver, Test, Event, Messages, Test.stopTest, statement, Alternatively, any, time, Test.getEventBus, Fail, Demand, Published, Asynchronous, Apex]
---

# Deliver Test Event Messages

> Deliver test event messages after the Test.stopTest() statement. Alternatively, deliver test event messages at any
        time with the Test.getEventBus().deliver() method.
        Fail test event messages with the Test.getEventBus().fail() method.

# Deliver Test Event Messages

Deliver test event messages after the Test.stopTest() statement. Alternatively, deliver test event messages at any time with the Test.getEventBus().deliver() method. Fail test event messages with the Test.getEventBus().fail() method.

## Deliver Test Event Messages After Test.stopTest()

To publish platform event messages in an Apex test, enclose the publish statements within Test.startTest() and Test.stopTest() statements. Call the EventBus.publish() method within the Test.startTest() and Test.stopTest() statements. In test context, the EventBus.publish() method enqueues the publish operation. The Test.stopTest() statement causes the event publishing to be carried out and event messages to be delivered to the test event bus. Include your validations after the Test.stopTest() statement. For example, you can validate that a subscribed Apex trigger or a subscribed flow Pause element has performed the expected actions, like creating a Salesforce record.

```

```

## Example

This sample test class contains two test methods. The testValidEvent() method checks that the event was successfully published and fires the associated trigger. The testInvalidEvent() method verifies that publishing an event with a missing required field fails, and no trigger is fired. The testValidEvent() method creates one Low\_Ink\_\_e event. After Test.stopTest(), it executes a SOQL query to verify that a case record is created, which means that the trigger was fired. The second test method follows a similar process but for an invalid test.

This example requires that the Low\_Ink\_\_e event and the associated trigger are defined in the org.

```

```

## Deliver Test Event Messages on Demand with Test.getEventBus().deliver()

You can control when test event messages are delivered to subscribers by calling Test.getEventBus().deliver(). Use Test.getEventBus().deliver() to deliver test event messages multiple times, and verify that subscribers have processed the test events each step of the way. Delivering event messages multiple times is useful for testing sequential processing of events. For example, you can verify sequential actions of a subscriber in a loop within the same test.

Enclose Test.getEventBus().deliver() within the Test.startTest() and Test.stopTest() statement block.

```

```

Also, you can call Test.getEventBus().deliver() in an Apex test method outside the Test.startTest() and Test.stopTest() statement block. Doing so enables you to test event messages with asynchronous Apex.

```

```

## Deliver Test Event Messages Published from Asynchronous Apex

When testing a batch Apex job that publishes BatchApexErrorEvent on failure, use the Test.startTest() and Test.stopTest() statement block with Test.getEventBus().deliver(). The Test.stopTest() call ensures that the asynchronous Apex job executes after this statement. Next, Test.getEventBus().deliver() delivers the event message that the failed batch job published.

This snippet shows how to execute a batch Apex job and deliver event messages. It executes the batch job after Test.stopTest(). This batch job publishes a BatchApexErrorEvent message when a failure occurs through the implementation of Database.RaisesPlatformEvents. After Test.stopTest() runs, a separate Test.getEventBus().deliver() statement is added so that it can deliver the BatchApexErrorEvent.

```

```

Asynchronous Apex also includes queueable Apex and future methods. If a platform event message is published from within those async Apex jobs, they’re delivered after Test.stopTest(). It’s not necessary to add Test.getEventBus().deliver();. The next example shows how to deliver a platform event message that a queueable Apex job publishes. After Test.stopTest(), the queueable job is executed and the event message is delivered.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=platform_events)

#### Note

If further platform events are published by downstream processes, add Test.getEventBus().deliver(); to deliver the event messages for each process. For example, if a platform event trigger, which processes the event from the Apex job, publishes another platform event, add a Test.getEventBus().deliver(); statement to deliver the event message.

## Example: Deliver Event Messages Individually

This test class publishes an Order\_Event\_\_e event message and delivers it using Test.getEventBus().deliver(). It verifies that the trigger processed the event message and created a task. A duplicate event message (an event with the same Event\_ID\_\_c custom field value) is published and delivered. The test verifies that the trigger didn’t create a task for the duplicate event.

Before you can run this test class, define a platform event with the name of Order\_Event\_\_e and these fields: Event\_ID\_\_c of type Text, Order\_Number\_\_c of type Text, Has\_Shipped\_\_c of type Checkbox. Also, in the OrderTrigger trigger, replace the user Name field value in the SOQL query with a user’s full name in your Salesforce org, such as John Smith.

```

```

This example trigger processes Order\_Event\_\_e event messages that the test class publishes.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=platform_events)

#### Note

Because this trigger performs a SOQL query for each event notification received, the Apex governor limit for SOQL queries can be hit.

```

```

## Fail the Publishing of Event Messages to Test Apex Publish Callbacks

Apex publish callbacks contain the final result of asynchronous EventBus.publish calls. To test your Apex publish callback class, you can simulate the failure of a publish call with Test.getEventBus().fail().

In an Apex test, event messages are published synchronously in the test event bus. To can simulate the execution of the callback methods in a test, you can deliver or fail the publishing of the event messages. This section covers the failure of event publishing.

The Test.getEventBus().fail() method causes the publishing of events to fail immediately after the call and event messages are removed from the test event bus. This method causes the onFailure() method in the callback class to be invoked. When the event messages fail to publish, none of the triggers defined on the platform event receive any failed events.

This example class is a test class for the FailureAndSuccessCallback class that is given in [Get the Result of Asynchronous Platform Event Publishing with Apex Publish Callbacks](atlas.en-us.platform_events.meta/platform_events/platform_events_publish_callbacks.htm "Get the final result of an EventBus.publish call through an Apex publish callback that you implement. Without the callback, you can get only the intermediate queueing result in Database.SaveResult of an EventBus.publish call, not the final result."). This test class shows how to test the failed delivery of test event messages in the test event bus. Before you run this test class, define a platform event in Setup with the label Order Event and a Text field of Order Number.

```

```

To deliver event messages successfully, check out these sections.

-   [Deliver Test Event Messages After Test.stopTest()](#deliver_stopTest)
-   [Deliver Test Event Messages on Demand with Test.getEventBus().deliver()](#deliver_immediate)

#### See Also

-   [*Apex Developer Guide* : Using Limits, startTest, and stopTest](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_testing_tools_start_stop_test.htm " Apex Developer Guide : Using Limits, startTest, and stopTest - HTML (New Window)")

## Code Examples

```
// Create test events
Test.startTest();
// Publish test events with EventBus.publish()
Test.stopTest();
// Perform validations
```

```apex
@isTest
public class EventTest {
    @isTest static void testValidEvent() {
        
        // Create a test event instance
        Low_Ink__e inkEvent = new Low_Ink__e(Printer_Model__c='MN-123', 
                                             Serial_Number__c='10013', 
                                             Ink_Percentage__c=0.15);
        
        Test.startTest();
        
        // Publish test event
        Database.SaveResult sr = EventBus.publish(inkEvent);
            
        Test.stopTest();
                
        // Perform validations here
        
        // Verify SaveResult value
        System.assertEquals(true, sr.isSuccess());
        
        // Verify that a case was created by a trigger.
        List<Case> cases = [SELECT Id FROM Case];
        // Validate that this case was found
        System.assertEquals(1, cases.size());
    }
    
    @isTest static void testInvalidEvent() {
        
        // Create a test event instance with invalid data.
        // We assume for this test that the Serial_Number__c field is required.
        // Publishing with a missing required field should fail.
        Low_Ink__e inkEvent = new Low_Ink__e(Printer_Model__c='MN-123',  
                                             Ink_Percentage__c=0.15);
        
        Test.startTest();
        
        // Publish test event
        Database.SaveResult sr = EventBus.publish(inkEvent);
            
        Test.stopTest();
                
        // Perform validations here
        
        // Verify SaveResult value - isSuccess should be false
        System.assertEquals(false, sr.isSuccess());
        
        // Log the error message
        for(Database.Error err : sr.getErrors()) {
            System.debug('Error returned: ' +
                        err.getStatusCode() +
                        ' - ' +
                        err.getMessage()+' - '+err.getFields());
        }
        
        // Verify that a case was NOT created by a trigger.
        List<Case> cases = [SELECT Id FROM Case];
        // Validate that this case was found
        System.assertEquals(0, cases.size());
    }
}
```

```
Test.startTest();
// Create test events
// ...
// Publish test events with EventBus.publish()
// ...
// Deliver test events
Test.getEventBus().deliver();
// Perform validations 
// ...
Test.stopTest();
```

```
Test.startTest();
// Do some tests
Test.stopTest();

// Deliver test events
Test.getEventBus().deliver();
```

```apex
try {
    Test.startTest();
    Database.executeBatch(new SampleBatchApex());
    Test.stopTest();
    // Batch Apex job executes here
} catch(Exception e) {
    // Catch any exceptions thrown in the batch job
}

// The batch job fires BatchApexErrorEvent if it fails, so deliver the event.
Test.getEventBus().deliver();
```

## Related Topics

- Get the Result of Asynchronous Platform Event Publishing with Apex Publish Callbacks (atlas.en-us.platform_events.meta/platform_events/platform_events_publish_callbacks.htm)

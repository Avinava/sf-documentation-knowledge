---
title: "Test Change Event Triggers"
domain: change-data-capture
topic: test-change-event-triggers
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:09.778Z
estimatedTokens: 1191
keywords: [Test, Change, Event, Triggers, package, deploy, Apex, production, provide, tests, sufficient, code, coverage, Enable, Data]
---

# Test Change Event Triggers

> Before you can package or deploy Apex change event triggers to production, you must
  provide Apex tests and sufficient code coverage.

# Test Change Event Triggers

Before you can package or deploy Apex change event triggers to production, you must provide Apex tests and sufficient code coverage.

## Enable All Change Data Capture Entities for Notifications

To enable the generation of change event notifications for all supported Change Data Capture entities for an Apex test, call this method.

```

```

Call the Test.enableChangeDataCapture() method at the beginning of your test method before performing DML operations and calling Test.getEventBus().deliver() or Test.stopTest().

The Test.enableChangeDataCapture() method ensures that Apex tests can fire change event triggers regardless of the entities selected in Setup. This method doesn’t affect the Change Data Capture entity selections for the org.

## Deliver Test Change Events

To test your change event trigger, perform DML operations and then call the Test.getEventBus().deliver() method. The method delivers the event messages from the test event bus to the corresponding change event trigger and causes the trigger to fire. Finally, validate that the trigger executed as expected. For example, if the trigger creates or updates records, you can query those records with SOQL.

This test method outlines the order of statements that must be executed in a test, starting with enabling Change Data Capture entities.

```

```

Alternatively, use the Test.startTest(), Test.stopTest() method block to fire a change event trigger. After Test.stopTest() executes, all test change event messages generated from DML operations are delivered to the associated trigger. The DML statements can be within the block or outside the block as long as they precede Test.stopTest().

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=change_data_capture)

#### Note

In test context, only up to 500 change event messages can be delivered as a result of record changes. If you exceed this limit, the Apex test stops execution with a fatal error.

## Apex Test Example Based on Quick Start Trigger

The testNewAccount method in this test class shows you how to write a test for the MyAccountChangeTrigger trigger provided in the [Add an Apex Trigger](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_add_trigger.htm "The quick start adds a simple change event trigger that shows how to access header and record fields in a change event message.") quick start. The test method first enables all entities for change notifications. It creates a test account and then calls the Test.getEventBus().deliver(); method. Next, the test verifies that the trigger’s execution by querying Task records and validating that one task was created. The query returns only tasks that the trigger created in test contest. For that reason, the test expects only one task. Next, the test updates the account and verifies that no new task is created.

```

```

This test class is an alternative example that uses the Test.startTest(), Test.stopTest() method block to deliver test change events and fire the trigger. For more information about these methods, see [Using Limits, startTest, and stopTest](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_testing_tools_start_stop_test.htm "HTML (New Window)") in the [Apex Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_dev_guide.htm "HTML (New Window)").

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=change_data_capture)

#### Note

If multiple DML operations are performed on a single record within the Test.startTest(), Test.stopTest() block, only one change event is generated. The change event contains the latest data and the initial change type. For more information, see [Change Event Generation in a Transaction with Multiple Changes for the Same Record](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_general_considerations.htm).

## Properties of Change Events in Test Context

Test change events messages are published to the test event bus, which is separate from the Salesforce event bus. They aren’t persisted in Salesforce and aren’t delivered to event channels outside the test class. Properties of test change event messages, like the replay ID, are reset in test context and reflect only the values of test event messages. For more information, see [Event and Event Bus Properties in Test Context](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/platform_events_test_events.htm "HTML (New Window)") in the [Platform Events Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/platform_events_intro.htm).

## Code Examples

```
Test.enableChangeDataCapture();
```

```
@isTest static void testChangeEventTrigger() {
    // Enable all Change Data Capture entities for notifications.
    Test.enableChangeDataCapture();
    
    // Insert one or more test records
    // ...
    
    // Deliver test change events
    Test.getEventBus().deliver();
    
    // Verify the change event trigger’s execution
    // ...
}
```

```
@isTest static void testChangeEventTriggerWithStopTest() {
    // Enable all Change Data Capture entities for notifications.
    Test.enableChangeDataCapture();
    
    Test.startTest();
    // Insert one or more test records
    // ...
    Test.stopTest();
    // The stopTest() call delivers the test change events and fires the trigger
    
    // Verify the change event trigger’s execution
    // ...
}
```

```apex
@isTest
public class TestMyAccountChangeTrigger {
    @isTest static void testNewAndUpdatedAccount() {
        // Enable all Change Data Capture entities for notifications.
        Test.enableChangeDataCapture();

        // Insert an account to generate a change event. 
        Account newAcct = new Account(Name='TestAccount', Phone='4155551212'); 
        insert newAcct;
        
        // Call deliver to fire the trigger and deliver the test change event.
        Test.getEventBus().deliver();
        
        // VERIFICATIONS
        // Check that the change event trigger created a task.
        Task[] taskList = [SELECT Id,Subject FROM Task];        
        System.assertEquals(1, taskList.size(),
            'The change event trigger did not create the expected task.');
            
        // Update account record
        Account queriedAcct = [SELECT Id,Phone,Website FROM Account WHERE Id=:newAcct.Id];
        // Debug
        System.debug('Retrieved account record: ' + queriedAcct);
        // Update one field and empty another
        queriedAcct.Website = 'www.salesforce.com';
        queriedAcct.Phone = null;
        update queriedAcct;
        
        // Call deliver to fire the trigger for the update operation
        Test.getEventBus().deliver();
        
        // VERIFICATIONS
        // Check that the change event trigger did NOT create a task.
        // We should still have only 1 task.
        Task[] taskList2 = [SELECT Id,Subject FROM Task];
        System.assertEquals(1, taskList2.size(),
            'The change event trigger created a task unepextedly.');
    }    
}
```

```apex
@isTest
public class TestMyAccountChangeTriggerWithStopTest {
  @isTest static void testNewAccount() {
    // Enable all Change Data Capture entities for notifications.
    Test.enableChangeDataCapture();

    Test.startTest();
    // Insert an account to generate a change event.
    insert new Account(Name='TestAccount', Phone='4155551212');
    Test.stopTest();
    // The stopTest() call fires the trigger with the test account change event.

    // VERIFICATIONS
    // Check that the change event trigger created a task.
    Task[] taskList = [SELECT Id,Subject FROM Task];        
    System.assertEquals(1, taskList.size(),
        'The change event trigger did not create the expected task.');
  }   
}
```

## Related Topics

- Add an Apex Trigger (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_add_trigger.htm)
- Change Event
                    Generation in a Transaction with Multiple Changes for the Same
                Record (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_general_considerations.htm)

---
title: "Triggers and Order of Execution"
domain: apex-guide
topic: triggers-and-order-of-execution
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T05:14:34.213Z
estimatedTokens: 2134
keywords: [Triggers, Order, Execution, save, record, insert, update, upsert, statement, Salesforce, performs, sequence, events, certain, order., Note, Additional, Considerations]
---

# Triggers and Order of Execution

> When you save a record with an insert,
            update, or upsert statement, Salesforce performs a sequence of events in a certain
        order.

# Triggers and Order of Execution

When you save a record with an insert, update, or upsert statement, Salesforce performs a sequence of events in a certain order.

Before Salesforce executes these events on the server, the browser runs JavaScript validation if the record contains any dependent picklist fields. The validation limits each dependent picklist field to its available values. No other validation occurs on the client side.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

For a diagrammatic representation of the order of execution, see the [Order of Execution Flowchart](http://developer.salesforce.com/docs/platform/data-models/guide/order-of-execution.html "HTML (New Window)") in the Salesforce Data Model Gallery. The diagram is specific to the API version indicated on it, and can be out-of-sync with the information here. This Apex Developer Guide page contains the most up-to-date information on the order of execution for this API version. To access a different API version, use the version picker for the [Apex Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_dev_guide.htm "HTML (New Window)").

On the server, Salesforce performs events in this sequence.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

During a recursive save, Salesforce skips steps 9 (assignment rules) through 17 (roll-up summary field in the grandparent record).

1.  Loads the original record from the database or initializes the record for an upsert statement.
2.  Loads the new record field values from the request and overwrites the old values.

    Salesforce performs different validation checks depending on the type of request.

    -   For requests from a standard UI edit page, Salesforce runs these system validation checks on the record:

        -   Compliance with layout-specific rules
        -   Required values at the layout level and field-definition level
        -   Valid field formats
        -   Maximum field length

        Additionally, if the request is from a User object on a standard UI edit page, Salesforce runs custom validation rules.

    -   For requests from multiline item creation such as quote line items and opportunity line items, Salesforce runs custom validation rules.
    -   For requests from other sources such as an Apex application or a SOAP API call, Salesforce validates foreign keys, field formats, maximum field lengths, and restricted picklists. Before executing a trigger, Salesforce verifies that any custom foreign keys don’t refer to the object itself.
3.  Executes record-triggered flows that are configured to run before the record is saved.
4.  Executes all before triggers.
5.  Runs most system validation steps again, such as verifying that all required fields have a non-null value, and runs any custom validation rules. The only system validation that Salesforce doesn't run a second time (when the request comes from a standard UI edit page) is the enforcement of layout-specific rules.
6.  Executes duplicate rules. If the duplicate rule identifies the record as a duplicate and uses the block action, the record isn’t saved and no further steps, such as after triggers and workflow rules, are taken.
7.  Saves the record to the database, but doesn't commit yet.
8.  Executes all after triggers.
9.  Executes assignment rules.
10.  Executes auto-response rules.
11.  Executes workflow rules. If there are workflow field updates:

     ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

     #### Note

     This sequence applies only to workflow rules.

     1.  Updates the record again.
     2.  Runs system validations again. Custom validation rules, flows, duplicate rules, processes built with Process Builder, and escalation rules aren’t run again.
     3.  Executes before update triggers and after update triggers, regardless of the record operation (insert or update), one more time (and only one more time)
12.  Executes escalation rules.
13.  Executes these Salesforce Flow automations, but not in a guaranteed order.

     -   Processes built with Process Builder
     -   Flows launched by workflow rules (flow trigger workflow actions pilot)

     ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

     #### Note

     To control the order of execution of Salesforce Flow automations, use record-triggered flows. See [Manage Record-Triggered Flows](https://help.salesforce.com/s/articleView?id=platform.flow_trigger_explorer.htm&type=5&language=en_US "HTML (New Window)")

     When a process or flow executes a DML operation, the affected record goes through the save procedure.

14.  Executes record-triggered flows that are configured to run after the record is saved
15.  Executes entitlement rules.
16.  If the record contains a roll-up summary field or is part of a cross-object workflow, performs calculations and updates the roll-up summary field in the parent record. Parent record goes through save procedure.
17.  If the parent record is updated, and a grandparent record contains a roll-up summary field or is part of a cross-object workflow, performs calculations and updates the roll-up summary field in the grandparent record. Grandparent record goes through save procedure.
18.  Executes Criteria Based Sharing evaluation.
19.  Commits all DML operations to the database.
20.  After the changes are committed to the database, executes post-commit logic. Examples of post-commit logic (in no particular order) include:
     -   Sending email
     -   Enqueued asynchronous Apex jobs, including queueable jobs and future methods
     -   Asynchronous paths in record-triggered flows

## Additional Considerations

Note these considerations when working with triggers.

-   If a workflow rule field update is triggered by a record update, Trigger.old doesn’t hold the newly updated field by the workflow after the update. Instead, Trigger.old holds the object before the initial record update was made. For example, an existing record has a number field with an initial value of 1. A user updates this field to 10, and a workflow rule field update fires and increments it to 11. In the update trigger that fires after the workflow field update, the field value of the object obtained from Trigger.old is the original value of 1, and not 10. See [Trigger.old values before and after update triggers.](https://help.salesforce.com/apex/HTViewSolution?urlname=Understanding-Trigger-old-and-Trigger-new-values-in-before-after-update-triggers-1327108323938&language=en_US)
-   If a DML call is made with partial success allowed, triggers are fired during the first attempt and are fired again during subsequent attempts. Because these trigger invocations are part of the same transaction, static class variables that are accessed by the trigger aren't reset. See [Bulk DML Exception Handling](atlas.en-us.apexcode.meta/apexcode/apex_dml_bulk_exceptions.htm).
-   If more than one trigger is defined on an object for the same event, the order of trigger execution isn't guaranteed. For example, if you have two before insert triggers for Case and a new Case record is inserted. The firing order of these two triggers isn’t guaranteed.
-   To learn about the order of execution when you insert a non-private contact in your org that associates a contact to multiple accounts, see [AccountContactRelation](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_accountcontactrelation.htm).
-   To learn about the order of execution when you’re using before triggers to set Stage and Forecast Category, see [Opportunity](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_opportunity.htm).
-   In API version 53.0 and earlier, after-save record-triggered flows run after entitlements are executed.

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_triggers_recovered_records.htm "Triggers and Recovered Records")
-   [Next →](atlas.en-us.apexcode.meta/apexcode/apex_triggers_ignoring_operations.htm "Operations That Don't Invoke Triggers")

#### See Also

-   [*Salesforce Help*: Triggers for Autolaunched Flows](https://help.salesforce.com/s/articleView?id=platform.flow_concepts_trigger.htm&type=5&language=en_US "Salesforce Help:  Triggers for Autolaunched Flows
    - HTML (New Window)")

## Related Topics

- Bulk DML Exception Handling (atlas.en-us.apexcode.meta/apexcode/apex_dml_bulk_exceptions.htm)
- ← Previous (atlas.en-us.apexcode.meta/apexcode/apex_triggers_recovered_records.htm)
- Next → (atlas.en-us.apexcode.meta/apexcode/apex_triggers_ignoring_operations.htm)

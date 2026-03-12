---
title: "Triggers"
domain: apex-guide
topic: triggers
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T05:14:34.143Z
estimatedTokens: 1852
keywords: [Triggers, Apex, invoked, triggers., triggers, enable, perform, custom, actions, before, after, changes, Salesforce, records, such, insertions, updates, deletions., Implementation, Considerations]
---

# Triggers

> Apex can be invoked by using triggers. Apex triggers enable you to perform
    custom actions before or after changes to Salesforce records, such as insertions, updates, or
    deletions.

# Triggers

Apex can be invoked by using triggers. Apex triggers enable you to perform custom actions before or after changes to Salesforce records, such as insertions, updates, or deletions.

A trigger is Apex code that executes:

-   Before or after an insert operation
-   Before or after an update operation
-   Before or after a delete operation
-   Before or after a merge operation
-   Before or after an upsert operation
-   After an undelete operation

An Apex trigger can also execute after the undelete operation.

For example, you can have a trigger run before an object's records are inserted into the database, after records have been deleted, or even after a record is restored from the Recycle Bin.

You can define triggers for top-level standard objects that support triggers, such as a Contact or an Account, some standard child objects, such as a CaseComment, and custom objects. To define a trigger, from the object management settings for the object whose triggers you want to access, go to Triggers.

There are two types of triggers.

-   Before triggers are used to update or validate record values before they’re saved to the database.
-   After triggers are used to access field values that are set by the system (such as a record's Id or LastModifiedDate field), and to affect changes in other records, such as logging into an audit table or firing asynchronous events with a queue. The records that fire the *after trigger* are read-only.

Triggers can also modify other records of the same type as the records that initially fired the trigger. For example, if a trigger fires after an update of contact A, the trigger can also modify contacts B, C, and D. Because triggers can cause other records to change, and because these changes can, in turn, fire more triggers, the Apex runtime engine considers all such operations a single unit of work and sets limits on the number of operations that can be performed to prevent infinite recursion. See [Execution Governors and Limits](atlas.en-us.apexcode.meta/apexcode/apex_gov_limits.htm "Because Apex runs in a multitenant environment, the Apex runtime engine strictly enforces limits so that runaway Apex code or processes don’t monopolize shared resources. If some Apex code exceeds a limit, the associated governor issues a runtime exception that can’t be handled.").

Additionally, if you update or delete a record in its before trigger, or delete a record in its after trigger, you will receive a runtime error. This includes both direct and indirect operations. For example, if you update account A, and the before update trigger of account A inserts contact B, and the after insert trigger of contact B queries for account A and updates it using the DML update statement or database method, then you are indirectly updating account A in its before trigger, and you will receive a runtime error.

## Implementation Considerations

Before creating triggers, consider the following:

-   upsert triggers fire both before and after insert or before and after update triggers as appropriate.
-   merge triggers fire both before and after delete for the losing records, and both before and after update triggers for the winning record. See [Triggers and Merge Statements](atlas.en-us.apexcode.meta/apexcode/apex_triggers_merge_statements.htm).
-   Triggers that execute after a record has been undeleted only work with specific objects. See [Triggers and Recovered Records](atlas.en-us.apexcode.meta/apexcode/apex_triggers_recovered_records.htm).
-   Field history is not recorded until the end of a trigger. If you query field history in a trigger, you don’t see any history for the current transaction.
-   Field history tracking honors the permissions of the current user. If the current user doesn’t have permission to directly edit an object or field, but the user activates a trigger that changes an object or field with history tracking enabled, no history of the change is recorded.
-   Callouts must be made asynchronously from a trigger so that the trigger process isn’t blocked while waiting for the external service's response. The asynchronous callout is made in a background process, and the response is received when the external service returns it. To make an asynchronous callout, use asynchronous Apex such as a future method. See [Invoking Callouts Using Apex](atlas.en-us.apexcode.meta/apexcode/apex_callouts.htm) for more information.
-   In API version 20.0 and earlier, if a Bulk API request causes a trigger to fire, each chunk of 200 records for the trigger to process is split into chunks of 100 records. In Salesforce API version 21.0 and later, no further splits of API chunks occur. If a Bulk API request causes a trigger to fire multiple times for chunks of 200 records, governor limits are reset between these trigger invocations for the same HTTP request.

1.  [Bulk Triggers](atlas.en-us.apexcode.meta/apexcode/apex_triggers_bulk.htm)

2.  [Trigger Syntax](atlas.en-us.apexcode.meta/apexcode/apex_triggers_syntax.htm)

3.  [Trigger Context Variables](atlas.en-us.apexcode.meta/apexcode/apex_triggers_context_variables.htm)
    All triggers define implicit variables that allow developers to access run-time context. These variables are contained in the System.Trigger class.
4.  [Context Variable Considerations](atlas.en-us.apexcode.meta/apexcode/apex_triggers_context_variables_considerations.htm)

5.  [Common Bulk Trigger Idioms](atlas.en-us.apexcode.meta/apexcode/apex_triggers_bulk_idioms.htm)

6.  [Defining Triggers](atlas.en-us.apexcode.meta/apexcode/apex_triggers_defining.htm)
    Trigger code is stored as metadata under the object with which they are associated.
7.  [Triggers and Merge Statements](atlas.en-us.apexcode.meta/apexcode/apex_triggers_merge_statements.htm)

8.  [Triggers and Recovered Records](atlas.en-us.apexcode.meta/apexcode/apex_triggers_recovered_records.htm)

9.  [Triggers and Order of Execution](atlas.en-us.apexcode.meta/apexcode/apex_triggers_order_of_execution.htm)
    When you save a record with an insert, update, or upsert statement, Salesforce performs a sequence of events in a certain order.
10.  [Operations That Don't Invoke Triggers](atlas.en-us.apexcode.meta/apexcode/apex_triggers_ignoring_operations.htm)
     Some operations don’t invoke triggers.
11.  [Entity and Field Considerations in Triggers](atlas.en-us.apexcode.meta/apexcode/apex_triggers_fields_not_updated.htm)
     When you create triggers, consider the behavior of certain entities, fields, and operations.
12.  [Triggers for Chatter Objects](atlas.en-us.apexcode.meta/apexcode/apex_triggers_fields_not_updated_chatter.htm)
     You can write triggers for the FeedItem and FeedComment objects.
13.  [Trigger Considerations for Knowledge Articles](atlas.en-us.apexcode.meta/apexcode/apex_triggers_knowledge_considerations.htm)
     You can write triggers for KnowledgeArticleVersion objects. Learn when you can use triggers, and which actions don’t fire triggers, like archiving articles.
14.  [Trigger Exceptions](atlas.en-us.apexcode.meta/apexcode/apex_triggers_exceptions.htm)

15.  [Trigger and Bulk Request Best Practices](atlas.en-us.apexcode.meta/apexcode/apex_triggers_bestpract.htm)


-   [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_anonymous_block.htm "Anonymous Blocks")
-   [Next →](atlas.en-us.apexcode.meta/apexcode/apex_async_overview.htm "Asynchronous Apex")

## Related Topics

- Execution Governors and Limits (atlas.en-us.apexcode.meta/apexcode/apex_gov_limits.htm)
- Triggers and Merge
          Statements (atlas.en-us.apexcode.meta/apexcode/apex_triggers_merge_statements.htm)
- Triggers and Recovered
          Records (atlas.en-us.apexcode.meta/apexcode/apex_triggers_recovered_records.htm)
- Invoking Callouts Using Apex (atlas.en-us.apexcode.meta/apexcode/apex_callouts.htm)
- Bulk Triggers (atlas.en-us.apexcode.meta/apexcode/apex_triggers_bulk.htm)
- Trigger Syntax (atlas.en-us.apexcode.meta/apexcode/apex_triggers_syntax.htm)
- Trigger Context Variables (atlas.en-us.apexcode.meta/apexcode/apex_triggers_context_variables.htm)
- Context Variable Considerations (atlas.en-us.apexcode.meta/apexcode/apex_triggers_context_variables_considerations.htm)
- Common Bulk Trigger Idioms (atlas.en-us.apexcode.meta/apexcode/apex_triggers_bulk_idioms.htm)
- Defining Triggers (atlas.en-us.apexcode.meta/apexcode/apex_triggers_defining.htm)

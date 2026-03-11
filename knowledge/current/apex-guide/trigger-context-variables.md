---
title: "Trigger Context Variables"
domain: apex-guide
topic: trigger-context-variables
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:43:47.722Z
keywords: [Trigger, Context, Variables, Note, See]
---

# Trigger Context Variables

# Trigger Context Variables

All triggers define implicit variables that allow developers to access run-time context. These variables are contained in the System.Trigger class.

Here are the trigger context variables.

| Variable | Usage |
| --- | --- |
| isExecuting | Returns true if the current context for the Apex code is a trigger, not a Visualforce page, a web service, or an executeanonymous() API call. |
| isInsert | Returns true if this trigger was fired due to an insert operation, from the Salesforce user interface, Apex, or the API. |
| isUpdate | Returns true if this trigger was fired due to an update operation, from the Salesforce user interface, Apex, or the API. |
| isDelete | Returns true if this trigger was fired due to a delete operation, from the Salesforce user interface, Apex, or the API. |
| isBefore | Returns true if this trigger was fired before any record was saved. |
| isAfter | Returns true if this trigger was fired after all records were saved. |
| isUndelete | Returns true if this trigger was fired after a record is recovered from the Recycle Bin. This recovery can occur after an undelete operation from the Salesforce user interface, Apex, or the API. |
| new | Returns a list of the new versions of the sObject records.This sObject list is only available in insert, update, and undelete triggers, and the records can only be modified in before triggers. |
| newMap | A map of IDs to the new versions of the sObject records.This map is only available in before update, after insert, after update, and after undelete triggers. |
| old | Returns a list of the old versions of the sObject records.This sObject list is only available in update and delete triggers. |
| oldMap | A map of IDs to the old versions of the sObject records.This map is only available in update and delete triggers. |
| operationType | Returns an enum of type System.TriggerOperation corresponding to the current operation.Possible values of the System.TriggerOperation enum are: BEFORE_INSERT, BEFORE_UPDATE, BEFORE_DELETE,AFTER_INSERT, AFTER_UPDATE, AFTER_DELETE, and AFTER_UNDELETE. If you vary your programming logic based on different trigger types, consider using the switch statement with different permutations of unique trigger execution enum states. |
| size | The number of records processed in a trigger invocation. DML operations that include over 200 records are processed in batches, and the trigger is invoked for each batch. Trigger.size includes only the number of records in the current batch, not the total number of records in the DML operation. |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

The record firing a trigger can include an invalid field value, such as a formula that divides by zero. In this case, the field value is set to null in these variables:

-   new
-   newMap
-   old
-   oldMap

For example, in this simple trigger, Trigger.new is a list of sObjects and can be iterated over in a for loop. It can also be used as a bind variable in the IN clause of a SOQL query.

```

```

This trigger uses Boolean context variables such as Trigger.isBefore and Trigger.isDelete to define code that only executes for specific trigger conditions:

```

```

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_triggers_syntax.htm "Trigger Syntax")
-   [Next →](atlas.en-us.apexcode.meta/apexcode/apex_triggers_context_variables_considerations.htm "Context Variable Considerations")

#### See Also

-   [*Apex Reference Guide*: TriggerOperation Enum](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_enum_System_TriggerOperation.htm "Apex Reference Guide: TriggerOperation Enum - HTML (New Window)")
    
-   [Switch Statements](atlas.en-us.apexcode.meta/apexcode/langCon_apex_switch.htm "Apex provides a switch statement that tests whether an expression matches one of several values and branches accordingly.")
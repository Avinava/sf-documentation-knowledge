---
title: "Trigger Class"
domain: apex-reference
topic: trigger-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.539Z
keywords: [Trigger, Class, Namespace, Context, Variables, Note, Example]
---

# Trigger Class

# Trigger Class

Use the Trigger class to access run-time context information in a trigger, such as the type of trigger or the list of sObject records that the trigger operates on.

## Namespace

[System](atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm "The System namespace provides classes and methods for core Apex functionality.")

## Trigger Context Variables

The Trigger class provides the following context variables.

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

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

The record firing a trigger can include an invalid field value, such as a formula that divides by zero. In this case, the field value is set to null in these variables:

-   new
-   newMap
-   old
-   oldMap

## Example

For example, in this simple trigger, Trigger.new is a list of sObjects and can be iterated over in a for loop. It can also be used as a bind variable in the IN clause of a SOQL query.

```

```

This trigger uses Boolean context variables such as Trigger.isBefore and Trigger.isDelete to define code that only executes for specific trigger conditions:

```

```
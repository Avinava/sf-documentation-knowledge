---
title: "Trigger Exceptions"
domain: apex-guide
topic: trigger-exceptions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:34.179Z
estimatedTokens: 443
keywords: [Trigger, Exceptions, Triggers, used, prevent, DML, operations, occurring, calling, addError, record, field., Trigger.new, records, insert, update, triggers, Trigger.old, delete, custom]
---

# Trigger Exceptions

> Triggers can be used to prevent DML operations from occurring by calling the addError() method on a record or field. When used on
        Trigger.new records in insert and update
      triggers, and on Trigger.old records in delete triggers, the custom error message is displayed in
      the applica

# Trigger Exceptions

Triggers can be used to prevent DML operations from occurring by calling the addError() method on a record or field. When used on Trigger.new records in insert and update triggers, and on Trigger.old records in delete triggers, the custom error message is displayed in the application interface and logged.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

Users experience less of a delay in response time if errors are added to before triggers.

A subset of the records being processed can be marked with the addError() method:

-   If the trigger was spawned by a DML statement in Apex, any one error results in the entire operation rolling back. However, the runtime engine still processes every record in the operation to compile a comprehensive list of errors.
-   If the trigger was spawned by a bulk DML call in the Lightning Platform API, the runtime engine sets aside the bad records and attempts to do a partial save of the records that did not generate errors. See [Bulk DML Exception Handling](atlas.en-us.apexcode.meta/apexcode/apex_dml_bulk_exceptions.htm).

If a trigger ever throws an unhandled exception, all records are marked with an error and no further processing takes place.

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_triggers_knowledge_considerations.htm "Trigger Considerations for Knowledge Articles")
-   [Next →](atlas.en-us.apexcode.meta/apexcode/apex_triggers_bestpract.htm "Trigger and Bulk Request Best Practices")

#### See Also

-   [*Apex Reference Guide*: SObject.addError()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_sobject.htm "Apex Reference Guide: SObject.addError() - HTML (New Window)")

## Related Topics

- Bulk DML Exception Handling (atlas.en-us.apexcode.meta/apexcode/apex_dml_bulk_exceptions.htm)
- ← Previous (atlas.en-us.apexcode.meta/apexcode/apex_triggers_knowledge_considerations.htm)
- Next → (atlas.en-us.apexcode.meta/apexcode/apex_triggers_bestpract.htm)

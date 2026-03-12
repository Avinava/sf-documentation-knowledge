---
title: "Bulk Triggers"
domain: apex-guide
topic: bulk-triggers
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:34.149Z
estimatedTokens: 185
keywords: [Bulk, Triggers, triggers, bulk, default, process, multiple, records, time., should, always, plan, processing, record, Note]
---

# Bulk Triggers

> All triggers are bulk triggers by default, and can process multiple records at a
   time. You should always plan on processing more than one record at a time.

# Bulk Triggers

All triggers are bulk triggers by default, and can process multiple records at a time. You should always plan on processing more than one record at a time.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

An Event object that is defined as recurring is not processed in bulk for insert, delete, or update triggers.

Bulk triggers can handle both single record updates and bulk operations like:

-   Data import
-   Lightning Platform Bulk API calls
-   Mass actions, such as record owner changes and deletes
-   Recursive Apex methods and triggers that invoke bulk DML statements

-   [Next →](atlas.en-us.apexcode.meta/apexcode/apex_triggers_syntax.htm "Trigger Syntax")

## Related Topics

- Next → (atlas.en-us.apexcode.meta/apexcode/apex_triggers_syntax.htm)

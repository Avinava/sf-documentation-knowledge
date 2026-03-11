---
title: "Apex DML Operations"
domain: apex-reference
topic: apex-dml-operations
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:40.293Z
keywords: [Apex, DML, Operations, Merge, Statement, Note, Syntax, Example]
---

# Apex DML Operations

### Merge Statement

The merge statement merges up to three records of the same sObject type into one of the records, deleting the others, and re-parenting any related records.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

This DML operation does not have a matching Database system method.

#### Syntax

merge sObject sObject

merge sObject sObject\[\]

merge sObject ID

merge sObject ID\[\]

The first parameter represents the master record into which the other records are to be merged. The second parameter represents the one or two other records that should be merged and then deleted. You can pass these other records into the merge statement as a single sObject record or ID, or as a list of two sObject records or IDs.

#### Example

The following example merges two accounts named 'Acme Inc.' and 'Acme' into a single record:

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

For more information on processing DmlExceptions, see [Bulk DML Exception Handling](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_dml_bulk_exceptions.htm).
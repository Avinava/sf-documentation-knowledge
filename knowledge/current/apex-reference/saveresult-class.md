---
title: "SaveResult Class"
domain: apex-reference
topic: saveresult-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:41.200Z
keywords: [SaveResult, Class, Returns, Boolean, set, true, DML, operation, successful, object, false, otherwise., isSuccess, Signature, Return, Value, Example]
---

# SaveResult Class

> Returns a Boolean that is set to true if the DML
  operation was successful for this object, false
  otherwise.

### isSuccess()

Returns a Boolean that is set to true if the DML operation was successful for this object, false otherwise.

#### Signature

public Boolean isSuccess()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Example

This example shows the code used to process duplicate records, which are detected when there is an unsuccessful save due to an error. This code is part of a custom application that implements duplicate management when users add a contact. See [DuplicateResult Class](atlas.en-us.apexref.meta/apexref/apex_class_Datacloud_DuplicateResult.htm#apex_class_Datacloud_DuplicateResult "Represents the details of a duplicate rule that detected duplicate records and information about those duplicate records.") to check out the entire sample applicaton.

```

```
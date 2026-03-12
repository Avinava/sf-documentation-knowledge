---
title: "AccessType Enum"
domain: apex-reference
topic: accesstype-enum
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:29.603Z
estimatedTokens: 226
keywords: [AccessType, access, check, sObject, Usage]
---

# AccessType Enum

> Specifies the access check type for the fields of an
    sObject.

# AccessType Enum

Specifies the access check type for the fields of an sObject.

## Usage

Use these enum values for the accessCheckType parameter of the [stripInaccessible](atlas.en-us.apexref.meta/apexref/apex_class_System_Security.htm#apex_System_Security_stripInaccessible "Creates a list of sObjects from the source records, which are stripped of fields that fail the field-level security checks for the current user. The method also provides an option to enforce an object-level access check.") method.

## Enum Values

The following are the values of the System.AccessType enum.

| Value | Description |
| --- | --- |
| CREATABLE | Check the fields of an sObject for create access. |
| READABLE | Check the fields of an sObject for read access. |
| UPDATABLE | Check the fields of an sObject for update access. |
| UPSERTABLE | Check the fields of an sObject for both insert and update access. |

## Related Topics

- stripInaccessible (atlas.en-us.apexref.meta/apexref/apex_class_System_Security.htm)

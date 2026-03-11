---
title: "isSoqlStubDefined(targetType)"
domain: apex-reference
topic: issoqlstubdefinedtargettype
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:41.968Z
keywords: [isSoqlStubDefined, targetType, Returns, true, SOQL, stub, defined, SObject, type, otherwise, returns, false., Signature, Parameters, Return, Value]
---

# isSoqlStubDefined(targetType)

> Returns true if a SOQL stub is defined for an SObject
    type; otherwise returns false.

### isSoqlStubDefined(targetType)

Returns true if a SOQL stub is defined for an SObject type; otherwise returns false.

#### Signature

public static Boolean isSoqlStubDefined(Schema.SObjectType targetType)

#### Parameters

targetType

Type: [Schema.SObjectType](atlas.en-us.apexref.meta/apexref/apex_class_Schema_SObjectType.htm#apex_class_Schema_SObjectType "A Schema.sObjectType object is returned from the field describe result using the getReferenceTo method, or from the sObject describe result using the getSObjectType method.")

The SObject type to check. This parameter can’t be null.

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")
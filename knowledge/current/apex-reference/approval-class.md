---
title: "Approval Class"
domain: apex-reference
topic: approval-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:40.914Z
keywords: [Approval, Class, Unlocks, set, objects, option, partial, success., returns, unlock, results, including, failures., recordsToUnlock, allOrNothing, Signature, Parameters, Return, Value]
---

# Approval Class

> Unlocks a set of objects, with the option for partial success. It
      returns the unlock results, including failures.

### unlock(recordsToUnlock, allOrNothing)

Unlocks a set of objects, with the option for partial success. It returns the unlock results, including failures.

#### Signature

public static List<Approval.UnlockResult> unlock(List<SObject> recordsToUnlock, Boolean allOrNothing)

#### Parameters

recordsToUnlock

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[SObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")\>

allOrNothing

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether this operation allows partial success. If you specify false and a record fails, the remainder of the DML operation can still succeed. This method returns a result object that you can use to verify which records succeeded, which failed, and why.

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Approval.UnlockResult](atlas.en-us.apexref.meta/apexref/apex_class_Approval_UnlockResult.htm#apex_class_Approval_UnlockResult "The result of a record unlock, returned by a System.Approval.unlock() method.")\>
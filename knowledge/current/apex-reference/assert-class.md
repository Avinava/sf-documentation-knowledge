---
title: "Assert Class"
domain: apex-reference
topic: assert-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.326Z
keywords: [Assert, Class, Asserts, specified, condition, true., isTrue, Signature, Parameters, Return, Value, Usage, Example]
---

# Assert Class

> Asserts that the specified condition is true.

### isTrue(condition)

Asserts that the specified condition is true.

#### Signature

public static void isTrue(Boolean condition)

#### Parameters

condition

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Condition you’re checking to determine if it’s true.

#### Return Value

Type: void

#### Usage

If the specified condition is false, a fatal error is returned that causes code execution to halt.

You can’t catch an assertion failure using a try/catch block even though it’s logged as an exception.

#### Example

Boolean containsForce = 'Salesforce'.contains('force'); Assert.isTrue(containsForce); // Assertion succeeds
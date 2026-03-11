---
title: "TriggerContext Properties"
domain: apex-reference
topic: triggercontext-properties
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.473Z
keywords: [TriggerContext, Properties, Read-only., error, message, last, thrown, EventBus.RetryableException, contains., lastError, Signature, Property, Value, Usage, retries]
---

# TriggerContext Properties

> Read-only. The error message that the last thrown EventBus.RetryableException contains.

## TriggerContext Properties

The following are properties for TriggerContext.

-   **[lastError](atlas.en-us.apexref.meta/apexref/apex_class_eventbus_TriggerContext.htm#apex_eventbus_TriggerContext_lastError)**  
    Read-only. The error message that the last thrown EventBus.RetryableException contains.
-   **[retries](atlas.en-us.apexref.meta/apexref/apex_class_eventbus_TriggerContext.htm#apex_eventbus_TriggerContext_retries)**  
    Read-only. The number of times the trigger was retried due to throwing the EventBus.RetryableException.

### lastError

Read-only. The error message that the last thrown EventBus.RetryableException contains.

#### Signature

public String lastError {get;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

The error message that this property returns is the message that was passed in when creating the EventBus.RetryableException exception, as follows.

```

```

### retries

Read-only. The number of times the trigger was retried due to throwing the EventBus.RetryableException.

#### Signature

public Integer retries {get;}

#### Property Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")
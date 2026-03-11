---
title: "setError(errorMessage, localizedErrorMessage)"
domain: apex-reference
topic: seterrorerrormessage-localizederrormessage
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.422Z
keywords: [setError, errorMessage, localizedErrorMessage, Sets, error, message, returned, evaluation, buyer, group, IDs, fails., Signature, Parameters, Return, Value]
---

# setError(errorMessage, localizedErrorMessage)

> Sets the error message to be returned when the evaluation of buyer group IDs
      fails.

### setError(errorMessage, localizedErrorMessage)

Sets the error message to be returned when the evaluation of buyer group IDs fails.

#### Signature

public void setError(String errorMessage, String localizedErrorMessage)

#### Parameters

errorMessage

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The message stating the reason for the error.

localizedErrorMessage

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The translated error message.

#### Return Value

Type: void
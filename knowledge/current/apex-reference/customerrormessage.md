---
title: "customErrorMessage"
domain: apex-reference
topic: customerrormessage
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.277Z
keywords: [customErrorMessage, custom, error, message, that's, returned, headless, user, discovery, fails., example, write, logic, handler, see, user's, email, address, verified., Then]
---

# customErrorMessage

> A custom error message that's returned if headless user discovery fails. For example,
    write custom logic in your headless user discovery handler to see if the user's email address is
    verified. Then return a custom error message for when it isn't verified.

### customErrorMessage

A custom error message that's returned if headless user discovery fails. For example, write custom logic in your headless user discovery handler to see if the user's email address is verified. Then return a custom error message for when it isn't verified.

#### Signature

public String customErrorMessage {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
---
title: "result"
domain: apex-reference
topic: result
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.802Z
keywords: [result, authentication, check., email, service, configured, verify, legitimacy, sending, server, before, processing, message, possible, values, include, pass, fail., Otherwise, value]
---

# result

> The result of the authentication check. When the email service is configured to verify
    the legitimacy of the sending server before processing a message, possible values include
      pass or fail.
    Otherwise, the value returned is none.

### result

The result of the authentication check. When the email service is configured to verify the legitimacy of the sending server before processing a message, possible values include pass or fail. Otherwise, the value returned is none.

#### Signature

public String result {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
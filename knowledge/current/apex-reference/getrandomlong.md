---
title: "getRandomLong()"
domain: apex-reference
topic: getrandomlong
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:36.436Z
keywords: [getRandomLong, Returns, random, long, value., Signature, Return, Value, Example, See]
---

# getRandomLong()

> Returns a random long value.

### getRandomLong()

Returns a random long value.

#### Signature

public static Long getRandomLong()

#### Return Value

Type: [Long](atlas.en-us.apexref.meta/apexref/apex_methods_system_long.htm#apex_methods_system_long "Contains methods for the Long primitive data type.")

Returns a random 8-byte long. Salesforce invokes the java.security.SecureRandom api to generate this number. For information on how the number is generated, see [java.security.SecureRandom](https://docs.oracle.com/en/java/javase/22/docs/api/java.base/java/security/SecureRandom.html).

#### Example

You can use your preferred [Salesforce development environment](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_intro_writing_apex.htm "HTML (New Window)") to exercise this function. Create the following Apex class:

```

```

To invoke this method, run the following:

```

```

#### See Also

-   [java.security.SecureRandom](https://docs.oracle.com/javase%2F9%2Fdocs%2Fapi%2F%2F/java/security/SecureRandom.html)
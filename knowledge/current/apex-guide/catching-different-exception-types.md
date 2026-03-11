---
title: "Catching Different Exception Types"
domain: apex-guide
topic: catching-different-exception-types
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:43:47.117Z
keywords: [Catching, Different, Exception, Types]
---

# Catching Different Exception Types

# Catching Different Exception Types

In the previous examples, we used the specific exception type in the catch block. We could have also just caught the generic Exception type in all examples, which catches all exception types. For example, try running this example that throws an SObjectException and has a catch statement with an argument type of Exception. The SObjectException gets caught in the catch block.

```

```

Alternatively, you can have several catch blocks—a catch block for each exception type, and a final catch block that catches the generic Exception type. Look at this example. Notice that it has three catch blocks.

```

```

Remember that only one catch block gets executed and the remaining ones are bypassed. This example is similar to the previous one, except that it has a few more catch blocks. When you run this snippet, an SObjectException is thrown on this line: Double inventory = m.Total\_Inventory\_\_c;. Every catch block is examined in the order specified to find a match between the thrown exception and the exception type specified in the catch block argument:

1.  The first catch block argument is of type DmlException, which doesn’t match the thrown exception (SObjectException.)
2.  The second catch block argument is of type SObjectException, which matches our exception, so this block gets executed and the following message is written to the debug log: SObjectException caught: SObject row was retrieved via SOQL without querying the requested field: Merchandise\_\_c.Total\_Inventory\_\_c.
3.  The last catch block is ignored since one catch block has already executed.

The last catch block is handy because it catches any exception type, and so catches any exception that was not caught in the previous catch blocks. Suppose we modified the code above to cause a NullPointerException to be thrown, this exception gets caught in the last catch block. Execute this modified example. You’ll see the following debug message: Exception caught: Attempt to de-reference a null object.

```

```
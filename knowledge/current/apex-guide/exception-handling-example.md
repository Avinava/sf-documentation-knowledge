---
title: "Exception Handling Example"
domain: apex-guide
topic: exception-handling-example
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:43:47.112Z
keywords: [Exception, Handling, Example, See]
---

# Exception Handling Example

# Exception Handling Example

Learn how exception handling works in Apex.

To see an exception in action, execute some code that causes a DML exception to be thrown. Execute the following in the Developer Console:

```

```

The insert DML statement in the example causes a DmlException because we’re inserting a merchandise item without setting any of its required fields. This is the exception error that you see in the debug log.

System.DmlException: Insert failed. First exception on row 0; first error: REQUIRED\_FIELD\_MISSING, Required fields are missing: \[Description, Price, Total Inventory\]: \[Description, Price, Total Inventory\]

Next, execute this snippet in the Developer Console. It’s based on the previous example but includes a try-catch block.

```

```

Notice that the request status in the Developer Console now reports success. This is because the code handles the exception.

Any statements in the try block occurring after the exception are skipped and aren’t executed. For example, if you add a statement after insert m;, this statement won’t be executed. Execute the following:

```

```

In the new debug log entry, notice that you don’t see a debug message of Statement after insert. This is because this debug statement occurs after the exception caused by the insertion and never gets executed. To continue the execution of code statements after an exception happens, place the statement after the try-catch block. Execute this modified code snippet and notice that the debug log now has a debug message of Statement after insert.

```

```

Alternatively, you can include additional try-catch blocks. This code snippet has the System.debug statement inside a second try-catch block. Execute it to see that you get the same result as before.

```

```

The finally block always executes regardless of what exception is thrown, and even if no exception is thrown. Let’s see it used in action. Execute the following:

```

```

The previous code snippet creates an XML stream writer and adds some XML elements. Next, an exception occurs due to accessing the null String variable s. The catch block handles this exception. Then the finally block executes. It writes a debug message and closes the stream writer, which frees any associated resources. Check the debug output in the debug log. You’ll see the debug message Closing the stream writer in the finally block. after the exception error. This tells you that the finally block executed after the exception was caught.

#### See Also

-   [Create Custom Exceptions](atlas.en-us.apexcode.meta/apexcode/apex_exception_custom.htm)
    
-   [*Salesforce Developers Blog*: Error Handling Best Practices for Lightning and Apex](https://developer.salesforce.com/blogs/2017/09/error-handling-best-practices-lightning-apex "Salesforce Developers Blog: Error Handling Best Practices
    for Lightning and Apex - HTML (New Window)")
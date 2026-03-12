---
title: "Exception Statements"
domain: apex-guide
topic: exception-statements
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:33.410Z
estimatedTokens: 760
keywords: [Exception, Statements, Apex, uses, exceptions, errors, events, disrupt, normal, flow, code, execution, throw, generate, try]
---

# Exception Statements

> Apex uses exceptions to note errors and other events that
                disrupt the normal flow of code execution. throw statements can be used to generate exceptions, while try, catch, and finally can be
                used to gracefully recover from an exception.

# Exception Statements

Apex uses exceptions to note errors and other events that disrupt the normal flow of code execution. throw statements can be used to generate exceptions, while try, catch, and finally can be used to gracefully recover from an exception.

## Throw Statements

A throw statement allows you to signal that an error has occurred. To throw an exception, use the throw statement and provide it with an exception object to provide information about the specific error. For example:

```

```

## Try-Catch-Finally Statements

The try, catch, and finally statements can be used to gracefully recover from a thrown exception:

-   The try statement identifies a block of code in which an exception can occur.
-   The catch statement identifies a block of code that can handle a particular type of exception. A single try statement can have zero or more associated catch statements. Each catch statement must have a unique exception type. Also, once a particular exception type is caught in one catch block, the remaining catch blocks, if any, aren’t executed.
-   The finally statement identifies a block of code that is guaranteed to execute and allows you to clean up your code. A single try statement can have up to one associated finally statement. Code in the finally block always executes regardless of whether an exception was thrown or the type of exception that was thrown. Because the finally block always executes, use it for cleanup code, such as for freeing up resources.

## Syntax

The syntax of the try, catch, and finally statements is as follows.

```

```

At least a catch block or a finally block must be present with a try block. The following is the syntax of a try-catch block.

```

```

The following is the syntax of a try-finally block.

```

```

This is a skeletal example of a try-catch-finally block.

```

```

## Exceptions that Can’t be Caught

Some special types of built-in exceptions can’t be caught. Those exceptions are associated with critical situations in the Lightning Platform. These situations require the abortion of code execution and don’t allow for execution to resume through exception handling. One such exception is the limit exception (System.LimitException) that the runtime throws if a governor limit such as heap size or CPU time has been exceeded, when the maximum number of SOQL queries issued has been exceeded, an attempt is made to retrieve more than the maximum number of records, and so on. Other examples are exceptions thrown when assertion statements fail (through System.assert methods) or license exceptions.

When exceptions are uncatchable, catch blocks, as well as finally blocks if any, aren’t executed.

## Versioned Behavior Changes

In API version 41.0 and later, unreachable statements in your code will cause compilation errors. For example, the following code block generates a compile time error in API version 41.0 and later. The third statement can never be reached because the previous statement throws an unconditional exception.

```

```

## Code Examples

```
throw exceptionObject;
```

```
try {
  // Try block
 code_block
} catch (exceptionType variableName) {
  // Initial catch block.
  // At least the catch block or the finally block must be present. 
 code_block
} catch (Exception e) {
  // Optional additional catch statement for other exception types.
  // Note that the general exception type, 'Exception',
  // must be the last catch block when it is used.
 code_block
} finally {
  // Finally block.
  // At least the catch block or the finally block must be present.
 code_block
}
```

```
try {
 code_block
} catch (exceptionType variableName) {
 code_block
}
// Optional additional catch blocks
```

```
try {
 code_block
} finally {
 code_block
}
```

```
try {
    // Perform some operation that 
    //   might cause an exception.
} catch(Exception e) {
    // Generic exception handling code here.
} finally {
    // Perform some clean up.
}
```

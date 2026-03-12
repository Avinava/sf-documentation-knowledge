---
title: "Exception Handling"
domain: apex-guide
topic: exception-handling
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:34.632Z
estimatedTokens: 144
keywords: [Exception, Handling, DML, statements, run-time, exceptions, something, went, wrong, database, execution, operations, handle, code, wrapping]
---

# Exception Handling

> DML statements return run-time exceptions if something went wrong
in the database during the execution of the DML operations. You can
handle the exceptions in your code by wrapping your DML statements
within try-catch blocks. The following example includes the insert DML statement inside a try-catch

# Exception Handling

DML statements return run-time exceptions if something went wrong in the database during the execution of the DML operations. You can handle the exceptions in your code by wrapping your DML statements within try-catch blocks. The following example includes the insert DML statement inside a try-catch block.

```

```

-   **[Database Class Method Result Objects](atlas.en-us.apexcode.meta/apexcode/langCon_apex_dml_database_result_classes.htm)**

-   **[Returned Database Errors](atlas.en-us.apexcode.meta/apexcode/langCon_apex_dml_database_error.htm)**

## Code Examples

```
Account a = new Account(Name='Acme');
try {
    insert a;
} catch(DmlException e) {
    // Process exception here
}
```

## Related Topics

- Database Class Method Result Objects (atlas.en-us.apexcode.meta/apexcode/langCon_apex_dml_database_result_classes.htm)
- Returned Database Errors (atlas.en-us.apexcode.meta/apexcode/langCon_apex_dml_database_error.htm)

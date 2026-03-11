---
title: "Trigger and Bulk Request Best Practices"
domain: apex-guide
topic: trigger-and-bulk-request-best-practices
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:43:47.705Z
keywords: [Trigger, Bulk, Request, Best, Practices, Designing, Programs, See]
---

# Trigger and Bulk Request Best Practices

# Trigger and Bulk Request Best Practices

A common development pitfall is the assumption that trigger invocations never include more than one record. Apex triggers are optimized to operate in bulk, which, by definition, requires developers to write logic that supports bulk operations.

This is an example of a flawed programming pattern. It assumes that only one record is pulled in during a trigger invocation. While this might support most user interface events, it does not support bulk operations invoked through SOAP API or Visualforce.

```

```

This is another example of a flawed programming pattern. It assumes that fewer than 100 records are in scope during a trigger invocation. If more than 100 queries are issued, the trigger would exceed the SOQL query limit.

```

```

For more information on governor limits, see [Execution Governors and Limits](atlas.en-us.apexcode.meta/apexcode/apex_gov_limits.htm "Because Apex runs in a multitenant environment, the Apex runtime engine strictly enforces limits so that runaway Apex code or processes don’t monopolize shared resources. If some Apex code exceeds a limit, the associated governor issues a runtime exception that can’t be handled.").

This example demonstrates the correct pattern to support the bulk nature of triggers while respecting the governor limits:

```

```

This pattern respects the bulk nature of the trigger by passing the Trigger.new collection to a set, then using the set in a single SOQL query. This pattern captures all incoming records within the request while limiting the number of SOQL queries.

## Best Practices for Designing Bulk Programs

The following are the best practices for this design pattern:

-   Minimize the number of data manipulation language (DML) operations by adding records to collections and performing DML operations against these collections.
-   Minimize the number of SOQL statements by preprocessing records and generating sets, which can be placed in single SOQL statement used with the IN clause.

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_triggers_exceptions.htm "Trigger Exceptions")

#### See Also

-   [Developing Code in the Cloud](atlas.en-us.apexcode.meta/apexcode/apex_intro_apex_limitation.htm "The Apex programming language is saved and runs in the cloud—the multitenant platform. Apex is tailored for data access and data manipulation on the platform, and it enables you to add custom business logic to system events. While it provides many benefits for automating business processes on the platform, it is not a general purpose programming language.")
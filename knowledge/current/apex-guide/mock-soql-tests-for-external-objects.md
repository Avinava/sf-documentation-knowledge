---
title: "Mock SOQL Tests for External Objects"
domain: apex-guide
topic: mock-soql-tests-for-external-objects
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:46.841Z
keywords: [Mock, SOQL, Tests, External, Objects, Note]
---

# Mock SOQL Tests for External Objects

# Mock SOQL Tests for External Objects

You can mock SOQL query responses for external objects in Apex testing by using SOQL stub methods and a new test class. Use basic and joined SOQL queries against external objects and return mock records in a testing context.

Create mock test classes by extending the new System.SoqlStubProvider class and overriding the handleSoqlQuery() class method. Create external object records using either Test.createStubQueryRow() or Test.createStubQueryRows(). Register the mock provider in the test using Test.createSoqlStub() and execute the test code.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

Apex governor limits apply to the stubbed records.

The SOQL query must be against an external object, either directly with a FROM clause or via a subquery. These features aren’t allowed within a stub implementation.

-   SOQL
-   SOSL
-   Callouts
-   Future methods
-   Queueable Jobs
-   Batch Jobs
-   DML
-   Platform events

This example shows a mock test class for the GithubIssueTest class with joined and basic queries.

```

```

```

```

```

```

```

```
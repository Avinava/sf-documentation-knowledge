---
title: "What is Apex?"
domain: apex-guide
topic: what-is-apex
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:33.567Z
estimatedTokens: 916
keywords: [Apex, strongly, typed, object-oriented, programming, language, developers, execute, flow, transaction, control, statements, Salesforce, servers, conjunction]
---

# What is Apex?

> Apex is a strongly typed, object-oriented programming language that allows developers
        to execute flow and transaction control statements on Salesforce servers in conjunction with
        calls to the API. Using syntax that looks like Java and acts like database stored
        procedures, Apex enables developers to add business logic to most system events, including
        button clicks, related record updates, and Visualforce pages. Apex code can be initiated by
        Web service requests and from triggers on objects.

# What is Apex?

Apex is a strongly typed, object-oriented programming language that allows developers to execute flow and transaction control statements on Salesforce servers in conjunction with calls to the API. Using syntax that looks like Java and acts like database stored procedures, Apex enables developers to add business logic to most system events, including button clicks, related record updates, and Visualforce pages. Apex code can be initiated by Web service requests and from triggers on objects.

You can add Apex to most system events. ![A screenshot that shows several of the places in the user interface that can execute Apex code.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fapex%2Fimages%2Fapex_code_in_the_ui.png&folder=apexcode)

As a language, Apex is:

Integrated

Apex provides built-in support for common Lightning Platform idioms, including:

-   Data manipulation language (DML) calls, such as INSERT, UPDATE, and DELETE, that include built-in DmlException handling
-   Inline Salesforce Object Query Language (SOQL) and Salesforce Object Search Language (SOSL) queries that return lists of sObject records
-   Looping that allows for bulk processing of multiple records at a time
-   Locking syntax that prevents record update conflicts
-   Custom public API calls that can be built from stored Apex methods
-   Warnings and errors issued when a user tries to edit or delete a custom object or field that is referenced by Apex

Easy to use

Apex is based on familiar Java idioms, such as variable and expression syntax, block and conditional statement syntax, loop syntax, object and array notation. Where Apex introduces new elements, it uses syntax and semantics that are easy to understand and encourage efficient use of the Lightning Platform. Therefore, Apex produces code that is both succinct and easy to write.

Data focused

Apex is designed to thread together multiple query and DML statements into a single unit of work on the Salesforce server. Developers use database stored procedures to thread together multiple transaction statements on a database server in a similar way. Like other database stored procedures, Apex does not attempt to provide general support for rendering elements in the user interface.

Rigorous

Apex is a strongly typed language that uses direct references to schema objects such as object and field names. It fails quickly at compile time if any references are invalid. It stores all custom field, object, and class dependencies in metadata to ensure that they are not deleted while required by active Apex code.

Hosted

Apex is interpreted, executed, and controlled entirely by the Lightning Platform.

Multitenant aware

Like the rest of the Lightning Platform, Apex runs in a multitenant environment. So, the Apex runtime engine is designed to guard closely against runaway code, preventing it from monopolizing shared resources. Any code that violates limits fails with easy-to-understand error messages.

Easy to test

Apex provides built-in support for unit test creation and execution. It includes test results that indicate how much code is covered, and which parts of your code could be more efficient. Salesforce ensures that all custom Apex code works as expected by executing all unit tests prior to any platform upgrades.

Versioned

You can save your Apex code against different versions of the API. This enables you to maintain behavior.

Apex is included in Performance Edition, Unlimited Edition, Developer Edition, Enterprise Edition, and Database.com.

-   [Next →](atlas.en-us.apexcode.meta/apexcode/apex_qs_core_concepts.htm "Understanding Apex Core Concepts")

## Related Topics

- Next → (atlas.en-us.apexcode.meta/apexcode/apex_qs_core_concepts.htm)

---
title: "ApexPages Methods"
domain: apex-reference
topic: apexpages-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:40.858Z
keywords: [ApexPages, Methods, Add, message, current, page, context., addMessage, Signature, Parameters, Return, Value, addMessages, exceptionThrown, currentPage, Example, getMessages, hasMessages, severity]
---

# ApexPages Methods

> Add a message to the current page context.

## ApexPages Methods

The following are methods for ApexPages. All are instance methods.

-   **[addMessage(message)](atlas.en-us.apexref.meta/apexref/apex_methods_system_apexpages.htm#apex_System_ApexPages_addMessage)**  
    Add a message to the current page context.
-   **[addMessages(exceptionThrown)](atlas.en-us.apexref.meta/apexref/apex_methods_system_apexpages.htm#apex_System_ApexPages_addMessages)**  
    Adds a list of messages to the current page context based on a thrown exception.
-   **[currentPage()](atlas.en-us.apexref.meta/apexref/apex_methods_system_apexpages.htm#apex_System_ApexPages_currentPage)**  
    Returns the current page's PageReference.
-   **[getMessages()](atlas.en-us.apexref.meta/apexref/apex_methods_system_apexpages.htm#apex_System_ApexPages_getMessages)**  
    Returns a list of the messages associated with the current context.
-   **[hasMessages()](atlas.en-us.apexref.meta/apexref/apex_methods_system_apexpages.htm#apex_System_ApexPages_hasMessages)**  
    Returns true if there are messages associated with the current context, false otherwise.
-   **[hasMessages(severity)](atlas.en-us.apexref.meta/apexref/apex_methods_system_apexpages.htm#apex_System_ApexPages_hasMessages_2)**  
    Returns true if messages of the specified severity exist, false otherwise.

### addMessage(message)

Add a message to the current page context.

#### Signature

public Void addMessage(ApexPages.Message message)

#### Parameters

message

Type: [ApexPages.Message](atlas.en-us.apexref.meta/apexref/apex_pages_message.htm#apex_pages_message "Contains validation errors that occur when the user saves the page that uses a standard controller.")

#### Return Value

Type: Void

### addMessages(exceptionThrown)

Adds a list of messages to the current page context based on a thrown exception.

#### Signature

public Void addMessages(Exception exceptionThrown)

#### Parameters

exceptionThrown

Type: [Exception](atlas.en-us.apexref.meta/apexref/apex_classes_exception_methods.htm "An exception denotes an error that disrupts the normal flow of code execution. You can use Apex built-in exceptions or create custom exceptions. All exceptions have common methods.")

#### Return Value

Type: Void

### currentPage()

Returns the current page's PageReference.

#### Signature

public System.PageReference currentPage()

#### Return Value

Type: [System.PageReference](atlas.en-us.apexref.meta/apexref/apex_system_pagereference.htm "A PageReference is a reference to an instantiation of a page. Among other attributes, PageReferences consist of a URL and a set of query parameter names and values.")

#### Example

This code segment returns the id parameter of the current page.

```

```

### getMessages()

Returns a list of the messages associated with the current context.

#### Signature

public ApexPages.Message\[\] getMessages()

#### Return Value

Type: [ApexPages.Message](atlas.en-us.apexref.meta/apexref/apex_pages_message.htm#apex_pages_message "Contains validation errors that occur when the user saves the page that uses a standard controller.")\[\]

### hasMessages()

Returns true if there are messages associated with the current context, false otherwise.

#### Signature

public Boolean hasMessages()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### hasMessages(severity)

Returns true if messages of the specified severity exist, false otherwise.

#### Signature

public Boolean hasMessages(ApexPages.Severity severity)

#### Parameters

sev

Type: [ApexPages.Severity](atlas.en-us.apexref.meta/apexref/apex_pages_message.htm#apexpages_severity_enum)

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")
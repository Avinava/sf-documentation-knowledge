---
title: "ResolutionException Class"
domain: apex-reference
topic: resolutionexception-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:20.388Z
estimatedTokens: 940
namespace: CommerceExtension
keywords: [ResolutionException, Exception, indicating, problem, execution, resolution, strategy, errorMessage, getTypeName]
---

# ResolutionException Class

> Exception indicating a problem with the execution of a resolution strategy.

**Namespace:** `CommerceExtension`

# ResolutionException Class

Exception indicating a problem with the execution of a resolution strategy.

## Namespace

[CommerceExtension](atlas.en-us.apexref.meta/apexref/apex_namespace_CommerceExtension.htm "Use the CommerceExtension namespace to define resolution strategies for registered Commerce extensions.")

-   **[ResolutionException Constructors](atlas.en-us.apexref.meta/apexref/apex_class_CommerceExtension_ResolutionException.htm#apex_CommerceExtension_ResolutionException_constructors)**

-   **[ResolutionException Methods](atlas.en-us.apexref.meta/apexref/apex_class_CommerceExtension_ResolutionException.htm#apex_CommerceExtension_ResolutionException_methods)**


## ResolutionException Constructors

The following are constructors for ResolutionException.

-   **[ResolutionException(errorMessage, exception)](atlas.en-us.apexref.meta/apexref/apex_class_CommerceExtension_ResolutionException.htm#apex_CommerceExtension_ResolutionException_ctor)**
    Constructor that takes two arguments: an error message and an exception.
-   **[ResolutionException(exception)](atlas.en-us.apexref.meta/apexref/apex_class_CommerceExtension_ResolutionException.htm#apex_CommerceExtension_ResolutionException_ctor_2)**
    Constructor that takes an exception as an argument,
-   **[ResolutionException(errorMessage)](atlas.en-us.apexref.meta/apexref/apex_class_CommerceExtension_ResolutionException.htm#apex_CommerceExtension_ResolutionException_ctor_3)**
    Constructor that takes an error message as an argument.
-   **[ResolutionException()](atlas.en-us.apexref.meta/apexref/apex_class_CommerceExtension_ResolutionException.htm#apex_CommerceExtension_ResolutionException_ctor_4)**
    Default constructor for the ResolutionException class.

### ResolutionException(errorMessage, exception)

Constructor that takes two arguments: an error message and an exception.

#### Signature

public ResolutionException(String errorMessage, Exception exception)

#### Parameters

errorMessage

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Error message.

exception

Type: [Exception](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_classes_exception_methods.htm)

Exception.

### ResolutionException(exception)

Constructor that takes an exception as an argument,

#### Signature

public ResolutionException(Exception exception)

#### Parameters

exception

Type: [Exception](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_classes_exception_methods.htm)

Exception.

### ResolutionException(errorMessage)

Constructor that takes an error message as an argument.

#### Signature

public ResolutionException(String errorMessage)

#### Parameters

errorMessage

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Error message.

### ResolutionException()

Default constructor for the ResolutionException class.

#### Signature

public ResolutionException()

## ResolutionException Methods

The following are methods for the ResolutionException class.

-   **[getTypeName()](atlas.en-us.apexref.meta/apexref/apex_class_CommerceExtension_ResolutionException.htm#apex_CommerceExtension_ResolutionException_getTypeName)**
    Returns the type of the exception.

### getTypeName()

Returns the type of the exception.

#### Signature

public String getTypeName()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The type of the Exception.

## Related Topics

- CommerceExtension (atlas.en-us.apexref.meta/apexref/apex_namespace_CommerceExtension.htm)
- ResolutionException Constructors (atlas.en-us.apexref.meta/apexref/apex_class_CommerceExtension_ResolutionException.htm)
- ResolutionException Methods (atlas.en-us.apexref.meta/apexref/apex_class_CommerceExtension_ResolutionException.htm)
- ResolutionException(errorMessage, exception) (atlas.en-us.apexref.meta/apexref/apex_class_CommerceExtension_ResolutionException.htm)
- ResolutionException(exception) (atlas.en-us.apexref.meta/apexref/apex_class_CommerceExtension_ResolutionException.htm)
- ResolutionException(errorMessage) (atlas.en-us.apexref.meta/apexref/apex_class_CommerceExtension_ResolutionException.htm)
- ResolutionException() (atlas.en-us.apexref.meta/apexref/apex_class_CommerceExtension_ResolutionException.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- getTypeName() (atlas.en-us.apexref.meta/apexref/apex_class_CommerceExtension_ResolutionException.htm)

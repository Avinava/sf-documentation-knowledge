---
title: "Site Exceptions"
domain: apex-reference
topic: site-exceptions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:19.170Z
estimatedTokens: 216
namespace: Site
keywords: [Site, Exceptions, contains, exception, class.]
---

# Site Exceptions

> The Site namespace contains an exception
  class.

**Namespace:** `Site`

# Site Exceptions

The Site namespace contains an exception class.

All exception classes support built-in methods for returning the error message and exception type. See [Exception Class and Built-In Exceptions](atlas.en-us.apexref.meta/apexref/apex_classes_exception_methods.htm "An exception denotes an error that disrupts the normal flow of code execution. You can use Apex built-in exceptions or create custom exceptions. All exceptions have common methods.").

The Site namespace contains this exception:

| Exception | Description | Methods |
| --- | --- | --- |
| Site.ExternalUserCreateException | Unable to create external user | Use the String getMessage() to get the error message and write it to debug log.Use List<String> getDisplayMessages() to get a list of errors displayed to the end user.This exception can’t be subclassed or thrown in code. |

## Related Topics

- Exception Class and Built-In
    Exceptions (atlas.en-us.apexref.meta/apexref/apex_classes_exception_methods.htm)

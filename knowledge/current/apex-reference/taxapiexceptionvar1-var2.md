---
title: "TaxApiException(var1,
      var2)"
domain: apex-reference
topic: taxapiexceptionvar1-var2
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.305Z
keywords: [TaxApiException, var1, var2, Initializes, class, Exception, string, provide, details, exception., constructor, intended, test, usage, throws, exception, used, outside, Apex, context.]
---

# TaxApiException(var1,
      var2)

> Initializes the TaxApiException
      class using an Exception and a string to provide more
      details about the exception. This constructor is intended for test usage and throws an
      exception if used outside of the Apex test context.

### TaxApiException(var1, var2)

Initializes the TaxApiException class using an Exception and a string to provide more details about the exception. This constructor is intended for test usage and throws an exception if used outside of the Apex test context.

#### Signature

global TaxApiException(String var1, Exception var2)

#### Parameters

var1

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Text that provides more information about the returned exception.

var2

Type: [Exception](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_classes_exception_methods.htm)

An exception denotes an error that disrupts the normal flow of code execution. You can use Apex built-in exceptions or create custom exceptions. All exceptions have common methods.
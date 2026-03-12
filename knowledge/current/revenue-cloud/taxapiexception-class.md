---
title: "TaxApiException Class"
domain: revenue-cloud
topic: taxapiexception-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:06.596Z
estimatedTokens: 913
namespace: CommerceTax
keywords: [TaxApiException, any, exceptions, tax, calculation, process, Extends, ApexBaseException, var1, var2]
---

# TaxApiException Class

> Contains details about any exceptions during the tax calculation
      process. Extends the ApexBaseException
    class.

**Namespace:** `CommerceTax`

# TaxApiException Class

Contains details about any exceptions during the tax calculation process. Extends the ApexBaseException class.

## Namespace

[CommerceTax](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_namespace_commercetax.htm "Manage the communication between Salesforce and an external tax engine.")

-   **[TaxApiException Constructors](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commercetax_TaxApiException.htm#apex_commercetax_TaxApiException_constructors)**
    Learn more about the available constructors with the TaxApiException class.

## TaxApiException Constructors

Learn more about the available constructors with the TaxApiException class.

The TaxApiException class includes these constructors.

-   **[TaxApiException(var1, var2)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commercetax_TaxApiException.htm#apex_commercetax_TaxApiException_ctor)**
    Initializes the TaxApiException class using an Exception and a string to provide more details about the exception. This constructor is intended for test usage and throws an exception if used outside of the Apex test context.
-   **[TaxApiException(var1)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commercetax_TaxApiException.htm#apex_commercetax_TaxApiException_ctor_2)**
    Initializes the TaxApiException class using an Exception. This constructor is intended for test usage and throws an exception if used outside of the Apex test context.
-   **[TaxApiException()](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commercetax_TaxApiException.htm#apex_commercetax_TaxApiException_ctor_3)**
    Initializes the TaxApiException class without any initialized parameters. This constructor is intended for test usage and throws an exception if used outside of the Apex test context.

### TaxApiException(var1, var2)

Initializes the TaxApiException class using an Exception and a string to provide more details about the exception. This constructor is intended for test usage and throws an exception if used outside of the Apex test context.

#### Signature

global TaxApiException(String var1, Exception var2)

#### Parameters

var1

Type: String

Text that provides more information about the returned exception.

var2

Type: [Exception](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_classes_exception_methods.htm)

An exception denotes an error that disrupts the normal flow of code execution. You can use Apex built-in exceptions or create custom exceptions. All exceptions have common methods.

### TaxApiException(var1)

Initializes the TaxApiException class using an Exception. This constructor is intended for test usage and throws an exception if used outside of the Apex test context.

#### Signature

global TaxApiException(Exception var1)

#### Parameters

var1

Type: [Exception](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_classes_exception_methods.htm)

An exception denotes an error that disrupts the normal flow of code execution. You can use Apex built-in exceptions or create custom exceptions. All exceptions have common methods.

### TaxApiException()

Initializes the TaxApiException class without any initialized parameters. This constructor is intended for test usage and throws an exception if used outside of the Apex test context.

#### Signature

global TaxApiException()

## Related Topics

- CommerceTax (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_namespace_commercetax.htm)
- TaxApiException Constructors (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commercetax_TaxApiException.htm)
- TaxApiException(var1, var2) (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commercetax_TaxApiException.htm)
- TaxApiException(var1) (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commercetax_TaxApiException.htm)
- TaxApiException() (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commercetax_TaxApiException.htm)

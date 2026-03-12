---
title: "RulesApplicationErrorResponse Class"
domain: revenue-cloud
topic: rulesapplicationerrorresponse-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:04.270Z
estimatedTokens: 989
namespace: RulesAppln
keywords: [RulesApplicationErrorResponse, Contains, store, error, details, occurred, during, rules, application., errorCode, message]
---

# RulesApplicationErrorResponse Class

> Contains properties to store error details that occurred during the rules application.

**Namespace:** `RulesAppln`

# RulesApplicationErrorResponse Class

Contains properties to store error details that occurred during the rules application.

## Namespace

[RulesAppln](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_namespace_RulesAppln.htm "Apply payments and credits to posted invoices by adhering to the specified rules.")

-   **[RulesApplicationErrorResponse Constructors](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RulesAppln_RulesApplicationErrorResponse.htm#apex_RulesAppln_RulesApplicationErrorResponse_constructors)**
    Learn more about the constructors available with the RulesApplicationErrorResponse class.
-   **[RulesApplicationErrorResponse Properties](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RulesAppln_RulesApplicationErrorResponse.htm#apex_RulesAppln_RulesApplicationErrorResponse_properties)**
    Learn more about the properties available with the RulesApplicationErrorResponse class.

## RulesApplicationErrorResponse Constructors

Learn more about the constructors available with the RulesApplicationErrorResponse class.

The RulesApplicationErrorResponse class includes these constructors.

-   **[RulesApplicationErrorResponse(errorCode, message)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RulesAppln_RulesApplicationErrorResponse.htm#apex_RulesAppln_RulesApplicationErrorResponse_ctor)**
    Initializes the RulesApplicationErrorResponse class that stores error details that occurred during the rules application.
-   **[RulesApplicationErrorResponse()](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RulesAppln_RulesApplicationErrorResponse.htm#apex_RulesAppln_RulesApplicationErrorResponse_ctor_2)**
    Initializes an empty instance of the RulesApplicationErrorResponse class.

### RulesApplicationErrorResponse(errorCode, message)

Initializes the RulesApplicationErrorResponse class that stores error details that occurred during the rules application.

#### Signature

public RulesApplicationErrorResponse(String errorCode, String message)

```

```

#### Parameters

errorCode

Type: String

Error code that identifies the type of error that occurred during the rules application.

message

Type: String

Error message that describes the error that occurred during the rules application.

### RulesApplicationErrorResponse()

Initializes an empty instance of the RulesApplicationErrorResponse class.

#### Signature

public RulesApplicationErrorResponse()

```

```

## RulesApplicationErrorResponse Properties

Learn more about the properties available with the RulesApplicationErrorResponse class.

The RulesApplicationErrorResponse class includes these properties.

-   **[errorCode](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RulesAppln_RulesApplicationErrorResponse.htm#apex_RulesAppln_RulesApplicationErrorResponse_errorCode)**
    Get the error code that identifies the type of error that occurred during the rules application.
-   **[message](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RulesAppln_RulesApplicationErrorResponse.htm#apex_RulesAppln_RulesApplicationErrorResponse_message)**
    Get the error message that describes the error that occurred during the rules application.

### errorCode

Get the error code that identifies the type of error that occurred during the rules application.

#### Signature

public String errorCode {get; set;}

```

```

#### Property Value

Type: String

### message

Get the error message that describes the error that occurred during the rules application.

#### Signature

public String message {get; set;}

```

```

#### Property Value

Type: String

## Code Examples

```
RulesAppln.RulesApplicationErrorResponse, newinstance, [String, String], RulesAppln.RulesApplicationErrorResponse
```

```
RulesAppln.RulesApplicationErrorResponse, newinstance, [], RulesAppln.RulesApplicationErrorResponse
```

```
RulesAppln.RulesApplicationErrorResponse, errorCode
```

```
RulesAppln.RulesApplicationErrorResponse, message
```

## Related Topics

- RulesAppln (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_namespace_RulesAppln.htm)
- RulesApplicationErrorResponse Constructors (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RulesAppln_RulesApplicationErrorResponse.htm)
- RulesApplicationErrorResponse Properties (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RulesAppln_RulesApplicationErrorResponse.htm)
- RulesApplicationErrorResponse(errorCode, message) (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RulesAppln_RulesApplicationErrorResponse.htm)
- RulesApplicationErrorResponse() (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RulesAppln_RulesApplicationErrorResponse.htm)
- errorCode (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RulesAppln_RulesApplicationErrorResponse.htm)
- message (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RulesAppln_RulesApplicationErrorResponse.htm)

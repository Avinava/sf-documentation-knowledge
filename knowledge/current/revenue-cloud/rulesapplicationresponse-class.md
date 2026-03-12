---
title: "RulesApplicationResponse Class"
domain: revenue-cloud
topic: rulesapplicationresponse-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:04.279Z
estimatedTokens: 1770
namespace: RulesAppln
keywords: [RulesApplicationResponse, Contains, store, response, details, rules, application, request., isSuccess, appliedRules, rulesApplicationSummary, errors]
---

# RulesApplicationResponse Class

> Contains properties to store the response details for the rules application request.

**Namespace:** `RulesAppln`

# RulesApplicationResponse Class

Contains properties to store the response details for the rules application request.

## Namespace

[RulesAppln](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_namespace_RulesAppln.htm "Apply payments and credits to posted invoices by adhering to the specified rules.")

-   **[RulesApplicationResponse Constructors](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RulesAppln_RulesApplicationResponse.htm#apex_RulesAppln_RulesApplicationResponse_constructors)**
    Learn more about the constructors available with the RulesApplicationResponse class.
-   **[RulesApplicationResponse Properties](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RulesAppln_RulesApplicationResponse.htm#apex_RulesAppln_RulesApplicationResponse_properties)**
    Learn more about the properties available with the RulesApplicationResponse class.

## RulesApplicationResponse Constructors

Learn more about the constructors available with the RulesApplicationResponse class.

The RulesApplicationResponse class includes these constructors.

-   **[RulesApplicationResponse(isSuccess, appliedRules, rulesApplicationSummary, errors)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RulesAppln_RulesApplicationResponse.htm#apex_RulesAppln_RulesApplicationResponse_ctor)**
    Initializes the RulesApplicationResponse class that stores the response details for the rules application request.
-   **[RulesApplicationResponse()](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RulesAppln_RulesApplicationResponse.htm#apex_RulesAppln_RulesApplicationResponse_ctor_2)**
    Initializes an empty instance of the RulesApplicationResponse class.

### RulesApplicationResponse(isSuccess, appliedRules, rulesApplicationSummary, errors)

Initializes the RulesApplicationResponse class that stores the response details for the rules application request.

#### Signature

public RulesApplicationResponse(Boolean isSuccess, List<String> appliedRules, RulesAppln.RulesApplicationSummaryResponse rulesApplicationSummary, List<RulesAppln.RulesApplicationErrorResponse> errors)

```

```

#### Parameters

isSuccess

Type: Boolean

Indicates whether the rules are applied (true) or not (false).

appliedRules

Type: List<String>

Comma-delimited list of applied rules.

rulesApplicationSummary

Type: [RulesAppln.RulesApplicationSummaryResponse](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RulesAppln_RulesApplicationSummaryResponse.htm#apex_class_RulesAppln_RulesApplicationSummaryResponse "Contains properties to store the summary details of the rules application, including payment and credit memo counts and application statistics.")

Details of the rules application that includes these details.

-   Payment and credit memo count for the account
-   Payment and credit memo count that's applied to invoices or invoice lines
-   Details of rules

errors

Type: List<[RulesAppln.RulesApplicationErrorResponse](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RulesAppln_RulesApplicationErrorResponse.htm#apex_class_RulesAppln_RulesApplicationErrorResponse "Contains properties to store error details that occurred during the rules application.")\>

List of error responses that occurred during the rules application.

### RulesApplicationResponse()

Initializes an empty instance of the RulesApplicationResponse class.

#### Signature

public RulesApplicationResponse()

```

```

## RulesApplicationResponse Properties

Learn more about the properties available with the RulesApplicationResponse class.

The RulesApplicationResponse class includes these properties.

-   **[appliedRules](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RulesAppln_RulesApplicationResponse.htm#apex_RulesAppln_RulesApplicationResponse_appliedRules)**
    Get the comma-delimited list of rules that were applied.
-   **[errors](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RulesAppln_RulesApplicationResponse.htm#apex_RulesAppln_RulesApplicationResponse_errors)**
    Get the list of error responses that occurred during the rules application.
-   **[isSuccess](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RulesAppln_RulesApplicationResponse.htm#apex_RulesAppln_RulesApplicationResponse_isSuccess)**
    Get the boolean value that indicates whether the rules were applied (true) or not (false).
-   **[rulesApplicationSummary](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RulesAppln_RulesApplicationResponse.htm#apex_RulesAppln_RulesApplicationResponse_rulesApplicationSummary)**
    Get the details of the rules application that includes payment and credit memo count for the account, payment and credit memo count that's applied to invoices or invoice lines, and whether the exact amount rule is applied.

### appliedRules

Get the comma-delimited list of rules that were applied.

#### Signature

public List<String> appliedRules {get; set;}

```

```

#### Property Value

Type: List<String>

### errors

Get the list of error responses that occurred during the rules application.

#### Signature

public List<RulesAppln.RulesApplicationErrorResponse> errors {get; set;}

```

```

#### Property Value

Type: List<[RulesAppln.RulesApplicationErrorResponse](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RulesAppln_RulesApplicationErrorResponse.htm#apex_class_RulesAppln_RulesApplicationErrorResponse "Contains properties to store error details that occurred during the rules application.")\>

### isSuccess

Get the boolean value that indicates whether the rules were applied (true) or not (false).

#### Signature

public Boolean isSuccess {get; set;}

```

```

#### Property Value

Type: Boolean

### rulesApplicationSummary

Get the details of the rules application that includes payment and credit memo count for the account, payment and credit memo count that's applied to invoices or invoice lines, and whether the exact amount rule is applied.

#### Signature

public RulesAppln.RulesApplicationSummaryResponse rulesApplicationSummary {get; set;}

```

```

#### Property Value

Type: [RulesAppln.RulesApplicationSummaryResponse](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RulesAppln_RulesApplicationSummaryResponse.htm#apex_class_RulesAppln_RulesApplicationSummaryResponse "Contains properties to store the summary details of the rules application, including payment and credit memo counts and application statistics.")

## Code Examples

```apex
RulesAppln.RulesApplicationResponse, newinstance, [Boolean, List<String>, RulesAppln.RulesApplicationSummaryResponse, List<RulesAppln.RulesApplicationErrorResponse>], RulesAppln.RulesApplicationResponse
```

```
RulesAppln.RulesApplicationResponse, newinstance, [], RulesAppln.RulesApplicationResponse
```

```
RulesAppln.RulesApplicationResponse, appliedRules
```

```
RulesAppln.RulesApplicationResponse, errors
```

```
RulesAppln.RulesApplicationResponse, isSuccess
```

## Related Topics

- RulesAppln (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_namespace_RulesAppln.htm)
- RulesApplicationResponse Constructors (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RulesAppln_RulesApplicationResponse.htm)
- RulesApplicationResponse Properties (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RulesAppln_RulesApplicationResponse.htm)
- RulesApplicationResponse(isSuccess, appliedRules, rulesApplicationSummary, errors) (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RulesAppln_RulesApplicationResponse.htm)
- RulesApplicationResponse() (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RulesAppln_RulesApplicationResponse.htm)
- RulesAppln.RulesApplicationSummaryResponse (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RulesAppln_RulesApplicationSummaryResponse.htm)
- RulesAppln.RulesApplicationErrorResponse (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RulesAppln_RulesApplicationErrorResponse.htm)
- appliedRules (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RulesAppln_RulesApplicationResponse.htm)
- errors (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RulesAppln_RulesApplicationResponse.htm)
- isSuccess (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RulesAppln_RulesApplicationResponse.htm)

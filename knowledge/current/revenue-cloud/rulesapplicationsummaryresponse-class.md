---
title: "RulesApplicationSummaryResponse Class"
domain: revenue-cloud
topic: rulesapplicationsummaryresponse-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:06.388Z
estimatedTokens: 1612
namespace: RulesAppln
keywords: [RulesApplicationSummaryResponse, store, summary, rules, application, including, payment, credit, memo, counts, statistics, fetchedPaymentsCount, fetchedCreditMemosCount, totalPaymentApplications, totalCreditMemoApplications]
---

# RulesApplicationSummaryResponse Class

> Contains properties to store the summary details of the rules application, including payment and credit memo counts and application statistics.

**Namespace:** `RulesAppln`

# RulesApplicationSummaryResponse Class

Contains properties to store the summary details of the rules application, including payment and credit memo counts and application statistics.

## Namespace

[RulesAppln](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_namespace_RulesAppln.htm "Apply payments and credits to posted invoices by adhering to the specified rules.")

-   **[RulesApplicationSummaryResponse Constructors](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RulesAppln_RulesApplicationSummaryResponse.htm#apex_RulesAppln_RulesApplicationSummaryResponse_constructors)**
    Learn more about the constructors available with the RulesApplicationSummaryResponse class.
-   **[RulesApplicationSummaryResponse Properties](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RulesAppln_RulesApplicationSummaryResponse.htm#apex_RulesAppln_RulesApplicationSummaryResponse_properties)**
    Learn more about the properties available with the RulesApplicationSummaryResponse class.

## RulesApplicationSummaryResponse Constructors

Learn more about the constructors available with the RulesApplicationSummaryResponse class.

The RulesApplicationSummaryResponse class includes these constructors.

-   **[RulesApplicationSummaryResponse(fetchedPaymentsCount, fetchedCreditMemosCount, totalPaymentApplications, totalCreditMemoApplications, areAllInvoicesConsidered)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RulesAppln_RulesApplicationSummaryResponse.htm#apex_RulesAppln_RulesApplicationSummaryResponse_ctor)**
    Initializes the RulesApplicationSummaryResponse class that stores the summary details of the rules application.
-   **[RulesApplicationSummaryResponse()](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RulesAppln_RulesApplicationSummaryResponse.htm#apex_RulesAppln_RulesApplicationSummaryResponse_ctor_2)**
    Initializes an empty instance of the RulesApplicationSummaryResponse class.

### RulesApplicationSummaryResponse(fetchedPaymentsCount, fetchedCreditMemosCount, totalPaymentApplications, totalCreditMemoApplications, areAllInvoicesConsidered)

Initializes the RulesApplicationSummaryResponse class that stores the summary details of the rules application.

#### Signature

public RulesApplicationSummaryResponse(Integer fetchedPaymentsCount, Integer fetchedCreditMemosCount, Integer totalPaymentApplications, Integer totalCreditMemoApplications, Boolean areAllInvoicesConsidered)

```

```

#### Parameters

fetchedPaymentsCount

Type: Integer

Number of payment records retrieved for an account.

fetchedCreditMemosCount

Type: Integer

Number of credit memo or credit memo line records retrieved for an account.

totalPaymentApplications

Type: Integer

Number of payments that are applied to invoices and invoice lines.

totalCreditMemoApplications

Type: Integer

Number of credit memos that are applied to the invoice or invoice lines.

areAllInvoicesConsidered

Type: Boolean

Indicates whether all invoices are considered (true) or not (false).

### RulesApplicationSummaryResponse()

Initializes an empty instance of the RulesApplicationSummaryResponse class.

#### Signature

public RulesApplicationSummaryResponse()

```

```

## RulesApplicationSummaryResponse Properties

Learn more about the properties available with the RulesApplicationSummaryResponse class.

The RulesApplicationSummaryResponse class includes these properties.

-   **[areAllInvoicesConsidered](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RulesAppln_RulesApplicationSummaryResponse.htm#apex_RulesAppln_RulesApplicationSummaryResponse_areAllInvoicesConsidered)**
    Indicates whether all invoices are considered (true) or not (false).
-   **[fetchedCreditMemosCount](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RulesAppln_RulesApplicationSummaryResponse.htm#apex_RulesAppln_RulesApplicationSummaryResponse_fetchedCreditMemosCount)**
    Get the number of credit memo or credit memo line records retrieved for an account.
-   **[fetchedPaymentsCount](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RulesAppln_RulesApplicationSummaryResponse.htm#apex_RulesAppln_RulesApplicationSummaryResponse_fetchedPaymentsCount)**
    Get the number of payment records retrieved for an account.
-   **[totalCreditMemoApplications](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RulesAppln_RulesApplicationSummaryResponse.htm#apex_RulesAppln_RulesApplicationSummaryResponse_totalCreditMemoApplications)**
    Get the number of credit memos that are applied to the invoice or invoice lines.
-   **[totalPaymentApplications](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RulesAppln_RulesApplicationSummaryResponse.htm#apex_RulesAppln_RulesApplicationSummaryResponse_totalPaymentApplications)**
    Get the number of payments that are applied to invoices and invoice lines.

### areAllInvoicesConsidered

Indicates whether all invoices are considered (true) or not (false).

#### Signature

public Boolean areAllInvoicesConsidered {get; set;}

```

```

#### Property Value

Type: Boolean

### fetchedCreditMemosCount

Get the number of credit memo or credit memo line records retrieved for an account.

#### Signature

public Integer fetchedCreditMemosCount {get; set;}

```

```

#### Property Value

Type: Integer

### fetchedPaymentsCount

Get the number of payment records retrieved for an account.

#### Signature

public Integer fetchedPaymentsCount {get; set;}

```

```

#### Property Value

Type: Integer

### totalCreditMemoApplications

Get the number of credit memos that are applied to the invoice or invoice lines.

#### Signature

public Integer totalCreditMemoApplications {get; set;}

```

```

#### Property Value

Type: Integer

### totalPaymentApplications

Get the number of payments that are applied to invoices and invoice lines.

#### Signature

public Integer totalPaymentApplications {get; set;}

```

```

#### Property Value

Type: Integer

## Code Examples

```
RulesAppln.RulesApplicationSummaryResponse, newinstance, [Integer, Integer, Integer, Integer, Boolean], RulesAppln.RulesApplicationSummaryResponse
```

```
RulesAppln.RulesApplicationSummaryResponse, newinstance, [], RulesAppln.RulesApplicationSummaryResponse
```

```
RulesAppln.RulesApplicationSummaryResponse, areAllInvoicesConsidered
```

```
RulesAppln.RulesApplicationSummaryResponse, fetchedCreditMemosCount
```

```
RulesAppln.RulesApplicationSummaryResponse, fetchedPaymentsCount
```

## Related Topics

- RulesAppln (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_namespace_RulesAppln.htm)
- RulesApplicationSummaryResponse Constructors (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RulesAppln_RulesApplicationSummaryResponse.htm)
- RulesApplicationSummaryResponse Properties (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RulesAppln_RulesApplicationSummaryResponse.htm)
- RulesApplicationSummaryResponse(fetchedPaymentsCount, fetchedCreditMemosCount, totalPaymentApplications, totalCreditMemoApplications, areAllInvoicesConsidered) (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RulesAppln_RulesApplicationSummaryResponse.htm)
- RulesApplicationSummaryResponse() (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RulesAppln_RulesApplicationSummaryResponse.htm)
- areAllInvoicesConsidered (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RulesAppln_RulesApplicationSummaryResponse.htm)
- fetchedCreditMemosCount (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RulesAppln_RulesApplicationSummaryResponse.htm)
- fetchedPaymentsCount (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RulesAppln_RulesApplicationSummaryResponse.htm)
- totalCreditMemoApplications (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RulesAppln_RulesApplicationSummaryResponse.htm)
- totalPaymentApplications (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RulesAppln_RulesApplicationSummaryResponse.htm)

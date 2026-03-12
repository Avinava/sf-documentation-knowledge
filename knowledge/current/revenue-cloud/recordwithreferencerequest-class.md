---
title: "RecordWithReferenceRequest Class"
domain: revenue-cloud
topic: recordwithreferencerequest-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:04.251Z
estimatedTokens: 1214
namespace: RevSalesTrxn
keywords: [RecordWithReferenceRequest, Contains, associate, record, reference, identifier., Example, referenceId]
---

# RecordWithReferenceRequest Class

> Contains constructors and properties to associate a record object with a reference
    identifier.

**Namespace:** `RevSalesTrxn`

# RecordWithReferenceRequest Class

Contains constructors and properties to associate a record object with a reference identifier.

## Namespace

[PlaceQuote](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_namespace_placequote.htm "The PlaceQuote namespace provides classes and methods to create or update quotes with pricing preferences and configuration options.")

## Example

```

```

See [PlaceQuoteRLMApexProcessor](https://developer.salesforce.com/docs/atlas.en-us.260.0.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_placequote_PlaceQuoteRLMApexProcessor.htm#apex_placequote_PlaceQuoteRLMApexProcessor_example_implementation "HTML (New Window)") to refer to an example implementation.

-   **[RecordWithReferenceRequest Constructors](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_placequote_RecordWithReferenceRequest.htm#apex_placequote_RecordWithReferenceRequest_constructors)**
    Learn more about the available constructors with the RecordWithReferenceRequest class.
-   **[RecordWithReferenceRequest Properties](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_placequote_RecordWithReferenceRequest.htm#apex_placequote_RecordWithReferenceRequest_properties)**
    Learn more about the available properties with the RecordWithReferenceRequest class.

## RecordWithReferenceRequest Constructors

Learn more about the available constructors with the RecordWithReferenceRequest class.

The RecordWithReferenceRequest class includes these constructors.

-   **[RecordWithReferenceRequest(referenceId, record)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_placequote_RecordWithReferenceRequest.htm#apex_placequote_RecordWithReferenceRequest_ctor)**
    Creates an instance of the RecordWithReferenceRequest class to associate a record object with a reference identifier by using the referenceId and record object properties.

### RecordWithReferenceRequest(referenceId, record)

Creates an instance of the RecordWithReferenceRequest class to associate a record object with a reference identifier by using the referenceId and record object properties.

#### Signature

public RecordWithReferenceRequest(String referenceId, placequote.RecordResource record)

#### Parameters

referenceId

Type: String

Reference ID that maps to the subrequest response and can be used to reference the response in subsequent subrequests. You can reference the referenceId in either the body or URL of a subrequest. Use this syntax to include a reference: @{referenceId.FieldName}. See [referenceId property of a composite subrequest](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/resources_composite_graph_composite_subrequest.htm "HTML (New Window)").

record

Type: [placequote.RecordResource](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_placequote_RecordResource.htm#apex_class_placequote_RecordResource "Contains constructors and properties to create a record object from the field values of a quote.")

Record object that’s defined using the RecordResource class.

## RecordWithReferenceRequest Properties

Learn more about the available properties with the RecordWithReferenceRequest class.

The RecordWithReferenceRequest class includes these properties.

-   **[record](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_placequote_RecordWithReferenceRequest.htm#apex_placequote_RecordWithReferenceRequest_record)**
    Set the record property to specify the record object that’s defined by using the RecordResource class.
-   **[referenceId](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_placequote_RecordWithReferenceRequest.htm#apex_placequote_RecordWithReferenceRequest_referenceId)**
    Set the referenceId property to specify the reference ID that maps to the subrequest response. This reference ID can be used to reference the response in subsequent subrequests.

### record

Set the record property to specify the record object that’s defined by using the RecordResource class.

#### Signature

public placequote.RecordResource record {get; set;}

#### Property Value

Type: [placequote.RecordResource](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_placequote_RecordResource.htm#apex_class_placequote_RecordResource "Contains constructors and properties to create a record object from the field values of a quote.")

### referenceId

Set the referenceId property to specify the reference ID that maps to the subrequest response. This reference ID can be used to reference the response in subsequent subrequests.

#### Signature

public String referenceId {get; set;}

#### Property Value

Type: String

## Code Examples

```
RevSalesTrxn.RecordWithReferenceRequest quoteLineItemRecords = new RevSalesTrxn.RecordWithReferenceRequest('refQuoteItem',quoteLineItemRecord);
```

```
CommerceOrders.RecordWithReferenceRequest orderRecordNode = new CommerceOrders.RecordWithReferenceRequest('refOrder', orderRecord);
```

```
PlaceQuote.RecordWithReferenceRequest quoteLineRelationship = new PlaceQuote.RecordWithReferenceRequest('QuoteLineRelationship',quoteLineRelationship1);
```

## Related Topics

- RevSalesTrxn (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_namespace_RevSalesTrxn.htm)
- RecordWithReferenceRequest Constructors (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RevSalesTrxn_RecordWithReferenceRequest.htm)
- RecordWithReferenceRequest Properties (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RevSalesTrxn_RecordWithReferenceRequest.htm)
- RecordWithReferenceRequest(referenceId, record) (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RevSalesTrxn_RecordWithReferenceRequest.htm)
- RevSalesTrxn.RecordResource (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RevSalesTrxn_RecordResource.htm)
- record (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RevSalesTrxn_RecordWithReferenceRequest.htm)
- referenceId (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RevSalesTrxn_RecordWithReferenceRequest.htm)
- CommerceOrders (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_namespace_commerceorders.htm)
- RecordWithReferenceRequest Constructors (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commerceorders_RecordWithReferenceRequest.htm)
- RecordWithReferenceRequest Properties (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commerceorders_RecordWithReferenceRequest.htm)

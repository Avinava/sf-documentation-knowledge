---
title: "QuoteDocument"
domain: object-reference
topic: quotedocument
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:15.879Z
estimatedTokens: 636
keywords: [QuoteDocument, quote, document, API, version, 18.0, later, Calls, Usage]
---

# QuoteDocument

> Represents a quote in document format. Available in API version
    18.0 and later.

# QuoteDocument

Represents a quote in document format. Available in API version 18.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ContentVersionDocumentId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID for the document’s version. |
| CurrencyIsoCode | TypepicklistPropertiesDefaulted on create, Filter, Restricted picklistDescriptionAvailable only for organizations with the multicurrency feature enabled.Contains the ISO code for any currency allowed by the organization. If the organization has multicurrency and a Pricebook2Id specified on the quote, then the currency value of this field must match the currency of the PricebookEntry objects that are associated with any quote line items it has. |
| Discount | TypepercentPropertiesFilter, Nillable, SortDescriptionThe discount for the quote used in the document. |
| Document | Typebase64PropertiesCreate, NillableDescriptionThe binary data of the document stored in the QuoteDocument object. |
| DocumentTemplate | TypestringPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe ID of the template used to generate the document. |
| GrandTotal | TypecurrencyPropertiesFilter, Nillable, SortDescriptionGrand total for the quote used in the document. |
| Name | TypestringPropertiesFilter, idLookup, SortDescriptionName of the quote document. |
| QuoteId | TypereferencePropertiesCreate, Filter, GroupSortDescriptionID for the quote used for the document. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe status of the document.Possible values are:CompletedFailedGeneratingIn ProgressNoneQueuedThe default value is None. |

## Usage

Use the QuoteDocument object to store a document that can be used to present the quote information to the customer.

#### See Also

-   [Quote](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_quote.htm "Represents a quote, which is a record showing proposed prices for products and services. Available in API version 18.0 and later.")

-   [QuoteLineItem](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_quotelineitem.htm "Represents a quote line item, which is a member of the list of Product2 products associated with a quote, along with other information about those line items on that quote. Available in API version 18.0 and later.")

## Related Topics

- Quote (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_quote.htm)
- QuoteLineItem (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_quotelineitem.htm)

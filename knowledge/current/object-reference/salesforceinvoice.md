---
title: "SalesforceInvoice"
domain: object-reference
topic: salesforceinvoice
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:16.467Z
estimatedTokens: 732
keywords: [SalesforceInvoice, Read-only, virtual, Account, App, organization’s, invoices, Salesforce, Calls, Usage, Associated, Objects]
---

# SalesforceInvoice

> Read-only virtual object used in the Your Account App. Represents information
         about your organization’s invoices with Salesforce.

# SalesforceInvoice

Read-only virtual object used in the Your Account App. Represents information about your organization’s invoices with Salesforce.

## Supported Calls

describeLayout(), describeSObjects(), query()

## Fields

| Field | Details |
| --- | --- |
| Balance | TypedoublePropertiesFilter, Nillable, SortDescriptionThe outstanding balance for this invoice. Equal to the invoice’s total amount with tax, ignoring payments and adjustments. |
| DueDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionThe customer must pay the invoice by the due date. Unpaid invoices past the due date can be sent to collections. |
| ExternalId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionExternal reference ID set by Salesforce. |
| InvoiceCurrency | TypestringPropertiesFilter, Group, Nillable, SortDescriptionCurrency associated with this invoice. |
| InvoiceDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionThe date that the invoice was posted. Used with payment terms to determine the invoice’s DueDate. For example, an invoice with an InvoiceDate of April 1 and Net 30 payment terms would have a DueDate of May 1. |
| InvoiceNumber | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionSystem-created ID for this invoice. |
| SalesforceContractId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionSalesforce Contract IDThis field is a relationship field.Relationship NameSalesforceContractRelationship TypeLookupRefers ToSalesforceContract |
| SalesforceInvoiceStatus | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe state of the invoice.Possible values are:DueSoon—PaidPastDue—Pending |
| TotalAmount | TypedoublePropertiesFilter, Nillable, SortDescriptionThe sum TotalAmount of the invoice items. |

## Usage

Used by Your Account to manage invoices for your organization’s Salesforce contract. Read-only.

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[SalesforceContract](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_salesforcecontract.htm "Read-only virtual object used in the Your Account App. Represents contract information related to your organization’s Salesforce subscription.")

[SalesforcePayment](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_salesforcepayment.htm "Read-only virtual object used in the Your Account App. Represents information about payments related to your organization’s Salesforce invoice.")

[SalesforceQuote](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_salesforcequote.htm "Read-only virtual object used in the Your Account App. Represents information about your organization’s quotes with Salesforce.")

## Related Topics

- SalesforceContract (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_salesforcecontract.htm)
- SalesforcePayment (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_salesforcepayment.htm)
- SalesforceQuote (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_salesforcequote.htm)

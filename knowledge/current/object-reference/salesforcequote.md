---
title: "SalesforceQuote"
domain: object-reference
topic: salesforcequote
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:16.482Z
estimatedTokens: 527
keywords: [SalesforceQuote, Read-only, virtual, Account, App, organization’s, quotes, Salesforce, Calls, Usage, Associated, Objects]
---

# SalesforceQuote

> Read-only virtual object used in the Your Account App. Represents information
         about your organization’s quotes with Salesforce.

# SalesforceQuote

Read-only virtual object used in the Your Account App. Represents information about your organization’s quotes with Salesforce.

## Supported Calls

describeLayout(), describeSObjects(), query()

## Fields

| Field | Details |
| --- | --- |
| ExternalId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionExternal reference ID set by Salesforce. |
| QuoteNumber | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionA system-generated number that identifies the quote. |
| SalesforceContractId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the contract that’s associated with the quote.This field is a relationship field.Relationship NameSalesforceContractRelationship TypeLookupRefers ToSalesforceContract |
| SalesforceQuoteStatus | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe status of the quote.Possible values are:CompleteExpiredNeedsApproval—NeedsSignature—Processing |

## Usage

Used by Your Account to manage quotes related to your organization’s Salesforce contract. Read-only.

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[SalesforceContract](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_salesforcecontract.htm "Read-only virtual object used in the Your Account App. Represents contract information related to your organization’s Salesforce subscription.")

[SalesforceInvoice](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_salesforceinvoice.htm "Read-only virtual object used in the Your Account App. Represents information about your organization’s invoices with Salesforce.")

[SalesforcePayment](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_salesforcepayment.htm "Read-only virtual object used in the Your Account App. Represents information about payments related to your organization’s Salesforce invoice.")

## Related Topics

- SalesforceContract (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_salesforcecontract.htm)
- SalesforceInvoice (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_salesforceinvoice.htm)
- SalesforcePayment (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_salesforcepayment.htm)

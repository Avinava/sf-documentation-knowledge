---
title: "SalesforcePayment"
domain: object-reference
topic: salesforcepayment
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:16.477Z
estimatedTokens: 512
keywords: [SalesforcePayment, Read-only, virtual, Account, App, payments, organization’s, Salesforce, invoice, Calls, Usage, Associated, Objects]
---

# SalesforcePayment

> Read-only virtual object used in the Your Account App. Represents
         information about payments related to your organization’s Salesforce invoice.

# SalesforcePayment

Read-only virtual object used in the Your Account App. Represents information about payments related to your organization’s Salesforce invoice.

## Supported Calls

describeLayout(), describeSObjects(), query()

## Fields

| Field | Details |
| --- | --- |
| AppliedAmount | TypedoublePropertiesNillable, SortDescriptionPayment amount applied to your Salesforce invoice. |
| AppliedDate | TypedatePropertiesNillable, SortDescriptionDate the payment is applied to your Salesforce invoice. |
| Memo | TypestringPropertiesNillable, SortDescriptionCredit memo ID. Credit memos are issued for overpayment, rebates, and so forth. |
| PaymentCurrency | TypestringPropertiesNillable, SortDescriptionType of currency used for the payment. |
| SalesforcePaymentName | TypestringPropertiesNillable, SortDescriptionPayment name. |
| SalesforcePaymentType | TypepicklistPropertiesNillable, SortDescriptionPayment method. Possible values are:BoletoCheckCredit CardCredit MemoDirect DebitUnknownWire Transfer |

## Usage

Used by Your Account to manage payments for your organization’s Salesforce contract. Read-only.

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as SalesforcePayment.

[SalesforceContract](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_salesforcecontract.htm "Read-only virtual object used in the Your Account App. Represents contract information related to your organization’s Salesforce subscription.")

[SalesforceInvoice](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_salesforceinvoice.htm "Read-only virtual object used in the Your Account App. Represents information about your organization’s invoices with Salesforce.")

[SalesforceQuote](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_salesforcequote.htm "Read-only virtual object used in the Your Account App. Represents information about your organization’s quotes with Salesforce.")

## Related Topics

- SalesforceContract (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_salesforcecontract.htm)
- SalesforceInvoice (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_salesforceinvoice.htm)
- SalesforceQuote (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_salesforcequote.htm)

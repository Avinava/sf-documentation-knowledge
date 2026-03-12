---
title: "SalesforceContract"
domain: object-reference
topic: salesforcecontract
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:16.460Z
estimatedTokens: 1453
keywords: [SalesforceContract, Read-only, virtual, Account, App, contract, organization’s, Salesforce, subscription, Calls, Usage, Associated, Objects]
---

# SalesforceContract

> Read-only virtual object used in the Your Account App.  Represents
      contract information related to your organization’s Salesforce subscription.

# SalesforceContract

Read-only virtual object used in the Your Account App. Represents contract information related to your organization’s Salesforce subscription.

## Supported Calls

describeLayout(), describeSObjects(), query()

## Fields

| Field | Details |
| --- | --- |
| AutoRenewCode | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionDetermines if contract renews automaticallyPossible values are:NoYes |
| BillingAddressCity | TypestringPropertiesFilter, Group, Nillable, SortDescriptionDetails for the billing address. Maximum size is 40 characters. |
| BillingAddressCountry | TypestringPropertiesFilter, Group, Nillable, SortDescriptionDetails for the billing address of this contract. Maximum size is 80 characters. |
| BillingAddressPostalCode | TypestringPropertiesFilter, Group, Nillable, SortDescriptionDetails for the billing address of this contract. Maximum size is 20 characters. |
| BillingAddressState | TypestringPropertiesFilter, Group, Nillable, SortDescriptionDetails for the billing address of this contract. Maximum size is 80 characters. |
| BillingAddressStreet | TypestringPropertiesFilter, Group, Nillable, SortDescriptionStreet address for the billing address of this contract. |
| BillingCompany | TypestringPropertiesFilter, Group, Nillable, SortDescriptionName of the billing company. |
| BillingEmail | TypeemailPropertiesFilter, Group, Nillable, SortDescriptionEmail address for billing this contract. |
| BillingFrequency | TypestringPropertiesFilter, Group, Nillable, SortDescriptionDefine billing periods. |
| BillingName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionContact name for this contract. |
| BillingPhone | TypephonePropertiesFilter, Group, Nillable, SortDescriptionPhone number for billing this contract. |
| ContractId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionID for this contract. |
| ContractNumber | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionNumber of the contract. |
| CreditCardExpirationMonth | TypestringPropertiesFilter, Group, Nillable, SortDescriptionMonth the credit card expires. |
| CreditCardExpirationYear | TypestringPropertiesFilter, Group, Nillable, SortDescriptionYear the credit card expires. |
| CreditCardNumber | TypestringPropertiesFilter, Group, Nillable, SortDescription16-digit credit card number. |
| CreditCardType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionCredit card provider.Possible values are:AmericanExpress—JCBMasterCardVisa |
| EndDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionEnd date of the contract. |
| ExternalId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionExternal reference ID set by Salesforce. |
| FirstNameOnCreditCard | TypestringPropertiesFilter, Group, Nillable, SortDescriptionCardholder’s first name on the credit card. |
| LastNameOnCreditCard | TypestringPropertiesFilter, Group, Nillable, SortDescriptionCardholder’s last name on the credit card. |
| PaymentTerm | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionPayment terms definition.Possible values are:Net0—Due upon receiptNet10—DD-Germany: Net 10Net30—Net30EOM—JP-Net 30 EOMNet45—Net60—Net60EOM—JP-Net 60 EOM |
| PaymentType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionPayment type definition.Possible values are:CheckCreditCard—DirectDebit—WireTransfer— |
| SalesforceContractStatus | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe status of the contractPossible values are:ActivatedDraftExpiredTerminatedinApproval— |
| ShippingAddressCity | TypestringPropertiesFilter, Group, Nillable, SortDescriptionDetails of the shipping address. City maximum size is 40 characters. |
| ShippingAddressCountry | TypestringPropertiesFilter, Group, Nillable, SortDescriptionDetails of the shipping address. Country maximum size is 80 characters. |
| ShippingAddressPostalCode | TypestringPropertiesFilter, Group, Nillable, SortDescriptionDetails of the shipping address. Postal code maximum size is 20 characters. |
| ShippingAddressState | TypestringPropertiesFilter, Group, Nillable, SortDescriptionDetails of the shipping address. State maximum size is 80 characters. |
| ShippingAddressStreet | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe street address of the shipping address. Maximum of 255 characters. |
| StartDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionStart date of the contract. |
| SubscriptionDaysLeft | TypeintPropertiesFilter, Group, Nillable, SortDescriptionDays remaining for this subscription. |

## Usage

Used by Your Account to manage contracts related to your organization’s Salesforce subscription. Read-only.

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[SalesforceInvoice](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_salesforceinvoice.htm "Read-only virtual object used in the Your Account App. Represents information about your organization’s invoices with Salesforce.")

[SalesforcePayment](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_salesforcepayment.htm "Read-only virtual object used in the Your Account App. Represents information about payments related to your organization’s Salesforce invoice.")

[SalesforceQuote](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_salesforcequote.htm "Read-only virtual object used in the Your Account App. Represents information about your organization’s quotes with Salesforce.")

## Related Topics

- SalesforceInvoice (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_salesforceinvoice.htm)
- SalesforcePayment (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_salesforcepayment.htm)
- SalesforceQuote (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_salesforcequote.htm)

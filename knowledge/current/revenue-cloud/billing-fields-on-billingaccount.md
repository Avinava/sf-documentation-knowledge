---
title: "Billing Fields on BillingAccount"
domain: revenue-cloud
topic: billing-fields-on-billingaccount
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:05.607Z
estimatedTokens: 1437
keywords: [Billing, Fields, BillingAccount, Standard, fields, extend, represent, information, billing, suspension, date, resumption, date., API, version, 63.0, later., Supported, Calls, Special]
---

# Billing Fields on BillingAccount

> Standard fields extend the BillingAccount object for use in Billing
         to represent information about the billing suspension date and the billing resumption
         date. This object is available in API version 63.0 and later.

# Billing Fields on BillingAccount

Standard fields extend the BillingAccount object for use in Billing to represent information about the billing suspension date and the billing resumption date. This object is available in API version 63.0 and later.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search()

## Special Access Rules

You need the Billing Admin permission set, Billing Operations User permission set, or Billing Customer Service User permission set access to this object.

## Fields

| Field | Details |
| --- | --- |
| AccountID | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the account that's related to the billing account. Available in API version 65.0 and later.This field is a relationship field.Relationship NameAccountRefers ToAccount |
| AddTaxIdentificationDetails | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe additional tax identification details, such as a Peppol ID. Available in API version 66.0 and later. |
| BillDayOfMonth | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA number from 1 to 31 that indicates the billing date. Available in API version 64.0 and later. |
| BillToContactId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe contact associated with the billing account. Available in API version 64.0 and later.This field is a relationship field.Relationship NameBillToContactRefers ToContact |
| BillingResumptionDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionThe date when billing for the account is resumed. |
| BillingSuspensionDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionThe date when billing for the account is suspended. |
| DeliveryTerms | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe standard code in internal trades used to define shipping responsibilities.Valid values are:CFRCIFCIOCPTCUSDAFDAPDDPDDUDEQDESDPUEXWFASFCAFOBSUPThe default value is USD. Available in API version 66.0 and later. |
| DoesSkipAutomaticPayments | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether to skip the automatic creation of payment schedules and payment schedule items for posted invoices related to billing accounts (true) or not (false). This boolean value is considered when the automatic creation of payment schedules and payment schedule items is turned on. Available in API version 65.0 and later. |
| EmailTemplateId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe template used for sending billing account emails. Available in API version 65.0 and later.This field is a relationship field.Relationship NameEmailTemplateRefers ToEmail template |
| InvoiceDocumentTemplateId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe document template that’s used to generate PDF documents for the invoices that are related to the billing account. Available in API version 66.0 and later.This field is a relationship field.Relationship NameInvoiceDocumentTemplateRefers ToDocumentTemplate |
| IsDefaultBillingProfile | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the billing account is the default billing profile (true) or not (false). Available in API version 65.0 and later. |
| PaymentTermId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe payment term associated with the billing account. Available in API version 64.0 and later.This field is a relationship field.Relationship NamePaymentTermRefers ToPaymentTerm |
| SavedPaymentMethodId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe saved payment method that’s used to collect payments for the default billing profile of an account when the automatic creation of payment schedules and payment schedule items is turned on. Available in API version 65.0 and later.This field is a relationship field.Relationship NameSavedPaymentMethodRefers ToSavedPaymentMethod |
| ShippingAddress | TypeaddressPropertiesFilter, NillableDescriptionThe shipping address of the billing account. Available in API version 64.0 and later. |
| ShouldAttachInvoiceDocToEmail | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether to attach the invoice PDF document to the email that’s sent to the billing account. Available in API version 65.0 and later.The default value is false. |
| TaxExemptionExpirationDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date until which the tax exemption is valid. Available in API version 66.0 and later. |
| TaxExemptionNumber | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA unique identifier used to indicate that a transaction is tax exempt. Available in API version 66.0 and later. |
| TaxExemptionStatus | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe status of the tax exemption with values defined by the user. Available in API version 66.0 and later. |
| TaxIdentificationNumber | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe tax identification number such as a VAT ID. Available in API version 66.0 and later. |

#### See Also

-   [*Energy and Utilities Cloud Developer Guide*: BillingAccount](https://developer.salesforce.com/docs/atlas.en-us.260.0.eu_developer_guide.meta/eu_developer_guide/sforce_api_objects_billingaccount.htm "Energy and Utilities Cloud Developer Guide: BillingAccount - HTML (New Window)")

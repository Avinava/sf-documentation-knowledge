---
title: "BillingPeriodItem"
domain: object-reference
topic: billingperioditem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:05.512Z
estimatedTokens: 1136
keywords: [BillingPeriodItem, payment, period, subscription, billing, item, pass, invoice, line, Management, API, version, 55.0, later, Calls]
---

# BillingPeriodItem

> Represents one payment period for a subscription. The billing period item is
         used to pass billing information to an invoice line item in Subscription Management.
      This object is available in API version 55.0 and later.

# BillingPeriodItem

Represents one payment period for a subscription. The billing period item is used to pass billing information to an invoice line item in Subscription Management. This object is available in API version 55.0 and later.

When a billing schedule is invoiced, Subscription Management creates a billing period item to store the billing and payment information that’s passed to an invoice line. Subscription Management next creates an invoice line for billing period items that match the invoice's target date. One billing period item is created for each billing period in the billing schedule. For example, a one-year subscription that's billed quarterly creates a billing schedule with four billing period items.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search()

## Special Access Rules

This object is available with Subscription Management and Billing (Revenue Cloud).

For information about this object that's available with Billing (Revenue Cloud), including its special access rules, see the [Revenue Cloud Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_billingperioditem.htm "HTML (New Window)").

## Fields

| Field | Details |
| --- | --- |
| Amount | TypecurrencyPropertiesFilter, SortDescriptionPrice for the billing period item. Used to calculate the invoice line's Amount field. |
| BillingPeriodEndDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionUsed to calculate the invoice line's end date. |
| BillingPeriodItemNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionSystem-defined number that refers to the billing period item. |
| BillingPeriodStartDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionUsed to calculate the invoice line's start date. |
| BillingScheduleId | TypereferencePropertiesFilter, Group, SortDescriptionParent billing schedule of the billing period item.This field is a relationship field.Relationship NameBillingScheduleRelationship TypeLookupRefers ToBillingSchedule |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionContains the ISO code for any currency allowed by the org. Available only for orgs with the multicurrency feature enabled. |
| InvoiceBatchRunId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionParent invoice batch run of the billing period item.This field is a relationship field.Relationship NameInvoiceBatchRunRelationship TypeLookupRefers ToInvoiceBatchRun |
| InvoiceLineId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThis field looks up to the invoice line that's generated from the billing period item. This field is populated only when a billing period item is generated via an invoice batch run. Otherwise, this field is empty.This field is a relationship field.Relationship NameInvoiceLineRelationship TypeLookupRefers ToInvoiceLine |
| InvoiceStatus | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionStatus of the invoice that contains the invoice line created from the billing period item.Valid values are:Canceled—The invoice for this billing period item was canceled.Draft—The invoice has been created but hasn’t been posted. Available in API version 60.0 and later.DraftInProgress—The invoice hasn’t been created yet. When the invoice is created, the InvoiceStatus field value is changed to Draft. If the invoice generation process fails, the InvoiceStatus field value shows DraftInProgress. Available in API version 60.0 and later.Error—The invoice for this billing period item was generated in error.Pending—The invoice for this billing period item is being generated.Posted—An invoice line based on this billing period has been created and added successfully to the invoice.PostingInProgress—An invoice line based on this billing period has been created and is in the process of being added to the invoice. Available in API version 60.0 and later.Voided—An invoice line based on this billing period was voided.VoidInProgress—An invoice line based on this billing period is in the process of being voided. |
| Status | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionStatus of the billing period item. Draft billing period items aren't evaluated for invoice line creation.Valid values are:CanceledDraftReviewed |

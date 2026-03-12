---
title: "PaymentInitiationSource"
domain: object-reference
topic: paymentinitiationsource
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:14.537Z
estimatedTokens: 1497
keywords: [PaymentInitiationSource, originating, source, payment, helps, Salesforce, products, integrate, Payments, API, version, 63.0, later, Calls, Special]
---

# PaymentInitiationSource

> Represents the originating source of a payment. This information helps other
         Salesforce products integrate with Salesforce Payments. This object is available in API
         version 63.0 and later.

# PaymentInitiationSource

Represents the originating source of a payment. This information helps other Salesforce products integrate with Salesforce Payments. This object is available in API version 63.0 and later.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update()

## Special Access Rules

To access Salesforce Payments objects, you must have a Salesforce Payments license with the Payments permission enabled for your org. Salesforce Payments entities are available only in Lightning Experience.

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe account record that initiated this payment.This field is a relationship field.Relationship NameAccountRefers ToAccount |
| Application | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSalesforce application initiating the payment.Possible values are:CollectionsCommerceCustomFieldServiceOrderManagementPaymentsRevenueSalesSchedulerService |
| Channel | TypestringPropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe origin of the submitted payment. For example, D2C, virtual terminal, or merchant MOTO (mail order or phone order). |
| CollectionPlanId | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe collection plan record that submitted payment. This field is available only for merchant-initiated payment collections. For example, a merchant collects an outstanding balance using a Pay Now payment link or over the phone.This field is a relationship field.Relationship NameCollectionPlanRefers ToCollectionPlan |
| ContactId | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe contact record of the contact that made the payment.This field is a relationship field.Relationship NameContactRefers ToContact |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionAvailable only for organizations with the multicurrency feature enabled. This field contains the ISO code for any currency allowed by the organization.Possible values are:AUD—Australian DollarEUR—EuroGBP—British PoundUSD—U.S. DollarThe default value is USD. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, it’s possible that the user only accessed this record or list view (LastReferencedDate), but not viewed it. |
| Name | TypestringPropertiesFilter, Group, idLookup, Sort, UpdateDescriptionName of the payment initiation source record. For example, d9e01178-b6878-2f4b-a14d-b0132b7ret67 |
| OpportunityId | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe opportunity record that made the payment.This field is a relationship field.Relationship NameOpportunityRefers ToOpportunity |
| OrderSummaryId | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe order summary record that initiated the payment. This field is available with Salesforce Order Management and Commerce applications.This field is a relationship field.Relationship NameOrderSummaryRefers ToOrderSummary |
| PaymentScheduleItemId | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe payment schedule item record that initiated the payment. This field is available only with the Scheduler application.This field is a relationship field.Relationship NamePaymentScheduleItemRefers ToPaymentSchedleItem |
| Process | TypestringPropertiesFilter, Group, Nillable, Sort, UpdateDescriptionComponent within the application that’s initiating the payment. Maximum length of the string is 255 characters. For example, managed or custom checkout, product description page (PDP). |
| QuoteId | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe quote record that initiated the payment.This field is a relationship field.Relationship NameQuoteRefers ToQuote |
| ServiceAppointmentId | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe service appointment record that initiated the payment. This field is available only with the Field Service application.This field is a relationship field.Relationship NameServiceAppointmentRefers ToAppointment |
| SiteId | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe site record that initiated the payment. This field is for applications that don't have a web store, but created a digital experience site to accept paymentsThis field is a relationship field.Relationship NameSiteRefers ToSite |
| WebCartId | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe web cart record that submitted the payment.This field is a relationship field.Relationship NameWebCartRefers ToWebCart |
| WebStoreId | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe web store record that initiated the payment. For example, a B2B, D2C, or Pay Now store.This field is a relationship field.Relationship NameWebStoreRefers ToWebStore |
| WorkOrderId | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe work order record that submitted the payment. This field is available only for the Field Service application.This field is a relationship field.Relationship NameWorkOrderRefers ToWorkOrder |
| WorkOrderLineItemId | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe work order line item record that made the payment. This field is only available with the Field Service application.This field is a relationship field.Relationship NameWorkOrderLineItemRefers ToWorkOrderLineItem |

---
title: "New Sale Transaction With Usage Products"
domain: revenue-cloud
topic: new-sale-transaction-with-usage-products
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T05:14:05.827Z
estimatedTokens: 3727
keywords: [New, Sale, Transaction, Usage, Products, Understand, required, values, key, considerations, before, create, billing, schedule, new, sale, transaction, usage-based, products., Considerations]
---

# New Sale Transaction With Usage Products

> Understand the required values and key considerations before you create a billing
    schedule for a new sale transaction with usage-based products.

# New Sale Transaction With Usage Products

Understand the required values and key considerations before you create a billing schedule for a new sale transaction with usage-based products.

Before using the Create Standalone Billing Schedules API for usage-based products, [Create a Usage Product Grant Binding Policy record](https://help.salesforce.com/s/articleView?id=ind.um_create_a_usage_product_grant_binding_policy.htm&language=en_US "HTML (New Window)") with the grant binding type as Target.

When you're creating a billing schedule for a new sale transaction with a usage-based product, make sure that you specify the mandatory values in the transactionDetails property value.

| Context Tag in the Transaction Node of the StandaloneBillingContext Context Definition | Description | Mapped Field | Required or Optional |
| --- | --- | --- | --- |
| BillToContactId__std | The ID of the Contact record that's related to the transaction. | BillToContactId field on the BillingScheduleGroup object | Required |
| ParentTransactionId__std | The ID of the parent transaction record. For example, if the transaction is at a level similar to that of an Order Item record, the parent transaction will be at a level similar to that of an Order record. | If the transaction is a child Order or Quote record, the ReferenceEntityId field on the BillingScheduleobject is populated. For other sObject records or external records, the Reference field on the BillingSchedule object is populated. | Optional |
| AccountId__std | The ID of the Account record that's related to the transaction. | BillingAccountId field on the BillingScheduleGroup object | Required |
| BillingProfileId__std | The ID of the billing profile (Billing Account record) that's related to the transaction. See Billing Profile requirements. | BillingAccountId field on the BillingSchedule object | Optional |
| BillingState__std | The state in the billing address of the transaction. | BillingState field on the BillingScheduleGroup object | Any one of the billing address fields is required. |
| BillingCity__std | The city in the billing address of the transaction. | BillingCity field on the BillingScheduleGroup object | Any one of the billing address fields is required. |
| BillingStreet__std | The street in the billing address of the transaction. | BillingStreet field on the BillingScheduleGroup object | Any one of the billing address fields is required. |
| BillingPostalCode__std | The postal code in the billing address of the transaction. | BillingPostalCode field on the BillingScheduleGroup object | Any one of the billing address fields is required. |
| BillingCountry__std | The country in the billing address of the transaction. | BillingCountry field on the BillingScheduleGroup object | Any one of the billing address fields is required. |
| ShippingCity__std | The city in the shipping address of the transaction. | ShippingCity field on the BillingScheduleGroup object | Any one of the shipping address fields is required. |
| ShippingStreet__std | The street in the shipping address of the transaction. | ShippingStreet field on the BillingScheduleGroup object | Any one of the shipping address fields is required. |
| ShippingCountry__std | The country in the shipping address of the transaction. | ShippingCountry field on the BillingScheduleGroup object | Any one of the shipping address fields is required. |
| ShippingState__std | The state in the shipping address of the transaction. | ShippingState field on the BillingScheduleGroup object | Any one of the shipping address fields is required. |
| ShippingPostalCode__std | The postal code in the shipping address of the transaction. | ShippingPostalCode field on the BillingScheduleGroup object | Any one of the shipping address fields is required. |
| SavedPaymentMethodId__std | The ID of the Saved Payment Method record that's used to pay for the invoice that's generated for the transaction. | SavedPaymentMethodId field on the BillingScheduleGroup object | Optional |
| PaymentTermId__std | The ID of the Payment Term record that's related to the transaction. | PaymentTermId field on the BillingScheduleGroup object | Optional |
| SellingModelType__std | The selling model type indicates whether the transaction is for a one-time product, a term-defined product, or an evergreen product. Specify OneTime as the SellingModelType for the transaction that's related to a product that's sold once. | BillingMethod on the BillingSchedule object is populated as OrderAmount. | Required |
| TransactionId__std | The ID of the transaction that you want to create a billing schedule for. | If the transaction is an OrderItem, OrderItemAdjustmentLineItem, OrderItemDetail, QuoteLineDetail, or QuoteLineItem record, the ReferenceEntityItemId field on the BillingScheduleobject is populated. For other sObject records or external records, the ReferenceItem field on the BillingSchedule object is populated. | Required |
| ProductName__std | The name of the product that's related to the transaction that you want to create a billing schedule for. | ProductName field on the BillingScheduleGroup object | Either the ProductName or the ProductId is required |
| ProductId__std | The ID of the product that's related to the transaction that you want to create a billing schedule for. | Product2Id field on the BillingScheduleGroup object | Either the ProductName or the ProductId is required |
| LegalEntityId__std | The legal entity of your company that the transaction comes under. If you don't specify a LegalEntityId, the org-default LegalEntityId is considered. | LegalEntityId field on the BillingScheduleGroup object | Required |
| PeriodBoundary__std | The period boundary determines the start and end date of the billing period. Valid values are:AlignToCalendarAnniversaryDayOfPeriodLastDayOfPeriod | PeriodBoundary field on the BillingScheduleGroup object | Required for products with the TermDefined or Evergreen selling model types. |
| BillingDayOfMonth__std | The day of the month on which a recurring billing process is scheduled to occur for the transaction. | BillDayOfMonth field on the BillingScheduleGroup object | Required for products with the TermDefined or Evergreen selling model types. |
| BillingStartMonth__std | The month when billing begins for an annual subscription. This value can be any number from 1 through 12. For example, if billing starts in January, the value is 1. If billing starts in June, the value is 6. | BillingStartMonth field on the BillingScheduleGroup object | Required for products with the Evergreen selling model type. |
| UnitOfMeasureId__std | The ID of the Unit of Measure record that's used to define the unit for the quantity of the transaction. | UnitOfMeasureId field on the BillingSchedule object | Optional |
| EndDate__std | The end date of the transaction. | BillingScheduleEndDate field on the BillingSchedule object | Required for products with the TermDefined selling model type. |
| StartDate__std | The start date of the transaction. | BillingScheduleStartDate field on the BillingSchedule object | Required |
| Quantity__std | The quantity of the transaction. | Quantity field on the BillingSchedule object | Required |
| TaxTreatmentId__std | The ID of the tax treatment that's used to calculate tax for the transaction. If you don't specify a TaxTreatmentId, the org-default TaxTreatmentId is considered. | TaxTreatmentId field on the BillingScheduleGroup object | Required |
| BillingTermUnit__std | The unit of measurement of the billing term. Valid values are:MonthQuarterSemi-AnnualYear | BillingTermUnit field on the BillingSchedule object | Required for products with the TermDefined or Evergreen selling model types. |
| BillingTreatmentId__std | The ID of the billing treatment that's used to create the billing schedule for the transaction. If you don't specify a BillingTreatmentId, the org-default BillingTreatmentId is considered. | BillingTreatmentId field on the BillingScheduleGroup object | Required |
| CurrencyIsoCode__std | The currency code of the transaction amount if your Salesforce org has multi-currency enabled. | CurrencyIsoCode field on the BillingScheduleGroup object | Required for Salesforce orgs with multiple currencies enabled. |
| RelatedTransactionId__std | The ID of the transaction that's related to the original transaction. This value isn't required for new sale transactions. | This value isn't populated on any BillingSchedule or BillingScheduleGroup field. | Optional |
| RampIdentifier__std | When the transaction is part of a ramp deal, the RampIdentifier value is a unique identifier for that ramp. All the transactions with the same RampIdentifier value are grouped to have billing schedules for the same billing schedule group. | This value isn't populated on any BillingSchedule or BillingScheduleGroup field. | Optional |
| ProrationPolicy__std | The ID of the Proration Policy record that's related to the Product Selling Model Option record of the transaction. | ProrationPolicyId field on the BillingScheduleGroup object | Optional |
| BillingActionType__std | The action that you want to perform for the transaction. Valid value is Add. | Category field on the BillingSchedule object is populated as Original. | Required |
| UnitPrice__std | The unit price of the transaction. | UnitPrice field on the BillingSchedule object | Either the UnitPrice or the NetUnitPrice value is required |
| TotalPrice__std | The total price of the transaction. | TotalAmount field on the BillingSchedule object | Required |
| ProductUsageModelType__std | The type of usage model for the transaction product or service. Valid values are:Anchor—Anchor is the main subscription product or service.Pack—Pack is the add-on product or service that grants additional usage resources for consumption. | BillingMethod value field on the BillingSchedule object is populated as OrderAmount. | Required |
| NetUnitPrice__std | The net unit price of the transaction. | NetUnitPrice field on the BillingSchedule object | Either the UnitPrice or the NetUnitPrice value is required |
| BindingInstance__std | The ID of the Asset record or custom object record that's related to the transaction. | BindingInstanceId on the BillingScheduleGroup object | Required |
| InvoiceRunMatchingValue__std | The batch value that's used to group the billing schedule that's created for the transaction with other billing schedules with the same value. This way, the same invoice run can process these schedules. During an invoice run, billing schedules with the same batch value, including null, are grouped to be processed by the same invoice run. | InvoiceRunMatchingValue field on the BillingSchedule object | Optional |
| ReferenceRecordId__std | The ID of the Asset record that's related to the transaction. | ReferenceRecordId field on the BillingScheduleGroup object | Optional |
| CustomInvoiceGroupKey__std | When you want to generate a consolidated invoice for multiple transactions, specify the same CustomInvoiceGroupKey for all these transactions. This key is used to group these transactions together and generate a consolidated invoice for all of them. | CustomInvoiceGroupKey field on the BillingScheduleGroup object | Optional |
| MainTransactionId__std | When your transaction is part of a bundle, this value is the ID of the main transaction record for all the child transactions. | MainBsgId field on the BsgRelationship object | Optional |
| AssociatedTransactionId__std | When your transaction is part of a bundle, this value is the ID of the child transaction record. | AssociatedBsgId field on the BsgRelationship object | Optional |
| MainTransactionRole__std | When your transaction is part of a bundle, this value is the role of the primary transaction in the bundle relationship. Valid values are:AddOnBundleSet | MainBsgRole field on the BsgRelationship object | Optional |
| AssociatedTransactionRole__std | When your transaction is part of a bundle, this value is the role of the child transaction in the bundle relationship. Valid values are:BundleComponentClassificationComponent | AssociatedBsgRole field on the BsgRelationship object | Optional |
| AssociatedTransactionPricing__std | When your transaction is part of a bundle, this value describes how the child transaction is priced in relation to the primary transaction. Valid values are:IncludedInBundlePriceNotIncludedInBundlePrice | AssociatedBsgPricing field on the BsgRelationship object | Optional |
| ProductRelationshipTypeId__std | The ID of the Product Relationship Type record that defines the relationship between the primary and child transactions. | ProductRelationshipTypeId field on the BsgRelationship object | Optional |

## Considerations

Keep these important considerations in mind when you provide the details for new sale transactions with a usage-based product.

-   The BillingActionType\_\_std value for any new sale transaction must be Add.
-   For new sale transactions with a usage-based product, the ProductUsageModelType\_\_std and BindingInstance\_\_std values are required.
-   If you don't provide the TaxTreatmentId\_\_std value, the BillingTreatmentId\_\_std value, or the LegalEntityId\_\_std value for the transaction, the default TaxTreatmentId, BillingTreatmentId, and LegalEntityId of your Salesforce org is considered. If your org doesn't have any default values, an error occurs.
-   To understand the requirements for the various selling model types, see these resources.
    -   [One-Time New Sale Transaction](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_billing_schedule_input_for_one_time_new_sale.htm "Understand the required values and key considerations before you create a billing schedule for a new sale transaction with the OneTime selling model type.")
    -   [Term-Defined New Sale Transaction](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_billing_schedule_input_for_termed_new_sale.htm "Understand the required values and key considerations before you create a billing schedule for a new sale transaction with the TermDefined selling model type.")
    -   [Evergreen New Sale Transaction](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_billing_schedule_input_for_evergreen_new_sale.htm "Understand the required values and key considerations before you create a billing schedule for a new sale transaction with the Evergreen selling model type.")

JSON example

This sample is for a new sale transaction for a usage-based product with a TermDefined selling model.

```

```

This example shows the request payload to create a billing schedule for a new sale transaction for usage-based products with a TermDefined selling model.

```

```

## Code Examples

```
{
  "Transaction": [
    {
      "id": "onetimeUsage2",
      "SellingModelType__std": "TermDefined",
      "ParentTransactionId__std": "sample",
      "TransactionId__std": "onetimeUsage2",
      "StartDate__std": "2025-01-01",
      "EndDate__std": "2025-12-31",
      "PeriodBoundary__std": "DayOfPeriod",
      "BillingDayOfMonth__std": 1,
      "BillingTermUnit__std": "Month",
      "UnitPrice__std": 10,
      "Quantity__std": 1,
      "TotalPrice__std": 120,
      "AccountId__std": "001xx000003GgEJAA0",
      "BillingProfileId__std": "001LT00000dPVrlYAG",
      "BillingActionType__std": "Add",
      "CurrencyIsoCode__std": "USD",
      "BillingCity__std": "Hyderabad",
      "ShippingCity__std": "SFO",
      "ProductUsageModelType__std": "Anchor",
      "BindingInstance__std": "001xx000003GgChAAK",
      "ProductId__std": "01txx0000006i3DAAQ",
      "Transaction_Make__c": "3001",
      "Transaction_Color__c": "Blue"
    }
  ]
}
```

```
{
  "transactionDetails": "{"Transaction":[{"id":"onetimeUsage2","SellingModelType__std":"TermDefined","ParentTransactionId__std":"sample","TransactionId__std":"onetimeUsage2","StartDate__std":"2025-01-01","EndDate__std":"2025-12-31","PeriodBoundary__std":"DayOfPeriod","BillingDayOfMonth__std":1,"BillingTermUnit__std":"Month","UnitPrice__std":10,"Quantity__std":1,"TotalPrice__std":120,"AccountId__std":"001xx000003GgEJAA0","BillingProfileId__std":"001LT00000dPVrlYAG","BillingActionType__std":"Add","CurrencyIsoCode__std":"USD","BillingCity__std":"Hyderabad","ShippingCity__std":"SFO","ProductUsageModelType__std":"Anchor","BindingInstance__std":"001xx000003GgChAAK","ProductId__std":"01txx0000006i3DAAQ","Transaction_Make__c":"3001","Transaction_Color__c":"Blue"}]}",
  "transactionContextDetails": {
    "contextDefinitionName": "StandaloneBillingContext__stdctx",
    "intraContextCustomMappingName": "CustomContextMapping",
    "readContextMappingName": "TransactionMapping",
    "saveContextMappingName": "BSGEntitiesMapping"
  }
}
```

## Related Topics

- One-Time New Sale
              Transaction (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_billing_schedule_input_for_one_time_new_sale.htm)
- Term-Defined New Sale
                Transaction (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_billing_schedule_input_for_termed_new_sale.htm)
- Evergreen New Sale
              Transaction (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_billing_schedule_input_for_evergreen_new_sale.htm)

---
title: "Renewal Transaction"
domain: revenue-cloud
topic: renewal-transaction
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T05:14:05.793Z
estimatedTokens: 3198
keywords: [Renewal, Transaction, Understand, required, values, key, considerations, before, create, billing, schedule, renewal, transaction., Considerations]
---

# Renewal Transaction

> Understand the required values and key considerations before you create a billing
    schedule for a renewal transaction.

# Renewal Transaction

Understand the required values and key considerations before you create a billing schedule for a renewal transaction.

When you renew a new-sale transaction after its end date, those transactions are called renewal transactions. For example, a new-sale transaction starts on 01/01/2025 and ends on 12/31/2025, and you renew it to start on 03/01/2026 and end on 12/31/2026.

When you're creating a billing schedule for a renewal transaction, make sure that you provide the mandatory values in the transactionDetails property value.

| Context Tag in the Transaction Node of the StandaloneBillingContext Context Definition | Description | Mapped Field | Required or Optional |
| --- | --- | --- | --- |
| BillToContactId__std | The ID of the Contact record that's related to the transaction. | BillToContactId field on the BillingScheduleGroup object | Optional |
| ParentTransactionId__std | The ID of the parent transaction record. For example, if the transaction is at a level similar to that of an Order Item record, the parent transaction will be at a level similar to that of an Order record. | If the transaction is a child Order or Quote record, the ReferenceEntityId field on the BillingScheduleobject is populated. For other sObject records or external records, the Reference field on the BillingSchedule object is populated. | Optional |
| AccountId__std | The ID of the Account record that's related to the transaction. | BillingAccountId field on the BillingScheduleGroup object | Optional |
| BillingProfileId__std | The ID of the billing profile (Billing Account record) that's related to the transaction. See Billing Profile requirements. | BillingAccountId field on the BillingSchedule object | Optional |
| BillingState__std | The state in the billing address of the transaction. | BillingState field on the BillingScheduleGroup object | Optional |
| BillingCity__std | The city in the billing address of the transaction. | BillingCity field on the BillingScheduleGroup object | Optional |
| BillingStreet__std | The street in the billing address of the transaction. | BillingStreet field on the BillingScheduleGroup object | Optional |
| BillingPostalCode__std | The postal code in the billing address of the transaction. | BillingPostalCode field on the BillingScheduleGroup object | Optional |
| BillingCountry__std | The country in the billing address of the transaction. | BillingCountry field on the BillingScheduleGroup object | Optional |
| ShippingCity__std | The city in the shipping address of the transaction. | ShippingCity field on the BillingScheduleGroup object | Optional |
| ShippingStreet__std | The street in the shipping address of the transaction. | ShippingStreet field on the BillingScheduleGroup object | Optional |
| ShippingCountry__std | The country in the shipping address of the transaction. | ShippingCountry field on the BillingScheduleGroup object | Optional |
| ShippingState__std | The state in the shipping address of the transaction. | ShippingState field on the BillingScheduleGroup object | Optional |
| ShippingPostalCode__std | The postal code in the shipping address of the transaction. | ShippingPostalCode field on the BillingScheduleGroup object | Optional |
| SavedPaymentMethodId__std | The ID of the Saved Payment Method record that's used to pay for the invoice that's generated for the transaction. | SavedPaymentMethodId field on the BillingScheduleGroup object | Optional |
| PaymentTermId__std | The ID of the Payment Term record that's related to the transaction. | PaymentTermId field on the BillingScheduleGroup object | Optional |
| SellingModelType__std | The selling model type indicates whether the original transaction is for a one-time product, a term-defined product, or an evergreen product. | BillingMethod on the BillingSchedule object | Optional |
| TransactionId__std | The ID of the transaction that you want to create a billing schedule for. | If the transaction is an OrderItem, OrderItemAdjustmentLineItem, OrderItemDetail, QuoteLineDetail, or QuoteLineItem record, the ReferenceEntityItemId field on the BillingScheduleobject is populated. For other sObject records or external records, the ReferenceItem field on the BillingSchedule object is populated. | Required |
| ProductName__std | The name of the product that's related to the transaction that you want to create a billing schedule for. | ProductName field on the BillingScheduleGroup object | Optional |
| ProductId__std | The ID of the product that's related to the transaction that you want to create a billing schedule for. | Product2Id field on the BillingScheduleGroup object | Optional |
| LegalEntityId__std | The legal entity of your company that the transaction comes under. The LegalEntityId of the RelatedTransactionId is considered. | LegalEntityId field on the BillingScheduleGroup object | Optional |
| PeriodBoundary__std | The period boundary determines the start and end date of the billing period. Valid values are:AlignToCalendarAnniversaryDayOfPeriodLastDayOfPeriod | PeriodBoundary field on the BillingScheduleGroup object | Optional |
| BillingDayOfMonth__std | The day of the month on which a recurring billing process is scheduled to occur for the transaction. | BillDayOfMonth field on the BillingScheduleGroup object | Optional |
| BillingStartMonth__std | The month when billing begins for an annual subscription. This value can be any number from 1 through 12. For example, if billing starts in January, the value is 1. If billing starts in June, the value is 6. | BillingStartMonth field on the BillingScheduleGroup object | Optional |
| UnitOfMeasureId__std | The ID of the Unit of Measure record that's used to define the unit for the quantity of the transaction. | UnitOfMeasureId field on the BillingSchedule object | Optional |
| EndDate__std | The end date of the transaction. | BillingScheduleEndDate field on the BillingSchedule object | Required |
| StartDate__std | The start date of the transaction. | BillingScheduleStartDate field on the BillingSchedule object | Required |
| Quantity__std | The quantity of the transaction. | Quantity field on the BillingSchedule object | Required |
| TaxTreatmentId__std | The ID of the tax treatment that's used to calculate tax for the transaction. If you don't specify a TaxTreatmentId, the org-default TaxTreatmentId is considered. | TaxTreatmentId field on the BillingScheduleGroup object | Optional |
| BillingTermUnit__std | The unit of measurement of the billing term. Valid values are:MonthQuarterSemi-AnnualYear | BillingTermUnit field on the BillingSchedule object | Optional |
| BillingTreatmentId__std | The ID of the billing treatment that's used to create the billing schedule for the transaction. The BillingTreatmentId of the RelatedTransactionId is considered. | BillingTreatmentId field on the BillingScheduleGroup object | Optional |
| CurrencyIsoCode__std | The currency code of the transaction amount if your Salesforce org has multi-currency enabled. | CurrencyIsoCode field on the BillingScheduleGroup object | Required for Salesforce orgs with multiple currencies enabled. |
| RelatedTransactionId__std | The ID of the original transaction that's related to the renewal transaction. | This value isn't populated on any BillingSchedule or BillingScheduleGroup field. | Required |
| RampIdentifier__std | When the transaction is part of a ramp deal, the RampIdentifier value is a unique identifier for that ramp. All the transactions with the same RampIdentifier value are grouped to have billing schedules for the same billing schedule group. | This value isn't populated on any BillingSchedule or BillingScheduleGroup field. | Optional |
| ProrationPolicy__std | The ID of the Proration Policy record that's related to the Product Selling Model Option record of the transaction. | ProrationPolicyId field on the BillingScheduleGroup object | Optional |
| BillingActionType__std | The action that you want to perform for the transaction. Valid values are:AddAmendRenewCancelSpecify Renew as the BillingActionType for renewal transactions. | Category field on the BillingSchedule object is populated as Renewal. | Required |
| UnitPrice__std | The unit price of the transaction. | UnitPrice field on the BillingSchedule object | Either the UnitPrice or the NetUnitPrice value is required |
| TotalPrice__std | The total price of the transaction. | TotalAmount field on the BillingSchedule object | Required |
| ProductUsageModelType__std | The type of usage model for the transaction product or service. Valid values are:Anchor—Anchor is the main subscription product or service.Pack—Pack is the add-on product or service that grants additional usage resources for consumption. | BillingMethod value field on the BillingSchedule object is populated as OrderAmount. | Optional |
| NetUnitPrice__std | The net unit price of the transaction. | NetUnitPrice field on the BillingSchedule object | Either the UnitPrice or the NetUnitPrice value is required |
| BindingInstance__std | The ID of the Asset record or custom object record that's related to the transaction. | BindingInstanceId on the BillingScheduleGroup object | Optional |
| InvoiceRunMatchingValue__std | The batch value that’s used to group the billing schedule that's created for the transaction with other billing schedules with the same value. This way, the same invoice run can process both schedules. During an invoice run, billing schedules with the same batch value, including null, are grouped to be processed by the same invoice run. | InvoiceRunMatchingValue field on the BillingSchedule object | Optional |
| ReferenceRecordId__std | The ID of the Asset record that's related to the transaction. | ReferenceRecordId field on the BillingScheduleGroup object | Optional |
| CustomInvoiceGroupKey__std | When you want to generate a consolidated invoice for multiple transactions, specify the same CustomInvoiceGroupKey for all these transactions. This key is used to group these transactions together and generate a consolidated invoice for all of them. | CustomInvoiceGroupKey field on the BillingScheduleGroup object | Optional |
| MainTransactionId__std | When your transaction is part of a bundle, this value is the ID of the child transaction record. | MainBsgId field on the BsgRelationship object | Optional |
| AssociatedTransactionId__std | When your transaction is part of a bundle, this value is the ID of the child transaction record. | AssociatedBsgId field on the BsgRelationship object | Optional |
| MainTransactionRole__std | When your transaction is part of a bundle, this value is the role of the primary transaction in the bundle relationship. Valid values are:AddOnBundleSet | MainBsgRole field on the BsgRelationship object | Optional |
| AssociatedTransactionRole__std | When your transaction is part of a bundle, this value is the role of the child transaction in the bundle relationship. Valid values are:BundleComponentClassificationComponent | AssociatedBsgRole field on the BsgRelationship object | Optional |
| AssociatedTransactionPricing__std | When your transaction is part of a bundle, this value describes how the child transaction is priced in relation to the primary transaction. Valid values are:IncludedInBundlePrice NotIncludedInBundlePrice | AssociatedBsgPricing field on the BsgRelationship object | Optional |
| ProductRelationshipTypeId__std | The ID of the Product Relationship Type record that defines the relationship between the primary and child transactions. | ProductRelationshipTypeId field on the BsgRelationship object | Optional |

## Considerations

Keep these important considerations in mind when you specify the details for renewal transactions.

-   The BillingActionType\_\_std value for renewal transactions must be Renew.
-   The quantity for renewal transactions must be a nonzero positive number.
-   The start date of the renewal transaction must be before the maximum end date of all the existing billing schedules associated with the billing schedule group.
-   The end date of the renewal transaction must be after the maximum end date of all the existing transactions associated with the billing schedule group of the related transaction.
-   Specify a RelatedTransactionId\_\_std value with a positive quantity.
-   For a particular RelatedTransactionId, you can create a billing schedule only for a single renewal transaction.
-   For renewal transactions, the TaxTreatmentId\_\_std value, the BillingTreatmentId\_\_std value, and the LegalEntityId\_\_std value of the related transaction are considered.

JSON example

This sample includes the transaction data for a renewal.

```

```

This sample shows the request payload to create a billing schedule for a renewal.

```

```

## Code Examples

```
{
  "Transaction": [
    {
      "id": "temp1001",
      "TotalPrice__std": 10,
      "Quantity__std": 1,
      "UnitPrice__std": 10,
      "StartDate__std": "2026-03-01",
      "EndDate__std": "2027-12-31",
      "TransactionId__std": "temp1001",
      "BillingActionType__std": "Renew",
      "RelatedTransactionId__std": "temp1",
      "Transaction_Make__c": "5001",
      "Transaction_Color__c": "Red"
    }
  ]
}
```

```
{
  "transactionDetails": "{"Transaction":[{"id":"temp1001","TotalPrice__std":10,"Quantity__std":1,"UnitPrice__std":10,"StartDate__std":"2026-03-01","EndDate__std":"2027-12-31","TransactionId__std":"temp1001","BillingActionType__std":"Renew","RelatedTransactionId__std":"temp1","Transaction_Make__c":"5001","Transaction_Color__c":"Red"}]}",
  "transactionContextDetails": {
    "contextDefinitionName": "StandaloneBillingContext__stdctx",
    "intraContextCustomMappingName": "CustomContextMapping",
    "readContextMappingName": "TransactionMapping",
    "saveContextMappingName": "BSGEntitiesMapping"
  }
}
```

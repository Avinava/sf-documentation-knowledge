---
title: "Salesforce Billing Custom Objects"
domain: blng-dev
topic: salesforce-billing-custom-objects
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:08.851Z
estimatedTokens: 3749
keywords: [Salesforce, Billing, Custom, Objects, data, model, manage, invoices, payments, revenue]
---

# Salesforce Billing Custom Objects

> The Salesforce Billing data model provides custom objects to manage invoices, payments,
  and revenue.

# Salesforce Billing Custom Objects

The Salesforce Billing data model provides custom objects to manage invoices, payments, and revenue.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=blng_dev)

#### Note

The documentation in this developer guide is for the Salesforce Billing managed package. If you're looking for developer documentation for Revenue Cloud, see [Get Started with Revenue Cloud Developer Resources](https://developer.salesforce.com/docs/atlas.en-us.260.0.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/rlm_get_started.htm).

-   **[blng\_\_AccountBalanceSnapshot\_\_c](atlas.en-us.blng_dev.meta/blng_dev/blng__accountbalancesnapshot__c.htm)**
    Represents a list of outstanding invoice debt within an account, grouped by the number of days past the due date. The account balance snapshot also includes the amounts of unapplied credit notes and payments within the same account.
-   **[blng\_\_AgingBuckets\_\_c](atlas.en-us.blng_dev.meta/blng_dev/blng__agingbuckets__c.htm)**
    Represents the outstanding invoices sorted into various aging periods.
-   **[blng\_\_BalanceSnapShotRun\_\_c](atlas.en-us.blng_dev.meta/blng_dev/blng__balancesnapshotrun__c.htm)**
    Represents the analysis of an account's invoices on a scheduled basis for past-due balances.
-   **[blng\_\_BalanceSnapShotScheduler\_\_c](atlas.en-us.blng_dev.meta/blng_dev/blng__balancesnapshotscheduler__c.htm)**
    Represents the Balance Snapshot Scheduler, which creates a Balance Snapshot Run to regularly analyze your account's invoices for past-due balances.
-   **[blng\_\_BillingBatchJob\_\_c](atlas.en-us.blng_dev.meta/blng_dev/blng__billingbatchjob__c.htm)**
    Represents a scheduled processing job that triggers recurring invoice batch runs and payment batch runs.
-   **[blng\_\_BillingPrefix\_\_c](atlas.en-us.blng_dev.meta/blng_dev/blng__billingprefix__c.htm)**
    Represents a prefix that can be appended to billing-related records for storage purposes.
-   **[blng\_\_BillingRule\_\_c](atlas.en-us.blng_dev.meta/blng_dev/blng__billingrule__c.htm)**
    Represents how and when billing must occur for products and services.
-   **[blng\_\_BillingSchedule\_\_c](atlas.en-us.blng_dev.meta/blng_dev/sforce_api_objects_blng__billingschedule__c.htm)**
    Represents information about the order product that's invoiced based on the invoice plan billing frequency.
-   **[blng\_\_BillingTransaction\_\_c](atlas.en-us.blng_dev.meta/blng_dev/sforce_api_objects_blng__billingtransaction__c.htm)**
    Represents information about each invoice plan line of a billing schedule. A billing transaction stores the billed amount based on the relationship between the invoice plan line’s commencement date and the order product’s service start and end dates. When a billing transaction is invoiced, Salesforce Billing copies data from the billing transaction to the invoice line.
-   **[blng\_\_BillingTreatment\_\_c](atlas.en-us.blng_dev.meta/blng_dev/sforce_api_objects_blng__billingtreatment__c.htm)**
    Represents information about how Salesforce Billing records billing rule actions in your finance books and general ledgers. Use billing treatments to specify an invoice plan and cancellation invoice plan for dynamic invoice plans. You can also set up the cancellation rule for amendment orders to override the package setting for the default cancel order rule.
-   **[blng\_\_CreditNote\_\_c](atlas.en-us.blng_dev.meta/blng_dev/sforce_api_objects_blng__creditnote__c.htm)**
    Represents information about the amount that's used to reduce the amount that a buyer owes a seller under the terms of an earlier invoice. A credit note always decreases the balance of an invoice. Users can apply positive credit notes to positive invoices, for example, a $10 credit note reduces the balance of a $100 invoice line to $90.
-   **[blng\_\_CreditNoteAllocation\_\_c](atlas.en-us.blng_dev.meta/blng_dev/sforce_api_objects_blng__creditnoteallocation__c.htm)**
    Represents allocation information about a credit note line that's been allocated to an invoice line.
-   **[blng\_\_CreditNoteLine\_\_c](atlas.en-us.blng_dev.meta/blng_dev/sforce_api_objects_blng__creditnoteline__c.htm)**
    Represents product, service, adjustment, or tax line items that were included in a credit note.
-   **[blng\_\_DebitNote\_\_c](atlas.en-us.blng_dev.meta/blng_dev/sforce_api_objects_blng__debitnote__c.htm)**
    Represents information about the positive balance change that you can allocate to an invoice line or a positive credit note line.
-   **[blng\_\_DebitNoteLine\_\_c](atlas.en-us.blng_dev.meta/blng_dev/sforce_api_objects_blng__debitnoteline__c.htm)**
    Represents information about the amount that's allocated to increase the balance of an invoice line.
-   **[blng\_\_FinanceBook\_\_c](atlas.en-us.blng_dev.meta/blng_dev/blng__financebook__c.htm)**
    Represents the storage of financial transactions for reporting and recordkeeping.
-   **[blng\_\_FinancePeriod\_\_c](atlas.en-us.blng_dev.meta/blng_dev/blng__financeperiod__c.htm)**
    Represents a reference object that stores lookups to all accounting or revenue transactions that occur within a specific period.
-   **[blng\_\_GLAccount\_\_c](atlas.en-us.blng_dev.meta/blng_dev/blng__glaccount__c.htm)**
    Represents the accounting journal entries in a General Ledger (GL) account. You can define both a credit GL account and a debit GL account as endpoints for these entries. These GL accounts, along with all associated records, can later be exported to an external GL bookkeeping system.
-   **[blng\_\_GLRule\_\_c](atlas.en-us.blng_dev.meta/blng_dev/blng__glrule__c.htm)**
    Represents how transactions are recorded and categorized in the General Ledger (GL).
-   **[blng\_\_GLTreatment\_\_c](atlas.en-us.blng_dev.meta/blng_dev/blng__gltreatment__c.htm)**
    Represents the lookups to a credit General Ledger (GL) account and a debit GL account. These lookups establish a relationship between your transaction and your GL accounts.
-   **[blng\_\_Invoice\_\_c](atlas.en-us.blng_dev.meta/blng_dev/blng__invoice__c.htm)**
    Represents a financial document describing the total amount a buyer must pay for provided goods or services.
-   **[blng\_\_InvoiceLine\_\_c](atlas.en-us.blng_dev.meta/blng_dev/blng__invoiceline__c.htm)**
    Represents the amount that a buyer must pay for a product, service, or fee. Invoice lines are created based on the amount of an order line.
-   **[blng\_\_InvoicePlan\_\_c](atlas.en-us.blng_dev.meta/blng_dev/blng__invoiceplan__c.htm)**
    Provides billing schedules with customizable billing frequencies. The invoice plan allows for non-standard billing intervals, skipping traditional monthly or quarterly cycles. For instance, the first payment occurs ten days after the sale, with the second payment two months later.
-   **[blng\_\_InvoicePlanLine\_\_c](atlas.en-us.blng_dev.meta/blng_dev/blng__invoiceplanline__c.htm)**
    Represents the custom behavior for a single invoice transaction. An invoice plan contains the invoice plan lines.
-   **[blng\_\_InvoiceRun\_\_c](atlas.en-us.blng_dev.meta/blng_dev/blng__invoicerun__c.htm)**
    During an invoice batch run, all billing schedules that meet the specified criteria are processed, resulting in the generation of invoices.
-   **[blng\_\_InvoiceScheduler\_\_c](atlas.en-us.blng_dev.meta/blng_dev/blng__invoicescheduler__c.htm)**
    Represents whether and when an order product gets invoiced.
-   **[blng\_\_LegalEntity\_\_c](atlas.en-us.blng_dev.meta/blng_dev/blng__legalentity__c.htm)**
    Represents the way an organization is structured. An organization can be a single legal entity or it can comprise more than one legal entity.
-   **[blng\_\_Payment\_\_c](atlas.en-us.blng_dev.meta/blng_dev/blng__payment__c.htm)**
    Represents a single event when a shopper makes a payment. For credit cards, this event is a payment capture or payment sale, but it doesn't appear on the shopper's credit card statement.
-   **[blng\_\_PaymentAllocationDebitNoteLine\_\_c](atlas.en-us.blng_dev.meta/blng_dev/blng__paymentallocationdebitnoteline__c.htm)**
    Represents an individual line item on a debit note allocated to a payment, used to track and manage payment allocations against debit notes for maintaining accurate financial records.
-   **[blng\_\_PaymentAllocationInvoice\_\_c](atlas.en-us.blng_dev.meta/blng_dev/blng__paymentallocationinvoice__c.htm)**
    Represents the allocation of payments to specific invoices. This object is used to track and manage how payments are applied to outstanding invoices, ensuring accurate financial records and reporting.
-   **[blng\_\_PaymentAllocationInvoiceLine\_\_c](atlas.en-us.blng_dev.meta/blng_dev/blng__paymentallocationinvoiceline__c.htm)**
    Represents the allocation of a payment to a specific invoice line. This object helps in tracking how payments are distributed across different invoice lines.
-   **[blng\_\_PaymentAuthorization\_\_c](atlas.en-us.blng_dev.meta/blng_dev/blng__paymentauthorization__c.htm)**
    Represents the process of securing authorization from a customer's bank or credit card issuer to charge a specific amount to their account, verifying the availability of sufficient funds or credit.
-   **[blng\_\_PaymentGateway\_\_c](atlas.en-us.blng_dev.meta/blng_dev/blng__paymentgateway__c.htm)**
    Represents the connection to an external payment gateway.
-   **[blng\_\_PaymentGatewayConfig\_\_c](atlas.en-us.blng_dev.meta/blng_dev/blng__paymentgatewayconfig__c.htm)**
    Represents the configuration for integrating Salesforce Billing with a payment gateway.
-   **[blng\_\_PaymentMapping\_\_c](atlas.en-us.blng_dev.meta/blng_dev/blng__paymentmapping__c.htm)**
    Represents the process of associating payment types, methods, or purposes with other information.
-   **[blng\_\_PaymentMethod\_\_c](atlas.en-us.blng_dev.meta/blng_dev/blng__paymentmethod__c.htm)**
    Represents the storage of information about different payment methods used by customers.
-   **[blng\_\_PaymentRun\_\_c](atlas.en-us.blng_dev.meta/blng_dev/blng__paymentrun__c.htm)**
    Represents a batch processing job in Salesforce Billing. During a payment run, all payment schedules that meet the specified criteria are processed, resulting in the collection of payments.
-   **[blng\_\_PaymentScheduler\_\_c](atlas.en-us.blng_dev.meta/blng_dev/blng__paymentscheduler__c.htm)**
    Represents automating payment runs by creating payment schedulers, which process the payment runs on a recurring basis.
-   **[blng\_\_PaymentTerms\_\_c](atlas.en-us.blng_dev.meta/blng_dev/blng__paymentterms__c.htm)**
    Represents the period customers have to pay for an invoiced order product.
-   **[blng\_\_PaymentTransaction\_\_c](atlas.en-us.blng_dev.meta/blng_dev/blng__paymenttransaction__c.htm)**
    Represents the payment transactions associated with a payment.
-   **[blng\_\_Refund\_\_c](atlas.en-us.blng_dev.meta/blng_dev/blng__refund__c.htm)**
    Represents a refund made against a payment.
-   **[blng\_\_RefundLineCreditNoteLine\_\_c](atlas.en-us.blng_dev.meta/blng_dev/blng__refundlinecreditnoteline__c.htm)**
    Represents a relationship between a refund line and a credit note line.
-   **[blng\_\_RefundLinePayment\_\_c](atlas.en-us.blng_dev.meta/blng_dev/blng__refundlinepayment__c.htm)**
    Represents a portion of a refund that’s applied to or unapplied from a payment. One refund line can represent the full amount of a refund.
-   **[blng\_\_RevenueAdjustment\_\_c](atlas.en-us.blng_dev.meta/blng_dev/blng__revenueadjustment__c.htm)**
    Represents the adjustment to increase, decrease, or transfer the available balance between revenue schedules when actual revenue differs from the initial revenue schedule.
-   **[blng\_\_RevenueAdjustmentLine\_\_c](atlas.en-us.blng_dev.meta/blng_dev/blng__revenueadjustmentline__c.htm)**
    Represents a type of revenue schedule balance change. You can have multiple adjustment lines that each target a different revenue schedule.
-   **[blng\_\_RevenueAgreement\_\_c](atlas.en-us.blng_dev.meta/blng_dev/blng__revenueagreement__c.htm)**
    Represents the objects with a revenue schedule related list. The revenue agreement is useful for grouping revenue schedules related to the same transaction, so that you can quickly evaluate revenue amounts for that transaction.
-   **[blng\_\_RevenueDistributionMethod\_\_c](atlas.en-us.blng_dev.meta/blng_dev/blng__revenuedistributionmethod__c.htm)**
    Represents how the revenue of a company is spread over a specific period.
-   **[blng\_\_RevenueRecognitionRule\_\_c](atlas.en-us.blng_dev.meta/blng_dev/blng__revenuerecognitionrule__c.htm)**
    Represents the creation of a revenue schedule for an invoiced order product or invoice line.
-   **[blng\_\_RevenueRecognitionTreatment\_\_c](atlas.en-us.blng_dev.meta/blng_dev/blng__revenuerecognitiontreatment__c.htm)**
    Represents how and where the revenue of a product is recognized.
-   **[blng\_\_RevenueSchedule\_\_c](atlas.en-us.blng_dev.meta/blng_dev/blng__revenueschedule__c.htm)**
    Represents the fields that you can use to review the amount of revenue already distributed and remaining to be allocated. A revenue schedule is associated with a revenue transaction.
-   **[blng\_\_RevenueTransaction\_\_c](atlas.en-us.blng_dev.meta/blng_dev/blng__revenuetransaction__c.htm)**
    Represents the revenue transactions made against an order product.
-   **[blng\_\_SubInvoiceLine\_\_c](atlas.en-us.blng_dev.meta/blng_dev/blng__subinvoiceline__c.htm)**
    Represents a detailed line item within an invoice that breaks down the provided charges or services.
-   **[blng\_\_TaxConfig\_\_c](atlas.en-us.blng_dev.meta/blng_dev/blng__taxconfig__c.htm)**
    Represents the tax configuration associated with a billing schedule.
-   **[blng\_\_TaxIntegration\_\_c](atlas.en-us.blng_dev.meta/blng_dev/blng__taxintegration__c.htm)**
    Represents the interaction between Salesforce and external tax calculation services or systems.
-   **[blng\_\_TaxRate\_\_c](atlas.en-us.blng_dev.meta/blng_dev/blng__taxrate__c.htm)**
    Represents a tax rate for a tax code and country.
-   **[blng\_\_TaxRule\_\_c](atlas.en-us.blng_dev.meta/blng_dev/blng__taxrule__c.htm)**
    Represents how Salesforce Billing processes tax for the transactions. All products that must be billed require a lookup to a tax rule.
-   **[blng\_\_TaxTreatment\_\_c](atlas.en-us.blng_dev.meta/blng_dev/blng__taxtreatment__c.htm)**
    Represents how Salesforce and external engines calculate taxes, and the tax engine to use for tax calculation.
-   **[blng\_\_Usage\_\_c](atlas.en-us.blng_dev.meta/blng_dev/blng__usage__c.htm)**
    Represents the amount of service consumed over a period of time.
-   **[blng\_\_UsageSummary\_\_c](atlas.en-us.blng_dev.meta/blng_dev/blng__usagesummary__c.htm)**
    Represents the total quantity and value of related usages, and the date ranges for including usage records.

## Related Topics

- blng__AccountBalanceSnapshot__c (atlas.en-us.blng_dev.meta/blng_dev/blng__accountbalancesnapshot__c.htm)
- blng__AgingBuckets__c (atlas.en-us.blng_dev.meta/blng_dev/blng__agingbuckets__c.htm)
- blng__BalanceSnapShotRun__c (atlas.en-us.blng_dev.meta/blng_dev/blng__balancesnapshotrun__c.htm)
- blng__BalanceSnapShotScheduler__c (atlas.en-us.blng_dev.meta/blng_dev/blng__balancesnapshotscheduler__c.htm)
- blng__BillingBatchJob__c (atlas.en-us.blng_dev.meta/blng_dev/blng__billingbatchjob__c.htm)
- blng__BillingPrefix__c (atlas.en-us.blng_dev.meta/blng_dev/blng__billingprefix__c.htm)
- blng__BillingRule__c (atlas.en-us.blng_dev.meta/blng_dev/blng__billingrule__c.htm)
- blng__BillingSchedule__c (atlas.en-us.blng_dev.meta/blng_dev/sforce_api_objects_blng__billingschedule__c.htm)
- blng__BillingTransaction__c (atlas.en-us.blng_dev.meta/blng_dev/sforce_api_objects_blng__billingtransaction__c.htm)
- blng__BillingTreatment__c (atlas.en-us.blng_dev.meta/blng_dev/sforce_api_objects_blng__billingtreatment__c.htm)

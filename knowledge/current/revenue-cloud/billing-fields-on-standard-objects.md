---
title: "Billing Fields on Standard Objects"
domain: revenue-cloud
topic: billing-fields-on-standard-objects
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:05.412Z
estimatedTokens: 1408
keywords: [Billing, Fields, Standard, Objects, adds, standard, fields, Salesforce, objects, features, represent, information, specific, Billing., only, orgs, where, enabled.]
---

# Billing Fields on Standard Objects

> Billing adds standard fields to some standard Salesforce objects of other features to
        represent information specific to Billing. These fields are available only in orgs where
        Billing is enabled.

# Billing Fields on Standard Objects

Billing adds standard fields to some standard Salesforce objects of other features to represent information specific to Billing. These fields are available only in orgs where Billing is enabled.

-   **[Billing Fields on AccountBillingAccount](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/billling_sforce_api_objects_accountbillingaccount.htm)**
    Standard fields extend the AccountBillingAccount object for use in Billing to represent information about default billing accounts. This object is available in API version 63.0 and later.
-   **[Billing Fields on BillingAccount](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/billling_sforce_api_objects_billingaccount.htm)**
    Standard fields extend the BillingAccount object for use in Billing to represent information about the billing suspension date and the billing resumption date. This object is available in API version 63.0 and later.
-   **[Billing Fields on CollectionPlan](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/billing_sforce_api_objects_collectionplan.htm)**
    Standard fields extend the CollectionPlan object for use in Billing to represent information about the total invoice balance. This object is available in API version 64.0 and later.
-   **[Billing Fields on CollectionPlanItem](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/billing_sforce_api_objects_collectionplanitem.htm)**
    Standard fields extend the CollectionPlanItem object for use in Billing to represent information about the invoice balance. This object is available in API version 64.0 and later.
-   **[Billing Fields on ExpressionSet](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/billing_sforce_api_objects_expressionset.htm)**
    Standard fields extend the ExpressionSet object for use in Billing. These fields represent information about an expression set that performs a series of calculations by using lookups and user-defined variables and constants to calculate taxes. This object is available in API version 66.0 and later.
-   **[Billing Fields on Dispute](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/billing_sforce_api_objects_dispute.htm)**
    Represents the details of a billing dispute that involves one invoice and one or more disputed invoice lines. The details include the disputed amount, the approved amount, and the dispute type, subtype and status. This object is available in API version 66.0 and later.
-   **[Billing Fields on DisputeItem](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/billing_sforce_api_objects_disputeitem.htm)**
    Represents a specific invoice line or charge that’s being disputed. The details include the total transaction amount, transaction date, disputed amount, reason, and status of the dispute. This object is available in API version 66.0 and later.
-   **[Billing Fields on Payment](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/billing_sforce_api_objects_payment.htm)**
    Standard fields extend the Payment object for use in Billing to represent information about corporate currency, transaction amounts in corporate currency, and accounting periods for legal entities. This object is available in API version 64.0 and later.
-   **[Billing Fields on PaymentLineInvoice](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/billing_sforce_api_objects_paymentlineinvoice.htm)**
    Standard fields extend the PaymentLineInvoice object for use in Billing to represent information about legal entities and legal entity accounting periods. This object is available in API version 64.0 and later.
-   **[Billing Fields on Refund](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/billing_sforce_api_objects_refund.htm)**
    Standard fields extend the Refund object for use in Billing to represent information about corporate currency, transaction amounts in corporate currency, and accounting periods for legal entities. This object is available in API version 64.0 and later.
-   **[Billing Fields on RefundLinePayment](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/billing_sforce_api_objects_refund_line_payment.htm)**
    Standard fields extend the Refund Line Payment object for use in Billing to represent information about accounting periods for legal entities. This object is available in API version 64.0 and later.
-   **[Billing Fields on TaxRate](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/billing_sforce_api_objects_taxrate.htm)**
    Standard fields extend the TaxRate object for use in Billing. These fields represent information about the tax rate for a transaction that's determined by the applicable tax code and country. This object is available in API version 66.0 and later.
-   **[Billing Fields on TransactionJournal](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/billing_sforce_api_objects_transactionjournal.htm)**
    Standard fields extend the TransactionJournal object for use in Billing to represent information about the general ledger accounts for billing transactions. This object is available in API version 63.0 and later.

## Related Topics

- Billing Fields on AccountBillingAccount (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/billling_sforce_api_objects_accountbillingaccount.htm)
- Billing Fields on BillingAccount (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/billling_sforce_api_objects_billingaccount.htm)
- Billing Fields on CollectionPlan (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/billing_sforce_api_objects_collectionplan.htm)
- Billing Fields on CollectionPlanItem (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/billing_sforce_api_objects_collectionplanitem.htm)
- Billing Fields on ExpressionSet (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/billing_sforce_api_objects_expressionset.htm)
- Billing Fields on Dispute (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/billing_sforce_api_objects_dispute.htm)
- Billing Fields on DisputeItem (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/billing_sforce_api_objects_disputeitem.htm)
- Billing Fields on Payment (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/billing_sforce_api_objects_payment.htm)
- Billing Fields on PaymentLineInvoice (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/billing_sforce_api_objects_paymentlineinvoice.htm)
- Billing Fields on Refund (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/billing_sforce_api_objects_refund.htm)

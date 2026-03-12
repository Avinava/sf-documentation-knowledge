---
title: "Context-Aware Standalone Billing Schedule Input"
domain: revenue-cloud
topic: context-aware-standalone-billing-schedule-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:05.946Z
estimatedTokens: 2167
keywords: [Context-Aware, Standalone, Billing, Schedule, Input, representation, request, create, billing, schedule, based, transaction, details., includes, context, service]
---

# Context-Aware Standalone Billing Schedule Input

> Input representation of the request to create a billing schedule based on transaction
    details. This representation includes the transaction and context service details.

# Context-Aware Standalone Billing Schedule Input

Input representation of the request to create a billing schedule based on transaction details. This representation includes the transaction and context service details.

The Create Standalone Billing Schedules (POST) API uses the StandaloneBillingContext context definition to hydrate the context of the transaction. The context definition includes these mappings.

-   The TransactionMapping maps the fields of the transaction to the attributes of the Transaction node.
-   The BSGEntitiesMapping maps the attributes of the Billing Schedule node, the Billing Schedule Group node, and Billing Schedule Group Relationship node to the fields of the corresponding Salesforce objects.

For the StandaloneBillingContext context definition to hydrate all the required data, transaction data for the mandatory context tags are required. Here are the topics that mention the mandatory and optional tags, sample transaction details, and sample payloads for various types of transactions.

-   [One-Time New Sale Transaction](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_billing_schedule_input_for_one_time_new_sale.htm "Understand the required values and key considerations before you create a billing schedule for a new sale transaction with the OneTime selling model type.")
-   [Term-Defined New Sale Transaction](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_billing_schedule_input_for_termed_new_sale.htm "Understand the required values and key considerations before you create a billing schedule for a new sale transaction with the TermDefined selling model type.")
-   [Evergreen New Sale Transaction](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_billing_schedule_input_for_evergreen_new_sale.htm "Understand the required values and key considerations before you create a billing schedule for a new sale transaction with the Evergreen selling model type.")
-   [New Sale Transaction With Bundled Products](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_billing_schedule_input_for_bundled_products_new_sale.htm "Understand the required values and key considerations before you create a billing schedule for a new sale transaction with bundled products.")
-   [New Sale Transaction With Ramped Products](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_billing_schedule_input_for_ramps_new_sale.htm "Understand the required values and key considerations before you create a billing schedule for a new sale transaction with ramped products.")
-   [New Sale Transaction With Usage Products](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_billing_schedule_input_for_usage_new_sale.htm "Understand the required values and key considerations before you create a billing schedule for a new sale transaction with usage-based products.")
-   [Amended Transaction](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_billing_schedule_input_for_amendment.htm "Understand the required values and key considerations before you create a billing schedule for an amended transaction.")
-   [Renewal Transaction](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_billing_schedule_input_for_renewal.htm "Understand the required values and key considerations before you create a billing schedule for a renewal transaction.")
-   [Early Renewal Transaction](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_billing_schedule_input_for_early_renewal.htm "Understand the required values and key considerations before you create a billing schedule for an early renewal transaction.")
-   [Canceled Transaction](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_billing_schedule_input_for_cancellation.htm "Understand the required values and key considerations before you create a billing schedule for a canceled transaction.")

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| transaction​ContextDetails | Context-Aware Standalone Billing Schedule Metadata Input[] | Details of the context definition and its mappings that are used to hydrate the transaction data and save it in the appropriate Billing fields.The API request supports a single mapping ID. You can send separate requests for line items and line details by using their respective mapping IDs. However, this approach can result in duplicate billing schedules for the same line items and line details. | Required | 64.0 |
| transaction​Details | String | Input JSON data that includes the ID of the transaction record for which the billing schedule must be created and other additional transaction details. | Required | 64.0 |

-   **[One-Time New Sale Transaction](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_billing_schedule_input_for_one_time_new_sale.htm)**
    Understand the required values and key considerations before you create a billing schedule for a new sale transaction with the OneTime selling model type.
-   **[Term-Defined New Sale Transaction](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_billing_schedule_input_for_termed_new_sale.htm)**
    Understand the required values and key considerations before you create a billing schedule for a new sale transaction with the TermDefined selling model type.
-   **[Evergreen New Sale Transaction](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_billing_schedule_input_for_evergreen_new_sale.htm)**
    Understand the required values and key considerations before you create a billing schedule for a new sale transaction with the Evergreen selling model type.
-   **[New Sale Transaction With Bundled Products](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_billing_schedule_input_for_bundled_products_new_sale.htm)**
    Understand the required values and key considerations before you create a billing schedule for a new sale transaction with bundled products.
-   **[New Sale Transaction With Ramped Products](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_billing_schedule_input_for_ramps_new_sale.htm)**
    Understand the required values and key considerations before you create a billing schedule for a new sale transaction with ramped products.
-   **[New Sale Transaction With Usage Products](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_billing_schedule_input_for_usage_new_sale.htm)**
    Understand the required values and key considerations before you create a billing schedule for a new sale transaction with usage-based products.
-   **[Amended Transaction](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_billing_schedule_input_for_amendment.htm)**
    Understand the required values and key considerations before you create a billing schedule for an amended transaction.
-   **[Renewal Transaction](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_billing_schedule_input_for_renewal.htm)**
    Understand the required values and key considerations before you create a billing schedule for a renewal transaction.
-   **[Early Renewal Transaction](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_billing_schedule_input_for_early_renewal.htm)**
    Understand the required values and key considerations before you create a billing schedule for an early renewal transaction.
-   **[Canceled Transaction](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_billing_schedule_input_for_cancellation.htm)**
    Understand the required values and key considerations before you create a billing schedule for a canceled transaction.

## Code Examples

```
{
  "transactionDetails": "{"nodeName": [{"id":"001SG000004FvlGYAS", "businessSobjectType": "Account", "Quantity":"4" , "Name": "TestAccount"}]}",
  "transactionContextDetails": {
    "contextDefinitionName": "StandaloneBillingContext",
    "intraContextCustomMappingName": "CustomContextMapping",
    "readContextMappingName": "OrderTransactionMapping",
    "saveContextMappingName": "BSGEntitiesMapping"
  }
}
```

## Related Topics

- One-Time New Sale Transaction (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_billing_schedule_input_for_one_time_new_sale.htm)
- Term-Defined New Sale
          Transaction (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_billing_schedule_input_for_termed_new_sale.htm)
- Evergreen New Sale Transaction (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_billing_schedule_input_for_evergreen_new_sale.htm)
- New Sale Transaction With
                        Bundled Products (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_billing_schedule_input_for_bundled_products_new_sale.htm)
- New Sale Transaction With
                        Ramped Products (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_billing_schedule_input_for_ramps_new_sale.htm)
- New Sale Transaction With Usage
                        Products (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_billing_schedule_input_for_usage_new_sale.htm)
- Amended Transaction (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_billing_schedule_input_for_amendment.htm)
- Renewal Transaction (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_billing_schedule_input_for_renewal.htm)
- Early Renewal
                        Transaction (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_billing_schedule_input_for_early_renewal.htm)
- Canceled
                    Transaction (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_billing_schedule_input_for_cancellation.htm)

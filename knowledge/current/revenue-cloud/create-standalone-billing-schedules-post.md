---
title: "Create Standalone Billing Schedules (POST)"
domain: revenue-cloud
topic: create-standalone-billing-schedules-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:06.730Z
estimatedTokens: 1646
keywords: [Create, Standalone, Billing, Schedules, POST, Generate, billing, schedules, any, internal, external, transaction, context, service.]
---

# Create Standalone Billing Schedules (POST)

> Generate billing schedules from any internal or external transaction
      by using context service.

# Create Standalone Billing Schedules (POST)

Generate billing schedules from any internal or external transaction by using context service.

You can create a billing schedule from any sObject such as WorkOrder, Cart, Order, Opportunity, and insurance policy. Or, you can also generate billing schedules from order items.

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

Special Access Rules

This API is available with the Revenue Cloud Billing license.

Resource

```

```

Resource example

```

```

Available version

64.0

HTTP methods

POST

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| transaction​ContextDetails | Context-Aware Standalone Billing Schedule Metadata Input[] | Details of the context definition and its mappings that are used to hydrate the transaction data and save it in the appropriate Billing fields.The API request supports a single mapping ID. You can send separate requests for line items and line details by using their respective mapping IDs. However, this approach can result in duplicate billing schedules for the same line items and line details. | Required | 64.0 |
| transaction​Details | String | Input JSON data that includes the ID of the transaction record for which the billing schedule must be created and other additional transaction details. | Required | 64.0 |

Response body for POST

[Context-Aware Billing Schedule](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_context_aware_billing_schedule_output.htm "Output representation of the context-aware billing schedule.")

#### See Also

-   [Salesforce Help: Context Service](https://help.salesforce.com/s/articleView?id=ind.context_service_context_definitions.htm&language=en_US "Salesforce Help: Context Service - HTML (New Window)")

-   [Industries Common Resources Developer Guide: Context Service](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/context_service_overview.htm "Industries Common Resources Developer Guide: Context Service - HTML (New Window)")

-   [BillingScheduleGroup](https://developer.salesforce.com/docs/atlas.en-us.260.0.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_billingschedulegroup.htm "BillingScheduleGroup - HTML (New Window)")

## Code Examples

```
/commerce/invoicing/standalone/billing-schedules/actions/create
```

```
https://yourInstance.salesforce.com/services/data/v66.0/commerce/invoicing/standalone/billing-schedules/actions/create
```

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

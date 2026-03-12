---
title: "ConfigurationExecutionEnum Enum"
domain: revenue-cloud
topic: configurationexecutionenum-enum
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:05.197Z
estimatedTokens: 254
keywords: [ConfigurationExecutionEnum, Specifies, configuration, place, sales, transaction, request., Usage, Values]
---

# ConfigurationExecutionEnum Enum

> Specifies the configuration method for the place sales transaction request.

# ConfigurationExecutionEnum Enum

Specifies the configuration method for the place sales transaction request.

## Usage

Use these enum values for the configurationExecutionEnum property in the [PlaceSalesTransactionExecutor](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RevSalesTrxn_PlaceSalesTransactionExecutor.htm#apex_class_RevSalesTrxn_PlaceSalesTransactionExecutor "Contains methods to place a sales transaction with details of the graph request, pricing preferences, and configuration options.") class.

## Enum Values

The RevSalesTrxn.ConfigurationExecutionEnum enum has these values.

| Value | Description |
| --- | --- |
| Force | Specifies to enforce the predefined configuration process during the sales transaction process. |
| Skip | Specifies to skip the configuration process during the quote creation process. The default value is Skip. |
| System | Specifies the system to determine whether the configuration process is required. |

## Related Topics

- PlaceSalesTransactionExecutor (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RevSalesTrxn_PlaceSalesTransactionExecutor.htm)

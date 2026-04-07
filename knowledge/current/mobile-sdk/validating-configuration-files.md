---
title: "Validating Configuration Files"
domain: mobile-sdk
topic: validating-configuration-files
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:26.847Z
estimatedTokens: 702
keywords: [Validating, Configuration, Files, you’re, writing, formally, structured, text, schema, validation, useful, any, level, SmartStore, Mobile, Sync, especially, welcome, complex, configurations, handle, records, SDK, Utilities, Salesforce, CLI, Command, Line, Validators, Change]
---

> When you’re writing formally structured text files, schema validation is useful at any
  level. For SmartStore and Mobile
  Sync configuration files, schema validation is especially welcome for complex configurations that
  handle related records.

# Validating Configuration Files

When you’re writing formally structured text files, schema validation is useful at any level. For SmartStore and Mobile Sync configuration files, schema validation is especially welcome for complex configurations that handle related records.

Beginning in Mobile SDK 8.0, you can validate your configuration files using any of the following Mobile SDK utilities:

-   forceios
-   forcedroid
-   forcereact
-   Salesforce CLI Mobile SDK plugin

To validate your configurations, you use the checkconfig action.

## Validating with Mobile SDK Utilities

Here’s a Mobile SDK npm utility call to checkconfig.

```

```

The tool then prompts you for the following information:

-   configpath—Path to the configuration file
-   configtype—Type of the configuration file. Must be either ”store” or “syncs”.

## Validating with the Salesforce CLI Command Line

Here’s an Salesforce CLI call to checkconfig.

```

```

You can replace ios with android, hybrid, or reactnative—in every case, though, the result is the same. You then provide the following required options:

-   \-c, --configpath=<*path to the configuration file*\>
-   \-y, --configtype=<*either ”store” or “syncs”*\>

## Using Other Validators

If you prefer, you can use Mobile SDK schemas with third-party JSON validators. You can find the published schema definitions here:

-   For store configurations: [store.schema.json](https://raw.githubusercontent.com/forcedotcom/SalesforceMobileSDK-Package/master/shared/store.schema.json)
-   For sync configurations: [syncs.schema.json](https://raw.githubusercontent.com/forcedotcom/SalesforceMobileSDK-Package/master/shared/syncs.schema.json)

## Schema Change History

Mobile SDK 9.1 Updates

Targets of type soql now accept an optional maxBatchSize property. This property accepts any integer between 200 and 2,000. Default value is 2,000.

Mobile SDK 8.0 Updates

To overcome differences between iOS and Android syncs configuration syntax, the iOS schema was revised as follows to match Android’s syntax.

-   The type for parent-children sync down configurations is now parent\_children. Formerly, iOS used parentChildren.
-   Create field list for parents in parent-children sync up configurations is labeled createFieldlist. Formerly, iOS used parentCreateFieldlist.
-   Update field list for parents in parent-children sync up configurations is labeled updateFieldlist. Formerly, iOS used parentUpdateFieldlist.

## Example

Sample configuration files:

-   [userstore.json](https://raw.githubusercontent.com/forcedotcom/SalesforceMobileSDK-Package/master/shared/example.userstore.json "HTML (New Window)")
-   [usersyncs.json](https://raw.githubusercontent.com/forcedotcom/SalesforceMobileSDK-Package/master/shared/example.usersyncs.json "HTML (New Window)")

## Code Examples

```
$ forceios checkconfig
```

```
$ sf mobilesdk:ios:checkconfig
```

---
title: "Configurator Message"
domain: revenue-cloud
topic: configurator-message
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:07.500Z
estimatedTokens: 193
keywords: [Configurator, Message, Output, representation, messages, product, configurator.]
---

# Configurator Message

> Output representation of the messages of a product configurator.

# Configurator Message

Output representation of the messages of a product configurator.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| category | String | Category or type of the error message. Valid values are:ArcResolutionServiceArcValidationServiceBundleValidationConfigurationRulesPricing | Small, 60.0 | 60.0 |
| message | String | Message that contains the error details. | Small, 60.0 | 60.0 |
| message​Type | String | Type of error message. Valid values are:ErrorInfoWarning | Small, 60.0 | 60.0 |
| primary​RecordId | String | Primary record ID that contains the error. | Small, 60.0 | 60.0 |
| related​RecordId | String | Related record ID for the error, if any. | Small, 60.0 | 60.0 |

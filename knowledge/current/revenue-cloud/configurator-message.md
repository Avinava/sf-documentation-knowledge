---
title: "Configurator Message"
domain: revenue-cloud
topic: configurator-message
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-07-26T01:59:42.709Z
estimatedTokens: 230
keywords: [Configurator, Message, messages, product]
---

> Output representation of the messages of a product configurator.

# Configurator Message

Output representation of the messages of a product configurator.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| category | String | Category or type of the error message. Valid values are:ArcResolutionServiceArcValidationServiceBundleValidationConfigurationRulesPricing | Small, 60.0 | 60.0 |
| group​ByValue | String | Specifies the value from Constraint Modeling Language rule action details. | Small, 67.0 | 67.0 |
| message | String | Message that contains the error details. | Small, 60.0 | 60.0 |
| message​Type | String | Type of error message. Valid values are:ErrorInfoWarning | Small, 60.0 | 60.0 |
| primary​RecordId | String | Primary record ID that contains the error. | Small, 60.0 | 60.0 |
| related​RecordId | String | Related record ID for the error, if any. | Small, 60.0 | 60.0 |

## Code Examples

```
{
  "messages": {
    "0Q0xx0000004CDsCAM": [
      {
        "message": "This is a quote with warranty",
        "messageType": "Info",
        "category": "ConfigurationRules",
        "primaryRecordId": "0Q0xx0000004CDsCAM"
      },
      {
        "message": "It is a group 1C9xx0000004CCGCA2",
        "messageType": "Warning",
        "category": "ConfigurationRules",
        "primaryRecordId": "0Q0xx0000004CDsCAM",
        "groupByValue": "1C9xx0000004CCGCA2"
      },
      {
        "message": "We're in group virtual bundle",
        "messageType": "Warning",
        "category": "ConfigurationRules",
        "primaryRecordId": "0Q0xx0000004CDsCAM",
        "groupByValue": "1C9xx0000004CCGCA2"
      },
      {
        "message": "It is a group 1C9xx0000004CCOCA2",
        "messageType": "Warning",
        "category": "ConfigurationRules",
        "primaryRecordId": "0Q0xx0000004CDsCAM",
        "groupByValue": "1C9xx0000004CCOCA2"
      },
      {
        "message": "We're in group virtual bundle",
        "messageType": "Warning",
        "category": "ConfigurationRules",
        "primaryRecordId": "0Q0xx0000004CDsCAM",
        "groupByValue": "1C9xx0000004CCOCA2"
      }
    ],
    "stiId-Laptop1": [
      {
        "message": "Only laptop",
        "messageType": "Info",
        "category": "ConfigurationRules",
        "primaryRecordId": "0Q0xx0000004CDsCAM",
        "relatedRecordId": "stiId-Laptop1"
      }
    ]
  }
}
```

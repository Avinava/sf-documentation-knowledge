---
title: "LoggingLevel Enum"
domain: apex-reference
topic: logginglevel-enum
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:40.442Z
keywords: [LoggingLevel, Enum, Values, Usage]
---

# LoggingLevel Enum

# LoggingLevel Enum

Specifies the logging level for the System.debug method.

## Enum Values

The following are the values of the System.LoggingLevel enum, listed from the lowest to the highest levels. The level is cumulative, that is, if you select FINE, the log also includes all events logged at the DEBUG, INFO, WARN, and ERROR levels.

| Value | Description |
| --- | --- |
| NONE | No logging. |
| ERROR | Error and exception logging. |
| WARN | Warning logging. |
| INFO | Informational logging. |
| DEBUG | User-specified debug logging. |
| FINE | High level of logging. |
| FINER | Higher level of logging than FINE. |
| FINEST | Highest level of logging. |

## Usage

Log levels are cumulative. For example, if the lowest level, ERROR, is specified for Apex code, only System.debug methods with the log level of ERROR are logged. If the next log level, WARN, is specified, System.debug methods specified with either ERROR or WARN levels are logged.

In this example, if the log level is set to ERROR, the string MsgTxt isn’t written to the debug log because the debug method has a level of INFO.

```

```

For more information on log levels, see [Debug Log Levels](https://help.salesforce.com/s/articleView?id=sf.code_setting_debug_log_levels.htm&language=en_US) in Salesforce Help.
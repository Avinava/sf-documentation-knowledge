---
title: "Change the Retention Period for a Data Extension"
domain: mc-apis
topic: change-the-retention-period-for-a-data-extension
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:20.543Z
estimatedTokens: 223
keywords: [Change, Retention, Period, Data, Extension, date, determines, extensions, deleted, room, currently, keep, days, seven, clear]
---

# Change the Retention Period for a Data Extension

> The data extension retention date determines when data extensions are deleted. To make room for more data, you can change the retention date. For example, if you currently keep your data for 30 days, you can change the retention period to seven days to clear the data more quickly. Call the data exte

# Change the Retention Period for a Data Extension

The data extension retention date determines when data extensions are deleted. To make room for more data, you can change the retention date. For example, if you currently keep your data for 30 days, you can change the retention period to seven days to clear the data more quickly. Call the data extension by Name or ObjectID.

You can update the data extension retention period that is specified in these properties:

-   DataRetentionPeriodLength
-   ResetRetentionPeriodOnImport
-   DeleteAtEndofRetentionPeriod
-   RetainUntil
-   DataRetentionPeriod You can't update RowBasedRetention.

## Sample SOAP Request to Set Length of Data Retention Period

## Sample SOAP Response to Set Length of Data Retention Period

## Sample SOAP Request to Set End of Data Retention Period

## Sample SOAP Response to Set End of Data Retention Period

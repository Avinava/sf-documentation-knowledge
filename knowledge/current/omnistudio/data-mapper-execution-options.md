---
title: "Data Mapper Execution Options"
domain: omnistudio
topic: data-mapper-execution-options
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:08.153Z
keywords: [Data, Mapper, Execution, Options]
---

# Data Mapper Execution Options

# Data Mapper Execution Options

Input representation of the optional parameters for the data mapper execution.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| ignoreCache | Boolean | Indicates whether to ignore the cache during the data mapper execution (true) or not (false).The default value is false. | Optional | 64.0 |
| ignore​MetadataCache | Boolean | Indicates whether to ignore the metadata cache during the data mapper execution (true) or not (false).The default value is false. | Optional | 64.0 |
| ignoreMetadata​Permissions | Boolean | Indicates whether to ignore the metadata permission during the data mapper execution (true) or elevate the metadata permission (false).The default value is false. | Optional | 64.0 |
| locale | String | Locale that's applied during the data mapper execution. | Optional | 64.0 |
| resetCache | Boolean | Indicates whether to reset the cache during the data mapper execution (true) or not (false).If set to true, data is fetched from the database instead of cache.The default value is false. | Optional | 64.0 |
| shouldIgnore​Commit | Boolean | Indicates whether to skip committing the transaction data to database (true)or not (false).The default value is true. | Optional | 64.0 |
| shouldSend​LegacyResponse | Boolean | Indicates whether response is displayed in the legacy Apex object format (true) or in generic format (false).The default value is false. | Optional | 64.0 |
| withoutSharing | Boolean | Indicates whether the Data Mapper must ignore the user sharing rules while executing the data (true) or not (false).The default value is false. | Optional | 64.0 |
---
title: "ConnectApi.EgressPropertiesInput"
domain: apex-reference
topic: connectapiegresspropertiesinput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:37.103Z
keywords: [ConnectApi.EgressPropertiesInput]
---

# ConnectApi.EgressPropertiesInput

# ConnectApi.EgressPropertiesInput

Represents the input details for egress properties of the activation target.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| childFolder | String | Path of the child folder. The child folder is created in the parent directory for copying activation files. | Optional | 60.0 |
| customFilename | String | Custom name of the output file. Either customFilename or predeterminedFilename must be present. | Optional | 60.0 |
| fileNameType | EgressFileNameTypeEnum | Type of egress file name.CustomPredetermined | Required | 60.0 |
| filenameDateSuffixFormat | String | Date suffix format for the output file name. Use the format yyyy-MM-dd-HH-mm-ss or yyyy-MM-dd-HH-mm-ss-SSS. | Required | 60.0 |
| isSubfolderCreationEnabled | Boolean | Indicates whether subfolder creation is enabled (true) or not (false). If true, a custom subfolder is created. The default is false. | Optional | 60.0 |
| outputCompressionFormat | CompressionFormatEnum | Compression format for the output file.Bzip2GzipNone-No compression | Required | 60.0 |
| outputDelimiter | FileDelimiterEnum | Field delimiter for the output file.BrokenPipeCaretColonCommaHashPipeSemicolonSlashTabTildeUnderscore | Required | 60.0 |
| outputFormat | String | Output format for the activation target. | Required | 60.0 |
| outputMaxFileSizeMegaBytes | Long | Maximum size of the output file in megabytes from 1 through 500. | Required | 60.0 |
| outputMaxRecordsPerFile | Long | Maximum number of records in the output file from 1 through 100000. | Required | 60.0 |
| predeterminedFilename | PreDeterminedFileNameEnum | Predetermined name of the output file. Either customFilename or predeterminedFilename must be present.ActivationSegmentSegmentActivation | Optional | 60.0 |
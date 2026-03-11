---
title: "ConnectApi.EgressPropertiesRepresentation"
domain: apex-reference
topic: connectapiegresspropertiesrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:38.617Z
keywords: [ConnectApi.EgressPropertiesRepresentation]
---

# ConnectApi.EgressPropertiesRepresentation

# ConnectApi.EgressPropertiesRepresentation

Represents the details for egress properties of the activation target.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| childFolder | String | Path of the child folder. | 60.0 |
| customFilename | String | Custom name of the output file. Either customFilename or predeterminedFilename must be present. | 60.0 |
| fileNameType | EgressFileNameTypeEnum | Type of egress file name.CustomPredetermined | 60.0 |
| filenameDateSuffixFormat | String | Date suffix format for the output file name. | 60.0 |
| isSubfolderCreationEnabled | Boolean | Indicates whether subfolder creation is enabled (true) or not (false). | 60.0 |
| outputCompressionFormat | CompressionFormatEnum | Compression format for the output file.Bzip2GzipNone-No compression | 60.0 |
| outputDelimiter | FileDelimiterEnum | Field delimiter for the output file.BrokenPipeCaretColonCommaHashPipeSemicolonSlashTabTildeUnderscore | 60.0 |
| outputFormat | String | Output format of the activation target. | 60.0 |
| outputMaxFileSizeMegaBytes | Long | Maximum size of the output file in megabytes. | 60.0 |
| outputMaxRecordsPerFile | Long | Maximum number of records in the output file. | 60.0 |
| predeterminedFilename | PreDeterminedFileNameEnum | Predetermined name of the output file. Either customFilename or predeterminedFilename must be present.ActivationSegmentSegmentActivation | 60.0 |
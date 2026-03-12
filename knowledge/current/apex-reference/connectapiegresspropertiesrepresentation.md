---
title: "ConnectApi.EgressPropertiesRepresentation"
domain: apex-reference
topic: connectapiegresspropertiesrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:27.086Z
estimatedTokens: 361
keywords: [ConnectApi.EgressPropertiesRepresentation, Represents, details, egress, activation, target.]
---

# ConnectApi.EgressPropertiesRepresentation

> Represents the details for egress properties of the activation target.

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

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- EgressFileNameTypeEnum (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
- CompressionFormatEnum (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- FileDelimiterEnum (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- Long (atlas.en-us.apexref.meta/apexref/apex_methods_system_long.htm)
- PreDeterminedFileNameEnum (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)

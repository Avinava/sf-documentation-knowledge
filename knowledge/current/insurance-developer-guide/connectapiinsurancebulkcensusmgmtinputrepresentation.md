---
title: "ConnectApi.InsuranceBulkCensusMgmtInputRepresentation"
domain: insurance-developer-guide
topic: connectapiinsurancebulkcensusmgmtinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.242Z
estimatedTokens: 294
keywords: [Input, representation, managing, employee, census, data, bulk]
---

# ConnectApi.InsuranceBulkCensusMgmtInputRepresentation

> Input representation for managing employee census data in bulk.

# ConnectApi.InsuranceBulkCensusMgmtInputRepresentation

Input representation for managing employee census data in bulk.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| batchSize | Integer | Number of records to process in each batch. | Optional | 65.0 |
| contentDocumentId | String | ID of the content document (CSV file) that contains the census data. | Required | 65.0 |
| contentDocumentVersionId | String | ID of the specific version of the content document. | Optional | 65.0 |
| csvColumnMapping | Map<String, String> | Map where the key is the CSV column header and the value is the API name of the corresponding field in the GroupCensusMember object. | Required | 65.0 |
| duplicateDetectionFields | List<String> | List of field API names that are used to generate a unique key for identifying duplicate members. | Optional | 65.0 |
| shouldExecuteConfigurationRule | Boolean | Indicates whether to execute the configuration rules after processing the data (true) or not (false).The default value is False. This property is applicable only for the census management enrollment API. | Optional | 65.0 |

---
title: "ConnectApi.EinsteinPromptRecordRepresentation"
domain: apex-reference
topic: connectapieinsteinpromptrecordrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:38.639Z
keywords: [ConnectApi.EinsteinPromptRecordRepresentation]
---

# ConnectApi.EinsteinPromptRecordRepresentation

# ConnectApi.EinsteinPromptRecordRepresentation

Prompt template record.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| apiName | String | API name of the prompt template record. | 62.0 |
| childRelationships | Map<String, ConnectApi.​EinsteinPrompt​RecordRepresentation> | Map of prompt template name and prompt template records that are versions of the prompt template. | 62.0 |
| fields | Map<String, ConnectApi.​EinsteinPrompt​RecordField​Representation> | Map of field name and prompt template record fields. | 62.0 |
| id | String | ID of the prompt template record. | 62.0 |
| isStandard | Boolean | Specifies whether the prompt template record is a standard prompt template (true) or user-created prompt template (false). | 62.0 |
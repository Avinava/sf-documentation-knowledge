---
title: "ConnectApi.ManagedContentDocumentInput"
domain: apex-reference
topic: connectapimanagedcontentdocumentinput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:37.264Z
keywords: [ConnectApi.ManagedContentDocumentInput]
---

# ConnectApi.ManagedContentDocumentInput

# ConnectApi.ManagedContentDocumentInput

Input representation for a piece of managed content.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| apiName | String | API name of the managed content. | Optional | 61.0 |
| contentBody | ConnectApi.​ManagedContent​BodyInput | Body of the managed content. | Required | 60.0 |
| contentKey | String | Content key to assign to the managed content. A content key is a universally unique identifier (UUID) such as MCA4CCV5QS2BAB5H7YRCRPTCWGZQ. | Optional | 60.0 |
| contentSpaceOr​FolderId | String | Content space or folder ID where the content is created. | Required | 60.0 |
| contentType | String | Fully qualified name of the content type to create.If you’re uploading a binary file using a multipart/form-data message, contentType must be sfdc_cms__image or sfdc_cms__doc.You can't create a Form using sfdc_cms__form. The sfdc_cms__form content type isn't supported. | Required | 60.0 |
| externalId | String | External ID of the managed content. | Optional | 60.0 |
| title | String | Title of the managed content. | Required | 60.0 |
| urlName | String | URL name of the managed content within the org. | Optional | 60.0 |
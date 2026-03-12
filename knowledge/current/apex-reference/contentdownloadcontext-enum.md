---
title: "ContentDownloadContext Enum"
domain: apex-reference
topic: contentdownloadcontext-enum
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:29.556Z
estimatedTokens: 307
keywords: [ContentDownloadContext, specifies, download, context., Usage, Values]
---

# ContentDownloadContext Enum

> This enum specifies the download context.

# ContentDownloadContext Enum

This enum specifies the download context.

## Usage

If the operationContext is CONTENT, CHATTER, DELIVERY, S1, or MOBILE, it can be used in a shepherd servlet as a query parameter. It’s possible for a user to change the query parameters. If a user enters a value other than CONTENT, CHATTER, DELIVERY, S1, or MOBILE, the value is treated as the default value CONTENT.

Users can’t set query parameters to REST\_API, SOQL, or RETRIEVE, so these values can be assumed to be accurate.

## Enum Values

The Sfc.ContentDownloadContext enum value identifies the content download context. The enum value is provided as a query parameter in the file download servlet. The following are the values of the Sfc.ContentDownloadContext enum.

| Value | Description |
| --- | --- |
| CHATTER | Download from Chatter. |
| CONTENT | Default value. Downloads from the Salesforce CRM Content product. |
| DELIVERY | Download of a content delivery. |
| REST_API | Download from the Connect API (/connect/files/${fileId}/content endpoint). Used in both Android and iOS apps. |
| RETRIEVE | Retrieve VersionData from SObject API. |
| S1 | Download from Lightning Experience. |
| SOQL | Select VersionData from SOQL. |

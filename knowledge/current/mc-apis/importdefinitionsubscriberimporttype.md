---
title: "ImportDefinitionSubscriberImportType"
domain: mc-apis
topic: importdefinitionsubscriberimporttype
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:17.615Z
estimatedTokens: 137
keywords: [ImportDefinitionSubscriberImportType, imported, subscriber, SMS, email, application, imports, subscribers]
---

> The ImportDefinitionSubscriberImportType object specifies if imported subscriber information is for use with SMS or email sends. If this property is not specified, the application indicates the imports as email subscribers.

# ImportDefinitionSubscriberImportType

The ImportDefinitionSubscriberImportType object specifies if imported subscriber information is for use with SMS or email sends. If this property is not specified, the application indicates the imports as email subscribers.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| Email | Enumeration | Default email address for object. Indicates if subscriber information can be used for email sends. |
| SMS | Enumeration | Indicates if subscriber information can be used for SMS sends. |

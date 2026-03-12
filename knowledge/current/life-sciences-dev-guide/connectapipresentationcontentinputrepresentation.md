---
title: "ConnectApi.PresentationContentInputRepresentation"
domain: life-sciences-dev-guide
topic: connectapipresentationcontentinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:42.033Z
estimatedTokens: 145
keywords: [Input, representation, creating, updating, presentation, content]
---

# ConnectApi.PresentationContentInputRepresentation

> Input representation for creating or updating presentation
            content.

# ConnectApi.PresentationContentInputRepresentation

Input representation for creating or updating presentation content.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| contentType | String | Type of content, such as:PRESENTATION_PDFPRESENTATION_ZIPPRESENTATION_PAGE | 65.0 |
| pages | List<ConnectApi.PageRepresentation> | List of presentation pages and their associated metadata. | 65.0 |
| presentation | ConnectApi.PresentationRepresentation | Representation of the presentation, including its name, ID, and other properties. | 65.0 |

---
title: "FileType"
domain: mc-apis
topic: filetype
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:17.027Z
estimatedTokens: 146
keywords: [FileType, files, imports]
---

> The FileType object contains the types of files that are supported for imports.

# FileType

The FileType object contains the types of files that are supported for imports.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| CSV | Enumeration | The import file is formatted as in a CSV format. The results of executing a QueryDefinition are in a CSV format. |
| Other | Enumeration | Indicates another delimiter besides a comma or a tab for an imported file.You must specify the delimiter property in order to use this property. |
| TAB | Enumeration | Indicates that the information contained within an imported file is delimited by tabs. |

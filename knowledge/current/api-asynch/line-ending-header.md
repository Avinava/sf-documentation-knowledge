---
title: "Line Ending Header"
domain: api-asynch
topic: line-ending-header
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:59.041Z
estimatedTokens: 129
keywords: [Line, Ending, Sforce-Line-Ending, optionally, specify, break, how, endings, formatted]
---

# Line Ending Header

> Use the Sforce-Line-Ending header to specify how
  line endings are formatted.

# Line Ending Header

Use the Sforce-Line-Ending header to specify how line endings are formatted.

When you create a Bulk API 2.0 job, specify a line ending that matches the line ending used to create the CSV file using the lineEnding request field. Bulk API 2.0 supports two line-ending formats:

-   LF linefeed
-   CRLF carriage-return plus linefeed

The default line ending, if not specified, is LF. Different operating systems use different characters to mark the end of a line.

Unix / Linux / OS X uses LF (line feed, ' ', 0x0A).

Windows / DOS uses CRLF (carriage return followed by line feed, '\\r ', 0x0D0A).

For example,

```

```

Note that it’s possible that the text editor used to create the CSV file is configured for a specific line-ending format and might supersede the default operating system format.

## Code Examples

```
{
    "object" : "Account",
    "contentType" : "CSV",
    "operation" : "insert",
    "lineEnding" : "LF"
}
```

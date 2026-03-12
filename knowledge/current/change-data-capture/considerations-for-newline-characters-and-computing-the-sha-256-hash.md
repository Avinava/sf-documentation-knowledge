---
title: "Considerations for Newline Characters and Computing the SHA-256
      Hash"
domain: change-data-capture
topic: considerations-for-newline-characters-and-computing-the-sha-256-hash
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:34:09.517Z
estimatedTokens: 305
keywords: [Considerations, Newline, Characters, Computing, SHA-256, Hash, content, Salesforce, uses, generate, transformed, browser, browsers, transform, record]
---

# Considerations for Newline Characters and Computing the SHA-256
      Hash

> The content that Salesforce uses to generate the SHA-256 hash might have newline
    characters transformed by the browser. Many browsers transform newline characters to \r
 in record field values before records are stored in
    Salesforce. Also, Salesforce trims leading and trailing white spaces in field
    values.

# Considerations for Newline Characters and Computing the SHA-256 Hash

The content that Salesforce uses to generate the SHA-256 hash might have newline characters transformed by the browser. Many browsers transform newline characters to \\r in record field values before records are stored in Salesforce. Also, Salesforce trims leading and trailing white spaces in field values.

Before you generate the SHA-256 hash value, ensure that the reconstructed content from the diff contains the same newline characters as the original content and that no new leading or trailing white spaces are added. For example, when you save the content in a file, the operating system can add a trailing white space character.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=change_data_capture)

#### Note

If you used the API to create or update field values, the newline characters supplied by the application are honored and stored in Salesforce without further transformations.

Windows systems represent the newline character as a carriage return and line-feed character sequence (\\r ). UNIX and UNIX-based systems, like macOS and Linux, represent the newline character as a line-feed character ( ).

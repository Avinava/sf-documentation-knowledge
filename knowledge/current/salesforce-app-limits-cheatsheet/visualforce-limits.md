---
title: "Visualforce Limits"
domain: salesforce-app-limits-cheatsheet
topic: visualforce-limits
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:41.220Z
estimatedTokens: 411
keywords: [Visualforce, Limits]
---

# Visualforce Limits

# Visualforce Limits

| Limit | Value |
| --- | --- |
| Maximum response size for a Visualforce page | Less than 15 MB |
| Maximum view state size in a Visualforce page | 170KB |
| Maximum size of a Visualforce email template | 1 MB |
| Maximum file size for a file uploaded using a Visualforce page | 10 MB |
| Maximum size of HTML response before rendering, when Visualforce page is rendered as PDF | Less than 15 MB |
| Maximum PDF file size for a Visualforce page rendered as a PDF | 60 MB |
| Maximum total size of all images included in a Visualforce page rendered as a PDF | 30 MB |
| Maximum header size of a Visualforce page | 8,192 bytes |
| Maximum request size of a JavaScript remoting call | 4 MB |
| Default timeout for a JavaScript remoting call | 30,000 milliseconds (30 seconds) |
| Maximum timeout for a JavaScript remoting call | 120,000 milliseconds (120 seconds) |
| Maximum rows retrieved by queries for a single Visualforce page request | 50,000 |
| Maximum rows retrieved by queries for a single Visualforce page request in read-only mode | 1,000,000 |
| Maximum collection items that can be iterated in an iteration component such as <apex:pageBlockTable> and <apex:repeat> | 1,000 |
| Maximum collection items that can be iterated in an iteration component such as <apex:pageBlockTable> and <apex:repeat> in read-only mode | 10,000 |
| Maximum field sets that can be displayed on a single Visualforce page. | 50 |
| Maximum field sets allowed per sObject. | 2,000 |
| Maximum fields through lookup relationships allowed per field set. | 25 |
| Maximum records that can be handled by StandardSetController | 10,000 |

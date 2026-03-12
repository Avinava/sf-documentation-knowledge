---
title: "Document Your Responses to False Positives"
domain: packagingGuide
topic: document-your-responses-to-false-positives
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:21.213Z
estimatedTokens: 457
keywords: [Document, Responses, Positives, often, appear, Source, Code, Scanner, Checkmarx, ZAP, Burp, Suite, results, occasionally, show]
---

# Document Your Responses to False Positives

> Most often, false positives appear in Source Code Scanner (Checkmarx), ZAP, or Burp
    Suite scanner results. False positives occasionally show up in Salesforce security review
    failure reports. In either case, you can improve your likelihood of passing security review by
    including a false-positive explanatory document when you submit your code.

# Document Your Responses to False Positives

Most often, false positives appear in Source Code Scanner (Checkmarx), ZAP, or Burp Suite scanner results. False positives occasionally show up in Salesforce security review failure reports. In either case, you can improve your likelihood of passing security review by including a false-positive explanatory document when you submit your code.

Use our [False Positive Documentation template](https://docs.google.com/document/d/1_BcwGdfvkLCrDc2PZfb5VBwe7ooYOEzQ/edit) to provide your responses. For each flagged issue, include:

-   Location–State the code location of the reported vulnerability.
-   Explanation–Explain why the flagged code doesn’t pose a vulnerability.

In addition to providing rationales for false positives, include in your documentation explanations that clarify special use cases, circumstances, or exceptions.

Some categories of security scan results are false positives that don’t require documentation or code reworking. These categories exist in most of the security scanners that we accept for security review. Other scan results fall into severity categories that require attention because they highlight known security vulnerabilities. If you can’t submit justifiable false positive documentation, rework the flagged code to meet security standards.

| Scanner | Scan Results Requiring Attention for Security Review | Scan Results Not Requiring Attention |
| --- | --- | --- |
| Source Code Scanner (Checkmarx) | All issues regardless of severity level that aren’t labeled “Code Quality” | Issues labeled “Code Quality” |
| ZAP, Burp Suite or any other DAST scanner | Issues categorized as critical and high-severity | Action on low and medium severity issues isn’t required, but investigation into whether they pose a security threat is encouraged |

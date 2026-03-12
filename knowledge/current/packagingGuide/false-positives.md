---
title: "False Positives"
domain: packagingGuide
topic: false-positives
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:21.232Z
estimatedTokens: 469
keywords: [Positives, navigate, AppExchange, security, review, process, you're, likely, encounter, positive, issues, solution, occurs, security-scanning, tool]
---

# False Positives

> As you navigate the AppExchange security review process, you're likely to encounter
      false positive issues with your solution. A false positive occurs when a
    security-scanning tool or code reviewer flags code that appears to pose a security vulnerability
    but actually doesn’t. Instead, the flagged vulnerability is nonexistent, nonexploitable, or not
    required to support a valid use case or functionality.

# False Positives

As you navigate the AppExchange security review process, you're likely to encounter false positive issues with your solution. A false positive occurs when a security-scanning tool or code reviewer flags code that appears to pose a security vulnerability but actually doesn’t. Instead, the flagged vulnerability is nonexistent, nonexploitable, or not required to support a valid use case or functionality.

Improve your likelihood of passing an initial or follow-up security review by addressing false positives in your submission. Include a document that explains why each flagged false positive doesn’t pose a security risk.

-   **[Document Your Responses to False Positives](atlas.en-us.packagingGuide.meta/packagingGuide/security_review_document_responses.htm)**
    Most often, false positives appear in Source Code Scanner (Checkmarx), ZAP, or Burp Suite scanner results. False positives occasionally show up in Salesforce security review failure reports. In either case, you can improve your likelihood of passing security review by including a false-positive explanatory document when you submit your code.
-   **[Example Responses to False Positives in Checkmarx Scan Results](atlas.en-us.packagingGuide.meta/packagingGuide/security_review_example_checkmarx_scan.htm)**
    The following example shows how to document your responses to false positives resulting from a Checkmarx scan. The example is in tabular format, but you can use whatever format suits the reporting of your information.
-   **[Example Responses to False Positives in a Security Review Failure Report](atlas.en-us.packagingGuide.meta/packagingGuide/security_review_example_failure_report.htm)**
    The following example shows how to document your responses to false positives listed in a Salesforce security review failure report. It’s written to support a retest submission.

## Related Topics

- Document Your Responses to False Positives (atlas.en-us.packagingGuide.meta/packagingGuide/security_review_document_responses.htm)
- Example Responses to False Positives in Checkmarx Scan Results (atlas.en-us.packagingGuide.meta/packagingGuide/security_review_example_checkmarx_scan.htm)
- Example Responses to False Positives in a Security Review Failure Report (atlas.en-us.packagingGuide.meta/packagingGuide/security_review_example_failure_report.htm)

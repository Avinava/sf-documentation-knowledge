---
title: "Example Responses to False Positives in Checkmarx Scan Results"
domain: packagingGuide
topic: example-responses-to-false-positives-in-checkmarx-scan-results
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:21.223Z
estimatedTokens: 406
keywords: [Responses, Positives, Checkmarx, Scan, Results, how, document, resulting, tabular, whatever, suits, reporting]
---

# Example Responses to False Positives in Checkmarx Scan Results

> The following example shows how to document your responses to false positives resulting
    from a Checkmarx scan. The example is in tabular format, but you can use whatever format suits
    the reporting of your information.

# Example Responses to False Positives in Checkmarx Scan Results

The following example shows how to document your responses to false positives resulting from a Checkmarx scan. The example is in tabular format, but you can use whatever format suits the reporting of your information.

| Reported Vulnerability | Location | Response |
| --- | --- | --- |
| FLS Update | Paths 1–17 | We implemented and called the AuthManager class to check these paths for us or throw an error. You can see that in ControllerFile.cls on lines 241, 245, and 249. |
| FLS Update | Paths 18–24 | Have been fixed and are valid. |
| FLS Update | Paths 25, 26, and 30 | Are against our custom object UsageLog__c and not intended for user consumption. They are never exposed to users directly. |
| FLS Update | Paths 27–29 | Must update the Account.NumberRelatedIssues__c field to appropriately count the new object created, irrespective of user input. |
| Sharing Violation | BatchCleanData.cls | We minimized the functions that this class calls to only the minimum set that requires without sharing. |
| Sharing Violation | LightningController.cls | Changed declaration to with sharing. |
| Sharing Violation | GlobalIssueReporting.cls | Changed to useinherited sharing because we don't know which context our calling class requires. |
| Stored XSS | Issue.page file: paths 1–3 | reportIssueList is a list of objectID + ' ' + integers. It poses no XSS risk. |
| Stored XSS | Issue.page file: path 4 | Fixed by removing escape=”false”. |
| Stored XSS | Issue.page | We sanitized usageLog in JavaScript using the Salesforce SecureFilters library. |

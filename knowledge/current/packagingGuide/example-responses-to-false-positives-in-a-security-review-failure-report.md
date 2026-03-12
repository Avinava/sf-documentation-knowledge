---
title: "Example Responses to False Positives in a Security Review Failure Report"
domain: packagingGuide
topic: example-responses-to-false-positives-in-a-security-review-failure-report
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:21.226Z
estimatedTokens: 390
keywords: [Responses, Positives, Security, Review, Failure, Report, how, document, listed, Salesforce, It’s, written, support, retest, submission]
---

# Example Responses to False Positives in a Security Review Failure Report

> The following example shows how to document your responses to false positives listed in a
  Salesforce security review failure report. It’s written to support a retest
  submission.

# Example Responses to False Positives in a Security Review Failure Report

The following example shows how to document your responses to false positives listed in a Salesforce security review failure report. It’s written to support a retest submission.

| Reported Vulnerability | Location | Response |
| --- | --- | --- |
| Insecure Software Version | jQueries | Updated. |
| Insecure Software Version | moment.js | No user input flows into moment parsing. User input flows only to Salesforce Date fields. |
| Insecure Storage of Sensitive Data | UserConfig_c.object | The apiKey__c field is encrypted before setting with the encryption key, which is stored in a protected custom setting. |
| Insecure Storage of Sensitive Data | IssueInvite_c.object | The password__c field is a support-agent selected password to share resources publicly with the internet. It’s not a user-owned secret. |
| Insecure Storage of Sensitive Data | APIManagement_c.object | We deprecated this custom setting, but it’s impossible to delete custom setting definitions from managed packages. |
| Insecure Storage of Sensitive Data | AuthManager.cls | The credentials in comments are only example credentials. They do not authenticate to any development or production system. |
| Stored XSS | https://content.saslesforce.partner.com | We spoke to Jane Doe at Salesforce during office hours on Feb. 1, 2020. This URL is linked to a nonsensitive content domain. The URL has no session data to access back-end information. We were told that this finding could be a false positive. |

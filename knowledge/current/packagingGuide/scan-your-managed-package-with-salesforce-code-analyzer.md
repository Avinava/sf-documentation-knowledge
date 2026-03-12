---
title: "Scan Your Managed Package with Salesforce Code Analyzer"
domain: packagingGuide
topic: scan-your-managed-package-with-salesforce-code-analyzer
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:21.206Z
estimatedTokens: 821
keywords: [Scan, Managed, Package, Salesforce, Code, Analyzer, AppExchange, partner, submitting, security, review, provide, test, results, solution’s]
---

# Scan Your Managed Package with Salesforce Code Analyzer

> As an AppExchange partner submitting your managed package for security review, you must
    scan it with the Salesforce Code Analyzer and provide test results in your solution’s
    AppExchange Security Review submission. This scan is in addition to the scan that you must
    complete using the Source Code Scanner, also referred to as the Checkmarx scanner.

# Scan Your Managed Package with Salesforce Code Analyzer

As an AppExchange partner submitting your managed package for security review, you must scan it with the Salesforce Code Analyzer and provide test results in your solution’s AppExchange Security Review submission. This scan is in addition to the scan that you must complete using the Source Code Scanner, also referred to as the Checkmarx scanner.


| User Permissions Needed |
| --- |
| To access the Partner Community, Partner Console, and AppExchange Security Review: | Manage Listings |

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=packagingGuide)

#### Tip

When you submit your code and scan report to the AppExchange Security Review, it's not necessary for the scans to be 100% passing. The main requirement is that you run the scans, address all the violations you can fix, re-run the scans, and then submit the report. Some violations, like false positives, may not be fixable. The AppExchange Security team understands these situations and adjusts their review accordingly.

Prerequisites:

-   You use Salesforce CLI commands to generate the AppExchange Security Review. See [Install the Code Analyzer Plugin into Salesforce CLI](https://developer.salesforce.com/docs/platform/salesforce-code-analyzer/guide/analyze.html#install-the-code-analyzer-plugin-into-salesforce-cli) to learn how to install the necessary software on your computer.

1.  Store your managed package's code locally on your computer. Ensure that the code version matches the package you’re submitting for security review.
2.  In Terminal or your favorite command-line interface, change to the top-level directory of your package's code.
3.  Run this command to scan your code using the required rules. The command generates an HTML report with the results.

    ```

    ```

    Depending on the complexity of your codebase, the scan of your code can take a few hours.

4.  Fix any issues that Code Analyzer identifies.
5.  Rescan using the same command and save your HTML report file.
6.  [Document](atlas.en-us.packagingGuide.meta/packagingGuide/security_review_false_positives.htm "As you navigate the AppExchange security review process, you're likely to encounter false positive issues with your solution. A false positive occurs when a security-scanning tool or code reviewer flags code that appears to pose a security vulnerability but actually doesn’t. Instead, the flagged vulnerability is nonexistent, nonexploitable, or not required to support a valid use case or functionality.") any false positives.
7.  Upload your clean CodeAnalyzerReport.html file to your security-review submission.
8.  If you have false-positive documentation, upload that too.

If you’re unable to run the Code Analyzer CLI commands successfully, read the [Salesforce Code Analyzer documentation](https://developer.salesforce.com/docs/platform/salesforce-code-analyzer/guide/get-started.html "HTML (New Window)"). If you still need help, log an issue in the [Salesforce Code Analyzer GitHub repository](https://github.com/forcedotcom/code-analyzer/issues/new/choose "HTML (New Window)"), and provide information about the errors that you encountered when generating the scan report for your security-review submission.

## Code Examples

```
sf code-analyzer run --rule-selector AppExchange --rule-selector Recommended:Security --output-file CodeAnalyzerReport.html
```

## Related Topics

- Document (atlas.en-us.packagingGuide.meta/packagingGuide/security_review_false_positives.htm)

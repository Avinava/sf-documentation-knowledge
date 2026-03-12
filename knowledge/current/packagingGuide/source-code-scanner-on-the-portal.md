---
title: "Source Code Scanner on the Portal"
domain: packagingGuide
topic: source-code-scanner-on-the-portal
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:21.287Z
estimatedTokens: 859
keywords: [Source, Code, Scanner, Portal, identify, security, vulnerabilities, require, run, scanning, tools, solution, external, endpoints, independently]
---

# Source Code Scanner on the Portal

> To identify security vulnerabilities, we require that you run security scanning tools on
  your solution and all external endpoints that run independently of the Salesforce platform. he
  Partner Security Portal hosts the Source Code Scanner (Checkmarx).

# Source Code Scanner on the Portal

To identify security vulnerabilities, we require that you run security scanning tools on your solution and all external endpoints that run independently of the Salesforce platform. he Partner Security Portal hosts the Source Code Scanner (Checkmarx).


| User Permissions Needed |
| --- |
| To access the Source Code Scanner (Checkmarx) on the Partner Security Portal: | Author Apex |

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=packagingGuide)

#### Tip

We strongly recommend that you run security scans on your code and any connected endpoints throughout the development lifecycle. Run periodic scans and fix flagged issues as you go to prevent security vulnerabilities from piling up and creating more work for you later.

The Source Code Scanner (Checkmarx) checks Apex, Visualforce, and Lightning code, but doesn’t check external endpoints of a solution. To scan external endpoints, use any Dynamic Application Security Test (DAST) scanner that you prefer, such as ZAP, Burp Suite, HCL AppScan or WebInspect.

Just before you submit your solution, except for mobile clients and API solutions, run the Source Code Scanner in the Partner Security Portal. If your solution connects to any non-Salesforce domains, also run a DAST scan on the external endpoints. Include reports from your scans when you submit your solution for security review.

The Source Code Scanner (Checkmarx) is a static code analysis tool used to scan Apex, Visualforce, and Lightning code for security vulnerabilities. There are a few things to keep in mind when using this scanner.

-   You’re required to include Source Code Scanner (Checkmarx) scanner reports in any security review submission that includes a Salesforce package or component. They’re not required for mobile clients or API solutions.
-   Three runs per solution version are included in the security review fee. Consider running an alternative tool as you develop, such as the open-source PMD Source Code Analyzer, and the Source Code Scanner as you finalize your submission. Reserve your three runs to create the scanner report that you include in your security review submission.
-   If you want the flexibility and freedom to scan unpackaged code, or bypass scan limits and package linking requirements, purchase a license from Checkmarx.
-   Before you can scan a package version with the Source Code Scanner, you must link the version to an AppExchange listing.

#### See Also

-   [Create Your AppExchange Listing](atlas.en-us.packagingGuide.meta/packagingGuide/appexchange_publish_listings.htm "Market your solution or consulting service to Salesforce customers with a listing on AppExchange. Use the Listing Builder in the Partner Console to create a listing that stands out to customers.")

-   [Test Your Entire Solution](atlas.en-us.packagingGuide.meta/packagingGuide/security_review_test_all.htm "Test the full scope of your solution using manual testing and automated security scanner tools. When you perform security scans, include all external endpoints that run independently of the Salesforce platform. Document false-positive security violations, and fix all code that doesn’t meet Salesforce security guidelines.")

-   [Zed Attack Proxy (ZAP)](https://www.zaproxy.org/ "Zed Attack Proxy (ZAP) - HTML (New Window)")

-   [Burp Suite](https://portswigger.net/burp "Burp Suite - HTML (New Window)")

## Related Topics

- Create Your AppExchange Listing (atlas.en-us.packagingGuide.meta/packagingGuide/appexchange_publish_listings.htm)
- Test Your Entire Solution (atlas.en-us.packagingGuide.meta/packagingGuide/security_review_test_all.htm)

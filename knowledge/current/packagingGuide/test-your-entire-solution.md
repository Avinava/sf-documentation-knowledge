---
title: "Test Your Entire Solution"
domain: packagingGuide
topic: test-your-entire-solution
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:21.373Z
estimatedTokens: 1910
keywords: [Test, Entire, Solution, full, scope, manual, testing, automated, security, scanner, tools, perform, scans, include, external]
---

# Test Your Entire Solution

> Test the full scope of your solution using manual testing and automated security scanner
  tools. When you perform security scans, include all external endpoints that run independently of
  the Salesforce platform. Document false-positive security violations, and fix all code that
  doesn’t meet Salesforce security guidelines.

# Test Your Entire Solution

Test the full scope of your solution using manual testing and automated security scanner tools. When you perform security scans, include all external endpoints that run independently of the Salesforce platform. Document false-positive security violations, and fix all code that doesn’t meet Salesforce security guidelines.

## Testing Scope

Test all pieces of the solution that you submit for security review. Ensure that the solution architecture is secure, including endpoints that aren’t hosted on the Salesforce platform. Your attention to all components and layers of your solution helps minimize the risk of hackers or malware exploiting potential entry points.

The full scope of your solution is subject to security review testing. For example, we can perform pen tests that attack your Developer Edition test org and attempt to access sensitive data or authenticate with false credentials.

To determine testing scope, use a follow-the-data approach. Wherever the customer or data goes is in scope. For example, your Salesforce customer is required to log in to your company website, or data is synced to a third-party server. Test these pieces to ensure that they’re securely transferring credentials and data.

External endpoints are within the scope of the security review and a required part of your security testing when either of these criteria are true.

-   The endpoint plays a role in authenticating the end user as part of buying, getting support for, or using your solution. This definition includes a connected app that doesn’t require manual credential entry.
-   Salesforce data is transferred to or from the endpoint.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=packagingGuide)

#### Important

Before you perform security testing on external endpoints that you don’t own, complete two actions. First, obtain any necessary permission to perform security testing from the third parties that own the external endpoints. Second, follow the guidelines in [Salesforce IP Addresses & Domains to Allow](https://help.salesforce.com/articleView?id=000321501&type=1&mode=1&language=en_US "HTML (New Window)").

## Automated Scanning Tools

To identify security vulnerabilities in your solution and external endpoints, we require that you run specific automated security scanning tools.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=packagingGuide)

#### Tip

We strongly recommend that you run security scans on your code and any connected endpoints throughout the development lifecycle. Run periodic scans and fix flagged issues as you go to prevent security vulnerabilities from piling up and creating more work for you later.

To distribute managed packages, Salesforce Platform API solutions, or Marketing Cloud Engagement API solutions on AppExchange, they must pass our security review. If your solution is a managed package, you’re required to scan it using Salesforce Code Analyzer and submit comprehensive scan results in the AppExchange Security Review Wizard. If you’re unable to use Code Analyzer, you must provide a clear justification for why you didn’t run Code Analyzer on your code.

If your solution isn’t a managed package, or you choose not to use Code Analyzer, you can access the Source Code Scanner, sometimes referred to as the Checkmarx scanner, on the Partner Security Portal.

This table summarizes the automated security scanner tools that we require or recommend.

| Security Scanner Tool | Scan Targets | Considerations | Results Accepted with Submission | Hosted on the Partner Security Portal |
| --- | --- | --- | --- | --- |
| Salesforce Code Analyzer | Apex, JavaScript, Lightning, TypeScript, and Visualforce code | Salesforce Code Analyzer unifies scanning tools, such as ESLint, JavaScript, PMD, Retire JS, and Salesforce Graph Engine, in one easy-to-install Salesforce CLI plug-in. Salesforce Graph Engine in particular helps detect create, read, update, and delete and field-level security (CRUD/FLS) violations.You can install Salesforce Code Analyzer on a local development machine or integrate it into a continuous integration (CI) process.Salesforce Code Analyzer includes customized rules to scan Lightning Web Component JavaScript.Salesforce Code Analyzer doesn’t scan external endpoints.Salesforce Code Analyzer offers multiple output formats: CSV, HTML, JSON, and JUnit. | Yes | No |
| Source Code Scanner (Checkmarx) | Apex, Visualforce, and Lightning code | This static scanning tool uses Checkmarx security technology.You must provide a Checkmarx scan for any security review submission that includes a Salesforce package or component. These scans aren’t required for mobile clients or API solutions.You’re provisioned three Source Code Scanner runs per package version with the security review fee.If you want the flexibility and freedom to scan unpackaged code, or to bypass the three-scan limit and package linking requirements, purchase a license from Checkmarx. | Yes | Yes |
| PMD Source Code Analyzer | Apex code | The PMD scanner is a free, open-source tool that is also available as a VS Code Extension.This tool is an alternative to the Source Code Scanner for solutions that contain Apex code.As you prepare your solution for security review, and as a supplement to the Source Code scanner, run PMD scans an unlimited number of times.PMD typically reports more false positives than the Source Code Scanner tool. | No | No |
| Zed Attack Proxy (ZAP), Burp Suite, and DAST scanner | External endpoints | Set up your API client or browser to route traffic through the DAST scanner tool's proxy to capture and analyze requests and responses.Exercise relevant API endpoints or web services while the DAST scanner tool is running as a proxy to help it discover the full attack surface.Select the recorded endpoints in the tool and run an active scan to simulate real attacks and identify vulnerabilities.Use the tool's interface to manually intercept, modify, or fuzz requests for deeper testing.Export a full report after the scan, including the scan date, targeted endpoints, and all findings.See helpful resources:ZAP Scanner GuidancePartner Security Portal FAQs | Yes | No |

#### See Also

-   [Secure Coding: Field-Level Security, CRUD, and Sharing](https://www.youtube.com/watch?v=1ZYjpjPTIn8 "Secure Coding: Field-Level Security, CRUD, and Sharing - HTML (New Window)")

-   [Source Code Scanner on the Portal](atlas.en-us.packagingGuide.meta/packagingGuide/security_review_partner_security_portal_scanners.htm "To identify security vulnerabilities, we require that you run security scanning tools on your solution and all external endpoints that run independently of the Salesforce platform. he Partner Security Portal hosts the Source Code Scanner (Checkmarx).")

-   [False Positives](atlas.en-us.packagingGuide.meta/packagingGuide/security_review_false_positives.htm "As you navigate the AppExchange security review process, you're likely to encounter false positive issues with your solution. A false positive occurs when a security-scanning tool or code reviewer flags code that appears to pose a security vulnerability but actually doesn’t. Instead, the flagged vulnerability is nonexistent, nonexploitable, or not required to support a valid use case or functionality.")

-   [PMD Source Code Analyzer Project Apex Rules](https://pmd.github.io/latest/pmd_rules_apex.html "PMD Source Code Analyzer Project Apex Rules - HTML (New Window)")

-   [Zed Attack Proxy (ZAP)](https://www.zaproxy.org/ "Zed Attack Proxy (ZAP) - HTML (New Window)")

## Related Topics

- Source Code Scanner on the Portal (atlas.en-us.packagingGuide.meta/packagingGuide/security_review_partner_security_portal_scanners.htm)
- False Positives (atlas.en-us.packagingGuide.meta/packagingGuide/security_review_false_positives.htm)

---
title: "Using Software That Has Known Vulnerabilities"
domain: packagingGuide
topic: using-software-that-has-known-vulnerabilities
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:21.174Z
estimatedTokens: 428
keywords: [Software, Known, Vulnerabilities, documented, common, exposures, CVE, cases, security, vulnerability, solution, test, deploy, patches, soon]
---

# Using Software That Has Known Vulnerabilities

> Using software that has documented common vulnerabilities and exposures (CVE) related
    to your use cases is a security vulnerability. If your solution has known vulnerabilities, test
    and deploy security patches as soon as they’re available. If your solution uses software that
    has CVE-documented vulnerabilities unrelated to your use cases, prepare false positive
    documentation.

# Using Software That Has Known Vulnerabilities

Using software that has documented common vulnerabilities and exposures (CVE) related to your use cases is a security vulnerability. If your solution has known vulnerabilities, test and deploy security patches as soon as they’re available. If your solution uses software that has CVE-documented vulnerabilities unrelated to your use cases, prepare false positive documentation.

Hackers are quick to attack disclosed software vulnerabilities. Most vendors provide patches or updates for vulnerabilities discovered in their software. To find out if your solution uses software with known vulnerabilities, check the [Common Vulnerabilities and Exposures (CVE) database](https://www.cvedetails.com/ "HTML (New Window)").

Apply all patches or updates related to your solution’s use cases. If the vulnerabilities are unrelated to your use cases, and you’re preparing the solution for the AppExchange security review, document them as false positives. Explain why it's safe for your solution to use the vulnerable software. Our security review team uses this information when deciding whether to approve the software for use in your solution. Learn more in [False Positives](atlas.en-us.packagingGuide.meta/packagingGuide/security_review_false_positives.htm "As you navigate the AppExchange security review process, you're likely to encounter false positive issues with your solution. A false positive occurs when a security-scanning tool or code reviewer flags code that appears to pose a security vulnerability but actually doesn’t. Instead, the flagged vulnerability is nonexistent, nonexploitable, or not required to support a valid use case or functionality.").

## Related Topics

- False Positives (atlas.en-us.packagingGuide.meta/packagingGuide/security_review_false_positives.htm)

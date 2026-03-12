---
title: "Submit Your Solution for a Follow-Up AppExchange Security Review"
domain: packagingGuide
topic: submit-your-solution-for-a-follow-up-appexchange-security-review
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:21.356Z
estimatedTokens: 1491
keywords: [Submit, Solution, Follow-Up, AppExchange, Security, Review, team, found, vulnerabilities, isn’t, approved, distribution, It’s, result, hoped]
---

# Submit Your Solution for a Follow-Up AppExchange Security Review

> The security review of your solution is complete, but our security team found security
  vulnerabilities. Your solution isn’t approved for distribution on AppExchange. It’s not the result
  that you hoped for, but you’re in good company. Many solutions don’t pass on the first try. Fix
  the vulnerabilities, and submit your solution for a follow-up review.

# Submit Your Solution for a Follow-Up AppExchange Security Review

The security review of your solution is complete, but our security team found security vulnerabilities. Your solution isn’t approved for distribution on AppExchange. It’s not the result that you hoped for, but you’re in good company. Many solutions don’t pass on the first try. Fix the vulnerabilities, and submit your solution for a follow-up review.

The security review report lists the types of security vulnerabilities that Product Security found. For each vulnerability type, the report includes:

-   A specific example from your solution
-   Steps to reproduce the issue
-   Links to documentation or comments about how to fix the issue

Our goal is to find as many different types of vulnerabilities as possible, but keep in mind that the security review is a black-box, time-limited process. We can’t always list every instance of a security vulnerability, and it’s possible that we don’t initially detect all issue types. Interpret the security review findings as representative examples of the types of issues you must fix. Unless otherwise noted in the report, you’re required to fix all classes of issues across the entire solution.

We’re available to help you analyze the findings and troubleshoot security vulnerabilities. Schedule a technical office hours appointment on the [Partner Security Portal](https://sfdc.co/portal "HTML (New Window)").

As you revise your solution, fix only the security issues discovered in the review and the code in the existing package. If you make other revisions, such as functionality changes, we require that the revised solution goes through an initial security review. That’s also the case if you spin up a new package for the revised code.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=packagingGuide)

#### Important

If the package ID and namespace don’t change, your resubmission qualifies for a follow-up review.

After you fix the solution, collect the materials necessary for us to complete a follow-up review. Rerun the required scanner tools on your revised solution and generate updated scan reports. If you fixed issues in your managed package, provide updated Source Scanner results. If you fixed issues detected on an external endpoint, provide updated Dynamic Application Security Test (DAST) scan reports. If applicable, [document your responses to false positives](atlas.en-us.packagingGuide.meta/packagingGuide/security_review_document_responses.htm "Most often, false positives appear in Source Code Scanner (Checkmarx), ZAP, or Burp Suite scanner results. False positives occasionally show up in Salesforce security review failure reports. In either case, you can improve your likelihood of passing security review by including a false-positive explanatory document when you submit your code.").

For more details about what to submit, see [Required Materials for Security Review Submission](atlas.en-us.packagingGuide.meta/packagingGuide/security_review_required_materials.htm "Learn about the materials that you must provide, such as test environments and documentation, when submitting your solution for an AppExchange security review. Mobile apps have platform-specific submission requirements. Extension packages undergo security review and Salesforce requires the same materials for them as for a standalone solution.").

-   **[Request a Follow-Up Security Review for a Managed Package](atlas.en-us.packagingGuide.meta/packagingGuide/security_review_followup_new_package_version.htm)**
    Request a follow-up review for your managed package in the AppExchange Partner Console when you have either changed code to fix security vulnerabilities discovered in a previous review or when you fixed some vulnerabilities and determined others are false positives. To request a follow-up review, start a new review from the Solutions page in the AppExchange security review wizard. Submit your remediated solution and false-positives documentation. There’s a fee to retest a remediated solution.
-   **[Request a Follow-Up Security Review for an API Solution](atlas.en-us.packagingGuide.meta/packagingGuide/security_review_followup_external_api.htm)**
    Request a follow-up review when you have remediated vulnerabilities in code that runs externally to Salesforce or your API-only solution, or when you changed code to fix some vulnerabilites and determine that others are false positives. To request a follow-up review, start a new review from the Solutions page in the AppExchange Partner Console. Submit your remediated solution and false-positives documentation. There’s a fee to retest a remediated solution.
-   **[List Your Solution on AppExchange](atlas.en-us.packagingGuide.meta/packagingGuide/security_review_list_your_solution.htm)**
    Your security review is complete and your solution passed. Congratulations! Publicly list and distribute your solution on AppExchange.

#### See Also

-   [Document Your Responses to False Positives](atlas.en-us.packagingGuide.meta/packagingGuide/security_review_document_responses.htm "Most often, false positives appear in Source Code Scanner (Checkmarx), ZAP, or Burp Suite scanner results. False positives occasionally show up in Salesforce security review failure reports. In either case, you can improve your likelihood of passing security review by including a false-positive explanatory document when you submit your code.")

-   [Required Materials for Security Review Submission](atlas.en-us.packagingGuide.meta/packagingGuide/security_review_required_materials.htm "Learn about the materials that you must provide, such as test environments and documentation, when submitting your solution for an AppExchange security review. Mobile apps have platform-specific submission requirements. Extension packages undergo security review and Salesforce requires the same materials for them as for a standalone solution.")

## Related Topics

- document your responses to false positives (atlas.en-us.packagingGuide.meta/packagingGuide/security_review_document_responses.htm)
- Required Materials for Security Review Submission (atlas.en-us.packagingGuide.meta/packagingGuide/security_review_required_materials.htm)
- Request a Follow-Up Security Review for a Managed Package (atlas.en-us.packagingGuide.meta/packagingGuide/security_review_followup_new_package_version.htm)
- Request a Follow-Up Security Review for an API Solution (atlas.en-us.packagingGuide.meta/packagingGuide/security_review_followup_external_api.htm)
- List Your Solution on AppExchange (atlas.en-us.packagingGuide.meta/packagingGuide/security_review_list_your_solution.htm)
- Document Your Responses to False Positives (atlas.en-us.packagingGuide.meta/packagingGuide/security_review_document_responses.htm)

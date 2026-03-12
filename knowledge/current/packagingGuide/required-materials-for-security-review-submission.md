---
title: "Required Materials for Security Review Submission"
domain: packagingGuide
topic: required-materials-for-security-review-submission
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:21.314Z
estimatedTokens: 1581
keywords: [Materials, Security, Review, Submission, provide, test, environments, documentation, submitting, solution, AppExchange, Mobile, apps, platform-specific, requirements]
---

# Required Materials for Security Review Submission

> Learn about the materials that you must provide, such as test environments and
  documentation, when submitting your solution for an AppExchange security review. Mobile apps have
  platform-specific submission requirements. Extension packages undergo security review and
  Salesforce requires the same materials for them as for a standalone solution.

# Required Materials for Security Review Submission

Learn about the materials that you must provide, such as test environments and documentation, when submitting your solution for an AppExchange security review. Mobile apps have platform-specific submission requirements. Extension packages undergo security review and Salesforce requires the same materials for them as for a standalone solution.

![The submission requirements for an AppExchange security review include an end-to-end solution environment, valid credentials to all systems, scan reports, false positive explanations, and user documentation.](/docs/resources/img/en-us/260.0?doc_id=appexchange%2Fsecurity_review%2Fimages%2Fappex-security-review-submission-reqs.png&folder=packagingGuide)

During a security review, Product Security tests the required and optional parts of your solution. To determine testing scope, we typically use a follow-the-data approach. Wherever the customer goes, we go. For example, to use your solution, your Salesforce customer needs an account on your company website, or data is synced to a third-party server. Our review team tests these pieces to ensure that they're securely transferring Salesforce credentials and data.

Provide access to all environments, packages, and external components that your solution uses, including:

-   External web applications or services.
-   Client or mobile applications that are required or optional.
-   All Apex and Visualforce that are included in your solution.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=packagingGuide)

#### Note

Be sure that your submission is a Managed—Released package. We can’t accept an unmanaged or beta package.

If you’re not sure whether to include part of your solution, include it anyway. The review team doesn’t test parts that are out of scope, but omitting a required part delays your review.

We like to see that you did your due diligence to ensure that your solution meets enterprise security standards. Include security scan reports along with explanations of any false positives that appear in your test results.

We also ask for detailed solution user documentation and your company’s information security policies. We understand that providing extensive documentation isn’t practicable for smaller or newer companies, so we factor in company size and maturity when reviewing submitted documents.

To generate a checklist that is customized to your solution, use the [Security Review Submission Requirements Checklist Builder](https://partners.salesforce.com/s/education/appinnovators/Security_Review#media) in the Salesforce Partner Community. Here’s the checklist for a Lightning Component.

![A view of the security review submission requirements checklist builder with the checklist for a Lightning Component](/docs/resources/img/en-us/260.0?doc_id=appexchange%2Fsecurity_review%2Fimages%2Fsecurity-review-submission-reqs-checklist-builder.png&folder=packagingGuide)

The following table summarizes what to submit based on the scope of your architecture.

| Material for Submission | Salesforce Native Solution | Salesforce Native Solution with Lightning Components | Solution with External Web App or Service | Solution with a Mobile Client | API Only | Marketing Cloud App |
| --- | --- | --- | --- | --- | --- | --- |
| Salesforce Developer Edition org | X | X | X | X | X |  |
| Managed package installed in a Developer Edition org | X | X | X | X |  |  |
| URLs and login credentials for external components requiring authentication |  |  | X | X | X |  |
| Checkmarx report | X | X | X | X |  |  |
| Dynamic Application Security Test (DAST) scan reports |  |  | X | X | X | X |
| False positives documentation (if applicable) | X | X | X | X | X | X |
| Solution documentation | X | X | X | X | X | X |
| Platform with installation link or file |  |  |  | X |  |  |
| Credentials to Marketing Cloud environment |  |  |  |  |  | X |

## Mobile Apps

For mobile app testing, provision the app for all the platforms that you plan to distribute on. For iOS, we accept a test flight or an ad hoc deployment. For other platforms, we accept the app in a file, such as an Android Packaging (.apk) file.

## Extension Packages

An extension package is a package that is an add-on to a solution or that integrates the functionality of two solutions. Before you can publicly list an extension package on AppExchange, it and the solutions it extends must pass security review.

If your extension package is an add-on to, or integrates with, base solutions that *have passed* the security review, submit only your extension package for review. However, if the base solutions *haven’t passed* the security review, submit your extension package plus the unreviewed solutions.

The security review submission requirements for an extension package are the same as for a solution that has a similar architecture. For example, if you have an extension package with external callouts, attach separate web scan results for the packages with the callouts.

The Product Security team reviews the solution as a whole. Install a complete solution in the Development Edition org that you submit with your security review. Include your extension package. Also install all base and dependent packages for the solutions that your package extends or integrates. It’s required whether the base solutions have already passed the security review or not.

It’s important that the Salesforce security team reviews every extension package. Even small packages can introduce security vulnerabilities.

#### See Also

-   [False Positives](atlas.en-us.packagingGuide.meta/packagingGuide/security_review_false_positives.htm "As you navigate the AppExchange security review process, you're likely to encounter false positive issues with your solution. A false positive occurs when a security-scanning tool or code reviewer flags code that appears to pose a security vulnerability but actually doesn’t. Instead, the flagged vulnerability is nonexistent, nonexploitable, or not required to support a valid use case or functionality.")

-   [Security Review Requirements Checklist Builder](https://partners.salesforce.com/s/education/appinnovators/Security_Review#media "Security Review Requirements Checklist Builder - HTML (New Window)")

## Related Topics

- False Positives (atlas.en-us.packagingGuide.meta/packagingGuide/security_review_false_positives.htm)

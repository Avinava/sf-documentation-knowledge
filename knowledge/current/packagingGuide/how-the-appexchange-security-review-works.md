---
title: "How the AppExchange Security Review Works"
domain: packagingGuide
topic: how-the-appexchange-security-review-works
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:21.259Z
estimatedTokens: 2884
keywords: [How, AppExchange, Security, Review, Works, process, combination, enforcement, mechanisms, paired, personalized, advice, tools, initiating, perform]
---

# How the AppExchange Security Review Works

> The security review process is a combination of enforcement mechanisms paired with personalized advice and tools. Before initiating an AppExchange security review, perform your own testing and gather the materials that help us assess the security of your solution. During a review, our Product Security team attempts to identify security vulnerabilities in your solution. Throughout the process, you can get guidance tailored to your solution. Connect with security review team members during their office hours.

# How the AppExchange Security Review Works

The security review process is a combination of enforcement mechanisms paired with personalized advice and tools. Before initiating an AppExchange security review, perform your own testing and gather the materials that help us assess the security of your solution. During a review, our Product Security team attempts to identify security vulnerabilities in your solution. Throughout the process, you can get guidance tailored to your solution. Connect with security review team members during their office hours.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=packagingGuide)

#### Note

To distribute managed packages, Salesforce Platform API solutions, or Marketing Cloud Engagement API solutions on AppExchange, they must pass our security review.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=packagingGuide)

#### Important

You can submit a patch version of your solution for review, but we don't recommend it. With patches, security review inheritance is limited. To maximize inheritance, submit only major and minor versions, such as 1.0.0 and 1.1.0. Learn more in [Listing Readiness for Managed Packages](atlas.en-us.packagingGuide.meta/packagingGuide/security_review_listing_readiness.htm "Listing readiness indicates whether a managed-released package version is ready to list on AppExchange or if it first must pass security review. Learn the difference between security review status and listing readiness. Discover when and how ‌first- and second-generation package (1GP and 2GP) versions inherit listing readiness from previous versions. Make informed decisions about whether to submit a package version for security review.").

The security review process has five stages.

-   You submit a solution.
-   The submission is verified.
-   If the submission is valid, it’s added to the Product Security team’s queue.
-   The submission is tested.
-   You’re notified of the results.

![The security review process has five stages: a partner submits a solution, the submission is verified, the submission is added to the Product Security team’s review queue, the submission is tested and validated, and the partner is notified of the results.](/docs/resources/img/en-us/260.0?doc_id=appexchange%2Fsecurity_review%2Fimages%2Fsecurity_review_process.png&folder=packagingGuide)

## Ensure That You’re Ready to Start

Knowing when you’re ready for a security review is as important as how it works. You’re ready to submit a solution for security review after you:

-   Secure your solution according to industry best security standards.
-   Enroll your solution in the AppExchange Partner Program.
-   Certify that your solution is [Lightning Ready](https://partners.salesforce.com/s/education/general/Lightning_Ready?language=en "HTML (New Window)"). All new solutions submitted for security review must be Lightning Ready.
-   In the AppExchange Partner Console, connect your packaging org to the AppExchange Partner Console.
-   In the AppExchange Partner Console, create a provider profile.

## Test Your Solution

Run automated scanning tools and manually test your solution throughout the solution development lifecycle. Security scanning tools provide only first-pass, though useful, insights into solution vulnerabilities. To find vulnerabilities that automated scanning tools don’t detect, also manually test your solution.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=packagingGuide)

#### Tip

We strongly recommend that you test your code throughout the development lifecycle. If you defer testing and remediation, you’re likely to encounter a larger accumulation of issues and greatly delay your time to market.

In your development process, we recommend that you scan your code with Salesforce Code Analyzer, a unified tool for source code analysis. Code Analyzer supports multiple engines: PMD, PMD Copy Paste Detector, ESLint, RetireJS, and Salesforce Graph Engine. Graph Engine is useful to identify create, read, update, delete, and field-level security (CRUD/FLS) violations in your code.

After you finish developing your solution, perform another round of manual testing and run the automated scanning tools that Product Security requires. The type of scans that you’re required to run depends on the architecture of your solution.

On the [Partner Security Portal](https://security.my.salesforce-sites.com/sourcescanner/ "HTML (New Window)"), you can access the Source Code Scanner, sometimes referred to as the Checkmarx scanner.

Before you submit your solution for review, address all security issues that you find with your manual testing and the scanning tools. Either fix the code or document how flagged issues are false positives. A false positive is an issue that appears to pose a security risk but doesn’t.

Test your solution before you submit it and you’re much more likely to pass the review the first time. Applicants who don’t test beforehand rarely pass and must resubmit after addressing security vulnerabilities identified during a review. Resubmitting significantly delays the solution publishing process.

## Gather the Required Materials for Security Review Submission

Assemble the materials that Product Security needs to perform a thorough manual review. For most submissions, you’re required to provide a Developer Edition org with the version of the solution that you intend to distribute installed and the solution documentation. The security review team uses the Developer Edition org as the solution test environment. The org and documentation aren’t required for Marketing Cloud apps. Other required materials vary by solution type.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=packagingGuide)

#### Tip

You’re likely to have questions as you prepare for a security review and at other points during or after a security review. To discuss your concerns and get answers to your questions, visit the [Partner Security Portal](https://security.my.salesforce-sites.com/sourcescanner/ "HTML (New Window)") and schedule an office hours appointment. For help with submitting your solution for review, schedule an appointment with the Security Review Operations team. To troubleshoot issues in your solution that were identified during a review, make an appointment with the Product Security team.

## Submit Your Solution for Review

After you complete testing and gather the materials required for your submission, you’re ready to submit your solution for an AppExchange security review. Use the security review submission interface to share your solution and required materials and to pay the security review fee. If you plan to distribute your solution for free, you don’t pay the fee.

After you submit everything, expect these turnaround times.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=packagingGuide)

#### Important

The time frames are estimates. Several factors affect the actual duration of your review, such as the completeness of your submission, and the total volume of submissions.

| Security Review Stage | Typical Time Frame |
| --- | --- |
| Security Review Operations verifies that your submission is ready to review. A submission is ready to review if it includes everything required to test the security of your solution. | 1–2 weeks |
| Product Security tests your solution for the first time. | 3–4 weeks |
| Product Security tests a resubmission of a solution that wasn’t approved previously and that shows progress in fixing security vulnerabilities. | 2–3 weeks |

## Follow Up on the Security Review Report

When the security review is complete, you receive a report informing you that your submission is approved or not approved for public listing on AppExchange.

-   Approved: You can publicly list your solution on AppExchange and distribute it to customers immediately.
-   Not Approved: The security review team detected security issues in your solution. You can’t list your solution on AppExchange or distribute it to customers.

If your solution isn’t approved, the report includes information about the types of security issues that we detected. Keep in mind that the security review is a black-box, time-limited process. We can’t list every instance of a security issue, and sometimes we don’t initially detect all issue types. Interpret the security review findings as representative examples of the types of issues you must fix. Then diligently find and fix all instances of each issue across your entire solution.

Address all detected security issues. Rerun the required automated scanning tools to generate reports for your revised solution. Then resubmit your revised solution with the updated scan reports.

#### See Also

-   [Connect Your Partner Business Org to the AppExchange Partner Console](atlas.en-us.packagingGuide.meta/packagingGuide/appexchange_publish_organizations.htm "A Partner Business Org (PBO) is an org preinstalled with the tools that you use to run your AppExchange business. Connect your PBO to the Partner Console so that you’re ready to set up licensing for your managed packages and create listings for your solutions.")

-   [Create a Company Profile for Your AppExchange Business](atlas.en-us.packagingGuide.meta/packagingGuide/appexchange_publish_profile.htm "A polished, accurate company profile helps build customer trust in your AppExchange solution or consulting service. In your profile, tell customers what makes your brand stand out and include information such as your website and phone number. Customers browsing your AppExchange listings see this information in the Provider Details section.")

-   [Create Your AppExchange Listing](atlas.en-us.packagingGuide.meta/packagingGuide/appexchange_publish_listings.htm "Market your solution or consulting service to Salesforce customers with a listing on AppExchange. Use the Listing Builder in the Partner Console to create a listing that stands out to customers.")

-   [Partner Security Portal](atlas.en-us.packagingGuide.meta/packagingGuide/security_review_partner_security_portal.htm "The Partner Security Portal is the main hub for ISV partners' security review needs. The portal hosts the Source Code Scanner (Checkmarx). Use this tool to identify security vulnerabilities in your solution. The portal is also where you go to schedule office hours appointments with AppExchange security engineers and Security Review Operations team members. Office hours provide a forum for you to ask questions about the security review process and to discuss how to rework code that has security vulnerabilities.")

-   [Partner Security Portal site](https://security.secure.force.com/sourcescanner/ "Partner Security Portal site - HTML (New Window)")

-   [Lightning Ready for AppExchange Partners (ISV)](https://partners.salesforce.com/s/education/general/Lightning_Ready?language=en "Lightning Ready for AppExchange Partners (ISV) - HTML (New Window)")

-   [Log In to the Partner Security Portal](atlas.en-us.packagingGuide.meta/packagingGuide/security_review_partner_security_portal_set_up_login.htm "To access the Partner Security Portal, you must be a Salesforce ISV partner. Connect your DevHub or packaging org to the AppExchange Partner Console. Then log in to the portal by using the credentials for that org. Logged-in users can access security scanning tools and schedule office hours appointments.")

## Related Topics

- Listing Readiness for Managed Packages (atlas.en-us.packagingGuide.meta/packagingGuide/security_review_listing_readiness.htm)
- Connect Your Partner Business Org to the AppExchange Partner Console (atlas.en-us.packagingGuide.meta/packagingGuide/appexchange_publish_organizations.htm)
- Create a Company Profile for Your AppExchange Business (atlas.en-us.packagingGuide.meta/packagingGuide/appexchange_publish_profile.htm)
- Create Your AppExchange Listing (atlas.en-us.packagingGuide.meta/packagingGuide/appexchange_publish_listings.htm)
- Partner Security Portal (atlas.en-us.packagingGuide.meta/packagingGuide/security_review_partner_security_portal.htm)
- Log In to the Partner Security Portal (atlas.en-us.packagingGuide.meta/packagingGuide/security_review_partner_security_portal_set_up_login.htm)

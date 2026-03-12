---
title: "AppExchange Security Review Stages"
domain: packagingGuide
topic: appexchange-security-review-stages
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:21.336Z
estimatedTokens: 1908
keywords: [AppExchange, Security, Review, Stages, four-stage, process, partner, it’s, understand, happens, know, stage]
---

# AppExchange Security Review Stages

> The AppExchange security review is a four-stage process. As a partner, it’s important
  for you to understand what the stages are, what happens during each one, and to know which stage
  your review is in.

# AppExchange Security Review Stages

The AppExchange security review is a four-stage process. As a partner, it’s important for you to understand what the stages are, what happens during each one, and to know which stage your review is in.

The AppExchange security review officially begins when you start saving information in the security review wizard, the tool used to submit solutions for security review. It ends when the review teams complete testing and share the results with you. A lot happens in between. There are four stages in a security review.

-   Prepare & Submit: During this stage, you use the security review wizard to enter all required information and submit your solution for review.
-   Submission Verification: We received your submission. The Security Review Operations team is assessing everything that you included in your submission. If the submission contains all the required information, we can start testing, If not, feedback about what’s missing is posted to the wizard’s Overview page.
-   Testing: Product Security is testing your solution.
-   Done: The review is complete. Details are posted to the wizard’s Overview page.

To see which stage your review is in, check the tracker on the Overview page in the security review wizard. Each tile in the indicator represents one of the four stages in an AppExchange security review.

![The checkmark icon is a green circle with a white checkmark on it.](/docs/resources/img/en-us/260.0?doc_id=appexchange%2Fsecurity_review%2Fimages%2Fsecurity_review_status_tracker.png&folder=packagingGuide)

The tiles are color-coded, giving you a clue about the progress of each stage.

-   Seeing a green background and checkmark symbol ![The checkmark icon is a green circle with a white checkmark on it.](/docs/resources/img/en-us/260.0?doc_id=appexchange%2Fsecurity_review%2Fimages%2Fsecurity_review_tracker_checkmark_icon.png&folder=packagingGuide) ? The stage is complete.
-   A blue background with an information symbol ![The information symbol is a blue circle with a white letter i on it.](/docs/resources/img/en-us/260.0?doc_id=appexchange%2Fsecurity_review%2Fimages%2Fsecurity_review_tracker_info_icon.png&folder=packagingGuide) means it’s the current stage.
-   An orange background and warning symbol ![The warning icon is an orange circle with a reverse arrow on it.](/docs/resources/img/en-us/260.0?doc_id=appexchange%2Fsecurity_review%2Fimages%2Fsecurity_review_tracker_warning_icon.png&folder=packagingGuide) indicates that a problem occurred during the stage.
-   A red background and an error symbol ![The error icon is a white circle with a white line through it on a red background.](/docs/resources/img/en-us/260.0?doc_id=appexchange%2Fsecurity_review%2Fimages%2Fsecurity_review_tracker_error_icon.png&folder=packagingGuide) indicates that a failure occurred.
-   A grayed-out tile means the stage hasn’t started.

This flowchart provides and overview of the process and shows the tasks that occur in each stage.

![A diagram of the security review process showing the flow for initial reviews, resubmissions, follow-up reviews, and re-reviews](/docs/resources/img/en-us/260.0?doc_id=appexchange%2Fsecurity_review%2Fimages%2Fsecurity_review_process_flow.png&folder=packagingGuide)

This table summarizes the tasks that are performed during each stage, who’s responsible for completing them, and their possible outcomes.

| Stage | Substage | What it Means |
| --- | --- | --- |
| Prepare & Submit | Complete all the steps, then submit your solution for review. | This is the default stage before you submit a review. In this stage, you provide all the information that we need to test the security posture of your solution.You don’t have a review status until you submit the review. |
| We received your submission | You submit your solution for review. Security Review Operations received the request but hasn’t started processing it.We set the review status to Submitted. No action is needed from you. |
| Submission Verification | We're checking that your submission includes all required materials. | Security Review Operations is assessing everything that you included in your submission. Their goal is to ensure that they have everything required to start testing the security of your solution.The review status is Submitted. No action is needed from you. |
| Your submission is ready to test. | We have all the materials required to test your solution. We notified the Product Security team that your solution is ready to test.When Product Security starts testing, your review advances to the next stage, Testing.The review status is Submitted. No action is needed from you. |
| We returned your submission. Review the feedback, update your submission, and resubmit. | The Security Review Operations team returned your submission because it’s missing something that we need for testing, such as valid test environment credentials or external components. Processing is paused until we receive the outstanding items.We set the review status to Returned and post feedback to the security review wizard’s Overview page. Address the feedback and resubmit the same review. There’s no charge to resubmit a returned submission. |
| Testing | We're testing the security of your solution. | Product Security started the technical testing of your solution. The review status is Submitted. No action is needed from you. |
| We returned your submission. Review the feedback, update your submission, and resubmit. | During testing, Product Security discovered an issue with your submission that prevents them from fully testing your solution.The Product Security team returned your submission and set the review status to Returned.The reason your review was returned is shown on the security review wizard’s Overview page. Address the feedback and resubmit the same review. There’s no charge to resubmit a returned submission. |
| Your solution didn't pass. | Product Security finished testing, and found security vulnerabilities. Your solution didn't pass. The review status is set to Failed.Go to the Overview page in the security wizard, download your security review report, and review the findings. Address the issues in the report by remediating code, documenting false positives, or both.If you have to remediate code, you must create another API solution or managed package version and start a new review. There’s a fee to retest a remediated solution.If you have to report false positives but don’t have to remediate code, you can add false-positives documentation to the failed review and resubmit. There’s no fee to have us evaluate false positives. |
| Your security review is complete. | Product Security finished testing the security of your solution and found no security issues.The review status is Submitted. No action is needed from you. Your review automatically advances to the next stage, Done. |
| Done | Congratulations! Your solution passed. | The review status is set to Passed. You’re one step closer to listing your solution on AppExchange. |
| Expired | Your security review expired. | Expired is an unofficial fifth stage and a review status. It applies to solutions that, after passing a review, no longer meet the criteria for distribution on AppExchange. A security review can expire for various reasons, such as unpaid revenue sharing. The review status is set to Expired.If the expired review is for a solution that’s linked to a public listing, we remove the listing from AppExchange, but you can relist. Work with your account manager to understand why your review expired. Address all issues, then relist. |

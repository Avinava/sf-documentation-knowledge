---
title: "Security Health Check"
domain: securityImplGuide
topic: security-health-check
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:45.098Z
estimatedTokens: 746
keywords: [Security, Health, Check, admin, identify, fix, potential, vulnerabilities, settings, summary, score, how, org, measures, against]
---

# Security Health Check

> As an admin, you can use Health Check to identify and fix potential vulnerabilities in
  your security settings, all from a single page. A summary score shows how your org measures
  against a security baseline like the Salesforce Baseline Standard. You can upload up to five
  custom baselines to use instead of the Salesforce Baseline Standard.

# Security Health Check

As an admin, you can use Health Check to identify and fix potential vulnerabilities in your security settings, all from a single page. A summary score shows how your org measures against a security baseline like the Salesforce Baseline Standard. You can upload up to five custom baselines to use instead of the Salesforce Baseline Standard.

| Available in: both Salesforce Classic (not available in all orgs) and Lightning Experience |
| --- |
| Available in: Professional, Enterprise, Performance, Unlimited, and Developer Editions |


| User Permissions Needed |
| --- |
| To view Health Check and export custom baselines: | View Health CheckORView Security CenterOrManage Security Center |
| To import custom baselines: | Manage Health CheckORView Security CenterOrManage Security Center |

From Setup, in the Quick Find box, enter Health Check, and then select **Health Check**.

![Health Check page with score and High Risk settings shown](/docs/resources/img/en-us/260.0?doc_id=help%2Fbundle_setup%2Fimages%2F214_health_check_full.png&folder=securityImplGuide)

In the baseline dropdown (1), choose the Salesforce Baseline Standard or a custom baseline. The baseline consists of recommended values for High-Risk, Medium-Risk, Low-Risk, and Informational Security Settings (2). If you change settings to be less restrictive than in the baseline, your health check score (3) and grade (4) decreases.

Your settings are shown with information about how they compare against baseline values (5). To remediate a risk, edit the setting (6) or use Fix Risks (7) to quickly change settings to your selected baseline’s recommended values without leaving the Health Check page. You can import, export, edit, or delete a custom baseline with the baseline control menu (8).

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=securityImplGuide)

#### Note

New settings to Security Health Check are added to the Salesforce Baseline Standard with default values. If you have a custom baseline, you’re prompted to add the new settings when you open it.

## Example

Suppose that you changed your password minimum length from 8 (the default value) to 5, and changed other Password Policies settings to be less restrictive. These changes make your users’ passwords more vulnerable to guessing and other brute force attacks. As a result, your overall score decreases and the settings are listed as risks.

## Fix Risks Limitations

Not all settings can be changed using the Fix Risks button. If a setting you want to adjust doesn’t appear on the Fix Risks screen, change it manually using the Edit link on the Health Check page. The Health Check detail page in the Security Center app saves you time by aggregating multiple Health Check scores and settings in one place. For more information, see [Take Charge of Your Security Goals with Security Center](https://help.salesforce.com/apex/HTViewHelpDoc?id=security_center.htm&language=en_US).

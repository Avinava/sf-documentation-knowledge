---
title: "Create a Trialforce Source Org with a Trialforce Management Org"
domain: packagingGuide
topic: create-a-trialforce-source-org-with-a-trialforce-management-org
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:21.406Z
estimatedTokens: 364
keywords: [Trialforce, Source, Org, Management, TMO, TSO, install, package, there, configure, want, customers, experience]
---

# Create a Trialforce Source Org with a Trialforce Management Org

> Use a Trialforce Management Org (TMO) to create a Trialforce Source Org (TSO). After you
  create the TSO, install your package there. Then configure the TSO as you want customers to
  experience it.

# Create a Trialforce Source Org with a Trialforce Management Org

Use a Trialforce Management Org (TMO) to create a Trialforce Source Org (TSO). After you create the TSO, install your package there. Then configure the TSO as you want customers to experience it.


| User Permissions Needed |
| --- |
| To manage Trialforce: | Customize Application |

Available in: Salesforce Classic only.

Before you install your solution in a TSO, associate the solution with your License Management App (LMA). If you don’t complete this step first, the trial orgs provisioned from the TSO don’t generate leads or licenses in the LMA.

1.  Log in to your TMO.
2.  If necessary, **Switch to Salesforce Classic**.
3.  From Setup, in the Quick Find box, enter Source Organizations, and then select **Source Organizations**.
4.  Click **New**.
5.  Enter a new username and email address for the admin account.
6.  Enter a name for the TSO.
7.  Optionally, specify the custom branding by choosing a branded email set or login site.
8.  Click **Create**.

    You receive an email with the login details for the TSO.

9.  Log in to the TSO and install your solution.
10.  Add sample records, custom profiles, new users, or other configurations that help illustrate your solution’s business value.
11.  Verify that the TSO admin has a license for the solution that’s installed in the TSO.

After you finish configuring the TSO, you’re ready to create a Trialforce template.

---
title: "Update Your Trialforce Template"
domain: packagingGuide
topic: update-your-trialforce-template
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:20.914Z
estimatedTokens: 737
keywords: [Trialforce, Template, solution, custom, branding, reflect, changes, SignupRequest, API, deliver, trials, log, case, approve, new]
---

# Update Your Trialforce Template

> If you update your solution or custom branding, update your Trialforce template to
    reflect the changes. If you use SignupRequest API to deliver trials, log a case to approve the
    new template. If you deliver trials using AppExchange only, skip this step.

# Update Your Trialforce Template

If you update your solution or custom branding, update your Trialforce template to reflect the changes. If you use SignupRequest API to deliver trials, log a case to approve the new template. If you deliver trials using AppExchange only, skip this step.


| User Permissions Needed |
| --- |
| To manage Trialforce: | Modify All Data |
| To create or update AppExchange listings: | Manage Listings |

1.  Install your updated managed package or extension package into your Trialforce Source Org (TSO).
2.  Update your TSO. For example, add fresh sample data or update the custom branding.
3.  Create an updated Trialforce template.
4.  If you deliver trials on AppExchange, add the updated template to your listing in the AppExchange Partner Console.
5.  If you use SignupRequest API to deliver trials, log a case to approve the new template.
    1.  Log in to [Salesforce Help](https://help.salesforce.com/s/) with the username that you used to register for the Salesforce Partner Community.
    2.  Click **?**, and then click **Log a Case for Help**.
    3.  For Subject, enter Requesting Trialforce Template Approval.
    4.  For Description, note that you’re a Salesforce partner and you’re requesting your TMO. Include your TSO ID, the updated Trialforce template ID, and the org to use for creating signups.
    5.  When prompted to select a product, click **Pick a different product / topic**.
    6.  For Product, select **Partner Programs & Benefits**.
    7.  For Topic, select **ISV Technology Request**.
    8.  Select an instance type and severity level.
    9.  Click **Create a Case**.

#### See Also

-   [Create and Manage Trialforce Source Orgs](atlas.en-us.packagingGuide.meta/packagingGuide/trialforce_create_source_organization.htm "A Trialforce Source Organization (TSO) is used to create Trialforce templates, which are the basis of customer trial orgs. You can create a TSO with Environment Hub or a Trialforce Management Org (TMO). In most cases, either method is fine, with two exceptions. If you plan to brand your emails or login page, use a TMO. To create a Professional Edition TSO, use the Environment Hub. If your TSO is about to expire, request an extension.")

-   [Create a Trialforce Template](atlas.en-us.packagingGuide.meta/packagingGuide/trialforce_creating_template.htm "Create and configure Trialforce templates in Setup. A Trialforce template is an approximate snapshot of your Trialforce Source Organization (TSO) at a given instance in time.")

-   [Provide Free Trials on Your AppExchange Listing Using a Trialforce Template](atlas.en-us.packagingGuide.meta/packagingGuide/free_trial_appexchange_trialforce.htm "To enable free trials on your AppExchange listing, add one of the Trialforce templates that you connected to the AppExchange Partner Console. Optionally, enable lead collection to receive leads when customers start trials using the Trialforce template.")

## Related Topics

- Create and Manage Trialforce Source Orgs (atlas.en-us.packagingGuide.meta/packagingGuide/trialforce_create_source_organization.htm)
- Create a Trialforce Template (atlas.en-us.packagingGuide.meta/packagingGuide/trialforce_creating_template.htm)
- Provide Free Trials on Your AppExchange Listing Using a Trialforce Template (atlas.en-us.packagingGuide.meta/packagingGuide/free_trial_appexchange_trialforce.htm)

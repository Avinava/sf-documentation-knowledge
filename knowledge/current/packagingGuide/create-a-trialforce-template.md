---
title: "Create a Trialforce Template"
domain: packagingGuide
topic: create-a-trialforce-template
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:21.418Z
estimatedTokens: 859
keywords: [Trialforce, Template, configure, templates, Setup, approximate, snapshot, Source, Organization, TSO, instance, time]
---

# Create a Trialforce Template

> Create and configure Trialforce templates in Setup. A Trialforce template is an
      approximate snapshot of your Trialforce Source Organization (TSO) at a given instance in
      time.

# Create a Trialforce Template

Create and configure Trialforce templates in Setup. A Trialforce template is an approximate snapshot of your Trialforce Source Organization (TSO) at a given instance in time.

| Available in: Salesforce Classic (not available in all orgs) and Lightning Experience |
| --- |
| Available in: Developer, Professional, and Enterprise Edition |


| User Permissions Needed |
| --- |
| To manage Trialforce: | Modify All Data |

Before you create the template, make sure to:

-   Review the [considerations for Trialforce templates](atlas.en-us.packagingGuide.meta/packagingGuide/trialforce_template_considerations.htm "Learn the considerations for creating and using Trialforce templates, which are approximate snapshots of your Trialforce Source Organization (TSO).").
-   Install your packages into the TSO. Then, configure the TSO exactly as you want your customers to experience it, with the appropriate sample data, profiles, users, and records.

1.  Contact Salesforce Partner Support to set the number of days that you want trials created from this TSO to last.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=packagingGuide)

    #### Note

    You only need to contact Partner Support once for each TSO.

2.  Log in to your TSO.
3.  From Setup, enter Trialforce in the Quick Find box, then select **Trialforce**.
4.  Click **New Trialforce Template**.
5.  Enter a description for the Trialforce template.
6.  In the Include setting, select **All Data and Setup** to create a Trialforce template that includes both the metadata and data saved in the org when you create the template. Or, select **Setup Only** to create a Trialforce template that includes only the metadata—and not the data—saved in the org when you create the template.
7.  (Optional) To rebase any date fields relative to the creation date of a new org from the Trialforce template, select **Adjust all Dates in the Resulting Organization Relative to Organization Creation Date**. This option is relevant for templates with date field data.
8.  (Optional) To exclude Chatter feeds from new orgs created from the Trialforce template, select **Don't Copy Feed Items from this Trialforce Source Org into the Resulting Organization**.
9.  (Optional) To create a private Trialforce template, select **Mark this template as private so that only authorized orgs can sign up**. By default, Trialforce templates are public.
10.  Save the template.
11.  (Optional) If you created a private Trialforce template, enter the org IDs of the orgs authorized to sign up new orgs using the template. Then, save your changes.

     You can enter up to 51 org IDs, each on a separate line.


After your new Trialforce template is generated, you receive an email with the new template ID. Remember to generate a new template each time you make updates to your TSO, so that your trials always reflect the most recent state.

In Setup, Trialforce templates can have these statuses.

-   In Progress: After you create a template, the template always has this status initially. The status then moves to either the Success or the Error status.
-   Success: The template can be used to create trial organizations.
-   Error: The template can’t be used because something has gone wrong and debugging is required.
-   Deleted: The template is no longer available for use. Deleted templates are removed during system updates.

## Related Topics

- considerations for Trialforce templates (atlas.en-us.packagingGuide.meta/packagingGuide/trialforce_template_considerations.htm)

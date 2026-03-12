---
title: "Considerations for Trialforce Templates"
domain: packagingGuide
topic: considerations-for-trialforce-templates
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:21.452Z
estimatedTokens: 533
keywords: [Considerations, Trialforce, Templates, creating, approximate, snapshots, Source, Organization, TSO]
---

# Considerations for Trialforce Templates

> Learn the considerations for creating and using Trialforce templates, which are
      approximate snapshots of your Trialforce Source Organization (TSO).

# Considerations for Trialforce Templates

Learn the considerations for creating and using Trialforce templates, which are approximate snapshots of your Trialforce Source Organization (TSO).

| Available in: Salesforce Classic (not available in all orgs) and Lightning Experience |
| --- |
| Available in: Developer, Professional, and Enterprise Edition |


-   You can create Trialforce templates only if the TSO is a trial org.
-   You can create a template only if your TSO is less than or equal to 1 GB.
-   Before you create a template, make sure that the TSO admin has a license for the solution that’s installed in the TSO.
-   You can create up to 10 Trialforce templates per TSO. In Setup for Trialforce, you [create a Trialforce template](atlas.en-us.packagingGuide.meta/packagingGuide/trialforce_creating_template.htm "Create and configure Trialforce templates in Setup. A Trialforce template is an approximate snapshot of your Trialforce Source Organization (TSO) at a given instance in time.") by clicking the **New Trialforce Template** button. If the button is unavailable, delete templates before creating new ones. If you require more than 10 templates, contact Salesforce Partner Support.
-   For security reasons, Personally Identifiable Information (PII) on the User Object, such as that in the address fields, is scrubbed from templates. PII in custom objects and fields isn’t modified.
-   Due to data security reasons, if your TSO was converted from a trial org to an active org, you can’t use it to create a Trialforce template. To see if the TSO is a trial org, in Setup, find and select **Company Information**. Under User Licenses, if the licenses have an expiration date, the TSO is a trial org.
-   If the TSO is converted to an active, paying org, then you can no longer use any associated Trialforce templates to create trial orgs.
-   When you create a TSO, Salesforce sets the default trial length to 10 days for trial orgs created from a Trialforce template. To get help with the default trial length, or to change the trial length associated with a template, contact Salesforce Customer Support.

## Related Topics

- create a Trialforce template (atlas.en-us.packagingGuide.meta/packagingGuide/trialforce_creating_template.htm)

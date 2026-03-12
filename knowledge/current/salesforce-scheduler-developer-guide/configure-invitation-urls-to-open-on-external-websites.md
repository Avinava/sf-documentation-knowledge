---
title: "Configure Invitation URLs to Open on External Websites"
domain: salesforce-scheduler-developer-guide
topic: configure-invitation-urls-to-open-on-external-websites
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:43.935Z
estimatedTokens: 268
keywords: [Configure, Invitation, URLs, Open, External, Websites, Admins, add, URL, prefix, directly, website]
---

# Configure Invitation URLs to Open on External Websites

> Admins can add a URL prefix to an invitation URL to directly open the
      invitation on an external website.

# Configure Invitation URLs to Open on External Websites

Admins can add a URL prefix to an invitation URL to directly open the invitation on an external website.

1.  Set up your website in the Invitation URL Prefix flow attribute.

    For more information, see [Flow Screen Component: Select Service Appointment Time](https://help.salesforce.com/s/articleView?id=platform.ls_flowscreencmp_select_srvc_appt_time.htm&type=5&language=en_US "HTML (New Window)").

    ![Invitation URL prefix attribute in flow](/docs/resources/img/en-us/260.0?doc_id=help%2Fbundle_scheduler%2Fimages%2Fls_invitation_URL_prefix_attribute.png&folder=salesforce_scheduler_developer_guide)

2.  Prefix the invitation URL with your website's domain address in the https://YourSiteDomain/SiteURL format.

After you prefix the invitation URL in the flow, activate the flow and generate the appointment invitation URL.

-   [Next →](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc10_generate_invitation_URL.htm "Generate an Appointment Invitation URL")

## Related Topics

- Next → (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc10_generate_invitation_URL.htm)

---
title: "Retrieve the Invitation Key"
domain: salesforce-scheduler-developer-guide
topic: retrieve-the-invitation-key
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:43.945Z
estimatedTokens: 241
keywords: [Retrieve, Invitation, Key, unique, URL, user, clicks, two, components, prefix, auto-generated, identifier]
---

# Retrieve the Invitation Key

> Retrieve the unique invitation key from the invitation URL that the
      user clicks.  The invitation URL has two components: the invitation URL prefix and the
      invitation key. The invitation key is an auto-generated unique identifier.

# Retrieve the Invitation Key

Retrieve the unique invitation key from the invitation URL that the user clicks. The invitation URL has two components: the invitation URL prefix and the invitation key. The invitation key is an auto-generated unique identifier.

1.  Capture the invitation key from the invitation URL.

    For example, if the invitation URL is https://YourSiteDomain/SiteURL/f482d103-4792-40ac-864a-57db0c13161b, the invitation key is f482d103-4792-40ac-864a-57db0c13161b.


After you capture the invitation key, fetch the invitation appointment details by using the key.

-   [← Previous](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc10_generate_invitation_URL.htm "Generate an Appointment Invitation URL")
-   [Next →](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc10_get_appointment_invitation_details.htm "Get the Appointment Invitation Details")

## Related Topics

- ← Previous (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc10_generate_invitation_URL.htm)
- Next → (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc10_get_appointment_invitation_details.htm)

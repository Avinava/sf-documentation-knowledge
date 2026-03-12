---
title: "Set the Org-Wide Sharing Defaults for User Records"
domain: securityImplGuide
topic: set-the-org-wide-sharing-defaults-for-user-records
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:45.168Z
estimatedTokens: 470
keywords: [Org-Wide, Sharing, Defaults, User, Records, opening, access]
---

# Set the Org-Wide Sharing Defaults for User Records

> Set the org-wide sharing defaults for the user object before opening up
  access.

# Set the Org-Wide Sharing Defaults for User Records

Set the org-wide sharing defaults for the user object before opening up access.

| Available in: both Salesforce Classic (not available in all orgs) and Lightning Experience |
| --- |
| Available in: Professional, Enterprise, Performance, Unlimited, and Developer Editions |


| User Permissions Needed |
| --- |
| To set default sharing access: | Manage Sharing |

For user records, you can set the organization-wide sharing default to Private or Public Read Only. The default must be set to Private if there is at least one user who shouldn’t see a record.

Let’s say that your organization has internal users (employees and sales agents) and external users (site or portal users) under different sales agents or accounts, with these requirements:

-   Employees can see everyone.
-   Sales agents can see employees, other agents, and their own customer user records only.
-   External customers can see other customers only if they are under the same agent or account.

To meet these requirements, set the default external access to Private, and extend access using sharing rules, manual sharing, or user permissions.

When the feature is first turned on, the default access setting is Private for external users. The default for internal users is Public Read Only. To change the organization-wide defaults for external access to the user object:

1.  From Setup, in the Quick Find box, enter Sharing Settings, then select **Sharing Settings**.
2.  Click **Edit** in the Organization-Wide Defaults area.
3.  Select the default internal and external access you want to use for user records.

    The default external access must be more restrictive or equal to the default internal access.

4.  Click **Save**.

    Users have Read access to those below them in the role hierarchy and full access on their own user record.

---
title: "Use a Federation ID or Formula for SSO"
domain: packagingGuide
topic: use-a-federation-id-or-formula-for-sso
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:20.893Z
estimatedTokens: 269
keywords: [Federation, Formula, SSO, match, Environment, Hub, user, member, org, either, enable]
---

# Use a Federation ID or Formula for SSO

> You can match an Environment Hub user with a user in a member org using a Federation ID
    or a user name formula. For either method, enable SSO in the hub member org first.

# Use a Federation ID or Formula for SSO

You can match an Environment Hub user with a user in a member org using a Federation ID or a user name formula. For either method, enable SSO in the hub member org first.


| User Permissions Needed |
| --- |
| To set up and configure the Environment Hub: | Manage Environment Hub |

1.  Log in to the Environment Hub, and then select a member org. If you don’t see any member orgs, check your list view.
2.  Go to SSO Settings, and then choose a method.

    | Method | Steps |
    | --- | --- |
    | SSO Method 2 - Federation IDMatch users who have the same Federation ID in both the Environment Hub and a member org. | Select the checkbox. |
    | SSO Method 3 - User Name FormulaMatch users in the Environment Hub and a member org according to a formula that you define. | Select the checkbox, and then define a formula. For example, to match the first part of the username (the part before the “@” sign) with an explicit domain name, enter:LEFT($User.Username, FIND("@", $User.Username)) & ("mydev.org") |

3.  Select **Save**.

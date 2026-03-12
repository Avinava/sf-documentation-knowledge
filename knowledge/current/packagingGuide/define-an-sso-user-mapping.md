---
title: "Define an SSO User Mapping"
domain: packagingGuide
topic: define-an-sso-user-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:20.882Z
estimatedTokens: 246
keywords: [Define, SSO, User, Mapping, manually, single-sign, Environment, Hub, member, org, enable]
---

# Define an SSO User Mapping

> You can manually define a single-sign on (SSO) user mapping between a user in the
  Environment Hub and a user in a member org. Before you define a user mapping, enable SSO in the
  hub member org.

# Define an SSO User Mapping

You can manually define a single-sign on (SSO) user mapping between a user in the Environment Hub and a user in a member org. Before you define a user mapping, enable SSO in the hub member org.


| User Permissions Needed |
| --- |
| To set up and configure the Environment Hub: | Manage Environment Hub |

User mappings can be many-to-one but not one-to-many. In other words, you can associate multiple users in the Environment Hub to one user in a member org. For example, if you wanted members of your QA team to log in to a test org as the same user, you could define user mappings.

1.  Log in to the Environment Hub, and then select a member org. If you don’t see any member orgs, check your list view.
2.  Go to the Single Sign-On User Mappings related list, and then select **New SSO User Mapping**.
3.  Enter the username of the user that you want to map in the member org, and then look up a user in the Environment Hub.
4.  Select **Save**.

---
title: "Prepare Your Test Drive Org"
domain: packagingGuide
topic: prepare-your-test-drive-org
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:20.918Z
estimatedTokens: 399
keywords: [Prepare, Test, Drive, Org, installing, solution, configuring, evaluation, user]
---

# Prepare Your Test Drive Org

> Prepare your test drive org by installing your solution and configuring the evaluation
  user.

# Prepare Your Test Drive Org

Prepare your test drive org by installing your solution and configuring the evaluation user.


| User Permissions Needed |
| --- |
| To install your solution and customize your test drive org: | Customize Application |

Secure your test drive org by:

-   Removing any sensitive data from your test drive org.
-   Ensuring that each password you specify for the admin and evaluation test accounts is unique.
-   Setting up multi-factor authentication for admin account logins.
-   Deleting the test drive org if you disable test drives on a listing.

When your potential customers click **Test Drive** on your AppExchange listing, they’re automatically logged in to your listing’s test drive org. To facilitate this login process from behind the scenes, set up an evaluation user.

1.  Log in to your test drive org.
2.  Install your solution.
3.  In Setup → Users, edit the **Eval Test** user.
    1.  Confirm that the **Test Drive Eval Profile** is assigned.
    2.  For email address, use your email with +evaluser appended. Example: johndoe+evaluser@example.com.
    3.  Wait for an email confirmation.
    4.  Reset the Eval Test user password.
4.  Complete any additional configuration that the evaluation user requires. For example, enable read-only access to your solution’s custom Apex classes or Lightning components.
5.  Double-check that the evaluation user has only the access they need, including read-only access to your test drive org and minimal access to objects.

Next, connect your fully configured test drive org to your AppExchange listing.

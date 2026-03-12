---
title: "Class Security"
domain: apex-guide
topic: class-security
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:32.716Z
estimatedTokens: 388
keywords: [Security, specify, which, users, execute, particular, top-level, based, their, user, profile, permission, sets., only, set, security, Apex, classes, triggers.]
---

# Class Security

> You can specify which users can execute methods in a particular top-level class based on their
   user profile or permission sets. You can only set security on Apex classes, not on triggers.

# Class Security

You can specify which users can execute methods in a particular top-level class based on their user profile or permission sets. You can only set security on Apex classes, not on triggers.

To set Apex class security from the class list page, see[Set Apex Class Access from the Class List Page](https://help.salesforce.com/s/articleView?id=platform.code_apex_access_via_list.htm&type=5&language=en_US)

To set Apex class security from the class detail page, see [Set Apex Class Access from the Class List Page](https://help.salesforce.com/s/articleView?id=platform.code_apex_access_via_detail.htm&type=5&language=en_US)

To set Apex class security from a permission set:

1.  From Setup, enter Permission Sets in the Quick Find box, then select **Permission Sets**.
2.  Select a permission set.
3.  Click **Apex Class Access**.
4.  Click **Edit**.
5.  Select the Apex classes that you want to enable from the Available Apex Classes list and click **Add**, or select the Apex classes that you want to disable from the Enabled Apex Classes list and click **Remove**.
6.  Click **Save**.

To set Apex class security from a profile:

1.  From Setup, enter Profiles in the Quick Find box, then select **Profiles**.
2.  Select a profile.
3.  In the Apex Class Access page or related list, click **Edit**.
4.  Select the Apex classes that you want to enable from the Available Apex Classes list and click **Add**, or select the Apex classes that you want to disable from the Enabled Apex Classes list and click **Remove**.
5.  Click **Save**.

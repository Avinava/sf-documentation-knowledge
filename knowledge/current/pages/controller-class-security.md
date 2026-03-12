---
title: "Controller Class Security"
domain: pages
topic: controller-class-security
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:23.350Z
estimatedTokens: 431
keywords: [Controller, Security, Apex, classes, specify, whether, user, execute, custom, extension, user's, profile]
---

# Controller Class Security

> Like other Apex classes, you can specify whether a user can execute methods in a custom
   controller or controller extension class based on the user's profile.

# Controller Class Security

Like other Apex classes, you can specify whether a user can execute methods in a custom controller or controller extension class based on the user's profile.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

If you’ve installed a managed package in your org, you can set security only for the Apex classes in the package that are declared as global or for classes that contain methods declared as webService.

If users have the Author Apex permission, they can access all Apex classes in the associated organization, regardless of the security settings for individual classes.

Permission for an Apex class is checked only at the top level. For example, class A calls class B. User X has a profile that can access class A but not class B. User X can execute the code in class B, but only through class A; user X cannot invoke class B directly. Likewise, if a Visualforce page uses a custom component with an associated controller, security is only checked for the controller associated with the page. The controller associated with the custom component executes regardless of permissions.

To set Apex class security from the class list page:

[Set Apex Class Access from the Class List Page](https://help.salesforce.com/s/articleView?id=platform.code_apex_access_via_list.htm&type=5&language=en_US)

To set Apex class security from the class detail page: [Set Apex Class Access from the Class Detail Page](https://help.salesforce.com/s/articleView?id=platform.code_apex_access_via_detail.htm&type=5&language=en_US)

#### See Also

-   [Security Tips for Apex and Visualforce Development](atlas.en-us.pages.meta/pages/pages_security_tips_intro.htm)

## Related Topics

- Security Tips for Apex and Visualforce Development (atlas.en-us.pages.meta/pages/pages_security_tips_intro.htm)

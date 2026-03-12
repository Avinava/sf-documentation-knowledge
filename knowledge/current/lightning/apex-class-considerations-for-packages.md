---
title: "Apex Class Considerations for Packages"
domain: lightning
topic: apex-class-considerations-for-packages
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:34:48.005Z
estimatedTokens: 609
keywords: [Apex, Considerations, Packages, Keep, mind, develop, classes, Test, Coverage, Grant, User, Access, Usage, Subscriber, Orgs]
---

# Apex Class Considerations for Packages

> Keep these considerations in mind when you develop Apex classes for
  packages.

# Apex Class Considerations for Packages

Keep these considerations in mind when you develop Apex classes for packages.

## Test Coverage

Any Apex that is included as part of your definition bundle must have at least 75% cumulative test coverage. When you upload your package to AppExchange, all tests are run to ensure that they run without errors. The tests are also run when the package is installed.

## Grant User Access for Apex Classes

An authenticated or guest user can access an @AuraEnabled Apex method only when the user’s profile or an assigned permission set allows access to the Apex class.

-   To enable access to a public Apex controller that’s part of a managed package, a subscriber org must use a permission set. You can’t enable access to a public Apex controller from a managed package using a user profile.
-   To enable access to a global Apex controller that’s part of a managed package, a subscriber org can use a permission set or a user profile.

## Apex Class Usage in Subscriber Orgs

Only methods marked with the global access modifier are accessible by Aura components from outside the managed package’s namespace. Methods marked with the public access modifier are accessible only to Aura components included in the managed package’s namespace.

If you declare an Apex method as global, you must also declare the Apex class that contains it as global.

An Aura component outside the package can access a public Apex method installed from a non-namespaced unlocked package. The Aura component can be installed from another package or created in the org. For accessing Apex methods, a non-namespaced unlocked package is treated the same as an unmanaged package.

#### See Also

-   [Granting User Access for Apex Classes](atlas.en-us.lightning.meta/lightning/apex_grant_permission.htm "An authenticated or guest user can access an @AuraEnabled Apex method only when the user’s profile or an assigned permission set allows access to the Apex class.")

-   [Apex Server-Side Controller Overview](atlas.en-us.lightning.meta/lightning/controllers_server_apex.htm "Create a server-side controller in Apex and use the @AuraEnabled annotation to enable access to the controller method.")

-   [*Apex Developer Guide*: Access Modifiers](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_access_modifiers.htm "Apex Developer Guide: Access Modifiers - HTML (New Window)")

## Related Topics

- Granting User Access for Apex Classes (atlas.en-us.lightning.meta/lightning/apex_grant_permission.htm)
- Apex Server-Side Controller Overview (atlas.en-us.lightning.meta/lightning/controllers_server_apex.htm)

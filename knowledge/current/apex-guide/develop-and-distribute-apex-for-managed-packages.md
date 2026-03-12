---
title: "Develop and Distribute Apex for Managed Packages"
domain: apex-guide
topic: develop-and-distribute-apex-for-managed-packages
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:33.665Z
estimatedTokens: 2002
keywords: [Develop, Distribute, Apex, Managed, Packages, independent, software, vendor, ISV, Salesforce, partner, code, customer, orgs, first-generation]
---

# Develop and Distribute Apex for Managed Packages

> As an independent software vendor (ISV) or Salesforce partner, you can distribute
        Apex code to customer orgs by using managed packages. For first-generation managed packages
        (1GP) and migrated second-generation managed packages (2GP), use versioning to evolve
        components of your managed package gracefully without breaking existing customer
        integrations. Understand how global Apex in managed packages behaves and learn how to
        develop global Apex in managed packages specifically for agents.

# Develop and Distribute Apex for Managed Packages

As an independent software vendor (ISV) or Salesforce partner, you can distribute Apex code to customer orgs by using managed packages. For first-generation managed packages (1GP) and migrated second-generation managed packages (2GP), use versioning to evolve components of your managed package gracefully without breaking existing customer integrations. Understand how global Apex in managed packages behaves and learn how to develop global Apex in managed packages specifically for agents.

As you develop managed Apex, keep these points in mind.

-   The code contained in an Apex class, trigger, or Visualforce component that’s part of a managed package is obfuscated. You generally can’t view this code in an installing org. The only exceptions are methods declared as global. You can view global method signatures in an installing org. In addition, license management organization users with the View and Debug Managed Apex permission can view their packages’ obfuscated Apex classes when logged in to subscriber orgs via the Subscriber Support Console.
-   1GP managed packages each have a unique namespace. 2GP managed packages can have the same namespace as other 2GP managed packages. However, you can’t associate a single 2GP managed package with more than one namespace. The namespace is prepended to your class’s names, methods, variables, and so on, which helps prevent duplicate names in a subscriber’s org.
-   You can use the [@NamespaceAccessible](atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_NamespaceAccessible.htm) annotation to make public Apex in a 2GP managed package available to other 2GP managed packages that use the same namespace.
-   In a single transaction, you can reference only 10 unique namespaces. For example, suppose that you have an object that executes a class in a managed package when the object is updated. Then that class updates a second object, which in turn executes a different class in a different package. Even though the first package didn’t access the second package directly, the access occurs in the same transaction. It’s therefore included in the number of namespaces accessed in a single transaction.
-   You can use the [@Deprecated](atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_deprecated.htm) annotation to identify methods, classes, exceptions, enums, interfaces, and variables that can no longer be referenced in subsequent releases of the managed package in which they reside. This annotation is useful when you’re refactoring code in managed packages as the requirements evolve. See [Deprecate Apex in Managed Packages](atlas.en-us.apexcode.meta/apexcode/apex_manpkgs_deprecated.htm "Use the @Deprecated annotation to specify Apex identifiers that can subscribers can no longer reference in subsequent releases of the managed package. Deprecation is useful when you’re refactoring code in managed packages as the requirements evolve.").
-   For 1GP and migrated 2GP managed packages, you can write test methods that change the package version context to a different package version by using the System.runAs() method. See [Testing Behavior in Package Versions](atlas.en-us.apexcode.meta/apexcode/apex_manpkgs_behavior_testing.htm "When you change the behavior in an Apex class or trigger for different package versions, it’s important to test that your code runs as expected in the different package versions. You can write test methods that change the package version context to a different package version by using the System.runAs method. You can only use System.runAs in a test method.").
-   You can’t add a method to a global interface or an abstract method to a global class after you upload that interface or class in a Managed - Released package version. If the class in the Managed - Released package is virtual, the method that you can add to it must also be virtual and must have an implementation. If the class in the Managed - Release package extends another class, you can’t remove the existing class’s contract. See [Best Practices for Using Global Apex in Managed Packages](atlas.en-us.apexcode.meta/apexcode/apex_manpkgs_global_best_practices.htm "As an independent software vendor (ISV) developer, understand when and how to use global Apex in managed packages. Learn design patterns that maximize flexibility and comply with the strict manageability rules applied to global Apex after your managed package’s release. By following these best practices, you can improve the stability and maintainability of your API.").

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

If a ConnectApi class has a dependency on Chatter, the code can be compiled and installed in orgs that don’t have Chatter enabled. However, if Chatter isn’t enabled, the code throws an error at run time. See [Packaging ConnectApi Classes](atlas.en-us.apexcode.meta/apexcode/apex_connect_api_packaging.htm "If you include ConnectApi classes in a package, be aware of Chatter dependencies.").

-   **[Apex Versioning in Managed Packages](atlas.en-us.apexcode.meta/apexcode/apex_manpkgs_package_versions.htm)**
    A managed package component can exhibit different behavior in different package versions. By versioning managed Apex, you can add and refine components in the managed package, while maintaining backwards compatibility for existing subscribers.
-   **[Version Apex Code Behavior](atlas.en-us.apexcode.meta/apexcode/apex_manpkgs_behavior.htm)**
    Package developers can use conditional logic in Apex classes and triggers to exhibit different behavior for different versions. With this conditional logic, you can support existing behavior in classes and triggers in previous package versions while evolving the code.
-   **[Apex Code Items That Aren’t Versioned](atlas.en-us.apexcode.meta/apexcode/apex_manpkgs_behavior_not_versioned.htm)**
    Some Apex items in managed packages can’t be versioned. The changes that you make to these items are reflected across all package versions. Additionally, there are limitations to the changes that you can make to some of these items when they are used in Apex code in managed packages.
-   **[Deprecate Managed Apex](atlas.en-us.apexcode.meta/apexcode/apex_manpkgs_deprecated.htm)**
    Use the @Deprecated annotation to specify Apex identifiers that can subscribers can no longer reference in subsequent releases of the managed package. Deprecation is useful when you’re refactoring code in managed packages as the requirements evolve.
-   **[Testing Versioned Behavior in Apex Code](atlas.en-us.apexcode.meta/apexcode/apex_manpkgs_behavior_testing.htm)**
    When you change the behavior in an Apex class or trigger for different package versions, it’s important to test that your code runs as expected in the different package versions. You can write test methods that change the package version context to a different package version by using the System.runAs method. You can only use System.runAs in a test method.
-   **[Best Practices for Using Global Apex in Managed Packages](atlas.en-us.apexcode.meta/apexcode/apex_manpkgs_global_best_practices.htm)**
    As an independent software vendor (ISV) developer, understand when and how to use global Apex in managed packages. Learn design patterns that maximize flexibility and comply with the strict manageability rules applied to global Apex after your managed package’s release. By following these best practices, you can improve the stability and maintainability of your API.
-   **[Design Managed Apex for Agentforce](atlas.en-us.apexcode.meta/apexcode/apex_manpkgs_agent.htm)**
    As an independent software vendor (ISV) developer, you can build custom agent actions using Apex and distribute them in managed packages. To ensure that subscriber admins can declaratively configure your Apex agent actions and that Agentforce can invoke the actions at run time, follow these requirements and recommendations.

## Related Topics

- @NamespaceAccessible (atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_NamespaceAccessible.htm)
- @Deprecated (atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_deprecated.htm)
- Deprecate Apex in Managed Packages (atlas.en-us.apexcode.meta/apexcode/apex_manpkgs_deprecated.htm)
- Testing
                    Behavior in Package Versions (atlas.en-us.apexcode.meta/apexcode/apex_manpkgs_behavior_testing.htm)
- Best Practices for Using Global Apex in Managed
                    Packages (atlas.en-us.apexcode.meta/apexcode/apex_manpkgs_global_best_practices.htm)
- Packaging ConnectApi Classes (atlas.en-us.apexcode.meta/apexcode/apex_connect_api_packaging.htm)
- Apex Versioning in Managed Packages (atlas.en-us.apexcode.meta/apexcode/apex_manpkgs_package_versions.htm)
- Version Apex Code Behavior (atlas.en-us.apexcode.meta/apexcode/apex_manpkgs_behavior.htm)
- Apex Code Items That Aren’t Versioned (atlas.en-us.apexcode.meta/apexcode/apex_manpkgs_behavior_not_versioned.htm)
- Deprecate Managed Apex (atlas.en-us.apexcode.meta/apexcode/apex_manpkgs_deprecated.htm)

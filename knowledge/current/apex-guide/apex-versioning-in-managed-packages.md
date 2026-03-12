---
title: "Apex Versioning in Managed Packages"
domain: apex-guide
topic: apex-versioning-in-managed-packages
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:33.694Z
estimatedTokens: 904
keywords: [Apex, Versioning, Managed, Packages, package, component, exhibit, different, behavior, versions, add, refine, components, maintaining, backwards]
---

# Apex Versioning in Managed Packages

> A managed package component can exhibit different behavior in different package
  versions. By versioning managed Apex, you can add and refine components in the managed package,
  while maintaining backwards compatibility for existing subscribers.

# Apex Versioning in Managed Packages

A managed package component can exhibit different behavior in different package versions. By versioning managed Apex, you can add and refine components in the managed package, while maintaining backwards compatibility for existing subscribers.

A package version is a number that identifies the set of components uploaded in a package. The version number has the format majorNumber.minorNumber.patchNumber (for example, 2.1.3). The major and minor numbers increase to a chosen value during every major release. The patchNumber is generated and updated only for a patch release.

Unmanaged packages aren’t upgradeable, so each package version is simply a set of components for distribution. A package version has more significance for managed packages. With managed packages, you can specify different component behavior based on the package version. This practice allows you to evolve the components in your managed package without breaking existing subscriber integrations.

When an existing subscriber installs a new package version, there’s still only one instance of each component in the package. However, the components can emulate older versions. For example, a subscriber can use a managed package that contains an Apex class. If the publisher decides to deprecate a method in the Apex class and release a new package version, the subscriber still sees only one instance of the Apex class after installing the new version. However, this Apex class can still emulate the previous version for any code that references the deprecated method in the older version.

#### See Also

-   [Version Apex Code Behavior](atlas.en-us.apexcode.meta/apexcode/apex_manpkgs_behavior.htm "Package developers can use conditional logic in Apex classes and triggers to exhibit different behavior for different versions. With this conditional logic, you can support existing behavior in classes and triggers in previous package versions while evolving the code.")

-   [Apex Code Items That Aren’t Versioned](atlas.en-us.apexcode.meta/apexcode/apex_manpkgs_behavior_not_versioned.htm "Some Apex items in managed packages can’t be versioned. The changes that you make to these items are reflected across all package versions. Additionally, there are limitations to the changes that you can make to some of these items when they are used in Apex code in managed packages.")

-   [Deprecate Managed Apex](atlas.en-us.apexcode.meta/apexcode/apex_manpkgs_deprecated.htm "Use the @Deprecated annotation to specify Apex identifiers that can subscribers can no longer reference in subsequent releases of the managed package. Deprecation is useful when you’re refactoring code in managed packages as the requirements evolve.")

-   [Testing Versioned Behavior in Apex Code](atlas.en-us.apexcode.meta/apexcode/apex_manpkgs_behavior_testing.htm "When you change the behavior in an Apex class or trigger for different package versions, it’s important to test that your code runs as expected in the different package versions. You can write test methods that change the package version context to a different package version by using the System.runAs method. You can only use System.runAs in a test method.")

-   [Set Package Versions for Apex Classes and Triggers (for package subscribers)](atlas.en-us.apexcode.meta/apexcode/apex_manpkgs_subscriber_version.htm#apex_manpkgs_subscriber_version "As a managed package subscriber, you can specify which package version that your managed Apex classes and triggers use. Set the package version in Setup, through metadata deployments, or with API requests.")

## Related Topics

- Version Apex Code Behavior (atlas.en-us.apexcode.meta/apexcode/apex_manpkgs_behavior.htm)
- Apex Code Items That Aren’t Versioned (atlas.en-us.apexcode.meta/apexcode/apex_manpkgs_behavior_not_versioned.htm)
- Deprecate Managed Apex (atlas.en-us.apexcode.meta/apexcode/apex_manpkgs_deprecated.htm)
- Testing Versioned Behavior in Apex Code (atlas.en-us.apexcode.meta/apexcode/apex_manpkgs_behavior_testing.htm)
- Set Package Versions for Apex Classes and Triggers (for package
       subscribers) (atlas.en-us.apexcode.meta/apexcode/apex_manpkgs_subscriber_version.htm)

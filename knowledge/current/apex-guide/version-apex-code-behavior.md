---
title: "Version Apex Code Behavior"
domain: apex-guide
topic: version-apex-code-behavior
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:47.298Z
keywords: [Version, Apex, Code, Behavior, Note, See]
---

# Version Apex Code Behavior

# Version Apex Code Behavior

Package developers can use conditional logic in Apex classes and triggers to exhibit different behavior for different versions. With this conditional logic, you can support existing behavior in classes and triggers in previous package versions while evolving the code.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

Starting in Summer ’25, package subscribers can use Version Settings to specify the version of a migrated second-generation managed package (2GP) that an Apex class depends on. This functionality is already available to first-generation managed packages (1GP), but isn’t yet supported in 2GP packages that weren’t converted from a 1GP package. See [Apex Version Settings in Migrated Second-Generation Managed Packages (2GP)](https://help.salesforce.com/s/articleView?id=005101483&type=1&language=en_US).

When subscribers install multiple versions of your package and write code that references Apex classes or triggers in your package, they must [select the version](atlas.en-us.apexcode.meta/apexcode/apex_classes_version_settings_intro.htm "To aid backwards-compatibility, classes and triggers are stored with the version settings for a specific Salesforce API version.") that they’re referencing. Within the Apex code that is being referenced in your package, you can conditionally execute different code paths based on the version setting of the calling Apex code that is making the reference. The package version setting of the calling code can be determined within the package code by calling the System.requestVersion method. In this way, package developers can determine the request context and specify different behavior for different versions of the package.

This example uses the System.requestVersion method and instantiates the System.Version class to define different behaviors in an Apex trigger for different package versions.

```

```

For a full list of methods that work with package versions, see [Version Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_version.htm) and the System.requestVersion method in [System Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_system.htm).

The request context persists if a class in an installed package invokes a method of another class in the package. For example, imagine that a subscriber installs a GeoReports package that contains CountryUtil and ContinentUtil classes. The subscriber creates a GeoReportsEx class and associates it with version 2.3 of the GeoReports package. If GeoReportsEx invokes a ContinentUtil method that internally invokes a CountryUtil method, the request context propagates from ContinentUtil to CountryUtil. Therefore, the System.requestVersion method in CountryUtil returns version 2.3 of the GeoReports package.

#### See Also

-   [Set Package Versions for Apex Classes and Triggers (for package subscribers)](atlas.en-us.apexcode.meta/apexcode/apex_manpkgs_subscriber_version.htm#apex_manpkgs_subscriber_version "As a managed package subscriber, you can specify which package version that your managed Apex classes and triggers use. Set the package version in Setup, through metadata deployments, or with API requests.")
    
-   [Safely Upgrade Packages from Developer and Subscriber Perspectives](atlas.en-us.apexcode.meta/apexcode/apex_manpkgs_safe_upgrades.htm "Learn how to upgrade a managed package safely through this extended example. See the actions that package developers and subscribers can take to ensure a smooth transition and safeguard the backwards compatibility of existing integrations.")
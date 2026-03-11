---
title: "Safely Upgrade Packages from Developer and Subscriber Perspectives"
domain: apex-guide
topic: safely-upgrade-packages-from-developer-and-subscriber-perspectives
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:47.336Z
keywords: [Safely, Upgrade, Packages, Developer, Subscriber, Perspectives, Package, Publishes, Version, 1.0, Adds, Functionality, Overriding, Method, Releases, 2.0, Implements, Subscriber’s, Custom, Upgrades]
---

# Safely Upgrade Packages from Developer and Subscriber Perspectives

# Safely Upgrade Packages from Developer and Subscriber Perspectives

Learn how to upgrade a managed package safely through this extended example. See the actions that package developers and subscribers can take to ensure a smooth transition and safeguard the backwards compatibility of existing integrations.

These sections follow an example package developer and package subscriber as they move through a managed package upgrade process.

## 1\. Package Developer: Publishes Version 1.0

The package developer publishes version 1.0 of a 1GP managed package in the eshop namespace. The package contains Apex CustomCart and CartCalculator classes.

```

```

```

```

## 2\. Package Subscriber: Adds Functionality by Overriding a Method

The package subscriber installs version 1.0 of the managed package, but they find that the existing CartCalculator class is inadequate. They want the ability to factor shipping costs into the total cart price.

So, the subscriber extends the CartCalculator class in the managed package with a custom CartCalculatorWithShipping class. They override the getTotalPrice() method so that the total price includes the shipping cost.

```

```

## 3\. Package Developer: Releases Version 2.0 and Implements the Subscriber’s Custom Functionality

The package developer releases version 2.0 of the managed package. In this version, the CartCalculator class now includes a native shipping cost calculator. The updated getTotalPrice() method calls the new getShippingCost() method. Notice that the package developer uses the same method name for getShippingCost() as the subscriber does for their custom override method.

```

```

## 4\. Package Subscriber: Upgrades to Version 2.0 Without Specifying a Package Version for the Apex Class

By default, an Apex class or trigger is associated with the version of the managed package installed when the class or trigger was most recently deployed.

In this example, the package subscriber created and saved the CartCalculatorWithShipping class when the eshop managed package was on version 1.0. If the package subscriber upgrades their eshop managed package to version 2.0, and doesn’t redeploy the CartCalculatorWithShipping class, then that class is still associated with version 1.0 of the managed package.

Let’s say that the package subscriber upgrades their eshop managed package to version 2.0, but does try to redeploy CartCalculatorWithShipping. In this case, the subscriber encounters this compilation error: Method must use the override keyword: public Decimal getShippingCost(CustomCart c).

This error occurs because there’s a mismatch in the shape of the API. The subscriber’s original CartCalculatorWithShipping class has a getShippingCost() method, and the CartCalculator class in version 2.0 of the managed package now also includes a getShippingCost() method. The subscriber didn’t specify a package version for the CartCalculatorWithShipping class, so upon redeployment, the class is now associated with version 2.0 of the managed package. Therefore, the subscriber’s getShippingCost() method technically overrides the getShippingCost() method in CartCalculator, and so the Apex compiler requires an override keyword for the method.

## 5\. Package Subscriber: Sets Apex Class to Package Version 1.0

To avoid this compilation error, the package subscriber explicitly sets a package version for the CartCalculatorWithShipping class. When is set to a specific package version, the class views the package’s global Apex as if that version was installed.

In this case, setting CartCalculatorWithShipping to version 1.0 of the managed package avoids a compilation error because the package’s CartCalculator class doesn’t define a getShippingCost() method until version 2.0. As long as the CartCalculatorWithShipping class is set to an earlier package version, the package’s CartCalculator class doesn’t expose the getShippingCost() method to the subscriber. Therefore, the Apex compiler doesn’t flag the subscriber’s own getShippingCost() method as needing to override the method in the managed package.

To override the default package version for an Apex class or trigger, use the Salesforce Setup UI or the packageVersions field of the class’s ApexClass metadata type. See [Set Package Versions for Apex Classes and Triggers](atlas.en-us.apexcode.meta/apexcode/apex_manpkgs_subscriber_version.htm#apex_manpkgs_subscriber_version "As a managed package subscriber, you can specify which package version that your managed Apex classes and triggers use. Set the package version in Setup, through metadata deployments, or with API requests.").

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

In Spring ’25 and earlier, setting Apex classes and triggers to a package version was available for only first-generation managed packages (1GP). In Summer ’25 and later, package version setting is also available for migrated 2GP managed packages. Package version setting isn’t yet supported in 2GP packages that weren’t converted from a 1GP package. See [Apex Version Settings in Migrated Second-Generation Managed Packages (2GP)](https://help.salesforce.com/s/articleView?id=005101483&type=1&language=en_US).

For migrated 2GP managed packages, the packageVersions field of the ApexClass metadata type is different from that of 1GP managed packages. 2GP managed packages are identified by their package ID, whereas 1GP managed packages are identified by their namespace. This difference occurs because multiple 2GP managed packages can have the same namespace, whereas 1GP managed packages each require a unique namespace.

For example, here’s the metadata file for the subscriber’s CartCalculatorWithShipping class, where the class is set to version 1.0 of the managed package. Because the package is a 1GP managed package, the namespace is specified instead of the package ID.

```

```

## 6\. Package Subscriber: getTotalPrice() Returns an Incorrect Value

The subscriber sets the CartCalculatorWithShipping class to version 1.0 of the managed package and successfully recompiles the class. However, the subscriber now encounters a new issue at run time: the getTotalPrice() method in the CartCalculatorWithShipping class returns the wrong total price.

Recall that specifying an earlier package version for an Apex class or trigger hides globals that are defined in later versions during compilation. In other words, setting a package version preserves the shape of the API. However, it doesn’t necessarily preserve the behavior of the API at run time.

In version 1.0, the getTotalPrice() method in the CartCalculator class returns only the base price. But in version 2.0, the getTotalPrice() method now returns the price plus the result of getTotalShippingCost(). The getTotalPrice() method exists in both versions of the managed package, even though its behavior differs. Therefore, even if the subscriber sets the CartCalculatorWithShipping class to version 1.0, the getTotalPrice() executes with its version 2.0 behavior at run time.

Remember that the subscriber’s getTotalPrice() method in their CartCalculatorWithShipping class overrides the native getTotalPrice() method in the managed package. The subscriber’s override method adds the getShippingCost() result to the result of the native getTotalPrice() method. In version 2.0 of the managed package, the native getTotalPrice() method already adds the shipping cost, so the shipping cost is erroneously added twice.

```

```

To resolve this problem without requiring the subscriber to change their code, the package developer must version the behavior of Apex classes and triggers in the package.

## 7\. Package Developer: Implements Backward Compatibility with System.requestVersion()

After the package subscriber informs the package developer about the unexpected getTotalPrice() behavior, the package developer releases a patch update. Version 2.1 of the package allows the subscriber to keep their original CartCalculatorWithShipping class by implementing backwards compatibility with [System.requestVersion()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_system.htm#apex_System_System_requestVersion).

Here’s version 2.1 of the CartCalculator class that contains an updated getTotalPrice() method. In the method, a callerVersion variable is set to System.requestVersion(), which returns a [Version](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_version.htm) object that represents the managed package version of the calling class. A minVersionWithShippingCost variable is set to the managed package version that introduced the changed getTotalPrice() behavior.

Then, the [Version.compareTo()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_version.htm#apex_System_Version_compareTo) method compares callerVersion and minVersionWithShippingCost. If the caller version is earlier than the version that the shipping cost feature was introduced in, then getTotalPrice() returns the price. This value aligns with the original behavior in version 1.0 of the managed package. If the caller version matches or is later than the version that the shipping cost feature was introduced in, then getTotalPrice() returns the price addition to the shipping cost.

```

```

By versioning the behavior of getTotalPrice(), the package developer has implemented basic backward compatibility for the class. Now, as long as package subscribers set Apex classes to the desired managed package version, then their existing implementations won’t break when they upgrade from version 1.0 to version 2.1 of the package.

## 8: Package Developer: Tests Backward Compatibility with System.runAs()

To ensure that getTotalPrice() now behaves differently based on the package version of the calling code, the package developer can use [System.runAs()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_system.htm#apex_System_System_runAs) in their unit tests. This method, which can only be used in test methods, changes the current package version to the package version specified in the argument Here’s a basic unit test that the package developer implements for getTotalPrice().

```

```

## Summary: Shared Responsibilities for Safe Package Upgrades

The extended example demonstrates that the package developer and package subscriber both play a role in ensuring safe package upgrades. Here’s a table that summarizes the recommended actions that each actor can take so that the package can evolve without compromising subscriber implementations.

| Goal | Actor | Action |
| --- | --- | --- |
| Version API Shape | Package Subscriber | Be aware of the default versioned behavior: an Apex class or trigger is associated with the version of a managed package installed when that class or trigger was most recently deployed or saved.If necessary, override the default by explicitly setting dependent Apex classes and triggers to a specific package version.See Set Package Versions for Apex Classes and Triggers. |
| Version API Behavior | Package Developer | Version changed behavior with System.requestVersion(), and test it with System.runAs(). See Version Apex in Managed Packages. |

#### See Also

-   [Develop and Distribute Apex for Managed Packages](atlas.en-us.apexcode.meta/apexcode/apex_manpkgs_chapter.htm "As an independent software vendor (ISV) or Salesforce partner, you can distribute Apex code to customer orgs by using managed packages. For first-generation managed packages (1GP) and migrated second-generation managed packages (2GP), use versioning to evolve components of your managed package gracefully without breaking existing customer integrations. Understand how global Apex in managed packages behaves and learn how to develop global Apex in managed packages specifically for agents.")
    
-   [Use Apex Referenced by Managed Packages](atlas.en-us.apexcode.meta/apexcode/apex_manpkgs_subscriber_intro.htm "Learn how to use managed Apex effectively as a managed package subscriber.")
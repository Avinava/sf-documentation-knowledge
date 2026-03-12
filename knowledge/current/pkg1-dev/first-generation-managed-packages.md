---
title: "First-Generation Managed Packages"
domain: pkg1-dev
topic: first-generation-managed-packages
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:25.729Z
estimatedTokens: 1646
keywords: [First-Generation, Managed, Packages, Salesforce, partners, distribute, sell, applications, customers, AppExchange, License, Management, Application, LMA, developers]
---

# First-Generation Managed Packages

> Managed packages are used by Salesforce partners to distribute and sell applications to
    customers. Using AppExchange and the License Management Application (LMA), developers can sell
    and manage user-based licenses to their app. Managed packages are upgradeable.

# First-Generation Managed Packages

Managed packages are used by Salesforce partners to distribute and sell applications to customers. Using AppExchange and the License Management Application (LMA), developers can sell and manage user-based licenses to their app. Managed packages are upgradeable.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

Building a new app? Have you considered using second-generation managed packages? Flexible versioning and the ability to share a namespace across packages are just two reasons why developers love creating second-generation managed packages. We think you’d love it, too. To learn more, see: [Why Switch to Second-Generation Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/why_switch_2GP.htm), and [Comparison of First- and Second-Generation Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_comparison.htm).

-   **[Why Switch to Second-Generation Managed Packaging?](atlas.en-us.pkg1_dev.meta/pkg1_dev/why_switch_2GP.htm)**
    You’ve been using first-generation managed packages to develop your apps, so you’re probably pretty familiar with what works well, and what’s a bit more painful than you’d like. And no doubt, you’re aware that second-generation managed packages is our newer technology, but maybe you aren’t so sure why switching to second-generation managed packaging (managed 2GP) will improve your package development experience. So let’s talk about that.
-   **[Move to 2GP: Migrate Your Managed Packages with Ease](atlas.en-us.pkg1_dev.meta/pkg1_dev/move_to_second_gen_pkg.htm)**
    Are you still using first-generation managed packaging (1GP) for your package development work? If so, you're not alone. Many ISVs like you are looking to move to second-generation managed packaging (2GP) and take advantage of its many benefits.
-   **[Register a Namespace for a First-Generation Managed Package](atlas.en-us.pkg1_dev.meta/pkg1_dev/register_namespace_prefix.htm)**
    A namespace is a one to 15-character alphanumeric identifier that distinguishes your package and its contents from packages of other developers on AppExchange. Namespace prefixes are case-insensitive. For example, ABC and abc aren’t recognized as unique. Your namespace must be globally unique across all Salesforce orgs.
-   **[Create a First-Generation Managed Package Using a UI](atlas.en-us.pkg1_dev.meta/pkg1_dev/creating_packages.htm)**
    If your goal is to build an app and distribute it on AppExchange, you use managed packages to do both. Packaging is the container that you fill with metadata, and it holds the set of related features, customizations, and schema that make up your app. A package can include many different metadata components, and you can package a single component, an app, or library.
-   **[Create a First-Generation Managed Package using Salesforce DX](atlas.en-us.pkg1_dev.meta/pkg1_dev/sfdx_dev_build_release.htm)**
    If you’re an ISV, you want to build a managed package. A managed package is a bundle of components that make up an application or piece of functionality. A managed package is a great way to release an app for sale and to support licensing your features. You can protect intellectual property because the source code of many components isn’t available through the package. You can also roll out upgrades to the package.
-   **[Components Available in First-Generation Managed Packages](atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm#first_gen_packageable_components)**
    Each metadata component that you include in a first-generation managed package has certain rules that determine its behavior in a subscriber org. Manageability rules determine whether you, or the subscriber, can edit or remove components after the package version is created and installed.
-   **[Behavior of Specific Metadata in First-Generation Managed Packages](atlas.en-us.pkg1_dev.meta/pkg1_dev/packaging_specific_md.htm)**
    Learn how profiles and other metadata are handled for first-generation managed packages.
-   **[Package and Test Your First-Generation Managed Package](atlas.en-us.pkg1_dev.meta/pkg1_dev/packaging_testing.htm)**
    Learn how to package, upload, and install a beta version of your first-generation managed package as part an iterative development approach. After your beta is up and running, learn how to test, fix, extend, and uninstall the package.
-   **[Update Your First-Generation Managed Package](atlas.en-us.pkg1_dev.meta/pkg1_dev/packaging_upgrading.htm)**
    Your app is ready for an update. Learn how to fix small issues with patches and make major changes with upgrades.
-   **[Publish Upgrades to First-Generation Managed Packages](atlas.en-us.pkg1_dev.meta/pkg1_dev/publish_upgrades.htm)**
    As a publisher, first ensure that your app is upgradeable by converting it to a managed package.
-   **[Manage Licenses for Managed Packages](atlas.en-us.pkg1_dev.meta/pkg1_dev/lma_intro.htm)**
    Use the License Management App (LMA) to manage leads and licenses for your AppExchange solutions. By integrating the LMA into your sales and marketing processes, you can better engage with prospects, retain existing customers, and grow your ISV business. The LMA is a managed package that is installed in all partner business orgs (PBO) and includes custom objects that track details on packages, package versions, and licenses.
-   **[Manage Features in First-Generation Managed Packages](atlas.en-us.pkg1_dev.meta/pkg1_dev/fma_manage_features.htm)**
    Control how you release features to customers with the Feature Management App (FMA). The FMA extends the functionality of the License Management App (LMA). Use the FMA to manage features as easily as you manage licenses with the LMA.
-   **[AppExchange App Analytics for First-Generation Managed Packages](atlas.en-us.pkg1_dev.meta/pkg1_dev/app_analytics_intro_1gp.htm)**
    AppExchange App Analytics provides usage data about how subscribers interact with your first-generation (1GP) managed packages and packaged components. You can use these details to identify attrition risks, inform feature development decisions, and improve user experience.
-   **[Developing and Distributing Unmanaged Packages](atlas.en-us.pkg1_dev.meta/pkg1_dev/packaging_developing_unmanaged.htm)**
    Unmanaged packages can be used for distributing open-source projects to developers, or as a one-time drop of applications that require customization after installation.

## Related Topics

- Why Switch to Second-Generation Managed Packaging? (atlas.en-us.pkg1_dev.meta/pkg1_dev/why_switch_2GP.htm)
- Move to 2GP: Migrate Your Managed Packages with Ease (atlas.en-us.pkg1_dev.meta/pkg1_dev/move_to_second_gen_pkg.htm)
- Register a Namespace for a First-Generation Managed Package (atlas.en-us.pkg1_dev.meta/pkg1_dev/register_namespace_prefix.htm)
- Create a First-Generation Managed Package Using a UI (atlas.en-us.pkg1_dev.meta/pkg1_dev/creating_packages.htm)
- Create a First-Generation Managed Package using Salesforce DX (atlas.en-us.pkg1_dev.meta/pkg1_dev/sfdx_dev_build_release.htm)
- Components Available in First-Generation Managed Packages (atlas.en-us.pkg1_dev.meta/pkg1_dev/first_gen_packageable_components.htm)
- Behavior of Specific Metadata in First-Generation Managed Packages (atlas.en-us.pkg1_dev.meta/pkg1_dev/packaging_specific_md.htm)
- Package and Test Your First-Generation Managed Package (atlas.en-us.pkg1_dev.meta/pkg1_dev/packaging_testing.htm)
- Update Your First-Generation Managed Package (atlas.en-us.pkg1_dev.meta/pkg1_dev/packaging_upgrading.htm)
- Publish Upgrades to First-Generation Managed Packages (atlas.en-us.pkg1_dev.meta/pkg1_dev/publish_upgrades.htm)

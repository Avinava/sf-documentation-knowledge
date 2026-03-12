---
title: "Apex Code Versions"
domain: apex-guide
topic: apex-code-versions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:32.736Z
estimatedTokens: 824
keywords: [Apex, Code, Versions, aid, backwards-compatibility, classes, triggers, stored, version, settings, specific, Salesforce, API, version., Versioning, Classes]
---

# Apex Code Versions

> To aid backwards-compatibility, classes and triggers are stored with the version
        settings for a specific Salesforce API version.

# Apex Code Versions

To aid backwards-compatibility, classes and triggers are stored with the version settings for a specific Salesforce API version.

If an Apex class or trigger references components, such as a custom object, in installed managed packages, the version settings for each managed package referenced by the class are saved too. This ensures that as Apex, the API, and the components in managed packages evolve in subsequent released versions, a class or trigger is still bound to versions with specific, known behavior.

Setting a version for an installed package determines the exposed interface of any Apex code in the installed package. This allows you to continue to reference Apex that may be deprecated in the latest version of an installed package, if you installed a version of the package before the code was deprecated.

Typically, you reference the latest Salesforce API version and each installed package version. If you save an Apex class or trigger without specifying the Salesforce API version, the class or trigger is associated with the latest installed version by default. If you save or redeploy an Apex class or trigger that references a managed package without specifying a version of the managed package, the class or trigger is associated with the latest installed version of the managed package by default.

## Versioning of Apex Classes and Methods

When classes and methods are added to the Apex language, those classes and methods are available to all API versions your Apex code is saved with, regardless of the API version (Salesforce release) they were introduced in. For example, if a method was added in API version 33.0, you can use this method in a custom class saved with API version 33.0 or another class saved with API version 25.0.

There is one exception to this rule. The classes and methods of the [ConnectApi](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_classes_connect_api.htm) namespace are supported only in the API versions specified in the documentation. For example, if a class or method is introduced in API version 33.0, it is not available in earlier versions. For more information, see [ConnectApi Versioning and Equality Checking](atlas.en-us.apexcode.meta/apexcode/apex_connectapi_versioning.htm#apex_connectapi_versioning "Versioning in ConnectApi classes follows specific rules that are different than the rules for other Apex classes.").

-   **[Setting the Salesforce API Version for Classes and Triggers](atlas.en-us.apexcode.meta/apexcode/apex_classes_version_settings_api.htm)**

-   **[Setting Package Versions for Apex Classes and Triggers](atlas.en-us.apexcode.meta/apexcode/apex_classes_version_settings_packages.htm)**
    As a managed package subscriber, you can specify which package version that your managed Apex classes and triggers use.

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_classes_namespace_prefix.htm "Namespace Prefix")
-   [Next →](atlas.en-us.apexcode.meta/apexcode/apex_classes_list_sorting.htm "Lists of Custom Types and Sorting")

#### See Also

-   [Use Apex Referenced by Managed Packages](atlas.en-us.apexcode.meta/apexcode/apex_manpkgs_subscriber_intro.htm "Learn how to use managed Apex effectively as a managed package subscriber.")

## Related Topics

- ConnectApi Versioning and Equality Checking (atlas.en-us.apexcode.meta/apexcode/apex_connectapi_versioning.htm)
- Setting the Salesforce API Version for Classes and Triggers (atlas.en-us.apexcode.meta/apexcode/apex_classes_version_settings_api.htm)
- Setting Package Versions for Apex Classes and Triggers (atlas.en-us.apexcode.meta/apexcode/apex_classes_version_settings_packages.htm)
- ← Previous (atlas.en-us.apexcode.meta/apexcode/apex_classes_namespace_prefix.htm)
- Next → (atlas.en-us.apexcode.meta/apexcode/apex_classes_list_sorting.htm)
- Use Apex Referenced by Managed Packages (atlas.en-us.apexcode.meta/apexcode/apex_manpkgs_subscriber_intro.htm)

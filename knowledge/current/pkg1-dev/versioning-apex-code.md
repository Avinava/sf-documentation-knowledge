---
title: "Versioning Apex Code"
domain: pkg1-dev
topic: versioning-apex-code
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:25.526Z
estimatedTokens: 282
keywords: [Versioning, Apex, Code, subscribers, install, multiple, versions, package, write, references, classes, triggers, they, specify, version]
---

# Versioning Apex Code

> When subscribers install multiple versions of your package and write code that
    references Apex classes or triggers in your package, they must specify the version that they’re
    referencing.

# Versioning Apex Code

When subscribers install multiple versions of your package and write code that references Apex classes or triggers in your package, they must specify the version that they’re referencing.

Within the Apex code that is being referenced in your package, you can conditionally execute different code paths based on the version setting of the calling Apex code that is making the reference. The package version setting of the calling code can be determined within the package code by calling the System.requestVersion method. In this way, package developers can determine the request context and specify different behavior for different versions of the package.

The following sample shows different behavior in a trigger for different package versions:

```

```

To compare different versions of your Apex classes, click the **Class Definition** tab when viewing the class details.

For more information about the System.requestVersion method, see the [Apex Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_version.htm "HTML (New Window)").

## Code Examples

```apex
trigger oppValidation on Opportunity (before insert, before update) {

    for (Opportunity opp : Trigger.new){
    
        // Add a new validation to the package
        // Applies to versions of the managed package greater than 1.0
        if (System.requestVersion().compareTo(new Version(1,0)) > 0) {
            if (opp.Probability >= 50 && opp.Description == null) {
                opp.addError('All deals over 50% require a description');
            }
        }

        // Validation applies to all versions of the managed package.
        if (opp.IsWon == true && opp.LeadSource == null) {
            opp.addError('A lead source must be provided for all Closed Won deals');
        }
    }
}
```

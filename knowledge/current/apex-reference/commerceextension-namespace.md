---
title: "CommerceExtension Namespace"
domain: apex-reference
topic: commerceextension-namespace
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:42.065Z
keywords: [CommerceExtension, Namespace]
---

# CommerceExtension Namespace

# CommerceExtension Namespace

Use the CommerceExtension namespace to define resolution strategies for registered Commerce extensions.

The following are the classes in the CommerceExtension namespace.

-   **[ExtensionInfo Class](atlas.en-us.apexref.meta/apexref/apex_class_CommerceExtension_ExtensionInfo.htm#apex_class_CommerceExtension_ExtensionInfo)**  
    Contains static methods to expose extension-related context information.
-   **[Resolution Class](atlas.en-us.apexref.meta/apexref/apex_class_CommerceExtension_Resolution.htm#apex_class_CommerceExtension_Resolution)**  
    Resolution of a resolution strategy, which conditionally invokes default domain logic, logic provided by an extension provider, or no logic.
-   **[ResolutionException Class](atlas.en-us.apexref.meta/apexref/apex_class_CommerceExtension_ResolutionException.htm#apex_class_CommerceExtension_ResolutionException)**  
    Exception indicating a problem with the execution of a resolution strategy.
-   **[ResolutionStates Enum](atlas.en-us.apexref.meta/apexref/apex_enum_CommerceExtension_ResolutionStates.htm)**  
    Potential resolution states for a resolution strategy.
-   **[ResolutionStrategy Interface](atlas.en-us.apexref.meta/apexref/apex_interface_CommerceExtension_ResolutionStrategy.htm#apex_interface_CommerceExtension_ResolutionStrategy)**  
    Interface for a resolution strategy.
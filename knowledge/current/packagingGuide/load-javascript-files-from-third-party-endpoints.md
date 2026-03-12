---
title: "Load JavaScript Files from Third-Party Endpoints"
domain: packagingGuide
topic: load-javascript-files-from-third-party-endpoints
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:21.189Z
estimatedTokens: 573
keywords: [Load, JavaScript, Files, Third-Party, Endpoints, Avoid, dynamically, loading, content, delivery, networks, CDNs, Instead, code, resources]
---

# Load JavaScript Files from Third-Party Endpoints

> Avoid dynamically loading third-party JavaScript files from content delivery networks
    (CDNs). Instead, load the code from the static resources folder of your package.

# Load JavaScript Files from Third-Party Endpoints

Avoid dynamically loading third-party JavaScript files from content delivery networks (CDNs). Instead, load the code from the static resources folder of your package.

Dynamically loading third-party JavaScript files from CDNs or other third parties isn’t permitted for two reasons.

-   You must version your entire solution with a package version ID so that there’s a well-defined product to review and track. If your solution dynamically loads code from third-party endpoints, the externally managed code can change without the package version ID changing. The administrator and the Salesforce security review team aren’t made aware of the change.

    Salesforce can’t ensure that the third-party code continues to safeguard against the latest security vulnerabilities. To ensure that the code is subject to package version control, dynamically load the code from the static resources folder of your package. You can’t change packaged code without changing the package version ID. Plus, version ID changes signal to administrators and the AppExchange security team that the code changed.

-   Dynamically loading code from a third-party endpoint grants that endpoint the ability to inject code into any Salesforce org in which the package is installed. Only dynamically load code from Salesforce approved CDNs, where Salesforce manages the code, rather than the partner.

At a high level, the solution is:

-   Save third-party JavaScript files in static resources.
-   Add the resources to your solution package.
-   Load each JavaScript file from a $Resource URL.

## Visualforce Example

These code snippets depict the security violation and how to fix it in Apex and for Lightning components in Aura. This Visualforce code isn’t secure because jQuery is loaded from a third-party source.

```

```

This Visualforce code is secure because it loads a version of jQuery from the static resources folder of your package using a $Resource URL.

```

```

## Aura Example

This Aura component code isn’t secure because jQuery is directly loaded from a third-party source.

```

```

This Aura component code is secure because jQuery is loaded from the solution package and referenced as a static resource using a $Resource URL.

```

```

## Code Examples

```
<apex:includescript value="https://code.jquery.com/jquery-3.2.1.min.js"/>
```

```
<apex:includeScript value="{! $Resource.jQuery }"/>
```

```
<aura:component>
   <ltng:require afterScriptsLoaded="{!c.initializeUI}"
   scripts="https://code.jquery.com/jquery-2.2.0.min.js”/>
<aura:component>
```

```
<aura:component>
   <ltng:require afterScriptsLoaded="{!c.initializeUI}"
   scripts="{!$Resource.jsLibraries + '/jsLibOne.js'}"/>
<aura:component>
```

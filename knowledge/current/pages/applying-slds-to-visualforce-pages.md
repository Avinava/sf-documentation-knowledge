---
title: "Applying SLDS to Visualforce Pages"
domain: pages
topic: applying-slds-to-visualforce-pages
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:24.576Z
estimatedTokens: 272
keywords: [Applying, SLDS, Visualforce, Pages, Lightning, Design, System, build, match, look, feel, Salesforce, mobile, app, tweaks]
---

# Applying SLDS to Visualforce Pages

> You can use the Lightning Design System (SLDS) to build Visualforce pages that match the
    look and feel of the Salesforce mobile app. To use SLDS, it takes some tweaks in your code and a
    few things to remember. For the most part, Visualforce code that uses SLDS works without
    issue.

# Applying SLDS to Visualforce Pages

You can use the Lightning Design System (SLDS) to build Visualforce pages that match the look and feel of the Salesforce mobile app. To use SLDS, it takes some tweaks in your code and a few things to remember. For the most part, Visualforce code that uses SLDS works without issue.

## Using SLDS in Visualforce Pages

Every time you use SLDS, add <apex:slds /> to your page and wrap your code in a scoping class, <div class="slds-scope"\>...</div\>.

```

```

Many of the best practices we’ve discussed for Visualforce development for mobile apply here as well. Apex tags such as <apex:pageblock\> and <apex:inputField\> are not yet supported for use with SLDS.

## SLDS Class Naming

SLDS uses a standard class naming convention called Block-Element-Modifier syntax (BEM) to make the class names less ambiguous.

-   A block represents a high-level component (for example, car).
-   An element represents a descendant of a component (car\_\_door).
-   A modifier represents a particular state or variant of a block or element (car\_\_door--red).

## Code Examples

```
<apex:page showHeader="false" standardStylesheets="false" sidebar="false" applyHtmlTag="false" applyBodyTag="false" docType="html-5.0">

  <!-- Import the Design System style sheet -->
  <apex:slds />

    <!-- REQUIRED SLDS WRAPPER -->
    <div class="slds-scope">
```

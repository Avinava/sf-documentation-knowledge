---
title: "Rules Files Structure"
domain: bi-dev-guide-wave-templates
topic: rules-files-structure
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.622Z
estimatedTokens: 165
keywords: [Rules, Files, Structure, contain, three, sections, constants, macros]
---

# Rules Files Structure

> Rules files can contain three sections: rules, constants, and macros.

# Rules Files Structure

Rules files can contain three sections: rules, constants, and macros.

-   Rules. This is where you define the rules followed by the template for creating the app.
-   Constants. Use constants to create shortcuts for longer expressions. Constants are like variables, but are not passed in or declared in the UI. Constants can be referenced in the document via the normal expression language ${Constants.<constantName>}.
-   Macros. Rule macros let you define repeatable, well-tested rule code units that can be called within the context of any JSON transformation, simplifying and making the rule definition source easier to maintain

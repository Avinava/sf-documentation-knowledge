---
title: "Template Dependency Syntax"
domain: bi-dev-guide-wave-templates
topic: template-dependency-syntax
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.486Z
estimatedTokens: 238
keywords: [Template, Dependency, specify, dependencies, template-info.json, file, templateVersion, flexible, take, any]
---

# Template Dependency Syntax

> The syntax you use to specify dependencies in the template-info.json file for templateVersion is
  flexible. The value can take on any of the following.

# Template Dependency Syntax

The syntax you use to specify dependencies in the template-info.json file for templateVersion is flexible. The value can take on any of the following.

-   Choose any version.
-   A specific version.
-   Versions greater than or less than the one indicated.

Here is the syntax:

1.  If no version is specified, any version found is used. If a version is specified, but no operator (for example, 3.0), only that version is used.
2.  If the operator is “=” (=3.0), only that version is used.
3.  If the operator is “>” (>3.0), any app with a version greater than the specified version is used
4.  If the operator is “<” (<3.0), any app with a version less than the specified version is used.
5.  If the operator is “>=” (>=3.0), any app with a version greater than or equal to the specified version is used.
6.  If the operator is “<=” (<=3.0), any app with a version less than or equal to the specified version is used.

---
title: "Package IDs"
domain: pkg1-dev
topic: package-ids
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:25.705Z
estimatedTokens: 152
keywords: [Package, IDs, work, packages, CLI, refer, either, unique, version]
---

# Package IDs

> When you work with packages using the CLI, the package IDs refer either to a unique
  package or a unique package version.

# Package IDs

When you work with packages using the CLI, the package IDs refer either to a unique package or a unique package version.

The relationship of package version to package is one-to-many.

| ID Example | Description | Used Where |
| --- | --- | --- |
| 033xx00000007oi | Metadata Package ID | Generated when you create a package. A single package can have one or more associated package version IDs. The package ID remains the same, whether it has a corresponding beta or released package version. |
| 04tA000000081MX | Metadata Package Version ID | Generated when you create a package version. |

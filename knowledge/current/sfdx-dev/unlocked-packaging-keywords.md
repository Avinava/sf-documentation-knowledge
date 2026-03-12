---
title: "Unlocked Packaging Keywords"
domain: sfdx-dev
topic: unlocked-packaging-keywords
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:18.757Z
estimatedTokens: 472
keywords: [Unlocked, Packaging, Keywords, keyword, variable, specify, package, version, number]
---

# Unlocked Packaging Keywords

> A keyword is a variable that you can use to specify a package version
  number.

# Unlocked Packaging Keywords

A keyword is a variable that you can use to specify a package version number.

You can use keywords to automatically increment the value of the package build numbers, ancestor version numbers, set the package dependency to the latest version, or the latest released and promoted version.

| Use the Keyword | Example |
| --- | --- |
| LATEST to specify the latest version of the package dependency when you create a package version. | "dependencies": [     {       "package": "MyPackageName",       "versionNumber": "0.1.0.LATEST"    } ] |
| NEXT to increment the build number to the next available for the package version.If you don’t use NEXT, and you also forget to update the version number in your sfdx-project.json file, the new package version uses the same number as the previous package version. Although we don’t enforce uniqueness on package version numbers, every package version is assigned a unique subscriber package version ID (starts with 04t). | "versionNumber": "1.2.0.NEXT" |
| RELEASED to specify the latest promoted and released version of the package dependency when you create a package version. | "dependencies": [    {     "package": "pkgB",     "versionNumber": "2.1.0.RELEASED"     } ] |
| HIGHEST to automatically set the package ancestor to the highest promoted and released package version number.Use only with ancestor version or ancestor ID. | "packageDirectories": [ { "path": "util", "package": "Expense Manager - Util", "versionNumber": "4.7.0.NEXT", "ancestorVersion": "HIGHEST" }, |
| NONE in the ancestor version or ancestor ID field.Ancestry defines package upgrade paths. If the package ancestor is set to NONE, an existing customer can’t upgrade to that package version. | "packageDirectories": [ { "path": "util", "package": "Expense Manager - Util", "versionNumber": "4.7.0.NEXT", "ancestorVersion": "NONE" }, |

## Code Examples

```
"dependencies": [ 
   {
      "package": "MyPackageName",
      "versionNumber": "0.1.0.LATEST"
   }
]
```

```
"dependencies": [
   {
    "package": "pkgB",
    "versionNumber": "2.1.0.RELEASED"
    }
]
```

```
"packageDirectories": [
{
"path": "util",
"package": "Expense Manager - Util",
"versionNumber": "4.7.0.NEXT",
"ancestorVersion": "HIGHEST"
},
```

```
"packageDirectories": [
{
"path": "util",
"package": "Expense Manager - Util",
"versionNumber": "4.7.0.NEXT",
"ancestorVersion": "NONE"
},
```

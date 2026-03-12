---
title: "Use Branches in Second-Generation Managed Packaging"
domain: pkg2-dev
topic: use-branches-in-second-generation-managed-packaging
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:27.157Z
estimatedTokens: 567
keywords: [Branches, Second-Generation, Managed, Packaging, Development, teams, their, source, control, system, SCS, often, build, package, versions]
---

# Use Branches in Second-Generation Managed Packaging

> Development teams who use branches in their source control system (SCS), often
  build package versions based on the metadata in a particular branch of code.

# Use Branches in Second-Generation Managed Packaging

Development teams who use branches in their source control system (SCS), often build package versions based on the metadata in a particular branch of code.

To identify which branch in your SCS a package version is based on, tag your package version with a branch name using \--branch attribute in this Salesforce CLI command.

sf package version create --branch featureA

You can specify any alphanumeric value up to 240 characters as the branch name.

You can also specify the branch name in the package directories section of the sfdx-project.json file.

```

```

When you specify a branch, the package alias for that package version is automatically appended with the branch name. You can view the package alias in the sfdx.project.json file.

```

```

Keep in mind that version numbers increment within each branch, and not across branches. For example, you could have two or more beta package versions with the version number 1.3.0.1.

| Branch Name | Package Version Alias |
| --- | --- |
| featureA | pkgA@1.3.0-1-featureA |
| featureB | pkgA@1.3.0-1-featureB |
| Not specified | pkgA@1.3.0-1 |

Although more than one beta package version can have the same version number, there can be only one promoted and released package version for a given major.minor.patch package version.

## Package Dependencies and Branches

By default, your package can have dependencies on other packages in the same branch. For package dependencies based on packages in other branches, explicitly set the branch attribute in the sfdx.project.json file.

| To specify a package dependency | Use this format |
| --- | --- |
| Using the branch attribute | "dependencies": [     {     "package": "pkgB",     "versionNumber": "1.3.0.LATEST",     "branch": "featureC" }] |
| Using the most recent promoted and released version of package | "dependencies": [     {     "package": "pkgB",     "versionNumber": "2.1.0.RELEASED" }] |
| If your package has an associated branch, but the dependent package doesn’t have a branch | "dependencies": [      {     "package": "pkgB",     "versionNumber": "1.3.0.LATEST",     "branch": "" }] |
| Using the package alias | "dependencies": [      {     "package": "pkgB@2.1.0-1-featureC" }] |

## Code Examples

```
"packageDirectories": [
     {
        "path": "util",
        "default": true,
        "package": "pkgA",
        "versionName": "Spring ‘21",
        "versionNumber": "4.7.0.NEXT",
        "branch": "featureA"
     }]
```

```
"packageAliases": {
    "pkgA@1.0.0.4-featureA":"04tB0000000IB1EIAW"}
```

```
"dependencies": [
    {
    "package": "pkgB",
    "versionNumber": "1.3.0.LATEST",
    "branch": "featureC"
}]
```

```
"dependencies": [
    {
    "package": "pkgB",
    "versionNumber": "2.1.0.RELEASED"
}]
```

```
"dependencies": [
     {
    "package": "pkgB",
    "versionNumber": "1.3.0.LATEST",
    "branch": ""
}]
```

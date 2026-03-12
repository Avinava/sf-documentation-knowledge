---
title: "Target a Specific Release for Your Unlocked Packages During Salesforce Release Transitions"
domain: sfdx-dev
topic: target-a-specific-release-for-your-unlocked-packages-during-salesforce-release-t
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:18.847Z
estimatedTokens: 342
keywords: [Target, Specific, Release, Unlocked, Packages, Salesforce, Transitions, major, specify, preview, previous, creating, package, version, Specifying]
---

# Target a Specific Release for Your Unlocked Packages During Salesforce Release Transitions

> During major Salesforce release transitions, you can specify preview or previous when
  creating a package version. Specifying the release version for a package allows you to test
  upcoming features, run regression tests, and support customers regardless of which Salesforce
  release their org is on. Previously, you could only create package versions that matched the
  Salesforce release your Dev Hub org was on.

# Target a Specific Release for Your Unlocked Packages During Salesforce Release Transitions

During major Salesforce release transitions, you can specify preview or previous when creating a package version. Specifying the release version for a package allows you to test upcoming features, run regression tests, and support customers regardless of which Salesforce release their org is on. Previously, you could only create package versions that matched the Salesforce release your Dev Hub org was on.

To create a package version based on a preview or previous Salesforce release version, create a scratch org definition file that includes either:

```

```

or

```

```

In the sfdx-project.json file, set the sourceApiVersion to correspond with the release version of the package version you’re creating. If you are targeting a previous release, any sourceApiVersion value below the current release is accepted.

Then when you create your package version, specify the scratch org definition file.

```

```

Preview start date is when sandbox instances are upgraded. Preview end date is when all instances are on the GA release.

| Release Version | Preview Start Date | Preview End Date |
| --- | --- | --- |
| Spring ’26 | January 11, 2026 | February 21, 2026 |
| Summer ’26 | May 10, 2026 | June 13, 2026 |
| Winter ’27 | August 30, 2026 | October 10, 2026 |

## Code Examples

```
{
    "release": "previous"
}
```

```
{
    "release": "preview"
}
```

```
sf package version create --package pkgA --definition-file config/project-scratch-def.json
```

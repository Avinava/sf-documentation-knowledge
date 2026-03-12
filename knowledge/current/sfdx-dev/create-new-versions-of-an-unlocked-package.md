---
title: "Create New Versions of an Unlocked Package"
domain: sfdx-dev
topic: create-new-versions-of-an-unlocked-package
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:18.772Z
estimatedTokens: 1478
keywords: [New, Versions, Unlocked, Package, version, fixed, snapshot, contents, metadata, lets, manage, changes, track, what’s, different]
---

# Create New Versions of an Unlocked Package

> A package version is a fixed snapshot of the package contents and related metadata.
        The package version lets you manage changes and track what’s different each time you release
        or deploy a specific set of changes.

# Create New Versions of an Unlocked Package

A package version is a fixed snapshot of the package contents and related metadata. The package version lets you manage changes and track what’s different each time you release or deploy a specific set of changes.

Before you create a package version, first verify package details, such as the package name, dependencies, and update the versionNumber parameter in the sfdx-project.json file. Verify that the metadata you want to change or add in the new package version is in the package’s main directory.

When you create a package version, you have three options regarding how package validations are handled.

-   (Default) Complete all validations of dependencies, package ancestors, and metadata before the package version is returned.
-   Perform validations asynchronously.
-   Skip validation on the package version.

## Create an Unlocked Package Version (Default Option)

Create the package version with this command. Specify the package alias or ID (0Ho). You can also include a scratch definition file that contains a list of features and setting that the metadata of the package version depends on.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=sfdx_dev)

#### Note

When creating a package version, specify a \--wait time to run the command. If the package version is created within that time, the sfdx-project.json file is automatically updated with the package version information. If not, you must manually edit the project file.

It can be a long-running process to create a package version, depending on the package size and other variables. You can easily view the status and monitor progress.

```

```

The output shows details about the request.

```

```

You can find the request ID (08c) in the initial output of sf package version create.

Depending on the size of the package and other variables, the create request can take several minutes. When you have more than one pending request to create package versions, you can view a list of all requests with this command.

```

```

Details for each request display as shown here (IDs and labels truncated).

```

```

## Async Validation

Async validation creates a new package version before completing package validations. If your development team is using continuous integration (CI) scripts, you can leverage async validation to get an installable artifact sooner so you can start post-package creation steps.

To specify async validation, include the - -async-validation parameter.

```

```

Sample Command-Line Output

```

```

The command-line output provides you a package creation request ID that starts with 08c. To confirm whether all package validations complete successfully, use the 08cxx ID when and run sf package version create report --package-create-request-id 08cxx. Then validate that the Status is listed as Success. Async validated package versions can be promoted only if all validations complete successfully.

## Skip Validation

Skips validation of dependencies, package ancestors, and metadata during package version creation. Skipping validation significantly reduces the time it takes to create a new package version, but package versions created using skip validation can’t be promoted to the released state.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=sfdx_dev)

#### Note

You can't specify both skip validation and code coverage, because code coverage is calculated during validation.

You also can't specify both skip validation and async validation at the same time.

## Use Keyword NEXT to Ensure Package Version Numbers Are Unique

To ensure your version number is unique, use the keyword NEXT when you set the version number in your sfdx-project.json file.

For example, "versionNumber": "1.2.0.NEXT".

If you don’t use NEXT, and you also forget to update the version number in your sfdx-project.json file, the new package version uses the same number as the previous package version. Although we don’t enforce uniqueness on package version numbers, every package version is assigned a unique subscriber package version ID (starts with 04t).

## How Many Package Versions Can I Create Per Day?

Run this command to see how many package versions you can create per day and how many you have remaining.

```

```

Look for the Package2VersionCreates entry.

```

```

-   **[Simplify Unlocked Package Development by Creating and Specifying an Org Shape](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_pkg_org_shape.htm)**
    If your package’s metadata depends on a complex set of features, settings, or licenses, it can be difficult to declaratively specify these dependencies in a scratch org definition file. Instead, create an org shape of your production org, or another development org, and specify that source org’s ID in your scratch org definition file. During package creation, we mimic the source org’s environment when we build and validate your package’s metadata.
-   **[Use Branches in Unlocked Packaging](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_pkg_use_branches.htm)**
    Development teams who use branches in their source control system (SCS), often build package versions based on the metadata in a particular branch of code.
-   **[Target a Specific Release for Your Unlocked Packages During Salesforce Release Transitions](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_pkg_target_release_version.htm)**
    During major Salesforce release transitions, you can specify preview or previous when creating a package version. Specifying the release version for a package allows you to test upcoming features, run regression tests, and support customers regardless of which Salesforce release their org is on. Previously, you could only create package versions that matched the Salesforce release your Dev Hub org was on.

## Code Examples

```
sf package version create --package "Expenser App" --installation-key “HIF83kS8kS7C” \
--definitionfile config/project-scratch-def.json --code-coverage --wait 10
```

```
=== Package Version Create Request 
NAME                            VALUE
─────────────────────────────   ────────────────────
Version Create Request Id       08cB00000004CBxIAM 
Status                          InProgress 
Package Id                      0HoB00000004C9hKAE 
Package Version Id              05iB0000000CaaNIAS
Subscriber Package Version Id   04tB0000000NOimIAG
Tag                             git commit id 08dcfsdf
Branch 
CreatedDate                     2024-05-08 09:48
Installation URL
https://login.salesforce.com/packaging/installPackage.apexp?p0=04tB0000000NOimIAG
```

```
sf package version create list --created-last-days 0
```

```
=== Package Version Create Requests [3] 
ID     STATUS  PACKAGE2 ID PKG2 VERSION ID SUB PKG2 VER ID TAG BRANCH CREATED DATE === 
08c... Error   0Ho...      
08c... Success 0Ho... 05i... 04t...                                   2024-06-22 12:07 
08c... Success 0Ho... 05i... 04t...                                   2024-06-23 14:55
```

```
sf package version create --async-validation <rest of command syntax>
```

## Related Topics

- Simplify Unlocked Package Development by Creating and Specifying an Org Shape (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_pkg_org_shape.htm)
- Use Branches in Unlocked Packaging (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_pkg_use_branches.htm)
- Target a Specific Release for Your Unlocked Packages During Salesforce Release Transitions (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_unlocked_pkg_target_release_version.htm)

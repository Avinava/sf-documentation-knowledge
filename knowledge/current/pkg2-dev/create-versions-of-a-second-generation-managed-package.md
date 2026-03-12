---
title: "Create Versions of a Second-Generation Managed Package"
domain: pkg2-dev
topic: create-versions-of-a-second-generation-managed-package
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:27.032Z
estimatedTokens: 1213
keywords: [Versions, Second-Generation, Managed, Package, version, fixed, snapshot, contents, metadata, installable, immutable, artifact, lets, manage, changes]
---

# Create Versions of a Second-Generation Managed Package

> A
        package version is a fixed snapshot of the package contents and related metadata. The
        package version is an installable, immutable artifact that lets you manage changes and track
        what’s different each time you release or deploy a specific set of changes.

# Create Versions of a Second-Generation Managed Package

A package version is a fixed snapshot of the package contents and related metadata. The package version is an installable, immutable artifact that lets you manage changes and track what’s different each time you release or deploy a specific set of changes.

Before you create a package version, first verify package details, such as the package name, dependencies, and update the versionNumber parameter in the sfdx-project.json file. Verify that the metadata you want to change or add in the new package version is in the package’s main directory.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=pkg2_dev)

#### Tip

Review [Advanced Project Configuration Parameters for Second-Generation Managed Packages](atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev2gp_adv_config_file.htm "As your managed 2GP package development becomes more complex, consider including these optional parameters in your sfdx-project.json file.") for optional features that you can enable in the new package version.

When you create a package version, you have three options regarding how package validations are handled.

-   (Default) Complete all validations of dependencies, package ancestors, and metadata before the package version is returned.
-   Perform validations asynchronously.
-   Skip validation on the package version.

## Create a Managed 2GP Package Version (Default Option)

Create the package version with this command. Specify the package alias or ID (0Ho). You can also include a scratch definition file that contains a list of features and settings that the metadata of the package version depends on.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg2_dev)

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

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg2_dev)

#### Note

You can't specify both skip validation and code coverage, because code coverage is calculated during validation.

You also can't specify both skip validation and async validation at the same time.

## Update Details about a Managed 2GP Package Version

You can update most properties of a package version from the command line. For example, you can change the package version name or description. One important exception is that you can’t change the release status.

In this example, we’re adding the tag parameter and specifying the git commit ID associated with this package version.

```

```

After the update is complete, you’ll see output that looks like

```

```

## How Many Managed 2GP Package Versions Can I Create Per Day?

Run this command to see how many package versions you can create per day and how many you have remaining.

```

```

Look for the Package2VersionCreates entry.

```

```

## Code Examples

```
sf package version create --package "Expenser App" --installation-key “HIF83kS8kS7C” \
--definition-file config/project-scratch-def.json --code-coverage --wait 10
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

- Advanced Project Configuration Parameters for Second-Generation Managed Packages (atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev2gp_adv_config_file.htm)

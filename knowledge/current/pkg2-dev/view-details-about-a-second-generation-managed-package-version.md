---
title: "View Details about a Second-Generation Managed Package Version"
domain: pkg2-dev
topic: view-details-about-a-second-generation-managed-package-version
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:27.165Z
estimatedTokens: 416
keywords: [View, Second-Generation, Managed, Package, Version, Retrieve, versions, progress, already, created, Status, 2GP, Associated, Dev, Hub]
---

# View Details about a Second-Generation Managed Package Version

> Retrieve details about second-generation managed package versions that are in progress,
    or have already been created.

# View Details about a Second-Generation Managed Package Version

Retrieve details about second-generation managed package versions that are in progress, or have already been created.

## View Status and Progress Details for a Managed 2GP Package Version

Depending on the package size and other variables, creating a package version can be a long-running process. You can easily view the status and monitor progress using this report command.

```

```

The output shows details about the request.

```

```

You can find the request ID (08c) in the initial output of sf package version create.

If you have more than one pending request to create package versions, you can view a list of all requests with this command.

```

```

Details for each request display as shown here (IDs and labels truncated).

```

```

## Retrieve List of all Package Versions Associated with a Dev Hub Org

To display a list of all package versions in the Dev Hub org, use this command.

```

```

You can view the namespace, version name, and other details in the output.

```

```

To view details about a specific package, include \--package parameter when you run sf package version list.

To show expanded details, use \--verbose The verbose parameter displays these additional details.

-   Ancestor
-   Ancestor Version
-   Branch
-   Build Duration in Seconds
-   Code Coverage
-   Code Coverage Met
-   Created By
-   Created Date
-   Description
-   Installation URL
-   Language
-   Managed Metadata Removed
-   Metadata File Size
-   Number of Metadata Files
-   Package ID
-   Package Version ID
-   Release Version
-   Tag
-   Validation Skipped
-   WasTransferred

## Code Examples

```
sf package version create report --package-create-request-id 08cxx00000000YDAAY
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
CreatedDate                     2018-05-08 09:48
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
08c... Success 0Ho... 05i... 04t...                                   2022-06-22 12:07 
08c... Success 0Ho... 05i... 04t...                                   2022-06-23 14:55
```

```
sf package version list --target-dev-hub my-hub
```

---
title: "Develop Against Any Org"
domain: sfdx-dev
topic: develop-against-any-org
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:18.215Z
estimatedTokens: 2045
keywords: [Develop, Against, Any, Org, developing, scratch, sandbox, orgs, source, tracking, enabled, eventually, test, validate, changes]
---

# Develop Against Any Org

> After developing against scratch or sandbox orgs that have source tracking enabled, you
    eventually test and validate your changes in a non-source-tracked org.

# Develop Against Any Org

After developing against scratch or sandbox orgs that have source tracking enabled, you eventually test and validate your changes in a non-source-tracked org.

You can use Salesforce CLI to retrieve and deploy metadata (in metadata format) to non-source-tracked orgs with the same ease as retrieving and deploying source (in source format) to and from scratch orgs. If you’re new to Salesforce CLI, [Salesforce DX Project Structure and Source File Format](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_source_file_format.htm) explains the difference between source format and metadata format.

Using project retrieve start, you can retrieve the metadata you need in source format to your local file system (DX project). When your changes are ready for testing or production, you can use project deploy start to deploy your local files directly to a non-source-tracked org.

Not sure what metadata types are supported or which metadata types support wild cards in package.xml? See [Metadata Types](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_types_list.htm) in the Metadata API Developer Guide.

## Before You Begin

Before you begin, don't forget to:

-   Create a Salesforce DX project that includes a manifest (package.xml). Run project generate --name mywork MyProject --manifest.
-   Authorize your non-source-tracked org. If connecting to a sandbox, edit your sfdx-project.json file to set sfdcLoginUrl to https://test.salesforce.com before you authorize the org. Don't forget to [create aliases](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_cli_usernames_orgs.htm) for your non-source-tracked orgs.

## Metadata Names That Require Encoding on the Command Line

When retrieving or deploying metadata using the \--metadata option, commas in metadata names require encoding to work properly.

**Don’t:** sf project deploy start --metadata "Profile:Standard User" --metadata "Layout:Page,Console"

**Do:** sf project deploy start --metadata "Profile:Standard User" --metadata "Layout:Page**%2C**Console"

## Retrieve Source from a Non-Source-Tracked Org

Use the project retrieve start command to retrieve source from orgs that don’t have source tracking, such as a sandbox or your production org. If you already have the source code and metadata in a VCS, you might be able to skip this step. If you're starting anew, you retrieve the metadata associated with the feature, project, or customization you're working on.

You can retrieve metadata in source format using one of these methods:

-   Specify a package.xml that lists the components to retrieve.
-   Specify a comma-separated list of metadata component names.
-   Specify a comma-separated list of source file paths to retrieve. You can use the source path option when source exists locally, for example, after you've done an initial retrieve.
-   Specify a comma-separated list of package names.

If the comma-separated list you’re supplying contains spaces, enclose the entire comma-separated list in one set of double quotes.

| To Retrieve: | Command Example |
| --- | --- |
| All metadata components listed in a manifest | sf project retrieve start --manifest path/to/package.xml |
| Source files in a directory | sf project retrieve --source-dir path/to/source |
| A specific Apex class and the objects whose source is in a directory | sf project retrieve --source-dir path/to/apex/classes/MyClass.cls --source-dir path/to/source/objects |
| Metadata that contains spaces | sf project retrieve start --metadata "Profile:Standard User" |
| All Apex classes | sf project retrieve --metadata ApexClass |
| A specific Apex class | sf project retrieve --metadata ApexClass:MyApexClass |
| A layout name that contains a comma (Layout: Page, Console) | sf project retrieve --metadata "Layout:Page%2C Console" |
| All the metadata related to a specific package or packages | sf project retrieve --metadata --package-name DreamHouse |

You can specify only one scoping parameter when retrieving metadata: \--metadata, \--source-dir, or \--manifest. If you indicate \--package-name, you can include one additional scoping parameter.

```

```

## Deploy Source to a Non-Source-Tracked Org

Use the project deploy start command to deploy source to orgs that don’t have source tracking, such as a sandbox or production org.

You can deploy metadata in source format using these methods:

-   Specify a package.xml that lists the components to deploy
-   Specify a comma-separated list of metadata component names
-   Specify a comma-separated list of source file paths to deploy

If the comma-separated list you’re supplying contains spaces, enclose the entire comma-separated list in one set of double quotes.

| To Deploy: | Command Example |
| --- | --- |
| All components listed in a manifest | sf project deploy start --manifest path/to/package.xml |
| Source files in a directory | sf project deploy start --source-dir path/to/source |
| A specific Apex class and the objects whose source is in a directory | sf project deploy start --source-dir path/to/apex/classes/MyClass.cls --source-dir path/to/source/objects |
| All Apex classes | sf project deploy start --metadata ApexClass |
| A specific Apex class | sf project deploy start --metadata ApexClass:MyApexClass |
| All custom objects and Apex classes | sf project deploy start --metadata CustomObject --metadata ApexClass |
| All Apex classes and a profile that has a space in its name | sf project deploy start --metadata ApexClass --metadata "Profile:Content Experience Profile" |
| A recently validated set of components without running Apex tests (often referred to as a quick deploy) | sf project deploy quick --job-id JOBIDYou can run this option after you have run tests, passed code coverage requirements, and performed a check-only deployment using the project deploy validate command, which returns the job ID. |
| Even if the deployment contains warnings | sf project deploy start --ignore-warnings |
| Regardless of whether the deployment contains errors (not recommended if deploying to a production org) | sf project deploy start --ignore-errors |

## Delete Non-Tracked Source

Use the project delete source command to delete components from orgs that don’t have source tracking, such as sandboxes.

If the source exists locally in a DX project, you can delete metadata by specifying the path to the source or by listing individual metadata components. If the comma-separated list you’re supplying contains spaces, enclose the entire comma-separated list in one set of double quotes.

| To Delete: | Command Example |
| --- | --- |
| Source files in a directory | sf project delete source --source-dir path/to/source |
| A specific component, such as a FlexiPage | sf project delete source --metadata FlexiPage:Broker_Record_Page |
| A specific component that includes a space | sf project delete source --metadata "Profile:Content Experience Profile" |

## Do You Want to Retain the Generated Metadata?

Normally, when you run some CLI commands, a temporary directory with all the metadata is created then deleted upon successful completion of the command. However, retaining these files can be useful for several reasons. You can debug problems that occur during command execution. You can use the generated package.xml when running subsequent commands, or as a starting point for creating a manifest that includes all the metadata you care about.

To retain all the metadata in a specified directory path when you run these commands, set the SF\_MDAPI\_TEMP\_DIR environment variable:

-   project deploy start
-   project retrieve start
-   project delete source
-   project convert mdapi|source
-   org create scratch (if your scratch org definition contains scratch org settings, not org preferences)

Example:

```

```

#### See Also

-   [*VS Code Command*: SFDX: Deploy|Retrieve|Delete Source From Org](https://developer.salesforce.com/docs/platform/sfvscode-extensions/guide/deploy-changes.html "VS Code Command: SFDX: Deploy|Retrieve|Delete Source From Org  - HTML (New Window)")

## Code Examples

```
sf project retrieve start --package-name DreamHouse --manifest manifest/package.xml
```

```
SF_MDAPI_TEMP_DIR=/users/myName/myDXProject/metadata
```

---
title: "Track Changes Between Your Project and Org"
domain: sfdx-dev
topic: track-changes-between-your-project-and-org
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:18.648Z
estimatedTokens: 1046
keywords: [Track, Changes, Project, Org, source, tracking, local, scratch, sandbox, code]
---

# Track Changes Between Your Project and Org

> Use source tracking to track the changes between your local project and a scratch org or
    sandbox when you create, update, or delete source code.

# Track Changes Between Your Project and Org

Use source tracking to track the changes between your local project and a scratch org or sandbox when you create, update, or delete source code.

Source tracking has no direct effect on the org; it affects only your local environment. Specifically, Salesforce CLI checks a local configuration file to determine whether you’ve enabled source tracking for a particular org. If you have, then source tracking operations are executed when you work with the org, such as using the project deploy start command.

The project deploy|retrieve start commands without flags deploy or retrieve all changed source between your local project and the target org. For more granular control, use flags to specify specific metadata components, package directories, or manifest files to deploy or retrieve. This example retrieves the MyFabClass Apex class:

```

```

In addition to listing the changes you make, source tracking makes it possible to:

-   Automatically track changes to metadata components, saving you from tracking them manually.
-   See changes deployed to a sandbox by other developers.
-   Deploy or retrieve changed source.
-   Identify and resolve conflicts between your local project and scratch org or sandbox before deploying or retrieving source.

To see which metadata components support source tracking, check the Source Tracking column of the [Metadata Coverage Report](https://developer.salesforce.com/docs/success/metadata-coverage-report/references/coverage-report/metadata-coverage-report.html).

-   **[Manage Source Tracking for Your org](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_source_tracking_which_orgs.htm)**
    Source tracking works only if your target org allows it. Don’t worry, you can still deploy or retrieve metadata to and from an org without source tracking. But the commands don’t check for conflicts, and you must specify exactly what you want to deploy or retrieve using an appropriate flag, such as \--source-dir or \--metadata.
-   **[Preview Changes Identified by Source Tracking](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_source_tracking_see_changes.htm)**
    To see changes between your local project and target org, navigate to the project directory for which you want to see changes. Then run one of the preview commands, which display either the local changes in your project you can deploy to your org, or the org changes that you can retrieve.
-   **[Deploy and Retrieve Changes Identified by Source Tracking](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_source_tracking_pull_push_changes.htm)**
    When you create a Salesforce app, you typically use both low-code and pro-code techniques. An example of low-code is creating a custom object directly in an org using Setup. An example of pro-code is creating an Apex class in your local project using an IDE, such as VS Code. As you work, source tracking identifies changes so you can keep the remote metadata in the org in sync with the source in your local project.
-   **[Resolve Conflicts Between Your Local Project and Org](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_source_tracking_resolve_conflicts.htm)**
    As a best practice, if conflicts exist for components in your local project or in the org, resolve them before moving forward. You can resolve the conflict manually, or overwrite one version of a component with another. Only overwrite changes if you're certain that the new version is the one you want to use.
-   **[Best Practices](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_source_tracking_best_practices.htm)**
    Get the most out of source tracking by following these best practices.
-   **[Performance Considerations of Source Tracking](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_source_tracking_performance_considerations.htm)**
    Source tracking performs extra functions to determine changes to source tracked components, such as running more queries and waiting for the SourceMember Tooling API object to be updated after a deployment. So, some commands can take a little longer to run when working with medium-to-large sized projects. If you’re working with small projects, you don’t notice any slowdown.

## Code Examples

```
sf project retrieve start --metadata ApexClass:MyFabClass
```

## Related Topics

- Manage Source Tracking for Your org (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_source_tracking_which_orgs.htm)
- Preview Changes Identified by Source Tracking (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_source_tracking_see_changes.htm)
- Deploy and Retrieve Changes Identified by Source Tracking (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_source_tracking_pull_push_changes.htm)
- Resolve Conflicts Between Your Local Project and Org (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_source_tracking_resolve_conflicts.htm)
- Best Practices (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_source_tracking_best_practices.htm)
- Performance Considerations of Source Tracking (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_source_tracking_performance_considerations.htm)

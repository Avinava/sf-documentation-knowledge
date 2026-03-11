---
title: "project deploy preview"
domain: cli-commands
topic: project-deploy-preview
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T10:26:31.385Z
keywords: [project, deploy, preview, Preview, deployment, see, org, potential, conflicts, ignored, files., Description, Examples, Flags, Aliases]
---

# project deploy preview

> Preview a deployment to see what will deploy to the org, the potential conflicts, and the ignored files.

## project deploy preview

Preview a deployment to see what will deploy to the org, the potential conflicts, and the ignored files.

### Description for project deploy preview

You must run this command from within a project.

The command outputs a table that describes what will happen if you run the "sf project deploy start" command. The table lists the metadata components that will be deployed and deleted. The table also lists the current conflicts between files in your local project and components in the org. Finally, the table lists the files that won't be deployed because they're included in your .forceignore file.

If your org allows source tracking, then this command displays potential conflicts between the org and your local project. Some orgs, such as production org, never allow source tracking. Source tracking is enabled by default on scratch and sandbox orgs; you can disable source tracking when you create the orgs by specifying the --no-track-source flag on the "sf org create scratch|sandbox" commands.

To preview the deployment of multiple metadata components, either set multiple --metadata <name> flags or a single --metadata flag with multiple names separated by spaces. Enclose names that contain spaces in one set of double quotes. The same syntax applies to --source-dir.

### Examples for project deploy preview

NOTE: The commands to preview a deployment and actually deploy it use similar flags. We provide a few preview examples here, but see the help for "sf project deploy start" for more examples that you can adapt for previewing.

Preview the deployment of source files in a directory, such as force-app, to your default org:

```

```

Preview the deployment of all Apex classes to an org with alias "my-scratch":

```

```

Preview deployment of a specific Apex class:

```

```

Preview deployment of all components listed in a manifest:

```

```

### Flags

\--json

Optional

Format output as json.

Type: boolean

\--flags-dir FLAGS-DIR

Optional

Import flag values from a directory.

Type: option

\-c | \--ignore-conflicts

Optional

Don't display conflicts in preview of the deployment.

This flag applies only to orgs that allow source tracking. It has no effect on orgs that don't allow it, such as production orgs.

Type: boolean

\-x | \--manifest MANIFEST

Optional

Full file path for manifest (package.xml) of components to preview.

All child components are included. If you specify this flag, don’t specify --metadata or --source-dir.

Type: option

\-m | \--metadata METADATA

Optional

Metadata component names to preview.

Type: option

\-d | \--source-dir SOURCE-DIR

Optional

Path to the local source files to preview.

The supplied path can be to a single file (in which case the operation is applied to only one file) or to a folder (in which case the operation is applied to all metadata types in the directory and its subdirectories).

If you specify this flag, don’t specify --metadata or --manifest.

Type: option

\-o | \--target-org TARGET-ORG

Required

Username or alias of the target org. Not required if the \`target-org\` configuration variable is already set.

Type: option

\--concise

Optional

Show only the changes that will be deployed; omits files that are forceignored.

Type: boolean

### Aliases for project deploy preview

```

```
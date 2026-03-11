---
title: "project retrieve preview"
domain: cli-commands
topic: project-retrieve-preview
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T10:26:31.385Z
keywords: [project, retrieve, preview, Preview, retrieval, see, retrieved, org, potential, conflicts, ignored, files., Description, Examples, Flags, Aliases]
---

# project retrieve preview

> Preview a retrieval to see what will be retrieved from the org, the potential conflicts, and the ignored files.

## project retrieve preview

Preview a retrieval to see what will be retrieved from the org, the potential conflicts, and the ignored files.

### Description for project retrieve preview

You must run this command from within a project.

The command outputs a table that describes what will happen if you run the "sf project retrieve start" command. The table lists the metadata components that will be retrieved and deleted. The table also lists the current conflicts between files in your local project and components in the org. Finally, the table lists the files that won't be retrieved because they're included in your .forceignore file.

If your org allows source tracking, then this command displays potential conflicts between the org and your local project. Some orgs, such as production org, never allow source tracking. Source tracking is enabled by default on scratch and sandbox orgs; you can disable source tracking when you create the orgs by specifying the --no-track-source flag on the "sf org create scratch|sandbox" commands.

### Examples for project retrieve preview

Preview the retrieve of all changes from your default org:

```

```

Preview the retrieve when ignoring any conflicts from an org with alias "my-scratch":

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

Don't display conflicts in the preview of the retrieval.

This flag applies only to orgs that allow source tracking. It has no effect on orgs that don't allow it, such as production orgs.

Type: boolean

\-o | \--target-org TARGET-ORG

Required

Username or alias of the target org. Not required if the \`target-org\` configuration variable is already set.

Type: option

\--concise

Optional

Show only the changes that will be retrieved; omits files that are forceignored.

Type: boolean

### Aliases for project retrieve preview

```

```
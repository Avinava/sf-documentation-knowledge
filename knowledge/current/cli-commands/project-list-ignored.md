---
title: "project list ignored"
domain: cli-commands
topic: project-list-ignored
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T09:49:04.983Z
keywords: [project, list, ignored, Check, local, package, directories, forceignored, files., Description, Examples, Flags, Aliases]
---

# project list ignored

> Check your local project package directories for forceignored files.

## project list ignored

Check your local project package directories for forceignored files.

### Description for project list ignored

When deploying or retrieving metadata between your local project and an org, you can specify the source files you want to exclude with a .forceignore file. The .forceignore file structure mimics the .gitignore structure. Each line in .forceignore specifies a pattern that corresponds to one or more files. The files typically represent metadata components, but can be any files you want to exclude, such as LWC configuration JSON files or tests.

### Examples for project list ignored

List all the files in all package directories that are ignored:

```

```

List all the files in a specific directory that are ignored:

```

```

Check if a particular file is ignored:

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

\-p | \--source-dir SOURCE-DIR

Optional

File or directory of files that the command checks for foreceignored files.

Type: option

### Aliases for project list ignored

```

```
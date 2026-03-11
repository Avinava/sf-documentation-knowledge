---
title: "package version displaydependencies"
domain: cli-commands
topic: package-version-displaydependencies
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T09:49:04.908Z
keywords: [package, version, displaydependencies, Display, dependency, graph, unlocked, 2GP, managed, version., Examples, Flags]
---

# package version displaydependencies

> Display the dependency graph for an unlocked or 2GP managed package version.

## package version displaydependencies

Display the dependency graph for an unlocked or 2GP managed package version.

### Examples for package version displaydependencies

Display the dependency graph for a package version with the specified alias, using your default Dev Hub org and the default edge-direction:

```

```

Display the dependency graph for a package version with the specified ID and display the graph using a root-last edge direction. Use the Dev Hub org with username devhub@example.com:

```

```

Display the dependency graph of a version create request with the specified ID, using your default Dev Hub org and the default edge-direction:

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

\-v | \--target-dev-hub TARGET-DEV-HUB

Required

Username or alias of the Dev Hub org. Not required if the \`target-dev-hub\` configuration variable is already set.

Type: option

\--api-version API-VERSION

Optional

Override the api version used for api requests made by this command

Type: option

\-p | \--package PACKAGE

Required

ID or alias of the package version (starts with 04t) or the package version create request (starts with 08c) to display the dependency graph for.

Before running this command, update your sfdx-project.json file to specify the calculateTransitiveDependencies attribute, and set the value to true. This command returns GraphViz code, which can be compiled to a graph using DOT code or another graph visualization software.

Type: option

\--edge-direction EDGE-DIRECTION

Optional

Order (root-first or root-last) in which the dependencies are displayed.

A root-first graph declares the root as the package that must be installed last. A root-last graph is the reverse order of root-first. If you specify "--edge-direction root-last", the graph displays the packages in the order they must be installed. The root starts with the farthest leaf of the package dependencies and ends with the base package, which must be installed last.

Type: option

Permissible values are: root-first, root-last

Default value: root-first

\--verbose

Optional

Display both the package version ID (starts with 04t) and the version number (major.minor.patch.build) in each node.

Type: boolean
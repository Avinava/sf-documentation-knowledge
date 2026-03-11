---
title: "apex run"
domain: cli-commands
topic: apex-run
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T09:49:04.563Z
keywords: [apex, run, Execute, anonymous, Apex, code, entered, command, line, local, file., Description, Examples, Flags, Aliases]
---

# apex run

> Execute anonymous Apex code entered on the command line or from a local file.

## apex run

Execute anonymous Apex code entered on the command line or from a local file.

### Description for apex run

If you don’t run this command from within a Salesforce DX project, you must specify the —-target-org flag.

To execute your code interactively, run this command with no flags. At the prompt, enter all your Apex code; press CTRL-D when you're finished. Your code is then executed in a single execute anonymous request.

For more information, see "Anonymous Blocks" in the Apex Developer Guide.

### Examples for apex run

Execute the Apex code that's in the ~/test.apex file in the org with the specified username:

```

```

Similar to previous example, but execute the code in your default org:

```

```

Run the command with no flags to start interactive mode; the code will execute in your default org when you exit. At the prompt, start type Apex code and press the Enter key after each line. Press CTRL+D when finished.

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

\-o | \--target-org TARGET-ORG

Required

Username or alias of the target org. Not required if the \`target-org\` configuration variable is already set.

Type: option

\--api-version API-VERSION

Optional

Override the api version used for api requests made by this command

Type: option

\-f | \--file FILE

Optional

Path to a local file that contains Apex code.

Type: option

### Aliases for apex run

```

```
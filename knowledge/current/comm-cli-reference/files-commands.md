---
title: "files Commands"
domain: comm-cli-reference
topic: files-commands
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:22.928Z
estimatedTokens: 446
keywords: [files, Commands, Copy, source, destination, folder, commerce, Examples, Command]
---

# files Commands

> Copy files from source to destination folder .commerce.

# files Commands

-   **[commerce:files:copy](atlas.en-us.comm_cli_reference.meta/comm_cli_reference/comm_cli_reference_commerce_files.htm#comm_cli_reference_commerce_files_copy)**
    Copy files from source to destination folder .commerce.

## commerce:files:copy

Copy files from source to destination folder .commerce.

### Examples for commerce:files:copy

sfdx commerce:files:copy -y --copySourcePath "~/myexamplefilesdirectory" --filestocopy "file1.txt,file2.txt" --dirstocopy "dir1,dir2,dir3"

sfdx commerce:files:copy --prompt --copySourcePath "~/myexamplefilesdirectory" --filestocopy "file1.txt,file2.txt" --dirstocopy "dir1,dir2,dir3"

sfdx commerce:files:copy --copySourcePath "~/myexamplefilesdirectory" --filestocopy "file1.txt,file2.txt" --dirstocopy "dir1,dir2,dir3"

### Command Syntax

sfdx commerce:files:copy

\[\--json\]

\[\--loglevel LOGLEVEL\]

\[\-y\]

\--filestocopy FILESTOCOPY

\--dirstocopy DIRSTOCOPY

\--copysourcepath COPYSOURCEPATH

### Parameters

\--json

Optional

Format output as JSON.

Type: boolean

\--loglevel LOGLEVEL

Optional

The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.

Type: enum

Permissible values are: trace, debug, info, warn, error, fatal, TRACE, DEBUG, INFO, WARN, ERROR, FATAL

Default value: warn

\-y | \--prompt

Optional

If there is a file difference detected, prompt before overwriting file.

Type: boolean

\--filestocopy FILESTOCOPY

Required

Array of individual files to copy located directly in source directory.

Type: array

\--dirstocopy DIRSTOCOPY

Required

Array of directories (including their contents) located in source directory to copy.

Type: array

\--copysourcepath COPYSOURCEPATH

Required

Base path for files and directories to be copied from.

Type: string

## Related Topics

- commerce:files:copy (atlas.en-us.comm_cli_reference.meta/comm_cli_reference/comm_cli_reference_commerce_files.htm)

---
title: "Where is Salesforce CLI Installed?"
domain: sfdx-setup
topic: where-is-salesforce-cli-installed
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:19.241Z
estimatedTokens: 218
keywords: [Salesforce, CLI, Installed, troubleshooting, installation, problems, it's, often, useful, know, directories]
---

# Where is Salesforce CLI Installed?

> When troubleshooting installation problems, it's often useful to know which directories Salesforce CLI is installed in.

# Where is Salesforce CLI Installed?

When troubleshooting installation problems, it's often useful to know which directories Salesforce CLI is installed in.

Run this command and search the output for the location property, which points to the global Salesforce CLI installation directory. The command works for all types of installations: installers, npm, and TAR files.

```

```

In this sample output, Salesforce CLI is installed in the /Users/astro/.local/share/sf/client/2.25.7-b42201f directory.

```

```

To find the directories in which the plugins are installed, set the DEBUG environment variable to sf and run the version command. For example:

```

```

The data property in the output contains the directory that contains the installed plugins. In this truncated sample output, plugins are installed in the /Users/astro/.local/share/sf directory.

```

```

## Code Examples

```
sf plugins inspect @salesforce/cli
```

```
sf plugins inspect @salesforce/cli
└─ @salesforce/cli
   ├─ version 2.25.7
   ├─ homepage https://github.com/salesforcecli/cli
   ├─ location /Users/astro/.local/share/sf/client/2.25.7-b42201f
   ├─ commands
   │  ├─ cmdt:generate:field
      ...
   └─ dependencies
      ├─ @inquirer/select ^1.3.1 => 1.3.1
      ...
```

```
DEBUG=sf sf version
```

```
DEBUG=sf sf version
  sf                        OS: +0ms
  sf                  platform: darwin +1ms
  sf              architecture: x64 +0ms
  sf                   release: 23.2.0 +0ms
  sf                     shell: bash +0ms
  sf                      NODE: +0ms
  sf                   version: 20.10.0 +0ms
  sf                       CLI: +0ms
  sf                   version: 2.25.7 +0ms
  sf                   channel: stable +0ms
  sf                       bin: sf +0ms
  sf                      data: /Users/astro/.local/share/sf +0ms
  sf                     cache: /Users/astro/Library/Caches/sf +0ms
  sf                    config: /Users/astro/.config/sf +0ms
  sf                       ENV: +1ms
  sf                SF_BINPATH: /Users/astro/.local/share/sf/client/bin/sf +0ms
  sf             SF_REDIRECTED: 1 +0ms
...
```

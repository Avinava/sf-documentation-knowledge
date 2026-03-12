---
title: "Disable Automatic Update of the CLI"
domain: sfdx-setup
topic: disable-automatic-update-of-the-cli
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:19.100Z
estimatedTokens: 138
keywords: [Disable, Automatic, CLI, run, command, Salesforce, checks, latest, version, automatically, updates, itself, environment, variable]
---

# Disable Automatic Update of the CLI

> When you run a command, Salesforce CLI checks to see if you have the latest version. If
    not, the CLI automatically updates itself. You can disable this automatic update with an
    environment variable.

# Disable Automatic Update of the CLI

When you run a command, Salesforce CLI checks to see if you have the latest version. If not, the CLI automatically updates itself. You can disable this automatic update with an environment variable.

To remain on the current version of the CLI and disable automatic updates, set the SF\_AUTOUPDATE\_DISABLE environment variable to true. How you set an environment variable is different for different operating systems. See the operating system vendor’s help for instructions on how to set environment variables.

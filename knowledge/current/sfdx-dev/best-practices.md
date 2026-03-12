---
title: "Best Practices"
domain: sfdx-dev
topic: best-practices
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:36:18.651Z
estimatedTokens: 357
keywords: [Best, Practices, source, tracking, Retrieve, changes, resolve, conflicts, deploying, sandbox, Review, metadata, change, history, version]
---

# Best Practices

> Get the most out of source tracking by following these best practices.

# Best Practices

Get the most out of source tracking by following these best practices.

## Retrieve changes and resolve conflicts before deploying your changes to a sandbox

This practice helps other developers incorporate your changes and facilitates collaboration.

## Review metadata change history with a version control system like Git

With a version control system, you can version your changes, track change history, and review metadata changes before promoting to other environments, such as a sandbox.

## Get source tracking files back into sync

If source tracking gets confused and starts reporting inaccuracies, you can use the project deploy|retrieve start commands to get back into sync. Which command you use depends on which source you most trust: use project deploy start if you trust your local source files and project retrieve start if you trust what’s in your org. For either command, specify the \--ignore-conflicts flag. See [Resolve Conflicts Between Your Local Project and Org](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_source_tracking_resolve_conflicts.htm "As a best practice, if conflicts exist for components in your local project or in the org, resolve them before moving forward. You can resolve the conflict manually, or overwrite one version of a component with another. Only overwrite changes if you're certain that the new version is the one you want to use.") for details and examples.

## Related Topics

- Resolve Conflicts Between Your Local Project and Org (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_source_tracking_resolve_conflicts.htm)

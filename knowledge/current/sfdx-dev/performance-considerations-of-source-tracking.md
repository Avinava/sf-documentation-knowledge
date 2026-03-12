---
title: "Performance Considerations of Source Tracking"
domain: sfdx-dev
topic: performance-considerations-of-source-tracking
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:36:18.653Z
estimatedTokens: 310
keywords: [Performance, Considerations, Source, Tracking, performs, extra, functions, determine, changes, tracked, components, running, queries, waiting, SourceMember]
---

# Performance Considerations of Source Tracking

> Source tracking performs extra functions to determine changes to source tracked
  components, such as running more queries and waiting for the SourceMember Tooling API object to be
  updated after a deployment. So, some commands can take a little longer to run when working with
  medium-to-large sized projects. If you’re working with small projects, you don’t notice any
  slowdown.

# Performance Considerations of Source Tracking

Source tracking performs extra functions to determine changes to source tracked components, such as running more queries and waiting for the SourceMember Tooling API object to be updated after a deployment. So, some commands can take a little longer to run when working with medium-to-large sized projects. If you’re working with small projects, you don’t notice any slowdown.

A medium-sized project has 30 or more components or 50 or more tests. A project with 25 components and 51 tests is considered medium.

A large-sized project is 600 or more components or 150 or more tests. A project with 610 components and 140 tests is considered large.

If you experience long-running commands, break up your projects into smaller sets of components, and deploy the smaller sets.

You can also opt out of source tracking when you create a scratch org or sandbox by specifying the \--no-track-source flag of the org create scratch|sandbox command. See [Source Tracking](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs.htm#scratch-source-tracking) for use cases.

If creating a scratch org or sandbox for use as a development environment in DevOps Center, don’t disable source tracking.

## Related Topics

- Source Tracking (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs.htm)

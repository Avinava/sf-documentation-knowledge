---
title: "Assign Access to New and Changed Features in First- and Second-Generation Managed
  Packages"
domain: pkg1-dev
topic: assign-access-to-new-and-changed-features-in-first--and-second-generation-manage
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:25.647Z
estimatedTokens: 225
keywords: [Assign, Access, New, Changed, Features, First-, Second-Generation, Managed, Packages, Determine, how, provide, non-admin, users, any]
---

# Assign Access to New and Changed Features in First- and Second-Generation Managed
  Packages

> Determine how to provide existing non-admin users access to new and changed features. By
  default, any new components included in the push upgrade package version are assigned only to
  admins.

# Assign Access to New and Changed Features in First- and Second-Generation Managed Packages

Determine how to provide existing non-admin users access to new and changed features. By default, any new components included in the push upgrade package version are assigned only to admins.

| If the push upgrade includes: | We recommend you: |
| --- | --- |
| New features | Notify admins about the changes the upgrade introduces, and ask them to assign permissions to all users of the package.This approach allows admins to choose when to make the new features available. |
| Enhancements to existing features | Include a post-install script in the package that assigns permissions to the new components or new fields automatically.This approach ensures that current users of the package can continue using features without interruption.NotePost-install scripts aren’t available to unlocked packages. |

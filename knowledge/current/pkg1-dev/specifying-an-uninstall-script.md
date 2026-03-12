---
title: "Specifying an Uninstall Script"
domain: pkg1-dev
topic: specifying-an-uninstall-script
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:24.671Z
estimatedTokens: 123
keywords: [Specifying, Uninstall, Script, you’ve, created, tested, included, member, package, specify, lookup, Detail]
---

# Specifying an Uninstall Script

> After you’ve created and tested the uninstall script and included it as a member of your
  package, you can specify it in the Uninstall Script lookup field on the
  Package Detail page.

# Specifying an Uninstall Script

After you’ve created and tested the uninstall script and included it as a member of your package, you can specify it in the **Uninstall Script** lookup field on the Package Detail page.

In subsequent patch releases, you can change the contents of the script but not the Apex class.

The class selection is also available via the Metadata API as Package.uninstallClass. This is represented in package.xml as an <uninstallClass>foo</uninstallClass> element.

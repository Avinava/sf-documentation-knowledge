---
title: "Specifying a Post Install Script"
domain: pkg1-dev
topic: specifying-a-post-install-script
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:38:53.063Z
estimatedTokens: 115
keywords: [Specifying, Post, Install, Script, you’ve, created, tested, specify, lookup, Package, Detail, subsequent, patch, releases, change, contents, Apex]
---

> After you’ve created and tested the post install script, you can specify it in the
   Post Install Script lookup field on the Package Detail page. In subsequent
  patch releases, you can change the contents of the script but not the Apex class.

# Specifying a Post Install Script

After you’ve created and tested the post install script, you can specify it in the **Post Install Script** lookup field on the Package Detail page. In subsequent patch releases, you can change the contents of the script but not the Apex class.

The class selection is also available via the Metadata API as Package.postInstallClass. This is represented in package.xml as a <postInstallClass>foo</postInstallClass> element.

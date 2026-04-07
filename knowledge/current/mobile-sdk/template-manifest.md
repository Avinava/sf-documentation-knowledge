---
title: "Template Manifest"
domain: mobile-sdk
topic: template-manifest
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:25.084Z
estimatedTokens: 156
keywords: [Template, Manifest, look, AndroidManifest.xml, file, project, reveals, Mobile, SDK, native, Android, apps, activity, named, “.MainActivity”, login]
---

> A look at the AndroidManifest.xml file in
      the template project reveals the components required for Mobile SDK native Android apps. The
      only required component is the activity named “.MainActivity”. This component represents the first activity that is called after
      login. A class by 

# Template Manifest

A look at the AndroidManifest.xml file in the template project reveals the components required for Mobile SDK native Android apps. The only required component is the activity named “.MainActivity”. This component represents the first activity that is called after login. A class by this name is defined in the project.

Because any app created by forcedroid is based on a Mobile SDK template project, the MainActivity component is already included in its manifest. As with any Android app, you can add other components, such as custom activities or services, by editing the manifest in Android Studio.

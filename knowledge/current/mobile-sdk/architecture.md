---
title: "Architecture"
domain: mobile-sdk
topic: architecture
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:30.528Z
estimatedTokens: 261
keywords: [Architecture, Beginning, Mobile, SDK, 4.2, Android, REST, system, uses, OkHttp, v3.2.0, open-source, external, library, Square]
---

# Architecture

> Beginning with Mobile SDK 4.2, the Android REST request system uses OkHttp (v3.2.0), an
            open-source external library from Square Open Source, as its underlying architecture.
            This library replaces the Google Volley library from past releases. As a result, Mobile
            SD

# Architecture

Beginning with Mobile SDK 4.2, the Android REST request system uses OkHttp (v3.2.0), an open-source external library from Square Open Source, as its underlying architecture. This library replaces the Google Volley library from past releases. As a result, Mobile SDK no longer defines the WrappedRestRequest class. For more information, see [square.github.io/okhttp/](http://square.github.io/okhttp/ "HTML (New Window)").

In iOS, file management and networking rely on the SalesforceNetwork library. All REST API calls—for files and any other REST requests—go through this library.

![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=mobile_sdk)

#### Note

If you directly accessed a third-party networking library in older versions of your app, update that code to use the SalesforceNetwork library.

Hybrid JavaScript functions use the the Mobile SDK architecture for the device operating system (Android, iOS, or Windows) to implement file operations. These functions are defined in force.js.

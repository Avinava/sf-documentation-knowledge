---
title: "Android Current Deprecations"
domain: mobile-sdk
topic: android-current-deprecations
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:27.451Z
estimatedTokens: 209
keywords: [Android, Current, Deprecations, show, currently, deprecated, Mobile, SDK, artifacts, annotated, source, files, prepare, removal, release, indicated, Upgrade, Gradle, Firebase, Cloud, Messaging, Beyond, 20.1.0]
---

> These lists show currently deprecated Mobile SDK objects and
  artifacts for Android, as annotated in the source files. Use this information to prepare for the
  removal of these artifacts in the release indicated.

# Android Current Deprecations

These lists show currently deprecated Mobile SDK objects and artifacts for Android, as annotated in the source files. Use this information to prepare for the removal of these artifacts in the release indicated.

Mobile SDK for Android hasn’t tagged any APIs for deprecation in the 11.1 release.

However, be prepared for the following changes planned for Mobile SDK 12.0.

## Upgrade to Gradle 8

The upgrade to Gradle 8 in Mobile SDK 12.0 will require you to upgrade your build files to Gradle 8 and use JDK 17.

## Upgrade Firebase Cloud Messaging Beyond 20.1.0

Mobile SDK 12.0 will upgrade FCM to the latest version after 20.1.0. To upgrade your apps, complete these steps.

1.  Remove the androidPushNotificationClientId bootconfig entry.
2.  Add google-services.json to the root of your project.

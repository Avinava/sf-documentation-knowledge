---
title: "Create an Xcode Swift Project"
domain: mobile-sdk
topic: create-an-xcode-swift-project
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:31.051Z
estimatedTokens: 357
keywords: [Xcode, Swift, Project, possible, changed, noninclusive, terms, align, company, Equality, maintained, certain, avoid, any, effect]
---

# Create an Xcode Swift Project

> Where possible, we changed noninclusive terms to align with our company
      value of Equality. We maintained certain terms to avoid any effect on customer
      implementations.

# Create an Xcode Swift Project

![Important](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note_important.png&folder=mobile_sdk)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Summary of Steps

In Xcode, create an **App** project that uses **Swift** language, the **SwiftUI** interface, and the **UIKit App Delegate** life cycle.

## Create an Empty Xcode Project—Details

1.  In Xcode, select **File** | **New** | **Project**. Or, from the Xcode Welcome screen, select **Create a new Xcode project**.
2.  On the iOS tab, select **App**, then click **Next**.
3.  Assign the following values:
    -   **Product Name:** MyMobileSDKApp
    -   **Team:** A team associated with your Apple Developer account
    -   **Organization Identifier:** A reverse DNS name, such as com.acme.apps
    -   **Interface:** **SwiftUI**
    -   **Life Cycle:** **UIKit App Delegate** (This step is not included in Xcode 13 wizards.)
    -   **Language:** **Swift**
4.  Accept defaults for **Use Core Data** and **Include Tests**, then click **Next**.
5.  Choose a directory for your project, then click **Create**.
6.  In Xcode, select a recent iPhone model as the active scheme and click **Run**. The app displays only a blank white screen with the words “Hello, world!”
7.  Click **Stop**.

---
title: "Pattern Approach"
domain: integration-patterns-and-practices
topic: pattern-approach
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:41.211Z
estimatedTokens: 563
keywords: [Pattern, Approach, integration, patterns, document, classified, three, categories]
---

# Pattern Approach

> The integration patterns in this document are classified into three categories:

# Pattern Approach

The integration patterns in this document are classified into three categories:

-   Data Integration—These patterns address the requirement to synchronize data that resides in two or more systems so that both systems always contain timely and meaningful data. Data integration is often the simplest type of integration to implement, but requires proper information management techniques to make the solution sustainable and cost effective. Such techniques often include aspects of master data management (MDM), data governance, mastering, de-duplication, data flow design, and others.
-   Process Integration—The patterns in this category address the need for a business process to leverage two or more applications to complete its task. When you implement a solution for this type of integration, the triggering application has to call across process boundaries to other applications. Usually, these patterns also include both orchestration (where one application is the central “controller”) and choreography (where applications are multi-participants and there is no central “controller”). These types of integrations can often require complex design, testing, and exception handling requirements. Also, such composite applications are typically more demanding on the underlying systems because they often support long-running transactions, and the ability to report on and/or manage process state.
-   Virtual Integration—The patterns in this category address the need for a user to view, search, and modify data that’s stored in an external system. When you implement a solution for this type of integration, the triggering application has to call out to other applications and interact with their data in real time. This type of integration removes the need for data replication across systems, and means that users always interact with the most current data.

Choosing the best integration strategy for your system isn’t trivial. There are many aspects to consider and many tools that can be used, with some tools being more appropriate than others for certain tasks. Each pattern addresses specific critical areas including the capabilities of each of the systems, volume of data, failure handling, and transactionality.

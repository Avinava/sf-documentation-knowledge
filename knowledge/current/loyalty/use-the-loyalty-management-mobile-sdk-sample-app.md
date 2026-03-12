---
title: "Use the Loyalty Management Mobile SDK Sample App"
domain: loyalty
topic: use-the-loyalty-management-mobile-sdk-sample-app
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:52.184Z
estimatedTokens: 378
keywords: [Loyalty, Management, Mobile, SDK, Sample, App, MyNTORewards, apps, implementation, capabilities, include, SDK's, code, structure, either]
---

# Use the Loyalty Management Mobile SDK Sample App

> The MyNTORewards sample apps are a reference implementation of Loyalty Management Mobile
        SDK capabilities, and include  the SDK's code, structure, and implementation. You can either
        implement the source code provided with the sample app in your existing code as-is or extend
        the capabilities of the code by modifying the code.

# Use the Loyalty Management Mobile SDK Sample App

The MyNTORewards sample apps are a reference implementation of Loyalty Management Mobile SDK capabilities, and include the SDK's code, structure, and implementation. You can either implement the source code provided with the sample app in your existing code as-is or extend the capabilities of the code by modifying the code.

After ensuring you have the necessary development tools, dependencies, and the SDK installed, integrate the Loyalty Management Mobile SDK sample app code in your iOS or Android project:

1.  Go to the location from where you downloaded the iOS or Android SDK, and select **SampleApps** | **MyNTORewards**.
2.  From the Sample Apps project, copy the files that you want to reuse in your project.
3.  Open an existing or new project in Xcode or Android Studio, and create a class or file.
4.  Paste the files that you copied from the MyNTORewards sample apps.
5.  Import any necessary dependencies that are used within.
6.  Modify the code as per your requirements.
7.  Test your app after you add the sample app code in iOS or Android.

## Example

For example, consider the source code for the class, CommunityMemberModel:

```

```

You can use the CommunityMemberModel class to represent the community member information as per your app. For example, you can create instances of this class to store member data:

```

```

You can modify the code provided with the sample app in the SDK to extract and store member data:

```

```

## Code Examples

```
package com.salesforce.loyalty.mobile.myntorewards.utilities

data class CommunityMemberModel(
    val firstName: String?,
    val lastName: String?,
    val email: String?,
    val loyaltyProgramMemberId: String?,
    val loyaltyProgramName: String?,
    val membershipNumber: String?
)
```

```
val member = CommunityMemberModel(
    firstName = "Adam",
    lastName = "Smith",
    email = "adamsmith@example.com",
    loyaltyProgramMemberId = "123456",
    loyaltyProgramName = "NTO Insider Loyalty Program",
    membershipNumber = "78190"
)
```

```
val firstName = member.firstName
val lastName = member.lastName
val email = member.email
val loyaltyProgramName = member.loyaltyProgramName
```

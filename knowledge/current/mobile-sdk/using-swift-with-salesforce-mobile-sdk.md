---
title: "Using Swift with Salesforce Mobile SDK"
domain: mobile-sdk
topic: using-swift-with-salesforce-mobile-sdk
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:31.222Z
estimatedTokens: 417
keywords: [Swift, Salesforce, Mobile, SDK, Creating, Apps, API, Naming]
---

# Using Swift with Salesforce Mobile SDK

# Using Swift with Salesforce Mobile SDK

## Creating Swift Apps

To create Mobile SDK Swift projects, you can assemble the pieces manually, or you can use the forceios create command. With forceios, specify native\_swift as the application type, or simply press Return. For example:

```

```

For manual app creation steps, see [Creating an iOS Swift Project Manually](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ios_new_native_project_manual.htm "If you prefer not to use forceios or CocoaPods, you can create Mobile SDK apps manually in Xcode.").

## Swift API Naming

In Mobile SDK, Swift methods and classes closely follow the related Objective-C API signatures. However, to facilitate calling Objective-C APIs, Mobile SDK defines Swift-friendly names for most methods and parameters. When Mobile SDK defines a custom Swift name, it appears in the Objective-C header file with the tag NS\_SWIFT\_NAME immediately following the Objective-C method declaration. Here’s an example method declaration:

```

```

With class and protocol names, the declaration comes before the class declaration:

```

```

If an Objective-C API is not available in Swift, you’ll see the tag NS\_SWIFT\_UNAVAILABLE("") next to the API declaration.

Most Swift class names are simply the Objective-C name without the “SF” prefix, but there are some refinements as well. For example, SFRestAPI equates to RestClient in Swift. Here are some noteworthy examples.

| Objective-C | Swift |
| --- | --- |
| SalesforceSDKManager | SalesforceManager |
| SFUserAccountManager | UserAccountManager |
| SFRestAPI | RestClient |
| SFSmartStore | SmartStore |
| SFMobileSync* | Mobile Sync* |

## Code Examples

```
forceios create
Enter your application type (native, native_swift, leave empty for native_swift): <press RETURN>
Enter your application name: TestSwift
Enter your package name: com.bestapps.swift
Enter your organization name (Acme, Inc.): BestApps, Inc.
Enter output directory for your app (leave empty for the current directory): TestSwift
```

```
- (nullable SFSyncState*) reSyncByName:(NSString*)syncName 
                           updateBlock:(SFSyncSyncManagerUpdateBlock)updateBlock 
                           NS_SWIFT_NAME(reSync(named:onUpdate:));
```

```
NS_SWIFT_NAME(RestClient)
@interface SFRestAPI : NSObject
```

## Related Topics

- Creating an iOS Swift Project Manually (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ios_new_native_project_manual.htm)

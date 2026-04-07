---
title: "Registering Soups with Configuration Files"
domain: mobile-sdk
topic: registering-soups-with-configuration-files
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:31.595Z
estimatedTokens: 1745
keywords: [Registering, Soups, Configuration, Files, Beginning, Mobile, SDK, 6.0SmartStore, lets, define, soup, structures, rather, code, Since]
---

# Registering Soups with Configuration Files

> Beginning with Mobile SDK 6.0SmartStore lets you define soup structures through
    configuration files rather than code. Since all platforms and app types use the same
    configuration files, you can describe all your soups in a single file. You can then compile that
    file into any  project.

# Registering Soups with Configuration Files

Beginning with Mobile SDK 6.0SmartStore lets you define soup structures through configuration files rather than code. Since all platforms and app types use the same configuration files, you can describe all your soups in a single file. You can then compile that file into any project.

To register a soup, you provide a soup name and a list of one or more index specifications.

You index a soup on one or more fields found in its entries. SmartStore makes sure that these indexes reflect any insert, update, and delete operations. Always specify at least one index field when registering a soup. For example, if you are using the soup as a simple key-value store, use a single index specification with a string type.

## Overview

SmartStore configuration files use JSON objects to express soup definitions. The JSON schema for configuration files is the same for all app types and platforms. Hybrid apps load the configuration files automatically, while other apps load them with a single line of code. To keep the mechanism simple, Mobile SDK enforces the following file naming conventions:

-   To define soups for the default global store, provide a file named globalstore.json.
-   To define soups for the default user store, provide a file named userstore.json.

Configuration files can define soups only in the default global store and default user store. For named stores, you register soups through code. You can’t use configuration files to set up externally stored soups.

![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=mobile_sdk)

#### Note

-   Configuration files are intended for initial setup only. You can't change existing soups by revising the JSON file and reloading it at runtime. Instead, use SmartStore methods such as alterSoup(). See [Managing Soups](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_managing_soups.htm "SmartStore provides utility functionality that lets you retrieve soup metadata and perform other soup-level operations. This functionality is available for hybrid, React Native, Android native, and iOS native apps.").
-   If a configuration file defines a soup that exists, Mobile SDK ignores the configuration file. In this case, you can set up and manage your soups only through code.

## Configuration File Format

The JSON format is self-evident as illustrated in the following example.

```

```

For Mobile Sync compatibility, configuration files also require indexes on some system fields. See [Preparing Soups for](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_mobilesync_compatibility.htm "Soups that exchange information with the Salesforce cloud typically use Mobile Sync for synchronization. To support Mobile Sync, most app types require you to create and manage special soup fields for “sync up” operations.").

## Configuration File Locations

Configuration file placement varies according to app type and platform. Mobile SDK looks for configuration files in the following locations:

iOS (Native and React Native)

Under / in the Resources bundle

Android (Native and React Native)

In the /res/raw project folder

Hybrid

In your Cordova project, do the following:

1.  Place the configuration file in the top-level www/ folder.
2.  In the top-level project directory, run: cordova prepare

## Loading SmartStore Configuration Files in Native Apps

SmartStore and its companion feature Mobile Sync require a special SDK manager object. For example, to use SmartStore or Mobile Sync in iOS, initialize the SDK by calling MobileSyncSDKManager.initializeSDK() rather than SalesforceSDKManager.initializeSDK().

If you’re not using Mobile Sync, you can call SmartStoreSDKManager.initializeSDK(). However, such cases are rare.

In native and React Native apps, you load your JSON configuration file by calling a loading method. Make this call in your app initialization code after the customer successfully logs in. For example, in iOS, make this call in the block you pass to loginIfRequired. Call these methods only if you’re using a globalstore.json or userstore.json file instead of code to configure SmartStore. Do not call these loading methods more than once. In hybrid apps that include them, SmartStore configuration files are loaded automatically.

To load a soup configuration file, call the loader method for the store you’re targeting. Load this file before calling other SmartStore methods.

**iOS (Native and React Native)**

Load a soup configuration file by calling the appropriate method on the MobileSyncSDKManager object.

Load a Default User Store

Swift

```

```

Objective-C

```

```

Load a Default Global Store

Swift

```

```

Objective-C

```

```

**Android (Native and React Native)**

Load a soup configuration file by calling the appropriate method on the MobileSyncSDKManager object.

Load a Default User Store

```

```

Load a Default Global Store

```

```

**Hybrid**

If SmartStore finds a soup configuration file, it automatically loads the file. To add the file to your project:

1.  Copy the configuration file (userstore.json or globalstore.json) to the top-level www/ directory of your hybrid project directory.
2.  In a command prompt or Terminal window, change to your hybrid project directory and run: cordova prepare

## Sample Code

MobileSyncExplorer and MobileSyncExplorerHybrid sample apps use a config file to set up SmartStore soups.

![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=mobile_sdk)

#### Note

-   Call the SmartStore loader method only if you are using a userstore.json to define soups. If you set up your soups with code instead of configuration files, don't call the loader method.
-   Call the loader method after the customer has logged in.
-   Do not call a loader method more than once.

## Example

SmartStore uses the same configuration file—userstore.json—for native and hybrid versions of the MobileSyncExplorer sample. The final five paths in this configuration are required if you’re using Mobile Sync.

```

```

-   **[Registering a Soup through Code](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_soup.htm)**
    Before you try to access a soup, you’re required to register it.

#### See Also

-   [Preparing Soups for](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_mobilesync_compatibility.htm "Soups that exchange information with the Salesforce cloud typically use Mobile Sync for synchronization. To support Mobile Sync, most app types require you to create and manage special soup fields for “sync up” operations.")

-   [Validating Configuration Files](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_config_validator.htm "When you’re writing formally structured text files, schema validation is useful at any level. For SmartStore and Mobile Sync configuration files, schema validation is especially welcome for complex configurations that handle related records.")

## Code Examples

```
{  "soups": [
    {
      "soupName": "soup1",
      "indexes": [
        { "path": "stringField1", "type": "string"},
        { "path": "integerField1", "type": "integer"},
        { "path": "floatingField1", "type": "floating"},
        { "path": "json1Field1", "type": "json1"},
        { "path": "ftsField1", "type": "full_text"}
      ]
    },
    {
      "soupName": "soup2",
      "indexes": [
        { "path": "stringField2", "type": "string"},
        { "path": "integerField2", "type": "integer"},
        { "path": "floatingField2", "type": "floating"},
        { "path": "json1Field2", "type": "json1"},
        { "path": "ftsField2", "type": "full_text"}
      ]
    }
  ]
}
```

```
// In the AppDelegate class:
override init() {
        super.init()
        MobileSyncSDKManager.initializeSDK()
...

// Load config files in the block you pass to loginIfRequired()
func application(_ application: UIApplication, didFinishLaunchingWithOptions 
    launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {

    self.window = UIWindow(frame: UIScreen.main.bounds)
    self.initializeAppViewState()
    // ...

    AuthHelper.loginIfRequired {
        self.setupRootViewController()
        MobileSyncSDKManager.shared.setupUserStoreFromDefaultConfig()
    }
...
```

```
// In the AppDelegate class:
- (instancetype)init
{
    self = [super init];
    if (self) {
        [MobileSyncSDKManager initializeSDK];
...

// Load config files in the block you pass to loginIfRequired()
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
    self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
    [self initializeAppViewState];
...

    [SFSDKAuthHelper loginIfRequired:^{
        [self setupRootViewController];
        [[MobileSyncSDKManager sharedManager] setupUserStoreFromDefaultConfig];
    }];
...
```

```
// In the AppDelegate class:
override init() {
        super.init()
        MobileSyncSDKManager.initializeSDK()
...

// Load config files in the block you pass to loginIfRequired()
func application(_ application: UIApplication, didFinishLaunchingWithOptions 
    launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
    self.window = UIWindow(frame: UIScreen.main.bounds)
    self.initializeAppViewState()
    // ...

    AuthHelper.loginIfRequired {
        self.setupRootViewController()
        MobileSyncSDKManager.shared.setupGlobalStoreFromDefaultConfig()
    }
...
```

```
// In the AppDelegate class:
- (instancetype)init
{
    self = [super init];
    if (self) {
        [MobileSyncSDKManager initializeSDK];
...

// Load config files in the block you pass to loginIfRequired()
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
    self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
    [self initializeAppViewState];
...

    [SFSDKAuthHelper loginIfRequired:^{
        [self setupRootViewController];
        [[MobileSyncSDKManager sharedManager] setupGlobalStoreFromDefaultConfig];
    }];
...
```

## Related Topics

- Managing Soups (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_managing_soups.htm)
- Preparing Soups for (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_mobilesync_compatibility.htm)
- Registering a Soup through Code (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_soup.htm)
- Validating Configuration Files (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_config_validator.htm)

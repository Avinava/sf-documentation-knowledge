---
title: "Profiling with Signposts"
domain: mobile-sdk
topic: profiling-with-signposts
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:40:26.418Z
estimatedTokens: 640
keywords: [Profiling, Signposts, provide, powerful, option, logging, app’s, runtime, resource, viewed, Xcode’s, Instruments, signpost, logs, allow, model, performance, over, time, profiles, help, bottlenecks, anomalies, code, Beginning, 7.1, Mobile, SDK, add, heavily, portions, profile, app, Swift, Objective-C, apps, Debug, Builds, Production, Running, Build]
---

> Signposts provide a powerful option for logging your app’s runtime resource usage. When
    viewed in Xcode’s Instruments, signpost logs allow you to model your app’s performance over
    time. These profiles help you find bottlenecks and other anomalies in your code. Beginning in
    version 7.1, Mobile SDK add signposts in heavily used portions of its code so you can profile its performance in your
    app. Mobile SDK
    signposts are available for Swift and Objective-C apps.

# Profiling with Signposts

Signposts provide a powerful option for logging your app’s runtime resource usage. When viewed in Xcode’s Instruments, signpost logs allow you to model your app’s performance over time. These profiles help you find bottlenecks and other anomalies in your code. Beginning in version 7.1, Mobile SDK add signposts in heavily used portions of its code so you can profile its performance in your app. Mobile SDK signposts are available for Swift and Objective-C apps.

In debug profiles, enabling signposts requires a single flip of an Xcode switch. For production profiles in apps that use CocoaPods, you make a few changes to the Podfile and then rebuild.

## Using Signposts in Debug Builds

In Mobile SDK libraries, signposts are pre-configured for Debug builds. However, Xcode profile schemes default to Release builds. Let’s change that.

To profile a debug build:

1.  In the Xcode taskbar, click the scheme name and select **Edit Scheme**.
2.  Select **Profile**.
3.  Set Build Configuration to **Debug**.

## Using Signposts in Production Builds

To profile a production build with Mobile SDK signposts, you don’t edit the default profile scheme. If you’ve already tinkered with default settings, however, verify them as follows:

1.  In the Xcode taskbar, click the scheme name and select **Edit Scheme**.
2.  Select **Profile**.
3.  Make sure that Build Configuration is set to **Release**.

If you created your project “manually”, without using forceios or CocoaPods, your configuration is ready to run. Skip to [Running a Signpost Profile Build](#signposts_run).

If you used forceios to create your app, CocoaPods controls the settings for Mobile SDK pods. To profile a production build of a Mobile SDK app that uses CocoaPods:

1.  Edit the following section of your app’s Podfile.

    ```

    ```

    -   Change if config.name == 'Debug' (as shown here) to if config.name == 'Release'.
    -   Remove the '$(inherited)', 'DEBUG=1' and '-DDEBUG' settings.

    Here’s the intended result.

    ```

    ```

2.  **Important:** Close your workspace.
3.  In the Terminal app, switch to your workspace directory and run: pod update
4.  Reopen your workspace in Xcode.

## Running a Signpost Profile Build

To run a signpost build:

1.  In the Xcode menu, click **Product** | **Profile**
2.  When prompted, select a Profiling Template—for example, “Blank”—and click **Choose**.
3.  In the Instruments panel, click **+** and find “os\_signposts”.
4.  Double-click **os\_signposts**.
5.  Click **Record**. Enjoy the show!

## Code Examples

```
# Comment the following if you do not want the SDK to emit signpost 
# events for instrumentation. Signposts are  enabled for non release version of the app.
 post_install do |installer_representation|
       installer_representation.pods_project.targets.each do |target|
           target.build_configurations.each do |config|
               if config.name == 'Debug’ 
                   config.build_settings['GCC_PREPROCESSOR_DEFINITIONS'] ||= ['$(inherited)', 'DEBUG=1','SIGNPOST_ENABLED=1']
                   config.build_settings['OTHER_SWIFT_FLAGS'] = ['$(inherited)', '-DDEBUG', '-DSIGNPOST_ENABLED']
               end
           end
       end
  end
```

```
# Comment the following if you do not want the SDK to emit signpost 
# events for instrumentation. Signposts are  enabled for non release version of the app.
 post_install do |installer_representation|
       installer_representation.pods_project.targets.each do |target|
           target.build_configurations.each do |config|
               if config.name == 'Release’ 
                   config.build_settings['GCC_PREPROCESSOR_DEFINITIONS'] ||= ['SIGNPOST_ENABLED=1']
                   config.build_settings['OTHER_SWIFT_FLAGS'] = ['-DSIGNPOST_ENABLED']
               end
           end
       end
  end
```

---
title: "Developing Hybrid Remote Apps"
domain: mobile-sdk
topic: developing-hybrid-remote-apps
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:26.061Z
estimatedTokens: 664
keywords: [Developing, Hybrid, Remote, Apps, easily, convert, FileExplorer, SDK, sample, github.com, forcedotcom, SalesforceMobileSDK-Shared, tree, master, samples, local, app, redefine, main, HTML, Visualforce, delivere, localhost, iOS]
---

> You can easily convert the FileExplorer SDK sample (github.com/forcedotcom/SalesforceMobileSDK-Shared/tree/master/samples/fileexplorer),
      which is a hybrid local app, into a hybrid remote app. To convert the app, you redefine the
      main HTML page as a Visualforce page
      that is delivere

# Developing Hybrid Remote Apps

You can easily convert the FileExplorer SDK sample ([github.com/forcedotcom/SalesforceMobileSDK-Shared/tree/master/samples/fileexplorer](https://github.com/forcedotcom/SalesforceMobileSDK-Shared/tree/master/samples/fileexplorer "HTML (New Window)")), which is a hybrid local app, into a hybrid remote app. To convert the app, you redefine the main HTML page as a Visualforce page that is delivered from the server. You can then bundle the CSS and JavaScript resources with the app so that they’re stored on the device.

Let’s start by creating the Visualforce page.

1.  In your Salesforce Developer Edition org, create a Visualforce page named “FileExplorer” with the following attributes.

    ```

    ```

2.  Copy the contents of the samples/fileexplorer/FileExplorer.html file into the FileExplorer Visualforce page.
3.  Delete the <!DOCTYPE html> directive at the top of the inserted content.
4.  Save your work.

Next, create a hybrid remote app to contain the sample code.

1.  cd to the directory where you want to develop your app. The only requirement is that this directory cannot already contain a subdirectory named “fileexplorer”.
2.  In a Terminal window or command prompt, run forcehybrid create with the following values:

    | Platform: | ios,android |
    | --- | --- |
    | Application type: | hybrid_remote |
    | Application name: | fileexplorer |
    | Package name: | com.salesforce.fileexplorer |
    | Organization name: | Acme Apps, Inc. |
    | Start page: | apex/FileExplorer |
    | Output directory: | <press RETURN> |

3.  In a text editor, open fileexplorer/www/bootconfig.json and change the following properties as follows:

    ```

    ```

    These settings configure your app to be a hybrid remote app.
4.  Return to your Terminal window or command prompt, and then type:

    ```

    ```


Done! To run the Android target, import the *<my\_app\_directory>*/fileexplorer/platforms/android folder into Android Studio and run the app. Or, to run the iOS target, import the *<my\_app\_directory>*/fileexplorer/platforms/ios/fileexplorer.xcworkspace file into Xcode and run the app. When you test this sample, be sure to log in to the organization where you created the Visualforce page.

## Using localhost in Hybrid Remote Apps for iOS

Beginning with version 5.0, Mobile SDK followed Apple’s mandate and deprecated the UIWebView class in favor of WKWebView.

To comply with the App Store’s upcoming policy of rejecting apps that use UIWebView, Mobile SDK 8.1 removes all references to that class. As a result, you can no longer use localhost in Mobile SDK hybrid remote apps.

## Code Examples

```
<apex:page docType="html-5.0" showHeader="false" sidebar="false">
<!-- Paste content of FileExplorer.html here, but remove the “<!DOCTYPE html>” directive -->
</apex:page>
```

```
"isLocal": false,
"startPage": "apex/FileExplorer",
```

```
cordova prepare
```

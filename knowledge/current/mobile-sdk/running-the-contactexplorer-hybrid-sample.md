---
title: "Running the ContactExplorer Hybrid Sample"
domain: mobile-sdk
topic: running-the-contactexplorer-hybrid-sample
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:25.392Z
estimatedTokens: 1438
keywords: [Running, ContactExplorer, Hybrid, Sample, Let’s, look, app, included, Mobile, SDK, exercise, Mac, Windows, fully, validate, iOS, target]
---

> Let’s look at the ContactExplorer sample app, which is included in Mobile SDK.
                     You can do this exercise on Mac
                OS or Windows, but you can fully validate the iOS target only on a Mac.

# Running the ContactExplorer Hybrid Sample

Let’s look at the ContactExplorer sample app, which is included in Mobile SDK. You can do this exercise on Mac OS or Windows, but you can fully validate the iOS target only on a Mac.

Before starting this exercise, be sure that you have:

-   A directory to contain the SalesforceMobileSDK-Shared cloned repo—your root directory, or any other easily accessible location.
-   A directory for creating and developing Mobile SDK hybrid projects. Since Cordova projects can contain both iOS and Android targets, it’s a good idea to put them in a platform-neutral directory.

To begin, clone the shared repo, then create an app with forcehybrid.

1.  At a command prompt or Terminal window, cd to the directory where you plan to clone the shared repo.
2.  Run the following command.

    ```

    ```

3.  cd to the directory where you plan to develop your hybrid project.
4.  Run forcehybrid create with the following values:

    ```

    ```

    Now that you have a generic hybrid project, you can add the contactexplorer sample code to it.

5.  Run the following commands, making sure to replace the placeholder in the cp command with your local path.

    ```

    ```

    ![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=mobile_sdk)

    #### Note

    *Windows users*: On Windows, substitute the copy command for the cp Unix command. Be aware, however, that files in the js and css subfolders of /samples/contactexplorer/ are aliases to source files on other paths. Make sure that you copy the source files themselves rather than their aliases. Here’s an example:

    ```

    ```


The forcedroid script and the ensuing commands create an iOS project and an Android project, both of which wrap the ContactExplorer sample app. Now we’re ready to run the app on one of these platforms. If you’re using an iOS device, you must configure a profile for the simulator, as described in the Xcode User Guide at [developer.apple.com/library](http://developer.apple.com/library). Similarly, Android devices must be set up as described at [developer.android.com/tools](http://developer.android.com/tools).

To run the app on iOS:

1.  cd to platforms/ios/.
2.  Run the following command: open contactsApp.xcworkspace
3.  In Xcode, click **Run**.

To run the app on Android:

1.  In Android Studio, import or open the *<your-hybrid-projects-directory>*/contactsApp/platforms/android project.
2.  Click **Run**.

When you run the app, after an initial splash screen, you see the Salesforce login screen.

![Mobile Login Screen](/docs/resources/img/en-us/noversion?doc_id=dev_guides%2Fmobile_sdk%2Fimages%2FMobileLoginScreen.png&folder=mobile_sdk)

Log in with your Developer Edition org username and password. To allow the app to access your Salesforce data, tap **Allow**. Now that you’re in the app, you can retrieve lists of contacts and accounts. Tap **Fetch SFDC contacts** to retrieve Salesforce contact names or **Fetch SFDC Accounts** to retrieve account names from your DE organization.

![Sample Hybrid App](/docs/resources/img/en-us/noversion?doc_id=dev_guides%2Fmobile_sdk%2Fimages%2FSampleHybridApp.png&folder=mobile_sdk)

With each tap, the app appends rows to an infinite list. Scroll down to see the full list.

![Sample Hybrid Contacts](/docs/resources/img/en-us/noversion?doc_id=dev_guides%2Fmobile_sdk%2Fimages%2FSampleHybridContacts.png&folder=mobile_sdk)

Let's take a closer look at how the app works.

To initiate a user session with force.js, you call force.login(). After the user logs in to an app running in the container, the network plug-in refreshes tokens as necessary when the app tries to access Salesforce resources. The following code, adapted from the ContactExplorer sample, demonstrates a typical force.login() implementation.

When the device notifies that it’s ready, you call the force.login() method to post the login screen.

```

```

After completing the login process, the sample app displays index.html (located in the www folder). When the page has completed loading and the mobile framework is ready, the jQuery(document).ready() function calls regLinkClickHandlers(). This function (in inline.js) sets up click handlers for the various functions in the sample app. For example, the #link\_fetch\_sfdc\_contacts handler runs a query using the force object.

```

```

The force object is set up during the initial OAuth 2.0 interaction, and gives access to REST API in the context of the authenticated user. Here, we retrieve the names of all the contacts in the DE organization. onSuccessSfdcContacts() then renders the contacts as a list on the index.html page.

```

```

Similarly to the #link\_fetch\_sfdc\_contacts handler, the #link\_fetch\_sfdc\_accounts handler fetches Account records via REST API. The #link\_reset  and#link\_logout handlers clear the displayed lists and log out the user, respectively.

Notice that the app can also retrieve contacts from the device—something that an equivalent web app would be unable to do. The following click handler retrieves device contact query by calling the Cordova contacts plug-in.

```

```

This handler uses the ContactFindOptions and navigator.contacts objects from cordova-plugin-contacts to refine and execute a search. It calls navigator.contacts.find() to retrieve a list of contacts with phone numbers from the device. The onSuccessDevice() function (not shown here) renders the contact list into the index.html page.

#### See Also

-   [Build and Run Your Hybrid App On iOS](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/hybrid_run_ios.htm)

-   [Build and Run Your Hybrid App on Android](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/hybrid_run_android.htm)

## Code Examples

```
git clone https://github.com/forcedotcom/SalesforceMobileSDK-Shared.git
```

```
Enter the target platform(s) separated by commas (ios, android): ios,android
Enter your application type (hybrid_local or hybrid_remote, leave empty for hybrid_local): <press RETURN>
Enter your application name: contactsApp
Enter the package name for your app (com.mycompany.myapp): com.acmeapps.contactexplorer
Enter your organization name (Acme, Inc.): AcmeApps.com
Enter output directory for your app (leave empty for the current directory): <press RETURN>
```

```
cd contactsApp
cordova plugin add cordova-plugin-contacts
cordova plugin add cordova-plugin-statusbar
cp -RL <local path to SalesforceMobileSDK-Shared>/samples/contactexplorer/* www/
cordova prepare
```

```
cd contactsApp
cordova plugin add cordova-plugin-contacts
cordova plugin add cordova-plugin-statusbar
rem Make a path variable
set SHAREDPATH=C:\SalesforceMobileSDK-Shared\
md www
cd www
md css
copy %SHAREDPATH%\samples\common\jquery.mobile-1.3.1.min.css css
md js
copy %SHAREDPATH%\test\MockCordova.js js
copy %SHAREDPATH%\libs\cordova.force.js js
copy %SHAREDPATH%\libs\force.js js
copy %SHAREDPATH%\dependencies\jquery\jquery.min.js js
copy %SHAREDPATH%\samples\common\jquery.mobile-1.3.1.min.js js
cordova prepare
```

```
/* Do login */
force.login(
    function() {
        console.log("Auth succeeded"); 
        // Call your app’s entry point
        // ...
    },
    function(error) {
        console.log("Auth failed: " + error); 
    }
);
```

## Related Topics

- Build and Run Your Hybrid App On iOS (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/hybrid_run_ios.htm)
- Build and Run Your Hybrid App on Android (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/hybrid_run_android.htm)

---
title: "Using SmartStore in Swift
  Apps"
domain: mobile-sdk
topic: using-smartstore-in-swift-apps
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:27.025Z
estimatedTokens: 1150
keywords: [SmartStore, Swift, Apps, easily, install, basic, plumbing, forceios, native, project]
---

> You can easily install the basic plumbing for SmartStore in a forceios native
    Swift project.

# Using SmartStore in Swift Apps

You can easily install the basic plumbing for SmartStore in a forceios native Swift project.

In this example, you create a SmartStore soup and upsert the queried list of contact names into that soup. You then change the Swift template app flow to populate the table view from the soup instead of directly from the REST response. If you’re not familiar with Xcode project structure, consult the *Xcode Help*.

1.  Using forceios, create a native Swift project similar to the following example:

    ```

    ```

2.  In your project’s root directory, create a userstore.json file with the following content.

    ```

    ```

3.  Open your app's .xcworkspace file in Xcode.
4.  Add your configuration file to your project.
    1.  In the Xcode Project navigator, select the project node.
    2.  In the Editor window, select **Build Phases**.
    3.  Expand **Copy Bundle Resources**.
    4.  Click **+** (”Add items”).
    5.  Select your soup configuration file. If your file is not already in an Xcode project folder:
        1.  To select your file in Finder, click **Add Other...**.
        2.  Click **Open**, then click **Finish**.
5.  In your project’s source code folder, select Classes/AppDelegate.swift.
6.  In the application(\_:didFinishLaunchingWithOptions:) callback method, load userstore.json definitions in the call to AuthHelper.loginIfRequired.

    ```

    ```

    Your app is now set up to load your SmartStore configuration file at startup. This action creates the soups you specified as empty tables. Let's configure the RootViewController class to use SmartStore.
7.  In RootViewController.swift, import SmartStore:

    ```

    ```

8.  At the top of the RootViewController class, declare a variable for a SmartStore instance.

    ```

    ```

9.  On the next line, declare a constant that defines an OSLog component.

    ```

    ```

10.  In the loadView() method, find the call to .query and add the Id field to the SOQL statement.

     ```

     ```

11.  In the handleSuccess(\_:\_:) method, immediately after the guard block, add the following code.

     ```

     ```

     This code checks whether the Contact soup exists. If the soup exists, the code clears all data from the soup, and then upserts the retrieved records.
12.  Launch the app, then check your work using the Dev Tools menu.
     1.  To bring up the menu, type control + command + z if you’re using the iOS emulator, or shake your iOS device.
     2.  Click **Inspect SmartStore**.
     3.  To list your Contact soup and number of records, click **Soups**.

         ![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=mobile_sdk)

         #### Note

         If you get a "Query: No soups found" message, chances are you have an error in your userstore.json file.


You’ve now created and populated a SmartStore soup. However, at this point your soup doesn’t actually serve a purpose. Let's make it more useful by populating the list view from SmartStore records rather than directly from the REST response.

1.  After the handleSuccess(\_:\_:) method, add a method named loadFromStore().

    ```

    ```

2.  In loadFromStore(), define an if block that builds a Smart SQLquery specification as its first condition. Configure the query to extract the first 10 Name values from the Contact soup.

    ```

    ```

3.  Add a second condition that verifies the SmartStore handle and a third condition that runs the SmartStore query. Since the query method throws an exception, call it from a do...try...catch block.

    ```

    ```

4.  Transfer the names returned by the SmartStore query to the view’s dataRows member .

    ```

    ```

5.  Using the DispatchQueue system object, switch to the main thread and refresh the view’s displayed data.

    ```

    ```

6.  Scroll back to the handleSuccess(\_:\_:) method and remove the existing code that reloads the view’s data.

    ```

    ```

7.  Using self, call your new loadFromStore() method immediately after the upsert(entries:forSoupNamed:) call.

    ```

    ```


When you retest your app, you see that the table view is populated as before, but from SmartStore rather than a live REST response. In the real world, you'd create an editing interface for the Contact list, and then upsert your customers' edits to SmartStore. The customer could then continue working on the Contact list even if the mobile device lost connectivity. When connectivity is restored, you could then merge the customer’s work to the server—and also resync SmartStore—using Mobile SDK.

## Code Examples

```
$ forceios create
Enter your application type (native_swift or native, leave empty for native_swift): <Press RETURN>
Enter your application name: <Enter any name you like>
Enter your package name: com.myapps.ios
Enter your organization name (Acme, Inc.): MyApps.com
Enter output directory for your app (leave empty for the current directory): <Press RETURN or enter a directory name>
```

```
{ "soups": [
    {
    "soupName": "Contact",
    "indexes": [
        { "path": "Name", "type": "string"},
        { "path": "Id", "type": "string"}                        
        ]
    }    
]}
```

```
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplicationLaunchOptionsKey: Any]?) -> Bool
{
    self.window = UIWindow(frame: UIScreen.main.bounds)
    self.initializeAppViewState();
    ...

    AuthHelper.loginIfRequired { [weak self] in
        MobileSyncSDKManager.shared.setupUserStoreFromDefaultConfig()
        self?.setupRootViewController()
    }
    return true
}
```

```
class RootViewController : UITableViewController
{
    var dataRows = [NSDictionary]()
    var store = SmartStore.shared(withName: SmartStore.defaultStoreName)
```

```
class RootViewController : UITableViewController
{
    var dataRows = [NSDictionary]()
    var store = SmartStore.shared(withName: SmartStore.defaultStoreName)
    let mylog = OSLog(subsystem: "com.testapp.swift", category: "tutorial")
```

---
title: "Deferring Login in Native Android Apps"
domain: mobile-sdk
topic: deferring-login-in-native-android-apps
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:29.571Z
estimatedTokens: 808
keywords: [Deferring, Login, Native, Android, Apps, Mobile, SDK, forcedroid, bases, project, template, app, gives, lots, free]
---

# Deferring Login in Native Android Apps

> When you create Mobile SDK
                apps using forcedroid, forcedroid bases your project on a template app that gives
                you lots of free standard functionality. For example, you don’t have to implement
                authentication—login and passcode handling are built into you

# Deferring Login in Native Android Apps

When you create Mobile SDK apps using forcedroid, forcedroid bases your project on a template app that gives you lots of free standard functionality. For example, you don’t have to implement authentication—login and passcode handling are built into your launcher activity. This design works well for most apps, and the free code is a big time-saver. However, after you’ve created your forcedroid app you might find reasons for deferring Salesforce authentication until some point after the launcher activity runs.

You can implement deferred authentication easily while keeping the template app’s built-in functionality. Here are the guidelines and caveats:

-   Replace the launcher activity (named MainActivity in the template app) with an activity that does *not* extend any of the following Mobile SDK activities:

    -   SalesforceActivity
    -   SalesforceListActivity
    -   SalesforceExpandableListActivity

    This rule likewise applies to any other activities that run before you authenticate with Salesforce.
-   Do not call the peekRestClient() or the getRestClient() ClientManager method from your launcher activity or from any other pre-authentication activities.
-   Do not change the initNative() call in the TemplateApp class. It must point to the activity class that launches after authentication (MainActivity in the template app).
-   When you’re ready to authenticate with Salesforce, launch the MainActivity class.

The following example shows how to place a non-Salesforce activity ahead of Salesforce authentication. You can of course expand and embellish this example with additional pre-authentication activities, observing the preceding guidelines and caveats. This example is based on the [MobileSyncExplorer sample app](https://github.com/forcedotcom/SalesforceMobileSDK-Android/tree/master/native/NativeSampleApps/MobileSyncExplorer "HTML (New Window)").

1.  Create an XML layout for the pre-authentication landing page of your application. For example, the following layout file, launcher.xml, contains only a button that triggers the login flow.

    ![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=mobile_sdk)

    #### Note

    The following example defines a string resource, @string/login, in the res/strings.xml file as follows:

    ```

    ```

    ```

    ```

2.  Create a landing screen activity. For example, here’s a landing screen activity named LauncherActivity. This screen simply inflates the XML layout defined in launcher.xml. This class must not extend any of the Salesforce activities or call peekRestClient() or getRestClient(), since these calls trigger the authentication flow. When the user taps the login button, the onLoginClicked() button handler launches MainActivity, and login ensues.

    Kotlin

    ```

    ```

    Java

    ```

    ```

3.  Modify the AndroidManifest.xml to specify LauncherActivity as the activity to be launched when the app first starts.

    ```

    ```


When you start the application. the LauncherActivity screen appears. Click the login button to initiate the Salesforce authentication flow. After authentication completes, the app launches MainActivity.

## Code Examples

```
<string name="login">Login</string>
```

```
<?xml version="1.0" encoding="utf-8"?>

<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    android:background="@android:color/white"
    android:id="@+id/root">

    <Button android:id="@+id/login_button"
        android:layout_width="80dp"
        android:layout_height="60dp"
        android:text="@string/login"
        android:textColor="@android:color/black"
        android:textStyle="bold"
        android:gravity="center"
        android:layout_gravity="center"
        android:textSize="18sp"
        android:onClick="onLoginClicked" />
</LinearLayout>
```

```apex
class LauncherActivity : Activity() {
    public override fun onCreate(savedInstance: Bundle?) {
        super.onCreate(savedInstance)
        setContentView(R.layout.launcher)
    }

    /**
     * Callback received when the 'Delete' button is clicked.
     *
     * @param v View that was clicked.
     */
    fun onLoginClicked(v: View) {
        /*
         * TODO: Add logic here to determine if we are already
         * logged in, and skip this screen by calling
         * 'finish()', if that is the case.
         */
        val mainIntent = Intent(this, MainActivity::class.java)
        mainIntent.addCategory(Intent.CATEGORY_DEFAULT)
        startActivity(mainIntent)
        finish()
    }
}
```

```apex
package com.salesforce.samples.mobilesyncexplorer.ui;

import com.salesforce.samples.mobilesyncexplorer.R;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;

public class LauncherActivity extends Activity {
    @Override
    public void onCreate(Bundle savedInstance) {
        super.onCreate(savedInstance);
        setContentView(R.layout.launcher);
    }

    /**
      * Callback received when the 'Delete' button is clicked.
      *
      * @param v View that was clicked.
    */
    public void onLoginClicked(View v) {
        /*
         * TODO: Add logic here to determine if we are already 
         * logged in, and skip this screen by calling 
         * 'finish()', if that is the case.
        */
        final Intent mainIntent = 
            new Intent(this, MainActivity.class);
        mainIntent.addCategory(Intent.CATEGORY_DEFAULT);
        startActivity(mainIntent);
        finish();
    }
}
```

```
<!-- Launcher screen -->
<activity android:name=
"com.salesforce.samples.mobilesyncexplorer.ui.LauncherActivity"
   android:label="@string/app_name"
   android:theme="@style/SalesforceSDK.ActionBarTheme">
   <intent-filter>
       <action android:name="android.intent.action.MAIN" />
       <category 
           android:name="android.intent.category.LAUNCHER" />
   </intent-filter>
</activity>

<!-- Main screen -->
<activity android:name=
"com.salesforce.samples.mobilesyncexplorer.ui.MainActivity"
   android:label="@string/app_name"
   android:theme="@style/SalesforceSDK.ActionBarTheme">
   <intent-filter>
       <category android:name=
           "android.intent.category.DEFAULT" />
   </intent-filter>
</activity>
```

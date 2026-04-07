---
title: "Test Your New Experience Cloud Site Login"
domain: mobile-sdk
topic: test-your-new-experience-cloud-site-login
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:40:25.349Z
estimatedTokens: 514
keywords: [Test, New, Experience, Cloud, Site, Login, setup, logging, Mobile, SDK, native, hybrid, local, app, contact]
---

> Test your Experience Cloud site setup by logging in to your Mobile SDK
		native or hybrid local app as your new contact.

# Test Your New Experience Cloud Site Login

Test your Experience Cloud site setup by logging in to your Mobile SDK native or hybrid local app as your new contact.

To log in to your Experience Cloud site from your Mobile SDK app, configure your app to recognize your site login URL.

1.  For Android:
    1.  Open your Android project in Android Studio.
    2.  In the Project Explorer, go to the res folder and create a new (or select the existing) xml folder.
    3.  In the xml folder, create a text file. You can do this using either the **File** menu or the CTRL-Click (or Right-Click) menu.
    4.  In the new text file, add the following XML. Replace the server URL with your Experience Cloud site login URL:

        ```

        ```

    5.  Save the file as servers.xml.
2.  For iOS:

    1.  Start the app without logging in.
    2.  In the login screen, tap the Settings, or ”gear,” icon ![Settings icon](/docs/resources/img/en-us/noversion?doc_id=dev_guides%2Fmobile_sdk%2Fimages%2Fgear-icon.png&folder=mobile_sdk) in the top navigation bar.
    3.  In the Choose Connection screen, tap the Plus icon ![Plus icon](/docs/resources/img/en-us/noversion?doc_id=dev_guides%2Fmobile_sdk%2Fimages%2Fplus-icon.png&folder=mobile_sdk).
    4.  (Optional but recommended) To help identify this configuration in future visits, enter a label.
    5.  Enter your custom login host’s URI. Be sure to omit the https:// prefix. For example, here’s how you enter a typical Experience Cloud site URI:

        ```

        ```


    Alternatively, set the login screen through MDM if you’re using MDM for configuration.

3.  Start your app on your device, simulator, or emulator, and log in with username jimparker@fineapps.com and password mobiletest1234.

![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=mobile_sdk)

#### Note

If your mobile app remains at the login screen for an extended time, you can get an “insufficient privileges” error upon login. In this case, close and reopen the app, and then log in immediately.

## Code Examples

```
<?xml version="1.0" encoding="utf-8"?>
<servers>
	<server name="Experience Cloud Site Login" url=
	"https://fineapps-dev-ed.my.site.com/fineapps">
</servers>
```

```
MyDomainName.my.site.com/fineapps
```

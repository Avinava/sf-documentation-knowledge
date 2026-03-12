---
title: "License Object Fields"
domain: pkg1-dev
topic: license-object-fields
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:25.420Z
estimatedTokens: 831
keywords: [License, custom, limits, how, users, subscriber’s, org, app, long]
---

# License Object Fields

> Use the License custom object to set limits on how many users in the subscriber’s org can
    use your app and for how long.

# License Object Fields

Use the License custom object to set limits on how many users in the subscriber’s org can use your app and for how long.

The License Management App (LMA) creates a license record every time your package is installed in an org. For example, if a subscriber installs two of your 1GP packages and three of your 2GP packages, you have five license records for that subscriber in your LMA. If you deliver a 2GP app that is composed of multiple packages, a unique license record is created for each package in the app. You can allocate up to 99,000,000 seats per subscriber license.

To view details about a license record, select the **Licenses** tab in the LMA, and then select and open the license record.

License records are automatically created and contain critical information for tracking licenses. Do not directly edit the license record. Instead, use the [Modify License](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/lma_edit_license.htm) tool to change the expiration date, license status, and the number of licensed seats.

| License Custom Object Fields | Description |
| --- | --- |
| Account | A lookup field to the account record for a converted lead. |
| Contact | A lookup field to the contact record for a converted lead. |
| Created By | License records are always created by the LMA. |
| Expiration Date | Displays the expiration date or Does not expire (default). |
| Install Date | The date the subscriber installed this package version. |
| Instance | The Salesforce instance where the subscriber’s org resides. |
| Lead | The lead record that the LMA created when the package was installed. A lead represents the user who owns the license.If you convert the lead into an opportunity, the lead name is retained but the lead record no longer exists. |
| License Name | An auto-generated number that represents an instance of a license. License names are in the format of L-00001, and each new license is incremented by one. |
| Licensed Seats | Displays the number of licenses or Site License (default). When a package is installed in a sandbox org, Site License is the default. If a free trial package is installed in a sandbox org, the Site License is applied. |
| License Status | The type of license: Active, Suspended, Trial, or Uninstalled. |
| License Type | This is a legacy field and can be ignored. |
| Org Edition | The edition of the subscriber’s org. |
| Org Expiration Date | Applies only if the subscriber installs your package in a trial org. Indicates the date when the trial org expires. It isn’t related to the package license expiration. |
| Org Status | The status of the subscriber’s org: Active, Free, or Trial. |
| Owner | The LMA owns all license records. Don’t edit this field. |
| Package Version | A lookup field that links to the package version associated with this license. |
| Package Version Number | The version number in major.minor.patch format. For example, 3.1.0. |
| Sandbox | Indicates whether the license is for a package installed in a sandbox org. |
| Subscriber Org ID | The 15-character ID representing the subscriber’s org. |
| Used Licenses | Displays the number of users who have a license to the package.This field is blank if:A customer uninstalled the package.Licensed Seats is set to Site License. |

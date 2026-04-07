---
title: "Customize the Auth. Provider Apex Class"
domain: mobile-sdk
topic: customize-the-auth-provider-apex-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:29.886Z
estimatedTokens: 348
keywords: [Customize, Auth, Provider, Apex, define, filtering, logic, may, enter, Experience, Cloud, site]
---

# Customize the Auth. Provider Apex Class

> Use the Apex class for your Auth. Provider to define filtering logic that controls who
		may enter your Experience Cloud site.

# Customize the Auth. Provider Apex Class

Use the Apex class for your Auth. Provider to define filtering logic that controls who may enter your Experience Cloud site.

1.  In Setup, enter Apex Classes in the Quick Find box, then select **Apex Classes**.
2.  Click **Edit** next to your Auth. Provider class. The default class name starts with “AutocreatedRegHandlerxxxxxx…”
3.  To implement the canCreateUser() method, simply return true.

    ```

    ```

    This implementation allows anyone who logs in through Facebook to join your Experience Cloud site.

    ![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=mobile_sdk)

    #### Note

    If you want your Experience Cloud site to be accessible only to existing members, implement a filter to recognize every valid user. Base your filter on any unique data in the Facebook packet, such as username or email address, and then validate that data against similar fields in your Experience Cloud site members’ records.

4.  Change the createUser() code:
    1.  Replace “Acme” with FineApps in the account name query.
    2.  Replace the username suffix (“@acmecorp.com”) with @fineapps.com.
    3.  Change the profile name in the profile query (“Customer Portal User”) to API Enabled.
5.  In the updateUser() code, replace the suffix to the username (“myorg.com”) with @fineapps.com.
6.  Click **Save**.

## Code Examples

```apex
global boolean canCreateUser(Auth.UserData data) {
	return true;
}
```

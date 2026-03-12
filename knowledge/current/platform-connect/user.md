---
title: "User"
domain: platform-connect
topic: user
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:27.643Z
estimatedTokens: 794
keywords: [User, JSON-formatted, containing, context, current, canvas, app, display, user’s, subsequent, calls, retrieve, additional, role]
---

# User

> The User object
is a JSON-formatted object containing context information about the
current user. This information can be used within the canvas app (for
example, to display the user’s name) or to make subsequent
calls to retrieve additional information (for example, to get role
information for the 

# User

The User object is a JSON-formatted object containing context information about the current user. This information can be used within the canvas app (for example, to display the user’s name) or to make subsequent calls to retrieve additional information (for example, to get role information for the current user).

| Field | Description |
| --- | --- |
| accessibilityModeEnabled | For the context user, indicates whether user interface modifications for the visually impaired are on (true) or off (false). |
| currencyISOCode | Returns the context user's default currency code for multiple currency organizations or the organization's currency code for single currency organizations. |
| email | The context user’s email address. |
| firstName | The context user's first name. |
| fullName | The context user's full name. The format is: Firstname Lastname. |
| isDefaultNetwork | For the context user, indicates whether the user is in an Experience Cloud site (true) or not (false).ImportantCanvas apps are not supported for guest users. They are supported on Experience Cloud sites only for logged in users. |
| language | The context user’s language. String is 2-5 characters long. The first two characters are always an ISO language code, for example “fr” or “en.” If the value is further qualified by country, then the string also has an underscore (_) and another ISO country code, for example “US” or “UK.” For example, the string for the United States is “en_US,” and the string for French Canadian is “fr_CA.” |
| lastName | The context user's last name. |
| locale | The context user’s locale. |
| networkId | The ID of the context user’s currently logged-in Experience Cloud site. |
| profileId | The ID of the profile associated with the role currently assigned to the context user. |
| profilePhotoUrl | The URL for the photo of the context user’s profile photo if Chatter is enabled. The URL is updated every time a photo is uploaded and reflects the most recent photo. URL returned for an older photo is not guaranteed to return a photo if a newer photo has been uploaded. Always query this field for the URL of the most recent photo. |
| profileThumbnailUrl | The URL for a thumbnail of the context user’s profile photo if Chatter is enabled. The URL is updated every time a photo is uploaded and reflects the most recent photo. URL returned for an older photo is not guaranteed to return a photo if a newer photo has been uploaded. Always query this field for the URL of the most recent photo. |
| roleId | The ID of the context user’s currently assigned role. |
| siteUrl | The URL of the context user’s currently logged-in Experience Cloud site. |
| siteUrlPrefix | The URL prefix of the context user’s currently logged-in Experience Cloud site. |
| timeZone | The context user’s time zone. |
| userId | The context user’s ID. |
| userName | The context user’s login name. |
| userType | The type of user license assigned to the profile associated with the context user. |

The following code snippet shows an example of the User object.

```

```

#### See Also

-   [Context](atlas.en-us.platform_connect.meta/platform_connect/context_object.htm)

## Code Examples

```
"user":
{
    "accessibilityModeEnabled":false, 
    "currencyISOCode":"USD", 
    "email":"admin@6457617734813492.com", 
    "firstName":"Sean", 
    "fullName":"Sean Forbes", 
    "isDefaultNetwork":false, 
    "language":"en_US", 
    "lastName":"Forbes", 
    "locale":"en_US", 
    "networkId":"0DBxx000000001r", 
    "profileId":"00ex0000000jzpt", 
    "profilePhotoUrl":"/profilephoto/005/F", 
    "profileThumbnailUrl":"/profilephoto/005/T", 
    "roleId":null, 
    "siteUrl":"https://MyDomainName.my.salesforce.com/", 
    "siteUrlPrefix":"/mySite",
    "timeZone":"America/Los_Angeles", 
    "userId":"005x0000001SyyEAAS", 
    "userName":"admin@6457617734813492.com", 
    "userType":"STANDARD"
}
```

## Related Topics

- Context (atlas.en-us.platform_connect.meta/platform_connect/context_object.htm)

---
title: "HTTP Request Flow and a Response Body"
domain: chatterapi
topic: http-request-flow-and-a-response-body
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:21.838Z
estimatedTokens: 1563
keywords: [HTTP, Flow, Review, process, Connect, REST, API, including, resource, examples]
---

# HTTP Request Flow and a Response Body

> Review the process flow for Connect REST API, including resource and response
      examples.

# HTTP Request Flow and a Response Body

Review the process flow for Connect REST API, including resource and response examples.

The general process flow for using Connect REST API is:

1.  Send an HTTP request to Salesforce.
2.  The system authenticates the user and client app.
3.  Request Connect REST API resources using an HTTP request.
4.  The system returns an HTTP return code. Additional information (such as a Connect REST API response body) is optionally included in the response.

Each resource in Connect REST API is a URI used with an HTTP method (such as GET, POST, DELETE, or HEAD). Each resource represents something in Salesforce, such as a user's news feed, or the comments on a post.

Many of the resources use either a specified user ID or the keyword me to indicate the current, context user. For example, to return the user-profile information for the current, context user, use this resource.

```

```

You could also specify a particular user by user ID.

```

```

When you successfully access a resource, a response body is returned in JSON or XML. By default, JSON is returned. Each response body can contain one or more response bodies. For example, the following is the response body of the user resource. It includes other response bodies as well, such as address, current status, and phone numbers.

| Property | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| aboutMe | String | Text from user's profile. | Big, 29.0 | 23.0 |
| additional​Label | String | If one exists, an extra label for the user, for example, “Customer,” “Partner,” or “Acme Corporation.” | Small, 30.0 | 30.0 |
| address | Address | User’s address. | Big, 29.0 | 23.0 |
| bannerPhoto | Banner Photo | User’s banner photo. | Big, 36.0 | 36.0 |
| chatterActivity | Chatter Activity | Chatter activity statistics. | Big, 29.0 | 23.0 |
| chatterInfluence | Chatter Influence | User’s influence rank. | Big, 29.0 | 23.0 |
| community​Nickname | String | User’s nickname in the site. | Medium, 32.0 | 32.0 |
| companyName | String | Company name. | Small, 29.0 | 23.0 |
| currentStatus | User Status | User's current status. |  | 23.0–25.0 |
| displayName | String | User’s name that is displayed in the site. If nicknames are enabled, the nickname is displayed. If nicknames aren’t enabled, the full name is displayed. | Small, 32.0 | 32.0 |
| email | String | User's email address. | Medium, 29.0 | 23.0 |
| firstName | String | User's first name. In version 39.0 and later, if nicknames are enabled, firstName is null. | Small, 29.0 | 23.0 |
| followersCount | Integer | Number of users following this user. | Big, 29.0 | 23.0 |
| followingCounts | Following Counts | Information about items the user is following. | Big, 29.0 | 23.0 |
| groupCount | Integer | Number of groups user is following. | Big, 29.0 | 23.0 |
| hasChatter | Boolean | true if user has access to Chatter; false otherwise. | Small, 31.0 | 31.0 |
| id | String | 18-character ID of the user. | Small, 29.0 | 23.0 |
| isActive | Boolean | true if user is active, false otherwise. | Small, 29.0 | 23.0 |
| isChatterGuest | Boolean | true if user is a Chatter customer, false otherwise.In version 26.0 and later, use the userType property. |  | 23.0–25.0 |
| isInThis​Community | Boolean | true if the user is in the same Experience Cloud site as the context user; false otherwise. Can be false for record feed @mentions on posts with the scope “All Users.” | Small, 29.0 | 28.0 |
| lastName | String | User's last name. In version 39.0 and later, if nicknames are enabled, lastName is null. | Small, 29.0 | 23.0 |
| managerId | String | 18-character ID of the user’s manager. | Big, 29.0 | 23.0 |
| managerName | String | Locale-based concatenation of manager's first and last names. | Big, 29.0 | 23.0 |
| motif | Motif | Small, medium, and large icons indicating that the object is a user. The motif can also contain the object’s base color.The motif icon is not the user’s profile picture. | Small, 29.0 | 27.0 |
| mySubscription | Reference | If the context user is following this user, contains information about the subscription, otherwise null. | Medium, 29.0 | 23.0 |
| name | String | Locale-based concatenation of first and last names. In version 39.0 and later, if nicknames are enabled, name is the nickname. | Small, 29.0 | 23.0 |
| outOfOffice | Out of Office | If one exists, extra out-of-office message for the user. | Small, 40.0 | 40.0 |
| phoneNumbers | Phone Number[] | Collection of user's phone numbers. | Big, 29.0 | 23.0 |
| photo | Photo | Information about the user's photos. | Small, 29.0 | 23.0 |
| reputation | Reputation | Reputation of the user in the site, which is determined by the number of points earned from events and actions performed in the site. | Big, 32.0 | 32.0 |
| stamps | Stamp[] | Collection of the user’s stamps.In version 44.0 and later, use SOQL to get a user’s stamps. | Small, 39.0 | 39.0–43.0 |
| thanksReceived | Integer | Number of thanks the user has received. | Big, 29.0 | 29.0 |
| title | String | Title of the user. | Small, 29.0 | 23.0 |
| type | String | Value is User. | Small, 29.0 | 23.0 |
| url | String | URL to the user's Chatter profile. | Small, 29.0 | 23.0 |
| username | String | User name of the user, such as Admin@mycompany.com. | Small, 29.0 | 24.0 |
| userType | String | Type of user. Valid values are:ChatterGuest—User is an external user in a private group.ChatterOnly—User is a Chatter Free customer.Guest—User is unauthenticated.Internal—User is a standard org member.Portal—User is an external user in an Experience Cloud site.System—User is Chatter Expert or a system user.Undefined—User is a user type that is a custom object. | Medium, 29.0 | 26.0 |

In JSON format, the output is:

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

Salesforce runs on multiple server instances. The examples in this guide use instance\_name to indicate the instance.

Some of the items in a response body have a fully qualified URL, however, most of the returned URLs are relative. If the URL is relative, prepend it with the instance given to the client app when the item is authenticated.

## Code Examples

```
/chatter/users/me
```

```
/chatter/users/005D0000001GLoh
```

```
{
   "aboutMe": "I&#39;m excited to be part of the team focused on building out our apps business
 and showing our customers their future.",
   "additionalLabel" : null,
   "address": {
      "city": "Seattle",
      "country": "US",
      "state": "WA",
      "street": "2001 8th Ave",
      "zip": "98121"
      "formattedAdress": "2001 8th Ave
Seattle, WA 98121
US"
   },
   "chatterActivity": {
      "commentCount": 0,
      "commentReceivedCount": 1,
      "likeReceivedCount": 0,
      "postCount": 2
   },
   "chatterInfluence" : {
     "percentile" : "0.6666666666666667",
     "rank" : 1
   },
   "communityNickname": "marRave",
   "companyName": "Seattle Apps",
   "displayName": "Marion Raven",
   "email": "mraven@seattleapps.com",
   "firstName": "Marion",
   "followersCount": 1,
   "followingCounts": {
      "people": 5,
      "records": 0,
      "total": 5
   },
   "groupCount": 3,
   "hasChatter": true,
   "id": "005D0000001Kl6xIAC",
   "isActive": true,
   "isInThisCommunity" : true,
   "lastName": "Raven",
   "managerId": null,
   "managerName": null,
   "motif": {
      "color" : "20aeb8",
      "largeIconUrl": "/img/icon/profile64.png",
      "mediumIconUrl": "/img/icon/profile32.png",
      "smallIconUrl": "/img/icon/profile16.png"
   },
   "mySubscription": null,
   "name": "Marion Raven",
   "phoneNumbers": [{
      "label": "Work",
      "phoneNumber": "(206) 999-2846",
      "phoneType": "Work"
   }],
   "photo": {
      "fullEmailPhotoUrl": "https://instance_name/ncsphoto/SqRfG_-PUTY6KtfOp_f0cGW2pGjfqoWUUgTENHjVyS1i9x6Z16L8wXEGigpcWjAd",
      "largePhotoUrl": "https://instance_name/profilephoto/729D00000000BDV/F",
      "photoVersionId": "729D00000000BDV",
      "smallPhotoUrl": "https://instance_name/profilephoto/729D00000000BDV/T",
      "standardEmailPhotoUrl": "https://instance_name/ncsphoto/SqRfG_-PUTY6KtfOp_f0cGW2pGjfqoWUUgTENHjVyS1q43x_rW2ciXBHst0Eh3Y6",
      "url":  "/services/data/v66.0/chatter/users/005D0000001LL8OIAW/photo"
   },
   "reputation" : null,
   "thanksReceived" : null,
   "title": null,
   "type": "User",
   "url": "/services/data/v66.0/chatter/users/005D0000001Kl6xIAC",
   "userType": "Internal";
   "username": "mraven@seattleapps.com"
}
```

## Related Topics

- Address (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_address.htm)
- Banner Photo (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_banner_photo.htm)
- Chatter Activity (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_activity.htm)
- Chatter Influence (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_influence.htm)
- User Status (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_status.htm)
- Following Counts (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_following_counts.htm)
- Motif (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_motif.htm)
- Reference (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_reference.htm)
- Out of Office (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_out_of_office.htm)
- Phone Number (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_phone_number.htm)

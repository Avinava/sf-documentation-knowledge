---
title: "VPL360_NewUserRegistration"
domain: media-developer-guide
topic: vpl360newuserregistration
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:53.891Z
estimatedTokens: 466
keywords: [VPL360_NewUserRegistration, Integration, Procedure, user, form, performs, various, steps, VPL360, _NewUserRegistration, Sample, Input, Output, Calls]
---

# VPL360_NewUserRegistration

> This Integration Procedure gets the user details from the
		form and performs various steps to create the user.

# VPL360\_NewUserRegistration

This Integration Procedure gets the user details from the form and performs various steps to create the user.

-   Checks if the email ID is already associated with an active user.

-   Creates a consumer account and returns the account ID.

-   Creates a customer community user and returns the user ID.

-   Assigns a vlocity\_cmt license to the customer (if a license is available) and reports the result in the license assignment parameter.

-   Signs in as the newly created user ad


1.  Checks if the email ID is already associated with an active user.

2.  Creates a consumer account and returns the account ID.

3.  Creates a customer community user and returns the user ID.

4.  Assigns a vlocity\_cmt license to the customer (if a license is available) and reports the result in the license assignment parameter.

5.  Signs in as the newly created user and returns the session details in the sign in parameters.


If any error occurs during user creation, all the actions are rolled back.

## Sample Input

```

```

| Parameter | Required/Optional |
| --- | --- |
| ConfirmPassword | Required |
| Email | Required |
| FirstName | Required |
| LastName | Required |
| Password | Required |

## Sample Output

```

```

## Called By

-   Flows:

    -   Web shop: User Registration

-   Components:

    -   LWC: vplS360AccountSignup.js


## Calls

-   Remote Action: DuplicateEmailCheck

    -   Class: MediaCmexAppHandler

    -   Method: checkDuplicateEmail

-   Remote Action: createCustomerCommunityUser

    -   Class: MediaCmexAppHandler

    -   Method: createCustomerCommunityUser

-   Remote Action: createCustomerCommunityUser

    -   Class: MediaCmexAppHandler

    -   Method: assignPackageLicense

-   Remote Action: createCustomerCommunityUser

    -   Class: MediaCmexAppHandler

    -   Method: doSignIn

## Code Examples

```
{
	"Email": "jsmith@example.com",
	"FirstName": "Joan",
	"LastName": "Smith",
	"Password": "Nov2020!",
	"ConfirmPassword": "Nov2020!"
}
```

```
{
	"LicenseAssignment": true,
	"accId": "0014W00002AFmxqQAD",
	"encryptedAccountId": "r_1-6GWCMN7yKTyETgAU7SD3CrnyKaU9teXYG0sddUk.mCCshe4i5uuR8xbgPGaqq4Ez-aT-JIwLrRFmYrB5hf_iVt9DoIEiRqexv6ouT6Rz",
	"isDuplicateEmail": false,
	"userId": "0054W00000CS3BuQAL",
	"DoSignIn": {
		"msg": "Login Succesfull",
		"redirectUrl": "https://subscriber360qe1-1747625e2b9-17592236fb9.f…K5FcG4TQNhDKnspp0_QqsSSBzRmMAmCMCleCI&untethered="
	}
}
```

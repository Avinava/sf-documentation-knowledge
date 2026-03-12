---
title: "Create an Instance of LoyaltyAPIManager Class"
domain: loyalty
topic: create-an-instance-of-loyaltyapimanager-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:52.713Z
estimatedTokens: 291
keywords: [Instance, LoyaltyAPIManager, interact, Loyalty, Management, APIs]
---

# Create an Instance of LoyaltyAPIManager Class

> Create an instance of LoyaltyAPIManager class and interact with the Loyalty Management
  APIs.

# Create an Instance of LoyaltyAPIManager Class

Create an instance of LoyaltyAPIManager class and interact with the Loyalty Management APIs.

1.  Create an instance of LoyaltyAPIManager by using this signature.

    ```

    ```

2.  Call the appropriate methods to interact with the Loyalty Management API by using this signature.

    ```

    ```

3.  To enroll an individual member, use this signature.

    ```

    ```

    For example:

    ```

    ```

4.  To retrieve the member benefits, use this signature.

    ```

    ```

5.  To retrieve the member profile, use this signature.

    ```

    ```

6.  To retrieve the Experience Cloud user profile, use this signature.

    ```

    ```

7.  To opt a member in to a promotion, use this signature.

    ```

    ```

8.  To opt out a member from a promotion using promotion ID or promotion name, use this signature.

    ```

    ```

9.  To retrieve loyalty member transactions, use this signature.

    ```

    ```

10.  To retrieve promotions for a loyalty member, use this signature.

     ```

     ```

11.  To retrieve vouchers for a loyalty member, use this signature.

     ```

     ```

## Code Examples

```
let loyaltyAPIManager = LoyaltyAPIManager(auth: forceAuthenticator, loyaltyProgramName: "YourLoyaltyProgramName", instanceURL: "YourInstanceURL", forceClient: forceClient)
```

```
import LoyaltyMobileSDK

let instanceURL = URL(string: "https://your_salesforce_instance_url")!
let loyaltyProgramName = "YourLoyaltyProgramName"
let forceClient = ForceClient(clientId: "your_client_id", clientSecret: "your_client_secret", redirectURI: "your_redirect_uri")

let loyaltyAPIManager = LoyaltyAPIManager(instanceURL: instanceURL, loyaltyProgramName: loyaltyProgramName, forceClient: forceClient)
```

```
let enrollmentOutput = try await loyaltyAPIManager.postEnrollment(
    membershipNumber: membershipNumber,
    firstName: firstName,
    lastName: lastName,
    email: email,
    phone: phone,
    emailNotification: emailNotification
```

```
let membershipNumber = "1234567890"
let firstName = "John"
let lastName = "Doe"
let email = "john.doe@example.com"
let phone = "4157891234"
let emailNotification = true
```

```
let benefits = try await loyaltyAPIManager.getMemberBenefits(for: "memberId")
```

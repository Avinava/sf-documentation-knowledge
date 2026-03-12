---
title: "Create an Instance of LoyaltyAPIManager Class for Android"
domain: loyalty
topic: create-an-instance-of-loyaltyapimanager-class-for-android
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:52.546Z
estimatedTokens: 751
keywords: [Instance, LoyaltyAPIManager, Android, interact, Loyalty, Management, APIs]
---

# Create an Instance of LoyaltyAPIManager Class for Android

> Create an instance of the LoyaltyAPIManager class and
  interact with the Loyalty Management APIs.

# Create an Instance of LoyaltyAPIManager Class for Android

Create an instance of the LoyaltyAPIManager class and interact with the Loyalty Management APIs.

1.  Create an instance of LoyaltyAPIManager by using this signature.

    val loyaltyAPIManager = LoyaltyAPIManager( auth = forceAuthManager, instanceUrl = mInstanceUrl, loyaltyClient = LoyaltyClient(forceAuthManager, mInstanceUrl) )\`\`\`

2.  To interact with the Loyalty Management API, call the appropriate methods by using this signature.

    import LoyaltyMobileSDK val forceAuthManager = ForceAuthManager(applicationContext) val mInstanceUrl = forceAuthManager.getInstanceUrl() ?: AppSettings.DEFAULT\_FORCE\_CONNECTED\_APP.instanceUrl val loyaltyAPIManager = LoyaltyAPIManager( auth = forceAuthManager, instanceUrl = mInstanceUrl, loyaltyClient = LoyaltyClient(forceAuthManager, mInstanceUrl) )

3.  To enroll an individual member, use this signature.

    let membershipNumber = "1234567890" let firstName = "John" let lastName = "Doe" let email = "john.doe@example.com" let phone = "4157891234" let emailNotification = true loyaltyAPIManager.postEnrollment( firstName = firstName, lastName = lastName, email = email, additionalContactAttributes = mapof("phone" to phone), emailNotification = emailNotification, memberStatus = MemberStatus.ACTIVE, createTransactionJournals = true, transactionJournalStatementFrequency = TransactionalJournalStatementFrequency.MONTHLY, transcationJournalStatementMethod = TransactionalJournalStatementMethod.EMAIL, enrollmentChannel = EnrollmentChannel.EMAIL, canReceivePromotions = true, canReceivePartnerPromotions = true )

4.  To retrieve the member benefits, use this signature.

    loyaltyAPIManager.getMemberBenefits(memberId = null, membershipKey = "1234567890")

5.  To retrieve the member profile, use this signature.

    loyaltyAPIManager.getMemberProfile(memberId = null, membershipKey = "1234567890", programCurrencyName = null)

6.  To opt a member into a promotion, use this signature.

    loyaltyAPIManager.enrollInPromotions(membershipNumber = "1234567890", promotionName = "PromotionName")

7.  To opt out a member from a promotion using promotion ID or promotion name, use this signature.

    loyaltyAPIManager.unEnrollPromotion(membershipNumber = "1234567890", promotionName = "PromotionName")

8.  To retrieve loyalty member transactions, use this signature.

    loyaltyAPIManager.getTransactions(membershipNumber = "1234567890", pageNumber = null, journalTypeName = null, journalSubTypeName = null, periodStartDate = null, periodEndDate = null)

9.  To retrieve promotions for a loyalty member, use this signature.

    loyaltyAPIManager.getEligiblePromotions(membershipKey = "1234567890", memberId = null)

10.  To retrieve vouchers for a loyalty member, use this signature.

     loyaltyAPIManager.getVouchers( membershipKey = "1234567890", vouchreStatus = null, pageNumber = 1, productId = null, productCategoryId = null, productName = null, productCategoryName = null )

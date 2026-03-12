---
title: "Integration Procedures for Subscriber Lifecycle
                      Management"
domain: media-developer-guide
topic: integration-procedures-for-subscriber-lifecycle-management
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:54.077Z
estimatedTokens: 4275
keywords: [Integration, Procedures, Subscriber, Lifecycle, Management, Every, org, includes, number, specific, across, webshop, selfcare, portal, agent]
---

# Integration Procedures for Subscriber Lifecycle
                      Management

> Every Subscriber Lifecycle Management org includes
                    a number of Integration Procedures specific to Subscriber
                      Lifecycle Management. These Integration Procedures are used across
                    the webshop, the selfcare portal, and the agent console to implement the
                    flows.

# Integration Procedures for Subscriber Lifecycle Management

Every Subscriber Lifecycle Management org includes a number of Integration Procedures specific to Subscriber Lifecycle Management. These Integration Procedures are used across the webshop, the selfcare portal, and the agent console to implement the flows.

-   **[VPL-CreateCustomerInteractionTopicInOS](atlas.en-us.media_developer_guide.meta/media_developer_guide/media_slm_cc_vpl_createcustomerinteractiontopicinos.htm)**
    This Integration Procedure creates a topic ID for a customer interaction.
-   **[VPL360CSR\_CreatePaymentIntentBillingCSR](atlas.en-us.media_developer_guide.meta/media_developer_guide/media_slm_cc_vpl360csr_createpaymentintentbillingcsr.htm)**
    This Integration Procedure creates payment intent and billing with the amount to be debited from the payment method.
-   **[VPL360CSR\_CreatePaymentIntentCSR](atlas.en-us.media_developer_guide.meta/media_developer_guide/media_slm_cc_vpl360csr_createpaymentintentcsr.htm)**
    This Integration Procedure creates the payment intent for the customer in Stripe and fetches the client secret key to complete the payment.
-   **[VPL360CSR\_CreateSetupIntentCSR](atlas.en-us.media_developer_guide.meta/media_developer_guide/media_slm_cc_vpl360csr_createsetupintentcsr.htm)**
    This Integration Procedure creates setup intent before confirming payment.
-   **[VPL360CSR\_getPaymentMethodsCSR](atlas.en-us.media_developer_guide.meta/media_developer_guide/media_slm_cc_vpl360csr_getpaymentmethodscsr.htm)**
    This Integration Procedure gets card or payment details.
-   **[VPL360CSR\_VIP\_DetachcardFromCustomerCSR](atlas.en-us.media_developer_guide.meta/media_developer_guide/media_slm_cc_vpl360csr_vip_detachcardfromcustomercsr.htm)**
    This Integration Procedure detaches a payment card from the customer's account, enabling the customer to update the card details.
-   **[VPL360\_AssetFetch](atlas.en-us.media_developer_guide.meta/media_developer_guide/media_slm_cc_vpl360_assetfetch.htm)**
    This Integration Procedure fetches all the assets and products that have been ordered by the logged in subscriber.
-   **[VPL360\_AssetToOrder](atlas.en-us.media_developer_guide.meta/media_developer_guide/media_slm_cc_vpl360_assettoorder.htm)**
    This Integration Procedure converts an asset to an order or an asset to a basket.
-   **[VPL360\_AssetToOrderForRelatedAssets](atlas.en-us.media_developer_guide.meta/media_developer_guide/media_slm_cc_vpl360_assettoorderforrelatedassets.htm)**
    This Integration Procedure converts an asset to an order for all related assets of an account.
-   **[VPL360\_CancelAsset](atlas.en-us.media_developer_guide.meta/media_developer_guide/media_slm_cc_vpl360_cancelasset.htm)**
    This Integration Procedure initiates the cancellation of an active asset for a customer in self care.
-   **[VPL360\_CancelAssetItem](atlas.en-us.media_developer_guide.meta/media_developer_guide/media_slm_cc_vpl360_cancelassetitem.htm)**
    This Integration Procedure cancels an asset item in a Future Dated Order (FDO).
-   **[VPL360CancelCartItem](atlas.en-us.media_developer_guide.meta/media_developer_guide/comms_t_vpl360cancelcartitem_88004.htm)**
    This Integration Procedure is used to cancel an item in the cart.
-   **[VPL360\_CancelOrder](atlas.en-us.media_developer_guide.meta/media_developer_guide/media_slm_cc_vpl360_cancelorder.htm)**
    This Integration Procedure cancels an item in an order which is in progress and has not reached the point of no return (PONR).
-   **[VPL360\_CancelSubscription](atlas.en-us.media_developer_guide.meta/media_developer_guide/media_slm_cc_vpl360_cancelsubscription.htm)**
    This Integration Procedure cancels a customer's subscription after the cancellation procedure for the base package is initiated.
-   **[VPL360\_CreatePaymentIntent](atlas.en-us.media_developer_guide.meta/media_developer_guide/media_slm_cc_vpl360_createpaymentintent.htm)**
    This Integration Procedure creates a payment intent before a payment is made.
-   **[VPL360\_CreatePaymentIntentBilling](atlas.en-us.media_developer_guide.meta/media_developer_guide/media_slm_cc_vpl360_createpaymentintentbilling.htm)**
    This Integration Procedure creates payment intent for the Pay Now billing section in Self care.
-   **[VPL360\_CreatePaymentmethod](atlas.en-us.media_developer_guide.meta/media_developer_guide/media_slm_cc_vpl360_createpaymentmethod.htm)**
    This Integration Procedure is used in the self care portal to create the payment card details.
-   **[VPL360\_CreateSetupIntent](atlas.en-us.media_developer_guide.meta/media_developer_guide/media_slm_cc_vpl360_createsetupintent.htm)**
    This Integration Procedure creates a setup intent before payment confirmation is received.
-   **[VPLS360\_CreateStripeCustomer](atlas.en-us.media_developer_guide.meta/media_developer_guide/media_slm_cc_vpls360_createstripecustomer.htm)**
    This Integration Procedure creates a new customer in the Payment Gateway (Stripe).
-   **[VPL360\_CSRBasePackageChange](atlas.en-us.media_developer_guide.meta/media_developer_guide/media_slm_cc_vpl360_csrbasepackagechange.htm)**
    This Integration Procedure adds assets to an order or disconnects a base asset when the user changes the base package.
-   **[VPL360\_CsrBasePackPosttocart](atlas.en-us.media_developer_guide.meta/media_developer_guide/media_slm_cc_vpl360_csrbasepackposttocart.htm)**
    This Integration Procedure gets the available base packages and also gets cart items to display in the agent console while changing a base package for a subscriber.
-   **[VPL360\_CsrBasepackretrieve](atlas.en-us.media_developer_guide.meta/media_developer_guide/media_slm_cc_vpl360_csrbasepackretrieve.htm)**
    This Integration Procedure retrieves and filters products that the customer has not purchased before.
-   **[VPL360\_DeleteCartContextKey](atlas.en-us.media_developer_guide.meta/media_developer_guide/media_slm_cc_vpl360_deletecartcontextkey.htm)**
    This Integration Procedure is used in the self care portal to delete the cart context key after the checkout flow is completed.
-   **[VPL360\_DeleteCartItem](atlas.en-us.media_developer_guide.meta/media_developer_guide/comms_t_vpl360_deletecartitem_88768.htm)**
    This Integration Procedure is used to delete an item from the cart.
-   **[VPL360\_DeleteCartItem](atlas.en-us.media_developer_guide.meta/media_developer_guide/media_slm_cc_vpl360_deletecartitem.htm)**
    This Integration Procedure deletes an item from the cart.
-   **[VPL360\_DoSignIn](atlas.en-us.media_developer_guide.meta/media_developer_guide/comms_t_vpl360_dosignin_88866.htm)**
    This Integration Procedure allows existing customers to log in to the self care portal.
-   **[VPL360\_ExtractAccountForUser](atlas.en-us.media_developer_guide.meta/media_developer_guide/comms_t_vpl360_extractaccountforuser_88921.htm)**
    This Integration Procedure fetches the account address, payment method, case details and user details for the specified user.
-   **[VPL360\_FetchCartContextKey](atlas.en-us.media_developer_guide.meta/media_developer_guide/comms_t_vpl360_fetchcartcontextkey_88970.htm)**
    This Integration Procedure fetches the Abandoned cart context key previously created while shopping
-   **[VPL360\_GetCurrentUserDetails](atlas.en-us.media_developer_guide.meta/media_developer_guide/comms_t_vpl360_getcurrentuserdetails_89013.htm)**
    This Integration Procedure is used in the self care portal to get user details after the subscriber has logged in.
-   **[VPL360\_getPaymentMethods](atlas.en-us.media_developer_guide.meta/media_developer_guide/comms_t_vpl360_getpaymentmethods_89050.htm)**
    This Integration Procedure fetches payment details such as the subscriber's credit card information from Stripe
-   **[VPLS360\_getStripePublicKey](atlas.en-us.media_developer_guide.meta/media_developer_guide/media_slm_cc_vpls360_getstripepublickey.htm)**
    This Integration Procedure gets the Stripe public key to be used in the Lightning Web Components (LWC).
-   **[VPLS360\_InvoiceInfo](atlas.en-us.media_developer_guide.meta/media_developer_guide/media_slm_cc_vpls360_invoiceinfo.htm)**
    This Integration Procedure fetches stub data for the billing summary and for invoices.
-   **[VPL360\_IPExtractPromo](atlas.en-us.media_developer_guide.meta/media_developer_guide/comms_t_vpl360_ipextractpromo_89179.htm)**
    This Integration Procedure accepts an array of product codes and returns an array of promotions corresponding to the product codes, if any.
-   **[VPL360\_ListenStripeWebhookV2](atlas.en-us.media_developer_guide.meta/media_developer_guide/comms_t_vpl360_listenstripewebhookv2_89230.htm)**
    This Integration Procedure is exposed as a REST service. It listens to the payment gateway.
-   **[VPL360\_NewUserRegistration](atlas.en-us.media_developer_guide.meta/media_developer_guide/comms_t_vpl360_newuserregistration_89267.htm)**
    This Integration Procedure gets the user details from the form and performs various steps to create the user.
-   **[VPL360\_OfferDetails](atlas.en-us.media_developer_guide.meta/media_developer_guide/comms_t_vpl360_offerdetails_89379.htm)**
    This Integration Procedure fetches the details of offers which the customer has not already purchased in the self care portal.
-   **[VPL360\_OrderCancellationNonSignature](atlas.en-us.media_developer_guide.meta/media_developer_guide/comms_t_vpl360_ordercancellationnonsignature_89410.htm)**
    This Integration Procedure removes non signature assets with applied promotions.
-   **[VPL360\_PreValidateOrderCancellation](atlas.en-us.media_developer_guide.meta/media_developer_guide/comms_t_vpl360_prevalidateordercancellation_89463.htm)**
    This Integration Procedure is used to determine whether an order is eligible for cancellation.
-   **[VPL360\_RemoveSignatureAssetWithPromotion](atlas.en-us.media_developer_guide.meta/media_developer_guide/comms_t_vpl360_removesignatureassetwithpromotion_89525.htm)**
    This Integration Procedure removes a signature product or asset which has an applied promotion.
-   **[VPL360\_RevokeCancellation](atlas.en-us.media_developer_guide.meta/media_developer_guide/comms_t_vpl360_revokecancellation_89609.htm)**
    This Integration Procedure revokes the cancellation of an asset.
-   **[VPL360\_RevokeCancellationAllAssets](atlas.en-us.media_developer_guide.meta/media_developer_guide/comms_t_vpl360_revokecancellationallassets_89661.htm)**
    This Integration Procedure is used to revoke the in-progress cancellation of assets for an account.
-   **[VPL360\_ShopAddOnPreProcess](atlas.en-us.media_developer_guide.meta/media_developer_guide/comms_t_vpl360_shopaddonpreprocess_89711.htm)**
    This Integration Procedure fetches the assets with promotions which are associated with an account.
-   **[VPL360\_SubmitFDOrder](atlas.en-us.media_developer_guide.meta/media_developer_guide/comms_t_vpl360_submitfdorder_89763.htm)**
    This Integration Procedure submits the Future Dated Order (FDO) for cancellation.
-   **[VPL360\_SubmitSupplementalOrder](atlas.en-us.media_developer_guide.meta/media_developer_guide/comms_t_vpl360_submitsupplementalorder_89813.htm)**
    This Integration Procedure submits the supplemental order created while cancelling an order.
-   **[VPL360\_UpdateAccountDetails](atlas.en-us.media_developer_guide.meta/media_developer_guide/comms_t_vpl360_updateaccountdetails_89870.htm)**
    This Integration Procedure is used in the self care portal to update account details.
-   **[VPL360\_UpdateBasketOnCart](atlas.en-us.media_developer_guide.meta/media_developer_guide/comms_t_vpl360_updatebasketoncart_89966.htm)**
    This Integration Procedure updates the basket key for the omnichannel cart in the self care portal in case of a new shopping journey.
-   **[VPLS360\_UpdateBillingShipping](atlas.en-us.media_developer_guide.meta/media_developer_guide/media_slm_cc_vpls360_updatebillingshipping_x.htm)**
    This Integration Procedure enables the user to click on Ship to address and update only the shipping address.
-   **[VPL360\_UpsertPayMethodOrderPayment](atlas.en-us.media_developer_guide.meta/media_developer_guide/comms_t_vpl360_upsertpaymethodorderpayment_90086.htm)**
    This Integration Procedure saves the Order Payment and Payment Method objects.
-   **[VPL360\_ValidateCart](atlas.en-us.media_developer_guide.meta/media_developer_guide/media_slm_cc_vpl360_validatecart.htm)**
    This Integration Procedure is used to validate a cart ID or order ID.
-   **[VPL360\_VIP\_DetachcardFromCustomer](atlas.en-us.media_developer_guide.meta/media_developer_guide/media_slm_cc_vpl360_vip_detachcardfromcustomer.htm)**
    This Integration Procedure detaches the card used for payment from the subscriber's account.
-   **[vpls360csr\_AssetFetchForCustomer](atlas.en-us.media_developer_guide.meta/media_developer_guide/media_slm_cc_vpls360csr_assetfetchforcustomer.htm)**
    This Integration Procedure is used in the agent console, to fetch all the assets and order items, and the total subscription amount for an account.
-   **[vpls360csr\_ChangePersonalDetailsPreProcess](atlas.en-us.media_developer_guide.meta/media_developer_guide/media_slm_cc_vpls360csr_changepersonaldetailspreprocess.htm)**
    This Integration Procedure is used in the agent console to change the personal details of an account.
-   **[vpls360csr\_CsrBaseSubmitOrder](atlas.en-us.media_developer_guide.meta/media_developer_guide/media_slm_cc_vpls360csr_csrbasesubmitorder.htm)**
    This Integration Procedure changes an order created in the agent console while changing the base package for a subscriber.
-   **[vpls360csr\_FetchAssets](atlas.en-us.media_developer_guide.meta/media_developer_guide/media_slm_cc_vpls360csr_fetchassets.htm)**
    This Integration Procedure gets all the assets of an account and the total cost of the subscription.
-   **[vpls360csr\_GetProfileDetails](atlas.en-us.media_developer_guide.meta/media_developer_guide/media_slm_cc_vpls360csr_getprofiledetails.htm)**
    This Integration Procedure is used in the agent console to get the profile details for an account.
-   **[vpls360csr\_GetUserStory](atlas.en-us.media_developer_guide.meta/media_developer_guide/media_slm_cc_vpls360csr_getuserstory.htm)**
    This Integration Procedure is used in the agent console to get the details of the customer story.
-   **[vpls360csr\_UpdatePersonalDetails](atlas.en-us.media_developer_guide.meta/media_developer_guide/media_slm_cc_vpls360csr_updatepersonaldetails.htm)**
    This Integration Procedure updates the name, phone number, and email address for an account.
-   **[VPLS360\_addTag](atlas.en-us.media_developer_guide.meta/media_developer_guide/media_slm_cc_vpls360_addtag.htm)**
    This Integration Procedure adds HTML tags so that the order confirmation mail sent to the subscriber has proper padding and spacing.
-   **[VPLS360\_BillingSummary](atlas.en-us.media_developer_guide.meta/media_developer_guide/media_slm_cc_vpls360_billingsummary.htm)**
    This Integration Procedure fetches stub data for the billing summary and for invoices.
-   **[VPLS360\_notifyUser](atlas.en-us.media_developer_guide.meta/media_developer_guide/media_slm_cc_vpls360_notifyuser.htm)**
    This Integration Procedure sends the subscriber an email with the order details.
-   **[VPLS360\_predictAddress](atlas.en-us.media_developer_guide.meta/media_developer_guide/media_slm_cc_vpls360_predictaddress.htm)**
    This Integration Procedure passes the input searchText of the address to the Google Address API and retrieves a list of suggestions.
-   **[VPLS360\_ticket](atlas.en-us.media_developer_guide.meta/media_developer_guide/media_slm_cc_vpls360_ticket.htm)**
    This Integration Procedure shows details of the cases associated with a particular account.
-   **[VPLS360\_updateBillingShipping](atlas.en-us.media_developer_guide.meta/media_developer_guide/media_slm_cc_vpls360_updatebillingshipping.htm)**
    This Integration Procedure processes the Google API Address record and updates the Account and Contact address fields.
-   **[VPLS360UpdateBillingShippingAddress](atlas.en-us.media_developer_guide.meta/media_developer_guide/media_slm_cc_vpls360updatebillingshippingaddress.htm)**
    This Integration Procedure is used to process the Google API address record and update the Account and Contact Address fields.
-   **[VPL\_CSRFetchcaseforAccounts](atlas.en-us.media_developer_guide.meta/media_developer_guide/media_slm_cc_vpl_csrfetchcaseforaccounts.htm)**
    This Integration Procedure fetches the cases registered in the agent console for a particular customer.
-   **[VPL\_CSRGetOrderSummaryForAccount](atlas.en-us.media_developer_guide.meta/media_developer_guide/media_slm_cc_vpl_csrgetordersummaryforaccount.htm)**
    This Integration Procedure fetches the details of an order from the agent console.
-   **[VPL\_UpdateInteractionTopics](atlas.en-us.media_developer_guide.meta/media_developer_guide/media_slm_cc_vpl_updateinteractiontopics.htm)**
    This Integration Procedure is used to update interaction topics.

## Related Topics

- VPL-CreateCustomerInteractionTopicInOS (atlas.en-us.media_developer_guide.meta/media_developer_guide/media_slm_cc_vpl_createcustomerinteractiontopicinos.htm)
- VPL360CSR_CreatePaymentIntentBillingCSR (atlas.en-us.media_developer_guide.meta/media_developer_guide/media_slm_cc_vpl360csr_createpaymentintentbillingcsr.htm)
- VPL360CSR_CreatePaymentIntentCSR (atlas.en-us.media_developer_guide.meta/media_developer_guide/media_slm_cc_vpl360csr_createpaymentintentcsr.htm)
- VPL360CSR_CreateSetupIntentCSR (atlas.en-us.media_developer_guide.meta/media_developer_guide/media_slm_cc_vpl360csr_createsetupintentcsr.htm)
- VPL360CSR_getPaymentMethodsCSR (atlas.en-us.media_developer_guide.meta/media_developer_guide/media_slm_cc_vpl360csr_getpaymentmethodscsr.htm)
- VPL360CSR_VIP_DetachcardFromCustomerCSR (atlas.en-us.media_developer_guide.meta/media_developer_guide/media_slm_cc_vpl360csr_vip_detachcardfromcustomercsr.htm)
- VPL360_AssetFetch (atlas.en-us.media_developer_guide.meta/media_developer_guide/media_slm_cc_vpl360_assetfetch.htm)
- VPL360_AssetToOrder (atlas.en-us.media_developer_guide.meta/media_developer_guide/media_slm_cc_vpl360_assettoorder.htm)
- VPL360_AssetToOrderForRelatedAssets (atlas.en-us.media_developer_guide.meta/media_developer_guide/media_slm_cc_vpl360_assettoorderforrelatedassets.htm)
- VPL360_CancelAsset (atlas.en-us.media_developer_guide.meta/media_developer_guide/media_slm_cc_vpl360_cancelasset.htm)

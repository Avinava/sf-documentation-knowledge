---
title: "Omnistudio Data Mapper for Subscriber Lifecycle Management"
domain: media-developer-guide
topic: omnistudio-data-mapper-for-subscriber-lifecycle-management
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:53.996Z
estimatedTokens: 2389
keywords: [Omnistudio, Data, Mapper, Subscriber, Lifecycle, Management, Mappers, org, implement, functionality, customer, journeys, Here's, along, sample]
---

# Omnistudio Data Mapper for Subscriber Lifecycle Management

> Many Omnistudio Data Mappers in your org are used by
        Subscriber Lifecycle Management to implement the functionality required by the customer
        journeys. Here's a list of the Data Mappers, along with sample input and output and
        information about where they are used.

# Omnistudio Data Mapper for Subscriber Lifecycle Management

Many Omnistudio Data Mappers in your org are used by Subscriber Lifecycle Management to implement the functionality required by the customer journeys. Here's a list of the Data Mappers, along with sample input and output and information about where they are used.

-   **[CSRBaseItemFormat](atlas.en-us.media_developer_guide.meta/media_developer_guide/media_slm_cc_csrbaseitemformat.htm)**
    This Omnistudio Data Mapper transforms the getCartItem response and gives the details of the items in the cart.
-   **[DRExtractfirstPromoItem](atlas.en-us.media_developer_guide.meta/media_developer_guide/media_slm_cc_drextractfirstpromoitem.htm)**
    This Omnistudio Data Mapper extracts the promotional item with the promotion ID, for the specified product codes.
-   **[DRExtractPromo](atlas.en-us.media_developer_guide.meta/media_developer_guide/media_slm_cc_drextractpromo.htm)**
    This Omnistudio Data Mapper extracts the promotions for specified product codes.
-   **[DRFetchAssetInfo](atlas.en-us.media_developer_guide.meta/media_developer_guide/media_slm_cc_drfetchassetinfo.htm)**
    This Omnistudio Data Mapper fetches the asset information for the account associated with the specified asset and account IDs.
-   **[DRFetchOrderItem](atlas.en-us.media_developer_guide.meta/media_developer_guide/media_slm_cc_drfetchorderitem.htm)**
    This Omnistudio Data Mapper fetches the details of item in an order during the Asset to Order workflow.
-   **[DRFetchPaymentMethod](atlas.en-us.media_developer_guide.meta/media_developer_guide/media_slm_cc_drfetchpaymentmethod.htm)**
    This Omnistudio Data Mapper fetches the payment method records for an account.
-   **[DRFetchPromoItem](atlas.en-us.media_developer_guide.meta/media_developer_guide/media_slm_cc_drfetchpromoitem.htm)**
    This Omnistudio Data Mapper fetches the promotion ID associated with an order item.
-   **[DRGetchStripePublicKey](atlas.en-us.media_developer_guide.meta/media_developer_guide/media_slm_cc_drgetchstripepublickey.htm)**
    This Omnistudio Data Mapper fetches the Stripe public key value for the payment flow.
-   **[DRgetOrderInfo](atlas.en-us.media_developer_guide.meta/media_developer_guide/media_slm_cc_drgetorderinfo.htm)**
    This Omnistudio Data Mapper gets information about an order item and returns the value true or false for signature products.
-   **[DRLoadPaymentMethod](atlas.en-us.media_developer_guide.meta/media_developer_guide/media_slm_cc_drloadpaymentmethod.htm)**
    This Omnistudio Data Mapper loads the payment method details in the record.
-   **[DROrderFetch](atlas.en-us.media_developer_guide.meta/media_developer_guide/media_slm_cc_drorderfetch.htm)**
    This Omnistudio Data Mapper is used to fetch the order line items for an account.
-   **[DRPreparePayload](atlas.en-us.media_developer_guide.meta/media_developer_guide/media_slm_cc_drpreparepayload.htm)**
    This Omnistudio Data Mapper is used in the agent console to transform the itemI D list in an array format in the Change Base workflow.
-   **[DRsaveStripeCustomer](atlas.en-us.media_developer_guide.meta/media_developer_guide/media_slm_cc_drsavestripecustomer.htm)**
    This Omnistudio Data Mapper saves a payment method in the Salesforce org.
-   **[DRTransformFromStripe](atlas.en-us.media_developer_guide.meta/media_developer_guide/media_slm_cc_drtransformfromstripe.htm)**
    This Omnistudio Data Mapper is used to transform and trim the Stripe response.
-   **[DRUpdatePaymentMethod](atlas.en-us.media_developer_guide.meta/media_developer_guide/media_slm_cc_drupdatepaymentmethod.htm)**
    This Omnistudio Data Mapper updates the payment method details for an account.
-   **[DRVerifyOrderAcount](atlas.en-us.media_developer_guide.meta/media_developer_guide/media_slm_cc_drverifyorderacount.htm)**
    This Omnistudio Data Mapper gets the total amount for an order.
-   **[FetchAccountMasterDetails](atlas.en-us.media_developer_guide.meta/media_developer_guide/media_slm_cc_fetchaccountmasterdetails.htm)**
    This Omnistudio Data Mapper is used to fetch account details for a custom account.
-   **[FetchAPIFromVPLMetadata](atlas.en-us.media_developer_guide.meta/media_developer_guide/media_slm_cc_fetchapifromvplmetadata.htm)**
    This Omnistudio Data Mapper fetches the Google API key value for validating an address.
-   **[GetAccountAssets](atlas.en-us.media_developer_guide.meta/media_developer_guide/media_slm_cc_getaccountassets.htm)**
    This Omnistudio Data Mapper gets the assets for an account along with the total subscription costs.
-   **[VPL360csr-DRFetchStripeCustId](atlas.en-us.media_developer_guide.meta/media_developer_guide/media_slm_cc_vpl360csr_drfetchstripecustid.htm)**
    This Omnistudio Data Mapper is used in the agent console to fetch the payment customer ID and email address for an account.
-   **[VPL360UpdateAccountData](atlas.en-us.media_developer_guide.meta/media_developer_guide/media_slm_cc_vpl360updateaccountdata.htm)**
    This Omnistudio Data Mapper loads or updates the account and contact details, and returns the IDs of the updated records.
-   **[VPL360\_UpdateUserData](atlas.en-us.media_developer_guide.meta/media_developer_guide/comms_t_vpl360_updateuserdata_86508.htm)**
    This Omnistudio Data Mapper loads or updates user details and returns the IDs of the updated records.
-   **[VPL360-DRFetchStripeCustId](atlas.en-us.media_developer_guide.meta/media_developer_guide/comms_t_vpl360_drfetchstripecustid_86569.htm)**
    This Omnistudio Data Mapper is used to fetch the payment customer ID using the user ID as input.
-   **[VPL-CreateInteractionTopic](atlas.en-us.media_developer_guide.meta/media_developer_guide/media_slm_cc_vpl_createinteractiontopic.htm)**
    This Omnistudio Data Mapper is used in the agent console to load the interaction topic ID for an account.
-   **[VPL-CSRCaseDetailsMedia](atlas.en-us.media_developer_guide.meta/media_developer_guide/media_slm_cc_vpl_csrcasedetailsmedia.htm)**
    This Omnistudio Data Mapper extracts the cases registered for the specified account or interaction ID.
-   **[VPL-CSRGetOrderStatusfromAcc2](atlas.en-us.media_developer_guide.meta/media_developer_guide/media_slm_cc_vpl_csrgetorderstatusfromacc2.htm)**
    This Omnistudio Data Mapper is used in the agent console to extract the order information and status for an account.
-   **[VPL-GetCartContextKey](atlas.en-us.media_developer_guide.meta/media_developer_guide/media_slm_cc_vpl_getcartcontextkey.htm)**
    This Omnistudio Data Mapper gets the latest cart context key for a user.
-   **[VPL-GetStoryAccountId](atlas.en-us.media_developer_guide.meta/media_developer_guide/media_slm_cc_vpl_getstoryaccountid.htm)**
    This Omnistudio Data Mapper is used in the agent console to fetch the account ID for a user based on the context ID of the customer story.
-   **[VPL-UpdateBasketUrlOnCartObject](atlas.en-us.media_developer_guide.meta/media_developer_guide/media_slm_cc_vpl_updatebasketurloncartobject.htm)**
    This Omnistudio Data Mapper loads or updates the basket key or cart URL on cart objects, and returns the IDs of the updates records.
-   **[vpls360Csr-FetchAccountFromInteraction](atlas.en-us.media_developer_guide.meta/media_developer_guide/media_slm_cc_vpls360csr_fetchaccountfrominteraction.htm)**
    This Omnistudio Data Mapper is used in the agent console to fetch the account ID from the customer interaction.
-   **[vpls360Csr-FormatProductList](atlas.en-us.media_developer_guide.meta/media_developer_guide/media_slm_cc_vpls360csr_formatproductlist.htm)**
    This Omnistudio Data Mapper is used in the agent console to format or transform the product list in the change base pack flow.
-   **[vpls360csr-GetCustomerDetails](atlas.en-us.media_developer_guide.meta/media_developer_guide/media_slm_cc_vpls360csr_getcustomerdetails.htm)**
    This Omnistudio Data Mapper is used in the agent console to extract account details based on the context ID of a customer interaction.
-   **[vpls360csr-GetCustomerDetailsByContextId](atlas.en-us.media_developer_guide.meta/media_developer_guide/media_slm_cc_vpls360csr_getcustomerdetailsbycontextid.htm)**
    This Omnistudio Data Mapper is used in the agent console to fetch customer details.
-   **[vpls360csr-TransformPersonalDetails](atlas.en-us.media_developer_guide.meta/media_developer_guide/media_slm_cc_vpls360csr_transformpersonaldetails.htm)**
    This Omnistudio Data Mapper transforms the personal details of an account.
-   **[vpls360csr-UpdateAccountName](atlas.en-us.media_developer_guide.meta/media_developer_guide/media_slm_cc_vpls360csr_updateaccountname.htm)**
    This Omnistudio Data Mapper loads or updates the first name and last name of a user, and returns the IDs for the updated records.
-   **[vpls360csr-UpdateBillingAddress](atlas.en-us.media_developer_guide.meta/media_developer_guide/media_slm_cc_vpls360csr_updatebillingaddress.htm)**
    This Omnistudio Data Mapper loads or updates the billing address for an account.
-   **[vpls360Csr-UpdateEmail](atlas.en-us.media_developer_guide.meta/media_developer_guide/media_slm_cc_vpls360csr_updateemail.htm)**
    This Omnistudio Data Mapper loads or updates the email address of a user, and returns the IDs for the updated records.
-   **[vpls360csr-UpdatePhone](atlas.en-us.media_developer_guide.meta/media_developer_guide/media_slm_cc_vpls360csr_updatephone.htm)**
    This Omnistudio Data Mapper loads or updates the phone number of a user, and returns the IDs for the updated records.

## Related Topics

- CSRBaseItemFormat (atlas.en-us.media_developer_guide.meta/media_developer_guide/media_slm_cc_csrbaseitemformat.htm)
- DRExtractfirstPromoItem (atlas.en-us.media_developer_guide.meta/media_developer_guide/media_slm_cc_drextractfirstpromoitem.htm)
- DRExtractPromo (atlas.en-us.media_developer_guide.meta/media_developer_guide/media_slm_cc_drextractpromo.htm)
- DRFetchAssetInfo (atlas.en-us.media_developer_guide.meta/media_developer_guide/media_slm_cc_drfetchassetinfo.htm)
- DRFetchOrderItem (atlas.en-us.media_developer_guide.meta/media_developer_guide/media_slm_cc_drfetchorderitem.htm)
- DRFetchPaymentMethod (atlas.en-us.media_developer_guide.meta/media_developer_guide/media_slm_cc_drfetchpaymentmethod.htm)
- DRFetchPromoItem (atlas.en-us.media_developer_guide.meta/media_developer_guide/media_slm_cc_drfetchpromoitem.htm)
- DRGetchStripePublicKey (atlas.en-us.media_developer_guide.meta/media_developer_guide/media_slm_cc_drgetchstripepublickey.htm)
- DRgetOrderInfo (atlas.en-us.media_developer_guide.meta/media_developer_guide/media_slm_cc_drgetorderinfo.htm)
- DRLoadPaymentMethod (atlas.en-us.media_developer_guide.meta/media_developer_guide/media_slm_cc_drloadpaymentmethod.htm)

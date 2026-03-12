---
title: "APIs for Enterprise Sales Management"
domain: esm-developer-guide
topic: apis-for-enterprise-sales-management
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:26.876Z
estimatedTokens: 4516
keywords: [APIs, Enterprise, Sales, Management, manage, quotes, calling, corresponding, Integration, Procedures, Posting, Data, Procedure, API, Descriptions]
---

# APIs for Enterprise Sales Management

> You can use the Enterprise Sales Management APIs
                      to create and manage enterprise quotes by calling corresponding Integration
                      Procedures.

# APIs for Enterprise Sales Management

You can use the Enterprise Sales Management APIs to create and manage enterprise quotes by calling corresponding Integration Procedures.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=esm_developer_guide)

#### Tip

Salesforce recommends using the Enterprise Sales Management [SDK for Enterprise Sales Management](atlas.en-us.esm_developer_guide.meta/esm_developer_guide/comms_t_sdk_for_enterprise_sales_management_65685.htm "The Enterprise Sales Management Software Development Toolkit (SDK) is a JavaScript library that abstracts and simplifies the use of Enterprise Sales Management, Cart-Based, and Digital Commerce APIs.") and [Lightning Web Components for Enterprise Sales Management](atlas.en-us.esm_developer_guide.meta/esm_developer_guide/comms_t_lightning_web_components_for_enterprise_salesmanagement_65423.htm "Enterprise Sales Management Lightning Web Components (LWCs) supplement Vlocity Lightning Web Components by incorporating calls to the Enterprise Sales Management SDK, which makes calls to Enterprise Sales Management APIs, Cart-Based APIs, Digital Commerce cacheable APIs, and Integration Procedures.") to call these APIs instead of calling them directly. The SDK and LWCs improve usability and help you develop compelling UIs by hiding complex API semantics. You can use this Integration Procedure API information to better understand Enterprise Sales Management business processes.

## Posting Data to an Integration Procedure

To post JSON data to a Enterprise Sales Management Integration Procedure, issue a POST call using a URL formatted as follows:

```

```

Specify the type and subtype of the Integration Procedure, which can be found in its Integration Procedure details page.

To pass input data in a POST call, you can specify a JSON request body.

In the following example POST, the getAll\_members Integration Procedure retrieves all quote members for a given quote ID.

```

```

Example POST JSON Data:

```

```

Example Result:

```

```

## Enterprise Sales Management API Descriptions

Use the API name to POST data to the corresponding Integration Procedure. For the ESM\_checkServiceQualification and ESM\_checkAddressValidation APIs, see [Add API Endpoint to Remote Site Settings](atlas.en-us.esm_developer_guide.meta/esm_developer_guide/comms_t_add_api_endpoint_to_remote_site_settings_64690.htm "For ESM_checkServiceQualification API and ESM_checkAddressValidation API, you must add the base URL of your TMF API endpoint to remote site settings.").

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=esm_developer_guide)

#### Note

Some components have been renamed to align with the naming conventions of OmniStudio Standard Runtime, to provide support for it. For more information, download [this PDF.](https://volt.my.salesforce.com/sfc/p/o0000000IKm8/a/3m000000htxw/tB15IalfyHRjNUVx59XdBeeM.nXKzpxNC5ansXxsmTQ)

| API | Description | Corresponding Integration Procedure |
| --- | --- | --- |
| AddMem_ToQG API | Add members to a quote group. | AddMembersToQGroup |
| AddQMQGToWC_CopyToEQ API | Add members and a quote group to the working cart and copy it to the enterprise quote. | AddQMQGToWCQLIsCopyToEQ |
| AddQMQGToWC_CopyToEQBatch API | Trigger a batch process to migrate and clone products from the working cart to the enterprise quote. | AddQMQGToWCQLIsCopyToEQBatch |
| b2bExpress_AddProductToCart API | Add a product to a working cart. | b2bExpress_AddProductToCart |
| b2bExpress_assetConfigData API | Store the information that is displayed on the assets page. | getAssetConfigData |
| b2bExpress_CreateSubOrder API | Create sub-orders for a given quote member. This API returns the record ID of the sub-order created. | CreateSubOrder |
| b2bExpress_DeleteMembers API | Delete members for a given quote member. | RemoveMembers |
| b2bExpress_getAssetsFromAccount API | Get child assets for a given account ID, root asset ID, and page size. | getAssetsFromAccount |
| b2bExpress_SalesOrder API | Create orders for the given quote ID and account ID. This API returns the principal order ID. | SalesOrder |
| b2bExpress_SubmitSubOrder API | Submit an order. | SubmitSubOrder |
| b2bExpress_SubmitSubOrders API | Submit all sub-orders. | SubmitSubOrders |
| b2bExpress_SubOrders API | Create sub-orders for a given quote member. | SubOrders |
| b2bExpress_TemplateConfigData API | Fetch Vlocity Document Template details for a given configuration. | B2BExpress_TemplateConfigData |
| b2bExpress_UpdateQtyPrice API | Update quantity and reprice order items that belong to a specific group. | UpdateQtyPrice |
| b2bExpress_updateQuantityAndReprice API | Update quantity and perform repricing for a given quote ID and quantity. | UpdateQuantityAndRepriceCart |
| CloneEQLIsToWC_PriceCopyBackToEQ API | Clone enterprise quote line items (QLIs) to working cart, apply pricing, and copy back to the enterprise quote. | CloneEQLIsToWCPriceCopyEQLIs |
| CloneModifyTo_SalesQLIs API | Clone modified working cart quote line items (QLIs) to sales QLIs and delete the working cart. | CloneModifyWorkingCartToSalesQLIs |
| CloneModifyTo_SalesQLIsWQPR API | Clone the modified working cart quote line items (QLIs) to sales QLIs, delete the working cart, and update the Quote Product Rollup object. | CloneModifyWCToSalesQLIs |
| CloneSalesQLIs_ToGCartQLIs API | Clone sales quote line items (QLIs) to working cart QLIs. | CloneSalesQuoteToWorkingCart |
| CloneSalesQToWC_Discounts API | Clone sales quote line items (QLIs) to working cart QLIs with discounts and adjustments. | CloneSalesQToWCWDiscounts |
| CloneTo_SalesQLIs API | Clone the working cart quote line items (QLIs) to sales QLIs. | CloneWorkingCartToSalesQLIs |
| create_NewGroupAssignMembers API | Create a group and assign members to it in a single call. | CreateGroup&AssignMembers |
| create_WorkingCart API | Create a working cart quote based on a sales quote. | CreateWorkingCartQuote |
| ESM_checkAddressValidation API | Validate the addresses selected with the valid addresses provided by TMF API. | ESM_checkAddressValidation |
| ESM_checkServiceQualification API | Check service qualification for specific locations using TMF API. | ESM_checkServiceQualification |
| ESM_CreateSubOrderForNonMembers API | Create a sub-order for line items without any members or groups using ESM CreateOrder API. | ESM_CreateSubOrderForNonMembers |
| ESM_CustomViewSetup API | Store information about the custom views created for the Summary page. | ESM_CustomViewSetup |
| ESM_DelinkRelatedItemFromCart API | Delink a related quote item (product) from another item of the same quote (from QuoteLineItemRelationship Sobject). | ESM_DelinkRelatedItemFromCart |
| ESM_EvaluateFormula API | Evaluate an expression. | ESM_EvaluateFormula |
| ESM_getCartItemsByView API | Retrieve quote line items for a given quote ID and display option. | ESM_getCartItemsByView |
| ESM_getRelatedProducts API | Fetches the related Products QLI from a quote for a particular product relationship. | ESM_getRelatedProducts |
| ESM_LinkProducts API | Saves QLI product relationship. | ESM_LinkProducts |
| ESM_UpdateQuoteLineItems API | Update a quote line item and its related child items with the given set of fields and values. | ESM_UpdateQuoteLineItems |
| ESM_validateRecords API | Validate quote line items. | ESM_validateRecords |
| getAll_members API | Get all quote members for a given quote ID. | GetAllMembers |
| getAll_QuoteGroup API | Get all custom quote groups for a sales quote. | GetAllQGroupForSQ |
| member_upload API | Upload a CSV file with new subscribers or locations. | UploadMembers |
| QMgetFields_WFieldLabel API | Get the field set with fields and labels for the quote members. | QuoteMemberGetFields |
| Remove_QuoteGroup API | Remove the quote group from the enterprise quote. | RemoveQuoteGroup |
| removeQM_FromQuoteGroup API | Remove a quote member record from the quote group. | RemoveQMFromQuoteGroup |
| UpdateCloneModify_SalesQLIsWQPR API | Updates, clones, or modifies the quote line items for a given cart ID, group ID, quote member ID, or quote ID. | UpdateMemberIdForWC |
| update_QGroupName API | Update the name of the quote group. | UpdateQuoteGroupName |

-   **[Add API Endpoint to Remote Site Settings](atlas.en-us.esm_developer_guide.meta/esm_developer_guide/comms_t_add_api_endpoint_to_remote_site_settings_64690.htm)**
    For ESM\_checkServiceQualification API and ESM\_checkAddressValidation API, you must add the base URL of your TMF API endpoint to remote site settings.
-   **[AddMem\_ToQG API](atlas.en-us.esm_developer_guide.meta/esm_developer_guide/comms_t_addmem_toqg_api_64718.htm)**
    Add members to a quote group.
-   **[AddQMQGToWC\_CopyToEQ API](atlas.en-us.esm_developer_guide.meta/esm_developer_guide/comms_t_addqmqgtowc_copytoeq_api_64734.htm)**
    Add members and a quote group to the working cart and copy it to the enterprise quote.
-   **[AddQMQGToWC\_CopyToEQBatch API](atlas.en-us.esm_developer_guide.meta/esm_developer_guide/comms_t_addqmqgtowc_copytoeqbatch_api_64750.htm)**
    Trigger a batch process to migrate and clone products from the working cart to the enterprise quote.
-   **[b2bExpress\_AddProductToCart API](atlas.en-us.esm_developer_guide.meta/esm_developer_guide/comms_t_b2bexpress_addproducttocart_api_64765.htm)**
    Add a product to a working cart.
-   **[b2bExpress\_assetConfigData API](atlas.en-us.esm_developer_guide.meta/esm_developer_guide/comms_t_b2bexpress_assetconfigdata_api_64780.htm)**
    Retrieve the information that is displayed on the assets page.
-   **[b2bExpress\_CreateSubOrder API](atlas.en-us.esm_developer_guide.meta/esm_developer_guide/comms_t_b2bexpress_createsuborder_api_64796.htm)**
    Create sub-orders for a given quote member. This API returns the record ID of the sub-order created.
-   **[b2bExpress\_DeleteMembers API](atlas.en-us.esm_developer_guide.meta/esm_developer_guide/comms_t_b2bexpress_deletemembers_api_64811.htm)**
    Delete members for a given quote member.
-   **[b2bExpress\_getAssetsFromAccount API](atlas.en-us.esm_developer_guide.meta/esm_developer_guide/comms_t_b2bexpress_getassetsfromaccount_api_64826.htm)**
    Get child assets for a given account ID, root asset ID, and page size.
-   **[b2bExpress\_SalesOrder API](atlas.en-us.esm_developer_guide.meta/esm_developer_guide/comms_t_b2bexpress_salesorder_api_64842.htm)**
    Create orders for the given quote ID and account ID. This API returns the principal order ID.
-   **[b2bExpress\_SubmitSubOrder API](atlas.en-us.esm_developer_guide.meta/esm_developer_guide/comms_t_b2bexpress_submitsuborder_api_64857.htm)**
    Submit an order.
-   **[b2bExpress\_SubmitSubOrders API](atlas.en-us.esm_developer_guide.meta/esm_developer_guide/comms_t_b2bexpress_submitsuborders_api_64873.htm)**
    Submit all sub-orders.
-   **[b2bExpress\_SubOrders API](atlas.en-us.esm_developer_guide.meta/esm_developer_guide/comms_t_b2bexpress_suborders_api_64889.htm)**
    Create sub-orders for a given quote member.
-   **[b2bExpress\_TemplateConfigData API](atlas.en-us.esm_developer_guide.meta/esm_developer_guide/comms_t_b2bexpress_templateconfigdata_api_64904.htm)**
    Fetch Vlocity Document Template details for a given configuration.
-   **[b2bExpress\_UpdateQtyPrice API](atlas.en-us.esm_developer_guide.meta/esm_developer_guide/comms_t_b2bexpress_updateqtyprice_api_64919.htm)**
    Update quantity and reprice order items that belong to a specific group.
-   **[b2bExpress\_updateQuantityAndReprice API](atlas.en-us.esm_developer_guide.meta/esm_developer_guide/comms_t_b2bexpress_updatequantityandreprice_api_64934.htm)**
    Update quantity and perform repricing for a given quote ID and quantity.
-   **[CloneEQLIsToWC\_PriceCopyBackToEQ API](atlas.en-us.esm_developer_guide.meta/esm_developer_guide/comms_t_cloneeqlistowc_pricecopybacktoeq_api_64949.htm)**
    Clone enterprise quote line items (QLIs) to working cart, apply pricing, and copy back to the enterprise quote.
-   **[CloneModifyTo\_SalesQLIs API](atlas.en-us.esm_developer_guide.meta/esm_developer_guide/comms_t_clonemodifyto_salesqlis_api_64965.htm)**
    Clone modified working cart quote line items (QLIs) to sales QLIs and delete the working cart.
-   **[CloneModifyTo\_SalesQLIsWQPR API](atlas.en-us.esm_developer_guide.meta/esm_developer_guide/comms_t_clonemodifyto_salesqliswqpr_api_64981.htm)**
    Clone the modified working cart quote line items (QLIs) to sales QLIs, delete the working cart, and update the Quote Product Rollup object.
-   **[CloneSalesQLIs\_ToGCartQLIs API](atlas.en-us.esm_developer_guide.meta/esm_developer_guide/comms_t_clonesalesqlis_togcartqlis_api_64997.htm)**
    Clone sales quote line items (QLIs) to working cart QLIs.
-   **[CloneSalesQToWC\_Discounts API](atlas.en-us.esm_developer_guide.meta/esm_developer_guide/comms_t_clonesalesqtowc_discounts_api_65013.htm)**
    Clone sales quote line items (QLIs) to working cart QLIs with discounts and adjustments.
-   **[CloneTo\_SalesQLIs API](atlas.en-us.esm_developer_guide.meta/esm_developer_guide/comms_t_cloneto_salesqlis_api_65029.htm)**
    Clone the working cart quote line items (QLIs) to sales QLIs.
-   **[create\_NewGroupAssignMembers API](atlas.en-us.esm_developer_guide.meta/esm_developer_guide/comms_t_create_newgroupassignmembers_api_65045.htm)**
    Create a group and assign members to it in a single call.
-   **[create\_WorkingCart API](atlas.en-us.esm_developer_guide.meta/esm_developer_guide/comms_t_create_workingcart_api_65060.htm)**
    Create a working cart quote based on a sales quote.
-   **[ESM\_BulkDisconnectQuoteLineItems](atlas.en-us.esm_developer_guide.meta/esm_developer_guide/esm_executebulkdisconnectquotelineitems.htm)**
    Enable bulk disconnect of quote line items with configurable pricing and validation options.
-   **[ESM\_checkAddressValidation API](atlas.en-us.esm_developer_guide.meta/esm_developer_guide/comms_t_esm_checkaddressvalidation_api_65076.htm)**
    Validate the addresses selected with the valid addresses provided by TMF API.
-   **[ESM\_checkServiceQualification API](atlas.en-us.esm_developer_guide.meta/esm_developer_guide/comms_t_esm_checkservicequalification_api_65091.htm)**
    Check service qualification for specific locations using TMF API.
-   **[ESM\_CreateSubOrderForNonMembers API](atlas.en-us.esm_developer_guide.meta/esm_developer_guide/comms_t_esm_createsuborderfornonmembers_api_65106.htm)**
    Create a sub-order for line items without any members or groups using ESM CreateOrder API.
-   **[ESM\_CustomViewSetup API](atlas.en-us.esm_developer_guide.meta/esm_developer_guide/comms_t_esm_customviewsetup_api_65121.htm)**
    Store information about the custom views created for the Summary page.
-   **[ESM\_DelinkRelatedItemFromCart API](atlas.en-us.esm_developer_guide.meta/esm_developer_guide/comms_t_esm_delinkrelateditemfromcart_api_65151.htm)**
    Delink a related quote item (product) from another item of the same quote (from QuoteLineItemRelationship Sobject).
-   **[ESM\_DisconnectLineItems](atlas.en-us.esm_developer_guide.meta/esm_developer_guide/esm_disconnectlineitems.htm)**
    Disconnects one or more quote line items from the sales quote.
-   **[ESM\_EvaluateFormula API](atlas.en-us.esm_developer_guide.meta/esm_developer_guide/comms_t_esm_evaluateformula_api_65166.htm)**
    Evaluate an expression.
-   **[ESM\_getCartItemsByView API](atlas.en-us.esm_developer_guide.meta/esm_developer_guide/comms_t_esm_getcartitemsbyview_api_65181.htm)**
    Retrieve quote line items for a given Quote ID as per the option selected in the **Displaying** list.
-   **[ESM\_getRelatedProducts API](atlas.en-us.esm_developer_guide.meta/esm_developer_guide/comms_t_esm_getrelatedproducts_api_65197.htm)**
    Fetches the related Products QLI from a quote for a particular product relationship.
-   **[ESM\_LinkProducts API](atlas.en-us.esm_developer_guide.meta/esm_developer_guide/comms_t_esm_linkproducts_api_65212.htm)**
    Saves QLI product relationship.
-   **[ESM\_UpdateQuoteLineItems API](atlas.en-us.esm_developer_guide.meta/esm_developer_guide/comms_t_esm_updatequotelineitems_api_65227.htm)**
    Update a quote line item and its related child items with the given set of fields and values.
-   **[ESM\_validateRecords API](atlas.en-us.esm_developer_guide.meta/esm_developer_guide/comms_t_esm_validaterecords_api_65242.htm)**
    Validate quote line items.
-   **[getAll\_members API](atlas.en-us.esm_developer_guide.meta/esm_developer_guide/comms_t_getall_members_api_65258.htm)**
    Get all quote members for a given quote ID.
-   **[getAll\_QuoteGroup API](atlas.en-us.esm_developer_guide.meta/esm_developer_guide/comms_t_getall_quotegroup_api_65273.htm)**
    Get all custom quote groups for a sales quote.
-   **[member\_upload API](atlas.en-us.esm_developer_guide.meta/esm_developer_guide/comms_t_member_upload_api_65289.htm)**
    Upload a CSV file with new subscribers or locations.
-   **[QMgetFields\_WFieldLabel API](atlas.en-us.esm_developer_guide.meta/esm_developer_guide/comms_t_qmgetfields_wfieldlabel_api_65308.htm)**
    Get the field set with fields and labels for the quote members.
-   **[Remove\_QuoteGroup API](atlas.en-us.esm_developer_guide.meta/esm_developer_guide/comms_t_remove_quotegroup_api_65324.htm)**
    Remove the quote group from the enterprise quote.
-   **[removeQM\_FromQuoteGroup API](atlas.en-us.esm_developer_guide.meta/esm_developer_guide/comms_t_removeqm_fromquotegroup_api_65340.htm)**
    Remove a quote member record from the quote group.
-   **[update\_QGroupName API](atlas.en-us.esm_developer_guide.meta/esm_developer_guide/comms_t_update_qgroupname_api_65372.htm)**
    Update the name of the quote group.
-   **[UpdateCloneModify\_SalesQLIsWQPR API](atlas.en-us.esm_developer_guide.meta/esm_developer_guide/comms_t_updateclonemodify_salesqliswqpr_api_65356.htm)**
    Updates, clones, or modifies the quote line items for a given cart ID, group ID, quote member ID, or quote ID.

## Code Examples

```
/services/apexrest/vlocity_cmt/v1/integrationprocedure/{type}_{subtype}/
```

```
POST
/services/apexrest/vlocity_cmt/v1/integrationprocedure/getAll_members/
```

```
{
 	"SalesQuoteId": "0Q03h000000TuXGCA0"
 }
```

```
{
	"Members": [{
			"Id": "a5X5w000002KqC9EAK",
			"QuoteId__c": "0Q05w000001sayRCAQ",
			"Title__c": "VP",
			"Address1__c": "Suite 415",
			"Name": "Mary Sommer",
			"MemberType__c": "Location",
			"StreetAddress__c": "123 Main St",
			"State__c": "CA",
			"PostalCode__c": "94102",
			"MSISDN__c": "1234564567",
			"LastName__c": "Sommer",
			"FirstName__c": "Mary",
			"Email__c": "msommer@test.com",
			"Country__c": "USA",
			"City__c": "San Francisco"
		},
		{
			"UpsertSuccess": true,
			"Id": "a5X5w000002KqCAEA0",
			"QuoteId__c": "0Q05w000001sayRCAQ",
			"Title__c": "EVP",
			"Address1__c": "Suite 415",
			"Name": "Tom Hanks",
			"MemberType__c": "Subscriber",
			"StreetAddress__c": "1480 SantaClara St",
			"State__c": "CA",
			"PostalCode__c": "95050",
			"MSISDN__c": "123456489",
			"LastName__c": "Hanks",
			"FirstName__c": "Tom",
			"Email__c": "thanks@test.com",
			"Country__c": "USA",
			"City__c": "Santa Clara"
		}
	]
}
```

## Related Topics

- SDK for Enterprise Sales
                  Management (atlas.en-us.esm_developer_guide.meta/esm_developer_guide/comms_t_sdk_for_enterprise_sales_management_65685.htm)
- Lightning Web Components for Enterprise
                  Sales Management (atlas.en-us.esm_developer_guide.meta/esm_developer_guide/comms_t_lightning_web_components_for_enterprise_salesmanagement_65423.htm)
- Add API Endpoint to Remote Site
               Settings (atlas.en-us.esm_developer_guide.meta/esm_developer_guide/comms_t_add_api_endpoint_to_remote_site_settings_64690.htm)
- AddMem_ToQG API (atlas.en-us.esm_developer_guide.meta/esm_developer_guide/comms_t_addmem_toqg_api_64718.htm)
- AddQMQGToWC_CopyToEQ API (atlas.en-us.esm_developer_guide.meta/esm_developer_guide/comms_t_addqmqgtowc_copytoeq_api_64734.htm)
- AddQMQGToWC_CopyToEQBatch API (atlas.en-us.esm_developer_guide.meta/esm_developer_guide/comms_t_addqmqgtowc_copytoeqbatch_api_64750.htm)
- b2bExpress_AddProductToCart API (atlas.en-us.esm_developer_guide.meta/esm_developer_guide/comms_t_b2bexpress_addproducttocart_api_64765.htm)
- b2bExpress_assetConfigData API (atlas.en-us.esm_developer_guide.meta/esm_developer_guide/comms_t_b2bexpress_assetconfigdata_api_64780.htm)
- b2bExpress_CreateSubOrder API (atlas.en-us.esm_developer_guide.meta/esm_developer_guide/comms_t_b2bexpress_createsuborder_api_64796.htm)
- b2bExpress_DeleteMembers API (atlas.en-us.esm_developer_guide.meta/esm_developer_guide/comms_t_b2bexpress_deletemembers_api_64811.htm)

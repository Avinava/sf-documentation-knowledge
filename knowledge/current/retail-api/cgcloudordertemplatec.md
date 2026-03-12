---
title: "cgcloud__Order_Template__c"
domain: retail-api
topic: cgcloudordertemplatec
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:39.208Z
estimatedTokens: 8000
keywords: [cgcloud__Order_Template__c, Template, behavior, sales, document, API, version, 54.0, later, cgcloud, _Order, _Template, Calls, Associated, Objects]
---

# cgcloud__Order_Template__c

> Template that controls the behavior of a sales document. This
      object is available in API version 54.0 and later.

# cgcloud\_\_Order\_Template\_\_c

Template that controls the behavior of a sales document. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user viewed this record. |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionUnique identification of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the record owner.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| RecordTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRepresents the record type of the record.This is a relationship field.Relationship NameRecordTypeRelationship TypeLookupRefers ToRecordType |
| cgcloud__Active__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionAttribute that's used to either enable or disable the current template.The default value is true. |
| cgcloud__Add_Former_Items__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionTemplate setting controls whether items, which belong to a former sales document of the same business partner and of the same sales document template, are to be added to the disposal list. The system considers only sales documents that have reached a status of status type as Ready within the number of days specified in SdoMeta.ConsiderMaxHistoryDays.The default value is false. |
| cgcloud__Add_Items_Json__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionJSON to customize the Add Items page. |
| cgcloud__Allow_Competitor_Products__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionControls whether foreign products can be used in the sales document.The default value is false. |
| cgcloud__Allow_Header_Discount__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates if a user can provide a discount for the order. The app evaluates the discount percentage or amount from the valid pricing conditions for the order.The default value is false. |
| cgcloud__Allowed_Orderer_Types__c | TypemultipicklistPropertiesCreate, Filter, Nillable, UpdateDescriptionAllowed Orderer Types.Possible values are:DirectIndirectReplenishment |
| cgcloud__Barcode_Scan_Behavior__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionControls the behavior of barcode scanning of products: Select an item, and then increase the product quantity.Possible values are:AddBatchNumber—Add Batch NumberOnlySelect—Only SelectSelectIncrease—Select IncreaseUserExit—User ExitThe default value is SelectIncrease. |
| cgcloud__Can_Purchase_Number_Update_Allowed__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the driver is allowed to update the purchase number while reviewing the delivery document.The default value is false. |
| cgcloud__Calculation_Schema__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the calculation schema that determines the calculation schema that's used in truck load documents.This is a relationship field.Relationship Namecgcloud__Calculation_Schema__rRelationship TypeLookupRefers Tocgcloud__CP_Calculation_Schema__c |
| cgcloud__Cancel_Reason_Required__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the user must provide a reason for order or delivery document cancellation.The default value is false. |
| cgcloud__Cancel_Reason__c | TypemultipicklistPropertiesCreate, Filter, Nillable, UpdateDescriptionSpecifies the reason for the cancellation of the delivery document or order.Possible values are:CanceledByCall—Canceled By CallCashierNotAvailable—Cashier Not AvailableCustomerBlocked—Customer is credit blockedDoubleDelivery—Double DeliveryMisentryNotEnoughMoney—Not Enough MoneyWrongDelivery—Wrong DeliveryWrongPricing—Wrong Pricing |
| cgcloud__Capture_Release_Time__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionCapture Release Time.The default value is false. |
| cgcloud__Check__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionControls whether the delivery date is to be checked.The default value is true. |
| cgcloud__Check_Out_Type__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionOrder is used for the inventory check-out.Possible values are:Counting Group Check-OutExpress Check-OutPallet Check-OutSKU Check-OutThe default value is SKU Check-Out. |
| cgcloud__Compute_Price__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionControls whether prices are computed for the items.Possible values are:0—Save1—Add and Save2—No3—External4—Offline (Button)5—Offline (Edit Mode) |
| cgcloud__Consider_Field_Availability__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionTemplate setting controls whether the field state is to be considered when adding a product to the disposal list.The default value is false. |
| cgcloud__Consider_History_In_Days__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionControls the number of days that are to be used to determine a last item. |
| cgcloud__Consider_Inventory__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDetermines the products in the item list based on existing user inventories.The default value is false. |
| cgcloud__Consider_Lead_Time__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the lead time is taken from the delivery recipient. Otherwise, the lead time of this template is taken. The maximum lead time is defined in both cases by the template.The default value is false. |
| cgcloud__Consider_Listing__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAll products of active listings are considered according to the specified listing finding template.Possible values are:0—No1—Yes2—User Exit |
| cgcloud__Consider_Modification_Reason__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether modification reasons can be entered for modified items.The default value is false. |
| cgcloud__Consider_OoS__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe system adds out-of-stock products to the disposal list and/or presets their quantity.Possible values are:AddAddPreset—Add & Preset QuantityNoPreset—Preset Quantity |
| cgcloud__Consider_Promotion__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAll products whose state is active and executable are considered according to the specified promotion finding template.Possible values are:0—No1—Yes2—User Exit |
| cgcloud__Consider_Quantity_Suggestion__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPresetting of the ordered quantity via either the calculated quantity suggestion or preordered quantity.Possible values are:LQtyStock—Last Quantities & StockLqty—Last QuantitiesNoPqty—Preordered Quantity |
| cgcloud__Consider_Saturday__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIf 1 (true): deliveries on Saturdays are allowed.The default value is false. |
| cgcloud__Consider_Selectable_Promotion__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionEnables selectable promotions on Mobility.The default value is false. |
| cgcloud__Consider_Stock__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether the current stock is to be considered for quantity suggestion in the web display of the disposal list. Currently, it's additionally used to display the current stock in the disposal list of the Mobility device.The default value is false. |
| cgcloud__Consider_Sunday__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIf 1 (true): deliveries on Sundays are allowed.The default value is false. |
| cgcloud__Creation_Platform__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionIndicates the platform on which this template can be used to create sales documents.Possible values are:BothLaptopMobilityThe default value is Laptop. |
| cgcloud__Customer_Selling_Assortment__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionControls whether the customer selling assortment is used to preset the disposal list. - 0/No: The system doesn't consider any customer selling assortment. - 1/Yes: The system filters the disposal list subject to the customer selling assortment. All other template attributes for the disposal list control are to be considered also.The default value is false. |
| cgcloud__Deletion_Allowed__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDefines whether it’s allowed to delete any object of the template.The default value is false. |
| cgcloud__Delivery_Date_Calculation__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionControls how the delivery date is determined.Possible values are:Built InNoTodayUser ExitThe default value is Built In. |
| cgcloud__Description_Language_1__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description in language 1. |
| cgcloud__Description_Language_2__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description in language 2. |
| cgcloud__Description_Language_3__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description in language 3. |
| cgcloud__Description_Language_4__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description in language 4. |
| cgcloud__Description__c | TypestringPropertiesFilter, Nillable, SortDescriptionDescription based on the user-specifiied language.This is a calculated field.FormulaCASE($User.cgcloud__Language_Postfix__c, "Language1", cgcloud__Description_Language_1__c,       "Language2", cgcloud__Description_Language_2__c,       "Language3", cgcloud__Description_Language_3__c,       "Language4", cgcloud__Description_Language_4__c,       cgcloud__Description_Language_1__c) |
| cgcloud__Disposal_List_Proposal__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionControls whether and how the disposal list is built for this sales document template.Possible values are:NoneProposalTalonUserExit—User ExitThe default value is Proposal. |
| cgcloud__Document_Transaction_Type__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies how to manage a sales document regarding payments.Possible values are:CashInvoice—Delivery Cash InvoiceCreditInvoice—Delivery Credit InvoiceCashOrder—Cash OrderCreditMemo—Credit MemoCreditOrder—Credit OrderInvoiceCashInvoice—Cash InvoiceInvoiceCreditInvoice—Credit InvoiceNoPayment—No PaymentNoPaymentOrder—No Payment OrderVanSalesCashInvoice—Van Sales Cash InvoiceVanSalesNoPaymentInvoice—Van Sales No Payment InvoiceNonValuatedDeliveryNote—Non Valuated Delivery NoteValuatedDeliveryNote—Valuated Delivery Note |
| cgcloud__Document_Type__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies how to handle a sales document regarding payments.Possible values are:CashCheckIn—Cash Check InCashCheckOut—Cash Check OutDeliveryOrderEntry—Order EntryProductCheckIn—Product Check InProductCheckOut—Product Check OutTruckAudit—Truck Audit |
| cgcloud__Flat_Item_List_Grouping__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionWhen displaying the disposal list as a flat list on the Mobility device, the items are to be grouped in accordance with the product groups of the specified level.Possible values are:BrandCategoryFlavorPackageProductSubCategory |
| cgcloud__Free_Items_Json__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionJSON to customize the Free Items page. |
| cgcloud__Generate_Pricing_Information__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionControls the storage of pricing information in the respective order item/order object. And these pricing details are shown during printing or print preview.Possible values are:NoYesYesOV—Yes (Optimised Version)The default value is No. |
| cgcloud__Generate_Pricing_Log__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionControls whether the pricing engine writes or synchronizes pricing logs.Possible values are:NoYes |
| cgcloud__Generate_Rewards_Log__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThis attribute can be used by users to switch on/off the generation of the Rewards log file when the order is saved.Possible values are:NoYesThe default value is Yes. |
| cgcloud__Hide_Wholesaler__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionControls whether the attribute Broker/Wholesaler is hidden in the UI.The default value is false. |
| cgcloud__Id_Generation__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionControls the behavior of the document number generation.Possible values are:Creation—Number generation at creation timeDefault—Default behavior (Web: On Save, Mobile: On Sync)Release—Number generation at release time |
| cgcloud_Inventory_Filter__C | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDetermines whether the inventory products are considered for creating and validating the disposal list.The default value is false. |
| cgcloud__Inventory_Reference_1__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDefines the first inventory reference usage.Possible values are:ActualUser—Actual UserActualVehicle—Actual VehicleDefaultUser—Default UserDefaultVehicle—Default VehicleTour |
| cgcloud__Inventory_Reference_2__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDefines the second inventory reference usage.Possible values are:ActualUser—Actual UserActualVehicle—Actual VehicleDefaultUser—Default UserDefaultVehicle—Default VehicleTour |
| cgcloud__Inventory_Reference_3__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionDefines the third inventory reference usage.Possible values are:ActualUser—Actual UserActualVehicle—Actual VehicleDefaultUser—Default UserDefaultVehicle—Default VehicleTour |
| cgcloud__Inventory_Reference_4__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionDefines the fourth inventory reference usage.Possible values are:ActualUser—Actual UserActualVehicle—Actual VehicleDefaultUser—Default UserDefaultVehicle—Default VehicleTour |
| cgcloud__Inventory_Reference_5__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDefines the fifth inventory reference usage.Possible values are:ActualUser—Actual UserActualVehicle—Actual VehicleDefaultUser—Default UserDefaultVehicle—Default VehicleTour |
| cgcloud__Invoice_Id_Generation__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionControls the way in which an invoice number is generated.Possible values are:Creation—Number generation at creation timeDefault—Default behavior (Web: On Save, Mobile: On Sync)NoGen—No Number generationRelease—Number generation at release time |
| cgcloud_Invoice_Number_Definition__C | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDefines the format of the system-generated invoice ID. This is a relationship field.Relationship Namecgcloud__System_Number__rRelationship TypeLookupRefers Tocgcloud__System_Number__c |
| cgcloud__Is_Partial_Payment_Allowed__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the driver is allowed to collect partial payment for the cash order or delivery document.The default value is false. |
| cgcloud__Item_Input_Required__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionAll items of the sales document must have been edited (entered quantity) before releasing the document.The default value is false. |
| cgcloud__Item_Presetting_Policy__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies whether the system shows the presetting of item values in the truck load and cash documents.Possible values are:BlindMode—Blind LinesNonBlindMode—Non Blind LinesPrepopulated |
| cgcloud__List_Option__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the default list option in the sales document.Possible values are:Flat ListHierarchy |
| cgcloud__Listing_Finding_Date__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionControls the date that's used for the product finding algorithms of customer authorization lists.Possible values are:DeliveryDate—Delivery DateInitiationDate—Initiation DateListingDate—Listing DateOrderDate—Order DateThe default value is ListingDate. |
| cgcloud__Listing_Finding__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the authorization list finding template, which controls the behavior of the algorithm.Possible values are:Hit—First HitNoneThe default value is None. |
| cgcloud__Manual_Adjustment__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionControls whether the delivery date can be edited by the user.The default value is true. |
| cgcloud__Max_Lead_Time__c | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionNumber of maximum days that are allowed to place an order before the planned delivery date. |
| cgcloud__Max_Order_Value__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionMaximum order value that's accepted for orders of this template. |
| cgcloud__Min_Lead_Time__c | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionNumber of minimum days needed to process the order and prepare the delivery. |
| cgcloud__Min_Order_Value__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionMinimum order value that's accepted for orders of this template. The system only considers the value if it's >=0.01. |
| cgcloud__Mobility_Relevant__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionControls the validation of restrictions that are necessary for usage on mobility devices.The default value is false. |
| cgcloud__Notify_Outdated_Calculation__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionControls whether the system issues a warning message about an outdated complex pricing calculation when opening the order.The default value is false. |
| cgcloud__Number_Of_Historic_Quantities__c | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionNumber of historical orders that are to be considered for quantity suggestion. |
| cgcloud__Order_Details_Json__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionJSON to customize the Order Details page. |
| cgcloud__Order_Items_Json__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionJSON to customize the Order Items section. |
| cgcloud__Order_Page_Header_Json__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionJSON to customize the Order Page Header section. |
| cgcloud__Payment_Modification_Reason__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies whether modification reasons can be entered for the difference in payments.Possible values are:MandatoryNotrequired—Not requiredOptional |
| cgcloud__Price_Type__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDetermines the Price Type value for every product.Possible values are:NotRelevant—Not Relevantconsumer—Consumerfactory—Factory |
| cgcloud__Pricing_Date__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDefines the date that's to be used for complex price calculation.Possible values are:DeliveryDate—Delivery DateOrderDate—Order Date |
| cgcloud__Pricing_Type__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDefines the pricing type of the order template.Possible values are:A—StandardC—Free of ChargeF—Sample/DonateQ—ReturnT—RefusalV—Contract |
| cgcloud__Product_Check_In_Policy__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDefines whether a complete or partial product check-in is required at the end of a tour. The truck inventory check-out document controls the way check-in is required.Possible values are:Complete—Complete check-in is mandatoryOptional—Check-in is optionalPartial—Check-in is mandatory, partial check-in allowed |
| cgcloud__Product_Selector_Groups__c | TypemultipicklistPropertiesCreate, Filter, Nillable, UpdateDescriptionUsed for mobility.Possible values are:AllBasketBrandNewOut of StockPromotionSub-Category |
| cgcloud__Promotion_Filter_Selection__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionDetermines the presetting of promotion filter for promotional orders. The system shows the order in the disposal list with either the first valid selectable promotion or without any selectable promotion.Possible values are:0—No Promotion1—First PromotionThe default value is 0. |
| cgcloud__Promotion_Finding_Date__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionControls the date that's used for product finding algorithms of promotion tactics.Possible values are:DeliveryDate—Delivery DateInitiationDate—Initiation DateListingDate—Listing DateOrderDate—Order DateThe default value is ListingDate. |
| cgcloud__Promotion_Finding__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the promotion finding template.Possible values are:Collection—Collection AlgorithmNone |
| cgcloud__Quantity_Rounding__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionQuantity Rounding.Possible values are:OffRoundingAlwaysOn—Rounding Always OnRoundingDefaultOff—Rounding Default OffRoundingDefaultOn—Rounding Default OnThe default value is Off. |
| cgcloud__Recalculation_Required__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionControls whether forced recalculation is required in complex pricing if the calculation date diverges from the current date.Possible values are:AlwaysCalculate—Always CalculateNoYesYesNotify—Yes (With Notification) |
| cgcloud__Release_Platform__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionDescribes the platform that can be used to release the order that references this template.Possible values are:AllMobilityThe default value is All. |
| cgcloud__Report__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionControls the type of report that's used. |
| cgcloud__Sales_Document_Assortment_Filter__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionControls whether the sales document template assortment is to be considered when building and validating the disposal list.The default value is false. |
| cgcloud__Sales_Document_Assortment__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionControls whether the sales document template assortment is used to preset the disposal list. - 0/No: The system doesn't consider any sales document template assortment. - 1/Yes: The system presets the disposal list subject to the sales document template assortment. All other template attributes for the disposal list control have to be considered also.The default value is false. |
| cgcloud__Sales_Org__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSales org to which the order template belongs.Possible values are:0000000100020003 |
| cgcloud__Selling_Assortment_Filter__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionControls whether the customer selling assortment is to be considered when validating the disposal list. No: The system doesn't consider any customer selling assortment. Yes: The system filters the disposal list subject to the customer selling assortment. The validation verifies the assignment of each product to the according assortment.The default value is false. |
| cgcloud__Signature_Template__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to a signature template.This is a relationship field.Relationship Namecgcloud__Signature_Template__rRelationship TypeLookupRefers Tocgcloud__Signature_Template__c |
| cgcloud__Sort__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionPosition of this instance in overviews or toggles. |
| cgcloud__Special_Order_Handling__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionUsed for complex pricing calculations.Possible values are:ExclusiveSpecialOrder—Exclusive Special OrderInclusiveSpecialOrder—Inclusive Special OrderNoThe default value is No. |
| cgcloud__Special_Order__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates the ability to use the template along with talon tactics.The default value is false. |
| cgcloud__Sync_Options__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSync Options.Possible values are:CancelNoReleaseReleaseCancel—Release Cancel |
| cgcloud__System_Number__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLookup to the System Number.This is a relationship field.Relationship Namecgcloud__System_Number__rRelationship TypeLookupRefers Tocgcloud__System_Number__c |
| cgcloud__Transaction_Receiver__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies for whom the inventory transactions are to be written. For example, either for the initiator or for the owner of the respective sales or inventory document.Possible values are:InitiatorOwner |
| cgcloud__Use_Built_In_Pricing__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionControls whether built-in pricing is used to or the whole pricing is done by a user exit.Possible values are:NoYes |
| cgcloud__Use_Customer_Document_TA_Type__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether the handling type of the customer is to be considered .The default value is false. |
| cgcloud__User_Roles__c | TypemultipicklistPropertiesCreate, Filter, Nillable, UpdateDescriptionUser roles that are assigned to the order template.NoteEnsure that the master picklist values exactly match the Technical Name of the permission sets. Enter the user value in Translation. For example, if CGCloud_Master_Data_Admin is the master picklist value, then Master Data Admin is the translated value.Possible values are:CGCloud_KAMCGCloud_Master_Data_AdminCGCloud_Retail_AdminCGCloud_Sales_UserCGCloud_Security_AdminCGCloud_SupervisorCGCloud_Tour_User |
| cgcloud__Valid_From__c | TypedatePropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionDate from which the entry is valid. |
| cgcloud__Valid_Thru__c | TypedatePropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionDate until which the entry is valid. |
| cgcloud__Wholesaler_Required__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether a wholesaler or broker reference is required for sales documents of this template.The default value is false. |
| cgcloud__Workflow__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the workflow.This is a relationship field.Relationship Namecgcloud__Workflow__rRelationship TypeLookupRefers Tocgcloud__Workflow__c |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[cgcloud\_\_Order\_Template\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_Order\_Template\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_Order\_Template\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the tracked fields of the object.

[cgcloud\_\_Order\_Template\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_Order\_Template\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Code Examples

```
CASE($User.cgcloud__Language_Postfix__c,
"Language1", cgcloud__Description_Language_1__c,
      "Language2", cgcloud__Description_Language_2__c,
      "Language3", cgcloud__Description_Language_3__c,
      "Language4", cgcloud__Description_Language_4__c,
      cgcloud__Description_Language_1__c)
```

## Related Topics

- cgcloud__Order_Template__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__Order_Template__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__Order_Template__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__Order_Template__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__Order_Template__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)

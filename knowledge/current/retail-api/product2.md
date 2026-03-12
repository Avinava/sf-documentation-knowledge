---
title: "Product2"
domain: retail-api
topic: product2
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:40.639Z
estimatedTokens: 5548
keywords: [Product2, product, company, sells, Custom, extend, standard, Consumer, Goods, Cloud, API, version, 55.0, later, Calls]
---

# Product2

> Represents a product that your company sells. Custom fields extend the
         standard Product object for use in Consumer Goods Cloud. This object is available in
      API version 55.0 and later.

# Product2

Represents a product that your company sells. Custom fields extend the standard Product object for use in Consumer Goods Cloud. This object is available in API version 55.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionA text description of this record. Label is Product Description. |
| DisplayUrl | TypeurlPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionURL leading to a specific version of a record in the linked external data source. |
| ExternalDataSourceId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the related external data source. |
| ExternalId | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique identifier of a record in the linked external data source. For example, ID #123. |
| Family | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionName of the product family associated with this record.Possible values are:None |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether this record is active (true) or not (false). Inactive Product2 records are hidden in many areas in the user interface. You can change the IsActive flag on a Product2 object as often as necessary. Label is Active.The default value is false. |
| IsArchived | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the product is archived.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this object. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this object. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. Default name of this record. Label is Product Name. |
| ProductCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDefault product code for this record. Your org defines the product code naming pattern. |
| QuantityUnitOfMeasure | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionUnit of the product; for example, kilograms, liters, or cases. This field comes with only one value (Each) so consider creating your own. The QuantityUnitOfMeasure field on ProductItem inherits this field’s values.Possible values are:Each |
| RecordTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIndicates the record type of the record.This field is a relationship field.Relationship NameRecordTypeRelationship TypeLookupRefers ToRecordType |
| StockKeepingUnit | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe SKU for the product. Use in tandem with or instead of the ProductCode field. For example, you can track the manufacturer’s identifying code in the Product Code field and assign the product a SKU when you resell it. |
| cgcloud__Asset_Template__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReferences to asset template.This field is a relationship field.Relationship Namecgcloud__Asset_Template__rRelationship TypeLookupRefers Tocgcloud__Asset_Template__c |
| cgcloud__Bill_Of_Material_Header_Code__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionHolds the Header code of the product, if it is a BOM component. For standard products the field will be empty. |
| cgcloud__Category__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIndicates the product category that this product record is referring to.Possible values are:BeveragesChipsDetergentFrozen—Frozen GoodsHygieneSnacks |
| cgcloud__Competitive_Product__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionMarks a product as a competitor's product.The default value is false. |
| cgcloud__Consumer_Goods_External_Product_Id__c | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionHolds the unique external id. |
| cgcloud__Consumer_Goods_Product_Code__c | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionStores the unique identification of a product. |
| cgcloud__Container_Size_Unit__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDescribes the unit of a container size.Possible values are:gallmlm³oz |
| cgcloud__Container_Size__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDescribes the numeric value for container size. |
| cgcloud__Container_Type__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDescribes the type of container of the product.Possible values are:BottleCanPlastic |
| cgcloud__Criteria_Text_0__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionHolds the Criteria in a text form. |
| cgcloud__Criteria_Text_1__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionHolds the Criteria in a text form. |
| cgcloud__Criteria_Text_2__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionHolds the Criteria in a text form. |
| cgcloud__Criteria_Text_3__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionHolds the Criteria in a text form. |
| cgcloud__Criteria_Text_4__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionHolds the Criteria in a text form. |
| cgcloud__Criteria_Text_5__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionHolds the Criteria in a text form. |
| cgcloud__Criteria_Text_6__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionHolds the Criteria in a text form. |
| cgcloud__Criteria_Text_7__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionHolds the Criteria in a text form. |
| cgcloud__Criteria_Text_8__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionHolds the Criteria in a text form. |
| cgcloud__Criteria_Text_9__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionHolds the Criteria in a text form. |
| cgcloud__Criterion_1_Product_Code__c | TypestringPropertiesFilter, Nillable, SortDescriptionProduct code belonging to Criterion_1_Product.This field is a calculated field.Formulacgcloud__Criterion_1_Product__r.cgcloud__Consumer_Goods_Product_Code__c |
| cgcloud__Criterion_1_Product_Description__c | TypestringPropertiesFilter, Nillable, SortDescriptionProduct description belonging to Criterion_1_Product.This field is a calculated field.Formulacgcloud__Criterion_1_Product__r.cgcloud__Description_1__c |
| cgcloud__Criterion_1_Product__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReferences the product in the hierarchy of the product which is on Product_Level 'Category'.This field is a relationship field.Relationship Namecgcloud__Criterion_1_Product__rRelationship TypeLookupRefers ToProduct2 |
| cgcloud__Criterion_2_Product_Code__c | TypestringPropertiesFilter, Nillable, SortDescriptionProduct code belonging to Criterion_2_Product.This field is a calculated field.Formulacgcloud__Criterion_2_Product__r.cgcloud__Consumer_Goods_Product_Code__c |
| cgcloud__Criterion_2_Product_Description__c | TypestringPropertiesFilter, Nillable, SortDescriptionProduct description belonging to Criterion_2_Product.This field is a calculated field.Formulacgcloud__Criterion_2_Product__r.cgcloud__Description_1__c |
| cgcloud__Criterion_2_Product__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReferences the product in the hierarchy of the product which is on Product_Level 'SubCategory'.This field is a relationship field.Relationship Namecgcloud__Criterion_2_Product__rRelationship TypeLookupRefers ToProduct2 |
| cgcloud__Criterion_3_Product_Code__c | TypestringPropertiesFilter, Nillable, SortDescriptionProduct code belonging to Criterion_3_Product.This field is a calculated field.Formulacgcloud__Criterion_3_Product__r.cgcloud__Consumer_Goods_Product_Code__c |
| cgcloud__Criterion_3_Product_Description__c | TypestringPropertiesFilter, Nillable, SortDescriptionProduct description belonging to Criterion_3_Product.This field is a calculated field.Formulacgcloud__Criterion_3_Product__r.cgcloud__Description_1__c |
| cgcloud__Criterion_3_Product__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReferences the product in the hierarchy of the product which is on Product_Level 'Brand'.This field is a relationship field.Relationship Namecgcloud__Criterion_3_Product__rRelationship TypeLookupRefers ToProduct2 |
| cgcloud__Criterion_4_Product_Code__c | TypestringPropertiesFilter, Nillable, SortDescriptionProduct code belonging to Criterion_4_Product.This field is a calculated field.Formulacgcloud__Criterion_4_Product__r.cgcloud__Consumer_Goods_Product_Code__c |
| cgcloud__Criterion_4_Product_Description__c | TypestringPropertiesFilter, Nillable, SortDescriptionProduct description belonging to Criterion_4_Product.This field is a calculated field.Formulacgcloud__Criterion_4_Product__r.cgcloud__Description_1__c |
| cgcloud__Criterion_4_Product__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReferences the product in the hierarchy of the product which is on Product_Level 'Flavor'.This field is a relationship field.Relationship Namecgcloud__Criterion_4_Product__rRelationship TypeLookupRefers ToProduct2 |
| cgcloud__Criterion_5_Product_Code__c | TypestringPropertiesFilter, Nillable, SortDescriptionProduct code belonging to Criterion_5_Product.This field is a calculated field.Formulacgcloud__Criterion_5_Product__r.cgcloud__Consumer_Goods_Product_Code__c |
| cgcloud__Criterion_5_Product_Description__c | TypestringPropertiesFilter, Nillable, SortDescriptionProduct description belonging to Criterion_5_Product.This field is a calculated field.Formulacgcloud__Criterion_5_Product__r.cgcloud__Description_1__c |
| cgcloud__Criterion_5_Product__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReferences the product in the hierarchy of the product which is on Product_Level 'Package'.This field is a relationship field.Relationship Namecgcloud__Criterion_5_Product__rRelationship TypeLookupRefers ToProduct2 |
| cgcloud__Criterion_6_Product_Code__c | TypestringPropertiesFilter, Nillable, SortDescriptionProduct code belonging to Criterion_6_Product.This field is a calculated field.Formulacgcloud__Criterion_6_Product__r.cgcloud__Consumer_Goods_Product_Code__c |
| cgcloud__Criterion_6_Product_Description__c | TypestringPropertiesFilter, Nillable, SortDescriptionProduct description belonging to Criterion_6_Product.This field is a calculated field.Formulacgcloud__Criterion_6_Product__r.cgcloud__Description_1__c |
| cgcloud__Criterion_6_Product__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReferences the product in the hierarchy of the product which is on Product_Level 'Product'.This field is a relationship field.Relationship Namecgcloud__Criterion_6_Product__rRelationship TypeLookupRefers ToProduct2 |
| cgcloud__Custom_Sort__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionUse to customize the sorting order of the products. Is unique. |
| cgcloud__Delivery_Valid_From__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDelivery status valid from date. |
| cgcloud__Delivery_Valid_Thru__c | TypedatePropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionDelivery status valid thru date. |
| cgcloud__Description_1_Language_1__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionHolds the first description of language 1. |
| cgcloud__Description_1_Language_2__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionHolds the first description of language 2. |
| cgcloud__Description_1_Language_3__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionHolds the first description of language 3. |
| cgcloud__Description_1_Language_4__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionHolds the first description of language 4. |
| cgcloud__Description_1__c | TypestringPropertiesFilter, Nillable, SortDescriptionDescription 1 based on the user specific language.This field is a calculated field.FormulaCASE($User.cgcloud__Language_Postfix__c, "Language1", cgcloud__Description_1_Language_1__c, "Language2", BLANKVALUE(cgcloud__Description_1_Language_2__c,cgcloud__Description_1_Language_1__c), "Language3", BLANKVALUE(cgcloud__Description_1_Language_3__c,cgcloud__Description_1_Language_1__c), "Language4", BLANKVALUE(cgcloud__Description_1_Language_4__c,cgcloud__Description_1_Language_1__c), cgcloud__Description_1_Language_1__c) |
| cgcloud__Description_2_Language_1__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionHolds the second description of language 1. |
| cgcloud__Description_2_Language_2__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionHolds the second description of language 2. |
| cgcloud__Description_2_Language_3__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionHolds the second description of language 3. |
| cgcloud__Description_2_Language_4__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionHolds the second description of language 4. |
| cgcloud__Description_2__c | TypestringPropertiesFilter, Nillable, SortDescriptionDescription 2 based on the user specific language.This field is a calculated field.FormulaCASE($User.cgcloud__Language_Postfix__c, "Language1", cgcloud__Description_2_Language_1__c, "Language2", BLANKVALUE(cgcloud__Description_2_Language_2__c,cgcloud__Description_2_Language_1__c), "Language3", BLANKVALUE(cgcloud__Description_2_Language_3__c,cgcloud__Description_2_Language_1__c), "Language4", BLANKVALUE(cgcloud__Description_2_Language_4__c,cgcloud__Description_2_Language_1__c), cgcloud__Description_2_Language_1__c) |
| cgcloud__Estimated_Value__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionHolds the estimated value of the asset. |
| cgcloud__Field_Valid_From__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionField status valid from date. |
| cgcloud__Field_Valid_Thru__c | TypedatePropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionField status valid thru date. |
| cgcloud__Fund_Valid_From__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionFund Role status valid from date. |
| cgcloud__Fund_Valid_Thru__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionFund Role status valid thru date. |
| cgcloud__GTIN__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionUniversal Product Number (UPC) number of the product. |
| cgcloud__Height__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionHolds the height of the asset. |
| cgcloud__Is_Bill_Of_Material_Label__c | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionDefines a secondary label for the Is_Bill_Of_Material__c field.This field is a calculated field.Formulacgcloud__Is_Bill_Of_Material__c |
| cgcloud__Is_Bill_Of_Material__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionBoolean flag to identify BOM products.The default value is false. |
| cgcloud__KAM_Product__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReferences to the specifics for a product on the lowest level of the product hierarchy, which is the corresponding product on planning level (Product Price Group level).This field is a relationship field.Relationship Namecgcloud__KAM_Product__rRelationship TypeLookupRefers ToProduct2 |
| cgcloud__KAM_Valid_From__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionKAM status valid from date. |
| cgcloud__KAM_Valid_Thru__c | TypedatePropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionKAM status valid thru date. |
| cgcloud__Manufacturer_Item_Number__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNumber assigned to the manufacturer. |
| cgcloud__Manufacturer__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionName of the manufacturer. |
| cgcloud__New_Item_Valid_From__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNew Item status valid from date. |
| cgcloud__New_Item_Valid_Thru__c | TypedatePropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionNew Item status valid thru date. |
| cgcloud__Order_Ability__c | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionThis is an "apex roll up summary field" to identify the Order able products only. Order Able products are identified by the units of measure which have Order Ability set to true. |
| cgcloud__Pack_Size_Unit__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionUnit of the product pack size.Possible values are:boxpk |
| cgcloud__Pack_Size__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionNumeric value for the product pack size. |
| cgcloud__Power_Supply_Connected__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether the asset requires connection to a power supply.The default value is false. |
| cgcloud__Product_Form__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDefines the state of the product.Possible values are:LiquidSolid |
| cgcloud__Product_Level__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionDescribes the Product Level.Possible values are:BrandCategoryFlavor—Sub BrandPackage—Product Price GroupProductSubCategoryThe default value is Product. |
| cgcloud__Product_Short_Code__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAdditional short product identifier. |
| cgcloud__Product_Template__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReferences to product template.This field is a relationship field.Relationship Namecgcloud__Product_Template__rRelationship TypeLookupRefers Tocgcloud__Product_Template__c |
| cgcloud__Product_Type__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of the product.Possible values are:Advertising—Advertising MaterialAssetTypeCommodityCountingGroupEmptyService |
| cgcloud__Rounding_Rule_Validation__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThis is an "apex roll up summary field". Internally required. |
| cgcloud__Sales_Org__c | TypestringPropertiesFilter, Nillable, SortDescriptionDescribes the sales org which the product belongs to.This field is a calculated field.FormulaTEXT(cgcloud__Product_Template__r.cgcloud__Sales_Org__c) |
| cgcloud__Sell_In_Code__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionHolds the Sell In Code of the product. |
| cgcloud__Sell_Out_Code__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionHolds the Sell Out Code of the product. |
| cgcloud__Short_Description_Language_1__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionHolds the short description of language 1. |
| cgcloud__Short_Description_Language_2__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionHolds the short description of language 2. |
| cgcloud__Short_Description_Language_3__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionHolds the short description of language 3. |
| cgcloud__Short_Description_Language_4__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionHolds the short description of language 4. |
| cgcloud__Short_Description__c | TypestringPropertiesFilter, Nillable, SortDescriptionShort description based on the user specific language.This field is a calculated field.FormulaCASE($User.cgcloud__Language_Postfix__c, "Language1", cgcloud__Short_Description_Language_1__c, "Language2", BLANKVALUE(cgcloud__Short_Description_Language_2__c,cgcloud__Short_Description_Language_1__c), "Language3", BLANKVALUE(cgcloud__Short_Description_Language_3__c,cgcloud__Short_Description_Language_1__c), "Language4", BLANKVALUE(cgcloud__Short_Description_Language_4__c,cgcloud__Short_Description_Language_1__c), cgcloud__Short_Description_Language_1__c) |
| cgcloud__Size__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionHolds the size of the asset. |
| cgcloud__State__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionState of the product.Possible values are:0—Preparation1—Plan2—Check3—Startup4—Active5—Paused6—Phase Out7—Remainders8—Passive9—Deleted |
| cgcloud__Tax_Classification__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionTax classification of the product.Possible values are:f—Fulln—Normalr—Reduced |
| cgcloud__Transfer_Record_Identifier__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIdentifies the products for the promotion transfer process. |
| cgcloud__Weight__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionHolds the weight of the asset. |

## Code Examples

```
CASE($User.cgcloud__Language_Postfix__c,
"Language1", cgcloud__Description_1_Language_1__c,
"Language2", BLANKVALUE(cgcloud__Description_1_Language_2__c,cgcloud__Description_1_Language_1__c),
"Language3", BLANKVALUE(cgcloud__Description_1_Language_3__c,cgcloud__Description_1_Language_1__c),
"Language4", BLANKVALUE(cgcloud__Description_1_Language_4__c,cgcloud__Description_1_Language_1__c),
cgcloud__Description_1_Language_1__c)
```

```
CASE($User.cgcloud__Language_Postfix__c,
"Language1", cgcloud__Description_2_Language_1__c,
"Language2", BLANKVALUE(cgcloud__Description_2_Language_2__c,cgcloud__Description_2_Language_1__c),
"Language3", BLANKVALUE(cgcloud__Description_2_Language_3__c,cgcloud__Description_2_Language_1__c),
"Language4", BLANKVALUE(cgcloud__Description_2_Language_4__c,cgcloud__Description_2_Language_1__c),
cgcloud__Description_2_Language_1__c)
```

```
CASE($User.cgcloud__Language_Postfix__c,
"Language1", cgcloud__Short_Description_Language_1__c,
"Language2", BLANKVALUE(cgcloud__Short_Description_Language_2__c,cgcloud__Short_Description_Language_1__c),
"Language3", BLANKVALUE(cgcloud__Short_Description_Language_3__c,cgcloud__Short_Description_Language_1__c),
"Language4", BLANKVALUE(cgcloud__Short_Description_Language_4__c,cgcloud__Short_Description_Language_1__c),
cgcloud__Short_Description_Language_1__c)
```

---
title: "BulkProductDetailsRepresentation Class"
domain: revenue-cloud
topic: bulkproductdetailsrepresentation-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:04.706Z
estimatedTokens: 6313
keywords: [BulkProductDetailsRepresentation, Get, details, multiple, product, definitions, single, request., used, bulk, retrieval, operations, Product, Discovery., apexObj, additionalFields, attributeCategories, attributes, availabilityDate, catalogs]
---

# BulkProductDetailsRepresentation Class

> Get the details of multiple product definitions in a single request. This class is used for bulk product retrieval operations in Product Discovery.

# BulkProductDetailsRepresentation Class

Get the details of multiple product definitions in a single request. This class is used for bulk product retrieval operations in Product Discovery.

## Namespace

[runtime\_industries\_cpq](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_namespace_runtime_industries_cpq.htm "The runtime_industries_cpq namespace provides classes and methods to search products or to manage products, catalogs, and categories.")

-   **[BulkProductDetailsRepresentation Constructor](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_BulkProductDetailsRepresentation.htm#apex_runtime_industries_cpq_BulkProductDetailsRepresentation_constructors)**
    Learn more about the constructors that are available with the BulkProductDetailsRepresentation class.
-   **[BulkProductDetailsRepresentation Properties](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_BulkProductDetailsRepresentation.htm#apex_runtime_industries_cpq_BulkProductDetailsRepresentation_properties)**
    Contains properties to include details of product definitions retrieved in bulk operations.

## BulkProductDetailsRepresentation Constructor

Learn more about the constructors that are available with the BulkProductDetailsRepresentation class.

The BulkProductDetailsRepresentation class includes these constructors.

-   **[BulkProductDetailsRepresentation(apexObj)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_BulkProductDetailsRepresentation.htm#apex_runtime_industries_cpq_BulkProductDetailsRepresentation_ctor)**
    Constructor to create a BulkProductDetailsRepresentation instance from a ConnectApi CPQProductDetailsOutputRepresentation object.
-   **[BulkProductDetailsRepresentation()](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_BulkProductDetailsRepresentation.htm#apex_runtime_industries_cpq_BulkProductDetailsRepresentation_ctor_2)**
    Default constructor to create an empty BulkProductDetailsRepresentation instance.

### BulkProductDetailsRepresentation(apexObj)

Constructor to create a BulkProductDetailsRepresentation instance from a ConnectApi CPQProductDetailsOutputRepresentation object.

#### Signature

public BulkProductDetailsRepresentation(ConnectApi.CPQProductDetailsOutputRepresentation apexObj)

#### Parameters

apexObj

Type: ConnectApi.CPQProductDetailsOutputRepresentation

The ConnectApi product details representation object to convert to BulkProductDetailsRepresentation.

### BulkProductDetailsRepresentation()

Default constructor to create an empty BulkProductDetailsRepresentation instance.

#### Signature

public BulkProductDetailsRepresentation()

## BulkProductDetailsRepresentation Properties

Contains properties to include details of product definitions retrieved in bulk operations.

The BulkProductDetailsRepresentation class includes these properties.

-   **[additionalFields](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_BulkProductDetailsRepresentation.htm#apex_runtime_industries_cpq_BulkProductDetailsRepresentation_additionalFields)**
    Get the list of additionalfield.
-   **[attributeCategories](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_BulkProductDetailsRepresentation.htm#apex_runtime_industries_cpq_BulkProductDetailsRepresentation_attributeCategories)**
    Get the list of attributecategorie.
-   **[attributes](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_BulkProductDetailsRepresentation.htm#apex_runtime_industries_cpq_BulkProductDetailsRepresentation_attributes)**
    Get the list of attribute.
-   **[availabilityDate](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_BulkProductDetailsRepresentation.htm#apex_runtime_industries_cpq_BulkProductDetailsRepresentation_availabilityDate)**
    Get the availability date.
-   **[catalogs](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_BulkProductDetailsRepresentation.htm#apex_runtime_industries_cpq_BulkProductDetailsRepresentation_catalogs)**
    Get the list of catalog.
-   **[childProducts](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_BulkProductDetailsRepresentation.htm#apex_runtime_industries_cpq_BulkProductDetailsRepresentation_childProducts)**
    Get the list of childproduct.
-   **[configureDuringSale](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_BulkProductDetailsRepresentation.htm#apex_runtime_industries_cpq_BulkProductDetailsRepresentation_configureDuringSale)**
    Get the configureduringsale value.
-   **[description](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_BulkProductDetailsRepresentation.htm#apex_runtime_industries_cpq_BulkProductDetailsRepresentation_description)**
    Get the description of the bulkproductdetails.
-   **[discontinuedDate](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_BulkProductDetailsRepresentation.htm#apex_runtime_industries_cpq_BulkProductDetailsRepresentation_discontinuedDate)**
    Get the discontinued date.
-   **[displayUrl](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_BulkProductDetailsRepresentation.htm#apex_runtime_industries_cpq_BulkProductDetailsRepresentation_displayUrl)**
    Get the displayurl value.
-   **[endOfLifeDate](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_BulkProductDetailsRepresentation.htm#apex_runtime_industries_cpq_BulkProductDetailsRepresentation_endOfLifeDate)**
    Get the endoflife date.
-   **[isActive](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_BulkProductDetailsRepresentation.htm#apex_runtime_industries_cpq_BulkProductDetailsRepresentation_isActive)**
    Indicates whether the item is active.
-   **[isAssetizable](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_BulkProductDetailsRepresentation.htm#apex_runtime_industries_cpq_BulkProductDetailsRepresentation_isAssetizable)**
    Indicates whether assetizable is true or false.
-   **[isComponentRequired](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_BulkProductDetailsRepresentation.htm#apex_runtime_industries_cpq_BulkProductDetailsRepresentation_isComponentRequired)**
    Indicates whether componentrequired is true or false.
-   **[id](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_BulkProductDetailsRepresentation.htm#apex_runtime_industries_cpq_BulkProductDetailsRepresentation_id)**
    Get the ID of the product.
-   **[isDefaultComponent](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_BulkProductDetailsRepresentation.htm#apex_runtime_industries_cpq_BulkProductDetailsRepresentation_isDefaultComponent)**
    Indicates whether defaultcomponent is true or false.
-   **[isQuantityEditable](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_BulkProductDetailsRepresentation.htm#apex_runtime_industries_cpq_BulkProductDetailsRepresentation_isQuantityEditable)**
    Indicates whether quantityeditable is true or false.
-   **[isSoldOnlyWithOtherProds](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_BulkProductDetailsRepresentation.htm#apex_runtime_industries_cpq_BulkProductDetailsRepresentation_isSoldOnlyWithOtherProds)**
    Indicates whether soldonlywithotherprods is true or false.
-   **[name](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_BulkProductDetailsRepresentation.htm#apex_runtime_industries_cpq_BulkProductDetailsRepresentation_name)**
    Get the name of the bulkproductdetails.
-   **[nodeType](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_BulkProductDetailsRepresentation.htm#apex_runtime_industries_cpq_BulkProductDetailsRepresentation_nodeType)**
    Get the nodetype value.
-   **[prices](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_BulkProductDetailsRepresentation.htm#apex_runtime_industries_cpq_BulkProductDetailsRepresentation_prices)**
    Get the list of price.
-   **[productClassification](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_BulkProductDetailsRepresentation.htm#apex_runtime_industries_cpq_BulkProductDetailsRepresentation_productClassification)**
    Get the productclassification value.
-   **[productCode](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_BulkProductDetailsRepresentation.htm#apex_runtime_industries_cpq_BulkProductDetailsRepresentation_productCode)**
    Get the productcode value.
-   **[productComponentGroups](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_BulkProductDetailsRepresentation.htm#apex_runtime_industries_cpq_BulkProductDetailsRepresentation_productComponentGroups)**
    Get the list of productcomponentgroup.
-   **[productInformation](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_BulkProductDetailsRepresentation.htm#apex_runtime_industries_cpq_BulkProductDetailsRepresentation_productInformation)**
    Get the productinformation value.
-   **[productPricingInformation](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_BulkProductDetailsRepresentation.htm#apex_runtime_industries_cpq_BulkProductDetailsRepresentation_productPricingInformation)**
    Get the productpricinginformation value.
-   **[productQuantity](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_BulkProductDetailsRepresentation.htm#apex_runtime_industries_cpq_BulkProductDetailsRepresentation_productQuantity)**
    Get the productquantity value.
-   **[productRelatedComponent](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_BulkProductDetailsRepresentation.htm#apex_runtime_industries_cpq_BulkProductDetailsRepresentation_productRelatedComponent)**
    Get the productrelatedcomponent value.
-   **[productSellingModelOptions](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_BulkProductDetailsRepresentation.htm#apex_runtime_industries_cpq_BulkProductDetailsRepresentation_productSellingModelOptions)**
    Get the list of productsellingmodeloption.
-   **[productSpecificationType](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_BulkProductDetailsRepresentation.htm#apex_runtime_industries_cpq_BulkProductDetailsRepresentation_productSpecificationType)**
    Get the productspecificationtype value.
-   **[productType](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_BulkProductDetailsRepresentation.htm#apex_runtime_industries_cpq_BulkProductDetailsRepresentation_productType)**
    Get the producttype value.
-   **[qualificationContext](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_BulkProductDetailsRepresentation.htm#apex_runtime_industries_cpq_BulkProductDetailsRepresentation_qualificationContext)**
    Get the qualificationcontext value.
-   **[status](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_BulkProductDetailsRepresentation.htm#apex_runtime_industries_cpq_BulkProductDetailsRepresentation_status)**
    Get the status of the bulkproductdetails.
-   **[unitOfMeasure](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_BulkProductDetailsRepresentation.htm#apex_runtime_industries_cpq_BulkProductDetailsRepresentation_unitOfMeasure)**
    Get the unitofmeasure value.

### additionalFields

Get the list of additionalfield.

#### Signature

public List<runtime\_industries\_cpq.AdditionalFieldsWrapper> additionalFields {get; set;}

#### Property Value

Type: List<runtime\_industries\_cpq.AdditionalFieldsWrapper>

### attributeCategories

Get the list of attributecategorie.

#### Signature

public List<runtime\_industries\_cpq.AttributeCategoryOutputRepresentation> attributeCategories {get; set;}

#### Property Value

Type: List<[runtime\_industries\_cpq.AttributeCategoryOutputRepresentation](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_AttributeCategoryOutputRepresentation.htm#apex_class_runtime_industries_cpq_AttributeCategoryOutputRepresentation "Stores details of an attribute such as code, description, usage type, and so on.")\>

### attributes

Get the list of attribute.

#### Signature

public List<runtime\_industries\_cpq.ProductAttributeOutputRepresentation> attributes {get; set;}

#### Property Value

Type: List<[runtime\_industries\_cpq.ProductAttributeOutputRepresentation](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ProductAttributeOutputRepresentation.htm#apex_class_runtime_industries_cpq_ProductAttributeOutputRepresentation "Contains details about the attribute in a product configuration.")\>

### availabilityDate

Get the availability date.

#### Signature

public Datetime availabilityDate {get; set;}

#### Property Value

Type: Datetime

### catalogs

Get the list of catalog.

#### Signature

public List<runtime\_industries\_cpq.CatalogOutputRepresentation> catalogs {get; set;}

#### Property Value

Type: List<[runtime\_industries\_cpq.CatalogOutputRepresentation](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_CatalogOutputRepresentation.htm#apex_class_runtime_industries_cpq_CatalogOutputRepresentation "Contains properties to store details of a catalog definition.")\>

### childProducts

Get the list of childproduct.

#### Signature

public List<runtime\_industries\_cpq.BulkProductDetailsRepresentation> childProducts {get; set;}

#### Property Value

Type: List<[runtime\_industries\_cpq.BulkProductDetailsRepresentation](#apex_class_runtime_industries_cpq_BulkProductDetailsRepresentation "Get the details of multiple product definitions in a single request. This class is used for bulk product retrieval operations in Product Discovery.")\>

### configureDuringSale

Get the configureduringsale value.

#### Signature

public String configureDuringSale {get; set;}

#### Property Value

Type: String

### description

Get the description of the bulkproductdetails.

#### Signature

public String description {get; set;}

#### Property Value

Type: String

### discontinuedDate

Get the discontinued date.

#### Signature

public Datetime discontinuedDate {get; set;}

#### Property Value

Type: Datetime

### displayUrl

Get the displayurl value.

#### Signature

public String displayUrl {get; set;}

#### Property Value

Type: String

### endOfLifeDate

Get the endoflife date.

#### Signature

public Datetime endOfLifeDate {get; set;}

#### Property Value

Type: Datetime

### isActive

Indicates whether the item is active.

#### Signature

public Boolean isActive {get; set;}

#### Property Value

Type: Boolean

### isAssetizable

Indicates whether assetizable is true or false.

#### Signature

public Boolean isAssetizable {get; set;}

#### Property Value

Type: Boolean

### isComponentRequired

Indicates whether componentrequired is true or false.

#### Signature

public Boolean isComponentRequired {get; set;}

#### Property Value

Type: Boolean

### id

Get the ID of the product.

#### Signature

public String id {get; set;}

#### Property Value

Type: String

### isDefaultComponent

Indicates whether defaultcomponent is true or false.

#### Signature

public Boolean isDefaultComponent {get; set;}

#### Property Value

Type: Boolean

### isQuantityEditable

Indicates whether quantityeditable is true or false.

#### Signature

public Boolean isQuantityEditable {get; set;}

#### Property Value

Type: Boolean

### isSoldOnlyWithOtherProds

Indicates whether soldonlywithotherprods is true or false.

#### Signature

public Boolean isSoldOnlyWithOtherProds {get; set;}

#### Property Value

Type: Boolean

### name

Get the name of the bulkproductdetails.

#### Signature

public String name {get; set;}

#### Property Value

Type: String

### nodeType

Get the nodetype value.

#### Signature

public String nodeType {get; set;}

#### Property Value

Type: String

### prices

Get the list of price.

#### Signature

public List<runtime\_industries\_cpq.ProductPricesOutputRepresentation> prices {get; set;}

#### Property Value

Type: List<[runtime\_industries\_cpq.ProductPricesOutputRepresentation](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ProductPricesOutputRepresentation.htm#apex_class_runtime_industries_cpq_ProductPricesOutputRepresentation "Get the price details of a product.")\>

### productClassification

Get the productclassification value.

#### Signature

public runtime\_industries\_cpq.ProductClassificationOutputRepresentation productClassification {get; set;}

#### Property Value

Type: [runtime\_industries\_cpq.ProductClassificationOutputRepresentation](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ProductClassificationOutputRepresentation.htm#apex_class_runtime_industries_cpq_ProductClassificationOutputRepresentation "Get details of the product classification in a product configuration.")

### productCode

Get the productcode value.

#### Signature

public String productCode {get; set;}

#### Property Value

Type: String

### productComponentGroups

Get the list of productcomponentgroup.

#### Signature

public List<runtime\_industries\_cpq.ProductComponentGroupRepresentation> productComponentGroups {get; set;}

#### Property Value

Type: List<[runtime\_industries\_cpq.ProductComponentGroupRepresentation](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ProductComponentGroupRepresentation.htm#apex_class_runtime_industries_cpq_ProductComponentGroupRepresentation "Represents a product component group used in bulk product operations. This class is similar to ProductComponentGroupOutputRepresentation but is used specifically for bulk product detail representations where components are represented as BulkProductDetailsRepresentation objects.")\>

### productInformation

Get the productinformation value.

#### Signature

public String productInformation {get; set;}

#### Property Value

Type: String

### productPricingInformation

Get the productpricinginformation value.

#### Signature

public String productPricingInformation {get; set;}

#### Property Value

Type: String

### productQuantity

Get the productquantity value.

#### Signature

public runtime\_industries\_cpq.ProductQuantityOutputRepresentation productQuantity {get; set;}

#### Property Value

Type: [runtime\_industries\_cpq.ProductQuantityOutputRepresentation](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ProductQuantityOutputRepresentation.htm#apex_class_runtime_industries_cpq_ProductQuantityOutputRepresentation "Represents the quantity constraints and current quantity for a product in the product discovery context.")

### productRelatedComponent

Get the productrelatedcomponent value.

#### Signature

public runtime\_industries\_cpq.ProductRelatedComponentOutputRepresentation productRelatedComponent {get; set;}

#### Property Value

Type: [runtime\_industries\_cpq.ProductRelatedComponentOutputRepresentation](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ProductRelatedComponentOutputRepresentation.htm#apex_class_runtime_industries_cpq_ProductRelatedComponentOutputRepresentation "Represents a related component product in a bundle or product relationship, including component configuration details such as quantity constraints, required status, and relationship metadata.")

### productSellingModelOptions

Get the list of productsellingmodeloption.

#### Signature

public List<runtime\_industries\_cpq.ProductSellingModelOptionOutputRepresentation> productSellingModelOptions {get; set;}

#### Property Value

Type: List<[runtime\_industries\_cpq.ProductSellingModelOptionOutputRepresentation](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ProductSellingModelOptionOutputRepresentation.htm#apex_class_runtime_industries_cpq_ProductSellingModelOptionOutputRepresentation "Represents a selling model option available for a product, which defines how the product can be sold (such as subscription, one-time, or usage-based).")\>

### productSpecificationType

Get the productspecificationtype value.

#### Signature

public runtime\_industries\_cpq.ProductSpecificationTypeOutputRepresentation productSpecificationType {get; set;}

#### Property Value

Type: [runtime\_industries\_cpq.ProductSpecificationTypeOutputRepresentation](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ProductSpecificationTypeOutputRepresentation.htm#apex_class_runtime_industries_cpq_ProductSpecificationTypeOutputRepresentation "Represents a product specification type that defines the structure and attributes available for configuring a product.")

### productType

Get the producttype value.

#### Signature

public String productType {get; set;}

#### Property Value

Type: String

### qualificationContext

Get the qualificationcontext value.

#### Signature

public runtime\_industries\_cpq.QualificationContextOutputRepresentation qualificationContext {get; set;}

#### Property Value

Type: [runtime\_industries\_cpq.QualificationContextOutputRepresentation](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_QualificationContextOutputRepresentation.htm#apex_class_runtime_industries_cpq_QualificationContextOutputRepresentation "Represents the context information used for product qualification, including account, opportunity, and other relevant context data for determining product eligibility.")

### status

Get the status of the bulkproductdetails.

#### Signature

public String status {get; set;}

#### Property Value

Type: String

### unitOfMeasure

Get the unitofmeasure value.

#### Signature

public runtime\_industries\_cpq.UnitOfMeasureOutputRepresentation unitOfMeasure {get; set;}

#### Property Value

Type: [runtime\_industries\_cpq.UnitOfMeasureOutputRepresentation](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_UnitOfMeasureOutputRepresentation.htm#apex_class_runtime_industries_cpq_UnitOfMeasureOutputRepresentation "Represents the unit of measure for a product. This class contains information about how product quantities are measured, including the unit code, name, scale, and rounding method.")

## Related Topics

- runtime_industries_cpq (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_namespace_runtime_industries_cpq.htm)
- BulkProductDetailsRepresentation Constructor (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_BulkProductDetailsRepresentation.htm)
- BulkProductDetailsRepresentation Properties (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_BulkProductDetailsRepresentation.htm)
- BulkProductDetailsRepresentation(apexObj) (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_BulkProductDetailsRepresentation.htm)
- BulkProductDetailsRepresentation() (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_BulkProductDetailsRepresentation.htm)
- additionalFields (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_BulkProductDetailsRepresentation.htm)
- attributeCategories (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_BulkProductDetailsRepresentation.htm)
- attributes (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_BulkProductDetailsRepresentation.htm)
- availabilityDate (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_BulkProductDetailsRepresentation.htm)
- catalogs (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_BulkProductDetailsRepresentation.htm)

import { ContentItem, Fields } from 'kentico-cloud-delivery-typescript-sdk';

/**
 * This class was generated by 'kentico-cloud-model-generator-utility' module.
 * You can substitute instances of 'IContentItem' with a model defined in other class
 * to get access to all properties. This is applicable only if you know what item type the field contains.
 */
export class Testimonial extends ContentItem {

    public photo: Fields.AssetsField;
    public testimonial: Fields.RichTextField;
    public name: Fields.TextField;
    public occupation: Fields.TextField;
    public taxonomy: Fields.TaxonomyField;
    
}
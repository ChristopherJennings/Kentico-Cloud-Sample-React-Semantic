import { ContentItem, Fields } from 'kentico-cloud-delivery-typescript-sdk';

/**
 * This class was generated by 'kentico-cloud-model-generator-utility' module.
 * You can substitute instances of 'IContentItem' with a model defined in other class
 * to get access to all properties. This is applicable only if you know what item type the field contains.
 */
export class Blog extends ContentItem {

    public title: Fields.TextField;
    public publicationDate: Fields.DateTimeField;
    public teaserImage: Fields.AssetsField;
    public summary: Fields.RichTextField;
    public bodyCopy: Fields.RichTextField;
    public metaKeywords: Fields.TextField;
    public metaDescription: Fields.TextField;
    
    constructor() {
        super({
            propertyResolver: ((fieldName: string) => { 
                if (fieldName === 'publication_date') {
                    return 'publicationDate';
                }

                if (fieldName === 'teaser_image') {
                    return 'teaserImage';
                }

                if (fieldName === 'body_copy') {
                    return 'bodyCopy';
                }

                if (fieldName === 'meta_keywords') {
                    return 'metaKeywords';
                }

                if (fieldName === 'meta_description') {
                    return 'metaDescription';
                }

                return fieldName;
            })
        });    
    }
    
}
import { DeliveryClient, DeliveryClientConfig, TypeResolver } from 'kentico-cloud-delivery-typescript-sdk';

import { Home } from '../models/home';
import { HeroUnit } from '../models/heroUnit';
import { Feature } from '../models/feature';
import { Testimonial } from '../models/testimonial';
import { Event } from '../models/event';
import { Blog } from '../models/blog';

export function KenticoCloudClient() {
    let projectId = '420a5669-0c05-4ca4-a79c-84becc5a5b12';

    let typeResolvers: TypeResolver[] = [
        new TypeResolver('home', () => new Home()),
        new TypeResolver('hero_unit', () => new HeroUnit()),
        new TypeResolver('feature', () => new Feature()),
        new TypeResolver('testimonial', () => new Testimonial()),
        new TypeResolver('event', () => new Event()),
        new TypeResolver('blog', () => new Blog()),
    ];

    return new DeliveryClient(
        new DeliveryClientConfig(projectId, typeResolvers)
    );
}

export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields:[
        {
            name: 'image', // in the data base
            title: 'Image',// coulum
            type: 'array',// data type of colum
            of: [{type: 'image'}],
            options: {
                hotspot: true //look in the docs of sanity
            }
        },
        {
            name:'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug', // unique idetfiner in sanity
            options: {
                source: 'name',
                maxLength: 90,
            }
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number'
        },
        {
            name: 'details',
            title: 'Details',
            type: 'string'
        }
    ]
}
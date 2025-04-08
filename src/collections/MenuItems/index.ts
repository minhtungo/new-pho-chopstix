import type { CollectionConfig } from 'payload';

import { authenticated } from '@/access/authenticated';

export const Menu: CollectionConfig = {
  slug: 'menu-items',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['itemNumber', 'name', 'category', 'basePrice'],
  },
  access: {
    admin: authenticated,
    create: authenticated,
    delete: authenticated,
    read: authenticated,
    update: authenticated,
  },
  fields: [
    {
      name: 'itemNumber',
      type: 'text',
      required: true,
      admin: {
        description: 'Item number (e.g. "01", "02")',
      },
    },
    {
      name: 'name',
      type: 'text',
      required: true,
      admin: {
        description: 'Item name (e.g. "Deep Fried Spring Roll")',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      admin: {
        description: 'Item description',
      },
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'menu-categories',
      required: true,
      admin: {
        description: 'Which category does this item belong to?',
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Food image',
      },
    },
    {
      name: 'pricingType',
      type: 'radio',
      required: true,
      options: [
        {
          label: 'Single Price',
          value: 'single',
        },
        {
          label: 'Multiple Sizes',
          value: 'sizes',
        },
        {
          label: 'Variations',
          value: 'variations',
        },
      ],
      defaultValue: 'single',
      admin: {
        description: 'Choose pricing structure',
      },
    },
    {
      name: 'basePrice',
      type: 'number',
      admin: {
        description: 'Single price or starting price',
        condition: (data) => data.pricingType === 'single',
      },
    },
    {
      name: 'sizePrices',
      type: 'array',
      admin: {
        description: 'Prices for different sizes (S, L, XL, etc.)',
        condition: (data) => data.pricingType === 'sizes',
      },
      fields: [
        {
          name: 'size',
          type: 'text',
          required: true,
        },
        {
          name: 'price',
          type: 'number',
          required: true,
        },
      ],
    },

    {
      name: 'options',
      type: 'group',
      admin: {
        description: 'Additional options like proteins, sauces, etc.',
      },
      fields: [
        {
          name: 'hasOptions',
          type: 'checkbox',
          defaultValue: false,
        },
        {
          name: 'optionTitle',
          type: 'text',
          admin: {
            condition: (data) => data?.options?.hasOptions,
            description: 'Title for options (e.g. "Your Choice of:", "Pick your sauce")',
          },
        },
        {
          name: 'optionsList',
          type: 'array',
          admin: {
            condition: (data) => data?.options?.hasOptions,
          },
          fields: [
            {
              name: 'name',
              type: 'text',
              required: true,
            },
            {
              name: 'priceAddition',
              type: 'number',
              admin: {
                description: 'Additional cost (if any)',
              },
            },
          ],
        },
      ],
    },
    {
      name: 'note',
      type: 'text',
      admin: {
        description: 'Any additional notes (e.g. "Vietnamese spicy sate sauce $1 extra")',
      },
    },
  ],
};

import type { CollectionConfig } from 'payload';

import { authenticated } from '@/access/authenticated';

export const MenuCategories: CollectionConfig = {
  slug: 'menu-categories',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'slug', 'order'],
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
      name: 'name',
      type: 'text',
      required: true,
      admin: {
        description: 'Category name (e.g. "APPETIZER", "NOODLE SOUP - PHỞ")',
      },
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'URL-friendly version of the name (e.g. "appetizers")',
      },
    },
    {
      name: 'order',
      type: 'number',
      admin: {
        description: 'Display order on the menu (lower numbers appear first)',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      admin: {
        description: 'Optional category description',
      },
    },
  ],
};

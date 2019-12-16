import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Recipe extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'string',
    required: true,
  })
  description: string;

  @property({
    type: 'array',
    itemType: 'string',
    required: true,
  })
  ingredients: string[];

  @property({
    type: 'string',
    required: true,
  })
  cookingTime: string;

  @property({
    type: 'string',
    required: true,
  })
  difficulty: string;

  @property({
    type: 'boolean',
    required: true,
    default: false,
  })
  isFavorite: boolean;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Recipe>) {
    super(data);
  }
}

export interface RecipeRelations {
  // describe navigational properties here
}

export type RecipeWithRelations = Recipe & RecipeRelations;

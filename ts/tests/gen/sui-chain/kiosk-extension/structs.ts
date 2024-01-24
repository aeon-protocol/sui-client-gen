import {
  PhantomTypeArgument,
  Reified,
  ReifiedPhantomTypeArgument,
  ToField,
  ToPhantomTypeArgument,
  ToTypeStr,
  assertFieldsWithTypesArgsMatch,
  assertReifiedTypeArgsMatch,
  decodeFromFields,
  decodeFromFieldsWithTypes,
  decodeFromJSONField,
  extractType,
} from '../../_framework/reified'
import { FieldsWithTypes, composeSuiType, compressSuiType } from '../../_framework/util'
import { Bag } from '../bag/structs'
import { bcs } from '@mysten/bcs'
import { SuiClient, SuiParsedData } from '@mysten/sui.js/client'

/* ============================== Extension =============================== */

export function isExtension(type: string): boolean {
  type = compressSuiType(type)
  return type === '0x2::kiosk_extension::Extension'
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export interface ExtensionFields {
  storage: ToField<Bag>
  permissions: ToField<'u128'>
  isEnabled: ToField<'bool'>
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export class Extension {
  static readonly $typeName = '0x2::kiosk_extension::Extension'
  static readonly $numTypeParams = 0

  readonly $fullTypeName = null as unknown as '0x2::kiosk_extension::Extension'

  readonly $typeName = Extension.$typeName

  static get bcs() {
    return bcs.struct('Extension', {
      storage: Bag.bcs,
      permissions: bcs.u128(),
      is_enabled: bcs.bool(),
    })
  }

  readonly storage: ToField<Bag>
  readonly permissions: ToField<'u128'>
  readonly isEnabled: ToField<'bool'>

  private constructor(fields: ExtensionFields) {
    this.storage = fields.storage
    this.permissions = fields.permissions
    this.isEnabled = fields.isEnabled
  }

  static new(fields: ExtensionFields): Extension {
    return new Extension(fields)
  }

  static reified(): Reified<Extension> {
    return {
      typeName: Extension.$typeName,
      fullTypeName: composeSuiType(Extension.$typeName, ...[]) as '0x2::kiosk_extension::Extension',
      typeArgs: [],
      fromFields: (fields: Record<string, any>) => Extension.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => Extension.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => Extension.fromBcs(data),
      bcs: Extension.bcs,
      fromJSONField: (field: any) => Extension.fromJSONField(field),
      fetch: async (client: SuiClient, id: string) => Extension.fetch(client, id),
      kind: 'StructClassReified',
    }
  }

  static get r() {
    return Extension.reified()
  }

  static fromFields(fields: Record<string, any>): Extension {
    return Extension.new({
      storage: decodeFromFields(Bag.reified(), fields.storage),
      permissions: decodeFromFields('u128', fields.permissions),
      isEnabled: decodeFromFields('bool', fields.is_enabled),
    })
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): Extension {
    if (!isExtension(item.type)) {
      throw new Error('not a Extension type')
    }

    return Extension.new({
      storage: decodeFromFieldsWithTypes(Bag.reified(), item.fields.storage),
      permissions: decodeFromFieldsWithTypes('u128', item.fields.permissions),
      isEnabled: decodeFromFieldsWithTypes('bool', item.fields.is_enabled),
    })
  }

  static fromBcs(data: Uint8Array): Extension {
    return Extension.fromFields(Extension.bcs.parse(data))
  }

  toJSONField() {
    return {
      storage: this.storage.toJSONField(),
      permissions: this.permissions.toString(),
      isEnabled: this.isEnabled,
    }
  }

  toJSON() {
    return { $typeName: this.$typeName, ...this.toJSONField() }
  }

  static fromJSONField(field: any): Extension {
    return Extension.new({
      storage: decodeFromJSONField(Bag.reified(), field.storage),
      permissions: decodeFromJSONField('u128', field.permissions),
      isEnabled: decodeFromJSONField('bool', field.isEnabled),
    })
  }

  static fromJSON(json: Record<string, any>): Extension {
    if (json.$typeName !== Extension.$typeName) {
      throw new Error('not a WithTwoGenerics json object')
    }

    return Extension.fromJSONField(json)
  }

  static fromSuiParsedData(content: SuiParsedData): Extension {
    if (content.dataType !== 'moveObject') {
      throw new Error('not an object')
    }
    if (!isExtension(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a Extension object`)
    }
    return Extension.fromFieldsWithTypes(content)
  }

  static async fetch(client: SuiClient, id: string): Promise<Extension> {
    const res = await client.getObject({ id, options: { showContent: true } })
    if (res.error) {
      throw new Error(`error fetching Extension object at id ${id}: ${res.error.code}`)
    }
    if (res.data?.content?.dataType !== 'moveObject' || !isExtension(res.data.content.type)) {
      throw new Error(`object at id ${id} is not a Extension object`)
    }
    return Extension.fromFieldsWithTypes(res.data.content)
  }
}

/* ============================== ExtensionKey =============================== */

export function isExtensionKey(type: string): boolean {
  type = compressSuiType(type)
  return type.startsWith('0x2::kiosk_extension::ExtensionKey<')
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export interface ExtensionKeyFields<T0 extends PhantomTypeArgument> {
  dummyField: ToField<'bool'>
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export class ExtensionKey<T0 extends PhantomTypeArgument> {
  static readonly $typeName = '0x2::kiosk_extension::ExtensionKey'
  static readonly $numTypeParams = 1

  readonly $fullTypeName = null as unknown as `0x2::kiosk_extension::ExtensionKey<${ToTypeStr<T0>}>`

  readonly $typeName = ExtensionKey.$typeName

  static get bcs() {
    return bcs.struct('ExtensionKey', {
      dummy_field: bcs.bool(),
    })
  }

  readonly $typeArg: string

  readonly dummyField: ToField<'bool'>

  private constructor(typeArg: string, dummyField: ToField<'bool'>) {
    this.$typeArg = typeArg

    this.dummyField = dummyField
  }

  static new<T0 extends ReifiedPhantomTypeArgument>(
    typeArg: T0,
    dummyField: ToField<'bool'>
  ): ExtensionKey<ToPhantomTypeArgument<T0>> {
    return new ExtensionKey(extractType(typeArg), dummyField)
  }

  static reified<T0 extends ReifiedPhantomTypeArgument>(
    T0: T0
  ): Reified<ExtensionKey<ToPhantomTypeArgument<T0>>> {
    return {
      typeName: ExtensionKey.$typeName,
      fullTypeName: composeSuiType(
        ExtensionKey.$typeName,
        ...[extractType(T0)]
      ) as `0x2::kiosk_extension::ExtensionKey<${ToTypeStr<ToPhantomTypeArgument<T0>>}>`,
      typeArgs: [T0],
      fromFields: (fields: Record<string, any>) => ExtensionKey.fromFields(T0, fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => ExtensionKey.fromFieldsWithTypes(T0, item),
      fromBcs: (data: Uint8Array) => ExtensionKey.fromBcs(T0, data),
      bcs: ExtensionKey.bcs,
      fromJSONField: (field: any) => ExtensionKey.fromJSONField(T0, field),
      fetch: async (client: SuiClient, id: string) => ExtensionKey.fetch(client, T0, id),
      kind: 'StructClassReified',
    }
  }

  static get r() {
    return ExtensionKey.reified
  }

  static fromFields<T0 extends ReifiedPhantomTypeArgument>(
    typeArg: T0,
    fields: Record<string, any>
  ): ExtensionKey<ToPhantomTypeArgument<T0>> {
    return ExtensionKey.new(typeArg, decodeFromFields('bool', fields.dummy_field))
  }

  static fromFieldsWithTypes<T0 extends ReifiedPhantomTypeArgument>(
    typeArg: T0,
    item: FieldsWithTypes
  ): ExtensionKey<ToPhantomTypeArgument<T0>> {
    if (!isExtensionKey(item.type)) {
      throw new Error('not a ExtensionKey type')
    }
    assertFieldsWithTypesArgsMatch(item, [typeArg])

    return ExtensionKey.new(typeArg, decodeFromFieldsWithTypes('bool', item.fields.dummy_field))
  }

  static fromBcs<T0 extends ReifiedPhantomTypeArgument>(
    typeArg: T0,
    data: Uint8Array
  ): ExtensionKey<ToPhantomTypeArgument<T0>> {
    return ExtensionKey.fromFields(typeArg, ExtensionKey.bcs.parse(data))
  }

  toJSONField() {
    return {
      dummyField: this.dummyField,
    }
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArg: this.$typeArg, ...this.toJSONField() }
  }

  static fromJSONField<T0 extends ReifiedPhantomTypeArgument>(
    typeArg: T0,
    field: any
  ): ExtensionKey<ToPhantomTypeArgument<T0>> {
    return ExtensionKey.new(typeArg, decodeFromJSONField('bool', field.dummyField))
  }

  static fromJSON<T0 extends ReifiedPhantomTypeArgument>(
    typeArg: T0,
    json: Record<string, any>
  ): ExtensionKey<ToPhantomTypeArgument<T0>> {
    if (json.$typeName !== ExtensionKey.$typeName) {
      throw new Error('not a WithTwoGenerics json object')
    }
    assertReifiedTypeArgsMatch(
      composeSuiType(ExtensionKey.$typeName, extractType(typeArg)),
      [json.$typeArg],
      [typeArg]
    )

    return ExtensionKey.fromJSONField(typeArg, json)
  }

  static fromSuiParsedData<T0 extends ReifiedPhantomTypeArgument>(
    typeArg: T0,
    content: SuiParsedData
  ): ExtensionKey<ToPhantomTypeArgument<T0>> {
    if (content.dataType !== 'moveObject') {
      throw new Error('not an object')
    }
    if (!isExtensionKey(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a ExtensionKey object`)
    }
    return ExtensionKey.fromFieldsWithTypes(typeArg, content)
  }

  static async fetch<T0 extends ReifiedPhantomTypeArgument>(
    client: SuiClient,
    typeArg: T0,
    id: string
  ): Promise<ExtensionKey<ToPhantomTypeArgument<T0>>> {
    const res = await client.getObject({ id, options: { showContent: true } })
    if (res.error) {
      throw new Error(`error fetching ExtensionKey object at id ${id}: ${res.error.code}`)
    }
    if (res.data?.content?.dataType !== 'moveObject' || !isExtensionKey(res.data.content.type)) {
      throw new Error(`object at id ${id} is not a ExtensionKey object`)
    }
    return ExtensionKey.fromFieldsWithTypes(typeArg, res.data.content)
  }
}

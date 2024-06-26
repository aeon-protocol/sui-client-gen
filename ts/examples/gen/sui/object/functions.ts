import { PUBLISHED_AT } from '..'
import { GenericArg, ObjectArg, generic, obj, pure } from '../../_framework/util'
import { TransactionArgument, TransactionBlock } from '@mysten/sui.js/transactions'

export function id(txb: TransactionBlock, typeArg: string, obj: GenericArg) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::object::id`,
    typeArguments: [typeArg],
    arguments: [generic(txb, `${typeArg}`, obj)],
  })
}

export function new_(txb: TransactionBlock) {
  return txb.moveCall({ target: `${PUBLISHED_AT}::object::new`, arguments: [] })
}

export function authenticatorState(txb: TransactionBlock) {
  return txb.moveCall({ target: `${PUBLISHED_AT}::object::authenticator_state`, arguments: [] })
}

export function borrowId(txb: TransactionBlock, typeArg: string, obj: GenericArg) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::object::borrow_id`,
    typeArguments: [typeArg],
    arguments: [generic(txb, `${typeArg}`, obj)],
  })
}

export function borrowUid(txb: TransactionBlock, typeArg: string, obj: GenericArg) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::object::borrow_uid`,
    typeArguments: [typeArg],
    arguments: [generic(txb, `${typeArg}`, obj)],
  })
}

export function clock(txb: TransactionBlock) {
  return txb.moveCall({ target: `${PUBLISHED_AT}::object::clock`, arguments: [] })
}

export function delete_(txb: TransactionBlock, id: ObjectArg) {
  return txb.moveCall({ target: `${PUBLISHED_AT}::object::delete`, arguments: [obj(txb, id)] })
}

export function deleteImpl(txb: TransactionBlock, id: string | TransactionArgument) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::object::delete_impl`,
    arguments: [pure(txb, id, `address`)],
  })
}

export function idAddress(txb: TransactionBlock, typeArg: string, obj: GenericArg) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::object::id_address`,
    typeArguments: [typeArg],
    arguments: [generic(txb, `${typeArg}`, obj)],
  })
}

export function idBytes(txb: TransactionBlock, typeArg: string, obj: GenericArg) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::object::id_bytes`,
    typeArguments: [typeArg],
    arguments: [generic(txb, `${typeArg}`, obj)],
  })
}

export function idFromAddress(txb: TransactionBlock, bytes: string | TransactionArgument) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::object::id_from_address`,
    arguments: [pure(txb, bytes, `address`)],
  })
}

export function idFromBytes(
  txb: TransactionBlock,
  bytes: Array<number | TransactionArgument> | TransactionArgument
) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::object::id_from_bytes`,
    arguments: [pure(txb, bytes, `vector<u8>`)],
  })
}

export function idToAddress(txb: TransactionBlock, id: string | TransactionArgument) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::object::id_to_address`,
    arguments: [pure(txb, id, `0x2::object::ID`)],
  })
}

export function idToBytes(txb: TransactionBlock, id: string | TransactionArgument) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::object::id_to_bytes`,
    arguments: [pure(txb, id, `0x2::object::ID`)],
  })
}

export function newUidFromHash(txb: TransactionBlock, bytes: string | TransactionArgument) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::object::new_uid_from_hash`,
    arguments: [pure(txb, bytes, `address`)],
  })
}

export function randomnessState(txb: TransactionBlock) {
  return txb.moveCall({ target: `${PUBLISHED_AT}::object::randomness_state`, arguments: [] })
}

export function recordNewUid(txb: TransactionBlock, id: string | TransactionArgument) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::object::record_new_uid`,
    arguments: [pure(txb, id, `address`)],
  })
}

export function suiDenyListObjectId(txb: TransactionBlock) {
  return txb.moveCall({ target: `${PUBLISHED_AT}::object::sui_deny_list_object_id`, arguments: [] })
}

export function suiSystemState(txb: TransactionBlock) {
  return txb.moveCall({ target: `${PUBLISHED_AT}::object::sui_system_state`, arguments: [] })
}

export function uidAsInner(txb: TransactionBlock, uid: ObjectArg) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::object::uid_as_inner`,
    arguments: [obj(txb, uid)],
  })
}

export function uidToAddress(txb: TransactionBlock, uid: ObjectArg) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::object::uid_to_address`,
    arguments: [obj(txb, uid)],
  })
}

export function uidToBytes(txb: TransactionBlock, uid: ObjectArg) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::object::uid_to_bytes`,
    arguments: [obj(txb, uid)],
  })
}

export function uidToInner(txb: TransactionBlock, uid: ObjectArg) {
  return txb.moveCall({
    target: `${PUBLISHED_AT}::object::uid_to_inner`,
    arguments: [obj(txb, uid)],
  })
}

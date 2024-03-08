import { typeName } from ".";

export const isNameValid = (name: typeName) => name.firstName !== "" && name.lastName !== "";
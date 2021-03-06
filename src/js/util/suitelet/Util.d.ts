import {Record} from 'N/record';

export type Util {
  function merge(args: object): object;
  function selectKeys(input: object, keys: string[]): object;
  function stripEmpties(input: object): object;
  function truncateTo(str: any, length: number): string;
  function getAllFields(record: Record): object;
  function getCustomListIdByName(listScriptID: string, listName: string): string;
}

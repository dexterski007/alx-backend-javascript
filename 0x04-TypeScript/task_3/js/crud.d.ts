import {RowID, rowElement} from './interface';

export function insertRow(row: RowElement): number;
export function deleteRow(rowId: RowID): void;
export function updateRow(rowId: RowID, rowElement:RowElement): number;

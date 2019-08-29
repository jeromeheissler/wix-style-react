import { layoutSymbols } from '../symbols';
import {
  layoutComponentsNames as componentsNames,
  sharedComponentsNames,
} from '../components';

export const layoutSymbolsToComponents = {
  [layoutSymbols.pageLayout]: [
    componentsNames.Page,
    componentsNames.PageHeader,
    componentsNames.Grid,
    componentsNames.Layout,
    componentsNames.Card,
    sharedComponentsNames.EmptyState,
  ],
  [layoutSymbols.cardLayout]: [
    componentsNames.Card,
    componentsNames.CardHeader,
    componentsNames.CardSubheader,
    componentsNames.Grid,
    sharedComponentsNames.EmptyState,
  ],
  [layoutSymbols.tableLayout]: [
    componentsNames.Table,
    componentsNames.TableActionCell,
    componentsNames.TableToolbar,
  ],
};

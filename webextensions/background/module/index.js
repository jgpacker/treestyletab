import {
  refreshContextMenuItems,
  contextMenuClickListener,
} from './context-menu.js';
import { gMetricsData } from './metrics.js';

// Set to the global to make compatibility with other classic sources.
window.refreshContextMenuItems = refreshContextMenuItems;
window.contextMenuClickListener = contextMenuClickListener;
window.gMetricsData = gMetricsData;

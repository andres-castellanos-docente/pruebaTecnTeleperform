export interface MenuItem {
  label?: string;
  icon?: string;
  command?: (event?: any) => void;
  url?: string;
  routerLink?: any;
  queryParams?: {
    [k: string]: any;
  };
  items?: MenuItem[] | MenuItem[][];
  expanded?: boolean;
  disabled?: boolean;
  visible?: boolean;
  target?: string;
  routerLinkActiveOptions?: any;
  badge?: string;
  badgeStyleClass?: string;
  title?: string;
  id?: string;
}

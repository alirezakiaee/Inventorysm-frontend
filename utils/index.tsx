import {
  Bell,
  CircleUser,
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  Search,
  Settings,
  ShoppingCart,
  Users,
  Folder
} from "lucide-react"

export const primaryNavItems = [
    {
      icon: <Home className="h-4 w-4" />,
      name: 'Dashboard',
      link:  '/loggedin'
    },
    {
      icon: <Package className="h-4 w-4" />,
      name: 'AI Analytics',
      link:  '/loggedin/ai'
    },

    {
      icon: <Users className="h-4 w-4" />,
      name: 'Customers',
      link:  '/loggedin/customers'
    },
    {
      icon: <LineChart className="h-4 w-4" />,
      name: 'Reports',
      link:  ''
    },
    {
      icon: <Settings className="h-4 w-4" />,
      name: 'Settings',
      link:  '/loggedin/settings',
      subMenu: [
        {
          icon: <Home className="h-4 w-4" />,
          name: 'Companies',
          link: '/loggedin/settings/companies',
        },
        {
          icon: <Folder className="h-4 w-4" />,
          name: 'Product Categories',
          link: '/loggedin/settings/product-categories',
        }
      ]
    },
  ]
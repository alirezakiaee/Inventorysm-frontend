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
  Folder,
  Factory,
  TextSelect,
  MapPin,
  Container
} from "lucide-react"

export const primaryNavItems = [
    {
      icon: <Home className="h-4 w-4" />,
      name: 'Dashboard',
      link:  '/loggedin'
    },
    {
      icon: <TextSelect className="h-4 w-4" />,
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
          icon: <Factory className="h-4 w-4" />,
          name: 'Companies',
          link: '/loggedin/settings/companies',
        },
        {
          icon: <MapPin className="h-4 w-4" />,
          name: 'Company locations',
          link: '/loggedin/settings/companies',
        },
        {
          icon: <Container className="h-4 w-4" />,
          name: 'Suppliers',
          link: '/loggedin/settings/companies',
        },
        {
          icon: <Package className="h-4 w-4" />,
          name: 'Products',
          link: '/loggedin/settings/product-categories',
        }
      ]
    },
  ]
import {
  Bell,
  CircleUser,
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  Search,
  ShoppingCart,
  Users,
} from "lucide-react"

export const primaryNavItems = [
    {
      icon: <Home className="h-4 w-4" />,
      name: 'Dashboard',
      link:  '/loggedin'
    },
    {
      icon: <Package className="h-4 w-4" />,
      name: 'Companies',
      link:  '/loggedin/companies'
    },
    {
      icon: <ShoppingCart className="h-4 w-4" />,
      name: 'Orders',
      link:  '/loggedin/orders'
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
    }
  ]
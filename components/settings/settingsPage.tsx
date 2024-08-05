"use client";
import { useState } from "react";
import Link from "next/link";
import { CircleUser, Menu, Package2, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import Image from "next/image";
import { File, ListFilter, MoreHorizontal, PlusCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import CompanyList from "../companies/company-list";
import ProductCategories from "../productCategories/product-categories"; // Make sure to import the component for Product Categories
import { primaryNavItems } from "@/utils";

export default function UserSettings() {
  const [selectedSubMenu, setSelectedSubMenu] = useState('Companies');
  const settingsItem = primaryNavItems.find(item => item.name === 'Settings');

  const renderContent = () => {
    switch (selectedSubMenu) {
      case 'Companies':
        return <CompanyList />;
      case 'Product Categories':
        return <ProductCategories />;
      default:
        return <div>Please select a setting from the menu.</div>;
    }
  };

  return (
    <div>
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
        <div className="grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
          <nav
            className="grid gap-4 text-sm text-muted-foreground"
            x-chunk="dashboard-04-chunk-0"
          >
            {settingsItem?.subMenu && (
              <div>
                {settingsItem.subMenu.map((subItem, subIdx) => (
                  <div
                    key={subIdx}
                    onClick={() => setSelectedSubMenu(subItem.name)}
                    className={`mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 cursor-pointer text-muted-foreground hover:text-foreground ${
                      selectedSubMenu === subItem.name ? "text-foreground" : ""
                    }`}
                  >
                    <span className="h-5 w-5">{subItem.icon}</span>
                    <span>{subItem.name}</span>
                  </div>
                ))}
              </div>
            )}
          </nav>
          <div className="w-full">
            {renderContent()}
          </div>
        </div>
      </main>
    </div>
  );
}

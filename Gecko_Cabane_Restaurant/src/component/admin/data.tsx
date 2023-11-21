import  {ArrowBigUp, ChefHat, Disc, Gem, GitCommitHorizontal, Image, Laptop2, Martini, Smartphone}  from "lucide-react";
import { ItemSideBarType } from "./sidebar";



export const ItemsListSidebar : ItemSideBarType[] = [
    {
        name : "Laptop Menu",
        icon : <Laptop2 className="stroke-1 w-4 h-4 "/>,
        sub : 
            [
                {
                    name : 'Drink Menu',
                    icon : <Martini className="stroke-1 w-4 h-4 "/>,
                    link : 'drink laptop',
                    api : 'laptopDrink'
                },
                {
                    name : 'Normal Menu',
                    icon : <ChefHat className="stroke-1 w-4 h-4 "/>,
                    link : 'menu',
                    api : 'laptopMenu'
                },
                {
                    name : 'Special Menu',
                    icon : <Gem className="stroke-1 w-4 h-4 "/>,
                    link : 'special laptop',
                    api : 'laptopSpecial'
                },
            ]
    },
    {
        name : "Phone Menu",
        icon : <Smartphone className="stroke-1 w-4 h-4 "/>,
        sub : 
            [
                {
                    name : 'Drink Menu',
                    icon : <Martini className="stroke-1 w-4 h-4 "/>,
                    link : 'drink phone',
                    api : 'phoneDrink'
                },
                {
                    name : 'Normal Menu',
                    icon : <ChefHat className="stroke-1 w-4 h-4 "/>,
                    link : 'menu phone',
                    api : 'phoneMenu'
                },
                {
                    name : 'Special Menu',
                    icon : <Gem className="stroke-1 w-4 h-4 "/>,
                    link : 'special phone',
                    api : 'phoneSpecial'
                },
            ]

    },
    {
        name : "Assets",
        icon : <Image className="stroke-1 w-4 h-4 "/>,
        sub : 
            [
                {
                    name : 'Large Assets',
                    icon : <ArrowBigUp className="stroke-1 w-4 h-4 "/>,
                    link : 'large asset',
                    api : 'largeAssets'
                },
                {
                    name : 'Medium Assets',
                    icon : <GitCommitHorizontal className="stroke-1 w-4 h-4 "/>,
                    link : 'medium asset',
                    api : 'mediumAssets'
                },
                {
                    name : 'Small Assets',
                    icon : <Disc className="stroke-1 w-4 h-4 "/>,
                    link : 'short asset',
                    api : 'smallAssets'
                },
            ]
    }
]
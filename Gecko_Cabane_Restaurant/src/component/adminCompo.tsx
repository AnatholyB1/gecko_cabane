import { cn } from "@/lib/utils";
import Sidebar from "./admin/sidebar";
import { ItemsListSidebar } from "./admin/data";
import ItemSelection from "./admin/item-selection";

interface AdminComponentProps extends React.HTMLAttributes<HTMLDivElement> {};

function AdminComponent({...props} : AdminComponentProps ) {
    return ( 
        <div className={cn( props.className, 'flex flex-row bg-admin w-screen  min-h-[500px] shadow-md rounded-md')} >
            <Sidebar items={ItemsListSidebar} >
            </Sidebar>
            <ItemSelection className="flex-grow" ></ItemSelection>
        </div>
     );
}

export default AdminComponent;
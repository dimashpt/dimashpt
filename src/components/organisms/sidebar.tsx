import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../atoms';
import { SidebarMenu, SidebarMenuProps } from '../molecules';

export type SidebarProps = {
  items: {
    id: string;
    label: string;
    items: SidebarMenuProps[];
  }[];
};

export const Sidebar: React.FC<SidebarProps> = async ({
  items,
}: SidebarProps) => {
  return (
    <aside className="border-r hidden md:flex">
      <div id="accordion" className="flex flex-col w-full">
        <Accordion type="multiple" defaultValue={items.map((item) => item.id)}>
          {items.map(({ id, label, items }) => (
            <AccordionItem key={id} value={id} className="border-none">
              <AccordionTrigger className="px-5 py-2.5 border-b text-base font-bold hover:no-underline">
                {label}
              </AccordionTrigger>
              <AccordionContent className="py-3">
                {items.map((item) => (
                  <SidebarMenu key={item.label} {...item} />
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </aside>
  );
};

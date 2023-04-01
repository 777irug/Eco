import { PlusCircleIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';
import { IContentMenu } from '../header/IMenu';
import { SubNav } from '../header/SubNav';

const items = [
  {
    name: "Menu1",
    path: "/menu",
    children: [
      {
        name: "menudropdown1",
        icon: <PlusCircleIcon   />,
        path: "/menu"
      },
      {
        name: "menudropdown1",
        icon: <PlusCircleIcon   />,
        path: "/menu"
      },
      {
        name: "menudropdown3",
        icon: <PlusCircleIcon   />,
        path: "/menu"
      }
    ]
  },
  {
    name: "Menu2",
    path: "/menu",
    children: []
  },
  {
    name: "Menu3",
    path: "/menu",
    children: [
      {
        name: "menudropdown1",
        icon: <PlusCircleIcon/>,
        path: "/menu"
      },
      {
        name: "menudropdown1",
        icon: <PlusCircleIcon   />,
        path: "/menu"
      },
      {
        name: "menudropdown3",
        icon: <PlusCircleIcon   />,
        path: "/menu"
      }
    ]
  },
  {
    name: "Menu4",
    path: "/menu",
    children: []
  }
]

export const Navbar = () => {

  const [contentMenu, setContentMenu] = useState<IContentMenu[] | null>([]);

  useEffect(() => {
    getContentMenu();
  }, []);

  const getContentMenu = () => {
    setContentMenu(items);
  };

  return (
    <div className="">
      <ul className='flex flex-col gap-4' style={{display:"inline-flex"}}>
        {contentMenu && contentMenu.length > 0 &&
          <>
            {contentMenu.map((menu: IContentMenu, index) => (
              <SubNav props={menu} />
            ))}
          </>
        }
      </ul>
    </div>
  );
};
